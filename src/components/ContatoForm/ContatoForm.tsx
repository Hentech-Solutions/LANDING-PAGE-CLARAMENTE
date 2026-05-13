'use client'

import { useState, FormEvent } from 'react'

const TIPOS_ATENDIMENTO = [
  'Avaliação Neuropsicológica',
  'Psicoterapia Individual',
  'Terapia Infantil',
  'Consulta Online',
  'Gestão de Ansiedade',
  'Orientação Parental',
  'Outro / Não sei ainda',
]

const WHATSAPP_NUMBER = '5511982829179'

const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const inputBase =
  'w-full px-4 py-3 rounded-xl border border-[#EDE8F4] bg-[#F7F4FA] text-[#2D1B4E] text-sm placeholder:text-[#B8ABCC] focus:outline-none focus:border-[#6B4FA0] focus:bg-white focus:ring-2 focus:ring-[#6B4FA0]/10 transition-all appearance-none'

export default function ContatoForm() {
  const [form, setForm] = useState({ nome: '', whatsapp: '', tipo: '', mensagem: '' })
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleWhatsAppChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 11)
    let formatted = digits
    if (digits.length > 2) formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length > 7) formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    setForm((prev) => ({ ...prev, whatsapp: formatted }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    setEnviando(true)

    const texto =
      `Olá! Vim pelo site da Claramente 🌿\n\n` +
      `*Nome:* ${form.nome}\n` +
      `*WhatsApp:* ${form.whatsapp}\n` +
      `*Tipo de atendimento:* ${form.tipo || 'não especificado'}\n` +
      `*Mensagem:* ${form.mensagem || 'sem mensagem'}`

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`

    setTimeout(() => {

      // Conversão Google Ads
      window.gtag?.('event', 'conversion', {
        send_to: 'AW-XXXXXXXXXX/abc123',
      })

      // Evento customizado Google Analytics
      window.gtag?.('event', 'generate_lead', {
        event_category: 'Contato',
        event_label: 'Formulario WhatsApp',
        value: 1,
      })

      setEnviando(false)
      setEnviado(true)

      window.open(url, '_blank')

    }, 600)
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full items-start">

      {/* ── Coluna esquerda: texto informativo ── */}
      <div className="flex flex-col">
        <span className="flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase text-[#6B4FA0] mb-4 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-[#6B4FA0] before:shrink-0">
          Fale conosco
        </span>

        <h2
          className="text-[2.2rem] leading-snug font-normal text-[#2D1B4E] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          O primeiro passo <br />
          <em className="italic text-[#6B4FA0]">começa aqui.</em>
        </h2>

        <p className="text-sm text-[#7A6890] leading-relaxed mb-8">
          Preencha o formulário e entraremos em contato pelo WhatsApp para agendar sua consulta.
          Atendimento presencial em Itaquaquecetuba e online para todo o Brasil.
        </p>

        <div className="flex flex-col gap-3">
          {[
            { icon: '🕊️', text: 'Atendimento humanizado e acolhedor' },
            { icon: '🔒', text: 'Sigilo e ética profissional' },
            { icon: '📱', text: 'Resposta rápida pelo WhatsApp' },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-3 text-sm text-[#2D1B4E]">
              <span className="text-base shrink-0">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Coluna direita: formulário ou tela de sucesso ── */}
      <div className="flex flex-col">
        {enviado ? (
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#78BFA0] to-[#5aaa87] flex items-center justify-center text-white text-2xl shadow-[0_10px_28px_rgba(120,191,160,0.35)]">
              ✓
            </div>
            <h3
              className="text-[1.7rem] font-normal text-[#2D1B4E]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Mensagem enviada!
            </h3>
            <p className="text-sm text-[#7A6890] leading-relaxed max-w-xs">
              Uma janela do WhatsApp foi aberta com sua mensagem. Em breve entraremos em contato. 💜
            </p>
            <button
              onClick={() => {
                setEnviado(false)
                setForm({ nome: '', whatsapp: '', tipo: '', mensagem: '' })
              }}
              className="mt-2 px-7 py-2.5 rounded-full border border-[#6B4FA0] text-[#6B4FA0] text-sm font-medium hover:bg-[#6B4FA0] hover:text-white transition-colors"
            >
              Enviar nova mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col" noValidate>
            <h3
              className="text-[1.5rem] font-normal text-[#2D1B4E] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Agende sua consulta
            </h3>

            {/* Nome */}
            <div className="flex flex-col gap-1.5 mb-4">
              <label htmlFor="cf-nome" className="text-xs font-medium text-[#7A6890] tracking-wide">
                Nome completo <span className="text-[#6B4FA0]">*</span>
              </label>
              <input
                id="cf-nome"
                name="nome"
                type="text"
                required
                placeholder="Como podemos te chamar?"
                className={inputBase}
                value={form.nome}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-1.5 mb-4">
              <label htmlFor="cf-whatsapp" className="text-xs font-medium text-[#7A6890] tracking-wide">
                WhatsApp <span className="text-[#6B4FA0]">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#78BFA0] flex items-center pointer-events-none">
                  <WaIcon size={16} />
                </span>
                <input
                  id="cf-whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  className={`${inputBase} pl-10`}
                  value={form.whatsapp}
                  onChange={handleWhatsAppChange}
                  autoComplete="tel"
                />
              </div>
            </div>

            {/* Tipo de atendimento */}
            <div className="flex flex-col gap-1.5 mb-4">
              <label htmlFor="cf-tipo" className="text-xs font-medium text-[#7A6890] tracking-wide">
                Tipo de atendimento <span className="text-[#6B4FA0]">*</span>
              </label>
              <div className="relative">
                <select
                  id="cf-tipo"
                  name="tipo"
                  required
                  className={`${inputBase} pr-10 cursor-pointer`}
                  value={form.tipo}
                  onChange={handleChange}
                >
                  <option value="" disabled>Selecione uma opção</option>
                  {TIPOS_ATENDIMENTO.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#7A6890]">
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Mensagem */}
            <div className="flex flex-col gap-1.5 mb-5">
              <label htmlFor="cf-mensagem" className="text-xs font-medium text-[#7A6890] tracking-wide">
                Mensagem{' '}
                <span className="font-normal text-[#A08BC8] text-[0.72rem]">(opcional)</span>
              </label>
              <textarea
                id="cf-mensagem"
                name="mensagem"
                rows={4}
                placeholder="Conte um pouco sobre o que está sentindo ou o que busca no atendimento…"
                className={`${inputBase} resize-y min-h-[110px] leading-relaxed`}
                value={form.mensagem}
                onChange={handleChange}
              />
            </div>

            {/* Botão enviar */}
            <button
              type="submit"
              disabled={enviando}
              className="w-full flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#78BFA0] text-white text-sm font-medium shadow-[0_6px_20px_rgba(120,191,160,0.3)] hover:bg-[#5aaa87] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(120,191,160,0.4)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {enviando ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  <WaIcon size={18} />
                  Enviar pelo WhatsApp
                </>
              )}
            </button>

            <p className="mt-3 text-[0.72rem] text-[#B8ABCC] text-center leading-relaxed">
              Ao enviar, você será redirecionado ao WhatsApp. Suas informações são tratadas com total sigilo.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
