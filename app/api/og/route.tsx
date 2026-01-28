import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const title = searchParams.get('title') || 'WLOPER SYSTEMS';
        const category = searchParams.get('category') || 'ADVANCED ENGINEERING';
        const author = searchParams.get('author') || 'WLOPER Core';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        backgroundColor: '#050505',
                        padding: '80px',
                        fontFamily: 'sans-serif',
                        position: 'relative',
                    }}
                >
                    {/* Background Accents */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-100px',
                            right: '-100px',
                            width: '400px',
                            height: '400px',
                            backgroundColor: '#CAF648',
                            opacity: '0.05',
                            borderRadius: '200px',
                            filter: 'blur(100px)',
                        }}
                    />

                    {/* Meta Info */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '40px',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'rgba(202, 246, 72, 0.1)',
                                border: '1px solid rgba(202, 246, 72, 0.3)',
                                padding: '8px 16px',
                                borderRadius: '100px',
                                display: 'flex',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    color: '#CAF648',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                }}
                            >
                                {category}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <div
                        style={{
                            fontSize: '84px',
                            fontWeight: '900',
                            color: 'white',
                            lineHeight: '1.1',
                            letterSpacing: '-0.04em',
                            marginBottom: '60px',
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '1000px',
                        }}
                    >
                        {title}
                    </div>

                    {/* Footer Container */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginTop: 'auto',
                        }}
                    >
                        {/* Author Info */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '30px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '20px',
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    color: '#CAF648',
                                }}
                            >
                                {author[0]}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>{author}</span>
                                <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Senior System Architect</span>
                            </div>
                        </div>

                        {/* Branding */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'white', fontSize: '32px', fontWeight: '900', letterSpacing: '-0.02em' }}>
                                WLOPER<span style={{ color: '#CAF648' }}>.</span>
                            </span>
                        </div>
                    </div>

                    {/* Bottom Border Accent */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '80px',
                            right: '80px',
                            height: '4px',
                            backgroundColor: '#CAF648',
                            opacity: '0.3',
                        }}
                    />
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
