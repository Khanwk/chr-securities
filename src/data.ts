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
    CyberService,
    CyberPricingCard,
    CyberWhyItem,
    CyberPartner,
    CalendarDay,
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
        src: "https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        img: "https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        title: "Intruder Alarms",
        tag: "HKC Smart",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=90",
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
        img: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

export const serviceDetails: ServiceDetail[] = [
    {
        title: "CCTV Systems",
        tag: "Hikvision",
        img: "https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=800",
        bullets: [
            "Protects your premises 24 hours a day, 365 days a year with video surveillance",
            "Free app provided — view cameras anytime, anywhere in the world",
            "IP high-definition cameras with analytics and night vision (Hikvision)",
            "We supply, fit, wire and install",
            "Repair and upgrade of existing systems",
            "Systems available in 4, 8, 16, 32 or 64 camera configurations depending on site",
            "24hr monitoring option via Resure surveillance room — your premises watched when you're not there",
            "Supply and fit to private houses, commercial, domestic and industrial premises",
        ],
    },
    {
        title: "Intruder Alarms",
        tag: "HKC Smart",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=90",
        bullets: [
            "Deters burglary — protects your premises and people",
            "Supply and fit of wired and wireless alarm systems",
            "Protection of windows and doors with contact and vibration sensors and internal PIR beams",
            "HKC smart app with 4G GSM and Wi-Fi — remote access from anywhere",
            "24hr monitoring station connection",
            "Rapid Garda response via alarm control",
            "Supply and fit to private houses, commercial, domestic and industrial premises",
            "Repair and upgrade of existing systems",
            "Maintenance contracts available",
        ],
    },
    {
        title: "Fire Alarm Systems",
        tag: "Certified",
        img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
        bullets: [
            "Detects fire early and alerts people so they can respond quickly",
            "We install and maintain fire alarm systems",
            "If alarm activates, the fire brigade is automatically notified via alarm control",
            "Systems identify heat, smoke and flames using smoke and heat detectors",
            "Audible warning (bells) and visual warning (flashing lights) to alert occupants",
            "Compliant with Irish Fire Safety Regulations",
            "Quarterly maintenance contracts available",
            "Fire alarm system report provided for inspection, testing and servicing",
            "Emergency lighting system report for inspection, testing and servicing",
            "Supply and fit to private houses, commercial, domestic and industrial premises",
        ],
    },
    {
        title: "24/7 Monitoring",
        tag: "Rapid Response",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        bullets: [
            "24hr professional monitoring via Resure for CCTV and alarm control",
            "Covers intruder alarms and fire alarms",
            "Rapid Garda response coordination",
            "Fire brigade notification on fire alarm activation",
            "Monitoring for private houses, commercial, domestic and industrial premises",
        ],
    },
    {
        title: "Access Control",
        tag: "ACT Systems",
        img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
        bullets: [
            "Door entry system to provide access to controlled areas",
            "Provides secure entry to a building and restricts individual access",
            "Standalone system available for single-door entry",
            "PC-based system for multi-door access control",
            "Wide range of intercoms to suit every budget",
            "Supply and fit to private houses, commercial, domestic and industrial premises",
            "Repair and upgrade of existing systems",
        ],
    },
    {
        title: "Maintenance Contracts",
        tag: "Annual Cover",
        img: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
        bullets: [
            "Annual and quarterly service contracts",
            "Emergency repairs",
            "24hr call-out service for contract clients",
            "System testing and certification",
            "Preventative maintenance schedules",
        ],
    },
];
export const tileToDetail: Record<string, string> = {
    "CCTV Installation": "CCTV Systems",
    "Intruder Alarms": "Intruder Alarms",
    "Fire Alarms": "Fire Alarm Systems",
    "24/7 Monitoring": "24/7 Monitoring",
    "Access Control": "Access Control",
    "Maintenance": "Maintenance Contracts",
};
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
                question: "Will the Gardaí respond if my alarm triggers?",
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

export const cyberServices: CyberService[] = [
    {
        title: "Cyber Security Assessment",
        bullets: [
            "Full evaluation of current cyber security posture",
            "Network and device vulnerability scan",
            "Email and user access risk review",
            "Internet-facing asset exposure check",
            "Phishing and social engineering risk assessment",
            "Clear risk report with priority actions",
        ],
    },
    {
        title: "Posture Audit & Misconfiguration Check",
        bullets: [
            "Review of systems for common misconfigurations",
            "Firewall and network configuration review",
            "Remote access and VPN security check",
            "Password policy and multi-factor authentication assessment",
            "Cloud storage and sharing permissions review",
            "CCTV and alarm system network exposure check",
        ],
    },
    {
        title: "Microsoft 365 & Azure Security",
        bullets: [
            "Specialist review of Microsoft 365 and Azure environments",
            "Microsoft 365 security baseline review",
            "Azure Active Directory / Entra ID audit",
            "Email security and anti-phishing configuration",
            "Conditional access and MFA policies",
            "SharePoint and OneDrive permission audit",
        ],
    },
    {
        title: "Compliance Baselining & Certification Readiness",
        bullets: [
            "Prepare your business for cyber compliance obligations",
            "GDPR data security obligation review",
            "ISO 27001 gap analysis",
            "Cyber Essentials readiness assessment",
            "NIS2 Directive applicability check (EU/Ireland)",
            "Compliance roadmap and action plan",
        ],
    },
];

export const cyberPricing: CyberPricingCard[] = [
    {
        title: "Free Cyber Score",
        price: "Free",
        description:
            "Instant cyber health check. See how exposed your business is in minutes — no commitment required.",
        cta: "Get Yours Now",
        ctaTarget: "modal-cyber",
    },
    {
        title: "Cyber Consultation",
        price: "From €650",
        description:
            "One-to-one cyber assessment with a detailed risk report and practical action plan for your business.",
        cta: "Book Now",
        ctaTarget: "contact",
    },
    {
        title: "SMB Starter Package",
        price: "Available",
        description:
            "Ongoing cyber monitoring, compliance support and advisory for Irish SMBs. Ask for a tailored package.",
        cta: "Enquire",
        ctaTarget: "modal-quote",
    },
];

export const cyberWhyItems: CyberWhyItem[] = [
    {
        heading: "Your CCTV is on your network",
        body: "An unsecured camera is a door into your business. Cyber security closes that door.",
    },
    {
        heading: "Your alarm app is on your phone",
        body: "If your device or email is compromised, so is your alarm system.",
    },
    {
        heading: "GDPR is your legal responsibility",
        body: "Irish businesses must protect customer data. A breach costs far more than prevention.",
    },
    {
        heading: "Most Irish SMBs are unprotected",
        body: "Over 60% of businesses hit by a cyber attack close within 6 months.",
    },
];

export const cyberPartners: CyberPartner[] = [
    {
        name: "Apply Cyber",
        subtitle: "Powered by Apply Cyber Platform",
        description:
            "Apply Cyber is the AI-powered platform behind CHR's cyber services — delivering cyber risk scoring, compliance monitoring, threat detection and automated security posture management for Irish businesses.",
        tags: ["AI-Powered", "Cyber Risk Scoring", "Compliance", "Threat Detection"],
    },
    {
        name: "Trust Vector",
        subtitle: "Cyber & AI Partner — Ireland",
        description:
            "Trust Vector is CHR Securities' Irish cyber and AI partner — providing risk advisory, compliance support and threat intelligence tailored for the Irish and EU market.",
        tags: ["Irish Partner", "EU Compliant", "Risk Advisory", "AI Services"],
    },
];


export const calendarDays: CalendarDay[] = [
    {
        day: "Monday",
        short: "Mon",
        slots: [
            { time: "9:00", taken: false },
            { time: "9:30", taken: true },
            { time: "10:00", taken: false },
            { time: "10:30", taken: true },
            { time: "11:00", taken: false },
            { time: "11:30", taken: false },
            { time: "2:00", taken: true },
            { time: "2:30", taken: false },
            { time: "3:00", taken: false },
        ],
    },
    {
        day: "Tuesday",
        short: "Tue",
        slots: [
            { time: "9:00", taken: false },
            { time: "9:30", taken: false },
            { time: "10:00", taken: true },
            { time: "10:30", taken: false },
            { time: "11:00", taken: true },
            { time: "11:30", taken: false },
            { time: "2:00", taken: false },
            { time: "2:30", taken: true },
            { time: "3:00", taken: false },
        ],
    },
    {
        day: "Wednesday",
        short: "Wed",
        slots: [
            { time: "9:00", taken: true },
            { time: "9:30", taken: false },
            { time: "10:00", taken: false },
            { time: "10:30", taken: true },
            { time: "11:00", taken: false },
            { time: "11:30", taken: true },
            { time: "2:00", taken: false },
            { time: "2:30", taken: false },
            { time: "3:00", taken: true },
        ],
    },
    {
        day: "Thursday",
        short: "Thu",
        slots: [
            { time: "9:00", taken: false },
            { time: "9:30", taken: true },
            { time: "10:00", taken: false },
            { time: "10:30", taken: false },
            { time: "11:00", taken: true },
            { time: "11:30", taken: false },
            { time: "2:00", taken: true },
            { time: "2:30", taken: false },
            { time: "3:00", taken: false },
        ],
    },
    {
        day: "Friday",
        short: "Fri",
        slots: [
            { time: "9:00", taken: false },
            { time: "9:30", taken: false },
            { time: "10:00", taken: true },
            { time: "10:30", taken: false },
            { time: "11:00", taken: false },
            { time: "11:30", taken: true },
            { time: "2:00", taken: false },
            { time: "2:30", taken: true },
            { time: "3:00", taken: false },
        ],
    },
];

export const propertyTypes: string[] = [
    "Private Home",
    "Commercial Business",
    "Industrial Site",
    "Retail Premises",
];

export const contactServiceOptions: string[] = [
    "CCTV Installation",
    "Intruder Alarm System",
    "Fire Alarm System",
    "Access Control / Intercom",
    "24/7 Monitoring",
    "Maintenance Contract",
    "Business Security Bundle",
    "Free Cyber Score",
    "Cyber Consultation (from €650)",
    "Apply Cyber / Trust Vector Enquiry",
    "General Enquiry",
];