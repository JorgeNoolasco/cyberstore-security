/* Simulação local do Dia 02. Não autentica usuários nem protege recursos reais. */
(() => {
  const form = document.getElementById("login-form");
  if (!form) return;

  const tentativasMaximas = 3;
  let falhas = 0;
  let bloqueado = false;
  const contasFicticias = [
    { email: "cliente@exemplo.test", senha: "Cliente123!", papel: "cliente" },
    { email: "admin@exemplo.test", senha: "Admin123!", papel: "administrador" }
  ];
  const status = document.getElementById("login-status");
  const botao = document.getElementById("login-submit");
  const contador = document.createElement("p");
  contador.id = "login-counter";
  contador.setAttribute("aria-live", "polite");
  form.after(contador);
  contador.textContent = `Tentativas inválidas: ${falhas} de ${tentativasMaximas}.`;

  document.getElementById("login-reset")?.addEventListener("click", () => {
    falhas = 0;
    bloqueado = false;
    botao.disabled = false;
    form.reset();
    status.textContent = "Simulação reiniciada. Você pode tentar novamente.";
    contador.textContent = `Tentativas inválidas: ${falhas} de ${tentativasMaximas}.`;
  });

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (bloqueado) return;

    if (!form.reportValidity()) {
      status.textContent = "Preencha os dois campos para continuar.";
      return;
    }

    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const senha = document.getElementById("login-senha").value;
    const conta = contasFicticias.find((item) => item.email === email && item.senha === senha);

    if (conta) {
      status.textContent = `Acesso fictício concedido para o papel: ${conta.papel}. Nenhum recurso real foi acessado.`;
      return;
    }

    falhas += 1;
    contador.textContent = `Tentativas inválidas: ${falhas} de ${tentativasMaximas}.`;
    if (falhas >= tentativasMaximas) {
      bloqueado = true;
      botao.disabled = true;
      status.textContent = "Laboratório bloqueado após três tentativas inválidas. Recarregue a página para reiniciar a simulação.";
      return;
    }

    status.textContent = `Credenciais fictícias inválidas. Tentativa ${falhas} de ${tentativasMaximas}.`;
  });

  const recuperacaoForm = document.getElementById("recuperacao-form");
  if (recuperacaoForm) {
    recuperacaoForm.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const statusRecuperacao = document.getElementById("recuperacao-status");
      if (!recuperacaoForm.reportValidity()) {
        statusRecuperacao.textContent = "Informe um endereço de e-mail válido.";
        return;
      }
      statusRecuperacao.textContent = "Se houver uma conta associada a este e-mail, as instruções de recuperação serão enviadas.";
    });
  }

  const permissaoForm = document.getElementById("permissao-form");
  if (permissaoForm) permissaoForm.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const perfil = document.getElementById("perfil-teste").value;
    const acao = document.getElementById("acao-teste").value;
    const permitido = acao === "catalogo" || acao === "pedido-proprio" || (perfil === "administrador" && ["pedido-alheio", "produto"].includes(acao));
    document.getElementById("permissao-status").textContent = permitido
      ? "Simulação: ação permitida para este perfil. A verificação real deve ocorrer no servidor."
      : "Simulação: acesso negado por falta de permissão. Nenhum recurso foi acessado.";
  });
})();
