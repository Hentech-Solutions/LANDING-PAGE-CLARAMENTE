import WhatsappButton from "./../components/ui/WhatsappButton";
import "./globals.css";
import BenefitsCard from "./../components/ui/BenefitsCard";
import MegaMenu from "./../components/ui/MegaMenu";
import { WhatsAppIcon } from "./../components/ui/svg/WhatsAppIcon";
import { BookOpen, CircleQuestionMark, Clock4Icon, FileTextIcon, FlaskConical, HeartIcon, LaptopMinimal, LockKeyholeIcon, MessageSquareText, ShieldCheckIcon, SignatureIcon, SmileIcon, User, User2 } from "lucide-react";
import Badge from "./../components/ui/Badge";
import SpecCard from "./../components/ui/SpecCard";
import NumericDescriptionCard from "./../components/ui/NumericDescriptionCard";
import Button from "./../components/ui/Button";
import FloaterButton from "./../components/ui/FloaterButton";
import Footer from "@/components/Footer";

import Image from "next/image";
import Logo from './../components/ui/svg/CLARAMENTE-LOGO.svg';
import ContatoForm from "@/components/ContatoForm/ContatoForm";

export default function Home() {
  return (
    <>
      <MegaMenu title="✦ Laudo certificado · crp 06/61283 · Itaquaquecetuba e região ✦" className="uppercase font-semibold sticky top-0 z-101"/>

      <header className="text-(--purple) bg-(--white) flex w-full justify-center sm:justify-between py-6 px-6 md:px-12 items-center sticky top-[45px] z-100">
        <div className="font-[Playfair_Display] tracking-widest text-start flex items-center">
          <Image src={Logo} alt="Claramente" width={75} height={75} />
          <div className="ms-3">
            <h1 className="text-2xl">Claramente</h1>
            <p className="text-[0.6rem] md:text-xs uppercase">clínica de psicologia</p>
          </div>
        </div>

          <a href="https://wa.me/5511982829179" target="_blank" rel="noopener" className="flex items-center font-semibold hidden sm:flex">
            <span className="flex h-5 me-3">
              <WhatsAppIcon fill="#6b4fa0"/>
            </span>
            (11) 98282-9179
          </a>
      </header>

      <section className="w-[100vw] z-99 flex flex-col xl:py-[140px] px-6 xl:px-[48px] xl:flex-row items-center justify-center gap-60 bg-gradient-to-t from-slate-50 to-violet-100">
        <aside className="w-full flex-1 max-w-[600px] text-start mt-12 md:mt-0">
          <h5 className="text-emerald-400 text-[0.55rem] md:text-xs tracking-[0.25em]">
            <span
            className="
              tracking-[0.15em]
              uppercase
              text-(--purple)
              py-[8px]
              px-[12px]
              rounded-[50px]
              border-[1px]
              flex items-center gap-3
              max-w-max
          " >
            <div className="panel-dot" />
            Avaliação Psicológica e Neuropsicológica</span>
          </h5>
          <h1 className="font-[Cormorant_Garamond] text-[3rem] md:text-[5rem] text-start md:text-center md:text-left leading-[1.1] mt-6 text-(--deep) font-bold">
            Entenda, com clareza, <br /> {" "}
            <i className="text-(--purple) border-b-3 border-(--sage)">o que está acontecendo</i> com você ou com quem você ama
          </h1>

          <p className="leading-[1.85] text-gray-400 mt-16 md:mt-4">
            Muito além de um diagnóstico, a avaliação psicológica é o primeiro passo para uma vida com mais direção. Identificamos o que compromete seu desempenho, sua memória ou seu bem-estar — e entregamos um laudo técnico oficial, assinado por especialista, para que você possa agir com segurança.
          </p>

          <div className="mt-9 flex gap-6 pb-6 flex-col">
            <WhatsappButton label="Quero agendar minha avaliação" className="max-w-max"/>
            <p className="text-gray-400 text-sm flex gap-3">
              <LockKeyholeIcon size={'15px'}/>
              Atendimento presencial e online · Sigilo garantido
            </p>
          </div>

          <div className="flex flex-col gap-3 md:flex-row justify-between">
            <Badge label="Laudo com valor legal" icon={<ShieldCheckIcon size="15px" color="#78BFA0"/>}/>
            <Badge label="Resultado em até 30 dias" icon={<Clock4Icon size="15px" color="#78BFA0"/>}/>
            <Badge label="CRP 06/61283" icon={<SignatureIcon size="15px" color="#78BFA0"/>}/>
          </div>
        </aside>

        <div className="shadow-lg flex-1 max-w-[500px] rounded-[32px] flex flex-col mb-6 sm:mb-0 p-[36px] text-(--deep) gap-6 bg-(--white)">
          <p className="flex items-center gap-2 text-3xl font-bold font-[Cormorant_Garamond]">
            Para quem é esta avaliação?
          </p>

          <SpecCard 
            icon={<User2 color="white" size={'16px'}/>}
            title="Adultos"
            description="TDAH, ansiedade, laudo para concursos, processos seletivos e acompanhamento clínico"
          />

          <SpecCard 
            icon={<SmileIcon color="white" size={'16px'}/>}
            title="Crianças e Adolescentes"
            description="Dificuldades de aprendizagem, dislexia, TDAH, comportamento e desenvolvimento"
          />

          <SpecCard 
            icon={<HeartIcon color="white" size={'16px'}/>}
            title="Idosos"
            description="Avaliação de memória, raciocínio, atenção e diagnóstico precoce de demências"
          />

          <hr />

          <SpecCard 
            icon={<FileTextIcon color="black" size={'20px'}/>}
            theme="sage"
            description="Laudo técnico completo entregue ao final, com validade oficial para uso clínico e educacional"
          />

        </div>
      </section>

      {/* Indication Section */}
      <section className="py-[110px] px-6 xl:px-[48px] w-[100vw] z-99  bg-(--white) flex flex-col items-center">
        <div className="flex flex-col gap-20 max-w-[1100px]">
          <div className="flex flex-col items-start text-start w-full">
            <h5 className="text-emerald-400 text-xs tracking-[0.25em] uppercase ms-8 md:ms-0">
              <span className="tracking-[-2px] me-2">---</span> Indicações
            </h5>
            <h1 className="font-[Playfair_Display] ms-8 md:ms-0 font-semibold text-black text-[3.2rem] leading-[1.1] mt-5">
              Você pode precisar de uma <br />
              <i className="text-(--purple)">avaliação</i> se...
            </h1>
          </div>
          <div className="flex gap-6 flex-col lg:flex-row items-center">
            <div className="flex-1">
              <BenefitsCard
                emoji="🧠"              
                theme='cream'
                title="É adulto e percebe"
                description="Dificuldade de concentração, esquecimentos frequentes, impulsividade, ansiedade intensa — ou precisa de laudo para concurso público, processo seletivo ou benefício previdenciário."
                badges={['TDAH', 'Ansiedade', 'Laudo INSS', 'Concurso público', 'Memória']}
                watermark="bg-purple-400"
              />
            </div>
            <div className="flex-1">
              <BenefitsCard
                emoji="📚"              
                theme='cream'
                title="É criança ou adolescente com"
                description="Baixo rendimento escolar, dificuldade para ler ou escrever, hiperatividade, comportamento desafiador ou suspeita de transtorno do neurodesenvolvimento."
                badges={['Dislexia', 'TDAH Infantil', 'TEA', 'Dificuldade escolar', 'Desenvolvimento']}
                watermark="bg-green-400"
              />
            </div>
            <div className="flex-1">
              <BenefitsCard
                emoji="💛"              
                theme='cream'
                title="É idoso ou familiar que nota"
                description="Lapsos de memória recentes, desorientação, mudança de humor ou dificuldade nas tarefas cotidianas. O diagnóstico precoce amplia as possibilidades de tratamento e cuidado."
                badges={['Alzheimer', 'Demência', 'Memória', 'Raciocínio', 'Atenção']}
                watermark="bg-yellow-400"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[110px] px-6 xl:px-[48px] w-[100vw] z-99 bg-gradient-to-b from-slate-50 to-violet-100 flex flex-col items-center">
        <div className="flex flex-col gap-20 max-w-[1100px] items-center ">
          <aside className="w-full max-w-[600px] text-start flex-1">
            <h5 className="text-emerald-400 text-xs tracking-[0.25em] uppercase">
              <span className="tracking-[-2px] me-2">---</span> Como funciona
            </h5>
            <h1 className="font-[Cormorant_Garamond] text-[3.5rem] leading-[1.1] mt-6 text-(--deep) font-bold">
              Um processo claro, <br />
              <i className="text-(--purple)">do início ao laudo</i>
            </h1>

            <p className="leading-[1.85] text-sm text-(--muted) mt-4">
              A avaliação é conduzida por profissional especialista em Neuropsicologia, com mais de 20 anos de experiência clínica. Utilizamos instrumentos validados pelo CFP e metodologia baseada em evidências — para que o resultado seja confiável, compreensível e verdadeiramente útil para você.
            </p>

            <div className="mt-9 flex gap-6 pb-6 flex-col">
              <WhatsappButton label="Quero agendar minha avaliação" className="max-w-max"/>
            </div>
          </aside>

          <div className="shadow-lg bg-white py-[40px] px-[36px] rounded-4xl flex-1 relative">
            <NumericDescriptionCard
              number="01"
              title="Entrevista inicial"
              description="Conversa detalhada sobre histórico, queixas e objetivos. Definição do protocolo personalizado para o seu caso."
              titleClass="text-black"
              hoverClass="hover:bg-(--lavender-light)"
              descriptionClass="text-xs text-(--muted)/70"
              numberClass="text-(--lavender) font-[Playfair_Display] text-lg group-hover:text-(--lavender) transition-colors duration-300"
              containerClass="border border-b-(--lavender-light) flex flex-col md:flex-row"
            />
            <NumericDescriptionCard
              number="02"
              title="Aplicação dos testes"
              description="Sessões com instrumentos psicológicos e neuropsicológicos validados — testes de atenção, memória, raciocínio, linguagem e personalidade, conforme a demanda."
              titleClass="text-black"
              hoverClass="hover:bg-(--lavender-light)"
              descriptionClass="text-xs text-(--muted)/70"
              numberClass="text-(--lavender) font-[Playfair_Display] text-lg group-hover:text-(--lavender) transition-colors duration-300"
              containerClass="border border-b-(--lavender-light) flex flex-col md:flex-row"
            />
            <NumericDescriptionCard
              number="03"
              title="Análise e interpretação"
              description="Integração de todos os resultados com a história clínica para uma visão diagnóstica completa, fundamentada e ética."
              titleClass="text-black"
              hoverClass="hover:bg-(--lavender-light)"
              descriptionClass="text-xs text-(--muted)/70"
              numberClass="text-(--lavender) font-[Playfair_Display] text-lg group-hover:text-(--lavender) transition-colors duration-300"
              containerClass="border border-b-(--lavender-light) flex flex-col md:flex-row"
            />
            <NumericDescriptionCard
              number="04"
              title="Devolutiva e laudo"
              description="Reunião de devolução com explicação clara dos resultados e entrega do laudo técnico completo com validade oficial — em até 30 dias."
              titleClass="text-black"
              hoverClass="hover:bg-(--lavender-light)"
              descriptionClass="text-xs text-(--muted)/70"
              numberClass="text-(--lavender) font-[Playfair_Display] text-lg group-hover:text-(--lavender) transition-colors duration-300"
              containerClass="border-none flex flex-col md:flex-row"
            />

            <div className="z-100 absolute -bottom-6 -right-6 bg-(--purple) text-white rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-4xl text-green-200 pb-1 font-bold leading-none font-[Cormorant_Garamond]">30</div>
              <div className="text-xs opacity-80">dias para o laudo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos diferenciais */}
      <section className="py-27.5 px-6 md:px-12 w-screen z-99 flex flex-col items-center bg-white">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col justify-center text-center w-full">
            <h5 className="text-emerald-400 text-start md:text-center text-xs tracking-[0.25em] uppercase" ><span className="tracking-[-2px] me-2">---</span> Nossos Diferenciais</h5>
            <h1 className="font-[Cormorant_Garamond] text-start md:text-center text-[2.8rem] md:text-[3.2rem] leading-[1.1] text-black font-bold mt-5">Por que escolher a <br /><i className="text-(--purple)">Claramente</i>?</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-4 rounded-xl text-(--purple)">
                  <ShieldCheckIcon size={20} />
                </div>
              }
              title="Base para o diagnóstico médico"
              description="O laudo neuropsicológico é um mapeamento detalhado das funções cerebrais que serve como base fundamental para que neurologistas ou psiquiatras concluam o diagnóstico clínico e definam o tratamento adequado."
            />

            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-4 rounded-xl text-(--purple)">
                  <FlaskConical size={20} />
                </div>
              }
              title="Instrumentos validados pelo CFP"
              description="Utilizamos exclusivamente testes aprovados pelo Conselho Federal de Psicologia, com normas atualizadas para a população brasileira — garantindo precisão e legitimidade diagnóstica."
            />

            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-4 rounded-xl text-(--purple)">
                  <User size={20} />
                </div>
              }
              title="Atendimento humanizado"
              description="Ambiente seguro e acolhedor. Cada avaliação respeita o ritmo, a história e a singularidade de cada pessoa — sem julgamentos, com escuta genuína."
            />

            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-4 rounded-xl text-(--purple)">
                  <LaptopMinimal  size={20} />
                </div>
              }
              title="Presencial e online"
              description="Realizamos avaliações em Itaquaquecetuba ou de forma remota, com a mesma qualidade técnica, sigilo e cuidado — seja qual for a sua localidade."
            />

            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-4 rounded-xl text-(--purple)">
                  <MessageSquareText size={20} />
                </div>
              }
              title="Devolutiva completa e acessível"
              description="Explicamos os resultados de forma clara para o paciente e a família, com orientações práticas sobre próximos passos, encaminhamentos e uso do laudo."
            />

            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-4 rounded-xl text-(--purple)">
                  <BookOpen  size={20} />
                </div>
              }
              title="Mais de 20 anos de experiência clínica"
              description="Nossa especialista atua desde 2000, com formação em Neuropsicologia e Psicologia Hospitalar. Experiência que se traduz em avaliações mais precisas e orientações mais assertivas."
            />
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-27.5 px-6 md:px-12 w-screen z-99 flex flex-col items-center bg-white">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col justify-center text-center w-full">
            <h5 className="text-emerald-400 text-start md:text-center text-xs tracking-[0.25em] uppercase" ><span className="tracking-[-2px] me-2">---</span> Depoimentos</h5>
            <h1 className="font-[Cormorant_Garamond] text-start md:text-center text-[2.8rem] md:text-[3.2rem] leading-[1.1] text-black font-bold mt-5">A voz de quem confia no<br /><i className="text-(--purple)">Nosso trabalho</i></h1>
          </div>
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-e1c5597f-c364-40b5-9834-65ffc1c6fd35" data-elfsight-app-lazy></div>
        </div>
        
        <div className="flex mt-12">
          <a href="https://www.google.com/search?hl=pt-BR&gl=br&q=Cl%C3%ADnica+Claramente+-+Itaquaquecetuba+-+Av.+Pres.+Tancredo+Neves,+363+-+Esta%C3%A7%C3%A3o,+Itaquaquecetuba+-+SP,+08571-000&ludocid=11938231275793748742&lsig=AB86z5XWv1-fRNaga6zkNUhpvsB1#lrd=0x94ce7d3cc7a69d15:0xa5ad1e1808251306,3" target="_blank" rel="noopener noreferrer">
            <Button className="py-4 px-8 max-w-max rounded-full border text-(--lavender) text-sm cursor-pointer">
              Veja no Google
            </Button>
          </a>
        </div>
        
      </section>
      
      {/* Dúvidas frequentes */}
      <section className="py-27.5 px-6 md:px-12 w-screen z-99 flex flex-col items-center bg-gradient-to-t from-slate-50 to-violet-100">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-start text-start w-full">
            <h5 className="text-emerald-400 text-start md:text-center text-xs tracking-[0.25em] uppercase"><span className="tracking-[-2px] me-2">---</span> Dúvidas frequentes</h5>
            <h1 className="font-[Cormorant_Garamond] text-start md:text-center text-[2.8rem] md:text-[3.2rem] leading-[1.1] text-black font-bold mt-5">Perguntas que <i className="text-(--purple)">todo mundo faz</i></h1>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-2 rounded-xl text-(--purple)">
                  <CircleQuestionMark size={15} />
                </div>
              }
              title="Qual a diferença entre avaliação psicológica e neuropsicológica?"
              description="A avaliação psicológica foca em aspectos emocionais, de personalidade e comportamento. A neuropsicológica avalia funções cognitivas como memória, atenção e raciocínio. Muitas vezes são realizadas juntas para um diagnóstico mais completo."
            />

            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-2 rounded-xl text-(--purple)">
                  <CircleQuestionMark size={15} />
                </div>
              }
              title="Quantas sessões são necessárias?"
              description="Em geral, de 6 a 10 sessões, dependendo do objetivo da avaliação, da demanda do paciente e dos instrumentos utilizados. O número exato é definido após a entrevista inicial."
            />

            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-2 rounded-xl text-(--purple)">
                  <CircleQuestionMark size={15} />
                </div>
              }
              title="Para que serve o laudo final?"
              description="É um documento técnico que descreve seu perfil cognitivo. Ele é utilizado por profissionais da saúde e educação para orientar intervenções, apoiar diagnósticos médicos e planejar estratégias de reabilitação ou suporte escolar."
            />

            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-2 rounded-xl text-(--purple)">
                  <CircleQuestionMark  size={15} />
                </div>
              }
              title="Atende crianças pequenas?"
              description="Sim. Realizamos avaliações a partir dos 2 anos de idade, com abordagem adaptada para cada faixa etária, incluindo instrumentos lúdicos e acolhedores para os pequenos."
            />

            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-2 rounded-xl text-(--purple)">
                  <CircleQuestionMark size={15} />
                </div>
              }
              title="Posso fazer a avaliação de forma online?"
              description="Sim. A avaliação pode ser realizada de forma remota, conforme as diretrizes do CFP para atendimento telepresencial, com a mesma qualidade e sigilo do atendimento presencial."
            />

            <NumericDescriptionCard
              containerClass="bg-white border-gray-200"
              titleClass="text-black"
              descriptionClass="text-gray-500"
              hoverClass="hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-300 hover:-translate-y-1"
              icon={
                <div className="bg-(--lavender-light) p-2 rounded-xl text-(--purple)">
                  <CircleQuestionMark  size={15} />
                </div>
              }
              title="Funciona pelo plano de saúde?"
              description="No momento atendemos de forma particular. Entre em contato pelo WhatsApp para saber sobre formas de pagamento, parcelamento e valores disponíveis."
            />
          </div>
        </div>
      </section>

      <section className="py-27.5 px-6 md:px-12 w-screen z-99 flex flex-col items-center bg-white">
        <div className="w-full max-w-[1100px]">
          <ContatoForm />
        </div>
      </section>

      <FloaterButton 
        phoneNumber="5511982829179" 
      />

      <Footer/>
    </>
  );
}
