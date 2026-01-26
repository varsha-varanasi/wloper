import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
import { ContactFormEmail } from '@/components/emails/ContactFormEmail';

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error('RESEND_API_KEY is missing from environment variables');
            return NextResponse.json({ error: 'System configuration error: API Key missing' }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const recipients = ['wlopersinc@gmail.com', 'sales@wloper.com'];

        // Note: If using onboarding@resend.dev, you can only send to the email 
        // address associated with your Resend account.
        const { data, error } = await resend.emails.send({
            from: 'WLOPER Contact <onboarding@resend.dev>',
            to: recipients,
            subject: `New Lead: ${subject || 'No Subject'}`,
            react: React.createElement(ContactFormEmail, { name, email, subject, message }),
        });

        if (error) {
            console.error('Resend Error Protocol:', {
                name: error.name,
                message: error.message,
                status: (error as any).status
            });

            // Specific handling for domain/onboarding restrictions
            if (error.name === 'validation_error' || error.message.includes('onboarding@resend.dev')) {
                return NextResponse.json(
                    { error: 'System restricted: Please verify your domain in Resend or check your recipient permissions.' },
                    { status: 403 }
                );
            }

            // If it fails with multiple recipients, try sending only to the primary
            if (recipients.length > 1) {
                console.log('Attempting fallback to primary recipient...');
                const fallback = await resend.emails.send({
                    from: 'WLOPER Contact <onboarding@resend.dev>',
                    to: recipients[0],
                    subject: `New Lead (Fallback): ${subject || 'No Subject'}`,
                    react: React.createElement(ContactFormEmail, { name, email, subject, message }),
                });

                if (!fallback.error) {
                    console.log('Fallback successful.');
                    return NextResponse.json({ success: true, data: fallback.data });
                }
            }
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('API System Error:', error);
        return NextResponse.json({
            error: error.message || 'Intruder detected in API layer. Execution halted.'
        }, { status: 500 });
    }
}
