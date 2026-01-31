import React from "react";
import { products } from "../../data/products";
import { Button } from "../ui/Button";

export function Products() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-slate-600 max-w-xl">
              Confira nossa seleção de equipamentos e medicamentos das melhores marcas do mercado.
            </p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex">
            Ver Catálogo Completo
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  {product.category}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {product.description}
                </p>
                <Button
                  className="w-full mt-auto"
                  variant="secondary"
                  size="sm"
                  onClick={() => document.getElementById("contato")?.scrollIntoView()}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">
             Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
}
