import React from "react";
import { Building2, Stethoscope, Activity, FlaskConical } from "lucide-react";

const segments = [
  {
    icon: Stethoscope,
    title: "Consultórios",
    description: "Equipamentos compactos e essenciais para o dia a dia médico.",
  },
  {
    icon: Building2,
    title: "Clínicas",
    description: "Soluções completas para clínicas de diversas especialidades.",
  },
  {
    icon: Activity,
    title: "Hospitais",
    description: "Tecnologia de alta complexidade e insumos em larga escala.",
  },
  {
    icon: FlaskConical,
    title: "Laboratórios",
    description: "Precisão e segurança para diagnósticos e análises clínicas.",
  },
];

export function Segments() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Onde Atuamos
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Adaptamos nossas soluções para atender com excelência diferentes tipos de estabelecimentos de saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <segment.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {segment.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
