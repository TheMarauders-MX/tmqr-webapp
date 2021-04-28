import { AreaContent } from "@models/areapromotion.model";

export const areaSampleContent : AreaContent[] = [
    {
        department:"Computacion",
        currentRoute:"computacion",
        items: [
            {
                id: 1,
                name: "Laptop Microsoft Surface 3 13.3 Pulgadas 8K UHD Intel HD Graphics 620 Intel Core i5 8 GB RAM 128 GB SSD",
                detail: "",
                images: [{url: "https://ss628.liverpool.com.mx/lg/1098132739.jpg"}],
                oldPrice: 26499,
                currentPrice: 23999,
                extraDiscount: 15,
                punctuation: 3.5,
                route: "computacion/1"
            },
            {
                id: 2,
                name: "Laptop Huawei Modelo MateBook 14, AMD Ryzen 5, 16 GB RAM, 512 GB SSD, 14 Pulgadas",
                detail: "",
                images: [{url: "https://ss628.liverpool.com.mx/lg/1102024601.jpg"}],
                currentPrice: 24898,
                extraDiscount: 0,
                punctuation: 5,
                route: "computacion/2"
            },
            {
                id: 3,
                name: "Laptop MacOS",
                detail: "",
                images: [{url: "https://ss628.liverpool.com.mx/lg/1102024601.jpg"}],
                currentPrice: 24898,
                extraDiscount: 0,
                punctuation: 2,
                route: "computacion/3"
            },
        ]
    },
    {
        department: "Zapatería",
        currentRoute: "zapateria",
        items:[]
    },
    {
        department: "Llantas",
        currentRoute: "llantas",
        items:[]
    }
];