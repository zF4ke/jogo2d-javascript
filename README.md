<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>jogo2d-javascript
</h1>
<h3>◦ Código fonte da minha série "Como programar um jogo 2D em JavaScript" no Youtube</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
</p>
<img src="https://img.shields.io/github/languages/top/zF4ke/jogo2d-javascript?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/zF4ke/jogo2d-javascript?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/zF4ke/jogo2d-javascript?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/zF4ke/jogo2d-javascript?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Sumário
- [📍 Visão Geral](#-visão-geral)
- [⚙️ Recursos](#-recursos)
- [🧩 Módulos](#módulos)
- [🚀 Começando](#-começando)
- [🤝 Contribuições](#-contribuições)
- [📄 Licença](#-licença)
- [👏 Agradecimentos](#-agradecimentos)

---


## 📍 Visão Geral

Este projeto é um jogo de luta 2D implementado em JavaScript. As funcionalidades principais incluem renderizar elementos do jogo em um canvas, capturar a entrada do usuário para movimento e ataques do jogador, e lidar com atualizações de animação. O propósito do jogo é proporcionar uma experiência interativa e divertida para os jogadores, permitindo que eles controlem um personagem de luta e participem de batalhas. Sua proposta de valor está na simplicidade e acessibilidade, bem como no potencial de personalização e expansão pelos desenvolvedores.

---

## ⚙️ Recursos

| Recurso                | Descrição                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Arquitetura**     | O código segue uma arquitetura simples em que o arquivo index.html serve como ponto de entrada para o jogo. O arquivo game.js lida com a configuração do canvas e o loop de animação. Sprites.js define as classes Sprite e Fighter. Controls.js captura a entrada do usuário e lida com o movimento e ataques do jogador. Em geral, a arquitetura promove a separação de preocupações e a reutilização de componentes.   |
| **📖 Documentação**   | O código carece de documentação abrangente. Embora os comentários dentro do código forneçam algumas informações, há a necessidade de explicações mais detalhadas e exemplos de uso para melhorar a clareza e a facilidade de entendimento pelos desenvolvedores.      |
| **🔗 Dependências**    | O sistema não depende de bibliotecas ou sistemas externos. Ele é construído puramente em JavaScript e HTML/CSS.    |



---

## 🧩 Módulos


| Arquivo                                                                               | Resumo                                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                            |
| [index.html](https://github.com/zF4ke/jogo2d-javascript/blob/main/index.html)      | Este código é o esqueleto HTML de um jogo de luta. Ele importa arquivos CSS e JavaScript necessários e fornece um canvas vazio para renderizar o jogo. Os arquivos JavaScript lidam com a lógica do jogo, controlando sprites e entrada do usuário por meio do controls.js.                                                                                                                                             |
| [style.css](https://github.com/zF4ke/jogo2d-javascript/blob/main/style.css)        | Este trecho de código define alguns estilos iniciais para uma página da web. Ele remove margens e preenchimentos padrão e define a propriedade box-sizing como border-box, o que ajuda no manuseio das larguras e alturas dos elementos. A cor de fundo do corpo é definida como #1c1c1c, criando um fundo escuro visualmente atraente.                                                                              |
| [controls.js](https://github.com/zF4ke/jogo2d-javascript/blob/main/js/controls.js) | Este código captura eventos de teclado e lida com o movimento e os ataques do jogador em um jogo. Ele rastreia pressionamentos e liberações de teclas usando o objeto `keys` e atualiza um objeto jogador com base nesses inputs. A função `handleControls` lida com a lógica de movimento e ataque do jogador, atualizando o sprite e a velocidade do jogador de acordo.                                                            |
| [game.js](https://github.com/zF4ke/jogo2d-javascript/blob/main/js/game.js)         | Este código configura um canvas e um loop de animação, atualizando elementos do jogo a uma taxa de quadros desejada. Ele controla a entrada do usuário, atualiza o canvas e os objetos do jogo. O loop garante uma animação suave, levando em consideração a variação de lag entre os quadros.                                                                                                                                         |
| [sprites.js](https://github.com/zF4ke/jogo2d-javascript/blob/main/js/sprites.js)   | Este código define uma classe Sprite que representa um objeto de imagem no canvas, capaz de ter diferentes sprites e animações. Também inclui uma classe Fighter que estende Sprite, com funcionalidades adicionais específicas de um personagem de luta. O código também cria instâncias das classes Fighter e Sprite para representar um personagem jogador e um objeto de fundo no canvas. |


---

## 🚀 Começando

### ✔️ Pré-requisitos

Antes de começar, certifique-se de que você possui os seguintes pré-requisitos instalados:
```sh
npm install http-server -g
```

### 📦 Instalação

1. Clone o repositório jogo2d-javascript:
```sh
git clone https://github.com/zF4ke/jogo2d-javascript
```

2. Navegue até o diretório do projeto:
```sh
cd jogo2d-javascript
```

### 🎮 Usando jogo2d-javascript

```sh
npx http-server
```

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga estas etapas:

1. Faça um fork do repositório do projeto. Isso cria uma cópia do projeto em sua conta que você pode modificar sem afetar o projeto original.
2. Clone o repositório forkado para a sua máquina local usando um cliente Git como Git ou GitHub Desktop.
3. Crie um novo branch com um nome descritivo (por exemplo, `new-feature-branch` ou `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Faça alterações no código do projeto.
5. Comite suas alterações para o seu branch local com uma mensagem de commit clara que explique as alterações que você fez.
```sh
git commit -m 'Implementado nova funcionalidade.'
```
6. Envie suas alterações para o repositório forkado no GitHub usando o seguinte comando
```sh
git push origin new-feature-branch
```
7. Crie uma nova pull request para o repositório do projeto original. Na pull request, descreva as alterações que você fez e por que são necessárias.
Os mantenedores do projeto revisarão suas alterações e fornecerão feedback ou as mesclarão no branch principal.

---

## 📄 Licença

Este projeto está licenciado sob a Licença `MIT`. Veja o arquivo [LICENSE](https://github.com/zF4ke/jogo2d-javascript/blob/main/LICENSE) para obter informações adicionais.

---

## 👏 Agradecimentos

> - `ℹ️  Chris Courses - https://www.youtube.com/@ChrisCourses`

---
