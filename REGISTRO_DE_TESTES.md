# Registro de testes e evidências | Dia 01

Projeto: cyberstore-security | Equipe: ____________________ | Data: ___/___/______

Os testes T1 a T3 são os exigidos no roteiro. T4 a T8 e H1 a H3 são complementares.
Os resultados abaixo foram obtidos executando a lógica do arquivo `js/script.js` e simulando a página `malware.html` em um ambiente de teste automatizado.
**Antes de entregar:** repita os testes no navegador da estação, anexe a captura de tela de cada um na pasta `evidencias/` e confirme a coluna "Resultado no navegador".

## Filtro por nome ou categoria

| ID | Cenário | Entrada | Resultado esperado | Resultado obtido | Evidência | Resultado no navegador |
|----|---------|---------|--------------------|------------------|-----------|------------------------|
| T1 | Termo existente | `ransom` | 1 cartão (Ransomware) | 1 cartão: Ransomware. Status: "1 de 10 tipos encontrados." | evidencias/T1.png | ☐ OK ☐ Falhou |
| T2 | Termo inexistente | `xyz123` | 0 cartões e mensagem “Nenhum resultado” | 0 cartões. Mensagem exibida. Status: "0 de 10 tipos encontrados." | evidencias/T2.png | ☐ OK ☐ Falhou |
| T3 | Campo vazio | (vazio) | 10 cartões | 10 cartões. Status: "Mostrando todos os 10 tipos." | evidencias/T3.png | ☐ OK ☐ Falhou |
| T4 | Maiúsculas | `ESPIONAGEM` | Spyware e Keylogger | Spyware, Keylogger | evidencias/T4.png | ☐ OK ☐ Falhou |
| T5 | Sem acento | `extorsao` | Ransomware | Ransomware | evidencias/T5.png | ☐ OK ☐ Falhou |
| T6 | Só espaços | `   ` | 10 cartões | 10 cartões | evidencias/T6.png | ☐ OK ☐ Falhou |
| T7 | Seletor de categoria | Propagação | Vírus e Worm | Vírus, Worm | evidencias/T7.png | ☐ OK ☐ Falhou |
| T8 | Termo e categoria incompatíveis | `worm` + Espionagem | 0 cartões | 0 cartões | evidencias/T8.png | ☐ OK ☐ Falhou |

## Desafio avançado: filtro por sintomas

| ID | Sintomas marcados | Resultado esperado | Resultado obtido | Evidência |
|----|-------------------|--------------------|------------------|-----------|
| H1 | Lentidão + Anúncios | Adware malicioso em primeiro lugar | Adware malicioso (2 de 2), depois Bot, Keylogger, Spyware, Vírus e Worm (1 de 2) | evidencias/H1.png |
| H2 | Arquivos que não abrem + Pedido de pagamento | Ransomware | Ransomware (2 de 2) | evidencias/H2.png |
| H3 | Nenhum | Lista vazia | Lista vazia | evidencias/H3.png |

## Falhas encontradas e correções

Nenhuma falha encontrada nos testes automatizados. Registre aqui qualquer falha achada no navegador e a correção feita:

- Falha: ______________________  Correção: ______________________

## Limitações

- A ficha da estação (`index.html`) usa dados que o navegador informa. Alguns navegadores omitem ou arredondam RAM e núcleos. Complete o restante manualmente.
- O protótipo é educativo. Não protege a estação e não substitui antivírus nem certificação.
