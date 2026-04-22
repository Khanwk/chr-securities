export interface NavLink {
    label: string;
    key: string;
}

export interface TrustItem {
    label: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface MosaicImage {
    src: string;
    alt: string;
}

export interface ServiceTile {
    title: string;
    tag: string;
    img: string;
}

export interface ServiceDetail {
    title: string;
    bullets: string[];
}

export interface Testimonial {
    name: string;
    role: string;
    quote: string;
}
export interface Credential {
    title: string;
    body: string;
}

export interface Product {
    brand: string;
    description: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqCategory {
    tab: string;
    items: FaqItem[];
}

export interface CyberService {
    title: string;
    bullets: string[];
}

export interface CyberPricingCard {
    title: string;
    price: string;
    description: string;
    cta: string;
    ctaTarget: "modal-cyber" | "contact" | "modal-quote";
}

export interface CyberWhyItem {
    heading: string;
    body: string;
}

export interface CyberPartner {
    name: string;
    subtitle: string;
    description: string;
    tags: string[];
}

export interface ModalProps {
    onClose: () => void;
}
export interface TimeSlot {
    time: string;
    taken: boolean;
}

export interface CalendarDay {
    day: string;
    short: string;
    slots: TimeSlot[];
}

export interface ContactForm {
    firstName: string;
    phone: string;
    email: string;
    propertyType: string;
    service: string;
    message: string;
}
export interface ServiceDetail {
    title: string;
    tag: string;
    img: string;
    bullets: string[];
}
export interface ChatMessage {
    role: "bot" | "user";
    text: string;
}

export interface BotRule {
    keywords: string[];
    response: string;
}

export interface QuickChip {
    label: string;
    message: string;
}