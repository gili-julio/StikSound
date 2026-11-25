export type StikSoundErrorCode =
  | "unsupported-image"
  | "unsupported-video"
  | "unsupported-audio"
  | "unsupported-codec"
  | "encode-failed"
  | "file-too-large"
  | "url-rejected"
  | "remote-unavailable"
  | "trim-out-of-range"
  | "sticker-too-large"
  | "package-invalid"
  | "export-unsupported";

export type LocaleCode = "es" | "en" | "pt";

export interface LocalizedErrorCopy {
  title: string;
  action: string;
}

export const ERROR_CATALOG: Record<StikSoundErrorCode, Record<LocaleCode, LocalizedErrorCopy>> = {
  "unsupported-image": {
    es: {
      title: "Este archivo no es una imagen compatible (usa PNG, WebP, JPG o GIF).",
      action: "Pega otra imagen con Ctrl+V/Cmd+V o arrastra un PNG o GIF."
    },
    en: {
      title: "This file is not a supported image (use PNG, WebP, JPG, or GIF).",
      action: "Paste another image or drop a PNG or GIF file."
    },
    pt: {
      title: "Este arquivo não é uma imagem compatível (use PNG, WebP, JPG ou GIF).",
      action: "Cole outra imagem com Ctrl+V/Cmd+V ou arraste um PNG ou GIF."
    }
  },
  "unsupported-audio": {
    es: {
      title: "No se pudo leer este audio o el formato no es compatible.",
      action: "Usa un archivo MP3, WAV, OGG, M4A o pega un enlace válido de MyInstants."
    },
    en: {
      title: "Could not decode this audio or the format is unsupported.",
      action: "Use an MP3, WAV, OGG, M4A file or paste a valid MyInstants link."
    },
    pt: {
      title: "Não foi possível ler este áudio ou o formato não é compatível.",
      action: "Use um arquivo MP3, WAV, OGG, M4A ou cole um link válido do MyInstants."
    }
  },
  "unsupported-codec": {
    es: {
      title: "Este navegador no puede codificar el video o audio con los códecs disponibles.",
      action: "Descarga el paquete .stiksound.zip y ábrelo en la app de escritorio StikSound."
    },
    en: {
      title: "This browser build cannot encode this clip with its available codecs.",
      action: "Download the .stiksound.zip package and open it in the StikSound desktop app."
    },
    pt: {
      title: "Este navegador não consegue codificar o vídeo ou o áudio com os codecs disponíveis.",
      action: "Baixe o pacote .stiksound.zip e abra no app de desktop StikSound."
    }
  },
  "encode-failed": {
    es: {
      title: "Ocurrió un error al generar el archivo final.",
      action: "Intenta cambiar el formato de salida en ⋯ o reintenta con otro archivo."
    },
    en: {
      title: "Failed while encoding the output file.",
      action: "Try switching the export format in ⋯ or retry with another input."
    },
    pt: {
      title: "Ocorreu um erro ao gerar o arquivo final.",
      action: "Tente mudar o formato de saída em ⋯ ou tente de novo com outro arquivo."
    }
  },
  "unsupported-video": {
    es: {
      title: "Este video no se pudo abrir aquí.",
      action: "Prueba con un video MP4 o uno grabado con la cámara del teléfono."
    },
    en: {
      title: "This video could not be opened here.",
      action: "Try an MP4 video or one recorded with your phone camera."
    },
    pt: {
      title: "Não foi possível abrir este vídeo aqui.",
      action: "Tente um vídeo MP4 ou um gravado com a câmera do celular."
    }
  },
  "file-too-large": {
    es: {
      title: "El archivo supera el límite permitido (20 MB imagen / 100 MB o 60 s video / 25 MB o 3 min audio).",
      action: "Usa un archivo más liviano o recórtalo previamente."
    },
    en: {
      title: "File exceeds the allowed size or duration limit (20 MB image / 100 MB or 60 s video / 25 MB or 3 min audio).",
      action: "Use a smaller file or trim it externally first."
    },
    pt: {
      title: "O arquivo passa do limite permitido (20 MB imagem / 100 MB ou 60 s vídeo / 25 MB ou 3 min áudio).",
      action: "Use um arquivo mais leve ou corte antes."
    }
  },
  "url-rejected": {
    es: {
      title: "Enlace rechazado por seguridad: solo se permiten URLs HTTPS de MyInstants.",
      action: "Copia el enlace directo de myinstants.com e inténtalo de nuevo."
    },
    en: {
      title: "URL rejected by security policy: only HTTPS MyInstants links are allowed.",
      action: "Copy a valid myinstants.com link and try again."
    },
    pt: {
      title: "Link recusado por segurança: só são aceitos links HTTPS do MyInstants.",
      action: "Copie o link direto do myinstants.com e tente de novo."
    }
  },
  "remote-unavailable": {
    es: {
      title: "No se pudo obtener el sonido desde MyInstants.",
      action: "Verifica tu conexión o que el sonido siga disponible, o usa un audio local."
    },
    en: {
      title: "Could not retrieve the sound from MyInstants.",
      action: "Check your connection or that the sound still exists, or drop a local audio file."
    },
    pt: {
      title: "Não foi possível baixar o som do MyInstants.",
      action: "Confira sua conexão ou se o som ainda existe, ou use um áudio local."
    }
  },
  "trim-out-of-range": {
    es: {
      title: "El fragmento seleccionado debe durar entre 0.1 s y el máximo elegido (5 s o 10 s).",
      action: "Ajusta la barra de tiempo para que la selección quepa en 5 o 10 segundos."
    },
    en: {
      title: "The selected audio range must be between 0.1 s and the selected maximum (5 s or 10 s).",
      action: "Adjust the timeline so the selection fits within 5 or 10 seconds."
    },
    pt: {
      title: "O trecho selecionado deve durar entre 0,1 s e o máximo escolhido (5 s ou 10 s).",
      action: "Ajuste a barra de tempo para a seleção caber em 5 ou 10 segundos."
    }
  },
  "sticker-too-large": {
    es: {
      title: "El sticker WebP supera el límite de 100 KB requerido por WhatsApp.",
      action: "Exporta como video (5 s o 10 s) o usa una imagen más simple."
    },
    en: {
      title: "The WebP sticker could not fit under WhatsApp's 100 KB limit.",
      action: "Export as a 5s or 10s video or try a simpler image."
    },
    pt: {
      title: "A figurinha WebP passa do limite de 100 KB exigido pelo WhatsApp.",
      action: "Exporte como vídeo (5 s ou 10 s) ou use uma imagem mais simples."
    }
  },
  "package-invalid": {
    es: {
      title: "El paquete .stiksound.zip es inválido o contiene rutas inseguras.",
      action: "Verifica que sea un proyecto exportado por StikSound sin alteraciones."
    },
    en: {
      title: "The .stiksound.zip package is invalid or contains unsafe paths.",
      action: "Ensure this is an unmodified StikSound project package."
    },
    pt: {
      title: "O pacote .stiksound.zip é inválido ou tem caminhos inseguros.",
      action: "Confira se é um projeto exportado pelo StikSound sem alterações."
    }
  },
  "export-unsupported": {
    es: {
      title: "La exportación nativa directa a WhatsApp aún no está disponible.",
      action: "El MP4 es un video, no un sticker: pegarlo o compartirlo en el chat lo envía como video. Solo en algunas cuentas de la beta de Android, no documentada de forma oficial, se puede probar Crear sticker eligiendo el video en la galería; la duración y el audio los decide WhatsApp."
    },
    en: {
      title: "Direct native WhatsApp sticker export is not supported yet.",
      action: "The MP4 is a video, not a sticker: pasting or sharing it in the chat sends it as a video. Only on some Android beta accounts, which are not officially documented, can you try Create sticker and pick the video from the gallery; WhatsApp decides the duration and audio."
    },
    pt: {
      title: "A exportação nativa direto para o WhatsApp ainda não está disponível.",
      action: "O MP4 é um vídeo, não uma figurinha: colar ou compartilhar no chat envia como vídeo. Só em algumas contas do beta do Android, sem documentação oficial, dá pra tentar Criar figurinha escolhendo o vídeo na galeria; a duração e o áudio são decididos pelo WhatsApp."
    }
  }
};

export class StikSoundError extends Error {
  public readonly code: StikSoundErrorCode;
  public readonly detail?: string;

  constructor(code: StikSoundErrorCode, detail?: string) {
    super(detail ? `${code}: ${detail}` : code);
    this.name = "StikSoundError";
    this.code = code;
    this.detail = detail;
  }

  public getLocalized(locale: LocaleCode): LocalizedErrorCopy {
    return ERROR_CATALOG[this.code][locale];
  }
}

export function formatError(err: unknown, locale: LocaleCode): LocalizedErrorCopy & { code: StikSoundErrorCode } {
  if (err instanceof StikSoundError) {
    return { code: err.code, ...err.getLocalized(locale) };
  }
  return {
    code: "encode-failed",
    ...ERROR_CATALOG["encode-failed"][locale]
  };
}
