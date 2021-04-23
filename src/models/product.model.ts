export interface ProductContent{
    id: number;
    name: string;
    price: number;
    detail: string;
    images: images[];
}

export interface images {
    url: string;
}