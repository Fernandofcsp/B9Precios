const _0x930223 = _0x2c86;
(function (_0x15b653, _0x5eab18) {
  const _0x193dfb = _0x2c86,
    _0x5007ae = _0x15b653();
  while (!![]) {
    try {
      const _0x3c82a8 =
        (parseInt(_0x193dfb(0x39d)) / 0x1) *
          (parseInt(_0x193dfb(0x27d)) / 0x2) +
        (-parseInt(_0x193dfb(0xb9)) / 0x3) *
          (-parseInt(_0x193dfb(0x240)) / 0x4) +
        -parseInt(_0x193dfb(0x25b)) / 0x5 +
        -parseInt(_0x193dfb(0x292)) / 0x6 +
        (-parseInt(_0x193dfb(0x1d1)) / 0x7) *
          (parseInt(_0x193dfb(0xe8)) / 0x8) +
        (parseInt(_0x193dfb(0xc3)) / 0x9) *
          (-parseInt(_0x193dfb(0x310)) / 0xa) +
        parseInt(_0x193dfb(0x357)) / 0xb;
      if (_0x3c82a8 === _0x5eab18) break;
      else _0x5007ae["push"](_0x5007ae["shift"]());
    } catch (_0x5e1e2c) {
      _0x5007ae["push"](_0x5007ae["shift"]());
    }
  }
})(_0x4b0d, 0x71b54);
const form = document[_0x930223(0x2d7)](_0x930223(0xd7)),
  inputCodigo = document["getElementById"](_0x930223(0x234)),
  readerDiv = document[_0x930223(0x2d7)](_0x930223(0x23a)),
  ayudaTexto = document[_0x930223(0x2d7)](_0x930223(0x1c8)),
  installBtn = document["getElementById"](_0x930223(0xd4));
inputCodigo["setAttribute"](_0x930223(0xcd), _0x930223(0x11a)),
  inputCodigo[_0x930223(0x305)](_0x930223(0x277), _0x930223(0x384)),
  inputCodigo["setAttribute"](_0x930223(0x33e), _0x930223(0x11a)),
  inputCodigo["setAttribute"](_0x930223(0x2a0), _0x930223(0x11a)),
  inputCodigo[_0x930223(0x305)](_0x930223(0x1f0), _0x930223(0xd1)),
  form[_0x930223(0x305)](_0x930223(0xcd), _0x930223(0x11a));
let scannerActivo = ![],
  deferredPrompt,
  puedeEscanear = !![],
  ultimoCodigoEscaneado = "",
  datosYaCargados = ![];
if (!window[_0x930223(0x2e1)]) {
  const script = document[_0x930223(0x2b2)](_0x930223(0xca));
  (script["src"] = _0x930223(0x232)),
    (script["async"] = !![]),
    document[_0x930223(0x17e)]["appendChild"](script);
}
const GOOGLE_VISION_CONFIG = {
  apiKey: "",
  enabled: !![],
  monthlyLimit: 0x3b6,
  dailyLimit: 0x20,
  warningThreshold: 0x320,
};
class GoogleVisionUsageTracker {
  constructor() {
    const _0x4a01b1 = _0x930223;
    (this["storageKey"] = _0x4a01b1(0x220)), this[_0x4a01b1(0x1f8)]();
  }
  ["loadUsage"]() {
    const _0x1ee26f = _0x930223,
      _0x5e76f5 = localStorage[_0x1ee26f(0x321)](this[_0x1ee26f(0x132)]);
    _0x5e76f5
      ? (this[_0x1ee26f(0x1ab)] = JSON[_0x1ee26f(0x20b)](_0x5e76f5))
      : this["resetMonthlyUsage"]();
    const _0x407cb6 = new Date()[_0x1ee26f(0x35c)]();
    this[_0x1ee26f(0x1ab)]["month"] !== _0x407cb6 && this[_0x1ee26f(0x308)]();
  }
  ["resetMonthlyUsage"]() {
    const _0x45879d = _0x930223;
    (this[_0x45879d(0x1ab)] = {
      month: new Date()[_0x45879d(0x35c)](),
      year: new Date()[_0x45879d(0xff)](),
      monthlyCount: 0x0,
      dailyCount: 0x0,
      lastUsedDate: new Date()[_0x45879d(0x189)](),
      history: [],
    }),
      this[_0x45879d(0x169)]();
  }
  [_0x930223(0x169)]() {
    const _0xd83527 = _0x930223;
    localStorage["setItem"](
      this[_0xd83527(0x132)],
      JSON["stringify"](this[_0xd83527(0x1ab)])
    );
  }
  [_0x930223(0x109)]() {
    const _0x8f1b6e = _0x930223,
      _0x1bfd27 = new Date()[_0x8f1b6e(0x189)]();
    this[_0x8f1b6e(0x1ab)]["lastUsedDate"] !== _0x1bfd27 &&
      ((this[_0x8f1b6e(0x1ab)][_0x8f1b6e(0x144)] = 0x0),
      (this[_0x8f1b6e(0x1ab)]["lastUsedDate"] = _0x1bfd27),
      this[_0x8f1b6e(0x169)]());
    const _0x50f73d =
        this["usage"][_0x8f1b6e(0x33f)] < GOOGLE_VISION_CONFIG["monthlyLimit"],
      _0x211f5c =
        this[_0x8f1b6e(0x1ab)][_0x8f1b6e(0x144)] <
        GOOGLE_VISION_CONFIG["dailyLimit"];
    return _0x50f73d && _0x211f5c;
  }
  [_0x930223(0xd2)]() {
    const _0x37b98b = _0x930223;
    this["usage"]["monthlyCount"]++,
      this["usage"]["dailyCount"]++,
      this["usage"][_0x37b98b(0x248)][_0x37b98b(0x156)]({
        date: new Date()[_0x37b98b(0x24a)](),
        count: this[_0x37b98b(0x1ab)][_0x37b98b(0x33f)],
      }),
      this[_0x37b98b(0x1ab)][_0x37b98b(0x248)][_0x37b98b(0x155)] > 0x32 &&
        (this[_0x37b98b(0x1ab)][_0x37b98b(0x248)] =
          this[_0x37b98b(0x1ab)]["history"][_0x37b98b(0x353)](-0x32)),
      this["saveUsage"]();
  }
  ["getUsageStatus"]() {
    const _0x9938ed = _0x930223;
    return {
      monthlyUsed: this[_0x9938ed(0x1ab)][_0x9938ed(0x33f)],
      monthlyLimit: GOOGLE_VISION_CONFIG[_0x9938ed(0x3a3)],
      dailyUsed: this[_0x9938ed(0x1ab)][_0x9938ed(0x144)],
      dailyLimit: GOOGLE_VISION_CONFIG[_0x9938ed(0x11c)],
      remainingMonthly:
        GOOGLE_VISION_CONFIG[_0x9938ed(0x3a3)] -
        this[_0x9938ed(0x1ab)][_0x9938ed(0x33f)],
      remainingDaily:
        GOOGLE_VISION_CONFIG["dailyLimit"] -
        this[_0x9938ed(0x1ab)]["dailyCount"],
      canUse: this[_0x9938ed(0x109)](),
    };
  }
  ["showUsageWarning"]() {
    const _0x557d4d = _0x930223,
      _0x5954b7 = this[_0x557d4d(0x376)]();
    if (_0x5954b7["monthlyUsed"] >= GOOGLE_VISION_CONFIG[_0x557d4d(0x227)])
      return (
        _0x557d4d(0x39a) +
        _0x5954b7[_0x557d4d(0x28c)] +
        "/" +
        _0x5954b7["monthlyLimit"] +
        "\x20usos\x20mensuales"
      );
    if (_0x5954b7["dailyUsed"] >= GOOGLE_VISION_CONFIG["dailyLimit"] * 0.8)
      return (
        "⚠️\x20<strong>Límite\x20diario\x20cerca:</strong>\x20" +
        _0x5954b7[_0x557d4d(0x337)] +
        "/" +
        _0x5954b7[_0x557d4d(0x11c)] +
        _0x557d4d(0x2c1)
      );
    return null;
  }
}
const visionUsageTracker = new GoogleVisionUsageTracker();
async function detectarConGoogleVision(_0x17b432) {
  const _0x297d39 = _0x930223;
  console["log"](_0x297d39(0x2e2));
  const _0x5b2830 = document[_0x297d39(0x2b2)](_0x297d39(0xc4)),
    _0x2308ec = _0x5b2830[_0x297d39(0x2f3)]("2d");
  let { width: _0x775f2a, height: _0x593f64 } = _0x17b432;
  const _0x4b1c0f = 0x400;
  if (_0x775f2a > _0x4b1c0f || _0x593f64 > _0x4b1c0f) {
    const _0x29700b = Math["min"](_0x4b1c0f / _0x775f2a, _0x4b1c0f / _0x593f64);
    (_0x775f2a *= _0x29700b), (_0x593f64 *= _0x29700b);
  }
  (_0x5b2830[_0x297d39(0x33c)] = _0x775f2a),
    (_0x5b2830[_0x297d39(0x363)] = _0x593f64),
    _0x2308ec["drawImage"](_0x17b432, 0x0, 0x0, _0x775f2a, _0x593f64);
  const _0x2e8b15 = _0x5b2830["toDataURL"]("image/jpeg", 0.9);
  console[_0x297d39(0xb7)]("📡\x20Enviando\x20a\x20backend\x20proxy...");
  try {
    const _0x396a66 = await fetch(_0x297d39(0x2c4), {
      method: "POST",
      headers: { "Content-Type": _0x297d39(0x291) },
      body: JSON[_0x297d39(0x2b3)]({
        image: _0x2e8b15,
        userAgent: navigator[_0x297d39(0x279)][_0x297d39(0x2a8)](0x0, 0x32),
        timestamp: new Date()[_0x297d39(0x24a)](),
      }),
    });
    if (!_0x396a66["ok"]) {
      const _0x5cda43 = await _0x396a66[_0x297d39(0x347)]();
      throw new Error(
        _0x297d39(0x1ec) +
          _0x396a66[_0x297d39(0x38e)] +
          _0x297d39(0x360) +
          _0x5cda43
      );
    }
    const _0x5ea3a3 = await _0x396a66[_0x297d39(0x19f)]();
    console[_0x297d39(0xb7)]("📊\x20Respuesta\x20del\x20backend:", _0x5ea3a3);
    if (_0x5ea3a3[_0x297d39(0xf1)])
      return (
        visionUsageTracker[_0x297d39(0xd2)](),
        console[_0x297d39(0xb7)](_0x297d39(0x2f7)),
        console[_0x297d39(0xb7)](
          "💡\x20El\x20contador\x20del\x20backend\x20se\x20actualiza\x20automáticamente\x20en\x20el\x20servidor"
        ),
        extraerCodigoDeTexto(_0x5ea3a3["visionData"])
      );
    else throw new Error(_0x5ea3a3["error"] || _0x297d39(0xc1));
  } catch (_0x33c768) {
    console[_0x297d39(0xb7)](_0x297d39(0x28b), _0x33c768[_0x297d39(0xe2)]);
    if (_0x33c768[_0x297d39(0xe2)][_0x297d39(0x219)](_0x297d39(0x328)))
      console["log"](_0x297d39(0x278)),
        console[_0x297d39(0xb7)](_0x297d39(0x2dd)),
        console[_0x297d39(0xb7)](
          "\x20\x20\x20•\x20Variable\x20GOOGLE_VISION_API_KEY\x20no\x20configurada\x20en\x20Vercel"
        ),
        console["log"](
          "\x20\x20\x20•\x20Problema\x20en\x20el\x20código\x20de\x20la\x20función\x20serverless"
        ),
        console[_0x297d39(0xb7)](_0x297d39(0x133)),
        console["log"](
          "\x20\x20\x20💡\x20Ejecuta\x20diagnosticarBackend()\x20para\x20más\x20detalles"
        );
    else {
      if (
        _0x33c768[_0x297d39(0xe2)][_0x297d39(0x219)](_0x297d39(0x17c)) ||
        _0x33c768[_0x297d39(0xe2)][_0x297d39(0x219)](_0x297d39(0x269)) ||
        _0x33c768[_0x297d39(0xe2)][_0x297d39(0x219)]("NetworkError")
      )
        throw new Error(_0x297d39(0x104));
    }
    throw _0x33c768;
  }
}
function extraerCodigoDeTexto(_0x4bc3b2) {
  const _0x133337 = _0x930223,
    _0x4c19cc = _0x4bc3b2[_0x133337(0x229)][0x0]?.[_0x133337(0x1be)] || [];
  if (_0x4c19cc["length"] === 0x0)
    return (
      console[_0x133337(0xb7)](
        "❌\x20Google\x20Vision\x20no\x20detectó\x20texto"
      ),
      null
    );
  const _0x355e15 = _0x4c19cc[0x0]?.["description"] || "";
  console[_0x133337(0xb7)]("📝\x20Texto\x20completo\x20detectado:", _0x355e15);
  const _0x4662ec = [
    /\b(\d{13})\b/g,
    /\b(\d{12})\b/g,
    /\b(\d{8})\b/g,
    /\b(\d{6,8})\b/g,
    /\b([A-Z0-9\-]{4,20})\b/g,
  ];
  for (const _0x8aa52d of _0x4662ec) {
    const _0x3d4ff4 = [..._0x355e15[_0x133337(0x151)](_0x8aa52d)];
    for (const _0x533e26 of _0x3d4ff4) {
      const _0x3b6fc9 = _0x533e26[0x1][_0x133337(0x162)]();
      console["log"](
        "🔍\x20Código\x20candidato\x20encontrado:\x20" + _0x3b6fc9
      );
      if (validarCodigoPorLongitud(_0x3b6fc9))
        return (
          console[_0x133337(0xb7)](
            "✅\x20Código\x20válido\x20seleccionado:\x20" + _0x3b6fc9
          ),
          _0x3b6fc9
        );
    }
  }
  return console[_0x133337(0xb7)](_0x133337(0x164)), null;
}
function validarCodigoPorLongitud(_0x195c39) {
  const _0x5c6f86 = _0x930223;
  if (/^\d{13}$/[_0x5c6f86(0x196)](_0x195c39)) return !![];
  if (/^\d{12}$/[_0x5c6f86(0x196)](_0x195c39)) return !![];
  if (/^\d{8}$/[_0x5c6f86(0x196)](_0x195c39)) return !![];
  if (/^\d{6,8}$/[_0x5c6f86(0x196)](_0x195c39)) return !![];
  if (
    /^[A-Z0-9\-]{4,20}$/[_0x5c6f86(0x196)](_0x195c39) &&
    _0x195c39[_0x5c6f86(0x155)] >= 0x4
  )
    return !![];
  return ![];
}
async function diagnosticarBackend() {
  const _0x3e8949 = _0x930223;
  console[_0x3e8949(0xb7)](
    "🔍\x20Iniciando\x20diagnóstico\x20del\x20backend..."
  );
  const _0x17b9d6 = document[_0x3e8949(0x2d7)](_0x3e8949(0x323));
  _0x17b9d6 &&
    (_0x17b9d6[_0x3e8949(0x179)] =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20spinner-border-sm\x20me-2\x22\x20role=\x22status\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Diagnosticando\x20backend...\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
  let _0x540b48 = "";
  try {
    const _0x4f4839 = await fetch(
      "https://contador-apicloudvision.vercel.app/api/stats"
    );
    if (_0x4f4839["ok"]) {
      console[_0x3e8949(0xb7)](_0x3e8949(0x280));
      const _0xb061c1 = await _0x4f4839[_0x3e8949(0x19f)]();
      console["log"](_0x3e8949(0x1fa), _0xb061c1),
        (_0x540b48 += _0x3e8949(0xfe));
    } else
      console[_0x3e8949(0xb7)](
        "❌\x20Endpoint\x20/api/stats\x20falló:",
        _0x4f4839["status"]
      ),
        (_0x540b48 +=
          _0x3e8949(0x37c) + _0x4f4839[_0x3e8949(0x38e)] + _0x3e8949(0x2ce));
    console["log"](_0x3e8949(0x17a));
    const _0x5daa66 = await fetch(_0x3e8949(0x2c4), {
        method: _0x3e8949(0x145),
        headers: { "Content-Type": _0x3e8949(0x291) },
        body: JSON[_0x3e8949(0x2b3)]({
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
          userId: _0x3e8949(0x201),
        }),
      }),
      _0x1cdbd3 = await _0x5daa66[_0x3e8949(0x19f)]();
    console[_0x3e8949(0xb7)](
      "🧪\x20Respuesta\x20completa\x20vision-detect:",
      _0x1cdbd3
    ),
      console[_0x3e8949(0xb7)](_0x3e8949(0x311), _0x5daa66[_0x3e8949(0x38e)]);
    if (_0x5daa66[_0x3e8949(0x38e)] === 0x1f4) {
      console["log"](_0x3e8949(0x297));
      if (_0x1cdbd3[_0x3e8949(0x35f)]) {
        if (_0x1cdbd3["details"]["includes"]("BILLING_DISABLED"))
          console[_0x3e8949(0xb7)](_0x3e8949(0x37f)),
            console[_0x3e8949(0xb7)](_0x3e8949(0xf9)),
            console[_0x3e8949(0xb7)](
              "🔗\x20Ve\x20a:\x20https://console.cloud.google.com/billing"
            ),
            (_0x540b48 +=
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🏦\x20Problema\x20de\x20Facturación</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20facturación\x20no\x20está\x20habilitada\x20en\x20el\x20proyecto\x20correcto\x20(#1070150612422)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/billing\x22\x20target=\x22_blank\x22>Ve\x20a\x20Google\x20Cloud\x20Billing</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20");
        else {
          if (_0x1cdbd3["details"][_0x3e8949(0x219)](_0x3e8949(0x1a1)))
            console[_0x3e8949(0xb7)](_0x3e8949(0x35b)),
              (_0x540b48 +=
                "<div\x20class=\x22alert\x20alert-danger\x22>🔑\x20API\x20Key\x20inválida\x20-\x20verifica\x20la\x20configuración\x20en\x20Vercel</div>");
          else
            _0x1cdbd3["details"][_0x3e8949(0x219)](_0x3e8949(0x1f1))
              ? (console[_0x3e8949(0xb7)](_0x3e8949(0x223)),
                console[_0x3e8949(0xb7)](_0x3e8949(0x142)),
                (_0x540b48 += _0x3e8949(0x253)))
              : (console[_0x3e8949(0xb7)](_0x3e8949(0x1d5)),
                console[_0x3e8949(0xb7)](
                  _0x3e8949(0xe9),
                  _0x1cdbd3[_0x3e8949(0x35f)]
                ),
                (_0x540b48 += _0x3e8949(0x263)));
        }
      }
    } else
      _0x5daa66[_0x3e8949(0x38e)] === 0xc8 &&
        (console[_0x3e8949(0xb7)](
          "🎉\x20¡Google\x20Vision\x20API\x20funcionando\x20correctamente!"
        ),
        (_0x540b48 +=
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🎉\x20¡Google\x20Vision\x20API\x20Activa!</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>✅\x20La\x20detección\x20premium\x20está\x20funcionando\x20correctamente</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Fallback\x20automático:\x20Local\x20→\x20Google\x20Vision</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"));
  } catch (_0x56d558) {
    console[_0x3e8949(0xb7)](_0x3e8949(0x2ca), _0x56d558[_0x3e8949(0xe2)]),
      _0x56d558[_0x3e8949(0xe2)][_0x3e8949(0x219)]("CORS")
        ? (console[_0x3e8949(0xb7)](_0x3e8949(0x1d2)),
          (_0x540b48 +=
            "<div\x20class=\x22alert\x20alert-danger\x22>🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers</div>"))
        : (_0x540b48 += _0x3e8949(0x14d) + _0x56d558["message"] + "</div>");
  }
  _0x17b9d6 && (_0x17b9d6["innerHTML"] = _0x540b48);
}
async function verificarBackend() {
  const _0x457beb = _0x930223;
  try {
    const _0x24d4df = await fetch(_0x457beb(0x22b), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (_0x24d4df["ok"]) {
      const _0x4e0517 = await _0x24d4df[_0x457beb(0x19f)]();
      return (
        console["log"](_0x457beb(0x18c), _0x4e0517),
        { activo: !![], stats: _0x4e0517, mensaje: _0x457beb(0x37b) }
      );
    } else
      return (
        console["log"](_0x457beb(0x2ec), _0x24d4df[_0x457beb(0x38e)]),
        { activo: ![], mensaje: _0x457beb(0x170) + _0x24d4df[_0x457beb(0x38e)] }
      );
  } catch (_0x47b680) {
    return (
      console[_0x457beb(0xb7)](
        "❌\x20Backend\x20no\x20disponible:",
        _0x47b680[_0x457beb(0xe2)]
      ),
      { activo: ![], mensaje: _0x457beb(0x36f) }
    );
  }
}
async function mostrarEstadisticasUso() {
  const _0x50b6ef = _0x930223,
    _0x141804 = visionUsageTracker["getUsageStatus"](),
    _0x5b96ac = visionUsageTracker["showUsageWarning"]();
  let _0xd54a2 = _0x50b6ef(0x2ee);
  (_0xd54a2 +=
    _0x50b6ef(0x2f1) +
    _0x141804[_0x50b6ef(0x28c)] +
    "/" +
    _0x141804["monthlyLimit"] +
    _0x50b6ef(0x16d) +
    _0x141804[_0x50b6ef(0x205)] +
    _0x50b6ef(0x12c)),
    (_0xd54a2 +=
      _0x50b6ef(0x178) +
      _0x141804[_0x50b6ef(0x337)] +
      "/" +
      _0x141804[_0x50b6ef(0x11c)] +
      _0x50b6ef(0x16d) +
      _0x141804[_0x50b6ef(0x372)] +
      ")");
  _0x5b96ac && (_0xd54a2 += _0x50b6ef(0x34a) + _0x5b96ac);
  if (GOOGLE_VISION_CONFIG[_0x50b6ef(0x385)])
    try {
      const _0x566775 = await verificarBackend();
      _0xd54a2 +=
        "<br><br>🌐\x20<strong>Backend:</strong>\x20" + _0x566775["mensaje"];
    } catch (_0x5e4e94) {
      _0xd54a2 += _0x50b6ef(0x312);
    }
  return _0xd54a2;
}
function setCookie(_0x5501b0, _0x3f3fa7, _0x5b6270) {
  const _0x562d7e = _0x930223,
    _0x9ece23 = new Date(
      Date[_0x562d7e(0x373)]() + _0x5b6270 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x562d7e(0x1e9)]();
  document[_0x562d7e(0x30d)] =
    _0x5501b0 +
    "=" +
    encodeURIComponent(_0x3f3fa7) +
    ";\x20expires=" +
    _0x9ece23 +
    _0x562d7e(0x260);
}
function getCookie(_0x537ed5) {
  const _0x39f5c7 = _0x930223,
    _0x3186c1 = ";\x20" + document[_0x39f5c7(0x30d)],
    _0x53221d = _0x3186c1[_0x39f5c7(0x1c3)](";\x20" + _0x537ed5 + "=");
  if (_0x53221d["length"] === 0x2)
    return decodeURIComponent(
      _0x53221d[_0x39f5c7(0x12d)]()[_0x39f5c7(0x1c3)](";")[_0x39f5c7(0x11b)]()
    );
  return null;
}
const historialDiv = document[_0x930223(0x2d7)](_0x930223(0x317)),
  resultadoDiv = document[_0x930223(0x2d7)](_0x930223(0x276)),
  DB_NAME = _0x930223(0x250),
  DB_STORE = "productos",
  DB_STORE_PROMOCIONES = "promociones";
let db;
function openDB() {
  return new Promise((_0x44cb71, _0x40d6f3) => {
    const _0xfc9516 = _0x2c86,
      _0x1c2a48 = indexedDB[_0xfc9516(0x1ff)](DB_NAME, 0x2);
    (_0x1c2a48[_0xfc9516(0x27b)] = function (_0x153223) {
      const _0xa1fe38 = _0xfc9516;
      (db = _0x153223[_0xa1fe38(0x394)][_0xa1fe38(0x259)]),
        !db[_0xa1fe38(0x197)][_0xa1fe38(0x217)](DB_STORE) &&
          db["createObjectStore"](DB_STORE, {
            keyPath: "id",
            autoIncrement: !![],
          }),
        !db["objectStoreNames"][_0xa1fe38(0x217)](DB_STORE_PROMOCIONES) &&
          db["createObjectStore"](DB_STORE_PROMOCIONES, {
            keyPath: "id",
            autoIncrement: !![],
          });
    }),
      (_0x1c2a48[_0xfc9516(0x2eb)] = function (_0x265451) {
        const _0x547aa5 = _0xfc9516;
        (db = _0x265451[_0x547aa5(0x394)][_0x547aa5(0x259)]), _0x44cb71(db);
      }),
      (_0x1c2a48[_0xfc9516(0x31c)] = function (_0x153a2c) {
        _0x40d6f3(_0x153a2c);
      });
  });
}
function clearProductos() {
  const _0x8901af = _0x930223;
  return openDB()[_0x8901af(0x1bc)]((_0x318831) => {
    return new Promise((_0x523599, _0x3c086e) => {
      const _0x400020 = _0x2c86,
        _0x3a976f = _0x318831["transaction"](DB_STORE, _0x400020(0x11e));
      _0x3a976f[_0x400020(0x120)](DB_STORE)[_0x400020(0x2d5)](),
        (_0x3a976f["oncomplete"] = _0x523599),
        (_0x3a976f[_0x400020(0x31c)] = _0x3c086e);
    });
  });
}
function saveProductos(_0x57270e) {
  const _0x4a8b72 = _0x930223;
  return openDB()[_0x4a8b72(0x1bc)]((_0x522f4c) => {
    return new Promise((_0x3b2ba3, _0x5d45c5) => {
      const _0x1e321c = _0x2c86,
        _0x137d8e = _0x522f4c["transaction"](DB_STORE, _0x1e321c(0x11e)),
        _0x563b07 = _0x137d8e[_0x1e321c(0x120)](DB_STORE);
      _0x57270e["forEach"]((_0x1519e5) =>
        _0x563b07[_0x1e321c(0x338)](_0x1519e5)
      ),
        (_0x137d8e[_0x1e321c(0x2b9)] = _0x3b2ba3),
        (_0x137d8e[_0x1e321c(0x31c)] = _0x5d45c5);
    });
  });
}
function getAllProductos() {
  const _0x45fee9 = _0x930223;
  return openDB()[_0x45fee9(0x1bc)]((_0x6d3a7d) => {
    return new Promise((_0x2b5077, _0x5584f1) => {
      const _0x45ba53 = _0x2c86,
        _0x23be4a = _0x6d3a7d[_0x45ba53(0x154)](DB_STORE, _0x45ba53(0x239)),
        _0x565248 = _0x23be4a[_0x45ba53(0x120)](DB_STORE),
        _0x2a3047 = _0x565248[_0x45ba53(0x141)]();
      (_0x2a3047[_0x45ba53(0x2eb)] = () => _0x2b5077(_0x2a3047["result"])),
        (_0x2a3047["onerror"] = _0x5584f1);
    });
  });
}
function clearPromociones() {
  return openDB()["then"]((_0x1f9d2e) => {
    return new Promise((_0x513e32, _0x4fa94b) => {
      const _0x56cafa = _0x2c86,
        _0x32038f = _0x1f9d2e[_0x56cafa(0x154)](
          DB_STORE_PROMOCIONES,
          _0x56cafa(0x11e)
        );
      _0x32038f["objectStore"](DB_STORE_PROMOCIONES)["clear"](),
        (_0x32038f[_0x56cafa(0x2b9)] = _0x513e32),
        (_0x32038f[_0x56cafa(0x31c)] = _0x4fa94b);
    });
  });
}
function savePromociones(_0x23152b) {
  const _0x279301 = _0x930223;
  return openDB()[_0x279301(0x1bc)]((_0xccf9b5) => {
    return new Promise((_0xb61895, _0x9c9e85) => {
      const _0x25a76a = _0x2c86,
        _0x45f3dd = _0xccf9b5[_0x25a76a(0x154)](
          DB_STORE_PROMOCIONES,
          _0x25a76a(0x11e)
        ),
        _0x38a014 = _0x45f3dd["objectStore"](DB_STORE_PROMOCIONES);
      _0x23152b[_0x25a76a(0x389)]((_0x389c04) => _0x38a014["add"](_0x389c04)),
        (_0x45f3dd[_0x25a76a(0x2b9)] = _0xb61895),
        (_0x45f3dd[_0x25a76a(0x31c)] = _0x9c9e85);
    });
  });
}
function getAllPromociones() {
  const _0x4a13fc = _0x930223;
  return openDB()[_0x4a13fc(0x1bc)]((_0x136196) => {
    return new Promise((_0x175e98, _0x336734) => {
      const _0x205b4 = _0x2c86,
        _0x39153d = _0x136196[_0x205b4(0x154)](
          DB_STORE_PROMOCIONES,
          _0x205b4(0x239)
        ),
        _0x38b4f4 = _0x39153d[_0x205b4(0x120)](DB_STORE_PROMOCIONES),
        _0x212b5a = _0x38b4f4[_0x205b4(0x141)]();
      (_0x212b5a[_0x205b4(0x2eb)] = () =>
        _0x175e98(_0x212b5a[_0x205b4(0x259)])),
        (_0x212b5a[_0x205b4(0x31c)] = _0x336734);
    });
  });
}
const sugerenciasDiv = document["createElement"]("div");
(sugerenciasDiv["id"] = _0x930223(0x398)),
  (sugerenciasDiv[_0x930223(0x203)] = _0x930223(0x108)),
  (sugerenciasDiv["style"][_0x930223(0x1bb)] = "1000"),
  (sugerenciasDiv[_0x930223(0x252)][_0x930223(0x1a2)] = _0x930223(0x255)),
  (sugerenciasDiv[_0x930223(0x252)][_0x930223(0x152)] = "auto"),
  (sugerenciasDiv[_0x930223(0x252)][_0x930223(0x1b9)] = "100%"),
  (sugerenciasDiv[_0x930223(0x252)][_0x930223(0x1dd)] = "0"),
  (sugerenciasDiv[_0x930223(0x252)]["right"] = "0"),
  (inputCodigo[_0x930223(0x38c)][_0x930223(0x252)][_0x930223(0x10f)] =
    _0x930223(0x121)),
  inputCodigo["parentNode"][_0x930223(0x346)](sugerenciasDiv);
const actualizarDiv = document[_0x930223(0x2b2)](_0x930223(0x173));
(actualizarDiv[_0x930223(0x203)] = _0x930223(0x2bf)),
  (actualizarDiv[_0x930223(0x179)] = _0x930223(0x3a1)),
  historialDiv[_0x930223(0x38c)][_0x930223(0x208)](actualizarDiv, historialDiv);
const btnActualizar = actualizarDiv[_0x930223(0x2fb)](_0x930223(0x28a)),
  btnPromociones = actualizarDiv[_0x930223(0x2fb)](_0x930223(0x117)),
  ultimaActualizacionSpan = actualizarDiv[_0x930223(0x2fb)](_0x930223(0x12f)),
  btnTexto = actualizarDiv["querySelector"](_0x930223(0x289)),
  btnSpinner = actualizarDiv[_0x930223(0x2fb)](_0x930223(0xfb)),
  mensajeActualizacion = actualizarDiv[_0x930223(0x2fb)](
    "#mensajeActualizacion"
  );
async function mostrarProductosConPromociones() {
  const _0x21e6cb = _0x930223,
    _0x459ccb = await getAllProductos(),
    _0x4a59eb = [];
  for (const _0x5cc68e of _0x459ccb) {
    try {
      const _0x5550dc = await detectarPromocionReal(_0x5cc68e);
      _0x5550dc["length"] > 0x0 && _0x4a59eb[_0x21e6cb(0x156)](_0x5cc68e);
    } catch (_0x4c7b69) {
      console[_0x21e6cb(0x161)](
        _0x21e6cb(0x20e) + _0x5cc68e[_0x21e6cb(0x1d3)] + ":",
        _0x4c7b69
      );
    }
  }
  if (_0x4a59eb[_0x21e6cb(0x155)] === 0x0) {
    (resultadoDiv[_0x21e6cb(0x179)] = _0x21e6cb(0x1b5)), renderHistorial();
    return;
  }
  const _0x25d07d = [];
  for (const _0x53da5d of _0x4a59eb[_0x21e6cb(0x353)](0x0, 0x14)) {
    try {
      const _0x197341 = await detectarPromocionReal(_0x53da5d),
        _0x5cba21 =
          Number(_0x53da5d[_0x21e6cb(0x1a6)]) || Number(_0x53da5d["L1"]) || 0x0,
        _0x4ad228 = Math[_0x21e6cb(0x148)](_0x5cba21 * 1.16 * 0x64) / 0x64,
        _0x3734a9 = _0x197341[_0x21e6cb(0x2ed)]((_0x27b46c) => {
          const _0x10fafe = _0x21e6cb;
          let _0x3a7124 = _0x10fafe(0x362),
            _0x1766ef =
              _0x27b46c["detalle"] ||
              _0x27b46c["nombre_promocion"] ||
              _0x10fafe(0x11d);
          if (_0x27b46c[_0x10fafe(0x103)][_0x10fafe(0x219)](_0x10fafe(0x1d9)))
            (_0x3a7124 = _0x10fafe(0x194)),
              (_0x1766ef = _0x10fafe(0x2c7) + _0x1766ef);
          else
            _0x27b46c[_0x10fafe(0x24d)] &&
              ((_0x3a7124 = _0x10fafe(0xcf)),
              (_0x1766ef = "🏷️\x20" + _0x1766ef));
          return (
            _0x10fafe(0x324) +
            _0x3a7124 +
            _0x10fafe(0x2f9) +
            _0x1766ef +
            _0x10fafe(0x35e)
          );
        })[_0x21e6cb(0x38b)]("");
      _0x25d07d["push"](
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x22\x20style=\x22cursor:pointer;\x22\x20onclick=\x22mostrarProductoPromocion(\x27" +
          _0x53da5d[_0x21e6cb(0x1d3)] +
          _0x21e6cb(0x26f) +
          _0x53da5d["pr_name"] +
          "\x22>" +
          _0x53da5d[_0x21e6cb(0x2f0)] +
          _0x21e6cb(0x36e) +
          _0x3734a9 +
          _0x21e6cb(0x211) +
          _0x4ad228[_0x21e6cb(0x125)](0x2) +
          "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20" +
          _0x53da5d[_0x21e6cb(0x1d3)] +
          "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"
      );
    } catch (_0x1daf57) {
      console[_0x21e6cb(0x161)](
        _0x21e6cb(0xf5) + _0x53da5d[_0x21e6cb(0x1d3)] + ":",
        _0x1daf57
      );
    }
  }
  (resultadoDiv["innerHTML"] =
    _0x21e6cb(0x106) +
    _0x4a59eb[_0x21e6cb(0x155)] +
    "\x20encontrados</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong></small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    _0x25d07d[_0x21e6cb(0x38b)]("") +
    _0x21e6cb(0x319) +
    (_0x4a59eb[_0x21e6cb(0x155)] > 0x14
      ? _0x21e6cb(0x1d8) +
        (_0x4a59eb[_0x21e6cb(0x155)] - 0x14) +
        _0x21e6cb(0x139)
      : "") +
    _0x21e6cb(0x1ad)),
    renderHistorial();
}
window[_0x930223(0x2e5)] = async function (_0x14ad3a) {
  const _0x12fab6 = _0x930223,
    _0x50348c = await getAllProductos(),
    _0x56beba = _0x50348c[_0x12fab6(0x21b)](
      (_0x45c39a) =>
        _0x45c39a[_0x12fab6(0x1d3)] === _0x14ad3a ||
        _0x45c39a["pr_gtin"] === _0x14ad3a
    );
  if (_0x56beba) {
    mostrarDetalleProducto(_0x56beba);
    const _0x8fa840 = {
      ..._0x56beba,
      FECHA_ESCANEO: new Date()[_0x12fab6(0x24a)](),
    };
    historial[_0x12fab6(0xdb)](_0x8fa840),
      setCookie(_0x12fab6(0x317), JSON["stringify"](historial), 0x1e),
      renderHistorial();
  }
};
const urlBase = _0x930223(0xed),
  urlBaseConCodigos = _0x930223(0x386),
  urlPromociones = _0x930223(0xc7),
  CONFIG_ENDPOINTS = {
    productosBasicos: urlBase,
    productosConCodigos: urlBaseConCodigos,
    promociones: urlPromociones,
    usarCodigosBarras: !![],
    fallbackTiempo: 0x1388,
  };
function tiempoRelativo(_0x2337bf) {
  const _0x2cf765 = _0x930223;
  if (!_0x2337bf) return "Nunca";
  const _0x147566 = Date[_0x2cf765(0x373)](),
    _0x598df2 = Math[_0x2cf765(0x285)]((_0x147566 - _0x2337bf) / 0x3e8);
  if (_0x598df2 < 0x3c) return "Hace\x20" + _0x598df2 + _0x2cf765(0x14b);
  if (_0x598df2 < 0xe10)
    return (
      _0x2cf765(0x314) + Math["floor"](_0x598df2 / 0x3c) + _0x2cf765(0x112)
    );
  if (_0x598df2 < 0x15180)
    return (
      "Hace\x20" + Math[_0x2cf765(0x285)](_0x598df2 / 0xe10) + _0x2cf765(0x3a2)
    );
  return (
    _0x2cf765(0x314) +
    Math[_0x2cf765(0x285)](_0x598df2 / 0x15180) +
    _0x2cf765(0x3a4)
  );
}
function renderUltimaActualizacion() {
  const _0x3f045a = _0x930223,
    _0x4b89b4 = localStorage["getItem"]("productos_ts"),
    _0x3ab864 = localStorage[_0x3f045a(0x321)]("promociones_ts");
  let _0x3316cd = "Nunca\x20actualizado";
  if (_0x4b89b4 && _0x3ab864) {
    const _0x36cf74 = tiempoRelativo(Number(_0x4b89b4)),
      _0x3241d7 = tiempoRelativo(Number(_0x3ab864)),
      _0x4703dd = Math[_0x3f045a(0x2a4)](Number(_0x4b89b4) - Number(_0x3ab864));
    _0x4703dd < 0xea60
      ? (_0x3316cd = "Última\x20actualización:\x20" + _0x36cf74)
      : (_0x3316cd =
          _0x3f045a(0x180) + _0x36cf74 + _0x3f045a(0x19e) + _0x3241d7);
  } else {
    if (_0x4b89b4)
      _0x3316cd =
        _0x3f045a(0x180) +
        tiempoRelativo(Number(_0x4b89b4)) +
        "\x20|\x20Promociones:\x20nunca";
    else
      _0x3ab864 &&
        (_0x3316cd =
          "Productos:\x20nunca\x20|\x20Promociones:\x20" +
          tiempoRelativo(Number(_0x3ab864)));
  }
  ultimaActualizacionSpan[_0x3f045a(0x249)] = _0x3316cd;
}
function actualizarProgreso(_0x7e535a, _0x2adb3d, _0x346abc = "") {
  const _0x3272b6 = _0x930223,
    _0x1f5526 = Math[_0x3272b6(0x2e6)](
      0x64,
      Math[_0x3272b6(0x318)](0x0, _0x7e535a)
    ),
    _0x175825 =
      _0x7e535a >= 0x64
        ? _0x3272b6(0xf1)
        : _0x7e535a >= 0x32
        ? "success"
        : _0x3272b6(0x2cf);
  mensajeActualizacion["innerHTML"] =
    _0x3272b6(0x2b8) +
    _0x2adb3d +
    _0x3272b6(0x27a) +
    _0x7e535a +
    _0x3272b6(0x17b) +
    _0x175825 +
    _0x3272b6(0x202) +
    _0x1f5526 +
    _0x3272b6(0x19c) +
    _0x7e535a +
    _0x3272b6(0x23d) +
    (_0x346abc
      ? "<small\x20class=\x22text-muted\x20mt-1\x20d-block\x22>" +
        _0x346abc +
        _0x3272b6(0x16f)
      : "") +
    _0x3272b6(0x1ad);
}
async function actualizarTodosLosDatos() {
  const _0x9251e2 = _0x930223;
  console[_0x9251e2(0xb7)](_0x9251e2(0x377)),
    (btnActualizar[_0x9251e2(0x388)] = !![]),
    (btnTexto[_0x9251e2(0x249)] = _0x9251e2(0x14a)),
    btnSpinner[_0x9251e2(0x1db)][_0x9251e2(0x134)](_0x9251e2(0x238));
  const _0x5c3548 = Date["now"]();
  let _0x142bfa = ![],
    _0x5ae0cc = ![];
  const _0x563c8d = () => {
    const _0x284c3d = _0x9251e2;
    let _0x36d642 = 0x0,
      _0x220863 = _0x284c3d(0xb8),
      _0x293dc4 = "";
    if (!_0x142bfa && !_0x5ae0cc)
      (_0x36d642 = 0xa),
        (_0x220863 = "Consultando\x203\x20endpoints..."),
        (_0x293dc4 = _0x284c3d(0x293));
    else {
      if (_0x142bfa && !_0x5ae0cc)
        (_0x36d642 = 0x46),
          (_0x220863 = _0x284c3d(0x366)),
          (_0x293dc4 = _0x284c3d(0xd3));
      else {
        if (!_0x142bfa && _0x5ae0cc)
          (_0x36d642 = 0x46),
            (_0x220863 = _0x284c3d(0x38a)),
            (_0x293dc4 = _0x284c3d(0xe5));
        else {
          _0x36d642 = 0x64;
          const _0x17eb8b = ((Date[_0x284c3d(0x373)]() - _0x5c3548) / 0x3e8)[
            _0x284c3d(0x125)
          ](0x1);
          (_0x220863 = _0x284c3d(0x135)),
            (_0x293dc4 = _0x284c3d(0xcc) + _0x17eb8b + "\x20segundos");
        }
      }
    }
    actualizarProgreso(_0x36d642, _0x220863, _0x293dc4);
  };
  _0x563c8d();
  try {
    await new Promise((_0x1a7005) => setTimeout(_0x1a7005, 0xc8)),
      actualizarProgreso(0x19, _0x9251e2(0x32a), _0x9251e2(0x303));
    const _0x31a233 = cargarProductosRapido()["then"]((_0x59a6cb) => {
        return (_0x142bfa = !![]), _0x563c8d(), _0x59a6cb;
      }),
      _0x4a97fc = cargarPromocionesRapido()[_0x9251e2(0x1bc)]((_0x53b9bc) => {
        return (_0x5ae0cc = !![]), _0x563c8d(), _0x53b9bc;
      });
    setTimeout(() => {
      (!_0x142bfa || !_0x5ae0cc) &&
        actualizarProgreso(
          0x32,
          "Descargando\x20desde\x20múltiples\x20endpoints...",
          "Básicos,\x20códigos\x20de\x20barras\x20y\x20promociones"
        );
    }, 0x3e8);
    const [_0x3afd5e, _0x31760c] = await Promise[_0x9251e2(0x287)]([
        _0x31a233,
        _0x4a97fc,
      ]),
      _0x13e39a = ((Date[_0x9251e2(0x373)]() - _0x5c3548) / 0x3e8)[
        _0x9251e2(0x125)
      ](0x1);
    console["log"](
      "⚡\x20Actualización\x20completada\x20en\x20" + _0x13e39a + "s"
    );
    const _0x4d7808 = _0x3afd5e[_0x9251e2(0x38e)] === _0x9251e2(0xeb),
      _0x1fc2cf = _0x31760c[_0x9251e2(0x38e)] === _0x9251e2(0xeb);
    if (_0x4d7808 && _0x1fc2cf) {
      const _0x5159be = _0x3afd5e["value"]?.["productos"] || 0x0,
        _0x509718 = _0x31760c["value"]?.["promociones"] || 0x0,
        _0x144886 = _0x3afd5e[_0x9251e2(0x261)]?.["detalles"] || "",
        _0x4014ee = _0x31760c[_0x9251e2(0x261)]?.["detalles"] || "";
      actualizarProgreso(
        0x64,
        "✅\x20Todos\x20los\x20endpoints\x20consultados",
        _0x5159be +
          _0x9251e2(0x23b) +
          _0x144886 +
          "),\x20" +
          _0x509718 +
          _0x9251e2(0x2e3) +
          _0x4014ee +
          _0x9251e2(0x39f) +
          _0x13e39a +
          "s"
      );
    } else
      _0x4d7808 || _0x1fc2cf
        ? actualizarProgreso(
            0x4b,
            _0x9251e2(0x1af),
            "Algunos\x20endpoints\x20fallaron\x20(" + _0x13e39a + "s)"
          )
        : actualizarProgreso(
            0x19,
            "❌\x20Error\x20consultando\x20endpoints",
            _0x9251e2(0x270) + _0x13e39a + "s)"
          );
    _0x3afd5e[_0x9251e2(0x38e)] === _0x9251e2(0x38f) &&
      console[_0x9251e2(0x2df)](
        "Error\x20al\x20cargar\x20productos:",
        _0x3afd5e[_0x9251e2(0xea)]
      ),
      _0x31760c["status"] === _0x9251e2(0x38f) &&
        console["error"](_0x9251e2(0x11f), _0x31760c[_0x9251e2(0xea)]);
  } catch (_0x420672) {
    console[_0x9251e2(0x2df)](_0x9251e2(0x2a9), _0x420672),
      actualizarProgreso(0x0, _0x9251e2(0x23c), _0x9251e2(0xf4));
  } finally {
    (btnActualizar[_0x9251e2(0x388)] = ![]),
      (btnTexto["textContent"] = _0x9251e2(0x1ae)),
      btnSpinner[_0x9251e2(0x1db)][_0x9251e2(0x338)]("d-none"),
      setTimeout(() => {
        const _0x26aefb = _0x9251e2;
        (mensajeActualizacion[_0x26aefb(0x249)] = ""),
          renderUltimaActualizacion();
      }, 0xfa0);
  }
}
async function cargarProductosRapido() {
  const _0xb00f54 = _0x930223,
    _0x441703 = Date["now"]();
  if (!navigator[_0xb00f54(0x1a3)]) throw new Error(_0xb00f54(0x160));
  let _0x1cd0d1 = [],
    _0x4d2cda = [];
  console[_0xb00f54(0xb7)](_0xb00f54(0x367));
  if (CONFIG_ENDPOINTS["usarCodigosBarras"])
    try {
      const _0xfcc459 =
        CONFIG_ENDPOINTS[_0xb00f54(0x181)] + _0xb00f54(0x344) + _0x441703;
      console[_0xb00f54(0xb7)](_0xb00f54(0x30b));
      const _0x461abc = await Promise[_0xb00f54(0x29d)]([
        fetch(_0xfcc459, {
          cache: _0xb00f54(0x118),
          mode: "cors",
          headers: {
            Accept: _0xb00f54(0x291),
            "Content-Type": _0xb00f54(0x291),
          },
        }),
        new Promise((_0x23f5c3, _0x341ef8) =>
          setTimeout(
            () => _0x341ef8(new Error(_0xb00f54(0x332))),
            CONFIG_ENDPOINTS[_0xb00f54(0x2d2)]
          )
        ),
      ]);
      if (_0x461abc["ok"]) {
        const _0x5049ec = await _0x461abc[_0xb00f54(0x19f)]();
        _0x5049ec[_0xb00f54(0xf1)] && _0x5049ec[_0xb00f54(0x1cd)]
          ? ((_0x1cd0d1 = _0x5049ec[_0xb00f54(0x1cd)]),
            _0x4d2cda[_0xb00f54(0x156)]("códigos\x20de\x20barras\x20✅"),
            console[_0xb00f54(0xb7)](
              _0xb00f54(0x228),
              _0x5049ec["productos"][_0xb00f54(0x155)]
            ))
          : _0x4d2cda["push"](_0xb00f54(0x271));
      } else
        _0x4d2cda[_0xb00f54(0x156)](
          _0xb00f54(0x2e8) + _0x461abc[_0xb00f54(0x38e)] + ")"
        );
    } catch (_0x5d05bf) {
      console[_0xb00f54(0x161)](_0xb00f54(0x13f), _0x5d05bf[_0xb00f54(0xe2)]),
        _0x5d05bf[_0xb00f54(0xe2)][_0xb00f54(0x219)](_0xb00f54(0x17c)) ||
        _0x5d05bf[_0xb00f54(0xe2)][_0xb00f54(0x219)](_0xb00f54(0x269))
          ? (_0x4d2cda["push"](_0xb00f54(0x28e)),
            console[_0xb00f54(0xb7)](_0xb00f54(0x199)))
          : _0x4d2cda[_0xb00f54(0x156)](
              "códigos\x20de\x20barras\x20❌\x20(timeout/error)"
            );
    }
  try {
    const _0x4a7a02 =
      CONFIG_ENDPOINTS["productosBasicos"] + _0xb00f54(0x344) + _0x441703;
    console[_0xb00f54(0xb7)](_0xb00f54(0x29c));
    const _0x528d54 = await fetch(_0x4a7a02, { cache: _0xb00f54(0x118) });
    if (_0x528d54["ok"]) {
      const _0x375b07 = await _0x528d54["json"](),
        _0x226b0b = Array[_0xb00f54(0x245)](_0x375b07) ? _0x375b07 : [];
      _0x1cd0d1["length"] === 0x0 &&
        _0x226b0b[_0xb00f54(0x155)] > 0x0 &&
        (_0x1cd0d1 = _0x226b0b),
        _0x4d2cda[_0xb00f54(0x156)]("básico\x20✅"),
        console[_0xb00f54(0xb7)](
          _0xb00f54(0x26b),
          _0x226b0b[_0xb00f54(0x155)],
          "productos"
        );
    } else _0x4d2cda[_0xb00f54(0x156)](_0xb00f54(0x267));
  } catch (_0x2c0276) {
    console["warn"](_0xb00f54(0x2d1), _0x2c0276[_0xb00f54(0xe2)]),
      _0x4d2cda[_0xb00f54(0x156)](_0xb00f54(0x2d0));
  }
  if (_0x1cd0d1["length"] === 0x0) throw new Error(_0xb00f54(0x23e));
  return (
    await clearProductos(),
    await saveProductos(_0x1cd0d1),
    localStorage[_0xb00f54(0x221)](_0xb00f54(0x1d0), String(_0x441703)),
    console[_0xb00f54(0xb7)](
      "📊\x20Resumen\x20endpoints\x20productos:",
      _0x4d2cda[_0xb00f54(0x38b)](",\x20")
    ),
    {
      productos: _0x1cd0d1[_0xb00f54(0x155)],
      endpoints: _0x4d2cda,
      detalles: _0x4d2cda[_0xb00f54(0x155)] + _0xb00f54(0x247),
    }
  );
}
async function cargarPromocionesRapido() {
  const _0x52e790 = _0x930223;
  console[_0x52e790(0xb7)](
    "🔄\x20Consultando\x20endpoint\x20de\x20promociones..."
  );
  const _0x586b3c = await fetch(CONFIG_ENDPOINTS["promociones"], {
    cache: _0x52e790(0x118),
    headers: { Accept: _0x52e790(0x291), "Content-Type": _0x52e790(0x291) },
  });
  if (!_0x586b3c["ok"])
    throw new Error(_0x52e790(0x1c7) + _0x586b3c[_0x52e790(0x38e)]);
  const _0x2a6a62 = await _0x586b3c[_0x52e790(0x19f)]();
  if (
    _0x2a6a62[_0x52e790(0xf1)] &&
    _0x2a6a62[_0x52e790(0x122)] &&
    _0x2a6a62["data"][_0x52e790(0x361)]
  ) {
    const _0x232065 = _0x2a6a62["data"][_0x52e790(0x361)];
    console["log"](
      _0x52e790(0x113) + _0x232065[_0x52e790(0x155)] + "\x20promociones"
    );
    try {
      await clearPromociones(), await savePromociones(_0x232065);
      const _0x5573f3 = Date["now"]();
      localStorage["setItem"]("promociones_ts", String(_0x5573f3)),
        console[_0x52e790(0xb7)](_0x52e790(0x2ef));
    } catch (_0x1cd410) {
      console[_0x52e790(0x2df)](
        "❌\x20Error\x20guardando\x20promociones\x20en\x20IndexedDB:",
        _0x1cd410
      );
    }
    return {
      promociones: _0x232065[_0x52e790(0x155)],
      detalles: "promociones\x20✅",
    };
  } else throw new Error(_0x52e790(0x110));
}
btnActualizar[_0x930223(0x1f5)](_0x930223(0x2d4), actualizarTodosLosDatos),
  renderUltimaActualizacion(),
  setInterval(renderUltimaActualizacion, 0xea60),
  openDB()[_0x930223(0x1bc)](async (_0x49b96c) => {
    const _0x4079ec = _0x930223,
      _0xd3e83f = _0x49b96c[_0x4079ec(0x154)](DB_STORE, _0x4079ec(0x239)),
      _0x406545 = _0xd3e83f[_0x4079ec(0x120)](DB_STORE),
      _0x4320b1 = _0x406545[_0x4079ec(0x374)](),
      _0x47d952 = _0x49b96c[_0x4079ec(0x154)](
        DB_STORE_PROMOCIONES,
        _0x4079ec(0x239)
      ),
      _0x5e9096 = _0x47d952[_0x4079ec(0x120)](DB_STORE_PROMOCIONES),
      _0x49e8a4 = _0x5e9096[_0x4079ec(0x374)]();
    Promise[_0x4079ec(0xde)]([
      new Promise((_0x2551e2) => {
        const _0x53d0d5 = _0x4079ec;
        _0x4320b1[_0x53d0d5(0x2eb)] = () =>
          _0x2551e2(_0x4320b1[_0x53d0d5(0x259)]);
      }),
      new Promise((_0xc2f9f0) => {
        const _0x22b0f6 = _0x4079ec;
        _0x49e8a4[_0x22b0f6(0x2eb)] = () =>
          _0xc2f9f0(_0x49e8a4[_0x22b0f6(0x259)]);
      }),
    ])
      ["then"](([_0x4e0729, _0x3b460c]) => {
        const _0x4a4972 = _0x4079ec,
          _0x36311f = _0x4e0729 > 0x0,
          _0xbc6fb6 = _0x3b460c > 0x0;
        if (!_0x36311f && !_0xbc6fb6)
          console[_0x4a4972(0xb7)](_0x4a4972(0x1c6)), actualizarTodosLosDatos();
        else {
          if (!_0x36311f)
            console["log"](_0x4a4972(0x34e)), actualizarTodosLosDatos();
          else
            !_0xbc6fb6 && !datosYaCargados
              ? (console[_0x4a4972(0xb7)](_0x4a4972(0x22e)),
                cargarPromocionesRapido())
              : console[_0x4a4972(0xb7)](
                  _0x4a4972(0x1c2),
                  _0x4e0729,
                  _0x4a4972(0xf8),
                  _0x3b460c
                );
        }
        datosYaCargados = !![];
      })
      [_0x4079ec(0x214)]((_0x18f89a) => {
        const _0x46688b = _0x4079ec;
        console[_0x46688b(0x2df)](_0x46688b(0x230), _0x18f89a),
          actualizarTodosLosDatos(),
          (datosYaCargados = !![]);
      });
  });
let historial = [];
const historialCookie = getCookie(_0x930223(0x317));
if (historialCookie)
  try {
    historial = JSON[_0x930223(0x20b)](historialCookie);
  } catch (_0x2ce837) {
    historial = [];
  }
function renderClearButton() {
  const _0x40b942 = _0x930223;
  return _0x40b942(0x182);
}
function renderHistorial() {
  const _0x538d9b = _0x930223;
  (historialDiv["innerHTML"] =
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    (historial["length"] > 0x0 ? renderClearButton() : "") +
    _0x538d9b(0x2af) +
    (historial[_0x538d9b(0x155)] === 0x0
      ? _0x538d9b(0x150)
      : _0x538d9b(0x1b8) +
        historial[_0x538d9b(0x2ed)]((_0x33ea74) => {
          const _0x18e340 = _0x538d9b,
            _0x2d979d =
              _0x33ea74[_0x18e340(0x2f0)] ||
              _0x33ea74[_0x18e340(0x209)] ||
              _0x18e340(0x2b1),
            _0x4b5eed =
              _0x33ea74[_0x18e340(0x1d3)] ||
              _0x33ea74[_0x18e340(0x2e4)] ||
              _0x33ea74[_0x18e340(0x1e3)] ||
              _0x33ea74["SKU"] ||
              "SKU\x20desconocido",
            _0x12023f =
              _0x33ea74[_0x18e340(0x1a6)] ||
              _0x33ea74["L1"] ||
              _0x33ea74[_0x18e340(0x262)] ||
              0x0,
            _0x2ef5ab = Math["round"](_0x12023f * 1.16 * 0x64) / 0x64,
            _0x256062 = _0x33ea74["FECHA_ESCANEO"]
              ? new Date(_0x33ea74[_0x18e340(0xd6)])[_0x18e340(0x1c9)]()
              : _0x18e340(0x349);
          return (
            _0x18e340(0x2bb) +
            _0x2d979d +
            "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20descripción\x22\x20data-copiar=\x22" +
            _0x2d979d +
            _0x18e340(0x10b) +
            _0x4b5eed +
            "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20SKU\x22\x20data-copiar=\x22" +
            _0x4b5eed +
            "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Precio:\x20$" +
            _0x2ef5ab[_0x18e340(0x125)](0x2) +
            _0x18e340(0x2cb) +
            _0x256062 +
            "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20consultar-historial-btn\x22\x20title=\x22Ver\x20detalles\x20completos\x22\x20data-sku=\x22" +
            _0x4b5eed +
            _0x18e340(0x29b)
          );
        })[_0x538d9b(0x38b)]("") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>") +
    _0x538d9b(0x226)),
    setCookie(_0x538d9b(0x317), JSON[_0x538d9b(0x2b3)](historial), 0x1e);
  const _0x5a58ee = document["getElementById"]("limpiarHistorialBtn");
  _0x5a58ee &&
    _0x5a58ee[_0x538d9b(0x1f5)]("click", () => {
      const _0x329596 = _0x538d9b;
      (historial = []),
        setCookie(_0x329596(0x317), JSON["stringify"](historial), 0x1e),
        renderHistorial();
    });
  const _0x4c9f54 = historialDiv[_0x538d9b(0x268)](_0x538d9b(0x19a));
  _0x4c9f54[_0x538d9b(0x389)]((_0x271583) => {
    const _0x3aa6a9 = _0x538d9b;
    _0x271583[_0x3aa6a9(0x1f5)](_0x3aa6a9(0x2d4), function (_0x40d4ce) {
      const _0x323b7c = _0x3aa6a9,
        _0x5d70fd = _0x271583[_0x323b7c(0x339)](_0x323b7c(0x218));
      navigator[_0x323b7c(0x333)] &&
        navigator[_0x323b7c(0x333)][_0x323b7c(0x1a4)](_0x5d70fd)["then"](() => {
          const _0x116621 = _0x323b7c;
          (_0x271583[_0x116621(0x179)] = _0x116621(0x183)),
            setTimeout(() => {
              const _0x4e0d16 = _0x116621;
              _0x271583[_0x4e0d16(0x179)] =
                "<i\x20class=\x22bi\x20bi-clipboard\x22></i>";
            }, 0x4b0);
        });
    });
  });
  const _0x28fa2b = historialDiv[_0x538d9b(0x268)](_0x538d9b(0x25a));
  _0x28fa2b["forEach"]((_0x52cb2a) => {
    const _0x1efa3b = _0x538d9b;
    _0x52cb2a[_0x1efa3b(0x1f5)]("click", function (_0x53763e) {
      const _0x1f23eb = _0x1efa3b,
        _0x99b908 = _0x52cb2a[_0x1f23eb(0x339)]("data-sku");
      consultarProductoDesdeHistorial(_0x99b908);
    });
  });
}
inputCodigo[_0x930223(0x1f5)]("keydown", function (_0x32c615) {
  const _0x4b2d28 = _0x930223;
  _0x32c615[_0x4b2d28(0x1ef)] === _0x4b2d28(0x215) &&
    (_0x32c615[_0x4b2d28(0x171)](),
    form[_0x4b2d28(0x157)](),
    setTimeout(() => {
      const _0x14e1a9 = _0x4b2d28,
        _0x470cc2 = document["getElementById"](_0x14e1a9(0x276));
      _0x470cc2 &&
        _0x470cc2[_0x14e1a9(0x2c8)]({
          behavior: _0x14e1a9(0x378),
          block: _0x14e1a9(0x210),
          inline: _0x14e1a9(0x1b1),
        });
    }, 0x12c));
}),
  form[_0x930223(0x1f5)]("submit", async (_0x4ab1ef) => {
    const _0x150845 = _0x930223;
    _0x4ab1ef[_0x150845(0x171)]();
    let _0x3352c5 = inputCodigo[_0x150845(0x261)]
      [_0x150845(0x162)]()
      ["replace"](/\s+$/, "");
    (inputCodigo["value"] = _0x3352c5),
      (resultadoDiv[_0x150845(0x179)] = ""),
      setTimeout(() => {
        const _0x591441 = _0x150845,
          _0x12ea78 = document["getElementById"](_0x591441(0x276));
        _0x12ea78 &&
          _0x12ea78["scrollIntoView"]({
            behavior: _0x591441(0x378),
            block: "start",
            inline: _0x591441(0x1b1),
          });
      }, 0x64),
      (sugerenciasDiv[_0x150845(0x179)] = ""),
      (sugerenciasDiv[_0x150845(0x252)]["display"] = _0x150845(0x298));
    if (!_0x3352c5) {
      (resultadoDiv[_0x150845(0x179)] = _0x150845(0x31e)),
        renderHistorial(),
        inputCodigo[_0x150845(0x1ee)]();
      return;
    }
    (inputCodigo["placeholder"] = ""),
      (resultadoDiv[_0x150845(0x179)] = _0x150845(0x31f));
    let _0x178ab0 = await getAllProductos(),
      _0x26efc1 = _0x178ab0[_0x150845(0x21b)]((_0x1d6f60) => {
        const _0x284fd7 = _0x150845;
        if (
          String(_0x1d6f60["pr_sku"]) === _0x3352c5 ||
          String(_0x1d6f60[_0x284fd7(0x2e4)]) === _0x3352c5
        )
          return !![];
        if (
          _0x1d6f60["codigos_barras"] &&
          Array[_0x284fd7(0x245)](_0x1d6f60[_0x284fd7(0x200)])
        )
          return _0x1d6f60[_0x284fd7(0x200)][_0x284fd7(0x35a)](
            (_0xf54ef4) => String(_0xf54ef4) === _0x3352c5
          );
        return ![];
      });
    if (_0x26efc1) {
      mostrarDetalleProducto(_0x26efc1);
      const _0x33e2a1 = {
        ..._0x26efc1,
        FECHA_ESCANEO: new Date()["toISOString"](),
      };
      historial["unshift"](_0x33e2a1),
        setCookie("historial", JSON[_0x150845(0x2b3)](historial), 0x1e),
        (inputCodigo[_0x150845(0x261)] = ""),
        inputCodigo[_0x150845(0x1ee)](),
        _0x26efc1[_0x150845(0x200)] &&
          _0x26efc1[_0x150845(0x200)][_0x150845(0x155)] > 0x1 &&
          console[_0x150845(0xb7)](
            "🎯\x20Producto\x20encontrado\x20con\x20códigos\x20múltiples:",
            {
              sku: _0x26efc1[_0x150845(0x1d3)],
              gtin_principal: _0x26efc1["pr_gtin"],
              codigo_buscado: _0x3352c5,
              todos_los_codigos: _0x26efc1["codigos_barras"],
            }
          );
    } else
      (resultadoDiv[_0x150845(0x179)] = _0x150845(0x282)),
        (inputCodigo[_0x150845(0x261)] = ""),
        inputCodigo["focus"](),
        setTimeout(() => {
          const _0x25ea1a = _0x150845;
          resultadoDiv[_0x25ea1a(0x179)] = "";
        }, 0x1388),
        console[_0x150845(0xb7)](_0x150845(0x342) + _0x3352c5 + "\x22");
    renderHistorial();
  });
async function detectarPromocionReal(_0x2e8736) {
  const _0x5b766a = _0x930223,
    _0x13592e = (_0x2e8736[_0x5b766a(0x1d3)] || "")[_0x5b766a(0x31d)]();
  try {
    let _0x2174f5 = await getAllPromociones();
    if (_0x2174f5[_0x5b766a(0x155)] === 0x0) {
      console[_0x5b766a(0xb7)](_0x5b766a(0x1ca));
      const _0x5941b6 = await fetch(_0x5b766a(0x2d8));
      if (!_0x5941b6["ok"])
        return (
          console[_0x5b766a(0xb7)](
            "Error\x20al\x20obtener\x20promociones\x20mejoradas:",
            _0x5941b6[_0x5b766a(0x38e)]
          ),
          []
        );
      const _0xef1542 = await _0x5941b6[_0x5b766a(0x19f)]();
      if (_0xef1542[_0x5b766a(0x38e)] === "SUCCESS" && _0xef1542["promoResult"])
        _0x2174f5 = _0xef1542[_0x5b766a(0x2d6)];
      else {
        if (Array[_0x5b766a(0x245)](_0xef1542)) _0x2174f5 = _0xef1542;
        else
          return (
            console[_0x5b766a(0xb7)](
              "❌\x20Formato\x20de\x20promociones\x20inválido"
            ),
            []
          );
      }
      try {
        await clearPromociones(),
          await savePromociones(_0x2174f5),
          localStorage[_0x5b766a(0x221)](
            _0x5b766a(0x313),
            String(Date[_0x5b766a(0x373)]())
          ),
          console["log"](_0x5b766a(0x149));
      } catch (_0x4a3720) {
        console[_0x5b766a(0x161)](_0x5b766a(0x34c), _0x4a3720);
      }
    } else console["log"](_0x5b766a(0x111), _0x2174f5[_0x5b766a(0x155)]);
    console["log"]("🔍\x20Buscando\x20promociones\x20para\x20SKU:", _0x13592e);
    const _0x7bdd05 = [];
    for (const _0x152d35 of _0x2174f5) {
      let _0x2db5ae = [];
      if (
        _0x152d35["skus"] &&
        Array[_0x5b766a(0x245)](_0x152d35[_0x5b766a(0x15a)])
      )
        _0x2db5ae = _0x152d35["skus"];
      else
        _0x152d35[_0x5b766a(0x244)] &&
          _0x152d35[_0x5b766a(0x244)][_0x5b766a(0x1d3)] &&
          (Array[_0x5b766a(0x245)](
            _0x152d35[_0x5b766a(0x244)][_0x5b766a(0x1d3)]
          )
            ? (_0x2db5ae = _0x152d35["pro_grupoProductos_primaria"]["pr_sku"])
            : (_0x2db5ae = _0x152d35[_0x5b766a(0x244)]["pr_sku"]
                ["split"]("\x20")
                [_0x5b766a(0x30f)]((_0x4875a9) => _0x4875a9["trim"]())));
      if (_0x2db5ae["includes"](_0x13592e)) {
        const _0x22b5a8 =
            _0x152d35[_0x5b766a(0x114)] ||
            _0x152d35["descripcion"] ||
            _0x152d35[_0x5b766a(0x1a7)] ||
            "Promoción\x20especial",
          _0x512e0e =
            _0x152d35[_0x5b766a(0x1fc)] ||
            _0x152d35[_0x5b766a(0x26a)] ||
            _0x152d35[_0x5b766a(0x105)] ||
            "",
          _0x1c92b6 =
            _0x152d35[_0x5b766a(0x1a0)] ||
            _0x152d35[_0x5b766a(0x304)] ||
            _0x152d35["price"] ||
            _0x152d35[_0x5b766a(0xdf)] ||
            _0x152d35[_0x5b766a(0x18a)] ||
            _0x152d35[_0x5b766a(0x193)] ||
            _0x152d35[_0x5b766a(0x1f9)] ||
            _0x152d35[_0x5b766a(0x190)] ||
            "";
        console[_0x5b766a(0xb7)](_0x5b766a(0x10d) + _0x13592e + ":", {
          nombre: _0x22b5a8,
          cantidad: _0x512e0e,
          precio: _0x1c92b6,
          campos_precio_disponibles: {
            pro_precioPromo: _0x152d35["pro_precioPromo"],
            precio: _0x152d35[_0x5b766a(0x304)],
            price: _0x152d35[_0x5b766a(0x2f5)],
            precioTotal: _0x152d35["precioTotal"],
            precio_total: _0x152d35["precio_total"],
            pro_precio_total: _0x152d35["pro_precio_total"],
            total_price: _0x152d35[_0x5b766a(0x1f9)],
            valor_total: _0x152d35["valor_total"],
          },
          campos_disponibles: Object[_0x5b766a(0x10c)](_0x152d35),
          promo_completa: _0x152d35,
        }),
          _0x7bdd05["push"]({
            tipo: _0x5b766a(0x2cd),
            detalle: "🔥\x20" + _0x22b5a8,
            nombre_promocion: _0x22b5a8,
            es_oficial: !![],
            fuente: _0x5b766a(0x26e),
            id_promocion: _0x152d35["idPromo"] || _0x152d35["id"],
            cantidad: _0x512e0e,
            precio: _0x1c92b6,
            mensaje:
              _0x152d35[_0x5b766a(0x167)] || _0x152d35[_0x5b766a(0x2b5)] || "",
            tipo_promo: _0x152d35[_0x5b766a(0x216)] || _0x152d35["tipo"] || "",
            vigencia:
              _0x152d35[_0x5b766a(0x29a)] && _0x152d35[_0x5b766a(0x207)]
                ? _0x152d35[_0x5b766a(0x29a)] +
                  _0x5b766a(0x116) +
                  _0x152d35[_0x5b766a(0x207)]
                : "",
            raw_data: {
              pro_cantidad_base: _0x152d35[_0x5b766a(0x1fc)],
              pro_precioPromo: _0x152d35[_0x5b766a(0x1a0)],
              pro_nombrePromo: _0x152d35[_0x5b766a(0x114)],
              todos_campos_precio: {
                pro_precioPromo: _0x152d35[_0x5b766a(0x1a0)],
                precio: _0x152d35[_0x5b766a(0x304)],
                price: _0x152d35[_0x5b766a(0x2f5)],
                precioTotal: _0x152d35[_0x5b766a(0xdf)],
                precio_total: _0x152d35[_0x5b766a(0x18a)],
                pro_precio_total: _0x152d35[_0x5b766a(0x193)],
                total_price: _0x152d35[_0x5b766a(0x1f9)],
                valor_total: _0x152d35["valor_total"],
              },
            },
          });
      }
    }
    return (
      _0x7bdd05[_0x5b766a(0x155)] === 0x0
        ? console[_0x5b766a(0xb7)](_0x5b766a(0x2bc) + _0x13592e)
        : console["log"](
            "✅\x20" +
              _0x7bdd05[_0x5b766a(0x155)] +
              _0x5b766a(0x1fd) +
              _0x13592e
          ),
      _0x7bdd05
    );
  } catch (_0x2e8f91) {
    return console[_0x5b766a(0x2df)](_0x5b766a(0x225), _0x2e8f91), [];
  }
}
function mostrarDetalleProducto(_0x212b70) {
  const _0x10e575 = _0x930223;
  let _0x38214e = "";
  if (
    _0x212b70[_0x10e575(0x1ce)] &&
    _0x212b70["pr_imagen"][_0x10e575(0x162)]() !== ""
  ) {
    if (_0x212b70[_0x10e575(0x1ce)][_0x10e575(0x2b7)](_0x10e575(0xb6)))
      _0x38214e = _0x212b70["pr_imagen"];
    else {
      let _0x533365 = _0x212b70[_0x10e575(0x1ce)][_0x10e575(0x2b7)]("/")
        ? _0x212b70[_0x10e575(0x1ce)]
        : "/" + _0x212b70["pr_imagen"];
      _0x38214e = _0x10e575(0x1eb) + _0x533365;
    }
  }
  let _0x341a6c =
      Number(_0x212b70[_0x10e575(0x1a6)]) || Number(_0x212b70["L1"]) || 0x0,
    _0x422cce = Math[_0x10e575(0x148)](_0x341a6c * 1.16 * 0x64) / 0x64,
    _0x17cc9d = 0xc,
    _0x459ffc = 0.1,
    _0x1ada8f =
      Math[_0x10e575(0x148)](_0x422cce * (0x1 + _0x459ffc) * 0x64) / 0x64,
    _0x524f19 = "";
  if (
    _0x212b70[_0x10e575(0x200)] &&
    _0x212b70[_0x10e575(0x200)][_0x10e575(0x155)] > 0x1
  ) {
    const _0x1931d5 = [...new Set(_0x212b70["codigos_barras"])][
      _0x10e575(0x30f)
    ]((_0x44c2a0) => _0x44c2a0 && _0x44c2a0[_0x10e575(0x162)]());
    _0x1931d5[_0x10e575(0x155)] > 0x1 &&
      (_0x524f19 =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x20mt-2\x22\x20style=\x22font-size:0.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Códigos\x20disponibles:</strong>\x20" +
        _0x1931d5[_0x10e575(0x38b)](",\x20") +
        _0x10e575(0x336));
  }
  renderProductoConPromociones(
    _0x212b70,
    _0x38214e,
    _0x422cce,
    _0x1ada8f,
    _0x524f19
  ),
    setTimeout(() => {
      generarCodigoBarras(_0x212b70);
    }, 0x64),
    detectarPromocionReal(_0x212b70)
      [_0x10e575(0x1bc)]((_0xf4708c) => {
        actualizarPromocionesEnVista(
          _0x212b70,
          _0x38214e,
          _0x422cce,
          _0x1ada8f,
          _0x524f19,
          _0xf4708c
        );
      })
      ["catch"]((_0x4069b3) => {
        const _0x15aee8 = _0x10e575;
        console[_0x15aee8(0x2df)](_0x15aee8(0x163), _0x4069b3),
          actualizarPromocionesEnVista(
            _0x212b70,
            _0x38214e,
            _0x422cce,
            _0x1ada8f,
            _0x524f19,
            []
          );
      });
}
function generarCodigoBarras(_0x5368c7) {
  const _0x33b7c5 = _0x930223,
    _0xe688d3 =
      _0x5368c7[_0x33b7c5(0x1d3)] || _0x5368c7[_0x33b7c5(0x2e4)] || "",
    _0x4f343e = _0x33b7c5(0x191) + _0x5368c7[_0x33b7c5(0x1d3)],
    _0x396747 = document[_0x33b7c5(0x2d7)](_0x4f343e);
  if (!_0x396747 || !_0xe688d3) {
    console[_0x33b7c5(0x161)](_0x33b7c5(0x13e));
    return;
  }
  const _0x12c6f0 = () => {
    const _0x4a17f1 = _0x33b7c5;
    if (window["JsBarcode"])
      try {
        let _0x5c6e6c = _0x4a17f1(0x38d);
        const _0x28b170 = String(_0xe688d3);
        if (_0x28b170[_0x4a17f1(0x155)] === 0xd && /^\d+$/["test"](_0x28b170))
          _0x5c6e6c = _0x4a17f1(0xc2);
        else {
          if (
            _0x28b170[_0x4a17f1(0x155)] === 0x8 &&
            /^\d+$/[_0x4a17f1(0x196)](_0x28b170)
          )
            _0x5c6e6c = _0x4a17f1(0x306);
          else
            _0x28b170[_0x4a17f1(0x155)] === 0xc &&
              /^\d+$/[_0x4a17f1(0x196)](_0x28b170) &&
              (_0x5c6e6c = "UPC");
        }
        console[_0x4a17f1(0xb7)](
          _0x4a17f1(0x174) + _0x5c6e6c + _0x4a17f1(0xe6) + _0x28b170
        ),
          JsBarcode(_0x396747, _0x28b170, {
            format: _0x5c6e6c,
            width: 0x2,
            height: 0x32,
            displayValue: ![],
            margin: 0x0,
            background: "#ffffff",
            lineColor: _0x4a17f1(0x15f),
          }),
          window[_0x4a17f1(0x235)] <= 0x300 &&
            JsBarcode(_0x396747, _0x28b170, {
              format: _0x5c6e6c,
              width: 1.5,
              height: 0x28,
              displayValue: ![],
              margin: 0x0,
              background: _0x4a17f1(0x2ad),
              lineColor: _0x4a17f1(0x15f),
            });
      } catch (_0x5e5e73) {
        console["error"](_0x4a17f1(0x258), _0x5e5e73);
        const _0x1796aa = _0x396747[_0x4a17f1(0x2f3)]("2d");
        (_0x1796aa[_0x4a17f1(0x21f)] = _0x4a17f1(0x380)),
          _0x1796aa[_0x4a17f1(0x128)](
            0x0,
            0x0,
            _0x396747[_0x4a17f1(0x33c)],
            _0x396747[_0x4a17f1(0x363)]
          ),
          (_0x1796aa[_0x4a17f1(0x21f)] = "#6c757d"),
          (_0x1796aa[_0x4a17f1(0x2a6)] = "12px\x20Arial"),
          (_0x1796aa["textAlign"] = _0x4a17f1(0x1d4)),
          _0x1796aa[_0x4a17f1(0x2d3)](
            "Código\x20no\x20válido",
            _0x396747[_0x4a17f1(0x33c)] / 0x2,
            _0x396747[_0x4a17f1(0x363)] / 0x2
          );
      }
    else setTimeout(_0x12c6f0, 0x64);
  };
  _0x12c6f0();
}
function renderProductoConPromociones(
  _0x42dc9e,
  _0x477603,
  _0x5a1807,
  _0x183643,
  _0x5e2d88
) {
  const _0x599682 = _0x930223;
  resultadoDiv[_0x599682(0x179)] =
    _0x599682(0x325) +
    (_0x477603
      ? "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-4\x20d-flex\x20justify-content-center\x20mb-3\x20mb-lg-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fff;\x20border-radius:16px;\x20box-shadow:0\x204px\x2024px\x20rgba(0,0,0,0.15);\x20padding:16px;\x20display:flex;\x20justify-content:center;\x20align-items:center;\x20width:240px;\x20height:140px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22" +
        _0x477603 +
        "\x22\x20alt=\x22" +
        _0x42dc9e[_0x599682(0x2f0)] +
        _0x599682(0x29f)
      : "") +
    _0x599682(0x1df) +
    _0x42dc9e["pr_name"] +
    _0x599682(0x15d) +
    _0x5a1807[_0x599682(0x125)](0x2) +
    _0x599682(0x1b7) +
    _0x183643[_0x599682(0x125)](0x2) +
    _0x599682(0x2ae) +
    _0x42dc9e[_0x599682(0x1d3)] +
    _0x599682(0x1c0) +
    (_0x42dc9e[_0x599682(0x1d3)] || _0x42dc9e["pr_gtin"] || _0x599682(0x28d)) +
    _0x599682(0x242) +
    _0x5e2d88 +
    _0x599682(0x17d);
}
function actualizarPromocionesEnVista(
  _0x1bd45c,
  _0x3729aa,
  _0x341b12,
  _0x1ade92,
  _0x51172b,
  _0x2e0544
) {
  const _0x245a2a = _0x930223;
  console[_0x245a2a(0xb7)](_0x245a2a(0x1b0), _0x2e0544);
  let _0x4eb5a5 = "";
  if (_0x2e0544["length"] > 0x0) {
    const _0xe87963 = _0x2e0544[_0x245a2a(0x30f)](
      (_0x278561) =>
        _0x278561[_0x245a2a(0x24d)] &&
        (_0x278561["fuente"] === _0x245a2a(0x1aa) ||
          _0x278561["fuente"] === _0x245a2a(0x26e))
    );
    console[_0x245a2a(0xb7)](_0x245a2a(0x28f), _0xe87963);
    if (_0xe87963["length"] > 0x0) {
      const _0x47daba = _0xe87963[_0x245a2a(0x2ed)]((_0x246437) => {
        const _0x4e4d12 = _0x245a2a;
        console[_0x4e4d12(0xb7)](_0x4e4d12(0x2ac), _0x246437);
        const _0x175fd9 =
          _0x246437[_0x4e4d12(0x26a)] || _0x246437["pro_cantidad_base"] || "";
        let _0x296c67 =
          _0x246437[_0x4e4d12(0x304)] || _0x246437["pro_precioPromo"] || "";
        const _0x5a5650 =
          _0x246437["nombre_promocion"] || _0x246437[_0x4e4d12(0x114)] || "";
        console[_0x4e4d12(0xb7)](_0x4e4d12(0x12e), {
          cantidad: _0x175fd9,
          precio: _0x296c67,
          nombrePromo: _0x5a5650,
        });
        if (_0x175fd9 && _0x296c67) {
          const _0x1cd2a3 = parseInt(_0x175fd9),
            _0x5c5eec = parseFloat(_0x296c67);
          if (!isNaN(_0x1cd2a3) && !isNaN(_0x5c5eec)) {
            const _0x2c674c = _0x1cd2a3 * _0x5c5eec,
              _0x584fa8 = Math[_0x4e4d12(0x148)](_0x2c674c);
            console["log"](
              "🧮\x20Calculando\x20precio\x20total:\x20" +
                _0x1cd2a3 +
                _0x4e4d12(0x1a5) +
                _0x5c5eec +
                _0x4e4d12(0xe4) +
                _0x2c674c +
                _0x4e4d12(0x165) +
                _0x584fa8 +
                _0x4e4d12(0x1ba)
            ),
              (_0x296c67 = _0x584fa8["toString"]());
          }
        }
        console[_0x4e4d12(0xb7)](
          "📊\x20Datos\x20finales\x20para\x20construcción:",
          { cantidad: _0x175fd9, precio: _0x296c67, nombrePromo: _0x5a5650 }
        );
        let _0x3a5e88 = "";
        if (_0x175fd9 && _0x296c67)
          (_0x3a5e88 = _0x175fd9 + "x" + _0x296c67),
            console["log"](_0x4e4d12(0xc5), _0x3a5e88);
        else {
          if (_0x5a5650) {
            const _0x33dc1d = _0x5a5650[_0x4e4d12(0x1e0)](
                /(\d+)\s*[xX×]\s*(\d+)/i
              ),
              _0x3e801f = _0x5a5650[_0x4e4d12(0x1e0)](
                /(\d+)\s*[xX×]\s*\$?\s*(\d+)/i
              ),
              _0x14bc90 = _0x5a5650[_0x4e4d12(0x1e0)](/(\d+)\s*[xX×]/i);
            if (_0x33dc1d)
              (_0x3a5e88 = _0x33dc1d[0x1] + "x" + _0x33dc1d[0x2]),
                console["log"](_0x4e4d12(0x1da), _0x3a5e88);
            else {
              if (_0x3e801f)
                (_0x3a5e88 = _0x3e801f[0x1] + "x" + _0x3e801f[0x2]),
                  console[_0x4e4d12(0xb7)](_0x4e4d12(0x343), _0x3a5e88);
              else
                _0x14bc90
                  ? ((_0x3a5e88 = _0x14bc90[0x1] + "x"),
                    console[_0x4e4d12(0xb7)](_0x4e4d12(0x1b4), _0x3a5e88))
                  : ((_0x3a5e88 = _0x5a5650),
                    console[_0x4e4d12(0xb7)](_0x4e4d12(0x16e), _0x3a5e88));
            }
          } else
            (_0x3a5e88 = _0x4e4d12(0x11d)),
              console[_0x4e4d12(0xb7)](
                "❌\x20Sin\x20datos,\x20usando\x20genérico"
              );
        }
        return _0x4e4d12(0x13a) + _0x3a5e88 + _0x4e4d12(0x35e);
      })[_0x245a2a(0x38b)]("");
      _0x4eb5a5 = _0x245a2a(0x1f3) + _0x47daba + _0x245a2a(0xdd);
    } else
      _0x4eb5a5 =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
  } else _0x4eb5a5 = _0x245a2a(0x107);
  const _0x34d55f = document[_0x245a2a(0x2d7)](_0x245a2a(0xba));
  _0x34d55f && (_0x34d55f["innerHTML"] = _0x4eb5a5);
}
function _0x4b0d() {
  const _0x57fa66 = [
    "textContent",
    "toISOString",
    "btn-outline-primary",
    "auto",
    "es_oficial",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    ".modal-content",
    "verificadorB9DB",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "style",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🚫\x20Vision\x20API\x20No\x20Habilitada</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20Vision\x20API\x20no\x20está\x20habilitada\x20en\x20tu\x20proyecto</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/apis/library/vision.googleapis.com\x22\x20target=\x22_blank\x22>Habilitar\x20Vision\x20API</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "📱\x20Cerrando\x20modal\x20móvil...",
    "200px",
    "\x22\x20formato:\x20",
    "usarCodigosBarras",
    "Error\x20generando\x20código\x20de\x20barras:",
    "result",
    ".consultar-historial-btn",
    "1085830bFATqC",
    "<small\x20class=\x22text-success\x22><strong>Precio\x20unitario:</strong>\x20$",
    "🌐\x20<strong>Backend:</strong>\x20",
    "fixed",
    "display",
    ";\x20path=/",
    "value",
    "PRECIO",
    "<div\x20class=\x22alert\x20alert-danger\x22>❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API</div>",
    "image/png",
    "\x22\x20style=\x22width:40px;\x20height:40px;\x20object-fit:cover;\x20border-radius:4px;\x20margin-right:12px;\x20background:#f8f9fa;\x22>",
    "promocionesGeneralesModal",
    "básico\x20❌\x20(error\x20HTTP)",
    "querySelectorAll",
    "Failed\x20to\x20fetch",
    "cantidad",
    "✅\x20Endpoint\x20básico\x20consultado:",
    "code_39",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x20",
    "indexeddb_local",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "Todos\x20los\x20endpoints\x20fallaron\x20(",
    "códigos\x20de\x20barras\x20⚠️\x20(sin\x20datos)",
    "\x0a\x20\x20/*\x20Estilos\x20específicos\x20para\x20modal\x20en\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20/*\x20Evitar\x20oscurecimiento\x20de\x20fondo\x20en\x20móviles\x20*/\x0a\x20\x20\x20\x20.modal-backdrop,\x0a\x20\x20\x20\x20.modal-backdrop.show,\x0a\x20\x20\x20\x20.modal-backdrop.fade\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20stretch\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20flex:\x201\x20!important;\x0a\x20\x20\x20\x20\x20\x20overflow-y:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-height:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding:\x201rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-footer\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20Asegurar\x20que\x20las\x20tarjetas\x20no\x20causen\x20overflow\x20horizontal\x20*/\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.row\x20{\x0a\x20\x20\x20\x20\x20\x20margin-left:\x20-8px\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin-right:\x20-8px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20[class*=\x22col-\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20padding-left:\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding-right:\x208px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Mejorar\x20scroll\x20en\x20todos\x20los\x20dispositivos\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0,\x200,\x200)\x20!important;\x20/*\x20Forzar\x20aceleración\x20por\x20hardware\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "📋\x20Datos\x20de\x20promociones:",
    "🎯\x20Umbral\x20calculado:\x20",
    "resultado",
    "spellcheck",
    "🔧\x20Error\x20500:\x20Problema\x20interno\x20del\x20servidor",
    "userAgent",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "onupgradeneeded",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22verPromociones()\x22\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "942mPHyoL",
    ".alert-danger",
    "revokeObjectURL",
    "✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente",
    "getInstance",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontró\x20el\x20código\x20ingresado</div>",
    "aztec",
    "UPC_E",
    "floor",
    "📸\x20Usando\x20Quagga\x20como\x20fallback",
    "allSettled",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Actualizado:</strong>\x20",
    "#btnTexto",
    "#btnActualizar",
    "❌\x20Error\x20específico\x20del\x20backend:",
    "monthlyUsed",
    "N/A",
    "códigos\x20de\x20barras\x20❌\x20(CORS/Red)",
    "🏷️\x20Promociones\x20oficiales\x20filtradas:",
    "🎯\x20Mejor\x20código\x20seleccionado:\x20\x22",
    "application/json",
    "4059270UKiJAm",
    "Productos\x20básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "🔄\x20Service\x20Worker\x20actualizado",
    "flexDirection",
    "alternativa",
    "🔧\x20Error\x20500\x20detectado\x20-\x20Analizando\x20causa\x20específica:",
    "none",
    "button",
    "validFrom",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "🔄\x20Consultando\x20endpoint\x20básico...",
    "race",
    "\x27)\x22\x20title=\x22Ver\x20detalles\x20completos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20style=\x22width:218px;\x20height:124px;\x20object-fit:contain;\x20background:#fff;\x20border-radius:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "autocorrect",
    "webkitOverflowScrolling",
    "Modal",
    "<br><br>📊\x20<strong>Uso\x20local:</strong>\x20",
    "abs",
    "1055",
    "font",
    "prompt",
    "substring",
    "Error\x20en\x20actualización:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "mediaDevices",
    "🔍\x20Datos\x20de\x20promoción\x20recibidos:",
    "#ffffff",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>MSI</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Código\x20de\x20barras\x20funcional\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22barcode-",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "🆕\x20Nueva\x20versión\x20lista\x20para\x20usar",
    "Producto\x20desconocido",
    "createElement",
    "stringify",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20",
    "mensaje",
    "block",
    "startsWith",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-medium\x22>",
    "oncomplete",
    "files",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "❌\x20No\x20hay\x20promociones\x20para\x20SKU:\x20",
    "code_128_reader",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "d-flex\x20flex-column\x20align-items-center\x20mb-3",
    "body",
    "\x20usos\x20hoy",
    "format",
    "PDF_417",
    "https://contador-apicloudvision.vercel.app/api/vision-detect",
    "overflow",
    "srcObject",
    "🔥\x20",
    "scrollIntoView",
    "environment",
    "❌\x20Error\x20en\x20diagnóstico:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "code_93_reader",
    "promoción\x20oficial",
    "</div>",
    "primary",
    "básico\x20❌\x20(error)",
    "⚠️\x20Error\x20con\x20endpoint\x20básico:",
    "fallbackTiempo",
    "fillText",
    "click",
    "clear",
    "promoResult",
    "getElementById",
    "https://verificadorb9-backend.vercel.app/api/promociones-mejoradas",
    "src",
    "upc_a",
    "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "backgroundColor",
    "\x20\x20\x20Posibles\x20causas:",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20",
    "error",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-check\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22form-check-input\x22\x20type=\x22checkbox\x22\x20id=\x22enabledCheck\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "JsBarcode",
    "📸\x20Preparando\x20imagen\x20para\x20Google\x20Vision...",
    "\x20promociones\x20(",
    "pr_gtin",
    "mostrarProductoPromocion",
    "min",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22",
    "códigos\x20de\x20barras\x20❌\x20(HTTP\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "code_93",
    "onsuccess",
    "⚠️\x20Backend\x20responde\x20pero\x20con\x20error:",
    "map",
    "📊\x20<strong>Uso\x20local\x20de\x20este\x20dispositivo:</strong><br>",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB",
    "pr_name",
    "•\x20Mensual:\x20",
    "⚠️\x20API\x20nativa\x20no\x20detectó\x20códigos\x20válidos",
    "getContext",
    "ean_reader",
    "price",
    "show",
    "✅\x20Google\x20Vision\x20API\x20usada\x20exitosamente\x20-\x20contador\x20local\x20actualizado",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-light\x20text-dark\x20me-1\x20mb-1\x22\x20style=\x22font-size:\x200.7rem;\x22>",
    "\x20me-1\x20mb-1\x22\x20style=\x22font-size:0.75rem;\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x22\x20style=\x22min-width:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "querySelector",
    "💻\x20Abriendo\x20modal\x20en\x20desktop...",
    "change",
    "controller",
    "drawImage",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "upc_e_reader",
    "code_39_vin_reader",
    "Conectando\x20con\x20todos\x20los\x20servidores",
    "precio",
    "setAttribute",
    "EAN8",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22consultarProductoDesdeModal(\x27",
    "resetMonthlyUsage",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "🔄\x20Consultando\x20endpoint\x20con\x20códigos\x20de\x20barras...",
    "\x22\x20alt=\x22",
    "cookie",
    "❌\x20Instalación\x20rechazada",
    "filter",
    "30aRSAys",
    "📊\x20Status\x20HTTP:",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20Error\x20verificando\x20estado",
    "promociones_ts",
    "Hace\x20",
    "maxWidth",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📋\x20Descripción\x20completa\x20de\x20productos:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-3\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "historial",
    "max",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-decoration-line-through\x20text-muted\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>$",
    "modal-open",
    "onerror",
    "toString",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "es-CL",
    "getItem",
    "🍎\x20Dispositivo\x20iOS:",
    "diagnostico-resultado",
    "<span\x20class=\x22badge\x20",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22row\x20align-items-center\x20justify-content-center\x20g-0\x20mb-4\x22\x20style=\x22padding:\x200px\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "margin",
    "AZTEC",
    "500",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x20text-muted\x20small\x22>",
    "Consultando\x20los\x203\x20endpoints...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22\x20style=\x22font-size:\x200.9rem;\x20line-height:\x201.2;\x22>",
    "No\x20especificado",
    "🔄\x20Probando\x20configuración\x20alternativa...",
    "fileInput",
    "ean_8",
    "imageSmoothingEnabled",
    "pdf417",
    "Timeout",
    "clipboard",
    "\x0a\x20\x20\x20\x20</div>",
    "data-sku",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "dailyUsed",
    "add",
    "getAttribute",
    "ean_8_reader",
    "upc_e",
    "width",
    "code_39_reader",
    "autocapitalize",
    "monthlyCount",
    "✅\x20Código\x20detectado\x20(configuración\x20principal):",
    "principal",
    "❌\x20Código\x20no\x20encontrado:\x20\x22",
    "✅\x20Extraído\x20formato\x20con\x20peso\x20del\x20nombre:",
    "?t=",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20",
    "appendChild",
    "text",
    "❌\x20Todas\x20las\x20configuraciones\x20fallaron",
    "Fecha\x20desconocida",
    "<br>",
    "UPC_A",
    "⚠️\x20Error\x20guardando\x20promociones:",
    ".modal-body",
    "🔄\x20Sin\x20productos:\x20cargando\x20productos\x20y\x20promociones...",
    "ITF",
    "data_matrix",
    "❌\x20Error\x20con\x20API\x20nativa,\x20usando\x20fallback:",
    "🔄\x20Backend\x20no\x20disponible,\x20usando\x20detección\x20local",
    "slice",
    "border",
    "<div\x20class=\x22text-center\x20text-muted\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-box-seam\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x20mb-0\x22>Productos\x20no\x20disponibles</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "applyConstraints",
    "17188380whNipI",
    "createObjectURL",
    "✅\x20Detección\x20avanzada\x20(backend)\x20configurada\x20y\x20activa",
    "some",
    "🔑\x20PROBLEMA:\x20API\x20Key\x20inválida",
    "getMonth",
    "⚠️\x20Límite\x20local\x20alcanzado.\x20Mensual:\x20",
    "</span>",
    "details",
    "\x20-\x20",
    "promociones",
    "bg-success",
    "height",
    "SKIP_WAITING",
    "btn-success",
    "2\x20endpoints\x20completados,\x20finalizando...",
    "📡\x20Consultando\x20TODOS\x20los\x20endpoints\x20de\x20productos...",
    "code_32_reader",
    "code_128",
    "toDataURL",
    ".modal-dialog",
    "⚠️\x20BarcodeDetector\x20no\x20disponible\x20en\x20este\x20navegador",
    "findIndex",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>",
    "Backend\x20no\x20disponible\x20-\x20usando\x20detección\x20local",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22height:\x2080px;\x20object-fit:\x20contain;\x20padding:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "remainingDaily",
    "now",
    "count",
    "EAN_13",
    "getUsageStatus",
    "🚀\x20Iniciando\x20actualización\x20con\x20progreso...",
    "smooth",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Con\x20códigos\x20adicionales:</strong>\x20",
    "Google\x20Vision\x20API\x20activa\x20y\x20funcional",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Endpoint\x20/api/stats\x20falló:\x20",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "CODABAR",
    "🏦\x20PROBLEMA:\x20Facturación\x20no\x20habilitada\x20en\x20el\x20proyecto\x20correcto",
    "#f8f9fa",
    "sort",
    "consultarProductoDesdeHistorial",
    "flex",
    "false",
    "enabled",
    "https://verificadorb9-backend.vercel.app/api/productos-con-codigos",
    "Promoción\x20",
    "disabled",
    "forEach",
    "1\x20endpoint\x20completado,\x20finalizando...",
    "join",
    "parentNode",
    "CODE128",
    "status",
    "rejected",
    "updatefound",
    "promociones-generales-modal-body",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-light\x20rounded\x22\x20style=\x22min-width:\x2060px;\x20height:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-image\x20text-muted\x22\x20style=\x22font-size:\x201.5rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "CANTIDAD_X_PRECIO_FIJO",
    "target",
    "\x20más</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "fire",
    "onclick",
    "sugerenciasDiv",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-img-top\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-secondary\x22\x20style=\x22height:\x2080px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-white\x22>📦</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20<strong>Límite\x20cerca:</strong>\x20",
    "📋\x20Probando\x20configuración:\x20",
    "🏦\x20Error\x20de\x20facturación:\x20Habilita\x20billing\x20en\x20Google\x20Cloud",
    "1383KTNiwV",
    "🎯\x20Consultando\x20promociones...",
    ")\x20-\x20",
    "disconnect",
    "\x0a<button\x20type=\x22button\x22\x20id=\x22btnPromociones\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x20mb-4\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#28a745;\x20background:#d4edda;\x20color:#155724;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x20margin-left:20px;\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🏷️\x20Ver\x20Promociones\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20w-100\x20mb-2\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20flex-column\x20flex-md-row\x20align-items-md-end\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20<h5\x20class=\x22ant-typography\x20css-1r8qqf1\x20mb-0\x22>Productos</h5>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22ultimaActualizacion\x22\x20class=\x22ant-typography\x20css-1r8qqf1\x20ms-md-4\x22\x20style=\x22font-size:1rem;\x22>Última\x20actualización:\x20nunca\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnActualizar\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#d9d9d9;\x20background:#fff;\x20color:#222;\x20font-size:1rem;\x20padding:2px\x2016px;\x20margin-left:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnTexto\x22>Actualizar</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20id=\x22mensajeActualizacion\x22\x20class=\x22text-center\x22\x20style=\x22min-height:\x201.5rem;\x22></div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20promociones\x20generales\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22promocionesGeneralesModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22promocionesGeneralesModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22promocionesGeneralesModalLabel\x22>🏷️\x20Todas\x20las\x20Promociones\x20Disponibles</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22promociones-generales-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones...</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20me-auto\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "\x20horas",
    "monthlyLimit",
    "\x20días",
    "\x20mensual,\x20",
    "http",
    "log",
    "Iniciando...",
    "68799qLPQVp",
    "promociones-container",
    "touch",
    "itf",
    "fill",
    ".modal-backdrop",
    "controllerchange",
    "Combo\x20Especial",
    "Error\x20en\x20detección",
    "EAN13",
    "2411244QavXPz",
    "canvas",
    "✅\x20Usando\x20cantidad\x20y\x20precio\x20calculado:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x22>$",
    "https://verificadorb9-backend.vercel.app/api/promociones",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Total\x20Normal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-muted\x22>-</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Sin\x20datos</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "script",
    "detect",
    "Finalizada\x20en\x20",
    "autocomplete",
    "✅\x20Códigos\x20válidos:\x20",
    "bg-success\x20text-white",
    "list-group-item\x20list-group-item-action\x20d-flex\x20align-items-center",
    "other",
    "recordUsage",
    "Cargando\x20promociones",
    "installBtn",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "FECHA_ESCANEO",
    "formulario",
    "reload",
    "enabledCheck",
    "⚠️\x20No\x20se\x20pudieron\x20obtener\x20estadísticas\x20de\x20códigos\x20de\x20barras",
    "unshift",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22\x20style=\x22font-weight:500;\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "all",
    "precioTotal",
    "upc_reader",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "message",
    "column",
    "\x20=\x20",
    "Procesando\x20productos",
    "\x20para:\x20",
    "descripcion",
    "76592VByWHj",
    "📋\x20Detalles\x20completos:",
    "reason",
    "fulfilled",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20ms-2\x22\x20style=\x22font-size:0.7rem;\x22>🏷️\x20PROMO</span>",
    "https://verificadorb9-backend.vercel.app/api/productos",
    "<span\x20class=\x22badge\x20bg-secondary\x22\x20style=\x22font-size:\x200.7rem;\x22>+",
    "border-bottom\x20pb-3",
    "code",
    "success",
    "✅\x20Instalación\x20aceptada",
    "x-large",
    "Verifique\x20su\x20conexión\x20a\x20internet",
    "⚠️\x20Error\x20al\x20procesar\x20producto\x20",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-check-label\x22\x20for=\x22enabledCheck\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Activar\x20detección\x20avanzada\x20(Backend)</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Usa\x20servidor\x20dedicado\x20para\x20mejor\x20detección\x20de\x20códigos\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "promociones:",
    "💡\x20Verifica\x20que\x20el\x20proyecto\x20#1070150612422\x20tenga\x20facturación\x20activa",
    "totalCodigos",
    "#btnSpinner",
    "load",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "<div\x20class=\x22alert\x20alert-success\x22>✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente</div>",
    "getFullYear",
    "✅\x20Detección\x20avanzada\x20activada",
    "Formato:",
    "📱\x20Dispositivo\x20móvil:",
    "tipo",
    "CORS_ERROR:\x20Backend\x20no\x20accesible\x20desde\x20este\x20dominio",
    "qty",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-success\x22>🏷️\x20Productos\x20con\x20Promociones</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20text-white\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "list-group\x20position-absolute\x20w-100",
    "canUseAPI",
    "✅\x20Código\x20detectado\x20(configuración\x20agresiva):",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20<strong\x20class=\x22ms-1\x22>",
    "keys",
    "🎯\x20PROMOCIÓN\x20ENCONTRADA\x20para\x20SKU\x20",
    "input",
    "position",
    "Formato\x20de\x20promociones\x20inválido",
    "✅\x20Usando\x20promociones\x20desde\x20IndexedDB:",
    "\x20minutos",
    "✅\x20Endpoint\x20promociones\x20consultado:\x20",
    "pro_nombrePromo",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🌐\x20Google\x20Vision\x20API:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20al\x20",
    "#btnPromociones",
    "no-store",
    "BarcodeDetector",
    "off",
    "shift",
    "dailyLimit",
    "PROMO",
    "readwrite",
    "Error\x20al\x20cargar\x20promociones:",
    "objectStore",
    "relative",
    "data",
    "100%",
    "agresiva",
    "toFixed",
    "large",
    "🚀\x20Intentando\x20con\x20Google\x20Vision\x20API...",
    "fillRect",
    "QR_CODE",
    "reduce",
    "Backend\x20error",
    ")<br>",
    "pop",
    "📊\x20Datos\x20extraídos\x20antes\x20de\x20procesamiento:",
    "#ultimaActualizacion",
    "\x22\x20class=\x22card-img-top\x22\x20alt=\x22",
    "estadisticas",
    "storageKey",
    "\x20\x20\x20•\x20API\x20Key\x20inválida\x20o\x20límites\x20excedidos",
    "remove",
    "✅\x20Los\x203\x20endpoints\x20consultados",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-warning\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔥\x20",
    "❌\x20Error\x20cargando\x20promociones:",
    "installed",
    "\x20más\x20con\x20promociones.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20me-2\x20mb-1\x22\x20style=\x22font-size:0.85rem;\x22>🔥\x20",
    "userChoice",
    "🔄\x20Nueva\x20versión\x20del\x20Service\x20Worker\x20disponible",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Error\x20al\x20procesar\x20la\x20imagen</div>",
    "No\x20se\x20puede\x20generar\x20código\x20de\x20barras:\x20canvas\x20o\x20código\x20faltante",
    "⚠️\x20Error\x20con\x20endpoint\x20de\x20códigos\x20de\x20barras:",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22>Total\x20con\x20Promo</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "getAll",
    "💡\x20Ve\x20a:\x20https://console.cloud.google.com/apis/library/vision.googleapis.com",
    "✅\x20Tercera\x20tentativa\x20exitosa:",
    "dailyCount",
    "POST",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-start\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-dark\x22\x20style=\x22font-size:\x201rem;\x22>",
    "Error\x20",
    "round",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB\x20desde\x20servidor",
    "Actualizando...",
    "\x20segundos",
    "Error\x20consultando\x20producto\x20desde\x20historial:",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Error\x20en\x20diagnóstico:\x20",
    "productosConCodigosAdicionales",
    "postMessage",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "matchAll",
    "overflowY",
    ".copiar-sku-btn",
    "transaction",
    "length",
    "push",
    "requestSubmit",
    "🔧\x20Error\x20500:\x20Problema\x20con\x20Google\x20Vision\x20API",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "skus",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-center\x20align-items-center\x20gap-3\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-danger\x20precio-responsive\x22>$\x20",
    "🔄\x20Tercera\x20tentativa:\x20imagen\x20original\x20sin\x20procesamiento...",
    "#000000",
    "Sin\x20conexión\x20a\x20internet",
    "warn",
    "trim",
    "Error\x20cargando\x20promociones:",
    "❌\x20No\x20se\x20encontraron\x20códigos\x20válidos\x20en\x20el\x20texto",
    "\x20→\x20",
    "putImageData",
    "pro_mensaje",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "saveUsage",
    "continuous",
    "📏\x20Ampliando\x20imagen\x20pequeña:\x20",
    "isConfirmed",
    "\x20(quedan\x20",
    "⚠️\x20Usando\x20nombre\x20completo:",
    "</small>",
    "Backend\x20con\x20error:\x20",
    "preventDefault",
    "alert-warning",
    "div",
    "Generando\x20código\x20de\x20barras\x20",
    "beforeinstallprompt",
    "decodeSingle",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "•\x20Diario:\x20",
    "innerHTML",
    "🧪\x20Probando\x20vision-detect\x20con\x20imagen\x20de\x20prueba...",
    "%</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x22\x20style=\x22height:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-",
    "CORS",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22promociones-container\x22\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>🔍\x20Verificando\x20promociones...</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "head",
    "getRegistrations",
    "Productos:\x20",
    "productosConCodigos",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "<i\x20class=\x22bi\x20bi-clipboard-check\x22></i>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "#198754",
    "video",
    "boundingBox",
    "checked",
    "toDateString",
    "precio_total",
    "statechange",
    "✅\x20Backend\x20activo.\x20Estadísticas:",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "CODE_128",
    "mostrarModalPromocionesGenerales",
    "valor_total",
    "barcode-",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>...\x20y\x20",
    "pro_precio_total",
    "bg-danger",
    "🔍\x20Validando:\x20\x22",
    "test",
    "objectStoreNames",
    "Error\x20al\x20copiar:",
    "🔧\x20Sugerencia:\x20Verificar\x20configuración\x20CORS\x20en\x20el\x20backend\x20para\x20/api/productos-con-codigos",
    ".copiar-btn",
    "rawValue",
    "%;\x20transition:\x20width\x200.3s\x20ease;\x22\x20aria-valuenow=\x22",
    "🚀\x20Usando\x20Barcode\x20Detection\x20API\x20nativa",
    "\x20|\x20Promociones:\x20",
    "json",
    "pro_precioPromo",
    "API_KEY_INVALID",
    "maxHeight",
    "onLine",
    "writeText",
    "\x20x\x20",
    "pr_precio",
    "nombre",
    "borderRadius",
    "\x20comprando\x20",
    "backend_mejorado",
    "usage",
    "\x20diario<br>🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "Actualizar",
    "⚠️\x20Consulta\x20parcial\x20de\x20endpoints",
    "🔍\x20Actualizando\x20promociones\x20en\x20vista:",
    "nearest",
    "🔄\x20Iniciando\x20detección\x20con\x20Quagga...",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "⚠️\x20Solo\x20cantidad\x20extraída:",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h5>🏷️\x20No\x20se\x20encontraron\x20productos\x20con\x20promociones</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-0\x22>Puede\x20ser\x20que\x20no\x20haya\x20promociones\x20activas\x20en\x20este\x20momento\x20o\x20que\x20el\x20servicio\x20no\x20esté\x20disponible.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x20más</span>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>CONTADO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20mx-2\x22\x20style=\x22font-size:1.5rem;\x22>|</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x20precio-responsive\x22>$\x20",
    "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "top",
    "\x20(redondeado)",
    "zIndex",
    "then",
    "autoplay",
    "textAnnotations",
    "codeResult",
    "\x22\x20class=\x22barcode-canvas\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-bold\x20text-dark\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "✅\x20Datos\x20locales\x20encontrados:\x20productos:",
    "split",
    "💡\x20Ve\x20a:\x20https://console.developers.google.com/billing/enable?project=1070150612422",
    "serviceWorker",
    "🔄\x20Primera\x20carga:\x20cargando\x20productos\x20y\x20promociones...",
    "Error\x20HTTP:\x20",
    "ayuda",
    "toLocaleString",
    "🔄\x20No\x20hay\x20promociones\x20locales,\x20consultando\x20servidor...",
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20nombre\x20del\x20producto\x20*/\x0a\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x201.4rem;\x0a\x20\x20\x20\x20line-height:\x201.3;\x0a\x20\x20\x20\x20margin-bottom:\x200.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.1rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20precios\x20*/\x0a\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x203.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x202.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20para\x20código\x20de\x20barras\x20funcional\x20*/\x0a\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20max-width:\x20100%;\x0a\x20\x20\x20\x20height:\x20auto;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20background:\x20#ffffff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x202rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x201.5rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20160px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    "CORS_ERROR",
    "productos",
    "pr_imagen",
    "googleVisionConfig",
    "productos_ts",
    "406DgrlLL",
    "🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers",
    "pr_sku",
    "center",
    "❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Cantidad</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20pt-2\x20border-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>📅\x20Vigencia:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22alert\x20alert-info\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Mostrando\x20los\x20primeros\x2020\x20productos.\x20Hay\x20",
    "precio\x20especial",
    "✅\x20Extraído\x20formato\x20completo\x20del\x20nombre:",
    "classList",
    "📋\x20Configuración\x20final\x20para\x20códigos\x20largos...",
    "left",
    "<div\x20class=\x22row\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-8\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20nombre-producto-responsive\x22\x20style=\x22color:#616161;\x22>",
    "match",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "CODIGO",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Área\x20para\x20mostrar\x20resultados\x20del\x20diagnóstico\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22diagnostico-resultado\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Detección\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20📷\x20<strong>Local:</strong>\x20Html5QrCode\x20+\x20BarcodeDetector\x20+\x20Quagga.js<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🌐\x20<strong>Premium:</strong>\x20Google\x20Vision\x20API\x20(para\x20códigos\x20difíciles)<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🔄\x20<strong>Automático:</strong>\x20Fallback\x20inteligente\x20entre\x20métodos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>✅\x20Ventajas\x20del\x20backend:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Sin\x20límites\x20por\x20dispositivo<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Detección\x20superior\x20en\x20superficies\x20reflectivas<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Mejor\x20precisión\x20con\x20códigos\x20largos<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Funciona\x20con\x20imágenes\x20de\x20baja\x20calidad<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Gestión\x20centralizada\x20de\x20recursos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🔄\x20Fallback\x20automático:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Si\x20el\x20backend\x20no\x20está\x20disponible,\x20la\x20app\x20usará\x20detección\x20local\x20automáticamente.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Recomendación:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mantén\x20activada\x20la\x20detección\x20avanzada\x20para\x20mejores\x20resultados.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "getUserMedia",
    "✅\x20Configuración\x20guardada",
    "i2of5_reader",
    "toLowerCase",
    "toUTCString",
    "replace",
    "https://media.megaservicio.net",
    "Backend\x20error:\x20",
    "CODE_39",
    "focus",
    "key",
    "data-form-type",
    "PERMISSION_DENIED",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:#495057;\x22>🏷️\x20PROMOCIONES\x20ACTIVAS</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "outcome",
    "addEventListener",
    "consultarProductoDesdeModal",
    "hide",
    "loadUsage",
    "total_price",
    "📊\x20Estadísticas:",
    "activo",
    "pro_cantidad_base",
    "\x20promocion(es)\x20encontrada(s)\x20para\x20SKU:\x20",
    "has",
    "open",
    "codigos_barras",
    "diagnostic",
    "\x22\x20role=\x22progressbar\x22\x20style=\x22width:\x20",
    "className",
    "❌\x20Modal\x20no\x20encontrado",
    "remainingMonthly",
    "observe",
    "validTo",
    "insertBefore",
    "NOMBRE",
    "location",
    "parse",
    "update",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Error\x20al\x20detectar\x20promociones\x20para\x20SKU\x20",
    "splice",
    "start",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-success\x20fw-bold\x22>$",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20mb-0\x22>🏷️\x20",
    "BILLING_DISABLED",
    "catch",
    "Enter",
    "pro_tipoPromo",
    "contains",
    "data-copiar",
    "includes",
    "DATA_MATRIX",
    "find",
    "\x20longitud:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Usando\x20solo\x20detección\x20local",
    "fillStyle",
    "googleVisionUsage",
    "setItem",
    "ean_13",
    "🚫\x20PROBLEMA:\x20Permisos\x20denegados\x20-\x20Vision\x20API\x20no\x20habilitada",
    "\x20->\x20",
    "Error\x20obteniendo\x20promociones:",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "warningThreshold",
    "✅\x20Productos\x20cargados\x20con\x20códigos\x20de\x20barras:",
    "responses",
    "🔄\x20Probando\x20con\x20imagen\x20original...",
    "https://contador-apicloudvision.vercel.app/api/stats",
    "codabar",
    "Formato\x20de\x20respuesta\x20no\x20reconocido",
    "🔄\x20Productos\x20existentes:\x20cargando\x20solo\x20promociones...",
    "📸\x20Procesando\x20con\x20Quagga...",
    "Error\x20verificando\x20datos\x20locales:",
    "getVideoTracks",
    "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Unidades</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x20d-block\x22\x20style=\x22font-size:\x201.3rem;\x22>$",
    "codigo",
    "innerWidth",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x20ms-2\x22>1\x20unidad</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22><strong>SKU:</strong>\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>\x20\x20Total\x20SKUs:</strong>\x20",
    "d-none",
    "readonly",
    "reader",
    "\x20productos\x20(",
    "❌\x20Error\x20de\x20conexión",
    "\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "No\x20se\x20pudieron\x20cargar\x20productos\x20de\x20ningún\x20endpoint",
    "SUCCESS",
    "88dEltWV",
    "type",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "codabar_reader",
    "pro_grupoProductos_primaria",
    "isArray",
    "onload",
    "\x20endpoints\x20consultados",
    "history",
  ];
  _0x4b0d = function () {
    return _0x57fa66;
  };
  return _0x4b0d();
}
async function mostrarModalPromocionesGenerales() {
  const _0x5ea803 = _0x930223,
    _0x3b98b0 =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
        _0x5ea803(0x196)
      ](navigator[_0x5ea803(0x279)]),
    _0x34dedb = /iPad|iPhone|iPod/["test"](navigator[_0x5ea803(0x279)]);
  console["log"](_0x5ea803(0x102), _0x3b98b0),
    console[_0x5ea803(0xb7)](_0x5ea803(0x322), _0x34dedb);
  const _0x3df0ae = document[_0x5ea803(0x2d7)](_0x5ea803(0x266)),
    _0x1a61e4 = document[_0x5ea803(0x2d7)](_0x5ea803(0x391));
  if (!_0x1a61e4 || !_0x3df0ae) {
    console["error"](_0x5ea803(0x204));
    return;
  }
  try {
    console[_0x5ea803(0xb7)](
      "🎯\x20Consultando\x20promociones\x20generales..."
    ),
      (_0x1a61e4["innerHTML"] = _0x5ea803(0xfd));
    const [_0x15974a, _0x47a0ea] = await Promise[_0x5ea803(0xde)]([
      fetch(_0x5ea803(0x2d8)),
      getAllProductos(),
    ]);
    if (!_0x15974a["ok"])
      throw new Error(
        "Error\x20" + _0x15974a["status"] + ":\x20" + _0x15974a["statusText"]
      );
    const _0x9eb7b5 = await _0x15974a["json"]();
    console[_0x5ea803(0xb7)](_0x5ea803(0x274), _0x9eb7b5);
    let _0xafad38 = [];
    if (
      _0x9eb7b5[_0x5ea803(0x38e)] === "SUCCESS" &&
      _0x9eb7b5[_0x5ea803(0x2d6)]
    )
      _0xafad38 = _0x9eb7b5[_0x5ea803(0x2d6)];
    else {
      if (Array["isArray"](_0x9eb7b5)) _0xafad38 = _0x9eb7b5;
      else throw new Error(_0x5ea803(0x22d));
    }
    if (_0xafad38[_0x5ea803(0x155)] === 0x0) {
      _0x1a61e4[_0x5ea803(0x179)] = _0x5ea803(0x184);
      return;
    }
    let _0x2e3c8c = _0x5ea803(0x1de);
    _0xafad38[_0x5ea803(0x389)]((_0x23a87b, _0x10f16f) => {
      const _0x24c6fd = _0x5ea803;
      let _0x181dab = [];
      if (
        _0x23a87b[_0x24c6fd(0x15a)] &&
        Array[_0x24c6fd(0x245)](_0x23a87b[_0x24c6fd(0x15a)])
      )
        _0x181dab = _0x23a87b[_0x24c6fd(0x15a)];
      else
        _0x23a87b[_0x24c6fd(0x244)] &&
          _0x23a87b[_0x24c6fd(0x244)][_0x24c6fd(0x1d3)] &&
          (Array[_0x24c6fd(0x245)](_0x23a87b[_0x24c6fd(0x244)]["pr_sku"])
            ? (_0x181dab = _0x23a87b[_0x24c6fd(0x244)][_0x24c6fd(0x1d3)])
            : (_0x181dab = _0x23a87b[_0x24c6fd(0x244)][_0x24c6fd(0x1d3)]
                [_0x24c6fd(0x1c3)]("\x20")
                [_0x24c6fd(0x30f)]((_0x5e4705) =>
                  _0x5e4705[_0x24c6fd(0x162)]()
                )));
      const _0x320ae0 = _0x181dab[_0x24c6fd(0x2ed)]((_0x119b7f) => {
          const _0x39b5d5 = _0x24c6fd;
          return _0x47a0ea[_0x39b5d5(0x21b)](
            (_0x277e6d) => _0x277e6d[_0x39b5d5(0x1d3)] === _0x119b7f
          );
        })["filter"]((_0x1b3fc2) => _0x1b3fc2 !== undefined),
        _0x691c9f =
          _0x23a87b[_0x24c6fd(0x114)] ||
          _0x23a87b[_0x24c6fd(0xe7)] ||
          _0x24c6fd(0x387) + (_0x10f16f + 0x1),
        _0x4c8382 =
          _0x23a87b[_0x24c6fd(0x216)] ||
          _0x23a87b[_0x24c6fd(0x103)] ||
          _0x24c6fd(0x32c),
        _0x3988c6 =
          _0x23a87b[_0x24c6fd(0x167)] || _0x23a87b[_0x24c6fd(0x2b5)] || "",
        _0x539e18 = _0x23a87b[_0x24c6fd(0x1fc)] || "",
        _0x893d46 = Number(_0x539e18) || 0x1;
      let _0x492b55 = 0x0;
      const _0x4e47d6 = (_0x3988c6 + "\x20" + _0x691c9f)[_0x24c6fd(0x1e8)](),
        _0x16c1ce = _0x4e47d6["match"](/(\d+)\s*x\s*(\d+)/);
      if (_0x16c1ce) _0x492b55 = Math["round"](Number(_0x16c1ce[0x2]));
      else {
        const _0x255127 = Number(_0x23a87b[_0x24c6fd(0x1a0)]) || 0x0;
        _0x492b55 = Math[_0x24c6fd(0x148)](_0x255127 * _0x893d46);
      }
      _0x2e3c8c +=
        _0x24c6fd(0x212) +
        _0x691c9f +
        "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22productos-lista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x320ae0[_0x24c6fd(0x155)] > 0x0
          ? _0x320ae0[_0x24c6fd(0x2ed)]((_0x40923a) => {
              const _0x57c8f3 = _0x24c6fd;
              let _0x415938 = "";
              if (
                _0x40923a[_0x57c8f3(0x1ce)] &&
                _0x40923a["pr_imagen"][_0x57c8f3(0x162)]() !== ""
              ) {
                if (_0x40923a[_0x57c8f3(0x1ce)]["startsWith"](_0x57c8f3(0xb6)))
                  _0x415938 = _0x40923a[_0x57c8f3(0x1ce)];
                else {
                  let _0xcfbb2a = _0x40923a[_0x57c8f3(0x1ce)][_0x57c8f3(0x2b7)](
                    "/"
                  )
                    ? _0x40923a["pr_imagen"]
                    : "/" + _0x40923a[_0x57c8f3(0x1ce)];
                  _0x415938 = _0x57c8f3(0x1eb) + _0xcfbb2a;
                }
              }
              const _0x44fa1a =
                  Number(_0x40923a["pr_precio"]) ||
                  Number(_0x40923a["L1"]) ||
                  0x0,
                _0x2d281a = Math["round"](_0x44fa1a * 1.16 * 0x64) / 0x64;
              return (
                _0x57c8f3(0x2aa) +
                (_0x415938
                  ? _0x57c8f3(0x2fa) +
                    _0x415938 +
                    _0x57c8f3(0x30c) +
                    _0x40923a["pr_name"] +
                    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20object-fit:\x20contain;\x20border-radius:\x208px;\x20background:\x20#f8f9fa;\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.style.display=\x27none\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                  : _0x57c8f3(0x392)) +
                _0x57c8f3(0x32b) +
                _0x40923a[_0x57c8f3(0x2f0)] +
                "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$" +
                _0x2d281a["toFixed"](0x2) +
                _0x57c8f3(0x307) +
                _0x40923a[_0x57c8f3(0x1d3)] +
                _0x57c8f3(0x29e)
              );
            })["join"]("")
          : _0x24c6fd(0x355)) +
        _0x24c6fd(0x177);
    }),
      (_0x2e3c8c += _0x5ea803(0x2ce)),
      (_0x1a61e4[_0x5ea803(0x179)] = _0x2e3c8c);
    if (_0x3b98b0 || _0x34dedb) {
      console[_0x5ea803(0xb7)](
        "📱\x20Abriendo\x20modal\x20en\x20dispositivo\x20móvil..."
      ),
        document[_0x5ea803(0x268)](_0x5ea803(0xbe))[_0x5ea803(0x389)](
          (_0x264c7d) => _0x264c7d[_0x5ea803(0x134)]()
        ),
        (_0x3df0ae["style"][_0x5ea803(0x10f)] = _0x5ea803(0x25e)),
        (_0x3df0ae["style"]["top"] = "0"),
        (_0x3df0ae["style"][_0x5ea803(0x1dd)] = "0"),
        (_0x3df0ae[_0x5ea803(0x252)][_0x5ea803(0x33c)] = _0x5ea803(0x123)),
        (_0x3df0ae["style"]["height"] = _0x5ea803(0x123)),
        (_0x3df0ae["style"][_0x5ea803(0x1bb)] = _0x5ea803(0x2a5)),
        (_0x3df0ae[_0x5ea803(0x252)][_0x5ea803(0x2dc)] = "transparent");
      const _0x5ce5e7 = _0x3df0ae[_0x5ea803(0x2fb)](_0x5ea803(0x36b));
      _0x5ce5e7 &&
        ((_0x5ce5e7[_0x5ea803(0x252)]["width"] = _0x5ea803(0x123)),
        (_0x5ce5e7[_0x5ea803(0x252)]["maxWidth"] = _0x5ea803(0x123)),
        (_0x5ce5e7[_0x5ea803(0x252)][_0x5ea803(0x363)] = _0x5ea803(0x123)),
        (_0x5ce5e7[_0x5ea803(0x252)][_0x5ea803(0x326)] = "0"),
        (_0x5ce5e7[_0x5ea803(0x252)][_0x5ea803(0x25f)] = "flex"),
        (_0x5ce5e7[_0x5ea803(0x252)]["flexDirection"] = _0x5ea803(0xe3)));
      const _0x3fd5d7 = _0x3df0ae[_0x5ea803(0x2fb)](".modal-content");
      _0x3fd5d7 &&
        ((_0x3fd5d7[_0x5ea803(0x252)][_0x5ea803(0x33c)] = _0x5ea803(0x123)),
        (_0x3fd5d7[_0x5ea803(0x252)][_0x5ea803(0x363)] = _0x5ea803(0x123)),
        (_0x3fd5d7[_0x5ea803(0x252)]["border"] = _0x5ea803(0x298)),
        (_0x3fd5d7[_0x5ea803(0x252)][_0x5ea803(0x1a8)] = "0"),
        (_0x3fd5d7[_0x5ea803(0x252)]["display"] = _0x5ea803(0x383)),
        (_0x3fd5d7[_0x5ea803(0x252)][_0x5ea803(0x295)] = _0x5ea803(0xe3)));
      const _0x534e83 = _0x3df0ae["querySelector"](_0x5ea803(0x34d));
      _0x534e83 &&
        ((_0x534e83[_0x5ea803(0x252)]["flex"] = "1"),
        (_0x534e83[_0x5ea803(0x252)][_0x5ea803(0x152)] = _0x5ea803(0x24c)),
        (_0x534e83[_0x5ea803(0x252)][_0x5ea803(0x2a1)] = _0x5ea803(0xbb)),
        (_0x534e83[_0x5ea803(0x252)]["maxHeight"] = _0x5ea803(0x298))),
        (_0x3df0ae["style"][_0x5ea803(0x25f)] = _0x5ea803(0x2b6)),
        _0x3df0ae[_0x5ea803(0x1db)][_0x5ea803(0x338)](_0x5ea803(0x2f6)),
        document[_0x5ea803(0x2c0)][_0x5ea803(0x1db)][_0x5ea803(0x134)](
          _0x5ea803(0x31b)
        ),
        (document[_0x5ea803(0x2c0)]["style"][_0x5ea803(0x2c5)] = "");
    } else {
      console[_0x5ea803(0xb7)](_0x5ea803(0x2fc));
      const _0x3e6c6b = new bootstrap["Modal"](_0x3df0ae, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x3e6c6b[_0x5ea803(0x2f6)]();
    }
  } catch (_0x126224) {
    console[_0x5ea803(0x2df)](_0x5ea803(0x163), _0x126224),
      (_0x1a61e4[_0x5ea803(0x179)] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>❌\x20Error\x20al\x20cargar\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>" +
        _0x126224["message"] +
        _0x5ea803(0x1e2));
  }
}
function cerrarModalMobile() {
  const _0x15631a = _0x930223;
  console[_0x15631a(0xb7)](_0x15631a(0x254));
  const _0x3733a3 = document[_0x15631a(0x2d7)]("promocionesGeneralesModal");
  if (_0x3733a3) {
    _0x3733a3[_0x15631a(0x1db)][_0x15631a(0x134)](_0x15631a(0x2f6)),
      (_0x3733a3[_0x15631a(0x252)][_0x15631a(0x25f)] = _0x15631a(0x298)),
      (_0x3733a3[_0x15631a(0x252)][_0x15631a(0x10f)] = ""),
      (_0x3733a3[_0x15631a(0x252)][_0x15631a(0x1b9)] = ""),
      (_0x3733a3[_0x15631a(0x252)][_0x15631a(0x1dd)] = ""),
      (_0x3733a3[_0x15631a(0x252)][_0x15631a(0x33c)] = ""),
      (_0x3733a3[_0x15631a(0x252)][_0x15631a(0x363)] = ""),
      (_0x3733a3["style"]["zIndex"] = ""),
      (_0x3733a3[_0x15631a(0x252)][_0x15631a(0x2dc)] = "");
    const _0x5d527c = _0x3733a3[_0x15631a(0x2fb)](_0x15631a(0x36b));
    _0x5d527c &&
      ((_0x5d527c["style"][_0x15631a(0x33c)] = ""),
      (_0x5d527c[_0x15631a(0x252)][_0x15631a(0x315)] = ""),
      (_0x5d527c[_0x15631a(0x252)]["height"] = ""),
      (_0x5d527c["style"][_0x15631a(0x326)] = ""),
      (_0x5d527c[_0x15631a(0x252)][_0x15631a(0x25f)] = ""),
      (_0x5d527c[_0x15631a(0x252)]["flexDirection"] = ""));
    const _0x325f6d = _0x3733a3[_0x15631a(0x2fb)](_0x15631a(0x24f));
    _0x325f6d &&
      ((_0x325f6d[_0x15631a(0x252)][_0x15631a(0x33c)] = ""),
      (_0x325f6d[_0x15631a(0x252)][_0x15631a(0x363)] = ""),
      (_0x325f6d[_0x15631a(0x252)][_0x15631a(0x354)] = ""),
      (_0x325f6d[_0x15631a(0x252)][_0x15631a(0x1a8)] = ""),
      (_0x325f6d["style"][_0x15631a(0x25f)] = ""),
      (_0x325f6d["style"][_0x15631a(0x295)] = ""));
    const _0x277d1d = _0x3733a3[_0x15631a(0x2fb)](_0x15631a(0x34d));
    _0x277d1d &&
      ((_0x277d1d["style"][_0x15631a(0x383)] = ""),
      (_0x277d1d[_0x15631a(0x252)]["overflowY"] = ""),
      (_0x277d1d[_0x15631a(0x252)]["webkitOverflowScrolling"] = ""),
      (_0x277d1d[_0x15631a(0x252)]["maxHeight"] = ""));
  }
  document[_0x15631a(0x2c0)]["classList"][_0x15631a(0x134)]("modal-open"),
    (document[_0x15631a(0x2c0)][_0x15631a(0x252)][_0x15631a(0x2c5)] = "");
  try {
    const _0x30f61a = bootstrap[_0x15631a(0x2a2)][_0x15631a(0x281)](_0x3733a3);
    _0x30f61a && _0x30f61a[_0x15631a(0x1f7)]();
  } catch (_0x55c84b) {
    console[_0x15631a(0xb7)]("Bootstrap\x20modal\x20no\x20activo");
  }
}
function _0x2c86(_0x10c193, _0x50d25b) {
  const _0x4b0dd4 = _0x4b0d();
  return (
    (_0x2c86 = function (_0x2c86c9, _0x5246ad) {
      _0x2c86c9 = _0x2c86c9 - 0xb5;
      let _0xbfb8ef = _0x4b0dd4[_0x2c86c9];
      return _0xbfb8ef;
    }),
    _0x2c86(_0x10c193, _0x50d25b)
  );
}
async function consultarProductoDesdeModal(_0x1afb06) {
  const _0x5939ed = _0x930223;
  try {
    try {
      cerrarModalMobile();
    } catch (_0x4466fa) {}
    const _0x2d90f8 = document[_0x5939ed(0x2d7)](_0x5939ed(0x266));
    _0x2d90f8 &&
      (_0x2d90f8["classList"][_0x5939ed(0x134)]("show"),
      (_0x2d90f8[_0x5939ed(0x252)][_0x5939ed(0x25f)] = "none"));
    try {
      const _0xd0b56f =
        bootstrap[_0x5939ed(0x2a2)][_0x5939ed(0x281)](_0x2d90f8);
      if (_0xd0b56f) _0xd0b56f[_0x5939ed(0x1f7)]();
    } catch (_0x109db1) {}
    document[_0x5939ed(0x268)](".modal-backdrop,\x20.modal-backdrop-mobile")[
      _0x5939ed(0x389)
    ]((_0x5d02a2) => _0x5d02a2[_0x5939ed(0x134)]()),
      document["body"][_0x5939ed(0x1db)][_0x5939ed(0x134)](_0x5939ed(0x31b)),
      (document[_0x5939ed(0x2c0)][_0x5939ed(0x252)][_0x5939ed(0x2c5)] = "");
    const _0x1b99f4 = await getAllProductos(),
      _0x5a03b8 = _0x1b99f4["find"](
        (_0x4eb3ec) =>
          String(_0x4eb3ec[_0x5939ed(0x1d3)]) === String(_0x1afb06) ||
          String(_0x4eb3ec[_0x5939ed(0x2e4)]) === String(_0x1afb06)
      );
    if (_0x5a03b8) {
      (inputCodigo["value"] = ""), mostrarDetalleProducto(_0x5a03b8);
      const _0x23b0c0 = {
        ..._0x5a03b8,
        FECHA_ESCANEO: new Date()[_0x5939ed(0x24a)](),
      };
      historial[_0x5939ed(0xdb)](_0x23b0c0),
        setCookie(_0x5939ed(0x317), JSON[_0x5939ed(0x2b3)](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x4bbe61 = _0x5939ed,
            _0x1c94cc = document[_0x4bbe61(0x2d7)](_0x4bbe61(0x276));
          _0x1c94cc &&
            _0x1c94cc["scrollIntoView"]({
              behavior: _0x4bbe61(0x378),
              block: _0x4bbe61(0x210),
              inline: _0x4bbe61(0x1b1),
            });
        }, 0x12c);
    } else
      (resultadoDiv[_0x5939ed(0x179)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20" +
        _0x1afb06 +
        _0x5939ed(0xf7)),
        setTimeout(() => {
          resultadoDiv["innerHTML"] = "";
        }, 0x1388);
  } catch (_0x5d8b39) {
    console[_0x5939ed(0x2df)](
      "Error\x20consultando\x20producto\x20desde\x20modal:",
      _0x5d8b39
    ),
      (resultadoDiv[_0x5939ed(0x179)] =
        _0x5939ed(0x345) + _0x5d8b39[_0x5939ed(0xe2)] + _0x5939ed(0x371)),
      setTimeout(() => {
        const _0x5b45b7 = _0x5939ed;
        resultadoDiv[_0x5b45b7(0x179)] = "";
      }, 0x1388);
  }
}
async function consultarProductoDesdeHistorial(_0x66672e) {
  const _0xa701bd = _0x930223;
  try {
    const _0xbf324f = await getAllProductos(),
      _0x4ef49d = _0xbf324f[_0xa701bd(0x21b)](
        (_0x49a3ac) =>
          String(_0x49a3ac[_0xa701bd(0x1d3)]) === String(_0x66672e) ||
          String(_0x49a3ac[_0xa701bd(0x2e4)]) === String(_0x66672e)
      );
    if (_0x4ef49d) {
      (inputCodigo[_0xa701bd(0x261)] = ""), mostrarDetalleProducto(_0x4ef49d);
      const _0x4a91e7 = historial[_0xa701bd(0x36d)](
        (_0xcae2a9) =>
          (_0xcae2a9[_0xa701bd(0x1d3)] &&
            String(_0xcae2a9[_0xa701bd(0x1d3)]) === String(_0x66672e)) ||
          (_0xcae2a9[_0xa701bd(0x2e4)] &&
            String(_0xcae2a9[_0xa701bd(0x2e4)]) === String(_0x66672e))
      );
      if (_0x4a91e7 !== -0x1) {
        const _0x58c063 = historial[_0xa701bd(0x20f)](_0x4a91e7, 0x1)[0x0];
        (_0x58c063[_0xa701bd(0xd6)] = new Date()[_0xa701bd(0x24a)]()),
          historial[_0xa701bd(0xdb)](_0x58c063),
          setCookie("historial", JSON[_0xa701bd(0x2b3)](historial), 0x1e),
          renderHistorial();
      }
      setTimeout(() => {
        const _0xa2fbb8 = _0xa701bd,
          _0x5ef505 = document[_0xa2fbb8(0x2d7)]("resultado");
        _0x5ef505 &&
          _0x5ef505[_0xa2fbb8(0x2c8)]({
            behavior: "smooth",
            block: _0xa2fbb8(0x210),
            inline: _0xa2fbb8(0x1b1),
          });
      }, 0x12c);
    } else
      (resultadoDiv[_0xa701bd(0x179)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20" +
        _0x66672e +
        _0xa701bd(0xf7)),
        setTimeout(() => {
          const _0x4c736c = _0xa701bd;
          resultadoDiv[_0x4c736c(0x179)] = "";
        }, 0x1388);
  } catch (_0x177e23) {
    console[_0xa701bd(0x2df)](_0xa701bd(0x14c), _0x177e23),
      (resultadoDiv[_0xa701bd(0x179)] =
        _0xa701bd(0x345) + _0x177e23["message"] + _0xa701bd(0x371)),
      setTimeout(() => {
        const _0x3d9ac3 = _0xa701bd;
        resultadoDiv[_0x3d9ac3(0x179)] = "";
      }, 0x1388);
  }
}
(window[_0x930223(0x18f)] = mostrarModalPromocionesGenerales),
  (window[_0x930223(0x1f6)] = consultarProductoDesdeModal),
  (window[_0x930223(0x382)] = consultarProductoDesdeHistorial);
async function tienePromociones(_0x10dad4) {
  const _0x596795 = _0x930223;
  try {
    const _0x256739 = (_0x10dad4[_0x596795(0x1d3)] || "")[_0x596795(0x31d)]();
    if (!_0x256739) return ![];
    const _0x531bec = await getAllPromociones();
    if (_0x531bec[_0x596795(0x155)] === 0x0) return ![];
    for (const _0x5f0271 of _0x531bec) {
      let _0x13c1d5 = [];
      if (_0x5f0271["skus"] && Array["isArray"](_0x5f0271[_0x596795(0x15a)]))
        _0x13c1d5 = _0x5f0271[_0x596795(0x15a)];
      else
        _0x5f0271[_0x596795(0x244)] &&
          _0x5f0271[_0x596795(0x244)][_0x596795(0x1d3)] &&
          (Array[_0x596795(0x245)](
            _0x5f0271["pro_grupoProductos_primaria"]["pr_sku"]
          )
            ? (_0x13c1d5 = _0x5f0271[_0x596795(0x244)][_0x596795(0x1d3)])
            : (_0x13c1d5 = _0x5f0271[_0x596795(0x244)][_0x596795(0x1d3)]
                ["split"]("\x20")
                [_0x596795(0x30f)]((_0x2745f0) => _0x2745f0["trim"]())));
      if (_0x13c1d5["includes"](_0x256739)) return !![];
    }
    return ![];
  } catch (_0x1a67b3) {
    return (
      console[_0x596795(0x161)](
        "Error\x20verificando\x20promociones:",
        _0x1a67b3
      ),
      ![]
    );
  }
}
let searchTimeout;
inputCodigo[_0x930223(0x1f5)](_0x930223(0x10e), async function (_0x251ea0) {
  const _0x5dcd73 = _0x930223,
    _0x343a01 = inputCodigo[_0x5dcd73(0x261)]
      [_0x5dcd73(0x162)]()
      [_0x5dcd73(0x1e8)]();
  clearTimeout(searchTimeout), (sugerenciasDiv[_0x5dcd73(0x179)] = "");
  if (!_0x343a01 || _0x343a01[_0x5dcd73(0x155)] < 0x2) {
    sugerenciasDiv[_0x5dcd73(0x252)][_0x5dcd73(0x25f)] = "none";
    return;
  }
  searchTimeout = setTimeout(async () => {
    const _0x41ae5c = _0x5dcd73;
    let _0x48cf4a = await getAllProductos(),
      _0xec278 = _0x48cf4a["filter"]((_0x36262c) => {
        const _0x4d0da7 = _0x2c86;
        return (
          (_0x36262c[_0x4d0da7(0x2f0)] &&
            _0x36262c["pr_name"]
              ["toLowerCase"]()
              [_0x4d0da7(0x219)](_0x343a01)) ||
          (_0x36262c[_0x4d0da7(0x1d3)] &&
            String(_0x36262c[_0x4d0da7(0x1d3)])
              [_0x4d0da7(0x1e8)]()
              ["includes"](_0x343a01)) ||
          (_0x36262c["pr_gtin"] &&
            String(_0x36262c[_0x4d0da7(0x2e4)])
              [_0x4d0da7(0x1e8)]()
              [_0x4d0da7(0x219)](_0x343a01))
        );
      });
    const _0x46c893 = new Set();
    _0xec278 = _0xec278[_0x41ae5c(0x30f)]((_0x19a85c) => {
      const _0x4fd975 = _0x41ae5c,
        _0x380429 = _0x19a85c[_0x4fd975(0x1d3)] || _0x19a85c[_0x4fd975(0x2e4)];
      if (!_0x380429 || _0x46c893[_0x4fd975(0x1fe)](_0x380429)) return ![];
      return _0x46c893["add"](_0x380429), !![];
    });
    if (_0xec278["length"] === 0x0) {
      sugerenciasDiv[_0x41ae5c(0x252)][_0x41ae5c(0x25f)] = "none";
      return;
    }
    _0xec278[_0x41ae5c(0x381)]((_0x20b81f, _0x2d72db) => {
      const _0x3de7cc = _0x41ae5c,
        _0x5c14e8 = (_0x20b81f["pr_name"] || "")[_0x3de7cc(0x1e8)](),
        _0x32fb4b = (_0x2d72db[_0x3de7cc(0x2f0)] || "")[_0x3de7cc(0x1e8)](),
        _0x286438 = _0x5c14e8[_0x3de7cc(0x2b7)](_0x343a01),
        _0x5249fd = _0x32fb4b["startsWith"](_0x343a01);
      if (_0x286438 && !_0x5249fd) return -0x1;
      if (!_0x286438 && _0x5249fd) return 0x1;
      return _0x5c14e8[_0x3de7cc(0x155)] - _0x32fb4b[_0x3de7cc(0x155)];
    });
    const _0x5d77dd = _0xec278[_0x41ae5c(0x2ed)]((_0x10ad2a) =>
        tienePromociones(_0x10ad2a)
      ),
      _0x32f0fc = await Promise[_0x41ae5c(0xde)](_0x5d77dd);
    _0xec278[_0x41ae5c(0x389)]((_0x566f59, _0x25edff) => {
      const _0x1aa46d = _0x41ae5c,
        _0x4a48a3 = _0x32f0fc[_0x25edff],
        _0x25d4cc = document[_0x1aa46d(0x2b2)](_0x1aa46d(0x299));
      (_0x25d4cc[_0x1aa46d(0x241)] = _0x1aa46d(0x299)),
        (_0x25d4cc[_0x1aa46d(0x203)] = _0x1aa46d(0xd0));
      let _0x353f88 = "";
      if (
        _0x566f59[_0x1aa46d(0x1ce)] &&
        _0x566f59["pr_imagen"]["trim"]() !== ""
      ) {
        let _0x20275e = "";
        if (_0x566f59[_0x1aa46d(0x1ce)][_0x1aa46d(0x2b7)](_0x1aa46d(0xb6)))
          _0x20275e = _0x566f59[_0x1aa46d(0x1ce)];
        else {
          let _0x7fee30 = _0x566f59[_0x1aa46d(0x1ce)][_0x1aa46d(0x2b7)]("/")
            ? _0x566f59[_0x1aa46d(0x1ce)]
            : "/" + _0x566f59[_0x1aa46d(0x1ce)];
          _0x20275e = _0x1aa46d(0x1eb) + _0x7fee30;
        }
        _0x353f88 =
          "<img\x20src=\x22" +
          _0x20275e +
          _0x1aa46d(0x30c) +
          _0x566f59["pr_name"] +
          _0x1aa46d(0x265);
      }
      const _0x5a54c2 = _0x4a48a3 ? _0x1aa46d(0xec) : "";
      (_0x25d4cc["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20\x20" +
        _0x353f88 +
        _0x1aa46d(0x18d) +
        _0x566f59["pr_name"] +
        "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x5a54c2 +
        _0x1aa46d(0x2e9) +
        (_0x566f59[_0x1aa46d(0x1d3)] || _0x566f59["pr_gtin"] || "") +
        _0x1aa46d(0x2db)),
        (_0x25d4cc[_0x1aa46d(0x397)] = function () {
          const _0x39d9d0 = _0x1aa46d;
          mostrarDetalleProducto(_0x566f59);
          const _0x459aba = {
            ..._0x566f59,
            FECHA_ESCANEO: new Date()[_0x39d9d0(0x24a)](),
          };
          historial[_0x39d9d0(0xdb)](_0x459aba),
            setCookie(
              _0x39d9d0(0x317),
              JSON[_0x39d9d0(0x2b3)](historial),
              0x1e
            ),
            renderHistorial(),
            (inputCodigo["value"] = ""),
            (sugerenciasDiv[_0x39d9d0(0x179)] = ""),
            (sugerenciasDiv[_0x39d9d0(0x252)][_0x39d9d0(0x25f)] =
              _0x39d9d0(0x298));
        }),
        sugerenciasDiv[_0x1aa46d(0x346)](_0x25d4cc);
    }),
      (sugerenciasDiv[_0x41ae5c(0x252)][_0x41ae5c(0x25f)] = _0x41ae5c(0x2b6));
  }, 0x12c);
}),
  document["addEventListener"](_0x930223(0x2d4), function (_0x363bd1) {
    const _0x100238 = _0x930223;
    !inputCodigo[_0x100238(0x217)](_0x363bd1[_0x100238(0x394)]) &&
      !sugerenciasDiv[_0x100238(0x217)](_0x363bd1[_0x100238(0x394)]) &&
      ((sugerenciasDiv[_0x100238(0x179)] = ""),
      (sugerenciasDiv[_0x100238(0x252)][_0x100238(0x25f)] = _0x100238(0x298)));
  });
function iniciarScanner() {
  const _0x28099d = _0x930223;
  if (scannerActivo) return;
  navigator[_0x28099d(0x2ab)]
    [_0x28099d(0x1e5)]({ video: !![] })
    ["then"]((_0x3f116b) => {
      const _0x56f534 = _0x28099d;
      _0x3f116b["getTracks"]()[_0x56f534(0x389)]((_0x4398cb) =>
        _0x4398cb["stop"]()
      ),
        (scannerActivo = !![]),
        (readerDiv["style"][_0x56f534(0x25f)] = _0x56f534(0x2b6)),
        document[_0x56f534(0x2d7)](_0x56f534(0x23a))[_0x56f534(0x2c8)]({
          behavior: "smooth",
          block: "center",
        }),
        (ayudaTexto[_0x56f534(0x252)][_0x56f534(0x25f)] = _0x56f534(0x2b6));
      const _0x30aa25 = new Html5Qrcode(_0x56f534(0x23a)),
        _0x1b1ab9 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: _0x56f534(0x2c9),
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x4ddcdc, _0x1f9aef) {
            const _0x21d5da = _0x56f534,
              _0x198b18 = Math[_0x21d5da(0x2e6)](0x12c, _0x4ddcdc * 0.9),
              _0x3e8e34 = 0x64;
            return { width: _0x198b18, height: _0x3e8e34 };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x56f534(0x18e)],
            Html5QrcodeSupportedFormats[_0x56f534(0x375)],
            Html5QrcodeSupportedFormats["EAN_8"],
            Html5QrcodeSupportedFormats[_0x56f534(0x34b)],
            Html5QrcodeSupportedFormats[_0x56f534(0x284)],
            Html5QrcodeSupportedFormats[_0x56f534(0x1ed)],
            Html5QrcodeSupportedFormats["CODE_93"],
            Html5QrcodeSupportedFormats[_0x56f534(0x37e)],
            Html5QrcodeSupportedFormats[_0x56f534(0x34f)],
            Html5QrcodeSupportedFormats[_0x56f534(0x129)],
            Html5QrcodeSupportedFormats[_0x56f534(0x21a)],
            Html5QrcodeSupportedFormats[_0x56f534(0x327)],
            Html5QrcodeSupportedFormats[_0x56f534(0x2c3)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x30aa25[_0x56f534(0x210)](
        { facingMode: _0x56f534(0x2c9) },
        _0x1b1ab9,
        (_0x1f01cd) => {
          const _0x341b91 = _0x56f534;
          (inputCodigo[_0x341b91(0x261)] = _0x1f01cd[_0x341b91(0x162)]()[
            _0x341b91(0x1ea)
          ](/\s+$/, "")),
            _0x30aa25["stop"]()[_0x341b91(0x1bc)](() => {
              const _0xfccd8e = _0x341b91;
              (readerDiv["style"][_0xfccd8e(0x25f)] = _0xfccd8e(0x298)),
                (ayudaTexto[_0xfccd8e(0x252)][_0xfccd8e(0x25f)] =
                  _0xfccd8e(0x298)),
                (scannerActivo = ![]),
                _0x30aa25["clear"](),
                form[_0xfccd8e(0x157)](),
                setTimeout(() => {
                  const _0x4420ad = _0xfccd8e,
                    _0x4ab267 = document[_0x4420ad(0x2d7)](_0x4420ad(0x276));
                  _0x4ab267 &&
                    _0x4ab267[_0x4420ad(0x2c8)]({
                      behavior: _0x4420ad(0x378),
                      block: "start",
                      inline: _0x4420ad(0x1b1),
                    });
                }, 0x1f4);
            });
        },
        (_0x226b4c) => {}
      )
        ["then"](() => {
          setTimeout(() => {
            const _0x2161d1 = _0x2c86,
              _0x5d7f25 = readerDiv["querySelector"](_0x2161d1(0x186));
            if (_0x5d7f25) {
              const _0x15168b =
                _0x5d7f25[_0x2161d1(0x2c6)][_0x2161d1(0x231)]()[0x0];
              _0x15168b[_0x2161d1(0x356)]({
                focusMode: _0x2161d1(0x16a),
                advanced: [{ zoom: 0x2 }],
              })
                [_0x2161d1(0x1bc)](() => {})
                [_0x2161d1(0x214)]((_0x3452bb) => {});
            }
          }, 0x7d0);
        })
        [_0x56f534(0x214)]((_0x4bf5f7) => {
          const _0x239cc2 = _0x56f534;
          (scannerActivo = ![]),
            (resultadoDiv[_0x239cc2(0x179)] =
              _0x239cc2(0x2de) + _0x4bf5f7 + "</div>"),
            renderHistorial();
        });
      const _0x2fbb42 = new MutationObserver(() => {
        const _0xb5009d = _0x56f534,
          _0x180a2e = readerDiv[_0xb5009d(0x2fb)](_0xb5009d(0x186));
        _0x180a2e &&
          (_0x180a2e["setAttribute"]("playsinline", ""),
          _0x180a2e[_0xb5009d(0x305)](_0xb5009d(0x1bd), ""),
          _0x180a2e[_0xb5009d(0x305)]("muted", ""),
          _0x2fbb42[_0xb5009d(0x3a0)]());
      });
      _0x2fbb42[_0x56f534(0x206)](readerDiv, {
        childList: !![],
        subtree: !![],
      });
    })
    [_0x28099d(0x214)]((_0x210095) => {
      const _0x21fba8 = _0x28099d;
      (resultadoDiv["innerHTML"] = _0x21fba8(0x309)), renderHistorial();
    });
}
const fileInput = document[_0x930223(0x2d7)](_0x930223(0x32e));
fileInput[_0x930223(0x1f5)](_0x930223(0x2fd), async (_0x3f010c) => {
  const _0x4ef039 = _0x930223,
    _0xc04161 = _0x3f010c[_0x4ef039(0x394)][_0x4ef039(0x2ba)][0x0];
  if (!_0xc04161) return;
  resultadoDiv[_0x4ef039(0x179)] = _0x4ef039(0xd5);
  try {
    const _0x13e660 = new Image(),
      _0x2b0ca4 = new Promise((_0x8089a5, _0x903b98) => {
        const _0x10c77b = _0x4ef039;
        (_0x13e660[_0x10c77b(0x246)] = _0x8089a5),
          (_0x13e660[_0x10c77b(0x31c)] = _0x903b98),
          (_0x13e660[_0x10c77b(0x2d9)] = URL[_0x10c77b(0x358)](_0xc04161));
      });
    await _0x2b0ca4;
    if (
      GOOGLE_VISION_CONFIG[_0x4ef039(0x385)] &&
      visionUsageTracker[_0x4ef039(0x109)]()
    ) {
      console[_0x4ef039(0xb7)](_0x4ef039(0x127));
      try {
        const _0x330f66 = await detectarConGoogleVision(_0x13e660);
        if (_0x330f66) {
          console["log"]("✅\x20Google\x20Vision\x20detectó:", _0x330f66),
            (inputCodigo["value"] = _0x330f66),
            form[_0x4ef039(0x157)](),
            URL[_0x4ef039(0x27f)](_0x13e660[_0x4ef039(0x2d9)]),
            (fileInput[_0x4ef039(0x261)] = "");
          return;
        }
      } catch (_0x3ebcc8) {
        console[_0x4ef039(0xb7)](
          "❌\x20Error\x20con\x20Google\x20Vision,\x20usando\x20fallback:",
          _0x3ebcc8["message"]
        );
        if (_0x3ebcc8[_0x4ef039(0xe2)][_0x4ef039(0x219)](_0x4ef039(0x1cc)))
          console["log"](
            "🔧\x20Problema\x20de\x20CORS\x20detectado\x20-\x20necesita\x20configuración\x20en\x20backend"
          );
        else {
          if (_0x3ebcc8[_0x4ef039(0xe2)][_0x4ef039(0x219)]("500"))
            console[_0x4ef039(0xb7)](_0x4ef039(0x158)),
              _0x3ebcc8[_0x4ef039(0xe2)][_0x4ef039(0x219)](_0x4ef039(0x213))
                ? (console["log"](_0x4ef039(0x39c)),
                  console["log"](_0x4ef039(0x1c4)))
                : console["log"](
                    "💡\x20Verifica\x20la\x20configuración\x20de\x20GOOGLE_VISION_API_KEY\x20en\x20Vercel"
                  );
          else
            _0x3ebcc8[_0x4ef039(0xe2)][_0x4ef039(0x219)](_0x4ef039(0x12b)) &&
              console[_0x4ef039(0xb7)](_0x4ef039(0x352));
        }
      }
    } else {
      if (
        GOOGLE_VISION_CONFIG[_0x4ef039(0x385)] &&
        !visionUsageTracker[_0x4ef039(0x109)]()
      ) {
        const _0x52e0ce = visionUsageTracker[_0x4ef039(0x376)]();
        console[_0x4ef039(0xb7)](
          _0x4ef039(0x35d) +
            _0x52e0ce[_0x4ef039(0x28c)] +
            "/" +
            _0x52e0ce[_0x4ef039(0x3a3)] +
            ",\x20Diario:\x20" +
            _0x52e0ce[_0x4ef039(0x337)] +
            "/" +
            _0x52e0ce[_0x4ef039(0x11c)]
        );
      }
    }
    if (_0x4ef039(0x119) in window) {
      console[_0x4ef039(0xb7)](_0x4ef039(0x19d));
      try {
        const _0x3b940c = [
            _0x4ef039(0x283),
            _0x4ef039(0x369),
            _0x4ef039(0x26c),
            _0x4ef039(0x2ea),
            _0x4ef039(0x22c),
            _0x4ef039(0x350),
            _0x4ef039(0x222),
            _0x4ef039(0x32f),
            "itf",
            _0x4ef039(0x331),
            "qr_code",
            _0x4ef039(0x2da),
            _0x4ef039(0x33b),
          ],
          _0x504813 = new BarcodeDetector({ formats: _0x3b940c }),
          _0xff3774 = await _0x504813[_0x4ef039(0xcb)](_0x13e660);
        console[_0x4ef039(0xb7)](
          "🔍\x20Códigos\x20detectados\x20por\x20API\x20nativa:\x20" +
            _0xff3774[_0x4ef039(0x155)],
          _0xff3774
        );
        if (_0xff3774[_0x4ef039(0x155)] > 0x0) {
          const _0x46a9a1 = _0xff3774[_0x4ef039(0x30f)]((_0x56cc4c) => {
            const _0x14f027 = _0x4ef039,
              _0x5f51cc = _0x56cc4c[_0x14f027(0x19b)][_0x14f027(0x162)]();
            console[_0x14f027(0xb7)](
              _0x14f027(0x195) +
                _0x5f51cc +
                _0x14f027(0x256) +
                _0x56cc4c["format"] +
                _0x14f027(0x21c) +
                _0x5f51cc[_0x14f027(0x155)]
            );
            switch (_0x56cc4c["format"]) {
              case "ean_13":
                return (
                  _0x5f51cc[_0x14f027(0x155)] === 0xd &&
                  /^\d{13}$/[_0x14f027(0x196)](_0x5f51cc)
                );
              case "upc_a":
                return (
                  _0x5f51cc["length"] === 0xc &&
                  /^\d{12}$/[_0x14f027(0x196)](_0x5f51cc)
                );
              case _0x14f027(0x32f):
                return (
                  _0x5f51cc["length"] === 0x8 &&
                  /^\d{8}$/[_0x14f027(0x196)](_0x5f51cc)
                );
              case _0x14f027(0x33b):
                return (
                  _0x5f51cc[_0x14f027(0x155)] >= 0x6 &&
                  _0x5f51cc["length"] <= 0x8 &&
                  /^\d+$/[_0x14f027(0x196)](_0x5f51cc)
                );
              case "code_128":
                return (
                  _0x5f51cc[_0x14f027(0x155)] >= 0x1 &&
                  _0x5f51cc["length"] <= 0x32
                );
              case _0x14f027(0x26c):
                return (
                  _0x5f51cc["length"] >= 0x1 &&
                  /^[A-Z0-9\-. $\/+%*]+$/[_0x14f027(0x196)](_0x5f51cc)
                );
              case _0x14f027(0x2ea):
                return (
                  _0x5f51cc[_0x14f027(0x155)] >= 0x1 &&
                  _0x5f51cc[_0x14f027(0x155)] <= 0x32
                );
              case _0x14f027(0x22c):
                return (
                  _0x5f51cc["length"] >= 0x3 &&
                  /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x14f027(0x196)](_0x5f51cc)
                );
              case "itf":
                return (
                  _0x5f51cc[_0x14f027(0x155)] >= 0x2 &&
                  _0x5f51cc["length"] % 0x2 === 0x0 &&
                  /^\d+$/[_0x14f027(0x196)](_0x5f51cc)
                );
              case "qr_code":
                return (
                  _0x5f51cc[_0x14f027(0x155)] >= 0x1 &&
                  _0x5f51cc[_0x14f027(0x155)] <= 0x10c8
                );
              case _0x14f027(0x350):
                return (
                  _0x5f51cc[_0x14f027(0x155)] >= 0x1 &&
                  _0x5f51cc["length"] <= 0xc2c
                );
              case _0x14f027(0x331):
                return (
                  _0x5f51cc[_0x14f027(0x155)] >= 0x1 &&
                  _0x5f51cc[_0x14f027(0x155)] <= 0xa96
                );
              case _0x14f027(0x283):
                return (
                  _0x5f51cc["length"] >= 0x1 &&
                  _0x5f51cc[_0x14f027(0x155)] <= 0xef8
                );
              default:
                return (
                  _0x5f51cc[_0x14f027(0x155)] >= 0x1 &&
                  _0x5f51cc["length"] <= 0x64
                );
            }
          });
          console["log"](_0x4ef039(0xce) + _0x46a9a1["length"]);
          if (_0x46a9a1["length"] > 0x0) {
            const _0x4229b7 = {
                ean_13: 0xa,
                upc_a: 0x9,
                ean_8: 0x8,
                upc_e: 0x7,
                code_128: 0x6,
                code_39: 0x5,
                code_93: 0x4,
                itf: 0x3,
                codabar: 0x2,
                qr_code: 0x1,
                data_matrix: 0x1,
                pdf417: 0x1,
                aztec: 0x1,
              },
              _0x192747 = _0x46a9a1["sort"]((_0x4a97dc, _0x31acf9) => {
                const _0x1c732c = _0x4ef039,
                  _0xcf3972 =
                    (_0x4229b7[_0x31acf9["format"]] || 0x0) -
                    (_0x4229b7[_0x4a97dc["format"]] || 0x0);
                if (_0xcf3972 !== 0x0) return _0xcf3972;
                if (
                  [
                    _0x1c732c(0x222),
                    "upc_a",
                    _0x1c732c(0x32f),
                    _0x1c732c(0x33b),
                    _0x1c732c(0x369),
                    _0x1c732c(0x26c),
                    _0x1c732c(0x2ea),
                    _0x1c732c(0xbc),
                    _0x1c732c(0x22c),
                  ][_0x1c732c(0x219)](_0x4a97dc[_0x1c732c(0x2c2)])
                ) {
                  const _0x492c61 =
                      _0x4a97dc[_0x1c732c(0x187)][_0x1c732c(0x33c)] *
                      _0x4a97dc[_0x1c732c(0x187)][_0x1c732c(0x363)],
                    _0x2f0a8a =
                      _0x31acf9[_0x1c732c(0x187)][_0x1c732c(0x33c)] *
                      _0x31acf9[_0x1c732c(0x187)]["height"];
                  return _0x2f0a8a - _0x492c61;
                }
                const _0x6cfc1c =
                    _0x4a97dc[_0x1c732c(0x187)]["x"] +
                    _0x4a97dc[_0x1c732c(0x187)][_0x1c732c(0x33c)] / 0x2,
                  _0x349ca4 =
                    _0x31acf9["boundingBox"]["x"] +
                    _0x31acf9[_0x1c732c(0x187)]["width"] / 0x2,
                  _0x2a9678 = _0x13e660[_0x1c732c(0x33c)] / 0x2;
                return (
                  Math[_0x1c732c(0x2a4)](_0x6cfc1c - _0x2a9678) -
                  Math[_0x1c732c(0x2a4)](_0x349ca4 - _0x2a9678)
                );
              }),
              _0x51ddac = _0x192747[0x0],
              _0x336888 = _0x51ddac[_0x4ef039(0x19b)]
                [_0x4ef039(0x162)]()
                [_0x4ef039(0x1ea)](/\s+$/, "");
            console[_0x4ef039(0xb7)](
              _0x4ef039(0x290) +
                _0x336888 +
                "\x22\x20(" +
                _0x51ddac["format"] +
                ")"
            ),
              (inputCodigo[_0x4ef039(0x261)] = _0x336888),
              form[_0x4ef039(0x157)](),
              URL["revokeObjectURL"](_0x13e660[_0x4ef039(0x2d9)]),
              (fileInput[_0x4ef039(0x261)] = "");
            return;
          }
        }
        console[_0x4ef039(0xb7)](_0x4ef039(0x2f2));
      } catch (_0x4dcb83) {
        console[_0x4ef039(0xb7)](_0x4ef039(0x351), _0x4dcb83);
      }
    } else console[_0x4ef039(0xb7)](_0x4ef039(0x36c));
    console[_0x4ef039(0xb7)](_0x4ef039(0x286)), usarQuaggaFallback(_0x13e660);
  } catch (_0x530c48) {
    console[_0x4ef039(0x2df)]("Error\x20procesando\x20imagen:", _0x530c48),
      (resultadoDiv["innerHTML"] = _0x4ef039(0x13d)),
      renderHistorial(),
      (fileInput["value"] = "");
  }
});
function usarQuaggaFallback(_0x239cd9) {
  const _0x495d80 = _0x930223;
  console[_0x495d80(0xb7)](_0x495d80(0x22f));
  const _0x300582 = document[_0x495d80(0x2b2)](_0x495d80(0xc4)),
    _0x180eed = _0x300582[_0x495d80(0x2f3)]("2d");
  let { width: _0x1d31a1, height: _0x19b58a } = _0x239cd9;
  const _0x1c3874 = 0x190;
  if (_0x1d31a1 < _0x1c3874 || _0x19b58a < _0x1c3874) {
    const _0x7479d0 =
      Math[_0x495d80(0x318)](_0x1c3874 / _0x1d31a1, _0x1c3874 / _0x19b58a) *
      1.5;
    (_0x1d31a1 *= _0x7479d0),
      (_0x19b58a *= _0x7479d0),
      console["log"](
        _0x495d80(0x16b) +
          _0x239cd9[_0x495d80(0x33c)] +
          "x" +
          _0x239cd9["height"] +
          _0x495d80(0x224) +
          _0x1d31a1 +
          "x" +
          _0x19b58a
      );
  }
  const _0x26413c = 0x5dc;
  if (_0x1d31a1 > _0x26413c || _0x19b58a > _0x26413c) {
    const _0x1fdafc = Math[_0x495d80(0x2e6)](
      _0x26413c / _0x1d31a1,
      _0x26413c / _0x19b58a
    );
    (_0x1d31a1 *= _0x1fdafc), (_0x19b58a *= _0x1fdafc);
  }
  (_0x300582[_0x495d80(0x33c)] = _0x1d31a1),
    (_0x300582["height"] = _0x19b58a),
    (_0x180eed[_0x495d80(0x330)] = ![]),
    _0x180eed[_0x495d80(0x2ff)](_0x239cd9, 0x0, 0x0, _0x1d31a1, _0x19b58a);
  const _0x3d51fb = _0x180eed["getImageData"](0x0, 0x0, _0x1d31a1, _0x19b58a),
    _0x38ffcc = _0x3d51fb[_0x495d80(0x122)];
  let _0x86d4b7 = new Array(0x100)[_0x495d80(0xbd)](0x0);
  for (
    let _0x3f8e87 = 0x0;
    _0x3f8e87 < _0x38ffcc[_0x495d80(0x155)];
    _0x3f8e87 += 0x4
  ) {
    const _0x529fa5 = Math[_0x495d80(0x148)](
      0.299 * _0x38ffcc[_0x3f8e87] +
        0.587 * _0x38ffcc[_0x3f8e87 + 0x1] +
        0.114 * _0x38ffcc[_0x3f8e87 + 0x2]
    );
    _0x86d4b7[_0x529fa5]++;
  }
  let _0x3c08d0 = 0x80,
    _0x5066a5 = 0x0;
  const _0x51e10a = _0x1d31a1 * _0x19b58a;
  for (let _0x516060 = 0x0; _0x516060 < 0x100; _0x516060++) {
    let _0x304b6f = 0x0,
      _0x5980c5 = 0x0,
      _0x4a1f8f = 0x0,
      _0x2cdbd4 = 0x0;
    for (let _0x383052 = 0x0; _0x383052 <= _0x516060; _0x383052++) {
      (_0x304b6f += _0x86d4b7[_0x383052]),
        (_0x4a1f8f += _0x383052 * _0x86d4b7[_0x383052]);
    }
    for (let _0x47c6fb = _0x516060 + 0x1; _0x47c6fb < 0x100; _0x47c6fb++) {
      (_0x5980c5 += _0x86d4b7[_0x47c6fb]),
        (_0x2cdbd4 += _0x47c6fb * _0x86d4b7[_0x47c6fb]);
    }
    if (_0x304b6f === 0x0 || _0x5980c5 === 0x0) continue;
    const _0x121172 = _0x4a1f8f / _0x304b6f,
      _0x4fe002 = _0x2cdbd4 / _0x5980c5,
      _0x3667d2 =
        _0x304b6f *
        _0x5980c5 *
        (_0x121172 - _0x4fe002) *
        (_0x121172 - _0x4fe002);
    _0x3667d2 > _0x5066a5 && ((_0x5066a5 = _0x3667d2), (_0x3c08d0 = _0x516060));
  }
  console["log"](_0x495d80(0x275) + _0x3c08d0);
  const _0x4cbffe = new Uint8ClampedArray(_0x38ffcc);
  for (
    let _0x270dda = 0x0;
    _0x270dda < _0x38ffcc[_0x495d80(0x155)];
    _0x270dda += 0x4
  ) {
    const _0x40dd1e = Math["round"](
        0.299 * _0x38ffcc[_0x270dda] +
          0.587 * _0x38ffcc[_0x270dda + 0x1] +
          0.114 * _0x38ffcc[_0x270dda + 0x2]
      ),
      _0x5119a5 = _0x40dd1e > _0x3c08d0 ? 0xff : 0x0;
    (_0x38ffcc[_0x270dda] = _0x5119a5),
      (_0x38ffcc[_0x270dda + 0x1] = _0x5119a5),
      (_0x38ffcc[_0x270dda + 0x2] = _0x5119a5);
  }
  _0x180eed[_0x495d80(0x166)](_0x3d51fb, 0x0, 0x0);
  let _0x50a061 = _0x300582[_0x495d80(0x36a)](_0x495d80(0x264));
  const _0xcf9bf7 = _0x180eed["createImageData"](_0x1d31a1, _0x19b58a),
    _0x2882e4 = _0xcf9bf7[_0x495d80(0x122)];
  for (
    let _0x4678ef = 0x0;
    _0x4678ef < _0x4cbffe[_0x495d80(0x155)];
    _0x4678ef += 0x4
  ) {
    const _0x2f5e56 = Math["round"](
        0.299 * _0x4cbffe[_0x4678ef] +
          0.587 * _0x4cbffe[_0x4678ef + 0x1] +
          0.114 * _0x4cbffe[_0x4678ef + 0x2]
      ),
      _0x41f4af = _0x2f5e56 > _0x3c08d0 * 0.7 ? 0xff : 0x0;
    (_0x2882e4[_0x4678ef] = _0x41f4af),
      (_0x2882e4[_0x4678ef + 0x1] = _0x41f4af),
      (_0x2882e4[_0x4678ef + 0x2] = _0x41f4af),
      (_0x2882e4[_0x4678ef + 0x3] = 0xff);
  }
  const _0x4eddf2 = document["createElement"](_0x495d80(0xc4));
  (_0x4eddf2["width"] = _0x1d31a1), (_0x4eddf2[_0x495d80(0x363)] = _0x19b58a);
  const _0x30a2b9 = _0x4eddf2[_0x495d80(0x2f3)]("2d");
  _0x30a2b9[_0x495d80(0x166)](_0xcf9bf7, 0x0, 0x0);
  const _0x27bfae = _0x4eddf2[_0x495d80(0x36a)](_0x495d80(0x264)),
    _0x54e2b8 = {
      src: _0x50a061,
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: { size: Math[_0x495d80(0x318)](_0x1d31a1, _0x19b58a) },
      locator: {
        patchSize: _0x495d80(0x126),
        halfSample: ![],
        debug: {
          showCanvas: ![],
          showPatches: ![],
          showFoundPatches: ![],
          showSkeleton: ![],
          showLabels: ![],
          showPatchLabels: ![],
          showRemainingPatchLabels: ![],
          boxFromPatches: {
            showTransformed: ![],
            showTransformedBox: ![],
            showBB: ![],
          },
        },
      },
      decoder: {
        readers: [
          _0x495d80(0x2f4),
          _0x495d80(0x33a),
          _0x495d80(0xe0),
          _0x495d80(0x301),
          _0x495d80(0x2bd),
          "code_39_reader",
          "code_39_vin_reader",
          _0x495d80(0x2cc),
          _0x495d80(0x243),
          _0x495d80(0x1e7),
          _0x495d80(0x368),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
  console["log"](_0x495d80(0x1b2));
  const _0x322603 = (_0x15efbf, _0x22fcf0, _0x483aae) => {
    const _0x3055b4 = _0x495d80;
    console["log"](_0x3055b4(0x39b) + _0x22fcf0);
    const _0xd69a30 = {
      src: _0x15efbf,
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: { size: Math[_0x3055b4(0x318)](_0x1d31a1, _0x19b58a) },
      locator: {
        patchSize:
          _0x22fcf0 === _0x3055b4(0x124) ? _0x3055b4(0xf3) : _0x3055b4(0x126),
        halfSample: _0x22fcf0 === _0x3055b4(0x296) ? !![] : ![],
        debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
      },
      decoder: {
        readers: [
          _0x3055b4(0x2f4),
          _0x3055b4(0x33a),
          "upc_reader",
          _0x3055b4(0x301),
          _0x3055b4(0x2bd),
          _0x3055b4(0x33d),
          _0x3055b4(0x302),
          _0x3055b4(0x2cc),
          _0x3055b4(0x243),
          _0x3055b4(0x1e7),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
    Quagga[_0x3055b4(0x176)](_0xd69a30, _0x483aae);
  };
  let _0x5d787d = [];
  _0x322603(_0x50a061, _0x495d80(0x341), function (_0x582394) {
    const _0x2dba07 = _0x495d80;
    if (_0x582394 && _0x582394[_0x2dba07(0x1bf)]) {
      let _0x4b938f = _0x582394["codeResult"][_0x2dba07(0xf0)]
        [_0x2dba07(0x162)]()
        [_0x2dba07(0x1ea)](/\s+$/, "");
      _0x5d787d[_0x2dba07(0x156)](
        _0x4b938f +
          "\x20(" +
          _0x582394[_0x2dba07(0x1bf)][_0x2dba07(0x2c2)] +
          ")"
      ),
        console["log"](
          _0x2dba07(0x340),
          _0x4b938f,
          _0x2dba07(0x101),
          _0x582394[_0x2dba07(0x1bf)]["format"]
        );
      if (validarCodigo(_0x4b938f, _0x582394["codeResult"][_0x2dba07(0x2c2)])) {
        (inputCodigo[_0x2dba07(0x261)] = _0x4b938f),
          form[_0x2dba07(0x157)](),
          URL[_0x2dba07(0x27f)](_0x239cd9[_0x2dba07(0x2d9)]),
          (fileInput["value"] = "");
        return;
      }
    }
    console[_0x2dba07(0xb7)](_0x2dba07(0x32d)),
      _0x322603(_0x27bfae, _0x2dba07(0x124), function (_0x3453e0) {
        const _0x54910f = _0x2dba07;
        if (_0x3453e0 && _0x3453e0["codeResult"]) {
          let _0x1139ae = _0x3453e0[_0x54910f(0x1bf)][_0x54910f(0xf0)]
            ["trim"]()
            [_0x54910f(0x1ea)](/\s+$/, "");
          _0x5d787d[_0x54910f(0x156)](
            _0x1139ae +
              "\x20(" +
              _0x3453e0[_0x54910f(0x1bf)][_0x54910f(0x2c2)] +
              ")"
          ),
            console[_0x54910f(0xb7)](
              _0x54910f(0x10a),
              _0x1139ae,
              _0x54910f(0x101),
              _0x3453e0[_0x54910f(0x1bf)][_0x54910f(0x2c2)]
            );
          if (validarCodigo(_0x1139ae, _0x3453e0[_0x54910f(0x1bf)]["format"])) {
            (inputCodigo[_0x54910f(0x261)] = _0x1139ae),
              form[_0x54910f(0x157)](),
              URL["revokeObjectURL"](_0x239cd9[_0x54910f(0x2d9)]),
              (fileInput[_0x54910f(0x261)] = "");
            return;
          }
        }
        console[_0x54910f(0xb7)](_0x54910f(0x22a)),
          intentarSegundaPasada(_0x239cd9, _0x5d787d);
      });
  });
}
function validarCodigo(_0x3b88ef, _0x29e5c2) {
  const _0x887fa = _0x930223;
  console["log"](
    "🔍\x20Validando:\x20\x22" +
      _0x3b88ef +
      _0x887fa(0x256) +
      _0x29e5c2 +
      _0x887fa(0x21c) +
      _0x3b88ef["length"]
  );
  switch (_0x29e5c2) {
    case _0x887fa(0x222):
      return (
        _0x3b88ef[_0x887fa(0x155)] === 0xd &&
        /^\d{13}$/[_0x887fa(0x196)](_0x3b88ef)
      );
    case _0x887fa(0x2da):
      return (
        _0x3b88ef[_0x887fa(0x155)] === 0xc && /^\d{12}$/["test"](_0x3b88ef)
      );
    case "ean_8":
      return (
        _0x3b88ef["length"] === 0x8 && /^\d{8}$/[_0x887fa(0x196)](_0x3b88ef)
      );
    case _0x887fa(0x33b):
      return (
        _0x3b88ef[_0x887fa(0x155)] >= 0x6 &&
        _0x3b88ef["length"] <= 0x8 &&
        /^\d+$/[_0x887fa(0x196)](_0x3b88ef)
      );
    case _0x887fa(0x369):
    case _0x887fa(0x26c):
    case _0x887fa(0x2ea):
      return (
        _0x3b88ef[_0x887fa(0x155)] >= 0x1 && _0x3b88ef[_0x887fa(0x155)] <= 0x32
      );
    case _0x887fa(0x22c):
      return (
        _0x3b88ef[_0x887fa(0x155)] >= 0x3 &&
        /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x887fa(0x196)](_0x3b88ef)
      );
    case "i2of5":
      return (
        _0x3b88ef[_0x887fa(0x155)] >= 0x2 &&
        _0x3b88ef[_0x887fa(0x155)] % 0x2 === 0x0 &&
        /^\d+$/[_0x887fa(0x196)](_0x3b88ef)
      );
    default:
      return (
        _0x3b88ef[_0x887fa(0x155)] >= 0x1 && _0x3b88ef[_0x887fa(0x155)] <= 0x32
      );
  }
}
function intentarSegundaPasada(_0x5d651e, _0x24e694 = []) {
  const _0x12bff2 = _0x930223;
  console[_0x12bff2(0xb7)](_0x12bff2(0x15e));
  const _0xcb0766 = document[_0x12bff2(0x2b2)](_0x12bff2(0xc4)),
    _0x192a94 = _0xcb0766[_0x12bff2(0x2f3)]("2d");
  let { width: _0x110984, height: _0x4322c8 } = _0x5d651e;
  const _0x26bbc9 = 0x640;
  if (_0x110984 < _0x26bbc9) {
    const _0x4f2aa4 = _0x26bbc9 / _0x110984;
    (_0x110984 *= _0x4f2aa4), (_0x4322c8 *= _0x4f2aa4);
  }
  (_0xcb0766[_0x12bff2(0x33c)] = _0x110984),
    (_0xcb0766[_0x12bff2(0x363)] = _0x4322c8),
    (_0x192a94[_0x12bff2(0x330)] = ![]),
    _0x192a94["drawImage"](_0x5d651e, 0x0, 0x0, _0x110984, _0x4322c8);
  const _0x41bff7 = _0x192a94["getImageData"](0x0, 0x0, _0x110984, _0x4322c8),
    _0x576cd4 = _0x41bff7[_0x12bff2(0x122)];
  for (
    let _0x202580 = 0x0;
    _0x202580 < _0x576cd4[_0x12bff2(0x155)];
    _0x202580 += 0x4
  ) {
    const _0x1bf372 = _0x576cd4[_0x202580],
      _0x51886a = _0x576cd4[_0x202580 + 0x1],
      _0x304310 = _0x576cd4[_0x202580 + 0x2],
      _0x5d79bc = 1.5,
      _0x479fc7 = Math[_0x12bff2(0x148)](
        0.299 * _0x1bf372 + 0.587 * _0x51886a + 0.114 * _0x304310
      ),
      _0x462541 = Math["min"](
        0xff,
        Math[_0x12bff2(0x318)](0x0, (_0x479fc7 - 0x80) * _0x5d79bc + 0x80)
      );
    (_0x576cd4[_0x202580] = _0x462541),
      (_0x576cd4[_0x202580 + 0x1] = _0x462541),
      (_0x576cd4[_0x202580 + 0x2] = _0x462541);
  }
  _0x192a94[_0x12bff2(0x166)](_0x41bff7, 0x0, 0x0);
  const _0x5bf865 = {
    src: _0xcb0766["toDataURL"](_0x12bff2(0x264)),
    numOfWorkers: 0x0,
    locate: !![],
    inputStream: {
      size: Math[_0x12bff2(0x318)](_0x110984, _0x4322c8),
      area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
    },
    locator: {
      patchSize: _0x12bff2(0xf3),
      halfSample: ![],
      debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
    },
    decoder: {
      readers: [
        _0x12bff2(0x2f4),
        "upc_reader",
        _0x12bff2(0x2bd),
        _0x12bff2(0x33d),
        _0x12bff2(0x33a),
        _0x12bff2(0x301),
        "i2of5_reader",
        _0x12bff2(0x243),
      ],
      multiple: !![],
      debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
    },
  };
  console[_0x12bff2(0xb7)](_0x12bff2(0x1dc)),
    Quagga[_0x12bff2(0x176)](_0x5bf865, function (_0x3043c2) {
      const _0x1a19c1 = _0x12bff2;
      if (_0x3043c2 && _0x3043c2["codeResult"]) {
        const _0x208e24 = _0x3043c2["codeResult"]["code"]
          ["trim"]()
          [_0x1a19c1(0x1ea)](/\s+$/, "");
        _0x24e694["push"](
          _0x208e24 +
            "\x20(" +
            _0x3043c2[_0x1a19c1(0x1bf)][_0x1a19c1(0x2c2)] +
            ")"
        ),
          console[_0x1a19c1(0xb7)](
            _0x1a19c1(0x143),
            _0x208e24,
            _0x1a19c1(0x101),
            _0x3043c2[_0x1a19c1(0x1bf)][_0x1a19c1(0x2c2)]
          );
        if (
          validarCodigo(
            _0x208e24,
            _0x3043c2[_0x1a19c1(0x1bf)][_0x1a19c1(0x2c2)]
          )
        ) {
          (inputCodigo[_0x1a19c1(0x261)] = _0x208e24), form[_0x1a19c1(0x157)]();
          return;
        }
      }
      console[_0x1a19c1(0xb7)](_0x1a19c1(0x348));
      let _0x34fe9b = "";
      _0x24e694[_0x1a19c1(0x155)] > 0x0 &&
        (_0x34fe9b =
          "<br>•\x20🔍\x20<strong>Códigos\x20detectados:</strong>\x20" +
          _0x24e694[_0x1a19c1(0x38b)](",\x20"));
      let _0x257927 = "";
      if (GOOGLE_VISION_CONFIG[_0x1a19c1(0x385)]) {
        const _0x9c0bd2 = visionUsageTracker["getUsageStatus"]();
        (_0x257927 =
          _0x1a19c1(0x2a3) +
          _0x9c0bd2[_0x1a19c1(0x28c)] +
          "/" +
          _0x9c0bd2[_0x1a19c1(0x3a3)] +
          _0x1a19c1(0xb5) +
          _0x9c0bd2["dailyUsed"] +
          "/" +
          _0x9c0bd2[_0x1a19c1(0x11c)] +
          _0x1a19c1(0x1ac)),
          verificarBackend()
            [_0x1a19c1(0x1bc)]((_0x168218) => {
              const _0x10efaa = _0x1a19c1;
              if (document[_0x10efaa(0x2fb)](".alert-danger")) {
                const _0x2d5648 = document["querySelector"](_0x10efaa(0x27e));
                _0x2d5648 &&
                  (_0x2d5648["innerHTML"] = _0x2d5648[_0x10efaa(0x179)][
                    _0x10efaa(0x1ea)
                  ](
                    "🌐\x20<strong>Backend:</strong>\x20Verificando...",
                    _0x10efaa(0x25d) + _0x168218[_0x10efaa(0x2b5)]
                  ));
              }
            })
            [_0x1a19c1(0x214)](() => {});
      }
      (resultadoDiv[_0x1a19c1(0x179)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20<strong>⚠️\x20No\x20se\x20detectó\x20código\x20válido</strong><br>\x0a\x20\x20\x20\x20\x20\x20Para\x20códigos\x20largos\x20como\x20este,\x20intenta:<br>\x0a\x20\x20\x20\x20\x20\x20•\x20📏\x20<strong>Recortar\x20muy\x20cerca\x20del\x20código</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20💡\x20<strong>Mejor\x20iluminación\x20uniforme</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20📱\x20<strong>Evitar\x20superficies\x20reflectivas</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20🔍\x20<strong>Imagen\x20más\x20nítida\x20y\x20estable</strong>" +
        _0x34fe9b +
        _0x257927 +
        _0x1a19c1(0x334)),
        renderHistorial();
    });
}
async function mostrarConfiguracion() {
  const _0x4086d8 = _0x930223,
    _0x270d84 = await verificarBackend();
  let _0x5d7d93 = null;
  if (CONFIG_ENDPOINTS[_0x4086d8(0x257)])
    try {
      const _0x2c4e24 = await fetch(
        CONFIG_ENDPOINTS[_0x4086d8(0x181)] + "?stats=true"
      );
      if (_0x2c4e24["ok"]) {
        const _0x3375bc = await _0x2c4e24[_0x4086d8(0x19f)]();
        _0x5d7d93 = _0x3375bc[_0x4086d8(0x131)];
      }
    } catch (_0x369de7) {
      console[_0x4086d8(0xb7)](_0x4086d8(0xda));
    }
  let _0x1fd8e2 = "";
  _0x5d7d93 &&
    (_0x1fd8e2 =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>🏷️\x20Sistema\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Productos:</strong>\x20" +
      _0x5d7d93["totalProductos"] +
      "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Códigos\x20totales:</strong>\x20" +
      _0x5d7d93[_0x4086d8(0xfa)] +
      _0x4086d8(0x37a) +
      _0x5d7d93[_0x4086d8(0x14e)] +
      _0x4086d8(0x288) +
      new Date(_0x5d7d93["ultimaActualizacion"])[_0x4086d8(0x1c9)]() +
      "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
    Swal[_0x4086d8(0x396)]({
      title: "⚙️\x20Configuración\x20de\x20detección\x20avanzada",
      html:
        _0x4086d8(0x2e0) +
        (GOOGLE_VISION_CONFIG[_0x4086d8(0x385)] ? _0x4086d8(0x188) : "") +
        _0x4086d8(0xf6) +
        (_0x270d84[_0x4086d8(0x1fb)] ? "alert-success" : _0x4086d8(0x172)) +
        _0x4086d8(0x115) +
        _0x270d84[_0x4086d8(0x2b5)] +
        "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Backend:\x20https://contador-apicloudvision.vercel.app/</small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-info\x20btn-sm\x22\x20onclick=\x22diagnosticarBackend()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Probar\x20Conexión\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x1fd8e2 +
        _0x4086d8(0x1e4),
      width: 0x258,
      showCancelButton: !![],
      confirmButtonText: "💾\x20Guardar",
      cancelButtonText: "❌\x20Cancelar",
      confirmButtonColor: _0x4086d8(0x185),
      cancelButtonColor: "#6c757d",
      preConfirm: () => {
        const _0x20ff22 = _0x4086d8,
          _0x113d30 = document[_0x20ff22(0x2d7)](_0x20ff22(0xd9))[
            _0x20ff22(0x188)
          ];
        return { enabled: _0x113d30 };
      },
    })["then"]((_0x45e859) => {
      const _0x49ec61 = _0x4086d8;
      if (_0x45e859[_0x49ec61(0x16c)]) {
        const { enabled: _0x447298 } = _0x45e859[_0x49ec61(0x261)];
        (GOOGLE_VISION_CONFIG[_0x49ec61(0x385)] = _0x447298),
          localStorage[_0x49ec61(0x221)](
            _0x49ec61(0x1cf),
            JSON[_0x49ec61(0x2b3)]({ enabled: _0x447298 })
          );
        const _0x4e0e8c = _0x447298 ? _0x49ec61(0x100) : _0x49ec61(0x21e);
        Swal["fire"]({
          title: _0x49ec61(0x1e6),
          text: _0x4e0e8c,
          icon: _0x49ec61(0xf1),
          timer: 0x7d0,
          showConfirmButton: ![],
        });
      }
    });
}
function cargarConfiguracionGuardada() {
  const _0x4d121f = _0x930223,
    _0x2c16db = localStorage[_0x4d121f(0x321)](_0x4d121f(0x1cf));
  if (_0x2c16db)
    try {
      const _0x14db28 = JSON[_0x4d121f(0x20b)](_0x2c16db);
      (GOOGLE_VISION_CONFIG[_0x4d121f(0x385)] =
        _0x14db28[_0x4d121f(0x385)] || ![]),
        GOOGLE_VISION_CONFIG[_0x4d121f(0x385)] &&
          console[_0x4d121f(0xb7)](_0x4d121f(0x359));
    } catch (_0x3227bd) {
      console["log"]("❌\x20Error\x20cargando\x20configuración:", _0x3227bd);
    }
}
_0x930223(0x1c5) in navigator &&
  window["addEventListener"](_0x930223(0xfc), () => {
    const _0x49016f = _0x930223;
    navigator[_0x49016f(0x1c5)]
      ["register"]("./service-worker.js")
      [_0x49016f(0x1bc)]((_0x46c517) => {
        const _0x328ec3 = _0x49016f;
        console[_0x328ec3(0xb7)](
          "✅\x20Service\x20Worker\x20registrado:",
          _0x46c517["scope"]
        ),
          _0x46c517["addEventListener"](_0x328ec3(0x390), () => {
            const _0x451235 = _0x328ec3;
            console["log"](_0x451235(0x13c));
            const _0x390e69 = _0x46c517["installing"];
            _0x390e69[_0x451235(0x1f5)](_0x451235(0x18b), () => {
              const _0x5471cd = _0x451235;
              _0x390e69["state"] === _0x5471cd(0x138) &&
                navigator["serviceWorker"][_0x5471cd(0x2fe)] &&
                (console[_0x5471cd(0xb7)](_0x5471cd(0x2b0)),
                confirm(
                  "Nueva\x20versión\x20disponible.\x20¿Recargar\x20la\x20página?"
                ) &&
                  (_0x390e69[_0x5471cd(0x14f)]({ type: _0x5471cd(0x364) }),
                  window[_0x5471cd(0x20a)]["reload"]()));
            });
          });
      })
      ["catch"]((_0x51bf5c) =>
        console[_0x49016f(0x2df)](
          "❌\x20Error\x20al\x20registrar\x20SW:",
          _0x51bf5c
        )
      ),
      navigator[_0x49016f(0x1c5)][_0x49016f(0x1f5)](_0x49016f(0xbf), () => {
        const _0x1a393c = _0x49016f;
        console["log"](_0x1a393c(0x294)),
          window[_0x1a393c(0x20a)][_0x1a393c(0xd8)]();
      });
  });
window[_0x930223(0x1f5)](_0x930223(0x175), (_0x1c66c8) => {
  const _0x22dead = _0x930223;
  _0x1c66c8["preventDefault"](),
    (deferredPrompt = _0x1c66c8),
    installBtn && installBtn["classList"][_0x22dead(0x134)]("d-none");
}),
  installBtn["addEventListener"]("click", (_0x17fce0) => {
    const _0x431058 = _0x930223;
    deferredPrompt &&
      (deferredPrompt[_0x431058(0x2a7)](),
      deferredPrompt[_0x431058(0x13b)][_0x431058(0x1bc)]((_0x36ed18) => {
        const _0x8e7361 = _0x431058;
        _0x36ed18[_0x8e7361(0x1f4)] === "accepted"
          ? console[_0x8e7361(0xb7)](_0x8e7361(0xf2))
          : console[_0x8e7361(0xb7)](_0x8e7361(0x30e)),
          (deferredPrompt = null),
          installBtn[_0x8e7361(0x1db)]["add"](_0x8e7361(0x238));
      }));
  });
_0x930223(0x1c5) in navigator &&
  (navigator[_0x930223(0x1c5)]
    [_0x930223(0x17f)]()
    ["then"](function (_0x25f31c) {
      const _0x2e9afc = _0x930223;
      for (let _0x2cfa07 of _0x25f31c) {
        _0x2cfa07[_0x2e9afc(0x20c)]();
      }
    }),
  navigator[_0x930223(0x1c5)][_0x930223(0x1f5)](_0x930223(0xbf), function () {
    const _0x2165b7 = _0x930223;
    window[_0x2165b7(0x20a)][_0x2165b7(0xd8)]();
  }));
const style = document[_0x930223(0x2b2)](_0x930223(0x252));
(style[_0x930223(0x179)] = _0x930223(0x1cb)),
  document["head"][_0x930223(0x346)](style);
async function verPromociones() {
  const _0x554018 = _0x930223;
  try {
    console[_0x554018(0xb7)](_0x554018(0x39e)),
      (document[_0x554018(0x2d7)](_0x554018(0x276))[_0x554018(0x179)] =
        _0x554018(0x1b3));
    const [_0x4e2f6a, _0x237d49] = await Promise[_0x554018(0xde)]([
      fetch(
        "https://verificadorb9-backend.vercel.app/api/promociones-mejoradas"
      ),
      getAllProductos(),
    ]);
    if (!_0x4e2f6a["ok"])
      throw new Error(
        _0x554018(0x147) +
          _0x4e2f6a[_0x554018(0x38e)] +
          ":\x20" +
          _0x4e2f6a["statusText"]
      );
    const _0x3210ef = await _0x4e2f6a[_0x554018(0x19f)]();
    console[_0x554018(0xb7)](_0x554018(0x274), _0x3210ef);
    let _0x5c082f = [];
    if (
      _0x3210ef[_0x554018(0x38e)] === _0x554018(0x23f) &&
      _0x3210ef[_0x554018(0x2d6)]
    )
      _0x5c082f = _0x3210ef[_0x554018(0x2d6)];
    else {
      if (Array[_0x554018(0x245)](_0x3210ef)) _0x5c082f = _0x3210ef;
      else throw new Error(_0x554018(0x22d));
    }
    if (_0x5c082f[_0x554018(0x155)] === 0x0) {
      document[_0x554018(0x2d7)](_0x554018(0x276))[_0x554018(0x179)] =
        _0x554018(0x1c1);
      return;
    }
    let _0x2b8984 = _0x554018(0x1de);
    _0x5c082f["forEach"]((_0x378d8b, _0x407425) => {
      const _0x2e6728 = _0x554018;
      let _0x1e0eca = [];
      if (_0x378d8b[_0x2e6728(0x15a)] && Array["isArray"](_0x378d8b["skus"]))
        _0x1e0eca = _0x378d8b[_0x2e6728(0x15a)];
      else
        _0x378d8b["pro_grupoProductos_primaria"] &&
          _0x378d8b["pro_grupoProductos_primaria"]["pr_sku"] &&
          (Array[_0x2e6728(0x245)](
            _0x378d8b[_0x2e6728(0x244)][_0x2e6728(0x1d3)]
          )
            ? (_0x1e0eca = _0x378d8b[_0x2e6728(0x244)][_0x2e6728(0x1d3)])
            : (_0x1e0eca = _0x378d8b["pro_grupoProductos_primaria"][
                _0x2e6728(0x1d3)
              ]
                [_0x2e6728(0x1c3)]("\x20")
                [_0x2e6728(0x30f)]((_0x1abb1b) =>
                  _0x1abb1b[_0x2e6728(0x162)]()
                )));
      const _0x1a140f = _0x1e0eca[_0x2e6728(0x2ed)]((_0x130acc) => {
          const _0x1b3442 = _0x2e6728;
          return _0x237d49[_0x1b3442(0x21b)](
            (_0x3da31d) => _0x3da31d[_0x1b3442(0x1d3)] === _0x130acc
          );
        })[_0x2e6728(0x30f)]((_0x2413e9) => _0x2413e9 !== undefined),
        _0x2d1b8a =
          _0x378d8b[_0x2e6728(0x114)] ||
          _0x378d8b[_0x2e6728(0xe7)] ||
          _0x2e6728(0x387) + (_0x407425 + 0x1),
        _0x4adb19 =
          _0x378d8b[_0x2e6728(0x216)] ||
          _0x378d8b[_0x2e6728(0x103)] ||
          _0x2e6728(0x32c),
        _0x255554 =
          _0x378d8b[_0x2e6728(0x167)] || _0x378d8b[_0x2e6728(0x2b5)] || "",
        _0x11d177 = _0x378d8b[_0x2e6728(0x1fc)] || "",
        _0x4b792b = Number(_0x11d177) || 0x1;
      let _0x3cd882 = 0x0;
      const _0x535c4f = (_0x255554 + "\x20" + _0x2d1b8a)[_0x2e6728(0x1e8)](),
        _0x16d304 = _0x535c4f[_0x2e6728(0x1e0)](/(\d+)\s*x\s*(\d+)/);
      if (_0x16d304) _0x3cd882 = Number(_0x16d304[0x2]);
      else {
        const _0x382c7e = Number(_0x378d8b[_0x2e6728(0x1a0)]) || 0x0;
        _0x3cd882 = _0x382c7e * _0x4b792b;
      }
      let _0x1b0e87 = 0x0,
        _0x54de97 = 0x0;
      if (_0x1a140f[_0x2e6728(0x155)] > 0x0 && _0x11d177 && _0x3cd882 > 0x0) {
        const _0x173791 = _0x1a140f[_0x2e6728(0x2ed)]((_0xa649d1) => {
            const _0x3b51fb = _0x2e6728;
            let _0x2f5ecc =
              Number(_0xa649d1[_0x3b51fb(0x1a6)]) ||
              Number(_0xa649d1["L1"]) ||
              0x0;
            return Math[_0x3b51fb(0x148)](_0x2f5ecc * 1.16 * 0x64) / 0x64;
          }),
          _0x290905 =
            _0x173791[_0x2e6728(0x12a)](
              (_0x33571d, _0x5d98de) => _0x33571d + _0x5d98de,
              0x0
            ) / _0x173791[_0x2e6728(0x155)];
        (_0x1b0e87 =
          Math[_0x2e6728(0x148)](_0x290905 * _0x4b792b * 0x64) / 0x64),
          (_0x54de97 = Math["round"]((_0x1b0e87 - _0x3cd882) * 0x64) / 0x64);
      }
      let _0x574ce1 = "";
      if (_0x1a140f[_0x2e6728(0x155)] > 0x0) {
        const _0x4eaa61 = _0x1a140f[_0x2e6728(0x353)](0x0, 0x4)
          ["map"]((_0x561d1c) => {
            const _0x2ba2d6 = _0x2e6728;
            let _0x16ffcd = "";
            if (
              _0x561d1c[_0x2ba2d6(0x1ce)] &&
              _0x561d1c[_0x2ba2d6(0x1ce)][_0x2ba2d6(0x162)]() !== ""
            ) {
              if (
                _0x561d1c[_0x2ba2d6(0x1ce)][_0x2ba2d6(0x2b7)](_0x2ba2d6(0xb6))
              )
                _0x16ffcd = _0x561d1c["pr_imagen"];
              else {
                let _0x3ead3f = _0x561d1c[_0x2ba2d6(0x1ce)][_0x2ba2d6(0x2b7)](
                  "/"
                )
                  ? _0x561d1c[_0x2ba2d6(0x1ce)]
                  : "/" + _0x561d1c[_0x2ba2d6(0x1ce)];
                _0x16ffcd = _0x2ba2d6(0x1eb) + _0x3ead3f;
              }
            }
            return _0x16ffcd
              ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22" +
                  _0x16ffcd +
                  _0x2ba2d6(0x130) +
                  _0x561d1c[_0x2ba2d6(0x2f0)] +
                  _0x2ba2d6(0x370) +
                  _0x561d1c[_0x2ba2d6(0x2f0)] +
                  _0x2ba2d6(0x2b4) +
                  _0x561d1c[_0x2ba2d6(0x1d3)] +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22" +
                  _0x561d1c[_0x2ba2d6(0x1d3)] +
                  "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              : _0x2ba2d6(0x399) +
                  _0x561d1c["pr_name"] +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20" +
                  _0x561d1c[_0x2ba2d6(0x1d3)] +
                  _0x2ba2d6(0x2e7) +
                  _0x561d1c[_0x2ba2d6(0x1d3)] +
                  _0x2ba2d6(0x20d);
          })
          [_0x2e6728(0x38b)]("");
        _0x574ce1 =
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📦\x20Productos\x20en\x20promoción:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          _0x4eaa61 +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x1a140f[_0x2e6728(0x155)] > 0x4
            ? _0x2e6728(0x192) +
              (_0x1a140f[_0x2e6728(0x155)] - 0x4) +
              "\x20producto" +
              (_0x1a140f[_0x2e6728(0x155)] - 0x4 > 0x1 ? "s" : "") +
              _0x2e6728(0x395)
            : "") +
          _0x2e6728(0x300);
      }
      _0x2b8984 +=
        _0x2e6728(0x136) +
        _0x2d1b8a +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>" +
        _0x4adb19[_0x2e6728(0x1ea)](_0x2e6728(0x393), _0x2e6728(0xc0)) +
        "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x255554 && _0x255554 !== _0x2d1b8a
          ? _0x2e6728(0x329) + _0x255554 + _0x2e6728(0x1e1)
          : "") +
        _0x2e6728(0x15c) +
        (_0x3cd882 > 0x0
          ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x20p-3\x20bg-light\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>" +
            _0x4b792b +
            _0x2e6728(0x233) +
            _0x3cd882[_0x2e6728(0x1c9)](_0x2e6728(0x320)) +
            _0x2e6728(0x140) +
            (_0x1b0e87 > 0x0
              ? _0x2e6728(0x31a) +
                _0x1b0e87[_0x2e6728(0x1c9)](_0x2e6728(0x320)) +
                _0x2e6728(0xc8)
              : _0x2e6728(0xc9)) +
            _0x2e6728(0x159) +
            (_0x54de97 > 0x0
              ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:\x200.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💰\x20Ahorras\x20$" +
                _0x54de97["toLocaleString"](_0x2e6728(0x320)) +
                _0x2e6728(0x1a9) +
                _0x4b792b +
                "\x20unidades\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              : "") +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
          : _0x2e6728(0x168) +
            (_0x11d177 ? _0x2e6728(0x15b) + _0x11d177 + _0x2e6728(0x1d6) : "") +
            _0x2e6728(0x251) +
            (precioPromo
              ? _0x2e6728(0xc6) +
                precioPromo +
                "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Precio\x20promocional</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              : "") +
            _0x2e6728(0xdc)) +
        _0x2e6728(0x15c) +
        _0x574ce1 +
        _0x2e6728(0x15c) +
        (_0x1a140f[_0x2e6728(0x155)] > 0x0
          ? _0x2e6728(0x316) +
            _0x1a140f["map"](
              (_0x461aed, _0x24909c) =>
                _0x2e6728(0x26d) +
                (_0x24909c < _0x1a140f[_0x2e6728(0x155)] - 0x1
                  ? _0x2e6728(0xef)
                  : "") +
                _0x2e6728(0x146) +
                _0x461aed["pr_name"] +
                _0x2e6728(0x236) +
                _0x461aed["pr_sku"] +
                _0x2e6728(0x37d) +
                (_0x461aed[_0x2e6728(0x2e4)]
                  ? "<small\x20class=\x22text-muted\x20d-block\x22><strong>Código:</strong>\x20" +
                    _0x461aed[_0x2e6728(0x2e4)] +
                    "</small>"
                  : "") +
                _0x2e6728(0x21d) +
                (() => {
                  const _0x304b36 = _0x2e6728;
                  let _0x38caf8 =
                      Number(_0x461aed[_0x304b36(0x1a6)]) ||
                      Number(_0x461aed["L1"]) ||
                      0x0,
                    _0x218f2b =
                      Math[_0x304b36(0x148)](_0x38caf8 * 1.16 * 0x64) / 0x64;
                  return _0x218f2b > 0x0
                    ? _0x304b36(0x25c) + _0x218f2b["toFixed"](0x2) + "</small>"
                    : "";
                })() +
                _0x2e6728(0x24e)
            )[_0x2e6728(0x38b)]("") +
            _0x2e6728(0x273)
          : "") +
        _0x2e6728(0x15c) +
        (_0x1e0eca["length"] > _0x1a140f["length"]
          ? _0x2e6728(0x237) +
            _0x1e0eca[_0x2e6728(0x155)] +
            _0x2e6728(0x1f2) +
            _0x1a140f["length"] +
            "\x20con\x20datos\x20disponibles)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            _0x1e0eca[_0x2e6728(0x353)](0x0, 0x6)
              ["map"](
                (_0x198697) => _0x2e6728(0x2f8) + _0x198697 + _0x2e6728(0x2be)
              )
              [_0x2e6728(0x38b)]("") +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            (_0x1e0eca[_0x2e6728(0x155)] > 0x6
              ? _0x2e6728(0xee) +
                (_0x1e0eca[_0x2e6728(0x155)] - 0x6) +
                _0x2e6728(0x1b6)
              : "") +
            _0x2e6728(0x273)
          : "") +
        _0x2e6728(0x15c) +
        (_0x378d8b["validFrom"] && _0x378d8b[_0x2e6728(0x207)]
          ? _0x2e6728(0x1d7) +
            _0x378d8b[_0x2e6728(0x29a)] +
            "\x20al\x20" +
            _0x378d8b[_0x2e6728(0x207)] +
            _0x2e6728(0x379)
          : "") +
        _0x2e6728(0x30a);
    }),
      (_0x2b8984 += "</div>"),
      (_0x2b8984 += _0x554018(0xe1)),
      (document[_0x554018(0x2d7)](_0x554018(0x276))[_0x554018(0x179)] =
        _0x2b8984);
    const _0x2cf81f = document[_0x554018(0x268)](_0x554018(0x153));
    _0x2cf81f[_0x554018(0x389)]((_0x351a1a) => {
      const _0x30e981 = _0x554018;
      _0x351a1a[_0x30e981(0x1f5)](_0x30e981(0x2d4), function (_0x2df187) {
        const _0x4f8bf5 = _0x30e981;
        _0x2df187[_0x4f8bf5(0x171)]();
        const _0x22b866 = _0x351a1a[_0x4f8bf5(0x339)](_0x4f8bf5(0x335));
        navigator[_0x4f8bf5(0x333)] &&
          navigator["clipboard"]
            [_0x4f8bf5(0x1a4)](_0x22b866)
            [_0x4f8bf5(0x1bc)](() => {
              const _0x583f26 = _0x4f8bf5,
                _0x58b95b = _0x351a1a[_0x583f26(0x179)];
              (_0x351a1a[_0x583f26(0x179)] = "✅"),
                _0x351a1a[_0x583f26(0x1db)]["remove"](_0x583f26(0x24b)),
                _0x351a1a[_0x583f26(0x1db)]["add"](_0x583f26(0x365)),
                setTimeout(() => {
                  const _0x2eaa24 = _0x583f26;
                  (_0x351a1a["innerHTML"] = _0x58b95b),
                    _0x351a1a[_0x2eaa24(0x1db)][_0x2eaa24(0x134)](
                      _0x2eaa24(0x365)
                    ),
                    _0x351a1a[_0x2eaa24(0x1db)][_0x2eaa24(0x338)](
                      _0x2eaa24(0x24b)
                    );
                }, 0x4b0);
            })
            [_0x4f8bf5(0x214)]((_0x446913) => {
              const _0x32a11e = _0x4f8bf5;
              console[_0x32a11e(0x2df)](_0x32a11e(0x198), _0x446913);
              const _0x31bbe4 = _0x351a1a[_0x32a11e(0x179)];
              (_0x351a1a["innerHTML"] = "❌"),
                setTimeout(() => {
                  const _0x5ac5e9 = _0x32a11e;
                  _0x351a1a[_0x5ac5e9(0x179)] = _0x31bbe4;
                }, 0x4b0);
            });
      });
    });
  } catch (_0x1797e4) {
    console[_0x554018(0x2df)](_0x554018(0x137), _0x1797e4),
      (document["getElementById"](_0x554018(0x276))["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudieron\x20cargar\x20las\x20promociones:\x20" +
        _0x1797e4[_0x554018(0xe2)] +
        _0x554018(0x27c));
  }
}
cargarConfiguracionGuardada(), renderHistorial();
const mobileModalStyles = document[_0x930223(0x2b2)](_0x930223(0x252));
(mobileModalStyles[_0x930223(0x249)] = _0x930223(0x272)),
  document[_0x930223(0x17e)][_0x930223(0x346)](mobileModalStyles);
