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
export interface PageProps {
    setPage: (page: string) => void;
}