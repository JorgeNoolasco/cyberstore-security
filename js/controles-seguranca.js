(() => {
  const statusKey = "cyberstore-controles-status-v1";
  const auditKey = "cyberstore-auditoria-dia04-v1";
  const categories = [
    {
      name: "Organizacionais", intro: "Políticas, responsabilidades e coordenação da segurança.", controls: [
        ["pol-seguranca", "Política de segurança da informação", "Definir regras, escopo, aprovação e revisão periódica.", "Exposição de credenciais; alteração indevida do código", "Segurança da informação", "Política fictícia aprovada e data de revisão registrada."],
        ["papeis", "Papéis e responsabilidades", "Atribuir responsáveis por ativos, riscos e aprovação de mudanças.", "Alteração indevida do código; indisponibilidade da aplicação", "Liderança técnica", "Matriz de responsabilidades revisada."],
        ["incidentes", "Preparação para gestão de incidentes", "Definir como identificar, comunicar, registrar e revisar incidentes.", "Comprometimento da estação; exposição de credenciais", "Segurança da informação", "Exercício simulado com linha do tempo e lições aprendidas."]
      ]
    },
    {
      name: "Pessoas", intro: "Conscientização, treinamento e deveres de quem participa do trabalho.", controls: [
        ["conscientizacao", "Conscientização e treinamento", "Orientar a equipe sobre phishing, dados fictícios e comunicação de problemas.", "Comprometimento da estação; exposição de credenciais", "Liderança da equipe", "Lista de presença fictícia e material do exercício."],
        ["termos", "Termos e deveres de segurança", "Explicar responsabilidades de uso, confidencialidade e reporte.", "Exposição de credenciais; alteração indevida do código", "Responsável pela equipe", "Termo de exemplo revisado, sem assinaturas ou dados reais."],
        ["reporte", "Reporte de eventos de segurança", "Facilitar o relato rápido de mensagens, falhas ou acessos suspeitos.", "Comprometimento da estação; indisponibilidade da aplicação", "Segurança da informação", "Registro de exercício com horário, encaminhamento e retorno."]
      ]
    },
    {
      name: "Físicos", intro: "Proteção de espaços, equipamentos e suportes físicos.", controls: [
        ["areas", "Perímetros de segurança física", "Restringir entrada em áreas com equipamentos e infraestrutura.", "Indisponibilidade da aplicação; indisponibilidade do banco", "Operações", "Checklist fictício de inspeção de acesso físico."],
        ["entrada", "Controle de entrada física", "Autorizar e revisar quem pode entrar em áreas restritas.", "Indisponibilidade do banco; comprometimento da estação", "Operações", "Registro simulado de revisão de acessos, sem nomes reais."],
        ["equipamentos", "Proteção de equipamentos", "Proteger estações e equipamentos contra perda, dano e acesso casual.", "Comprometimento da estação; exposição de credenciais", "Equipe de desenvolvimento", "Checklist de bloqueio de tela, guarda e inventário fictício."]
      ]
    },
    {
      name: "Tecnológicos", intro: "Autenticação, registros, cópias de segurança e desenvolvimento seguro.", controls: [
        ["acesso", "Controle de acesso e privilégio mínimo", "Conceder apenas permissões necessárias e revisar acessos periodicamente.", "Exposição de credenciais; alteração indevida do código", "Administração de dados", "Matriz de permissões revisada e acessos de teste documentados."],
        ["autenticacao", "Informações de autenticação", "Proteger credenciais, usar autenticação multifator onde aplicável e trocar segredos expostos.", "Exposição de credenciais; comprometimento da estação", "Segurança da informação", "Configuração fictícia documentada sem registrar senhas ou tokens."],
        ["backup-dev", "Backup, registros e desenvolvimento seguro", "Testar restauração, registrar eventos importantes e revisar alterações de código.", "Indisponibilidade do banco; indisponibilidade da aplicação; alteração indevida do código", "Operações e liderança técnica", "Resultado do teste de restauração, exemplo de log sem dados pessoais e checklist de revisão."]
      ]
    }
  ];
  const $ = (id) => document.getElementById(id);
  const el = (tag, props = {}, children = []) => {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
      if (key === "text") node.textContent = value;
      else if (key === "class") node.className = value;
      else node.setAttribute(key, value);
    });
    children.forEach(child => node.append(child));
    return node;
  };
  const read = (key, fallback) => {
    try { const value = JSON.parse(localStorage.getItem(key)); return value && typeof value === "object" ? value : fallback; }
    catch { return fallback; }
  };
  let statuses = read(statusKey, {});
  const all = categories.flatMap(group => group.controls.map(c => ({ id: c[0], category: group.name, title: c[1], purpose: c[2], risks: c[3], owner: c[4], evidence: c[5] })));
  all.forEach(control => { if (!statuses[control.id]) statuses[control.id] = { status: "Planejado", evidence: "" }; });

  function metrics() {
    const counts = { Planejado: 0, "Em andamento": 0, Demonstrado: 0 };
    all.forEach(control => { counts[statuses[control.id]?.status] = (counts[statuses[control.id]?.status] || 0) + 1; });
    const box = $("indicadores-controles"); box.replaceChildren();
    [["Controles", all.length], ["Pendentes", counts.Planejado], ["Em andamento", counts["Em andamento"]], ["Demonstrados", counts.Demonstrado]].forEach(([label, count]) => {
      box.append(el("article", { class: "metrica" }, [el("span", { text: label }), el("strong", { text: String(count) })]));
    });
  }
  function renderControls() {
    const root = $("controles-categorias"); root.replaceChildren();
    categories.forEach(group => {
      const section = el("section", { "aria-label": `Controles ${group.name}` });
      section.append(el("h3", { text: `${group.name} — 3 controles` }), el("p", { text: group.intro }));
      const table = el("table");
      const head = el("thead");
      head.append(el("tr", {}, ["Controle e finalidade", "Risco relacionado", "Responsável", "Status e evidência"].map(text => el("th", { text }))));
      const body = el("tbody");
      group.controls.forEach(c => {
        const record = statuses[c[0]] || { status: "Planejado", evidence: "" };
        const row = el("tr");
        row.append(el("td", {}, [el("strong", { text: c[1] }), el("br"), document.createTextNode(c[2])]), el("td", { text: c[3] }), el("td", { text: c[4] }));
        const cell = el("td");
        const select = el("select", { "aria-label": `Status de ${c[1]}` });
        ["Planejado", "Em andamento", "Demonstrado"].forEach(value => select.append(el("option", { value, text: value })));
        select.value = record.status;
        const evidence = el("textarea", { rows: "2", maxlength: "240", placeholder: "Evidência fictícia (não inclua dados reais)", "aria-label": `Evidência de ${c[1]}` });
        evidence.value = record.evidence || "";
        const save = () => {
          statuses[c[0]] = { status: select.value, evidence: evidence.value.trim() };
          try { localStorage.setItem(statusKey, JSON.stringify(statuses)); } catch { /* armazenamento local pode estar indisponível */ }
          metrics();
        };
        select.addEventListener("change", save); evidence.addEventListener("change", save);
        cell.append(select, document.createElement("br"), evidence); row.append(cell); body.append(row);
      });
      table.append(head, body); const wrap = el("div", { class: "rolagem" }); wrap.append(table); section.append(wrap); root.append(section);
    });
  }
  function renderEvents() {
    const now = new Date();
    const stamp = now.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
    const events = [
      [stamp, "Revisão de permissões de demonstração", "Equipe fictícia", "Registrado"],
      [stamp, "Teste de restauração de arquivo fictício", "Operações (simulado)", "Aguardando execução"],
      [stamp, "Revisão de alteração de código de exemplo", "Liderança técnica (simulada)", "Registrado"]
    ];
    const body = $("eventos-lista"); body.replaceChildren();
    events.forEach(event => { const row = el("tr"); event.forEach(value => row.append(el("td", { text: value }))); body.append(row); });
  }
  function renderAudit() {
    const record = read(auditKey, null), box = $("auditoria-registro"); box.replaceChildren();
    if (!record) { box.append(el("p", { text: "Nenhuma sugestão registrada ainda." })); return; }
    box.append(el("h3", { text: `Sugestões da auditoria${record.team ? ` — ${record.team}` : ""}` }),
      el("ol", {}, [el("li", { text: record.first }), el("li", { text: record.second })]));
  }
  renderControls(); metrics(); renderEvents(); renderAudit();

  const original = $("backup-conteudo").textContent;
  $("backup-criar").addEventListener("click", () => {
    try { sessionStorage.setItem("cyberstore-backup-ficticio-v1", original); $("backup-status").textContent = "Cópia fictícia criada nesta sessão. Nenhum dado foi enviado."; }
    catch { $("backup-status").textContent = "Não foi possível usar o armazenamento desta sessão. O exercício não foi executado."; }
  });
  $("backup-restaurar").addEventListener("click", () => {
    let saved = null; try { saved = sessionStorage.getItem("cyberstore-backup-ficticio-v1"); } catch { /* sem armazenamento */ }
    if (saved === null) { $("backup-status").textContent = "Sem cópia disponível. Crie a cópia antes de testar a restauração."; return; }
    $("backup-conteudo").textContent = saved;
    $("backup-status").textContent = saved === original ? `Restauração simulada concluída em ${new Date().toLocaleString("pt-BR")}; conteúdo confere com o original.` : "Restauração executada, mas o conteúdo difere do original.";
  });

  $("auditoria-form").addEventListener("submit", event => {
    event.preventDefault(); const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const record = { first: $("melhoria-1").value.trim(), second: $("melhoria-2").value.trim(), team: $("equipe-revisora").value.trim() };
    try { localStorage.setItem(auditKey, JSON.stringify(record)); $("auditoria-status").textContent = "Duas sugestões foram salvas neste navegador."; }
    catch { $("auditoria-status").textContent = "Armazenamento indisponível: copie as sugestões para o relatório."; }
    renderAudit();
  });
  $("auditoria-limpar").addEventListener("click", () => { $("auditoria-form").reset(); $("auditoria-status").textContent = "Formulário limpo."; });
})();
