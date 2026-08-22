"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Logo from "@/components/ui/svg/CLARAMENTE-LOGO.svg";

const topics = ["Avaliação neuropsicológica", "Terapia individual ou de casal", "Ansiedade, pânico ou traumas", "Intervenção ABA / Infantil", "Avaliação psicossocial (NR1)", "Ainda não sei — só quero conversar"];

export default function ContatoPage() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const careFor = String(data.get("careFor") || "");
    const topic = selectedTopic || "Ainda não sei — só quero conversar";
    const message = `Olá! Sou ${name}. O cuidado é ${careFor}. O que me trouxe até aqui: ${topic}.`;
    localStorage.setItem("claramente_checkin", JSON.stringify({ name, careFor, topic, createdAt: new Date().toISOString() }));
    setSubmitted(true);
    window.open(`https://wa.me/5511982829179?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return <main className="site-shell">
    <div className="announcement">AVALIAÇÃO PSICOLÓGICA E NEUROPSICOLÓGICA · ITAQUAQUECETUBA + ONLINE</div>
    <nav className="nav-wrap" aria-label="Navegação principal"><Link href="/" className="brand-mark"><Image src={Logo} alt="Claramente" width={40} height={46} /><span>Claramente<small>Psicologia Aplicada</small></span></Link><div className="nav-links"><Link href="/#a-clinica">A clínica</Link><Link href="/#servicos">O que oferecemos</Link><Link href="/#como-funciona">Como funciona</Link><a href="#contato">Contato</a></div><a href="#contato" className="nav-action">Continuar a conversa <ArrowRight size={16} /></a></nav>
    <section className="checkin-section contact-page contact-section" id="contato"><div className="checkin-aside"><p className="eyebrow"><span /> O PRÓXIMO PASSO É SÓ CONTINUAR A CONVERSA</p><h1>Quando fizer sentido para você,<br /><em>estamos aqui.</em></h1><p className="contact-description">Você não precisa decidir tudo agora. Se quiser, pode dar só o próximo passo: contar rapidamente o que te trouxe até aqui e seguir a conversa com nossa equipe pelo WhatsApp — sem compromisso e no seu tempo.</p><p className="section-note contact-details">Atendimento particular (não trabalhamos com convênios ou atendimentos gratuitos).<br />Presencial em Itaquaquecetuba ou online, de segunda a sexta (08h–20h) e sábados (08h–16h).</p></div><form className="checkin-form" onSubmit={handleSubmit}><div className="form-top">Formulário de Check-in (leva 1 minuto)</div><label>Como podemos te chamar?<input required name="name" placeholder="seu nome" /></label><label>Para quem é o cuidado?<select required name="careFor" defaultValue=""><option value="" disabled>Para mim / Para meu filho ou filha / Para alguém da minha família / Para minha empresa</option><option>Para mim</option><option>Para meu filho ou filha</option><option>Para alguém da minha família</option><option>Para minha empresa</option></select></label><fieldset><legend>O que te trouxe até aqui?</legend><div className="topic-options">{topics.map((topic) => <button type="button" className={selectedTopic === topic ? "topic-option selected" : "topic-option"} key={topic} onClick={() => setSelectedTopic(topic)}>{selectedTopic === topic && <Check size={14} />}{topic}</button>)}</div></fieldset><button className="button button-peach submit-button" type="submit">Continuar a conversa no WhatsApp <MessageCircle size={18} /></button>{submitted && <p className="success-message"><Check size={16} /> Conversa pronta para continuar.</p>}</form></section>
    <footer className="new-footer"><Link href="/" className="brand-mark light-brand"><Image src={Logo} alt="Claramente" width={40} height={46} /><span>Claramente<small>Psicologia Aplicada</small></span></Link><p>CRP 06/61283<br />Av. Pres. Tancredo Neves, 363 · Itaquaquecetuba — SP<br />© 2026 Claramente. Todos os direitos reservados.</p></footer>
  </main>;
}
