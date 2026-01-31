import React from "react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Sobre a <span className="text-red-600">ProcifarMed</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Fundada com o propósito de elevar o padrão de atendimento no setor hospitalar, a ProcifarMed se consolidou como referência na distribuição de equipamentos e insumos médicos.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nossa trajetória é marcada pelo compromisso inabalável com a qualidade e a segurança. Entendemos que cada produto fornecido desempenha um papel crucial no cuidado ao paciente, por isso trabalhamos apenas com as melhores marcas e rigorosos processos de controle.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "Certificação de Qualidade",
                "Atendimento Especializado",
                "Logística Eficiente",
                "Parceiros Renomados"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-red-600 w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600">10+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Anos de Mercado</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600">5k+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Clientes Atendidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600">24h</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Suporte Técnico</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-red-100 rounded-2xl transform rotate-3 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1000"
              alt="Equipe ProcifarMed em reunião"
              className="rounded-xl shadow-xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-lg shadow-lg max-w-xs border-l-4 border-red-600">
              <p className="text-sm font-medium text-slate-800">
                "Nossa missão é prover soluções que salvam vidas, com ética e responsabilidade."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
