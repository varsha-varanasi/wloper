import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/ContactFormEmail';

// This is a placeholder. You should add your RESEND_API_KEY to your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'WLOPER Contact Form <onboarding@resend.dev>', // Resend default for unverified domains
            to: ['wlopersinc@gmail.com', 'sales@wloper.com'],
            subject: `New Contact: ${subject || 'No Subject'}`,
            react: ContactFormEmail({ name, email, subject, message }),
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
