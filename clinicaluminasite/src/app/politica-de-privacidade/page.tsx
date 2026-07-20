import type { Metadata } from "next";
import { site } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de privacidade da ${site.name}, em conformidade com a LGPD (Lei nº 13.709/2018).`,
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="container-site pb-10 pt-32 md:pt-40">
      <SectionHeading
        as="h1"
        eyebrow="LGPD"
        title="Política de Privacidade"
        text={`Última atualização: julho de 2026. Esta política descreve como a ${site.legalName} ("${site.name}") trata dados pessoais em seu site e canais de atendimento, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).`}
      />

      <Reveal y={26}>
        <div className="prose-clinic mx-auto mt-12 max-w-3xl rounded-[var(--radius-shell)] bg-surface p-8 shadow-card md:p-12">
          <h2 className="font-display text-dark">1. Dados que coletamos</h2>
          <p>
            Coletamos apenas os dados necessários para atendimento e agendamento:
          </p>
          <ul>
            <li>
              <strong>Dados fornecidos por você</strong>: nome, telefone, e-mail
              e mensagem, quando enviados pelo formulário de contato ou pelo
              WhatsApp;
            </li>
            <li>
              <strong>Dados de navegação</strong>: cookies essenciais ao
              funcionamento do site e, mediante seu consentimento, cookies de
              análise de audiência de forma agregada.
            </li>
          </ul>

          <h2 className="font-display text-dark">2. Finalidades e bases legais</h2>
          <ul>
            <li>Responder contatos e realizar agendamentos (execução de procedimentos preliminares a contrato — art. 7º, V);</li>
            <li>Comunicações sobre consultas e tratamentos (execução de contrato e legítimo interesse — art. 7º, V e IX);</li>
            <li>Análise de audiência do site (consentimento — art. 7º, I);</li>
            <li>Cumprimento de obrigações legais e regulatórias, incluindo prontuários, quando você se torna paciente (art. 7º, II).</li>
          </ul>

          <h2 className="font-display text-dark">3. Dados sensíveis e de saúde</h2>
          <p>
            Informações de saúde eventualmente compartilhadas em consultas e
            prontuários são tratadas com sigilo profissional, armazenadas em
            sistemas com controle de acesso e utilizadas exclusivamente para a
            sua assistência, nos termos do art. 11 da LGPD e das normas dos
            conselhos profissionais.
          </p>

          <h2 className="font-display text-dark">4. Compartilhamento</h2>
          <p>
            Não vendemos dados pessoais. Compartilhamos dados apenas com:
            operadores essenciais ao serviço (hospedagem do site, ferramentas de
            agendamento e comunicação, como o WhatsApp), autoridades quando
            houver obrigação legal, e profissionais da equipe envolvidos no seu
            atendimento.
          </p>

          <h2 className="font-display text-dark">5. Cookies</h2>
          <p>
            Cookies essenciais são necessários ao funcionamento do site e não
            dependem de consentimento. Cookies de análise só são utilizados se
            você aceitar no aviso exibido na primeira visita, e sua escolha pode
            ser revista a qualquer momento limpando os dados do navegador.
          </p>

          <h2 className="font-display text-dark">6. Retenção e segurança</h2>
          <p>
            Mantemos dados de contato pelo tempo necessário ao atendimento e às
            finalidades desta política. Prontuários seguem os prazos legais de
            guarda. Adotamos medidas técnicas e organizacionais proporcionais ao
            risco, como criptografia em trânsito, controle de acesso e registro
            de atividades.
          </p>

          <h2 className="font-display text-dark">7. Seus direitos</h2>
          <p>
            Nos termos do art. 18 da LGPD, você pode solicitar: confirmação de
            tratamento, acesso, correção, anonimização, portabilidade,
            eliminação de dados tratados com consentimento, informação sobre
            compartilhamentos e revisão de decisões automatizadas.
          </p>

          <h2 className="font-display text-dark">8. Contato do encarregado (DPO)</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas sobre esta política,
            fale com nosso encarregado de dados: {site.email}. Responderemos nos
            prazos previstos pela legislação.
          </p>

          <h2 className="font-display text-dark">9. Alterações desta política</h2>
          <p>
            Esta política pode ser atualizada para refletir mudanças legais ou
            operacionais. A versão vigente estará sempre disponível nesta
            página, com a data da última atualização.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
