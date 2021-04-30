export interface AreaPromotionContent{
    id: number;
    department: string;
    route: string;
    image: string;
    discount: number;
}

export interface AreaContent{
    department: string;
    currentRoute: string;
    discount: number;
    image: string;
    items: ProductContent[];
}

export interface ProductContent{
    id: number;
    name: string;
    oldPrice?: number;
    currentPrice: number;
    extraDiscount: number;
    punctuation: number;
    detail: string;
    route: string;
    images: images[];
}

export interface images {
    url: string;
}