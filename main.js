const _0x146931 = _0x4e0e;
(function (_0x5c57c3, _0x322a12) {
  const _0x46af80 = _0x4e0e,
    _0x3e5502 = _0x5c57c3();
  while (!![]) {
    try {
      const _0x325787 =
        (parseInt(_0x46af80(0x296)) / 0x1) *
          (parseInt(_0x46af80(0x1b5)) / 0x2) +
        (parseInt(_0x46af80(0x3af)) / 0x3) *
          (parseInt(_0x46af80(0x1cc)) / 0x4) +
        parseInt(_0x46af80(0x1db)) / 0x5 +
        (-parseInt(_0x46af80(0x475)) / 0x6) *
          (-parseInt(_0x46af80(0x1ea)) / 0x7) +
        -parseInt(_0x46af80(0x2a8)) / 0x8 +
        (parseInt(_0x46af80(0x254)) / 0x9) *
          (-parseInt(_0x46af80(0x1a9)) / 0xa) +
        -parseInt(_0x46af80(0x390)) / 0xb;
      if (_0x325787 === _0x322a12) break;
      else _0x3e5502["push"](_0x3e5502["shift"]());
    } catch (_0x1f29b6) {
      _0x3e5502["push"](_0x3e5502["shift"]());
    }
  }
})(_0x5165, 0xc4d93),
  document[_0x146931(0x4a7)](_0x146931(0x304), function () {
    const _0x19287f = _0x146931;
    console[_0x19287f(0x2db)](
      "🚀\x20DOM\x20completamente\x20cargado,\x20inicializando\x20aplicación..."
    );
  });
const form = document[_0x146931(0x539)]("formulario"),
  inputCodigo = document[_0x146931(0x539)]("codigo"),
  readerDiv = document[_0x146931(0x539)](_0x146931(0x4bb)),
  ayudaTexto = document[_0x146931(0x539)](_0x146931(0x426)),
  installBtn = document[_0x146931(0x539)]("installBtn");
(!form || !inputCodigo) &&
  console[_0x146931(0x233)](_0x146931(0x4fc), {
    form: !!form,
    inputCodigo: !!inputCodigo,
  });
inputCodigo &&
  (inputCodigo["setAttribute"]("autocomplete", _0x146931(0x2cb)),
  inputCodigo[_0x146931(0x2de)]("spellcheck", "false"),
  inputCodigo[_0x146931(0x2de)](_0x146931(0x4ec), _0x146931(0x2cb)));
inputCodigo[_0x146931(0x2de)](_0x146931(0x21d), _0x146931(0x2cb)),
  inputCodigo[_0x146931(0x2de)](_0x146931(0x450), _0x146931(0x1fb)),
  form["setAttribute"](_0x146931(0x194), _0x146931(0x2cb));
let scannerActivo = ![],
  html5QrCodeGlobal = null,
  ultimoCodigoEscaneado = "",
  ultimoTiempoEscaneo = 0x0;
const INTERVALO_ESCANEO = 0x7d0;
let deferredPrompt,
  puedeEscanear = !![],
  datosYaCargados = ![];
if (!window[_0x146931(0x32a)]) {
  const script = document[_0x146931(0x2b4)](_0x146931(0x44d));
  (script[_0x146931(0x24b)] =
    "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"),
    (script[_0x146931(0x400)] = !![]),
    document[_0x146931(0x3b1)][_0x146931(0x249)](script);
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
    const _0x33c319 = _0x146931;
    (this["storageKey"] = "googleVisionUsage"), this[_0x33c319(0x405)]();
  }
  [_0x146931(0x405)]() {
    const _0x18b8cf = _0x146931,
      _0x369260 = localStorage[_0x18b8cf(0x179)](this[_0x18b8cf(0x520)]);
    _0x369260
      ? (this[_0x18b8cf(0x454)] = JSON["parse"](_0x369260))
      : this[_0x18b8cf(0x2e1)]();
    const _0x5f1abe = new Date()["getMonth"]();
    this[_0x18b8cf(0x454)][_0x18b8cf(0x501)] !== _0x5f1abe &&
      this[_0x18b8cf(0x2e1)]();
  }
  [_0x146931(0x2e1)]() {
    const _0x63cfe4 = _0x146931;
    (this["usage"] = {
      month: new Date()[_0x63cfe4(0x340)](),
      year: new Date()[_0x63cfe4(0x24a)](),
      monthlyCount: 0x0,
      dailyCount: 0x0,
      lastUsedDate: new Date()[_0x63cfe4(0x16b)](),
      history: [],
    }),
      this[_0x63cfe4(0x313)]();
  }
  [_0x146931(0x313)]() {
    const _0x1a601b = _0x146931;
    localStorage[_0x1a601b(0x2c9)](
      this[_0x1a601b(0x520)],
      JSON[_0x1a601b(0x4d8)](this[_0x1a601b(0x454)])
    );
  }
  [_0x146931(0x27f)]() {
    const _0x5944a7 = _0x146931,
      _0x2209a3 = new Date()[_0x5944a7(0x16b)]();
    this[_0x5944a7(0x454)][_0x5944a7(0x280)] !== _0x2209a3 &&
      ((this[_0x5944a7(0x454)][_0x5944a7(0x2ba)] = 0x0),
      (this[_0x5944a7(0x454)][_0x5944a7(0x280)] = _0x2209a3),
      this[_0x5944a7(0x313)]());
    const _0x601b56 =
        this[_0x5944a7(0x454)][_0x5944a7(0x4e4)] <
        GOOGLE_VISION_CONFIG[_0x5944a7(0x1a1)],
      _0x3b64ab =
        this["usage"]["dailyCount"] < GOOGLE_VISION_CONFIG[_0x5944a7(0x425)];
    return _0x601b56 && _0x3b64ab;
  }
  [_0x146931(0x1ed)]() {
    const _0x27ba7c = _0x146931;
    this[_0x27ba7c(0x454)]["monthlyCount"]++,
      this[_0x27ba7c(0x454)][_0x27ba7c(0x2ba)]++,
      this[_0x27ba7c(0x454)][_0x27ba7c(0x3f1)][_0x27ba7c(0x18e)]({
        date: new Date()[_0x27ba7c(0x4c3)](),
        count: this["usage"][_0x27ba7c(0x4e4)],
      }),
      this["usage"][_0x27ba7c(0x3f1)][_0x27ba7c(0x428)] > 0x32 &&
        (this["usage"][_0x27ba7c(0x3f1)] =
          this[_0x27ba7c(0x454)][_0x27ba7c(0x3f1)][_0x27ba7c(0x487)](-0x32)),
      this[_0x27ba7c(0x313)]();
  }
  ["getUsageStatus"]() {
    const _0x540f08 = _0x146931;
    return {
      monthlyUsed: this[_0x540f08(0x454)]["monthlyCount"],
      monthlyLimit: GOOGLE_VISION_CONFIG[_0x540f08(0x1a1)],
      dailyUsed: this[_0x540f08(0x454)][_0x540f08(0x2ba)],
      dailyLimit: GOOGLE_VISION_CONFIG[_0x540f08(0x425)],
      remainingMonthly:
        GOOGLE_VISION_CONFIG["monthlyLimit"] -
        this[_0x540f08(0x454)]["monthlyCount"],
      remainingDaily:
        GOOGLE_VISION_CONFIG["dailyLimit"] -
        this[_0x540f08(0x454)]["dailyCount"],
      canUse: this["canUseAPI"](),
    };
  }
  ["showUsageWarning"]() {
    const _0xe56c6 = _0x146931,
      _0x48b750 = this[_0xe56c6(0x2d8)]();
    if (_0x48b750[_0xe56c6(0x3a4)] >= GOOGLE_VISION_CONFIG[_0xe56c6(0x22f)])
      return (
        "⚠️\x20<strong>Límite\x20cerca:</strong>\x20" +
        _0x48b750[_0xe56c6(0x3a4)] +
        "/" +
        _0x48b750[_0xe56c6(0x1a1)] +
        _0xe56c6(0x49b)
      );
    if (
      _0x48b750[_0xe56c6(0x1cd)] >=
      GOOGLE_VISION_CONFIG[_0xe56c6(0x425)] * 0.8
    )
      return (
        "⚠️\x20<strong>Límite\x20diario\x20cerca:</strong>\x20" +
        _0x48b750[_0xe56c6(0x1cd)] +
        "/" +
        _0x48b750["dailyLimit"] +
        _0xe56c6(0x42f)
      );
    return null;
  }
}
const visionUsageTracker = new GoogleVisionUsageTracker();
async function detectarConGoogleVision(_0x52925c) {
  const _0x5b61e0 = _0x146931;
  console[_0x5b61e0(0x2db)](_0x5b61e0(0x203));
  const _0x158d53 = document[_0x5b61e0(0x2b4)]("canvas"),
    _0x382c0f = _0x158d53[_0x5b61e0(0x220)]("2d");
  let { width: _0x51d4f0, height: _0x2cd7aa } = _0x52925c;
  const _0x14b63a = 0x400;
  if (_0x51d4f0 > _0x14b63a || _0x2cd7aa > _0x14b63a) {
    const _0x4d8ca3 = Math["min"](_0x14b63a / _0x51d4f0, _0x14b63a / _0x2cd7aa);
    (_0x51d4f0 *= _0x4d8ca3), (_0x2cd7aa *= _0x4d8ca3);
  }
  (_0x158d53[_0x5b61e0(0x300)] = _0x51d4f0),
    (_0x158d53[_0x5b61e0(0x45a)] = _0x2cd7aa),
    _0x382c0f[_0x5b61e0(0x530)](_0x52925c, 0x0, 0x0, _0x51d4f0, _0x2cd7aa);
  const _0x2dddb6 = _0x158d53[_0x5b61e0(0x4b7)]("image/jpeg", 0.9);
  console[_0x5b61e0(0x2db)](_0x5b61e0(0x477));
  try {
    const _0xa0a4cf = await fetch(
      "https://contador-apicloudvision.vercel.app/api/vision-detect",
      {
        method: _0x5b61e0(0x2d3),
        headers: { "Content-Type": _0x5b61e0(0x359) },
        body: JSON["stringify"]({
          image: _0x2dddb6,
          userAgent: navigator["userAgent"]["substring"](0x0, 0x32),
          timestamp: new Date()[_0x5b61e0(0x4c3)](),
        }),
      }
    );
    if (!_0xa0a4cf["ok"]) {
      const _0x1a04b7 = await _0xa0a4cf[_0x5b61e0(0x20e)]();
      throw new Error(
        _0x5b61e0(0x471) + _0xa0a4cf[_0x5b61e0(0x4ce)] + "\x20-\x20" + _0x1a04b7
      );
    }
    const _0x181ff4 = await _0xa0a4cf[_0x5b61e0(0x500)]();
    console[_0x5b61e0(0x2db)]("📊\x20Respuesta\x20del\x20backend:", _0x181ff4);
    if (_0x181ff4[_0x5b61e0(0x16e)])
      return (
        visionUsageTracker[_0x5b61e0(0x1ed)](),
        console[_0x5b61e0(0x2db)](_0x5b61e0(0x4dc)),
        console[_0x5b61e0(0x2db)](_0x5b61e0(0x4db)),
        extraerCodigoDeTexto(_0x181ff4[_0x5b61e0(0x34b)])
      );
    else throw new Error(_0x181ff4[_0x5b61e0(0x233)] || _0x5b61e0(0x311));
  } catch (_0x593502) {
    console[_0x5b61e0(0x2db)](_0x5b61e0(0x2fe), _0x593502[_0x5b61e0(0x354)]);
    if (_0x593502[_0x5b61e0(0x354)][_0x5b61e0(0x232)](_0x5b61e0(0x237)))
      console["log"](
        "🔧\x20Error\x20500:\x20Problema\x20interno\x20del\x20servidor"
      ),
        console[_0x5b61e0(0x2db)](_0x5b61e0(0x16c)),
        console[_0x5b61e0(0x2db)](
          "\x20\x20\x20•\x20Variable\x20GOOGLE_VISION_API_KEY\x20no\x20configurada\x20en\x20Vercel"
        ),
        console[_0x5b61e0(0x2db)](_0x5b61e0(0x308)),
        console[_0x5b61e0(0x2db)](
          "\x20\x20\x20•\x20API\x20Key\x20inválida\x20o\x20límites\x20excedidos"
        ),
        console[_0x5b61e0(0x2db)](_0x5b61e0(0x31e));
    else {
      if (
        _0x593502[_0x5b61e0(0x354)][_0x5b61e0(0x232)](_0x5b61e0(0x391)) ||
        _0x593502[_0x5b61e0(0x354)]["includes"](_0x5b61e0(0x486)) ||
        _0x593502[_0x5b61e0(0x354)][_0x5b61e0(0x232)](_0x5b61e0(0x257))
      )
        throw new Error(_0x5b61e0(0x39b));
    }
    throw _0x593502;
  }
}
function extraerCodigoDeTexto(_0x4edf6e) {
  const _0x257d20 = _0x146931,
    _0x3f101e = _0x4edf6e[_0x257d20(0x15d)][0x0]?.["textAnnotations"] || [];
  if (_0x3f101e[_0x257d20(0x428)] === 0x0)
    return console[_0x257d20(0x2db)](_0x257d20(0x169)), null;
  const _0x23287f = _0x3f101e[0x0]?.[_0x257d20(0x421)] || "";
  console[_0x257d20(0x2db)](_0x257d20(0x4ae), _0x23287f);
  const _0x3fb61f = [
    /\b(\d{13})\b/g,
    /\b(\d{12})\b/g,
    /\b(\d{8})\b/g,
    /\b(\d{6,8})\b/g,
    /\b([A-Z0-9\-]{4,20})\b/g,
  ];
  for (const _0x55fba9 of _0x3fb61f) {
    const _0x4a4efc = [..._0x23287f[_0x257d20(0x401)](_0x55fba9)];
    for (const _0x1e55c2 of _0x4a4efc) {
      const _0x3d0c84 = _0x1e55c2[0x1][_0x257d20(0x292)]();
      console[_0x257d20(0x2db)](_0x257d20(0x25c) + _0x3d0c84);
      if (validarCodigoPorLongitud(_0x3d0c84))
        return console["log"](_0x257d20(0x532) + _0x3d0c84), _0x3d0c84;
    }
  }
  return console[_0x257d20(0x2db)](_0x257d20(0x488)), null;
}
function validarCodigoPorLongitud(_0x544869) {
  const _0x54b954 = _0x146931;
  if (/^\d{13}$/[_0x54b954(0x1cb)](_0x544869)) return !![];
  if (/^\d{12}$/["test"](_0x544869)) return !![];
  if (/^\d{8}$/[_0x54b954(0x1cb)](_0x544869)) return !![];
  if (/^\d{6,8}$/[_0x54b954(0x1cb)](_0x544869)) return !![];
  if (
    /^[A-Z0-9\-]{4,20}$/[_0x54b954(0x1cb)](_0x544869) &&
    _0x544869[_0x54b954(0x428)] >= 0x4
  )
    return !![];
  return ![];
}
async function diagnosticarBackend() {
  const _0x3fb63c = _0x146931;
  console[_0x3fb63c(0x2db)](_0x3fb63c(0x429));
  const _0x3a64a9 = document[_0x3fb63c(0x539)](_0x3fb63c(0x3c3));
  _0x3a64a9 && (_0x3a64a9[_0x3fb63c(0x1ba)] = _0x3fb63c(0x269));
  let _0x4c1660 = "";
  try {
    const _0x12c725 = await fetch(_0x3fb63c(0x1e2));
    if (_0x12c725["ok"]) {
      console[_0x3fb63c(0x2db)](
        "✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente"
      );
      const _0x588ecb = await _0x12c725[_0x3fb63c(0x500)]();
      console["log"](_0x3fb63c(0x2f9), _0x588ecb),
        (_0x4c1660 +=
          "<div\x20class=\x22alert\x20alert-success\x22>✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente</div>");
    } else
      console[_0x3fb63c(0x2db)](
        "❌\x20Endpoint\x20/api/stats\x20falló:",
        _0x12c725[_0x3fb63c(0x4ce)]
      ),
        (_0x4c1660 +=
          _0x3fb63c(0x27a) + _0x12c725["status"] + _0x3fb63c(0x3cc));
    console[_0x3fb63c(0x2db)](_0x3fb63c(0x434));
    const _0x193880 = await fetch(
        "https://contador-apicloudvision.vercel.app/api/vision-detect",
        {
          method: _0x3fb63c(0x2d3),
          headers: { "Content-Type": "application/json" },
          body: JSON["stringify"]({
            image: _0x3fb63c(0x20b),
            userId: _0x3fb63c(0x51f),
          }),
        }
      ),
      _0x54ab55 = await _0x193880[_0x3fb63c(0x500)]();
    console[_0x3fb63c(0x2db)](
      "🧪\x20Respuesta\x20completa\x20vision-detect:",
      _0x54ab55
    ),
      console["log"](_0x3fb63c(0x225), _0x193880[_0x3fb63c(0x4ce)]);
    if (_0x193880[_0x3fb63c(0x4ce)] === 0x1f4) {
      console[_0x3fb63c(0x2db)](_0x3fb63c(0x379));
      if (_0x54ab55["details"]) {
        if (_0x54ab55[_0x3fb63c(0x460)][_0x3fb63c(0x232)](_0x3fb63c(0x1b9)))
          console[_0x3fb63c(0x2db)](_0x3fb63c(0x26a)),
            console[_0x3fb63c(0x2db)](_0x3fb63c(0x3dd)),
            console["log"](
              "🔗\x20Ve\x20a:\x20https://console.cloud.google.com/billing"
            ),
            (_0x4c1660 +=
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🏦\x20Problema\x20de\x20Facturación</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20facturación\x20no\x20está\x20habilitada\x20en\x20el\x20proyecto\x20correcto\x20(#1070150612422)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/billing\x22\x20target=\x22_blank\x22>Ve\x20a\x20Google\x20Cloud\x20Billing</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20");
        else {
          if (_0x54ab55["details"][_0x3fb63c(0x232)](_0x3fb63c(0x256)))
            console[_0x3fb63c(0x2db)](_0x3fb63c(0x462)),
              (_0x4c1660 += _0x3fb63c(0x259));
          else
            _0x54ab55["details"][_0x3fb63c(0x232)](_0x3fb63c(0x4cf))
              ? (console[_0x3fb63c(0x2db)](
                  "🚫\x20PROBLEMA:\x20Permisos\x20denegados\x20-\x20Vision\x20API\x20no\x20habilitada"
                ),
                console[_0x3fb63c(0x2db)](
                  "💡\x20Ve\x20a:\x20https://console.cloud.google.com/apis/library/vision.googleapis.com"
                ),
                (_0x4c1660 += _0x3fb63c(0x1c4)))
              : (console["log"](_0x3fb63c(0x33b)),
                console[_0x3fb63c(0x2db)](
                  _0x3fb63c(0x3e9),
                  _0x54ab55["details"]
                ),
                (_0x4c1660 += _0x3fb63c(0x47b)));
        }
      }
    } else
      _0x193880[_0x3fb63c(0x4ce)] === 0xc8 &&
        (console[_0x3fb63c(0x2db)](
          "🎉\x20¡Google\x20Vision\x20API\x20funcionando\x20correctamente!"
        ),
        (_0x4c1660 += _0x3fb63c(0x506)));
  } catch (_0x2598e7) {
    console[_0x3fb63c(0x2db)](_0x3fb63c(0x291), _0x2598e7["message"]),
      _0x2598e7["message"][_0x3fb63c(0x232)]("CORS")
        ? (console[_0x3fb63c(0x2db)](_0x3fb63c(0x39f)),
          (_0x4c1660 +=
            "<div\x20class=\x22alert\x20alert-danger\x22>🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers</div>"))
        : (_0x4c1660 +=
            "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Error\x20en\x20diagnóstico:\x20" +
            _0x2598e7[_0x3fb63c(0x354)] +
            _0x3fb63c(0x3cc));
  }
  _0x3a64a9 && (_0x3a64a9[_0x3fb63c(0x1ba)] = _0x4c1660);
}
async function verificarBackend() {
  const _0x7369c4 = _0x146931;
  try {
    const _0xbf07d6 = await fetch(_0x7369c4(0x1e2), {
      method: _0x7369c4(0x2a0),
      headers: { "Content-Type": _0x7369c4(0x359) },
    });
    if (_0xbf07d6["ok"]) {
      const _0x5560fe = await _0xbf07d6[_0x7369c4(0x500)]();
      return (
        console["log"]("✅\x20Backend\x20activo.\x20Estadísticas:", _0x5560fe),
        {
          activo: !![],
          stats: _0x5560fe,
          mensaje: "Google\x20Vision\x20API\x20activa\x20y\x20funcional",
        }
      );
    } else
      return (
        console[_0x7369c4(0x2db)](
          _0x7369c4(0x3e0),
          _0xbf07d6[_0x7369c4(0x4ce)]
        ),
        { activo: ![], mensaje: _0x7369c4(0x3ef) + _0xbf07d6["status"] }
      );
  } catch (_0x281d35) {
    return (
      console["log"](_0x7369c4(0x1b6), _0x281d35["message"]),
      { activo: ![], mensaje: _0x7369c4(0x372) }
    );
  }
}
async function mostrarEstadisticasUso() {
  const _0x461d59 = _0x146931,
    _0x3b2045 = visionUsageTracker[_0x461d59(0x2d8)](),
    _0x119661 = visionUsageTracker[_0x461d59(0x42b)]();
  let _0x19ed0b = _0x461d59(0x1b4);
  (_0x19ed0b +=
    "•\x20Mensual:\x20" +
    _0x3b2045["monthlyUsed"] +
    "/" +
    _0x3b2045["monthlyLimit"] +
    _0x461d59(0x387) +
    _0x3b2045[_0x461d59(0x184)] +
    _0x461d59(0x18d)),
    (_0x19ed0b +=
      _0x461d59(0x3d9) +
      _0x3b2045["dailyUsed"] +
      "/" +
      _0x3b2045["dailyLimit"] +
      _0x461d59(0x387) +
      _0x3b2045[_0x461d59(0x4d0)] +
      ")");
  _0x119661 && (_0x19ed0b += _0x461d59(0x17f) + _0x119661);
  if (GOOGLE_VISION_CONFIG[_0x461d59(0x2e9)])
    try {
      const _0x52ee37 = await verificarBackend();
      _0x19ed0b +=
        "<br><br>🌐\x20<strong>Backend:</strong>\x20" +
        _0x52ee37[_0x461d59(0x430)];
    } catch (_0xe6d1d1) {
      _0x19ed0b += _0x461d59(0x229);
    }
  return _0x19ed0b;
}
function setCookie(_0x39c0a0, _0x2acbd9, _0x7b674f) {
  const _0x5a54da = _0x146931,
    _0x24cd99 = new Date(
      Date[_0x5a54da(0x52b)]() + _0x7b674f * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x5a54da(0x4a8)]();
  document[_0x5a54da(0x4aa)] =
    _0x39c0a0 +
    "=" +
    encodeURIComponent(_0x2acbd9) +
    _0x5a54da(0x527) +
    _0x24cd99 +
    ";\x20path=/";
}
function getCookie(_0x5a8ae4) {
  const _0x5bdb08 = _0x146931,
    _0x1a0a84 = ";\x20" + document[_0x5bdb08(0x4aa)],
    _0x40d8a1 = _0x1a0a84[_0x5bdb08(0x44e)](";\x20" + _0x5a8ae4 + "=");
  if (_0x40d8a1[_0x5bdb08(0x428)] === 0x2)
    return decodeURIComponent(
      _0x40d8a1[_0x5bdb08(0x404)]()[_0x5bdb08(0x44e)](";")["shift"]()
    );
  return null;
}
const historialDiv = document[_0x146931(0x539)]("historial"),
  resultadoDiv = document[_0x146931(0x539)](_0x146931(0x262)),
  DB_NAME = "verificadorB9DB",
  DB_STORE = "productos",
  DB_STORE_PROMOCIONES = _0x146931(0x28e);
let db;
function openDB() {
  return new Promise((_0x58ca7e, _0x1a9a7a) => {
    const _0x440b01 = _0x4e0e,
      _0x237ccb = indexedDB["open"](DB_NAME, 0x2);
    (_0x237ccb["onupgradeneeded"] = function (_0x54aa84) {
      const _0x187d06 = _0x4e0e;
      (db = _0x54aa84["target"][_0x187d06(0x36e)]),
        !db[_0x187d06(0x344)][_0x187d06(0x507)](DB_STORE) &&
          db[_0x187d06(0x1d2)](DB_STORE, {
            keyPath: "id",
            autoIncrement: !![],
          }),
        !db[_0x187d06(0x344)]["contains"](DB_STORE_PROMOCIONES) &&
          db[_0x187d06(0x1d2)](DB_STORE_PROMOCIONES, {
            keyPath: "id",
            autoIncrement: !![],
          });
    }),
      (_0x237ccb[_0x440b01(0x18b)] = function (_0xe817c9) {
        const _0x562cf6 = _0x440b01;
        (db = _0xe817c9[_0x562cf6(0x4f3)][_0x562cf6(0x36e)]), _0x58ca7e(db);
      }),
      (_0x237ccb[_0x440b01(0x2e6)] = function (_0xb49c36) {
        _0x1a9a7a(_0xb49c36);
      });
  });
}
function _0x4e0e(_0x48a293, _0x12cb4e) {
  const _0x5165f0 = _0x5165();
  return (
    (_0x4e0e = function (_0x4e0e54, _0x2ce94d) {
      _0x4e0e54 = _0x4e0e54 - 0x14e;
      let _0x20b645 = _0x5165f0[_0x4e0e54];
      return _0x20b645;
    }),
    _0x4e0e(_0x48a293, _0x12cb4e)
  );
}
function clearProductos() {
  const _0x1ef3ca = _0x146931;
  return openDB()[_0x1ef3ca(0x2dd)]((_0x14a9be) => {
    return new Promise((_0x35569f, _0x12c6d5) => {
      const _0x151a25 = _0x4e0e,
        _0x2170eb = _0x14a9be[_0x151a25(0x1b2)](DB_STORE, _0x151a25(0x273));
      _0x2170eb[_0x151a25(0x3fa)](DB_STORE)[_0x151a25(0x45d)](),
        (_0x2170eb["oncomplete"] = _0x35569f),
        (_0x2170eb[_0x151a25(0x2e6)] = _0x12c6d5);
    });
  });
}
function saveProductos(_0x4077db) {
  const _0x2a5b81 = _0x146931;
  return openDB()[_0x2a5b81(0x2dd)]((_0x4c562d) => {
    return new Promise((_0x55fd3a, _0x13cf73) => {
      const _0x5cd354 = _0x4e0e,
        _0x26679a = _0x4c562d[_0x5cd354(0x1b2)](DB_STORE, _0x5cd354(0x273)),
        _0x12608c = _0x26679a[_0x5cd354(0x3fa)](DB_STORE);
      _0x4077db[_0x5cd354(0x395)]((_0x176ba5) =>
        _0x12608c[_0x5cd354(0x197)](_0x176ba5)
      ),
        (_0x26679a["oncomplete"] = _0x55fd3a),
        (_0x26679a[_0x5cd354(0x2e6)] = _0x13cf73);
    });
  });
}
function getAllProductos() {
  const _0x4f39ed = _0x146931;
  return openDB()[_0x4f39ed(0x2dd)]((_0x25d0ee) => {
    return new Promise((_0x100fda, _0x570ebb) => {
      const _0x55e8b2 = _0x4e0e,
        _0x8deaa9 = _0x25d0ee[_0x55e8b2(0x1b2)](DB_STORE, "readonly"),
        _0x365262 = _0x8deaa9[_0x55e8b2(0x3fa)](DB_STORE),
        _0x9667a2 = _0x365262[_0x55e8b2(0x1c2)]();
      (_0x9667a2["onsuccess"] = () => _0x100fda(_0x9667a2[_0x55e8b2(0x36e)])),
        (_0x9667a2[_0x55e8b2(0x2e6)] = _0x570ebb);
    });
  });
}
function clearPromociones() {
  const _0xa1ebce = _0x146931;
  return openDB()[_0xa1ebce(0x2dd)]((_0x4db530) => {
    return new Promise((_0x3663f0, _0x5bc2a3) => {
      const _0x3c05ea = _0x4e0e,
        _0x44ae85 = _0x4db530[_0x3c05ea(0x1b2)](
          DB_STORE_PROMOCIONES,
          "readwrite"
        );
      _0x44ae85[_0x3c05ea(0x3fa)](DB_STORE_PROMOCIONES)["clear"](),
        (_0x44ae85[_0x3c05ea(0x37e)] = _0x3663f0),
        (_0x44ae85["onerror"] = _0x5bc2a3);
    });
  });
}
function savePromociones(_0x5c3f5b) {
  return openDB()["then"]((_0x183881) => {
    return new Promise((_0x51df11, _0x18b810) => {
      const _0x23924a = _0x4e0e,
        _0x3721e6 = _0x183881["transaction"](
          DB_STORE_PROMOCIONES,
          _0x23924a(0x273)
        ),
        _0x2758b1 = _0x3721e6[_0x23924a(0x3fa)](DB_STORE_PROMOCIONES);
      _0x5c3f5b[_0x23924a(0x395)]((_0x360832) =>
        _0x2758b1[_0x23924a(0x197)](_0x360832)
      ),
        (_0x3721e6[_0x23924a(0x37e)] = _0x51df11),
        (_0x3721e6[_0x23924a(0x2e6)] = _0x18b810);
    });
  });
}
function getAllPromociones() {
  const _0x4aa3c5 = _0x146931;
  return openDB()[_0x4aa3c5(0x2dd)]((_0xa927e0) => {
    return new Promise((_0x24a62f, _0x1b9e33) => {
      const _0x29cc59 = _0x4e0e,
        _0x3b3a25 = _0xa927e0[_0x29cc59(0x1b2)](
          DB_STORE_PROMOCIONES,
          _0x29cc59(0x4e0)
        ),
        _0x42e636 = _0x3b3a25[_0x29cc59(0x3fa)](DB_STORE_PROMOCIONES),
        _0x35e6a7 = _0x42e636[_0x29cc59(0x1c2)]();
      (_0x35e6a7["onsuccess"] = () => _0x24a62f(_0x35e6a7[_0x29cc59(0x36e)])),
        (_0x35e6a7[_0x29cc59(0x2e6)] = _0x1b9e33);
    });
  });
}
const sugerenciasDiv = document[_0x146931(0x2b4)]("div");
(sugerenciasDiv["id"] = _0x146931(0x1a0)),
  (sugerenciasDiv["className"] = "list-group\x20position-absolute\x20w-100"),
  (sugerenciasDiv["style"][_0x146931(0x3db)] = _0x146931(0x21c)),
  (sugerenciasDiv[_0x146931(0x4e8)][_0x146931(0x3de)] = _0x146931(0x4e1)),
  (sugerenciasDiv[_0x146931(0x4e8)][_0x146931(0x35b)] = _0x146931(0x186)),
  (sugerenciasDiv["style"][_0x146931(0x234)] = "100%"),
  (sugerenciasDiv[_0x146931(0x4e8)][_0x146931(0x2aa)] = "0"),
  (sugerenciasDiv[_0x146931(0x4e8)]["right"] = "0"),
  (inputCodigo["parentNode"][_0x146931(0x4e8)][_0x146931(0x52e)] = "relative"),
  inputCodigo["parentNode"]["appendChild"](sugerenciasDiv);
const actualizarDiv = document["createElement"](_0x146931(0x2bd));
(actualizarDiv["className"] = _0x146931(0x42a)),
  (actualizarDiv[_0x146931(0x1ba)] = _0x146931(0x1a6)),
  historialDiv[_0x146931(0x4fb)]["insertBefore"](actualizarDiv, historialDiv);
const resultadosModalHTML =
  "\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22resultadosBusquedaModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22resultadosBusquedaModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22resultadosBusquedaModalLabel\x22>🔎\x20Resultados\x20de\x20Búsqueda</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22input-group-text\x22><i\x20class=\x22bi\x20bi-search\x22></i></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22busquedaModalInput\x22\x20class=\x22form-control\x22\x20placeholder=\x22Refinar\x20búsqueda...\x22\x20autocomplete=\x22off\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x22\x20type=\x22button\x22\x20id=\x22limpiarBusquedaModal\x22\x20title=\x22Limpiar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-x-lg\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x20text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22resultadosCount\x22>0\x20resultados</span>\x20•\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22tiempoBusqueda\x22>0ms</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22resultados-busqueda-body\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x20d-flex\x20flex-wrap\x20gap-2\x20align-items-center\x20justify-content-between\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22pageSizeSelect\x22\x20class=\x22mb-0\x22>Mostrar:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22pageSizeSelect\x22\x20class=\x22form-select\x20form-select-sm\x22\x20style=\x22width:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22\x20selected>10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2220\x22>20</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2250\x22>50</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-success\x20btn-sm\x20d-flex\x20align-items-center\x20gap-1\x22\x20id=\x22btnToggleVista\x22\x20title=\x22Cambiar\x20vista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-grid-3x3-gap\x22\x20id=\x22iconVista\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22labelVista\x22>Cuadros</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x22\x20id=\x22resultadosInfo\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnPrevResultados\x22>«\x20Anterior</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22pageIndicator\x22\x20class=\x22text-muted\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnNextResultados\x22>Siguiente\x20»</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22inputPageJump\x22\x20class=\x22form-control\x20form-control-sm\x22\x20style=\x22width:90px;\x22\x20min=\x221\x22\x20placeholder=\x22Ir\x20a...\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x20btn-sm\x22\x20id=\x22btnIrPagina\x22>Ir</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>";
document[_0x146931(0x53e)][_0x146931(0x3bd)]("beforeend", resultadosModalHTML);
let busquedaOriginalItems = [],
  busquedaTimeout = null,
  resultadosBusquedaState = {
    items: [],
    page: 0x1,
    pageSize: 0xa,
    query: "",
    originalQuery: "",
    view: _0x146931(0x3a0),
  };
function distanciaLevenshtein(_0x2457a4, _0xaa7f7d) {
  const _0x34df15 = _0x146931;
  if (_0x2457a4[_0x34df15(0x428)] === 0x0) return _0xaa7f7d["length"];
  if (_0xaa7f7d[_0x34df15(0x428)] === 0x0) return _0x2457a4[_0x34df15(0x428)];
  const _0x3b9f8e = Array(_0xaa7f7d[_0x34df15(0x428)] + 0x1)
    [_0x34df15(0x535)](null)
    [_0x34df15(0x41b)](() =>
      Array(_0x2457a4[_0x34df15(0x428)] + 0x1)[_0x34df15(0x535)](null)
    );
  for (
    let _0x39fdd6 = 0x0;
    _0x39fdd6 <= _0x2457a4[_0x34df15(0x428)];
    _0x39fdd6++
  )
    _0x3b9f8e[0x0][_0x39fdd6] = _0x39fdd6;
  for (let _0x54bf55 = 0x0; _0x54bf55 <= _0xaa7f7d["length"]; _0x54bf55++)
    _0x3b9f8e[_0x54bf55][0x0] = _0x54bf55;
  for (
    let _0x57dd76 = 0x1;
    _0x57dd76 <= _0xaa7f7d[_0x34df15(0x428)];
    _0x57dd76++
  ) {
    for (
      let _0x500f54 = 0x1;
      _0x500f54 <= _0x2457a4[_0x34df15(0x428)];
      _0x500f54++
    ) {
      const _0x42d735 =
        _0x2457a4[_0x500f54 - 0x1] === _0xaa7f7d[_0x57dd76 - 0x1] ? 0x0 : 0x1;
      _0x3b9f8e[_0x57dd76][_0x500f54] = Math[_0x34df15(0x3e5)](
        _0x3b9f8e[_0x57dd76][_0x500f54 - 0x1] + 0x1,
        _0x3b9f8e[_0x57dd76 - 0x1][_0x500f54] + 0x1,
        _0x3b9f8e[_0x57dd76 - 0x1][_0x500f54 - 0x1] + _0x42d735
      );
    }
  }
  return _0x3b9f8e[_0xaa7f7d[_0x34df15(0x428)]][_0x2457a4["length"]];
}
function calcularPuntuacionFuzzy(_0x18523a, _0x4588fd) {
  const _0x134884 = _0x146931;
  if (!_0x4588fd || _0x4588fd["trim"]() === "") return 0x1;
  const _0x34f26c = _0x4588fd["toLowerCase"]()["trim"](),
    _0x57a231 = _0x34f26c[_0x134884(0x44e)](/\s+/),
    _0x16df4b = (_0x18523a[_0x134884(0x177)] || "")["toLowerCase"](),
    _0x339c29 = (_0x18523a[_0x134884(0x346)] || "")
      ["toString"]()
      ["toLowerCase"](),
    _0x3d0ddd = (_0x18523a[_0x134884(0x4be)] || "")
      [_0x134884(0x496)]()
      [_0x134884(0x18f)]();
  let _0x16d65b = 0x0,
    _0x25e1b8 = 0x0;
  if (_0x339c29 === _0x34f26c || _0x3d0ddd === _0x34f26c) return 0x64;
  if (_0x16df4b === _0x34f26c) return 0x5f;
  if (
    _0x339c29[_0x134884(0x320)](_0x34f26c) ||
    _0x3d0ddd[_0x134884(0x320)](_0x34f26c)
  )
    _0x16d65b += 0x50;
  if (_0x16df4b[_0x134884(0x320)](_0x34f26c)) _0x16d65b += 0x46;
  if (_0x339c29[_0x134884(0x232)](_0x34f26c)) _0x16d65b += 0x3c;
  if (_0x3d0ddd[_0x134884(0x232)](_0x34f26c)) _0x16d65b += 0x3c;
  if (_0x16df4b[_0x134884(0x232)](_0x34f26c)) _0x16d65b += 0x32;
  for (const _0x149637 of _0x57a231) {
    if (_0x149637[_0x134884(0x428)] < 0x2) continue;
    _0x25e1b8 += 0xa;
    if (_0x16df4b[_0x134884(0x232)](_0x149637)) _0x16d65b += 0x8;
    if (_0x339c29[_0x134884(0x232)](_0x149637)) _0x16d65b += 0xa;
    if (_0x3d0ddd["includes"](_0x149637)) _0x16d65b += 0xa;
    if (_0x149637[_0x134884(0x428)] >= 0x3) {
      const _0x20d1ac = _0x16df4b[_0x134884(0x44e)](/\s+/);
      for (const _0x1e6b88 of _0x20d1ac) {
        if (_0x1e6b88["length"] >= 0x3) {
          const _0x185321 = distanciaLevenshtein(_0x149637, _0x1e6b88),
            _0xd389d5 =
              0x1 -
              _0x185321 /
                Math[_0x134884(0x41a)](
                  _0x149637[_0x134884(0x428)],
                  _0x1e6b88[_0x134884(0x428)]
                );
          _0xd389d5 > 0.7 &&
            ((_0x16d65b += _0xd389d5 * 0x5), (_0x25e1b8 += 0x5));
        }
      }
    }
  }
  return Math["min"](
    0x64,
    (_0x16d65b / Math[_0x134884(0x41a)](0x1, _0x25e1b8)) * 0x64
  );
}
function busquedaInteligente(_0x388e83, _0x2e9f52) {
  const _0x35a385 = _0x146931;
  if (!_0x2e9f52 || _0x2e9f52[_0x35a385(0x292)]() === "") return _0x388e83;
  const _0x28e353 = performance[_0x35a385(0x52b)](),
    _0x153a6c = _0x388e83[_0x35a385(0x41b)]((_0x49adf0) => ({
      ..._0x49adf0,
      puntuacion: calcularPuntuacionFuzzy(_0x49adf0, _0x2e9f52),
    })),
    _0x2bbef8 = _0x153a6c[_0x35a385(0x4d6)](
      (_0x2bd28a) => _0x2bd28a[_0x35a385(0x44c)] > 0x0
    )[_0x35a385(0x3ab)](
      (_0x22dca0, _0x32b09b) =>
        _0x32b09b["puntuacion"] - _0x22dca0[_0x35a385(0x44c)]
    ),
    _0x1b8b82 = performance[_0x35a385(0x52b)](),
    _0x531e7f = Math[_0x35a385(0x351)](_0x1b8b82 - _0x28e353),
    _0x2245bd = document[_0x35a385(0x539)](_0x35a385(0x330));
  return (
    _0x2245bd && (_0x2245bd[_0x35a385(0x35a)] = _0x531e7f + "ms"), _0x2bbef8
  );
}
function configurarEventosBusquedaModal() {
  const _0x525537 = _0x146931,
    _0x164453 = document["getElementById"]("busquedaModalInput"),
    _0x5dbebb = document["getElementById"](_0x525537(0x240));
  console[_0x525537(0x2db)](_0x525537(0x4ff), !!_0x164453),
    _0x164453 &&
      (_0x164453[_0x525537(0x1da)](_0x525537(0x4c1), window[_0x525537(0x1f0)]),
      _0x164453[_0x525537(0x1da)]("keydown", window[_0x525537(0x52d)]),
      (window["busquedaModalInputHandler"] = function (_0x5977be) {
        const _0x10a22a = _0x525537;
        console[_0x10a22a(0x2db)](
          _0x10a22a(0x1bb),
          _0x5977be[_0x10a22a(0x4f3)][_0x10a22a(0x1d5)]
        );
        if (busquedaTimeout) clearTimeout(busquedaTimeout);
        busquedaTimeout = setTimeout(() => {
          realizarBusquedaEnModal(_0x5977be["target"]["value"]);
        }, 0xc8);
      }),
      (window["busquedaModalKeyHandler"] = function (_0x2f9cb4) {
        const _0x55814a = _0x525537;
        _0x2f9cb4[_0x55814a(0x221)] === _0x55814a(0x4a6) &&
          (console[_0x55814a(0x2db)](
            "⌨️\x20Escape\x20presionado,\x20limpiando\x20búsqueda"
          ),
          (_0x2f9cb4["target"]["value"] = ""),
          realizarBusquedaEnModal(""));
      }),
      _0x164453[_0x525537(0x4a7)](_0x525537(0x4c1), window[_0x525537(0x1f0)]),
      _0x164453[_0x525537(0x4a7)](
        _0x525537(0x211),
        window["busquedaModalKeyHandler"]
      )),
    _0x5dbebb &&
      (_0x5dbebb[_0x525537(0x1da)](_0x525537(0x2ca), window[_0x525537(0x3ad)]),
      (window[_0x525537(0x3ad)] = function () {
        const _0x919574 = _0x525537;
        console[_0x919574(0x2db)](_0x919574(0x51a)),
          _0x164453 &&
            ((_0x164453["value"] = ""),
            _0x164453[_0x919574(0x447)](),
            realizarBusquedaEnModal(""));
      }),
      _0x5dbebb["addEventListener"](
        _0x525537(0x2ca),
        window["busquedaModalClearHandler"]
      ));
}
function realizarBusquedaEnModal(_0x152870) {
  const _0x1bb7ad = _0x146931;
  console["log"](_0x1bb7ad(0x2cd), _0x152870);
  const _0x1824a9 = performance[_0x1bb7ad(0x52b)]();
  let _0x310a5e = busquedaOriginalItems || [];
  console[_0x1bb7ad(0x2db)](_0x1bb7ad(0x458), _0x310a5e[_0x1bb7ad(0x428)]);
  let _0x4e159d;
  !_0x152870 || _0x152870[_0x1bb7ad(0x292)]() === ""
    ? ((_0x4e159d = _0x310a5e), console["log"](_0x1bb7ad(0x4b0)))
    : ((_0x4e159d = busquedaInteligente(_0x310a5e, _0x152870)),
      console[_0x1bb7ad(0x2db)](_0x1bb7ad(0x2f6), _0x4e159d[_0x1bb7ad(0x428)]));
  const _0x320fa2 = performance[_0x1bb7ad(0x52b)]() - _0x1824a9;
  actualizarContadoresBusqueda(
    _0x4e159d["length"],
    _0x310a5e[_0x1bb7ad(0x428)],
    _0x320fa2
  ),
    (resultadosBusquedaState[_0x1bb7ad(0x3f9)] = _0x4e159d),
    (resultadosBusquedaState["page"] = 0x1),
    (resultadosBusquedaState[_0x1bb7ad(0x1e5)] =
      _0x152870 || resultadosBusquedaState[_0x1bb7ad(0x433)] || ""),
    console[_0x1bb7ad(0x2db)](_0x1bb7ad(0x439));
  if (typeof window[_0x1bb7ad(0x495)] === _0x1bb7ad(0x4f6))
    window[_0x1bb7ad(0x495)]();
  else
    typeof renderResultadosBusqueda === _0x1bb7ad(0x4f6)
      ? renderResultadosBusqueda()
      : console[_0x1bb7ad(0x233)](_0x1bb7ad(0x4f4));
}
function actualizarContadoresBusqueda(_0x4448d3, _0x40b06f, _0x57691c) {
  const _0x320f8a = _0x146931,
    _0x24a583 = document[_0x320f8a(0x539)](_0x320f8a(0x45b)),
    _0xf5c12f = document["getElementById"](_0x320f8a(0x330));
  _0x24a583 &&
    (_0x24a583[_0x320f8a(0x35a)] =
      _0x4448d3 + _0x320f8a(0x42c) + (_0x4448d3 !== 0x1 ? "s" : "")),
    _0xf5c12f &&
      (_0xf5c12f[_0x320f8a(0x35a)] = _0x57691c[_0x320f8a(0x3f4)](0x1) + "ms");
}
function resaltarCoincidencias(_0x87af0b, _0x994be5) {
  return _0x87af0b;
}
function realizarBusquedaEnModal(_0x1803f4) {
  const _0x86024c = _0x146931,
    _0x1f51d9 = busquedaInteligente(busquedaOriginalItems, _0x1803f4);
  (resultadosBusquedaState[_0x86024c(0x3f9)] = _0x1f51d9),
    (resultadosBusquedaState[_0x86024c(0x2fb)] = 0x1),
    (resultadosBusquedaState[_0x86024c(0x1e5)] =
      _0x1803f4 || resultadosBusquedaState[_0x86024c(0x433)] || "");
  const _0x513d4e = document[_0x86024c(0x539)](_0x86024c(0x45b));
  _0x513d4e &&
    (_0x513d4e[_0x86024c(0x35a)] =
      _0x1f51d9[_0x86024c(0x428)] +
      _0x86024c(0x42c) +
      (_0x1f51d9[_0x86024c(0x428)] !== 0x1 ? "s" : "")),
    renderResultadosBusqueda();
}
const btnActualizar = actualizarDiv["querySelector"](_0x146931(0x242)),
  btnPromociones = actualizarDiv["querySelector"](_0x146931(0x342)),
  ultimaActualizacionSpan = actualizarDiv["querySelector"](_0x146931(0x3e6)),
  btnTexto = actualizarDiv["querySelector"](_0x146931(0x4bf)),
  btnSpinner = actualizarDiv[_0x146931(0x360)](_0x146931(0x23d)),
  mensajeActualizacion = actualizarDiv[_0x146931(0x360)](_0x146931(0x469));
async function mostrarProductosConPromociones() {
  const _0x144f03 = _0x146931,
    _0x350656 = await getAllProductos(),
    _0x1630c4 = [];
  for (const _0x5ee407 of _0x350656) {
    try {
      const _0x4aa9d6 = await detectarPromocionReal(_0x5ee407);
      _0x4aa9d6["length"] > 0x0 && _0x1630c4["push"](_0x5ee407);
    } catch (_0x23aca9) {
      console[_0x144f03(0x1f6)](
        "⚠️\x20Error\x20al\x20detectar\x20promociones\x20para\x20SKU\x20" +
          _0x5ee407["pr_sku"] +
          ":",
        _0x23aca9
      );
    }
  }
  if (_0x1630c4[_0x144f03(0x428)] === 0x0) {
    (resultadoDiv[_0x144f03(0x1ba)] = _0x144f03(0x4ab)), renderHistorial();
    return;
  }
  const _0x10d814 = [];
  for (const _0x3f4641 of _0x1630c4[_0x144f03(0x487)](0x0, 0x14)) {
    try {
      const _0x1183a7 = await detectarPromocionReal(_0x3f4641),
        _0x439de6 =
          Number(_0x3f4641[_0x144f03(0x19f)]) || Number(_0x3f4641["L1"]) || 0x0,
        _0x5d4d45 = Math[_0x144f03(0x351)](_0x439de6 * 1.16 * 0x64) / 0x64,
        _0x12c01c = _0x1183a7[_0x144f03(0x41b)]((_0x463e71) => {
          const _0x5973bc = _0x144f03;
          let _0x15bff2 = _0x5973bc(0x21e),
            _0x1bb157 =
              _0x463e71[_0x5973bc(0x3ff)] ||
              _0x463e71["nombre_promocion"] ||
              _0x5973bc(0x286);
          if (_0x463e71[_0x5973bc(0x170)][_0x5973bc(0x232)](_0x5973bc(0x324)))
            (_0x15bff2 = "bg-danger"), (_0x1bb157 = "🔥\x20" + _0x1bb157);
          else
            _0x463e71[_0x5973bc(0x28a)] &&
              ((_0x15bff2 = _0x5973bc(0x4b3)),
              (_0x1bb157 = _0x5973bc(0x38f) + _0x1bb157));
          return (
            _0x5973bc(0x1c9) +
            _0x15bff2 +
            "\x20me-1\x20mb-1\x22\x20style=\x22font-size:0.75rem;\x22>" +
            _0x1bb157 +
            _0x5973bc(0x30b)
          );
        })[_0x144f03(0x276)]("");
      _0x10d814[_0x144f03(0x18e)](
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x22\x20style=\x22cursor:pointer;\x22\x20onclick=\x22mostrarProductoPromocion(\x27" +
          _0x3f4641[_0x144f03(0x346)] +
          _0x144f03(0x21b) +
          _0x3f4641[_0x144f03(0x177)] +
          "\x22>" +
          _0x3f4641["pr_name"] +
          _0x144f03(0x2c6) +
          _0x12c01c +
          _0x144f03(0x2ef) +
          _0x5d4d45[_0x144f03(0x3f4)](0x2) +
          _0x144f03(0x161) +
          _0x3f4641[_0x144f03(0x346)] +
          _0x144f03(0x2c4)
      );
    } catch (_0x299586) {
      console[_0x144f03(0x1f6)](
        _0x144f03(0x230) + _0x3f4641[_0x144f03(0x346)] + ":",
        _0x299586
      );
    }
  }
  (resultadoDiv[_0x144f03(0x1ba)] =
    _0x144f03(0x29e) +
    _0x1630c4[_0x144f03(0x428)] +
    "\x20encontrados</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong></small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    _0x10d814[_0x144f03(0x276)]("") +
    _0x144f03(0x2c0) +
    (_0x1630c4[_0x144f03(0x428)] > 0x14
      ? _0x144f03(0x408) +
        (_0x1630c4[_0x144f03(0x428)] - 0x14) +
        _0x144f03(0x181)
      : "") +
    _0x144f03(0x1df)),
    renderHistorial();
}
window["mostrarProductoPromocion"] = async function (_0x47537e) {
  const _0xf7ade = _0x146931,
    _0x5c0c4 = await getAllProductos(),
    _0x211a4e = _0x5c0c4[_0xf7ade(0x1e8)](
      (_0x9fd828) =>
        _0x9fd828[_0xf7ade(0x346)] === _0x47537e ||
        _0x9fd828[_0xf7ade(0x4be)] === _0x47537e
    );
  if (_0x211a4e) {
    mostrarDetalleProducto(_0x211a4e);
    const _0x2cb69b = {
      ..._0x211a4e,
      FECHA_ESCANEO: new Date()["toISOString"](),
    };
    historial[_0xf7ade(0x4d2)](_0x2cb69b),
      setCookie(_0xf7ade(0x3ee), JSON["stringify"](historial), 0x1e),
      renderHistorial();
  }
};
const urlBase = _0x146931(0x22b),
  urlBaseConCodigos =
    "https://verificadorb9-backend.vercel.app/api/productos-con-codigos",
  urlPromociones = _0x146931(0x245),
  CONFIG_ENDPOINTS = {
    productosBasicos: urlBase,
    productosConCodigos: urlBaseConCodigos,
    promociones: urlPromociones,
    usarCodigosBarras: !![],
    fallbackTiempo: 0x1388,
  };
function tiempoRelativo(_0x55e8e8) {
  const _0xa76eea = _0x146931;
  if (!_0x55e8e8) return "Nunca";
  const _0x11a6fa = Date["now"](),
    _0x332a6d = Math["floor"]((_0x11a6fa - _0x55e8e8) / 0x3e8);
  if (_0x332a6d < 0x3c) return _0xa76eea(0x1c5) + _0x332a6d + _0xa76eea(0x438);
  if (_0x332a6d < 0xe10)
    return (
      _0xa76eea(0x1c5) +
      Math[_0xa76eea(0x32d)](_0x332a6d / 0x3c) +
      _0xa76eea(0x472)
    );
  if (_0x332a6d < 0x15180)
    return (
      "Hace\x20" + Math[_0xa76eea(0x32d)](_0x332a6d / 0xe10) + _0xa76eea(0x2ff)
    );
  return (
    "Hace\x20" + Math[_0xa76eea(0x32d)](_0x332a6d / 0x15180) + _0xa76eea(0x4f5)
  );
}
function renderUltimaActualizacion() {
  const _0x2ff24d = _0x146931,
    _0x13b78f = localStorage["getItem"](_0x2ff24d(0x353)),
    _0x369649 = localStorage[_0x2ff24d(0x179)](_0x2ff24d(0x238));
  let _0x2884f2 = _0x2ff24d(0x288);
  if (_0x13b78f && _0x369649) {
    const _0x2cb481 = tiempoRelativo(Number(_0x13b78f)),
      _0x1e733a = tiempoRelativo(Number(_0x369649)),
      _0x1c5734 = Math[_0x2ff24d(0x30e)](Number(_0x13b78f) - Number(_0x369649));
    _0x1c5734 < 0xea60
      ? (_0x2884f2 = "Última\x20actualización:\x20" + _0x2cb481)
      : (_0x2884f2 =
          "Productos:\x20" + _0x2cb481 + _0x2ff24d(0x502) + _0x1e733a);
  } else {
    if (_0x13b78f)
      _0x2884f2 =
        _0x2ff24d(0x4eb) + tiempoRelativo(Number(_0x13b78f)) + _0x2ff24d(0x1ad);
    else
      _0x369649 &&
        (_0x2884f2 = _0x2ff24d(0x388) + tiempoRelativo(Number(_0x369649)));
  }
  ultimaActualizacionSpan[_0x2ff24d(0x35a)] = _0x2884f2;
}
function actualizarProgreso(_0x4eaa63, _0x1d8681, _0xca464f = "") {
  const _0x1ab14c = _0x146931,
    _0x377787 = Math[_0x1ab14c(0x3e5)](0x64, Math["max"](0x0, _0x4eaa63)),
    _0xe3cea5 =
      _0x4eaa63 >= 0x64
        ? _0x1ab14c(0x16e)
        : _0x4eaa63 >= 0x32
        ? _0x1ab14c(0x16e)
        : _0x1ab14c(0x540);
  mensajeActualizacion[_0x1ab14c(0x1ba)] =
    _0x1ab14c(0x53b) +
    _0x1d8681 +
    _0x1ab14c(0x284) +
    _0x4eaa63 +
    _0x1ab14c(0x4b1) +
    _0xe3cea5 +
    "\x22\x20role=\x22progressbar\x22\x20style=\x22width:\x20" +
    _0x377787 +
    "%;\x20transition:\x20width\x200.3s\x20ease;\x22\x20aria-valuenow=\x22" +
    _0x4eaa63 +
    _0x1ab14c(0x452) +
    (_0xca464f ? _0x1ab14c(0x206) + _0xca464f + _0x1ab14c(0x1b1) : "") +
    _0x1ab14c(0x1df);
}
async function actualizarTodosLosDatos() {
  const _0x217686 = _0x146931;
  console[_0x217686(0x2db)](_0x217686(0x23a)),
    (btnActualizar[_0x217686(0x3ae)] = !![]),
    (btnTexto[_0x217686(0x35a)] = "Actualizando..."),
    btnSpinner[_0x217686(0x2b2)][_0x217686(0x4b8)](_0x217686(0x4b6));
  const _0x34b89c = Date[_0x217686(0x52b)]();
  let _0x1becc3 = ![],
    _0x30e69f = ![];
  const _0xca1db0 = () => {
    const _0x3e89e3 = _0x217686;
    let _0x5d9e62 = 0x0,
      _0x3815c4 = "Iniciando...",
      _0x5e36a9 = "";
    if (!_0x1becc3 && !_0x30e69f)
      (_0x5d9e62 = 0xa),
        (_0x3815c4 = _0x3e89e3(0x47a)),
        (_0x5e36a9 = _0x3e89e3(0x216));
    else {
      if (_0x1becc3 && !_0x30e69f)
        (_0x5d9e62 = 0x46),
          (_0x3815c4 = _0x3e89e3(0x4ee)),
          (_0x5e36a9 = _0x3e89e3(0x514));
      else {
        if (!_0x1becc3 && _0x30e69f)
          (_0x5d9e62 = 0x46),
            (_0x3815c4 = _0x3e89e3(0x31a)),
            (_0x5e36a9 = _0x3e89e3(0x49c));
        else {
          _0x5d9e62 = 0x64;
          const _0x2f3b53 = ((Date["now"]() - _0x34b89c) / 0x3e8)["toFixed"](
            0x1
          );
          (_0x3815c4 = _0x3e89e3(0x25d)),
            (_0x5e36a9 = _0x3e89e3(0x27b) + _0x2f3b53 + _0x3e89e3(0x438));
        }
      }
    }
    actualizarProgreso(_0x5d9e62, _0x3815c4, _0x5e36a9);
  };
  _0xca1db0();
  try {
    await new Promise((_0x419504) => setTimeout(_0x419504, 0xc8)),
      actualizarProgreso(
        0x19,
        "Consultando\x20los\x203\x20endpoints...",
        _0x217686(0x536)
      );
    const _0x24dbdf = cargarProductosRapido()["then"]((_0x825735) => {
        return (_0x1becc3 = !![]), _0xca1db0(), _0x825735;
      }),
      _0x5244d9 = cargarPromocionesRapido()["then"]((_0x31359b) => {
        return (_0x30e69f = !![]), _0xca1db0(), _0x31359b;
      });
    setTimeout(() => {
      const _0x7fc2f0 = _0x217686;
      (!_0x1becc3 || !_0x30e69f) &&
        actualizarProgreso(0x32, _0x7fc2f0(0x491), _0x7fc2f0(0x534));
    }, 0x3e8);
    const [_0x1c9295, _0x49e796] = await Promise[_0x217686(0x2a3)]([
        _0x24dbdf,
        _0x5244d9,
      ]),
      _0x1cf70f = ((Date[_0x217686(0x52b)]() - _0x34b89c) / 0x3e8)[
        _0x217686(0x3f4)
      ](0x1);
    console["log"](_0x217686(0x4af) + _0x1cf70f + "s");
    const _0x24901a = _0x1c9295[_0x217686(0x4ce)] === _0x217686(0x24c),
      _0x482800 = _0x49e796[_0x217686(0x4ce)] === "fulfilled";
    if (_0x24901a && _0x482800) {
      const _0x15be89 = _0x1c9295["value"]?.[_0x217686(0x3d6)] || 0x0,
        _0x1ad8d0 = _0x49e796[_0x217686(0x1d5)]?.["promociones"] || 0x0,
        _0x1b7dea = _0x1c9295[_0x217686(0x1d5)]?.[_0x217686(0x150)] || "",
        _0x58350c = _0x49e796[_0x217686(0x1d5)]?.[_0x217686(0x150)] || "";
      actualizarProgreso(
        0x64,
        _0x217686(0x271),
        _0x15be89 +
          _0x217686(0x51b) +
          _0x1b7dea +
          _0x217686(0x1f4) +
          _0x1ad8d0 +
          _0x217686(0x188) +
          _0x58350c +
          _0x217686(0x4f7) +
          _0x1cf70f +
          "s"
      );
    } else
      _0x24901a || _0x482800
        ? actualizarProgreso(
            0x4b,
            _0x217686(0x319),
            _0x217686(0x1f9) + _0x1cf70f + "s)"
          )
        : actualizarProgreso(
            0x19,
            _0x217686(0x3eb),
            _0x217686(0x183) + _0x1cf70f + "s)"
          );
    _0x1c9295[_0x217686(0x4ce)] === _0x217686(0x26e) &&
      console[_0x217686(0x233)](
        "Error\x20al\x20cargar\x20productos:",
        _0x1c9295[_0x217686(0x2a1)]
      ),
      _0x49e796[_0x217686(0x4ce)] === _0x217686(0x26e) &&
        console["error"](
          "Error\x20al\x20cargar\x20promociones:",
          _0x49e796["reason"]
        );
  } catch (_0x17ed72) {
    console["error"](_0x217686(0x369), _0x17ed72),
      actualizarProgreso(
        0x0,
        "❌\x20Error\x20de\x20conexión",
        _0x217686(0x381)
      );
  } finally {
    (btnActualizar[_0x217686(0x3ae)] = ![]),
      (btnTexto[_0x217686(0x35a)] = _0x217686(0x416)),
      btnSpinner[_0x217686(0x2b2)]["add"](_0x217686(0x4b6)),
      setTimeout(() => {
        const _0x3362cd = _0x217686;
        (mensajeActualizacion[_0x3362cd(0x35a)] = ""),
          renderUltimaActualizacion();
      }, 0xfa0);
  }
}
async function cargarProductosRapido() {
  const _0xe87a2d = _0x146931,
    _0x19c806 = Date[_0xe87a2d(0x52b)]();
  if (!navigator[_0xe87a2d(0x36d)]) throw new Error(_0xe87a2d(0x1d3));
  let _0x1a5808 = [],
    _0x46dd00 = [];
  console[_0xe87a2d(0x2db)](_0xe87a2d(0x457));
  if (CONFIG_ENDPOINTS["usarCodigosBarras"])
    try {
      const _0x1c8fcc = CONFIG_ENDPOINTS[_0xe87a2d(0x1ec)] + "?t=" + _0x19c806;
      console[_0xe87a2d(0x2db)](_0xe87a2d(0x26b));
      const _0x1435e9 = await Promise[_0xe87a2d(0x329)]([
        fetch(_0x1c8fcc, {
          cache: _0xe87a2d(0x2e5),
          mode: "cors",
          headers: {
            Accept: _0xe87a2d(0x359),
            "Content-Type": _0xe87a2d(0x359),
          },
        }),
        new Promise((_0x2e6551, _0x4af64c) =>
          setTimeout(
            () => _0x4af64c(new Error(_0xe87a2d(0x46d))),
            CONFIG_ENDPOINTS["fallbackTiempo"]
          )
        ),
      ]);
      if (_0x1435e9["ok"]) {
        const _0x2490eb = await _0x1435e9[_0xe87a2d(0x500)]();
        _0x2490eb[_0xe87a2d(0x16e)] && _0x2490eb[_0xe87a2d(0x3d6)]
          ? ((_0x1a5808 = _0x2490eb["productos"]),
            _0x46dd00[_0xe87a2d(0x18e)](_0xe87a2d(0x440)),
            console[_0xe87a2d(0x2db)](
              _0xe87a2d(0x299),
              _0x2490eb[_0xe87a2d(0x3d6)][_0xe87a2d(0x428)]
            ))
          : _0x46dd00[_0xe87a2d(0x18e)](_0xe87a2d(0x30f));
      } else
        _0x46dd00[_0xe87a2d(0x18e)](
          _0xe87a2d(0x525) + _0x1435e9[_0xe87a2d(0x4ce)] + ")"
        );
    } catch (_0x3f7d62) {
      console[_0xe87a2d(0x1f6)](_0xe87a2d(0x443), _0x3f7d62[_0xe87a2d(0x354)]),
        _0x3f7d62[_0xe87a2d(0x354)][_0xe87a2d(0x232)](_0xe87a2d(0x391)) ||
        _0x3f7d62["message"][_0xe87a2d(0x232)](_0xe87a2d(0x486))
          ? (_0x46dd00[_0xe87a2d(0x18e)](_0xe87a2d(0x3c9)),
            console[_0xe87a2d(0x2db)](_0xe87a2d(0x1af)))
          : _0x46dd00[_0xe87a2d(0x18e)](_0xe87a2d(0x15f));
    }
  try {
    const _0x5c7d39 = CONFIG_ENDPOINTS[_0xe87a2d(0x19b)] + "?t=" + _0x19c806;
    console["log"](_0xe87a2d(0x200));
    const _0x4b7dab = await fetch(_0x5c7d39, { cache: "no-store" });
    if (_0x4b7dab["ok"]) {
      const _0x5915a4 = await _0x4b7dab[_0xe87a2d(0x500)](),
        _0xdc8810 = Array["isArray"](_0x5915a4) ? _0x5915a4 : [];
      _0x1a5808[_0xe87a2d(0x428)] === 0x0 &&
        _0xdc8810[_0xe87a2d(0x428)] > 0x0 &&
        (_0x1a5808 = _0xdc8810),
        _0x46dd00[_0xe87a2d(0x18e)](_0xe87a2d(0x3a5)),
        console["log"](
          _0xe87a2d(0x376),
          _0xdc8810[_0xe87a2d(0x428)],
          _0xe87a2d(0x3d6)
        );
    } else _0x46dd00[_0xe87a2d(0x18e)](_0xe87a2d(0x44b));
  } catch (_0x211184) {
    console["warn"](
      "⚠️\x20Error\x20con\x20endpoint\x20básico:",
      _0x211184["message"]
    ),
      _0x46dd00[_0xe87a2d(0x18e)](_0xe87a2d(0x30a));
  }
  if (_0x1a5808["length"] === 0x0) throw new Error(_0xe87a2d(0x294));
  return (
    await clearProductos(),
    await saveProductos(_0x1a5808),
    localStorage[_0xe87a2d(0x2c9)](_0xe87a2d(0x353), String(_0x19c806)),
    console["log"](_0xe87a2d(0x275), _0x46dd00["join"](",\x20")),
    {
      productos: _0x1a5808["length"],
      endpoints: _0x46dd00,
      detalles: _0x46dd00[_0xe87a2d(0x428)] + _0xe87a2d(0x1d6),
    }
  );
}
async function cargarPromocionesRapido() {
  const _0xe36187 = _0x146931;
  console[_0xe36187(0x2db)](
    "🔄\x20Consultando\x20endpoint\x20de\x20promociones..."
  );
  const _0x3e4239 = await fetch(CONFIG_ENDPOINTS["promociones"], {
    cache: _0xe36187(0x2e5),
    headers: { Accept: _0xe36187(0x359), "Content-Type": _0xe36187(0x359) },
  });
  if (!_0x3e4239["ok"])
    throw new Error(_0xe36187(0x2b5) + _0x3e4239[_0xe36187(0x4ce)]);
  const _0x3df1fd = await _0x3e4239[_0xe36187(0x500)]();
  if (
    _0x3df1fd[_0xe36187(0x16e)] &&
    _0x3df1fd[_0xe36187(0x4a9)] &&
    _0x3df1fd[_0xe36187(0x4a9)]["promociones"]
  ) {
    const _0x23041b = _0x3df1fd[_0xe36187(0x4a9)][_0xe36187(0x28e)];
    console["log"](_0xe36187(0x4a5) + _0x23041b["length"] + _0xe36187(0x25b));
    try {
      await clearPromociones(), await savePromociones(_0x23041b);
      const _0x54ae6 = Date[_0xe36187(0x52b)]();
      localStorage["setItem"](_0xe36187(0x238), String(_0x54ae6)),
        console["log"](_0xe36187(0x483));
    } catch (_0x43ac72) {
      console[_0xe36187(0x233)](
        "❌\x20Error\x20guardando\x20promociones\x20en\x20IndexedDB:",
        _0x43ac72
      );
    }
    return {
      promociones: _0x23041b[_0xe36187(0x428)],
      detalles: _0xe36187(0x189),
    };
  } else throw new Error(_0xe36187(0x31f));
}
btnActualizar[_0x146931(0x4a7)](_0x146931(0x2ca), actualizarTodosLosDatos),
  renderUltimaActualizacion(),
  setInterval(renderUltimaActualizacion, 0xea60),
  openDB()[_0x146931(0x2dd)](async (_0x4e600b) => {
    const _0x5094cf = _0x146931,
      _0x1ef240 = _0x4e600b["transaction"](DB_STORE, _0x5094cf(0x4e0)),
      _0x1302f8 = _0x1ef240["objectStore"](DB_STORE),
      _0x5f0c80 = _0x1302f8[_0x5094cf(0x28d)](),
      _0x21d200 = _0x4e600b["transaction"](
        DB_STORE_PROMOCIONES,
        _0x5094cf(0x4e0)
      ),
      _0x4275be = _0x21d200[_0x5094cf(0x3fa)](DB_STORE_PROMOCIONES),
      _0x1d4a36 = _0x4275be["count"]();
    Promise[_0x5094cf(0x48b)]([
      new Promise((_0x49be5d) => {
        const _0x1a193a = _0x5094cf;
        _0x5f0c80[_0x1a193a(0x18b)] = () =>
          _0x49be5d(_0x5f0c80[_0x1a193a(0x36e)]);
      }),
      new Promise((_0x5aad1d) => {
        const _0x11d24b = _0x5094cf;
        _0x1d4a36["onsuccess"] = () => _0x5aad1d(_0x1d4a36[_0x11d24b(0x36e)]);
      }),
    ])
      [_0x5094cf(0x2dd)](([_0x13f77f, _0x3008a9]) => {
        const _0x38b2e5 = _0x5094cf,
          _0x2d609c = _0x13f77f > 0x0,
          _0x581b94 = _0x3008a9 > 0x0,
          _0x25035a = localStorage[_0x38b2e5(0x179)]("productos_ts"),
          _0x1d3172 = localStorage[_0x38b2e5(0x179)](_0x38b2e5(0x238)),
          _0x2d0944 = Date[_0x38b2e5(0x52b)](),
          _0x4ac7ed = 0x3 * 0x18 * 0x3c * 0x3c * 0x3e8;
        let _0x13a714 = ![],
          _0x2e7e9b = ![];
        if (_0x25035a) {
          const _0x2011a7 = _0x2d0944 - Number(_0x25035a);
          _0x13a714 = _0x2011a7 >= _0x4ac7ed;
        }
        if (_0x1d3172) {
          const _0x4fcf60 = _0x2d0944 - Number(_0x1d3172);
          _0x2e7e9b = _0x4fcf60 >= _0x4ac7ed;
        }
        if (!_0x2d609c && !_0x581b94)
          console["log"](
            "🔄\x20Primera\x20carga:\x20cargando\x20productos\x20y\x20promociones..."
          ),
            actualizarTodosLosDatos();
        else {
          if (!_0x2d609c)
            console[_0x38b2e5(0x2db)](
              "🔄\x20Sin\x20productos:\x20cargando\x20productos..."
            ),
              cargarProductosRapido()["catch"]((_0x13cfc9) =>
                console["error"](_0x38b2e5(0x3b5), _0x13cfc9)
              );
          else {
            if (_0x13a714 || _0x2e7e9b) {
              const _0x498cee = _0x25035a
                  ? Math[_0x38b2e5(0x32d)](
                      (_0x2d0944 - Number(_0x25035a)) /
                        (0x18 * 0x3c * 0x3c * 0x3e8)
                    )
                  : "nunca",
                _0x204ec2 = _0x1d3172
                  ? Math[_0x38b2e5(0x32d)](
                      (_0x2d0944 - Number(_0x1d3172)) /
                        (0x18 * 0x3c * 0x3c * 0x3e8)
                    )
                  : _0x38b2e5(0x2a7);
              console[_0x38b2e5(0x2db)](
                _0x38b2e5(0x2b7) +
                  _0x498cee +
                  _0x38b2e5(0x178) +
                  _0x204ec2 +
                  _0x38b2e5(0x23b)
              ),
                console["log"](
                  "⚡\x20Iniciando\x20actualización\x20automática\x20por\x20tiempo\x20transcurrido..."
                ),
                actualizarTodosLosDatos();
            } else {
              console[_0x38b2e5(0x2db)](
                _0x38b2e5(0x3fb),
                _0x13f77f,
                _0x38b2e5(0x1fd),
                _0x3008a9
              );
              if (_0x25035a) {
                const _0x55abdb = Math[_0x38b2e5(0x32d)](
                  (_0x2d0944 - Number(_0x25035a)) / (0x18 * 0x3c * 0x3c * 0x3e8)
                );
                console[_0x38b2e5(0x2db)](
                  _0x38b2e5(0x227) + _0x55abdb + _0x38b2e5(0x4f5)
                );
              }
              if (_0x1d3172) {
                const _0x513066 = Math[_0x38b2e5(0x32d)](
                  (_0x2d0944 - Number(_0x1d3172)) / (0x18 * 0x3c * 0x3c * 0x3e8)
                );
                console[_0x38b2e5(0x2db)](
                  _0x38b2e5(0x301) + _0x513066 + _0x38b2e5(0x4f5)
                );
              }
            }
          }
        }
        datosYaCargados = !![];
      })
      [_0x5094cf(0x2c7)]((_0x5dbf32) => {
        const _0x14e690 = _0x5094cf;
        console[_0x14e690(0x233)](_0x14e690(0x431), _0x5dbf32);
        try {
          cargarProductosRapido()[_0x14e690(0x2c7)]((_0xe79fdf) =>
            console[_0x14e690(0x233)](_0x14e690(0x4de), _0xe79fdf)
          );
        } catch (_0x18815b) {}
        datosYaCargados = !![];
      });
  });
let historial = [];
const historialCookie = getCookie(_0x146931(0x3ee));
if (historialCookie)
  try {
    historial = JSON[_0x146931(0x1bd)](historialCookie);
  } catch (_0x419910) {
    historial = [];
  }
function renderClearButton() {
  const _0x1c1293 = _0x146931;
  return _0x1c1293(0x533);
}
function renderHistorial() {
  const _0xeecc53 = _0x146931;
  (historialDiv[_0xeecc53(0x1ba)] =
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    (historial[_0xeecc53(0x428)] > 0x0 ? renderClearButton() : "") +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    (historial[_0xeecc53(0x428)] === 0x0
      ? _0xeecc53(0x309)
      : "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        historial[_0xeecc53(0x41b)]((_0x50cf66) => {
          const _0x8d3909 = _0xeecc53,
            _0x1867ac =
              _0x50cf66[_0x8d3909(0x177)] ||
              _0x50cf66[_0x8d3909(0x196)] ||
              "Producto\x20desconocido",
            _0x547b27 =
              _0x50cf66[_0x8d3909(0x346)] ||
              _0x50cf66[_0x8d3909(0x4be)] ||
              _0x50cf66["CODIGO"] ||
              _0x50cf66["SKU"] ||
              "SKU\x20desconocido",
            _0x7b7bf6 =
              _0x50cf66[_0x8d3909(0x19f)] ||
              _0x50cf66["L1"] ||
              _0x50cf66[_0x8d3909(0x48f)] ||
              0x0,
            _0x29157c = Math[_0x8d3909(0x351)](_0x7b7bf6 * 1.16 * 0x64) / 0x64,
            _0x4c2cd5 = _0x50cf66[_0x8d3909(0x4f1)]
              ? new Date(_0x50cf66[_0x8d3909(0x4f1)])[_0x8d3909(0x260)]()
              : _0x8d3909(0x3ca);
          return (
            _0x8d3909(0x38b) +
            _0x1867ac +
            "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20descripción\x22\x20data-copiar=\x22" +
            _0x1867ac +
            _0x8d3909(0x1c6) +
            _0x547b27 +
            _0x8d3909(0x43e) +
            _0x547b27 +
            "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Precio:\x20$" +
            _0x29157c[_0x8d3909(0x3f4)](0x2) +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20" +
            _0x4c2cd5 +
            _0x8d3909(0x32b) +
            _0x547b27 +
            _0x8d3909(0x509)
          );
        })[_0xeecc53(0x276)]("") +
        _0xeecc53(0x365)) +
    _0xeecc53(0x35e)),
    setCookie("historial", JSON["stringify"](historial), 0x1e);
  const _0x8fd20 = document[_0xeecc53(0x539)](_0xeecc53(0x19d));
  _0x8fd20 &&
    _0x8fd20[_0xeecc53(0x4a7)]("click", () => {
      const _0x355365 = _0xeecc53;
      (historial = []),
        setCookie(_0x355365(0x3ee), JSON[_0x355365(0x4d8)](historial), 0x1e),
        renderHistorial();
    });
  const _0x545e67 = historialDiv[_0xeecc53(0x345)](_0xeecc53(0x49d));
  _0x545e67[_0xeecc53(0x395)]((_0x56ab23) => {
    const _0x5aeb75 = _0xeecc53;
    _0x56ab23[_0x5aeb75(0x4a7)](_0x5aeb75(0x2ca), function (_0x30feea) {
      const _0x58312e = _0x5aeb75,
        _0x2657b2 = _0x56ab23[_0x58312e(0x3c1)](_0x58312e(0x252));
      navigator[_0x58312e(0x1b7)] &&
        navigator[_0x58312e(0x1b7)][_0x58312e(0x20d)](_0x2657b2)["then"](() => {
          const _0x535e6d = _0x58312e;
          (_0x56ab23["innerHTML"] = _0x535e6d(0x2ae)),
            setTimeout(() => {
              const _0x12eb05 = _0x535e6d;
              _0x56ab23[_0x12eb05(0x1ba)] = _0x12eb05(0x3a7);
            }, 0x4b0);
        });
    });
  });
  const _0x53c0a3 = historialDiv[_0xeecc53(0x345)](_0xeecc53(0x17a));
  _0x53c0a3[_0xeecc53(0x395)]((_0xfacefa) => {
    const _0x5418ee = _0xeecc53;
    _0xfacefa[_0x5418ee(0x4a7)](_0x5418ee(0x2ca), function (_0x5e36dc) {
      const _0x2711d7 = _0x5418ee,
        _0x414384 = _0xfacefa[_0x2711d7(0x3c1)](_0x2711d7(0x326));
      consultarProductoDesdeHistorial(_0x414384);
    });
  });
}
inputCodigo[_0x146931(0x4a7)](_0x146931(0x211), function (_0x599615) {
  const _0x1ef659 = _0x146931;
  _0x599615[_0x1ef659(0x221)] === "Enter" &&
    (_0x599615[_0x1ef659(0x263)](),
    form[_0x1ef659(0x34f)](),
    setTimeout(() => {
      const _0x51d46f = _0x1ef659,
        _0x37bdeb = document[_0x51d46f(0x539)](_0x51d46f(0x262));
      _0x37bdeb &&
        _0x37bdeb[_0x51d46f(0x285)]({
          behavior: _0x51d46f(0x4d4),
          block: _0x51d46f(0x382),
          inline: _0x51d46f(0x538),
        });
    }, 0x12c));
}),
  form[_0x146931(0x4a7)](_0x146931(0x48d), async (_0x1f3c02) => {
    const _0x1a50fd = _0x146931;
    _0x1f3c02[_0x1a50fd(0x263)](), hideMobileKeyboard();
    let _0x4d8ae0 = inputCodigo[_0x1a50fd(0x1d5)]
      [_0x1a50fd(0x292)]()
      [_0x1a50fd(0x2f1)](/\s+$/, "");
    const _0x1e5b2a = _0x4d8ae0[_0x1a50fd(0x18f)]();
    (inputCodigo["value"] = _0x4d8ae0),
      (resultadoDiv[_0x1a50fd(0x1ba)] = ""),
      setTimeout(() => {
        const _0x16924b = _0x1a50fd,
          _0x376ab4 = document["getElementById"](_0x16924b(0x262));
        _0x376ab4 &&
          _0x376ab4[_0x16924b(0x285)]({
            behavior: _0x16924b(0x4d4),
            block: "start",
            inline: _0x16924b(0x538),
          });
      }, 0x64),
      (sugerenciasDiv[_0x1a50fd(0x1ba)] = ""),
      (sugerenciasDiv[_0x1a50fd(0x4e8)][_0x1a50fd(0x43c)] = _0x1a50fd(0x3a6));
    if (!_0x4d8ae0) {
      (resultadoDiv[_0x1a50fd(0x1ba)] = _0x1a50fd(0x16a)),
        renderHistorial(),
        inputCodigo[_0x1a50fd(0x447)]();
      return;
    }
    (inputCodigo["placeholder"] = ""),
      (resultadoDiv["innerHTML"] = _0x1a50fd(0x50a)),
      (inputCodigo[_0x1a50fd(0x1d5)] = "");
    try {
      inputCodigo[_0x1a50fd(0x3c5)]();
    } catch (_0x25190e) {}
    let _0x58ae0f = await getAllProductos(),
      _0x481f3e = _0x58ae0f[_0x1a50fd(0x1e8)]((_0x361852) => {
        const _0x4485d4 = _0x1a50fd,
          _0x25c9ab = (
            _0x361852["pr_sku"] != null
              ? String(_0x361852[_0x4485d4(0x346)])
              : ""
          )[_0x4485d4(0x18f)](),
          _0x1fe9b5 = (
            _0x361852[_0x4485d4(0x4be)] != null
              ? String(_0x361852["pr_gtin"])
              : ""
          )[_0x4485d4(0x18f)]();
        if (_0x25c9ab === _0x1e5b2a || _0x1fe9b5 === _0x1e5b2a) return !![];
        if (
          _0x361852[_0x4485d4(0x499)] &&
          Array[_0x4485d4(0x16d)](_0x361852[_0x4485d4(0x499)])
        )
          return _0x361852["codigos_barras"][_0x4485d4(0x4ef)](
            (_0x5d865d) => String(_0x5d865d)[_0x4485d4(0x18f)]() === _0x1e5b2a
          );
        return ![];
      });
    if (_0x481f3e) {
      mostrarDetalleProducto(_0x481f3e);
      const _0x19ecd7 = {
        ..._0x481f3e,
        FECHA_ESCANEO: new Date()[_0x1a50fd(0x4c3)](),
      };
      historial[_0x1a50fd(0x4d2)](_0x19ecd7),
        setCookie(_0x1a50fd(0x3ee), JSON["stringify"](historial), 0x1e),
        (inputCodigo[_0x1a50fd(0x1d5)] = "");
      if (!isMobileDevice())
        try {
          inputCodigo[_0x1a50fd(0x447)]();
        } catch (_0x15c8c0) {}
      _0x481f3e[_0x1a50fd(0x499)] &&
        _0x481f3e[_0x1a50fd(0x499)][_0x1a50fd(0x428)] > 0x1 &&
        console[_0x1a50fd(0x2db)](_0x1a50fd(0x2c3), {
          sku: _0x481f3e["pr_sku"],
          gtin_principal: _0x481f3e[_0x1a50fd(0x4be)],
          codigo_buscado: _0x4d8ae0,
          todos_los_codigos: _0x481f3e[_0x1a50fd(0x499)],
        });
    } else {
      let _0x576309 = _0x58ae0f[_0x1a50fd(0x4d6)]((_0x1c1357) => {
        const _0x365072 = _0x1a50fd,
          _0xdc07ff = (_0x1c1357["pr_name"] || "")[_0x365072(0x18f)](),
          _0x278358 = (
            _0x1c1357["pr_sku"] != null
              ? String(_0x1c1357[_0x365072(0x346)])
              : ""
          )[_0x365072(0x18f)](),
          _0x1bd34d = (
            _0x1c1357[_0x365072(0x4be)] != null
              ? String(_0x1c1357["pr_gtin"])
              : ""
          )["toLowerCase"]();
        return (
          _0xdc07ff["includes"](_0x1e5b2a) ||
          _0x278358[_0x365072(0x232)](_0x1e5b2a) ||
          _0x1bd34d["includes"](_0x1e5b2a)
        );
      });
      _0x576309[_0x1a50fd(0x428)] > 0x0
        ? mostrarModalResultadosBusqueda(_0x576309, _0x4d8ae0)
        : ((resultadoDiv["innerHTML"] =
            _0x1a50fd(0x36c) + _0x4d8ae0 + _0x1a50fd(0x3cc)),
          (inputCodigo[_0x1a50fd(0x1d5)] = ""),
          inputCodigo[_0x1a50fd(0x447)](),
          setTimeout(() => {
            const _0x3db69b = _0x1a50fd;
            resultadoDiv[_0x3db69b(0x1ba)] = "";
          }, 0x1388),
          console[_0x1a50fd(0x2db)](_0x1a50fd(0x526) + _0x4d8ae0 + "\x22"));
    }
    renderHistorial();
  });
async function detectarPromocionReal(_0x3e3504) {
  const _0x2cf442 = _0x146931,
    _0x3dc9d0 = (_0x3e3504["pr_sku"] || "")[_0x2cf442(0x496)]();
  try {
    const _0x350325 = await getAllPromociones();
    console[_0x2cf442(0x2db)](_0x2cf442(0x318), _0x350325[_0x2cf442(0x428)]),
      console[_0x2cf442(0x2db)](_0x2cf442(0x270), _0x3dc9d0);
    const _0x41806c = [];
    for (const _0x480ebd of _0x350325) {
      let _0x5b2595 = [];
      if (
        _0x480ebd[_0x2cf442(0x498)] &&
        Array[_0x2cf442(0x16d)](_0x480ebd[_0x2cf442(0x498)])
      )
        _0x5b2595 = _0x480ebd["skus"];
      else
        _0x480ebd[_0x2cf442(0x4d3)] &&
          _0x480ebd[_0x2cf442(0x4d3)]["pr_sku"] &&
          (Array[_0x2cf442(0x16d)](
            _0x480ebd[_0x2cf442(0x4d3)][_0x2cf442(0x346)]
          )
            ? (_0x5b2595 = _0x480ebd[_0x2cf442(0x4d3)][_0x2cf442(0x346)])
            : (_0x5b2595 = _0x480ebd[_0x2cf442(0x4d3)][_0x2cf442(0x346)]
                [_0x2cf442(0x44e)]("\x20")
                [_0x2cf442(0x4d6)]((_0x99a433) =>
                  _0x99a433[_0x2cf442(0x292)]()
                )));
      if (_0x5b2595[_0x2cf442(0x232)](_0x3dc9d0)) {
        const _0x964951 =
            _0x480ebd["pro_nombrePromo"] ||
            _0x480ebd[_0x2cf442(0x24f)] ||
            _0x480ebd[_0x2cf442(0x22c)] ||
            _0x2cf442(0x282),
          _0x4f9634 =
            _0x480ebd[_0x2cf442(0x36f)] ||
            _0x480ebd["cantidad"] ||
            _0x480ebd["qty"] ||
            "",
          _0x504752 =
            _0x480ebd["pro_precioPromo"] ||
            _0x480ebd[_0x2cf442(0x23c)] ||
            _0x480ebd[_0x2cf442(0x3ba)] ||
            _0x480ebd[_0x2cf442(0x202)] ||
            _0x480ebd[_0x2cf442(0x295)] ||
            _0x480ebd["pro_precio_total"] ||
            _0x480ebd[_0x2cf442(0x236)] ||
            _0x480ebd[_0x2cf442(0x373)] ||
            "";
        console["log"](_0x2cf442(0x290) + _0x3dc9d0 + ":", {
          nombre: _0x964951,
          cantidad: _0x4f9634,
          precio: _0x504752,
          campos_precio_disponibles: {
            pro_precioPromo: _0x480ebd["pro_precioPromo"],
            precio: _0x480ebd[_0x2cf442(0x23c)],
            price: _0x480ebd[_0x2cf442(0x3ba)],
            precioTotal: _0x480ebd[_0x2cf442(0x202)],
            precio_total: _0x480ebd[_0x2cf442(0x295)],
            pro_precio_total: _0x480ebd[_0x2cf442(0x180)],
            total_price: _0x480ebd[_0x2cf442(0x236)],
            valor_total: _0x480ebd[_0x2cf442(0x373)],
          },
          campos_disponibles: Object["keys"](_0x480ebd),
          promo_completa: _0x480ebd,
        }),
          _0x41806c["push"]({
            tipo: _0x2cf442(0x26f),
            detalle: "🔥\x20" + _0x964951,
            nombre_promocion: _0x964951,
            es_oficial: !![],
            fuente: _0x2cf442(0x31c),
            id_promocion: _0x480ebd[_0x2cf442(0x2ea)] || _0x480ebd["id"],
            cantidad: _0x4f9634,
            precio: _0x504752,
            mensaje:
              _0x480ebd[_0x2cf442(0x52c)] || _0x480ebd[_0x2cf442(0x430)] || "",
            tipo_promo: _0x480ebd[_0x2cf442(0x1a8)] || _0x480ebd["tipo"] || "",
            vigencia:
              _0x480ebd[_0x2cf442(0x34a)] && _0x480ebd["validTo"]
                ? _0x480ebd[_0x2cf442(0x34a)] +
                  _0x2cf442(0x176) +
                  _0x480ebd[_0x2cf442(0x22a)]
                : "",
            raw_data: {
              pro_cantidad_base: _0x480ebd[_0x2cf442(0x36f)],
              pro_precioPromo: _0x480ebd[_0x2cf442(0x1b8)],
              pro_nombrePromo: _0x480ebd[_0x2cf442(0x473)],
              todos_campos_precio: {
                pro_precioPromo: _0x480ebd[_0x2cf442(0x1b8)],
                precio: _0x480ebd["precio"],
                price: _0x480ebd[_0x2cf442(0x3ba)],
                precioTotal: _0x480ebd[_0x2cf442(0x202)],
                precio_total: _0x480ebd[_0x2cf442(0x295)],
                pro_precio_total: _0x480ebd[_0x2cf442(0x180)],
                total_price: _0x480ebd[_0x2cf442(0x236)],
                valor_total: _0x480ebd[_0x2cf442(0x373)],
              },
            },
          });
      }
    }
    return (
      _0x41806c[_0x2cf442(0x428)] === 0x0
        ? console["log"](_0x2cf442(0x375) + _0x3dc9d0)
        : console[_0x2cf442(0x2db)](
            "✅\x20" +
              _0x41806c[_0x2cf442(0x428)] +
              _0x2cf442(0x1ce) +
              _0x3dc9d0
          ),
      _0x41806c
    );
  } catch (_0x142a11) {
    return (
      console[_0x2cf442(0x233)](
        "Error\x20obteniendo\x20promociones:",
        _0x142a11
      ),
      []
    );
  }
}
function mostrarDetalleProducto(_0x1baaaf) {
  const _0xf1c7bc = _0x146931;
  hideMobileKeyboard();
  let _0x253bf8 = "";
  if (
    _0x1baaaf[_0xf1c7bc(0x310)] &&
    _0x1baaaf[_0xf1c7bc(0x310)][_0xf1c7bc(0x292)]() !== ""
  ) {
    if (_0x1baaaf[_0xf1c7bc(0x310)][_0xf1c7bc(0x320)](_0xf1c7bc(0x32e)))
      _0x253bf8 = _0x1baaaf[_0xf1c7bc(0x310)];
    else {
      let _0x3c1cf4 = _0x1baaaf[_0xf1c7bc(0x310)][_0xf1c7bc(0x320)]("/")
        ? _0x1baaaf["pr_imagen"]
        : "/" + _0x1baaaf[_0xf1c7bc(0x310)];
      _0x253bf8 = "https://media.megaservicio.net" + _0x3c1cf4;
    }
  }
  let _0x2f8e6a =
      Number(_0x1baaaf["pr_precio"]) || Number(_0x1baaaf["L1"]) || 0x0,
    _0x4498b5 = Math[_0xf1c7bc(0x351)](_0x2f8e6a * 1.16 * 0x64) / 0x64,
    _0x1b012d = 0xc,
    _0x3e8cf2 = 0.1,
    _0x48f0cd =
      Math[_0xf1c7bc(0x351)](_0x4498b5 * (0x1 + _0x3e8cf2) * 0x64) / 0x64,
    _0x4a06bb = "";
  if (
    _0x1baaaf[_0xf1c7bc(0x499)] &&
    _0x1baaaf[_0xf1c7bc(0x499)][_0xf1c7bc(0x428)] > 0x1
  ) {
    const _0x3ce865 = [...new Set(_0x1baaaf["codigos_barras"])][
      _0xf1c7bc(0x4d6)
    ]((_0x2f3676) => _0x2f3676 && _0x2f3676["trim"]());
    _0x3ce865[_0xf1c7bc(0x428)] > 0x1 &&
      (_0x4a06bb =
        _0xf1c7bc(0x4d5) +
        _0x3ce865["join"](",\x20") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20");
  }
  renderProductoConPromociones(
    _0x1baaaf,
    _0x253bf8,
    _0x4498b5,
    _0x48f0cd,
    _0x4a06bb
  ),
    setTimeout(() => {
      generarCodigoBarras(_0x1baaaf);
    }, 0x64),
    detectarPromocionReal(_0x1baaaf)
      [_0xf1c7bc(0x2dd)]((_0x87e719) => {
        actualizarPromocionesEnVista(
          _0x1baaaf,
          _0x253bf8,
          _0x4498b5,
          _0x48f0cd,
          _0x4a06bb,
          _0x87e719
        );
      })
      [_0xf1c7bc(0x2c7)]((_0x46c256) => {
        const _0x292d2a = _0xf1c7bc;
        console[_0x292d2a(0x233)](_0x292d2a(0x1ef), _0x46c256),
          actualizarPromocionesEnVista(
            _0x1baaaf,
            _0x253bf8,
            _0x4498b5,
            _0x48f0cd,
            _0x4a06bb,
            []
          );
      });
}
function generarCodigoBarras(_0x534f48) {
  const _0x1f9b2b = _0x146931,
    _0xb9c4e3 = _0x534f48["pr_sku"] || _0x534f48[_0x1f9b2b(0x4be)] || "",
    _0x1e3f94 = "barcode-" + _0x534f48["pr_sku"],
    _0x3fd963 = document[_0x1f9b2b(0x539)](_0x1e3f94);
  if (!_0x3fd963 || !_0xb9c4e3) {
    console[_0x1f9b2b(0x1f6)](_0x1f9b2b(0x479));
    return;
  }
  const _0x3c459c = () => {
    const _0xb4e94f = _0x1f9b2b;
    if (window[_0xb4e94f(0x32a)])
      try {
        let _0x26aa8c = _0xb4e94f(0x213);
        const _0x2c2501 = String(_0xb9c4e3);
        if (_0x2c2501["length"] === 0xd && /^\d+$/[_0xb4e94f(0x1cb)](_0x2c2501))
          _0x26aa8c = "EAN13";
        else {
          if (_0x2c2501[_0xb4e94f(0x428)] === 0x8 && /^\d+$/["test"](_0x2c2501))
            _0x26aa8c = _0xb4e94f(0x21f);
          else
            _0x2c2501[_0xb4e94f(0x428)] === 0xc &&
              /^\d+$/["test"](_0x2c2501) &&
              (_0x26aa8c = _0xb4e94f(0x3df));
        }
        console["log"](
          "Generando\x20código\x20de\x20barras\x20" +
            _0x26aa8c +
            _0xb4e94f(0x29f) +
            _0x2c2501
        ),
          JsBarcode(_0x3fd963, _0x2c2501, {
            format: _0x26aa8c,
            width: 0x2,
            height: 0x32,
            displayValue: ![],
            margin: 0x0,
            background: _0xb4e94f(0x455),
            lineColor: "#000000",
          }),
          window[_0xb4e94f(0x1b3)] <= 0x300 &&
            JsBarcode(_0x3fd963, _0x2c2501, {
              format: _0x26aa8c,
              width: 1.5,
              height: 0x28,
              displayValue: ![],
              margin: 0x0,
              background: _0xb4e94f(0x455),
              lineColor: _0xb4e94f(0x1c1),
            });
      } catch (_0x13bad7) {
        console["error"](
          "Error\x20generando\x20código\x20de\x20barras:",
          _0x13bad7
        );
        const _0xc99495 = _0x3fd963[_0xb4e94f(0x220)]("2d");
        (_0xc99495["fillStyle"] = "#f8f9fa"),
          _0xc99495[_0xb4e94f(0x198)](
            0x0,
            0x0,
            _0x3fd963[_0xb4e94f(0x300)],
            _0x3fd963[_0xb4e94f(0x45a)]
          ),
          (_0xc99495[_0xb4e94f(0x2e2)] = _0xb4e94f(0x2df)),
          (_0xc99495[_0xb4e94f(0x1e0)] = _0xb4e94f(0x2d7)),
          (_0xc99495[_0xb4e94f(0x195)] = _0xb4e94f(0x4cc)),
          _0xc99495["fillText"](
            _0xb4e94f(0x325),
            _0x3fd963[_0xb4e94f(0x300)] / 0x2,
            _0x3fd963[_0xb4e94f(0x45a)] / 0x2
          );
      }
    else setTimeout(_0x3c459c, 0x64);
  };
  _0x3c459c();
}
function renderProductoConPromociones(
  _0x54760b,
  _0x30129c,
  _0x2959f4,
  _0x44b59c,
  _0x327510
) {
  const _0x38129e = _0x146931;
  resultadoDiv[_0x38129e(0x1ba)] =
    _0x38129e(0x367) +
    (_0x30129c
      ? "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-4\x20d-flex\x20justify-content-center\x20mb-3\x20mb-lg-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fff;\x20border-radius:16px;\x20box-shadow:0\x204px\x2024px\x20rgba(0,0,0,0.15);\x20padding:16px;\x20display:flex;\x20justify-content:center;\x20align-items:center;\x20width:240px;\x20height:140px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22" +
        _0x30129c +
        _0x38129e(0x3b2) +
        _0x54760b[_0x38129e(0x177)] +
        _0x38129e(0x420)
      : "") +
    _0x38129e(0x3f6) +
    _0x54760b[_0x38129e(0x177)] +
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-center\x20align-items-center\x20gap-3\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-danger\x20precio-responsive\x22>$\x20" +
    _0x2959f4["toFixed"](0x2) +
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>CONTADO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20mx-2\x22\x20style=\x22font-size:1.5rem;\x22>|</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x20precio-responsive\x22>$\x20" +
    _0x44b59c[_0x38129e(0x3f4)](0x2) +
    _0x38129e(0x411) +
    _0x54760b[_0x38129e(0x346)] +
    _0x38129e(0x4bc) +
    (_0x54760b[_0x38129e(0x346)] ||
      _0x54760b[_0x38129e(0x4be)] ||
      _0x38129e(0x43a)) +
    _0x38129e(0x47c) +
    _0x327510 +
    _0x38129e(0x250);
}
function _0x5165() {
  const _0x3dbd05 = [
    "⚠️\x20API\x20nativa\x20no\x20detectó\x20códigos\x20válidos",
    "details",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20mb-0\x22>🏷️\x20",
    "🔑\x20PROBLEMA:\x20API\x20Key\x20inválida",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Con\x20códigos\x20adicionales:</strong>\x20",
    "cantidad",
    "Error\x20verificando\x20promociones:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📦\x20Productos\x20en\x20promoción:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "modalReporteVentas",
    "\x0a\x20\x20/*\x20Estilos\x20específicos\x20para\x20modal\x20en\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20/*\x20Evitar\x20oscurecimiento\x20de\x20fondo\x20en\x20móviles\x20*/\x0a\x20\x20\x20\x20.modal-backdrop,\x0a\x20\x20\x20\x20.modal-backdrop.show,\x0a\x20\x20\x20\x20.modal-backdrop.fade\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20stretch\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-dialog,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-content,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-body,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20flex:\x201\x20!important;\x0a\x20\x20\x20\x20\x20\x20overflow-y:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-height:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding:\x201rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-header,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-footer,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-footer\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20Asegurar\x20que\x20las\x20tarjetas\x20no\x20causen\x20overflow\x20horizontal\x20*/\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.row\x20{\x0a\x20\x20\x20\x20\x20\x20margin-left:\x20-8px\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin-right:\x20-8px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20[class*=\x22col-\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20padding-left:\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding-right:\x208px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Mejorar\x20scroll\x20en\x20todos\x20los\x20dispositivos\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0,\x200,\x200)\x20!important;\x20/*\x20Forzar\x20aceleración\x20por\x20hardware\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    "#mensajeActualizacion",
    "margin",
    "OverconstrainedError",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20pt-2\x20border-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>📅\x20Vigencia:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Timeout",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22consultarProductoDesdeModal(\x27",
    "hide",
    "SCAN_TYPE_CAMERA",
    "Backend\x20error:\x20",
    "\x20minutos",
    "pro_nombrePromo",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>",
    "654VhbnIc",
    "qr_code",
    "📡\x20Enviando\x20a\x20backend\x20proxy...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "No\x20se\x20puede\x20generar\x20código\x20de\x20barras:\x20canvas\x20o\x20código\x20faltante",
    "Consultando\x203\x20endpoints...",
    "<div\x20class=\x22alert\x20alert-danger\x22>❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API</div>",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22me-3\x22\x20style=\x22min-width:60px;\x22><img\x20src=\x22",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-primary\x22>$",
    "code_93",
    "filtrado",
    "getInstance",
    "resumenMetodosPago",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB",
    "📱\x20Cerrando\x20modal\x20móvil...",
    "\x22\x20class=\x22card-img-top\x22\x20alt=\x22",
    "Failed\x20to\x20fetch",
    "slice",
    "❌\x20No\x20se\x20encontraron\x20códigos\x20válidos\x20en\x20el\x20texto",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h5\x20text-success\x22>$",
    "</code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Total:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x20text-success\x22>$",
    "all",
    "❌\x20Error\x20deteniendo\x20scanner:",
    "submit",
    "ticket",
    "PRECIO",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "Descargando\x20desde\x20múltiples\x20endpoints...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x20",
    "🔄\x20Nueva\x20versión\x20del\x20Service\x20Worker\x20disponible",
    "🔄\x20Iniciando\x20detección\x20con\x20Quagga...",
    "renderResultadosBusqueda",
    "toString",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20",
    "skus",
    "codigos_barras",
    ".alert-danger",
    "\x20usos\x20mensuales",
    "Procesando\x20productos",
    ".copiar-btn",
    "❌\x20Error\x20con\x20API\x20nativa,\x20usando\x20fallback:",
    "statusText",
    "cte_Nombre",
    "readyState",
    "1055",
    "La\x20cámara\x20no\x20soporta\x20las\x20configuraciones\x20requeridas.",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x22\x20style=\x22min-width:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "✅\x20Endpoint\x20promociones\x20consultado:\x20",
    "Escape",
    "addEventListener",
    "toUTCString",
    "data",
    "cookie",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h5>🏷️\x20No\x20se\x20encontraron\x20productos\x20con\x20promociones</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-0\x22>Puede\x20ser\x20que\x20no\x20haya\x20promociones\x20activas\x20en\x20este\x20momento\x20o\x20que\x20el\x20servicio\x20no\x20esté\x20disponible.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Enter",
    "touch",
    "📝\x20Texto\x20completo\x20detectado:",
    "⚡\x20Actualización\x20completada\x20en\x20",
    "🔄\x20Sin\x20query,\x20mostrando\x20todos\x20los\x20resultados",
    "%</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x22\x20style=\x22height:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-",
    "overflow",
    "bg-success\x20text-white",
    "\x0a\x20\x20\x20\x20\x20\x20",
    "✅\x20Usando\x20cantidad\x20y\x20precio\x20calculado:",
    "d-none",
    "toDataURL",
    "remove",
    "data_matrix",
    "modalPromocionesGenerales",
    "reader",
    "\x22\x20class=\x22barcode-canvas\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-bold\x20text-dark\x22>",
    "btn-outline-primary",
    "pr_gtin",
    "#btnTexto",
    "or_nombreVendedor",
    "input",
    ".modal-backdrop",
    "toISOString",
    "code",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Backend:\x20https://contador-apicloudvision.vercel.app/</small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-info\x20btn-sm\x22\x20onclick=\x22diagnosticarBackend()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Probar\x20Conexión\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "pageIndicator",
    "💳\x20Tarjeta\x20Crédito",
    "maxWidth",
    "💰\x20Efectivo",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20",
    "resultadosBusquedaModal",
    "center",
    "1\x20-\x20",
    "status",
    "PERMISSION_DENIED",
    "remainingDaily",
    "userChoice",
    "unshift",
    "pro_grupoProductos_primaria",
    "smooth",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x20mt-2\x22\x20style=\x22font-size:0.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Códigos\x20disponibles:</strong>\x20",
    "filter",
    "💡\x20Usando\x20configuración\x20de\x20cámara\x20básica",
    "stringify",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-top\x20pt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-center\x20mb-3\x22>�\x20Métodos\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Error:\x20No\x20se\x20pudieron\x20encontrar\x20los\x20elementos\x20necesarios\x20en\x20la\x20página",
    "💡\x20El\x20contador\x20del\x20backend\x20se\x20actualiza\x20automáticamente\x20en\x20el\x20servidor",
    "✅\x20Google\x20Vision\x20API\x20usada\x20exitosamente\x20-\x20contador\x20local\x20actualizado",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Fallo\x20al\x20cargar\x20productos\x20iniciales",
    "⚠️\x20No\x20se\x20pudieron\x20obtener\x20estadísticas\x20de\x20códigos\x20de\x20barras",
    "readonly",
    "200px",
    "🔄\x20Combinado",
    "\x20más</span>",
    "monthlyCount",
    "reload",
    "\x0a\x20\x20\x20\x20\x20\x20</div>",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Error\x20al\x20procesar\x20la\x20imagen</div>",
    "style",
    "flexDirection",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>🏷️\x20Sistema\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Productos:</strong>\x20",
    "Productos:\x20",
    "autocapitalize",
    "codabar_reader",
    "2\x20endpoints\x20completados,\x20finalizando...",
    "some",
    "btn-success",
    "FECHA_ESCANEO",
    "busquedaModalInput",
    "target",
    "❌\x20renderResultadosBusqueda\x20no\x20está\x20disponible",
    "\x20días",
    "function",
    ")\x20-\x20",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔧\x20Problema\x20de\x20CORS\x20detectado\x20-\x20necesita\x20configuración\x20en\x20backend",
    "type",
    "parentNode",
    "❌\x20Elementos\x20críticos\x20no\x20encontrados:",
    "tickets",
    "boundingBox",
    "🔧\x20Configurando\x20eventos\x20búsqueda\x20modal,\x20input\x20encontrado:",
    "json",
    "month",
    "\x20|\x20Promociones:\x20",
    "Error\x20al\x20copiar:",
    "splice",
    "\x22\x20style=\x22width:60px;height:60px;object-fit:contain;border-radius:8px;background:#f8f9fa;\x22\x20onerror=\x22this.style.display=\x27none\x27\x22></div>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🎉\x20¡Google\x20Vision\x20API\x20Activa!</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>✅\x20La\x20detección\x20premium\x20está\x20funcionando\x20correctamente</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Fallback\x20automático:\x20Local\x20→\x20Google\x20Vision</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "contains",
    "stop",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "<br>•\x20🔍\x20<strong>Códigos\x20detectados:</strong>\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "userAgent",
    "❌\x20Instalación\x20rechazada",
    "autoplay",
    "PDF_417",
    "view",
    "DATA_MATRIX",
    "📱\x20Cerrando\x20cámara\x20automáticamente\x20al\x20abrir\x20",
    "Cargando\x20promociones",
    "🏷️\x20Promociones\x20oficiales\x20filtradas:",
    "label[for=\x22fileInput\x22]",
    "playsinline",
    "ultimaActualizacion",
    "onload",
    "🧹\x20Botón\x20limpiar\x20presionado",
    "\x20productos\x20(",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>Tickets</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22>$",
    "\x20con\x20datos\x20disponibles)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "bg-primary",
    "diagnostic",
    "storageKey",
    "\x20tickets)</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "placeholder",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📋\x20Descripción\x20completa\x20de\x20productos:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-3\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "bg-gradient",
    "códigos\x20de\x20barras\x20❌\x20(HTTP\x20",
    "❌\x20Código\x20no\x20encontrado:\x20\x22",
    ";\x20expires=",
    "✅\x20Detección\x20avanzada\x20(backend)\x20configurada\x20y\x20activa",
    "Escaneando\x20código...",
    "📷\x20Iniciando\x20scanner\x20de\x20códigos\x20de\x20barras...",
    "now",
    "pro_mensaje",
    "busquedaModalKeyHandler",
    "position",
    "scope",
    "drawImage",
    "<small\x20class=\x22text-success\x22><strong>Precio\x20unitario:</strong>\x20$",
    "✅\x20Código\x20válido\x20seleccionado:\x20",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "Básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "fill",
    "Conectando\x20con\x20todos\x20los\x20servidores",
    "Cuadros",
    "nearest",
    "getElementById",
    "btnToggleVista",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-medium\x22>",
    "📋\x20Promociones\x20(locales):",
    "prompt",
    "body",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-check\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22form-check-input\x22\x20type=\x22checkbox\x22\x20id=\x22enabledCheck\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "primary",
    "⚙️\x20Configuración\x20de\x20detección\x20avanzada",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "postMessage",
    "detalles",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Buscando...</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Buscando\x20ticket\x20",
    "upc_reader",
    "applyConstraints",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22productos-lista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$",
    "x-large",
    "transfer",
    "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto",
    "debit_card",
    "srcObject",
    "\x20diario<br>🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "responses",
    "\x20mensual,\x20",
    "códigos\x20de\x20barras\x20❌\x20(timeout/error)",
    "installed",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-img-top\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-secondary\x22\x20style=\x22height:\x2080px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-white\x22>📦</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "consultarProductoDesdeModal",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x20ms-2\x22>1\x20unidad</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22><strong>SKU:</strong>\x20",
    "🛑\x20Deteniendo\x20scanner\x20manualmente...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x22>",
    "🔄\x20Probando\x20con\x20imagen\x20original...",
    "❌\x20Google\x20Vision\x20no\x20detectó\x20texto",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "toDateString",
    "\x20\x20\x20Posibles\x20causas:",
    "isArray",
    "success",
    "code_39_vin_reader",
    "tipo",
    "code_128_reader",
    "labelVista",
    "📋\x20Cheque",
    "rawValue",
    "es-CL",
    "\x20al\x20",
    "pr_name",
    "\x20días\x20desde\x20productos\x20y\x20",
    "getItem",
    ".consultar-historial-btn",
    "https://ticket-b9.vercel.app/api?ticketId=",
    "pointerEvents",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-start\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-dark\x22\x20style=\x22font-size:\x201rem;\x22>",
    "🧮\x20Calculando\x20precio\x20total:\x20",
    "<br>",
    "pro_precio_total",
    "\x20más\x20con\x20promociones.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "keys",
    "Todos\x20los\x20endpoints\x20fallaron\x20(",
    "remainingMonthly",
    "fuente",
    "auto",
    "modal-open",
    "\x20promociones\x20(",
    "promociones\x20✅",
    "or_nombreCliente",
    "onsuccess",
    "💳\x20Tarjeta\x20Débito",
    ")<br>",
    "push",
    "toLowerCase",
    "updatefound",
    "serviceWorker",
    "<div\x20class=\x22col\x22>",
    "❌\x20Sin\x20datos,\x20usando\x20genérico",
    "autocomplete",
    "textAlign",
    "NOMBRE",
    "add",
    "fillRect",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "getRegistrations",
    "productosBasicos",
    "AZTEC",
    "limpiarHistorialBtn",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22verPromociones()\x22\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "pr_precio",
    "sugerenciasDiv",
    "monthlyLimit",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20",
    "large",
    "⚠️\x20Scanner\x20ya\x20está\x20activo",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>TOTAL</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "\x0a\x20\x20<div\x20class=\x22d-flex\x20gap-2\x20mb-4\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnPromociones\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#28a745;\x20background:#d4edda;\x20color:#155724;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🏷️\x20Ver\x20Promociones\x0a\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnReporteVentas\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#007bff;\x20background:#e7f3ff;\x20color:#004085;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x22\x20onclick=\x22mostrarModalReporteVentas()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20📊\x20Reporte\x20Ventas\x0a\x20\x20\x20\x20</button>\x0a\x20\x20</div>\x0a\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20w-100\x20mb-2\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20flex-column\x20flex-md-row\x20align-items-md-end\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20<h5\x20class=\x22ant-typography\x20css-1r8qqf1\x20mb-0\x22>Productos</h5>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22ultimaActualizacion\x22\x20class=\x22ant-typography\x20css-1r8qqf1\x20ms-md-4\x22\x20style=\x22font-size:1rem;\x22>Última\x20actualización:\x20nunca\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnActualizar\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#d9d9d9;\x20background:#fff;\x20color:#222;\x20font-size:1rem;\x20padding:2px\x2016px;\x20margin-left:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnTexto\x22>Actualizar</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20id=\x22mensajeActualizacion\x22\x20class=\x22text-center\x22\x20style=\x22min-height:\x201.5rem;\x22></div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20promociones\x20generales\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22promocionesGeneralesModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22promocionesGeneralesModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22promocionesGeneralesModalLabel\x22>🏷️\x20Todas\x20las\x20Promociones\x20Disponibles</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22promociones-generales-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones...</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20me-auto\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20reporte\x20de\x20ventas\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22reporteVentasModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22reporteVentasModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22reporteVentasModalLabel\x22>📊\x20Reporte\x20de\x20Ventas</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22cerrarModalReporteVentas()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22reporte-ventas-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22mesReporte\x22\x20class=\x22form-label\x22>Seleccionar\x20Mes:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22month\x22\x20id=\x22mesReporte\x22\x20class=\x22form-control\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x20d-flex\x20align-items-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-primary\x22\x20onclick=\x22generarReporteVentas()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnReporteTexto\x22>Generar\x20Reporte</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnReporteSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22reporte-contenido\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-bar-chart\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Selecciona\x20un\x20mes\x20y\x20genera\x20el\x20reporte\x20para\x20ver\x20las\x20ventas\x20por\x20vendedor.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22cerrarModalReporteVentas()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "🔍\x20Actualizando\x20promociones\x20en\x20vista:",
    "pro_tipoPromo",
    "10NuHZEl",
    "column",
    "#198754",
    "</strong>\x20resultado",
    "\x20|\x20Promociones:\x20nunca",
    "bg-info",
    "🔧\x20Sugerencia:\x20Verificar\x20configuración\x20CORS\x20en\x20el\x20backend\x20para\x20/api/productos-con-codigos",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-2\x22>Sin\x20ventas\x20en\x20",
    "</small>",
    "transaction",
    "innerWidth",
    "📊\x20<strong>Uso\x20local\x20de\x20este\x20dispositivo:</strong><br>",
    "2842ckszGj",
    "❌\x20Backend\x20no\x20disponible:",
    "clipboard",
    "pro_precioPromo",
    "BILLING_DISABLED",
    "innerHTML",
    "🔍\x20Input\x20cambió\x20a:",
    ".copiar-sku-btn",
    "parse",
    "🔄\x20Probando\x20configuración\x20alternativa...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-decoration-line-through\x20text-muted\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>$",
    "importe",
    "#000000",
    "getAll",
    "Bootstrap\x20modal\x20no\x20activo",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🚫\x20Vision\x20API\x20No\x20Habilitada</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20Vision\x20API\x20no\x20está\x20habilitada\x20en\x20tu\x20proyecto</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/apis/library/vision.googleapis.com\x22\x20target=\x22_blank\x22>Habilitar\x20Vision\x20API</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Hace\x20",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20<strong\x20class=\x22ms-1\x22>",
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22\x20colspan=\x222\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-md-none\x22>",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<span\x20class=\x22badge\x20",
    "%\x20del\x20total</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22>",
    "test",
    "637496gdCDbL",
    "dailyUsed",
    "\x20promocion(es)\x20encontrada(s)\x20para\x20SKU:\x20",
    "continuous",
    "fileInput",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Cliente:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "createObjectStore",
    "Sin\x20conexión\x20a\x20internet",
    "🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "value",
    "\x20endpoints\x20consultados",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Vista:\x20",
    "La\x20función\x20de\x20visualización\x20de\x20tickets\x20no\x20está\x20disponible.",
    "removeEventListener",
    "5528205eJIiAM",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-4\x20col-lg-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22>$",
    "🌐\x20<strong>Backend:</strong>\x20",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22height:\x2080px;\x20object-fit:\x20contain;\x20padding:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "font",
    "Combo\x20Especial",
    "https://contador-apicloudvision.vercel.app/api/stats",
    "googleVisionConfig",
    "ean_reader",
    "query",
    "inserta\x20sku\x20o\x20busca\x20un\x20producto",
    "BarcodeDetector",
    "find",
    "reporteVentasModal",
    "34559QgUpEg",
    "100%",
    "productosConCodigos",
    "recordUsage",
    "\x20más</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Error\x20cargando\x20promociones:",
    "busquedaModalInputHandler",
    "removeChild",
    "credit_note",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Precio\x20promocional</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "),\x20",
    "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2060vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ticket</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Cliente</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Importe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22>Fecha</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Método</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Banco</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20",
    "warn",
    "\x20=\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "Algunos\x20endpoints\x20fallaron\x20(",
    "flex",
    "other",
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20/*\x20Imagen\x20fija\x20para\x20tarjetas\x20de\x20resultados\x20(grid)\x20*/\x0a\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20border-top-left-radius:\x200.375rem;\x0a\x20\x20\x20\x20border-top-right-radius:\x200.375rem;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20}\x0a\x20\x20.result-card-img\x20img\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20}\x0a\x20\x20/*\x20El\x20espaciado\x20del\x20grid\x20lo\x20maneja\x20Bootstrap\x20g-3;\x20sin\x20margen\x20extra\x20en\x20la\x20card\x20para\x20evitar\x20desalineación\x20*/\x0a\x20\x20.result-card\x20{\x20margin:\x200;\x20}\x0a\x20\x20.promo-badge\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x206px;\x0a\x20\x20\x20\x20left:\x206px;\x0a\x20\x20\x20\x20font-size:\x200.7rem;\x0a\x20\x20}\x0a\x20\x20@media\x20(max-width:\x20576px)\x20{\x0a\x20\x20\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20\x20\x20height:\x20100px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20nombre\x20del\x20producto\x20*/\x0a\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x201.4rem;\x0a\x20\x20\x20\x20line-height:\x201.3;\x0a\x20\x20\x20\x20margin-bottom:\x200.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.1rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20precios\x20*/\x0a\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x203.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x202.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20para\x20código\x20de\x20barras\x20funcional\x20*/\x0a\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20max-width:\x20100%;\x0a\x20\x20\x20\x20height:\x20auto;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20background:\x20#ffffff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x202rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x201.5rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20160px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Modal\x20de\x20resultados\x20al\x2080%\x20en\x20desktop\x20*/\x0a\x20\x20@media\x20(min-width:\x20992px)\x20{\x0a\x20\x20\x20\x20#resultadosBusquedaModal\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    "promociones:",
    "beforeinstallprompt",
    "cash",
    "🔄\x20Consultando\x20endpoint\x20básico...",
    "or_total",
    "precioTotal",
    "📸\x20Preparando\x20imagen\x20para\x20Google\x20Vision...",
    "UPC_E",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-box-seam\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x20mb-0\x22>Productos\x20no\x20disponibles</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<small\x20class=\x22text-muted\x20mt-1\x20d-block\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20text-truncate\x22\x20title=\x22",
    "totalVentas",
    "Nueva\x20versión\x20disponible.\x20¿Recargar\x20la\x20página?",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22btn-vendedor-",
    "writeText",
    "text",
    "resultadosInfo",
    "./service-worker.js",
    "keydown",
    "files",
    "CODE128",
    "accepted",
    "es-MX",
    "Productos\x20básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "🚀\x20Usando\x20Barcode\x20Detection\x20API\x20nativa",
    "codabar",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "btnIrPagina",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "1000",
    "autocorrect",
    "bg-success",
    "EAN8",
    "getContext",
    "key",
    "createImageData",
    "CANTIDAD_X_PRECIO_FIJO",
    "Lista",
    "📊\x20Status\x20HTTP:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Vendedor:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "📅\x20Productos\x20actualizados\x20hace\x20",
    "vendedorNombre",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20Error\x20verificando\x20estado",
    "validTo",
    "https://verificadorb9-backend.vercel.app/api/productos",
    "nombre",
    "🎯\x20Mejor\x20código\x20seleccionado:\x20\x22",
    "⚠️\x20Error\x20limpiando\x20elementos:",
    "warningThreshold",
    "⚠️\x20Error\x20al\x20procesar\x20producto\x20",
    "⚠️\x20Algunas\x20configuraciones\x20no\x20pudieron\x20aplicarse:",
    "includes",
    "error",
    "top",
    "No\x20se\x20encontró\x20ninguna\x20cámara\x20en\x20tu\x20dispositivo.",
    "total_price",
    "500",
    "promociones_ts",
    "alert-success",
    "🚀\x20Iniciando\x20actualización\x20con\x20progreso...",
    "\x20días\x20desde\x20promociones",
    "precio",
    "#btnSpinner",
    "🏦\x20Transferencia",
    "📊\x20Datos\x20finales\x20para\x20construcción:",
    "limpiarBusquedaModal",
    "✅\x20Código\x20detectado\x20(configuración\x20agresiva):",
    "#btnActualizar",
    "detect",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20",
    "https://verificadorb9-backend.vercel.app/api/promociones",
    "match",
    "Error\x20procesando\x20imagen:",
    "\x22\x20loading=\x22lazy\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20object-fit:\x20contain;\x20border-radius:\x208px;\x20background:\x20#f8f9fa;\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.style.display=\x27none\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "appendChild",
    "getFullYear",
    "src",
    "fulfilled",
    "</code>.<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Verifica\x20que\x20el\x20número\x20esté\x20escrito\x20correctamente.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x20d-lg-none\x22\x20style=\x22font-size:\x200.65rem;\x22>",
    "descripcion",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22promociones-container\x22\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>🔍\x20Verificando\x20promociones...</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "environment",
    "data-copiar",
    ".modal-body",
    "5048613SjNyWD",
    "onchange",
    "API_KEY_INVALID",
    "NetworkError",
    "bi\x20bi-list",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔑\x20API\x20Key\x20inválida\x20-\x20verifica\x20la\x20configuración\x20en\x20Vercel</div>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x20promociones",
    "🔍\x20Código\x20candidato\x20encontrado:\x20",
    "✅\x20Los\x203\x20endpoints\x20consultados",
    "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "formulario",
    "toLocaleString",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "resultado",
    "preventDefault",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>❌\x20Error\x20al\x20cargar\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "orders",
    "codeResult",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22alert-heading\x22>✅\x20Ticket\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Ticket:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20spinner-border-sm\x20me-2\x22\x20role=\x22status\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Diagnosticando\x20backend...\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "🏦\x20PROBLEMA:\x20Facturación\x20no\x20habilitada\x20en\x20el\x20proyecto\x20correcto",
    "🔄\x20Consultando\x20endpoint\x20con\x20códigos\x20de\x20barras...",
    "button",
    "fire",
    "rejected",
    "promoción\x20oficial",
    "🔍\x20Buscando\x20promociones\x20para\x20SKU:",
    "✅\x20Todos\x20los\x20endpoints\x20consultados",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Cantidad</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "readwrite",
    "list-group-item\x20list-group-item-action\x20d-flex\x20align-items-center",
    "📊\x20Resumen\x20endpoints\x20productos:",
    "join",
    "modalConsultarTicket",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Modal",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Endpoint\x20/api/stats\x20falló:\x20",
    "Finalizada\x20en\x20",
    "detenerScanner",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "⚠️\x20BarcodeDetector\x20no\x20disponible\x20en\x20este\x20navegador",
    "canUseAPI",
    "lastUsedDate",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Promoción\x20especial",
    "\x20longitud:\x20",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "scrollIntoView",
    "PROMO",
    "promociones-generales-modal-body",
    "Nunca\x20actualizado",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x20bg-transparent\x20border-0\x20pt-0\x20pb-2\x20text-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-primary\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27",
    "es_oficial",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "hidden.bs.modal",
    "count",
    "promociones",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🎯\x20PROMOCIÓN\x20ENCONTRADA\x20para\x20SKU\x20",
    "❌\x20Error\x20en\x20diagnóstico:",
    "trim",
    "CODE_93",
    "No\x20se\x20pudieron\x20cargar\x20productos\x20de\x20ningún\x20endpoint",
    "precio_total",
    "826hvwZnl",
    "ITF",
    "mostrarModalConsultarTicket",
    "✅\x20Productos\x20cargados\x20con\x20códigos\x20de\x20barras:",
    "🎯\x20Mostrando\x20promociones\x20locales...",
    "🍎\x20Dispositivo\x20iOS:",
    "activo",
    "credit",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-success\x22>🏷️\x20Productos\x20con\x20Promociones</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20text-white\x22>",
    "\x20para:\x20",
    "GET",
    "reason",
    "backgroundColor",
    "allSettled",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>",
    "fixed",
    "resultadoBusquedaTicket",
    "nunca",
    "10410256YNKjsk",
    "Error\x20consultando\x20producto\x20desde\x20historial:",
    "left",
    "fecha",
    "UPC_A",
    "EAN_13",
    "<i\x20class=\x22bi\x20bi-clipboard-check\x22></i>",
    "<img\x20src=\x22",
    "metodoPago",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "classList",
    "border-bottom\x20pb-3",
    "createElement",
    "Error\x20HTTP:\x20",
    "imageSmoothingEnabled",
    "🔄\x20Actualización\x20automática:\x20han\x20pasado\x20",
    "NotReadableError",
    "\x20x\x20",
    "dailyCount",
    "activeElement",
    "aztec",
    "div",
    "code_32_reader",
    "✅\x20Detección\x20avanzada\x20activada",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x22\x20style=\x22width:40px;\x20height:40px;\x20object-fit:cover;\x20border-radius:4px;\x20margin-right:12px;\x20background:#f8f9fa;\x22>",
    "principal",
    "🎯\x20Producto\x20encontrado\x20con\x20códigos\x20múltiples:",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "ultimosVendedores",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>",
    "catch",
    "Promoción\x20",
    "setItem",
    "click",
    "off",
    "or_fecha",
    "🔍\x20Realizando\x20búsqueda\x20en\x20modal\x20con\x20query:",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x20result-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22result-card-img\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "resultados-busqueda-body",
    "i2of5",
    "usarCodigosBarras",
    "upc_a",
    "POST",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>❌\x20",
    "nombre_promocion",
    "12px\x20Arial",
    "getUsageStatus",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>(",
    "banco",
    "log",
    "i2of5_reader",
    "then",
    "setAttribute",
    "#6c757d",
    "🔍\x20Validando:\x20\x22",
    "resetMonthlyUsage",
    "fillStyle",
    "<div\x20class=\x22row\x22>",
    "No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara",
    "no-store",
    "onerror",
    "NotFoundError",
    "ean_8_reader",
    "enabled",
    "idPromo",
    "NotAllowedError",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:#495057;\x22>🏷️\x20PROMOCIONES\x20ACTIVAS</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20No\x20hay\x20scanner\x20activo\x20para\x20detener",
    "💾\x20Guardar",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-success\x20fw-bold\x22>$",
    "💻\x20Abriendo\x20modal\x20en\x20desktop...",
    "replace",
    "CODABAR",
    "agresiva",
    "bg-dark",
    "putImageData",
    "🎯\x20Búsqueda\x20inteligente\x20completada,\x20resultados:",
    "⚠️\x20Usando\x20nombre\x20completo:",
    "load",
    "📊\x20Estadísticas:",
    "code_128",
    "page",
    "🆕\x20Nueva\x20versión\x20lista\x20para\x20usar",
    "\x27)\x22\x20title=\x22Ver\x20detalles\x20completos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "❌\x20Error\x20específico\x20del\x20backend:",
    "\x20horas",
    "width",
    "📅\x20Promociones\x20actualizadas\x20hace\x20",
    "🚀\x20Intentando\x20con\x20Google\x20Vision\x20API...",
    "ceil",
    "DOMContentLoaded",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-warning\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔥\x20",
    "resultados_view",
    "check",
    "\x20\x20\x20•\x20Problema\x20en\x20el\x20código\x20de\x20la\x20función\x20serverless",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "básico\x20❌\x20(error)",
    "</span>",
    "2-digit",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22\x20style=\x22font-weight:500;\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "abs",
    "códigos\x20de\x20barras\x20⚠️\x20(sin\x20datos)",
    "pr_imagen",
    "Error\x20en\x20detección",
    "installing",
    "saveUsage",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Total\x20Ventas</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-success\x22>",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Actualizado:</strong>\x20",
    "❌\x20Error\x20iniciando\x20scanner:",
    "update",
    "ℹ️\x20Promos\x20locales\x20disponibles:",
    "⚠️\x20Consulta\x20parcial\x20de\x20endpoints",
    "1\x20endpoint\x20completado,\x20finalizando...",
    "pageSizeSelect",
    "indexeddb_local",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20locales\x20cargadas.\x20Pulsa\x20“Actualizar”\x20para\x20sincronizar.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x20\x20\x20💡\x20Ejecuta\x20diagnosticarBackend()\x20para\x20más\x20detalles",
    "Formato\x20de\x20promociones\x20inválido",
    "startsWith",
    "📸\x20Procesando\x20con\x20Quagga...",
    "controller",
    "https://media.megaservicio.net",
    "precio\x20especial",
    "Código\x20no\x20válido",
    "data-sku",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22>Total\x20con\x20Promo</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "credit_note_application",
    "race",
    "JsBarcode",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20consultar-historial-btn\x22\x20title=\x22Ver\x20detalles\x20completos\x22\x20data-sku=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "floor",
    "http",
    "Permiso\x20de\x20cámara\x20denegado.\x20Por\x20favor,\x20permite\x20el\x20acceso\x20a\x20la\x20cámara\x20en\x20tu\x20navegador.",
    "tiempoBusqueda",
    "✅\x20Extraído\x20formato\x20con\x20peso\x20del\x20nombre:",
    "🏦\x20Error\x20de\x20facturación:\x20Habilita\x20billing\x20en\x20Google\x20Cloud",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Total\x20Tickets</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20",
    "credit_card",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20d-flex\x20align-items-center\x20gap-2\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x22>$",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "✅\x20Configuración\x20guardada",
    "opacity",
    "❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-check-label\x22\x20for=\x22enabledCheck\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Activar\x20detección\x20avanzada\x20(Backend)</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Usa\x20servidor\x20dedicado\x20para\x20mejor\x20detección\x20de\x20códigos\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🌐\x20Google\x20Vision\x20API:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "code_39",
    "❌\x20Error\x20con\x20Google\x20Vision,\x20usando\x20fallback:",
    "getMonth",
    "💵\x20Crédito",
    "#btnPromociones",
    "✅\x20Código\x20detectado\x20(configuración\x20principal):",
    "objectStoreNames",
    "querySelectorAll",
    "pr_sku",
    "No\x20se\x20encontraron\x20datos\x20del\x20vendedor",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "...</p>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "validFrom",
    "visionData",
    "state",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x20p-3\x20bg-light\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>",
    "<small\x20class=\x22text-muted\x20d-block\x22><strong>Código:</strong>\x20",
    "requestSubmit",
    "modalResultadosBusqueda",
    "round",
    "<span\x20class=\x22badge\x20bg-secondary\x22\x20style=\x22font-size:\x200.7rem;\x22>+",
    "productos_ts",
    "message",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error\x20al\x20generar\x20el\x20reporte:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "block",
    "⚠️\x20Usando\x20solo\x20detección\x20local",
    "itf",
    "application/json",
    "textContent",
    "overflowY",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20",
    "⚠️\x20Límite\x20local\x20alcanzado.\x20Mensual:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "upc_e_reader",
    "querySelector",
    "toLocaleDateString",
    "promocionesGeneralesModal",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20row-cols-2\x20row-cols-md-3\x20row-cols-lg-4\x20g-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "image/png",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
    "hasAttribute",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22row\x20align-items-center\x20justify-content-center\x20g-0\x20mb-4\x22\x20style=\x22padding:\x200px\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "bg-light\x20text-dark",
    "Error\x20en\x20actualización:",
    "<div\x20class=\x22text-center\x20text-muted\x20small\x22>…\x20y\x20",
    "btnPrevResultados",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontraron\x20resultados\x20para:\x20",
    "onLine",
    "result",
    "pro_cantidad_base",
    "🎯\x20Umbral\x20calculado:\x20",
    "✅\x20Instalación\x20aceptada",
    "Backend\x20no\x20disponible\x20-\x20usando\x20detección\x20local",
    "valor_total",
    "border-warning",
    "❌\x20No\x20hay\x20promociones\x20para\x20SKU:\x20",
    "✅\x20Endpoint\x20básico\x20consultado:",
    "\x27);\x20})()\x22>Ver</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>",
    "backend_mejorado",
    "🔧\x20Error\x20500\x20detectado\x20-\x20Analizando\x20causa\x20específica:",
    "decodeSingle",
    "statechange",
    "stopPropagation",
    "reduce",
    "oncomplete",
    "\x22\x20formato:\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>Promedio</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20w-100\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22mostrarDetalleVendedor(\x27",
    "Verifique\x20su\x20conexión\x20a\x20internet",
    "start",
    "border",
    "🔗\x20Probando\x20endpoint:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "pdf417",
    "\x20(quedan\x20",
    "Productos:\x20nunca\x20|\x20Promociones:\x20",
    "webkitOverflowScrolling",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20promo-badge\x22>🏷️\x20PROMO</span>",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "?stats=true",
    "https://ticket-b9.vercel.app/api/ticket?ticketId=",
    "ean_13",
    "🏷️\x20",
    "5145118dRJdwu",
    "CORS",
    "📱\x20Dispositivo\x20móvil:",
    "upc_e",
    "onclick",
    "forEach",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-md-table-cell\x22><small>",
    "clase",
    "<small\x20class=\x22text-muted\x20d-block\x20d-lg-none\x22>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "cssText",
    "CORS_ERROR:\x20Backend\x20no\x20accesible\x20desde\x20este\x20dominio",
    "canvas",
    "❌\x20Elementos\x20DOM\x20requeridos\x20no\x20encontrados",
    "CODE_39",
    "🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers",
    "list",
    "No\x20especificado",
    "\x20más</div>",
    "<br><br>📊\x20<strong>Uso\x20local:</strong>\x20",
    "monthlyUsed",
    "básico\x20✅",
    "none",
    "<i\x20class=\x22bi\x20bi-clipboard\x22></i>",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27",
    "reporte-contenido",
    "Generar\x20Reporte",
    "sort",
    "https://ticket-b9.vercel.app/api/proxy?ticketId=",
    "busquedaModalClearHandler",
    "disabled",
    "6fIAxBf",
    "🔧\x20Error\x20500:\x20Problema\x20con\x20Google\x20Vision\x20API",
    "head",
    "\x22\x20alt=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>...\x20y\x20",
    "alternativa",
    "Error\x20inicial\x20cargando\x20productos:",
    "codigo",
    "✅\x20Configuraciones\x20de\x20cámara\x20aplicadas\x20para\x20mejor\x20lectura",
    "💡\x20Ve\x20a:\x20https://console.developers.google.com/billing/enable?project=1070150612422",
    "\x20/\x20",
    "price",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Unidades</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x20d-block\x22\x20style=\x22font-size:\x201.3rem;\x22>$",
    "revokeObjectURL",
    "insertAdjacentHTML",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20",
    "Backend\x20error",
    "CORS_ERROR",
    "getAttribute",
    "</code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>",
    "diagnostico-resultado",
    "code_39_reader",
    "blur",
    "mostrarModalPromocionesGenerales",
    "cantidadTickets",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20encontraron\x20ventas\x20para\x20el\x20mes\x20seleccionado.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "códigos\x20de\x20barras\x20❌\x20(CORS/Red)",
    "Fecha\x20desconocida",
    "❌\x20Cancelar",
    "</div>",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Total\x20Normal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "className",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$",
    "total",
    "📸\x20Usando\x20Quagga\x20como\x20fallback",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22detenerScannerBtn\x22\x20class=\x22btn\x20btn-outline-danger\x20btn-sm\x22\x20onclick=\x22detenerScanner()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-stop\x20me-1\x22></i>Detener\x20Scanner\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "transparent",
    ".modal-content",
    "productos",
    "detalleVendedorModal",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><span\x20class=\x22badge\x20",
    "•\x20Diario:\x20",
    "verTicketCompleto",
    "zIndex",
    "show",
    "💡\x20Verifica\x20que\x20el\x20proyecto\x20#1070150612422\x20tenga\x20facturación\x20activa",
    "maxHeight",
    "UPC",
    "⚠️\x20Backend\x20responde\x20pero\x20con\x20error:",
    "📄\x20Nota\x20Crédito",
    "border-secondary",
    "grid",
    "pageSize",
    "min",
    "#ultimaActualizacion",
    "checked",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-muted\x22>-</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Sin\x20datos</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "📋\x20Detalles\x20completos:",
    "bg-warning",
    "❌\x20Error\x20consultando\x20endpoints",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudieron\x20cargar\x20las\x20promociones:\x20",
    "<div\x20class=\x22text-muted\x22\x20style=\x22font-size:2rem;\x22><i\x20class=\x22bi\x20bi-image\x22></i></div>",
    "historial",
    "Backend\x20con\x20error:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "history",
    "getImageData",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "toFixed",
    "code_93_reader",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-8\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20nombre-producto-responsive\x22\x20style=\x22color:#616161;\x22>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "❌\x20Error\x20al\x20buscar\x20ticket:",
    "items",
    "objectStore",
    "✅\x20Datos\x20locales\x20encontrados:\x20productos:",
    "⚠️\x20Solo\x20cantidad\x20extraída:",
    "mesReporte",
    "\x22\x20(",
    "detalle",
    "async",
    "matchAll",
    "\x20de\x20\x22",
    "📋\x20Configuración\x20final\x20para\x20códigos\x20largos...",
    "pop",
    "loadUsage",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "✅\x20Códigos\x20válidos:\x20",
    "<div\x20class=\x22alert\x20alert-info\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Mostrando\x20los\x20primeros\x2020\x20productos.\x20Hay\x20",
    "❌\x20Error\x20en\x20",
    "\x20→\x20",
    "para\x20\x22",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20ms-2\x22\x20style=\x22font-size:0.7rem;\x22>🏷️\x20PROMO</span>",
    "inputPageJump",
    "format",
    "Formato:",
    "Generando...",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>MSI</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Código\x20de\x20barras\x20funcional\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22barcode-",
    "ean_8",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Área\x20para\x20mostrar\x20resultados\x20del\x20diagnóstico\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22diagnostico-resultado\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Detección\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20📷\x20<strong>Local:</strong>\x20Html5QrCode\x20+\x20BarcodeDetector\x20+\x20Quagga.js<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🌐\x20<strong>Premium:</strong>\x20Google\x20Vision\x20API\x20(para\x20códigos\x20difíciles)<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🔄\x20<strong>Automático:</strong>\x20Fallback\x20inteligente\x20entre\x20métodos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>✅\x20Ventajas\x20del\x20backend:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Sin\x20límites\x20por\x20dispositivo<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Detección\x20superior\x20en\x20superficies\x20reflectivas<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Mejor\x20precisión\x20con\x20códigos\x20largos<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Funciona\x20con\x20imágenes\x20de\x20baja\x20calidad<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Gestión\x20centralizada\x20de\x20recursos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🔄\x20Fallback\x20automático:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Si\x20el\x20backend\x20no\x20está\x20disponible,\x20la\x20app\x20usará\x20detección\x20local\x20automáticamente.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Recomendación:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mantén\x20activada\x20la\x20detección\x20avanzada\x20para\x20mejores\x20resultados.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "card",
    "SKIP_WAITING",
    "Actualizar",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "enabledCheck",
    "\x22\x20onerror=\x22this.onerror=null;\x20this.style.display=\x27none\x27;\x20this.parentElement.innerHTML=\x27<div\x20class=\x5c\x27text-muted\x5c\x27\x20style=\x5c\x27font-size:2rem;\x5c\x27><i\x20class=\x5c\x27bi\x20bi-image\x5c\x27></i></div>\x27;\x22>",
    "max",
    "map",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>\x20\x20Total\x20SKUs:</strong>\x20",
    "\x0a\x20\x20\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20width:\x201px\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x201px\x20!important;\x0a\x20\x20\x20\x20\x20\x20overflow:\x20hidden\x20!important;\x0a\x20\x20\x20\x20\x20\x20pointer-events:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20left:\x20-9999px\x20!important;\x0a\x20\x20\x20\x20\x20\x20top:\x20-9999px\x20!important;\x0a\x20\x20\x20\x20\x20\x20z-index:\x20-1\x20!important;\x0a\x20\x20\x20\x20",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Ver\x20Detalle\x20Completo\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    ".modal-dialog",
    "\x22\x20style=\x22width:218px;\x20height:124px;\x20object-fit:contain;\x20background:#fff;\x20border-radius:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "description",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<br><small\x20class=\x22text-muted\x22>Verifica\x20que\x20el\x20proxy\x20de\x20Vercel\x20esté\x20funcionando</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20",
    "dailyLimit",
    "ayuda",
    "borderRadius",
    "length",
    "🔍\x20Iniciando\x20diagnóstico\x20del\x20backend...",
    "d-flex\x20flex-column\x20align-items-center\x20mb-3",
    "showUsageWarning",
    "\x20resultado",
    "location",
    "✅\x20Tercera\x20tentativa\x20exitosa:",
    "\x20usos\x20hoy",
    "mensaje",
    "Error\x20verificando\x20datos\x20locales:",
    "shown.bs.modal",
    "originalQuery",
    "🧪\x20Probando\x20vision-detect\x20con\x20imagen\x20de\x20prueba...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    ",\x20Diario:\x20",
    ".modal-backdrop,\x20.modal-backdrop-mobile",
    "\x20segundos",
    "🎨\x20Re-renderizando\x20resultados...",
    "N/A",
    "consultarProductoDesdeHistorial",
    "display",
    "✅\x20Google\x20Vision\x20detectó:",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20SKU\x22\x20data-copiar=\x22",
    "✅\x20FileInput\x20configurado\x20para\x20GitHub\x20Pages",
    "códigos\x20de\x20barras\x20✅",
    "📱\x20Abriendo\x20modal\x20en\x20dispositivo\x20móvil...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Error\x20con\x20endpoint\x20de\x20códigos\x20de\x20barras:",
    "Error\x20en\x20el\x20servidor\x20proxy",
    "beforeend",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error\x20de\x20conexión</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20No\x20se\x20pudo\x20conectar\x20con\x20el\x20servidor.<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "focus",
    "numeroTicket",
    "bg-secondary",
    "bg-danger",
    "básico\x20❌\x20(error\x20HTTP)",
    "puntuacion",
    "script",
    "split",
    "💡\x20Verifica\x20la\x20configuración\x20de\x20GOOGLE_VISION_API_KEY\x20en\x20Vercel",
    "data-form-type",
    "btnReporteTexto",
    "\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20selecciona\x20un\x20mes\x20para\x20generar\x20el\x20reporte.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "usage",
    "#ffffff",
    "controllerchange",
    "📡\x20Consultando\x20TODOS\x20los\x20endpoints\x20de\x20productos...",
    "📦\x20Items\x20originales\x20disponibles:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-light\x20text-dark\x20me-1\x20mb-1\x22\x20style=\x22font-size:\x200.7rem;\x22>",
    "height",
    "resultadosCount",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20ingresa\x20un\x20número\x20de\x20ticket.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "clear",
    "✅\x20Datos\x20del\x20ticket\x20recibidos\x20de:",
  ];
  _0x5165 = function () {
    return _0x3dbd05;
  };
  return _0x5165();
}
function actualizarPromocionesEnVista(
  _0x4d468e,
  _0x38f478,
  _0x4a6877,
  _0x441c7b,
  _0x35b407,
  _0x10b3ab
) {
  const _0x4708b1 = _0x146931;
  console["log"](_0x4708b1(0x1a7), _0x10b3ab);
  let _0x168883 = "";
  if (_0x10b3ab[_0x4708b1(0x428)] > 0x0) {
    const _0x88b85d = _0x10b3ab[_0x4708b1(0x4d6)](
      (_0xc1c092) =>
        _0xc1c092["es_oficial"] &&
        (_0xc1c092["fuente"] === _0x4708b1(0x378) ||
          _0xc1c092[_0x4708b1(0x185)] === _0x4708b1(0x31c))
    );
    console[_0x4708b1(0x2db)](_0x4708b1(0x515), _0x88b85d);
    if (_0x88b85d[_0x4708b1(0x428)] > 0x0) {
      const _0x2e042f = _0x88b85d["map"]((_0xe06fa9) => {
        const _0x41b718 = _0x4708b1;
        console["log"](
          "🔍\x20Datos\x20de\x20promoción\x20recibidos:",
          _0xe06fa9
        );
        const _0x49f053 =
          _0xe06fa9[_0x41b718(0x464)] || _0xe06fa9[_0x41b718(0x36f)] || "";
        let _0x129619 =
          _0xe06fa9[_0x41b718(0x23c)] || _0xe06fa9["pro_precioPromo"] || "";
        const _0xa1fa12 =
          _0xe06fa9[_0x41b718(0x2d6)] || _0xe06fa9[_0x41b718(0x473)] || "";
        console[_0x41b718(0x2db)](
          "📊\x20Datos\x20extraídos\x20antes\x20de\x20procesamiento:",
          { cantidad: _0x49f053, precio: _0x129619, nombrePromo: _0xa1fa12 }
        );
        if (_0x49f053 && _0x129619) {
          const _0xca4d68 = parseInt(_0x49f053),
            _0x1f822b = parseFloat(_0x129619);
          if (!isNaN(_0xca4d68) && !isNaN(_0x1f822b)) {
            const _0x6dabda = _0xca4d68 * _0x1f822b,
              _0x29eb60 = Math[_0x41b718(0x351)](_0x6dabda);
            console["log"](
              _0x41b718(0x17e) +
                _0xca4d68 +
                _0x41b718(0x2b9) +
                _0x1f822b +
                _0x41b718(0x1f7) +
                _0x6dabda +
                _0x41b718(0x40a) +
                _0x29eb60 +
                "\x20(redondeado)"
            ),
              (_0x129619 = _0x29eb60[_0x41b718(0x496)]());
          }
        }
        console["log"](_0x41b718(0x23f), {
          cantidad: _0x49f053,
          precio: _0x129619,
          nombrePromo: _0xa1fa12,
        });
        let _0x2c8765 = "";
        if (_0x49f053 && _0x129619)
          (_0x2c8765 = _0x49f053 + "x" + _0x129619),
            console[_0x41b718(0x2db)](_0x41b718(0x4b5), _0x2c8765);
        else {
          if (_0xa1fa12) {
            const _0x175d8a = _0xa1fa12["match"](/(\d+)\s*[xX×]\s*(\d+)/i),
              _0x350061 = _0xa1fa12[_0x41b718(0x246)](
                /(\d+)\s*[xX×]\s*\$?\s*(\d+)/i
              ),
              _0x510e78 = _0xa1fa12[_0x41b718(0x246)](/(\d+)\s*[xX×]/i);
            if (_0x175d8a)
              (_0x2c8765 = _0x175d8a[0x1] + "x" + _0x175d8a[0x2]),
                console["log"](
                  "✅\x20Extraído\x20formato\x20completo\x20del\x20nombre:",
                  _0x2c8765
                );
            else {
              if (_0x350061)
                (_0x2c8765 = _0x350061[0x1] + "x" + _0x350061[0x2]),
                  console[_0x41b718(0x2db)](_0x41b718(0x331), _0x2c8765);
              else
                _0x510e78
                  ? ((_0x2c8765 = _0x510e78[0x1] + "x"),
                    console[_0x41b718(0x2db)](_0x41b718(0x3fc), _0x2c8765))
                  : ((_0x2c8765 = _0xa1fa12),
                    console[_0x41b718(0x2db)](_0x41b718(0x2f7), _0x2c8765));
            }
          } else
            (_0x2c8765 = _0x41b718(0x286)), console["log"](_0x41b718(0x193));
        }
        return (
          "<span\x20class=\x22badge\x20bg-success\x20text-white\x20me-2\x20mb-1\x22\x20style=\x22font-size:0.85rem;\x22>🔥\x20" +
          _0x2c8765 +
          _0x41b718(0x30b)
        );
      })[_0x4708b1(0x276)]("");
      _0x168883 = _0x4708b1(0x2ec) + _0x2e042f + _0x4708b1(0x30d);
    } else _0x168883 = _0x4708b1(0x442);
  } else
    _0x168883 =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20";
  const _0x5ea217 = document["getElementById"]("promociones-container");
  _0x5ea217 && (_0x5ea217[_0x4708b1(0x1ba)] = _0x168883);
}
async function mostrarModalPromocionesGenerales() {
  const _0x4fc89b = _0x146931;
  cerrarCamaraAlAbrirModal(_0x4fc89b(0x4ba));
  const _0x3b98c7 =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i["test"](
        navigator["userAgent"]
      ),
    _0x958efb = /iPad|iPhone|iPod/[_0x4fc89b(0x1cb)](
      navigator[_0x4fc89b(0x50d)]
    );
  if (_0x3b98c7) hideMobileKeyboard();
  console[_0x4fc89b(0x2db)](_0x4fc89b(0x392), _0x3b98c7),
    console["log"](_0x4fc89b(0x29b), _0x958efb);
  const _0x103f40 = document[_0x4fc89b(0x539)](_0x4fc89b(0x362)),
    _0x40ea7b = document[_0x4fc89b(0x539)](_0x4fc89b(0x287));
  if (!_0x40ea7b || !_0x103f40) {
    console[_0x4fc89b(0x233)]("❌\x20Modal\x20no\x20encontrado");
    return;
  }
  try {
    const _0x541d55 = () => {
      const _0x4f4ba3 = _0x4fc89b,
        _0xd180d7 = document[_0x4f4ba3(0x539)]("codigo");
      _0xd180d7 &&
        ((_0xd180d7[_0x4f4ba3(0x522)] = _0x4f4ba3(0x1e6)),
        bringInputIntoView());
    };
    _0x103f40[_0x4fc89b(0x4a7)]("hidden.bs.modal", _0x541d55, { once: !![] });
  } catch (_0x2601d2) {}
  try {
    const _0x302407 = document[_0x4fc89b(0x539)](_0x4fc89b(0x3b6));
    _0x302407 &&
      ((_0x302407[_0x4fc89b(0x1d5)] = ""),
      (_0x302407[_0x4fc89b(0x522)] = _0x4fc89b(0x1e6)));
    const _0x2d435c = document[_0x4fc89b(0x539)](_0x4fc89b(0x1a0));
    _0x2d435c &&
      ((_0x2d435c[_0x4fc89b(0x1ba)] = ""),
      (_0x2d435c["style"][_0x4fc89b(0x43c)] = _0x4fc89b(0x3a6)));
  } catch (_0x37bdd2) {}
  try {
    console["log"]("🎯\x20Consultando\x20promociones\x20generales..."),
      (_0x40ea7b[_0x4fc89b(0x1ba)] = _0x4fc89b(0x25a));
    const _0x41b4c4 = await getAllProductos();
    let _0x39c6a8 = [];
    try {
      _0x39c6a8 = await getAllPromociones();
    } catch (_0xcee98a) {
      _0x39c6a8 = [];
    }
    const _0x34dc2e = ![];
    console[_0x4fc89b(0x2db)](_0x4fc89b(0x53c), {
      total: _0x39c6a8[_0x4fc89b(0x428)],
      desdeServidor: _0x34dc2e,
    });
    if (_0x39c6a8[_0x4fc89b(0x428)] === 0x0) {
      _0x40ea7b[_0x4fc89b(0x1ba)] = _0x4fc89b(0x31d);
      return;
    }
    let _0x5dadfe = _0x4fc89b(0x2e3);
    _0x39c6a8[_0x4fc89b(0x395)]((_0x16645c, _0x4b4e7f) => {
      const _0x114e7a = _0x4fc89b;
      let _0x5e38d3 = [];
      if (
        _0x16645c["skus"] &&
        Array[_0x114e7a(0x16d)](_0x16645c[_0x114e7a(0x498)])
      )
        _0x5e38d3 = _0x16645c[_0x114e7a(0x498)];
      else
        _0x16645c[_0x114e7a(0x4d3)] &&
          _0x16645c["pro_grupoProductos_primaria"][_0x114e7a(0x346)] &&
          (Array["isArray"](_0x16645c[_0x114e7a(0x4d3)][_0x114e7a(0x346)])
            ? (_0x5e38d3 = _0x16645c[_0x114e7a(0x4d3)]["pr_sku"])
            : (_0x5e38d3 = _0x16645c[_0x114e7a(0x4d3)]["pr_sku"]
                [_0x114e7a(0x44e)]("\x20")
                [_0x114e7a(0x4d6)]((_0x5f2f87) =>
                  _0x5f2f87[_0x114e7a(0x292)]()
                )));
      const _0x3c0abf = new Map(
          _0x41b4c4[_0x114e7a(0x41b)]((_0x61088e) => [
            String(_0x61088e[_0x114e7a(0x346)]),
            _0x61088e,
          ])
        ),
        _0x4c3ea8 = _0x5e38d3[_0x114e7a(0x41b)]((_0x75c76c) =>
          _0x3c0abf["get"](String(_0x75c76c))
        )[_0x114e7a(0x4d6)](Boolean),
        _0x5d8569 =
          _0x16645c[_0x114e7a(0x473)] ||
          _0x16645c["descripcion"] ||
          _0x114e7a(0x2c8) + (_0x4b4e7f + 0x1),
        _0xed0759 =
          _0x16645c[_0x114e7a(0x1a8)] || _0x16645c["tipo"] || _0x114e7a(0x3a1),
        _0x3b94dc =
          _0x16645c[_0x114e7a(0x52c)] || _0x16645c[_0x114e7a(0x430)] || "",
        _0x5cf968 = _0x16645c[_0x114e7a(0x36f)] || "",
        _0x484746 = Number(_0x5cf968) || 0x1;
      let _0x18f0ab = 0x0;
      const _0x2cb5f = (_0x3b94dc + "\x20" + _0x5d8569)[_0x114e7a(0x18f)](),
        _0x3c3b4e = _0x2cb5f[_0x114e7a(0x246)](/(\d+)\s*x\s*(\d+)/);
      if (_0x3c3b4e) _0x18f0ab = Math[_0x114e7a(0x351)](Number(_0x3c3b4e[0x2]));
      else {
        const _0x113295 = Number(_0x16645c[_0x114e7a(0x1b8)]) || 0x0;
        _0x18f0ab = Math[_0x114e7a(0x351)](_0x113295 * _0x484746);
      }
      _0x5dadfe +=
        _0x114e7a(0x461) +
        _0x5d8569 +
        _0x114e7a(0x154) +
        (_0x4c3ea8[_0x114e7a(0x428)] > 0x0
          ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            _0x4c3ea8[_0x114e7a(0x487)](0x0, 0x4)
              [_0x114e7a(0x41b)]((_0x35727a) => {
                const _0x225cf0 = _0x114e7a;
                let _0x3023fd = "";
                if (
                  _0x35727a[_0x225cf0(0x310)] &&
                  _0x35727a["pr_imagen"]["trim"]() !== ""
                ) {
                  if (
                    _0x35727a[_0x225cf0(0x310)]["startsWith"](_0x225cf0(0x32e))
                  )
                    _0x3023fd = _0x35727a[_0x225cf0(0x310)];
                  else {
                    let _0x5b25c2 = _0x35727a[_0x225cf0(0x310)][
                      _0x225cf0(0x320)
                    ]("/")
                      ? _0x35727a[_0x225cf0(0x310)]
                      : "/" + _0x35727a["pr_imagen"];
                    _0x3023fd = _0x225cf0(0x323) + _0x5b25c2;
                  }
                }
                const _0x174ade =
                    Number(_0x35727a["pr_precio"]) ||
                    Number(_0x35727a["L1"]) ||
                    0x0,
                  _0x4951dd =
                    Math[_0x225cf0(0x351)](_0x174ade * 1.16 * 0x64) / 0x64;
                return (
                  _0x225cf0(0x435) +
                  (_0x3023fd
                    ? _0x225cf0(0x4a4) +
                      _0x3023fd +
                      "\x22\x20alt=\x22" +
                      _0x35727a[_0x225cf0(0x177)] +
                      _0x225cf0(0x248)
                    : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-light\x20rounded\x22\x20style=\x22min-width:\x2060px;\x20height:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-image\x20text-muted\x22\x20style=\x22font-size:\x201.5rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20") +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22\x20style=\x22font-size:\x200.9rem;\x20line-height:\x201.2;\x22>" +
                  _0x35727a[_0x225cf0(0x177)] +
                  _0x225cf0(0x3d0) +
                  _0x4951dd[_0x225cf0(0x3f4)](0x2) +
                  _0x225cf0(0x46e) +
                  _0x35727a[_0x225cf0(0x346)] +
                  _0x225cf0(0x2fd)
                );
              })
              [_0x114e7a(0x276)]("") +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            (_0x4c3ea8[_0x114e7a(0x428)] > 0x4
              ? _0x114e7a(0x36a) +
                (_0x4c3ea8[_0x114e7a(0x428)] - 0x4) +
                _0x114e7a(0x3a2)
              : "") +
            _0x114e7a(0x385)
          : _0x114e7a(0x205)) +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    }),
      (_0x5dadfe += _0x4fc89b(0x3cc)),
      (_0x40ea7b[_0x4fc89b(0x1ba)] = _0x5dadfe);
    if (_0x3b98c7 || _0x958efb) {
      console[_0x4fc89b(0x2db)](_0x4fc89b(0x441)),
        document[_0x4fc89b(0x345)](_0x4fc89b(0x4c2))[_0x4fc89b(0x395)](
          (_0x3538c7) => _0x3538c7[_0x4fc89b(0x4b8)]()
        ),
        (_0x103f40["style"][_0x4fc89b(0x52e)] = _0x4fc89b(0x2a5)),
        (_0x103f40[_0x4fc89b(0x4e8)][_0x4fc89b(0x234)] = "0"),
        (_0x103f40[_0x4fc89b(0x4e8)]["left"] = "0"),
        (_0x103f40[_0x4fc89b(0x4e8)][_0x4fc89b(0x300)] = "100%"),
        (_0x103f40[_0x4fc89b(0x4e8)][_0x4fc89b(0x45a)] = _0x4fc89b(0x1eb)),
        (_0x103f40[_0x4fc89b(0x4e8)][_0x4fc89b(0x3db)] = _0x4fc89b(0x4a2)),
        (_0x103f40[_0x4fc89b(0x4e8)][_0x4fc89b(0x2a2)] = _0x4fc89b(0x3d4));
      const _0x5095d9 = _0x103f40[_0x4fc89b(0x360)](_0x4fc89b(0x41f));
      _0x5095d9 &&
        ((_0x5095d9[_0x4fc89b(0x4e8)][_0x4fc89b(0x300)] = _0x4fc89b(0x1eb)),
        (_0x5095d9[_0x4fc89b(0x4e8)][_0x4fc89b(0x4c8)] = _0x4fc89b(0x1eb)),
        (_0x5095d9["style"]["height"] = "100%"),
        (_0x5095d9["style"][_0x4fc89b(0x46a)] = "0"),
        (_0x5095d9[_0x4fc89b(0x4e8)][_0x4fc89b(0x43c)] = _0x4fc89b(0x1fa)),
        (_0x5095d9[_0x4fc89b(0x4e8)][_0x4fc89b(0x4e9)] = "column"));
      const _0xab82ab = _0x103f40["querySelector"](".modal-content");
      _0xab82ab &&
        ((_0xab82ab[_0x4fc89b(0x4e8)][_0x4fc89b(0x300)] = _0x4fc89b(0x1eb)),
        (_0xab82ab[_0x4fc89b(0x4e8)][_0x4fc89b(0x45a)] = _0x4fc89b(0x1eb)),
        (_0xab82ab[_0x4fc89b(0x4e8)][_0x4fc89b(0x383)] = _0x4fc89b(0x3a6)),
        (_0xab82ab["style"][_0x4fc89b(0x427)] = "0"),
        (_0xab82ab["style"][_0x4fc89b(0x43c)] = "flex"),
        (_0xab82ab["style"]["flexDirection"] = _0x4fc89b(0x1aa)));
      const _0x431f7a = _0x103f40[_0x4fc89b(0x360)](_0x4fc89b(0x253));
      _0x431f7a &&
        ((_0x431f7a[_0x4fc89b(0x4e8)][_0x4fc89b(0x1fa)] = "1"),
        (_0x431f7a[_0x4fc89b(0x4e8)]["overflowY"] = "auto"),
        (_0x431f7a["style"][_0x4fc89b(0x389)] = _0x4fc89b(0x4ad)),
        (_0x431f7a[_0x4fc89b(0x4e8)][_0x4fc89b(0x3de)] = _0x4fc89b(0x3a6))),
        (_0x103f40[_0x4fc89b(0x4e8)][_0x4fc89b(0x43c)] = _0x4fc89b(0x356)),
        _0x103f40[_0x4fc89b(0x2b2)][_0x4fc89b(0x197)](_0x4fc89b(0x3dc)),
        document[_0x4fc89b(0x53e)]["classList"][_0x4fc89b(0x4b8)](
          _0x4fc89b(0x187)
        ),
        (document[_0x4fc89b(0x53e)]["style"][_0x4fc89b(0x4b2)] = "");
    } else {
      console[_0x4fc89b(0x2db)](_0x4fc89b(0x2f0));
      const _0x56d63a = new bootstrap["Modal"](_0x103f40, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x56d63a["show"]();
    }
  } catch (_0x1265c1) {
    console["error"]("Error\x20cargando\x20promociones:", _0x1265c1),
      (_0x40ea7b[_0x4fc89b(0x1ba)] =
        _0x4fc89b(0x264) + _0x1265c1[_0x4fc89b(0x354)] + _0x4fc89b(0x50c));
  }
}
function cerrarModalMobile() {
  const _0x493ada = _0x146931;
  console[_0x493ada(0x2db)](_0x493ada(0x484));
  const _0x3799a9 = document["getElementById"](_0x493ada(0x362));
  if (_0x3799a9) {
    _0x3799a9[_0x493ada(0x2b2)]["remove"](_0x493ada(0x3dc)),
      (_0x3799a9[_0x493ada(0x4e8)][_0x493ada(0x43c)] = _0x493ada(0x3a6)),
      (_0x3799a9[_0x493ada(0x4e8)]["position"] = ""),
      (_0x3799a9[_0x493ada(0x4e8)][_0x493ada(0x234)] = ""),
      (_0x3799a9[_0x493ada(0x4e8)][_0x493ada(0x2aa)] = ""),
      (_0x3799a9[_0x493ada(0x4e8)][_0x493ada(0x300)] = ""),
      (_0x3799a9[_0x493ada(0x4e8)][_0x493ada(0x45a)] = ""),
      (_0x3799a9[_0x493ada(0x4e8)][_0x493ada(0x3db)] = ""),
      (_0x3799a9["style"]["backgroundColor"] = "");
    const _0x2a849b = _0x3799a9[_0x493ada(0x360)](".modal-dialog");
    _0x2a849b &&
      ((_0x2a849b[_0x493ada(0x4e8)][_0x493ada(0x300)] = ""),
      (_0x2a849b[_0x493ada(0x4e8)][_0x493ada(0x4c8)] = ""),
      (_0x2a849b[_0x493ada(0x4e8)][_0x493ada(0x45a)] = ""),
      (_0x2a849b["style"][_0x493ada(0x46a)] = ""),
      (_0x2a849b[_0x493ada(0x4e8)][_0x493ada(0x43c)] = ""),
      (_0x2a849b[_0x493ada(0x4e8)]["flexDirection"] = ""));
    const _0x13c8f1 = _0x3799a9[_0x493ada(0x360)](_0x493ada(0x3d5));
    _0x13c8f1 &&
      ((_0x13c8f1["style"][_0x493ada(0x300)] = ""),
      (_0x13c8f1[_0x493ada(0x4e8)][_0x493ada(0x45a)] = ""),
      (_0x13c8f1["style"]["border"] = ""),
      (_0x13c8f1[_0x493ada(0x4e8)]["borderRadius"] = ""),
      (_0x13c8f1[_0x493ada(0x4e8)][_0x493ada(0x43c)] = ""),
      (_0x13c8f1[_0x493ada(0x4e8)]["flexDirection"] = ""));
    const _0x59dd57 = _0x3799a9[_0x493ada(0x360)](_0x493ada(0x253));
    _0x59dd57 &&
      ((_0x59dd57[_0x493ada(0x4e8)][_0x493ada(0x1fa)] = ""),
      (_0x59dd57[_0x493ada(0x4e8)][_0x493ada(0x35b)] = ""),
      (_0x59dd57[_0x493ada(0x4e8)]["webkitOverflowScrolling"] = ""),
      (_0x59dd57[_0x493ada(0x4e8)][_0x493ada(0x3de)] = ""));
  }
  document[_0x493ada(0x53e)][_0x493ada(0x2b2)][_0x493ada(0x4b8)]("modal-open"),
    (document[_0x493ada(0x53e)][_0x493ada(0x4e8)][_0x493ada(0x4b2)] = "");
  try {
    const _0x266f66 = bootstrap["Modal"][_0x493ada(0x481)](_0x3799a9);
    _0x266f66 && _0x266f66["hide"]();
  } catch (_0x1bae1f) {
    console[_0x493ada(0x2db)](_0x493ada(0x1c3));
  }
  try {
    document[_0x493ada(0x345)](_0x493ada(0x4c2))["forEach"]((_0x3e0d86) =>
      _0x3e0d86[_0x493ada(0x4b8)]()
    );
  } catch (_0x1b89e0) {}
  try {
    const _0x486b38 = document[_0x493ada(0x539)]("codigo");
    _0x486b38 &&
      ((_0x486b38[_0x493ada(0x522)] =
        "inserta\x20sku\x20o\x20busca\x20un\x20producto"),
      bringInputIntoView());
  } catch (_0xaf24cb) {}
}
async function consultarProductoDesdeModal(_0x14f15f) {
  const _0x19715f = _0x146931;
  try {
    try {
      cerrarModalMobile();
    } catch (_0x558836) {}
    const _0x3ea886 = document[_0x19715f(0x539)](_0x19715f(0x362));
    _0x3ea886 &&
      (_0x3ea886[_0x19715f(0x2b2)][_0x19715f(0x4b8)](_0x19715f(0x3dc)),
      (_0x3ea886["style"][_0x19715f(0x43c)] = _0x19715f(0x3a6)));
    try {
      const _0x274b56 =
        bootstrap[_0x19715f(0x279)][_0x19715f(0x481)](_0x3ea886);
      if (_0x274b56) _0x274b56[_0x19715f(0x46f)]();
    } catch (_0x24b274) {}
    document["querySelectorAll"](_0x19715f(0x437))[_0x19715f(0x395)](
      (_0x3633ae) => _0x3633ae[_0x19715f(0x4b8)]()
    ),
      document[_0x19715f(0x53e)]["classList"][_0x19715f(0x4b8)](
        _0x19715f(0x187)
      ),
      (document[_0x19715f(0x53e)][_0x19715f(0x4e8)][_0x19715f(0x4b2)] = "");
    const _0x4de087 = await getAllProductos(),
      _0x445a01 = _0x4de087["find"](
        (_0x19f0cd) =>
          String(_0x19f0cd[_0x19715f(0x346)]) === String(_0x14f15f) ||
          String(_0x19f0cd[_0x19715f(0x4be)]) === String(_0x14f15f)
      );
    if (_0x445a01) {
      (inputCodigo[_0x19715f(0x1d5)] = ""), mostrarDetalleProducto(_0x445a01);
      const _0x14a504 = {
        ..._0x445a01,
        FECHA_ESCANEO: new Date()[_0x19715f(0x4c3)](),
      };
      historial["unshift"](_0x14a504),
        setCookie("historial", JSON[_0x19715f(0x4d8)](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x55c846 = _0x19715f,
            _0x307f30 = document[_0x55c846(0x539)]("resultado");
          _0x307f30 &&
            _0x307f30[_0x55c846(0x285)]({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
        }, 0x12c);
    } else
      (resultadoDiv[_0x19715f(0x1ba)] =
        _0x19715f(0x4ca) + _0x14f15f + _0x19715f(0x3f7)),
        setTimeout(() => {
          resultadoDiv["innerHTML"] = "";
        }, 0x1388);
  } catch (_0x148a88) {
    console[_0x19715f(0x233)](
      "Error\x20consultando\x20producto\x20desde\x20modal:",
      _0x148a88
    ),
      (resultadoDiv["innerHTML"] =
        _0x19715f(0x3be) +
        _0x148a88[_0x19715f(0x354)] +
        "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      setTimeout(() => {
        const _0x1ae9b2 = _0x19715f;
        resultadoDiv[_0x1ae9b2(0x1ba)] = "";
      }, 0x1388);
  }
}
async function consultarProductoDesdeHistorial(_0x308f42) {
  const _0x462f08 = _0x146931;
  try {
    const _0x4139d3 = await getAllProductos(),
      _0x3e408f = _0x4139d3[_0x462f08(0x1e8)](
        (_0x159ce4) =>
          String(_0x159ce4[_0x462f08(0x346)]) === String(_0x308f42) ||
          String(_0x159ce4[_0x462f08(0x4be)]) === String(_0x308f42)
      );
    if (_0x3e408f) {
      (inputCodigo[_0x462f08(0x1d5)] = ""), mostrarDetalleProducto(_0x3e408f);
      const _0x4fc124 = historial["findIndex"](
        (_0xfc9689) =>
          (_0xfc9689[_0x462f08(0x346)] &&
            String(_0xfc9689["pr_sku"]) === String(_0x308f42)) ||
          (_0xfc9689[_0x462f08(0x4be)] &&
            String(_0xfc9689[_0x462f08(0x4be)]) === String(_0x308f42))
      );
      if (_0x4fc124 !== -0x1) {
        const _0x2bcb89 = historial[_0x462f08(0x504)](_0x4fc124, 0x1)[0x0];
        (_0x2bcb89[_0x462f08(0x4f1)] = new Date()["toISOString"]()),
          historial[_0x462f08(0x4d2)](_0x2bcb89),
          setCookie(_0x462f08(0x3ee), JSON[_0x462f08(0x4d8)](historial), 0x1e),
          renderHistorial();
      }
      setTimeout(() => {
        const _0x6f4b57 = _0x462f08,
          _0x5602ae = document[_0x6f4b57(0x539)](_0x6f4b57(0x262));
        _0x5602ae &&
          _0x5602ae[_0x6f4b57(0x285)]({
            behavior: _0x6f4b57(0x4d4),
            block: _0x6f4b57(0x382),
            inline: _0x6f4b57(0x538),
          });
      }, 0x12c);
    } else
      (resultadoDiv[_0x462f08(0x1ba)] =
        _0x462f08(0x4ca) + _0x308f42 + _0x462f08(0x3f7)),
        setTimeout(() => {
          const _0x28590d = _0x462f08;
          resultadoDiv[_0x28590d(0x1ba)] = "";
        }, 0x1388);
  } catch (_0x4ae665) {
    console[_0x462f08(0x233)](_0x462f08(0x2a9), _0x4ae665),
      (resultadoDiv[_0x462f08(0x1ba)] =
        _0x462f08(0x3be) + _0x4ae665[_0x462f08(0x354)] + _0x462f08(0x399)),
      setTimeout(() => {
        resultadoDiv["innerHTML"] = "";
      }, 0x1388);
  }
}
(window[_0x146931(0x3c6)] = mostrarModalPromocionesGenerales),
  (window[_0x146931(0x164)] = consultarProductoDesdeModal),
  (window[_0x146931(0x43b)] = consultarProductoDesdeHistorial);
async function tienePromociones(_0x59f9b9) {
  const _0x459220 = _0x146931;
  try {
    const _0x265345 = (_0x59f9b9[_0x459220(0x346)] || "")[_0x459220(0x496)]();
    if (!_0x265345) return ![];
    const _0xef346d = await getAllPromociones();
    if (_0xef346d["length"] === 0x0) return ![];
    for (const _0x545e44 of _0xef346d) {
      let _0x1f22ba = [];
      if (
        _0x545e44[_0x459220(0x498)] &&
        Array[_0x459220(0x16d)](_0x545e44[_0x459220(0x498)])
      )
        _0x1f22ba = _0x545e44[_0x459220(0x498)];
      else
        _0x545e44["pro_grupoProductos_primaria"] &&
          _0x545e44[_0x459220(0x4d3)]["pr_sku"] &&
          (Array["isArray"](_0x545e44["pro_grupoProductos_primaria"]["pr_sku"])
            ? (_0x1f22ba = _0x545e44[_0x459220(0x4d3)][_0x459220(0x346)])
            : (_0x1f22ba = _0x545e44["pro_grupoProductos_primaria"][
                _0x459220(0x346)
              ]
                [_0x459220(0x44e)]("\x20")
                [_0x459220(0x4d6)]((_0x38dc9e) => _0x38dc9e["trim"]())));
      if (_0x1f22ba["includes"](_0x265345)) return !![];
    }
    return ![];
  } catch (_0x28e58b) {
    return console["warn"](_0x459220(0x465), _0x28e58b), ![];
  }
}
let searchTimeout;
inputCodigo[_0x146931(0x4a7)](_0x146931(0x4c1), async function (_0x575c13) {
  const _0x567f39 = _0x146931,
    _0x23e8d9 = inputCodigo["value"]["trim"]()[_0x567f39(0x18f)]();
  clearTimeout(searchTimeout), (sugerenciasDiv[_0x567f39(0x1ba)] = "");
  if (!_0x23e8d9 || _0x23e8d9["length"] < 0x2) {
    sugerenciasDiv[_0x567f39(0x4e8)][_0x567f39(0x43c)] = "none";
    return;
  }
  searchTimeout = setTimeout(async () => {
    const _0x1cf3c2 = _0x567f39;
    let _0x2ded1f = await getAllProductos(),
      _0x3b4fea = _0x2ded1f["filter"]((_0x353486) => {
        const _0x181a3f = _0x4e0e;
        return (
          (_0x353486[_0x181a3f(0x177)] &&
            _0x353486[_0x181a3f(0x177)]
              ["toLowerCase"]()
              [_0x181a3f(0x232)](_0x23e8d9)) ||
          (_0x353486[_0x181a3f(0x346)] &&
            String(_0x353486[_0x181a3f(0x346)])
              [_0x181a3f(0x18f)]()
              [_0x181a3f(0x232)](_0x23e8d9)) ||
          (_0x353486[_0x181a3f(0x4be)] &&
            String(_0x353486[_0x181a3f(0x4be)])
              [_0x181a3f(0x18f)]()
              [_0x181a3f(0x232)](_0x23e8d9))
        );
      });
    const _0x4379f8 = new Set();
    _0x3b4fea = _0x3b4fea[_0x1cf3c2(0x4d6)]((_0x438f73) => {
      const _0x5da409 = _0x1cf3c2,
        _0x4ed0b7 = _0x438f73[_0x5da409(0x346)] || _0x438f73["pr_gtin"];
      if (!_0x4ed0b7 || _0x4379f8["has"](_0x4ed0b7)) return ![];
      return _0x4379f8[_0x5da409(0x197)](_0x4ed0b7), !![];
    });
    if (_0x3b4fea[_0x1cf3c2(0x428)] === 0x0) {
      sugerenciasDiv["style"][_0x1cf3c2(0x43c)] = _0x1cf3c2(0x3a6);
      return;
    }
    _0x3b4fea[_0x1cf3c2(0x3ab)]((_0x19a3a5, _0x27bbe6) => {
      const _0x49c343 = _0x1cf3c2,
        _0x376e60 = (_0x19a3a5[_0x49c343(0x177)] || "")[_0x49c343(0x18f)](),
        _0x43616a = (_0x27bbe6[_0x49c343(0x177)] || "")[_0x49c343(0x18f)](),
        _0x468b09 = _0x376e60[_0x49c343(0x320)](_0x23e8d9),
        _0x199d83 = _0x43616a[_0x49c343(0x320)](_0x23e8d9);
      if (_0x468b09 && !_0x199d83) return -0x1;
      if (!_0x468b09 && _0x199d83) return 0x1;
      return _0x376e60["length"] - _0x43616a[_0x49c343(0x428)];
    }),
      (_0x3b4fea = _0x3b4fea[_0x1cf3c2(0x487)](0x0, 0xa));
    const _0x23698e = _0x3b4fea[_0x1cf3c2(0x41b)]((_0x2e1888) =>
        tienePromociones(_0x2e1888)
      ),
      _0x546251 = await Promise[_0x1cf3c2(0x48b)](_0x23698e);
    _0x3b4fea[_0x1cf3c2(0x395)]((_0x57e906, _0x2b4b59) => {
      const _0x2e0158 = _0x1cf3c2,
        _0x227e36 = _0x546251[_0x2b4b59],
        _0x1f8fcc = document[_0x2e0158(0x2b4)]("button");
      (_0x1f8fcc[_0x2e0158(0x4fa)] = _0x2e0158(0x26c)),
        (_0x1f8fcc[_0x2e0158(0x3ce)] = _0x2e0158(0x274));
      let _0x3e4699 = "";
      if (
        _0x57e906[_0x2e0158(0x310)] &&
        _0x57e906[_0x2e0158(0x310)][_0x2e0158(0x292)]() !== ""
      ) {
        let _0x4aa4ab = "";
        if (_0x57e906[_0x2e0158(0x310)]["startsWith"](_0x2e0158(0x32e)))
          _0x4aa4ab = _0x57e906["pr_imagen"];
        else {
          let _0x254a03 = _0x57e906[_0x2e0158(0x310)][_0x2e0158(0x320)]("/")
            ? _0x57e906[_0x2e0158(0x310)]
            : "/" + _0x57e906[_0x2e0158(0x310)];
          _0x4aa4ab = _0x2e0158(0x323) + _0x254a03;
        }
        _0x3e4699 =
          _0x2e0158(0x2af) +
          _0x4aa4ab +
          _0x2e0158(0x3b2) +
          _0x57e906[_0x2e0158(0x177)] +
          _0x2e0158(0x2c1);
      }
      const _0x5c11b4 = _0x227e36 ? _0x2e0158(0x40c) : "";
      (_0x1f8fcc[_0x2e0158(0x1ba)] =
        _0x2e0158(0x4b4) +
        _0x3e4699 +
        _0x2e0158(0x417) +
        _0x57e906[_0x2e0158(0x177)] +
        _0x2e0158(0x338) +
        _0x5c11b4 +
        _0x2e0158(0x1f8) +
        (_0x57e906["pr_sku"] || _0x57e906[_0x2e0158(0x4be)] || "") +
        _0x2e0158(0x25e)),
        (_0x1f8fcc[_0x2e0158(0x394)] = function () {
          const _0x3b0c3c = _0x2e0158;
          mostrarDetalleProducto(_0x57e906);
          const _0x17ab3a = {
            ..._0x57e906,
            FECHA_ESCANEO: new Date()[_0x3b0c3c(0x4c3)](),
          };
          historial["unshift"](_0x17ab3a),
            setCookie(
              _0x3b0c3c(0x3ee),
              JSON[_0x3b0c3c(0x4d8)](historial),
              0x1e
            ),
            renderHistorial(),
            (inputCodigo[_0x3b0c3c(0x1d5)] = ""),
            (sugerenciasDiv["innerHTML"] = ""),
            (sugerenciasDiv[_0x3b0c3c(0x4e8)][_0x3b0c3c(0x43c)] =
              _0x3b0c3c(0x3a6));
        }),
        sugerenciasDiv[_0x2e0158(0x249)](_0x1f8fcc);
    }),
      (sugerenciasDiv[_0x1cf3c2(0x4e8)][_0x1cf3c2(0x43c)] = _0x1cf3c2(0x356));
  }, 0x12c);
}),
  document["addEventListener"](_0x146931(0x2ca), function (_0x303963) {
    const _0x238d19 = _0x146931;
    !inputCodigo[_0x238d19(0x507)](_0x303963[_0x238d19(0x4f3)]) &&
      !sugerenciasDiv[_0x238d19(0x507)](_0x303963["target"]) &&
      ((sugerenciasDiv[_0x238d19(0x1ba)] = ""),
      (sugerenciasDiv[_0x238d19(0x4e8)]["display"] = "none"));
  });
function iniciarScanner() {
  const _0x3afb3d = _0x146931;
  if (scannerActivo) {
    console["log"](_0x3afb3d(0x1a4));
    return;
  }
  console[_0x3afb3d(0x2db)](_0x3afb3d(0x52a));
  const _0x135d63 = document["getElementById"](_0x3afb3d(0x4bb)),
    _0x4236a5 = document[_0x3afb3d(0x539)](_0x3afb3d(0x426)),
    _0x4888cb = document[_0x3afb3d(0x539)](_0x3afb3d(0x3b6)),
    _0xa9a9a5 = document["getElementById"](_0x3afb3d(0x262)),
    _0x52c9a5 = document["getElementById"](_0x3afb3d(0x1a0)),
    _0xae074d = document[_0x3afb3d(0x539)](_0x3afb3d(0x25f));
  if (!_0x135d63 || !_0x4236a5 || !_0x4888cb || !_0xa9a9a5 || !_0xae074d) {
    console[_0x3afb3d(0x233)](
      "❌\x20Elementos\x20requeridos\x20no\x20encontrados"
    );
    _0xa9a9a5 &&
      (_0xa9a9a5[_0x3afb3d(0x1ba)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>❌\x20Error:\x20elementos\x20requeridos\x20no\x20encontrados\x20en\x20la\x20página</div>");
    return;
  }
  try {
    (_0x4888cb[_0x3afb3d(0x1d5)] = ""),
      (_0x4888cb[_0x3afb3d(0x522)] = _0x3afb3d(0x529)),
      _0x52c9a5 &&
        ((_0x52c9a5[_0x3afb3d(0x1ba)] = ""),
        (_0x52c9a5["style"][_0x3afb3d(0x43c)] = "none"));
  } catch (_0x2fce0e) {}
  (scannerActivo = !![]),
    (_0x135d63["style"]["display"] = _0x3afb3d(0x356)),
    document[_0x3afb3d(0x539)](_0x3afb3d(0x4bb))[_0x3afb3d(0x285)]({
      behavior: _0x3afb3d(0x4d4),
      block: "center",
    }),
    (_0x4236a5["style"][_0x3afb3d(0x43c)] = _0x3afb3d(0x356)),
    (_0x4236a5[_0x3afb3d(0x1ba)] = _0x3afb3d(0x3d3)),
    (html5QrCodeGlobal = new Html5Qrcode(_0x3afb3d(0x4bb)));
  const _0x3db9c6 = {
    fps: 0x1e,
    videoConstraints: {
      width: { min: 0x280, ideal: 0x780, max: 0xa00 },
      height: { min: 0x1e0, ideal: 0x438, max: 0x780 },
      facingMode: _0x3afb3d(0x251),
      focusMode: _0x3afb3d(0x1cf),
      advanced: [
        { zoom: 0x2 },
        { focusMode: _0x3afb3d(0x1cf) },
        { exposureMode: _0x3afb3d(0x1cf) },
        { whiteBalanceMode: "continuous" },
      ],
    },
    qrbox: function (_0x54b82d, _0x21ffab) {
      const _0x166165 = _0x3afb3d,
        _0x12d16e = Math[_0x166165(0x41a)](
          0x32,
          Math["min"](0x1f4, _0x54b82d * 0.8)
        ),
        _0x245982 = Math[_0x166165(0x41a)](
          0x32,
          Math["min"](0xc8, _0x21ffab * 0.4)
        );
      return { width: _0x12d16e, height: _0x245982 };
    },
    rememberLastUsedCamera: !![],
    aspectRatio: 1.777778,
    formatsToSupport: [
      Html5QrcodeSupportedFormats[_0x3afb3d(0x2ad)],
      Html5QrcodeSupportedFormats["EAN_8"],
      Html5QrcodeSupportedFormats[_0x3afb3d(0x2ac)],
      Html5QrcodeSupportedFormats[_0x3afb3d(0x204)],
      Html5QrcodeSupportedFormats["CODE_128"],
      Html5QrcodeSupportedFormats[_0x3afb3d(0x39e)],
      Html5QrcodeSupportedFormats[_0x3afb3d(0x293)],
      Html5QrcodeSupportedFormats[_0x3afb3d(0x2f2)],
      Html5QrcodeSupportedFormats[_0x3afb3d(0x297)],
      Html5QrcodeSupportedFormats["QR_CODE"],
      Html5QrcodeSupportedFormats[_0x3afb3d(0x512)],
      Html5QrcodeSupportedFormats[_0x3afb3d(0x19c)],
      Html5QrcodeSupportedFormats[_0x3afb3d(0x510)],
    ],
    experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
    supportedScanTypes: [Html5QrcodeScanType[_0x3afb3d(0x470)]],
    showTorchButtonIfSupported: !![],
    showZoomSliderIfSupported: !![],
    defaultZoomValueIfSupported: 0x2,
  };
  html5QrCodeGlobal["start"](
    { facingMode: _0x3afb3d(0x251) },
    _0x3db9c6,
    (_0x2e583a) => {
      const _0x48bad9 = _0x3afb3d,
        _0x598a73 = Date[_0x48bad9(0x52b)](),
        _0x16115f = _0x2e583a[_0x48bad9(0x292)]()[_0x48bad9(0x2f1)](/\s+$/, "");
      if (
        ultimoCodigoEscaneado === _0x16115f &&
        _0x598a73 - ultimoTiempoEscaneo < INTERVALO_ESCANEO
      )
        return;
      if (_0x16115f[_0x48bad9(0x428)] < 0x3) return;
      (ultimoCodigoEscaneado = _0x16115f),
        (ultimoTiempoEscaneo = _0x598a73),
        (_0x4888cb[_0x48bad9(0x1d5)] = _0x16115f),
        (_0x4888cb[_0x48bad9(0x522)] = "Escaneando\x20código..."),
        _0xae074d[_0x48bad9(0x34f)](),
        setTimeout(() => {
          const _0xa47684 = _0x48bad9,
            _0x5d4aef = document[_0xa47684(0x539)](_0xa47684(0x262));
          _0x5d4aef &&
            _0x5d4aef["scrollIntoView"]({
              behavior: _0xa47684(0x4d4),
              block: _0xa47684(0x382),
              inline: _0xa47684(0x538),
            });
          try {
            bringInputIntoView();
          } catch (_0xf71d48) {}
        }, 0x1f4);
    },
    (_0x1e4039) => {}
  )
    [_0x3afb3d(0x2dd)](() => {
      renderHistorial(),
        setTimeout(() => {
          const _0x4d15a6 = _0x4e0e,
            _0x45719a = _0x135d63["querySelector"]("video");
          if (_0x45719a) {
            _0x45719a[_0x4d15a6(0x2de)](_0x4d15a6(0x517), ""),
              _0x45719a[_0x4d15a6(0x2de)](_0x4d15a6(0x50f), ""),
              _0x45719a[_0x4d15a6(0x2de)]("muted", "");
            const _0x18280a =
                _0x45719a[_0x4d15a6(0x15a)]["getVideoTracks"]()[0x0],
              _0x524235 = {
                focusMode: _0x4d15a6(0x1cf),
                exposureMode: _0x4d15a6(0x1cf),
                whiteBalanceMode: _0x4d15a6(0x1cf),
                advanced: [
                  { zoom: 0x2 },
                  { focusMode: _0x4d15a6(0x1cf) },
                  { exposureCompensation: 0x0 },
                  { brightness: 0x0 },
                  { contrast: 1.2 },
                  { saturation: 0.8 },
                ],
              };
            _0x18280a["applyConstraints"](_0x524235)
              [_0x4d15a6(0x2dd)](() => {
                const _0x5a518b = _0x4d15a6;
                console["log"](_0x5a518b(0x3b7));
              })
              [_0x4d15a6(0x2c7)]((_0xc121c2) => {
                const _0xa8ec5c = _0x4d15a6;
                console["log"](_0xa8ec5c(0x231), _0xc121c2),
                  _0x18280a[_0xa8ec5c(0x153)]({
                    focusMode: _0xa8ec5c(0x1cf),
                    advanced: [{ zoom: 0x2 }],
                  })[_0xa8ec5c(0x2c7)](() => {
                    const _0x51a9e5 = _0xa8ec5c;
                    console[_0x51a9e5(0x2db)](_0x51a9e5(0x4d7));
                  });
              });
          }
        }, 0x3e8);
    })
    [_0x3afb3d(0x2c7)]((_0x21544e) => {
      const _0x464642 = _0x3afb3d;
      console[_0x464642(0x233)](_0x464642(0x316), _0x21544e),
        (scannerActivo = ![]);
      let _0x1dc1db = _0x464642(0x2e4);
      if (_0x21544e[_0x464642(0x496)]()[_0x464642(0x232)](_0x464642(0x2eb)))
        _0x1dc1db = _0x464642(0x32f);
      else {
        if (_0x21544e["toString"]()[_0x464642(0x232)](_0x464642(0x2e7)))
          _0x1dc1db = _0x464642(0x235);
        else {
          if (_0x21544e["toString"]()[_0x464642(0x232)](_0x464642(0x2b8)))
            _0x1dc1db =
              "La\x20cámara\x20está\x20siendo\x20usada\x20por\x20otra\x20aplicación.";
          else
            _0x21544e[_0x464642(0x496)]()["includes"](_0x464642(0x46b)) &&
              (_0x1dc1db = _0x464642(0x4a3));
        }
      }
      (_0xa9a9a5[_0x464642(0x1ba)] =
        _0x464642(0x2d5) + _0x1dc1db + _0x464642(0x3cc)),
        renderHistorial();
    });
}
const fileInput = document[_0x146931(0x539)]("fileInput");
if (fileInput) {
  fileInput[_0x146931(0x4a7)]("change", async (_0x2ce03e) => {
    const _0x33a8c2 = _0x146931,
      _0x44a03c = _0x2ce03e[_0x33a8c2(0x4f3)][_0x33a8c2(0x212)][0x0];
    if (!_0x44a03c) return;
    const _0x5c7a31 = document[_0x33a8c2(0x539)]("codigo"),
      _0xd24598 = document[_0x33a8c2(0x539)]("resultado"),
      _0x5808d6 = document[_0x33a8c2(0x539)](_0x33a8c2(0x1a0)),
      _0x2c4c92 = document[_0x33a8c2(0x539)]("formulario");
    if (!_0x5c7a31 || !_0xd24598 || !_0x2c4c92) {
      console[_0x33a8c2(0x233)](_0x33a8c2(0x39d)), alert(_0x33a8c2(0x4da));
      return;
    }
    console[_0x33a8c2(0x2db)](
      "📁\x20Iniciando\x20procesamiento\x20de\x20archivo:",
      _0x44a03c["name"]
    );
    try {
      (_0x5c7a31[_0x33a8c2(0x1d5)] = ""),
        (_0x5c7a31[_0x33a8c2(0x522)] = _0x33a8c2(0x158)),
        _0x5808d6 &&
          ((_0x5808d6[_0x33a8c2(0x1ba)] = ""),
          (_0x5808d6[_0x33a8c2(0x4e8)][_0x33a8c2(0x43c)] = _0x33a8c2(0x3a6)));
    } catch (_0x510800) {
      console["warn"](_0x33a8c2(0x22e), _0x510800);
    }
    _0xd24598["innerHTML"] = _0x33a8c2(0x27d);
    try {
      const _0x39c80b = new Image(),
        _0x1ba6a1 = new Promise((_0x243a6e, _0x6a7c42) => {
          const _0x467a56 = _0x33a8c2;
          (_0x39c80b[_0x467a56(0x519)] = _0x243a6e),
            (_0x39c80b[_0x467a56(0x2e6)] = _0x6a7c42),
            (_0x39c80b["src"] = URL["createObjectURL"](_0x44a03c));
        });
      await _0x1ba6a1;
      if (
        GOOGLE_VISION_CONFIG[_0x33a8c2(0x2e9)] &&
        visionUsageTracker["canUseAPI"]()
      ) {
        console[_0x33a8c2(0x2db)](_0x33a8c2(0x302));
        try {
          const _0x25d8e9 = await detectarConGoogleVision(_0x39c80b);
          if (_0x25d8e9) {
            console[_0x33a8c2(0x2db)](_0x33a8c2(0x43d), _0x25d8e9),
              (_0x5c7a31[_0x33a8c2(0x1d5)] = _0x25d8e9),
              _0x2c4c92[_0x33a8c2(0x34f)](),
              URL[_0x33a8c2(0x3bc)](_0x39c80b[_0x33a8c2(0x24b)]),
              (fileInput[_0x33a8c2(0x1d5)] = "");
            return;
          }
        } catch (_0x3c5279) {
          console[_0x33a8c2(0x2db)](_0x33a8c2(0x33f), _0x3c5279["message"]);
          if (_0x3c5279[_0x33a8c2(0x354)][_0x33a8c2(0x232)](_0x33a8c2(0x3c0)))
            console["log"](_0x33a8c2(0x4f9));
          else {
            if (_0x3c5279[_0x33a8c2(0x354)][_0x33a8c2(0x232)](_0x33a8c2(0x237)))
              console[_0x33a8c2(0x2db)](_0x33a8c2(0x3b0)),
                _0x3c5279[_0x33a8c2(0x354)][_0x33a8c2(0x232)](
                  "BILLING_DISABLED"
                )
                  ? (console[_0x33a8c2(0x2db)](_0x33a8c2(0x332)),
                    console[_0x33a8c2(0x2db)](_0x33a8c2(0x3b8)))
                  : console[_0x33a8c2(0x2db)](_0x33a8c2(0x44f));
            else
              _0x3c5279[_0x33a8c2(0x354)][_0x33a8c2(0x232)](_0x33a8c2(0x3bf)) &&
                console[_0x33a8c2(0x2db)](
                  "🔄\x20Backend\x20no\x20disponible,\x20usando\x20detección\x20local"
                );
          }
        }
      } else {
        if (
          GOOGLE_VISION_CONFIG[_0x33a8c2(0x2e9)] &&
          !visionUsageTracker[_0x33a8c2(0x27f)]()
        ) {
          const _0x27d4c6 = visionUsageTracker[_0x33a8c2(0x2d8)]();
          console[_0x33a8c2(0x2db)](
            _0x33a8c2(0x35d) +
              _0x27d4c6[_0x33a8c2(0x3a4)] +
              "/" +
              _0x27d4c6["monthlyLimit"] +
              _0x33a8c2(0x436) +
              _0x27d4c6[_0x33a8c2(0x1cd)] +
              "/" +
              _0x27d4c6["dailyLimit"]
          );
        }
      }
      if (_0x33a8c2(0x1e7) in window) {
        console[_0x33a8c2(0x2db)](_0x33a8c2(0x217));
        try {
          const _0x2959dc = [
              "aztec",
              _0x33a8c2(0x2fa),
              _0x33a8c2(0x33e),
              _0x33a8c2(0x47f),
              "codabar",
              _0x33a8c2(0x4b9),
              _0x33a8c2(0x38e),
              _0x33a8c2(0x412),
              _0x33a8c2(0x358),
              _0x33a8c2(0x386),
              _0x33a8c2(0x476),
              "upc_a",
              _0x33a8c2(0x393),
            ],
            _0x5594af = new BarcodeDetector({ formats: _0x2959dc }),
            _0x44a10c = await _0x5594af[_0x33a8c2(0x243)](_0x39c80b);
          console[_0x33a8c2(0x2db)](
            "🔍\x20Códigos\x20detectados\x20por\x20API\x20nativa:\x20" +
              _0x44a10c[_0x33a8c2(0x428)],
            _0x44a10c
          );
          if (_0x44a10c[_0x33a8c2(0x428)] > 0x0) {
            const _0x2d6b69 = _0x44a10c[_0x33a8c2(0x4d6)]((_0x22b8b9) => {
              const _0x1b22b1 = _0x33a8c2,
                _0x2d3455 = _0x22b8b9["rawValue"]["trim"]();
              console[_0x1b22b1(0x2db)](
                _0x1b22b1(0x2e0) +
                  _0x2d3455 +
                  "\x22\x20formato:\x20" +
                  _0x22b8b9[_0x1b22b1(0x40e)] +
                  _0x1b22b1(0x283) +
                  _0x2d3455[_0x1b22b1(0x428)]
              );
              switch (_0x22b8b9["format"]) {
                case "ean_13":
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] === 0xd &&
                    /^\d{13}$/[_0x1b22b1(0x1cb)](_0x2d3455)
                  );
                case _0x1b22b1(0x2d2):
                  return (
                    _0x2d3455["length"] === 0xc &&
                    /^\d{12}$/[_0x1b22b1(0x1cb)](_0x2d3455)
                  );
                case _0x1b22b1(0x412):
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] === 0x8 &&
                    /^\d{8}$/[_0x1b22b1(0x1cb)](_0x2d3455)
                  );
                case _0x1b22b1(0x393):
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] >= 0x6 &&
                    _0x2d3455[_0x1b22b1(0x428)] <= 0x8 &&
                    /^\d+$/[_0x1b22b1(0x1cb)](_0x2d3455)
                  );
                case _0x1b22b1(0x2fa):
                  return (
                    _0x2d3455["length"] >= 0x1 &&
                    _0x2d3455[_0x1b22b1(0x428)] <= 0x32
                  );
                case _0x1b22b1(0x33e):
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] >= 0x1 &&
                    /^[A-Z0-9\-. $\/+%*]+$/[_0x1b22b1(0x1cb)](_0x2d3455)
                  );
                case "code_93":
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] >= 0x1 &&
                    _0x2d3455["length"] <= 0x32
                  );
                case _0x1b22b1(0x218):
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] >= 0x3 &&
                    /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x1b22b1(0x1cb)](_0x2d3455)
                  );
                case _0x1b22b1(0x358):
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] >= 0x2 &&
                    _0x2d3455[_0x1b22b1(0x428)] % 0x2 === 0x0 &&
                    /^\d+$/[_0x1b22b1(0x1cb)](_0x2d3455)
                  );
                case _0x1b22b1(0x476):
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] >= 0x1 &&
                    _0x2d3455[_0x1b22b1(0x428)] <= 0x10c8
                  );
                case "data_matrix":
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] >= 0x1 &&
                    _0x2d3455[_0x1b22b1(0x428)] <= 0xc2c
                  );
                case _0x1b22b1(0x386):
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] >= 0x1 &&
                    _0x2d3455[_0x1b22b1(0x428)] <= 0xa96
                  );
                case _0x1b22b1(0x2bc):
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] >= 0x1 &&
                    _0x2d3455["length"] <= 0xef8
                  );
                default:
                  return (
                    _0x2d3455[_0x1b22b1(0x428)] >= 0x1 &&
                    _0x2d3455["length"] <= 0x64
                  );
              }
            });
            console[_0x33a8c2(0x2db)](
              _0x33a8c2(0x407) + _0x2d6b69[_0x33a8c2(0x428)]
            );
            if (_0x2d6b69["length"] > 0x0) {
              const _0x3bc92a = {
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
                _0xaee43e = _0x2d6b69[_0x33a8c2(0x3ab)](
                  (_0xe7da82, _0x3eb209) => {
                    const _0xbc259 = _0x33a8c2,
                      _0x38b171 =
                        (_0x3bc92a[_0x3eb209[_0xbc259(0x40e)]] || 0x0) -
                        (_0x3bc92a[_0xe7da82[_0xbc259(0x40e)]] || 0x0);
                    if (_0x38b171 !== 0x0) return _0x38b171;
                    if (
                      [
                        _0xbc259(0x38e),
                        "upc_a",
                        _0xbc259(0x412),
                        _0xbc259(0x393),
                        "code_128",
                        _0xbc259(0x33e),
                        _0xbc259(0x47f),
                        _0xbc259(0x358),
                        _0xbc259(0x218),
                      ][_0xbc259(0x232)](_0xe7da82[_0xbc259(0x40e)])
                    ) {
                      const _0x5aaa93 =
                          _0xe7da82[_0xbc259(0x4fe)][_0xbc259(0x300)] *
                          _0xe7da82[_0xbc259(0x4fe)]["height"],
                        _0x128fda =
                          _0x3eb209[_0xbc259(0x4fe)][_0xbc259(0x300)] *
                          _0x3eb209["boundingBox"][_0xbc259(0x45a)];
                      return _0x128fda - _0x5aaa93;
                    }
                    const _0x897288 =
                        _0xe7da82[_0xbc259(0x4fe)]["x"] +
                        _0xe7da82[_0xbc259(0x4fe)][_0xbc259(0x300)] / 0x2,
                      _0x46b40f =
                        _0x3eb209[_0xbc259(0x4fe)]["x"] +
                        _0x3eb209["boundingBox"][_0xbc259(0x300)] / 0x2,
                      _0x1f5f89 = _0x39c80b["width"] / 0x2;
                    return (
                      Math[_0xbc259(0x30e)](_0x897288 - _0x1f5f89) -
                      Math[_0xbc259(0x30e)](_0x46b40f - _0x1f5f89)
                    );
                  }
                ),
                _0x3862a0 = _0xaee43e[0x0],
                _0x3c62a3 = _0x3862a0[_0x33a8c2(0x174)]
                  [_0x33a8c2(0x292)]()
                  [_0x33a8c2(0x2f1)](/\s+$/, "");
              console[_0x33a8c2(0x2db)](
                _0x33a8c2(0x22d) +
                  _0x3c62a3 +
                  _0x33a8c2(0x3fe) +
                  _0x3862a0[_0x33a8c2(0x40e)] +
                  ")"
              ),
                (_0x5c7a31[_0x33a8c2(0x1d5)] = _0x3c62a3),
                _0x2c4c92[_0x33a8c2(0x34f)](),
                URL[_0x33a8c2(0x3bc)](_0x39c80b[_0x33a8c2(0x24b)]),
                (fileInput[_0x33a8c2(0x1d5)] = "");
              return;
            }
          }
          console[_0x33a8c2(0x2db)](_0x33a8c2(0x45f));
        } catch (_0x51ef30) {
          console[_0x33a8c2(0x2db)](_0x33a8c2(0x49e), _0x51ef30);
        }
      } else console[_0x33a8c2(0x2db)](_0x33a8c2(0x27e));
      console[_0x33a8c2(0x2db)](_0x33a8c2(0x3d2)),
        usarQuaggaFallback(_0x39c80b);
    } catch (_0x365dc8) {
      console[_0x33a8c2(0x233)](_0x33a8c2(0x247), _0x365dc8),
        (_0xd24598[_0x33a8c2(0x1ba)] = _0x33a8c2(0x4e7)),
        renderHistorial(),
        (fileInput[_0x33a8c2(0x1d5)] = "");
    }
  });
  function usarQuaggaFallback(_0x2582c9) {
    const _0x45e44d = _0x146931;
    console["log"](_0x45e44d(0x321));
    const _0xe1e679 = document[_0x45e44d(0x2b4)](_0x45e44d(0x39c)),
      _0x34725e = _0xe1e679[_0x45e44d(0x220)]("2d");
    let { width: _0x30ec4f, height: _0xf1bd90 } = _0x2582c9;
    const _0x254098 = 0x190;
    if (_0x30ec4f < _0x254098 || _0xf1bd90 < _0x254098) {
      const _0x2a0057 =
        Math[_0x45e44d(0x41a)](_0x254098 / _0x30ec4f, _0x254098 / _0xf1bd90) *
        1.5;
      (_0x30ec4f *= _0x2a0057),
        (_0xf1bd90 *= _0x2a0057),
        console[_0x45e44d(0x2db)](
          "📏\x20Ampliando\x20imagen\x20pequeña:\x20" +
            _0x2582c9[_0x45e44d(0x300)] +
            "x" +
            _0x2582c9[_0x45e44d(0x45a)] +
            "\x20->\x20" +
            _0x30ec4f +
            "x" +
            _0xf1bd90
        );
    }
    const _0x2d51b9 = 0x5dc;
    if (_0x30ec4f > _0x2d51b9 || _0xf1bd90 > _0x2d51b9) {
      const _0x30b82b = Math[_0x45e44d(0x3e5)](
        _0x2d51b9 / _0x30ec4f,
        _0x2d51b9 / _0xf1bd90
      );
      (_0x30ec4f *= _0x30b82b), (_0xf1bd90 *= _0x30b82b);
    }
    (_0xe1e679[_0x45e44d(0x300)] = _0x30ec4f),
      (_0xe1e679["height"] = _0xf1bd90),
      (_0x34725e[_0x45e44d(0x2b6)] = ![]),
      _0x34725e["drawImage"](_0x2582c9, 0x0, 0x0, _0x30ec4f, _0xf1bd90);
    const _0x4a1f12 = _0x34725e[_0x45e44d(0x3f2)](
        0x0,
        0x0,
        _0x30ec4f,
        _0xf1bd90
      ),
      _0x5b4fc7 = _0x4a1f12[_0x45e44d(0x4a9)];
    let _0x5d7ffd = new Array(0x100)["fill"](0x0);
    for (
      let _0x4e7c36 = 0x0;
      _0x4e7c36 < _0x5b4fc7[_0x45e44d(0x428)];
      _0x4e7c36 += 0x4
    ) {
      const _0x411bc2 = Math[_0x45e44d(0x351)](
        0.299 * _0x5b4fc7[_0x4e7c36] +
          0.587 * _0x5b4fc7[_0x4e7c36 + 0x1] +
          0.114 * _0x5b4fc7[_0x4e7c36 + 0x2]
      );
      _0x5d7ffd[_0x411bc2]++;
    }
    let _0x385d9c = 0x80,
      _0x5bc1ec = 0x0;
    const _0x245738 = _0x30ec4f * _0xf1bd90;
    for (let _0x469363 = 0x0; _0x469363 < 0x100; _0x469363++) {
      let _0x438c21 = 0x0,
        _0x3fa792 = 0x0,
        _0x3d0d9a = 0x0,
        _0x56ceaf = 0x0;
      for (let _0x59a6e0 = 0x0; _0x59a6e0 <= _0x469363; _0x59a6e0++) {
        (_0x438c21 += _0x5d7ffd[_0x59a6e0]),
          (_0x3d0d9a += _0x59a6e0 * _0x5d7ffd[_0x59a6e0]);
      }
      for (let _0x4ece6c = _0x469363 + 0x1; _0x4ece6c < 0x100; _0x4ece6c++) {
        (_0x3fa792 += _0x5d7ffd[_0x4ece6c]),
          (_0x56ceaf += _0x4ece6c * _0x5d7ffd[_0x4ece6c]);
      }
      if (_0x438c21 === 0x0 || _0x3fa792 === 0x0) continue;
      const _0x2a7e29 = _0x3d0d9a / _0x438c21,
        _0x4723eb = _0x56ceaf / _0x3fa792,
        _0x411c11 =
          _0x438c21 *
          _0x3fa792 *
          (_0x2a7e29 - _0x4723eb) *
          (_0x2a7e29 - _0x4723eb);
      _0x411c11 > _0x5bc1ec &&
        ((_0x5bc1ec = _0x411c11), (_0x385d9c = _0x469363));
    }
    console[_0x45e44d(0x2db)](_0x45e44d(0x370) + _0x385d9c);
    const _0x50429f = new Uint8ClampedArray(_0x5b4fc7);
    for (
      let _0x41a87b = 0x0;
      _0x41a87b < _0x5b4fc7[_0x45e44d(0x428)];
      _0x41a87b += 0x4
    ) {
      const _0x255730 = Math[_0x45e44d(0x351)](
          0.299 * _0x5b4fc7[_0x41a87b] +
            0.587 * _0x5b4fc7[_0x41a87b + 0x1] +
            0.114 * _0x5b4fc7[_0x41a87b + 0x2]
        ),
        _0xdf35c5 = _0x255730 > _0x385d9c ? 0xff : 0x0;
      (_0x5b4fc7[_0x41a87b] = _0xdf35c5),
        (_0x5b4fc7[_0x41a87b + 0x1] = _0xdf35c5),
        (_0x5b4fc7[_0x41a87b + 0x2] = _0xdf35c5);
    }
    _0x34725e["putImageData"](_0x4a1f12, 0x0, 0x0);
    let _0x5bb91e = _0xe1e679[_0x45e44d(0x4b7)](_0x45e44d(0x364));
    const _0x7fba84 = _0x34725e[_0x45e44d(0x222)](_0x30ec4f, _0xf1bd90),
      _0x2b1881 = _0x7fba84["data"];
    for (
      let _0x108a12 = 0x0;
      _0x108a12 < _0x50429f[_0x45e44d(0x428)];
      _0x108a12 += 0x4
    ) {
      const _0x2c041b = Math[_0x45e44d(0x351)](
          0.299 * _0x50429f[_0x108a12] +
            0.587 * _0x50429f[_0x108a12 + 0x1] +
            0.114 * _0x50429f[_0x108a12 + 0x2]
        ),
        _0x3ed0f1 = _0x2c041b > _0x385d9c * 0.7 ? 0xff : 0x0;
      (_0x2b1881[_0x108a12] = _0x3ed0f1),
        (_0x2b1881[_0x108a12 + 0x1] = _0x3ed0f1),
        (_0x2b1881[_0x108a12 + 0x2] = _0x3ed0f1),
        (_0x2b1881[_0x108a12 + 0x3] = 0xff);
    }
    const _0x3a4607 = document[_0x45e44d(0x2b4)]("canvas");
    (_0x3a4607[_0x45e44d(0x300)] = _0x30ec4f),
      (_0x3a4607[_0x45e44d(0x45a)] = _0xf1bd90);
    const _0xbc10a9 = _0x3a4607[_0x45e44d(0x220)]("2d");
    _0xbc10a9[_0x45e44d(0x2f5)](_0x7fba84, 0x0, 0x0);
    const _0x442b20 = _0x3a4607[_0x45e44d(0x4b7)](_0x45e44d(0x364)),
      _0x3cd522 = {
        src: _0x5bb91e,
        numOfWorkers: 0x0,
        locate: !![],
        inputStream: { size: Math[_0x45e44d(0x41a)](_0x30ec4f, _0xf1bd90) },
        locator: {
          patchSize: "large",
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
            "ean_reader",
            _0x45e44d(0x2e8),
            _0x45e44d(0x152),
            "upc_e_reader",
            _0x45e44d(0x171),
            "code_39_reader",
            _0x45e44d(0x16f),
            _0x45e44d(0x3f5),
            _0x45e44d(0x4ed),
            _0x45e44d(0x2dc),
            _0x45e44d(0x2be),
          ],
          multiple: !![],
          debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
        },
      };
    console[_0x45e44d(0x2db)](_0x45e44d(0x494));
    const _0xbd7f72 = (_0x3f5f6c, _0x18f7e9, _0xb7b699) => {
      const _0xec10de = _0x45e44d;
      console[_0xec10de(0x2db)](
        "📋\x20Probando\x20configuración:\x20" + _0x18f7e9
      );
      const _0x44db6d = {
        src: _0x3f5f6c,
        numOfWorkers: 0x0,
        locate: !![],
        inputStream: { size: Math[_0xec10de(0x41a)](_0x30ec4f, _0xf1bd90) },
        locator: {
          patchSize: _0x18f7e9 === "agresiva" ? "x-large" : _0xec10de(0x1a3),
          halfSample: _0x18f7e9 === _0xec10de(0x3b4) ? !![] : ![],
          debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
        },
        decoder: {
          readers: [
            _0xec10de(0x1e4),
            _0xec10de(0x2e8),
            "upc_reader",
            _0xec10de(0x35f),
            _0xec10de(0x171),
            _0xec10de(0x3c4),
            _0xec10de(0x16f),
            _0xec10de(0x3f5),
            "codabar_reader",
            _0xec10de(0x2dc),
          ],
          multiple: !![],
          debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
        },
      };
      Quagga[_0xec10de(0x37a)](_0x44db6d, _0xb7b699);
    };
    let _0x44ea62 = [];
    _0xbd7f72(_0x5bb91e, _0x45e44d(0x2c2), function (_0xbec9bc) {
      const _0x91cadb = _0x45e44d;
      if (_0xbec9bc && _0xbec9bc["codeResult"]) {
        let _0xb9f751 = _0xbec9bc[_0x91cadb(0x266)]["code"]
          ["trim"]()
          ["replace"](/\s+$/, "");
        _0x44ea62[_0x91cadb(0x18e)](
          _0xb9f751 +
            "\x20(" +
            _0xbec9bc[_0x91cadb(0x266)][_0x91cadb(0x40e)] +
            ")"
        ),
          console[_0x91cadb(0x2db)](
            _0x91cadb(0x343),
            _0xb9f751,
            "Formato:",
            _0xbec9bc[_0x91cadb(0x266)][_0x91cadb(0x40e)]
          );
        if (
          validarCodigo(
            _0xb9f751,
            _0xbec9bc[_0x91cadb(0x266)][_0x91cadb(0x40e)]
          )
        ) {
          (inputCodigo["value"] = _0xb9f751),
            form["requestSubmit"](),
            URL[_0x91cadb(0x3bc)](_0x2582c9[_0x91cadb(0x24b)]),
            (fileInput[_0x91cadb(0x1d5)] = "");
          return;
        }
      }
      console["log"](_0x91cadb(0x1be)),
        _0xbd7f72(_0x442b20, _0x91cadb(0x2f3), function (_0x4b5d66) {
          const _0x1891c8 = _0x91cadb;
          if (_0x4b5d66 && _0x4b5d66[_0x1891c8(0x266)]) {
            let _0x4e6135 = _0x4b5d66[_0x1891c8(0x266)][_0x1891c8(0x4c4)]
              [_0x1891c8(0x292)]()
              ["replace"](/\s+$/, "");
            _0x44ea62[_0x1891c8(0x18e)](
              _0x4e6135 +
                "\x20(" +
                _0x4b5d66["codeResult"][_0x1891c8(0x40e)] +
                ")"
            ),
              console[_0x1891c8(0x2db)](
                _0x1891c8(0x241),
                _0x4e6135,
                _0x1891c8(0x40f),
                _0x4b5d66[_0x1891c8(0x266)][_0x1891c8(0x40e)]
              );
            if (
              validarCodigo(
                _0x4e6135,
                _0x4b5d66[_0x1891c8(0x266)][_0x1891c8(0x40e)]
              )
            ) {
              (inputCodigo[_0x1891c8(0x1d5)] = _0x4e6135),
                form["requestSubmit"](),
                URL["revokeObjectURL"](_0x2582c9[_0x1891c8(0x24b)]),
                (fileInput[_0x1891c8(0x1d5)] = "");
              return;
            }
          }
          console[_0x1891c8(0x2db)](_0x1891c8(0x168)),
            intentarSegundaPasada(_0x2582c9, _0x44ea62);
        });
    });
  }
  function validarCodigo(_0x83d918, _0x111ffd) {
    const _0x1966b9 = _0x146931;
    console["log"](
      _0x1966b9(0x2e0) +
        _0x83d918 +
        _0x1966b9(0x37f) +
        _0x111ffd +
        _0x1966b9(0x283) +
        _0x83d918["length"]
    );
    switch (_0x111ffd) {
      case _0x1966b9(0x38e):
        return (
          _0x83d918[_0x1966b9(0x428)] === 0xd &&
          /^\d{13}$/[_0x1966b9(0x1cb)](_0x83d918)
        );
      case _0x1966b9(0x2d2):
        return (
          _0x83d918[_0x1966b9(0x428)] === 0xc &&
          /^\d{12}$/[_0x1966b9(0x1cb)](_0x83d918)
        );
      case _0x1966b9(0x412):
        return (
          _0x83d918[_0x1966b9(0x428)] === 0x8 && /^\d{8}$/["test"](_0x83d918)
        );
      case _0x1966b9(0x393):
        return (
          _0x83d918[_0x1966b9(0x428)] >= 0x6 &&
          _0x83d918[_0x1966b9(0x428)] <= 0x8 &&
          /^\d+$/[_0x1966b9(0x1cb)](_0x83d918)
        );
      case _0x1966b9(0x2fa):
      case _0x1966b9(0x33e):
      case _0x1966b9(0x47f):
        return (
          _0x83d918[_0x1966b9(0x428)] >= 0x1 &&
          _0x83d918[_0x1966b9(0x428)] <= 0x32
        );
      case _0x1966b9(0x218):
        return (
          _0x83d918[_0x1966b9(0x428)] >= 0x3 &&
          /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x1966b9(0x1cb)](_0x83d918)
        );
      case _0x1966b9(0x2d0):
        return (
          _0x83d918[_0x1966b9(0x428)] >= 0x2 &&
          _0x83d918[_0x1966b9(0x428)] % 0x2 === 0x0 &&
          /^\d+$/[_0x1966b9(0x1cb)](_0x83d918)
        );
      default:
        return (
          _0x83d918[_0x1966b9(0x428)] >= 0x1 &&
          _0x83d918[_0x1966b9(0x428)] <= 0x32
        );
    }
  }
  function intentarSegundaPasada(_0x1304a9, _0x2e4677 = []) {
    const _0x116cc5 = _0x146931;
    console[_0x116cc5(0x2db)](
      "🔄\x20Tercera\x20tentativa:\x20imagen\x20original\x20sin\x20procesamiento..."
    );
    const _0x155f0e = document[_0x116cc5(0x2b4)](_0x116cc5(0x39c)),
      _0x149e79 = _0x155f0e[_0x116cc5(0x220)]("2d");
    let { width: _0x64a048, height: _0x40aafd } = _0x1304a9;
    const _0x160082 = 0x640;
    if (_0x64a048 < _0x160082) {
      const _0x13c56f = _0x160082 / _0x64a048;
      (_0x64a048 *= _0x13c56f), (_0x40aafd *= _0x13c56f);
    }
    (_0x155f0e["width"] = _0x64a048),
      (_0x155f0e[_0x116cc5(0x45a)] = _0x40aafd),
      (_0x149e79[_0x116cc5(0x2b6)] = ![]),
      _0x149e79[_0x116cc5(0x530)](_0x1304a9, 0x0, 0x0, _0x64a048, _0x40aafd);
    const _0x546cc8 = _0x149e79[_0x116cc5(0x3f2)](
        0x0,
        0x0,
        _0x64a048,
        _0x40aafd
      ),
      _0x247385 = _0x546cc8[_0x116cc5(0x4a9)];
    for (
      let _0x43df6e = 0x0;
      _0x43df6e < _0x247385[_0x116cc5(0x428)];
      _0x43df6e += 0x4
    ) {
      const _0x292e0d = _0x247385[_0x43df6e],
        _0x4a2a9c = _0x247385[_0x43df6e + 0x1],
        _0x3d9e44 = _0x247385[_0x43df6e + 0x2],
        _0x42366e = 1.5,
        _0x235eb4 = Math[_0x116cc5(0x351)](
          0.299 * _0x292e0d + 0.587 * _0x4a2a9c + 0.114 * _0x3d9e44
        ),
        _0x2bdfb0 = Math[_0x116cc5(0x3e5)](
          0xff,
          Math[_0x116cc5(0x41a)](0x0, (_0x235eb4 - 0x80) * _0x42366e + 0x80)
        );
      (_0x247385[_0x43df6e] = _0x2bdfb0),
        (_0x247385[_0x43df6e + 0x1] = _0x2bdfb0),
        (_0x247385[_0x43df6e + 0x2] = _0x2bdfb0);
    }
    _0x149e79[_0x116cc5(0x2f5)](_0x546cc8, 0x0, 0x0);
    const _0x4924cc = {
      src: _0x155f0e[_0x116cc5(0x4b7)]("image/png"),
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: {
        size: Math[_0x116cc5(0x41a)](_0x64a048, _0x40aafd),
        area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
      },
      locator: {
        patchSize: _0x116cc5(0x156),
        halfSample: ![],
        debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
      },
      decoder: {
        readers: [
          _0x116cc5(0x1e4),
          _0x116cc5(0x152),
          _0x116cc5(0x171),
          _0x116cc5(0x3c4),
          "ean_8_reader",
          _0x116cc5(0x35f),
          _0x116cc5(0x2dc),
          _0x116cc5(0x4ed),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
    console[_0x116cc5(0x2db)](_0x116cc5(0x403)),
      Quagga[_0x116cc5(0x37a)](_0x4924cc, function (_0xef14c9) {
        const _0x2afc78 = _0x116cc5;
        if (_0xef14c9 && _0xef14c9[_0x2afc78(0x266)]) {
          const _0x149e45 = _0xef14c9[_0x2afc78(0x266)][_0x2afc78(0x4c4)]
            [_0x2afc78(0x292)]()
            ["replace"](/\s+$/, "");
          _0x2e4677[_0x2afc78(0x18e)](
            _0x149e45 +
              "\x20(" +
              _0xef14c9["codeResult"][_0x2afc78(0x40e)] +
              ")"
          ),
            console[_0x2afc78(0x2db)](
              _0x2afc78(0x42e),
              _0x149e45,
              _0x2afc78(0x40f),
              _0xef14c9[_0x2afc78(0x266)][_0x2afc78(0x40e)]
            );
          if (validarCodigo(_0x149e45, _0xef14c9[_0x2afc78(0x266)]["format"])) {
            (inputCodigo[_0x2afc78(0x1d5)] = _0x149e45),
              form[_0x2afc78(0x34f)]();
            return;
          }
        }
        console["log"]("❌\x20Todas\x20las\x20configuraciones\x20fallaron");
        let _0x25cf32 = "";
        _0x2e4677[_0x2afc78(0x428)] > 0x0 &&
          (_0x25cf32 = _0x2afc78(0x50b) + _0x2e4677[_0x2afc78(0x276)](",\x20"));
        let _0x5d9e84 = "";
        if (GOOGLE_VISION_CONFIG["enabled"]) {
          const _0x10e20f = visionUsageTracker[_0x2afc78(0x2d8)]();
          (_0x5d9e84 =
            _0x2afc78(0x3a3) +
            _0x10e20f[_0x2afc78(0x3a4)] +
            "/" +
            _0x10e20f[_0x2afc78(0x1a1)] +
            _0x2afc78(0x15e) +
            _0x10e20f[_0x2afc78(0x1cd)] +
            "/" +
            _0x10e20f[_0x2afc78(0x425)] +
            _0x2afc78(0x15b)),
            verificarBackend()
              [_0x2afc78(0x2dd)]((_0x12ae60) => {
                const _0x3f2002 = _0x2afc78;
                if (document[_0x3f2002(0x360)](".alert-danger")) {
                  const _0x11d7f4 = document[_0x3f2002(0x360)](
                    _0x3f2002(0x49a)
                  );
                  _0x11d7f4 &&
                    (_0x11d7f4[_0x3f2002(0x1ba)] = _0x11d7f4[_0x3f2002(0x1ba)][
                      "replace"
                    ](
                      _0x3f2002(0x1d4),
                      _0x3f2002(0x1dd) + _0x12ae60[_0x3f2002(0x430)]
                    ));
                }
              })
              [_0x2afc78(0x2c7)](() => {});
        }
        (resultadoDiv[_0x2afc78(0x1ba)] =
          "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20<strong>⚠️\x20No\x20se\x20detectó\x20código\x20válido</strong><br>\x0a\x20\x20\x20\x20\x20\x20Para\x20códigos\x20largos\x20como\x20este,\x20intenta:<br>\x0a\x20\x20\x20\x20\x20\x20•\x20📏\x20<strong>Recortar\x20muy\x20cerca\x20del\x20código</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20💡\x20<strong>Mejor\x20iluminación\x20uniforme</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20📱\x20<strong>Evitar\x20superficies\x20reflectivas</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20🔍\x20<strong>Imagen\x20más\x20nítida\x20y\x20estable</strong>" +
          _0x25cf32 +
          _0x5d9e84 +
          "\x0a\x20\x20\x20\x20</div>"),
          renderHistorial();
      });
  }
  async function mostrarConfiguracion() {
    const _0x15b71f = _0x146931,
      _0x19bb1c = await verificarBackend();
    let _0x114813 = null;
    if (CONFIG_ENDPOINTS[_0x15b71f(0x2d1)])
      try {
        const _0x3af994 = await fetch(
          CONFIG_ENDPOINTS[_0x15b71f(0x1ec)] + _0x15b71f(0x38c)
        );
        if (_0x3af994["ok"]) {
          const _0x337afb = await _0x3af994["json"]();
          _0x114813 = _0x337afb["estadisticas"];
        }
      } catch (_0x4530f2) {
        console[_0x15b71f(0x2db)](_0x15b71f(0x4df));
      }
    let _0x209a77 = "";
    _0x114813 &&
      (_0x209a77 =
        _0x15b71f(0x4ea) +
        _0x114813["totalProductos"] +
        "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Códigos\x20totales:</strong>\x20" +
        _0x114813["totalCodigos"] +
        _0x15b71f(0x463) +
        _0x114813["productosConCodigosAdicionales"] +
        _0x15b71f(0x315) +
        new Date(_0x114813[_0x15b71f(0x518)])[_0x15b71f(0x260)]() +
        _0x15b71f(0x278)),
      Swal[_0x15b71f(0x26d)]({
        title: _0x15b71f(0x541),
        html:
          _0x15b71f(0x53f) +
          (GOOGLE_VISION_CONFIG["enabled"] ? _0x15b71f(0x3e7) : "") +
          _0x15b71f(0x33c) +
          (_0x19bb1c[_0x15b71f(0x29c)] ? _0x15b71f(0x239) : "alert-warning") +
          _0x15b71f(0x33d) +
          _0x19bb1c["mensaje"] +
          _0x15b71f(0x4c5) +
          _0x209a77 +
          _0x15b71f(0x413),
        width: 0x258,
        showCancelButton: !![],
        confirmButtonText: _0x15b71f(0x2ee),
        cancelButtonText: _0x15b71f(0x3cb),
        confirmButtonColor: _0x15b71f(0x1ab),
        cancelButtonColor: _0x15b71f(0x2df),
        preConfirm: () => {
          const _0x2ca5c9 = _0x15b71f,
            _0x46978b = document[_0x2ca5c9(0x539)](_0x2ca5c9(0x418))[
              _0x2ca5c9(0x3e7)
            ];
          return { enabled: _0x46978b };
        },
      })[_0x15b71f(0x2dd)]((_0x1df3e9) => {
        const _0x1e13bd = _0x15b71f;
        if (_0x1df3e9["isConfirmed"]) {
          const { enabled: _0x4dc511 } = _0x1df3e9[_0x1e13bd(0x1d5)];
          (GOOGLE_VISION_CONFIG["enabled"] = _0x4dc511),
            localStorage["setItem"](
              _0x1e13bd(0x1e3),
              JSON[_0x1e13bd(0x4d8)]({ enabled: _0x4dc511 })
            );
          const _0x37d18e = _0x4dc511 ? _0x1e13bd(0x2bf) : _0x1e13bd(0x357);
          Swal[_0x1e13bd(0x26d)]({
            title: _0x1e13bd(0x339),
            text: _0x37d18e,
            icon: _0x1e13bd(0x16e),
            timer: 0x7d0,
            showConfirmButton: ![],
          });
        }
      });
  }
  function cargarConfiguracionGuardada() {
    const _0x5890d4 = _0x146931,
      _0x3873a5 = localStorage[_0x5890d4(0x179)]("googleVisionConfig");
    if (_0x3873a5)
      try {
        const _0xeceb93 = JSON[_0x5890d4(0x1bd)](_0x3873a5);
        (GOOGLE_VISION_CONFIG[_0x5890d4(0x2e9)] =
          _0xeceb93[_0x5890d4(0x2e9)] || ![]),
          GOOGLE_VISION_CONFIG[_0x5890d4(0x2e9)] &&
            console["log"](_0x5890d4(0x528));
      } catch (_0x510dab) {
        console[_0x5890d4(0x2db)](
          "❌\x20Error\x20cargando\x20configuración:",
          _0x510dab
        );
      }
  }
  _0x146931(0x191) in navigator &&
    window["addEventListener"](_0x146931(0x2f8), () => {
      const _0x25ae95 = _0x146931;
      navigator[_0x25ae95(0x191)]
        ["register"](_0x25ae95(0x210))
        [_0x25ae95(0x2dd)]((_0x536e88) => {
          const _0x790e5f = _0x25ae95;
          console["log"](
            "✅\x20Service\x20Worker\x20registrado:",
            _0x536e88[_0x790e5f(0x52f)]
          ),
            _0x536e88[_0x790e5f(0x4a7)](_0x790e5f(0x190), () => {
              const _0x25602b = _0x790e5f;
              console[_0x25602b(0x2db)](_0x25602b(0x493));
              const _0x384310 = _0x536e88[_0x25602b(0x312)];
              _0x384310[_0x25602b(0x4a7)](_0x25602b(0x37b), () => {
                const _0x464300 = _0x25602b;
                _0x384310[_0x464300(0x34c)] === _0x464300(0x160) &&
                  navigator[_0x464300(0x191)][_0x464300(0x322)] &&
                  (console[_0x464300(0x2db)](_0x464300(0x2fc)),
                  confirm(_0x464300(0x20a)) &&
                    (_0x384310[_0x464300(0x14f)]({ type: _0x464300(0x415) }),
                    window[_0x464300(0x42d)][_0x464300(0x4e5)]()));
              });
            });
        })
        ["catch"]((_0x3b9074) => console["error"](_0x25ae95(0x199), _0x3b9074)),
        navigator["serviceWorker"][_0x25ae95(0x4a7)](_0x25ae95(0x456), () => {
          const _0x1805a = _0x25ae95;
          console["log"]("🔄\x20Service\x20Worker\x20actualizado"),
            window[_0x1805a(0x42d)][_0x1805a(0x4e5)]();
        });
    });
  window[_0x146931(0x4a7)](_0x146931(0x1fe), (_0x5eab5c) => {
    const _0x19aa5b = _0x146931;
    _0x5eab5c[_0x19aa5b(0x263)](),
      (deferredPrompt = _0x5eab5c),
      installBtn && installBtn["classList"][_0x19aa5b(0x4b8)](_0x19aa5b(0x4b6));
  }),
    installBtn[_0x146931(0x4a7)]("click", (_0x10589e) => {
      const _0x6b5fd1 = _0x146931;
      deferredPrompt &&
        (deferredPrompt[_0x6b5fd1(0x53d)](),
        deferredPrompt[_0x6b5fd1(0x4d1)][_0x6b5fd1(0x2dd)]((_0x3a9f8f) => {
          const _0x120bbd = _0x6b5fd1;
          _0x3a9f8f["outcome"] === _0x120bbd(0x214)
            ? console[_0x120bbd(0x2db)](_0x120bbd(0x371))
            : console[_0x120bbd(0x2db)](_0x120bbd(0x50e)),
            (deferredPrompt = null),
            installBtn[_0x120bbd(0x2b2)][_0x120bbd(0x197)]("d-none");
        }));
    });
  _0x146931(0x191) in navigator &&
    (navigator[_0x146931(0x191)]
      [_0x146931(0x19a)]()
      [_0x146931(0x2dd)](function (_0x351481) {
        const _0x3ec045 = _0x146931;
        for (let _0x348b62 of _0x351481) {
          _0x348b62[_0x3ec045(0x317)]();
        }
      }),
    navigator["serviceWorker"][_0x146931(0x4a7)](
      "controllerchange",
      function () {
        window["location"]["reload"]();
      }
    ));
  const style = document["createElement"](_0x146931(0x4e8));
  (style[_0x146931(0x1ba)] = _0x146931(0x1fc)),
    document[_0x146931(0x3b1)]["appendChild"](style);
  async function verPromociones() {
    const _0x5b08af = _0x146931;
    try {
      console["log"](_0x5b08af(0x29a)),
        (document["getElementById"](_0x5b08af(0x262))[_0x5b08af(0x1ba)] =
          "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Leyendo\x20promociones\x20y\x20productos\x20locales...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
      const [_0x2d5684, _0x20429b] = await Promise["all"]([
        getAllPromociones(),
        getAllProductos(),
      ]);
      if (
        !Array[_0x5b08af(0x16d)](_0x2d5684) ||
        _0x2d5684[_0x5b08af(0x428)] === 0x0
      ) {
        document["getElementById"](_0x5b08af(0x262))[_0x5b08af(0x1ba)] =
          _0x5b08af(0x219);
        return;
      }
      let _0x35177b = _0x5b08af(0x2e3);
      _0x2d5684[_0x5b08af(0x395)]((_0x4f5b95, _0x2f917a) => {
        const _0x3441d1 = _0x5b08af;
        let _0x2c0a57 = [];
        if (
          _0x4f5b95[_0x3441d1(0x498)] &&
          Array["isArray"](_0x4f5b95[_0x3441d1(0x498)])
        )
          _0x2c0a57 = _0x4f5b95[_0x3441d1(0x498)];
        else
          _0x4f5b95[_0x3441d1(0x4d3)] &&
            _0x4f5b95[_0x3441d1(0x4d3)][_0x3441d1(0x346)] &&
            (Array[_0x3441d1(0x16d)](_0x4f5b95[_0x3441d1(0x4d3)]["pr_sku"])
              ? (_0x2c0a57 = _0x4f5b95[_0x3441d1(0x4d3)][_0x3441d1(0x346)])
              : (_0x2c0a57 = _0x4f5b95["pro_grupoProductos_primaria"][
                  _0x3441d1(0x346)
                ]
                  [_0x3441d1(0x44e)]("\x20")
                  ["filter"]((_0x313345) => _0x313345[_0x3441d1(0x292)]())));
        const _0x2c1aa3 = _0x2c0a57[_0x3441d1(0x41b)]((_0x474beb) => {
            const _0x4b3c00 = _0x3441d1;
            return _0x20429b[_0x4b3c00(0x1e8)](
              (_0x132a4c) => _0x132a4c[_0x4b3c00(0x346)] === _0x474beb
            );
          })[_0x3441d1(0x4d6)]((_0x52e3b2) => _0x52e3b2 !== undefined),
          _0x39c364 =
            _0x4f5b95[_0x3441d1(0x473)] ||
            _0x4f5b95[_0x3441d1(0x24f)] ||
            _0x3441d1(0x2c8) + (_0x2f917a + 0x1),
          _0x107a3a =
            _0x4f5b95["pro_tipoPromo"] ||
            _0x4f5b95[_0x3441d1(0x170)] ||
            _0x3441d1(0x3a1),
          _0x4ff8ac =
            _0x4f5b95[_0x3441d1(0x52c)] || _0x4f5b95[_0x3441d1(0x430)] || "",
          _0x3cc398 = _0x4f5b95[_0x3441d1(0x36f)] || "",
          _0x4af8c8 = Number(_0x3cc398) || 0x1;
        let _0x1c15fb = 0x0;
        const _0x2e8f75 = (_0x4ff8ac + "\x20" + _0x39c364)[_0x3441d1(0x18f)](),
          _0x133752 = _0x2e8f75[_0x3441d1(0x246)](/(\d+)\s*x\s*(\d+)/);
        if (_0x133752) _0x1c15fb = Number(_0x133752[0x2]);
        else {
          const _0x1c8c94 = Number(_0x4f5b95["pro_precioPromo"]) || 0x0;
          _0x1c15fb = _0x1c8c94 * _0x4af8c8;
        }
        let _0x2f85b9 = 0x0,
          _0x4754f1 = 0x0;
        if (_0x2c1aa3[_0x3441d1(0x428)] > 0x0 && _0x3cc398 && _0x1c15fb > 0x0) {
          const _0x501768 = _0x2c1aa3[_0x3441d1(0x41b)]((_0x2968a3) => {
              const _0x3bb015 = _0x3441d1;
              let _0x295d76 =
                Number(_0x2968a3[_0x3bb015(0x19f)]) ||
                Number(_0x2968a3["L1"]) ||
                0x0;
              return Math[_0x3bb015(0x351)](_0x295d76 * 1.16 * 0x64) / 0x64;
            }),
            _0xcabc2d =
              _0x501768[_0x3441d1(0x37d)](
                (_0x367fa0, _0x178382) => _0x367fa0 + _0x178382,
                0x0
              ) / _0x501768["length"];
          (_0x2f85b9 =
            Math[_0x3441d1(0x351)](_0xcabc2d * _0x4af8c8 * 0x64) / 0x64),
            (_0x4754f1 = Math["round"]((_0x2f85b9 - _0x1c15fb) * 0x64) / 0x64);
        }
        let _0x96e081 = "";
        if (_0x2c1aa3["length"] > 0x0) {
          const _0x20e80a = _0x2c1aa3[_0x3441d1(0x487)](0x0, 0x4)
            [_0x3441d1(0x41b)]((_0x5ae863) => {
              const _0x4dd2c6 = _0x3441d1;
              let _0x2ceec8 = "";
              if (
                _0x5ae863[_0x4dd2c6(0x310)] &&
                _0x5ae863[_0x4dd2c6(0x310)][_0x4dd2c6(0x292)]() !== ""
              ) {
                if (
                  _0x5ae863[_0x4dd2c6(0x310)][_0x4dd2c6(0x320)](
                    _0x4dd2c6(0x32e)
                  )
                )
                  _0x2ceec8 = _0x5ae863[_0x4dd2c6(0x310)];
                else {
                  let _0x58ca39 = _0x5ae863[_0x4dd2c6(0x310)][_0x4dd2c6(0x320)](
                    "/"
                  )
                    ? _0x5ae863[_0x4dd2c6(0x310)]
                    : "/" + _0x5ae863[_0x4dd2c6(0x310)];
                  _0x2ceec8 = _0x4dd2c6(0x323) + _0x58ca39;
                }
              }
              return _0x2ceec8
                ? _0x4dd2c6(0x162) +
                    _0x2ceec8 +
                    _0x4dd2c6(0x485) +
                    _0x5ae863[_0x4dd2c6(0x177)] +
                    _0x4dd2c6(0x1de) +
                    _0x5ae863[_0x4dd2c6(0x177)] +
                    _0x4dd2c6(0x35c) +
                    _0x5ae863[_0x4dd2c6(0x346)] +
                    _0x4dd2c6(0x2d4) +
                    _0x5ae863[_0x4dd2c6(0x346)] +
                    _0x4dd2c6(0x4f8)
                : _0x4dd2c6(0x163) +
                    _0x5ae863[_0x4dd2c6(0x177)] +
                    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20" +
                    _0x5ae863["pr_sku"] +
                    _0x4dd2c6(0x2d4) +
                    _0x5ae863[_0x4dd2c6(0x346)] +
                    _0x4dd2c6(0x4f8);
            })
            [_0x3441d1(0x276)]("");
          _0x96e081 =
            _0x3441d1(0x466) +
            _0x20e80a +
            _0x3441d1(0x3f3) +
            (_0x2c1aa3[_0x3441d1(0x428)] > 0x4
              ? _0x3441d1(0x3b3) +
                (_0x2c1aa3["length"] - 0x4) +
                "\x20producto" +
                (_0x2c1aa3[_0x3441d1(0x428)] - 0x4 > 0x1 ? "s" : "") +
                _0x3441d1(0x1ee)
              : "") +
            _0x3441d1(0x268);
        }
        _0x35177b +=
          _0x3441d1(0x305) +
          _0x39c364 +
          _0x3441d1(0x2a4) +
          _0x107a3a[_0x3441d1(0x2f1)](_0x3441d1(0x223), _0x3441d1(0x1e1)) +
          "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x4ff8ac && _0x4ff8ac !== _0x39c364
            ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x20text-muted\x20small\x22>" +
              _0x4ff8ac +
              _0x3441d1(0x281)
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x1c15fb > 0x0
            ? _0x3441d1(0x34d) +
              _0x4af8c8 +
              _0x3441d1(0x3bb) +
              _0x1c15fb[_0x3441d1(0x260)](_0x3441d1(0x175)) +
              _0x3441d1(0x327) +
              (_0x2f85b9 > 0x0
                ? _0x3441d1(0x1bf) +
                  _0x2f85b9[_0x3441d1(0x260)](_0x3441d1(0x175)) +
                  _0x3441d1(0x3cd)
                : _0x3441d1(0x3e8)) +
              _0x3441d1(0x15c) +
              (_0x4754f1 > 0x0
                ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:\x200.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💰\x20Ahorras\x20$" +
                  _0x4754f1[_0x3441d1(0x260)](_0x3441d1(0x175)) +
                  "\x20comprando\x20" +
                  _0x4af8c8 +
                  "\x20unidades\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                : "") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              (_0x3cc398
                ? _0x3441d1(0x167) + _0x3cc398 + _0x3441d1(0x272)
                : "") +
              _0x3441d1(0x385) +
              (precioPromo
                ? _0x3441d1(0x337) + precioPromo + _0x3441d1(0x1f3)
                : "") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20") +
          _0x3441d1(0x14e) +
          _0x96e081 +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x2c1aa3[_0x3441d1(0x428)] > 0x0
            ? _0x3441d1(0x523) +
              _0x2c1aa3[_0x3441d1(0x41b)](
                (_0x129912, _0x346167) =>
                  _0x3441d1(0x492) +
                  (_0x346167 < _0x2c1aa3[_0x3441d1(0x428)] - 0x1
                    ? _0x3441d1(0x2b3)
                    : "") +
                  _0x3441d1(0x17d) +
                  _0x129912[_0x3441d1(0x177)] +
                  _0x3441d1(0x165) +
                  _0x129912["pr_sku"] +
                  _0x3441d1(0x422) +
                  (_0x129912[_0x3441d1(0x4be)]
                    ? _0x3441d1(0x34e) +
                      _0x129912[_0x3441d1(0x4be)] +
                      _0x3441d1(0x1b1)
                    : "") +
                  _0x3441d1(0x32c) +
                  (() => {
                    const _0x2cd509 = _0x3441d1;
                    let _0x360126 =
                        Number(_0x129912[_0x2cd509(0x19f)]) ||
                        Number(_0x129912["L1"]) ||
                        0x0,
                      _0x72f673 =
                        Math[_0x2cd509(0x351)](_0x360126 * 1.16 * 0x64) / 0x64;
                    return _0x72f673 > 0x0
                      ? _0x2cd509(0x531) +
                          _0x72f673["toFixed"](0x2) +
                          "</small>"
                      : "";
                  })() +
                  _0x3441d1(0x478)
              )[_0x3441d1(0x276)]("") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x2c0a57[_0x3441d1(0x428)] > _0x2c1aa3["length"]
            ? _0x3441d1(0x41c) +
              _0x2c0a57[_0x3441d1(0x428)] +
              "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(" +
              _0x2c1aa3[_0x3441d1(0x428)] +
              _0x3441d1(0x51d) +
              _0x2c0a57[_0x3441d1(0x487)](0x0, 0x6)
                [_0x3441d1(0x41b)](
                  (_0x23a6ca) => _0x3441d1(0x459) + _0x23a6ca + _0x3441d1(0x1c8)
                )
                [_0x3441d1(0x276)]("") +
              _0x3441d1(0x4dd) +
              (_0x2c0a57["length"] > 0x6
                ? _0x3441d1(0x352) +
                  (_0x2c0a57[_0x3441d1(0x428)] - 0x6) +
                  _0x3441d1(0x4e3)
                : "") +
              _0x3441d1(0x28b)
            : "") +
          _0x3441d1(0x14e) +
          (_0x4f5b95["validFrom"] && _0x4f5b95[_0x3441d1(0x22a)]
            ? _0x3441d1(0x46c) +
              _0x4f5b95[_0x3441d1(0x34a)] +
              _0x3441d1(0x176) +
              _0x4f5b95[_0x3441d1(0x22a)] +
              _0x3441d1(0x261)
            : "") +
          _0x3441d1(0x3f0);
      }),
        (_0x35177b += "</div>"),
        (_0x35177b +=
          "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
        (document["getElementById"](_0x5b08af(0x262))[_0x5b08af(0x1ba)] =
          _0x35177b);
      const _0x287d40 = document["querySelectorAll"](_0x5b08af(0x1bc));
      _0x287d40[_0x5b08af(0x395)]((_0x515548) => {
        _0x515548["addEventListener"]("click", function (_0x4feec7) {
          const _0x207866 = _0x4e0e;
          _0x4feec7[_0x207866(0x263)]();
          const _0x489539 = _0x515548[_0x207866(0x3c1)]("data-sku");
          navigator["clipboard"] &&
            navigator[_0x207866(0x1b7)]
              [_0x207866(0x20d)](_0x489539)
              [_0x207866(0x2dd)](() => {
                const _0x129e79 = _0x207866,
                  _0x24e6a7 = _0x515548[_0x129e79(0x1ba)];
                (_0x515548["innerHTML"] = "✅"),
                  _0x515548[_0x129e79(0x2b2)][_0x129e79(0x4b8)](
                    _0x129e79(0x4bd)
                  ),
                  _0x515548[_0x129e79(0x2b2)]["add"](_0x129e79(0x4f0)),
                  setTimeout(() => {
                    const _0x5f45f9 = _0x129e79;
                    (_0x515548[_0x5f45f9(0x1ba)] = _0x24e6a7),
                      _0x515548[_0x5f45f9(0x2b2)][_0x5f45f9(0x4b8)](
                        "btn-success"
                      ),
                      _0x515548[_0x5f45f9(0x2b2)]["add"]("btn-outline-primary");
                  }, 0x4b0);
              })
              [_0x207866(0x2c7)]((_0x57d7a8) => {
                const _0x29e02a = _0x207866;
                console[_0x29e02a(0x233)](_0x29e02a(0x503), _0x57d7a8);
                const _0x4d7f49 = _0x515548["innerHTML"];
                (_0x515548[_0x29e02a(0x1ba)] = "❌"),
                  setTimeout(() => {
                    const _0x1b5ecc = _0x29e02a;
                    _0x515548[_0x1b5ecc(0x1ba)] = _0x4d7f49;
                  }, 0x4b0);
              });
        });
      });
    } catch (_0x834bf5) {
      console[_0x5b08af(0x233)](
        "❌\x20Error\x20cargando\x20promociones:",
        _0x834bf5
      ),
        (document[_0x5b08af(0x539)](_0x5b08af(0x262))["innerHTML"] =
          _0x5b08af(0x3ec) + _0x834bf5["message"] + _0x5b08af(0x19e));
    }
  }
  cargarConfiguracionGuardada(), renderHistorial();
  const mobileModalStyles = document[_0x146931(0x2b4)](_0x146931(0x4e8));
  (mobileModalStyles[_0x146931(0x35a)] = _0x146931(0x468)),
    document[_0x146931(0x3b1)][_0x146931(0x249)](mobileModalStyles);
  function isMobileDevice() {
    const _0x5c0776 = _0x146931;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
      _0x5c0776(0x1cb)
    ](navigator["userAgent"]);
  }
  function hideMobileKeyboard() {
    const _0x5b73e9 = _0x146931;
    try {
      const _0x2157fa = document[_0x5b73e9(0x539)]("codigo");
      if (!_0x2157fa) return;
      _0x2157fa[_0x5b73e9(0x3c5)]();
      document[_0x5b73e9(0x2bb)] &&
        typeof document["activeElement"]["blur"] === _0x5b73e9(0x4f6) &&
        document[_0x5b73e9(0x2bb)]["blur"]();
      const _0x29cee7 = /iPad|iPhone|iPod/["test"](navigator[_0x5b73e9(0x50d)]);
      if (_0x29cee7) {
        const _0x3884a0 = _0x2157fa[_0x5b73e9(0x366)](_0x5b73e9(0x4e0));
        _0x2157fa["setAttribute"](_0x5b73e9(0x4e0), "true");
        const _0x1f2456 = document["createElement"](_0x5b73e9(0x4c1));
        (_0x1f2456[_0x5b73e9(0x4fa)] = _0x5b73e9(0x20e)),
          (_0x1f2456["style"][_0x5b73e9(0x52e)] = "absolute"),
          (_0x1f2456[_0x5b73e9(0x4e8)][_0x5b73e9(0x33a)] = "0"),
          (_0x1f2456[_0x5b73e9(0x4e8)][_0x5b73e9(0x45a)] = "0"),
          (_0x1f2456[_0x5b73e9(0x4e8)][_0x5b73e9(0x17c)] = _0x5b73e9(0x3a6)),
          document[_0x5b73e9(0x53e)][_0x5b73e9(0x249)](_0x1f2456),
          _0x1f2456["focus"](),
          setTimeout(() => {
            const _0x492641 = _0x5b73e9;
            try {
              _0x1f2456[_0x492641(0x3c5)]();
            } catch (_0x48dfc5) {}
            try {
              document[_0x492641(0x53e)][_0x492641(0x1f1)](_0x1f2456);
            } catch (_0x11f360) {}
            try {
              _0x2157fa[_0x492641(0x3c5)]();
            } catch (_0xe225bf) {}
            if (!_0x3884a0) _0x2157fa["removeAttribute"]("readonly");
          }, 0x32);
      }
    } catch (_0xfc1b6a) {}
  }
  function mostrarModalResultadosBusqueda(_0x2d55a5, _0x5dd4c7) {
    const _0x5d0071 = _0x146931;
    cerrarCamaraAlAbrirModal(_0x5d0071(0x350));
    if (isMobileDevice()) hideMobileKeyboard();
    (busquedaOriginalItems = [..._0x2d55a5]),
      (resultadosBusquedaState["items"] = _0x2d55a5),
      (resultadosBusquedaState["page"] = 0x1),
      (resultadosBusquedaState["pageSize"] = 0xa),
      (resultadosBusquedaState["query"] = _0x5dd4c7),
      (resultadosBusquedaState["originalQuery"] = _0x5dd4c7);
    try {
      const _0x175a51 = localStorage[_0x5d0071(0x179)](_0x5d0071(0x306));
      (_0x175a51 === _0x5d0071(0x3e3) || _0x175a51 === _0x5d0071(0x3a0)) &&
        (resultadosBusquedaState["view"] = _0x175a51);
    } catch (_0x15c378) {}
    const _0x469e7b = document[_0x5d0071(0x539)](_0x5d0071(0x2cf));
    if (!_0x469e7b) return;
    try {
      const _0x4a67d3 = document["getElementById"](_0x5d0071(0x262));
      _0x4a67d3 &&
        /Buscando producto/i["test"](_0x4a67d3[_0x5d0071(0x35a)] || "") &&
        (_0x4a67d3[_0x5d0071(0x1ba)] = "");
    } catch (_0x42e892) {}
    try {
      const _0x5bfa64 = document[_0x5d0071(0x539)](_0x5d0071(0x3b6));
      _0x5bfa64 &&
        ((_0x5bfa64["value"] = ""),
        (_0x5bfa64[_0x5d0071(0x522)] = _0x5d0071(0x158)));
      const _0x4ed030 = document["getElementById"](_0x5d0071(0x1a0));
      _0x4ed030 &&
        ((_0x4ed030[_0x5d0071(0x1ba)] = ""),
        (_0x4ed030[_0x5d0071(0x4e8)][_0x5d0071(0x43c)] = _0x5d0071(0x3a6)));
    } catch (_0xce4038) {}
    renderResultadosBusqueda();
    const _0x1d164a = document[_0x5d0071(0x539)](_0x5d0071(0x4cb)),
      _0x210cc3 =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
          _0x5d0071(0x1cb)
        ](navigator["userAgent"]);
    if (_0x210cc3)
      (_0x1d164a["style"][_0x5d0071(0x52e)] = _0x5d0071(0x2a5)),
        (_0x1d164a["style"]["top"] = "0"),
        (_0x1d164a["style"][_0x5d0071(0x2aa)] = "0"),
        (_0x1d164a[_0x5d0071(0x4e8)][_0x5d0071(0x300)] = _0x5d0071(0x1eb)),
        (_0x1d164a[_0x5d0071(0x4e8)][_0x5d0071(0x45a)] = _0x5d0071(0x1eb)),
        (_0x1d164a[_0x5d0071(0x4e8)]["zIndex"] = _0x5d0071(0x4a2)),
        (_0x1d164a["style"]["backgroundColor"] = _0x5d0071(0x3d4)),
        (_0x1d164a[_0x5d0071(0x4e8)]["display"] = _0x5d0071(0x356)),
        _0x1d164a[_0x5d0071(0x2b2)][_0x5d0071(0x197)]("show");
    else {
      const _0x17f032 = new bootstrap[_0x5d0071(0x279)](_0x1d164a, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x17f032[_0x5d0071(0x3dc)]();
    }
    setTimeout(() => {
      const _0x276e1b = _0x5d0071;
      configurarEventosBusquedaModal();
      const _0x17ca43 = document["getElementById"]("busquedaModalInput");
      _0x17ca43 &&
        ((_0x17ca43[_0x276e1b(0x1d5)] = _0x5dd4c7 || ""),
        _0x17ca43[_0x276e1b(0x447)]());
      const _0x554ea8 = document[_0x276e1b(0x539)](_0x276e1b(0x45b));
      _0x554ea8 &&
        (_0x554ea8[_0x276e1b(0x35a)] =
          _0x2d55a5[_0x276e1b(0x428)] +
          _0x276e1b(0x42c) +
          (_0x2d55a5[_0x276e1b(0x428)] !== 0x1 ? "s" : ""));
    }, 0x64);
  }
  function cerrarResultadosModal() {
    const _0x6876d4 = _0x146931,
      _0x342941 = document[_0x6876d4(0x539)](_0x6876d4(0x4cb));
    if (!_0x342941) return;
    _0x342941[_0x6876d4(0x2b2)][_0x6876d4(0x4b8)](_0x6876d4(0x3dc)),
      (_0x342941[_0x6876d4(0x4e8)][_0x6876d4(0x43c)] = _0x6876d4(0x3a6));
    try {
      const _0x1059a5 = bootstrap[_0x6876d4(0x279)]["getInstance"](_0x342941);
      if (_0x1059a5) _0x1059a5[_0x6876d4(0x46f)]();
    } catch (_0x1fd2ca) {}
    document[_0x6876d4(0x345)](_0x6876d4(0x4c2))[_0x6876d4(0x395)](
      (_0x297699) => _0x297699[_0x6876d4(0x4b8)]()
    );
    try {
      const _0x222f8d = document[_0x6876d4(0x539)]("resultado");
      _0x222f8d &&
        /Buscando producto/i["test"](_0x222f8d[_0x6876d4(0x35a)] || "") &&
        (_0x222f8d[_0x6876d4(0x1ba)] = "");
    } catch (_0x5e4fb1) {}
    try {
      const _0x2f5014 = document[_0x6876d4(0x539)](_0x6876d4(0x3b6));
      _0x2f5014 &&
        ((_0x2f5014[_0x6876d4(0x522)] = _0x6876d4(0x158)),
        bringInputIntoView({ focusOnDesktop: !![] }));
    } catch (_0x507741) {}
  }
  function bringInputIntoView(_0xbef4c0 = {}) {
    const _0x39895b = _0x146931,
      { focusOnDesktop: focusOnDesktop = !![] } = _0xbef4c0,
      _0x3a25b3 = document[_0x39895b(0x539)](_0x39895b(0x3b6));
    if (!_0x3a25b3) return;
    try {
      _0x3a25b3[_0x39895b(0x285)]({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } catch (_0x511e58) {}
    const _0x2f2903 =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
        _0x39895b(0x1cb)
      ](navigator[_0x39895b(0x50d)]);
    if (!_0x2f2903 && focusOnDesktop)
      try {
        _0x3a25b3[_0x39895b(0x447)]({ preventScroll: !![] });
      } catch (_0x52e0b4) {
        try {
          _0x3a25b3[_0x39895b(0x447)]();
        } catch (_0x80505c) {}
      }
  }
  async function renderResultadosBusqueda() {
    const _0x2873d1 = _0x146931,
      _0x322464 = document[_0x2873d1(0x539)](_0x2873d1(0x2cf));
    if (!_0x322464) return;
    const {
        items: _0x496bb3,
        page: _0x63ac8a,
        pageSize: _0x52a4cb,
        query: _0x76d74f,
        view: _0x5aed77,
      } = resultadosBusquedaState,
      _0x25eed2 = _0x496bb3["length"],
      _0x5ae95b = Math[_0x2873d1(0x41a)](
        0x1,
        Math[_0x2873d1(0x303)](_0x25eed2 / _0x52a4cb)
      ),
      _0x22673f = Math["min"](_0x63ac8a, _0x5ae95b),
      _0x2139de = (_0x22673f - 0x1) * _0x52a4cb,
      _0x4b74e3 = Math["min"](_0x2139de + _0x52a4cb, _0x25eed2),
      _0x50a0fd = _0x496bb3[_0x2873d1(0x487)](_0x2139de, _0x4b74e3);
    let _0x31dc2e = [];
    try {
      _0x31dc2e = await Promise["all"](
        _0x50a0fd["map"]((_0x1620f8) =>
          tienePromociones(_0x1620f8)
            ["then"](Boolean)
            [_0x2873d1(0x2c7)](() => ![])
        )
      );
    } catch (_0x959c5b) {
      _0x31dc2e = _0x50a0fd[_0x2873d1(0x41b)](() => ![]);
    }
    const _0x5bca65 = (_0x1940ed, _0x5251e5) => {
        const _0xe6f3eb = _0x2873d1,
          _0x1a4d1c = _0x1940ed[_0xe6f3eb(0x177)] || "",
          _0x347d03 =
            _0x1940ed[_0xe6f3eb(0x346)] || _0x1940ed[_0xe6f3eb(0x4be)] || "",
          _0x285abd = document[_0xe6f3eb(0x539)]("busquedaModalInput"),
          _0xb3a0bb = _0x285abd ? _0x285abd[_0xe6f3eb(0x1d5)] : _0x76d74f,
          _0x1d21a4 = resaltarCoincidencias(_0x1a4d1c, _0xb3a0bb),
          _0x380db9 = resaltarCoincidencias(_0x347d03, _0xb3a0bb);
        let _0xc8e17f = "";
        if (
          _0x1940ed[_0xe6f3eb(0x310)] &&
          _0x1940ed[_0xe6f3eb(0x310)][_0xe6f3eb(0x292)]() !== ""
        ) {
          if (_0x1940ed["pr_imagen"][_0xe6f3eb(0x320)](_0xe6f3eb(0x32e)))
            _0xc8e17f = _0x1940ed["pr_imagen"];
          else {
            const _0xccc62b = _0x1940ed[_0xe6f3eb(0x310)]["startsWith"]("/")
              ? _0x1940ed[_0xe6f3eb(0x310)]
              : "/" + _0x1940ed["pr_imagen"];
            _0xc8e17f = _0xe6f3eb(0x323) + _0xccc62b;
          }
        }
        const _0x2a710d =
            Number(_0x1940ed[_0xe6f3eb(0x19f)]) ||
            Number(_0x1940ed["L1"]) ||
            0x0,
          _0x274625 = Math[_0xe6f3eb(0x351)](_0x2a710d * 1.16 * 0x64) / 0x64;
        return (
          _0xe6f3eb(0x2ce) +
          (_0x5251e5 ? _0xe6f3eb(0x38a) : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0xc8e17f
            ? _0xe6f3eb(0x2af) +
              _0xc8e17f +
              _0xe6f3eb(0x3b2) +
              _0x1a4d1c +
              _0xe6f3eb(0x419)
            : _0xe6f3eb(0x3ed)) +
          _0xe6f3eb(0x208) +
          _0x1a4d1c +
          "\x22>" +
          _0x1d21a4 +
          _0xe6f3eb(0x348) +
          _0x380db9 +
          "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x274625 > 0x0
            ? _0xe6f3eb(0x155) + _0x274625["toFixed"](0x2) + _0xe6f3eb(0x3cc)
            : "") +
          _0xe6f3eb(0x289) +
          _0x347d03 +
          _0xe6f3eb(0x377)
        );
      },
      _0xee5514 = (_0x46eaa7, _0x2ff2bb) => {
        const _0x30326e = _0x2873d1,
          _0x698cbe = _0x46eaa7[_0x30326e(0x177)] || "",
          _0x2b43d5 =
            _0x46eaa7[_0x30326e(0x346)] || _0x46eaa7[_0x30326e(0x4be)] || "",
          _0x1a0f75 = document[_0x30326e(0x539)](_0x30326e(0x4f2)),
          _0x58aa10 = _0x1a0f75 ? _0x1a0f75[_0x30326e(0x1d5)] : _0x76d74f,
          _0x3e8c08 = resaltarCoincidencias(_0x698cbe, _0x58aa10),
          _0x25a1c2 = resaltarCoincidencias(_0x2b43d5, _0x58aa10);
        let _0x43f692 = "";
        if (
          _0x46eaa7[_0x30326e(0x310)] &&
          _0x46eaa7[_0x30326e(0x310)][_0x30326e(0x292)]() !== ""
        ) {
          if (_0x46eaa7["pr_imagen"]["startsWith"]("http"))
            _0x43f692 = _0x46eaa7["pr_imagen"];
          else {
            const _0x426928 = _0x46eaa7[_0x30326e(0x310)][_0x30326e(0x320)]("/")
              ? _0x46eaa7[_0x30326e(0x310)]
              : "/" + _0x46eaa7["pr_imagen"];
            _0x43f692 = "https://media.megaservicio.net" + _0x426928;
          }
        }
        return (
          _0x30326e(0x207) +
          (_0x43f692
            ? _0x30326e(0x47d) +
              _0x43f692 +
              _0x30326e(0x3b2) +
              _0x698cbe +
              _0x30326e(0x505)
            : "") +
          _0x30326e(0x336) +
          _0x3e8c08 +
          (_0x2ff2bb
            ? "\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:0.7rem;\x22>PROMO</span>"
            : "") +
          _0x30326e(0x348) +
          _0x25a1c2 +
          _0x30326e(0x3a8) +
          _0x2b43d5 +
          "\x27);\x20})()\x22>Ver</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>"
        );
      };
    let _0x48fedd = "";
    if (_0x5aed77 === _0x2873d1(0x3e3)) {
      const _0x362e22 = _0x50a0fd[_0x2873d1(0x41b)](
        (_0x2b4f1a, _0x5ae9fe) =>
          _0x2873d1(0x192) +
          _0x5bca65(_0x2b4f1a, !!_0x31dc2e[_0x5ae9fe]) +
          _0x2873d1(0x3cc)
      )[_0x2873d1(0x276)]("");
      _0x48fedd = _0x2873d1(0x363) + _0x362e22 + _0x2873d1(0x4e6);
    } else {
      const _0x2ffe95 = _0x50a0fd[_0x2873d1(0x41b)]((_0x4ff959, _0x3dc1f8) =>
        _0xee5514(_0x4ff959, !!_0x31dc2e[_0x3dc1f8])
      )[_0x2873d1(0x276)]("");
      _0x48fedd = _0x2ffe95;
    }
    _0x322464["innerHTML"] =
      "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>" +
      _0x25eed2 +
      _0x2873d1(0x1ac) +
      (_0x25eed2 !== 0x1 ? "s" : "") +
      _0x2873d1(0x490) +
      (resultadosBusquedaState[_0x2873d1(0x433)] &&
      _0x76d74f !== resultadosBusquedaState["originalQuery"]
        ? _0x2873d1(0x480) +
          (_0x25eed2 !== 0x1 ? "s" : "") +
          _0x2873d1(0x402) +
          resultadosBusquedaState[_0x2873d1(0x433)] +
          "\x22"
        : _0x76d74f
        ? _0x2873d1(0x40b) + _0x76d74f + "\x22"
        : "") +
      _0x2873d1(0x1d8) +
      (_0x5aed77 === "grid" ? _0x2873d1(0x537) : _0x2873d1(0x224)) +
      _0x2873d1(0x2b1) +
      (_0x48fedd ||
        "<div\x20class=\x22text-center\x20text-muted\x20py-4\x22><i\x20class=\x22bi\x20bi-search\x22></i><br>Sin\x20resultados\x20para\x20la\x20búsqueda\x20actual</div>") +
      _0x2873d1(0x334);
    const _0x2f6f06 = document[_0x2873d1(0x539)](_0x2873d1(0x20f)),
      _0x51eb12 = document[_0x2873d1(0x539)](_0x2873d1(0x4c6));
    if (_0x2f6f06)
      _0x2f6f06[_0x2873d1(0x35a)] =
        _0x2139de + 0x1 + "-" + _0x4b74e3 + "\x20de\x20" + _0x25eed2;
    if (_0x51eb12)
      _0x51eb12[_0x2873d1(0x35a)] =
        "Página\x20" + _0x22673f + _0x2873d1(0x3b9) + _0x5ae95b;
    const _0x133ab5 = document[_0x2873d1(0x539)](_0x2873d1(0x36b)),
      _0x2c8958 = document[_0x2873d1(0x539)]("btnNextResultados");
    _0x133ab5 &&
      ((_0x133ab5[_0x2873d1(0x3ae)] = _0x22673f <= 0x1),
      (_0x133ab5["onclick"] = () => {
        const _0x565c7b = _0x2873d1;
        (resultadosBusquedaState[_0x565c7b(0x2fb)] = Math["max"](
          0x1,
          _0x22673f - 0x1
        )),
          renderResultadosBusqueda();
      }));
    _0x2c8958 &&
      ((_0x2c8958[_0x2873d1(0x3ae)] = _0x22673f >= _0x5ae95b),
      (_0x2c8958[_0x2873d1(0x394)] = () => {
        const _0x5eb28d = _0x2873d1;
        (resultadosBusquedaState[_0x5eb28d(0x2fb)] = Math[_0x5eb28d(0x3e5)](
          _0x5ae95b,
          _0x22673f + 0x1
        )),
          renderResultadosBusqueda();
      }));
    const _0x2c8f12 = document[_0x2873d1(0x539)](_0x2873d1(0x31b));
    _0x2c8f12 &&
      ((_0x2c8f12[_0x2873d1(0x1d5)] = String(
        resultadosBusquedaState["pageSize"]
      )),
      (_0x2c8f12[_0x2873d1(0x255)] = (_0x37e41c) => {
        const _0x46fd8a = _0x2873d1,
          _0x546656 =
            parseInt(_0x37e41c[_0x46fd8a(0x4f3)][_0x46fd8a(0x1d5)], 0xa) || 0xa;
        (resultadosBusquedaState[_0x46fd8a(0x3e4)] = _0x546656),
          (resultadosBusquedaState[_0x46fd8a(0x2fb)] = 0x1),
          renderResultadosBusqueda();
      }));
    const _0x3d9bf8 = document[_0x2873d1(0x539)](_0x2873d1(0x53a)),
      _0x4985cc = document[_0x2873d1(0x539)]("iconVista"),
      _0x31bdd0 = document[_0x2873d1(0x539)](_0x2873d1(0x172));
    _0x3d9bf8 &&
      _0x4985cc &&
      _0x31bdd0 &&
      (_0x5aed77 === "grid"
        ? ((_0x4985cc[_0x2873d1(0x3ce)] = _0x2873d1(0x258)),
          (_0x31bdd0[_0x2873d1(0x35a)] = "Lista"))
        : ((_0x4985cc[_0x2873d1(0x3ce)] = "bi\x20bi-grid-3x3-gap"),
          (_0x31bdd0["textContent"] = _0x2873d1(0x537))),
      (_0x3d9bf8["onclick"] = () => {
        const _0x286e11 = _0x2873d1;
        resultadosBusquedaState[_0x286e11(0x511)] =
          resultadosBusquedaState[_0x286e11(0x511)] === _0x286e11(0x3e3)
            ? "list"
            : "grid";
        try {
          localStorage[_0x286e11(0x2c9)](
            "resultados_view",
            resultadosBusquedaState[_0x286e11(0x511)]
          );
        } catch (_0x3954dd) {}
        renderResultadosBusqueda();
      }));
    const _0x56277f = document[_0x2873d1(0x539)](_0x2873d1(0x40d)),
      _0x31207d = document[_0x2873d1(0x539)](_0x2873d1(0x21a));
    _0x56277f &&
      ((_0x56277f[_0x2873d1(0x3e5)] = "1"),
      (_0x56277f[_0x2873d1(0x41a)] = String(_0x5ae95b)),
      (_0x56277f[_0x2873d1(0x522)] = _0x2873d1(0x4cd) + _0x5ae95b));
    const _0x418775 = () => {
      const _0x483b76 = _0x2873d1,
        _0x34b3d7 = parseInt(
          (_0x56277f?.[_0x483b76(0x1d5)] || "")[_0x483b76(0x292)](),
          0xa
        );
      if (!isNaN(_0x34b3d7)) {
        const _0x234481 = Math["max"](
          0x1,
          Math[_0x483b76(0x3e5)](_0x5ae95b, _0x34b3d7)
        );
        (resultadosBusquedaState[_0x483b76(0x2fb)] = _0x234481),
          renderResultadosBusqueda();
      }
    };
    if (_0x31207d) _0x31207d["onclick"] = _0x418775;
    if (_0x56277f)
      _0x56277f["addEventListener"](_0x2873d1(0x211), (_0x333ab3) => {
        const _0x70e2c = _0x2873d1;
        _0x333ab3["key"] === _0x70e2c(0x4ac) &&
          (_0x333ab3[_0x70e2c(0x263)](), _0x418775());
      });
  }
  window[_0x146931(0x495)] = renderResultadosBusqueda;
  async function mostrarDetalleProductoBySKU(_0x4ab7a5) {
    const _0x30fafd = _0x146931,
      _0x4986aa = await getAllProductos(),
      _0x478366 = _0x4986aa[_0x30fafd(0x1e8)](
        (_0x35138d) =>
          String(_0x35138d["pr_sku"]) === String(_0x4ab7a5) ||
          String(_0x35138d[_0x30fafd(0x4be)]) === String(_0x4ab7a5)
      );
    if (_0x478366) {
      mostrarDetalleProducto(_0x478366);
      const _0x49e30c = {
        ..._0x478366,
        FECHA_ESCANEO: new Date()[_0x30fafd(0x4c3)](),
      };
      historial[_0x30fafd(0x4d2)](_0x49e30c),
        setCookie(_0x30fafd(0x3ee), JSON[_0x30fafd(0x4d8)](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x19186a = _0x30fafd,
            _0x5f3a16 = document["getElementById"]("resultado");
          _0x5f3a16 &&
            _0x5f3a16[_0x19186a(0x285)]({
              behavior: _0x19186a(0x4d4),
              block: "start",
              inline: _0x19186a(0x538),
            });
        }, 0xc8);
    }
  }
  function mostrarModalReporteVentas() {
    const _0x577182 = _0x146931;
    cerrarCamaraAlAbrirModal(_0x577182(0x467));
    if (isMobileDevice()) hideMobileKeyboard();
    const _0xe05270 = new Date(),
      _0x251e17 =
        _0xe05270["getFullYear"]() +
        "-" +
        String(_0xe05270[_0x577182(0x340)]() + 0x1)["padStart"](0x2, "0");
    document[_0x577182(0x539)](_0x577182(0x3fd))[_0x577182(0x1d5)] = _0x251e17;
    const _0x4230d6 = document[_0x577182(0x539)](_0x577182(0x1e9)),
      _0x411280 =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
          _0x577182(0x1cb)
        ](navigator[_0x577182(0x50d)]);
    if (_0x411280)
      (_0x4230d6[_0x577182(0x4e8)]["position"] = _0x577182(0x2a5)),
        (_0x4230d6[_0x577182(0x4e8)][_0x577182(0x234)] = "0"),
        (_0x4230d6[_0x577182(0x4e8)][_0x577182(0x2aa)] = "0"),
        (_0x4230d6[_0x577182(0x4e8)][_0x577182(0x300)] = _0x577182(0x1eb)),
        (_0x4230d6[_0x577182(0x4e8)][_0x577182(0x45a)] = _0x577182(0x1eb)),
        (_0x4230d6[_0x577182(0x4e8)][_0x577182(0x3db)] = _0x577182(0x4a2)),
        (_0x4230d6[_0x577182(0x4e8)][_0x577182(0x2a2)] = "transparent"),
        (_0x4230d6[_0x577182(0x4e8)][_0x577182(0x43c)] = "block"),
        _0x4230d6[_0x577182(0x2b2)]["add"](_0x577182(0x3dc));
    else {
      const _0xdfd441 = new bootstrap[_0x577182(0x279)](_0x4230d6, {
        backdrop: !![],
        keyboard: !![],
      });
      _0xdfd441[_0x577182(0x3dc)]();
    }
  }
  function cerrarModalReporteVentas() {
    const _0x5805bd = _0x146931,
      _0x282eb5 = document[_0x5805bd(0x539)](_0x5805bd(0x1e9));
    if (!_0x282eb5) return;
    _0x282eb5[_0x5805bd(0x2b2)]["remove"](_0x5805bd(0x3dc)),
      (_0x282eb5[_0x5805bd(0x4e8)]["display"] = _0x5805bd(0x3a6));
    try {
      const _0x2113be = bootstrap["Modal"][_0x5805bd(0x481)](_0x282eb5);
      if (_0x2113be) _0x2113be["hide"]();
    } catch (_0x31d1ae) {}
    document["querySelectorAll"](_0x5805bd(0x4c2))[_0x5805bd(0x395)](
      (_0x287f12) => _0x287f12["remove"]()
    );
    try {
      const _0x32dee5 = document[_0x5805bd(0x539)]("codigo");
      _0x32dee5 &&
        ((_0x32dee5[_0x5805bd(0x522)] = _0x5805bd(0x158)),
        bringInputIntoView({ focusOnDesktop: !![] }));
    } catch (_0x522766) {}
  }
  async function generarReporteVentas() {
    const _0x43a300 = _0x146931,
      _0x1f4d00 = document[_0x43a300(0x539)]("mesReporte")["value"],
      _0x5d969c = document[_0x43a300(0x539)](_0x43a300(0x3a9)),
      _0x4f2451 = document[_0x43a300(0x539)](_0x43a300(0x451)),
      _0x3fc809 = document[_0x43a300(0x539)]("btnReporteSpinner");
    if (!_0x1f4d00) {
      _0x5d969c[_0x43a300(0x1ba)] = _0x43a300(0x453);
      return;
    }
    (_0x4f2451[_0x43a300(0x35a)] = _0x43a300(0x410)),
      _0x3fc809["classList"][_0x43a300(0x4b8)](_0x43a300(0x4b6));
    try {
      const _0xcc0a2e =
          "https://reporte-ventas-b9.vercel.app/api/ventas?mes=" + _0x1f4d00,
        _0x3a40bc = await fetch(_0xcc0a2e);
      if (!_0x3a40bc["ok"])
        throw new Error(
          _0x43a300(0x2b5) +
            _0x3a40bc["status"] +
            "\x20" +
            _0x3a40bc[_0x43a300(0x49f)]
        );
      const _0x4bb71d = await _0x3a40bc[_0x43a300(0x500)]();
      if (!_0x4bb71d[_0x43a300(0x16e)])
        throw new Error(_0x4bb71d[_0x43a300(0x233)] || _0x43a300(0x444));
      const {
        totalGeneral: _0x30da35,
        totalVendedores: _0x534f38,
        totalTickets: _0x2ec177,
        vendedores: _0x159670,
      } = _0x4bb71d[_0x43a300(0x4a9)];
      window[_0x43a300(0x2c5)] = _0x159670;
      let _0x5cf971 = _0x4bb71d[_0x43a300(0x4a9)][_0x43a300(0x482)];
      !_0x5cf971 &&
        (_0x5cf971 = {
          credit_card: {
            total: 5114377.11,
            cantidad: _0x159670["reduce"](
              (_0x2e9c88, _0x34833b) =>
                _0x2e9c88 +
                (_0x34833b[_0x43a300(0x4fd)] || [])[_0x43a300(0x4d6)](
                  (_0x203a6b) =>
                    (_0x203a6b["metodoPago"] || "")[_0x43a300(0x232)](
                      "credit_card"
                    )
                )["length"],
              0x0
            ),
          },
          cash: {
            total: 1288936.88,
            cantidad: _0x159670[_0x43a300(0x37d)](
              (_0x5a17df, _0x426dd3) =>
                _0x5a17df +
                (_0x426dd3["tickets"] || [])["filter"]((_0x4e9f6d) =>
                  (_0x4e9f6d[_0x43a300(0x2b0)] || "")["includes"]("cash")
                )["length"],
              0x0
            ),
          },
          debit_card: {
            total: 1071636.5,
            cantidad: _0x159670[_0x43a300(0x37d)](
              (_0x3e1916, _0x310fdb) =>
                _0x3e1916 +
                (_0x310fdb[_0x43a300(0x4fd)] || [])[_0x43a300(0x4d6)](
                  (_0x26e0a6) =>
                    (_0x26e0a6[_0x43a300(0x2b0)] || "")[_0x43a300(0x232)](
                      _0x43a300(0x159)
                    )
                )[_0x43a300(0x428)],
              0x0
            ),
          },
          credit_note_application: {
            total: 298028.03,
            cantidad: _0x159670[_0x43a300(0x37d)](
              (_0x290a40, _0xd93e17) =>
                _0x290a40 +
                (_0xd93e17["tickets"] || [])["filter"]((_0x3932b4) =>
                  (_0x3932b4[_0x43a300(0x2b0)] || "")[_0x43a300(0x232)](
                    _0x43a300(0x328)
                  )
                )[_0x43a300(0x428)],
              0x0
            ),
          },
          transfer: {
            total: 452621.06,
            cantidad: _0x159670[_0x43a300(0x37d)](
              (_0x174f76, _0x41f963) =>
                _0x174f76 +
                (_0x41f963["tickets"] || [])[_0x43a300(0x4d6)]((_0x30f603) =>
                  (_0x30f603[_0x43a300(0x2b0)] || "")[_0x43a300(0x232)](
                    _0x43a300(0x157)
                  )
                )["length"],
              0x0
            ),
          },
          check: {
            total: 0x31b,
            cantidad: _0x159670["reduce"](
              (_0x9ba1d9, _0x51db61) =>
                _0x9ba1d9 +
                (_0x51db61[_0x43a300(0x4fd)] || [])[_0x43a300(0x4d6)](
                  (_0x271bf1) =>
                    (_0x271bf1[_0x43a300(0x2b0)] || "")[_0x43a300(0x232)](
                      _0x43a300(0x307)
                    )
                )[_0x43a300(0x428)],
              0x0
            ),
          },
          credit: {
            total: 10799.6,
            cantidad: _0x159670[_0x43a300(0x37d)](
              (_0x772ff7, _0x21e283) =>
                _0x772ff7 +
                (_0x21e283[_0x43a300(0x4fd)] || [])["filter"](
                  (_0x4c70cf) =>
                    (_0x4c70cf[_0x43a300(0x2b0)] || "")[_0x43a300(0x232)](
                      _0x43a300(0x29d)
                    ) &&
                    !(_0x4c70cf["metodoPago"] || "")[_0x43a300(0x232)](
                      "credit_card"
                    ) &&
                    !(_0x4c70cf[_0x43a300(0x2b0)] || "")[_0x43a300(0x232)](
                      _0x43a300(0x1f2)
                    )
                )[_0x43a300(0x428)],
              0x0
            ),
          },
          mixed: { total: 0x0, cantidad: 0x0 },
        });
      if (_0x159670[_0x43a300(0x428)] === 0x0) {
        _0x5d969c[_0x43a300(0x1ba)] =
          _0x43a300(0x1b0) + _0x1f4d00 + _0x43a300(0x3c8);
        return;
      }
      const _0x166e40 = {
        cash: _0x43a300(0x4c9),
        credit_card: "💳\x20Tarjeta\x20Crédito",
        debit_card: _0x43a300(0x18c),
        credit_note_application: _0x43a300(0x3e1),
        transfer: "🏦\x20Transferencia",
        check: _0x43a300(0x173),
        credit: "💵\x20Crédito",
        mixed: _0x43a300(0x4e2),
      };
      let _0x3fde19 = "";
      _0x5cf971 &&
        Object[_0x43a300(0x182)](_0x5cf971)[_0x43a300(0x395)]((_0x4fab83) => {
          const _0xd78ac4 = _0x43a300,
            _0x2438e6 = _0x5cf971[_0x4fab83];
          _0x2438e6[_0xd78ac4(0x3d1)] > 0x0 &&
            (_0x3fde19 +=
              _0xd78ac4(0x1dc) +
              _0x2438e6["total"][_0xd78ac4(0x260)]("es-MX", {
                minimumFractionDigits: 0x2,
              }) +
              "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>" +
              (_0x166e40[_0x4fab83] || _0x4fab83) +
              _0xd78ac4(0x2d9) +
              _0x2438e6["cantidad"] +
              _0xd78ac4(0x521));
        });
      let _0x14b3ac =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Resumen\x20del\x20Mes:\x20" +
        _0x1f4d00 +
        _0x43a300(0x47e) +
        _0x30da35["toLocaleString"](_0x43a300(0x215), {
          minimumFractionDigits: 0x2,
        }) +
        _0x43a300(0x314) +
        _0x534f38 +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Vendedores</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-info\x22>" +
        _0x2ec177 +
        _0x43a300(0x333) +
        (_0x3fde19
          ? _0x43a300(0x4d9) +
            _0x3fde19 +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
          : "") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20";
      _0x159670[_0x43a300(0x395)]((_0x12d1cb, _0x5cec07) => {
        const _0x9dd6e1 = _0x43a300,
          _0x539adc = ((_0x12d1cb[_0x9dd6e1(0x209)] / _0x30da35) * 0x64)[
            _0x9dd6e1(0x3f4)
          ](0x1),
          _0x11840b = (_0x12d1cb[_0x9dd6e1(0x209)] /
            _0x12d1cb[_0x9dd6e1(0x3c7)])[_0x9dd6e1(0x3f4)](0x2);
        _0x14b3ac +=
          _0x9dd6e1(0x497) +
          (_0x5cec07 === 0x0 ? _0x9dd6e1(0x374) : _0x9dd6e1(0x3e2)) +
          _0x9dd6e1(0x244) +
          (_0x5cec07 === 0x0 ? _0x9dd6e1(0x3ea) : _0x9dd6e1(0x449)) +
          "\x20text-white\x20d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>" +
          (_0x5cec07 === 0x0 ? "🏆" : "👤") +
          "\x20" +
          _0x12d1cb[_0x9dd6e1(0x22c)] +
          _0x9dd6e1(0x1d7) +
          (_0x5cec07 === 0x0
            ? "<span\x20class=\x22badge\x20bg-light\x20text-dark\x22>TOP</span>"
            : "") +
          _0x9dd6e1(0x489) +
          _0x12d1cb[_0x9dd6e1(0x209)]["toLocaleString"](_0x9dd6e1(0x215), {
            minimumFractionDigits: 0x2,
          }) +
          _0x9dd6e1(0x474) +
          _0x539adc +
          _0x9dd6e1(0x1ca) +
          _0x12d1cb["cantidadTickets"] +
          _0x9dd6e1(0x51c) +
          _0x11840b +
          _0x9dd6e1(0x380) +
          _0x12d1cb["nombre"] +
          "\x27,\x20" +
          i +
          _0x9dd6e1(0x20c) +
          i +
          "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Ver\x20Detalle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
      }),
        (_0x14b3ac += _0x43a300(0x3cc)),
        (_0x5d969c[_0x43a300(0x1ba)] = _0x14b3ac);
    } catch (_0x361a66) {
      console[_0x43a300(0x233)](
        "❌\x20Error\x20al\x20generar\x20reporte\x20de\x20ventas:",
        _0x361a66
      ),
        (_0x5d969c["innerHTML"] =
          _0x43a300(0x355) + _0x361a66[_0x43a300(0x354)] + _0x43a300(0x423));
    } finally {
      (_0x4f2451[_0x43a300(0x35a)] = _0x43a300(0x3aa)),
        _0x3fc809[_0x43a300(0x2b2)][_0x43a300(0x197)]("d-none");
    }
  }
  function mostrarDetalleVendedor(_0x1d7d7d, _0x1ecc10) {
    const _0x510d78 = _0x146931,
      _0x16a567 = window["ultimosVendedores"] || [],
      _0x3df358 = _0x16a567[_0x1ecc10];
    if (!_0x3df358 || !_0x3df358[_0x510d78(0x4fd)]) {
      alert(_0x510d78(0x347));
      return;
    }
    const _0x174597 = _0x3df358["tickets"];
    function _0x5c40a9(_0x2c1707) {
      const _0x1f9230 = _0x510d78,
        _0xc5c5c1 = (_0x2c1707 || "")[_0x1f9230(0x18f)]()[_0x1f9230(0x292)]();
      if (_0xc5c5c1[_0x1f9230(0x232)]("cash") || _0xc5c5c1 === _0x1f9230(0x1ff))
        return { nombre: _0x1f9230(0x4c9), clase: "bg-success" };
      else {
        if (
          _0xc5c5c1[_0x1f9230(0x232)](_0x1f9230(0x335)) ||
          _0xc5c5c1 === _0x1f9230(0x335)
        )
          return { nombre: _0x1f9230(0x4c7), clase: _0x1f9230(0x51e) };
        else {
          if (
            _0xc5c5c1["includes"](_0x1f9230(0x159)) ||
            _0xc5c5c1 === _0x1f9230(0x159)
          )
            return {
              nombre: "💳\x20Tarjeta\x20Débito",
              clase: _0x1f9230(0x1ae),
            };
          else {
            if (
              _0xc5c5c1[_0x1f9230(0x232)](_0x1f9230(0x157)) ||
              _0xc5c5c1 === "transfer"
            )
              return { nombre: _0x1f9230(0x23e), clase: _0x1f9230(0x449) };
            else {
              if (
                _0xc5c5c1["includes"](_0x1f9230(0x1f2)) ||
                _0xc5c5c1 === "credit_note_application"
              )
                return { nombre: "📄\x20Nota\x20Crédito", clase: "bg-warning" };
              else {
                if (
                  _0xc5c5c1[_0x1f9230(0x232)](_0x1f9230(0x307)) ||
                  _0xc5c5c1 === _0x1f9230(0x307)
                )
                  return { nombre: _0x1f9230(0x173), clase: _0x1f9230(0x2f4) };
                else {
                  if (
                    _0xc5c5c1[_0x1f9230(0x232)]("credit") &&
                    !_0xc5c5c1[_0x1f9230(0x232)](_0x1f9230(0x414))
                  )
                    return {
                      nombre: _0x1f9230(0x341),
                      clase: _0x1f9230(0x44a),
                    };
                  else
                    return _0xc5c5c1[_0x1f9230(0x232)](",") ||
                      _0xc5c5c1[_0x1f9230(0x232)]("\x20")
                      ? { nombre: _0x1f9230(0x4e2), clase: _0x1f9230(0x524) }
                      : {
                          nombre: _0x2c1707 || "Sin\x20especificar",
                          clase: _0x1f9230(0x368),
                        };
                }
              }
            }
          }
        }
      }
    }
    let _0x4a0a13 =
      "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22detalleVendedorModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>📋\x20Detalle:\x20" +
      _0x1d7d7d +
      _0x510d78(0x1f5);
    _0x174597["forEach"]((_0x5ba5cf) => {
      const _0x113b8f = _0x510d78,
        _0x4ee91d = _0x5c40a9(_0x5ba5cf[_0x113b8f(0x2b0)]),
        _0x3de80d = new Date(_0x5ba5cf[_0x113b8f(0x2ab)])[_0x113b8f(0x361)](
          _0x113b8f(0x215),
          {
            day: _0x113b8f(0x30c),
            month: "2-digit",
            hour: _0x113b8f(0x30c),
            minute: _0x113b8f(0x30c),
          }
        );
      _0x4a0a13 +=
        "\x0a\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code>" +
        _0x5ba5cf[_0x113b8f(0x48e)] +
        _0x113b8f(0x3c2) +
        _0x3de80d +
        _0x113b8f(0x1a2) +
        _0x4ee91d["clase"] +
        _0x113b8f(0x24e) +
        _0x4ee91d[_0x113b8f(0x22c)] +
        _0x113b8f(0x28f) +
        (_0x5ba5cf[_0x113b8f(0x2da)] && _0x5ba5cf["banco"] !== "-"
          ? _0x113b8f(0x398) + _0x5ba5cf["banco"] + _0x113b8f(0x1b1)
          : "") +
        _0x113b8f(0x406) +
        _0x5ba5cf["cliente"] +
        _0x113b8f(0x3cf) +
        parseFloat(_0x5ba5cf[_0x113b8f(0x1c0)])[_0x113b8f(0x260)](
          _0x113b8f(0x215),
          { minimumFractionDigits: 0x2 }
        ) +
        _0x113b8f(0x396) +
        _0x3de80d +
        _0x113b8f(0x3d8) +
        _0x4ee91d[_0x113b8f(0x397)] +
        "\x20small\x22>" +
        _0x4ee91d["nombre"] +
        "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><small\x20class=\x22text-muted\x22>" +
        (_0x5ba5cf["banco"] || "-") +
        _0x113b8f(0x424);
    });
    const _0xbd46f7 = _0x174597[_0x510d78(0x37d)](
      (_0x3b8ee7, _0x889a65) => _0x3b8ee7 + parseFloat(_0x889a65["importe"]),
      0x0
    );
    _0x4a0a13 +=
      _0x510d78(0x1a5) +
      _0xbd46f7[_0x510d78(0x260)]("es-MX", { minimumFractionDigits: 0x2 }) +
      "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20colspan=\x221\x22>" +
      ticketsArray[_0x510d78(0x428)] +
      _0x510d78(0x1c7) +
      ticketsArray[_0x510d78(0x428)] +
      "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20";
    const _0x72bd64 = document[_0x510d78(0x539)](_0x510d78(0x3d7));
    if (_0x72bd64) _0x72bd64[_0x510d78(0x4b8)]();
    document[_0x510d78(0x53e)][_0x510d78(0x3bd)](_0x510d78(0x445), _0x4a0a13);
    const _0x14ccf8 = new bootstrap[_0x510d78(0x279)](
      document["getElementById"](_0x510d78(0x3d7))
    );
    _0x14ccf8[_0x510d78(0x3dc)](),
      document[_0x510d78(0x539)]("detalleVendedorModal")[_0x510d78(0x4a7)](
        _0x510d78(0x28c),
        () => {
          const _0x2c2d11 = _0x510d78;
          document[_0x2c2d11(0x539)](_0x2c2d11(0x3d7))[_0x2c2d11(0x4b8)]();
        }
      );
  }
}
function mostrarModalConsultarTicket() {
  const _0x3a7868 = _0x146931;
  cerrarCamaraAlAbrirModal(_0x3a7868(0x277));
  const _0x4661d9 = document[_0x3a7868(0x539)]("consultarTicketModal");
  if (_0x4661d9) {
    (document[_0x3a7868(0x539)](_0x3a7868(0x448))[_0x3a7868(0x1d5)] = ""),
      (document[_0x3a7868(0x539)]("resultadoBusquedaTicket")[_0x3a7868(0x1ba)] =
        "");
    const _0x41d8eb = new bootstrap[_0x3a7868(0x279)](_0x4661d9);
    _0x41d8eb[_0x3a7868(0x3dc)](),
      _0x4661d9[_0x3a7868(0x4a7)](
        _0x3a7868(0x432),
        function () {
          const _0x4abd1d = _0x3a7868;
          document[_0x4abd1d(0x539)](_0x4abd1d(0x448))[_0x4abd1d(0x447)]();
        },
        { once: !![] }
      );
  }
}
async function buscarTicket() {
  const _0x1bf54d = _0x146931,
    _0x3b3fa4 = document[_0x1bf54d(0x539)](_0x1bf54d(0x448))[_0x1bf54d(0x1d5)][
      "trim"
    ](),
    _0x2d9da0 = document["getElementById"](_0x1bf54d(0x2a6));
  if (!_0x3b3fa4) {
    _0x2d9da0[_0x1bf54d(0x1ba)] = _0x1bf54d(0x45c);
    return;
  }
  _0x2d9da0[_0x1bf54d(0x1ba)] = _0x1bf54d(0x151) + _0x3b3fa4 + _0x1bf54d(0x349);
  try {
    console["log"]("🔍\x20Buscando\x20ticket:", _0x3b3fa4);
    const _0x4a1ab9 = [
      _0x1bf54d(0x38d) + _0x3b3fa4,
      _0x1bf54d(0x3ac) + _0x3b3fa4,
      _0x1bf54d(0x17b) + _0x3b3fa4,
    ];
    let _0x5ed0fb = null,
      _0x16c882 = null;
    for (const _0x1f44b5 of _0x4a1ab9) {
      try {
        console[_0x1bf54d(0x2db)](_0x1bf54d(0x384), _0x1f44b5);
        const _0x10c613 = await fetch(_0x1f44b5);
        if (_0x10c613["ok"]) {
          (_0x5ed0fb = await _0x10c613[_0x1bf54d(0x500)]()),
            console[_0x1bf54d(0x2db)](_0x1bf54d(0x45e), _0x1f44b5);
          break;
        } else {
          const _0x429756 = await _0x10c613[_0x1bf54d(0x20e)]();
          console["log"](
            _0x1bf54d(0x409) + _0x1f44b5 + ":",
            _0x10c613["status"],
            _0x429756
          ),
            (_0x16c882 = new Error(
              _0x1bf54d(0x2b5) + _0x10c613[_0x1bf54d(0x4ce)]
            ));
        }
      } catch (_0x5f2789) {
        console[_0x1bf54d(0x2db)](
          "❌\x20Error\x20de\x20conexión\x20en\x20" + _0x1f44b5 + ":",
          _0x5f2789[_0x1bf54d(0x354)]
        ),
          (_0x16c882 = _0x5f2789);
      }
    }
    if (
      !_0x5ed0fb ||
      !_0x5ed0fb["orders"] ||
      _0x5ed0fb[_0x1bf54d(0x265)][_0x1bf54d(0x428)] === 0x0
    ) {
      _0x2d9da0[_0x1bf54d(0x1ba)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Ticket\x20no\x20encontrado</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20No\x20se\x20encontraron\x20datos\x20para\x20el\x20ticket\x20<code>" +
        _0x3b3fa4 +
        _0x1bf54d(0x24d);
      return;
    }
    const _0x197592 = _0x5ed0fb[_0x1bf54d(0x265)][0x0],
      _0x5b5b78 = _0x197592["cliente"] || {},
      _0x4dd2cc =
        _0x5b5b78[_0x1bf54d(0x4a0)] ||
        _0x197592[_0x1bf54d(0x18a)] ||
        _0x197592[_0x1bf54d(0x4a0)] ||
        "N/A",
      _0x2c49dd =
        _0x197592[_0x1bf54d(0x228)] ||
        _0x197592[_0x1bf54d(0x4c0)] ||
        _0x1bf54d(0x43a),
      _0x459c7d = parseFloat(
        _0x197592["or_totalFinal"] || _0x197592[_0x1bf54d(0x201)] || 0x0
      ),
      _0xb752f3 = _0x197592[_0x1bf54d(0x2cc)]
        ? new Date(_0x197592[_0x1bf54d(0x2cc)])[_0x1bf54d(0x361)](
            _0x1bf54d(0x215)
          )
        : _0x1bf54d(0x43a);
    _0x2d9da0["innerHTML"] =
      _0x1bf54d(0x267) +
      _0x3b3fa4 +
      _0x1bf54d(0x48a) +
      _0x459c7d[_0x1bf54d(0x260)](_0x1bf54d(0x215), {
        minimumFractionDigits: 0x2,
      }) +
      _0x1bf54d(0x1d1) +
      _0x4dd2cc +
      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Fecha:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
      _0xb752f3 +
      _0x1bf54d(0x226) +
      _0x2c49dd +
      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20w-100\x22\x20onclick=\x22verTicketCompleto(\x27" +
      _0x3b3fa4 +
      _0x1bf54d(0x41e);
  } catch (_0x40073b) {
    console[_0x1bf54d(0x233)](_0x1bf54d(0x3f8), _0x40073b),
      (_0x2d9da0[_0x1bf54d(0x1ba)] =
        _0x1bf54d(0x446) +
        _0x40073b[_0x1bf54d(0x354)] +
        "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
  }
}
function verTicketCompleto(_0x506a01) {
  const _0x456cf4 = _0x146931,
    _0x4367ad = bootstrap[_0x456cf4(0x279)][_0x456cf4(0x481)](
      document[_0x456cf4(0x539)]("consultarTicketModal")
    );
  _0x4367ad && _0x4367ad[_0x456cf4(0x46f)](),
    typeof verTicket === _0x456cf4(0x4f6)
      ? verTicket(_0x506a01)
      : alert(_0x456cf4(0x1d9));
}
document[_0x146931(0x4a7)](_0x146931(0x304), function () {
  const _0x1a5e49 = _0x146931,
    _0x496e46 = document[_0x1a5e49(0x539)](_0x1a5e49(0x448));
  _0x496e46 &&
    _0x496e46[_0x1a5e49(0x4a7)]("keypress", function (_0x53accd) {
      const _0x17316b = _0x1a5e49;
      _0x53accd[_0x17316b(0x221)] === _0x17316b(0x4ac) &&
        (_0x53accd[_0x17316b(0x263)](), buscarTicket());
    });
}),
  (window[_0x146931(0x298)] = mostrarModalConsultarTicket),
  (window["buscarTicket"] = buscarTicket),
  (window[_0x146931(0x3da)] = verTicketCompleto);
function detenerScanner() {
  const _0x4acc42 = _0x146931;
  console[_0x4acc42(0x2db)](_0x4acc42(0x166)),
    html5QrCodeGlobal && scannerActivo
      ? html5QrCodeGlobal[_0x4acc42(0x508)]()
          [_0x4acc42(0x2dd)](() => {
            const _0x44a358 = _0x4acc42;
            (scannerActivo = ![]),
              html5QrCodeGlobal["clear"](),
              (html5QrCodeGlobal = null);
            const _0x4ecc4c = document["getElementById"]("reader"),
              _0x461288 = document[_0x44a358(0x539)]("ayuda"),
              _0x28a8d4 = document[_0x44a358(0x539)]("codigo");
            if (_0x4ecc4c)
              _0x4ecc4c[_0x44a358(0x4e8)][_0x44a358(0x43c)] = _0x44a358(0x3a6);
            if (_0x461288)
              _0x461288[_0x44a358(0x4e8)][_0x44a358(0x43c)] = _0x44a358(0x3a6);
            if (_0x28a8d4) _0x28a8d4[_0x44a358(0x522)] = _0x44a358(0x158);
            const _0xbdba1f = document[_0x44a358(0x539)](_0x44a358(0x262));
            _0xbdba1f && (_0xbdba1f[_0x44a358(0x1ba)] = ""), renderHistorial();
          })
          [_0x4acc42(0x2c7)]((_0x161568) => {
            const _0x4adb24 = _0x4acc42;
            console[_0x4adb24(0x233)](_0x4adb24(0x48c), _0x161568),
              (scannerActivo = ![]),
              (html5QrCodeGlobal = null);
          })
      : (console[_0x4acc42(0x2db)](_0x4acc42(0x2ed)),
        (scannerActivo = ![]),
        (html5QrCodeGlobal = null));
}
function cerrarCamaraAlAbrirModal(_0x27f8c2 = "modal") {
  const _0x39c455 = _0x146931;
  html5QrCodeGlobal &&
    scannerActivo &&
    (console[_0x39c455(0x2db)](_0x39c455(0x513) + _0x27f8c2), detenerScanner());
}
window[_0x146931(0x27c)] = detenerScanner;
function configurarFileInput() {
  const _0x24c61f = _0x146931,
    _0x3cb824 = document[_0x24c61f(0x539)](_0x24c61f(0x1d0)),
    _0x35abad = document[_0x24c61f(0x360)](_0x24c61f(0x516));
  _0x3cb824 &&
    _0x35abad &&
    ((_0x3cb824[_0x24c61f(0x4e8)][_0x24c61f(0x39a)] = _0x24c61f(0x41d)),
    _0x35abad[_0x24c61f(0x4a7)](
      _0x24c61f(0x2ca),
      function (_0x413174) {
        const _0x434a47 = _0x24c61f;
        _0x413174[_0x434a47(0x263)](),
          _0x413174[_0x434a47(0x37c)](),
          _0x3cb824[_0x434a47(0x2ca)]();
      },
      { capture: !![], passive: ![] }
    ),
    console[_0x24c61f(0x2db)](_0x24c61f(0x43f)));
}
document[_0x146931(0x4a1)] === "loading"
  ? document[_0x146931(0x4a7)](_0x146931(0x304), configurarFileInput)
  : configurarFileInput();
