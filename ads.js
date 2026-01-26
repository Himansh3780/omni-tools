/* --- AD CONFIGURATION MASTER FILE --- */

const adConfig = {
    // 1. MASTER SWITCH: Set to 'false' to hide ALL ads instantly.
    enabled: true, 

    // 2. HERO CAROUSEL (Big Slider at the Top)
    hero: [
        {
            tag: "FEATURED",
            title: "Deploy Apps <br>Fast.",
            desc: "Scale from zero to billion users in seconds.",
            btnText: "Start Free Trial",
            btnLink: "https://google.com", 
            bgImage: "https://placehold.co/1200x400/0f172a/FFFFFF?text=Featured+Ad",
            accent: "#3b82f6" // Blue
        },
        {
            tag: "AI POWERED",
            title: "Write Code <br>With AI.",
            desc: "Your intelligent pair programmer.",
            btnText: "Get Plugin",
            btnLink: "#",
            bgImage: "https://placehold.co/1200x400/312e81/FFFFFF?text=AI+Ad",
            accent: "#a855f7" // Purple
        }
    ],

    // 3. SIDEBAR AD (Small box in the left menu)
    sidebar: {
        image: "https://placehold.co/200x200/1e293b/FFFFFF?text=Sidebar+Ad",
        link: "https://example.com/sidebar-offer"
    },

    // 4. NATIVE ADS (In-Feed Cards)
    // These appear inside the tool grid every 4 items.
    // 'category' options: 'all', 'dev', 'business', 'social', 'text', 'image', 'ai', 'student'
    native: [
        {
            category: "all", // SHOWS EVERYWHERE
            title: "Launch Your Startup",
            desc: "Get $5,000 in cloud credits and deploy instantly.",
            cta: "Apply Now",
            link: "https://example.com/credits",
            icon: "fa-rocket"
        },
        {
            category: "dev", // ONLY SHOWS IN 'DEVELOPER' TAB
            title: "Best VS Code Theme",
            desc: "Download the #1 rated dark theme for coding.",
            cta: "Install",
            link: "#",
            icon: "fa-code"
        },
        {
            category: "social", // ONLY SHOWS IN 'SOCIAL' TAB
            title: "Grow Your TikTok",
            desc: "Get 10k followers in 30 days with this guide.",
            cta: "Get Guide",
            link: "#",
            icon: "fa-tiktok"
        },
        {
            category: "business", // ONLY SHOWS IN 'BUSINESS' TAB
            title: "LLC Formation",
            desc: "Register your company in 5 minutes.",
            cta: "Start LLC",
            link: "#",
            icon: "fa-briefcase"
        }
    ]
};
