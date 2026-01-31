import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="https://images.dualite.app/c72297db-9332-4345-b106-f5c9d41cd163/Logo_Procifarmed-99bff07b-6843-44cf-8fd4-c09206acedd9.webp" 
            alt="ProcifarMed Logo" 
            className="h-12 w-auto object-contain"
          />
          {/* Ocultando o texto em telas menores se o logo já tiver o nome, ou mantendo para reforço de marca se necessário. 
              Vou manter apenas o logo visualmente se ele for completo, mas como é um logo novo, vou deixar o texto ao lado 
              apenas se o logo for só o ícone. Assumindo que o logo é completo, vou esconder o texto ou ajustar.
              Neste caso, vou manter o texto oculto visualmente mas acessível, ou remover se o logo for o nome completo.
              Vou optar por exibir o nome estilizado ao lado para garantir legibilidade caso o logo seja pequeno.
          */}
          <span
            className={cn(
              "text-2xl font-bold tracking-tight transition-colors hidden sm:block",
              isScrolled ? "text-slate-900" : "text-slate-900 lg:text-white"
            )}
          >
            ProcifarMed
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-red-500 transition-colors",
                isScrolled ? "text-slate-600" : "text-slate-200"
              )}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            size="sm"
            className="ml-4"
            onClick={() => document.getElementById("contato")?.scrollIntoView()}
          >
            Falar com Especialista
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 md:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 font-medium py-2 hover:text-red-600 border-b border-slate-50 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Phone className="w-4 h-4 mr-2" />
            Falar Agora
          </Button>
        </div>
      )}
    </header>
  );
}
