# Dia 05 — Atividade prática LGPD | CyberStore Security

Este pacote contém os arquivos da atividade prática da Aula 13, preparados para serem adicionados ao repositório CyberStore Security.

## Conteúdo

- `privacidade.html`: Central de Privacidade, cadastro fictício, aviso de privacidade, canal simulado do titular e modelo lógico do desafio avançado.
- `css/privacidade.css`: estilos complementares; utiliza as variáveis e classes do `css/style.css` já existente no projeto.
- `js/privacidade.js`: validação dos formulários e mensagens demonstrativas. Não envia nem armazena dados.
- `index.html`: versão do painel inicial com o link para a nova página no menu.

## Como integrar no VS Code

1. Faça uma cópia de segurança da pasta atual do projeto.
2. Extraia este ZIP.
3. Copie `privacidade.html` para a raiz do projeto.
4. Copie `css/privacidade.css` para a pasta `css` existente.
5. Copie `js/privacidade.js` para a pasta `js` existente.
6. Para o `index.html`, compare com o arquivo atual e incorpore o link `privacidade.html` ao menu. O arquivo incluído neste pacote já contém esse link, mas mantém o conteúdo do painel original consultado no repositório.
7. Nas outras páginas (`malware.html`, `ameacas.html`, `gestao-riscos.html` e `controles-seguranca.html`), acrescente dentro do `<nav>`:

   `<a href="privacidade.html">Privacidade</a>`

8. Abra `index.html` no navegador e teste a navegação e os dois formulários.

## Observações importantes

- Os formulários são protótipos acadêmicos. Não existe envio para servidor, banco de dados, e-mail ou armazenamento no navegador.
- Utilize somente dados fictícios.
- A solicitação de eliminação apresenta uma observação sobre as hipóteses legais de conservação.
- O arquivo `css/style.css` e o arquivo `js/script.js` originais devem continuar no projeto.
- O código do projeto original declara licença MIT no `LICENSE.md`. Verifique separadamente a licença de qualquer imagem que decidir acrescentar.
