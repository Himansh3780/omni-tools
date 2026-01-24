// --- OMNITOOLS DATABASE ---
// This file feeds the dashboard. 
// You have 20 Pro Tools ready to go.

const toolsDB = [
    // --- SOCIAL MEDIA ---
    { 
        "name": "TikTok Money", 
        "url": "tiktok.html", 
        "cat": "social", 
        "icon": "fa-tiktok", 
        "desc": "Estimate earnings per video.", 
        "tag": "HOT" 
    },
    { 
        "name": "Instagram Audit", 
        "url": "instagram.html", 
        "cat": "social", 
        "icon": "fa-instagram", 
        "desc": "Analyze engagement rates.", 
        "tag": "" 
    },
    { 
        "name": "YouTube Tag Spy", 
        "url": "yt-tags.html", 
        "cat": "social", 
        "icon": "fa-youtube", 
        "desc": "Extract hidden video keywords.", 
        "tag": "ELITE" 
    },
    { 
        "name": "Thumb Downloader", 
        "url": "youtube-thumb.html", 
        "cat": "social", 
        "icon": "fa-image", 
        "desc": "Grab 4K video thumbnails.", 
        "tag": "" 
    },
    { 
        "name": "Tweet Generator", 
        "url": "tweet-img.html", 
        "cat": "social", 
        "icon": "fa-twitter", 
        "desc": "Create viral fake tweets.", 
        "tag": "FUN" 
    },
    { 
        "name": "Social Preview", 
        "url": "og-generator.html", 
        "cat": "social", 
        "icon": "fa-share-nodes", 
        "desc": "Test links for FB & Twitter.", 
        "tag": "SEO" 
    },

    // --- BUSINESS & LEGAL ---
    { 
        "name": "Invoice Generator", 
        "url": "invoice-generator.html", 
        "cat": "business", 
        "icon": "fa-file-invoice-dollar", 
        "desc": "Make PDF invoices instantly.", 
        "tag": "PRO" 
    },
    { 
        "name": "Privacy Policy", 
        "url": "privacy-policy.html", 
        "cat": "business", 
        "icon": "fa-file-shield", 
        "desc": "Generate GDPR legal pages.", 
        "tag": "HOT" 
    },
    { 
        "name": "PayPal Fee Calc", 
        "url": "paypal-fee.html", 
        "cat": "business", 
        "icon": "fa-cc-paypal", 
        "desc": "Calculate profit after fees.", 
        "tag": "" 
    },
    { 
        "name": "Loan Calculator", 
        "url": "loan-calculator.html", 
        "cat": "business", 
        "icon": "fa-sack-dollar", 
        "desc": "Calculate mortgage & loan payments.", 
        "tag": "PRO" 
    },
{ 
        "name": "CPM Calculator", 
        "url": "cpm-calc.html", 
        "cat": "business", 
        "icon": "fa-chart-pie", 
        "desc": "Calculate YouTube & AdSense Revenue.", 
        "tag": "HOT" 
    },
{ 
        "name": "GST/VAT Calculator", 
        "url": "gst-calc.html", 
        "cat": "business", 
        "icon": "fa-calculator", 
        "desc": "Add or Remove Tax instantly.", 
        "tag": "" 
    },
    { 
        "name": "Hourly to Salary", 
        "url": "salary-converter.html", 
        "cat": "business", 
        "icon": "fa-money-bill-wave", 
        "desc": "Convert hourly wage to yearly income.", 
        "tag": "NEW" 
    },
{ 
        "name": "Rent vs. Buy", 
        "url": "rent-vs-buy.html", 
        "cat": "business", 
        "icon": "fa-house-chimney", 
        "desc": "Compare monthly rental vs mortgage costs.", 
        "tag": "HOT" 
    },
{ 
        "name": "Resignation Letter", 
        "url": "resignation-letter.html", 
        "cat": "business", 
        "icon": "fa-file-signature", 
        "desc": "Generate a professional resignation letter PDF.", 
        "tag": "FREE" 
    },
{ 
        "name": "Profit Margin Tool", 
        "url": "profit-calculator.html", 
        "cat": "business", 
        "icon": "fa-chart-line", 
        "desc": "Calculate Margin, Markup & Scale.", 
        "tag": "PRO" 
    },
{ 
        "name": "Receipt Generator", 
        "url": "receipt-maker.html", 
        "cat": "business", 
        "icon": "fa-receipt", 
        "desc": "Create rent & cash receipts instantly.", 
        "tag": "FREE" 
    },
{ 
        "name": "Purchase Order Generator", 
        "url": "po-generator.html", 
        "cat": "business", 
        "icon": "fa-file-invoice", 
        "desc": "Create official B2B purchase orders.", 
        "tag": "PRO" 
    },
{ 
        "name": "Commission Calculator", 
        "url": "commission-calc.html", 
        "cat": "business", 
        "icon": "fa-hand-holding-dollar", 
        "desc": "Calculate sales commissions & revenue.", 
        "tag": "MONEY" 
    },

    // --- SEO & DEV ---
    { 
        "name": "Schema Markup", 
        "url": "schema-gen.html", 
        "cat": "dev", 
        "icon": "fa-code", 
        "desc": "Get star ratings in Google.", 
        "tag": "SEO" 
    },
    { 
        "name": "Robots.txt Gen", 
        "url": "robots-gen.html", 
        "cat": "dev", 
        "icon": "fa-robot", 
        "desc": "Block AI bots from scraping.", 
        "tag": "NEW" 
    },
    { 
        "name": "Sitemap Builder", 
        "url": "sitemap-gen.html", 
        "cat": "dev", 
        "icon": "fa-sitemap", 
        "desc": "Create XML maps for Google.", 
        "tag": "" 
    },
    { 
        "name": "SERP Simulator", 
        "url": "meta-analyzer.html", 
        "cat": "dev", 
        "icon": "fa-magnifying-glass-chart", 
        "desc": "Preview Google search results.", 
        "tag": "SEO" 
    },
    { 
        "name": "QR Code Maker", 
        "url": "qr-code.html", 
        "cat": "dev", 
        "icon": "fa-qrcode", 
        "desc": "Custom QR codes with logos.", 
        "tag": "" 
    },
    { 
        "name": "Lorem Ipsum Gen", 
        "url": "lorem-ipsum.html", 
        "cat": "dev", 
        "icon": "fa-paragraph", 
        "desc": "Dummy text for designers.", 
        "tag": "" 
    },

    // --- STUDENT ---
    { 
        "name": "GPA Forecaster", 
        "url": "gpa-calc.html", 
        "cat": "student", 
        "icon": "fa-graduation-cap", 
        "desc": "Calculate & forecast grades.", 
        "tag": "HOT" 
    },
    { 
        "name": "Citation Machine", 
        "url": "citation.html", 
        "cat": "student", 
        "icon": "fa-quote-right", 
        "desc": "APA, MLA & Chicago maker.", 
        "tag": "" 
    },
    { 
        "name": "Age Calculator", 
        "url": "age-calculator.html", 
        "cat": "student", 
        "icon": "fa-hourglass-start", 
        "desc": "Calculate exact age & countdown.", 
        "tag": "FUN" 
    },
    

    // --- IMAGE & TEXT ---
    { 
        "name": "Bulk Compressor", 
        "url": "img-compress.html", 
        "cat": "image", 
        "icon": "fa-compress", 
        "desc": "Compress unlimited images.", 
        "tag": "PRO" 
    },
    { 
        "name": "Word Counter", 
        "url": "word-counter.html", 
        "cat": "pdf", 
        "icon": "fa-file-lines", 
        "desc": "Count words & reading time.", 
        "tag": "" 
    },
    { 
        "name": "Case Converter", 
        "url": "case-converter.html", 
        "cat": "pdf", 
        "icon": "fa-font", 
        "desc": "Fix messy text formatting.", 
        "tag": "" 
    }
];
