import type {
    NavLink,
    TrustItem,
    Stat,
    MosaicImage,
    ServiceTile,
    ServiceDetail,
    Testimonial,
    Credential,
    Product,
    FaqCategory,
} from "./types";

export const navLinks: NavLink[] = [
    { label: "Home", key: "home" },
    { label: "Services", key: "services" },
    { label: "Why CHR", key: "why" },
    { label: "Cyber Security", key: "cyber" },
    { label: "FAQ", key: "faq" },
    { label: "Contact", key: "contact" },
];

export const trustItems: TrustItem[] = [
    { label: "PSA Licensed Engineer" },
    { label: "Fully Insured — Arachas" },
    { label: "Garda Response Coordination" },
    { label: "25 Years Expertise" },
];

export const stats: Stat[] = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Installations" },
    { value: "24/7", label: "Monitoring" },
];

export const mosaicImages: MosaicImage[] = [
    {
        src: "https://images.unsplash.com/photo-1557597774-9d475d030a94?auto=format&fit=crop&w=600&q=80",
        alt: "CCTV Camera",
    },
    {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
        alt: "Alarm Panel",
    },
    {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
        alt: "Monitoring Room",
    },
];

export const serviceTiles: ServiceTile[] = [
    {
        title: "CCTV Installation",
        tag: "Hikvision",
        img: "https://images.unsplash.com/photo-1581091215367-59ab6c8b7f50?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Intruder Alarms",
        tag: "HKC Smart",
        img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1b1?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Fire Alarms",
        tag: "Certified",
        img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "24/7 Monitoring",
        tag: "Rapid Response",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Access Control",
        tag: "ACT Systems",
        img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Maintenance",
        tag: "Annual Cover",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    },
];

export const serviceDetails: ServiceDetail[] = [
    {
        title: "CCTV Systems",
        bullets: [
            "24/7 surveillance protection",
            "Free mobile app — view cameras anywhere in the world",
            "HD IP cameras with analytics and night vision (Hikvision)",
            "Supply, fit, wire, install, repair and upgrade",
            "4, 8, 16, 32 or 64 camera configurations",
            "24hr monitoring via Resure surveillance room",
            "Private houses, commercial, domestic and industrial",
        ],
    },
    {
        title: "Intruder Alarms",
        bullets: [
            "Wired and wireless alarm systems",
            "HKC smart app with 4G GSM and Wi-Fi backup",
            "Contact, vibration and PIR beam sensors",
            "24hr monitoring station connection",
            "Rapid Garda response via alarm control",
            "Repair and upgrade of existing systems",
            "Maintenance contracts available",
        ],
    },
    {
        title: "Fire Alarm Systems",
        bullets: [
            "Early fire detection — alerts people to respond quickly",
            "Automatic fire brigade notification on activation",
            "Smoke, heat and flame detectors",
            "Audible and visual warnings for occupants",
            "Compliant with Irish Fire Safety Regulations",
            "Quarterly maintenance contracts available",
            "Fire and emergency lighting inspection reports provided",
        ],
    },
    {
        title: "24/7 Monitoring",
        bullets: [
            "Professional monitoring via Resure",
            "Covers intruder alarms, fire alarms and CCTV",
            "Rapid Garda response coordination",
            "Automatic fire brigade notification",
            "Private houses, commercial, domestic and industrial",
        ],
    },
    {
        title: "Access Control",
        bullets: [
            "Door entry for controlled area access",
            "Standalone system for single-door entry",
            "PC-based system for multi-door access control",
            "Per-person, per-door, per-time access restrictions",
            "Wide range of audio and video intercoms",
            "Repair and upgrade of existing systems",
        ],
    },
    {
        title: "Maintenance Contracts",
        bullets: [
            "Annual and quarterly service contracts",
            "Emergency repairs — 24hr call-out for contract clients",
            "System testing and certification",
            "Preventative maintenance schedules",
            "Fire alarm and emergency lighting reports",
        ],
    },
];

export const testimonials: Testimonial[] = [
    {
        name: "Sean P.",
        role: "Retail Business Owner",
        quote:
            "Professional from start to finish. CCTV and alarm installed perfectly — you can see Ciaran has been doing this for decades.",
    },
    {
        name: "Mary O'B.",
        role: "Homeowner",
        quote:
            "Brilliant service — tidy, efficient and he walked me through everything. The alarm system is excellent. Highly recommend.",
    },
    {
        name: "David M.",
        role: "Industrial Site Manager",
        quote:
            "Full CCTV across three buildings. Ciaran's knowledge and attention to detail were outstanding. Will be using CHR again.",
    },
];

export const credentials: Credential[] = [
    {
        title: "PSA Licensed",
        body: "Mandatory licence from Ireland's Private Security Authority. Garda-vetted and trained.",
    },
    {
        title: "Arachas Insured",
        body: "Comprehensively insured through Arachas on every job, every property.",
    },
    {
        title: "Fire Certified",
        body: "All fire systems comply with Irish Fire Safety Regulations — fully certified.",
    },
    {
        title: "Garda Linked",
        body: "Direct Garda response coordination on all monitored alarm systems.",
    },
];

export const products: Product[] = [
    {
        brand: "Hikvision",
        description: "CCTV cameras — HD and IP. Dome, bullet, PTZ for all environments.",
    },
    {
        brand: "HKC",
        description: "Smart alarm systems. Ireland's leading brand. 4G GSM & Wi-Fi, smart app.",
    },
    {
        brand: "ACT",
        description: "Access control — standalone and PC-based. Fob, card and keypad entry.",
    },
    {
        brand: "Intercoms",
        description: "Audio and video intercoms across a wide range of budgets.",
    },
];

export const approvedSuppliers: string[] = [
    "Fortus",
    "Reliable",
    "Mercury",
    "ESL",
    "New National Wholesale Electrical",
];

export const faqCategories: FaqCategory[] = [
    {
        tab: "CCTV",
        items: [
            {
                question: "How many cameras do I need?",
                answer:
                    "Depends on your site. We offer 4 to 64 cameras. Ciaran will visit and recommend the right configuration free of charge.",
            },
            {
                question: "Can I view my cameras on my phone?",
                answer:
                    "Yes. Every Hikvision system includes a free app for live and recorded viewing from anywhere. Push notifications for motion events.",
            },
            {
                question: "Do you repair or upgrade existing CCTV?",
                answer:
                    "Yes — we assess, repair and upgrade most systems regardless of who installed them.",
            },
            {
                question: "Can you monitor my CCTV 24 hours a day?",
                answer:
                    "Yes. We connect your system to Resure's professional monitoring station with rapid response when needed.",
            },
        ],
    },
    {
        tab: "Intruder Alarms",
        items: [
            {
                question: "What is the difference between wired and wireless alarms?",
                answer:
                    "Wired alarms are permanent and ideal for larger sites. Wireless HKC systems are equally secure, faster to install, with 4G GSM and Wi-Fi backup — ideal for most homes and businesses.",
            },
            {
                question: "Can I control my alarm from my phone?",
                answer:
                    "Yes. HKC systems include a smart app to arm, disarm and monitor from anywhere. 4G backup means it works even if broadband goes down.",
            },
            {
                question: "Will the Gardai respond if my alarm triggers?",
                answer:
                    "With a monitored system, yes. Our monitoring centre verifies and coordinates a rapid Garda response.",
            },
        ],
    },
    {
        tab: "Fire Alarms",
        items: [
            {
                question: "Do I legally need a certified fire alarm system?",
                answer:
                    "Commercial premises in Ireland must comply with Irish Fire Safety Regulations. We install, service and certify all systems and provide compliance reports.",
            },
            {
                question: "How often does a fire alarm need to be serviced?",
                answer:
                    "Quarterly for commercial systems. We offer maintenance contracts so you never miss a date.",
            },
            {
                question: "Will the fire brigade be called automatically?",
                answer:
                    "With a monitored fire alarm, yes. The monitoring centre notifies the fire brigade immediately on activation.",
            },
        ],
    },
    {
        tab: "Access Control",
        items: [
            {
                question: "What types of access control do you supply?",
                answer:
                    "ACT standalone single-door systems and PC-based multi-door systems. Key fobs, access cards, keypads and a range of audio and video intercoms.",
            },
            {
                question: "Can I restrict access by person and time?",
                answer:
                    "Yes. PC-based systems allow per-person, per-door, per-time access control — ideal for commercial and industrial sites.",
            },
        ],
    },
    {
        tab: "Monitoring",
        items: [
            {
                question: "What does 24/7 monitoring cover?",
                answer:
                    "Monitoring via Resure covers intruder alarms, fire alarms and CCTV. Alerts trigger contact with you and emergency response coordination.",
            },
            {
                question: "Do you offer maintenance contracts?",
                answer:
                    "Yes — annual and quarterly contracts with 24hr emergency call-out, testing and certification.",
            },
        ],
    },
    {
        tab: "Cyber Security",
        items: [
            {
                question: "What is a Cyber Score?",
                answer:
                    "A quick health check of how exposed your business is to cyber threats — like a security MOT for your digital environment. Powered by Apply Cyber. Free.",
            },
            {
                question: "Why does a security company offer cyber services?",
                answer:
                    "Your CCTV, alarm app and monitoring all connect to the internet. If the network is compromised, physical security is too. We partner with Apply Cyber and Trust Vector to bring both layers together.",
            },
            {
                question: "How much does a cyber consultation cost?",
                answer: "From €650. Includes a full assessment, risk report and action plan.",
            },
        ],
    },
    {
        tab: "General",
        items: [
            {
                question: "What is a PSA licence?",
                answer:
                    "A mandatory legal authorisation from Ireland's Private Security Authority — required for alarm and CCTV installation. Ensures all personnel are Garda-vetted and trained. Ciaran holds a full PSA licence.",
            },
            {
                question: "Do you serve homes and businesses?",
                answer:
                    "Yes — private homes, commercial premises, retail, domestic and industrial sites across Ireland.",
            },
            {
                question: "How do I get a quote?",
                answer:
                    "Click Free Quote in the navigation, use the Contact page, or call Ciaran directly on 087 909 6434.",
            },
        ],
    },
];