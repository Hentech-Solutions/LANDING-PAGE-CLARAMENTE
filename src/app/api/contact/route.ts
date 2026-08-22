import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, careFor, topic, submittedAt } = await request.json();

    if (!name || !email || !phone || !careFor || !topic) {
      return NextResponse.json({ error: "Dados obrigatórios ausentes." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.RESEND_TO_EMAIL || "rafaelcordeiro299@gmail.com";
    if (!resendApiKey) {
      return NextResponse.json({ error: "Serviço de e-mail não configurado." }, { status: 503 });
    }

    const resend = new Resend(resendApiKey);
    const formattedDate = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Sao_Paulo",
    }).format(new Date(submittedAt));

    const result = await resend.emails.send({
      from: "Claramente <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `Novo contato de ${name}`,
      html: `
        <div style="background:#f4f0fa;color:#211b2d;font-family:Arial,sans-serif;margin:0;padding:40px 20px">
          <article style="background:#fff;margin:0 auto;max-width:620px;padding:40px;border-top:5px solid #6b4fa0">
            <p style="color:#6b4fa0;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">Claramente · Psicologia Aplicada</p>
            <h1 style="font-family:Georgia,serif;font-size:32px;font-weight:normal;line-height:1.1;margin:24px 0 12px">Novo contato recebido</h1>
            <p style="color:#716a7d;font-size:15px;line-height:1.7">Uma pessoa deseja continuar a conversa com a clínica.</p>
            <div style="border-left:3px solid #78bfa0;margin:28px 0;padding:4px 0 4px 18px">
              <p style="font-size:20px;margin:0">${escapeHtml(name)}</p>
              <p style="color:#716a7d;font-size:13px;margin:8px 0 0">Enviado em ${escapeHtml(formattedDate)}</p>
            </div>
            <table style="border-collapse:collapse;width:100%">
              <tr><td style="border-bottom:1px solid #ddd7e4;color:#716a7d;font-size:12px;padding:14px 0">E-mail</td><td style="border-bottom:1px solid #ddd7e4;font-size:14px;padding:14px 0;text-align:right">${escapeHtml(email)}</td></tr>
              <tr><td style="border-bottom:1px solid #ddd7e4;color:#716a7d;font-size:12px;padding:14px 0">Telefone</td><td style="border-bottom:1px solid #ddd7e4;font-size:14px;padding:14px 0;text-align:right">${escapeHtml(phone)}</td></tr>
              <tr><td style="border-bottom:1px solid #ddd7e4;color:#716a7d;font-size:12px;padding:14px 0">Para quem</td><td style="border-bottom:1px solid #ddd7e4;font-size:14px;padding:14px 0;text-align:right">${escapeHtml(careFor)}</td></tr>
              <tr><td style="color:#716a7d;font-size:12px;padding:14px 0">Motivo</td><td style="font-size:14px;padding:14px 0;text-align:right">${escapeHtml(topic)}</td></tr>
            </table>
            <p style="border-top:1px solid #ddd7e4;color:#716a7d;font-size:11px;line-height:1.6;margin:30px 0 0;padding-top:20px">Este contato foi autorizado pelo visitante para fins de retorno sobre a solicitação enviada.</p>
          </article>
        </div>
      `,
    });

    if (result.error) return NextResponse.json({ error: result.error.message }, { status: 502 });
    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch {
    return NextResponse.json({ error: "Não foi possível processar o envio." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>\"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" })[character] || character);
}
