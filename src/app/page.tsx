import Image from "next/image";
import app from "../../public/logo.png";
import paper from "../../public/paper-fill.png";
import line from "../../public/Line-1.svg";
import readyTogo from "../../public/logo-ready-to-go 2.svg";

export default function Home() {
  return (
    <body>
      <main className="overflow-x-hidden">
        <header className="flex">
          <section className="w-[100%] max-h-screen h-[45.5rem] bg-[#D3D3D3] flex flex-col ">
            <div className="w-[39.25rem] m-auto">
              <Image src={app} alt="" className="mb-[5.12rem]"/>
              <p className="text-[1rem] font-semibold text-[#B3B3B3]">outubro/2023</p>
              <Image src={line} alt=""/>
              <h1 className="text-[3rem] text-[#545454] w-[25rem] leading-[2.78125rem] font-bold mt-[1.37rem]">Política de Privacidade</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Sua privacidade é importante para a READY TO GO portanto, sendo você usuário, por favor reserve um tempo para conhecer nossas práticas e, se tiver alguma dúvida, <a href="" className="text-[#1E1E1E] underline">consulte esta página</a> ou os Termos de Uso.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Ao visitar e usufruir deste aplicativo, você automaticamente aceita as condições descritas a seguir, que compõem a Política de Privacidade.</p>
            </div>
          </section>
          <div className="max-h-screen w-[7.3125rem] flex bg-[#676767] mt-0 sm:w-[5rem]">
            <Image src={paper} alt="" className="w-[1.625rem] h-[2.0625rem] m-auto sm:w-[1.325rem] sm:h-[1.7625rem]"/>
          </div>
        </header>
        <section className="flex">
          <section className="flex flex-col bg-[#E3E3E3] w-full">
            <div className="w-[39.25rem] mx-auto mt-[2.25rem]">
              <h1 className="text-[1.5rem] text-[#545454] font-bold ">Resumo:</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">A READY TO GO respeita a sua privacidade. Quando se conectam a nós, queremos que nossos clientes saibam que seus dados pessoais estão em segurança. Assim como nós nos dedicamos em levar-lhes uma experiência virtual fácil e segura. As informações pessoais armazenadas pelo nosso aplicativo nos ajudam a compreender melhor os interesses de nossos clientes, sendo que o nosso esforço em atender com o melhor serviço possível nunca cessa.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Se, mesmo assim, você ficar com alguma dúvida entre em contato através de nosso canal próprio para contato: <a href="mailto:suporte@vendatodosantodia.com.br" className="underline text-[#1E1E1E]">suporte@vendatodosantodia.com.br</a></p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Informações que coletamos:</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Você não é obrigado a conceder informações ao nosso aplicativo, entretanto, sem conceder quando forem solicitadas, não lhe será permitido o acesso às funcionalidades nele constante.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Coletamos informações para fornecer serviços melhores a todos nossos usuários e elas ocorrem da seguinte forma:</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Da coleta de informações pessoais:</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]"><strong>A Ready To Go</strong> coletará as seguintes informações de identificação pessoal:</p>
              <ol className={"list-decimal list-inside text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]"}>
              <li>Nome, sobrenome;</li>
              <li>E-mail;</li>
              <li>Número de telefone;</li>
              <li>CPF, este último para fins de emissão da Nota Fiscal.</li>
              </ol>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]"><strong>A Ready To Go</strong> irá utilizar essas informações para fins de disponibilização de acesso ao App Planner 3, bem como, a entrega via e-mail, Whatsapp e Telegram sobre todas as mudanças internas necessárias, comunicação ligada tão somente ao serviço prestado e pactuado contratualmente.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Tais dados poderão ser armazenados. Dessa maneira, de acordo com o art. 7º, inciso VIII da Lei 12.965/2014 (Marco Civil da Internet), poderemos enviar mensagens.</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">O uso das suas informações pessoais:</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Sempre que você acessar e utilizar o nosso aplicativo armazenará automaticamente informações, incluindo seu endereço IP, informações de cookies (e-mail e senha), que serão relacionadas com as informações pessoais que você fornece em seu sítio eletrônico.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]"><strong>A Ready To Go</strong> irá disponibilizar suas informações pessoais, sem aviso prévio, somente em caso de:</p>
              <ol className={"list-decimal list-inside text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]"}>
              <li>Legislação, regulamentação, processo legal ou solicitação governamental aplicável;</li>
              <li>Cumprir investigação de possíveis violações;</li>
              <li>Fraude ou por segurança; ou</li>
              <li>Proteger contra danos aos direitos, a propriedade ou a segurança da <strong>Ready To Go</strong>, nossos usuários ou o público, conforme solicitado ou permitido por lei.</li>
              </ol>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]"><strong>A Ready To Go</strong> efetuará o cadastro do usuário, mantendo em seu sistema os registros específicos das transações efetuadas, pelo prazo contratual ou enquanto perdurar o interesse legítimo da empresa.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Os dados cadastrais ativos e atualizados do titular, tais como, mas não limitado ao nome completo e respectivo número de inscrição no CPF, número do celular e código DDD, a fim de manter os canais de comunicação sempre atualizados.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Todos os documentos e informações relacionados ao cadastro do Titular permanecerão em segurança na posse da <strong>Ready To Go</strong>.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">O Titular autoriza <strong>Ready To Go</strong> a compartilhar os dados cadastrais, para fins de:</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">1. Nome e CPF: Para emissão de Nota Fiscal;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">2. Nome e e-mail: Para acesso ao aplicativo e encaminhar comunicação;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">3. Nome, e-mail e cartão de crédito para a plataforma responsável pela cobrança;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">4. Nome e telefone: Para o setor de comunicação, para que estes mantenham contato direto com o usuário, para encaminhar informações e comunicações da Ready To Go.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]"><strong>A Ready To Go</strong> se reserva o direito de bloquear ou cancelar a conta em virtude da existência de indícios ou de ilícito efetivo identificado, além de divergências cadastrais.</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Do compartilhamento de informações com terceiros:</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]"><strong>A Ready To Go</strong> compartilhará os dados pessoais do titular para a plataforma Hotmart, a mesma que realiza a ativação do <strong>App Planner 3.</strong></p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Esse compartilhamento serve apenas como cadastro, para que você tenha acesso ao serviço contratado/ativado.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Compartilhamos informações referentes a dados pessoais com nossos operadores de página e e-mail, sendo ele o Keap, com a finalidade de viabilizar o contato com nossos usuários através da página de acesso e e-mail.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Todos os compartilhamentos seguem a máxima de segurança de dados em atenção à Lei 12.965/2014 e a 13.709/2018.</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Da segurança:</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Nós dispomos de medidas de segurança em âmbitos físico, eletrônico e administrativo, que protegem os dados pessoais e suas informações. Essas medidas de proteção nos auxiliam na prevenção de fraudes e acessos não autorizados às informações, bem como, na manutenção da integridade dos dados. Além disso, dispomos de uma Política de Segurança Interna para que funcionários da Ready To Go não tenham acesso a suas informações pessoais, de modo que seus dados permaneçam sempre em segurança.</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Dos direitos do usuário:</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Todos os direitos elencados abaixo podem ser exercidos em qualquer momento através do canal de e-mail: suporte@vendatodosantodia.com.br</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">1. confirmação da existência de tratamento de dados pessoais;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">2. acesso aos dados pessoais;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">3. correção de dados incompletos, inexatos ou desatualizados;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">4. anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na Lei Geral de Proteção de Dados Pessoais;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">5. portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">6. eliminação dos dados pessoais tratados com o consentimento do titular, exceto quando:</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">f.1 cumprimento de obrigação legal ou regulatória da <strong>Ready To Go;</strong></p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">f.2 estudo por órgão de pesquisa;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">f.3 transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos na Lei Geral de Proteção de Dados Pessoais;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">f.4 uso exclusivo da <strong>Ready To Go,</strong> vedado acesso por terceiro, e desde que anonimizados (quando não possível ligar o dado pessoal a seu titular, de forma irreversível) os dados.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ">g. informação das entidades públicas e privadas com as quais <strong>Ready To Go</strong> realizou uso compartilhado de dados;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ">h. informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ">i. revogação do consentimento, salvo quando por obrigação legal a <strong>Ready To Go</strong> for obrigada a manter este pelo prazo determinado em lei.</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Das mudanças nesta declaração:</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Em caso de modificação destes termos, para atender melhor seus clientes, publicaremos tais alterações da política de privacidade e informaremos sobre esta situação. Também manteremos as versões anteriores desta Política de Privacidade arquivadas para você compará-las.</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Dos prazos para armazenamento de dados pessoais:</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Os dados manter-se-ão armazenados pelo período de duração contratual previamente estipulados.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Não excluindo aqueles exigidos através de:</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">a. legislação, regulamentação, processo legal ou solicitação governamental aplicável;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">b. aqueles que atendem o interesse legítimo da empresa;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ">c. cumprir investigação de possíveis violações;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ">d. fraude ou por segurança; ou</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ">e. proteger contra danos aos direitos, a propriedade ou a segurança da Ready To Go, nossos usuários ou o público, conforme solicitado ou permitido por lei.</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Do consentimento do uso de dados pessoais</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">1. Com fundamento na <strong>Lei Geral de Proteção de Dados, de nº 13.709/2018</strong>, nós como empresa precisamos esclarecer quais as finalidades da coleta de cada dado. Sendo eles:</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]"><strong>a. Nome:</strong> para cadastro e liberação do seu acesso ao aplicativo em questão.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] "><strong>b. E-mail:</strong> para cadastro e liberação do seu acesso ao aplicativo em questão, bem como, para possível comunicação da <strong>Ready To Go.</strong></p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">2. Os possíveis dados estatísticos coletados nas aplicações e formulários serão mantidos, ainda que finalizada a relação contratual, com fundamento no legítimo interesse da <strong>Ready To Go</strong>, no entanto, os dados serão anonimizados ao final.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Esta manutenção se baseia no constante aprimoramento do serviço prestado, bem como, em acompanhar a evolução dos indivíduos.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">3. Os demais dados pessoais serão utilizados e armazenados enquanto durar esta relação contratual.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">4. Após o término do prazo contratual seus dados pessoais que não foram passíveis de anonimização serão descartados, quando possível.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">5. O e-mail do titular de dados será mantido em nossas bases de dados atendendo ao legítimo interesse da Ready To Go, a fim de que sejam apresentados novos produtos e/ou feita comunicações que se julguem importantes.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Podendo este ser removido de forma simples e sem custos das bases de dados, seja através de pedido direto a empresa ou por cancelamento automático feito através do próprio e-mail.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">6. Sempre que for preciso utilizar seus dados pessoais para finalidade diversa da apresentada no ponto “1” encaminharemos comunicação pedindo novo consentimento.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Lembrando que você não está obrigado (a) a consentir com este novo uso de seus dados pessoais.</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Do compartilhamento dos dados pessoais</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">1. Seus dados coletados serão compartilhados com a plataforma HOTMART, a mesma que realizou a compra/ativação App Planner 3.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">2. Esse compartilhamento serve apenas como cadastro, para que você tenha acesso ao presente serviço.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">3. Demais dados compartilhados pelo titular de dados pessoais é de responsabilidade deste.</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Dos direitos do titular de dados pessoais</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">1. Como titular dos dados pessoais coletados e armazenados, você tem direitos ligados ao que chamamos de tratamento destes dados, podendo estes direitos serem exercidos a qualquer tempo:</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">a. confirmação da existência de tratamento;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">b. acesso aos dados;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">c. correção de dados incompletos, inexatos ou desatualizados;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">d. anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na Lei Geral de Proteção de Dados Pessoais</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">e. portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">f. eliminação dos dados pessoais tratados com o consentimento do titular, exceto quando:</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ml-4">f.1 cumprimento de obrigação legal ou regulatória da <strong>Ready To Go</strong>;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ml-4">f.2 estudos por órgão de pesquisa;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ml-4">f.3 transferências à terceiro, desde que respeitados os requisitos de tratamento de dados dispostos na Lei Geral de Proteção de Dados Pessoais;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ml-4">f.4 uso exclusivo da <strong>Ready To Go</strong>, vedado acesso por terceiro, e desde que anonimizados os dados</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">g. informação das entidades públicas e privadas com as quais a <strong>Ready To Go</strong> realizou uso compartilhado de dados;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">h. informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem]">i. revogação do consentimento, salvo quando por obrigação legal a <strong>Ready To Go</strong> for obrigada a manter este pelo prazo determinado em lei.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">2. É necessário que mantenha seu telefone e e-mail sempre atualizados, para que a prestação de serviços seja entregue em sua plenitude.</p>
            </div>
            <div className="w-[39.25rem] mx-auto">
              <h1 className="text-[1.5rem] text-[#545454] font-bold mt-[2.25rem]">Do encarregado de dados pessoais nos moldes da Lei Geral de Proteção de Dados Pessoais:</h1>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Durante o período de armazenamento pela Ready To Go, haverá um responsável exclusivo pelos dados, nos termos do art. 41 da Lei de Proteção de Dados. Esta pessoa irá responder pelos dados, caso haja necessidade de apresentá-los para autoridade competente.</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] mt-[2rem]">Nome: <strong>Ready To Go</strong></p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ">CNPJ: <strong>37.643.030/0001-26</strong></p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ">E-mail: suporte@vendatodosantodia.com.br</p>
              <p className="text-[0.875rem] text-[#828282] leading-[2rem] ">Telefone: +5567981121126</p>
            </div>
            
            <div className="w-[39.25rem] mx-auto mb-[5.69rem] text-right">
              <p className="text-[0.875rem] text-[#828282] leading-[1.25rem]">Documento elaborado por</p>
              <p className="text-[0.875rem] text-[#828282] leading-[1.25rem] ">Dra. Barbara Guimarães, OAB/SP 426.108</p>
              
            </div>
          </section>
          
          <div className="w-[7.3125rem] h-100% bg-[#ADADAD] mt-0 sm:w-[5rem]"></div>
        </section>

      </main>

      <footer className="flex justify-between items-center h-20 px-[5rem] sm:px-[1rem] sm:w-full bg-[#545454] text-[0.75rem] text-[#F7F7F7] font-semibold ">
      <div className="my-auto sm:w-[11rem]">
        <h1>© 2023 Ready To Go. Todos os direitos reservados.</h1>
      </div>
      <div className="my-auto flex gap-[.44rem] sm:gap-[.22rem]">
        <h1>Designed by</h1>
        <Image src={readyTogo} alt=""/>
      </div>
      </footer>
    </body>
  )
}
