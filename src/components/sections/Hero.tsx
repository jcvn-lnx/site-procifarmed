import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000"
          alt="Medical Equipment Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-100 text-sm font-medium mb-6 backdrop-blur-sm">
            Excelência em Distribuição Hospitalar
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Soluções em equipamentos e produtos para a <span className="text-red-500">área da saúde</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
            Fornecemos tecnologia de ponta e materiais essenciais para hospitais, clínicas e laboratórios. Qualidade garantida e entrega ágil para quem cuida da vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              onClick={() => document.getElementById("produtos")?.scrollIntoView()}
              className="group"
            >
              Ver Produtos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
