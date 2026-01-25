const toolsDB = [
    // --- BUSINESS & FINANCE ---
    { 
        "name": "Commission Calculator", 
        "url": "commission-calc.html", 
        "cat": "business", 
        "icon": "fa-hand-holding-dollar", 
        "desc": "Calculate sales commissions & revenue.", 
        "tag": "MONEY" 
    },
    { 
        "name": "GST / VAT Calculator", 
        "url": "gst-calc.html", 
        "cat": "business", 
        "icon": "fa-calculator", 
        "desc": "Add or remove tax instantly.", 
        "tag": "" 
    },
    { 
        "name": "Invoice Generator", 
        "url": "invoice-generator.html", 
        "cat": "business", 
        "icon": "fa-file-invoice-dollar", 
        "desc": "Create professional PDF invoices.", 
        "tag": "PRO" 
    },
    { 
        "name": "Loan Calculator", 
        "url": "loan-calculator.html", 
        "cat": "business", 
        "icon": "fa-sack-dollar", 
        "desc": "Calculate mortgage & loan payments.", 
        "tag": "" 
    },
    { 
        "name": "PayPal Fee Calculator", 
        "url": "paypal-fee.html", 
        "cat": "business", 
        "icon": "fa-brands fa-paypal", 
        "desc": "Calculate fees for transfers.", 
        "tag": "" 
    },
    { 
        "name": "PO Generator", 
        "url": "po-generator.html", 
        "cat": "business", 
        "icon": "fa-file-signature", 
        "desc": "Create B2B Purchase Orders.", 
        "tag": "" 
    },
    { 
        "name": "Privacy Policy Gen", 
        "url": "privacy-policy.html", 
        "cat": "business", 
        "icon": "fa-shield-halved", 
        "desc": "Generate legal privacy policies.", 
        "tag": "LEGAL" 
    },
    { 
        "name": "Profit Margin Tool", 
        "url": "profit-calculator.html", 
        "cat": "business", 
        "icon": "fa-chart-line", 
        "desc": "Calculate margin, markup & profit.", 
        "tag": "" 
    },
    { 
        "name": "Receipt Maker", 
        "url": "receipt-maker.html", 
        "cat": "business", 
        "icon": "fa-receipt", 
        "desc": "Generate rent & cash receipts.", 
        "tag": "FREE" 
    },
    { 
        "name": "Rent vs. Buy", 
        "url": "rent-vs-buy.html", 
        "cat": "business", 
        "icon": "fa-house-chimney", 
        "desc": "Compare renting vs buying a home.", 
        "tag": "HOT" 
    },
    { 
        "name": "Resignation Letter", 
        "url": "resignation-letter.html", 
        "cat": "business", 
        "icon": "fa-envelope-open-text", 
        "desc": "Write a professional resignation letter.", 
        "tag": "" 
    },
    { 
        "name": "Hourly to Salary", 
        "url": "salary-converter.html", 
        "cat": "business", 
        "icon": "fa-money-bill-wave", 
        "desc": "Convert hourly wage to yearly salary.", 
        "tag": "NEW" 
    },
    { 
        "name": "Inflation Calculator", 
        "url": "inflation-calc.html", 
        "cat": "business", 
        "icon": "fa-arrow-trend-up", 
        "desc": "Check USD purchasing power over time.", 
        "tag": "HOT" 
    },
    { 
        "name": "Paycheck Calculator", 
        "url": "paycheck-calc.html", 
        "cat": "business", 
        "icon": "fa-money-check-dollar", 
        "desc": "Estimate take-home pay after taxes.", 
        "tag": "HOT" 
    },
    { 
        "name": "Business Name Gen", 
        "url": "business-name.html", 
        "cat": "business", 
        "icon": "fa-briefcase", 
        "desc": "AI-powered brand name ideas.", 
        "tag": "AI" 
    },
    { 
        "name": "Slogan Generator", 
        "url": "slogan-gen.html", 
        "cat": "business", 
        "icon": "fa-lightbulb", 
        "desc": "Catchy taglines for your brand.", 
        "tag": "" 
    },
    { 
        "name": "CPM / CPC Calculator", 
        "url": "cpm-calc.html", 
        "cat": "business", 
        "icon": "fa-chart-pie", 
        "desc": "Calculate ad metrics (CPM, CPC, CTR).", 
        "tag": "PRO" 
    },

    // --- SOCIAL MEDIA ---
    { 
        "name": "Instagram Tools", 
        "url": "instagram.html", 
        "cat": "social", 
        "icon": "fa-brands fa-instagram", 
        "desc": "Engagement calculator & tools.", 
        "tag": "" 
    },
    { 
        "name": "TikTok Money Calc", 
        "url": "tiktok.html", 
        "cat": "social", 
        "icon": "fa-brands fa-tiktok", 
        "desc": "Estimate earnings from views.", 
        "tag": "VIRAL" 
    },
    { 
        "name": "Tweet Generator", 
        "url": "tweet-img.html", 
        "cat": "social", 
        "icon": "fa-brands fa-twitter", 
        "desc": "Create fake tweet images.", 
        "tag": "FUN" 
    },
    { 
        "name": "YouTube Thumbnails", 
        "url": "youtube-thumb.html", 
        "cat": "social", 
        "icon": "fa-brands fa-youtube", 
        "desc": "Download HD video thumbnails.", 
        "tag": "" 
    },
    { 
        "name": "YouTube Tags", 
        "url": "yt-tags.html", 
        "cat": "social", 
        "icon": "fa-tags", 
        "desc": "Extract keywords from videos.", 
        "tag": "SEO" 
    },

    // --- DEVELOPER & SEO ---
    { 
        "name": "Meta Tag Analyzer", 
        "url": "meta-analyzer.html", 
        "cat": "dev", 
        "icon": "fa-magnifying-glass-chart", 
        "desc": "Analyze SEO meta tags.", 
        "tag": "SEO" 
    },
    { 
        "name": "QR Code Generator", 
        "url": "qr-code.html", 
        "cat": "dev", 
        "icon": "fa-qrcode", 
        "desc": "Create custom QR codes.", 
        "tag": "" 
    },
    { 
        "name": "Schema Generator", 
        "url": "schema-gen.html", 
        "cat": "dev", 
        "icon": "fa-code", 
        "desc": "Create structured data JSON-LD.", 
        "tag": "DEV" 
    },
    { 
        "name": "Sitemap Generator", 
        "url": "sitemap-gen.html", 
        "cat": "dev", 
        "icon": "fa-sitemap", 
        "desc": "Create XML sitemaps for Google.", 
        "tag": "" 
    },
    { 
        "name": "Cron Job Generator", 
        "url": "cron-job.html", 
        "cat": "dev", 
        "icon": "fa-clock", 
        "desc": "Create Linux cron schedules easily.", 
        "tag": "DEV" 
    },
    { 
        "name": "JSON to CSV", 
        "url": "json-csv.html", 
        "cat": "dev", 
        "icon": "fa-file-csv", 
        "desc": "Convert JSON arrays to Excel CSV.", 
        "tag": "HOT" 
    },
    { 
        "name": "CSV to JSON", 
        "url": "csv-json.html", 
        "cat": "dev", 
        "icon": "fa-file-code", 
        "desc": "Convert CSV rows to JSON objects.", 
        "tag": "" 
    },
    { 
        "name": "HTML Minifier", 
        "url": "html-minify.html", 
        "cat": "dev", 
        "icon": "fa-compress", 
        "desc": "Compress HTML code for speed.", 
        "tag": "HOT" 
    },
    { 
        "name": "CSS Beautifier", 
        "url": "css-beautify.html", 
        "cat": "dev", 
        "icon": "fa-wand-magic", 
        "desc": "Format messy CSS code.", 
        "tag": "HOT" 
    },
    { 
        "name": "SQL Formatter", 
        "url": "sql-format.html", 
        "cat": "dev", 
        "icon": "fa-database", 
        "desc": "Beautify SQL queries instantly.", 
        "tag": "" 
    },
    { 
        "name": "Meta Tag Generator", 
        "url": "meta-tag.html", 
        "cat": "dev", 
        "icon": "fa-magnifying-glass", 
        "desc": "Generate SEO meta tags & preview.", 
        "tag": "SEO" 
    },
    { 
        "name": "Open Graph Gen", 
        "url": "open-graph.html", 
        "cat": "dev", 
        "icon": "fa-share-nodes", 
        "desc": "Create social media preview cards.", 
        "tag": "SEO" 
    },
    { 
        "name": "Robots.txt Gen", 
        "url": "robots-gen.html", 
        "cat": "dev", 
        "icon": "fa-robot", 
        "desc": "Generate robots.txt files.", 
        "tag": "" 
    },
    { 
        "name": ".htaccess Gen", 
        "url": "htaccess.html", 
        "cat": "dev", 
        "icon": "fa-server", 
        "desc": "Generate redirects and security rules.", 
        "tag": "PRO" 
    },
    { 
        "name": "User Agent Lookup", 
        "url": "user-agent.html", 
        "cat": "dev", 
        "icon": "fa-fingerprint", 
        "desc": "Check browser & device info.", 
        "tag": "" 
    },
    { 
        "name": "What Is My IP", 
        "url": "my-ip.html", 
        "cat": "dev", 
        "icon": "fa-laptop-code", 
        "desc": "Show public IP and location.", 
        "tag": "HOT" 
    },
    { 
        "name": "DNS Lookup", 
        "url": "dns-lookup.html", 
        "cat": "dev", 
        "icon": "fa-network-wired", 
        "desc": "Check A, MX, NS records instantly.", 
        "tag": "" 
    },
    { 
        "name": "Screen Resolution", 
        "url": "screen-res.html", 
        "cat": "dev", 
        "icon": "fa-display", 
        "desc": "Test responsive design breakpoints.", 
        "tag": "PRO" 
    },
    { 
        "name": "Keycode Checker", 
        "url": "keycode.html", 
        "cat": "dev", 
        "icon": "fa-keyboard", 
        "desc": "Get JavaScript keycodes on press.", 
        "tag": "DEV" 
    },
    { 
        "name": "Base64 Converter", 
        "url": "base64-tool.html", 
        "cat": "dev", 
        "icon": "fa-file-shield", 
        "desc": "Encode text & images to Base64.", 
        "tag": "HOT" 
    },
    { 
        "name": "URL Encoder", 
        "url": "url-encode.html", 
        "cat": "dev", 
        "icon": "fa-link", 
        "desc": "Encode/Decode URL strings.", 
        "tag": "" 
    },
    { 
        "name": "UUID Generator", 
        "url": "uuid-gen.html", 
        "cat": "dev", 
        "icon": "fa-fingerprint", 
        "desc": "Generate Version 1 & 4 UUIDs.", 
        "tag": "PRO" 
    },

    // --- TEXT TOOLS ---
    { 
        "name": "Case Converter", 
        "url": "case-converter.html", 
        "cat": "text", 
        "icon": "fa-font", 
        "desc": "Convert text to Upper/Lower case.", 
        "tag": "" 
    },
    { 
        "name": "Lorem Ipsum", 
        "url": "lorem-ipsum.html", 
        "cat": "text", 
        "icon": "fa-paragraph", 
        "desc": "Generate placeholder text.", 
        "tag": "" 
    },
    { 
        "name": "Word Counter", 
        "url": "word-counter.html", 
        "cat": "text", 
        "icon": "fa-pen-nib", 
        "desc": "Count words, chars & reading time.", 
        "tag": "" 
    },

    // --- STUDENT & LIFESTYLE ---
    { 
        "name": "Age Calculator", 
        "url": "age-calculator.html", 
        "cat": "student", 
        "icon": "fa-hourglass-start", 
        "desc": "Calculate exact age & countdown.", 
        "tag": "FUN" 
    },
    { 
        "name": "Citation Machine", 
        "url": "citation.html", 
        "cat": "student", 
        "icon": "fa-quote-right", 
        "desc": "Generate APA/MLA citations.", 
        "tag": "" 
    },
    { 
        "name": "GPA Calculator", 
        "url": "gpa-calc.html", 
        "cat": "student", 
        "icon": "fa-graduation-cap", 
        "desc": "Calculate college/high school GPA.", 
        "tag": "" 
    },

    // --- IMAGE TOOLS ---
    { 
        "name": "Image Compressor", 
        "url": "img-compress.html", 
        "cat": "image", 
        "icon": "fa-file-zipper", 
        "desc": "Reduce image size (KB/MB).", 
        "tag": "HOT" 
    }
];
