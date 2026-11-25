<div align="center">

<img src="docs/assets/app-icon.svg" alt="Ícone do StikSound" width="120" height="120" />

# StikSound

**Crie figurinhas com som de até 5 ou 10 segundos a partir de um PNG, JPG, WebP, GIF animado ou vídeo curto: cole a figurinha, escolha um áudio (ou coloque o gemidão do zap com um toque), recorte o trecho exato e exporte tudo localmente.**

[![Usar na Web](https://img.shields.io/badge/Usar%20na%20Web-GitHub%20Pages-0ea5e9?style=for-the-badge&logo=githubpages&logoColor=white)](https://gili-julio.github.io/StikSound/)

[![Plataformas](https://img.shields.io/badge/Plataformas-Web%20%7C%20Windows%20%7C%20macOS%20%7C%20Chrome-25D366?style=flat-square)](#usar-na-web-ou-instalar)
[![Processamento local](https://img.shields.io/badge/Processamento-100%25%20local-10b981?style=flat-square)](#privacidade-e-segurança)
[![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT%20OR%20Apache--2.0-6366f1?style=flat-square)](LICENSE-MIT)

[**Usar na Web**](https://gili-julio.github.io/StikSound/) · [**Como usar no WhatsApp**](#como-usar-a-figurinha-com-som-no-whatsapp) · [**Guia passo a passo**](#guia-passo-a-passo) · [**Como funciona por dentro**](#como-funciona-por-dentro) · [**Desenvolvimento**](#desenvolvimento)

</div>

---

## 🙏 Créditos

Este repositório é um **fork** do [**StikSound**](https://github.com/SilverFeit/StikSound), criado por [**SilverFeit**](https://github.com/SilverFeit). Todo o trabalho original (editor, motor de mídia, exportação de vídeo, apps de desktop e extensão) é dele. A versão original está em [silverfeit.github.io/StikSound](https://silverfeit.github.io/StikSound/).

Este fork, publicado em **[gili-julio.github.io/StikSound](https://gili-julio.github.io/StikSound/)**, adiciona:

- **Remover ou trocar o áudio de um vídeo:** botões 🔇 (remover) e 🎵 (trocar) na barra de áudio.
- **Escolher a parte do vídeo:** quando o som do vídeo é trocado, a barra **🎬 Parte do vídeo** escolhe em que segundo o vídeo começa, separado do recorte do áudio.
- **🎬 Usar som do vídeo:** traz de volta o som original do vídeo.
- **Colocar gemidão do zap:** um botão que coloca o gemidão como áudio da figurinha com um toque.
- **Instruções de uso no WhatsApp** dentro do app (menu `⋯` → **📱 Como usar no WhatsApp**).
- **Interface em português**, além de espanhol e inglês.

---

## 🌐 Usar na Web ou instalar

Você pode usar o **StikSound direto no navegador**, sem instalar nada (funciona em PC, Android e iPhone como PWA). Só tem uma diferença em relação ao **MyInstants**:

> [!IMPORTANT]
> **Versão Web ([gili-julio.github.io/StikSound](https://gili-julio.github.io/StikSound/)):** funciona **só com áudios já baixados** no seu aparelho (`MP3`, `WAV`, `M4A`, `OGG`, `AAC`), com o som de um vídeo curto ou com o botão **Colocar gemidão do zap**.
>
> **Quer colar links do MyInstants direto?** Por segurança dos navegadores (CORS), o MyInstants bloqueia o download direto a partir de páginas web. Para usar links do MyInstants é preciso **instalar** o [app de desktop (Windows/macOS) ou a extensão do Chrome do projeto original](https://github.com/SilverFeit/StikSound/releases/latest), ou então baixar o MP3 no MyInstants primeiro e escolher ele manualmente na web.

| Recurso | 🌐 Versão Web (GitHub Pages) | 💻 App Desktop / 🧩 Extensão Chrome |
| --- | :---: | :---: |
| **Precisa instalar** | ❌ Nada ([abrir agora](https://gili-julio.github.io/StikSound/)) | ✅ [Baixar release original](https://github.com/SilverFeit/StikSound/releases/latest) |
| **Processamento 100% local** | ✅ | ✅ |
| **Figurinhas PNG / JPG / WebP / GIF** | ✅ | ✅ |
| **Vídeos curtos (`MP4`, `MOV`, `WebM`) como figurinha** | ✅ | ❌ |
| **Remover / trocar o áudio do vídeo** | ✅ | ❌ |
| **Botão "Colocar gemidão do zap"** | ✅ | ❌ |
| **Botão de duração `5s \| 10s`** | ✅ | ✅ |
| **Áudios locais baixados** | ✅ | ✅ |
| **Colar links do MyInstants** | ❌ *(baixe o MP3 antes)* | ✅ |
| **WebM com transparência** | ❌ *(só MP4 no celular/web)* | ✅ |

> Os instaladores de desktop e a extensão são os do projeto original e ainda não têm as funções novas deste fork.

---

## 📱 Como usar a figurinha com som no WhatsApp

O StikSound gera um **vídeo MP4** com a imagem (ou o vídeo) e o som. Quem transforma esse vídeo em figurinha com som é o próprio WhatsApp:

1. **Escolha `5s`** na barra de áudio. As figurinhas de vídeo do WhatsApp guardam só uns 5 segundos de som.
2. Toque em **`⬇`** e baixe o **Vídeo MP4**.
3. **Leve o MP4 para a galeria do celular:**
   - **Android:** o arquivo fica em **Downloads**, e o app Galeria/Google Fotos mostra ele.
   - **iPhone:** na tela de compartilhar, toque em **Salvar vídeo** para ele ir para o app **Fotos**.
   - **PC:** o arquivo fica na pasta **Downloads**. Passe para o celular (cabo USB, Google Drive ou mandando para você mesmo) e salve na galeria.
4. No **WhatsApp do Android**, abra uma conversa, toque no ícone de **emoji 😊**, vá na aba de **figurinhas** e toque em **Criar** (ou **+**).
5. Escolha o vídeo na galeria, ajuste o recorte e envie. A figurinha com som aparece com um ícone de **alto-falante 🔊**; toque nele para ouvir.

> [!NOTE]
> Criar figurinha com som a partir de vídeo ainda é um recurso em **liberação gradual** do WhatsApp (beta do Android), e o nome dos botões pode mudar. Se a opção não aparecer pra você, mande o MP4 como **vídeo normal**: colar ou compartilhar no chat envia como vídeo, não como figurinha. O WhatsApp decide a duração e o áudio final. O perfil `native-sound-sticker` continua desativado, porque o WhatsApp não publicou um formato oficial. Detalhes em [docs/specifications/whatsapp.md](docs/specifications/whatsapp.md).

---

## O que o StikSound faz

O StikSound junta **uma imagem quadrada** (ou um vídeo curto) com **um trecho de áudio** em um arquivo para baixar ou copiar. O máximo desse trecho é escolhido no botão `5s | 10s` (padrão: 10 segundos). A ideia é preparar figurinhas com som para o WhatsApp sem editores de vídeo complicados e sem enviar seus arquivos para nenhum serviço externo.

Ele permite:

- Usar figurinhas ou memes em **PNG, JPG/JPEG, WebP ou GIF**.
- Trabalhar com **GIFs animados**, que tocam em loop durante o trecho exportado.
- Usar **vídeos curtos** (`MP4`, `MOV`, `WebM`) na versão web, com o som do próprio vídeo ou com outro áudio.
- Adicionar áudio de um arquivo local **MP3, WAV, OGG, M4A ou AAC**, ou colocar o **gemidão do zap** com um toque.
- Colar um link do **MyInstants** e baixar o som de forma validada (desktop e extensão).
- Selecionar um trecho de áudio de **0,1 a 5 ou 10 segundos** com o seletor `5s | 10s`.
- Exportar um **MP4 compatível**, um **WebM com transparência**, um **pacote ZIP** ou um **WebP estático**.
- Salvar e reabrir projetos `.stiksound.zip` com a imagem, o áudio e as configurações de recorte.

---

## Guia passo a passo

### 1. Carregue a figurinha

Há três jeitos de carregar a imagem ou o vídeo:

- Colar direto com `Ctrl + V` ou `Cmd + V`.
- Arrastar para a área central.
- Clicar na área central e escolher o arquivo.

O StikSound analisa os bytes reais do arquivo, não só a extensão. Assim ele confere o formato, as dimensões, se tem transparência e se é um GIF animado.

### 2. Enquadre a imagem em 1:1

Figurinhas são quadradas. Se a imagem original não for quadrada:

- O StikSound calcula automaticamente um recorte `1:1` centralizado.
- Você pode mover o mouse sobre a imagem, **sem clicar**, para deslocar o enquadramento (no celular, arraste com o dedo).
- A saída nunca é ampliada artificialmente: usa o menor lado da imagem, com no máximo `512 × 512 px`.
- As dimensões são arredondadas para números pares para evitar problemas com codificadores de vídeo.

### 3. Adicione o áudio

Opções:

- Arrastar um arquivo de áudio para a barra de baixo.
- Tocar no botão **Escolher áudio** e escolher um arquivo.
- Tocar em **Colocar gemidão do zap**.
- Colar um link válido do MyInstants (desktop e extensão).

Com um **vídeo**, o som do próprio vídeo entra como áudio por padrão. Na barra de áudio:

| Botão | Ação |
| --- | --- |
| `🎵` | Troca o áudio por outro arquivo. |
| `🔇` | Remove o áudio atual (do vídeo ou o que você escolheu). |
| `Colocar gemidão do zap` | Coloca o gemidão como áudio. |
| `🎬 Usar som do vídeo` | Volta a usar o som original do vídeo. |

Limites do arquivo de origem:

| Regra | Limite |
| --- | ---: |
| Tamanho máximo do áudio | 25 MB |
| Duração máxima do áudio importado | 3 minutos |
| Duração mínima do trecho selecionado | 0,1 segundo |
| Duração máxima do trecho exportado | 5 ou 10 segundos (botão; padrão 10) |

Se o áudio durar o mesmo ou menos que o máximo escolhido, o StikSound seleciona o áudio inteiro. Se durar mais, seleciona os primeiros 5 ou 10 segundos e deixa você mover essa janela.

### 4. Ajuste o trecho do som

A barra de baixo mostra uma forma de onda calculada a partir do áudio real:

- As barras representam os picos mínimos e máximos em 1024 divisões do áudio.
- Clicar na onda centraliza a janela de recorte perto desse ponto.
- Se o áudio passar do máximo escolhido (`5s` ou `10s`), aparece um controle deslizante para mover a janela pelo arquivo.
- O indicador da direita mostra `selecionado / máximo`, por exemplo `10.0s / 10.0s`.
- O botão de play toca exatamente o trecho selecionado.

### 5. Escolha a parte do vídeo

Quando a figurinha é um vídeo e o áudio **não** é o do próprio vídeo, aparece a barra **🎬 Parte do vídeo**. Ela escolhe em que segundo o vídeo começa; a duração acompanha o trecho do áudio. Se o vídeo inteiro couber no trecho, a barra só mostra o intervalo.

Quando o áudio é o do próprio vídeo, o recorte do áudio também escolhe a parte do vídeo.

### 6. Escolha o fundo

Se a figurinha tiver transparência, aparecem estas opções:

- **Transparente:** exporta WebM com canal alfa quando o navegador ou o WebView suporta.
- **Branco / Preto / Cor:** coloca a imagem sobre um fundo sólido para o MP4.

O MP4 não guarda transparência de verdade, então a transparência é preenchida com a cor escolhida. O WebM pode guardar o canal alfa via VP9 quando o WebCodecs está disponível.

### 7. Prévia, copiar ou baixar

Botões principais:

| Botão | Ação |
| --- | --- |
| `✕` | Apaga figurinha, áudio, recorte e prévia para começar do zero. |
| `➔` | Gera a prévia e tenta copiar (ou compartilhar, no celular) o resultado. |
| `⬇` | Abre o seletor de formato e baixa o arquivo escolhido. |
| `⋯` | Abre opções de projeto, **Como usar no WhatsApp**, idioma e licenças. |

Se o sistema ou o navegador não deixar copiar vídeos, use `⬇` e compartilhe o arquivo baixado manualmente. Depois siga o passo a passo de [como usar no WhatsApp](#como-usar-a-figurinha-com-som-no-whatsapp).

---

## Formatos de entrada e saída

### Entrada de imagem e vídeo

| Formato | Compatibilidade |
| --- | --- |
| PNG | Compatível, inclusive com transparência. |
| JPG/JPEG | Compatível, sem transparência. |
| WebP | Compatível como imagem de entrada; WebP animado não é o fluxo principal da v1. |
| GIF | Compatível; GIFs animados são decodificados quadro a quadro e repetidos em loop. |
| MP4, MOV, WebM | Só na versão web, como vídeo de entrada de até 60 segundos. A exportação segue o máximo de 5 ou 10 segundos. |

Limites de segurança para imagens:

- 20 MB por arquivo.
- No máximo 8000 px de largura ou altura.
- No máximo 40 megapixels decodificados.

### Entrada de áudio

| Formato | Compatibilidade |
| --- | --- |
| MP3 | Compatível pelo decodificador do navegador/WebView ou Rust. |
| WAV | Compatível; também existe um decodificador PCM reserva. |
| OGG | Compatível quando o decodificador da plataforma suporta. |
| M4A/AAC | Compatível quando o decodificador da plataforma suporta. |

### Saída

| Formato | Uso recomendado | O que contém |
| --- | --- | --- |
| MP4 | Máxima compatibilidade | Vídeo quadrado com fundo sólido e áudio AAC quando o WebCodecs está disponível. |
| WebM | Alta qualidade/transparência | Vídeo VP9 com alfa e áudio Opus quando o WebCodecs está disponível. |
| ZIP `.stiksound.zip` | Pacote portátil/projeto | Imagem, áudio e metadados do projeto ou pacote. |
| WebP | Figurinha estática | Uma imagem `1:1` sem áudio, otimizada para caber no limite de 100 KB. |

A duração do vídeo exportado segue o trecho de áudio selecionado, com tolerância de validação de ±50 ms.

---

## Como funciona por dentro

### Fluxo geral

```text
Figurinha/Imagem/Vídeo + Áudio
        │
        ▼
Validação e leitura dos formatos
        │
        ├─ Imagem: dimensões, alfa, animação e recorte 1:1
        │
        └─ Áudio: duração, canais, sample rate, mixagem mono e forma de onda
        │
        ▼
Projeto em memória
        │
        ├─ figurinha
        ├─ áudio
        ├─ start_ms / end_ms do trecho
        ├─ video_start_ms (parte do vídeo, quando o som foi trocado)
        └─ formato de exportação escolhido
        │
        ▼
Validação antes de exportar
        │
        ▼
Renderização local
        │
        ├─ vídeo MP4/WebM
        ├─ pacote ZIP
        └─ WebP estático
        │
        ▼
Prévia, cópia ou download
```

### Pipeline de imagem

1. Os bytes do arquivo são lidos e o formato é identificado pelo cabeçalho.
2. Imagens grandes demais ou potencialmente perigosas por dimensão são recusadas.
3. O recorte quadrado é calculado a partir de `crop_x` e `crop_y` normalizados.
4. Em imagens estáticas é desenhado um único quadro.
5. Em GIFs animados os quadros e seus tempos são decodificados; depois é montada uma sequência em loop que cobre exatamente a duração selecionada.
6. Em vídeos, o trecho renderizado começa no início do recorte do áudio (som do próprio vídeo) ou em `video_start_ms` (som trocado).
7. No MP4 a imagem é composta sobre a cor de fundo escolhida; no WebM o canal alfa é mantido quando o codificador permite.

### Pipeline de áudio

1. O arquivo é analisado para obter duração, sample rate e número de canais.
2. O áudio é decodificado e mixado em mono.
3. São calculados 1024 picos para desenhar a forma de onda.
4. O trecho é recortado com `start_ms` e `end_ms` inteiros em milissegundos.
5. O trecho é reamostrado para **48 kHz mono**, a base usada na exportação.
6. A validação exige uma seleção entre **100 ms e o máximo escolhido (5.000 ou 10.000 ms; padrão 10.000)**.

### Codificação de vídeo

O StikSound usa dois caminhos locais, nesta ordem:

1. **WebCodecs + muxers em TypeScript:** quando a plataforma expõe `VideoEncoder` e `AudioEncoder`, gera MP4 H.264/AAC ou WebM VP9/Opus sem chamar serviços externos.
2. **Canvas + MediaRecorder:** se o WebCodecs não estiver disponível, desenha no canvas, captura o stream e grava áudio/vídeo com os codecs que a plataforma suportar.

Se nenhum dos dois existir, a exportação de vídeo devolve um erro estruturado em vez de falhar em silêncio.

### Projetos `.stiksound.zip`

Um projeto salvo contém:

```text
manifest.json
assets/<arquivo-de-imagem>
assets/<arquivo-de-audio>
```

O manifesto guarda:

- identificadores e nomes dos assets;
- formato, dimensões e transparência da imagem;
- duração, sample rate e origem do áudio;
- `start_ms`, `end_ms`, volume e fades;
- `video_start_ms`, quando a figurinha é um vídeo com som trocado;
- perfil de exportação ativo.

Ao abrir, os caminhos internos são validados para impedir entradas maliciosas como `../`, e a forma de onda é recalculada.

---

## Arquitetura do repositório

```text
apps/
  desktop/       App Tauri para Windows/macOS
  extension/     Extensão Chrome Manifest V3
  web/           App Web / PWA publicado no GitHub Pages
    public/sounds/  Áudio do botão "Colocar gemidão do zap"
packages/
  core/          Modelo de projeto, invariantes, validação e casos de uso
  ui/            Editor React, barras de recorte e textos i18n (pt, es, en)
  media-web/     Sniffing, decodificação, trim, waveform, mux e ZIP em TypeScript
  providers/     Extração e política de URLs do MyInstants
crates/
  audio-engine/  Probe/decodificação/trim de áudio em Rust
  image-engine/  Probe e utilitários de imagem em Rust
  video-engine/  Validação e mux de vídeo em Rust
  project-store/ Escrita atômica e pacotes em Rust
docs/            Requisitos, arquitetura, especificações e decisões
```

A ideia principal é que a UI não tem regras de negócio: o React chama casos de uso de `packages/core`, e esses casos de uso delegam o trabalho de mídia para um motor intercambiável (`WebMediaEngine` ou componentes Rust no desktop).

---

## Instalação (projeto original)

Os instaladores e a extensão abaixo são publicados pelo [projeto original](https://github.com/SilverFeit/StikSound/releases/latest) e não têm as funções novas deste fork. Para elas, use a [versão web](https://gili-julio.github.io/StikSound/).

### Windows e macOS

1. Abra os [**Releases do projeto original**](https://github.com/SilverFeit/StikSound/releases/latest).
2. Baixe o instalador ou executável da sua plataforma:
   - Windows: arquivo `windows-x64`.
   - macOS: arquivo `macos-universal`.
3. Abra o StikSound. Não é preciso instalar FFmpeg nem outro editor de vídeo para o fluxo principal.

No macOS, se aparecer o aviso de desenvolvedor não verificado, clique com o botão direito no app e escolha **Abrir**.

### Extensão do Chrome, Edge ou Brave

1. Baixe `StikSound-*-chrome-extension.zip` nos [**Releases do projeto original**](https://github.com/SilverFeit/StikSound/releases/latest).
2. Descompacte em uma pasta permanente.
3. Abra `chrome://extensions/`.
4. Ative o **Modo do desenvolvedor**.
5. Clique em **Carregar sem compactação** e escolha a pasta descompactada.
6. Clique no ícone do StikSound: o editor abre em uma aba.

---

## Privacidade e segurança

- Não existe um servidor do StikSound que receba suas imagens ou áudios.
- O processamento de mídia é feito localmente no app ou na aba da extensão.
- O áudio do botão **Colocar gemidão do zap** é um arquivo estático servido pela própria página.
- O único download de rede embutido é o do MyInstants, e só quando você cola um link explicitamente.
- O MyInstants é restrito por política de URLs:
  - só HTTPS;
  - só `myinstants.com` e `www.myinstants.com`;
  - sem usuário/senha embutidos;
  - sem portas diferentes de 443;
  - no máximo 2 redirecionamentos;
  - no máximo 25 MB por áudio;
  - tempo máximo de download de 20 segundos.
- No desktop, o download é feito pelo backend Rust para evitar limitações de CORS e aplica validações extras contra endereços IP privados ou reservados.
- Os pacotes ZIP são validados contra path traversal antes de abrir.
- Os sons baixados do MyInstants pertencem aos seus respectivos autores.

---

## Desenvolvimento

### Requisitos

- Node.js 22 ou superior.
- npm 10 ou superior.
- Rust stable.
- Para compilar o app Tauri no Linux podem ser necessárias as dependências nativas do WebKitGTK indicadas na documentação do Tauri; no Windows e no macOS são usados os WebViews do sistema.

### Instalar dependências

```bash
git clone https://github.com/gili-julio/StikSound.git
cd StikSound
npm install
```

### Rodar a versão web localmente

```bash
npm run dev --workspace=@stiksound/web
```

Abre em `http://localhost:5180`.

### Rodar as validações

```bash
npm run typecheck
npm test
npm run build
cargo test --workspace --exclude stiksound-desktop
```

### Rodar a extensão em modo de desenvolvimento

```bash
npm run build --workspace=@stiksound/extension
```

Depois carregue `apps/extension/dist` como extensão sem compactação em `chrome://extensions/`.

Para recompilar automaticamente ao editar:

```bash
npm run dev --workspace=@stiksound/extension
```

### Rodar o frontend desktop com Vite

```bash
npm run dev --workspace=@stiksound/desktop
```

### Rodar o app Tauri completo

```bash
cd apps/desktop
npx tauri dev
```

### Compilar o app desktop

```bash
cd apps/desktop
npx tauri build
```

### Publicação

Cada push na `main` roda o workflow **Deploy Web App to GitHub Pages**, que publica `apps/web/dist` em [gili-julio.github.io/StikSound](https://gili-julio.github.io/StikSound/).

Para trazer novidades do projeto original:

```bash
git remote add upstream https://github.com/SilverFeit/StikSound.git
git pull upstream main
```

---

## Solução de problemas

| Problema | Causa provável | O que fazer |
| --- | --- | --- |
| "Link recusado por segurança" | A URL não é HTTPS do MyInstants ou tem formato não permitido | Copie o link público do som ou o arquivo direto de `myinstants.com`. |
| "Não foi possível ler este áudio" | O arquivo está corrompido ou o codec não existe nessa plataforma | Tente com MP3 ou WAV, ou exporte o áudio de novo em outro app. |
| O vídeo transparente sai com fundo | Você escolheu MP4 ou a plataforma não suporta alfa VP9 | Use a saída WebM transparente. |
| O botão copiar não cola no WhatsApp | O navegador/sistema bloqueia vídeos na área de transferência | Baixe o arquivo com `⬇` e compartilhe manualmente. |
| Não aparece "Criar figurinha" a partir de vídeo no WhatsApp | O recurso ainda está em liberação gradual (beta do Android) | Envie o MP4 como vídeo normal ou tente de novo depois de atualizar o WhatsApp. |
| O áudio sai cortado | O trecho está limitado ao máximo escolhido (5 ou 10 segundos) | Mude o botão `5s \| 10s`, mova a janela de recorte ou use um áudio mais curto. |
| O vídeo começa na parte errada | Com som trocado, a parte do vídeo é escolhida separadamente | Ajuste a barra **🎬 Parte do vídeo**. |
| O WebP falha por tamanho | O WhatsApp exige figurinhas estáticas pequenas | Use uma imagem mais simples ou exporte como vídeo. |

---

## Documentação adicional

A documentação técnica do projeto original (em inglês):

- Índice técnico: [docs/README.md](docs/README.md)
- Arquitetura: [docs/architecture/overview.md](docs/architecture/overview.md)
- Requisitos funcionais: [docs/requirements/functional-requirements.md](docs/requirements/functional-requirements.md)
- Exportação: [docs/specifications/export.md](docs/specifications/export.md)
- WhatsApp: [docs/specifications/whatsapp.md](docs/specifications/whatsapp.md)
- Segurança: [docs/specifications/security.md](docs/specifications/security.md)
- Plano de testes: [docs/qa/test-plan.md](docs/qa/test-plan.md)

## Licença

Projeto original © [SilverFeit](https://github.com/SilverFeit/StikSound). Licenciado, à sua escolha, sob:

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE))
- MIT License ([LICENSE-MIT](LICENSE-MIT))

(`MIT OR Apache-2.0`). As alterações deste fork seguem as mesmas licenças.
