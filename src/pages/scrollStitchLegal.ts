// Content for the Scroll Stitch privacy policy and support pages.
//
// Kept as data rather than markup so the three locales stay in step: adding a
// section means adding it once per language in the same place, where a missing
// translation is obvious. The App Store listing is localized for ko, en and
// es-MX, and these pages back the privacy-policy and support URLs it requires.
//
// Source of truth is the app repository — scroll-stitch/docs/legal/. Changes
// belong there first.

export type Locale = "ko" | "en" | "es";

export const LOCALE_NAMES: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  es: "Español",
};

/** Reachable from both pages; the App Store requires a contact route. */
export const CONTACT_EMAIL = "jtchoi.apps@gmail.com";

export const LAST_UPDATED = "2026-08-06";

export interface Section {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Page {
  title: string;
  subtitle: string;
  lead: string;
  sections: Section[];
  contactLabel: string;
}

export const PRIVACY: Record<Locale, Page> = {
  ko: {
    title: "개인정보처리방침",
    subtitle: "Scroll Stitch",
    lead: "Scroll Stitch는 어떠한 데이터도 수집하지 않습니다.",
    contactLabel: "이 방침에 대한 문의",
    sections: [
      {
        title: "앱이 접근하는 항목",
        paragraphs: [
          "이 앱은 화면 녹화를 전적으로 사용자의 아이폰 안에서 처리합니다. 가져오거나 만들거나 내보낸 어떤 것도 외부로 전송되지 않습니다. 서버도, 계정도, 로그인도 없습니다.",
          "화면 녹화 파일 — 사용자가 사진 선택기나 공유 시트를 통해 직접 고른 녹화만 읽습니다. 그 파일은 분석과 긴 이미지 생성에만 쓰이며 기기를 벗어나지 않습니다.",
          "사진 보관함 저장 — 결과를 저장할 때 사진 보관함에 추가할 권한을 요청합니다. 이 권한은 추가 전용이며, 앱은 기존 사진을 읽을 수 없습니다.",
        ],
      },
      {
        title: "기기에 저장되는 항목",
        paragraphs: [
          "무료 내보내기를 사용한 횟수입니다. 앱을 다시 설치해도 유지되도록 iOS 키체인에 저장되는 숫자 하나이며, 개인정보를 담지 않고 전송되지 않습니다.",
        ],
      },
      {
        title: "결제",
        paragraphs: [
          "일회성 Pro 잠금 해제는 App Store를 통해 Apple이 처리합니다. 앱은 결제 정보를 전혀 보지 않습니다. 해당 거래에 대한 처리는 Apple 개인정보처리방침을 따릅니다.",
        ],
      },
      {
        title: "분석, 추적, 제3자",
        paragraphs: [
          "없습니다. 이 앱에는 분석 도구, 크래시 리포팅, 광고, 제3자 SDK가 전혀 포함되어 있지 않습니다. 다른 앱이나 웹사이트에서 사용자를 추적하지 않으며, 어떠한 네트워크 요청도 하지 않습니다.",
        ],
      },
      {
        title: "아동",
        paragraphs: [
          "이 앱은 아동을 포함한 누구로부터도 데이터를 수집하지 않습니다.",
        ],
      },
      {
        title: "변경",
        paragraphs: [
          "이 방침이 변경되면 위의 날짜와 함께 이 페이지에 게시됩니다. 앱이 데이터를 수집하지 않으므로, 변경은 데이터가 필요한 기능이 추가되는 경우에만 발생하며 그 내용 또한 여기에 기술됩니다.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    subtitle: "Scroll Stitch",
    lead: "Scroll Stitch does not collect any data.",
    contactLabel: "Questions about this policy",
    sections: [
      {
        title: "What the app accesses",
        paragraphs: [
          "The app processes your screen recordings entirely on your iPhone. Nothing you import, create, or export is transmitted anywhere. There is no server, no account, and no sign-in.",
          "Your screen recordings — you choose a recording to import, either through the photo picker or by sharing it into the app. The app reads that file only to analyze it and build your long image. It stays on your device.",
          "Saving to Photos — when you save a result, the app asks permission to add the image to your photo library. This permission is add-only: the app cannot read your existing photos.",
        ],
      },
      {
        title: "What is stored on your device",
        paragraphs: [
          "The number of free exports you have used. It is a single count, kept in the iOS Keychain so that it survives reinstalling the app. It contains no personal information and is never transmitted.",
        ],
      },
      {
        title: "Purchases",
        paragraphs: [
          "The one-time Pro unlock is processed by Apple through the App Store. The app never sees your payment details. Apple's handling of that transaction is governed by Apple's Privacy Policy.",
        ],
      },
      {
        title: "Analytics, tracking, and third parties",
        paragraphs: [
          "There are none. The app contains no analytics, no crash reporting, no advertising, and no third-party SDKs. It does not track you across apps or websites, and it makes no network requests of any kind.",
        ],
      },
      {
        title: "Children",
        paragraphs: [
          "The app collects no data from anyone, including children.",
        ],
      },
      {
        title: "Changes",
        paragraphs: [
          "If this policy changes, the updated version will be posted on this page with a new date above. Since the app collects no data, any change would come from the app gaining a feature that requires it — and that would also be described here.",
        ],
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    subtitle: "Scroll Stitch",
    lead: "Scroll Stitch no recopila ningún dato.",
    contactLabel: "Preguntas sobre esta política",
    sections: [
      {
        title: "A qué accede la app",
        paragraphs: [
          "La app procesa tus grabaciones de pantalla completamente en tu iPhone. Nada de lo que importas, creas o exportas se transmite a ningún lugar. No hay servidor, ni cuenta, ni inicio de sesión.",
          "Tus grabaciones de pantalla — tú eliges la grabación que quieres importar, ya sea con el selector de fotos o compartiéndola con la app. La app lee ese archivo solo para analizarlo y crear tu imagen larga. Permanece en tu dispositivo.",
          "Guardar en Fotos — al guardar un resultado, la app solicita permiso para añadir la imagen a tu fototeca. Este permiso es solo de adición: la app no puede leer tus fotos existentes.",
        ],
      },
      {
        title: "Qué se guarda en tu dispositivo",
        paragraphs: [
          "El número de exportaciones gratuitas que has usado. Es un solo contador, almacenado en el Llavero de iOS para que sobreviva a una reinstalación. No contiene información personal y nunca se transmite.",
        ],
      },
      {
        title: "Compras",
        paragraphs: [
          "El desbloqueo único de Pro lo procesa Apple a través del App Store. La app nunca ve tus datos de pago. El tratamiento de esa transacción se rige por la Política de Privacidad de Apple.",
        ],
      },
      {
        title: "Analítica, seguimiento y terceros",
        paragraphs: [
          "No hay ninguno. La app no contiene analítica, ni informes de fallos, ni publicidad, ni SDK de terceros. No te rastrea entre apps o sitios web, y no realiza ninguna solicitud de red.",
        ],
      },
      {
        title: "Menores",
        paragraphs: [
          "La app no recopila datos de nadie, incluidos los menores.",
        ],
      },
      {
        title: "Cambios",
        paragraphs: [
          "Si esta política cambia, la versión actualizada se publicará en esta página con una nueva fecha arriba. Dado que la app no recopila datos, cualquier cambio provendría de una función nueva que lo requiera, y también se describiría aquí.",
        ],
      },
    ],
  },
};

export const SUPPORT: Record<Locale, Page> = {
  ko: {
    title: "지원",
    subtitle: "Scroll Stitch",
    lead: "Scroll Stitch는 스크롤 화면 녹화를 긴 스크린샷 한 장으로 만듭니다. 모든 처리는 아이폰 안에서 이루어집니다.",
    contactLabel: "문의 (아이폰 기종과 iOS 버전을 함께 알려주세요)",
    sections: [
      {
        title: "좋은 결과를 얻는 방법",
        bullets: [
          "스크롤하면서 화면을 녹화하고, 캡처하고 싶은 지점마다 약 0.5초씩 멈추세요. 그 의도적인 멈춤을 앱이 찾습니다.",
          "한 번에 화면의 절반 정도만 넘기세요. 앞뒤 화면이 조금 겹쳐야 이어 붙일 수 있습니다.",
          "녹화를 앱에서 가져오거나, 사진 앱에서 공유하세요.",
          "스크롤되는 영역을 지정하세요. 고정된 헤더와 하단 바가 영역 밖에 오도록 선을 옮깁니다.",
          "감지된 프레임을 확인하고 원하지 않는 것은 제거하세요.",
          "긴 이미지를 저장하거나 공유하세요.",
        ],
      },
      {
        title: "문제 해결",
        paragraphs: [
          "정지 구간을 찾지 못했습니다 — 각 캡처 지점에서 잠시 멈춰야 합니다. 약 0.5초씩 멈추며 다시 녹화해 주세요. 아주 빠르게 계속 스크롤하면 앱이 붙잡을 지점이 없습니다.",
          "헤더나 하단 바가 반복됩니다 — 스크롤 영역에 고정 요소가 포함되어 있습니다. 영역 지정 단계로 돌아가 위나 아래 선을 옮겨 고정 바를 영역 밖으로 빼세요.",
          "이음새가 어긋났습니다 — 이음새 편집기에서 그 부분만 직접 조정하세요. 처음부터 다시 할 필요는 없습니다.",
          "겹치는 부분이 없어 보입니다 — 한 번에 화면 전체를 넘겼다면 앞뒤 캡처에 공통된 부분이 없을 수 있습니다. 이음새 편집기에서 겹침을 0으로 두면 잘라내지 않고 그대로 이어 붙습니다. 다음에는 조금씩 나눠 스크롤해 보세요.",
          "결과가 예상보다 짧습니다 — 여백이 넓고 글자가 적은 화면에서 앱이 이동량을 알아내지 못한 경우입니다. 조금 더 천천히 스크롤해 다시 녹화하고, 이어 붙이기 전에 감지된 프레임을 확인해 보세요.",
          "동영상이 재생되는 화면 — 스스로 변하는 내용은 정렬이 어렵습니다. 가능하면 영상을 멈추고 녹화하세요.",
        ],
      },
      {
        title: "결제",
        paragraphs: [
          "처음 5회의 내보내기는 무료이며 모든 기능을 쓸 수 있습니다. 이후에는 한 번의 결제로 횟수 제한이 영구히 사라집니다. 구독이 아닙니다.",
          "구매 복원 — 앱을 다시 설치했거나 새 아이폰을 쓴다면, 구매할 때 사용한 Apple 계정으로 로그인한 상태에서 잠금 해제 화면의 '구매 복원'을 누르세요.",
          "환불은 개발자가 아니라 Apple이 처리합니다. reportaproblem.apple.com 에서 요청하세요.",
        ],
      },
      {
        title: "요구 사항",
        paragraphs: ["iOS 17.0 이상"],
      },
    ],
  },
  en: {
    title: "Support",
    subtitle: "Scroll Stitch",
    lead: "Scroll Stitch turns a scrolling screen recording into one long screenshot. Everything runs on your iPhone.",
    contactLabel: "Contact (please include your iPhone model and iOS version)",
    sections: [
      {
        title: "How to get a good result",
        bullets: [
          "Record your screen while scrolling, pausing about half a second wherever you want a capture. Those deliberate pauses are what the app looks for.",
          "Move about half a screen at a time. Consecutive views need to overlap a little, because the app matches them by the part they share.",
          "Import the recording from the app, or share it from the Photos app.",
          "Mark the scrolling area. Drag the guides so fixed headers and bottom bars sit outside the region.",
          "Review the detected frames and remove any you do not want.",
          "Save or share the long image.",
        ],
      },
      {
        title: "Troubleshooting",
        paragraphs: [
          "\"No pauses were found.\" — the app needs a moment of stillness at each capture point. Record again, pausing about half a second wherever you want a frame.",
          "The header or toolbar repeats — the scroll region includes a fixed element. Go back to the region step and drag the top or bottom guide so the fixed bar sits outside the marked area.",
          "A seam looks wrong — open the seam editor and adjust that join by hand. You do not need to start over; only the seam you touch changes.",
          "The captures do not seem to overlap — if the recording moved a full screen at a time there may be nothing shared between consecutive captures. Set that join's overlap to 0 and the frames are joined end to end, with nothing trimmed. Recording again with smaller scroll steps gives a better result.",
          "The result is much shorter than expected — this happens when the app cannot tell how far the content moved, which is most likely on pages that are mostly blank with sparse text. Try recording again with slower scrolling, and check the detected frames before stitching.",
          "Pages with playing video — content that changes on its own between pauses is hard to align. Pause the video before recording if you can.",
        ],
      },
      {
        title: "Purchases",
        paragraphs: [
          "The first 5 exports are free, with every feature available. After that, a single one-time purchase removes the limit permanently. It is not a subscription.",
          "Restoring a purchase — if you reinstall the app or use a new iPhone, tap Restore Purchases on the unlock screen while signed in to the same Apple Account you bought it with.",
          "Refunds are handled by Apple, not by the developer. Request one at reportaproblem.apple.com.",
        ],
      },
      {
        title: "Requirements",
        paragraphs: ["iOS 17.0 or later."],
      },
    ],
  },
  es: {
    title: "Soporte",
    subtitle: "Scroll Stitch",
    lead: "Scroll Stitch convierte una grabación de pantalla con scroll en una sola captura larga. Todo se procesa en tu iPhone.",
    contactLabel: "Contacto (indica tu modelo de iPhone y versión de iOS)",
    sections: [
      {
        title: "Cómo obtener un buen resultado",
        bullets: [
          "Graba tu pantalla mientras te desplazas, haciendo una pausa de medio segundo donde quieras capturar. La app busca esas pausas deliberadas.",
          "Avanza unos media pantalla cada vez. Las vistas seguidas deben solaparse un poco, porque la app las alinea por la parte que comparten.",
          "Importa la grabación desde la app, o compártela desde Fotos.",
          "Marca el área que se desplaza. Arrastra las guías para que los encabezados fijos queden fuera de la región.",
          "Revisa los cuadros detectados y elimina los que no quieras.",
          "Guarda o comparte la imagen larga.",
        ],
      },
      {
        title: "Solución de problemas",
        paragraphs: [
          "\"No se encontraron pausas\" — la app necesita un momento de quietud en cada punto de captura. Graba de nuevo, pausando medio segundo donde quieras un cuadro.",
          "El encabezado o la barra se repiten — la región incluye un elemento fijo. Vuelve al paso de la región y arrastra la guía para dejarlo fuera.",
          "Una unión se ve mal — abre el editor de uniones y ajústala a mano. No hace falta empezar de nuevo.",
          "Las capturas no parecen solaparse — si la grabación avanzó una pantalla entera cada vez, puede que no haya nada en común. Pon la superposición de esa unión en 0 y los cuadros se unirán sin recortar. Grabar con pasos más pequeños da mejor resultado.",
          "El resultado es mucho más corto de lo esperado — ocurre cuando la app no puede determinar cuánto se movió el contenido, algo probable en páginas casi vacías con poco texto. Prueba a grabar más despacio y revisa los cuadros antes de unir.",
          "Páginas con video en reproducción — el contenido que cambia solo es difícil de alinear. Pausa el video antes de grabar si puedes.",
        ],
      },
      {
        title: "Compras",
        paragraphs: [
          "Las primeras 5 exportaciones son gratuitas, con todas las funciones. Después, una sola compra elimina el límite para siempre. No es una suscripción.",
          "Restaurar una compra — si reinstalas la app o usas un iPhone nuevo, toca Restaurar compras en la pantalla de desbloqueo con la misma cuenta de Apple con la que compraste.",
          "Los reembolsos los gestiona Apple, no el desarrollador. Solicítalos en reportaproblem.apple.com.",
        ],
      },
      {
        title: "Requisitos",
        paragraphs: ["iOS 17.0 o posterior."],
      },
    ],
  },
};
