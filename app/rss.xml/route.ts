import { blogPosts } from '@/data/blogPosts';

export async function GET() {
    const siteUrl = 'https://wloper.com';

    // Helper function to parse dates like "Jan 26, 2026"
    const parseDate = (dateStr: string): Date => {
        try {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) {
                return new Date(); // Fallback to current date
            }
            return date;
        } catch {
            return new Date();
        }
    };

    // Sort posts by date, descending (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) =>
        parseDate(b.date).getTime() - parseDate(a.date).getTime()
    );

    const items = sortedPosts.slice(0, 50).map((post) => {
        const url = `${siteUrl}/blog/${post.slug}`;
        const pubDate = parseDate(post.date).toUTCString();

        // Use post image or a default one - prefer local images
        let imageUrl = `${siteUrl}/images/hero-bg.png`;
        if (post.image) {
            imageUrl = post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`;
        }

        // Clean description for XML
        const cleanDescription = post.excerpt.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        return `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${url}</link>
            <guid isPermaLink="true">${url}</guid>
            <pubDate>${pubDate}</pubDate>
            <description><![CDATA[${cleanDescription}]]></description>
            ${post.author ? `<author>info@wloper.com (${post.author})</author>` : ''}
            <enclosure url="${imageUrl}" length="0" type="image/jpeg" />
        </item>`;
    }).join('');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Wloper Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Technical breakdowns and strategic insights from the frontier of AI and Web Engineering.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
        <url>${siteUrl}/images/hero-bg.png</url>
        <title>Wloper Blog</title>
        <link>${siteUrl}/blog</link>
    </image>
    ${items}
</channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'text/xml',
            'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
    });
}
