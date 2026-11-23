/* CyberStore Security | Dia 01 | Tipos de malware
   Dados fictícios e finalidade educativa. */

const MALWARES = [
  { id:"virus", nome:"Vírus", categoria:"Propagação",
    resumo:"Infecta arquivos ou programas hospedeiros e depende deles para se espalhar.",
    funcionamento:"Anexa seu código a um arquivo ou programa e é executado quando o hospedeiro é aberto.",
    disseminacao:"Arquivos compartilhados, pendrives, anexos de e-mail e downloads.",
    sintomas:["arquivos-alterados","lentidao","programas-falham"],
    sintomasTexto:["Arquivos com tamanho ou conteúdo alterado","Lentidão","Programas que deixam de abrir"],
    afetado:"Software (arquivos executáveis e documentos)", cid:["I","D"],
    impacto:"Integridade (arquivos corrompidos) e disponibilidade (programas inutilizados).",
    prevencao:"Antivírus atualizado, não abrir anexos desconhecidos, baixar apenas de fontes oficiais.",
    recuperacao:"Isolar a máquina, limpar com antivírus e restaurar arquivos de backup." },

  { id:"worm", nome:"Worm", categoria:"Propagação",
    resumo:"Pode se propagar automaticamente pela rede, sem precisar de um arquivo hospedeiro.",
    funcionamento:"Explora falhas em sistemas ou serviços e se copia sozinho para outros computadores.",
    disseminacao:"Rede local, internet, e-mail e serviços vulneráveis sem atualização.",
    sintomas:["rede-lenta","lentidao","trafego-estranho"],
    sintomasTexto:["Rede lenta ou instável","Uso alto de CPU e memória","Tráfego de rede inesperado"],
    afetado:"Hardware de rede e sistemas operacionais", cid:["D"],
    impacto:"Disponibilidade (congestionamento da rede e sobrecarga dos equipamentos).",
    prevencao:"Atualizações de segurança, firewall, segmentação de rede e fechamento de serviços não usados.",
    recuperacao:"Desconectar da rede, corrigir a falha explorada, limpar as máquinas e reconectar uma a uma." },

  { id:"trojan", nome:"Trojan (cavalo de Troia)", categoria:"Disfarce",
    resumo:"Disfarça-se de programa legítimo para ser instalado pela própria pessoa.",
    funcionamento:"Entrega uma função aparente (tema, jogo, utilitário) e executa ações ocultas, como abrir acesso ou baixar outros códigos.",
    disseminacao:"Extensões e instaladores falsos, sites não oficiais e pacotes de terceiros.",
    sintomas:["extensao-desconhecida","permissoes-excessivas","arquivos-alterados"],
    sintomasTexto:["Programa ou extensão que você não reconhece","Pedido de permissões incompatíveis com a função","Arquivos do projeto alterados"],
    afetado:"Software (editor de código, extensões, dependências)", cid:["C","I"],
    impacto:"Confidencialidade (acesso a dados do projeto) e integridade (alteração de arquivos).",
    prevencao:"Verificar procedência e autor, restringir permissões, usar lojas oficiais e não instalar arquivos suspeitos.",
    recuperacao:"Desinstalar, trocar credenciais, revisar arquivos alterados e comunicar o incidente." },

  { id:"ransomware", nome:"Ransomware", categoria:"Extorsão",
    resumo:"Bloqueia dados ou serviços para exigir pagamento.",
    funcionamento:"Criptografa arquivos ou trava o sistema e exibe uma mensagem de resgate.",
    disseminacao:"Anexos e links maliciosos, acesso remoto mal protegido e falhas sem correção.",
    sintomas:["arquivos-bloqueados","pedido-resgate","arquivos-alterados"],
    sintomasTexto:["Arquivos que não abrem ou com extensão nova","Mensagem pedindo pagamento","Sistema ou serviço indisponível"],
    afetado:"Armazenamento, servidores e aplicações web", cid:["I","D"],
    impacto:"Disponibilidade (acesso perdido) e integridade (dados criptografados). Pode haver vazamento (confidencialidade).",
    prevencao:"Backups protegidos e testados, atualizações em dia, privilégios mínimos e treinamento contra phishing.",
    recuperacao:"Desconectar da rede, não pagar, comunicar, restaurar do backup após remover a causa." },

  { id:"spyware", nome:"Spyware", categoria:"Espionagem",
    resumo:"Espiona a atividade e coleta informações sem o conhecimento da pessoa.",
    funcionamento:"Monitora navegação, arquivos e dados de uso e os envia a terceiros.",
    disseminacao:"Programas gratuitos duvidosos, extensões e anexos maliciosos.",
    sintomas:["trafego-estranho","extensao-desconhecida","lentidao","credenciais-vazadas"],
    sintomasTexto:["Tráfego de rede sem motivo aparente","Extensões ou programas desconhecidos","Contas acessadas sem autorização"],
    afetado:"Navegador, arquivos locais e dados do projeto", cid:["C"],
    impacto:"Confidencialidade (dados e credenciais expostos).",
    prevencao:"Instalar só software confiável, revisar permissões e usar autenticação em dois fatores.",
    recuperacao:"Remover o programa, trocar todas as senhas por outro dispositivo limpo e revisar acessos." },

  { id:"keylogger", nome:"Keylogger", categoria:"Espionagem",
    resumo:"Registra o que é digitado, como senhas e mensagens.",
    funcionamento:"Captura as teclas digitadas e guarda ou envia o registro.",
    disseminacao:"Trojans, programas falsos e acesso físico a computadores sem proteção.",
    sintomas:["credenciais-vazadas","trafego-estranho","lentidao"],
    sintomasTexto:["Senhas usadas por terceiros","Atraso ao digitar","Tráfego de rede inesperado"],
    afetado:"Teclado, sistema operacional e navegador", cid:["C"],
    impacto:"Confidencialidade (senhas e conteúdo digitado).",
    prevencao:"Autenticação em dois fatores, gerenciador de senhas, antivírus e bloqueio da estação.",
    recuperacao:"Remover o programa, trocar senhas em um dispositivo seguro e ativar alertas de acesso." },

  { id:"rootkit", nome:"Rootkit", categoria:"Acesso e ocultação",
    resumo:"Oculta atividades maliciosas e mantém privilégios elevados.",
    funcionamento:"Altera o sistema ou o firmware para esconder processos, arquivos e conexões.",
    disseminacao:"Normalmente instalado por outro malware ou por exploração de falhas.",
    sintomas:["antivirus-desativado","comportamento-estranho","trafego-estranho"],
    sintomasTexto:["Antivírus desativado sozinho","Processos que não aparecem ou voltam","Comportamento estranho persistente"],
    afetado:"Sistema operacional, drivers e firmware", cid:["C","I","D"],
    impacto:"Os três pilares, porque quem controla o sistema pode ler, alterar e derrubar serviços.",
    prevencao:"Atualizações, inicialização segura (Secure Boot), privilégios mínimos e drivers de fontes oficiais.",
    recuperacao:"Em geral exige reinstalar o sistema a partir de mídia confiável e restaurar dados verificados." },

  { id:"backdoor", nome:"Backdoor", categoria:"Acesso e ocultação",
    resumo:"Cria um acesso que contorna os controles normais de autenticação.",
    funcionamento:"Abre uma porta oculta ou conta paralela para que alguém acesse o sistema depois.",
    disseminacao:"Instalado por trojans, falhas exploradas ou dependências comprometidas.",
    sintomas:["trafego-estranho","contas-novas","comportamento-estranho"],
    sintomasTexto:["Contas ou portas novas que ninguém criou","Conexões externas inesperadas","Alterações sem explicação"],
    afetado:"Servidores, aplicações web e dependências do projeto", cid:["C","I"],
    impacto:"Confidencialidade e integridade (acesso e alteração por terceiros).",
    prevencao:"Revisar contas e portas abertas, revisar dependências, firewall e registro de acessos.",
    recuperacao:"Fechar o acesso, trocar credenciais, revisar o código e reinstalar a partir de fonte confiável." },

  { id:"bot", nome:"Bot malicioso", categoria:"Automação e publicidade",
    resumo:"Automação prejudicial que executa tarefas sem consentimento, em geral em rede (botnet).",
    funcionamento:"A máquina infectada recebe ordens remotas, como enviar spam, atacar sites ou minerar.",
    disseminacao:"Trojans, falhas sem correção e senhas fracas em dispositivos conectados.",
    sintomas:["trafego-estranho","lentidao","rede-lenta","ventoinha-alta"],
    sintomasTexto:["Uso alto de CPU sem motivo","Tráfego de saída incomum","Ventoinha acelerada em repouso"],
    afetado:"Hardware (CPU, rede) e aplicações web alvo de ataques", cid:["D"],
    impacto:"Disponibilidade da própria máquina e dos serviços atacados por ela.",
    prevencao:"Trocar senhas padrão, atualizar sistemas, firewall e monitorar tráfego de saída.",
    recuperacao:"Isolar, remover, atualizar e trocar credenciais. Comunicar quem administra a rede." },

  { id:"adware", nome:"Adware malicioso", categoria:"Automação e publicidade",
    resumo:"Exibe publicidade invasiva e pode redirecionar a navegação.",
    funcionamento:"Injeta anúncios, altera a página inicial e muda o mecanismo de busca do navegador.",
    disseminacao:"Programas gratuitos empacotados com extras, extensões e sites falsos.",
    sintomas:["anuncios","pagina-inicial","lentidao","extensao-desconhecida"],
    sintomasTexto:["Anúncios e janelas inesperadas","Página inicial ou buscador alterados","Navegador lento"],
    afetado:"Navegador e recursos web", cid:["C","D"],
    impacto:"Disponibilidade (navegação prejudicada) e confidencialidade (rastreamento e redirecionamento).",
    prevencao:"Baixar de fontes oficiais, ler as etapas da instalação e revisar extensões.",
    recuperacao:"Desinstalar o programa, remover extensões, redefinir o navegador e verificar com antivírus." }
];

const SINTOMAS = [
  ["arquivos-alterados","Arquivos alterados ou corrompidos"],
  ["arquivos-bloqueados","Arquivos que não abrem"],
  ["pedido-resgate","Mensagem pedindo pagamento"],
  ["lentidao","Computador ou navegador lento"],
  ["rede-lenta","Rede lenta ou instável"],
  ["trafego-estranho","Tráfego de rede inesperado"],
  ["ventoinha-alta","Ventoinha acelerada em repouso"],
  ["programas-falham","Programas que deixam de abrir"],
  ["extensao-desconhecida","Extensão ou programa desconhecido"],
  ["permissoes-excessivas","Permissões incompatíveis com a função"],
  ["credenciais-vazadas","Contas acessadas sem autorização"],
  ["antivirus-desativado","Antivírus desativado sozinho"],
  ["contas-novas","Contas ou portas novas sem explicação"],
  ["comportamento-estranho","Comportamento estranho persistente"],
  ["anuncios","Anúncios e janelas inesperadas"],
  ["pagina-inicial","Página inicial ou buscador alterados"]
];

/* Remove acentos, ignora maiúsculas e espaços nas pontas */
function normalizar(texto){
  return String(texto || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

/* Filtro por nome ou categoria. Termo vazio devolve todos. */
function filtrar(lista, termo, categoria){
  const t = normalizar(termo);
  const c = normalizar(categoria);
  return lista.filter(m => {
    const okTermo = !t || normalizar(m.nome).includes(t) || normalizar(m.categoria).includes(t) || normalizar(m.id).includes(t);
    const okCat = !c || normalizar(m.categoria) === c;
    return okTermo && okCat;
  });
}

/* Hipóteses por sintomas: ordenadas pelos sintomas compatíveis, sem diagnóstico definitivo */
function hipoteses(lista, marcados){
  if(!marcados.length) return [];
  return lista
    .map(m => ({ m, acertos: m.sintomas.filter(s => marcados.includes(s)).length }))
    .filter(x => x.acertos > 0)
    .sort((a,b) => b.acertos - a.acertos || a.m.nome.localeCompare(b.m.nome))
    .map(x => ({ nome:x.m.nome, id:x.m.id, acertos:x.acertos, total:marcados.length }));
}

/* ---------- Interface (só roda no navegador) ---------- */
function el(tag, props, filhos){
  const e = document.createElement(tag);
  Object.entries(props || {}).forEach(([k,v]) => {
    if(k === "text") e.textContent = v;
    else if(k === "class") e.className = v;
    else e.setAttribute(k, v);
  });
  (filhos || []).forEach(f => e.appendChild(f));
  return e;
}

function criarCartao(m){
  const rotulos = { C:"Confidencialidade", I:"Integridade", D:"Disponibilidade" };
  const cid = el("div", { class:"cid", "aria-label":"Impacto CID" },
    ["C","I","D"].map(k => el("span", { class: m.cid.includes(k) ? "on" : "", title:rotulos[k], text:k })));
  const sint = el("ul", {}, m.sintomasTexto.map(s => el("li", { text:s })));
  const detalhes = el("details", {}, [
    el("summary", { text:"Ver detalhes" }),
    el("p", {}, [el("strong", { text:"Como funciona: " }), document.createTextNode(m.funcionamento)]),
    el("p", {}, [el("strong", { text:"Como se espalha: " }), document.createTextNode(m.disseminacao)]),
    el("p", {}, [el("strong", { text:"O que é afetado: " }), document.createTextNode(m.afetado)]),
    el("p", {}, [el("strong", { text:"Impacto: " }), document.createTextNode(m.impacto)]),
    el("p", {}, [el("strong", { text:"Prevenção: " }), document.createTextNode(m.prevencao)]),
    el("p", {}, [el("strong", { text:"Recuperação: " }), document.createTextNode(m.recuperacao)])
  ]);
  const a = el("article", { class:"cartao", "data-id":m.id, "data-cat":m.categoria }, [
    el("h3", { text:m.nome }),
    el("span", { class:"tag", text:m.categoria }),
    el("p", { text:m.resumo }),
    el("strong", { text:"Sintomas" }), sint, cid, detalhes
  ]);
  return a;
}

function iniciarMalware(){
  const grade = document.getElementById("grade");
  if(!grade) return;
  const campo = document.getElementById("busca");
  const sel = document.getElementById("categoria");
  const status = document.getElementById("status");
  const vazio = document.getElementById("vazio");

  [...new Set(MALWARES.map(m => m.categoria))].forEach(c => sel.appendChild(el("option", { value:c, text:c })));
  const cartoes = new Map();
  MALWARES.forEach(m => { const c = criarCartao(m); cartoes.set(m.id, c); grade.appendChild(c); });

  function atualizar(){
    const achados = filtrar(MALWARES, campo.value, sel.value).map(m => m.id);
    cartoes.forEach((c, id) => { c.hidden = !achados.includes(id); });
    vazio.style.display = achados.length ? "none" : "block";
    status.textContent = achados.length === MALWARES.length
      ? "Mostrando todos os " + MALWARES.length + " tipos."
      : achados.length + " de " + MALWARES.length + " tipos encontrados.";
  }
  campo.addEventListener("input", atualizar);
  sel.addEventListener("change", atualizar);
  document.getElementById("limpar").addEventListener("click", () => { campo.value = ""; sel.value = ""; atualizar(); campo.focus(); });
  atualizar();

  /* Desafio avançado: filtro por sintomas */
  const caixa = document.getElementById("sintomas");
  const lista = document.getElementById("hipoteses");
  SINTOMAS.forEach(([id, rotulo]) => {
    const input = el("input", { type:"checkbox", value:id });
    caixa.appendChild(el("label", {}, [input, el("span", { text:rotulo })]));
    input.addEventListener("change", mostrarHipoteses);
  });
  function mostrarHipoteses(){
    const marcados = [...caixa.querySelectorAll("input:checked")].map(i => i.value);
    lista.replaceChildren();
    if(!marcados.length) return;
    const r = hipoteses(MALWARES, marcados);
    if(!r.length){ lista.appendChild(el("li", { text:"Nenhuma hipótese compatível. Procure análise técnica." })); return; }
    r.forEach(h => {
      const pct = Math.round(100 * h.acertos / h.total);
      lista.appendChild(el("li", {}, [
        el("strong", { text:h.nome }),
        document.createTextNode(" — hipótese compatível com " + h.acertos + " de " + h.total + " sintomas marcados"),
        el("div", { class:"barra", "aria-hidden":"true" }, [el("i", { style:"width:" + pct + "%" })])
      ]));
    });
    lista.appendChild(el("li", { text:"Lembrete: são hipóteses, não um diagnóstico definitivo." }));
  }
}

function iniciarFicha(){
  const so = document.getElementById("f-so");
  if(!so) return;
  const ua = navigator.userAgent;
  const sistema = /Windows/.test(ua) ? "Windows" : /Android/.test(ua) ? "Android" : /Mac OS X/.test(ua) ? "macOS" : /Linux/.test(ua) ? "Linux" : "Não identificado";
  const nav = /Edg\//.test(ua) ? "Microsoft Edge" : /OPR\//.test(ua) ? "Opera" : /Chrome\//.test(ua) ? "Google Chrome" : /Firefox\//.test(ua) ? "Mozilla Firefox" : /Safari\//.test(ua) ? "Safari" : "Não identificado";
  so.textContent = sistema;
  document.getElementById("f-nav").textContent = nav;
  document.getElementById("f-cpu").textContent = navigator.hardwareConcurrency ? navigator.hardwareConcurrency + " núcleos lógicos" : "Preencher manualmente";
  document.getElementById("f-ram").textContent = navigator.deviceMemory ? "≈ " + navigator.deviceMemory + " GB (valor arredondado pelo navegador)" : "Preencher manualmente";
}

if(typeof document !== "undefined"){
  document.addEventListener("DOMContentLoaded", () => { iniciarMalware(); iniciarFicha(); });
}
if(typeof module !== "undefined"){ module.exports = { MALWARES, filtrar, hipoteses, normalizar }; }
