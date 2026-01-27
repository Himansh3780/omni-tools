const toolsDB = [
    // =========================================
    // CATEGORY 1: DEVELOPER TOOLS
    // =========================================
    { "name": "Password Generator", "url": "password-generator", "cat": "dev", "icon": "fa-key", "desc": "Create secure passwords.", "tag": "SECURE" },
    { "name": "Meta Tag Analyzer", "url": "meta-analyzer", "cat": "dev", "icon": "fa-magnifying-glass-chart", "desc": "Analyze SEO meta tags.", "tag": "SEO" },
    { "name": "JSON Formatter", "url": "json-formatter", "cat": "dev", "icon": "fa-code", "desc": "Beautify JSON code.", "tag": "HOT" },
    { "name": "UUID Generator", "url": "uuid-generator", "cat": "dev", "icon": "fa-fingerprint", "desc": "Generate UUIDs.", "tag": "PRO" },
    { "name": "QR Code Generator", "url": "qr-code", "cat": "dev", "icon": "fa-qrcode", "desc": "Create QR codes.", "tag": "" },
    { "name": "Schema Generator", "url": "schema-gen", "cat": "dev", "icon": "fa-code", "desc": "Create JSON-LD.", "tag": "DEV" },
    { "name": "Sitemap Generator", "url": "sitemap-gen", "cat": "dev", "icon": "fa-sitemap", "desc": "Create XML sitemaps.", "tag": "" },
    { "name": "Cron Job Generator", "url": "cron-job", "cat": "dev", "icon": "fa-clock", "desc": "Create cron schedules.", "tag": "DEV" },
    { "name": "JSON to CSV", "url": "json-csv", "cat": "dev", "icon": "fa-file-csv", "desc": "Convert JSON to CSV.", "tag": "HOT" },
    { "name": "CSV to JSON", "url": "csv-json", "cat": "dev", "icon": "fa-file-code", "desc": "Convert CSV to JSON.", "tag": "" },
    { "name": "HTML Minifier", "url": "html-minify", "cat": "dev", "icon": "fa-compress", "desc": "Compress HTML.", "tag": "HOT" },
    { "name": "CSS Beautifier", "url": "css-beautify", "cat": "dev", "icon": "fa-wand-magic", "desc": "Format CSS.", "tag": "HOT" },
    { "name": "SQL Formatter", "url": "sql-format", "cat": "dev", "icon": "fa-database", "desc": "Beautify SQL.", "tag": "" },
    { "name": "Meta Tag Gen", "url": "meta-tag", "cat": "dev", "icon": "fa-magnifying-glass", "desc": "Generate SEO tags.", "tag": "SEO" },
    { "name": "Open Graph Gen", "url": "open-graph", "cat": "dev", "icon": "fa-share-nodes", "desc": "Social media cards.", "tag": "SEO" },
    { "name": "Robots.txt Gen", "url": "robots-gen", "cat": "dev", "icon": "fa-robot", "desc": "Generate robots.txt.", "tag": "" },
    { "name": ".htaccess Gen", "url": "htaccess", "cat": "dev", "icon": "fa-server", "desc": "Server rules.", "tag": "PRO" },
    { "name": "User Agent Lookup", "url": "user-agent", "cat": "dev", "icon": "fa-fingerprint", "desc": "Check browser info.", "tag": "" },
    { "name": "What Is My IP", "url": "my-ip", "cat": "dev", "icon": "fa-laptop-code", "desc": "Show public IP.", "tag": "HOT" },
    { "name": "DNS Lookup", "url": "dns-lookup", "cat": "dev", "icon": "fa-network-wired", "desc": "Check DNS records.", "tag": "" },
    { "name": "Screen Resolution", "url": "screen-res", "cat": "dev", "icon": "fa-display", "desc": "Test responsiveness.", "tag": "PRO" },
    { "name": "Keycode Checker", "url": "keycode", "cat": "dev", "icon": "fa-keyboard", "desc": "Get JS keycodes.", "tag": "DEV" },
    { "name": "Base64 Converter", "url": "base64-tool", "cat": "dev", "icon": "fa-file-shield", "desc": "Encode text/images.", "tag": "HOT" },
    { "name": "URL Encoder", "url": "url-encode", "cat": "dev", "icon": "fa-link", "desc": "Encode/Decode URLs.", "tag": "" },
    { "name": "UUID Generator", "url": "uuid-gen", "cat": "dev", "icon": "fa-fingerprint", "desc": "Generate Unique IDs.", "tag": "PRO" },

    // =========================================
    // CATEGORY 2: BUSINESS TOOLS
    // =========================================
    { "name": "Sales Tax Calc", "url": "sales-tax", "cat": "business", "icon": "fa-receipt", "desc": "Calculate tax & totals.", "tag": "" },
    { "name": "Commission Calc", "url": "commission-calc", "cat": "business", "icon": "fa-hand-holding-dollar", "desc": "Sales commissions.", "tag": "MONEY" },
    { "name": "GST / VAT Calc", "url": "gst-calc", "cat": "business", "icon": "fa-calculator", "desc": "Add/Remove tax.", "tag": "" },
    { "name": "Invoice Generator", "url": "invoice-generator", "cat": "business", "icon": "fa-file-invoice-dollar", "desc": "Create PDF invoices.", "tag": "PRO" },
    { "name": "Loan Calculator", "url": "loan-calculator", "cat": "business", "icon": "fa-sack-dollar", "desc": "Mortgage payments.", "tag": "" },
    { "name": "PayPal Fee Calc", "url": "paypal-fee", "cat": "business", "icon": "fa-paypal", "desc": "Transfer fees.", "tag": "" },
    { "name": "PO Generator", "url": "po-generator", "cat": "business", "icon": "fa-file-signature", "desc": "Purchase Orders.", "tag": "" },
    { "name": "Privacy Policy Gen", "url": "privacy-policy", "cat": "business", "icon": "fa-shield-halved", "desc": "Legal policies.", "tag": "LEGAL" },
    { "name": "Profit Margin Tool", "url": "profit-calculator", "cat": "business", "icon": "fa-chart-line", "desc": "Margin & markup.", "tag": "" },
    { "name": "Receipt Maker", "url": "receipt-maker", "cat": "business", "icon": "fa-receipt", "desc": "Generate receipts.", "tag": "FREE" },
    { "name": "Rent vs. Buy", "url": "rent-vs-buy", "cat": "business", "icon": "fa-house-chimney", "desc": "Renting vs Buying.", "tag": "HOT" },
    { "name": "Resignation Letter", "url": "resignation-letter", "cat": "business", "icon": "fa-envelope-open-text", "desc": "Write letters.", "tag": "" },
    { "name": "Hourly to Salary", "url": "salary-converter", "cat": "business", "icon": "fa-money-bill-wave", "desc": "Wage converter.", "tag": "NEW" },
    { "name": "Inflation Calc", "url": "inflation-calc", "cat": "business", "icon": "fa-arrow-trend-up", "desc": "Purchasing power.", "tag": "HOT" },
    { "name": "Paycheck Calc", "url": "paycheck-calc", "cat": "business", "icon": "fa-money-check-dollar", "desc": "Take-home pay.", "tag": "HOT" },
    { "name": "CPM Calculator", "url": "cpm-calc", "cat": "business", "icon": "fa-chart-pie", "desc": "Ad revenue calc.", "tag": "PRO" },

    // =========================================
    // CATEGORY 3: TEXT TOOLS
    // =========================================
    { "name": "Text Cleaner", "url": "text-cleaner", "cat": "text", "icon": "fa-broom", "desc": "Remove spaces/HTML.", "tag": "HOT" },
    { "name": "URL Slug Gen", "url": "slug-generator", "cat": "text", "icon": "fa-link", "desc": "SEO-friendly URLs.", "tag": "SEO" },
    { "name": "Fancy Text Gen", "url": "fancy-text", "cat": "text", "icon": "fa-wand-magic-sparkles", "desc": "Cool fonts.", "tag": "VIRAL" },
    { "name": "Text Diff Checker", "url": "diff-checker", "cat": "text", "icon": "fa-code-compare", "desc": "Compare texts.", "tag": "DEV" },
    { "name": "Markdown Editor", "url": "markdown-editor", "cat": "text", "icon": "fa-file-pen", "desc": "Markdown preview.", "tag": "DEV" },
    { "name": "Text to Binary", "url": "binary-text", "cat": "text", "icon": "fa-terminal", "desc": "010101 code.", "tag": "GEEK" },
    { "name": "Text Repeater", "url": "text-repeater", "cat": "text", "icon": "fa-repeat", "desc": "Repeat text.", "tag": "VIRAL" },
    { "name": "Case Converter", "url": "case-converter", "cat": "text", "icon": "fa-font", "desc": "Convert case.", "tag": "" },
    { "name": "Lorem Ipsum", "url": "lorem-ipsum", "cat": "text", "icon": "fa-paragraph", "desc": "Dummy text.", "tag": "" },
    { "name": "Word Counter", "url": "word-counter", "cat": "text", "icon": "fa-pen-nib", "desc": "Count words.", "tag": "" },

    // =========================================
    // CATEGORY 4: SOCIAL MEDIA
    // =========================================
    { "name": "Instagram Tools", "url": "instagram", "cat": "social", "icon": "fa-instagram", "desc": "Engagement calc.", "tag": "" },
    { "name": "TikTok Money", "url": "tiktok", "cat": "social", "icon": "fa-tiktok", "desc": "Estimate earnings.", "tag": "VIRAL" },
    { "name": "Tweet Generator", "url": "tweet-img", "cat": "social", "icon": "fa-twitter", "desc": "Fake tweets.", "tag": "FUN" },
    { "name": "YouTube Thumbnails", "url": "youtube-thumb", "cat": "social", "icon": "fa-youtube", "desc": "Download thumbnails.", "tag": "" },
    { "name": "YouTube Tags", "url": "yt-tags", "cat": "social", "icon": "fa-tags", "desc": "Extract keywords.", "tag": "SEO" },

    // =========================================
    // CATEGORY 5: AI TOOLS
    // =========================================
    { "name": "Text to Speech", "url": "text-to-speech", "cat": "ai", "icon": "fa-volume-high", "desc": "Text to audio.", "tag": "HOT" },
    { "name": "Business Name Gen", "url": "business-name", "cat": "ai", "icon": "fa-briefcase", "desc": "Brand names.", "tag": "AI" },
    { "name": "Slogan Generator", "url": "slogan-gen", "cat": "ai", "icon": "fa-lightbulb", "desc": "Catchy taglines.", "tag": "" },

    // =========================================
    // CATEGORY 6: STUDENT TOOLS
    // =========================================
    { "name": "Age Calculator", "url": "age-calculator", "cat": "student", "icon": "fa-hourglass-start", "desc": "Calculate age.", "tag": "FUN" },
    { "name": "Citation Machine", "url": "citation", "cat": "student", "icon": "fa-quote-right", "desc": "Generate citations.", "tag": "" },
    { "name": "GPA Calculator", "url": "gpa-calc", "cat": "student", "icon": "fa-graduation-cap", "desc": "Calculate GPA.", "tag": "" },

    // =========================================
    // CATEGORY 7: IMAGE TOOLS
    // =========================================
    { "name": "Image Compressor", "url": "img-compress", "cat": "image", "icon": "fa-file-zipper", "desc": "Reduce image size.", "tag": "HOT" },

    // =========================================
    // CATEGORY 8: FUN & GAMES
    // =========================================
    { "name": "Love Calculator", "url": "love-calculator", "cat": "fun", "icon": "fa-heart-pulse", "desc": "Compatibility test.", "tag": "VIRAL" },

    // =========================================
    // CATEGORY 9: HEALTH TOOLS
    // =========================================
    { "name": "BMI Calculator", "url": "bmi-calculator", "cat": "health", "icon": "fa-weight-scale", "desc": "Check Body Mass Index.", "tag": "HOT" }
];
