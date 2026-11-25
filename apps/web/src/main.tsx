import React from "react";
import { createRoot } from "react-dom/client";
import type { ExportArtifact, LocaleCode } from "@stiksound/core";
import { WebMediaEngine } from "@stiksound/media-web";
import {
  StikSoundMinimalApp,
  type ShareOutcome,
  type ShellBridge,
  type UiLabels
} from "@stiksound/ui";
import "../../../packages/ui/src/styles.css";
import "./mobile.css";

/**
 * StikSound web / PWA shell, aimed at iPhone Safari ("Add to Home Screen").
 *
 * Differences from the Chrome extension shell:
 * - No MyInstants links: a plain web page cannot read myinstants.com (no CORS headers),
 *   and routing it through a proxy would break the "nothing leaves your device" promise.
 * - Output goes through the system share sheet (WhatsApp, Save Video, Save to Files)
 *   because iOS has no way to put a video file on the clipboard from a web page.
 * - No transparent WebM: Safari cannot encode VP9 with alpha.
 */

const isTouch = window.matchMedia?.("(pointer: coarse)").matches ?? false;

function toFile(artifact: ExportArtifact): File {
  return new File([artifact.bytes.slice().buffer], artifact.fileName, { type: artifact.mimeType });
}

function canShareFile(file: File): boolean {
  try {
    return typeof navigator.share === "function" && navigator.canShare?.({ files: [file] }) === true;
  } catch {
    return false;
  }
}

function downloadFile(file: File): void {
  const url = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30_000);
}

async function shareFile(file: File): Promise<ShareOutcome | "unsupported"> {
  if (!canShareFile(file)) return "unsupported";
  try {
    await navigator.share({ files: [file] });
    return "shared";
  } catch (err) {
    const name = (err as DOMException | undefined)?.name;
    if (name === "AbortError") return "cancelled";
    // Safari only allows share() right after a tap. Encoding takes a few seconds,
    // so the first attempt can expire; the UI then asks for one more tap.
    if (name === "NotAllowedError") return "needs-tap";
    throw err;
  }
}

/** On phones, saving goes through the share sheet when it can (Save Video / Save to Files). */
async function saveFile(file: File): Promise<void> {
  if (isTouch) {
    const outcome = await shareFile(file);
    if (outcome === "shared" || outcome === "cancelled") return;
  }
  downloadFile(file);
}

const shell: ShellBridge = {
  async shareArtifact(artifact) {
    const file = toFile(artifact);
    const outcome = await shareFile(file);
    if (outcome === "unsupported") {
      downloadFile(file);
      return "shared";
    }
    return outcome;
  },
  async saveArtifact(artifact) {
    await saveFile(toFile(artifact));
  },
  async saveProjectZip(zipBytes, suggestedName) {
    await saveFile(new File([zipBytes.slice().buffer], suggestedName, { type: "application/zip" }));
  }
};

const webLabels: Record<LocaleCode, Partial<UiLabels>> = {
  es: {
    exportTooltip: "Crear el video y compartirlo",
    exportDisabledMissingAudio: "Agrega un audio (MP3, M4A, WAV)",
    audioPickBtn: "🎵 Elegir audio (MP3, M4A, WAV)",
    copyAgainBtn: "Compartir",
    downloadTooltip: "Guardar",
    downloadBtnLabel: "Guardar",
    downloadChooseFormat: "Elige qué guardar:",
    downloadFmtMp4: "Video MP4 (5s / 10s)",
    exportSuccessVideo: "Listo. Si no elegiste dónde guardarlo, búscalo en Archivos → Descargas.",
    aboutRights:
      "Versión web. Todo se procesa en tu teléfono; nada se sube a internet. Para usar un sonido de MyInstants, descárgalo primero desde Safari y luego elígelo con el botón de audio. El video dura como máximo 5 o 10 segundos, según el botón de la barra (por defecto, 10). Proyecto original: StikSound, de SilverFeit (github.com/SilverFeit/StikSound).",
    ...(isTouch
      ? {
          stickerDropTitle: "Toca para elegir tu sticker",
          stickerDropHint: "Foto, GIF o video corto desde Fotos o Archivos",
          hoverCropHint: "Arrastra para encuadrar"
        }
      : { stickerDropHint: "Arrastra o haz clic: PNG, GIF, WebP, JPG o video corto (MP4, MOV)" })
  },
  en: {
    exportTooltip: "Make the video and share it",
    exportDisabledMissingAudio: "Add a sound (MP3, M4A, WAV)",
    audioPickBtn: "🎵 Choose sound (MP3, M4A, WAV)",
    copyAgainBtn: "Share",
    downloadTooltip: "Save",
    downloadBtnLabel: "Save",
    downloadChooseFormat: "Choose what to save:",
    downloadFmtMp4: "MP4 video (5s / 10s)",
    exportSuccessVideo: "Done. If you didn't pick a place, look in Files → Downloads.",
    aboutRights:
      "Web version. Everything runs on your phone; nothing is uploaded. To use a MyInstants sound, download it in Safari first, then pick it with the sound button. The video is at most 5 or 10 seconds, chosen with the bar button (10 by default). Original project: StikSound by SilverFeit (github.com/SilverFeit/StikSound).",
    ...(isTouch
      ? {
          stickerDropTitle: "Tap to choose your sticker",
          stickerDropHint: "Photo, GIF or short video from Photos or Files",
          hoverCropHint: "Drag to frame"
        }
      : { stickerDropHint: "Drop or click: PNG, GIF, WebP, JPG or a short video (MP4, MOV)" })
  },
  pt: {
    exportTooltip: "Criar o vídeo e compartilhar",
    exportDisabledMissingAudio: "Adicione um áudio (MP3, M4A, WAV)",
    audioPickBtn: "🎵 Escolher áudio (MP3, M4A, WAV)",
    copyAgainBtn: "Compartilhar",
    downloadTooltip: "Salvar",
    downloadBtnLabel: "Salvar",
    downloadChooseFormat: "Escolha o que salvar:",
    downloadFmtMp4: "Vídeo MP4 (5s / 10s)",
    exportSuccessVideo:
      "Pronto. Se você não escolheu onde salvar, procure em Arquivos → Downloads. Veja \"Como usar no WhatsApp\" para virar figurinha com som.",
    aboutRights:
      "Versão web. Tudo é processado no seu celular; nada é enviado para a internet. Para usar um som do MyInstants, baixe ele antes e depois escolha no botão de áudio. O vídeo dura no máximo 5 ou 10 segundos, conforme o botão da barra (padrão: 10). Projeto original: StikSound, de SilverFeit (github.com/SilverFeit/StikSound).",
    ...(isTouch
      ? {
          stickerDropTitle: "Toque para escolher sua figurinha",
          stickerDropHint: "Foto, GIF ou vídeo curto de Fotos ou Arquivos",
          hoverCropHint: "Arraste para enquadrar"
        }
      : { stickerDropHint: "Arraste ou clique: PNG, GIF, WebP, JPG ou vídeo curto (MP4, MOV)" })
  }
};

const browserLanguage = navigator.language.toLowerCase();
const locale: LocaleCode = browserLanguage.startsWith("es") ? "es" : browserLanguage.startsWith("en") ? "en" : "pt";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StikSoundMinimalApp
      engine={new WebMediaEngine()}
      providers={[]}
      shell={shell}
      initialLocale={locale}
      platform={{
        transparentVideo: false,
        myInstantsUrl: false,
        videoStickers: true,
        presetSound: { url: "./sounds/gemidao-do-zap.mp3", fileName: "gemidao-do-zap.mp3" }
      }}
      labelOverrides={webLabels}
    />
  </React.StrictMode>
);

if ("serviceWorker" in navigator && import.meta.env.PROD && window.isSecureContext) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => undefined);
  });
}
