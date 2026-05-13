import "./../globals.css";

import Image from "next/image";
import Link from "next/link";

import MegaMenu from "@/components/ui/MegaMenu";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import FloaterButton from "@/components/ui/FloaterButton";

import Logo from "@/components/ui/svg/CLARAMENTE-LOGO.svg";

import {
  CheckCircle2,
  ArrowRight,
  ShieldCheckIcon,
  Clock4Icon,
  MessageCircleHeart,
} from "lucide-react";

export default function ObrigadoPage() {
  return (
    <>
      <MegaMenu
        title="✦ Laudo certificado · crp 06/61283 · Itaquaquecetuba e região ✦"
        className="uppercase font-semibold sticky top-0 z-101"
      />

      {/* Header */}
      <header className="text-(--purple) bg-(--white) flex w-full justify-center sm:justify-between py-6 px-6 md:px-12 items-center sticky top-[45px] z-100 border-b border-zinc-100">
        <div className="font-[Playfair_Display] tracking-widest text-start flex items-center">
          <Image src={Logo} alt="Claramente" width={75} height={75} />
          <div className="ms-3">
            <h1 className="text-2xl">Claramente</h1>
            <p className="text-[0.6rem] md:text-xs uppercase">
              clínica de psicologia
            </p>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden w-screen min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-slate-50 via-violet-50 to-violet-100 px-6 md:px-12 py-[120px]">
        {/* blur decor */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative w-full max-w-[980px]">
          <div
            className="
              bg-white/90
              backdrop-blur
              border
              border-white
              shadow-[0_20px_80px_rgba(107,79,160,0.12)]
              rounded-[40px]
              p-8
              md:p-14
              flex
              flex-col
              items-center
              text-center
            "
          >
            {/* Ícone */}
            <div
              className="
                w-24
                h-24
                rounded-full
                bg-gradient-to-br
                from-[#78BFA0]
                to-[#5aaa87]
                flex
                items-center
                justify-center
                text-white
                shadow-[0_20px_45px_rgba(120,191,160,0.35)]
                mb-8
              "
            >
              <CheckCircle2 size={42} strokeWidth={2.5} />
            </div>

            {/* Badge */}
            <div
              className="
                tracking-[0.15em]
                uppercase
                text-(--purple)
                py-[8px]
                px-[16px]
                rounded-full
                border
                border-[#E8E1F4]
                bg-[#F8F5FC]
                text-[0.7rem]
                font-medium
                flex
                items-center
                gap-2
                mb-6
              "
            >
              <div className="panel-dot" />
              Solicitação recebida
            </div>

            {/* Título */}
            <h1 className="font-[Cormorant_Garamond] text-[3.2rem] md:text-[5rem] leading-[1] text-(--deep) font-bold">
              Obrigado pelo seu
              <br />
              <i className="text-(--purple)">contato 💜</i>
            </h1>

            {/* Texto */}
            <p className="max-w-[720px] text-[#7A6890] leading-[1.9] text-sm md:text-base mt-8">
              Recebemos sua solicitação com sucesso. Em breve nossa equipe
              entrará em contato pelo WhatsApp para entender melhor sua demanda
              e orientar os próximos passos da avaliação.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-14">
              <div className="rounded-3xl border border-[#ECE6F5] bg-[#FBFAFD] p-6 text-left">
                <div className="w-11 h-11 rounded-2xl bg-[#EFE8FA] text-(--purple) flex items-center justify-center mb-4">
                  <Clock4Icon size={20} />
                </div>

                <h3 className="text-(--deep) font-semibold mb-2">
                  Resposta rápida
                </h3>

                <p className="text-sm text-[#7A6890] leading-relaxed">
                  Nosso retorno geralmente acontece em poucos minutos durante o
                  horário de atendimento.
                </p>
              </div>

              <div className="rounded-3xl border border-[#ECE6F5] bg-[#FBFAFD] p-6 text-left">
                <div className="w-11 h-11 rounded-2xl bg-[#EFE8FA] text-(--purple) flex items-center justify-center mb-4">
                  <ShieldCheckIcon size={20} />
                </div>

                <h3 className="text-(--deep) font-semibold mb-2">
                  Atendimento sigiloso
                </h3>

                <p className="text-sm text-[#7A6890] leading-relaxed">
                  Todas as informações compartilhadas são tratadas com ética,
                  cuidado e confidencialidade.
                </p>
              </div>

              <div className="rounded-3xl border border-[#ECE6F5] bg-[#FBFAFD] p-6 text-left">
                <div className="w-11 h-11 rounded-2xl bg-[#EFE8FA] text-(--purple) flex items-center justify-center mb-4">
                  <MessageCircleHeart size={20} />
                </div>

                <h3 className="text-(--deep) font-semibold mb-2">
                  Acolhimento humanizado
                </h3>

                <p className="text-sm text-[#7A6890] leading-relaxed">
                  Cada pessoa é atendida com escuta genuína e um cuidado
                  verdadeiramente individualizado.
                </p>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 mt-14 w-full sm:w-auto">
              <Link href="/">
                <Button className="rounded-full px-8 py-4 text-sm bg-(--purple) text-white hover:opacity-90 transition-opacity">
                  Voltar para o site
                </Button>
              </Link>

              <a
                href="https://wa.me/5511982829179"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full px-8 py-4 text-sm border border-(--purple) text-(--purple) bg-white hover:bg-(--purple) hover:text-white transition-all flex items-center gap-2">
                  Falar no WhatsApp
                  <ArrowRight size={16} />
                </Button>
              </a>
            </div>

            {/* Aviso */}
            <p className="text-[0.72rem] text-[#B8ABCC] mt-8 leading-relaxed">
              Caso o WhatsApp não abra automaticamente, você ainda pode entrar
              em contato diretamente pelo número (11) 98282-9179.
            </p>
          </div>
        </div>
      </section>

      <FloaterButton phoneNumber="5511982829179" />

      <Footer />
    </>
  );
}