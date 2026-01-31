export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string | null;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mesa para Massagem/Exame Salutem",
    description: "Estrutura resistente e estofado confortável para exames clínicos e massagens.",
    category: "Mobiliário",
    image: "https://images.dualite.app/c72297db-9332-4345-b106-f5c9d41cd163/kjMMuvbLj8HBj0G-HvoUv5L45gjMRBZ7U4v9azWkhaPQUhHJXcIRzv1KfQmljbs3N2AfY3fkPT1rbMG3UPTwReiU-Tp4OvhoOSWSCD_2hiAOe8Zdfa9ILUPkeFuEwBAZycCqV5-Itsw1bw6TWsO1qrxUXsnoHZqla-s1IRpKc1egVSyJQdp28vVQhDedHMeUV9QEVbu7qr1Zy4jDC7j4wPdNWmjkxmdxhjo7pwbBBrA-09d5281d-3856-40f2-805b-6aeb67ecd465.webp",
  },
  {
    id: "2",
    name: "Escada 2 Degraus Salutem",
    description: "Auxiliar para macas e mesas de exame, com piso antiderrapante.",
    category: "Acessórios",
    image: "https://images.dualite.app/c72297db-9332-4345-b106-f5c9d41cd163/7Sx-jp4o8WlsQgW4QgrHh390mZlzUBUjGb7Gt2P5CTMUOY7hpG8IYYlSjyq66McttA4j9fgT34M_wKaoHINykDzdtR44RzUQKlNTTAjZVZgs9Gy6TvjGhUbGVIro2lwNJ-tPnPSp9OqicCOBF1Sk1Xgjxg2p-ChAEDwnmYuQBfqGD_l2IKHhev3AJrTZjNKW6RHCXmZ8rEVd9VjMPQ9Nuji25vJ9U7-8VtYuLnXpIVhnhUGDy6FnGFQuch-4ed18cf0-8899-47c7-9f5c-ac62fbdba58f.webp",
  },
  {
    id: "3",
    name: "Braço para Injeção HTC",
    description: "Modelo anatômico realista para treinamento de punção venosa.",
    category: "Treinamento",
    image: "https://images.dualite.app/c72297db-9332-4345-b106-f5c9d41cd163/ntlQYNkFnjUCNEJXQBLkSNjWzKToXx4Mu7riuz0V7uDNZRCFL_gj6GQxnFhy4YURnSmSeyC6N7yuhITTFDu8RkHdjPKwIPPNsi-PZXkMOQNktqQxH26CP-9DWvcxn6HxPEWbAengGigSLhRRRgpQy9czDpk0y6IN3Ppostw7uCRLraxWZE2Wf_L20ym56KyVe6YfDyft1uPfmsIncHCPqhutnQGBz1SAvc5q2KXIrxDLAbUjGewQhBzib--3477be26-b046-4b97-b21b-b7850f29b8ad.webp",
  },
  {
    id: "4",
    name: "Armário Vitrine Salutem",
    description: "Armário com porta de vidro para armazenamento seguro de medicamentos.",
    category: "Mobiliário",
    image: "https://images.dualite.app/c72297db-9332-4345-b106-f5c9d41cd163/PO7JtjpoQ2xt3jJ2LRMjSNSk1HT60QUkOJtXp2KjnRcYUUdqIKxaPO2i53eHyAz1cNTpOVSqSZGaFkCTK37NQPrwrLSJ9OgY6uWg1cEVfzxmII7ZLwfxsNp-KIliWuMNJrox7CDWH5dxLFkqohkwuAn1bEUdFHgd7uV97a03qwCrzOHeQI9l9Q1FfHm0Xyih3_X2zmnqw-mmtBG-HZ0YBuhnk4deQIukaW_5lJOrgpZUIyFv0FIoyz2GOR-4633241a-6f60-4d68-b319-c819a8070647.webp",
  },
  {
    id: "5",
    name: "Biombo Duplo HTC",
    description: "Divisória móvel com estrutura tubular e cortinas laváveis.",
    category: "Mobiliário",
    image: null,
  },
  {
    id: "6",
    name: "Biombo Triplo Salutem",
    description: "Maior privacidade com três faces articuladas e rodízios.",
    category: "Mobiliário",
    image: null,
  },
  {
    id: "7",
    name: "Aparelho de Pressão Premium (Velcro)",
    description: "Esfigmomanômetro aneroide com fecho em velcro de alta durabilidade.",
    category: "Diagnóstico",
    image: null,
  },
  {
    id: "8",
    name: "Aparelho de Pressão Premium (Metal)",
    description: "Esfigmomanômetro com fecho em metal para ajuste preciso.",
    category: "Diagnóstico",
    image: null,
  },
  {
    id: "9",
    name: "Aparelho de Pressão Premium (Metal + Esteto)",
    description: "Kit completo com fecho em metal e estetoscópio simples.",
    category: "Diagnóstico",
    image: null,
  },
  {
    id: "10",
    name: "Aparelho de Pressão Premium (Velcro + Esteto)",
    description: "Kit prático com fecho em velcro e estetoscópio incluso.",
    category: "Diagnóstico",
    image: null,
  },
  {
    id: "11",
    name: "Advil 400mg",
    description: "Analgésico e antitérmico de rápida ação. Caixa com 10 cápsulas.",
    category: "Medicamentos",
    image: null,
  },
  {
    id: "12",
    name: "Dorflex",
    description: "Relaxante muscular e analgésico. Indicado para dores tensionais.",
    category: "Medicamentos",
    image: null,
  },
];
