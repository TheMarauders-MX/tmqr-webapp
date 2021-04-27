import { AreaPromotionContent } from "@models/areapromotion.model";

export const sampleAreasJSON : AreaPromotionContent[] = [
    {
      id: 1,
      name: "Computación",
      discount: 30,
      images: [{url: "https://assetspwa.liverpool.com.mx/assets/digital/home/img/abril21/bpromo01c_190421coc.jpg"}],
      route: "computacion",
    },
    {
      id: 2,
      name: "Zapatería",
      discount: 40,
      images: [{url: "https://assetspwa.liverpool.com.mx/assets/digital/home/img/abril21/bpromo01a_190421lin.jpg"}],
      route: "zapateria",
    },
    {
      id: 3, 
      name: "Llantas",
      images: [{url: "https://assetspwa.liverpool.com.mx/assets/digital/home/img/abril21/bpromo01d_190421com.jpg"}],
      discount: 10,
      route: "llantas",
    }
];