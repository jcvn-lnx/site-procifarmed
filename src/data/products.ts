export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mesa para Massagem/Exame Salutem",
    description: "Estrutura resistente e estofado confortável para exames clínicos e massagens.",
    category: "Mobiliário",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "2",
    name: "Escada 2 Degraus Salutem",
    description: "Auxiliar para macas e mesas de exame, com piso antiderrapante.",
    category: "Acessórios",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "3",
    name: "Braço para Injeção HTC",
    description: "Modelo anatômico realista para treinamento de punção venosa.",
    category: "Treinamento",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "4",
    name: "Armário Vitrine Salutem",
    description: "Armário com porta de vidro para armazenamento seguro de medicamentos.",
    category: "Mobiliário",
    image: "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "5",
    name: "Biombo Duplo HTC",
    description: "Divisória móvel com estrutura tubular e cortinas laváveis.",
    category: "Mobiliário",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "6",
    name: "Biombo Triplo Salutem",
    description: "Maior privacidade com três faces articuladas e rodízios.",
    category: "Mobiliário",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "7",
    name: "Aparelho de Pressão Premium (Velcro)",
    description: "Esfigmomanômetro aneroide com fecho em velcro de alta durabilidade.",
    category: "Diagnóstico",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "8",
    name: "Aparelho de Pressão Premium (Metal)",
    description: "Esfigmomanômetro com fecho em metal para ajuste preciso.",
    category: "Diagnóstico",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1b98?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "9",
    name: "Aparelho de Pressão Premium (Metal + Esteto)",
    description: "Kit completo com fecho em metal e estetoscópio simples.",
    category: "Diagnóstico",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "10",
    name: "Aparelho de Pressão Premium (Velcro + Esteto)",
    description: "Kit prático com fecho em velcro e estetoscópio incluso.",
    category: "Diagnóstico",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "11",
    name: "Advil 400mg",
    description: "Analgésico e antitérmico de rápida ação. Caixa com 10 cápsulas.",
    category: "Medicamentos",
    image: "https://images.unsplash.com/photo-1626958390898-162d3577f293?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "12",
    name: "Dorflex",
    description: "Relaxante muscular e analgésico. Indicado para dores tensionais.",
    category: "Medicamentos",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
  },
];
