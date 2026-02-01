// =========================================
// GOOGLE ANALYTICS (GA4) INJECTION
// =========================================
(function() {
    // YOUR TRACKING ID
    const GA_ID = 'G-1MQNF15L2X'; 

    // 1. Load the Google Script asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    // 2. Initialize Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_ID);
})();

// =========================================
// PWA & SEO HEAD INJECTION (New Feature)
// =========================================
(function() {
    // 1. Add Manifest for PWA (App Install)
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = 'manifest.json';
    document.head.appendChild(link);

    // 2. Add Mobile Theme Color
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#020617';
    document.head.appendChild(meta);
})();

const toolsDB = [
    // =========================================
    // CATEGORY 1: DEVELOPER TOOLS
    // =========================================
    { "name": "Strong Password Gen", "url": "password-generator", "cat": "dev", "icon": "fa-key", "desc": "Create unhackable, secure passwords.", "tag": "SECURE" },
    { "name": "Meta Tag Analyzer", "url": "meta-analyzer", "cat": "dev", "icon": "fa-magnifying-glass-chart", "desc": "Analyze SEO tags for higher ranking.", "tag": "SEO" },
    { "name": "JSON Formatter & Validator", "url": "json-formatter", "cat": "dev", "icon": "fa-code", "desc": "Beautify and debug JSON code instantly.", "tag": "HOT" },
    { "name": "UUID/GUID Generator", "url": "uuid-generator", "cat": "dev", "icon": "fa-fingerprint", "desc": "Generate random unique identifiers.", "tag": "PRO" },
    { "name": "Free QR Code Generator", "url": "qr-code", "cat": "dev", "icon": "fa-qrcode", "desc": "Create permanent QR codes for free.", "tag": "FREE" },
    { "name": "Schema Markup Gen", "url": "schema-gen", "cat": "dev", "icon": "fa-code", "desc": "Create JSON-LD structured data.", "tag": "DEV" },
    { "name": "XML Sitemap Creator", "url": "sitemap-gen", "cat": "dev", "icon": "fa-sitemap", "desc": "Generate sitemaps for Google SEO.", "tag": "" },
    { "name": "Cron Job Schedule Gen", "url": "cron-job", "cat": "dev", "icon": "fa-clock", "desc": "Create Linux cron schedules easily.", "tag": "DEV" },
    { "name": "JSON to CSV Converter", "url": "json-csv", "cat": "dev", "icon": "fa-file-csv", "desc": "Convert data files instantly.", "tag": "HOT" },
    { "name": "CSV to JSON Converter", "url": "csv-json", "cat": "dev", "icon": "fa-file-code", "desc": "Convert spreadsheet data to code.", "tag": "" },
    { "name": "HTML Code Minifier", "url": "html-minify", "cat": "dev", "icon": "fa-compress", "desc": "Compress HTML to boost speed.", "tag": "SPEED" },
    { "name": "CSS Beautifier / Minifier", "url": "css-beautify", "cat": "dev", "icon": "fa-wand-magic", "desc": "Clean up messy CSS code.", "tag": "HOT" },
    { "name": "SQL Query Formatter", "url": "sql-format", "cat": "dev", "icon": "fa-database", "desc": "Format SQL for better readability.", "tag": "" },
    { "name": "SEO Meta Tag Generator", "url": "meta-tag", "cat": "dev", "icon": "fa-magnifying-glass", "desc": "Generate title & description tags.", "tag": "SEO" },
    { "name": "Open Graph Generator", "url": "open-graph", "cat": "dev", "icon": "fa-share-nodes", "desc": "Create Facebook/Twitter preview cards.", "tag": "SOCIAL" },
    { "name": "Robots.txt Generator", "url": "robots-gen", "cat": "dev", "icon": "fa-robot", "desc": "Control Google bot crawling.", "tag": "" },
    { "name": ".htaccess File Gen", "url": "htaccess", "cat": "dev", "icon": "fa-server", "desc": "Create server configuration rules.", "tag": "PRO" },
    { "name": "My User Agent Info", "url": "user-agent", "cat": "dev", "icon": "fa-fingerprint", "desc": "Identify your browser details.", "tag": "" },
    { "name": "What Is My IP Address", "url": "my-ip", "cat": "dev", "icon": "fa-laptop-code", "desc": "Check your public IP instantly.", "tag": "HOT" },
    { "name": "DNS Record Lookup", "url": "dns-lookup", "cat": "dev", "icon": "fa-network-wired", "desc": "Check domain nameserver details.", "tag": "" },
    { "name": "Screen Resolution Test", "url": "screen-res", "cat": "dev", "icon": "fa-display", "desc": "Check viewport size for design.", "tag": "PRO" },
    { "name": "JS Keycode Event Info", "url": "keycode", "cat": "dev", "icon": "fa-keyboard", "desc": "Find JavaScript key codes.", "tag": "DEV" },
    { "name": "Base64 Encoder/Decoder", "url": "base64-tool", "cat": "dev", "icon": "fa-file-shield", "desc": "Convert text & images to Base64.", "tag": "HOT" },
    { "name": "URL Encoder/Decoder", "url": "url-encode", "cat": "dev", "icon": "fa-link", "desc": "Format URLs for the web.", "tag": "" },
    { "name": "UUID Generator", "url": "uuid-gen", "cat": "dev", "icon": "fa-fingerprint", "desc": "Generate Unique IDs.", "tag": "PRO" },

    // =========================================
    // CATEGORY 2: BUSINESS TOOLS
    // =========================================
    { "name": "Sales Tax Calculator", "url": "sales-tax", "cat": "business", "icon": "fa-receipt", "desc": "Calculate tax & final totals.", "tag": "FINANCE" },
    { "name": "Commission Calculator", "url": "commission-calc", "cat": "business", "icon": "fa-hand-holding-dollar", "desc": "Calculate sales commissions.", "tag": "MONEY" },
    { "name": "GST / VAT Calculator", "url": "gst-calc", "cat": "business", "icon": "fa-calculator", "desc": "Add or remove tax instantly.", "tag": "" },
    { "name": "Invoice PDF Generator", "url": "invoice-generator", "cat": "business", "icon": "fa-file-invoice-dollar", "desc": "Create professional invoices free.", "tag": "PRO" },
    { "name": "Mortgage/Loan Calc", "url": "loan-calculator", "cat": "business", "icon": "fa-sack-dollar", "desc": "Estimate monthly payments.", "tag": "" },
    { "name": "PayPal Fee Calculator", "url": "paypal-fee", "cat": "business", "icon": "fa-paypal", "desc": "Check transfer fees & profits.", "tag": "" },
    { "name": "Purchase Order (PO) Gen", "url": "po-generator", "cat": "business", "icon": "fa-file-signature", "desc": "Create B2B Purchase Orders.", "tag": "" },
    { "name": "Privacy Policy Generator", "url": "privacy-policy", "cat": "business", "icon": "fa-shield-halved", "desc": "Create legal policies for websites.", "tag": "LEGAL" },
    { "name": "Profit Margin Calculator", "url": "profit-calculator", "cat": "business", "icon": "fa-chart-line", "desc": "Calculate product markup & margin.", "tag": "" },
    { "name": "Rent Receipt Maker", "url": "receipt-maker", "cat": "business", "icon": "fa-receipt", "desc": "Generate rent & cash receipts.", "tag": "FREE" },
    { "name": "Rent vs. Buy Calculator", "url": "rent-vs-buy", "cat": "business", "icon": "fa-house-chimney", "desc": "Should you rent or buy a home?", "tag": "HOT" },
    { "name": "Resignation Letter Writer", "url": "resignation-letter", "cat": "business", "icon": "fa-envelope-open-text", "desc": "Write a professional resignation.", "tag": "" },
    { "name": "Hourly to Salary Calc", "url": "salary-converter", "cat": "business", "icon": "fa-money-bill-wave", "desc": "Convert hourly wage to yearly.", "tag": "NEW" },
    { "name": "Inflation Calculator", "url": "inflation-calc", "cat": "business", "icon": "fa-arrow-trend-up", "desc": "Check historical purchasing power.", "tag": "HOT" },
    { "name": "Take-Home Pay Calc", "url": "paycheck-calc", "cat": "business", "icon": "fa-money-check-dollar", "desc": "Estimate net salary after tax.", "tag": "HOT" },
    { "name": "AdSense CPM Calculator", "url": "cpm-calc", "cat": "business", "icon": "fa-chart-pie", "desc": "Estimate ad revenue & traffic.", "tag": "PRO" },

    // =========================================
    // CATEGORY 3: TEXT TOOLS
    // =========================================
    { "name": "Text Cleaner / Formatter", "url": "text-cleaner", "cat": "text", "icon": "fa-broom", "desc": "Remove spaces, duplicates & HTML.", "tag": "HOT" },
    { "name": "URL Slug Generator", "url": "slug-generator", "cat": "text", "icon": "fa-link", "desc": "Create SEO-friendly URL links.", "tag": "SEO" },
    { "name": "Fancy Font Generator", "url": "fancy-text", "cat": "text", "icon": "fa-wand-magic-sparkles", "desc": "Cool fonts for Insta & TikTok.", "tag": "VIRAL" },
    { "name": "Text Diff Checker", "url": "diff-checker", "cat": "text", "icon": "fa-code-compare", "desc": "Compare two texts for changes.", "tag": "DEV" },
    { "name": "Markdown Editor Live", "url": "markdown-editor", "cat": "text", "icon": "fa-file-pen", "desc": "Write Markdown with preview.", "tag": "DEV" },
    { "name": "Text to Binary Converter", "url": "binary-text", "cat": "text", "icon": "fa-terminal", "desc": "Translate text to 010101 code.", "tag": "GEEK" },
    { "name": "Text Repeater (100x)", "url": "text-repeater", "cat": "text", "icon": "fa-repeat", "desc": "Repeat text 1000 times instantly.", "tag": "VIRAL" },
    { "name": "Case Converter", "url": "case-converter", "cat": "text", "icon": "fa-font", "desc": "UPPERCASE, lowercase, Title Case.", "tag": "" },
    { "name": "Lorem Ipsum Generator", "url": "lorem-ipsum", "cat": "text", "icon": "fa-paragraph", "desc": "Generate placeholder text.", "tag": "" },
    { "name": "Word & Char Counter", "url": "word-counter", "cat": "text", "icon": "fa-pen-nib", "desc": "Count words, characters & lines.", "tag": "" },

    // =========================================
    // CATEGORY 4: SOCIAL MEDIA
    // =========================================
    { "name": "Instagram Engagement", "url": "instagram", "cat": "social", "icon": "fa-instagram", "desc": "Calculate engagement rates.", "tag": "" },
    { "name": "TikTok Money Calculator", "url": "tiktok", "cat": "social", "icon": "fa-tiktok", "desc": "Estimate earnings from views.", "tag": "VIRAL" },
    { "name": "Fake Tweet Generator", "url": "tweet-img", "cat": "social", "icon": "fa-twitter", "desc": "Create meme tweet images.", "tag": "FUN" },
    { "name": "YouTube Thumbnail Grabber", "url": "youtube-thumb", "cat": "social", "icon": "fa-youtube", "desc": "Download HD thumbnails.", "tag": "HD" },
    { "name": "YouTube Tag Extractor", "url": "yt-tags", "cat": "social", "icon": "fa-tags", "desc": "Extract keywords from videos.", "tag": "SEO" },
    
    // =========================================
    // CATEGORY 5: AI TOOLS
    // =========================================
    { "name": "Text to Speech (AI)", "url": "text-to-speech", "cat": "ai", "icon": "fa-volume-high", "desc": "Convert text to human audio.", "tag": "HOT" },
    { "name": "Business Name Generator", "url": "business-name", "cat": "ai", "icon": "fa-briefcase", "desc": "AI-powered brand ideas.", "tag": "AI" },
    { "name": "Slogan & Tagline Gen", "url": "slogan-gen", "cat": "ai", "icon": "fa-lightbulb", "desc": "Catchy taglines for brands.", "tag": "" },

    // =========================================
    // CATEGORY 6: STUDENT TOOLS
    // =========================================
    { "name": "Age Calculator", "url": "age-calculator", "cat": "student", "icon": "fa-hourglass-start", "desc": "Calculate exact age in days.", "tag": "FUN" },
    { "name": "Citation Generator", "url": "citation", "cat": "student", "icon": "fa-quote-right", "desc": "Create APA/MLA citations.", "tag": "" },
    { "name": "GPA Calculator", "url": "gpa-calc", "cat": "student", "icon": "fa-graduation-cap", "desc": "Calculate semester GPA.", "tag": "" },

    // =========================================
    // CATEGORY 7: IMAGE TOOLS
    // =========================================
    { "name": "Image Compressor", "url": "img-compress", "cat": "image", "icon": "fa-file-zipper", "desc": "Reduce image size (KB/MB).", "tag": "HOT" },

    // =========================================
    // CATEGORY 8: FUN & GAMES
    // =========================================
    { "name": "True Love Calculator", "url": "love-calculator", "cat": "fun", "icon": "fa-heart-pulse", "desc": "Check relationship compatibility.", "tag": "VIRAL" },
    { "name": "Fake WhatsApp Chat", "url": "whatsapp-chat", "cat": "fun", "icon": "fa-whatsapp", "desc": "Create realistic fake chat screenshots.", "tag": "VIRAL" },
    { "name": "Fake Instagram DM", "url": "instagram-chat", "cat": "fun", "icon": "fa-instagram", "desc": "Create realistic fake DM screenshots.", "tag": "VIRAL" },
    { "name": "Fake Instagram Post", "url": "instagram-post", "cat": "fun", "icon": "fa-camera-retro", "desc": "Create fake viral posts.", "tag": "HOT" },
    { "name": "Fake X (Twitter) Post", "url": "tweet-gen", "cat": "fun", "icon": "fa-x-twitter", "desc": "Create viral fake tweets.", "tag": "HOT" },
    { "name": "Fake YouTube Generator", "url": "fake-youtube-generator", "cat": "fun", "icon": "fa-youtube", "desc": "Create realistic fake YouTube video screenshots.", "tag": "VIRAL" },
    { "name": "Fake iOS Notification", "url": "fake-ios-notification", "cat": "fun", "icon": "fa-bell", "desc": "Create viral lock screen prank messages.", "tag": "VIRAL" },
    { "name": "Fake Discord Chat", "url": "fake-discord-chat", "cat": "fun", "icon": "fa-discord", "desc": "Create realistic fake chat screenshots.", "tag": "GAMER" },
    { "name": "Fake Insta Live", "url": "fake-insta-live", "cat": "fun", "icon": "fa-instagram", "desc": "Simulate a realistic live stream interface.", "tag": "VIRAL" },
    { "name": "Aura Scanner Pro", "url": "aura-scanner-pro", "cat": "fun", "icon": "fa-fingerprint", "desc": "Scan your fingerprint to reveal your aura color.", "tag": "FUN" },
    { "name": "Fake FaceTime", "url": "fake-facetime", "cat": "fun", "icon": "fa-video", "desc": "Create realistic iPhone video call screenshots.", "tag": "VIRAL" },
    { "name": "Fake News Generator", "url": "fake-news-generator", "cat": "fun", "icon": "fa-newspaper", "desc": "Create realistic breaking news headlines.", "tag": "VIRAL" },

    
    // =========================================
    // CATEGORY 9: HEALTH TOOLS
    // =========================================
    { "name": "BMI Calculator - Ideal Weight", "url": "bmi-calculator", "cat": "health", "icon": "fa-weight-scale", "desc": "Check Body Mass Index & Health.", "tag": "HOT" }
];

// =====================================================================
// AUTOMATION SCRIPT: INJECTS "RELATED TOOLS" AFTER THE CALCULATOR
// =====================================================================
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Check if we are on a Tool Page (not the homepage)
    if (document.querySelector(".grid-container") || document.querySelector("#tools-grid")) {
        return; // Stop if we are on the dashboard
    }

    // --- 1. PREPARE THE RELATED TOOLS SECTION ---
    const currentPath = window.location.pathname;
    let currentTool = toolsDB.find(t => currentPath.includes(t.url));
    let related = [];
    let titleText = "You might also like:";

    if (currentTool) {
        // Get tools from same category, exclude current
        related = toolsDB.filter(t => t.cat === currentTool.cat && t.url !== currentTool.url);
    } 
    
    // Fill with "HOT" tools if we don't have enough
    if (!currentTool || related.length < 3) {
        if (!currentTool) titleText = "Popular Tools:";
        const fillers = toolsDB.filter(t => t.tag === 'HOT' || t.tag === 'VIRAL');
        related = related.concat(fillers); 
    }

    // Shuffle and pick 3
    related = related.sort(() => 0.5 - Math.random()).slice(0, 3);

    // --- 2. INJECT RELATED TOOLS (THE POSITION FIX) ---
    if (related.length > 0) {
        const relatedSection = document.createElement("div");
        relatedSection.className = "related-tools-section";
        // Styling to make it fit nicely
        relatedSection.style.cssText = "max-width: 800px; margin: 0 auto 40px auto; padding-top: 20px;";
        
        let cardsHTML = related.map(t => `
            <a href="${t.url}.html" style="text-decoration:none; background:#1e293b; padding:15px; border-radius:12px; display:flex; align-items:center; gap:15px; border:1px solid #334155; margin-bottom:10px; transition:0.2s;" onmouseover="this.style.borderColor='#3b82f6'" onmouseout="this.style.borderColor='#334155'">
                <div style="width:40px; height:40px; background:rgba(59,130,246,0.1); border-radius:8px; display:flex; align-items:center; justify-content:center; color:#3b82f6;">
                    <i class="fa-solid ${t.icon}"></i>
                </div>
                <div>
                    <div style="color:white; font-weight:700; font-size:0.95rem;">${t.name}</div>
                    <div style="color:#94a3b8; font-size:0.8rem;">${t.desc}</div>
                </div>
            </a>
        `).join("");

        relatedSection.innerHTML = `
            <h3 style="color:white; font-size:1.3rem; margin-bottom:20px;">${titleText}</h3>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:15px;">
                ${cardsHTML}
            </div>
        `;
        
        // ** THIS IS THE MAGIC CHANGE **
        // We look for the main calculator card (.calc-card)
        const calcCard = document.querySelector(".calc-card");
        
        if (calcCard) {
            // If found, insert Related Tools AFTER the calculator, but BEFORE the text
            calcCard.parentNode.insertBefore(relatedSection, calcCard.nextSibling);
        } else {
            // Fallback: If no calculator card found, put it at the bottom
            document.body.appendChild(relatedSection);
        }
    }

    // --- 3. ALWAYS INJECT FOOTER ---
    if (!document.querySelector("footer")) {
        const footer = document.createElement("footer");
        footer.style.cssText = "text-align: center; padding: 50px 20px; color: #64748b; font-size: 0.9rem; border-top: 1px solid #1e293b; margin-top: 50px; background:#020617;";
        footer.innerHTML = `
            <div style="margin-bottom: 15px;">
                <span style="font-weight: 700; color: #cbd5e1;">OmniTools</span> &copy; 2026
            </div>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <a href="privacy.html" style="color: #94a3b8; text-decoration: none;">Privacy Policy</a>
                <a href="terms.html" style="color: #94a3b8; text-decoration: none;">Terms of Service</a>
                <a href="contact.html" style="color: #94a3b8; text-decoration: none;">Contact</a>
                <a href="index.html" style="color: #94a3b8; text-decoration: none;">All Tools</a>
            </div>
        `;
        document.body.appendChild(footer);
    }
});
