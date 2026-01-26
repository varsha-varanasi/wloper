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

        // Note: Using verified domain after DNS update
        const { data, error } = await resend.emails.send({
            from: 'WLOPER Contact <contact@wloper.com>',
            to: recipients,
            subject: `New Lead: ${subject || 'No Subject'}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px; border: 1px solid #eee;">
                    <h1 style="color: #000; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h1>
                    <div style="background-color: #fff; padding: 20px; border-radius: 8px;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                            <p><strong>Message:</strong></p>
                            <p style="white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                    <div style="margin-top: 30px; font-size: 12px; color: #666;">
                        This message was sent from the WLOPER contact form.
                    </div>
                </div>
            `,
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
                    from: 'WLOPER Contact <contact@wloper.com>',
                    to: recipients[0],
                    subject: `New Lead (Fallback): ${subject || 'No Subject'}`,
                    html: `
                        <div style="font-family: sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 10px; border: 1px solid #eee;">
                            <h1 style="color: #000; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission (Fallback)</h1>
                            <div style="background-color: #fff; padding: 20px; border-radius: 8px;">
                                <p><strong>Name:</strong> ${name}</p>
                                <p><strong>Email:</strong> ${email}</p>
                                <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
                                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                                    <p><strong>Message:</strong></p>
                                    <p style="white-space: pre-wrap;">${message}</p>
                                </div>
                            </div>
                            <div style="margin-top: 30px; font-size: 12px; color: #666;">
                                This message was sent from the WLOPER contact form.
                            </div>
                        </div>
                    `,
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
