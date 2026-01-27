const toolsDB = [
    // =========================================
    // CATEGORY 1: DEVELOPER TOOLS (cat: 'dev')
    // =========================================
    { 
        "name": "Meta Tag Analyzer", 
        "url": "meta-analyzer.html", 
        "cat": "dev", 
        "icon": "fa-magnifying-glass-chart", 
        "desc": "Analyze SEO meta tags.", 
        "tag": "SEO" 
    },
    {
        "name": "JSON Formatter",
        "url": "json-formatter.html", 
        "cat": "dev",
        "icon": "fa-code",
        "desc": "Beautify and validate JSON code.",
        "tag": "HOT"
    },
    {
        name: "UUID Generator",
        desc: "Generate random UUIDs/GUIDs in bulk.",
        url: "uuid-generator.html",
        icon: "fa-fingerprint",
        cat: "dev",
        tag: "PRO"
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
        "desc": "Create structured JSON-LD.", 
        "tag": "DEV" 
    },
    { 
        "name": "Sitemap Generator", 
        "url": "sitemap-gen.html", 
        "cat": "dev", 
        "icon": "fa-sitemap", 
        "desc": "Create XML sitemaps.", 
        "tag": "" 
    },
    { 
        "name": "Cron Job Generator", 
        "url": "cron-job.html", 
        "cat": "dev", 
        "icon": "fa-clock", 
        "desc": "Create Linux cron schedules.", 
        "tag": "DEV" 
    },
    { 
        "name": "JSON to CSV", 
        "url": "json-csv.html", 
        "cat": "dev", 
        "icon": "fa-file-csv", 
        "desc": "Convert JSON to CSV.", 
        "tag": "HOT" 
    },
    { 
        "name": "CSV to JSON", 
        "url": "csv-json.html", 
        "cat": "dev", 
        "icon": "fa-file-code", 
        "desc": "Convert CSV to JSON.", 
        "tag": "" 
    },
    { 
        "name": "HTML Minifier", 
        "url": "html-minify.html", 
        "cat": "dev", 
        "icon": "fa-compress", 
        "desc": "Compress HTML code.", 
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
        "desc": "Beautify SQL queries.", 
        "tag": "" 
    },
    { 
        "name": "Meta Tag Generator", 
        "url": "meta-tag.html", 
        "cat": "dev", 
        "icon": "fa-magnifying-glass", 
        "desc": "Generate SEO tags.", 
        "tag": "SEO" 
    },
    { 
        "name": "Open Graph Gen", 
        "url": "open-graph.html", 
        "cat": "dev", 
        "icon": "fa-share-nodes", 
        "desc": "Create social media cards.", 
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
        "desc": "Generate server rules.", 
        "tag": "PRO" 
    },
    { 
        "name": "User Agent Lookup", 
        "url": "user-agent.html", 
        "cat": "dev", 
        "icon": "fa-fingerprint", 
        "desc": "Check browser info.", 
        "tag": "" 
    },
    { 
        "name": "What Is My IP", 
        "url": "my-ip.html", 
        "cat": "dev", 
        "icon": "fa-laptop-code", 
        "desc": "Show public IP.", 
        "tag": "HOT" 
    },
    { 
        "name": "DNS Lookup", 
        "url": "dns-lookup.html", 
        "cat": "dev", 
        "icon": "fa-network-wired", 
        "desc": "Check DNS records.", 
        "tag": "" 
    },
    { 
        "name": "Screen Resolution", 
        "url": "screen-res.html", 
        "cat": "dev", 
        "icon": "fa-display", 
        "desc": "Test responsive design.", 
        "tag": "PRO" 
    },
    { 
        "name": "Keycode Checker", 
        "url": "keycode.html", 
        "cat": "dev", 
        "icon": "fa-keyboard", 
        "desc": "Get JS keycodes.", 
        "tag": "DEV" 
    },
    { 
        "name": "Base64 Converter", 
        "url": "base64-tool.html", 
        "cat": "dev", 
        "icon": "fa-file-shield", 
        "desc": "Encode text & images.", 
        "tag": "HOT" 
    },
    { 
        "name": "URL Encoder", 
        "url": "url-encode.html", 
        "cat": "dev", 
        "icon": "fa-link", 
        "desc": "Encode/Decode URLs.", 
        "tag": "" 
    },
    { 
        "name": "UUID Generator", 
        "url": "uuid-gen.html", 
        "cat": "dev", 
        "icon": "fa-fingerprint", 
        "desc": "Generate Unique IDs.", 
        "tag": "PRO" 
    },
    { 
        "name": "Hash Generator", 
        "url": "hash-generator.html", 
        "cat": "dev", 
        "icon": "fa-file-shield", 
        "desc": "Calculate SHA checksums.", 
        "tag": "SECURE" 
    },

    // =========================================
    // CATEGORY 2: BUSINESS TOOLS (cat: 'business')
    // =========================================
    { 
        "name": "Commission Calculator", 
        "url": "commission-calc.html", 
        "cat": "business", 
        "icon": "fa-hand-holding-dollar", 
        "desc": "Calculate sales commissions.", 
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
        "desc": "Calculate mortgage payments.", 
        "tag": "" 
    },
    { 
        "name": "PayPal Fee Calculator", 
        "url": "paypal-fee.html", 
        "cat": "business", 
        "icon": "fa-paypal", 
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
        "desc": "Calculate margin & markup.", 
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
        "desc": "Compare renting vs buying.", 
        "tag": "HOT" 
    },
    { 
        "name": "Resignation Letter", 
        "url": "resignation-letter.html", 
        "cat": "business", 
        "icon": "fa-envelope-open-text", 
        "desc": "Write a resignation letter.", 
        "tag": "" 
    },
    { 
        "name": "Hourly to Salary", 
        "url": "salary-converter.html", 
        "cat": "business", 
        "icon": "fa-money-bill-wave", 
        "desc": "Convert hourly to yearly salary.", 
        "tag": "NEW" 
    },
    { 
        "name": "Inflation Calculator", 
        "url": "inflation-calc.html", 
        "cat": "business", 
        "icon": "fa-arrow-trend-up", 
        "desc": "Check purchasing power.", 
        "tag": "HOT" 
    },
    { 
        "name": "Paycheck Calculator", 
        "url": "paycheck-calc.html", 
        "cat": "business", 
        "icon": "fa-money-check-dollar", 
        "desc": "Estimate take-home pay.", 
        "tag": "HOT" 
    },
    { 
        "name": "CPM Calculator", 
        "url": "cpm-calc.html", 
        "cat": "business", 
        "icon": "fa-chart-pie", 
        "desc": "Calculate CPM, CPC, CTR.", 
        "tag": "PRO" 
    },

    // =========================================
    // CATEGORY 3: TEXT TOOLS (cat: 'text')
    // =========================================
    { 
        "name": "Text Cleaner", 
        "url": "text-cleaner.html", 
        "cat": "text", 
        "icon": "fa-broom", 
        "desc": "Remove spaces, duplicates & HTML.", 
        "tag": "HOT" 
    },
    { 
        "name": "URL Slug Generator", 
        "url": "slug-generator.html", 
        "cat": "text", 
        "icon": "fa-link", 
        "desc": "Create SEO-friendly URL links.", 
        "tag": "SEO" 
    },
    { 
        "name": "Fancy Text Gen", 
        "url": "fancy-text.html", 
        "cat": "text", 
        "icon": "fa-wand-magic-sparkles", 
        "desc": "Cool fonts for Instagram & TikTok.", 
        "tag": "VIRAL" 
    },
    { 
        "name": "Text Diff Checker", 
        "url": "diff-checker.html", 
        "cat": "text", 
        "icon": "fa-code-compare", 
        "desc": "Compare two texts for differences.", 
        "tag": "DEV" 
    },
    { 
        "name": "Markdown Editor", 
        "url": "markdown-editor.html", 
        "cat": "text", 
        "icon": "fa-file-pen", 
        "desc": "Write Markdown with live preview.", 
        "tag": "DEV" 
    },
    { 
        "name": "Text to Binary", 
        "url": "binary-text.html", 
        "cat": "text", 
        "icon": "fa-terminal", 
        "desc": "Translate text to 010101 code.", 
        "tag": "GEEK" 
    },
    { 
        "name": "Text Repeater", 
        "url": "text-repeater.html", 
        "cat": "text", 
        "icon": "fa-repeat", 
        "desc": "Repeat text 1000 times instantly.", 
        "tag": "VIRAL" 
    },
    { 
        "name": "Case Converter", 
        "url": "case-converter.html", 
        "cat": "text", 
        "icon": "fa-font", 
        "desc": "Convert text case.", 
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
        "desc": "Count words & chars.", 
        "tag": "" 
    },

    // =========================================
    // CATEGORY 4: SOCIAL MEDIA (cat: 'social')
    // =========================================
    { 
        "name": "Instagram Tools", 
        "url": "instagram.html", 
        "cat": "social", 
        "icon": "fa-instagram", 
        "desc": "Engagement calculator.", 
        "tag": "" 
    },
    { 
        "name": "TikTok Money Calc", 
        "url": "tiktok.html", 
        "cat": "social", 
        "icon": "fa-tiktok", 
        "desc": "Estimate earnings from views.", 
        "tag": "VIRAL" 
    },
    { 
        "name": "Tweet Generator", 
        "url": "tweet-img.html", 
        "cat": "social", 
        "icon": "fa-twitter", 
        "desc": "Create fake tweet images.", 
        "tag": "FUN" 
    },
    { 
        "name": "YouTube Thumbnails", 
        "url": "youtube-thumb.html", 
        "cat": "social", 
        "icon": "fa-youtube", 
        "desc": "Download HD thumbnails.", 
        "tag": "" 
    },
    { 
        "name": "YouTube Tags", 
        "url": "yt-tags.html", 
        "cat": "social", 
        "icon": "fa-tags", 
        "desc": "Extract video keywords.", 
        "tag": "SEO" 
    },

    // =========================================
    // CATEGORY 5: AI TOOLS (cat: 'ai')
    // =========================================
    { 
        "name": "Text to Speech", 
        "url": "text-to-speech.html", 
        "cat": "ai", 
        "icon": "fa-volume-high", 
        "desc": "Convert text to audio instantly.", 
        "tag": "HOT" 
    },
    { 
        "name": "Business Name Gen", 
        "url": "business-name.html", 
        "cat": "ai", 
        "icon": "fa-briefcase", 
        "desc": "AI-powered brand names.", 
        "tag": "AI" 
    },
    { 
        "name": "Slogan Generator", 
        "url": "slogan-gen.html", 
        "cat": "ai", 
        "icon": "fa-lightbulb", 
        "desc": "Catchy taglines for brands.", 
        "tag": "" 
    },

    // =========================================
    // CATEGORY 6: STUDENT TOOLS (cat: 'student')
    // =========================================
    { 
        "name": "Age Calculator", 
        "url": "age-calculator.html", 
        "cat": "student", 
        "icon": "fa-hourglass-start", 
        "desc": "Calculate exact age.", 
        "tag": "FUN" 
    },
    { 
        "name": "Citation Machine", 
        "url": "citation.html", 
        "cat": "student", 
        "icon": "fa-quote-right", 
        "desc": "Generate citations.", 
        "tag": "" 
    },
    { 
        "name": "GPA Calculator", 
        "url": "gpa-calc.html", 
        "cat": "student", 
        "icon": "fa-graduation-cap", 
        "desc": "Calculate GPA.", 
        "tag": "" 
    },

    // =========================================
    // CATEGORY 7: IMAGE TOOLS (cat: 'image')
    // =========================================
    { 
        "name": "Image Compressor", 
        "url": "img-compress.html", 
        "cat": "image", 
        "icon": "fa-file-zipper", 
        "desc": "Reduce image size.", 
        "tag": "HOT" 
    }
];
