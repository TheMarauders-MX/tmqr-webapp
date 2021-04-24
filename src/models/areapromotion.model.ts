export interface AreaPromotionContent{
    id: number;
    name: string;
    route: string;
    image: string;
    discount: number;
}

export interface AreaContent{
    id: number;
    area: string;
    image: string;
    name: string;
    oldPrice?: number;
    currentPrice: number;
    punctuation: number;
    route: string;
}