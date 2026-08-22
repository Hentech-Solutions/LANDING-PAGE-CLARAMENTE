"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/svg/InstagramIcon";
import Logo from "@/components/ui/svg/CLARAMENTE-LOGO.svg";

declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      parameters?: Record<string, string>,
    ) => void;
  }
}

const clinicImages = [
  { src: "/recepcao.jpg", alt: "Recepção da clínica Claramente" },
  {
    src: "/sala_de_atendimento.jpg",
    alt: "Sala de atendimento da clínica Claramente",
  },
  { src: "/sala_principal.jpg", alt: "Sala principal da clínica Claramente" },
];
const services = [
  [
    "Avaliação Neuropsicológica e Psicológica",
    "processo cuidadoso, com laudo entregue em até 30 dias. Quando a precisão exige, realizamos visitas técnicas exclusivas em escolas, residências e instituições.",
  ],
  [
    "Psicoterapia Individual e de Casal",
    "sessões de 50 minutos, no seu ritmo, presenciais ou online.",
  ],
  [
    "Terapias Especializadas",
    "intervenção ABA, recuperação de traumas, manejo de ansiedade, depressão e questões psicossociais.",
  ],
  ["Empresas", "avaliação psicossocial para adequação à NR1."],
];
const reasons = [
  [
    "No dia a dia",
    "dificuldade de concentração, ansiedade que não passa, tristeza que se arrasta, crises de pânico, ou a sensação de ainda carregar um término ou um trauma antigo.",
  ],
  [
    "Como pai ou mãe",
    "perceber algo diferente no comportamento do seu filho, ou já ter recebido um encaminhamento médico e não saber o próximo passo.",
  ],
  [
    "Nas relações",
    "um casal que quer se entender melhor, ou a busca por suporte em um processo de reabilitação e desenvolvimento.",
  ],
];
const checkinTopics = [
  "Avaliação neuropsicológica",
  "Terapia individual ou de casal",
  "Ansiedade, pânico ou traumas",
  "Intervenção ABA / Infantil",
  "Avaliação psicossocial (NR1)",
  "Ainda não sei — só quero conversar",
];

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [pendingForm, setPendingForm] = useState<{
    name: string;
    email: string;
    phone: string;
    careFor: string;
  } | null>(null);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveImage((current) => (current + 1) % clinicImages.length),
      4000,
    );
    return () => window.clearInterval(timer);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setError("");
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

      // 1. DISPARA O PIXEL DO GOOGLE ADS AQUI
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-SEU_ID/SEU_ROTULO_DE_CONVERSAO'
        });
      }

      localStorage.setItem("claramente_checkin", JSON.stringify({ ...pendingForm, topic, submittedAt }));
      
      // 2. MUDA O ESTADO PARA MOSTRAR A TELA DE SUCESSO
      setSubmitted(true);
      // Removida a linha do window.open(WhatsApp)

    } catch {
      setError("Não foi possível enviar seus dados agora. Confira sua conexão e tente novamente.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="site-shell">
      <div className="announcement">
        <Sparkles size={14} /> AVALIAÇÃO PSICOLÓGICA E NEUROPSICOLÓGICA ·
        ITAQUAQUECETUBA + ONLINE
      </div>
      <nav className="nav-wrap" aria-label="Navegação principal">
        <Link href="/" className="brand-mark">
          <Image src={Logo} alt="Claramente" width={40} height={46} />
          <span>
            Claramente<small>Psicologia Aplicada</small>
          </span>
        </Link>
        <div className="nav-links">
          <a href="#a-clinica">A clínica</a>
          <a href="#servicos">O que oferecemos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </div>
        <a href="#contato" className="nav-action">
          Continuar a conversa <ArrowRight size={16} />
        </a>
      </nav>

      <section className="hero-section" id="a-clinica">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> VOCÊ NÃO PRECISA TER CERTEZA DE NADA PARA COMEÇAR
          </p>
          <h1>
            Só de estar aqui,
            <br />
            <em>você já deu o passo mais difícil.</em>
          </h1>
          <p className="hero-text">
            Ninguém chega a uma página como essa por acaso. Geralmente é porque
            algo pede atenção há um tempo.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#como-funciona">
              Entender como funciona <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#servicos">
              Conhecer os atendimentos <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="hero-art" aria-label="Fotos da clínica Claramente">
          {clinicImages.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className={`carousel-image ${activeImage === index ? "is-active" : ""}`}
              sizes="(max-width: 800px) 100vw, 60vw"
            />
          ))}
          <div className="carousel-shade" />
          <div className="carousel-controls">
            <button
              type="button"
              aria-label="Imagem anterior"
              onClick={() =>
                setActiveImage(
                  (activeImage - 1 + clinicImages.length) % clinicImages.length,
                )
              }
            >
              <ArrowLeft size={18} />
            </button>
            <div className="carousel-dots">
              {clinicImages.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  aria-label={`Ver imagem ${index + 1}`}
                  aria-current={activeImage === index}
                  className={activeImage === index ? "is-active" : ""}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Próxima imagem"
              onClick={() =>
                setActiveImage((activeImage + 1) % clinicImages.length)
              }
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="credentials-section">
        <div className="credentials-intro">
          <p className="eyebrow">
            <span /> A CLARAMENTE
          </p>
          <p>
            Fundada em 2009 e liderada pela psicóloga e neuropsicóloga{" "}
            <strong>Verônica Cordeiro de Almeida</strong> (CRP 06/61283), a
            Claramente existe para transformar essa inquietação em um caminho
            possível, com técnica e sem pressa.
          </p>
        </div>
        <div className="credential-seals">
          <article>
            <ShieldCheck size={25} />
            <div>
              <span>Experiência clínica</span>
              <strong>
                Em prática clínica desde 2000 (formação USP e Cruzeiro do Sul)
              </strong>
            </div>
          </article>
          <article>
            <Clock3 size={25} />
            <div>
              <span>Forma de cuidar</span>
              <strong>
                Abordagem baseada em TCC · Presencial em Itaquaquecetuba ou
                online
              </strong>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section recognition-section">
        <div className="section-intro">
          <p className="eyebrow">
            <span /> O QUE VOCÊ SENTE TEM EXPLICAÇÃO
          </p>
          <h2>Talvez você se reconheça em algo daqui.</h2>
          <div className="recognition-intro-copy">
            <p className="recognition-lead">
              Você não precisa estar em crise para merecer cuidado. Muita gente
              adia a terapia esperando um momento &quot;grave o
              suficiente&quot;.
            </p>
            <p className="recognition-body">
              Uma avaliação ou um processo terapêutico não é sobre colocar um
              rótulo em você. É sobre entender, com clareza, como você (ou quem
              você ama) funciona.
            </p>
          </div>
        </div>
        <div className="recognition-cards">
          <h3>Isso pode soar familiar:</h3>
          {reasons.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
          <blockquote>
            “Não te falta força. O que falta é orientação.”
          </blockquote>
          <p className="section-note">
            Atendemos desde bebês (a partir de 6 meses) até a terceira idade
            porque em qualquer fase da vida, essa orientação faz diferença.
          </p>
        </div>
      </section>

      <section className="process-section services-section" id="servicos">
        <div className="section-intro light">
          <p className="eyebrow">
            <span /> CUIDADO COM MÉTODO, DO PRIMEIRO CONTATO AO LAUDO
          </p>
          <h2>
            Como cuidamos
            <br />
            <em>de cada etapa.</em>
          </h2>
          <p>
            Não existe um único tipo de ajuda para um único tipo de dor. Por
            isso a estrutura da Claramente foi pensada para atender demandas
            diferentes, sem perder profundidade em nenhuma delas:
          </p>
        </div>
        <div className="steps-list">
          {services.map(([title, text], index) => (
            <div className="step-item" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <ArrowRight size={20} />
            </div>
          ))}
        </div>
      </section>

      <section className="content-section process-light" id="como-funciona">
        <div className="section-intro">
          <p className="eyebrow">
            <span /> VOCÊ NÃO PRECISA SABER O QUE DIZER
          </p>
          <h2>Não existe jeito certo de começar.</h2>
          <p>
            Uma das maiores barreiras para procurar terapia é o medo de não
            saber por onde começar a falar. Aqui, essa parte não é sua
            responsabilidade sozinha.
          </p>
        </div>
        <div className="topic-grid">
          <article>
            <h3>01 / O Primeiro Encontro</h3>
            <p>
              Mesmo que ainda não saiba como começar e esteja se sentindo
              confuso sobre o motivo. O profissional responsável pelo seu
              atendimento vai ouvir, acolher e entender o que te trouxe até
              aqui.
            </p>
          </article>
          <article>
            <h3>02 / Um Plano Feito Junto</h3>
            <p>
              A partir daquele encontro, desenhamos juntos os próximos passos:
              quantas sessões fazem sentido, a frequência, o tipo de avaliação
              ou terapia e qual abordagem melhor serve ao seu momento.
            </p>
          </article>
          <article>
            <h3>03 / O Processo Segue com Você</h3>
            <p>
              Na terapia, isso significa evolução. Nas avaliações, significa que
              o laudo entregue a você seja claro, com recomendações práticas e
              próximos passos. Em qualquer caso, significa que você não está
              sozinho.
            </p>
          </article>
        </div>
      </section>

      <section className="process-section about-section" id="depoimentos">
        <div className="section-intro light">
          <p className="eyebrow">
            <span /> QUEM VAI TE OUVIR
          </p>
          <h2>
            
            Uma clínica conduzida por quem faz clínica{" "}
            <em>há mais de 20 anos.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            A Claramente é liderada pela psicóloga e neuropsicóloga{" "}
            <strong>Verônica Cordeiro de Almeida</strong> (CRP 06/61283),
            formada pela USP e pela Cruzeiro do Sul, com atuação clínica desde
            2000.
          </p>
          <br />
          <p>
            Antes de qualquer protocolo, a proposta aqui é simples: um espaço
            onde técnica e escuta andam juntas, sem pressa para chegar a
            conclusões.
          </p>
          <div className="google-reviews-panel">
            <div className="google-reviews-heading">
              <span>A voz de quem já esteve aqui</span>
              <strong>Avaliações do Google</strong>
            </div>
            <Script
              src="https://elfsightcdn.com/platform.js"
              strategy="afterInteractive"
            />
            <div
              className="elfsight-app-e1c5597f-c364-40b5-9834-65ffc1c6fd35"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </section>

      <section className="checkin-section contact-section" id="contato">
        <div className="checkin-aside">
          <p className="eyebrow">
            <span /> O PRÓXIMO PASSO É CONTINUAR A CONVERSA
          </p>
          <h2>
            Quando fizer sentido para você,
            <br />
            <em>estaremos aqui.</em>
          </h2>
          <p className="contact-description">
            Você não precisa decidir tudo agora. Se quiser, pode dar só o
            próximo passo: contar rapidamente o que te trouxe até aqui e seguir
            a conversa com nossa equipe pelo WhatsApp.
          </p>
          <p className="section-note contact-details">
            Atendimento particular (não trabalhamos com convênios ou
            atendimentos gratuitos).
            <br />
            Presencial em Itaquaquecetuba ou online, de segunda a sexta
            (08h–20h) e sábados (08h–16h).
          </p>
        </div>
        <form className="checkin-form" onSubmit={handleSubmit}>
          <div className="form-top">
            <span>Formulário de contato(leva 1 minuto)</span>
          </div>
          <label>
            Como podemos te chamar?
            <input required name="name" placeholder="seu nome" />
          </label>
          <div className="contact-fields">
            <label>
              E-mail
              <input required type="email" name="email" placeholder="seu@email.com" />
            </label>
            <label>
              Telefone
              <input required type="tel" name="phone" placeholder="(11) 99999-9999" />
            </label>
          </div>
          <label>
            Para quem é o cuidado?
            <select required name="careFor" defaultValue="">
              <option value="" disabled>
                Escolha uma opção
              </option>
              <option>Para mim</option>
              <option>Para meu filho ou filha</option>
              <option>Para alguém da minha família</option>
              <option>Para minha empresa</option>
            </select>
          </label>
          <fieldset>
            <legend>O que te trouxe até aqui?</legend>
            <div className="topic-options">
              {checkinTopics.map((topic) => (
                <button
                  type="button"
                  className={
                    selectedTopic === topic
                      ? "topic-option selected"
                      : "topic-option"
                  }
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                >
                  {selectedTopic === topic && <Check size={14} />}
                  {topic}
                </button>
              ))}
            </div>
          </fieldset>
          <button className="button button-peach submit-button" type="submit">
            Continuar a conversa no WhatsApp <MessageCircle size={18} />
          </button>
          {submitted && (
            <p className="success-message">
              <Check size={16} /> Conversa pronta para continuar.
            </p>
          )}
        </form>
      </section>

      {isModalOpen && (
        <div className="consent-backdrop" role="presentation">
          <section className="consent-modal" role="dialog" aria-modal="true" aria-labelledby="consent-title">
            <button type="button" className="consent-close" aria-label="Fechar aviso" onClick={() => setIsModalOpen(false)}><X size={18} /></button>
            
            {submitted ? (
              // TELA DE SUCESSO (PÓS-ENVIO)
              <div className="text-center">
                <h2 id="consent-title">Mensagem enviada com sucesso!</h2>
                <p>Obrigado pelo contato, {pendingForm?.name}. Nossa equipe retornará no seu e-mail ou telefone em breve.</p>
                <button type="button" className="button button-dark mt-4" onClick={() => setIsModalOpen(false)}>
                  Fechar
                </button>
              </div>
            ) : (
              // TELA DE AVISO (PRÉ-ENVIO)
              <>
                <p className="eyebrow"><span /> antes de continuar</p>
                <h2 id="consent-title">Um aviso importante.</h2>
                <p>A Claramente realiza atendimentos particulares e, atualmente, não atende convênios nem oferece atendimentos gratuitos.</p>
                <div className="consent-actions">
                  <button type="button" className="consent-cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                  <button type="button" className="button button-dark" onClick={confirmConsent} disabled={isSending}>
                    {isSending ? "Enviando..." : "Entendo e desejo continuar"}
                  </button>
                </div>
                {error && <p className="consent-error">{error}</p>}
              </>
            )}
          </section>
        </div>
      )}

      <footer className="new-footer">
        <Link href="/" className="brand-mark light-brand">
          <Image src={Logo} alt="Claramente" width={40} height={46} />
          <span>
            Claramente<small>Psicologia Aplicada</small>
          </span>
        </Link>
        <p>
          CRP 06/61283
          <br />
          Av. Pres. Tancredo Neves, 363 · Itaquaquecetuba — SP
          <br />© 2026 Claramente. Todos os direitos reservados.
        </p>
        <div className="footer-social">
          <a href="https://wa.me/5511982829179" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a
            href="https://www.instagram.com/claramente_itaqua"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </footer>
    </main>
  );
}
