"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, MessageCircle, X } from "lucide-react";
import Logo from "@/components/ui/svg/CLARAMENTE-LOGO.svg";

const topics = [
  "Avaliação neuropsicológica",
  "Terapia individual ou de casal",
  "Ansiedade, pânico ou traumas",
  "Intervenção ABA / Infantil",
  "Avaliação psicossocial (NR1)",
  "Ainda não sei — só quero conversar",
];

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  careFor: string;
};

export default function ContatoPage() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [pendingForm, setPendingForm] = useState<ContactForm | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    setPendingForm({
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      careFor: String(data.get("careFor") || ""),
    });
    setIsModalOpen(true);
  }

  async function confirmConsent() {
    if (!pendingForm || isSending) return;
    setIsSending(true);
    setError("");
    const topic = selectedTopic || "Ainda não sei — só quero conversar";
    const submittedAt = new Date().toISOString();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...pendingForm, topic, submittedAt }),
      });
      if (!response.ok) throw new Error("Falha no envio");

      localStorage.setItem("claramente_checkin", JSON.stringify({ ...pendingForm, topic, submittedAt }));
      const message = `Olá! Sou ${pendingForm.name}. O cuidado é ${pendingForm.careFor}. Meu e-mail é ${pendingForm.email} e meu telefone é ${pendingForm.phone}. O que me trouxe até aqui: ${topic}.`;
      setSubmitted(true);
      setIsSending(false);
      window.location.hash = "contatoenviado";
      window.open(`https://wa.me/5511982829179?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    } catch {
      setError("Não foi possível enviar seus dados agora. Confira sua conexão e tente novamente.");
      setIsSending(false);
    }
  }

  return <main className="site-shell">
    <div className="announcement">AVALIAÇÃO PSICOLÓGICA E NEUROPSICOLÓGICA · ITAQUAQUECETUBA + ONLINE</div>
    <nav className="nav-wrap" aria-label="Navegação principal"><Link href="/" className="brand-mark"><Image src={Logo} alt="Claramente" width={40} height={46} /><span>Claramente<small>Psicologia Aplicada</small></span></Link><div className="nav-links"><Link href="/#a-clinica">A clínica</Link><Link href="/#servicos">O que oferecemos</Link><Link href="/#como-funciona">Como funciona</Link><Link href="/#depoimentos">Depoimentos</Link><a href="#contato">Contato</a></div><a className="nav-phone" href="tel:+5511982829179">(11) 98282-9179</a><a href="#contato" className="nav-action">Continuar a conversa <ArrowRight size={16} /></a></nav>
    <section className="checkin-section contact-page contact-section" id="contato"><div className="checkin-aside"><p className="eyebrow"><span /> O PRÓXIMO PASSO É SÓ CONTINUAR A CONVERSA</p><h1>Quando fizer sentido para você,<br /><em>estamos aqui.</em></h1><p className="contact-description">Você não precisa decidir tudo agora. Se quiser, pode dar só o próximo passo: contar rapidamente o que te trouxe até aqui e seguir a conversa com nossa equipe pelo WhatsApp — sem compromisso e no seu tempo.</p><p className="section-note contact-details">Atendimento particular (não trabalhamos com convênios ou atendimentos gratuitos).<br />Presencial em Itaquaquecetuba ou online, de segunda a sexta (08h–20h) e sábados (08h–16h).</p></div><div className="checkin-form">{submitted ? <div className="form-success"><span className="success-icon"><Check size={28} /></span><p className="eyebrow"><span /> envio concluído</p><h2>Mensagem enviada com sucesso!</h2><p>Obrigado pelo contato. Nossa equipe retornará no seu e-mail ou telefone em breve.</p><Link className="button button-dark" href="/">Voltar para a página inicial <ArrowRight size={18} /></Link></div> : <form onSubmit={handleSubmit}><div className="form-top">Formulário de Check-in (leva 1 minuto)</div><label>Como podemos te chamar?<input required name="name" placeholder="seu nome" /></label><div className="contact-fields"><label>E-mail<input required type="email" name="email" placeholder="seu@email.com" /></label><label>Telefone<input required type="tel" name="phone" placeholder="(11) 99999-9999" /></label></div><label>Para quem é o cuidado?<select required name="careFor" defaultValue=""><option value="" disabled>Escolha uma opção</option><option>Para mim</option><option>Para meu filho ou filha</option><option>Para alguém da minha família</option><option>Para minha empresa</option></select></label><fieldset><legend>O que te trouxe até aqui?</legend><div className="topic-options">{topics.map((topic) => <button type="button" className={selectedTopic === topic ? "topic-option selected" : "topic-option"} key={topic} onClick={() => setSelectedTopic(topic)}>{selectedTopic === topic && <Check size={14} />}{topic}</button>)}</div></fieldset><button className="button button-peach submit-button" type="submit">Continuar a conversa no WhatsApp <MessageCircle size={18} /></button></form>}</div></section>
    {isModalOpen && <div className="consent-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget && !isSending) setIsModalOpen(false); }}><section className="consent-modal" role="dialog" aria-modal="true" aria-labelledby="consent-title"><button type="button" className="consent-close" aria-label="Fechar aviso" onClick={() => !isSending && setIsModalOpen(false)}><X size={18} /></button>{submitted ? <div className="success-modal-content"><span className="success-icon"><Check size={28} /></span><p className="eyebrow"><span /> envio concluído</p><h2 id="consent-title">Mensagem enviada com sucesso!</h2><p>Obrigado pelo contato. Nossa equipe retornará no seu e-mail ou telefone em breve.</p><button type="button" className="button button-dark" onClick={() => setIsModalOpen(false)}>Fechar</button></div> : <><p className="eyebrow"><span /> antes de continuar</p><h2 id="consent-title">Um aviso importante.</h2><p>A Claramente realiza atendimentos particulares e, atualmente, não atende convênios nem oferece atendimentos gratuitos.</p><p>Ao prosseguir, você declara estar ciente dessas condições e consente com a coleta e o uso dos dados informados exclusivamente para que a equipe da Claramente entre em contato sobre sua solicitação. Seus dados serão tratados com confidencialidade, de acordo com a LGPD, e você pode solicitar informações, correção ou exclusão deles pelos canais de contato da clínica.</p><div className="consent-actions"><button type="button" className="consent-cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button><button type="button" className="button button-dark" onClick={confirmConsent} disabled={isSending}>{isSending ? "Enviando..." : "Entendo e desejo continuar"}</button></div>{error && <p className="consent-error">{error}</p>}</>}</section></div>}
    <footer className="new-footer"><Link href="/" className="brand-mark light-brand"><Image src={Logo} alt="Claramente" width={40} height={46} /><span>Claramente<small>Psicologia Aplicada</small></span></Link><p>CRP 06/61283<br />(11) 98282-9179<br />Av. Pres. Tancredo Neves, 363 · Itaquaquecetuba — SP<br />© 2026 Claramente. Todos os direitos reservados.</p></footer>
  </main>;
}
