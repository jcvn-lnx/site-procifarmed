import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img 
                src="https://images.dualite.app/c72297db-9332-4345-b106-f5c9d41cd163/Logo_Procifarmed-99bff07b-6843-44cf-8fd4-c09206acedd9.webp" 
                alt="ProcifarMed Logo" 
                className="h-10 w-auto object-contain bg-white rounded-md p-1"
              />
              <span className="text-xl font-bold text-white">ProcifarMed</span>
            </a>
            <p className="text-sm leading-relaxed mb-4">
              Soluções completas em equipamentos hospitalares e medicamentos. Qualidade e confiança para cuidar da vida.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#produtos" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Mobiliário Hospitalar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diagnóstico</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medicamentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Descartáveis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ProcifarMed. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
