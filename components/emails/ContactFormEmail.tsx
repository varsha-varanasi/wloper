import * as React from 'react';

interface ContactFormEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function ContactFormEmail({
    name,
    email,
    subject,
    message,
}: ContactFormEmailProps) {
    return (
        <div style={{
            fontFamily: 'sans-serif',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            border: '1px solid #eee'
        }}>
            <h1 style={{ color: '#000', fontSize: '24px', marginBottom: '20px' }}>New Contact Form Submission</h1>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Subject:</strong> {subject}</p>
                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
                    <p><strong>Message:</strong></p>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
                </div>
            </div>
            <div style={{ marginTop: '30px', fontSize: '12px', color: '#666' }}>
                This message was sent from the WLOPER contact form.
            </div>
        </div>
    );
}
