/* CyberStore Security | Dia 05 | LGPD
   Demonstração educativa: não envia dados para servidor e não utiliza armazenamento local. */

function exibirMensagem(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.className = "mensagem " + tipo;
}

const formularioCompra = document.getElementById("form-compra");

formularioCompra.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!formularioCompra.checkValidity()) {
    formularioCompra.reportValidity();
    return;
  }

  const status = document.getElementById("compra-status");
  exibirMensagem(
    status,
    "Cadastro demonstrativo validado. Nenhuma informação foi enviada ou armazenada.",
    "mensagem--sucesso"
  );

  formularioCompra.reset();
});

const formularioTitular = document.getElementById("form-titular");

formularioTitular.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!formularioTitular.checkValidity()) {
    formularioTitular.reportValidity();
    return;
  }

  const tipo = document.getElementById("titular-tipo").value;
  const status = document.getElementById("titular-status");

  let observacao = "A solicitação foi registrada apenas nesta demonstração.";

  if (tipo === "Solicitação de eliminação") {
    observacao += " A eliminação real depende da análise do pedido e das hipóteses legais de conservação.";
  }

  exibirMensagem(
    status,
    observacao + " Nenhum dado foi enviado a um servidor ou banco de dados.",
    "mensagem--sucesso"
  );

  formularioTitular.reset();
});
