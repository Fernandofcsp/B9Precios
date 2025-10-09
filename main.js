const _0x5637fc = _0xc683;
(function (_0x549bf2, _0xa3e147) {
  const _0x27439c = _0xc683,
    _0x184740 = _0x549bf2();
  while (!![]) {
    try {
      const _0x3600dd =
        (-parseInt(_0x27439c(0x461)) / 0x1) *
          (parseInt(_0x27439c(0x303)) / 0x2) +
        (parseInt(_0x27439c(0x426)) / 0x3) *
          (parseInt(_0x27439c(0x200)) / 0x4) +
        (parseInt(_0x27439c(0x21a)) / 0x5) *
          (parseInt(_0x27439c(0x534)) / 0x6) +
        (parseInt(_0x27439c(0x598)) / 0x7) *
          (parseInt(_0x27439c(0x3e0)) / 0x8) +
        -parseInt(_0x27439c(0x24a)) / 0x9 +
        (parseInt(_0x27439c(0x41e)) / 0xa) *
          (-parseInt(_0x27439c(0x3e5)) / 0xb) +
        parseInt(_0x27439c(0x440)) / 0xc;
      if (_0x3600dd === _0xa3e147) break;
      else _0x184740["push"](_0x184740["shift"]());
    } catch (_0x2d3a64) {
      _0x184740["push"](_0x184740["shift"]());
    }
  }
})(_0x4c28, 0x4c739),
  document["addEventListener"](_0x5637fc(0x1e7), function () {
    const _0x2b9b38 = _0x5637fc;
    console[_0x2b9b38(0x3dd)](_0x2b9b38(0x463));
  });
const form = document["getElementById"](_0x5637fc(0x455)),
  inputCodigo = document[_0x5637fc(0x4a4)](_0x5637fc(0x531)),
  readerDiv = document[_0x5637fc(0x4a4)](_0x5637fc(0x35c)),
  ayudaTexto = document["getElementById"](_0x5637fc(0x587)),
  installBtn = document[_0x5637fc(0x4a4)](_0x5637fc(0x51d));
(!form || !inputCodigo) &&
  console[_0x5637fc(0x585)](
    "❌\x20Elementos\x20críticos\x20no\x20encontrados:",
    { form: !!form, inputCodigo: !!inputCodigo }
  );
inputCodigo &&
  (inputCodigo[_0x5637fc(0x3e2)](_0x5637fc(0x4c1), _0x5637fc(0x5d8)),
  inputCodigo["setAttribute"]("spellcheck", _0x5637fc(0x347)),
  inputCodigo[_0x5637fc(0x3e2)](_0x5637fc(0x40b), "off"));
function _0xc683(_0x1f430a, _0x556331) {
  const _0x4c2800 = _0x4c28();
  return (
    (_0xc683 = function (_0xc683e0, _0x1a133e) {
      _0xc683e0 = _0xc683e0 - 0x1dd;
      let _0x4226c9 = _0x4c2800[_0xc683e0];
      return _0x4226c9;
    }),
    _0xc683(_0x1f430a, _0x556331)
  );
}
inputCodigo[_0x5637fc(0x3e2)](_0x5637fc(0x1e3), "off"),
  inputCodigo[_0x5637fc(0x3e2)](_0x5637fc(0x4cb), "other"),
  form[_0x5637fc(0x3e2)](_0x5637fc(0x4c1), _0x5637fc(0x5d8));
let scannerActivo = ![],
  html5QrCodeGlobal = null,
  ultimoCodigoEscaneado = "",
  ultimoTiempoEscaneo = 0x0;
const INTERVALO_ESCANEO = 0x1388;
let deferredPrompt,
  puedeEscanear = !![],
  datosYaCargados = ![];
if (!window["JsBarcode"]) {
  const script = document[_0x5637fc(0x4ba)](_0x5637fc(0x496));
  (script[_0x5637fc(0x2e3)] =
    "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"),
    (script[_0x5637fc(0x469)] = !![]),
    document[_0x5637fc(0x333)][_0x5637fc(0x26f)](script);
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
    const _0x194b62 = _0x5637fc;
    (this[_0x194b62(0x2e4)] = "googleVisionUsage"), this[_0x194b62(0x40c)]();
  }
  ["loadUsage"]() {
    const _0x1e87f6 = _0x5637fc,
      _0x4e767b = localStorage[_0x1e87f6(0x3cc)](this["storageKey"]);
    _0x4e767b
      ? (this[_0x1e87f6(0x1ea)] = JSON[_0x1e87f6(0x242)](_0x4e767b))
      : this[_0x1e87f6(0x43c)]();
    const _0x3b12f7 = new Date()[_0x1e87f6(0x23c)]();
    this[_0x1e87f6(0x1ea)]["month"] !== _0x3b12f7 && this[_0x1e87f6(0x43c)]();
  }
  [_0x5637fc(0x43c)]() {
    const _0x22c77e = _0x5637fc;
    (this[_0x22c77e(0x1ea)] = {
      month: new Date()["getMonth"](),
      year: new Date()["getFullYear"](),
      monthlyCount: 0x0,
      dailyCount: 0x0,
      lastUsedDate: new Date()[_0x22c77e(0x5db)](),
      history: [],
    }),
      this[_0x22c77e(0x3f3)]();
  }
  ["saveUsage"]() {
    const _0x42889d = _0x5637fc;
    localStorage[_0x42889d(0x4c7)](
      this[_0x42889d(0x2e4)],
      JSON[_0x42889d(0x1e2)](this[_0x42889d(0x1ea)])
    );
  }
  [_0x5637fc(0x2c5)]() {
    const _0x35dc17 = _0x5637fc,
      _0x189520 = new Date()[_0x35dc17(0x5db)]();
    this[_0x35dc17(0x1ea)][_0x35dc17(0x41d)] !== _0x189520 &&
      ((this[_0x35dc17(0x1ea)]["dailyCount"] = 0x0),
      (this[_0x35dc17(0x1ea)]["lastUsedDate"] = _0x189520),
      this[_0x35dc17(0x3f3)]());
    const _0x30d174 =
        this[_0x35dc17(0x1ea)][_0x35dc17(0x4dc)] <
        GOOGLE_VISION_CONFIG[_0x35dc17(0x516)],
      _0x2d5820 =
        this[_0x35dc17(0x1ea)][_0x35dc17(0x331)] <
        GOOGLE_VISION_CONFIG[_0x35dc17(0x41c)];
    return _0x30d174 && _0x2d5820;
  }
  [_0x5637fc(0x5dc)]() {
    const _0x210dac = _0x5637fc;
    this[_0x210dac(0x1ea)][_0x210dac(0x4dc)]++,
      this[_0x210dac(0x1ea)][_0x210dac(0x331)]++,
      this["usage"][_0x210dac(0x3de)]["push"]({
        date: new Date()[_0x210dac(0x3d8)](),
        count: this[_0x210dac(0x1ea)]["monthlyCount"],
      }),
      this[_0x210dac(0x1ea)][_0x210dac(0x3de)]["length"] > 0x32 &&
        (this[_0x210dac(0x1ea)][_0x210dac(0x3de)] =
          this[_0x210dac(0x1ea)][_0x210dac(0x3de)][_0x210dac(0x447)](-0x32)),
      this["saveUsage"]();
  }
  [_0x5637fc(0x583)]() {
    const _0x94b768 = _0x5637fc;
    return {
      monthlyUsed: this["usage"]["monthlyCount"],
      monthlyLimit: GOOGLE_VISION_CONFIG[_0x94b768(0x516)],
      dailyUsed: this[_0x94b768(0x1ea)][_0x94b768(0x331)],
      dailyLimit: GOOGLE_VISION_CONFIG[_0x94b768(0x41c)],
      remainingMonthly:
        GOOGLE_VISION_CONFIG[_0x94b768(0x516)] -
        this[_0x94b768(0x1ea)][_0x94b768(0x4dc)],
      remainingDaily:
        GOOGLE_VISION_CONFIG[_0x94b768(0x41c)] - this["usage"]["dailyCount"],
      canUse: this["canUseAPI"](),
    };
  }
  ["showUsageWarning"]() {
    const _0xbc7c0e = _0x5637fc,
      _0x49e248 = this[_0xbc7c0e(0x583)]();
    if (_0x49e248[_0xbc7c0e(0x3b6)] >= GOOGLE_VISION_CONFIG[_0xbc7c0e(0x335)])
      return (
        _0xbc7c0e(0x357) +
        _0x49e248[_0xbc7c0e(0x3b6)] +
        "/" +
        _0x49e248["monthlyLimit"] +
        _0xbc7c0e(0x42b)
      );
    if (
      _0x49e248[_0xbc7c0e(0x526)] >=
      GOOGLE_VISION_CONFIG[_0xbc7c0e(0x41c)] * 0.8
    )
      return (
        _0xbc7c0e(0x4fa) +
        _0x49e248[_0xbc7c0e(0x526)] +
        "/" +
        _0x49e248["dailyLimit"] +
        _0xbc7c0e(0x4c8)
      );
    return null;
  }
}
const visionUsageTracker = new GoogleVisionUsageTracker();
async function detectarConGoogleVision(_0x25285d) {
  const _0xb09795 = _0x5637fc;
  console[_0xb09795(0x3dd)](_0xb09795(0x414));
  const _0x3bd103 = document["createElement"](_0xb09795(0x3a2)),
    _0x4f4456 = _0x3bd103[_0xb09795(0x435)]("2d");
  let { width: _0xd013e4, height: _0x3692bb } = _0x25285d;
  const _0x54851c = 0x400;
  if (_0xd013e4 > _0x54851c || _0x3692bb > _0x54851c) {
    const _0x17f11c = Math[_0xb09795(0x403)](
      _0x54851c / _0xd013e4,
      _0x54851c / _0x3692bb
    );
    (_0xd013e4 *= _0x17f11c), (_0x3692bb *= _0x17f11c);
  }
  (_0x3bd103[_0xb09795(0x512)] = _0xd013e4),
    (_0x3bd103[_0xb09795(0x40f)] = _0x3692bb),
    _0x4f4456[_0xb09795(0x4bf)](_0x25285d, 0x0, 0x0, _0xd013e4, _0x3692bb);
  const _0x206576 = _0x3bd103[_0xb09795(0x24c)](_0xb09795(0x3f1), 0.9);
  console[_0xb09795(0x3dd)]("📡\x20Enviando\x20a\x20backend\x20proxy...");
  try {
    const _0x51f379 = await fetch(_0xb09795(0x539), {
      method: "POST",
      headers: { "Content-Type": _0xb09795(0x3f4) },
      body: JSON[_0xb09795(0x1e2)]({
        image: _0x206576,
        userAgent: navigator[_0xb09795(0x3c8)]["substring"](0x0, 0x32),
        timestamp: new Date()[_0xb09795(0x3d8)](),
      }),
    });
    if (!_0x51f379["ok"]) {
      const _0x2cd7b5 = await _0x51f379[_0xb09795(0x422)]();
      throw new Error(
        "Backend\x20error:\x20" +
          _0x51f379[_0xb09795(0x54f)] +
          _0xb09795(0x55c) +
          _0x2cd7b5
      );
    }
    const _0x138d64 = await _0x51f379[_0xb09795(0x48c)]();
    console[_0xb09795(0x3dd)](_0xb09795(0x378), _0x138d64);
    if (_0x138d64["success"])
      return (
        visionUsageTracker[_0xb09795(0x5dc)](),
        console[_0xb09795(0x3dd)](_0xb09795(0x563)),
        console[_0xb09795(0x3dd)](_0xb09795(0x344)),
        extraerCodigoDeTexto(_0x138d64[_0xb09795(0x42a)])
      );
    else
      throw new Error(
        _0x138d64[_0xb09795(0x585)] || "Error\x20en\x20detección"
      );
  } catch (_0x1fa986) {
    console[_0xb09795(0x3dd)](_0xb09795(0x4f9), _0x1fa986[_0xb09795(0x2ee)]);
    if (_0x1fa986[_0xb09795(0x2ee)][_0xb09795(0x5c8)](_0xb09795(0x3ca)))
      console[_0xb09795(0x3dd)](_0xb09795(0x3e9)),
        console[_0xb09795(0x3dd)](_0xb09795(0x285)),
        console[_0xb09795(0x3dd)](_0xb09795(0x43e)),
        console[_0xb09795(0x3dd)](_0xb09795(0x29f)),
        console[_0xb09795(0x3dd)](_0xb09795(0x3b8)),
        console[_0xb09795(0x3dd)](_0xb09795(0x361));
    else {
      if (
        _0x1fa986[_0xb09795(0x2ee)][_0xb09795(0x5c8)](_0xb09795(0x3b1)) ||
        _0x1fa986["message"]["includes"]("Failed\x20to\x20fetch") ||
        _0x1fa986["message"][_0xb09795(0x5c8)]("NetworkError")
      )
        throw new Error(_0xb09795(0x2a1));
    }
    throw _0x1fa986;
  }
}
function extraerCodigoDeTexto(_0x5ef888) {
  const _0xf5709e = _0x5637fc,
    _0x433722 = _0x5ef888[_0xf5709e(0x5bd)][0x0]?.[_0xf5709e(0x437)] || [];
  if (_0x433722[_0xf5709e(0x2b6)] === 0x0)
    return console[_0xf5709e(0x3dd)](_0xf5709e(0x5b4)), null;
  const _0x1d8e4f = _0x433722[0x0]?.[_0xf5709e(0x26d)] || "";
  console["log"](_0xf5709e(0x235), _0x1d8e4f);
  const _0x36171d = [
    /\b(\d{13})\b/g,
    /\b(\d{12})\b/g,
    /\b(\d{8})\b/g,
    /\b(\d{6,8})\b/g,
    /\b([A-Z0-9\-]{4,20})\b/g,
  ];
  for (const _0x3f6802 of _0x36171d) {
    const _0x6175a2 = [..._0x1d8e4f[_0xf5709e(0x3db)](_0x3f6802)];
    for (const _0x40d7cd of _0x6175a2) {
      const _0x2d32b2 = _0x40d7cd[0x1][_0xf5709e(0x410)]();
      console[_0xf5709e(0x3dd)](_0xf5709e(0x28c) + _0x2d32b2);
      if (validarCodigoPorLongitud(_0x2d32b2))
        return (
          console[_0xf5709e(0x3dd)](_0xf5709e(0x20f) + _0x2d32b2), _0x2d32b2
        );
    }
  }
  return console[_0xf5709e(0x3dd)](_0xf5709e(0x232)), null;
}
function validarCodigoPorLongitud(_0x709ce9) {
  const _0x41bbcc = _0x5637fc;
  if (/^\d{13}$/[_0x41bbcc(0x453)](_0x709ce9)) return !![];
  if (/^\d{12}$/["test"](_0x709ce9)) return !![];
  if (/^\d{8}$/["test"](_0x709ce9)) return !![];
  if (/^\d{6,8}$/["test"](_0x709ce9)) return !![];
  if (
    /^[A-Z0-9\-]{4,20}$/["test"](_0x709ce9) &&
    _0x709ce9[_0x41bbcc(0x2b6)] >= 0x4
  )
    return !![];
  return ![];
}
async function diagnosticarBackend() {
  const _0x212db3 = _0x5637fc;
  console[_0x212db3(0x3dd)](_0x212db3(0x329));
  const _0x4183f0 = document[_0x212db3(0x4a4)](_0x212db3(0x55d));
  _0x4183f0 &&
    (_0x4183f0[_0x212db3(0x37f)] =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20spinner-border-sm\x20me-2\x22\x20role=\x22status\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Diagnosticando\x20backend...\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
  let _0x41203f = "";
  try {
    const _0x5a3e60 = await fetch(_0x212db3(0x45f));
    if (_0x5a3e60["ok"]) {
      console[_0x212db3(0x3dd)](_0x212db3(0x48b));
      const _0x235f8b = await _0x5a3e60["json"]();
      console[_0x212db3(0x3dd)]("📊\x20Estadísticas:", _0x235f8b),
        (_0x41203f +=
          "<div\x20class=\x22alert\x20alert-success\x22>✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente</div>");
    } else
      console[_0x212db3(0x3dd)](
        "❌\x20Endpoint\x20/api/stats\x20falló:",
        _0x5a3e60[_0x212db3(0x54f)]
      ),
        (_0x41203f +=
          _0x212db3(0x203) + _0x5a3e60[_0x212db3(0x54f)] + _0x212db3(0x216));
    console[_0x212db3(0x3dd)](_0x212db3(0x2ec));
    const _0x5c1633 = await fetch(
        "https://contador-apicloudvision.vercel.app/api/vision-detect",
        {
          method: _0x212db3(0x1f0),
          headers: { "Content-Type": "application/json" },
          body: JSON[_0x212db3(0x1e2)]({
            image: _0x212db3(0x326),
            userId: _0x212db3(0x5bf),
          }),
        }
      ),
      _0x4ff116 = await _0x5c1633[_0x212db3(0x48c)]();
    console[_0x212db3(0x3dd)](_0x212db3(0x2a8), _0x4ff116),
      console["log"](_0x212db3(0x376), _0x5c1633["status"]);
    if (_0x5c1633[_0x212db3(0x54f)] === 0x1f4) {
      console[_0x212db3(0x3dd)](_0x212db3(0x2eb));
      if (_0x4ff116[_0x212db3(0x46a)]) {
        if (_0x4ff116["details"][_0x212db3(0x5c8)](_0x212db3(0x226)))
          console["log"](
            "🏦\x20PROBLEMA:\x20Facturación\x20no\x20habilitada\x20en\x20el\x20proyecto\x20correcto"
          ),
            console["log"](_0x212db3(0x59f)),
            console[_0x212db3(0x3dd)](_0x212db3(0x45d)),
            (_0x41203f += _0x212db3(0x5d1));
        else {
          if (_0x4ff116[_0x212db3(0x46a)][_0x212db3(0x5c8)](_0x212db3(0x3fd)))
            console[_0x212db3(0x3dd)](
              "🔑\x20PROBLEMA:\x20API\x20Key\x20inválida"
            ),
              (_0x41203f += _0x212db3(0x52e));
          else
            _0x4ff116[_0x212db3(0x46a)]["includes"](_0x212db3(0x540))
              ? (console[_0x212db3(0x3dd)](_0x212db3(0x4a7)),
                console["log"](_0x212db3(0x221)),
                (_0x41203f +=
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🚫\x20Vision\x20API\x20No\x20Habilitada</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20Vision\x20API\x20no\x20está\x20habilitada\x20en\x20tu\x20proyecto</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/apis/library/vision.googleapis.com\x22\x20target=\x22_blank\x22>Habilitar\x20Vision\x20API</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"))
              : (console["log"](_0x212db3(0x45b)),
                console[_0x212db3(0x3dd)](
                  _0x212db3(0x44c),
                  _0x4ff116[_0x212db3(0x46a)]
                ),
                (_0x41203f += _0x212db3(0x57d)));
        }
      }
    } else
      _0x5c1633["status"] === 0xc8 &&
        (console[_0x212db3(0x3dd)](
          "🎉\x20¡Google\x20Vision\x20API\x20funcionando\x20correctamente!"
        ),
        (_0x41203f += _0x212db3(0x3fa)));
  } catch (_0x5aa9db) {
    console[_0x212db3(0x3dd)](_0x212db3(0x536), _0x5aa9db[_0x212db3(0x2ee)]),
      _0x5aa9db[_0x212db3(0x2ee)]["includes"](_0x212db3(0x3b1))
        ? (console[_0x212db3(0x3dd)](_0x212db3(0x2d7)),
          (_0x41203f += _0x212db3(0x2d5)))
        : (_0x41203f +=
            _0x212db3(0x548) + _0x5aa9db[_0x212db3(0x2ee)] + _0x212db3(0x216));
  }
  _0x4183f0 && (_0x4183f0[_0x212db3(0x37f)] = _0x41203f);
}
async function verificarBackend() {
  const _0x2157fe = _0x5637fc;
  try {
    const _0x4cdd7b = await fetch(_0x2157fe(0x45f), {
      method: _0x2157fe(0x500),
      headers: { "Content-Type": _0x2157fe(0x3f4) },
    });
    if (_0x4cdd7b["ok"]) {
      const _0x5d27d2 = await _0x4cdd7b[_0x2157fe(0x48c)]();
      return (
        console["log"](_0x2157fe(0x529), _0x5d27d2),
        { activo: !![], stats: _0x5d27d2, mensaje: _0x2157fe(0x3a7) }
      );
    } else
      return (
        console[_0x2157fe(0x3dd)](
          _0x2157fe(0x546),
          _0x4cdd7b[_0x2157fe(0x54f)]
        ),
        { activo: ![], mensaje: _0x2157fe(0x3d3) + _0x4cdd7b[_0x2157fe(0x54f)] }
      );
  } catch (_0x233ef1) {
    return (
      console["log"](_0x2157fe(0x595), _0x233ef1["message"]),
      {
        activo: ![],
        mensaje:
          "Backend\x20no\x20disponible\x20-\x20usando\x20detección\x20local",
      }
    );
  }
}
async function mostrarEstadisticasUso() {
  const _0x4c5c4f = _0x5637fc,
    _0x5a6171 = visionUsageTracker["getUsageStatus"](),
    _0x4f69ec = visionUsageTracker[_0x4c5c4f(0x523)]();
  let _0x1f74ba = _0x4c5c4f(0x3c6);
  (_0x1f74ba +=
    "•\x20Mensual:\x20" +
    _0x5a6171["monthlyUsed"] +
    "/" +
    _0x5a6171[_0x4c5c4f(0x516)] +
    _0x4c5c4f(0x3ae) +
    _0x5a6171[_0x4c5c4f(0x50b)] +
    ")<br>"),
    (_0x1f74ba +=
      _0x4c5c4f(0x406) +
      _0x5a6171[_0x4c5c4f(0x526)] +
      "/" +
      _0x5a6171[_0x4c5c4f(0x41c)] +
      _0x4c5c4f(0x3ae) +
      _0x5a6171["remainingDaily"] +
      ")");
  _0x4f69ec && (_0x1f74ba += _0x4c5c4f(0x277) + _0x4f69ec);
  if (GOOGLE_VISION_CONFIG["enabled"])
    try {
      const _0x41df7a = await verificarBackend();
      _0x1f74ba +=
        "<br><br>🌐\x20<strong>Backend:</strong>\x20" +
        _0x41df7a[_0x4c5c4f(0x382)];
    } catch (_0x455a31) {
      _0x1f74ba += _0x4c5c4f(0x40a);
    }
  return _0x1f74ba;
}
function setCookie(_0x5bc1dc, _0x18373a, _0x370751) {
  const _0x579b1f = _0x5637fc,
    _0x505893 = new Date(
      Date["now"]() + _0x370751 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x579b1f(0x324)]();
  document[_0x579b1f(0x23a)] =
    _0x5bc1dc +
    "=" +
    encodeURIComponent(_0x18373a) +
    ";\x20expires=" +
    _0x505893 +
    _0x579b1f(0x58f);
}
function getCookie(_0x170f5b) {
  const _0xcc15b1 = _0x5637fc,
    _0x4fa779 = ";\x20" + document[_0xcc15b1(0x23a)],
    _0xd12d20 = _0x4fa779[_0xcc15b1(0x567)](";\x20" + _0x170f5b + "=");
  if (_0xd12d20["length"] === 0x2)
    return decodeURIComponent(
      _0xd12d20[_0xcc15b1(0x204)]()[_0xcc15b1(0x567)](";")[_0xcc15b1(0x30d)]()
    );
  return null;
}
const historialDiv = document["getElementById"]("historial"),
  resultadoDiv = document[_0x5637fc(0x4a4)](_0x5637fc(0x2fc)),
  DB_NAME = _0x5637fc(0x5b1),
  DB_STORE = _0x5637fc(0x211),
  DB_STORE_PROMOCIONES = "promociones";
let db;
function openDB() {
  return new Promise((_0x36297c, _0x4fa8c9) => {
    const _0x4a7085 = _0xc683,
      _0x554e99 = indexedDB["open"](DB_NAME, 0x2);
    (_0x554e99[_0x4a7085(0x271)] = function (_0xb89218) {
      const _0xa05e38 = _0x4a7085;
      (db = _0xb89218[_0xa05e38(0x494)]["result"]),
        !db[_0xa05e38(0x24d)]["contains"](DB_STORE) &&
          db[_0xa05e38(0x4df)](DB_STORE, {
            keyPath: "id",
            autoIncrement: !![],
          }),
        !db[_0xa05e38(0x24d)]["contains"](DB_STORE_PROMOCIONES) &&
          db[_0xa05e38(0x4df)](DB_STORE_PROMOCIONES, {
            keyPath: "id",
            autoIncrement: !![],
          });
    }),
      (_0x554e99["onsuccess"] = function (_0x24f184) {
        const _0x1b04b4 = _0x4a7085;
        (db = _0x24f184["target"][_0x1b04b4(0x3cf)]), _0x36297c(db);
      }),
      (_0x554e99[_0x4a7085(0x1eb)] = function (_0x1ec8cf) {
        _0x4fa8c9(_0x1ec8cf);
      });
  });
}
function clearProductos() {
  const _0x5edbbb = _0x5637fc;
  return openDB()[_0x5edbbb(0x1dd)]((_0x1adfd2) => {
    return new Promise((_0x11cfaf, _0x657ae5) => {
      const _0x286441 = _0xc683,
        _0x4e054a = _0x1adfd2[_0x286441(0x593)](DB_STORE, _0x286441(0x2b3));
      _0x4e054a[_0x286441(0x5ca)](DB_STORE)[_0x286441(0x492)](),
        (_0x4e054a[_0x286441(0x215)] = _0x11cfaf),
        (_0x4e054a[_0x286441(0x1eb)] = _0x657ae5);
    });
  });
}
function saveProductos(_0x333ce4) {
  const _0x38c3b5 = _0x5637fc;
  return openDB()[_0x38c3b5(0x1dd)]((_0x173844) => {
    return new Promise((_0x57c0b0, _0x50aaad) => {
      const _0x4ecbdd = _0xc683,
        _0x42ae42 = _0x173844[_0x4ecbdd(0x593)](DB_STORE, _0x4ecbdd(0x2b3)),
        _0x45a008 = _0x42ae42["objectStore"](DB_STORE);
      _0x333ce4[_0x4ecbdd(0x2bf)]((_0x1f2cd7) => _0x45a008["add"](_0x1f2cd7)),
        (_0x42ae42[_0x4ecbdd(0x215)] = _0x57c0b0),
        (_0x42ae42["onerror"] = _0x50aaad);
    });
  });
}
function getAllProductos() {
  return openDB()["then"]((_0x400087) => {
    return new Promise((_0x40b1d8, _0x591f42) => {
      const _0x10fa94 = _0xc683,
        _0x248326 = _0x400087[_0x10fa94(0x593)](DB_STORE, "readonly"),
        _0x5c27eb = _0x248326[_0x10fa94(0x5ca)](DB_STORE),
        _0x1660a6 = _0x5c27eb["getAll"]();
      (_0x1660a6["onsuccess"] = () => _0x40b1d8(_0x1660a6[_0x10fa94(0x3cf)])),
        (_0x1660a6[_0x10fa94(0x1eb)] = _0x591f42);
    });
  });
}
function clearPromociones() {
  const _0x452028 = _0x5637fc;
  return openDB()[_0x452028(0x1dd)]((_0x4c97ac) => {
    return new Promise((_0x2c45e0, _0x486e56) => {
      const _0x5490a8 = _0xc683,
        _0x2ae073 = _0x4c97ac[_0x5490a8(0x593)](
          DB_STORE_PROMOCIONES,
          _0x5490a8(0x2b3)
        );
      _0x2ae073["objectStore"](DB_STORE_PROMOCIONES)[_0x5490a8(0x492)](),
        (_0x2ae073[_0x5490a8(0x215)] = _0x2c45e0),
        (_0x2ae073["onerror"] = _0x486e56);
    });
  });
}
function savePromociones(_0x43e07e) {
  return openDB()["then"]((_0x146175) => {
    return new Promise((_0x10372c, _0x3ac826) => {
      const _0x2a069f = _0xc683,
        _0x200b1b = _0x146175[_0x2a069f(0x593)](
          DB_STORE_PROMOCIONES,
          _0x2a069f(0x2b3)
        ),
        _0x5c1c8d = _0x200b1b["objectStore"](DB_STORE_PROMOCIONES);
      _0x43e07e[_0x2a069f(0x2bf)]((_0x39118c) =>
        _0x5c1c8d[_0x2a069f(0x289)](_0x39118c)
      ),
        (_0x200b1b[_0x2a069f(0x215)] = _0x10372c),
        (_0x200b1b[_0x2a069f(0x1eb)] = _0x3ac826);
    });
  });
}
function getAllPromociones() {
  const _0x5929f2 = _0x5637fc;
  return openDB()[_0x5929f2(0x1dd)]((_0x27c597) => {
    return new Promise((_0x7b4827, _0x57dbd4) => {
      const _0x1bd9ba = _0xc683,
        _0x546933 = _0x27c597[_0x1bd9ba(0x593)](
          DB_STORE_PROMOCIONES,
          _0x1bd9ba(0x29b)
        ),
        _0x5b21aa = _0x546933["objectStore"](DB_STORE_PROMOCIONES),
        _0x1372f0 = _0x5b21aa["getAll"]();
      (_0x1372f0[_0x1bd9ba(0x504)] = () => _0x7b4827(_0x1372f0["result"])),
        (_0x1372f0[_0x1bd9ba(0x1eb)] = _0x57dbd4);
    });
  });
}
const sugerenciasDiv = document[_0x5637fc(0x4ba)]("div");
(sugerenciasDiv["id"] = _0x5637fc(0x591)),
  (sugerenciasDiv[_0x5637fc(0x3c9)] = _0x5637fc(0x28e)),
  (sugerenciasDiv[_0x5637fc(0x342)][_0x5637fc(0x31a)] = _0x5637fc(0x372)),
  (sugerenciasDiv[_0x5637fc(0x342)][_0x5637fc(0x284)] = _0x5637fc(0x31d)),
  (sugerenciasDiv[_0x5637fc(0x342)][_0x5637fc(0x4c5)] = _0x5637fc(0x1ec)),
  (sugerenciasDiv["style"]["top"] = "100%"),
  (sugerenciasDiv[_0x5637fc(0x342)]["left"] = "0"),
  (sugerenciasDiv[_0x5637fc(0x342)][_0x5637fc(0x3e7)] = "0"),
  (inputCodigo["parentNode"][_0x5637fc(0x342)][_0x5637fc(0x1ef)] =
    _0x5637fc(0x502)),
  inputCodigo[_0x5637fc(0x4e4)][_0x5637fc(0x26f)](sugerenciasDiv);
const actualizarDiv = document[_0x5637fc(0x4ba)]("div");
(actualizarDiv[_0x5637fc(0x3c9)] = _0x5637fc(0x36c)),
  (actualizarDiv[_0x5637fc(0x37f)] = _0x5637fc(0x421)),
  historialDiv[_0x5637fc(0x4e4)][_0x5637fc(0x438)](actualizarDiv, historialDiv);
const resultadosModalHTML = _0x5637fc(0x501);
document["body"]["insertAdjacentHTML"]("beforeend", resultadosModalHTML);
let busquedaOriginalItems = [],
  busquedaTimeout = null,
  resultadosBusquedaState = {
    items: [],
    page: 0x1,
    pageSize: 0xa,
    query: "",
    originalQuery: "",
    view: _0x5637fc(0x3f7),
  };
function distanciaLevenshtein(_0x2624ac, _0x147b98) {
  const _0x18797f = _0x5637fc;
  if (_0x2624ac[_0x18797f(0x2b6)] === 0x0) return _0x147b98[_0x18797f(0x2b6)];
  if (_0x147b98[_0x18797f(0x2b6)] === 0x0) return _0x2624ac[_0x18797f(0x2b6)];
  const _0x28c4b3 = Array(_0x147b98[_0x18797f(0x2b6)] + 0x1)
    [_0x18797f(0x2a5)](null)
    [_0x18797f(0x20d)](() =>
      Array(_0x2624ac[_0x18797f(0x2b6)] + 0x1)[_0x18797f(0x2a5)](null)
    );
  for (let _0x1c7fca = 0x0; _0x1c7fca <= _0x2624ac["length"]; _0x1c7fca++)
    _0x28c4b3[0x0][_0x1c7fca] = _0x1c7fca;
  for (
    let _0x2c7a7b = 0x0;
    _0x2c7a7b <= _0x147b98[_0x18797f(0x2b6)];
    _0x2c7a7b++
  )
    _0x28c4b3[_0x2c7a7b][0x0] = _0x2c7a7b;
  for (let _0x135938 = 0x1; _0x135938 <= _0x147b98["length"]; _0x135938++) {
    for (let _0x468c83 = 0x1; _0x468c83 <= _0x2624ac["length"]; _0x468c83++) {
      const _0xc82419 =
        _0x2624ac[_0x468c83 - 0x1] === _0x147b98[_0x135938 - 0x1] ? 0x0 : 0x1;
      _0x28c4b3[_0x135938][_0x468c83] = Math["min"](
        _0x28c4b3[_0x135938][_0x468c83 - 0x1] + 0x1,
        _0x28c4b3[_0x135938 - 0x1][_0x468c83] + 0x1,
        _0x28c4b3[_0x135938 - 0x1][_0x468c83 - 0x1] + _0xc82419
      );
    }
  }
  return _0x28c4b3[_0x147b98["length"]][_0x2624ac["length"]];
}
function calcularPuntuacionFuzzy(_0x2b935a, _0x301326) {
  const _0x131d35 = _0x5637fc;
  if (!_0x301326 || _0x301326[_0x131d35(0x410)]() === "") return 0x1;
  const _0x536877 = _0x301326[_0x131d35(0x325)]()[_0x131d35(0x410)](),
    _0x44de9d = _0x536877[_0x131d35(0x567)](/\s+/),
    _0x5c93c1 = (_0x2b935a[_0x131d35(0x244)] || "")[_0x131d35(0x325)](),
    _0x14bd5b = (_0x2b935a[_0x131d35(0x4fc)] || "")
      [_0x131d35(0x4cd)]()
      [_0x131d35(0x325)](),
    _0x1b3cb3 = (_0x2b935a[_0x131d35(0x33d)] || "")
      [_0x131d35(0x4cd)]()
      ["toLowerCase"]();
  let _0x460984 = 0x0,
    _0x7e2e85 = 0x0;
  if (_0x14bd5b === _0x536877 || _0x1b3cb3 === _0x536877) return 0x64;
  if (_0x5c93c1 === _0x536877) return 0x5f;
  if (
    _0x14bd5b["startsWith"](_0x536877) ||
    _0x1b3cb3[_0x131d35(0x292)](_0x536877)
  )
    _0x460984 += 0x50;
  if (_0x5c93c1[_0x131d35(0x292)](_0x536877)) _0x460984 += 0x46;
  if (_0x14bd5b[_0x131d35(0x5c8)](_0x536877)) _0x460984 += 0x3c;
  if (_0x1b3cb3[_0x131d35(0x5c8)](_0x536877)) _0x460984 += 0x3c;
  if (_0x5c93c1[_0x131d35(0x5c8)](_0x536877)) _0x460984 += 0x32;
  for (const _0x4d672d of _0x44de9d) {
    if (_0x4d672d["length"] < 0x2) continue;
    _0x7e2e85 += 0xa;
    if (_0x5c93c1["includes"](_0x4d672d)) _0x460984 += 0x8;
    if (_0x14bd5b[_0x131d35(0x5c8)](_0x4d672d)) _0x460984 += 0xa;
    if (_0x1b3cb3[_0x131d35(0x5c8)](_0x4d672d)) _0x460984 += 0xa;
    if (_0x4d672d[_0x131d35(0x2b6)] >= 0x3) {
      const _0x38bd9b = _0x5c93c1[_0x131d35(0x567)](/\s+/);
      for (const _0x15d042 of _0x38bd9b) {
        if (_0x15d042["length"] >= 0x3) {
          const _0x3127dc = distanciaLevenshtein(_0x4d672d, _0x15d042),
            _0x554199 =
              0x1 -
              _0x3127dc /
                Math[_0x131d35(0x542)](
                  _0x4d672d[_0x131d35(0x2b6)],
                  _0x15d042["length"]
                );
          _0x554199 > 0.7 &&
            ((_0x460984 += _0x554199 * 0x5), (_0x7e2e85 += 0x5));
        }
      }
    }
  }
  return Math[_0x131d35(0x403)](
    0x64,
    (_0x460984 / Math[_0x131d35(0x542)](0x1, _0x7e2e85)) * 0x64
  );
}
function busquedaInteligente(_0x15716e, _0x439bba) {
  const _0x1473d0 = _0x5637fc;
  if (!_0x439bba || _0x439bba["trim"]() === "") return _0x15716e;
  const _0x38b5ac = performance[_0x1473d0(0x363)](),
    _0x581925 = _0x15716e[_0x1473d0(0x20d)]((_0x31423e) => ({
      ..._0x31423e,
      puntuacion: calcularPuntuacionFuzzy(_0x31423e, _0x439bba),
    })),
    _0x37c32b = _0x581925[_0x1473d0(0x42c)](
      (_0x3f83f6) => _0x3f83f6[_0x1473d0(0x524)] > 0x0
    )["sort"](
      (_0x5ba40d, _0x18792d) =>
        _0x18792d["puntuacion"] - _0x5ba40d["puntuacion"]
    ),
    _0x4d735a = performance["now"](),
    _0x29ebab = Math["round"](_0x4d735a - _0x38b5ac),
    _0x2a474 = document["getElementById"](_0x1473d0(0x210));
  return _0x2a474 && (_0x2a474["textContent"] = _0x29ebab + "ms"), _0x37c32b;
}
function configurarEventosBusquedaModal() {
  const _0x1ef045 = _0x5637fc,
    _0x48a4b8 = document[_0x1ef045(0x4a4)](_0x1ef045(0x1e1)),
    _0xc0f396 = document[_0x1ef045(0x4a4)](_0x1ef045(0x4ae));
  console["log"](
    "🔧\x20Configurando\x20eventos\x20búsqueda\x20modal,\x20input\x20encontrado:",
    !!_0x48a4b8
  ),
    _0x48a4b8 &&
      (_0x48a4b8[_0x1ef045(0x22e)](_0x1ef045(0x581), window[_0x1ef045(0x1de)]),
      _0x48a4b8[_0x1ef045(0x22e)](_0x1ef045(0x4ca), window[_0x1ef045(0x4e7)]),
      (window["busquedaModalInputHandler"] = function (_0x1ba2de) {
        const _0x469c9a = _0x1ef045;
        console[_0x469c9a(0x3dd)](
          _0x469c9a(0x32c),
          _0x1ba2de["target"][_0x469c9a(0x2f6)]
        );
        if (busquedaTimeout) clearTimeout(busquedaTimeout);
        busquedaTimeout = setTimeout(() => {
          const _0x5d2747 = _0x469c9a;
          realizarBusquedaEnModal(
            _0x1ba2de[_0x5d2747(0x494)][_0x5d2747(0x2f6)]
          );
        }, 0xc8);
      }),
      (window[_0x1ef045(0x4e7)] = function (_0x5baea4) {
        const _0x33bd14 = _0x1ef045;
        _0x5baea4[_0x33bd14(0x52c)] === _0x33bd14(0x572) &&
          (console[_0x33bd14(0x3dd)](_0x33bd14(0x1ff)),
          (_0x5baea4["target"][_0x33bd14(0x2f6)] = ""),
          realizarBusquedaEnModal(""));
      }),
      _0x48a4b8[_0x1ef045(0x245)](_0x1ef045(0x581), window[_0x1ef045(0x1de)]),
      _0x48a4b8[_0x1ef045(0x245)](_0x1ef045(0x4ca), window[_0x1ef045(0x4e7)])),
    _0xc0f396 &&
      (_0xc0f396[_0x1ef045(0x22e)]("click", window[_0x1ef045(0x371)]),
      (window[_0x1ef045(0x371)] = function () {
        const _0x2655ea = _0x1ef045;
        console[_0x2655ea(0x3dd)]("🧹\x20Botón\x20limpiar\x20presionado"),
          _0x48a4b8 &&
            ((_0x48a4b8[_0x2655ea(0x2f6)] = ""),
            _0x48a4b8[_0x2655ea(0x274)](),
            realizarBusquedaEnModal(""));
      }),
      _0xc0f396[_0x1ef045(0x245)](
        "click",
        window["busquedaModalClearHandler"]
      ));
}
function realizarBusquedaEnModal(_0xfefe82) {
  const _0x44dcb7 = _0x5637fc;
  console[_0x44dcb7(0x3dd)](
    "🔍\x20Realizando\x20búsqueda\x20en\x20modal\x20con\x20query:",
    _0xfefe82
  );
  const _0x32c11c = performance[_0x44dcb7(0x363)]();
  let _0x20eda8 = busquedaOriginalItems || [];
  console[_0x44dcb7(0x3dd)](_0x44dcb7(0x3eb), _0x20eda8[_0x44dcb7(0x2b6)]);
  let _0x214b3b;
  !_0xfefe82 || _0xfefe82[_0x44dcb7(0x410)]() === ""
    ? ((_0x214b3b = _0x20eda8), console[_0x44dcb7(0x3dd)](_0x44dcb7(0x3b7)))
    : ((_0x214b3b = busquedaInteligente(_0x20eda8, _0xfefe82)),
      console[_0x44dcb7(0x3dd)](_0x44dcb7(0x4e2), _0x214b3b["length"]));
  const _0x6ea52f = performance["now"]() - _0x32c11c;
  actualizarContadoresBusqueda(
    _0x214b3b[_0x44dcb7(0x2b6)],
    _0x20eda8["length"],
    _0x6ea52f
  ),
    (resultadosBusquedaState["items"] = _0x214b3b),
    (resultadosBusquedaState["page"] = 0x1),
    (resultadosBusquedaState["query"] =
      _0xfefe82 || resultadosBusquedaState["originalQuery"] || ""),
    console[_0x44dcb7(0x3dd)](_0x44dcb7(0x596));
  if (typeof window[_0x44dcb7(0x39c)] === _0x44dcb7(0x4bb))
    window["renderResultadosBusqueda"]();
  else
    typeof renderResultadosBusqueda === _0x44dcb7(0x4bb)
      ? renderResultadosBusqueda()
      : console["error"](_0x44dcb7(0x26a));
}
function actualizarContadoresBusqueda(_0xc6ac47, _0x1d325f, _0x1d45b6) {
  const _0x31244c = _0x5637fc,
    _0x406c54 = document[_0x31244c(0x4a4)]("resultadosCount"),
    _0x50ab4a = document["getElementById"]("tiempoBusqueda");
  _0x406c54 &&
    (_0x406c54[_0x31244c(0x2fb)] =
      _0xc6ac47 + _0x31244c(0x489) + (_0xc6ac47 !== 0x1 ? "s" : "")),
    _0x50ab4a &&
      (_0x50ab4a[_0x31244c(0x2fb)] = _0x1d45b6["toFixed"](0x1) + "ms");
}
function resaltarCoincidencias(_0x40b879, _0x3d1cc3) {
  return _0x40b879;
}
function realizarBusquedaEnModal(_0x12dcee) {
  const _0x26b036 = _0x5637fc,
    _0x1cd5f5 = busquedaInteligente(busquedaOriginalItems, _0x12dcee);
  (resultadosBusquedaState[_0x26b036(0x218)] = _0x1cd5f5),
    (resultadosBusquedaState[_0x26b036(0x434)] = 0x1),
    (resultadosBusquedaState[_0x26b036(0x296)] =
      _0x12dcee || resultadosBusquedaState["originalQuery"] || "");
  const _0x36362f = document[_0x26b036(0x4a4)]("resultadosCount");
  _0x36362f &&
    (_0x36362f[_0x26b036(0x2fb)] =
      _0x1cd5f5[_0x26b036(0x2b6)] +
      _0x26b036(0x489) +
      (_0x1cd5f5["length"] !== 0x1 ? "s" : "")),
    renderResultadosBusqueda();
}
const btnActualizar = actualizarDiv["querySelector"](_0x5637fc(0x493)),
  btnPromociones = actualizarDiv["querySelector"]("#btnPromociones"),
  ultimaActualizacionSpan = actualizarDiv[_0x5637fc(0x4d5)](_0x5637fc(0x573)),
  btnTexto = actualizarDiv[_0x5637fc(0x4d5)](_0x5637fc(0x558)),
  btnSpinner = actualizarDiv[_0x5637fc(0x4d5)](_0x5637fc(0x45e)),
  mensajeActualizacion = actualizarDiv[_0x5637fc(0x4d5)](_0x5637fc(0x269));
async function mostrarProductosConPromociones() {
  const _0x576a58 = _0x5637fc,
    _0x4c063f = await getAllProductos(),
    _0x135d1b = [];
  for (const _0x2424e6 of _0x4c063f) {
    try {
      const _0x63dfd9 = await detectarPromocionReal(_0x2424e6);
      _0x63dfd9[_0x576a58(0x2b6)] > 0x0 && _0x135d1b["push"](_0x2424e6);
    } catch (_0x563556) {
      console[_0x576a58(0x553)](
        "⚠️\x20Error\x20al\x20detectar\x20promociones\x20para\x20SKU\x20" +
          _0x2424e6[_0x576a58(0x4fc)] +
          ":",
        _0x563556
      );
    }
  }
  if (_0x135d1b[_0x576a58(0x2b6)] === 0x0) {
    (resultadoDiv[_0x576a58(0x37f)] = _0x576a58(0x4f2)), renderHistorial();
    return;
  }
  const _0x174e43 = [];
  for (const _0x2407ed of _0x135d1b[_0x576a58(0x447)](0x0, 0x14)) {
    try {
      const _0x2225f5 = await detectarPromocionReal(_0x2407ed),
        _0x131733 =
          Number(_0x2407ed["pr_precio"]) || Number(_0x2407ed["L1"]) || 0x0,
        _0x57027a = Math["round"](_0x131733 * 1.16 * 0x64) / 0x64,
        _0x1f761b = _0x2225f5["map"]((_0x3a7bba) => {
          const _0x58dd6e = _0x576a58;
          let _0x1eff7a = _0x58dd6e(0x3b9),
            _0x540859 =
              _0x3a7bba[_0x58dd6e(0x517)] ||
              _0x3a7bba["nombre_promocion"] ||
              "PROMO";
          if (_0x3a7bba[_0x58dd6e(0x3e8)][_0x58dd6e(0x5c8)](_0x58dd6e(0x3ff)))
            (_0x1eff7a = _0x58dd6e(0x25a)),
              (_0x540859 = _0x58dd6e(0x350) + _0x540859);
          else
            _0x3a7bba[_0x58dd6e(0x574)] &&
              ((_0x1eff7a = _0x58dd6e(0x2ce)),
              (_0x540859 = _0x58dd6e(0x56a) + _0x540859));
          return (
            _0x58dd6e(0x3ab) +
            _0x1eff7a +
            "\x20me-1\x20mb-1\x22\x20style=\x22font-size:0.75rem;\x22>" +
            _0x540859 +
            _0x58dd6e(0x405)
          );
        })[_0x576a58(0x443)]("");
      _0x174e43[_0x576a58(0x389)](
        _0x576a58(0x431) +
          _0x2407ed[_0x576a58(0x4fc)] +
          _0x576a58(0x5a4) +
          _0x2407ed["pr_name"] +
          "\x22>" +
          _0x2407ed["pr_name"] +
          _0x576a58(0x33a) +
          _0x1f761b +
          _0x576a58(0x5cc) +
          _0x57027a[_0x576a58(0x535)](0x2) +
          _0x576a58(0x3a8) +
          _0x2407ed["pr_sku"] +
          _0x576a58(0x275)
      );
    } catch (_0x6cad8f) {
      console["warn"](
        "⚠️\x20Error\x20al\x20procesar\x20producto\x20" +
          _0x2407ed[_0x576a58(0x4fc)] +
          ":",
        _0x6cad8f
      );
    }
  }
  (resultadoDiv[_0x576a58(0x37f)] =
    _0x576a58(0x586) +
    _0x135d1b[_0x576a58(0x2b6)] +
    _0x576a58(0x291) +
    _0x174e43[_0x576a58(0x443)]("") +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20" +
    (_0x135d1b[_0x576a58(0x2b6)] > 0x14
      ? _0x576a58(0x341) +
        (_0x135d1b[_0x576a58(0x2b6)] - 0x14) +
        _0x576a58(0x5bb)
      : "") +
    _0x576a58(0x1e8)),
    renderHistorial();
}
window["mostrarProductoPromocion"] = async function (_0x2fdf95) {
  const _0x2eb242 = _0x5637fc,
    _0x2c325f = await getAllProductos(),
    _0x203068 = _0x2c325f[_0x2eb242(0x1ed)](
      (_0x568a78) =>
        _0x568a78["pr_sku"] === _0x2fdf95 ||
        _0x568a78[_0x2eb242(0x33d)] === _0x2fdf95
    );
  if (_0x203068) {
    mostrarDetalleProducto(_0x203068);
    const _0x1936c1 = {
      ..._0x203068,
      FECHA_ESCANEO: new Date()[_0x2eb242(0x3d8)](),
    };
    historial[_0x2eb242(0x48d)](_0x1936c1),
      setCookie(_0x2eb242(0x479), JSON[_0x2eb242(0x1e2)](historial), 0x1e),
      renderHistorial();
  }
};
const urlBase = _0x5637fc(0x27e),
  urlBaseConCodigos = _0x5637fc(0x3b3),
  urlPromociones = _0x5637fc(0x424),
  CONFIG_ENDPOINTS = {
    productosBasicos: urlBase,
    productosConCodigos: urlBaseConCodigos,
    promociones: urlPromociones,
    usarCodigosBarras: !![],
    fallbackTiempo: 0x1388,
  };
function tiempoRelativo(_0x6eb1f5) {
  const _0x4bf860 = _0x5637fc;
  if (!_0x6eb1f5) return _0x4bf860(0x55b);
  const _0x531f84 = Date[_0x4bf860(0x363)](),
    _0x567105 = Math[_0x4bf860(0x255)]((_0x531f84 - _0x6eb1f5) / 0x3e8);
  if (_0x567105 < 0x3c) return _0x4bf860(0x477) + _0x567105 + _0x4bf860(0x56b);
  if (_0x567105 < 0xe10)
    return (
      _0x4bf860(0x477) +
      Math[_0x4bf860(0x255)](_0x567105 / 0x3c) +
      _0x4bf860(0x43a)
    );
  if (_0x567105 < 0x15180)
    return (
      _0x4bf860(0x477) +
      Math[_0x4bf860(0x255)](_0x567105 / 0xe10) +
      _0x4bf860(0x3d1)
    );
  return (
    _0x4bf860(0x477) +
    Math[_0x4bf860(0x255)](_0x567105 / 0x15180) +
    _0x4bf860(0x2f8)
  );
}
function renderUltimaActualizacion() {
  const _0x252e8c = _0x5637fc,
    _0x9ec7b1 = localStorage["getItem"]("productos_ts"),
    _0x46aaf0 = localStorage[_0x252e8c(0x3cc)]("promociones_ts");
  let _0x4c94a6 = _0x252e8c(0x317);
  if (_0x9ec7b1 && _0x46aaf0) {
    const _0x56893e = tiempoRelativo(Number(_0x9ec7b1)),
      _0x10bd94 = tiempoRelativo(Number(_0x46aaf0)),
      _0x340d7f = Math["abs"](Number(_0x9ec7b1) - Number(_0x46aaf0));
    _0x340d7f < 0xea60
      ? (_0x4c94a6 = _0x252e8c(0x4a2) + _0x56893e)
      : (_0x4c94a6 =
          _0x252e8c(0x258) + _0x56893e + _0x252e8c(0x4b3) + _0x10bd94);
  } else {
    if (_0x9ec7b1)
      _0x4c94a6 =
        _0x252e8c(0x258) +
        tiempoRelativo(Number(_0x9ec7b1)) +
        "\x20|\x20Promociones:\x20nunca";
    else
      _0x46aaf0 &&
        (_0x4c94a6 = _0x252e8c(0x2f1) + tiempoRelativo(Number(_0x46aaf0)));
  }
  ultimaActualizacionSpan[_0x252e8c(0x2fb)] = _0x4c94a6;
}
function actualizarProgreso(_0x33cc4d, _0x4c9e3f, _0x1eb5e2 = "") {
  const _0x229125 = _0x5637fc,
    _0x3f1eef = Math[_0x229125(0x403)](
      0x64,
      Math[_0x229125(0x542)](0x0, _0x33cc4d)
    ),
    _0x505069 =
      _0x33cc4d >= 0x64
        ? _0x229125(0x262)
        : _0x33cc4d >= 0x32
        ? _0x229125(0x262)
        : _0x229125(0x43d);
  mensajeActualizacion["innerHTML"] =
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-medium\x22>" +
    _0x4c9e3f +
    _0x229125(0x54c) +
    _0x33cc4d +
    _0x229125(0x43b) +
    _0x505069 +
    _0x229125(0x368) +
    _0x3f1eef +
    _0x229125(0x528) +
    _0x33cc4d +
    _0x229125(0x254) +
    (_0x1eb5e2 ? _0x229125(0x208) + _0x1eb5e2 + "</small>" : "") +
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20";
}
async function actualizarTodosLosDatos() {
  const _0x270173 = _0x5637fc;
  console[_0x270173(0x3dd)](
    "🚀\x20Iniciando\x20actualización\x20con\x20progreso..."
  ),
    (btnActualizar["disabled"] = !![]),
    (btnTexto[_0x270173(0x2fb)] = _0x270173(0x5c5)),
    btnSpinner[_0x270173(0x490)][_0x270173(0x49b)](_0x270173(0x25b));
  const _0x5c0de0 = Date[_0x270173(0x363)]();
  let _0x52a55a = ![],
    _0x38545d = ![];
  const _0x188e66 = () => {
    const _0x1f2d77 = _0x270173;
    let _0x3c4930 = 0x0,
      _0x162d25 = "Iniciando...",
      _0x3608ba = "";
    if (!_0x52a55a && !_0x38545d)
      (_0x3c4930 = 0xa),
        (_0x162d25 = _0x1f2d77(0x3aa)),
        (_0x3608ba = _0x1f2d77(0x379));
    else {
      if (_0x52a55a && !_0x38545d)
        (_0x3c4930 = 0x46),
          (_0x162d25 = _0x1f2d77(0x4a0)),
          (_0x3608ba = _0x1f2d77(0x47a));
      else {
        if (!_0x52a55a && _0x38545d)
          (_0x3c4930 = 0x46),
            (_0x162d25 = _0x1f2d77(0x483)),
            (_0x3608ba = _0x1f2d77(0x2cc));
        else {
          _0x3c4930 = 0x64;
          const _0x8fdb43 = ((Date[_0x1f2d77(0x363)]() - _0x5c0de0) / 0x3e8)[
            _0x1f2d77(0x535)
          ](0x1);
          (_0x162d25 = _0x1f2d77(0x5b7)),
            (_0x3608ba = _0x1f2d77(0x458) + _0x8fdb43 + "\x20segundos");
        }
      }
    }
    actualizarProgreso(_0x3c4930, _0x162d25, _0x3608ba);
  };
  _0x188e66();
  try {
    await new Promise((_0x5d09c0) => setTimeout(_0x5d09c0, 0xc8)),
      actualizarProgreso(0x19, _0x270173(0x576), _0x270173(0x4aa));
    const _0x172edc = cargarProductosRapido()[_0x270173(0x1dd)]((_0x49d4dc) => {
        return (_0x52a55a = !![]), _0x188e66(), _0x49d4dc;
      }),
      _0x3e815e = cargarPromocionesRapido()[_0x270173(0x1dd)]((_0x12eec7) => {
        return (_0x38545d = !![]), _0x188e66(), _0x12eec7;
      });
    setTimeout(() => {
      const _0x5c7a18 = _0x270173;
      (!_0x52a55a || !_0x38545d) &&
        actualizarProgreso(0x32, _0x5c7a18(0x359), _0x5c7a18(0x4d0));
    }, 0x3e8);
    const [_0x51c5ba, _0x3aef44] = await Promise[_0x270173(0x2da)]([
        _0x172edc,
        _0x3e815e,
      ]),
      _0x3ec61e = ((Date["now"]() - _0x5c0de0) / 0x3e8)[_0x270173(0x535)](0x1);
    console["log"](_0x270173(0x4b2) + _0x3ec61e + "s");
    const _0x408e1b = _0x51c5ba[_0x270173(0x54f)] === _0x270173(0x38f),
      _0x1cb717 = _0x3aef44[_0x270173(0x54f)] === "fulfilled";
    if (_0x408e1b && _0x1cb717) {
      const _0x44b0a8 = _0x51c5ba["value"]?.[_0x270173(0x211)] || 0x0,
        _0x7068ae = _0x3aef44[_0x270173(0x2f6)]?.[_0x270173(0x26c)] || 0x0,
        _0x179365 = _0x51c5ba[_0x270173(0x2f6)]?.[_0x270173(0x265)] || "",
        _0x913446 = _0x3aef44[_0x270173(0x2f6)]?.["detalles"] || "";
      actualizarProgreso(
        0x64,
        _0x270173(0x46c),
        _0x44b0a8 +
          _0x270173(0x212) +
          _0x179365 +
          _0x270173(0x29a) +
          _0x7068ae +
          _0x270173(0x234) +
          _0x913446 +
          _0x270173(0x538) +
          _0x3ec61e +
          "s"
      );
    } else
      _0x408e1b || _0x1cb717
        ? actualizarProgreso(
            0x4b,
            "⚠️\x20Consulta\x20parcial\x20de\x20endpoints",
            _0x270173(0x3bb) + _0x3ec61e + "s)"
          )
        : actualizarProgreso(
            0x19,
            "❌\x20Error\x20consultando\x20endpoints",
            "Todos\x20los\x20endpoints\x20fallaron\x20(" + _0x3ec61e + "s)"
          );
    _0x51c5ba[_0x270173(0x54f)] === _0x270173(0x3f6) &&
      console[_0x270173(0x585)](
        "Error\x20al\x20cargar\x20productos:",
        _0x51c5ba["reason"]
      ),
      _0x3aef44[_0x270173(0x54f)] === _0x270173(0x3f6) &&
        console[_0x270173(0x585)](
          _0x270173(0x33e),
          _0x3aef44[_0x270173(0x4fb)]
        );
  } catch (_0x4eb641) {
    console[_0x270173(0x585)]("Error\x20en\x20actualización:", _0x4eb641),
      actualizarProgreso(
        0x0,
        "❌\x20Error\x20de\x20conexión",
        _0x270173(0x286)
      );
  } finally {
    (btnActualizar[_0x270173(0x2b0)] = ![]),
      (btnTexto["textContent"] = _0x270173(0x1e9)),
      btnSpinner[_0x270173(0x490)][_0x270173(0x289)](_0x270173(0x25b)),
      setTimeout(() => {
        (mensajeActualizacion["textContent"] = ""), renderUltimaActualizacion();
      }, 0xfa0);
  }
}
async function cargarProductosRapido() {
  const _0x3c994d = _0x5637fc,
    _0x360924 = Date["now"]();
  if (!navigator[_0x3c994d(0x487)]) throw new Error(_0x3c994d(0x313));
  let _0x48e1b9 = [],
    _0x49aab8 = [];
  console[_0x3c994d(0x3dd)](_0x3c994d(0x2d0));
  if (CONFIG_ENDPOINTS[_0x3c994d(0x4ff)])
    try {
      const _0x27e929 =
        CONFIG_ENDPOINTS[_0x3c994d(0x4f8)] + _0x3c994d(0x1f4) + _0x360924;
      console["log"](_0x3c994d(0x418));
      const _0x14f79c = await Promise[_0x3c994d(0x445)]([
        fetch(_0x27e929, {
          cache: _0x3c994d(0x4f5),
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }),
        new Promise((_0x172e7f, _0x6f9eed) =>
          setTimeout(
            () => _0x6f9eed(new Error(_0x3c994d(0x300))),
            CONFIG_ENDPOINTS["fallbackTiempo"]
          )
        ),
      ]);
      if (_0x14f79c["ok"]) {
        const _0x2086af = await _0x14f79c[_0x3c994d(0x48c)]();
        _0x2086af[_0x3c994d(0x262)] && _0x2086af[_0x3c994d(0x211)]
          ? ((_0x48e1b9 = _0x2086af[_0x3c994d(0x211)]),
            _0x49aab8[_0x3c994d(0x389)](_0x3c994d(0x309)),
            console[_0x3c994d(0x3dd)](
              _0x3c994d(0x337),
              _0x2086af[_0x3c994d(0x211)][_0x3c994d(0x2b6)]
            ))
          : _0x49aab8["push"](
              "códigos\x20de\x20barras\x20⚠️\x20(sin\x20datos)"
            );
      } else
        _0x49aab8[_0x3c994d(0x389)](
          _0x3c994d(0x380) + _0x14f79c[_0x3c994d(0x54f)] + ")"
        );
    } catch (_0x11cd83) {
      console[_0x3c994d(0x553)](_0x3c994d(0x35a), _0x11cd83[_0x3c994d(0x2ee)]),
        _0x11cd83[_0x3c994d(0x2ee)][_0x3c994d(0x5c8)](_0x3c994d(0x3b1)) ||
        _0x11cd83[_0x3c994d(0x2ee)]["includes"](_0x3c994d(0x57e))
          ? (_0x49aab8[_0x3c994d(0x389)](
              "códigos\x20de\x20barras\x20❌\x20(CORS/Red)"
            ),
            console[_0x3c994d(0x3dd)](_0x3c994d(0x3a6)))
          : _0x49aab8[_0x3c994d(0x389)](_0x3c994d(0x39a));
    }
  try {
    const _0x2b7193 =
      CONFIG_ENDPOINTS["productosBasicos"] + _0x3c994d(0x1f4) + _0x360924;
    console[_0x3c994d(0x3dd)](_0x3c994d(0x340));
    const _0x59de9d = await fetch(_0x2b7193, { cache: "no-store" });
    if (_0x59de9d["ok"]) {
      const _0x66fcb1 = await _0x59de9d[_0x3c994d(0x48c)](),
        _0x23bbb6 = Array["isArray"](_0x66fcb1) ? _0x66fcb1 : [];
      _0x48e1b9["length"] === 0x0 &&
        _0x23bbb6[_0x3c994d(0x2b6)] > 0x0 &&
        (_0x48e1b9 = _0x23bbb6),
        _0x49aab8[_0x3c994d(0x389)]("básico\x20✅"),
        console["log"](_0x3c994d(0x42d), _0x23bbb6["length"], _0x3c994d(0x211));
    } else _0x49aab8["push"]("básico\x20❌\x20(error\x20HTTP)");
  } catch (_0x398ead) {
    console[_0x3c994d(0x553)](_0x3c994d(0x36b), _0x398ead[_0x3c994d(0x2ee)]),
      _0x49aab8[_0x3c994d(0x389)](_0x3c994d(0x31f));
  }
  if (_0x48e1b9[_0x3c994d(0x2b6)] === 0x0) throw new Error(_0x3c994d(0x5c7));
  return (
    await clearProductos(),
    await saveProductos(_0x48e1b9),
    localStorage["setItem"](_0x3c994d(0x2ed), String(_0x360924)),
    console[_0x3c994d(0x3dd)](
      _0x3c994d(0x5d3),
      _0x49aab8[_0x3c994d(0x443)](",\x20")
    ),
    {
      productos: _0x48e1b9[_0x3c994d(0x2b6)],
      endpoints: _0x49aab8,
      detalles: _0x49aab8[_0x3c994d(0x2b6)] + "\x20endpoints\x20consultados",
    }
  );
}
async function cargarPromocionesRapido() {
  const _0x1b80ee = _0x5637fc;
  console[_0x1b80ee(0x3dd)](_0x1b80ee(0x222));
  const _0x256979 = await fetch(CONFIG_ENDPOINTS[_0x1b80ee(0x26c)], {
    cache: _0x1b80ee(0x4f5),
    headers: { Accept: _0x1b80ee(0x3f4), "Content-Type": _0x1b80ee(0x3f4) },
  });
  if (!_0x256979["ok"])
    throw new Error("Error\x20HTTP:\x20" + _0x256979[_0x1b80ee(0x54f)]);
  const _0x206ef8 = await _0x256979[_0x1b80ee(0x48c)]();
  if (
    _0x206ef8[_0x1b80ee(0x262)] &&
    _0x206ef8[_0x1b80ee(0x584)] &&
    _0x206ef8[_0x1b80ee(0x584)][_0x1b80ee(0x26c)]
  ) {
    const _0x154a89 = _0x206ef8["data"]["promociones"];
    console[_0x1b80ee(0x3dd)](
      "✅\x20Endpoint\x20promociones\x20consultado:\x20" +
        _0x154a89["length"] +
        _0x1b80ee(0x3ba)
    );
    try {
      await clearPromociones(), await savePromociones(_0x154a89);
      const _0x413b92 = Date[_0x1b80ee(0x363)]();
      localStorage[_0x1b80ee(0x4c7)](_0x1b80ee(0x48e), String(_0x413b92)),
        console[_0x1b80ee(0x3dd)](
          "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB"
        );
    } catch (_0xaa05e) {
      console[_0x1b80ee(0x585)](_0x1b80ee(0x354), _0xaa05e);
    }
    return { promociones: _0x154a89["length"], detalles: _0x1b80ee(0x2c3) };
  } else throw new Error(_0x1b80ee(0x4d1));
}
btnActualizar[_0x5637fc(0x245)]("click", actualizarTodosLosDatos),
  renderUltimaActualizacion(),
  setInterval(renderUltimaActualizacion, 0xea60),
  openDB()["then"](async (_0x538689) => {
    const _0x3580f7 = _0x5637fc,
      _0x53e80f = _0x538689["transaction"](DB_STORE, _0x3580f7(0x29b)),
      _0x397956 = _0x53e80f[_0x3580f7(0x5ca)](DB_STORE),
      _0x1c458e = _0x397956[_0x3580f7(0x3ef)](),
      _0x549872 = _0x538689[_0x3580f7(0x593)](
        DB_STORE_PROMOCIONES,
        _0x3580f7(0x29b)
      ),
      _0x54161d = _0x549872[_0x3580f7(0x5ca)](DB_STORE_PROMOCIONES),
      _0x2bb113 = _0x54161d[_0x3580f7(0x3ef)]();
    Promise["all"]([
      new Promise((_0x301f79) => {
        const _0x445de8 = _0x3580f7;
        _0x1c458e[_0x445de8(0x504)] = () =>
          _0x301f79(_0x1c458e[_0x445de8(0x3cf)]);
      }),
      new Promise((_0x2bdb62) => {
        const _0xecd6e8 = _0x3580f7;
        _0x2bb113[_0xecd6e8(0x504)] = () =>
          _0x2bdb62(_0x2bb113[_0xecd6e8(0x3cf)]);
      }),
    ])
      [_0x3580f7(0x1dd)](([_0x24226d, _0x3b0cd3]) => {
        const _0xe29d92 = _0x3580f7,
          _0x38aa70 = _0x24226d > 0x0,
          _0x19d1b8 = _0x3b0cd3 > 0x0,
          _0x125a85 = localStorage[_0xe29d92(0x3cc)](_0xe29d92(0x2ed)),
          _0x2859de = localStorage[_0xe29d92(0x3cc)](_0xe29d92(0x48e)),
          _0x49d6d6 = Date[_0xe29d92(0x363)](),
          _0x5b5dab = 0x3 * 0x18 * 0x3c * 0x3c * 0x3e8;
        let _0x57099c = ![],
          _0x4967b7 = ![];
        if (_0x125a85) {
          const _0x3cbb6f = _0x49d6d6 - Number(_0x125a85);
          _0x57099c = _0x3cbb6f >= _0x5b5dab;
        }
        if (_0x2859de) {
          const _0x2481c9 = _0x49d6d6 - Number(_0x2859de);
          _0x4967b7 = _0x2481c9 >= _0x5b5dab;
        }
        if (!_0x38aa70 && !_0x19d1b8)
          console[_0xe29d92(0x3dd)](
            "🔄\x20Primera\x20carga:\x20cargando\x20productos\x20y\x20promociones..."
          ),
            actualizarTodosLosDatos();
        else {
          if (!_0x38aa70)
            console[_0xe29d92(0x3dd)](_0xe29d92(0x498)),
              cargarProductosRapido()[_0xe29d92(0x441)]((_0x104e6c) =>
                console[_0xe29d92(0x585)](_0xe29d92(0x272), _0x104e6c)
              );
          else {
            if (_0x57099c || _0x4967b7) {
              const _0x6b53df = _0x125a85
                  ? Math[_0xe29d92(0x255)](
                      (_0x49d6d6 - Number(_0x125a85)) /
                        (0x18 * 0x3c * 0x3c * 0x3e8)
                    )
                  : _0xe29d92(0x38b),
                _0xa0f074 = _0x2859de
                  ? Math[_0xe29d92(0x255)](
                      (_0x49d6d6 - Number(_0x2859de)) /
                        (0x18 * 0x3c * 0x3c * 0x3e8)
                    )
                  : _0xe29d92(0x38b);
              console[_0xe29d92(0x3dd)](
                _0xe29d92(0x3bc) +
                  _0x6b53df +
                  _0xe29d92(0x56c) +
                  _0xa0f074 +
                  _0xe29d92(0x283)
              ),
                console[_0xe29d92(0x3dd)](_0xe29d92(0x3be)),
                actualizarTodosLosDatos();
            } else {
              console[_0xe29d92(0x3dd)](
                _0xe29d92(0x40e),
                _0x24226d,
                _0xe29d92(0x401),
                _0x3b0cd3
              );
              if (_0x125a85) {
                const _0x17fe9d = Math["floor"](
                  (_0x49d6d6 - Number(_0x125a85)) / (0x18 * 0x3c * 0x3c * 0x3e8)
                );
                console[_0xe29d92(0x3dd)](
                  _0xe29d92(0x48f) + _0x17fe9d + _0xe29d92(0x2f8)
                );
              }
              if (_0x2859de) {
                const _0x3d08e5 = Math[_0xe29d92(0x255)](
                  (_0x49d6d6 - Number(_0x2859de)) / (0x18 * 0x3c * 0x3c * 0x3e8)
                );
                console[_0xe29d92(0x3dd)](
                  "📅\x20Promociones\x20actualizadas\x20hace\x20" +
                    _0x3d08e5 +
                    "\x20días"
                );
              }
            }
          }
        }
        datosYaCargados = !![];
      })
      [_0x3580f7(0x441)]((_0x193bd9) => {
        const _0x3cf8a4 = _0x3580f7;
        console[_0x3cf8a4(0x585)](
          "Error\x20verificando\x20datos\x20locales:",
          _0x193bd9
        );
        try {
          cargarProductosRapido()[_0x3cf8a4(0x441)]((_0x29bdf5) =>
            console[_0x3cf8a4(0x585)](
              "Fallo\x20al\x20cargar\x20productos\x20iniciales",
              _0x29bdf5
            )
          );
        } catch (_0x34c463) {}
        datosYaCargados = !![];
      });
  });
let historial = [];
const historialCookie = getCookie(_0x5637fc(0x479));
if (historialCookie)
  try {
    historial = JSON[_0x5637fc(0x242)](historialCookie);
  } catch (_0x5d4c85) {
    historial = [];
  }
function renderClearButton() {
  const _0x584ad4 = _0x5637fc;
  return _0x584ad4(0x230);
}
function renderHistorial() {
  const _0x55bd97 = _0x5637fc;
  (historialDiv[_0x55bd97(0x37f)] =
    _0x55bd97(0x561) +
    (historial[_0x55bd97(0x2b6)] > 0x0 ? renderClearButton() : "") +
    _0x55bd97(0x28a) +
    (historial["length"] === 0x0
      ? _0x55bd97(0x565)
      : "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        historial[_0x55bd97(0x20d)]((_0x1db81b) => {
          const _0x32457d = _0x55bd97,
            _0x4f67d8 =
              _0x1db81b[_0x32457d(0x244)] ||
              _0x1db81b[_0x32457d(0x34f)] ||
              _0x32457d(0x53c),
            _0x2d6e73 =
              _0x1db81b[_0x32457d(0x4fc)] ||
              _0x1db81b["pr_gtin"] ||
              _0x1db81b[_0x32457d(0x413)] ||
              _0x1db81b["SKU"] ||
              _0x32457d(0x432),
            _0x4faceb =
              _0x1db81b[_0x32457d(0x223)] ||
              _0x1db81b["L1"] ||
              _0x1db81b[_0x32457d(0x3a0)] ||
              0x0,
            _0x2a91b2 = Math[_0x32457d(0x315)](_0x4faceb * 1.16 * 0x64) / 0x64,
            _0x352ae1 = _0x1db81b["FECHA_ESCANEO"]
              ? new Date(_0x1db81b[_0x32457d(0x352)])[_0x32457d(0x2a0)]()
              : "Fecha\x20desconocida";
          return (
            "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>" +
            _0x4f67d8 +
            _0x32457d(0x39b) +
            _0x4f67d8 +
            _0x32457d(0x45a) +
            _0x2d6e73 +
            "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20SKU\x22\x20data-copiar=\x22" +
            _0x2d6e73 +
            _0x32457d(0x5a3) +
            _0x2a91b2["toFixed"](0x2) +
            _0x32457d(0x2fd) +
            _0x352ae1 +
            _0x32457d(0x460) +
            _0x2d6e73 +
            _0x32457d(0x256)
          );
        })["join"]("") +
        _0x55bd97(0x20b)) +
    _0x55bd97(0x367)),
    setCookie(_0x55bd97(0x479), JSON[_0x55bd97(0x1e2)](historial), 0x1e);
  const _0x33e3d6 = document[_0x55bd97(0x4a4)]("limpiarHistorialBtn");
  _0x33e3d6 &&
    _0x33e3d6[_0x55bd97(0x245)](_0x55bd97(0x409), () => {
      const _0x2544ad = _0x55bd97;
      (historial = []),
        setCookie(_0x2544ad(0x479), JSON["stringify"](historial), 0x1e),
        renderHistorial();
    });
  const _0x59b50a = historialDiv[_0x55bd97(0x38a)](_0x55bd97(0x419));
  _0x59b50a[_0x55bd97(0x2bf)]((_0x1d5d99) => {
    const _0x1fcfb7 = _0x55bd97;
    _0x1d5d99[_0x1fcfb7(0x245)](_0x1fcfb7(0x409), function (_0x2bac61) {
      const _0x27be15 = _0x1fcfb7,
        _0xc972c8 = _0x1d5d99[_0x27be15(0x39f)](_0x27be15(0x287));
      navigator["clipboard"] &&
        navigator["clipboard"]
          [_0x27be15(0x24f)](_0xc972c8)
          [_0x27be15(0x1dd)](() => {
            const _0x475edd = _0x27be15;
            (_0x1d5d99[_0x475edd(0x37f)] = _0x475edd(0x2a3)),
              setTimeout(() => {
                const _0x3f17a0 = _0x475edd;
                _0x1d5d99[_0x3f17a0(0x37f)] = _0x3f17a0(0x508);
              }, 0x4b0);
          });
    });
  });
  const _0x101802 = historialDiv[_0x55bd97(0x38a)](".consultar-historial-btn");
  _0x101802[_0x55bd97(0x2bf)]((_0x402f95) => {
    const _0x14a1cf = _0x55bd97;
    _0x402f95[_0x14a1cf(0x245)](_0x14a1cf(0x409), function (_0x4f6aa9) {
      const _0x3fed98 = _0x14a1cf,
        _0x155fd3 = _0x402f95[_0x3fed98(0x39f)]("data-sku");
      consultarProductoDesdeHistorial(_0x155fd3);
    });
  });
}
inputCodigo[_0x5637fc(0x245)](_0x5637fc(0x4ca), function (_0x49fe98) {
  const _0x49046a = _0x5637fc;
  _0x49fe98[_0x49046a(0x52c)] === _0x49046a(0x321) &&
    (_0x49fe98[_0x49046a(0x32e)](),
    form[_0x49046a(0x41b)](),
    setTimeout(() => {
      const _0x1c4d1f = _0x49046a,
        _0x3008c3 = document[_0x1c4d1f(0x4a4)](_0x1c4d1f(0x2fc));
      _0x3008c3 &&
        _0x3008c3[_0x1c4d1f(0x466)]({
          behavior: _0x1c4d1f(0x362),
          block: _0x1c4d1f(0x273),
          inline: _0x1c4d1f(0x588),
        });
    }, 0x12c));
}),
  form["addEventListener"](_0x5637fc(0x430), async (_0x2b4605) => {
    const _0x3741eb = _0x5637fc;
    _0x2b4605["preventDefault"](), hideMobileKeyboard();
    let _0x3eaf10 = inputCodigo["value"]
      [_0x3741eb(0x410)]()
      [_0x3741eb(0x27c)](/\s+$/, "");
    const _0x12feb1 = _0x3eaf10[_0x3741eb(0x325)]();
    (inputCodigo[_0x3741eb(0x2f6)] = _0x3eaf10),
      (resultadoDiv[_0x3741eb(0x37f)] = ""),
      setTimeout(() => {
        const _0x28fb14 = _0x3741eb,
          _0x30bc81 = document[_0x28fb14(0x4a4)]("resultado");
        _0x30bc81 &&
          _0x30bc81[_0x28fb14(0x466)]({
            behavior: _0x28fb14(0x362),
            block: _0x28fb14(0x273),
            inline: "nearest",
          });
      }, 0x64),
      (sugerenciasDiv["innerHTML"] = ""),
      (sugerenciasDiv[_0x3741eb(0x342)]["display"] = "none");
    if (!_0x3eaf10) {
      (resultadoDiv[_0x3741eb(0x37f)] = _0x3741eb(0x1f1)),
        renderHistorial(),
        inputCodigo[_0x3741eb(0x274)]();
      return;
    }
    (inputCodigo[_0x3741eb(0x49f)] = ""),
      (resultadoDiv[_0x3741eb(0x37f)] = _0x3741eb(0x279)),
      (inputCodigo[_0x3741eb(0x2f6)] = "");
    try {
      inputCodigo[_0x3741eb(0x4ec)]();
    } catch (_0x336a78) {}
    let _0x585013 = await getAllProductos(),
      _0x463b6c = _0x585013[_0x3741eb(0x1ed)]((_0x400e56) => {
        const _0xc65c4b = _0x3741eb,
          _0x3cbd77 = (
            _0x400e56[_0xc65c4b(0x4fc)] != null
              ? String(_0x400e56[_0xc65c4b(0x4fc)])
              : ""
          )["toLowerCase"](),
          _0xee3541 = (
            _0x400e56["pr_gtin"] != null
              ? String(_0x400e56[_0xc65c4b(0x33d)])
              : ""
          )["toLowerCase"]();
        if (_0x3cbd77 === _0x12feb1 || _0xee3541 === _0x12feb1) return !![];
        if (
          _0x400e56["codigos_barras"] &&
          Array[_0xc65c4b(0x44d)](_0x400e56["codigos_barras"])
        )
          return _0x400e56[_0xc65c4b(0x293)][_0xc65c4b(0x386)](
            (_0x322fba) => String(_0x322fba)[_0xc65c4b(0x325)]() === _0x12feb1
          );
        return ![];
      });
    if (_0x463b6c) {
      mostrarDetalleProducto(_0x463b6c);
      const _0x2bc727 = {
        ..._0x463b6c,
        FECHA_ESCANEO: new Date()[_0x3741eb(0x3d8)](),
      };
      historial[_0x3741eb(0x48d)](_0x2bc727),
        setCookie(_0x3741eb(0x479), JSON[_0x3741eb(0x1e2)](historial), 0x1e),
        (inputCodigo[_0x3741eb(0x2f6)] = "");
      if (!isMobileDevice())
        try {
          inputCodigo[_0x3741eb(0x274)]();
        } catch (_0x131ecc) {}
      _0x463b6c[_0x3741eb(0x293)] &&
        _0x463b6c["codigos_barras"][_0x3741eb(0x2b6)] > 0x1 &&
        console["log"](_0x3741eb(0x366), {
          sku: _0x463b6c["pr_sku"],
          gtin_principal: _0x463b6c[_0x3741eb(0x33d)],
          codigo_buscado: _0x3eaf10,
          todos_los_codigos: _0x463b6c[_0x3741eb(0x293)],
        });
    } else {
      let _0x10b7e4 = _0x585013["filter"]((_0x220236) => {
        const _0x285a44 = _0x3741eb,
          _0x30f2ee = (_0x220236[_0x285a44(0x244)] || "")[_0x285a44(0x325)](),
          _0x5a82be = (
            _0x220236[_0x285a44(0x4fc)] != null
              ? String(_0x220236[_0x285a44(0x4fc)])
              : ""
          )[_0x285a44(0x325)](),
          _0x3fede6 = (
            _0x220236[_0x285a44(0x33d)] != null
              ? String(_0x220236["pr_gtin"])
              : ""
          )[_0x285a44(0x325)]();
        return (
          _0x30f2ee["includes"](_0x12feb1) ||
          _0x5a82be[_0x285a44(0x5c8)](_0x12feb1) ||
          _0x3fede6[_0x285a44(0x5c8)](_0x12feb1)
        );
      });
      _0x10b7e4[_0x3741eb(0x2b6)] > 0x0
        ? mostrarModalResultadosBusqueda(_0x10b7e4, _0x3eaf10)
        : ((resultadoDiv[_0x3741eb(0x37f)] =
            "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontraron\x20resultados\x20para:\x20" +
            _0x3eaf10 +
            _0x3741eb(0x216)),
          (inputCodigo["value"] = ""),
          inputCodigo[_0x3741eb(0x274)](),
          setTimeout(() => {
            const _0x64c860 = _0x3741eb;
            resultadoDiv[_0x64c860(0x37f)] = "";
          }, 0x1388),
          console[_0x3741eb(0x3dd)](_0x3741eb(0x59e) + _0x3eaf10 + "\x22"));
    }
    renderHistorial();
  });
async function detectarPromocionReal(_0x264356) {
  const _0x3d3246 = _0x5637fc,
    _0x5a165c = (_0x264356["pr_sku"] || "")["toString"]();
  try {
    const _0x2ebb52 = await getAllPromociones();
    console["log"](_0x3d3246(0x39d), _0x2ebb52["length"]),
      console["log"](_0x3d3246(0x513), _0x5a165c);
    const _0xae925a = [];
    for (const _0x2b96ca of _0x2ebb52) {
      let _0x5e64cc = [];
      if (
        _0x2b96ca[_0x3d3246(0x314)] &&
        Array[_0x3d3246(0x44d)](_0x2b96ca[_0x3d3246(0x314)])
      )
        _0x5e64cc = _0x2b96ca[_0x3d3246(0x314)];
      else
        _0x2b96ca[_0x3d3246(0x4d7)] &&
          _0x2b96ca[_0x3d3246(0x4d7)]["pr_sku"] &&
          (Array[_0x3d3246(0x44d)](
            _0x2b96ca[_0x3d3246(0x4d7)][_0x3d3246(0x4fc)]
          )
            ? (_0x5e64cc = _0x2b96ca[_0x3d3246(0x4d7)]["pr_sku"])
            : (_0x5e64cc = _0x2b96ca[_0x3d3246(0x4d7)][_0x3d3246(0x4fc)]
                [_0x3d3246(0x567)]("\x20")
                ["filter"]((_0x22c392) => _0x22c392[_0x3d3246(0x410)]())));
      if (_0x5e64cc["includes"](_0x5a165c)) {
        const _0x323159 =
            _0x2b96ca[_0x3d3246(0x4ea)] ||
            _0x2b96ca["descripcion"] ||
            _0x2b96ca[_0x3d3246(0x320)] ||
            _0x3d3246(0x364),
          _0x4652f5 =
            _0x2b96ca[_0x3d3246(0x2ac)] ||
            _0x2b96ca[_0x3d3246(0x2b7)] ||
            _0x2b96ca[_0x3d3246(0x557)] ||
            "",
          _0x5944e8 =
            _0x2b96ca[_0x3d3246(0x53f)] ||
            _0x2b96ca[_0x3d3246(0x5a6)] ||
            _0x2b96ca[_0x3d3246(0x44e)] ||
            _0x2b96ca[_0x3d3246(0x353)] ||
            _0x2b96ca[_0x3d3246(0x3ea)] ||
            _0x2b96ca["pro_precio_total"] ||
            _0x2b96ca[_0x3d3246(0x47c)] ||
            _0x2b96ca[_0x3d3246(0x20e)] ||
            "";
        console[_0x3d3246(0x3dd)](_0x3d3246(0x22d) + _0x5a165c + ":", {
          nombre: _0x323159,
          cantidad: _0x4652f5,
          precio: _0x5944e8,
          campos_precio_disponibles: {
            pro_precioPromo: _0x2b96ca["pro_precioPromo"],
            precio: _0x2b96ca[_0x3d3246(0x5a6)],
            price: _0x2b96ca["price"],
            precioTotal: _0x2b96ca[_0x3d3246(0x353)],
            precio_total: _0x2b96ca[_0x3d3246(0x3ea)],
            pro_precio_total: _0x2b96ca[_0x3d3246(0x3c0)],
            total_price: _0x2b96ca[_0x3d3246(0x47c)],
            valor_total: _0x2b96ca[_0x3d3246(0x20e)],
          },
          campos_disponibles: Object[_0x3d3246(0x50c)](_0x2b96ca),
          promo_completa: _0x2b96ca,
        }),
          _0xae925a[_0x3d3246(0x389)]({
            tipo: _0x3d3246(0x358),
            detalle: "🔥\x20" + _0x323159,
            nombre_promocion: _0x323159,
            es_oficial: !![],
            fuente: _0x3d3246(0x491),
            id_promocion: _0x2b96ca[_0x3d3246(0x30e)] || _0x2b96ca["id"],
            cantidad: _0x4652f5,
            precio: _0x5944e8,
            mensaje:
              _0x2b96ca[_0x3d3246(0x209)] || _0x2b96ca[_0x3d3246(0x382)] || "",
            tipo_promo:
              _0x2b96ca[_0x3d3246(0x225)] || _0x2b96ca[_0x3d3246(0x3e8)] || "",
            vigencia:
              _0x2b96ca["validFrom"] && _0x2b96ca["validTo"]
                ? _0x2b96ca["validFrom"] +
                  "\x20al\x20" +
                  _0x2b96ca[_0x3d3246(0x238)]
                : "",
            raw_data: {
              pro_cantidad_base: _0x2b96ca[_0x3d3246(0x2ac)],
              pro_precioPromo: _0x2b96ca[_0x3d3246(0x53f)],
              pro_nombrePromo: _0x2b96ca[_0x3d3246(0x4ea)],
              todos_campos_precio: {
                pro_precioPromo: _0x2b96ca[_0x3d3246(0x53f)],
                precio: _0x2b96ca[_0x3d3246(0x5a6)],
                price: _0x2b96ca[_0x3d3246(0x44e)],
                precioTotal: _0x2b96ca[_0x3d3246(0x353)],
                precio_total: _0x2b96ca[_0x3d3246(0x3ea)],
                pro_precio_total: _0x2b96ca[_0x3d3246(0x3c0)],
                total_price: _0x2b96ca[_0x3d3246(0x47c)],
                valor_total: _0x2b96ca[_0x3d3246(0x20e)],
              },
            },
          });
      }
    }
    return (
      _0xae925a["length"] === 0x0
        ? console[_0x3d3246(0x3dd)](_0x3d3246(0x51c) + _0x5a165c)
        : console[_0x3d3246(0x3dd)](
            "✅\x20" +
              _0xae925a[_0x3d3246(0x2b6)] +
              _0x3d3246(0x282) +
              _0x5a165c
          ),
      _0xae925a
    );
  } catch (_0x2db728) {
    return console[_0x3d3246(0x585)](_0x3d3246(0x3a3), _0x2db728), [];
  }
}
function mostrarDetalleProducto(_0x3cdff3) {
  const _0x17f1ac = _0x5637fc;
  hideMobileKeyboard();
  let _0x78ded2 = "";
  if (
    _0x3cdff3[_0x17f1ac(0x55a)] &&
    _0x3cdff3[_0x17f1ac(0x55a)][_0x17f1ac(0x410)]() !== ""
  ) {
    if (_0x3cdff3[_0x17f1ac(0x55a)][_0x17f1ac(0x292)]("http"))
      _0x78ded2 = _0x3cdff3[_0x17f1ac(0x55a)];
    else {
      let _0x21e1c2 = _0x3cdff3[_0x17f1ac(0x55a)][_0x17f1ac(0x292)]("/")
        ? _0x3cdff3[_0x17f1ac(0x55a)]
        : "/" + _0x3cdff3[_0x17f1ac(0x55a)];
      _0x78ded2 = "https://media.megaservicio.net" + _0x21e1c2;
    }
  }
  let _0x59e10c =
      Number(_0x3cdff3[_0x17f1ac(0x223)]) || Number(_0x3cdff3["L1"]) || 0x0,
    _0x5d0c51 = Math[_0x17f1ac(0x315)](_0x59e10c * 1.16 * 0x64) / 0x64,
    _0x18db75 = 0xc,
    _0x5db5cf = 0.1,
    _0x2d9a02 =
      Math[_0x17f1ac(0x315)](_0x5d0c51 * (0x1 + _0x5db5cf) * 0x64) / 0x64,
    _0x398636 = "";
  if (
    _0x3cdff3[_0x17f1ac(0x293)] &&
    _0x3cdff3[_0x17f1ac(0x293)]["length"] > 0x1
  ) {
    const _0x27c7f4 = [...new Set(_0x3cdff3[_0x17f1ac(0x293)])][
      _0x17f1ac(0x42c)
    ]((_0x56d937) => _0x56d937 && _0x56d937[_0x17f1ac(0x410)]());
    _0x27c7f4[_0x17f1ac(0x2b6)] > 0x1 &&
      (_0x398636 =
        _0x17f1ac(0x24b) + _0x27c7f4["join"](",\x20") + _0x17f1ac(0x5b0));
  }
  renderProductoConPromociones(
    _0x3cdff3,
    _0x78ded2,
    _0x5d0c51,
    _0x2d9a02,
    _0x398636
  ),
    setTimeout(() => {
      generarCodigoBarras(_0x3cdff3);
    }, 0x64),
    detectarPromocionReal(_0x3cdff3)
      [_0x17f1ac(0x1dd)]((_0x5e4b9f) => {
        actualizarPromocionesEnVista(
          _0x3cdff3,
          _0x78ded2,
          _0x5d0c51,
          _0x2d9a02,
          _0x398636,
          _0x5e4b9f
        );
      })
      [_0x17f1ac(0x441)]((_0x19b2b3) => {
        const _0x461cff = _0x17f1ac;
        console[_0x461cff(0x585)](
          "Error\x20cargando\x20promociones:",
          _0x19b2b3
        ),
          actualizarPromocionesEnVista(
            _0x3cdff3,
            _0x78ded2,
            _0x5d0c51,
            _0x2d9a02,
            _0x398636,
            []
          );
      });
}
function generarCodigoBarras(_0x17a59c) {
  const _0x23aa27 = _0x5637fc,
    _0x142311 = _0x17a59c["pr_sku"] || _0x17a59c[_0x23aa27(0x33d)] || "",
    _0x19620d = _0x23aa27(0x38d) + _0x17a59c[_0x23aa27(0x4fc)],
    _0x3d47dc = document[_0x23aa27(0x4a4)](_0x19620d);
  if (!_0x3d47dc || !_0x142311) {
    console[_0x23aa27(0x553)](_0x23aa27(0x46f));
    return;
  }
  const _0x26030f = () => {
    const _0x479e1d = _0x23aa27;
    if (window[_0x479e1d(0x3c4)])
      try {
        let _0x1170a8 = _0x479e1d(0x370);
        const _0x33773d = String(_0x142311);
        if (
          _0x33773d[_0x479e1d(0x2b6)] === 0xd &&
          /^\d+$/[_0x479e1d(0x453)](_0x33773d)
        )
          _0x1170a8 = _0x479e1d(0x473);
        else {
          if (_0x33773d[_0x479e1d(0x2b6)] === 0x8 && /^\d+$/["test"](_0x33773d))
            _0x1170a8 = _0x479e1d(0x2d9);
          else
            _0x33773d[_0x479e1d(0x2b6)] === 0xc &&
              /^\d+$/[_0x479e1d(0x453)](_0x33773d) &&
              (_0x1170a8 = _0x479e1d(0x3ac));
        }
        console[_0x479e1d(0x3dd)](
          _0x479e1d(0x551) + _0x1170a8 + _0x479e1d(0x52b) + _0x33773d
        ),
          JsBarcode(_0x3d47dc, _0x33773d, {
            format: _0x1170a8,
            width: 0x2,
            height: 0x32,
            displayValue: ![],
            margin: 0x0,
            background: _0x479e1d(0x301),
            lineColor: "#000000",
          }),
          window[_0x479e1d(0x2ef)] <= 0x300 &&
            JsBarcode(_0x3d47dc, _0x33773d, {
              format: _0x1170a8,
              width: 1.5,
              height: 0x28,
              displayValue: ![],
              margin: 0x0,
              background: _0x479e1d(0x301),
              lineColor: _0x479e1d(0x54d),
            });
      } catch (_0xad8076) {
        console[_0x479e1d(0x585)](
          "Error\x20generando\x20código\x20de\x20barras:",
          _0xad8076
        );
        const _0x227e29 = _0x3d47dc[_0x479e1d(0x435)]("2d");
        (_0x227e29[_0x479e1d(0x54b)] = "#f8f9fa"),
          _0x227e29[_0x479e1d(0x304)](
            0x0,
            0x0,
            _0x3d47dc["width"],
            _0x3d47dc[_0x479e1d(0x40f)]
          ),
          (_0x227e29[_0x479e1d(0x54b)] = _0x479e1d(0x4ac)),
          (_0x227e29[_0x479e1d(0x530)] = _0x479e1d(0x240)),
          (_0x227e29[_0x479e1d(0x42e)] = _0x479e1d(0x26b)),
          _0x227e29["fillText"](
            _0x479e1d(0x1f3),
            _0x3d47dc[_0x479e1d(0x512)] / 0x2,
            _0x3d47dc["height"] / 0x2
          );
      }
    else setTimeout(_0x26030f, 0x64);
  };
  _0x26030f();
}
function renderProductoConPromociones(
  _0x5648d5,
  _0x2587d8,
  _0x1c8b3c,
  _0x18ee02,
  _0x4a1f1b
) {
  const _0x111c63 = _0x5637fc;
  resultadoDiv[_0x111c63(0x37f)] =
    _0x111c63(0x217) +
    (_0x2587d8
      ? _0x111c63(0x429) +
        _0x2587d8 +
        "\x22\x20alt=\x22" +
        _0x5648d5[_0x111c63(0x244)] +
        _0x111c63(0x4ee)
      : "") +
    _0x111c63(0x590) +
    _0x5648d5[_0x111c63(0x244)] +
    _0x111c63(0x514) +
    _0x1c8b3c["toFixed"](0x2) +
    _0x111c63(0x30c) +
    _0x18ee02[_0x111c63(0x535)](0x2) +
    _0x111c63(0x33b) +
    _0x5648d5[_0x111c63(0x4fc)] +
    _0x111c63(0x1e6) +
    (_0x5648d5[_0x111c63(0x4fc)] ||
      _0x5648d5[_0x111c63(0x33d)] ||
      _0x111c63(0x428)) +
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    _0x4a1f1b +
    _0x111c63(0x2cd);
}
function actualizarPromocionesEnVista(
  _0x41182e,
  _0x3256d1,
  _0x47cc60,
  _0x10336f,
  _0xd23968,
  _0x42e3bc
) {
  const _0xbcd8c3 = _0x5637fc;
  console["log"](_0xbcd8c3(0x5a2), _0x42e3bc);
  let _0x48bfa3 = "";
  if (_0x42e3bc[_0xbcd8c3(0x2b6)] > 0x0) {
    const _0x85b759 = _0x42e3bc[_0xbcd8c3(0x42c)](
      (_0x34f189) =>
        _0x34f189[_0xbcd8c3(0x574)] &&
        (_0x34f189[_0xbcd8c3(0x237)] === _0xbcd8c3(0x5b6) ||
          _0x34f189["fuente"] === "indexeddb_local")
    );
    console["log"](_0xbcd8c3(0x49d), _0x85b759);
    if (_0x85b759[_0xbcd8c3(0x2b6)] > 0x0) {
      const _0x42df3e = _0x85b759[_0xbcd8c3(0x20d)]((_0x713b79) => {
        const _0x22cf93 = _0xbcd8c3;
        console[_0x22cf93(0x3dd)](
          "🔍\x20Datos\x20de\x20promoción\x20recibidos:",
          _0x713b79
        );
        const _0x324ca3 =
          _0x713b79[_0x22cf93(0x2b7)] || _0x713b79[_0x22cf93(0x2ac)] || "";
        let _0x306914 =
          _0x713b79[_0x22cf93(0x5a6)] || _0x713b79[_0x22cf93(0x53f)] || "";
        const _0x5ef3de =
          _0x713b79[_0x22cf93(0x547)] || _0x713b79[_0x22cf93(0x4ea)] || "";
        console[_0x22cf93(0x3dd)](_0x22cf93(0x533), {
          cantidad: _0x324ca3,
          precio: _0x306914,
          nombrePromo: _0x5ef3de,
        });
        if (_0x324ca3 && _0x306914) {
          const _0x13d1e0 = parseInt(_0x324ca3),
            _0x115166 = parseFloat(_0x306914);
          if (!isNaN(_0x13d1e0) && !isNaN(_0x115166)) {
            const _0x376de9 = _0x13d1e0 * _0x115166,
              _0x1e2c6c = Math["round"](_0x376de9);
            console[_0x22cf93(0x3dd)](
              "🧮\x20Calculando\x20precio\x20total:\x20" +
                _0x13d1e0 +
                "\x20x\x20" +
                _0x115166 +
                _0x22cf93(0x2dc) +
                _0x376de9 +
                _0x22cf93(0x330) +
                _0x1e2c6c +
                _0x22cf93(0x21d)
            ),
              (_0x306914 = _0x1e2c6c["toString"]());
          }
        }
        console[_0x22cf93(0x3dd)](
          "📊\x20Datos\x20finales\x20para\x20construcción:",
          { cantidad: _0x324ca3, precio: _0x306914, nombrePromo: _0x5ef3de }
        );
        let _0x161f33 = "";
        if (_0x324ca3 && _0x306914)
          (_0x161f33 = _0x324ca3 + "x" + _0x306914),
            console[_0x22cf93(0x3dd)](_0x22cf93(0x4c3), _0x161f33);
        else {
          if (_0x5ef3de) {
            const _0x109c81 = _0x5ef3de[_0x22cf93(0x365)](
                /(\d+)\s*[xX×]\s*(\d+)/i
              ),
              _0x2e8988 = _0x5ef3de["match"](/(\d+)\s*[xX×]\s*\$?\s*(\d+)/i),
              _0x40ee9b = _0x5ef3de[_0x22cf93(0x365)](/(\d+)\s*[xX×]/i);
            if (_0x109c81)
              (_0x161f33 = _0x109c81[0x1] + "x" + _0x109c81[0x2]),
                console[_0x22cf93(0x3dd)](
                  "✅\x20Extraído\x20formato\x20completo\x20del\x20nombre:",
                  _0x161f33
                );
            else {
              if (_0x2e8988)
                (_0x161f33 = _0x2e8988[0x1] + "x" + _0x2e8988[0x2]),
                  console[_0x22cf93(0x3dd)](
                    "✅\x20Extraído\x20formato\x20con\x20peso\x20del\x20nombre:",
                    _0x161f33
                  );
              else
                _0x40ee9b
                  ? ((_0x161f33 = _0x40ee9b[0x1] + "x"),
                    console[_0x22cf93(0x3dd)](_0x22cf93(0x248), _0x161f33))
                  : ((_0x161f33 = _0x5ef3de),
                    console[_0x22cf93(0x3dd)](
                      "⚠️\x20Usando\x20nombre\x20completo:",
                      _0x161f33
                    ));
            }
          } else
            (_0x161f33 = _0x22cf93(0x5a9)),
              console["log"]("❌\x20Sin\x20datos,\x20usando\x20genérico");
        }
        return _0x22cf93(0x46e) + _0x161f33 + _0x22cf93(0x405);
      })[_0xbcd8c3(0x443)]("");
      _0x48bfa3 =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:#495057;\x22>🏷️\x20PROMOCIONES\x20ACTIVAS</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x42df3e +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22\x20style=\x22font-weight:500;\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    } else
      _0x48bfa3 =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
  } else _0x48bfa3 = _0xbcd8c3(0x2ab);
  const _0x2b669d = document["getElementById"](_0xbcd8c3(0x3a5));
  _0x2b669d && (_0x2b669d["innerHTML"] = _0x48bfa3);
}
async function mostrarModalPromocionesGenerales() {
  const _0xff4bd2 = _0x5637fc;
  cerrarCamaraAlAbrirModal(_0xff4bd2(0x4fd));
  const _0x346bea =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
        _0xff4bd2(0x453)
      ](navigator[_0xff4bd2(0x3c8)]),
    _0x30cde9 = /iPad|iPhone|iPod/["test"](navigator[_0xff4bd2(0x3c8)]);
  if (_0x346bea) hideMobileKeyboard();
  console["log"](_0xff4bd2(0x4d4), _0x346bea),
    console["log"]("🍎\x20Dispositivo\x20iOS:", _0x30cde9);
  const _0x47a0d7 = document[_0xff4bd2(0x4a4)](_0xff4bd2(0x579)),
    _0xd3d930 = document[_0xff4bd2(0x4a4)]("promociones-generales-modal-body");
  if (!_0xd3d930 || !_0x47a0d7) {
    console[_0xff4bd2(0x585)]("❌\x20Modal\x20no\x20encontrado");
    return;
  }
  try {
    const _0x2f9ea9 = () => {
      const _0x209c76 = _0xff4bd2,
        _0x3e06f6 = document["getElementById"]("codigo");
      _0x3e06f6 &&
        ((_0x3e06f6["placeholder"] = _0x209c76(0x33f)), bringInputIntoView());
    };
    _0x47a0d7[_0xff4bd2(0x245)](_0xff4bd2(0x2a7), _0x2f9ea9, { once: !![] });
  } catch (_0x14ea34) {}
  try {
    const _0x554434 = document[_0xff4bd2(0x4a4)](_0xff4bd2(0x531));
    _0x554434 &&
      ((_0x554434[_0xff4bd2(0x2f6)] = ""),
      (_0x554434[_0xff4bd2(0x49f)] = _0xff4bd2(0x33f)));
    const _0x45b3dd = document[_0xff4bd2(0x4a4)](_0xff4bd2(0x591));
    _0x45b3dd &&
      ((_0x45b3dd["innerHTML"] = ""),
      (_0x45b3dd[_0xff4bd2(0x342)]["display"] = _0xff4bd2(0x2e2)));
  } catch (_0x40e5de) {}
  try {
    console["log"](_0xff4bd2(0x26e)),
      (_0xd3d930[_0xff4bd2(0x37f)] = _0xff4bd2(0x1e4));
    const _0x96ae1e = await getAllProductos();
    let _0x4eda84 = [];
    try {
      _0x4eda84 = await getAllPromociones();
    } catch (_0x2dbaa5) {
      _0x4eda84 = [];
    }
    const _0x212a09 = ![];
    console[_0xff4bd2(0x3dd)](_0xff4bd2(0x22b), {
      total: _0x4eda84[_0xff4bd2(0x2b6)],
      desdeServidor: _0x212a09,
    });
    if (_0x4eda84[_0xff4bd2(0x2b6)] === 0x0) {
      _0xd3d930[_0xff4bd2(0x37f)] = _0xff4bd2(0x2b2);
      return;
    }
    let _0x58663d = _0xff4bd2(0x5b3);
    _0x4eda84[_0xff4bd2(0x2bf)]((_0x4ea002, _0x3e24ab) => {
      const _0x489a00 = _0xff4bd2;
      let _0xb033f = [];
      if (
        _0x4ea002["skus"] &&
        Array[_0x489a00(0x44d)](_0x4ea002[_0x489a00(0x314)])
      )
        _0xb033f = _0x4ea002[_0x489a00(0x314)];
      else
        _0x4ea002[_0x489a00(0x4d7)] &&
          _0x4ea002[_0x489a00(0x4d7)][_0x489a00(0x4fc)] &&
          (Array["isArray"](_0x4ea002[_0x489a00(0x4d7)][_0x489a00(0x4fc)])
            ? (_0xb033f = _0x4ea002[_0x489a00(0x4d7)][_0x489a00(0x4fc)])
            : (_0xb033f = _0x4ea002[_0x489a00(0x4d7)]["pr_sku"]
                [_0x489a00(0x567)]("\x20")
                [_0x489a00(0x42c)]((_0x47080d) =>
                  _0x47080d[_0x489a00(0x410)]()
                )));
      const _0x43ff40 = new Map(
          _0x96ae1e[_0x489a00(0x20d)]((_0x4b7c2c) => [
            String(_0x4b7c2c[_0x489a00(0x4fc)]),
            _0x4b7c2c,
          ])
        ),
        _0x2ff23a = _0xb033f[_0x489a00(0x20d)]((_0x37e704) =>
          _0x43ff40[_0x489a00(0x390)](String(_0x37e704))
        )["filter"](Boolean),
        _0xc3fab2 =
          _0x4ea002[_0x489a00(0x4ea)] ||
          _0x4ea002[_0x489a00(0x482)] ||
          _0x489a00(0x369) + (_0x3e24ab + 0x1),
        _0x1c6e87 =
          _0x4ea002[_0x489a00(0x225)] ||
          _0x4ea002[_0x489a00(0x3e8)] ||
          "No\x20especificado",
        _0x17f78d =
          _0x4ea002["pro_mensaje"] || _0x4ea002[_0x489a00(0x382)] || "",
        _0x3847ae = _0x4ea002[_0x489a00(0x2ac)] || "",
        _0x5d2ff0 = Number(_0x3847ae) || 0x1;
      let _0x447f57 = 0x0;
      const _0x200961 = (_0x17f78d + "\x20" + _0xc3fab2)[_0x489a00(0x325)](),
        _0x3d0944 = _0x200961["match"](/(\d+)\s*x\s*(\d+)/);
      if (_0x3d0944) _0x447f57 = Math[_0x489a00(0x315)](Number(_0x3d0944[0x2]));
      else {
        const _0x34bf95 = Number(_0x4ea002[_0x489a00(0x53f)]) || 0x0;
        _0x447f57 = Math["round"](_0x34bf95 * _0x5d2ff0);
      }
      _0x58663d +=
        _0x489a00(0x343) +
        _0xc3fab2 +
        "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22productos-lista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x2ff23a[_0x489a00(0x2b6)] > 0x0
          ? _0x489a00(0x37a) +
            _0x2ff23a[_0x489a00(0x447)](0x0, 0x4)
              [_0x489a00(0x20d)]((_0x45a7e9) => {
                const _0x19cf90 = _0x489a00;
                let _0x17d157 = "";
                if (
                  _0x45a7e9["pr_imagen"] &&
                  _0x45a7e9[_0x19cf90(0x55a)][_0x19cf90(0x410)]() !== ""
                ) {
                  if (
                    _0x45a7e9["pr_imagen"][_0x19cf90(0x292)](_0x19cf90(0x2aa))
                  )
                    _0x17d157 = _0x45a7e9[_0x19cf90(0x55a)];
                  else {
                    let _0x20ccf8 = _0x45a7e9[_0x19cf90(0x55a)][
                      _0x19cf90(0x292)
                    ]("/")
                      ? _0x45a7e9[_0x19cf90(0x55a)]
                      : "/" + _0x45a7e9[_0x19cf90(0x55a)];
                    _0x17d157 = _0x19cf90(0x37d) + _0x20ccf8;
                  }
                }
                const _0x1dd401 =
                    Number(_0x45a7e9[_0x19cf90(0x223)]) ||
                    Number(_0x45a7e9["L1"]) ||
                    0x0,
                  _0x42d083 = Math["round"](_0x1dd401 * 1.16 * 0x64) / 0x64;
                return (
                  _0x19cf90(0x34c) +
                  (_0x17d157
                    ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x22\x20style=\x22min-width:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22" +
                      _0x17d157 +
                      _0x19cf90(0x5be) +
                      _0x45a7e9[_0x19cf90(0x244)] +
                      _0x19cf90(0x444)
                    : _0x19cf90(0x322)) +
                  _0x19cf90(0x349) +
                  _0x45a7e9["pr_name"] +
                  "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$" +
                  _0x42d083[_0x19cf90(0x535)](0x2) +
                  _0x19cf90(0x472) +
                  _0x45a7e9[_0x19cf90(0x4fc)] +
                  "\x27)\x22\x20title=\x22Ver\x20detalles\x20completos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                );
              })
              ["join"]("") +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            (_0x2ff23a["length"] > 0x4
              ? _0x489a00(0x578) + (_0x2ff23a["length"] - 0x4) + "\x20más</div>"
              : "") +
            _0x489a00(0x4e6)
          : _0x489a00(0x27a)) +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    }),
      (_0x58663d += _0xff4bd2(0x216)),
      (_0xd3d930["innerHTML"] = _0x58663d);
    if (_0x346bea || _0x30cde9) {
      console[_0xff4bd2(0x3dd)](_0xff4bd2(0x2d6)),
        document["querySelectorAll"](_0xff4bd2(0x338))["forEach"]((_0x243fee) =>
          _0x243fee[_0xff4bd2(0x49b)]()
        ),
        (_0x47a0d7["style"][_0xff4bd2(0x1ef)] = _0xff4bd2(0x527)),
        (_0x47a0d7[_0xff4bd2(0x342)][_0xff4bd2(0x2be)] = "0"),
        (_0x47a0d7[_0xff4bd2(0x342)][_0xff4bd2(0x2b9)] = "0"),
        (_0x47a0d7["style"][_0xff4bd2(0x512)] = _0xff4bd2(0x2ea)),
        (_0x47a0d7[_0xff4bd2(0x342)]["height"] = _0xff4bd2(0x2ea)),
        (_0x47a0d7[_0xff4bd2(0x342)][_0xff4bd2(0x31a)] = _0xff4bd2(0x442)),
        (_0x47a0d7[_0xff4bd2(0x342)]["backgroundColor"] = "transparent");
      const _0x54f52a = _0x47a0d7["querySelector"](_0xff4bd2(0x4f1));
      _0x54f52a &&
        ((_0x54f52a[_0xff4bd2(0x342)]["width"] = _0xff4bd2(0x2ea)),
        (_0x54f52a[_0xff4bd2(0x342)][_0xff4bd2(0x4b4)] = "100%"),
        (_0x54f52a[_0xff4bd2(0x342)]["height"] = _0xff4bd2(0x2ea)),
        (_0x54f52a[_0xff4bd2(0x342)]["margin"] = "0"),
        (_0x54f52a[_0xff4bd2(0x342)][_0xff4bd2(0x2f0)] = "flex"),
        (_0x54f52a["style"][_0xff4bd2(0x4c9)] = _0xff4bd2(0x5c2)));
      const _0x318006 = _0x47a0d7["querySelector"](_0xff4bd2(0x474));
      _0x318006 &&
        ((_0x318006["style"][_0xff4bd2(0x512)] = _0xff4bd2(0x2ea)),
        (_0x318006[_0xff4bd2(0x342)][_0xff4bd2(0x40f)] = _0xff4bd2(0x2ea)),
        (_0x318006[_0xff4bd2(0x342)]["border"] = "none"),
        (_0x318006[_0xff4bd2(0x342)][_0xff4bd2(0x594)] = "0"),
        (_0x318006[_0xff4bd2(0x342)][_0xff4bd2(0x2f0)] = _0xff4bd2(0x47d)),
        (_0x318006[_0xff4bd2(0x342)][_0xff4bd2(0x4c9)] = _0xff4bd2(0x5c2)));
      const _0x4d3a3e = _0x47a0d7[_0xff4bd2(0x4d5)](".modal-body");
      _0x4d3a3e &&
        ((_0x4d3a3e["style"][_0xff4bd2(0x47d)] = "1"),
        (_0x4d3a3e[_0xff4bd2(0x342)][_0xff4bd2(0x4c5)] = _0xff4bd2(0x1ec)),
        (_0x4d3a3e[_0xff4bd2(0x342)][_0xff4bd2(0x4b9)] = _0xff4bd2(0x2af)),
        (_0x4d3a3e[_0xff4bd2(0x342)][_0xff4bd2(0x284)] = _0xff4bd2(0x2e2))),
        (_0x47a0d7[_0xff4bd2(0x342)][_0xff4bd2(0x2f0)] = _0xff4bd2(0x555)),
        _0x47a0d7[_0xff4bd2(0x490)][_0xff4bd2(0x289)](_0xff4bd2(0x436)),
        document[_0xff4bd2(0x305)]["classList"][_0xff4bd2(0x49b)](
          _0xff4bd2(0x2c7)
        ),
        (document[_0xff4bd2(0x305)]["style"][_0xff4bd2(0x53d)] = "");
    } else {
      console["log"]("💻\x20Abriendo\x20modal\x20en\x20desktop...");
      const _0x56c4fe = new bootstrap["Modal"](_0x47a0d7, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x56c4fe["show"]();
    }
  } catch (_0x304519) {
    console[_0xff4bd2(0x585)](_0xff4bd2(0x306), _0x304519),
      (_0xd3d930[_0xff4bd2(0x37f)] =
        _0xff4bd2(0x3bf) + _0x304519[_0xff4bd2(0x2ee)] + _0xff4bd2(0x4a3));
  }
}
function cerrarModalMobile() {
  const _0x25d4db = _0x5637fc;
  console[_0x25d4db(0x3dd)](_0x25d4db(0x383));
  const _0x229f16 = document["getElementById"](_0x25d4db(0x579));
  if (_0x229f16) {
    _0x229f16[_0x25d4db(0x490)]["remove"]("show"),
      (_0x229f16["style"]["display"] = _0x25d4db(0x2e2)),
      (_0x229f16["style"][_0x25d4db(0x1ef)] = ""),
      (_0x229f16[_0x25d4db(0x342)][_0x25d4db(0x2be)] = ""),
      (_0x229f16[_0x25d4db(0x342)][_0x25d4db(0x2b9)] = ""),
      (_0x229f16[_0x25d4db(0x342)][_0x25d4db(0x512)] = ""),
      (_0x229f16["style"][_0x25d4db(0x40f)] = ""),
      (_0x229f16[_0x25d4db(0x342)]["zIndex"] = ""),
      (_0x229f16[_0x25d4db(0x342)][_0x25d4db(0x339)] = "");
    const _0x192b40 = _0x229f16[_0x25d4db(0x4d5)](_0x25d4db(0x4f1));
    _0x192b40 &&
      ((_0x192b40["style"]["width"] = ""),
      (_0x192b40[_0x25d4db(0x342)][_0x25d4db(0x4b4)] = ""),
      (_0x192b40[_0x25d4db(0x342)][_0x25d4db(0x40f)] = ""),
      (_0x192b40["style"][_0x25d4db(0x4b7)] = ""),
      (_0x192b40[_0x25d4db(0x342)][_0x25d4db(0x2f0)] = ""),
      (_0x192b40[_0x25d4db(0x342)]["flexDirection"] = ""));
    const _0xd2ca94 = _0x229f16[_0x25d4db(0x4d5)](_0x25d4db(0x474));
    _0xd2ca94 &&
      ((_0xd2ca94[_0x25d4db(0x342)][_0x25d4db(0x512)] = ""),
      (_0xd2ca94[_0x25d4db(0x342)]["height"] = ""),
      (_0xd2ca94["style"][_0x25d4db(0x2f2)] = ""),
      (_0xd2ca94[_0x25d4db(0x342)][_0x25d4db(0x594)] = ""),
      (_0xd2ca94[_0x25d4db(0x342)][_0x25d4db(0x2f0)] = ""),
      (_0xd2ca94[_0x25d4db(0x342)][_0x25d4db(0x4c9)] = ""));
    const _0x5a24d0 = _0x229f16[_0x25d4db(0x4d5)](_0x25d4db(0x5a1));
    _0x5a24d0 &&
      ((_0x5a24d0[_0x25d4db(0x342)][_0x25d4db(0x47d)] = ""),
      (_0x5a24d0["style"]["overflowY"] = ""),
      (_0x5a24d0[_0x25d4db(0x342)][_0x25d4db(0x4b9)] = ""),
      (_0x5a24d0["style"][_0x25d4db(0x284)] = ""));
  }
  document["body"][_0x25d4db(0x490)][_0x25d4db(0x49b)](_0x25d4db(0x2c7)),
    (document[_0x25d4db(0x305)][_0x25d4db(0x342)]["overflow"] = "");
  try {
    const _0x19764e = bootstrap[_0x25d4db(0x599)]["getInstance"](_0x229f16);
    _0x19764e && _0x19764e[_0x25d4db(0x387)]();
  } catch (_0x4482fb) {
    console[_0x25d4db(0x3dd)](_0x25d4db(0x464));
  }
  try {
    document[_0x25d4db(0x38a)](_0x25d4db(0x338))["forEach"]((_0xd5f091) =>
      _0xd5f091["remove"]()
    );
  } catch (_0xf33713) {}
  try {
    const _0x44eb2c = document[_0x25d4db(0x4a4)]("codigo");
    _0x44eb2c &&
      ((_0x44eb2c[_0x25d4db(0x49f)] =
        "inserta\x20sku\x20o\x20busca\x20un\x20producto"),
      bringInputIntoView());
  } catch (_0x4ee6b8) {}
}
async function consultarProductoDesdeModal(_0x487c51) {
  const _0x1c29a8 = _0x5637fc;
  try {
    try {
      cerrarModalMobile();
    } catch (_0x3e19e8) {}
    const _0x13608b = document[_0x1c29a8(0x4a4)](_0x1c29a8(0x579));
    _0x13608b &&
      (_0x13608b[_0x1c29a8(0x490)][_0x1c29a8(0x49b)](_0x1c29a8(0x436)),
      (_0x13608b[_0x1c29a8(0x342)][_0x1c29a8(0x2f0)] = _0x1c29a8(0x2e2)));
    try {
      const _0x11815d = bootstrap[_0x1c29a8(0x599)]["getInstance"](_0x13608b);
      if (_0x11815d) _0x11815d["hide"]();
    } catch (_0x1ee598) {}
    document[_0x1c29a8(0x38a)](_0x1c29a8(0x4ce))[_0x1c29a8(0x2bf)](
      (_0x1aa93d) => _0x1aa93d[_0x1c29a8(0x49b)]()
    ),
      document[_0x1c29a8(0x305)][_0x1c29a8(0x490)][_0x1c29a8(0x49b)](
        "modal-open"
      ),
      (document[_0x1c29a8(0x305)][_0x1c29a8(0x342)]["overflow"] = "");
    const _0x5c245c = await getAllProductos(),
      _0x3bc302 = _0x5c245c[_0x1c29a8(0x1ed)](
        (_0x8bdde8) =>
          String(_0x8bdde8["pr_sku"]) === String(_0x487c51) ||
          String(_0x8bdde8[_0x1c29a8(0x33d)]) === String(_0x487c51)
      );
    if (_0x3bc302) {
      (inputCodigo["value"] = ""), mostrarDetalleProducto(_0x3bc302);
      const _0x2bc358 = {
        ..._0x3bc302,
        FECHA_ESCANEO: new Date()["toISOString"](),
      };
      historial["unshift"](_0x2bc358),
        setCookie("historial", JSON["stringify"](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x46d500 = _0x1c29a8,
            _0x398b79 = document["getElementById"]("resultado");
          _0x398b79 &&
            _0x398b79[_0x46d500(0x466)]({
              behavior: _0x46d500(0x362),
              block: _0x46d500(0x273),
              inline: _0x46d500(0x588),
            });
        }, 0x12c);
    } else
      (resultadoDiv[_0x1c29a8(0x37f)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20" +
        _0x487c51 +
        _0x1c29a8(0x4e8)),
        setTimeout(() => {
          resultadoDiv["innerHTML"] = "";
        }, 0x1388);
  } catch (_0x5c92da) {
    console[_0x1c29a8(0x585)](_0x1c29a8(0x308), _0x5c92da),
      (resultadoDiv[_0x1c29a8(0x37f)] =
        _0x1c29a8(0x559) + _0x5c92da[_0x1c29a8(0x2ee)] + _0x1c29a8(0x4a5)),
      setTimeout(() => {
        const _0x1d5192 = _0x1c29a8;
        resultadoDiv[_0x1d5192(0x37f)] = "";
      }, 0x1388);
  }
}
async function consultarProductoDesdeHistorial(_0x32a324) {
  const _0x2f6ffe = _0x5637fc;
  try {
    const _0xfac1fd = await getAllProductos(),
      _0x204ac9 = _0xfac1fd["find"](
        (_0x540667) =>
          String(_0x540667[_0x2f6ffe(0x4fc)]) === String(_0x32a324) ||
          String(_0x540667["pr_gtin"]) === String(_0x32a324)
      );
    if (_0x204ac9) {
      (inputCodigo["value"] = ""), mostrarDetalleProducto(_0x204ac9);
      const _0x4768c4 = historial[_0x2f6ffe(0x2db)](
        (_0x48a2da) =>
          (_0x48a2da[_0x2f6ffe(0x4fc)] &&
            String(_0x48a2da[_0x2f6ffe(0x4fc)]) === String(_0x32a324)) ||
          (_0x48a2da[_0x2f6ffe(0x33d)] &&
            String(_0x48a2da[_0x2f6ffe(0x33d)]) === String(_0x32a324))
      );
      if (_0x4768c4 !== -0x1) {
        const _0x5ccafa = historial[_0x2f6ffe(0x2e8)](_0x4768c4, 0x1)[0x0];
        (_0x5ccafa[_0x2f6ffe(0x352)] = new Date()[_0x2f6ffe(0x3d8)]()),
          historial["unshift"](_0x5ccafa),
          setCookie("historial", JSON["stringify"](historial), 0x1e),
          renderHistorial();
      }
      setTimeout(() => {
        const _0x16e58a = _0x2f6ffe,
          _0x48c1c8 = document[_0x16e58a(0x4a4)](_0x16e58a(0x2fc));
        _0x48c1c8 &&
          _0x48c1c8[_0x16e58a(0x466)]({
            behavior: _0x16e58a(0x362),
            block: "start",
            inline: _0x16e58a(0x588),
          });
      }, 0x12c);
    } else
      (resultadoDiv[_0x2f6ffe(0x37f)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20" +
        _0x32a324 +
        _0x2f6ffe(0x4e8)),
        setTimeout(() => {
          const _0x28e1ff = _0x2f6ffe;
          resultadoDiv[_0x28e1ff(0x37f)] = "";
        }, 0x1388);
  } catch (_0x2d12a8) {
    console[_0x2f6ffe(0x585)](_0x2f6ffe(0x31e), _0x2d12a8),
      (resultadoDiv[_0x2f6ffe(0x37f)] =
        _0x2f6ffe(0x559) +
        _0x2d12a8[_0x2f6ffe(0x2ee)] +
        "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      setTimeout(() => {
        const _0x583732 = _0x2f6ffe;
        resultadoDiv[_0x583732(0x37f)] = "";
      }, 0x1388);
  }
}
(window[_0x5637fc(0x385)] = mostrarModalPromocionesGenerales),
  (window["consultarProductoDesdeModal"] = consultarProductoDesdeModal),
  (window[_0x5637fc(0x23f)] = consultarProductoDesdeHistorial);
async function tienePromociones(_0x1c9daf) {
  const _0x57ba2a = _0x5637fc;
  try {
    const _0x230309 = (_0x1c9daf[_0x57ba2a(0x4fc)] || "")[_0x57ba2a(0x4cd)]();
    if (!_0x230309) return ![];
    const _0x44a65d = await getAllPromociones();
    if (_0x44a65d[_0x57ba2a(0x2b6)] === 0x0) return ![];
    for (const _0xe51c15 of _0x44a65d) {
      let _0x567ea0 = [];
      if (
        _0xe51c15[_0x57ba2a(0x314)] &&
        Array[_0x57ba2a(0x44d)](_0xe51c15[_0x57ba2a(0x314)])
      )
        _0x567ea0 = _0xe51c15["skus"];
      else
        _0xe51c15[_0x57ba2a(0x4d7)] &&
          _0xe51c15[_0x57ba2a(0x4d7)][_0x57ba2a(0x4fc)] &&
          (Array[_0x57ba2a(0x44d)](_0xe51c15[_0x57ba2a(0x4d7)]["pr_sku"])
            ? (_0x567ea0 = _0xe51c15[_0x57ba2a(0x4d7)][_0x57ba2a(0x4fc)])
            : (_0x567ea0 = _0xe51c15[_0x57ba2a(0x4d7)][_0x57ba2a(0x4fc)]
                [_0x57ba2a(0x567)]("\x20")
                [_0x57ba2a(0x42c)]((_0x19cfc5) => _0x19cfc5["trim"]())));
      if (_0x567ea0[_0x57ba2a(0x5c8)](_0x230309)) return !![];
    }
    return ![];
  } catch (_0x563652) {
    return console[_0x57ba2a(0x553)](_0x57ba2a(0x4e3), _0x563652), ![];
  }
}
let searchTimeout;
inputCodigo[_0x5637fc(0x245)](_0x5637fc(0x581), async function (_0x53916b) {
  const _0x2b4af3 = _0x5637fc,
    _0x2007ab = inputCodigo[_0x2b4af3(0x2f6)]
      [_0x2b4af3(0x410)]()
      [_0x2b4af3(0x325)]();
  clearTimeout(searchTimeout), (sugerenciasDiv[_0x2b4af3(0x37f)] = "");
  if (!_0x2007ab || _0x2007ab[_0x2b4af3(0x2b6)] < 0x2) {
    sugerenciasDiv[_0x2b4af3(0x342)]["display"] = _0x2b4af3(0x2e2);
    return;
  }
  searchTimeout = setTimeout(async () => {
    const _0x54b118 = _0x2b4af3;
    let _0x4efb19 = await getAllProductos(),
      _0xc30a8e = _0x4efb19[_0x54b118(0x42c)]((_0x3f78b0) => {
        const _0x233be0 = _0x54b118;
        return (
          (_0x3f78b0[_0x233be0(0x244)] &&
            _0x3f78b0["pr_name"]
              ["toLowerCase"]()
              [_0x233be0(0x5c8)](_0x2007ab)) ||
          (_0x3f78b0["pr_sku"] &&
            String(_0x3f78b0[_0x233be0(0x4fc)])
              [_0x233be0(0x325)]()
              [_0x233be0(0x5c8)](_0x2007ab)) ||
          (_0x3f78b0[_0x233be0(0x33d)] &&
            String(_0x3f78b0[_0x233be0(0x33d)])
              [_0x233be0(0x325)]()
              [_0x233be0(0x5c8)](_0x2007ab))
        );
      });
    const _0x69d0dd = new Set();
    _0xc30a8e = _0xc30a8e[_0x54b118(0x42c)]((_0x1fed6c) => {
      const _0x4fafd1 = _0x54b118,
        _0x3e8004 = _0x1fed6c["pr_sku"] || _0x1fed6c[_0x4fafd1(0x33d)];
      if (!_0x3e8004 || _0x69d0dd[_0x4fafd1(0x41a)](_0x3e8004)) return ![];
      return _0x69d0dd[_0x4fafd1(0x289)](_0x3e8004), !![];
    });
    if (_0xc30a8e[_0x54b118(0x2b6)] === 0x0) {
      sugerenciasDiv[_0x54b118(0x342)][_0x54b118(0x2f0)] = _0x54b118(0x2e2);
      return;
    }
    _0xc30a8e[_0x54b118(0x52d)]((_0x249b6b, _0xfb45e2) => {
      const _0x4dee0c = _0x54b118,
        _0x5d68d8 = (_0x249b6b["pr_name"] || "")[_0x4dee0c(0x325)](),
        _0x562a3f = (_0xfb45e2[_0x4dee0c(0x244)] || "")["toLowerCase"](),
        _0x354883 = _0x5d68d8[_0x4dee0c(0x292)](_0x2007ab),
        _0x52d3d9 = _0x562a3f[_0x4dee0c(0x292)](_0x2007ab);
      if (_0x354883 && !_0x52d3d9) return -0x1;
      if (!_0x354883 && _0x52d3d9) return 0x1;
      return _0x5d68d8[_0x4dee0c(0x2b6)] - _0x562a3f[_0x4dee0c(0x2b6)];
    }),
      (_0xc30a8e = _0xc30a8e["slice"](0x0, 0xa));
    const _0x268eb9 = _0xc30a8e["map"]((_0x2a3c83) =>
        tienePromociones(_0x2a3c83)
      ),
      _0x25b589 = await Promise["all"](_0x268eb9);
    _0xc30a8e[_0x54b118(0x2bf)]((_0x3a9ff6, _0x2486c7) => {
      const _0x22e897 = _0x54b118,
        _0x2e151a = _0x25b589[_0x2486c7],
        _0x5c44b2 = document[_0x22e897(0x4ba)](_0x22e897(0x3c3));
      (_0x5c44b2["type"] = "button"),
        (_0x5c44b2["className"] =
          "list-group-item\x20list-group-item-action\x20d-flex\x20align-items-center");
      let _0x35b0cf = "";
      if (
        _0x3a9ff6[_0x22e897(0x55a)] &&
        _0x3a9ff6["pr_imagen"][_0x22e897(0x410)]() !== ""
      ) {
        let _0x508a17 = "";
        if (_0x3a9ff6[_0x22e897(0x55a)][_0x22e897(0x292)](_0x22e897(0x2aa)))
          _0x508a17 = _0x3a9ff6[_0x22e897(0x55a)];
        else {
          let _0x32d971 = _0x3a9ff6[_0x22e897(0x55a)][_0x22e897(0x292)]("/")
            ? _0x3a9ff6["pr_imagen"]
            : "/" + _0x3a9ff6[_0x22e897(0x55a)];
          _0x508a17 = "https://media.megaservicio.net" + _0x32d971;
        }
        _0x35b0cf =
          _0x22e897(0x4fe) +
          _0x508a17 +
          _0x22e897(0x5be) +
          _0x3a9ff6[_0x22e897(0x244)] +
          _0x22e897(0x251);
      }
      const _0x219103 = _0x2e151a ? _0x22e897(0x36d) : "";
      (_0x5c44b2["innerHTML"] =
        _0x22e897(0x566) +
        _0x35b0cf +
        _0x22e897(0x233) +
        _0x3a9ff6[_0x22e897(0x244)] +
        "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x219103 +
        _0x22e897(0x32d) +
        (_0x3a9ff6["pr_sku"] || _0x3a9ff6[_0x22e897(0x33d)] || "") +
        "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
        (_0x5c44b2[_0x22e897(0x346)] = function () {
          const _0xc2e370 = _0x22e897;
          mostrarDetalleProducto(_0x3a9ff6);
          const _0x51eed0 = {
            ..._0x3a9ff6,
            FECHA_ESCANEO: new Date()[_0xc2e370(0x3d8)](),
          };
          historial[_0xc2e370(0x48d)](_0x51eed0),
            setCookie(_0xc2e370(0x479), JSON["stringify"](historial), 0x1e),
            renderHistorial(),
            (inputCodigo["value"] = ""),
            (sugerenciasDiv[_0xc2e370(0x37f)] = ""),
            (sugerenciasDiv["style"][_0xc2e370(0x2f0)] = _0xc2e370(0x2e2));
        }),
        sugerenciasDiv[_0x22e897(0x26f)](_0x5c44b2);
    }),
      (sugerenciasDiv[_0x54b118(0x342)][_0x54b118(0x2f0)] = _0x54b118(0x555));
  }, 0x12c);
}),
  document[_0x5637fc(0x245)](_0x5637fc(0x409), function (_0x19d849) {
    const _0x506d32 = _0x5637fc;
    !inputCodigo[_0x506d32(0x2b4)](_0x19d849["target"]) &&
      !sugerenciasDiv["contains"](_0x19d849["target"]) &&
      ((sugerenciasDiv["innerHTML"] = ""),
      (sugerenciasDiv[_0x506d32(0x342)][_0x506d32(0x2f0)] = _0x506d32(0x2e2)));
  });
function iniciarScanner() {
  const _0x4bda5d = _0x5637fc;
  if (scannerActivo) {
    console["log"](_0x4bda5d(0x439));
    return;
  }
  console["log"](_0x4bda5d(0x415));
  const _0x52e599 = document[_0x4bda5d(0x4a4)](_0x4bda5d(0x35c)),
    _0x1ce2c8 = document[_0x4bda5d(0x4a4)](_0x4bda5d(0x587)),
    _0x4bc4aa = document[_0x4bda5d(0x4a4)](_0x4bda5d(0x531)),
    _0x283d01 = document[_0x4bda5d(0x4a4)](_0x4bda5d(0x2fc)),
    _0xb111cf = document[_0x4bda5d(0x4a4)](_0x4bda5d(0x591)),
    _0x542d98 = document[_0x4bda5d(0x4a4)]("formulario");
  if (!_0x52e599 || !_0x1ce2c8 || !_0x4bc4aa || !_0x283d01 || !_0x542d98) {
    console[_0x4bda5d(0x585)](_0x4bda5d(0x2fa));
    _0x283d01 &&
      (_0x283d01[_0x4bda5d(0x37f)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>❌\x20Error:\x20elementos\x20requeridos\x20no\x20encontrados\x20en\x20la\x20página</div>");
    return;
  }
  try {
    (_0x4bc4aa["value"] = ""),
      (_0x4bc4aa[_0x4bda5d(0x49f)] = _0x4bda5d(0x4f4)),
      _0xb111cf &&
        ((_0xb111cf[_0x4bda5d(0x37f)] = ""),
        (_0xb111cf[_0x4bda5d(0x342)][_0x4bda5d(0x2f0)] = _0x4bda5d(0x2e2)));
  } catch (_0x2799c5) {}
  (scannerActivo = !![]),
    (_0x52e599[_0x4bda5d(0x342)][_0x4bda5d(0x2f0)] = _0x4bda5d(0x555)),
    document[_0x4bda5d(0x4a4)](_0x4bda5d(0x35c))[_0x4bda5d(0x466)]({
      behavior: "smooth",
      block: _0x4bda5d(0x26b),
    }),
    (_0x1ce2c8["style"][_0x4bda5d(0x2f0)] = _0x4bda5d(0x555)),
    (_0x1ce2c8["innerHTML"] =
      "\x0a\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22detenerScannerBtn\x22\x20class=\x22btn\x20btn-outline-danger\x20btn-sm\x22\x20onclick=\x22detenerScanner()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-stop\x20me-1\x22></i>Detener\x20Scanner\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20"),
    (html5QrCodeGlobal = new Html5Qrcode(_0x4bda5d(0x35c)));
  const _0x167d04 = {
    fps: 0x1e,
    videoConstraints: {
      width: { min: 0x280, ideal: 0x780, max: 0xa00 },
      height: { min: 0x1e0, ideal: 0x438, max: 0x780 },
      facingMode: _0x4bda5d(0x21c),
      focusMode: "continuous",
      advanced: [
        { zoom: 0x2 },
        { focusMode: _0x4bda5d(0x480) },
        { exposureMode: _0x4bda5d(0x480) },
        { whiteBalanceMode: "continuous" },
      ],
    },
    qrbox: function (_0x437aa8, _0x49c90e) {
      const _0x5df410 = _0x4bda5d,
        _0x24963e = Math[_0x5df410(0x542)](
          0x32,
          Math["min"](0x1f4, _0x437aa8 * 0.8)
        ),
        _0x268e33 = Math[_0x5df410(0x542)](
          0x32,
          Math["min"](0xfa, _0x49c90e * 0.6)
        );
      return { width: _0x24963e, height: _0x268e33 };
    },
    rememberLastUsedCamera: !![],
    aspectRatio: 1.777778,
    formatsToSupport: [
      Html5QrcodeSupportedFormats[_0x4bda5d(0x5de)],
      Html5QrcodeSupportedFormats[_0x4bda5d(0x29e)],
      Html5QrcodeSupportedFormats[_0x4bda5d(0x475)],
      Html5QrcodeSupportedFormats["UPC_E"],
      Html5QrcodeSupportedFormats["CODE_128"],
      Html5QrcodeSupportedFormats[_0x4bda5d(0x582)],
      Html5QrcodeSupportedFormats[_0x4bda5d(0x541)],
      Html5QrcodeSupportedFormats[_0x4bda5d(0x399)],
      Html5QrcodeSupportedFormats[_0x4bda5d(0x5cd)],
      Html5QrcodeSupportedFormats[_0x4bda5d(0x35d)],
      Html5QrcodeSupportedFormats["DATA_MATRIX"],
      Html5QrcodeSupportedFormats[_0x4bda5d(0x564)],
      Html5QrcodeSupportedFormats[_0x4bda5d(0x3f8)],
    ],
    experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
    supportedScanTypes: [Html5QrcodeScanType[_0x4bda5d(0x246)]],
    showTorchButtonIfSupported: !![],
    showZoomSliderIfSupported: !![],
    defaultZoomValueIfSupported: 0x2,
  };
  html5QrCodeGlobal[_0x4bda5d(0x273)](
    { facingMode: _0x4bda5d(0x21c) },
    _0x167d04,
    (_0x4040e0) => {
      const _0x46a2d0 = _0x4bda5d,
        _0x142fb7 = Date[_0x46a2d0(0x363)](),
        _0x5ec2de = _0x4040e0[_0x46a2d0(0x410)]()["replace"](/\s+$/, "");
      if (
        ultimoCodigoEscaneado === _0x5ec2de &&
        _0x142fb7 - ultimoTiempoEscaneo < INTERVALO_ESCANEO
      )
        return;
      if (_0x5ec2de[_0x46a2d0(0x2b6)] < 0x3) return;
      (ultimoCodigoEscaneado = _0x5ec2de),
        (ultimoTiempoEscaneo = _0x142fb7),
        (_0x4bc4aa[_0x46a2d0(0x2f6)] = _0x5ec2de),
        (_0x4bc4aa[_0x46a2d0(0x49f)] = "Escaneando\x20código..."),
        _0x542d98[_0x46a2d0(0x41b)](),
        setTimeout(() => {
          const _0x311032 = _0x46a2d0,
            _0x281e93 = document["getElementById"](_0x311032(0x2fc));
          _0x281e93 &&
            _0x281e93[_0x311032(0x466)]({
              behavior: _0x311032(0x362),
              block: _0x311032(0x273),
              inline: "nearest",
            });
          try {
            bringInputIntoView();
          } catch (_0x56b71e) {}
        }, 0x1f4);
    },
    (_0x1164be) => {}
  )
    [_0x4bda5d(0x1dd)](() => {
      renderHistorial(),
        setTimeout(() => {
          const _0x31574f = _0xc683,
            _0x434a26 = _0x52e599[_0x31574f(0x4d5)](_0x31574f(0x323));
          if (_0x434a26) {
            _0x434a26[_0x31574f(0x3e2)](_0x31574f(0x377), ""),
              _0x434a26[_0x31574f(0x3e2)](_0x31574f(0x36a), ""),
              _0x434a26[_0x31574f(0x3e2)](_0x31574f(0x280), "");
            const _0x329fe6 =
                _0x434a26[_0x31574f(0x38c)]["getVideoTracks"]()[0x0],
              _0x34db8c = {
                focusMode: "continuous",
                exposureMode: _0x31574f(0x480),
                whiteBalanceMode: _0x31574f(0x480),
                advanced: [
                  { zoom: 0x2 },
                  { focusMode: _0x31574f(0x480) },
                  { exposureCompensation: 0x0 },
                  { brightness: 0x0 },
                  { contrast: 1.2 },
                  { saturation: 0.8 },
                ],
              };
            _0x329fe6[_0x31574f(0x3c7)](_0x34db8c)
              [_0x31574f(0x1dd)](() => {
                const _0xb1ac91 = _0x31574f;
                console[_0xb1ac91(0x3dd)](
                  "✅\x20Configuraciones\x20de\x20cámara\x20aplicadas\x20para\x20mejor\x20lectura"
                );
              })
              ["catch"]((_0x463433) => {
                const _0xb7c1f3 = _0x31574f;
                console["log"](_0xb7c1f3(0x336), _0x463433),
                  _0x329fe6[_0xb7c1f3(0x3c7)]({
                    focusMode: _0xb7c1f3(0x480),
                    advanced: [{ zoom: 0x2 }],
                  })[_0xb7c1f3(0x441)](() => {
                    const _0x44e0dd = _0xb7c1f3;
                    console[_0x44e0dd(0x3dd)](
                      "💡\x20Usando\x20configuración\x20de\x20cámara\x20básica"
                    );
                  });
              });
          }
        }, 0x3e8);
    })
    [_0x4bda5d(0x441)]((_0x270ca0) => {
      const _0x3b0b5e = _0x4bda5d;
      console["error"](_0x3b0b5e(0x3b2), _0x270ca0), (scannerActivo = ![]);
      let _0x4ed687 = _0x3b0b5e(0x30a);
      if (_0x270ca0[_0x3b0b5e(0x4cd)]()[_0x3b0b5e(0x5c8)]("NotAllowedError"))
        _0x4ed687 = _0x3b0b5e(0x3cd);
      else {
        if (_0x270ca0[_0x3b0b5e(0x4cd)]()[_0x3b0b5e(0x5c8)]("NotFoundError"))
          _0x4ed687 = _0x3b0b5e(0x27b);
        else {
          if (
            _0x270ca0[_0x3b0b5e(0x4cd)]()[_0x3b0b5e(0x5c8)]("NotReadableError")
          )
            _0x4ed687 = _0x3b0b5e(0x2df);
          else
            _0x270ca0[_0x3b0b5e(0x4cd)]()[_0x3b0b5e(0x5c8)](_0x3b0b5e(0x30f)) &&
              (_0x4ed687 = _0x3b0b5e(0x425));
        }
      }
      (_0x283d01[_0x3b0b5e(0x37f)] =
        _0x3b0b5e(0x276) + _0x4ed687 + _0x3b0b5e(0x216)),
        renderHistorial();
    });
}
const fileInput = document[_0x5637fc(0x4a4)]("fileInput");
if (fileInput) {
  fileInput[_0x5637fc(0x245)](_0x5637fc(0x518), async (_0x15355a) => {
    const _0x484f8a = _0x5637fc,
      _0x22d7aa = _0x15355a[_0x484f8a(0x494)][_0x484f8a(0x27d)][0x0];
    if (!_0x22d7aa) return;
    const _0x26dde7 = document[_0x484f8a(0x4a4)](_0x484f8a(0x531)),
      _0x4ec440 = document[_0x484f8a(0x4a4)]("resultado"),
      _0x210ddc = document["getElementById"]("sugerenciasDiv"),
      _0x2d1eaa = document["getElementById"](_0x484f8a(0x455));
    if (!_0x26dde7 || !_0x4ec440 || !_0x2d1eaa) {
      console["error"](_0x484f8a(0x451)),
        alert(
          "Error:\x20No\x20se\x20pudieron\x20encontrar\x20los\x20elementos\x20necesarios\x20en\x20la\x20página"
        );
      return;
    }
    console["log"](_0x484f8a(0x5ae), _0x22d7aa["name"]);
    try {
      (_0x26dde7["value"] = ""),
        (_0x26dde7[_0x484f8a(0x49f)] = _0x484f8a(0x22a)),
        _0x210ddc &&
          ((_0x210ddc["innerHTML"] = ""),
          (_0x210ddc[_0x484f8a(0x342)]["display"] = _0x484f8a(0x2e2)));
    } catch (_0x283e33) {
      console[_0x484f8a(0x553)](
        "⚠️\x20Error\x20limpiando\x20elementos:",
        _0x283e33
      );
    }
    _0x4ec440[_0x484f8a(0x37f)] = _0x484f8a(0x2a6);
    try {
      const _0x230772 = new Image(),
        _0x3dfe15 = new Promise((_0x5c90e9, _0x4b3ed2) => {
          const _0x4adc43 = _0x484f8a;
          (_0x230772[_0x4adc43(0x35b)] = _0x5c90e9),
            (_0x230772[_0x4adc43(0x1eb)] = _0x4b3ed2),
            (_0x230772["src"] = URL[_0x4adc43(0x213)](_0x22d7aa));
        });
      await _0x3dfe15;
      if (
        GOOGLE_VISION_CONFIG[_0x484f8a(0x295)] &&
        visionUsageTracker[_0x484f8a(0x2c5)]()
      ) {
        console[_0x484f8a(0x3dd)](_0x484f8a(0x32b));
        try {
          const _0x39f06a = await detectarConGoogleVision(_0x230772);
          if (_0x39f06a) {
            console["log"](_0x484f8a(0x49a), _0x39f06a),
              (_0x26dde7[_0x484f8a(0x2f6)] = _0x39f06a),
              _0x2d1eaa[_0x484f8a(0x41b)](),
              URL["revokeObjectURL"](_0x230772[_0x484f8a(0x2e3)]),
              (fileInput[_0x484f8a(0x2f6)] = "");
            return;
          }
        } catch (_0x3ee63b) {
          console[_0x484f8a(0x3dd)](_0x484f8a(0x3d9), _0x3ee63b["message"]);
          if (_0x3ee63b["message"][_0x484f8a(0x5c8)](_0x484f8a(0x202)))
            console[_0x484f8a(0x3dd)](_0x484f8a(0x5ba));
          else {
            if (_0x3ee63b[_0x484f8a(0x2ee)][_0x484f8a(0x5c8)](_0x484f8a(0x3ca)))
              console[_0x484f8a(0x3dd)](_0x484f8a(0x35f)),
                _0x3ee63b[_0x484f8a(0x2ee)][_0x484f8a(0x5c8)](_0x484f8a(0x226))
                  ? (console[_0x484f8a(0x3dd)](_0x484f8a(0x3b5)),
                    console[_0x484f8a(0x3dd)](_0x484f8a(0x3b4)))
                  : console[_0x484f8a(0x3dd)](_0x484f8a(0x59a));
            else
              _0x3ee63b[_0x484f8a(0x2ee)]["includes"](_0x484f8a(0x5d0)) &&
                console[_0x484f8a(0x3dd)](_0x484f8a(0x5cb));
          }
        }
      } else {
        if (
          GOOGLE_VISION_CONFIG[_0x484f8a(0x295)] &&
          !visionUsageTracker[_0x484f8a(0x2c5)]()
        ) {
          const _0x4723ea = visionUsageTracker[_0x484f8a(0x583)]();
          console["log"](
            _0x484f8a(0x239) +
              _0x4723ea[_0x484f8a(0x3b6)] +
              "/" +
              _0x4723ea[_0x484f8a(0x516)] +
              _0x484f8a(0x497) +
              _0x4723ea[_0x484f8a(0x526)] +
              "/" +
              _0x4723ea["dailyLimit"]
          );
        }
      }
      if (_0x484f8a(0x319) in window) {
        console["log"]("🚀\x20Usando\x20Barcode\x20Detection\x20API\x20nativa");
        try {
          const _0x5190d1 = [
              _0x484f8a(0x556),
              _0x484f8a(0x53a),
              "code_39",
              _0x484f8a(0x50d),
              _0x484f8a(0x511),
              "data_matrix",
              _0x484f8a(0x5aa),
              _0x484f8a(0x454),
              _0x484f8a(0x3f0),
              _0x484f8a(0x2d1),
              _0x484f8a(0x3c2),
              _0x484f8a(0x4ab),
              _0x484f8a(0x575),
            ],
            _0x4ff27d = new BarcodeDetector({ formats: _0x5190d1 }),
            _0x2cdff5 = await _0x4ff27d[_0x484f8a(0x4bd)](_0x230772);
          console[_0x484f8a(0x3dd)](
            _0x484f8a(0x481) + _0x2cdff5[_0x484f8a(0x2b6)],
            _0x2cdff5
          );
          if (_0x2cdff5["length"] > 0x0) {
            const _0x4f68da = _0x2cdff5[_0x484f8a(0x42c)]((_0x47c5d4) => {
              const _0x3c015a = _0x484f8a,
                _0x56f1e3 = _0x47c5d4[_0x3c015a(0x43f)]["trim"]();
              console[_0x3c015a(0x3dd)](
                _0x3c015a(0x532) +
                  _0x56f1e3 +
                  _0x3c015a(0x4c2) +
                  _0x47c5d4[_0x3c015a(0x35e)] +
                  _0x3c015a(0x334) +
                  _0x56f1e3[_0x3c015a(0x2b6)]
              );
              switch (_0x47c5d4[_0x3c015a(0x35e)]) {
                case _0x3c015a(0x5aa):
                  return (
                    _0x56f1e3[_0x3c015a(0x2b6)] === 0xd &&
                    /^\d{13}$/["test"](_0x56f1e3)
                  );
                case _0x3c015a(0x4ab):
                  return (
                    _0x56f1e3[_0x3c015a(0x2b6)] === 0xc &&
                    /^\d{12}$/[_0x3c015a(0x453)](_0x56f1e3)
                  );
                case _0x3c015a(0x454):
                  return (
                    _0x56f1e3[_0x3c015a(0x2b6)] === 0x8 &&
                    /^\d{8}$/[_0x3c015a(0x453)](_0x56f1e3)
                  );
                case _0x3c015a(0x575):
                  return (
                    _0x56f1e3["length"] >= 0x6 &&
                    _0x56f1e3[_0x3c015a(0x2b6)] <= 0x8 &&
                    /^\d+$/[_0x3c015a(0x453)](_0x56f1e3)
                  );
                case _0x3c015a(0x53a):
                  return (
                    _0x56f1e3[_0x3c015a(0x2b6)] >= 0x1 &&
                    _0x56f1e3[_0x3c015a(0x2b6)] <= 0x32
                  );
                case _0x3c015a(0x2f4):
                  return (
                    _0x56f1e3[_0x3c015a(0x2b6)] >= 0x1 &&
                    /^[A-Z0-9\-. $\/+%*]+$/[_0x3c015a(0x453)](_0x56f1e3)
                  );
                case _0x3c015a(0x50d):
                  return (
                    _0x56f1e3["length"] >= 0x1 &&
                    _0x56f1e3[_0x3c015a(0x2b6)] <= 0x32
                  );
                case _0x3c015a(0x511):
                  return (
                    _0x56f1e3[_0x3c015a(0x2b6)] >= 0x3 &&
                    /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x3c015a(0x453)](_0x56f1e3)
                  );
                case _0x3c015a(0x3f0):
                  return (
                    _0x56f1e3[_0x3c015a(0x2b6)] >= 0x2 &&
                    _0x56f1e3[_0x3c015a(0x2b6)] % 0x2 === 0x0 &&
                    /^\d+$/["test"](_0x56f1e3)
                  );
                case _0x3c015a(0x3c2):
                  return (
                    _0x56f1e3[_0x3c015a(0x2b6)] >= 0x1 &&
                    _0x56f1e3[_0x3c015a(0x2b6)] <= 0x10c8
                  );
                case _0x3c015a(0x5af):
                  return (
                    _0x56f1e3["length"] >= 0x1 && _0x56f1e3["length"] <= 0xc2c
                  );
                case _0x3c015a(0x2d1):
                  return (
                    _0x56f1e3[_0x3c015a(0x2b6)] >= 0x1 &&
                    _0x56f1e3[_0x3c015a(0x2b6)] <= 0xa96
                  );
                case _0x3c015a(0x556):
                  return (
                    _0x56f1e3["length"] >= 0x1 && _0x56f1e3["length"] <= 0xef8
                  );
                default:
                  return (
                    _0x56f1e3[_0x3c015a(0x2b6)] >= 0x1 &&
                    _0x56f1e3[_0x3c015a(0x2b6)] <= 0x64
                  );
              }
            });
            console[_0x484f8a(0x3dd)](
              _0x484f8a(0x1df) + _0x4f68da[_0x484f8a(0x2b6)]
            );
            if (_0x4f68da[_0x484f8a(0x2b6)] > 0x0) {
              const _0x555135 = {
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
                _0x5b150e = _0x4f68da["sort"]((_0x4a532c, _0x1ad6df) => {
                  const _0x234dc3 = _0x484f8a,
                    _0x196f69 =
                      (_0x555135[_0x1ad6df[_0x234dc3(0x35e)]] || 0x0) -
                      (_0x555135[_0x4a532c["format"]] || 0x0);
                  if (_0x196f69 !== 0x0) return _0x196f69;
                  if (
                    [
                      _0x234dc3(0x5aa),
                      _0x234dc3(0x4ab),
                      _0x234dc3(0x454),
                      "upc_e",
                      _0x234dc3(0x53a),
                      "code_39",
                      "code_93",
                      _0x234dc3(0x3f0),
                      _0x234dc3(0x511),
                    ][_0x234dc3(0x5c8)](_0x4a532c[_0x234dc3(0x35e)])
                  ) {
                    const _0x389777 =
                        _0x4a532c[_0x234dc3(0x4db)]["width"] *
                        _0x4a532c[_0x234dc3(0x4db)]["height"],
                      _0x20c7af =
                        _0x1ad6df[_0x234dc3(0x4db)][_0x234dc3(0x512)] *
                        _0x1ad6df[_0x234dc3(0x4db)][_0x234dc3(0x40f)];
                    return _0x20c7af - _0x389777;
                  }
                  const _0x427d9c =
                      _0x4a532c[_0x234dc3(0x4db)]["x"] +
                      _0x4a532c["boundingBox"][_0x234dc3(0x512)] / 0x2,
                    _0x275012 =
                      _0x1ad6df[_0x234dc3(0x4db)]["x"] +
                      _0x1ad6df[_0x234dc3(0x4db)][_0x234dc3(0x512)] / 0x2,
                    _0x219563 = _0x230772[_0x234dc3(0x512)] / 0x2;
                  return (
                    Math[_0x234dc3(0x3dc)](_0x427d9c - _0x219563) -
                    Math[_0x234dc3(0x3dc)](_0x275012 - _0x219563)
                  );
                }),
                _0x36190f = _0x5b150e[0x0],
                _0x1c3bb8 = _0x36190f[_0x484f8a(0x43f)]
                  [_0x484f8a(0x410)]()
                  [_0x484f8a(0x27c)](/\s+$/, "");
              console["log"](
                "🎯\x20Mejor\x20código\x20seleccionado:\x20\x22" +
                  _0x1c3bb8 +
                  "\x22\x20(" +
                  _0x36190f["format"] +
                  ")"
              ),
                (_0x26dde7[_0x484f8a(0x2f6)] = _0x1c3bb8),
                _0x2d1eaa[_0x484f8a(0x41b)](),
                URL[_0x484f8a(0x4ad)](_0x230772[_0x484f8a(0x2e3)]),
                (fileInput[_0x484f8a(0x2f6)] = "");
              return;
            }
          }
          console[_0x484f8a(0x3dd)](_0x484f8a(0x207));
        } catch (_0x322b22) {
          console[_0x484f8a(0x3dd)](_0x484f8a(0x50a), _0x322b22);
        }
      } else console["log"](_0x484f8a(0x253));
      console[_0x484f8a(0x3dd)]("📸\x20Usando\x20Quagga\x20como\x20fallback"),
        usarQuaggaFallback(_0x230772);
    } catch (_0x455046) {
      console[_0x484f8a(0x585)]("Error\x20procesando\x20imagen:", _0x455046),
        (_0x4ec440[_0x484f8a(0x37f)] = _0x484f8a(0x5bc)),
        renderHistorial(),
        (fileInput["value"] = "");
    }
  });
  function usarQuaggaFallback(_0x146c39) {
    const _0x1c530a = _0x5637fc;
    console[_0x1c530a(0x3dd)](_0x1c530a(0x328));
    const _0x5c94b5 = document["createElement"](_0x1c530a(0x3a2)),
      _0x2ef30d = _0x5c94b5[_0x1c530a(0x435)]("2d");
    let { width: _0xdc8ab4, height: _0x2a9a55 } = _0x146c39;
    const _0x58a07b = 0x190;
    if (_0xdc8ab4 < _0x58a07b || _0x2a9a55 < _0x58a07b) {
      const _0x2eb3d0 =
        Math[_0x1c530a(0x542)](_0x58a07b / _0xdc8ab4, _0x58a07b / _0x2a9a55) *
        1.5;
      (_0xdc8ab4 *= _0x2eb3d0),
        (_0x2a9a55 *= _0x2eb3d0),
        console[_0x1c530a(0x3dd)](
          "📏\x20Ampliando\x20imagen\x20pequeña:\x20" +
            _0x146c39["width"] +
            "x" +
            _0x146c39[_0x1c530a(0x40f)] +
            _0x1c530a(0x268) +
            _0xdc8ab4 +
            "x" +
            _0x2a9a55
        );
    }
    const _0x298689 = 0x5dc;
    if (_0xdc8ab4 > _0x298689 || _0x2a9a55 > _0x298689) {
      const _0x501344 = Math[_0x1c530a(0x403)](
        _0x298689 / _0xdc8ab4,
        _0x298689 / _0x2a9a55
      );
      (_0xdc8ab4 *= _0x501344), (_0x2a9a55 *= _0x501344);
    }
    (_0x5c94b5[_0x1c530a(0x512)] = _0xdc8ab4),
      (_0x5c94b5[_0x1c530a(0x40f)] = _0x2a9a55),
      (_0x2ef30d["imageSmoothingEnabled"] = ![]),
      _0x2ef30d[_0x1c530a(0x4bf)](_0x146c39, 0x0, 0x0, _0xdc8ab4, _0x2a9a55);
    const _0x1160ae = _0x2ef30d["getImageData"](0x0, 0x0, _0xdc8ab4, _0x2a9a55),
      _0x1882dc = _0x1160ae[_0x1c530a(0x584)];
    let _0x439a8b = new Array(0x100)[_0x1c530a(0x2a5)](0x0);
    for (
      let _0x7037f3 = 0x0;
      _0x7037f3 < _0x1882dc[_0x1c530a(0x2b6)];
      _0x7037f3 += 0x4
    ) {
      const _0x48e050 = Math[_0x1c530a(0x315)](
        0.299 * _0x1882dc[_0x7037f3] +
          0.587 * _0x1882dc[_0x7037f3 + 0x1] +
          0.114 * _0x1882dc[_0x7037f3 + 0x2]
      );
      _0x439a8b[_0x48e050]++;
    }
    let _0x3c47dc = 0x80,
      _0x1db59c = 0x0;
    const _0x1aabc9 = _0xdc8ab4 * _0x2a9a55;
    for (let _0x161650 = 0x0; _0x161650 < 0x100; _0x161650++) {
      let _0x3419fb = 0x0,
        _0x18ca3 = 0x0,
        _0xbdc942 = 0x0,
        _0x4c9ef8 = 0x0;
      for (let _0x2804f9 = 0x0; _0x2804f9 <= _0x161650; _0x2804f9++) {
        (_0x3419fb += _0x439a8b[_0x2804f9]),
          (_0xbdc942 += _0x2804f9 * _0x439a8b[_0x2804f9]);
      }
      for (let _0x12f8db = _0x161650 + 0x1; _0x12f8db < 0x100; _0x12f8db++) {
        (_0x18ca3 += _0x439a8b[_0x12f8db]),
          (_0x4c9ef8 += _0x12f8db * _0x439a8b[_0x12f8db]);
      }
      if (_0x3419fb === 0x0 || _0x18ca3 === 0x0) continue;
      const _0x1afa9b = _0xbdc942 / _0x3419fb,
        _0x39e4c9 = _0x4c9ef8 / _0x18ca3,
        _0x101836 =
          _0x3419fb *
          _0x18ca3 *
          (_0x1afa9b - _0x39e4c9) *
          (_0x1afa9b - _0x39e4c9);
      _0x101836 > _0x1db59c &&
        ((_0x1db59c = _0x101836), (_0x3c47dc = _0x161650));
    }
    console[_0x1c530a(0x3dd)]("🎯\x20Umbral\x20calculado:\x20" + _0x3c47dc);
    const _0x4a3114 = new Uint8ClampedArray(_0x1882dc);
    for (
      let _0x3a28fd = 0x0;
      _0x3a28fd < _0x1882dc[_0x1c530a(0x2b6)];
      _0x3a28fd += 0x4
    ) {
      const _0xaa0ab2 = Math[_0x1c530a(0x315)](
          0.299 * _0x1882dc[_0x3a28fd] +
            0.587 * _0x1882dc[_0x3a28fd + 0x1] +
            0.114 * _0x1882dc[_0x3a28fd + 0x2]
        ),
        _0x6922e6 = _0xaa0ab2 > _0x3c47dc ? 0xff : 0x0;
      (_0x1882dc[_0x3a28fd] = _0x6922e6),
        (_0x1882dc[_0x3a28fd + 0x1] = _0x6922e6),
        (_0x1882dc[_0x3a28fd + 0x2] = _0x6922e6);
    }
    _0x2ef30d[_0x1c530a(0x5c0)](_0x1160ae, 0x0, 0x0);
    let _0x2bca9b = _0x5c94b5[_0x1c530a(0x24c)]("image/png");
    const _0x4b206b = _0x2ef30d[_0x1c530a(0x310)](_0xdc8ab4, _0x2a9a55),
      _0x553190 = _0x4b206b[_0x1c530a(0x584)];
    for (
      let _0x5b8d56 = 0x0;
      _0x5b8d56 < _0x4a3114[_0x1c530a(0x2b6)];
      _0x5b8d56 += 0x4
    ) {
      const _0x59a7e0 = Math["round"](
          0.299 * _0x4a3114[_0x5b8d56] +
            0.587 * _0x4a3114[_0x5b8d56 + 0x1] +
            0.114 * _0x4a3114[_0x5b8d56 + 0x2]
        ),
        _0x2ca61f = _0x59a7e0 > _0x3c47dc * 0.7 ? 0xff : 0x0;
      (_0x553190[_0x5b8d56] = _0x2ca61f),
        (_0x553190[_0x5b8d56 + 0x1] = _0x2ca61f),
        (_0x553190[_0x5b8d56 + 0x2] = _0x2ca61f),
        (_0x553190[_0x5b8d56 + 0x3] = 0xff);
    }
    const _0x3d0cae = document[_0x1c530a(0x4ba)]("canvas");
    (_0x3d0cae["width"] = _0xdc8ab4), (_0x3d0cae[_0x1c530a(0x40f)] = _0x2a9a55);
    const _0x45f8c2 = _0x3d0cae[_0x1c530a(0x435)]("2d");
    _0x45f8c2[_0x1c530a(0x5c0)](_0x4b206b, 0x0, 0x0);
    const _0x1e93a5 = _0x3d0cae[_0x1c530a(0x24c)](_0x1c530a(0x3e3)),
      _0x931588 = {
        src: _0x2bca9b,
        numOfWorkers: 0x0,
        locate: !![],
        inputStream: { size: Math[_0x1c530a(0x542)](_0xdc8ab4, _0x2a9a55) },
        locator: {
          patchSize: _0x1c530a(0x4e0),
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
            _0x1c530a(0x355),
            _0x1c530a(0x503),
            "upc_reader",
            _0x1c530a(0x51f),
            "code_128_reader",
            "code_39_reader",
            "code_39_vin_reader",
            _0x1c530a(0x4b8),
            _0x1c530a(0x4cc),
            _0x1c530a(0x393),
            _0x1c530a(0x53e),
          ],
          multiple: !![],
          debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
        },
      };
    console[_0x1c530a(0x3dd)](_0x1c530a(0x395));
    const _0x263d12 = (_0x5668fb, _0x7e279d, _0x108c5a) => {
      const _0x5699c9 = _0x1c530a;
      console["log"]("📋\x20Probando\x20configuración:\x20" + _0x7e279d);
      const _0x2dc18c = {
        src: _0x5668fb,
        numOfWorkers: 0x0,
        locate: !![],
        inputStream: { size: Math[_0x5699c9(0x542)](_0xdc8ab4, _0x2a9a55) },
        locator: {
          patchSize: _0x7e279d === "agresiva" ? "x-large" : "large",
          halfSample: _0x7e279d === _0x5699c9(0x402) ? !![] : ![],
          debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
        },
        decoder: {
          readers: [
            _0x5699c9(0x355),
            "ean_8_reader",
            _0x5699c9(0x570),
            _0x5699c9(0x51f),
            "code_128_reader",
            _0x5699c9(0x44f),
            _0x5699c9(0x47b),
            "code_93_reader",
            _0x5699c9(0x4cc),
            _0x5699c9(0x393),
          ],
          multiple: !![],
          debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
        },
      };
      Quagga[_0x5699c9(0x299)](_0x2dc18c, _0x108c5a);
    };
    let _0x4db44f = [];
    _0x263d12(_0x2bca9b, _0x1c530a(0x3ed), function (_0x12ddaa) {
      const _0xc81ec8 = _0x1c530a;
      if (_0x12ddaa && _0x12ddaa[_0xc81ec8(0x3f2)]) {
        let _0xe80e84 = _0x12ddaa[_0xc81ec8(0x3f2)][_0xc81ec8(0x388)]
          [_0xc81ec8(0x410)]()
          [_0xc81ec8(0x27c)](/\s+$/, "");
        _0x4db44f["push"](
          _0xe80e84 + "\x20(" + _0x12ddaa["codeResult"]["format"] + ")"
        ),
          console[_0xc81ec8(0x3dd)](
            "✅\x20Código\x20detectado\x20(configuración\x20principal):",
            _0xe80e84,
            "Formato:",
            _0x12ddaa["codeResult"][_0xc81ec8(0x35e)]
          );
        if (validarCodigo(_0xe80e84, _0x12ddaa[_0xc81ec8(0x3f2)]["format"])) {
          (inputCodigo[_0xc81ec8(0x2f6)] = _0xe80e84),
            form[_0xc81ec8(0x41b)](),
            URL[_0xc81ec8(0x4ad)](_0x146c39["src"]),
            (fileInput[_0xc81ec8(0x2f6)] = "");
          return;
        }
      }
      console[_0xc81ec8(0x3dd)](_0xc81ec8(0x39e)),
        _0x263d12(_0x1e93a5, _0xc81ec8(0x384), function (_0x4cd885) {
          const _0x2720df = _0xc81ec8;
          if (_0x4cd885 && _0x4cd885[_0x2720df(0x3f2)]) {
            let _0x51aab3 = _0x4cd885[_0x2720df(0x3f2)][_0x2720df(0x388)]
              [_0x2720df(0x410)]()
              [_0x2720df(0x27c)](/\s+$/, "");
            _0x4db44f[_0x2720df(0x389)](
              _0x51aab3 +
                "\x20(" +
                _0x4cd885[_0x2720df(0x3f2)][_0x2720df(0x35e)] +
                ")"
            ),
              console[_0x2720df(0x3dd)](
                _0x2720df(0x396),
                _0x51aab3,
                _0x2720df(0x2b1),
                _0x4cd885[_0x2720df(0x3f2)][_0x2720df(0x35e)]
              );
            if (validarCodigo(_0x51aab3, _0x4cd885["codeResult"]["format"])) {
              (inputCodigo[_0x2720df(0x2f6)] = _0x51aab3),
                form["requestSubmit"](),
                URL[_0x2720df(0x4ad)](_0x146c39[_0x2720df(0x2e3)]),
                (fileInput[_0x2720df(0x2f6)] = "");
              return;
            }
          }
          console[_0x2720df(0x3dd)](_0x2720df(0x3bd)),
            intentarSegundaPasada(_0x146c39, _0x4db44f);
        });
    });
  }
  function validarCodigo(_0x38bb55, _0x4d177d) {
    const _0x4f4e03 = _0x5637fc;
    console[_0x4f4e03(0x3dd)](
      _0x4f4e03(0x532) +
        _0x38bb55 +
        _0x4f4e03(0x4c2) +
        _0x4d177d +
        _0x4f4e03(0x334) +
        _0x38bb55[_0x4f4e03(0x2b6)]
    );
    switch (_0x4d177d) {
      case _0x4f4e03(0x5aa):
        return (
          _0x38bb55["length"] === 0xd && /^\d{13}$/[_0x4f4e03(0x453)](_0x38bb55)
        );
      case _0x4f4e03(0x4ab):
        return (
          _0x38bb55[_0x4f4e03(0x2b6)] === 0xc &&
          /^\d{12}$/[_0x4f4e03(0x453)](_0x38bb55)
        );
      case _0x4f4e03(0x454):
        return (
          _0x38bb55[_0x4f4e03(0x2b6)] === 0x8 &&
          /^\d{8}$/[_0x4f4e03(0x453)](_0x38bb55)
        );
      case _0x4f4e03(0x575):
        return (
          _0x38bb55[_0x4f4e03(0x2b6)] >= 0x6 &&
          _0x38bb55[_0x4f4e03(0x2b6)] <= 0x8 &&
          /^\d+$/[_0x4f4e03(0x453)](_0x38bb55)
        );
      case "code_128":
      case _0x4f4e03(0x2f4):
      case _0x4f4e03(0x50d):
        return (
          _0x38bb55[_0x4f4e03(0x2b6)] >= 0x1 &&
          _0x38bb55[_0x4f4e03(0x2b6)] <= 0x32
        );
      case _0x4f4e03(0x511):
        return (
          _0x38bb55[_0x4f4e03(0x2b6)] >= 0x3 &&
          /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x4f4e03(0x453)](_0x38bb55)
        );
      case "i2of5":
        return (
          _0x38bb55[_0x4f4e03(0x2b6)] >= 0x2 &&
          _0x38bb55["length"] % 0x2 === 0x0 &&
          /^\d+$/[_0x4f4e03(0x453)](_0x38bb55)
        );
      default:
        return (
          _0x38bb55[_0x4f4e03(0x2b6)] >= 0x1 &&
          _0x38bb55[_0x4f4e03(0x2b6)] <= 0x32
        );
    }
  }
  function intentarSegundaPasada(_0x282a95, _0x182f2d = []) {
    const _0x530a49 = _0x5637fc;
    console[_0x530a49(0x3dd)](_0x530a49(0x1ee));
    const _0x5df6e4 = document["createElement"]("canvas"),
      _0x2fafdf = _0x5df6e4[_0x530a49(0x435)]("2d");
    let { width: _0x53add5, height: _0x4804db } = _0x282a95;
    const _0xf461a1 = 0x640;
    if (_0x53add5 < _0xf461a1) {
      const _0x5c4ba3 = _0xf461a1 / _0x53add5;
      (_0x53add5 *= _0x5c4ba3), (_0x4804db *= _0x5c4ba3);
    }
    (_0x5df6e4[_0x530a49(0x512)] = _0x53add5),
      (_0x5df6e4[_0x530a49(0x40f)] = _0x4804db),
      (_0x2fafdf[_0x530a49(0x20a)] = ![]),
      _0x2fafdf[_0x530a49(0x4bf)](_0x282a95, 0x0, 0x0, _0x53add5, _0x4804db);
    const _0x300095 = _0x2fafdf["getImageData"](0x0, 0x0, _0x53add5, _0x4804db),
      _0x2b1d15 = _0x300095[_0x530a49(0x584)];
    for (
      let _0x3e99cd = 0x0;
      _0x3e99cd < _0x2b1d15[_0x530a49(0x2b6)];
      _0x3e99cd += 0x4
    ) {
      const _0x2bf5b3 = _0x2b1d15[_0x3e99cd],
        _0x32be38 = _0x2b1d15[_0x3e99cd + 0x1],
        _0x50231f = _0x2b1d15[_0x3e99cd + 0x2],
        _0x9770fd = 1.5,
        _0x5e5d9c = Math[_0x530a49(0x315)](
          0.299 * _0x2bf5b3 + 0.587 * _0x32be38 + 0.114 * _0x50231f
        ),
        _0x1a2c24 = Math[_0x530a49(0x403)](
          0xff,
          Math[_0x530a49(0x542)](0x0, (_0x5e5d9c - 0x80) * _0x9770fd + 0x80)
        );
      (_0x2b1d15[_0x3e99cd] = _0x1a2c24),
        (_0x2b1d15[_0x3e99cd + 0x1] = _0x1a2c24),
        (_0x2b1d15[_0x3e99cd + 0x2] = _0x1a2c24);
    }
    _0x2fafdf[_0x530a49(0x5c0)](_0x300095, 0x0, 0x0);
    const _0x4e1c67 = {
      src: _0x5df6e4[_0x530a49(0x24c)](_0x530a49(0x3e3)),
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: {
        size: Math[_0x530a49(0x542)](_0x53add5, _0x4804db),
        area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
      },
      locator: {
        patchSize: _0x530a49(0x36e),
        halfSample: ![],
        debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
      },
      decoder: {
        readers: [
          _0x530a49(0x355),
          "upc_reader",
          _0x530a49(0x311),
          _0x530a49(0x44f),
          _0x530a49(0x503),
          _0x530a49(0x51f),
          "i2of5_reader",
          "codabar_reader",
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
    console[_0x530a49(0x3dd)](_0x530a49(0x57a)),
      Quagga[_0x530a49(0x299)](_0x4e1c67, function (_0x438c2e) {
        const _0x122c56 = _0x530a49;
        if (_0x438c2e && _0x438c2e[_0x122c56(0x3f2)]) {
          const _0x276bf0 = _0x438c2e[_0x122c56(0x3f2)][_0x122c56(0x388)]
            [_0x122c56(0x410)]()
            [_0x122c56(0x27c)](/\s+$/, "");
          _0x182f2d[_0x122c56(0x389)](
            _0x276bf0 +
              "\x20(" +
              _0x438c2e[_0x122c56(0x3f2)][_0x122c56(0x35e)] +
              ")"
          ),
            console[_0x122c56(0x3dd)](
              "✅\x20Tercera\x20tentativa\x20exitosa:",
              _0x276bf0,
              _0x122c56(0x2b1),
              _0x438c2e[_0x122c56(0x3f2)][_0x122c56(0x35e)]
            );
          if (
            validarCodigo(
              _0x276bf0,
              _0x438c2e[_0x122c56(0x3f2)][_0x122c56(0x35e)]
            )
          ) {
            (inputCodigo["value"] = _0x276bf0), form[_0x122c56(0x41b)]();
            return;
          }
        }
        console["log"](_0x122c56(0x2e1));
        let _0x3f03d7 = "";
        _0x182f2d[_0x122c56(0x2b6)] > 0x0 &&
          (_0x3f03d7 = _0x122c56(0x4ef) + _0x182f2d["join"](",\x20"));
        let _0x2c52d9 = "";
        if (GOOGLE_VISION_CONFIG[_0x122c56(0x295)]) {
          const _0x580a14 = visionUsageTracker[_0x122c56(0x583)]();
          (_0x2c52d9 =
            _0x122c56(0x241) +
            _0x580a14[_0x122c56(0x3b6)] +
            "/" +
            _0x580a14[_0x122c56(0x516)] +
            _0x122c56(0x433) +
            _0x580a14[_0x122c56(0x526)] +
            "/" +
            _0x580a14["dailyLimit"] +
            _0x122c56(0x264)),
            verificarBackend()
              [_0x122c56(0x1dd)]((_0x7a5fb0) => {
                const _0x3182eb = _0x122c56;
                if (document[_0x3182eb(0x4d5)](_0x3182eb(0x3d6))) {
                  const _0x35a835 = document[_0x3182eb(0x4d5)](
                    _0x3182eb(0x3d6)
                  );
                  _0x35a835 &&
                    (_0x35a835["innerHTML"] = _0x35a835[_0x3182eb(0x37f)][
                      _0x3182eb(0x27c)
                    ](
                      _0x3182eb(0x456),
                      _0x3182eb(0x509) + _0x7a5fb0["mensaje"]
                    ));
                }
              })
              ["catch"](() => {});
        }
        (resultadoDiv["innerHTML"] =
          "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20<strong>⚠️\x20No\x20se\x20detectó\x20código\x20válido</strong><br>\x0a\x20\x20\x20\x20\x20\x20Para\x20códigos\x20largos\x20como\x20este,\x20intenta:<br>\x0a\x20\x20\x20\x20\x20\x20•\x20📏\x20<strong>Recortar\x20muy\x20cerca\x20del\x20código</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20💡\x20<strong>Mejor\x20iluminación\x20uniforme</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20📱\x20<strong>Evitar\x20superficies\x20reflectivas</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20🔍\x20<strong>Imagen\x20más\x20nítida\x20y\x20estable</strong>" +
          _0x3f03d7 +
          _0x2c52d9 +
          _0x122c56(0x227)),
          renderHistorial();
      });
  }
  async function mostrarConfiguracion() {
    const _0x1b37dd = _0x5637fc,
      _0x21b098 = await verificarBackend();
    let _0x188df3 = null;
    if (CONFIG_ENDPOINTS[_0x1b37dd(0x4ff)])
      try {
        const _0x3ce8d0 = await fetch(
          CONFIG_ENDPOINTS[_0x1b37dd(0x4f8)] + _0x1b37dd(0x5cf)
        );
        if (_0x3ce8d0["ok"]) {
          const _0x2b9496 = await _0x3ce8d0[_0x1b37dd(0x48c)]();
          _0x188df3 = _0x2b9496[_0x1b37dd(0x290)];
        }
      } catch (_0x430898) {
        console[_0x1b37dd(0x3dd)](_0x1b37dd(0x44b));
      }
    let _0x4961cd = "";
    _0x188df3 &&
      (_0x4961cd =
        _0x1b37dd(0x2c0) +
        _0x188df3[_0x1b37dd(0x21b)] +
        _0x1b37dd(0x288) +
        _0x188df3[_0x1b37dd(0x3ad)] +
        _0x1b37dd(0x478) +
        _0x188df3[_0x1b37dd(0x4ed)] +
        _0x1b37dd(0x519) +
        new Date(_0x188df3[_0x1b37dd(0x4be)])["toLocaleString"]() +
        _0x1b37dd(0x4c4)),
      Swal[_0x1b37dd(0x2e0)]({
        title: _0x1b37dd(0x41f),
        html:
          _0x1b37dd(0x297) +
          (GOOGLE_VISION_CONFIG[_0x1b37dd(0x295)] ? _0x1b37dd(0x59b) : "") +
          _0x1b37dd(0x2ca) +
          (_0x21b098["activo"] ? "alert-success" : _0x1b37dd(0x5df)) +
          _0x1b37dd(0x2e6) +
          _0x21b098[_0x1b37dd(0x382)] +
          _0x1b37dd(0x5a5) +
          _0x4961cd +
          _0x1b37dd(0x57f),
        width: 0x258,
        showCancelButton: !![],
        confirmButtonText: _0x1b37dd(0x5d6),
        cancelButtonText: _0x1b37dd(0x4d8),
        confirmButtonColor: _0x1b37dd(0x5a0),
        cancelButtonColor: "#6c757d",
        preConfirm: () => {
          const _0x62beab = _0x1b37dd,
            _0x3c2b18 =
              document[_0x62beab(0x4a4)]("enabledCheck")[_0x62beab(0x59b)];
          return { enabled: _0x3c2b18 };
        },
      })["then"]((_0x1795ed) => {
        const _0x383270 = _0x1b37dd;
        if (_0x1795ed[_0x383270(0x4af)]) {
          const { enabled: _0x3fce28 } = _0x1795ed["value"];
          (GOOGLE_VISION_CONFIG["enabled"] = _0x3fce28),
            localStorage["setItem"](
              _0x383270(0x568),
              JSON[_0x383270(0x1e2)]({ enabled: _0x3fce28 })
            );
          const _0x547f2f = _0x3fce28 ? _0x383270(0x351) : _0x383270(0x252);
          Swal[_0x383270(0x2e0)]({
            title: _0x383270(0x3d5),
            text: _0x547f2f,
            icon: _0x383270(0x262),
            timer: 0x7d0,
            showConfirmButton: ![],
          });
        }
      });
  }
  function cargarConfiguracionGuardada() {
    const _0x3b16b2 = _0x5637fc,
      _0x1bbb77 = localStorage[_0x3b16b2(0x3cc)](_0x3b16b2(0x568));
    if (_0x1bbb77)
      try {
        const _0x419060 = JSON[_0x3b16b2(0x242)](_0x1bbb77);
        (GOOGLE_VISION_CONFIG[_0x3b16b2(0x295)] =
          _0x419060[_0x3b16b2(0x295)] || ![]),
          GOOGLE_VISION_CONFIG[_0x3b16b2(0x295)] &&
            console[_0x3b16b2(0x3dd)](
              "✅\x20Detección\x20avanzada\x20(backend)\x20configurada\x20y\x20activa"
            );
      } catch (_0x2d0259) {
        console[_0x3b16b2(0x3dd)](_0x3b16b2(0x2e5), _0x2d0259);
      }
  }
  "serviceWorker" in navigator &&
    window[_0x5637fc(0x245)](_0x5637fc(0x4b0), () => {
      const _0x50b3a8 = _0x5637fc;
      navigator["serviceWorker"]
        ["register"](_0x50b3a8(0x3d4))
        [_0x50b3a8(0x1dd)]((_0x232617) => {
          const _0x2df253 = _0x50b3a8;
          console["log"](_0x2df253(0x420), _0x232617[_0x2df253(0x228)]),
            _0x232617[_0x2df253(0x245)]("updatefound", () => {
              const _0x1b44c3 = _0x2df253;
              console[_0x1b44c3(0x3dd)](_0x1b44c3(0x2bd));
              const _0x3f6b29 = _0x232617[_0x1b44c3(0x4bc)];
              _0x3f6b29[_0x1b44c3(0x245)](_0x1b44c3(0x318), () => {
                const _0x12cc85 = _0x1b44c3;
                _0x3f6b29[_0x12cc85(0x23b)] === _0x12cc85(0x294) &&
                  navigator[_0x12cc85(0x427)][_0x12cc85(0x5c4)] &&
                  (console[_0x12cc85(0x3dd)](_0x12cc85(0x398)),
                  confirm(_0x12cc85(0x2ad)) &&
                    (_0x3f6b29[_0x12cc85(0x1fb)]({ type: "SKIP_WAITING" }),
                    window["location"]["reload"]()));
              });
            });
        })
        [_0x50b3a8(0x441)]((_0x3de6ca) =>
          console[_0x50b3a8(0x585)](
            "❌\x20Error\x20al\x20registrar\x20SW:",
            _0x3de6ca
          )
        ),
        navigator["serviceWorker"][_0x50b3a8(0x245)](_0x50b3a8(0x27f), () => {
          const _0x30a387 = _0x50b3a8;
          console[_0x30a387(0x3dd)]("🔄\x20Service\x20Worker\x20actualizado"),
            window[_0x30a387(0x476)][_0x30a387(0x50f)]();
        });
    });
  window[_0x5637fc(0x245)]("beforeinstallprompt", (_0x21d835) => {
    const _0x4ef006 = _0x5637fc;
    _0x21d835[_0x4ef006(0x32e)](),
      (deferredPrompt = _0x21d835),
      installBtn && installBtn["classList"][_0x4ef006(0x49b)](_0x4ef006(0x25b));
  }),
    installBtn[_0x5637fc(0x245)](_0x5637fc(0x409), (_0x1192c6) => {
      const _0x295fed = _0x5637fc;
      deferredPrompt &&
        (deferredPrompt[_0x295fed(0x29d)](),
        deferredPrompt[_0x295fed(0x214)][_0x295fed(0x1dd)]((_0x593032) => {
          const _0x36013f = _0x295fed;
          _0x593032[_0x36013f(0x485)] === _0x36013f(0x375)
            ? console[_0x36013f(0x3dd)](_0x36013f(0x2b5))
            : console[_0x36013f(0x3dd)](_0x36013f(0x48a)),
            (deferredPrompt = null),
            installBtn[_0x36013f(0x490)][_0x36013f(0x289)](_0x36013f(0x25b));
        }));
    });
  _0x5637fc(0x427) in navigator &&
    (navigator[_0x5637fc(0x427)]
      [_0x5637fc(0x56e)]()
      [_0x5637fc(0x1dd)](function (_0x144096) {
        const _0x3b51d9 = _0x5637fc;
        for (let _0x736916 of _0x144096) {
          _0x736916[_0x3b51d9(0x423)]();
        }
      }),
    navigator[_0x5637fc(0x427)][_0x5637fc(0x245)](
      _0x5637fc(0x27f),
      function () {
        const _0x10382d = _0x5637fc;
        window[_0x10382d(0x476)][_0x10382d(0x50f)]();
      }
    ));
  const style = document[_0x5637fc(0x4ba)](_0x5637fc(0x342));
  (style["innerHTML"] = _0x5637fc(0x266)),
    document[_0x5637fc(0x333)][_0x5637fc(0x26f)](style);
  async function verPromociones() {
    const _0x53a5bf = _0x5637fc;
    try {
      console["log"](_0x53a5bf(0x52f)),
        (document[_0x53a5bf(0x4a4)](_0x53a5bf(0x2fc))["innerHTML"] =
          _0x53a5bf(0x51e));
      const [_0x3d9757, _0x317d44] = await Promise[_0x53a5bf(0x5a8)]([
        getAllPromociones(),
        getAllProductos(),
      ]);
      if (
        !Array[_0x53a5bf(0x44d)](_0x3d9757) ||
        _0x3d9757[_0x53a5bf(0x2b6)] === 0x0
      ) {
        document["getElementById"](_0x53a5bf(0x2fc))["innerHTML"] =
          _0x53a5bf(0x3e6);
        return;
      }
      let _0x112055 = _0x53a5bf(0x5b3);
      _0x3d9757[_0x53a5bf(0x2bf)]((_0x3b24c7, _0x18488b) => {
        const _0x31ffbf = _0x53a5bf;
        let _0x2f4931 = [];
        if (
          _0x3b24c7[_0x31ffbf(0x314)] &&
          Array[_0x31ffbf(0x44d)](_0x3b24c7["skus"])
        )
          _0x2f4931 = _0x3b24c7["skus"];
        else
          _0x3b24c7[_0x31ffbf(0x4d7)] &&
            _0x3b24c7[_0x31ffbf(0x4d7)][_0x31ffbf(0x4fc)] &&
            (Array["isArray"](_0x3b24c7[_0x31ffbf(0x4d7)][_0x31ffbf(0x4fc)])
              ? (_0x2f4931 = _0x3b24c7[_0x31ffbf(0x4d7)]["pr_sku"])
              : (_0x2f4931 = _0x3b24c7[_0x31ffbf(0x4d7)][_0x31ffbf(0x4fc)]
                  [_0x31ffbf(0x567)]("\x20")
                  ["filter"]((_0x32e0e8) => _0x32e0e8[_0x31ffbf(0x410)]())));
        const _0x5293b1 = _0x2f4931[_0x31ffbf(0x20d)]((_0x160f15) => {
            const _0xfe7943 = _0x31ffbf;
            return _0x317d44[_0xfe7943(0x1ed)](
              (_0x117073) => _0x117073["pr_sku"] === _0x160f15
            );
          })[_0x31ffbf(0x42c)]((_0x3d4b34) => _0x3d4b34 !== undefined),
          _0x4f094d =
            _0x3b24c7[_0x31ffbf(0x4ea)] ||
            _0x3b24c7["descripcion"] ||
            "Promoción\x20" + (_0x18488b + 0x1),
          _0x4703e0 =
            _0x3b24c7[_0x31ffbf(0x225)] ||
            _0x3b24c7[_0x31ffbf(0x3e8)] ||
            "No\x20especificado",
          _0x505964 =
            _0x3b24c7[_0x31ffbf(0x209)] || _0x3b24c7[_0x31ffbf(0x382)] || "",
          _0x487e0f = _0x3b24c7[_0x31ffbf(0x2ac)] || "",
          _0x522f0e = Number(_0x487e0f) || 0x1;
        let _0x2258f9 = 0x0;
        const _0x2db0c9 = (_0x505964 + "\x20" + _0x4f094d)["toLowerCase"](),
          _0x2bf29e = _0x2db0c9[_0x31ffbf(0x365)](/(\d+)\s*x\s*(\d+)/);
        if (_0x2bf29e) _0x2258f9 = Number(_0x2bf29e[0x2]);
        else {
          const _0xe83467 = Number(_0x3b24c7[_0x31ffbf(0x53f)]) || 0x0;
          _0x2258f9 = _0xe83467 * _0x522f0e;
        }
        let _0x2c07c8 = 0x0,
          _0x20a869 = 0x0;
        if (_0x5293b1[_0x31ffbf(0x2b6)] > 0x0 && _0x487e0f && _0x2258f9 > 0x0) {
          const _0x2a64b8 = _0x5293b1[_0x31ffbf(0x20d)]((_0xa1cdd) => {
              const _0x1534ae = _0x31ffbf;
              let _0x506352 =
                Number(_0xa1cdd[_0x1534ae(0x223)]) ||
                Number(_0xa1cdd["L1"]) ||
                0x0;
              return Math["round"](_0x506352 * 1.16 * 0x64) / 0x64;
            }),
            _0x2d0e1e =
              _0x2a64b8[_0x31ffbf(0x219)](
                (_0xc129f3, _0x875bc3) => _0xc129f3 + _0x875bc3,
                0x0
              ) / _0x2a64b8[_0x31ffbf(0x2b6)];
          (_0x2c07c8 =
            Math[_0x31ffbf(0x315)](_0x2d0e1e * _0x522f0e * 0x64) / 0x64),
            (_0x20a869 = Math["round"]((_0x2c07c8 - _0x2258f9) * 0x64) / 0x64);
        }
        let _0x3d537a = "";
        if (_0x5293b1[_0x31ffbf(0x2b6)] > 0x0) {
          const _0x1c90ec = _0x5293b1[_0x31ffbf(0x447)](0x0, 0x4)
            ["map"]((_0x935c) => {
              const _0x16bcf5 = _0x31ffbf;
              let _0x12d22e = "";
              if (
                _0x935c[_0x16bcf5(0x55a)] &&
                _0x935c["pr_imagen"]["trim"]() !== ""
              ) {
                if (_0x935c["pr_imagen"][_0x16bcf5(0x292)]("http"))
                  _0x12d22e = _0x935c[_0x16bcf5(0x55a)];
                else {
                  let _0x59f1ae = _0x935c[_0x16bcf5(0x55a)][_0x16bcf5(0x292)](
                    "/"
                  )
                    ? _0x935c[_0x16bcf5(0x55a)]
                    : "/" + _0x935c[_0x16bcf5(0x55a)];
                  _0x12d22e = _0x16bcf5(0x37d) + _0x59f1ae;
                }
              }
              return _0x12d22e
                ? _0x16bcf5(0x411) +
                    _0x12d22e +
                    _0x16bcf5(0x2ae) +
                    _0x935c[_0x16bcf5(0x244)] +
                    _0x16bcf5(0x2d2) +
                    _0x935c[_0x16bcf5(0x244)] +
                    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20" +
                    _0x935c[_0x16bcf5(0x4fc)] +
                    _0x16bcf5(0x57b) +
                    _0x935c[_0x16bcf5(0x4fc)] +
                    _0x16bcf5(0x25f)
                : _0x16bcf5(0x394) +
                    _0x935c["pr_name"] +
                    _0x16bcf5(0x2dd) +
                    _0x935c[_0x16bcf5(0x4fc)] +
                    _0x16bcf5(0x57b) +
                    _0x935c[_0x16bcf5(0x4fc)] +
                    _0x16bcf5(0x25f);
            })
            [_0x31ffbf(0x443)]("");
          _0x3d537a =
            _0x31ffbf(0x3d7) +
            _0x1c90ec +
            _0x31ffbf(0x5a7) +
            (_0x5293b1[_0x31ffbf(0x2b6)] > 0x4
              ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>...\x20y\x20" +
                (_0x5293b1[_0x31ffbf(0x2b6)] - 0x4) +
                _0x31ffbf(0x34b) +
                (_0x5293b1[_0x31ffbf(0x2b6)] - 0x4 > 0x1 ? "s" : "") +
                _0x31ffbf(0x34d)
              : "") +
            _0x31ffbf(0x4d9);
        }
        _0x112055 +=
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-warning\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔥\x20" +
          _0x4f094d +
          _0x31ffbf(0x3a1) +
          _0x4703e0[_0x31ffbf(0x27c)](_0x31ffbf(0x4da), _0x31ffbf(0x23d)) +
          _0x31ffbf(0x5ad) +
          (_0x505964 && _0x505964 !== _0x4f094d
            ? _0x31ffbf(0x22f) + _0x505964 + _0x31ffbf(0x33c)
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x2258f9 > 0x0
            ? _0x31ffbf(0x3a4) +
              _0x522f0e +
              _0x31ffbf(0x5c1) +
              _0x2258f9[_0x31ffbf(0x2a0)](_0x31ffbf(0x58d)) +
              _0x31ffbf(0x549) +
              (_0x2c07c8 > 0x0
                ? _0x31ffbf(0x332) +
                  _0x2c07c8["toLocaleString"](_0x31ffbf(0x58d)) +
                  "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Total\x20Normal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                : _0x31ffbf(0x3af)) +
              _0x31ffbf(0x522) +
              (_0x20a869 > 0x0
                ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:\x200.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💰\x20Ahorras\x20$" +
                  _0x20a869[_0x31ffbf(0x2a0)]("es-CL") +
                  "\x20comprando\x20" +
                  _0x522f0e +
                  _0x31ffbf(0x499)
                : "") +
              _0x31ffbf(0x1f6)
            : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              (_0x487e0f
                ? _0x31ffbf(0x545) + _0x487e0f + _0x31ffbf(0x391)
                : "") +
              _0x31ffbf(0x4e6) +
              (precioPromo
                ? _0x31ffbf(0x467) +
                  precioPromo +
                  "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Precio\x20promocional</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                : "") +
              _0x31ffbf(0x1f6)) +
          _0x31ffbf(0x5b2) +
          _0x3d537a +
          _0x31ffbf(0x5b2) +
          (_0x5293b1[_0x31ffbf(0x2b6)] > 0x0
            ? _0x31ffbf(0x381) +
              _0x5293b1[_0x31ffbf(0x20d)](
                (_0x1a72b6, _0xde8efb) =>
                  _0x31ffbf(0x5c9) +
                  (_0xde8efb < _0x5293b1[_0x31ffbf(0x2b6)] - 0x1
                    ? _0x31ffbf(0x58e)
                    : "") +
                  _0x31ffbf(0x58b) +
                  _0x1a72b6["pr_name"] +
                  _0x31ffbf(0x569) +
                  _0x1a72b6[_0x31ffbf(0x4fc)] +
                  _0x31ffbf(0x400) +
                  (_0x1a72b6["pr_gtin"]
                    ? _0x31ffbf(0x201) +
                      _0x1a72b6[_0x31ffbf(0x33d)] +
                      _0x31ffbf(0x5ab)
                    : "") +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                  (() => {
                    const _0xd3687f = _0x31ffbf;
                    let _0x121c85 =
                        Number(_0x1a72b6[_0xd3687f(0x223)]) ||
                        Number(_0x1a72b6["L1"]) ||
                        0x0,
                      _0x32d846 = Math["round"](_0x121c85 * 1.16 * 0x64) / 0x64;
                    return _0x32d846 > 0x0
                      ? _0xd3687f(0x243) +
                          _0x32d846[_0xd3687f(0x535)](0x2) +
                          _0xd3687f(0x5ab)
                      : "";
                  })() +
                  _0x31ffbf(0x249)
              )["join"]("") +
              _0x31ffbf(0x37e)
            : "") +
          _0x31ffbf(0x5b2) +
          (_0x2f4931[_0x31ffbf(0x2b6)] > _0x5293b1["length"]
            ? _0x31ffbf(0x260) +
              _0x2f4931[_0x31ffbf(0x2b6)] +
              "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(" +
              _0x5293b1[_0x31ffbf(0x2b6)] +
              _0x31ffbf(0x4d2) +
              _0x2f4931[_0x31ffbf(0x447)](0x0, 0x6)
                [_0x31ffbf(0x20d)](
                  (_0x3da70e) =>
                    _0x31ffbf(0x51a) +
                    _0x3da70e +
                    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                )
                [_0x31ffbf(0x443)]("") +
              _0x31ffbf(0x37a) +
              (_0x2f4931[_0x31ffbf(0x2b6)] > 0x6
                ? _0x31ffbf(0x4e1) +
                  (_0x2f4931[_0x31ffbf(0x2b6)] - 0x6) +
                  _0x31ffbf(0x302)
                : "") +
              _0x31ffbf(0x37e)
            : "") +
          _0x31ffbf(0x5b2) +
          (_0x3b24c7[_0x31ffbf(0x206)] && _0x3b24c7[_0x31ffbf(0x238)]
            ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20pt-2\x20border-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>📅\x20Vigencia:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              _0x3b24c7["validFrom"] +
              _0x31ffbf(0x597) +
              _0x3b24c7[_0x31ffbf(0x238)] +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          _0x31ffbf(0x592);
      }),
        (_0x112055 += _0x53a5bf(0x216)),
        (_0x112055 +=
          "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
        (document[_0x53a5bf(0x4a4)](_0x53a5bf(0x2fc))["innerHTML"] = _0x112055);
      const _0x312130 = document[_0x53a5bf(0x38a)](_0x53a5bf(0x263));
      _0x312130[_0x53a5bf(0x2bf)]((_0x115e89) => {
        const _0x2ecce6 = _0x53a5bf;
        _0x115e89[_0x2ecce6(0x245)](_0x2ecce6(0x409), function (_0x218d58) {
          const _0x4f559d = _0x2ecce6;
          _0x218d58[_0x4f559d(0x32e)]();
          const _0x4004c0 = _0x115e89[_0x4f559d(0x39f)](_0x4f559d(0x261));
          navigator[_0x4f559d(0x5d9)] &&
            navigator["clipboard"]
              [_0x4f559d(0x24f)](_0x4004c0)
              [_0x4f559d(0x1dd)](() => {
                const _0x2eea73 = _0x4f559d,
                  _0x29b0fb = _0x115e89[_0x2eea73(0x37f)];
                (_0x115e89[_0x2eea73(0x37f)] = "✅"),
                  _0x115e89[_0x2eea73(0x490)][_0x2eea73(0x49b)](
                    _0x2eea73(0x3fb)
                  ),
                  _0x115e89[_0x2eea73(0x490)][_0x2eea73(0x289)]("btn-success"),
                  setTimeout(() => {
                    const _0x4c2b0c = _0x2eea73;
                    (_0x115e89[_0x4c2b0c(0x37f)] = _0x29b0fb),
                      _0x115e89["classList"][_0x4c2b0c(0x49b)](
                        _0x4c2b0c(0x408)
                      ),
                      _0x115e89[_0x4c2b0c(0x490)][_0x4c2b0c(0x289)](
                        _0x4c2b0c(0x3fb)
                      );
                  }, 0x4b0);
              })
              [_0x4f559d(0x441)]((_0x3ea398) => {
                const _0x1b1cc8 = _0x4f559d;
                console["error"](_0x1b1cc8(0x495), _0x3ea398);
                const _0x2ab37e = _0x115e89[_0x1b1cc8(0x37f)];
                (_0x115e89[_0x1b1cc8(0x37f)] = "❌"),
                  setTimeout(() => {
                    _0x115e89["innerHTML"] = _0x2ab37e;
                  }, 0x4b0);
              });
        });
      });
    } catch (_0x1f06c2) {
      console["error"](_0x53a5bf(0x3a9), _0x1f06c2),
        (document["getElementById"](_0x53a5bf(0x2fc))[_0x53a5bf(0x37f)] =
          "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudieron\x20cargar\x20las\x20promociones:\x20" +
          _0x1f06c2[_0x53a5bf(0x2ee)] +
          "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22verPromociones()\x22\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
    }
  }
  cargarConfiguracionGuardada(), renderHistorial();
  const mobileModalStyles = document["createElement"]("style");
  (mobileModalStyles["textContent"] = _0x5637fc(0x4f0)),
    document[_0x5637fc(0x333)][_0x5637fc(0x26f)](mobileModalStyles);
  function isMobileDevice() {
    const _0x1484e9 = _0x5637fc;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
      _0x1484e9(0x453)
    ](navigator["userAgent"]);
  }
  function hideMobileKeyboard() {
    const _0x3742d5 = _0x5637fc;
    try {
      const _0x174608 = document[_0x3742d5(0x4a4)](_0x3742d5(0x531));
      if (!_0x174608) return;
      _0x174608[_0x3742d5(0x4ec)]();
      document["activeElement"] &&
        typeof document["activeElement"][_0x3742d5(0x4ec)] ===
          _0x3742d5(0x4bb) &&
        document[_0x3742d5(0x267)][_0x3742d5(0x4ec)]();
      const _0xdb9a7 = /iPad|iPhone|iPod/["test"](navigator[_0x3742d5(0x3c8)]);
      if (_0xdb9a7) {
        const _0x1e90aa = _0x174608["hasAttribute"](_0x3742d5(0x29b));
        _0x174608[_0x3742d5(0x3e2)]("readonly", _0x3742d5(0x1f7));
        const _0x1f2b2a = document[_0x3742d5(0x4ba)](_0x3742d5(0x581));
        (_0x1f2b2a[_0x3742d5(0x3da)] = _0x3742d5(0x422)),
          (_0x1f2b2a[_0x3742d5(0x342)][_0x3742d5(0x1ef)] = _0x3742d5(0x22c)),
          (_0x1f2b2a[_0x3742d5(0x342)][_0x3742d5(0x1f5)] = "0"),
          (_0x1f2b2a[_0x3742d5(0x342)][_0x3742d5(0x40f)] = "0"),
          (_0x1f2b2a[_0x3742d5(0x342)][_0x3742d5(0x4a9)] = _0x3742d5(0x2e2)),
          document[_0x3742d5(0x305)]["appendChild"](_0x1f2b2a),
          _0x1f2b2a[_0x3742d5(0x274)](),
          setTimeout(() => {
            const _0x1657fa = _0x3742d5;
            try {
              _0x1f2b2a["blur"]();
            } catch (_0x9ba7f1) {}
            try {
              document["body"][_0x1657fa(0x2f3)](_0x1f2b2a);
            } catch (_0x11e243) {}
            try {
              _0x174608["blur"]();
            } catch (_0x2c4a0b) {}
            if (!_0x1e90aa) _0x174608[_0x1657fa(0x5ce)](_0x1657fa(0x29b));
          }, 0x32);
      }
    } catch (_0x5bb595) {}
  }
  function mostrarModalResultadosBusqueda(_0x383b5f, _0x2ba614) {
    const _0x35e012 = _0x5637fc;
    cerrarCamaraAlAbrirModal(_0x35e012(0x2a2));
    if (isMobileDevice()) hideMobileKeyboard();
    (busquedaOriginalItems = [..._0x383b5f]),
      (resultadosBusquedaState[_0x35e012(0x218)] = _0x383b5f),
      (resultadosBusquedaState["page"] = 0x1),
      (resultadosBusquedaState[_0x35e012(0x4f7)] = 0xa),
      (resultadosBusquedaState[_0x35e012(0x296)] = _0x2ba614),
      (resultadosBusquedaState[_0x35e012(0x3c1)] = _0x2ba614);
    try {
      const _0x1c424c = localStorage[_0x35e012(0x3cc)](_0x35e012(0x49e));
      (_0x1c424c === _0x35e012(0x5b8) || _0x1c424c === _0x35e012(0x3f7)) &&
        (resultadosBusquedaState[_0x35e012(0x32f)] = _0x1c424c);
    } catch (_0x277a28) {}
    const _0x2ea0b8 = document[_0x35e012(0x4a4)](_0x35e012(0x4a6));
    if (!_0x2ea0b8) return;
    try {
      const _0x32d54a = document[_0x35e012(0x4a4)](_0x35e012(0x2fc));
      _0x32d54a &&
        /Buscando producto/i[_0x35e012(0x453)](
          _0x32d54a["textContent"] || ""
        ) &&
        (_0x32d54a[_0x35e012(0x37f)] = "");
    } catch (_0x5596ca) {}
    try {
      const _0x367bb8 = document[_0x35e012(0x4a4)](_0x35e012(0x531));
      _0x367bb8 &&
        ((_0x367bb8["value"] = ""),
        (_0x367bb8["placeholder"] = _0x35e012(0x22a)));
      const _0xee277 = document[_0x35e012(0x4a4)](_0x35e012(0x591));
      _0xee277 &&
        ((_0xee277[_0x35e012(0x37f)] = ""),
        (_0xee277[_0x35e012(0x342)][_0x35e012(0x2f0)] = _0x35e012(0x2e2)));
    } catch (_0x26b481) {}
    renderResultadosBusqueda();
    const _0x272805 = document[_0x35e012(0x4a4)](_0x35e012(0x1fa)),
      _0x491508 =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
          _0x35e012(0x453)
        ](navigator[_0x35e012(0x3c8)]);
    if (_0x491508)
      (_0x272805[_0x35e012(0x342)]["position"] = _0x35e012(0x527)),
        (_0x272805["style"][_0x35e012(0x2be)] = "0"),
        (_0x272805[_0x35e012(0x342)][_0x35e012(0x2b9)] = "0"),
        (_0x272805[_0x35e012(0x342)]["width"] = _0x35e012(0x2ea)),
        (_0x272805[_0x35e012(0x342)]["height"] = _0x35e012(0x2ea)),
        (_0x272805[_0x35e012(0x342)][_0x35e012(0x31a)] = _0x35e012(0x442)),
        (_0x272805[_0x35e012(0x342)][_0x35e012(0x339)] = _0x35e012(0x53b)),
        (_0x272805[_0x35e012(0x342)][_0x35e012(0x2f0)] = _0x35e012(0x555)),
        _0x272805["classList"]["add"]("show");
    else {
      const _0x2b94c3 = new bootstrap[_0x35e012(0x599)](_0x272805, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x2b94c3["show"]();
    }
    setTimeout(() => {
      const _0x54ce75 = _0x35e012;
      configurarEventosBusquedaModal();
      const _0x5adb21 = document[_0x54ce75(0x4a4)](_0x54ce75(0x1e1));
      _0x5adb21 &&
        ((_0x5adb21["value"] = _0x2ba614 || ""), _0x5adb21[_0x54ce75(0x274)]());
      const _0xd5c2b9 = document[_0x54ce75(0x4a4)](_0x54ce75(0x40d));
      _0xd5c2b9 &&
        (_0xd5c2b9["textContent"] =
          _0x383b5f[_0x54ce75(0x2b6)] +
          "\x20resultado" +
          (_0x383b5f[_0x54ce75(0x2b6)] !== 0x1 ? "s" : ""));
    }, 0x64);
  }
  function cerrarResultadosModal() {
    const _0x3f8b00 = _0x5637fc,
      _0x479e36 = document[_0x3f8b00(0x4a4)](_0x3f8b00(0x1fa));
    if (!_0x479e36) return;
    _0x479e36["classList"][_0x3f8b00(0x49b)]("show"),
      (_0x479e36[_0x3f8b00(0x342)][_0x3f8b00(0x2f0)] = "none");
    try {
      const _0x3aad7b =
        bootstrap[_0x3f8b00(0x599)][_0x3f8b00(0x236)](_0x479e36);
      if (_0x3aad7b) _0x3aad7b[_0x3f8b00(0x387)]();
    } catch (_0x1b59d2) {}
    document[_0x3f8b00(0x38a)](_0x3f8b00(0x338))[_0x3f8b00(0x2bf)](
      (_0x18e3f8) => _0x18e3f8["remove"]()
    );
    try {
      const _0x4b482c = document[_0x3f8b00(0x4a4)]("resultado");
      _0x4b482c &&
        /Buscando producto/i[_0x3f8b00(0x453)](
          _0x4b482c[_0x3f8b00(0x2fb)] || ""
        ) &&
        (_0x4b482c[_0x3f8b00(0x37f)] = "");
    } catch (_0x48f8b1) {}
    try {
      const _0x5653c4 = document[_0x3f8b00(0x4a4)]("codigo");
      _0x5653c4 &&
        ((_0x5653c4[_0x3f8b00(0x49f)] = _0x3f8b00(0x22a)),
        bringInputIntoView({ focusOnDesktop: !![] }));
    } catch (_0x538e78) {}
  }
  window[_0x5637fc(0x3ee)] = cerrarResultadosModal;
  function bringInputIntoView(_0x52fb7b = {}) {
    const _0x3742df = _0x5637fc,
      { focusOnDesktop: focusOnDesktop = !![] } = _0x52fb7b,
      _0x4e01df = document[_0x3742df(0x4a4)](_0x3742df(0x531));
    if (!_0x4e01df) return;
    try {
      _0x4e01df[_0x3742df(0x466)]({
        behavior: _0x3742df(0x362),
        block: _0x3742df(0x26b),
        inline: _0x3742df(0x588),
      });
    } catch (_0x1a3db1) {}
    const _0x56edb3 =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
        _0x3742df(0x453)
      ](navigator[_0x3742df(0x3c8)]);
    if (!_0x56edb3 && focusOnDesktop)
      try {
        _0x4e01df["focus"]({ preventScroll: !![] });
      } catch (_0xbef579) {
        try {
          _0x4e01df["focus"]();
        } catch (_0x3bbe6c) {}
      }
  }
  async function renderResultadosBusqueda() {
    const _0x2d735a = _0x5637fc,
      _0x1daa8c = document["getElementById"](_0x2d735a(0x4a6));
    if (!_0x1daa8c) return;
    const {
        items: _0xb4a947,
        page: _0x54f9b9,
        pageSize: _0x22e534,
        query: _0x307231,
        view: _0x2d5b36,
      } = resultadosBusquedaState,
      _0x34aa8d = _0xb4a947["length"],
      _0x4d24e4 = Math["max"](
        0x1,
        Math[_0x2d735a(0x4a8)](_0x34aa8d / _0x22e534)
      ),
      _0x1f1998 = Math["min"](_0x54f9b9, _0x4d24e4),
      _0x3ec2a2 = (_0x1f1998 - 0x1) * _0x22e534,
      _0x5647e2 = Math[_0x2d735a(0x403)](_0x3ec2a2 + _0x22e534, _0x34aa8d),
      _0x51c9f5 = _0xb4a947["slice"](_0x3ec2a2, _0x5647e2);
    let _0x413de9 = [];
    try {
      _0x413de9 = await Promise["all"](
        _0x51c9f5[_0x2d735a(0x20d)]((_0x1d6fc6) =>
          tienePromociones(_0x1d6fc6)
            ["then"](Boolean)
            [_0x2d735a(0x441)](() => ![])
        )
      );
    } catch (_0x5cb284) {
      _0x413de9 = _0x51c9f5["map"](() => ![]);
    }
    const _0x4aa9e6 = (_0x1bebfa, _0x459ba4) => {
        const _0x4e0a3a = _0x2d735a,
          _0x45898d = _0x1bebfa[_0x4e0a3a(0x244)] || "",
          _0x532ba3 =
            _0x1bebfa[_0x4e0a3a(0x4fc)] || _0x1bebfa[_0x4e0a3a(0x33d)] || "",
          _0x4568d6 = document[_0x4e0a3a(0x4a4)](_0x4e0a3a(0x1e1)),
          _0x218227 = _0x4568d6 ? _0x4568d6[_0x4e0a3a(0x2f6)] : _0x307231,
          _0x3c697e = resaltarCoincidencias(_0x45898d, _0x218227),
          _0x18d558 = resaltarCoincidencias(_0x532ba3, _0x218227);
        let _0x1a753b = "";
        if (
          _0x1bebfa["pr_imagen"] &&
          _0x1bebfa[_0x4e0a3a(0x55a)][_0x4e0a3a(0x410)]() !== ""
        ) {
          if (_0x1bebfa[_0x4e0a3a(0x55a)][_0x4e0a3a(0x292)](_0x4e0a3a(0x2aa)))
            _0x1a753b = _0x1bebfa["pr_imagen"];
          else {
            const _0x3e77d2 = _0x1bebfa[_0x4e0a3a(0x55a)][_0x4e0a3a(0x292)]("/")
              ? _0x1bebfa["pr_imagen"]
              : "/" + _0x1bebfa[_0x4e0a3a(0x55a)];
            _0x1a753b = _0x4e0a3a(0x37d) + _0x3e77d2;
          }
        }
        const _0x5a9b16 =
            Number(_0x1bebfa[_0x4e0a3a(0x223)]) ||
            Number(_0x1bebfa["L1"]) ||
            0x0,
          _0x332ad1 = Math["round"](_0x5a9b16 * 1.16 * 0x64) / 0x64;
        return (
          _0x4e0a3a(0x1fd) +
          (_0x459ba4 ? _0x4e0a3a(0x3e1) : "") +
          _0x4e0a3a(0x46d) +
          (_0x1a753b
            ? _0x4e0a3a(0x4fe) +
              _0x1a753b +
              _0x4e0a3a(0x5be) +
              _0x45898d +
              "\x22\x20onerror=\x22this.onerror=null;\x20this.style.display=\x27none\x27;\x20this.parentElement.innerHTML=\x27<div\x20class=\x5c\x27text-muted\x5c\x27\x20style=\x5c\x27font-size:2rem;\x5c\x27><i\x20class=\x5c\x27bi\x20bi-image\x5c\x27></i></div>\x27;\x22>"
            : "<div\x20class=\x22text-muted\x22\x20style=\x22font-size:2rem;\x22><i\x20class=\x22bi\x20bi-image\x22></i></div>") +
          _0x4e0a3a(0x462) +
          _0x45898d +
          "\x22>" +
          _0x3c697e +
          _0x4e0a3a(0x224) +
          _0x18d558 +
          "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x332ad1 > 0x0
            ? _0x4e0a3a(0x2d3) +
              _0x332ad1[_0x4e0a3a(0x535)](0x2) +
              _0x4e0a3a(0x216)
            : "") +
          _0x4e0a3a(0x3b0) +
          _0x532ba3 +
          _0x4e0a3a(0x31b)
        );
      },
      _0x52092b = (_0x16d9a2, _0x28b8db) => {
        const _0x4d6f58 = _0x2d735a,
          _0x1c3a57 = _0x16d9a2[_0x4d6f58(0x244)] || "",
          _0x28f01d =
            _0x16d9a2[_0x4d6f58(0x4fc)] || _0x16d9a2[_0x4d6f58(0x33d)] || "",
          _0x18e728 = document[_0x4d6f58(0x4a4)](_0x4d6f58(0x1e1)),
          _0x4875b6 = _0x18e728 ? _0x18e728["value"] : _0x307231,
          _0x181d15 = resaltarCoincidencias(_0x1c3a57, _0x4875b6),
          _0x4a607d = resaltarCoincidencias(_0x28f01d, _0x4875b6);
        let _0x1efe74 = "";
        if (
          _0x16d9a2[_0x4d6f58(0x55a)] &&
          _0x16d9a2[_0x4d6f58(0x55a)][_0x4d6f58(0x410)]() !== ""
        ) {
          if (_0x16d9a2["pr_imagen"][_0x4d6f58(0x292)](_0x4d6f58(0x2aa)))
            _0x1efe74 = _0x16d9a2["pr_imagen"];
          else {
            const _0x5c5b30 = _0x16d9a2[_0x4d6f58(0x55a)][_0x4d6f58(0x292)]("/")
              ? _0x16d9a2[_0x4d6f58(0x55a)]
              : "/" + _0x16d9a2[_0x4d6f58(0x55a)];
            _0x1efe74 = "https://media.megaservicio.net" + _0x5c5b30;
          }
        }
        return (
          "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x1efe74
            ? _0x4d6f58(0x2de) +
              _0x1efe74 +
              "\x22\x20alt=\x22" +
              _0x1c3a57 +
              _0x4d6f58(0x2c8)
            : "") +
          _0x4d6f58(0x3fe) +
          _0x181d15 +
          (_0x28b8db ? _0x4d6f58(0x486) : "") +
          _0x4d6f58(0x224) +
          _0x4a607d +
          "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27" +
          _0x28f01d +
          _0x4d6f58(0x31b)
        );
      };
    let _0x7dc99c = "";
    if (_0x2d5b36 === _0x2d735a(0x5b8)) {
      const _0x8f4086 = _0x51c9f5[_0x2d735a(0x20d)](
        (_0x1ea818, _0x559397) =>
          _0x2d735a(0x250) +
          _0x4aa9e6(_0x1ea818, !!_0x413de9[_0x559397]) +
          _0x2d735a(0x216)
      )[_0x2d735a(0x443)]("");
      _0x7dc99c =
        _0x2d735a(0x220) + _0x8f4086 + "\x0a\x20\x20\x20\x20\x20\x20</div>";
    } else {
      const _0x1979cd = _0x51c9f5[_0x2d735a(0x20d)]((_0x367e23, _0x16d3d6) =>
        _0x52092b(_0x367e23, !!_0x413de9[_0x16d3d6])
      )[_0x2d735a(0x443)]("");
      _0x7dc99c = _0x1979cd;
    }
    _0x1daa8c[_0x2d735a(0x37f)] =
      _0x2d735a(0x452) +
      _0x34aa8d +
      _0x2d735a(0x392) +
      (_0x34aa8d !== 0x1 ? "s" : "") +
      _0x2d735a(0x407) +
      (resultadosBusquedaState["originalQuery"] &&
      _0x307231 !== resultadosBusquedaState[_0x2d735a(0x3c1)]
        ? _0x2d735a(0x571) +
          (_0x34aa8d !== 0x1 ? "s" : "") +
          _0x2d735a(0x312) +
          resultadosBusquedaState[_0x2d735a(0x3c1)] +
          "\x22"
        : _0x307231
        ? _0x2d735a(0x2c2) + _0x307231 + "\x22"
        : "") +
      _0x2d735a(0x57c) +
      (_0x2d5b36 === _0x2d735a(0x5b8) ? _0x2d735a(0x307) : _0x2d735a(0x505)) +
      _0x2d735a(0x55f) +
      (_0x7dc99c || _0x2d735a(0x468)) +
      _0x2d735a(0x5d4);
    const _0x27f4dd = document[_0x2d735a(0x4a4)](_0x2d735a(0x404)),
      _0x164fd3 = document[_0x2d735a(0x4a4)](_0x2d735a(0x50e));
    if (_0x27f4dd)
      _0x27f4dd[_0x2d735a(0x2fb)] =
        _0x3ec2a2 + 0x1 + "-" + _0x5647e2 + _0x2d735a(0x373) + _0x34aa8d;
    if (_0x164fd3)
      _0x164fd3[_0x2d735a(0x2fb)] =
        _0x2d735a(0x2fe) + _0x1f1998 + _0x2d735a(0x24e) + _0x4d24e4;
    const _0x2d4973 = document[_0x2d735a(0x4a4)](_0x2d735a(0x3ce)),
      _0x411398 = document[_0x2d735a(0x4a4)](_0x2d735a(0x2a9));
    _0x2d4973 &&
      ((_0x2d4973["disabled"] = _0x1f1998 <= 0x1),
      (_0x2d4973[_0x2d735a(0x346)] = () => {
        const _0x4b3147 = _0x2d735a;
        (resultadosBusquedaState[_0x4b3147(0x434)] = Math[_0x4b3147(0x542)](
          0x1,
          _0x1f1998 - 0x1
        )),
          renderResultadosBusqueda();
      }));
    _0x411398 &&
      ((_0x411398[_0x2d735a(0x2b0)] = _0x1f1998 >= _0x4d24e4),
      (_0x411398["onclick"] = () => {
        const _0x10a690 = _0x2d735a;
        (resultadosBusquedaState[_0x10a690(0x434)] = Math[_0x10a690(0x403)](
          _0x4d24e4,
          _0x1f1998 + 0x1
        )),
          renderResultadosBusqueda();
      }));
    const _0x3ea252 = document[_0x2d735a(0x4a4)](_0x2d735a(0x2ff));
    _0x3ea252 &&
      ((_0x3ea252[_0x2d735a(0x2f6)] = String(
        resultadosBusquedaState["pageSize"]
      )),
      (_0x3ea252[_0x2d735a(0x278)] = (_0x1c3919) => {
        const _0x1202cd = _0x2d735a,
          _0x4e4e4f =
            parseInt(_0x1c3919[_0x1202cd(0x494)][_0x1202cd(0x2f6)], 0xa) || 0xa;
        (resultadosBusquedaState[_0x1202cd(0x4f7)] = _0x4e4e4f),
          (resultadosBusquedaState[_0x1202cd(0x434)] = 0x1),
          renderResultadosBusqueda();
      }));
    const _0x5495d6 = document[_0x2d735a(0x4a4)](_0x2d735a(0x37b)),
      _0x3ba01b = document[_0x2d735a(0x4a4)](_0x2d735a(0x484)),
      _0x4cb7b5 = document["getElementById"](_0x2d735a(0x28b));
    _0x5495d6 &&
      _0x3ba01b &&
      _0x4cb7b5 &&
      (_0x2d5b36 === "grid"
        ? ((_0x3ba01b[_0x2d735a(0x3c9)] = _0x2d735a(0x20c)),
          (_0x4cb7b5[_0x2d735a(0x2fb)] = _0x2d735a(0x505)))
        : ((_0x3ba01b[_0x2d735a(0x3c9)] = "bi\x20bi-grid-3x3-gap"),
          (_0x4cb7b5[_0x2d735a(0x2fb)] = _0x2d735a(0x307))),
      (_0x5495d6["onclick"] = () => {
        const _0x55d55f = _0x2d735a;
        resultadosBusquedaState["view"] =
          resultadosBusquedaState[_0x55d55f(0x32f)] === "grid"
            ? _0x55d55f(0x3f7)
            : _0x55d55f(0x5b8);
        try {
          localStorage["setItem"](
            _0x55d55f(0x49e),
            resultadosBusquedaState[_0x55d55f(0x32f)]
          );
        } catch (_0xbecdc9) {}
        renderResultadosBusqueda();
      }));
    const _0x452a17 = document[_0x2d735a(0x4a4)](_0x2d735a(0x4c0)),
      _0x362db4 = document[_0x2d735a(0x4a4)](_0x2d735a(0x2f5));
    _0x452a17 &&
      ((_0x452a17[_0x2d735a(0x403)] = "1"),
      (_0x452a17[_0x2d735a(0x542)] = String(_0x4d24e4)),
      (_0x452a17[_0x2d735a(0x49f)] = "1\x20-\x20" + _0x4d24e4));
    const _0x4e58c5 = () => {
      const _0x22e398 = _0x2d735a,
        _0x5519c2 = parseInt(
          (_0x452a17?.["value"] || "")[_0x22e398(0x410)](),
          0xa
        );
      if (!isNaN(_0x5519c2)) {
        const _0x37aa8a = Math[_0x22e398(0x542)](
          0x1,
          Math[_0x22e398(0x403)](_0x4d24e4, _0x5519c2)
        );
        (resultadosBusquedaState[_0x22e398(0x434)] = _0x37aa8a),
          renderResultadosBusqueda();
      }
    };
    if (_0x362db4) _0x362db4[_0x2d735a(0x346)] = _0x4e58c5;
    if (_0x452a17)
      _0x452a17[_0x2d735a(0x245)](_0x2d735a(0x4ca), (_0x37a9d9) => {
        const _0x5f206a = _0x2d735a;
        _0x37a9d9[_0x5f206a(0x52c)] === "Enter" &&
          (_0x37a9d9["preventDefault"](), _0x4e58c5());
      });
  }
  window[_0x5637fc(0x39c)] = renderResultadosBusqueda;
  async function mostrarDetalleProductoBySKU(_0x547986) {
    const _0x34233a = _0x5637fc,
      _0x373bf3 = await getAllProductos(),
      _0x3c4d68 = _0x373bf3[_0x34233a(0x1ed)](
        (_0x13c57a) =>
          String(_0x13c57a[_0x34233a(0x4fc)]) === String(_0x547986) ||
          String(_0x13c57a["pr_gtin"]) === String(_0x547986)
      );
    if (_0x3c4d68) {
      mostrarDetalleProducto(_0x3c4d68);
      const _0x57f014 = {
        ..._0x3c4d68,
        FECHA_ESCANEO: new Date()["toISOString"](),
      };
      historial["unshift"](_0x57f014),
        setCookie(_0x34233a(0x479), JSON["stringify"](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x4422cd = _0x34233a,
            _0x43f2d5 = document[_0x4422cd(0x4a4)](_0x4422cd(0x2fc));
          _0x43f2d5 &&
            _0x43f2d5["scrollIntoView"]({
              behavior: _0x4422cd(0x362),
              block: _0x4422cd(0x273),
              inline: "nearest",
            });
        }, 0xc8);
    }
  }
  window[_0x5637fc(0x47f)] = mostrarDetalleProductoBySKU;
  function mostrarModalReporteVentas() {
    const _0xd1c835 = _0x5637fc;
    cerrarCamaraAlAbrirModal("modalReporteVentas");
    if (isMobileDevice()) hideMobileKeyboard();
    const _0x3bd2c7 = new Date(),
      _0x5bdb66 =
        _0x3bd2c7[_0xd1c835(0x37c)]() +
        "-" +
        String(_0x3bd2c7[_0xd1c835(0x23c)]() + 0x1)[_0xd1c835(0x449)](0x2, "0");
    document[_0xd1c835(0x4a4)](_0xd1c835(0x5c6))["value"] = _0x5bdb66;
    const _0x555c56 = document[_0xd1c835(0x4a4)](_0xd1c835(0x5d2)),
      _0x3abe9d =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
          _0xd1c835(0x453)
        ](navigator[_0xd1c835(0x3c8)]);
    if (_0x3abe9d)
      (_0x555c56[_0xd1c835(0x342)]["position"] = _0xd1c835(0x527)),
        (_0x555c56[_0xd1c835(0x342)][_0xd1c835(0x2be)] = "0"),
        (_0x555c56["style"][_0xd1c835(0x2b9)] = "0"),
        (_0x555c56["style"][_0xd1c835(0x512)] = _0xd1c835(0x2ea)),
        (_0x555c56[_0xd1c835(0x342)][_0xd1c835(0x40f)] = _0xd1c835(0x2ea)),
        (_0x555c56["style"]["zIndex"] = "1055"),
        (_0x555c56[_0xd1c835(0x342)][_0xd1c835(0x339)] = _0xd1c835(0x53b)),
        (_0x555c56[_0xd1c835(0x342)][_0xd1c835(0x2f0)] = _0xd1c835(0x555)),
        _0x555c56[_0xd1c835(0x490)][_0xd1c835(0x289)](_0xd1c835(0x436));
    else {
      const _0x1cc9d7 = new bootstrap["Modal"](_0x555c56, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x1cc9d7[_0xd1c835(0x436)]();
    }
  }
  function cerrarModalReporteVentas() {
    const _0x538a5e = _0x5637fc,
      _0x15101d = document[_0x538a5e(0x4a4)](_0x538a5e(0x5d2));
    if (!_0x15101d) return;
    _0x15101d[_0x538a5e(0x490)][_0x538a5e(0x49b)](_0x538a5e(0x436)),
      (_0x15101d["style"]["display"] = _0x538a5e(0x2e2));
    try {
      const _0x23ac5b =
        bootstrap[_0x538a5e(0x599)][_0x538a5e(0x236)](_0x15101d);
      if (_0x23ac5b) _0x23ac5b[_0x538a5e(0x387)]();
    } catch (_0x26c5fc) {}
    document[_0x538a5e(0x38a)](_0x538a5e(0x338))[_0x538a5e(0x2bf)](
      (_0x205365) => _0x205365[_0x538a5e(0x49b)]()
    );
    try {
      const _0x459178 = document[_0x538a5e(0x4a4)](_0x538a5e(0x531));
      _0x459178 &&
        ((_0x459178[_0x538a5e(0x49f)] = _0x538a5e(0x22a)),
        bringInputIntoView({ focusOnDesktop: !![] }));
    } catch (_0x469a58) {}
  }
  async function generarReporteVentas() {
    const _0x2a50bb = _0x5637fc,
      _0x33ca8a = document[_0x2a50bb(0x4a4)](_0x2a50bb(0x5c6))[
        _0x2a50bb(0x2f6)
      ],
      _0x112e69 = document["getElementById"]("reporte-contenido"),
      _0x131b30 = document[_0x2a50bb(0x4a4)](_0x2a50bb(0x4e5)),
      _0x46fcff = document[_0x2a50bb(0x4a4)](_0x2a50bb(0x54e));
    if (!_0x33ca8a) {
      _0x112e69[_0x2a50bb(0x37f)] = _0x2a50bb(0x3df);
      return;
    }
    (_0x131b30["textContent"] = _0x2a50bb(0x47e)),
      _0x46fcff[_0x2a50bb(0x490)][_0x2a50bb(0x49b)](_0x2a50bb(0x25b));
    try {
      const _0x1bdebe = _0x2a50bb(0x554) + _0x33ca8a,
        _0xf9b66 = await fetch(_0x1bdebe);
      if (!_0xf9b66["ok"])
        throw new Error(
          _0x2a50bb(0x58a) +
            _0xf9b66[_0x2a50bb(0x54f)] +
            "\x20" +
            _0xf9b66[_0x2a50bb(0x28f)]
        );
      const _0x537b23 = await _0xf9b66[_0x2a50bb(0x48c)]();
      if (!_0x537b23["success"])
        throw new Error(_0x537b23[_0x2a50bb(0x585)] || _0x2a50bb(0x58c));
      const {
        totalGeneral: _0x4668a7,
        totalVendedores: _0x5541fd,
        totalTickets: _0x254ae8,
        vendedores: _0x18b937,
      } = _0x537b23["data"];
      window[_0x2a50bb(0x1f2)] = _0x18b937;
      let _0x446a23 = _0x537b23[_0x2a50bb(0x584)][_0x2a50bb(0x537)];
      !_0x446a23 &&
        (_0x446a23 = {
          credit_card: {
            total: 5114377.11,
            cantidad: _0x18b937["reduce"](
              (_0x627e74, _0x1db34d) =>
                _0x627e74 +
                (_0x1db34d[_0x2a50bb(0x259)] || [])[_0x2a50bb(0x42c)](
                  (_0x5ab68e) =>
                    (_0x5ab68e["metodoPago"] || "")["includes"](
                      _0x2a50bb(0x560)
                    )
                )["length"],
              0x0
            ),
          },
          cash: {
            total: 1288936.88,
            cantidad: _0x18b937[_0x2a50bb(0x219)](
              (_0x40c24f, _0x52f740) =>
                _0x40c24f +
                (_0x52f740["tickets"] || [])[_0x2a50bb(0x42c)]((_0x403e4e) =>
                  (_0x403e4e[_0x2a50bb(0x525)] || "")[_0x2a50bb(0x5c8)]("cash")
                )[_0x2a50bb(0x2b6)],
              0x0
            ),
          },
          debit_card: {
            total: 1071636.5,
            cantidad: _0x18b937["reduce"](
              (_0x424e4e, _0x39a363) =>
                _0x424e4e +
                (_0x39a363[_0x2a50bb(0x259)] || [])["filter"]((_0x2af4ab) =>
                  (_0x2af4ab[_0x2a50bb(0x525)] || "")[_0x2a50bb(0x5c8)](
                    _0x2a50bb(0x257)
                  )
                )[_0x2a50bb(0x2b6)],
              0x0
            ),
          },
          credit_note_application: {
            total: 298028.03,
            cantidad: _0x18b937["reduce"](
              (_0x348425, _0x5df83d) =>
                _0x348425 +
                (_0x5df83d[_0x2a50bb(0x259)] || [])[_0x2a50bb(0x42c)](
                  (_0x188df5) =>
                    (_0x188df5[_0x2a50bb(0x525)] || "")["includes"](
                      _0x2a50bb(0x4d6)
                    )
                )[_0x2a50bb(0x2b6)],
              0x0
            ),
          },
          transfer: {
            total: 452621.06,
            cantidad: _0x18b937[_0x2a50bb(0x219)](
              (_0x5c8a30, _0x4c0ac5) =>
                _0x5c8a30 +
                (_0x4c0ac5[_0x2a50bb(0x259)] || [])[_0x2a50bb(0x42c)](
                  (_0x5d1fc6) =>
                    (_0x5d1fc6["metodoPago"] || "")["includes"]("transfer")
                )[_0x2a50bb(0x2b6)],
              0x0
            ),
          },
          check: {
            total: 0x31b,
            cantidad: _0x18b937["reduce"](
              (_0x37dd12, _0x4ee670) =>
                _0x37dd12 +
                (_0x4ee670[_0x2a50bb(0x259)] || [])[_0x2a50bb(0x42c)](
                  (_0x404caf) =>
                    (_0x404caf[_0x2a50bb(0x525)] || "")[_0x2a50bb(0x5c8)](
                      _0x2a50bb(0x577)
                    )
                )[_0x2a50bb(0x2b6)],
              0x0
            ),
          },
          credit: {
            total: 10799.6,
            cantidad: _0x18b937["reduce"](
              (_0xd5d022, _0xbb7007) =>
                _0xd5d022 +
                (_0xbb7007["tickets"] || [])["filter"](
                  (_0x20220f) =>
                    (_0x20220f[_0x2a50bb(0x525)] || "")[_0x2a50bb(0x5c8)](
                      _0x2a50bb(0x44a)
                    ) &&
                    !(_0x20220f["metodoPago"] || "")[_0x2a50bb(0x5c8)](
                      _0x2a50bb(0x560)
                    ) &&
                    !(_0x20220f[_0x2a50bb(0x525)] || "")["includes"](
                      _0x2a50bb(0x52a)
                    )
                )["length"],
              0x0
            ),
          },
          mixed: { total: 0x0, cantidad: 0x0 },
        });
      if (_0x18b937[_0x2a50bb(0x2b6)] === 0x0) {
        _0x112e69[_0x2a50bb(0x37f)] =
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-2\x22>Sin\x20ventas\x20en\x20" +
          _0x33ca8a +
          _0x2a50bb(0x25c);
        return;
      }
      const _0x40c91f = {
        cash: _0x2a50bb(0x28d),
        credit_card: _0x2a50bb(0x2c1),
        debit_card: _0x2a50bb(0x417),
        credit_note_application: _0x2a50bb(0x247),
        transfer: _0x2a50bb(0x544),
        check: _0x2a50bb(0x550),
        credit: "💵\x20Crédito",
        mixed: _0x2a50bb(0x59c),
      };
      let _0x4adee9 = "";
      _0x446a23 &&
        Object[_0x2a50bb(0x50c)](_0x446a23)[_0x2a50bb(0x2bf)]((_0x1c59a7) => {
          const _0x1af2ae = _0x2a50bb,
            _0x5ee34e = _0x446a23[_0x1c59a7];
          _0x5ee34e[_0x1af2ae(0x21f)] > 0x0 &&
            (_0x4adee9 +=
              _0x1af2ae(0x281) +
              _0x5ee34e[_0x1af2ae(0x21f)]["toLocaleString"]("es-MX", {
                minimumFractionDigits: 0x2,
              }) +
              _0x1af2ae(0x3ec) +
              (_0x40c91f[_0x1c59a7] || _0x1c59a7) +
              _0x1af2ae(0x5ac) +
              _0x5ee34e[_0x1af2ae(0x2b7)] +
              _0x1af2ae(0x457));
        });
      let _0x519376 =
        _0x2a50bb(0x229) +
        _0x33ca8a +
        "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-primary\x22>$" +
        _0x4668a7[_0x2a50bb(0x2a0)](_0x2a50bb(0x2d4), {
          minimumFractionDigits: 0x2,
        }) +
        _0x2a50bb(0x448) +
        _0x5541fd +
        _0x2a50bb(0x2ba) +
        _0x254ae8 +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Total\x20Tickets</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x4adee9 ? _0x2a50bb(0x4b6) + _0x4adee9 + _0x2a50bb(0x37e) : "") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20";
      _0x18b937["forEach"]((_0x37c24d, _0x4580f4) => {
        const _0x4750cc = _0x2a50bb,
          _0x44e4e8 = ((_0x37c24d["totalVentas"] / _0x4668a7) * 0x64)[
            _0x4750cc(0x535)
          ](0x1),
          _0x2d8477 = (_0x37c24d[_0x4750cc(0x4eb)] /
            _0x37c24d[_0x4750cc(0x54a)])["toFixed"](0x2);
        _0x519376 +=
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20" +
          (_0x4580f4 === 0x0 ? _0x4750cc(0x2cf) : _0x4750cc(0x29c)) +
          _0x4750cc(0x2e7) +
          (_0x4580f4 === 0x0 ? _0x4750cc(0x4b1) : _0x4750cc(0x56f)) +
          "\x20text-white\x20d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>" +
          (_0x4580f4 === 0x0 ? "🏆" : "👤") +
          "\x20" +
          _0x37c24d[_0x4750cc(0x320)] +
          "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x4580f4 === 0x0 ? _0x4750cc(0x589) : "") +
          _0x4750cc(0x348) +
          _0x37c24d[_0x4750cc(0x4eb)][_0x4750cc(0x2a0)](_0x4750cc(0x2d4), {
            minimumFractionDigits: 0x2,
          }) +
          _0x4750cc(0x1e0) +
          _0x44e4e8 +
          "%\x20del\x20total</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22>" +
          _0x37c24d["cantidadTickets"] +
          _0x4750cc(0x2c6) +
          _0x2d8477 +
          _0x4750cc(0x521) +
          _0x37c24d[_0x4750cc(0x320)] +
          "\x27,\x20" +
          i +
          _0x4750cc(0x3e4) +
          i +
          _0x4750cc(0x506);
      }),
        (_0x519376 += _0x2a50bb(0x216)),
        (_0x112e69[_0x2a50bb(0x37f)] = _0x519376);
    } catch (_0x211445) {
      console[_0x2a50bb(0x585)](_0x2a50bb(0x1e5), _0x211445),
        (_0x112e69["innerHTML"] =
          _0x2a50bb(0x2b8) +
          _0x211445[_0x2a50bb(0x2ee)] +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<br><small\x20class=\x22text-muted\x22>Verifica\x20que\x20el\x20proxy\x20de\x20Vercel\x20esté\x20funcionando</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
    } finally {
      (_0x131b30["textContent"] = _0x2a50bb(0x21e)),
        _0x46fcff[_0x2a50bb(0x490)]["add"](_0x2a50bb(0x25b));
    }
  }
  function mostrarDetalleVendedor(_0x424ed8, _0x5d06c0) {
    const _0x3476cc = _0x5637fc,
      _0x209843 = window[_0x3476cc(0x1f2)] || [],
      _0x3ad428 = _0x209843[_0x5d06c0];
    if (!_0x3ad428 || !_0x3ad428["tickets"]) {
      alert(_0x3476cc(0x2c4));
      return;
    }
    const _0x263ab9 = _0x3ad428[_0x3476cc(0x259)];
    function _0x345ff4(_0x171d12) {
      const _0x26ed8e = _0x3476cc,
        _0x335704 = (_0x171d12 || "")[_0x26ed8e(0x325)]()["trim"]();
      if (_0x335704[_0x26ed8e(0x5c8)](_0x26ed8e(0x23e)) || _0x335704 === "cash")
        return { nombre: _0x26ed8e(0x28d), clase: _0x26ed8e(0x3b9) };
      else {
        if (
          _0x335704[_0x26ed8e(0x5c8)](_0x26ed8e(0x560)) ||
          _0x335704 === "credit_card"
        )
          return {
            nombre: "💳\x20Tarjeta\x20Crédito",
            clase: _0x26ed8e(0x412),
          };
        else {
          if (
            _0x335704[_0x26ed8e(0x5c8)](_0x26ed8e(0x257)) ||
            _0x335704 === "debit_card"
          )
            return { nombre: _0x26ed8e(0x417), clase: _0x26ed8e(0x471) };
          else {
            if (
              _0x335704[_0x26ed8e(0x5c8)](_0x26ed8e(0x360)) ||
              _0x335704 === _0x26ed8e(0x360)
            )
              return { nombre: _0x26ed8e(0x544), clase: _0x26ed8e(0x56f) };
            else {
              if (
                _0x335704[_0x26ed8e(0x5c8)]("credit_note") ||
                _0x335704 === _0x26ed8e(0x4d6)
              )
                return { nombre: "📄\x20Nota\x20Crédito", clase: "bg-warning" };
              else {
                if (
                  _0x335704["includes"]("check") ||
                  _0x335704 === _0x26ed8e(0x577)
                )
                  return { nombre: _0x26ed8e(0x550), clase: "bg-dark" };
                else {
                  if (
                    _0x335704[_0x26ed8e(0x5c8)](_0x26ed8e(0x44a)) &&
                    !_0x335704[_0x26ed8e(0x5c8)](_0x26ed8e(0x2bb))
                  )
                    return { nombre: "💵\x20Crédito", clase: _0x26ed8e(0x25a) };
                  else
                    return _0x335704["includes"](",") ||
                      _0x335704[_0x26ed8e(0x5c8)]("\x20")
                      ? { nombre: _0x26ed8e(0x59c), clase: _0x26ed8e(0x515) }
                      : {
                          nombre: _0x171d12 || _0x26ed8e(0x1fe),
                          clase: "bg-light\x20text-dark",
                        };
                }
              }
            }
          }
        }
      }
    }
    let _0x30c142 = _0x3476cc(0x5b5) + _0x424ed8 + _0x3476cc(0x31c);
    _0x263ab9[_0x3476cc(0x2bf)]((_0x1d5799) => {
      const _0xbeb1e4 = _0x3476cc,
        _0x32f723 = _0x345ff4(_0x1d5799[_0xbeb1e4(0x525)]),
        _0x475744 = new Date(_0x1d5799[_0xbeb1e4(0x4e9)])[_0xbeb1e4(0x374)](
          _0xbeb1e4(0x2d4),
          {
            day: "2-digit",
            month: _0xbeb1e4(0x36f),
            hour: "2-digit",
            minute: "2-digit",
          }
        );
      _0x30c142 +=
        _0xbeb1e4(0x459) +
        _0x1d5799[_0xbeb1e4(0x45c)] +
        _0xbeb1e4(0x56d) +
        _0x475744 +
        _0xbeb1e4(0x450) +
        _0x32f723[_0xbeb1e4(0x2d8)] +
        _0xbeb1e4(0x1f8) +
        _0x32f723["nombre"] +
        _0xbeb1e4(0x49c) +
        (_0x1d5799[_0xbeb1e4(0x5d7)] && _0x1d5799[_0xbeb1e4(0x5d7)] !== "-"
          ? _0xbeb1e4(0x2f7) + _0x1d5799[_0xbeb1e4(0x5d7)] + "</small>"
          : "") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>" +
        _0x1d5799[_0xbeb1e4(0x3cb)] +
        _0xbeb1e4(0x470) +
        parseFloat(_0x1d5799[_0xbeb1e4(0x4b5)])["toLocaleString"](
          _0xbeb1e4(0x2d4),
          { minimumFractionDigits: 0x2 }
        ) +
        _0xbeb1e4(0x34e) +
        _0x475744 +
        _0xbeb1e4(0x32a) +
        _0x32f723[_0xbeb1e4(0x2d8)] +
        _0xbeb1e4(0x38e) +
        _0x32f723["nombre"] +
        _0xbeb1e4(0x30b) +
        (_0x1d5799[_0xbeb1e4(0x5d7)] || "-") +
        _0xbeb1e4(0x5d5);
    });
    const _0x58991c = _0x263ab9[_0x3476cc(0x219)](
      (_0x22591b, _0x1321a4) => _0x22591b + parseFloat(_0x1321a4["importe"]),
      0x0
    );
    _0x30c142 +=
      _0x3476cc(0x4d3) +
      _0x58991c["toLocaleString"](_0x3476cc(0x2d4), {
        minimumFractionDigits: 0x2,
      }) +
      _0x3476cc(0x2f9) +
      ticketsArray["length"] +
      _0x3476cc(0x2a4) +
      ticketsArray[_0x3476cc(0x2b6)] +
      _0x3476cc(0x4a1);
    const _0x4726e9 = document["getElementById"](_0x3476cc(0x5b9));
    if (_0x4726e9) _0x4726e9[_0x3476cc(0x49b)]();
    document[_0x3476cc(0x305)][_0x3476cc(0x42f)](_0x3476cc(0x3fc), _0x30c142);
    const _0x396326 = new bootstrap[_0x3476cc(0x599)](
      document[_0x3476cc(0x4a4)](_0x3476cc(0x5b9))
    );
    _0x396326[_0x3476cc(0x436)](),
      document[_0x3476cc(0x4a4)](_0x3476cc(0x5b9))[_0x3476cc(0x245)](
        _0x3476cc(0x2a7),
        () => {
          const _0x16d6ac = _0x3476cc;
          document["getElementById"](_0x16d6ac(0x5b9))[_0x16d6ac(0x49b)]();
        }
      );
  }
}
function mostrarModalConsultarTicket() {
  const _0x2f4188 = _0x5637fc;
  cerrarCamaraAlAbrirModal(_0x2f4188(0x5da));
  const _0x266927 = document[_0x2f4188(0x4a4)](_0x2f4188(0x4cf));
  if (_0x266927) {
    (document[_0x2f4188(0x4a4)](_0x2f4188(0x552))["value"] = ""),
      (document[_0x2f4188(0x4a4)]("resultadoBusquedaTicket")["innerHTML"] = "");
    const _0x2b70dd = new bootstrap[_0x2f4188(0x599)](_0x266927);
    _0x2b70dd[_0x2f4188(0x436)](),
      _0x266927[_0x2f4188(0x245)](
        _0x2f4188(0x507),
        function () {
          const _0xdc36ca = _0x2f4188;
          document[_0xdc36ca(0x4a4)](_0xdc36ca(0x552))["focus"]();
        },
        { once: !![] }
      );
  }
}
async function buscarTicket() {
  const _0x40d890 = _0x5637fc,
    _0x322d4e = document[_0x40d890(0x4a4)](_0x40d890(0x552))[_0x40d890(0x2f6)][
      "trim"
    ](),
    _0x16bb26 = document["getElementById"](_0x40d890(0x2c9));
  if (!_0x322d4e) {
    _0x16bb26[_0x40d890(0x37f)] = _0x40d890(0x510);
    return;
  }
  _0x16bb26[_0x40d890(0x37f)] = _0x40d890(0x416) + _0x322d4e + _0x40d890(0x3f5);
  try {
    console["log"](_0x40d890(0x51b), _0x322d4e);
    const _0x45da52 = [
      _0x40d890(0x55e) + _0x322d4e,
      _0x40d890(0x3c5) + _0x322d4e,
      _0x40d890(0x3f9) + _0x322d4e,
    ];
    let _0xb385a5 = null,
      _0x173999 = null;
    for (const _0x53e9da of _0x45da52) {
      try {
        console[_0x40d890(0x3dd)](_0x40d890(0x465), _0x53e9da);
        const _0x4e76a4 = await fetch(_0x53e9da);
        if (_0x4e76a4["ok"]) {
          (_0xb385a5 = await _0x4e76a4["json"]()),
            console["log"](_0x40d890(0x270), _0x53e9da);
          break;
        } else {
          const _0x3c2c29 = await _0x4e76a4[_0x40d890(0x422)]();
          console["log"](
            _0x40d890(0x205) + _0x53e9da + ":",
            _0x4e76a4[_0x40d890(0x54f)],
            _0x3c2c29
          ),
            (_0x173999 = new Error(_0x40d890(0x58a) + _0x4e76a4["status"]));
        }
      } catch (_0x8f529b) {
        console["log"](
          _0x40d890(0x327) + _0x53e9da + ":",
          _0x8f529b[_0x40d890(0x2ee)]
        ),
          (_0x173999 = _0x8f529b);
      }
    }
    if (
      !_0xb385a5 ||
      !_0xb385a5[_0x40d890(0x1f9)] ||
      _0xb385a5["orders"][_0x40d890(0x2b6)] === 0x0
    ) {
      _0x16bb26[_0x40d890(0x37f)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Ticket\x20no\x20encontrado</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20No\x20se\x20encontraron\x20datos\x20para\x20el\x20ticket\x20<code>" +
        _0x322d4e +
        _0x40d890(0x25e);
      return;
    }
    const _0x2c3e94 = _0xb385a5["orders"][0x0],
      _0x3dfe9d = _0x2c3e94[_0x40d890(0x3cb)] || {},
      _0x42b23e =
        _0x3dfe9d["cte_Nombre"] ||
        _0x2c3e94[_0x40d890(0x488)] ||
        _0x2c3e94[_0x40d890(0x4dd)] ||
        _0x40d890(0x428),
      _0xa11371 =
        _0x2c3e94[_0x40d890(0x2e9)] ||
        _0x2c3e94[_0x40d890(0x397)] ||
        _0x40d890(0x428),
      _0x57a234 = parseFloat(
        _0x2c3e94["or_totalFinal"] || _0x2c3e94["or_total"] || 0x0
      ),
      _0x42507c = _0x2c3e94[_0x40d890(0x2cb)]
        ? new Date(_0x2c3e94[_0x40d890(0x2cb)])[_0x40d890(0x374)](
            _0x40d890(0x2d4)
          )
        : _0x40d890(0x428);
    _0x16bb26[_0x40d890(0x37f)] =
      _0x40d890(0x4de) +
      _0x322d4e +
      _0x40d890(0x543) +
      _0x57a234[_0x40d890(0x2a0)](_0x40d890(0x2d4), {
        minimumFractionDigits: 0x2,
      }) +
      _0x40d890(0x3d2) +
      _0x42b23e +
      _0x40d890(0x5dd) +
      _0x42507c +
      _0x40d890(0x298) +
      _0xa11371 +
      _0x40d890(0x345) +
      _0x322d4e +
      _0x40d890(0x46b);
  } catch (_0xe6e7ab) {
    console[_0x40d890(0x585)](_0x40d890(0x5c3), _0xe6e7ab),
      (_0x16bb26["innerHTML"] =
        _0x40d890(0x4f3) + _0xe6e7ab["message"] + _0x40d890(0x25d));
  }
}
function verTicketCompleto(_0x17f812) {
  const _0x263b33 = _0x5637fc,
    _0x13d290 = bootstrap[_0x263b33(0x599)][_0x263b33(0x236)](
      document[_0x263b33(0x4a4)](_0x263b33(0x4cf))
    );
  _0x13d290 && _0x13d290[_0x263b33(0x387)](),
    typeof verTicket === _0x263b33(0x4bb)
      ? verTicket(_0x17f812)
      : alert(_0x263b33(0x3d0));
}
document[_0x5637fc(0x245)]("DOMContentLoaded", function () {
  const _0x5d0e94 = _0x5637fc,
    _0xc73e5 = document[_0x5d0e94(0x4a4)](_0x5d0e94(0x552));
  _0xc73e5 &&
    _0xc73e5[_0x5d0e94(0x245)](_0x5d0e94(0x59d), function (_0x46bc93) {
      const _0x114f65 = _0x5d0e94;
      _0x46bc93[_0x114f65(0x52c)] === "Enter" &&
        (_0x46bc93[_0x114f65(0x32e)](), buscarTicket());
    });
}),
  (window[_0x5637fc(0x356)] = mostrarModalConsultarTicket),
  (window[_0x5637fc(0x4c6)] = buscarTicket),
  (window[_0x5637fc(0x446)] = verTicketCompleto);
function _0x4c28() {
  const _0x35fb9e = [
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x22>$",
    "<div\x20class=\x22text-center\x20text-muted\x20py-4\x22><i\x20class=\x22bi\x20bi-search\x22></i><br>Sin\x20resultados\x20para\x20la\x20búsqueda\x20actual</div>",
    "async",
    "details",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Ver\x20Detalle\x20Completo\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "✅\x20Todos\x20los\x20endpoints\x20consultados",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20me-2\x20mb-1\x22\x20style=\x22font-size:0.85rem;\x22>🔥\x20",
    "No\x20se\x20puede\x20generar\x20código\x20de\x20barras:\x20canvas\x20o\x20código\x20faltante",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$",
    "bg-info",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22consultarProductoDesdeModal(\x27",
    "EAN13",
    ".modal-content",
    "UPC_A",
    "location",
    "Hace\x20",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Con\x20códigos\x20adicionales:</strong>\x20",
    "historial",
    "Cargando\x20promociones",
    "code_39_vin_reader",
    "total_price",
    "flex",
    "Generando...",
    "mostrarDetalleProductoBySKU",
    "continuous",
    "🔍\x20Códigos\x20detectados\x20por\x20API\x20nativa:\x20",
    "descripcion",
    "1\x20endpoint\x20completado,\x20finalizando...",
    "iconVista",
    "outcome",
    "\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:0.7rem;\x22>PROMO</span>",
    "onLine",
    "or_nombreCliente",
    "\x20resultado",
    "❌\x20Instalación\x20rechazada",
    "✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente",
    "json",
    "unshift",
    "promociones_ts",
    "📅\x20Productos\x20actualizados\x20hace\x20",
    "classList",
    "indexeddb_local",
    "clear",
    "#btnActualizar",
    "target",
    "Error\x20al\x20copiar:",
    "script",
    ",\x20Diario:\x20",
    "🔄\x20Sin\x20productos:\x20cargando\x20productos...",
    "\x20unidades\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "✅\x20Google\x20Vision\x20detectó:",
    "remove",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🏷️\x20Promociones\x20oficiales\x20filtradas:",
    "resultados_view",
    "placeholder",
    "2\x20endpoints\x20completados,\x20finalizando...",
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "Última\x20actualización:\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "getElementById",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "resultados-busqueda-body",
    "🚫\x20PROBLEMA:\x20Permisos\x20denegados\x20-\x20Vision\x20API\x20no\x20habilitada",
    "ceil",
    "pointerEvents",
    "Conectando\x20con\x20todos\x20los\x20servidores",
    "upc_a",
    "#6c757d",
    "revokeObjectURL",
    "limpiarBusquedaModal",
    "isConfirmed",
    "load",
    "bg-warning",
    "⚡\x20Actualización\x20completada\x20en\x20",
    "\x20|\x20Promociones:\x20",
    "maxWidth",
    "importe",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-top\x20pt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-center\x20mb-3\x22>�\x20Métodos\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "margin",
    "code_93_reader",
    "webkitOverflowScrolling",
    "createElement",
    "function",
    "installing",
    "detect",
    "ultimaActualizacion",
    "drawImage",
    "inputPageJump",
    "autocomplete",
    "\x22\x20formato:\x20",
    "✅\x20Usando\x20cantidad\x20y\x20precio\x20calculado:",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "overflowY",
    "buscarTicket",
    "setItem",
    "\x20usos\x20hoy",
    "flexDirection",
    "keydown",
    "data-form-type",
    "codabar_reader",
    "toString",
    ".modal-backdrop,\x20.modal-backdrop-mobile",
    "consultarTicketModal",
    "Básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "Formato\x20de\x20promociones\x20inválido",
    "\x20con\x20datos\x20disponibles)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>TOTAL</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "📱\x20Dispositivo\x20móvil:",
    "querySelector",
    "credit_note_application",
    "pro_grupoProductos_primaria",
    "❌\x20Cancelar",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "CANTIDAD_X_PRECIO_FIJO",
    "boundingBox",
    "monthlyCount",
    "cte_Nombre",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22alert-heading\x22>✅\x20Ticket\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Ticket:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code>",
    "createObjectStore",
    "large",
    "<span\x20class=\x22badge\x20bg-secondary\x22\x20style=\x22font-size:\x200.7rem;\x22>+",
    "🎯\x20Búsqueda\x20inteligente\x20completada,\x20resultados:",
    "Error\x20verificando\x20promociones:",
    "parentNode",
    "btnReporteTexto",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "busquedaModalKeyHandler",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "fecha",
    "pro_nombrePromo",
    "totalVentas",
    "blur",
    "productosConCodigosAdicionales",
    "\x22\x20style=\x22width:218px;\x20height:124px;\x20object-fit:contain;\x20background:#fff;\x20border-radius:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "<br>•\x20🔍\x20<strong>Códigos\x20detectados:</strong>\x20",
    "\x0a\x20\x20/*\x20Estilos\x20específicos\x20para\x20modal\x20en\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20/*\x20Evitar\x20oscurecimiento\x20de\x20fondo\x20en\x20móviles\x20*/\x0a\x20\x20\x20\x20.modal-backdrop,\x0a\x20\x20\x20\x20.modal-backdrop.show,\x0a\x20\x20\x20\x20.modal-backdrop.fade\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20stretch\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-dialog,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-content,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-body,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20flex:\x201\x20!important;\x0a\x20\x20\x20\x20\x20\x20overflow-y:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-height:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding:\x201rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-header,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-footer,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-footer\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20Asegurar\x20que\x20las\x20tarjetas\x20no\x20causen\x20overflow\x20horizontal\x20*/\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.row\x20{\x0a\x20\x20\x20\x20\x20\x20margin-left:\x20-8px\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin-right:\x20-8px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20[class*=\x22col-\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20padding-left:\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding-right:\x208px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Mejorar\x20scroll\x20en\x20todos\x20los\x20dispositivos\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0,\x200,\x200)\x20!important;\x20/*\x20Forzar\x20aceleración\x20por\x20hardware\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    ".modal-dialog",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h5>🏷️\x20No\x20se\x20encontraron\x20productos\x20con\x20promociones</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-0\x22>Puede\x20ser\x20que\x20no\x20haya\x20promociones\x20activas\x20en\x20este\x20momento\x20o\x20que\x20el\x20servicio\x20no\x20esté\x20disponible.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error\x20de\x20conexión</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20No\x20se\x20pudo\x20conectar\x20con\x20el\x20servidor.<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "Escaneando\x20código...",
    "no-store",
    "detenerScanner",
    "pageSize",
    "productosConCodigos",
    "❌\x20Error\x20específico\x20del\x20backend:",
    "⚠️\x20<strong>Límite\x20diario\x20cerca:</strong>\x20",
    "reason",
    "pr_sku",
    "modalPromocionesGenerales",
    "<img\x20src=\x22",
    "usarCodigosBarras",
    "GET",
    "\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22resultadosBusquedaModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22resultadosBusquedaModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22resultadosBusquedaModalLabel\x22>🔎\x20Resultados\x20de\x20Búsqueda</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22input-group-text\x22><i\x20class=\x22bi\x20bi-search\x22></i></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22busquedaModalInput\x22\x20class=\x22form-control\x22\x20placeholder=\x22Refinar\x20búsqueda...\x22\x20autocomplete=\x22off\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x22\x20type=\x22button\x22\x20id=\x22limpiarBusquedaModal\x22\x20title=\x22Limpiar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-x-lg\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x20text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22resultadosCount\x22>0\x20resultados</span>\x20•\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22tiempoBusqueda\x22>0ms</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22resultados-busqueda-body\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x20d-flex\x20flex-wrap\x20gap-2\x20align-items-center\x20justify-content-between\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22pageSizeSelect\x22\x20class=\x22mb-0\x22>Mostrar:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22pageSizeSelect\x22\x20class=\x22form-select\x20form-select-sm\x22\x20style=\x22width:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22\x20selected>10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2220\x22>20</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2250\x22>50</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-success\x20btn-sm\x20d-flex\x20align-items-center\x20gap-1\x22\x20id=\x22btnToggleVista\x22\x20title=\x22Cambiar\x20vista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-grid-3x3-gap\x22\x20id=\x22iconVista\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22labelVista\x22>Cuadros</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x22\x20id=\x22resultadosInfo\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnPrevResultados\x22>«\x20Anterior</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22pageIndicator\x22\x20class=\x22text-muted\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnNextResultados\x22>Siguiente\x20»</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22inputPageJump\x22\x20class=\x22form-control\x20form-control-sm\x22\x20style=\x22width:90px;\x22\x20min=\x221\x22\x20placeholder=\x22Ir\x20a...\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x20btn-sm\x22\x20id=\x22btnIrPagina\x22>Ir</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>",
    "relative",
    "ean_8_reader",
    "onsuccess",
    "Lista",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Ver\x20Detalle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "shown.bs.modal",
    "<i\x20class=\x22bi\x20bi-clipboard\x22></i>",
    "🌐\x20<strong>Backend:</strong>\x20",
    "❌\x20Error\x20con\x20API\x20nativa,\x20usando\x20fallback:",
    "remainingMonthly",
    "keys",
    "code_93",
    "pageIndicator",
    "reload",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20ingresa\x20un\x20número\x20de\x20ticket.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "codabar",
    "width",
    "🔍\x20Buscando\x20promociones\x20para\x20SKU:",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-center\x20align-items-center\x20gap-3\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-danger\x20precio-responsive\x22>$\x20",
    "bg-gradient",
    "monthlyLimit",
    "detalle",
    "change",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Actualizado:</strong>\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-light\x20text-dark\x20me-1\x20mb-1\x22\x20style=\x22font-size:\x200.7rem;\x22>",
    "🔍\x20Buscando\x20ticket:",
    "❌\x20No\x20hay\x20promociones\x20para\x20SKU:\x20",
    "installBtn",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Leyendo\x20promociones\x20y\x20productos\x20locales...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "upc_e_reader",
    "stop",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>Promedio</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20w-100\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22mostrarDetalleVendedor(\x27",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "showUsageWarning",
    "puntuacion",
    "metodoPago",
    "dailyUsed",
    "fixed",
    "%;\x20transition:\x20width\x200.3s\x20ease;\x22\x20aria-valuenow=\x22",
    "✅\x20Backend\x20activo.\x20Estadísticas:",
    "credit_note",
    "\x20para:\x20",
    "key",
    "sort",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔑\x20API\x20Key\x20inválida\x20-\x20verifica\x20la\x20configuración\x20en\x20Vercel</div>",
    "🎯\x20Mostrando\x20promociones\x20locales...",
    "font",
    "codigo",
    "🔍\x20Validando:\x20\x22",
    "📊\x20Datos\x20extraídos\x20antes\x20de\x20procesamiento:",
    "354JqTVBF",
    "toFixed",
    "❌\x20Error\x20en\x20diagnóstico:",
    "resumenMetodosPago",
    ")\x20-\x20",
    "https://contador-apicloudvision.vercel.app/api/vision-detect",
    "code_128",
    "transparent",
    "Producto\x20desconocido",
    "overflow",
    "code_32_reader",
    "pro_precioPromo",
    "PERMISSION_DENIED",
    "CODE_93",
    "max",
    "</code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Total:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x20text-success\x22>$",
    "🏦\x20Transferencia",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x22>",
    "⚠️\x20Backend\x20responde\x20pero\x20con\x20error:",
    "nombre_promocion",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Error\x20en\x20diagnóstico:\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22>Total\x20con\x20Promo</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "cantidadTickets",
    "fillStyle",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "#000000",
    "btnReporteSpinner",
    "status",
    "📋\x20Cheque",
    "Generando\x20código\x20de\x20barras\x20",
    "numeroTicket",
    "warn",
    "https://reporte-ventas-b9.vercel.app/api/ventas?mes=",
    "block",
    "aztec",
    "qty",
    "#btnTexto",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20",
    "pr_imagen",
    "Nunca",
    "\x20-\x20",
    "diagnostico-resultado",
    "https://ticket-b9.vercel.app/api/ticket?ticketId=",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "credit_card",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "✅\x20FileInput\x20configurado\x20para\x20GitHub\x20Pages",
    "✅\x20Google\x20Vision\x20API\x20usada\x20exitosamente\x20-\x20contador\x20local\x20actualizado",
    "AZTEC",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "\x0a\x20\x20\x20\x20\x20\x20",
    "split",
    "googleVisionConfig",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x20ms-2\x22>1\x20unidad</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22><strong>SKU:</strong>\x20",
    "🏷️\x20",
    "\x20segundos",
    "\x20días\x20desde\x20productos\x20y\x20",
    "</code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>",
    "getRegistrations",
    "bg-secondary",
    "upc_reader",
    "filtrado",
    "Escape",
    "#ultimaActualizacion",
    "es_oficial",
    "upc_e",
    "Consultando\x20los\x203\x20endpoints...",
    "check",
    "<div\x20class=\x22text-center\x20text-muted\x20small\x22>…\x20y\x20",
    "promocionesGeneralesModal",
    "📋\x20Configuración\x20final\x20para\x20códigos\x20largos...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Vista:\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22>❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API</div>",
    "Failed\x20to\x20fetch",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Área\x20para\x20mostrar\x20resultados\x20del\x20diagnóstico\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22diagnostico-resultado\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Detección\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20📷\x20<strong>Local:</strong>\x20Html5QrCode\x20+\x20BarcodeDetector\x20+\x20Quagga.js<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🌐\x20<strong>Premium:</strong>\x20Google\x20Vision\x20API\x20(para\x20códigos\x20difíciles)<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🔄\x20<strong>Automático:</strong>\x20Fallback\x20inteligente\x20entre\x20métodos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>✅\x20Ventajas\x20del\x20backend:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Sin\x20límites\x20por\x20dispositivo<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Detección\x20superior\x20en\x20superficies\x20reflectivas<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Mejor\x20precisión\x20con\x20códigos\x20largos<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Funciona\x20con\x20imágenes\x20de\x20baja\x20calidad<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Gestión\x20centralizada\x20de\x20recursos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🔄\x20Fallback\x20automático:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Si\x20el\x20backend\x20no\x20está\x20disponible,\x20la\x20app\x20usará\x20detección\x20local\x20automáticamente.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Recomendación:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mantén\x20activada\x20la\x20detección\x20avanzada\x20para\x20mejores\x20resultados.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "❌\x20Error\x20deteniendo\x20scanner:",
    "input",
    "CODE_39",
    "getUsageStatus",
    "data",
    "error",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-success\x22>🏷️\x20Productos\x20con\x20Promociones</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20text-white\x22>",
    "ayuda",
    "nearest",
    "<span\x20class=\x22badge\x20bg-light\x20text-dark\x22>TOP</span>",
    "Error\x20HTTP:\x20",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-start\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-dark\x22\x20style=\x22font-size:\x201rem;\x22>",
    "Error\x20en\x20el\x20servidor\x20proxy",
    "es-CL",
    "border-bottom\x20pb-3",
    ";\x20path=/",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-8\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20nombre-producto-responsive\x22\x20style=\x22color:#616161;\x22>",
    "sugerenciasDiv",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "transaction",
    "borderRadius",
    "❌\x20Backend\x20no\x20disponible:",
    "🎨\x20Re-renderizando\x20resultados...",
    "\x20al\x20",
    "21qdnoGg",
    "Modal",
    "💡\x20Verifica\x20la\x20configuración\x20de\x20GOOGLE_VISION_API_KEY\x20en\x20Vercel",
    "checked",
    "🔄\x20Combinado",
    "keypress",
    "❌\x20Código\x20no\x20encontrado:\x20\x22",
    "💡\x20Verifica\x20que\x20el\x20proyecto\x20#1070150612422\x20tenga\x20facturación\x20activa",
    "#198754",
    ".modal-body",
    "🔍\x20Actualizando\x20promociones\x20en\x20vista:",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Precio:\x20$",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Backend:\x20https://contador-apicloudvision.vercel.app/</small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-info\x20btn-sm\x22\x20onclick=\x22diagnosticarBackend()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Probar\x20Conexión\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "precio",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "all",
    "PROMO",
    "ean_13",
    "</small>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>(",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "📁\x20Iniciando\x20procesamiento\x20de\x20archivo:",
    "data_matrix",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "verificadorB9DB",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22row\x22>",
    "❌\x20Google\x20Vision\x20no\x20detectó\x20texto",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22detalleVendedorModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>📋\x20Detalle:\x20",
    "backend_mejorado",
    "✅\x20Los\x203\x20endpoints\x20consultados",
    "grid",
    "detalleVendedorModal",
    "🔧\x20Problema\x20de\x20CORS\x20detectado\x20-\x20necesita\x20configuración\x20en\x20backend",
    "\x20más\x20con\x20promociones.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Error\x20al\x20procesar\x20la\x20imagen</div>",
    "responses",
    "\x22\x20alt=\x22",
    "diagnostic",
    "putImageData",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Unidades</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x20d-block\x22\x20style=\x22font-size:\x201.3rem;\x22>$",
    "column",
    "❌\x20Error\x20al\x20buscar\x20ticket:",
    "controller",
    "Actualizando...",
    "mesReporte",
    "No\x20se\x20pudieron\x20cargar\x20productos\x20de\x20ningún\x20endpoint",
    "includes",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x20",
    "objectStore",
    "🔄\x20Backend\x20no\x20disponible,\x20usando\x20detección\x20local",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-success\x20fw-bold\x22>$",
    "ITF",
    "removeAttribute",
    "?stats=true",
    "Backend\x20error",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🏦\x20Problema\x20de\x20Facturación</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20facturación\x20no\x20está\x20habilitada\x20en\x20el\x20proyecto\x20correcto\x20(#1070150612422)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/billing\x22\x20target=\x22_blank\x22>Ve\x20a\x20Google\x20Cloud\x20Billing</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "reporteVentasModal",
    "📊\x20Resumen\x20endpoints\x20productos:",
    "\x0a\x20\x20",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20",
    "💾\x20Guardar",
    "banco",
    "off",
    "clipboard",
    "modalConsultarTicket",
    "toDateString",
    "recordUsage",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Fecha:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "EAN_13",
    "alert-warning",
    "then",
    "busquedaModalInputHandler",
    "✅\x20Códigos\x20válidos:\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>",
    "busquedaModalInput",
    "stringify",
    "autocorrect",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "❌\x20Error\x20al\x20generar\x20reporte\x20de\x20ventas:",
    "\x22\x20class=\x22barcode-canvas\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-bold\x20text-dark\x22>",
    "DOMContentLoaded",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "Actualizar",
    "usage",
    "onerror",
    "auto",
    "find",
    "🔄\x20Tercera\x20tentativa:\x20imagen\x20original\x20sin\x20procesamiento...",
    "position",
    "POST",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "ultimosVendedores",
    "Código\x20no\x20válido",
    "?t=",
    "opacity",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "true",
    "\x20d-lg-none\x22\x20style=\x22font-size:\x200.65rem;\x22>",
    "orders",
    "resultadosBusquedaModal",
    "postMessage",
    "loading",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x20result-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22result-card-img\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Sin\x20especificar",
    "⌨️\x20Escape\x20presionado,\x20limpiando\x20búsqueda",
    "929436exgmqH",
    "<small\x20class=\x22text-muted\x20d-block\x22><strong>Código:</strong>\x20",
    "CORS_ERROR",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Endpoint\x20/api/stats\x20falló:\x20",
    "pop",
    "❌\x20Error\x20en\x20",
    "validFrom",
    "⚠️\x20API\x20nativa\x20no\x20detectó\x20códigos\x20válidos",
    "<small\x20class=\x22text-muted\x20mt-1\x20d-block\x22>",
    "pro_mensaje",
    "imageSmoothingEnabled",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
    "bi\x20bi-list",
    "map",
    "valor_total",
    "✅\x20Código\x20válido\x20seleccionado:\x20",
    "tiempoBusqueda",
    "productos",
    "\x20productos\x20(",
    "createObjectURL",
    "userChoice",
    "oncomplete",
    "</div>",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22row\x20align-items-center\x20justify-content-center\x20g-0\x20mb-4\x22\x20style=\x22padding:\x200px\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "items",
    "reduce",
    "1425AvNsUh",
    "totalProductos",
    "environment",
    "\x20(redondeado)",
    "Generar\x20Reporte",
    "total",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20row-cols-2\x20row-cols-md-3\x20row-cols-lg-4\x20g-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "💡\x20Ve\x20a:\x20https://console.cloud.google.com/apis/library/vision.googleapis.com",
    "🔄\x20Consultando\x20endpoint\x20de\x20promociones...",
    "pr_precio",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "pro_tipoPromo",
    "BILLING_DISABLED",
    "\x0a\x20\x20\x20\x20</div>",
    "scope",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Resumen\x20del\x20Mes:\x20",
    "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto",
    "📋\x20Promociones\x20(locales):",
    "absolute",
    "🎯\x20PROMOCIÓN\x20ENCONTRADA\x20para\x20SKU\x20",
    "removeEventListener",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x20text-muted\x20small\x22>",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "stopPropagation",
    "❌\x20No\x20se\x20encontraron\x20códigos\x20válidos\x20en\x20el\x20texto",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "\x20promociones\x20(",
    "📝\x20Texto\x20completo\x20detectado:",
    "getInstance",
    "fuente",
    "validTo",
    "⚠️\x20Límite\x20local\x20alcanzado.\x20Mensual:\x20",
    "cookie",
    "state",
    "getMonth",
    "Combo\x20Especial",
    "cash",
    "consultarProductoDesdeHistorial",
    "12px\x20Arial",
    "<br><br>📊\x20<strong>Uso\x20local:</strong>\x20",
    "parse",
    "<small\x20class=\x22text-success\x22><strong>Precio\x20unitario:</strong>\x20$",
    "pr_name",
    "addEventListener",
    "SCAN_TYPE_CAMERA",
    "📄\x20Nota\x20Crédito",
    "⚠️\x20Solo\x20cantidad\x20extraída:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "3065256Nlnnjk",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x20mt-2\x22\x20style=\x22font-size:0.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Códigos\x20disponibles:</strong>\x20",
    "toDataURL",
    "objectStoreNames",
    "\x20/\x20",
    "writeText",
    "<div\x20class=\x22col\x22>",
    "\x22\x20style=\x22width:40px;\x20height:40px;\x20object-fit:cover;\x20border-radius:4px;\x20margin-right:12px;\x20background:#f8f9fa;\x22>",
    "⚠️\x20Usando\x20solo\x20detección\x20local",
    "⚠️\x20BarcodeDetector\x20no\x20disponible\x20en\x20este\x20navegador",
    "\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "floor",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "debit_card",
    "Productos:\x20",
    "tickets",
    "bg-danger",
    "d-none",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20encontraron\x20ventas\x20para\x20el\x20mes\x20seleccionado.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "</code>.<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Verifica\x20que\x20el\x20número\x20esté\x20escrito\x20correctamente.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>\x20\x20Total\x20SKUs:</strong>\x20",
    "data-sku",
    "success",
    ".copiar-sku-btn",
    "\x20diario<br>🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "detalles",
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20/*\x20Imagen\x20fija\x20para\x20tarjetas\x20de\x20resultados\x20(grid)\x20*/\x0a\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20border-top-left-radius:\x200.375rem;\x0a\x20\x20\x20\x20border-top-right-radius:\x200.375rem;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20}\x0a\x20\x20.result-card-img\x20img\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20}\x0a\x20\x20/*\x20El\x20espaciado\x20del\x20grid\x20lo\x20maneja\x20Bootstrap\x20g-3;\x20sin\x20margen\x20extra\x20en\x20la\x20card\x20para\x20evitar\x20desalineación\x20*/\x0a\x20\x20.result-card\x20{\x20margin:\x200;\x20}\x0a\x20\x20.promo-badge\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x206px;\x0a\x20\x20\x20\x20left:\x206px;\x0a\x20\x20\x20\x20font-size:\x200.7rem;\x0a\x20\x20}\x0a\x20\x20@media\x20(max-width:\x20576px)\x20{\x0a\x20\x20\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20\x20\x20height:\x20100px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20nombre\x20del\x20producto\x20*/\x0a\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x201.4rem;\x0a\x20\x20\x20\x20line-height:\x201.3;\x0a\x20\x20\x20\x20margin-bottom:\x200.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.1rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20precios\x20*/\x0a\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x203.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x202.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20para\x20código\x20de\x20barras\x20funcional\x20*/\x0a\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20max-width:\x20100%;\x0a\x20\x20\x20\x20height:\x20auto;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20background:\x20#ffffff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x202rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x201.5rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20160px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Modal\x20de\x20resultados\x20al\x2080%\x20en\x20desktop\x20*/\x0a\x20\x20@media\x20(min-width:\x20992px)\x20{\x0a\x20\x20\x20\x20#resultadosBusquedaModal\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    "activeElement",
    "\x20->\x20",
    "#mensajeActualizacion",
    "❌\x20renderResultadosBusqueda\x20no\x20está\x20disponible",
    "center",
    "promociones",
    "description",
    "🎯\x20Consultando\x20promociones\x20generales...",
    "appendChild",
    "✅\x20Datos\x20del\x20ticket\x20recibidos\x20de:",
    "onupgradeneeded",
    "Error\x20inicial\x20cargando\x20productos:",
    "start",
    "focus",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>❌\x20",
    "<br>",
    "onchange",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-box-seam\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x20mb-0\x22>Productos\x20no\x20disponibles</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "No\x20se\x20encontró\x20ninguna\x20cámara\x20en\x20tu\x20dispositivo.",
    "replace",
    "files",
    "https://verificadorb9-backend.vercel.app/api/productos",
    "controllerchange",
    "muted",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-4\x20col-lg-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22>$",
    "\x20promocion(es)\x20encontrada(s)\x20para\x20SKU:\x20",
    "\x20días\x20desde\x20promociones",
    "maxHeight",
    "\x20\x20\x20Posibles\x20causas:",
    "Verifique\x20su\x20conexión\x20a\x20internet",
    "data-copiar",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Códigos\x20totales:</strong>\x20",
    "add",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "labelVista",
    "🔍\x20Código\x20candidato\x20encontrado:\x20",
    "💰\x20Efectivo",
    "list-group\x20position-absolute\x20w-100",
    "statusText",
    "estadisticas",
    "\x20encontrados</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong></small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "startsWith",
    "codigos_barras",
    "installed",
    "enabled",
    "query",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-check\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22form-check-input\x22\x20type=\x22checkbox\x22\x20id=\x22enabledCheck\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Vendedor:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "decodeSingle",
    "),\x20",
    "readonly",
    "border-secondary",
    "prompt",
    "EAN_8",
    "\x20\x20\x20•\x20Problema\x20en\x20el\x20código\x20de\x20la\x20función\x20serverless",
    "toLocaleString",
    "CORS_ERROR:\x20Backend\x20no\x20accesible\x20desde\x20este\x20dominio",
    "modalResultadosBusqueda",
    "<i\x20class=\x22bi\x20bi-clipboard-check\x22></i>",
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22\x20colspan=\x222\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-md-none\x22>",
    "fill",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "hidden.bs.modal",
    "🧪\x20Respuesta\x20completa\x20vision-detect:",
    "btnNextResultados",
    "http",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "pro_cantidad_base",
    "Nueva\x20versión\x20disponible.\x20¿Recargar\x20la\x20página?",
    "\x22\x20class=\x22card-img-top\x22\x20alt=\x22",
    "touch",
    "disabled",
    "Formato:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20locales\x20cargadas.\x20Pulsa\x20“Actualizar”\x20para\x20sincronizar.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "readwrite",
    "contains",
    "✅\x20Instalación\x20aceptada",
    "length",
    "cantidad",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error\x20al\x20generar\x20el\x20reporte:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "left",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Vendedores</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-info\x22>",
    "card",
    "\x0a\x20\x20\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20width:\x201px\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x201px\x20!important;\x0a\x20\x20\x20\x20\x20\x20overflow:\x20hidden\x20!important;\x0a\x20\x20\x20\x20\x20\x20pointer-events:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20left:\x20-9999px\x20!important;\x0a\x20\x20\x20\x20\x20\x20top:\x20-9999px\x20!important;\x0a\x20\x20\x20\x20\x20\x20z-index:\x20-1\x20!important;\x0a\x20\x20\x20\x20",
    "🔄\x20Nueva\x20versión\x20del\x20Service\x20Worker\x20disponible",
    "top",
    "forEach",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>🏷️\x20Sistema\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Productos:</strong>\x20",
    "💳\x20Tarjeta\x20Crédito",
    "para\x20\x22",
    "promociones\x20✅",
    "No\x20se\x20encontraron\x20datos\x20del\x20vendedor",
    "canUseAPI",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>Tickets</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22>$",
    "modal-open",
    "\x22\x20style=\x22width:60px;height:60px;object-fit:contain;border-radius:8px;background:#f8f9fa;\x22\x20onerror=\x22this.style.display=\x27none\x27\x22></div>",
    "resultadoBusquedaTicket",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-check-label\x22\x20for=\x22enabledCheck\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Activar\x20detección\x20avanzada\x20(Backend)</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Usa\x20servidor\x20dedicado\x20para\x20mejor\x20detección\x20de\x20códigos\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20",
    "or_fecha",
    "Procesando\x20productos",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22promociones-container\x22\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>🔍\x20Verificando\x20promociones...</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "bg-success\x20text-white",
    "border-warning",
    "📡\x20Consultando\x20TODOS\x20los\x20endpoints\x20de\x20productos...",
    "pdf417",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22height:\x2080px;\x20object-fit:\x20contain;\x20padding:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$",
    "es-MX",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers</div>",
    "📱\x20Abriendo\x20modal\x20en\x20dispositivo\x20móvil...",
    "🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers",
    "clase",
    "EAN8",
    "allSettled",
    "findIndex",
    "\x20=\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20",
    "<div\x20class=\x22me-3\x22\x20style=\x22min-width:60px;\x22><img\x20src=\x22",
    "La\x20cámara\x20está\x20siendo\x20usada\x20por\x20otra\x20aplicación.",
    "fire",
    "❌\x20Todas\x20las\x20configuraciones\x20fallaron",
    "none",
    "src",
    "storageKey",
    "❌\x20Error\x20cargando\x20configuración:",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🌐\x20Google\x20Vision\x20API:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20",
    "splice",
    "vendedorNombre",
    "100%",
    "🔧\x20Error\x20500\x20detectado\x20-\x20Analizando\x20causa\x20específica:",
    "🧪\x20Probando\x20vision-detect\x20con\x20imagen\x20de\x20prueba...",
    "productos_ts",
    "message",
    "innerWidth",
    "display",
    "Productos:\x20nunca\x20|\x20Promociones:\x20",
    "border",
    "removeChild",
    "code_39",
    "btnIrPagina",
    "value",
    "<small\x20class=\x22text-muted\x20d-block\x20d-lg-none\x22>",
    "\x20días",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20colspan=\x221\x22>",
    "❌\x20Elementos\x20requeridos\x20no\x20encontrados",
    "textContent",
    "resultado",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "Página\x20",
    "pageSizeSelect",
    "Timeout",
    "#ffffff",
    "\x20más</span>",
    "2QzDpXO",
    "fillRect",
    "body",
    "Error\x20cargando\x20promociones:",
    "Cuadros",
    "Error\x20consultando\x20producto\x20desde\x20modal:",
    "códigos\x20de\x20barras\x20✅",
    "No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara",
    "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><small\x20class=\x22text-muted\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>CONTADO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20mx-2\x22\x20style=\x22font-size:1.5rem;\x22>|</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x20precio-responsive\x22>$\x20",
    "shift",
    "idPromo",
    "OverconstrainedError",
    "createImageData",
    "code_128_reader",
    "\x20de\x20\x22",
    "Sin\x20conexión\x20a\x20internet",
    "skus",
    "round",
    "📱\x20Cerrando\x20cámara\x20automáticamente\x20al\x20abrir\x20",
    "Nunca\x20actualizado",
    "statechange",
    "BarcodeDetector",
    "zIndex",
    "\x27);\x20})()\x22>Ver</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>",
    "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2060vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ticket</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Cliente</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Importe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22>Fecha</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Método</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Banco</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20",
    "200px",
    "Error\x20consultando\x20producto\x20desde\x20historial:",
    "básico\x20❌\x20(error)",
    "nombre",
    "Enter",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-light\x20rounded\x22\x20style=\x22min-width:\x2060px;\x20height:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-image\x20text-muted\x22\x20style=\x22font-size:\x201.5rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "video",
    "toUTCString",
    "toLowerCase",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
    "❌\x20Error\x20de\x20conexión\x20en\x20",
    "📸\x20Procesando\x20con\x20Quagga...",
    "🔍\x20Iniciando\x20diagnóstico\x20del\x20backend...",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><span\x20class=\x22badge\x20",
    "🚀\x20Intentando\x20con\x20Google\x20Vision\x20API...",
    "🔍\x20Input\x20cambió\x20a:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "preventDefault",
    "view",
    "\x20→\x20",
    "dailyCount",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-decoration-line-through\x20text-muted\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>$",
    "head",
    "\x20longitud:\x20",
    "warningThreshold",
    "⚠️\x20Algunas\x20configuraciones\x20no\x20pudieron\x20aplicarse:",
    "✅\x20Productos\x20cargados\x20con\x20códigos\x20de\x20barras:",
    ".modal-backdrop",
    "backgroundColor",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>MSI</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Código\x20de\x20barras\x20funcional\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22barcode-",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "pr_gtin",
    "Error\x20al\x20cargar\x20promociones:",
    "inserta\x20sku\x20o\x20busca\x20un\x20producto",
    "🔄\x20Consultando\x20endpoint\x20básico...",
    "<div\x20class=\x22alert\x20alert-info\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Mostrando\x20los\x20primeros\x2020\x20productos.\x20Hay\x20",
    "style",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20mb-0\x22>🏷️\x20",
    "💡\x20El\x20contador\x20del\x20backend\x20se\x20actualiza\x20automáticamente\x20en\x20el\x20servidor",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20w-100\x22\x20onclick=\x22verTicketCompleto(\x27",
    "onclick",
    "false",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h5\x20text-success\x22>$",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22\x20style=\x22font-size:\x200.9rem;\x20line-height:\x201.2;\x22>",
    "modal",
    "\x20producto",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20más</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-md-table-cell\x22><small>",
    "NOMBRE",
    "🔥\x20",
    "✅\x20Detección\x20avanzada\x20activada",
    "FECHA_ESCANEO",
    "precioTotal",
    "❌\x20Error\x20guardando\x20promociones\x20en\x20IndexedDB:",
    "ean_reader",
    "mostrarModalConsultarTicket",
    "⚠️\x20<strong>Límite\x20cerca:</strong>\x20",
    "promoción\x20oficial",
    "Descargando\x20desde\x20múltiples\x20endpoints...",
    "⚠️\x20Error\x20con\x20endpoint\x20de\x20códigos\x20de\x20barras:",
    "onload",
    "reader",
    "QR_CODE",
    "format",
    "🔧\x20Error\x20500:\x20Problema\x20con\x20Google\x20Vision\x20API",
    "transfer",
    "\x20\x20\x20💡\x20Ejecuta\x20diagnosticarBackend()\x20para\x20más\x20detalles",
    "smooth",
    "now",
    "Promoción\x20especial",
    "match",
    "🎯\x20Producto\x20encontrado\x20con\x20códigos\x20múltiples:",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "\x22\x20role=\x22progressbar\x22\x20style=\x22width:\x20",
    "Promoción\x20",
    "autoplay",
    "⚠️\x20Error\x20con\x20endpoint\x20básico:",
    "d-flex\x20flex-column\x20align-items-center\x20mb-3",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20ms-2\x22\x20style=\x22font-size:0.7rem;\x22>🏷️\x20PROMO</span>",
    "x-large",
    "2-digit",
    "CODE128",
    "busquedaModalClearHandler",
    "1000",
    "\x20de\x20",
    "toLocaleDateString",
    "accepted",
    "📊\x20Status\x20HTTP:",
    "playsinline",
    "📊\x20Respuesta\x20del\x20backend:",
    "Productos\x20básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "btnToggleVista",
    "getFullYear",
    "https://media.megaservicio.net",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "innerHTML",
    "códigos\x20de\x20barras\x20❌\x20(HTTP\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📋\x20Descripción\x20completa\x20de\x20productos:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-3\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "mensaje",
    "📱\x20Cerrando\x20modal\x20móvil...",
    "agresiva",
    "mostrarModalPromocionesGenerales",
    "some",
    "hide",
    "code",
    "push",
    "querySelectorAll",
    "nunca",
    "srcObject",
    "barcode-",
    "\x20small\x22>",
    "fulfilled",
    "get",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Cantidad</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</strong>\x20resultado",
    "i2of5_reader",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-img-top\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-secondary\x22\x20style=\x22height:\x2080px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-white\x22>📦</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔄\x20Iniciando\x20detección\x20con\x20Quagga...",
    "✅\x20Código\x20detectado\x20(configuración\x20agresiva):",
    "or_nombreVendedor",
    "🆕\x20Nueva\x20versión\x20lista\x20para\x20usar",
    "CODABAR",
    "códigos\x20de\x20barras\x20❌\x20(timeout/error)",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20descripción\x22\x20data-copiar=\x22",
    "renderResultadosBusqueda",
    "ℹ️\x20Promos\x20locales\x20disponibles:",
    "🔄\x20Probando\x20configuración\x20alternativa...",
    "getAttribute",
    "PRECIO",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>",
    "canvas",
    "Error\x20obteniendo\x20promociones:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x20p-3\x20bg-light\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>",
    "promociones-container",
    "🔧\x20Sugerencia:\x20Verificar\x20configuración\x20CORS\x20en\x20el\x20backend\x20para\x20/api/productos-con-codigos",
    "Google\x20Vision\x20API\x20activa\x20y\x20funcional",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "❌\x20Error\x20cargando\x20promociones:",
    "Consultando\x203\x20endpoints...",
    "<span\x20class=\x22badge\x20",
    "UPC",
    "totalCodigos",
    "\x20(quedan\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-muted\x22>-</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Sin\x20datos</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x20bg-transparent\x20border-0\x20pt-0\x20pb-2\x20text-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-primary\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27",
    "CORS",
    "❌\x20Error\x20iniciando\x20scanner:",
    "https://verificadorb9-backend.vercel.app/api/productos-con-codigos",
    "💡\x20Ve\x20a:\x20https://console.developers.google.com/billing/enable?project=1070150612422",
    "🏦\x20Error\x20de\x20facturación:\x20Habilita\x20billing\x20en\x20Google\x20Cloud",
    "monthlyUsed",
    "🔄\x20Sin\x20query,\x20mostrando\x20todos\x20los\x20resultados",
    "\x20\x20\x20•\x20API\x20Key\x20inválida\x20o\x20límites\x20excedidos",
    "bg-success",
    "\x20promociones",
    "Algunos\x20endpoints\x20fallaron\x20(",
    "🔄\x20Actualización\x20automática:\x20han\x20pasado\x20",
    "🔄\x20Probando\x20con\x20imagen\x20original...",
    "⚡\x20Iniciando\x20actualización\x20automática\x20por\x20tiempo\x20transcurrido...",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>❌\x20Error\x20al\x20cargar\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "pro_precio_total",
    "originalQuery",
    "qr_code",
    "button",
    "JsBarcode",
    "https://ticket-b9.vercel.app/api/proxy?ticketId=",
    "📊\x20<strong>Uso\x20local\x20de\x20este\x20dispositivo:</strong><br>",
    "applyConstraints",
    "userAgent",
    "className",
    "500",
    "cliente",
    "getItem",
    "Permiso\x20de\x20cámara\x20denegado.\x20Por\x20favor,\x20permite\x20el\x20acceso\x20a\x20la\x20cámara\x20en\x20tu\x20navegador.",
    "btnPrevResultados",
    "result",
    "La\x20función\x20de\x20visualización\x20de\x20tickets\x20no\x20está\x20disponible.",
    "\x20horas",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Cliente:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Backend\x20con\x20error:\x20",
    "./service-worker.js",
    "✅\x20Configuración\x20guardada",
    ".alert-danger",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📦\x20Productos\x20en\x20promoción:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "toISOString",
    "❌\x20Error\x20con\x20Google\x20Vision,\x20usando\x20fallback:",
    "type",
    "matchAll",
    "abs",
    "log",
    "history",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20selecciona\x20un\x20mes\x20para\x20generar\x20el\x20reporte.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "1336464YmHiKw",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20promo-badge\x22>🏷️\x20PROMO</span>",
    "setAttribute",
    "image/png",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22btn-vendedor-",
    "1067506OmsKTt",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "right",
    "tipo",
    "🔧\x20Error\x20500:\x20Problema\x20interno\x20del\x20servidor",
    "precio_total",
    "📦\x20Items\x20originales\x20disponibles:",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>",
    "principal",
    "cerrarResultadosModal",
    "count",
    "itf",
    "image/jpeg",
    "codeResult",
    "saveUsage",
    "application/json",
    "...</p>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "rejected",
    "list",
    "PDF_417",
    "https://ticket-b9.vercel.app/api?ticketId=",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🎉\x20¡Google\x20Vision\x20API\x20Activa!</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>✅\x20La\x20detección\x20premium\x20está\x20funcionando\x20correctamente</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Fallback\x20automático:\x20Local\x20→\x20Google\x20Vision</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "btn-outline-primary",
    "beforeend",
    "API_KEY_INVALID",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20d-flex\x20align-items-center\x20gap-2\x22>",
    "precio\x20especial",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "promociones:",
    "alternativa",
    "min",
    "resultadosInfo",
    "</span>",
    "•\x20Diario:\x20",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "btn-success",
    "click",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20Error\x20verificando\x20estado",
    "autocapitalize",
    "loadUsage",
    "resultadosCount",
    "✅\x20Datos\x20locales\x20encontrados:\x20productos:",
    "height",
    "trim",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "bg-primary",
    "CODIGO",
    "📸\x20Preparando\x20imagen\x20para\x20Google\x20Vision...",
    "📷\x20Iniciando\x20scanner\x20de\x20códigos\x20de\x20barras...",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Buscando...</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Buscando\x20ticket\x20",
    "💳\x20Tarjeta\x20Débito",
    "🔄\x20Consultando\x20endpoint\x20con\x20códigos\x20de\x20barras...",
    ".copiar-btn",
    "has",
    "requestSubmit",
    "dailyLimit",
    "lastUsedDate",
    "10fxyCtr",
    "⚙️\x20Configuración\x20de\x20detección\x20avanzada",
    "✅\x20Service\x20Worker\x20registrado:",
    "\x0a\x20\x20<div\x20class=\x22d-flex\x20gap-2\x20mb-4\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnPromociones\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#28a745;\x20background:#d4edda;\x20color:#155724;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🏷️\x20Ver\x20Promociones\x0a\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnReporteVentas\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#007bff;\x20background:#e7f3ff;\x20color:#004085;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x22\x20onclick=\x22mostrarModalReporteVentas()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20📊\x20Reporte\x20Ventas\x0a\x20\x20\x20\x20</button>\x0a\x20\x20</div>\x0a\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20w-100\x20mb-2\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20flex-column\x20flex-md-row\x20align-items-md-end\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20<h5\x20class=\x22ant-typography\x20css-1r8qqf1\x20mb-0\x22>Productos</h5>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22ultimaActualizacion\x22\x20class=\x22ant-typography\x20css-1r8qqf1\x20ms-md-4\x22\x20style=\x22font-size:1rem;\x22>Última\x20actualización:\x20nunca\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnActualizar\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#d9d9d9;\x20background:#fff;\x20color:#222;\x20font-size:1rem;\x20padding:2px\x2016px;\x20margin-left:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnTexto\x22>Actualizar</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20id=\x22mensajeActualizacion\x22\x20class=\x22text-center\x22\x20style=\x22min-height:\x201.5rem;\x22></div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20promociones\x20generales\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22promocionesGeneralesModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22promocionesGeneralesModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22promocionesGeneralesModalLabel\x22>🏷️\x20Todas\x20las\x20Promociones\x20Disponibles</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22promociones-generales-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones...</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20me-auto\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20reporte\x20de\x20ventas\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22reporteVentasModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22reporteVentasModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22reporteVentasModalLabel\x22>📊\x20Reporte\x20de\x20Ventas</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22cerrarModalReporteVentas()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22reporte-ventas-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22mesReporte\x22\x20class=\x22form-label\x22>Seleccionar\x20Mes:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22month\x22\x20id=\x22mesReporte\x22\x20class=\x22form-control\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x20d-flex\x20align-items-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-primary\x22\x20onclick=\x22generarReporteVentas()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnReporteTexto\x22>Generar\x20Reporte</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnReporteSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22reporte-contenido\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-bar-chart\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Selecciona\x20un\x20mes\x20y\x20genera\x20el\x20reporte\x20para\x20ver\x20las\x20ventas\x20por\x20vendedor.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22cerrarModalReporteVentas()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "text",
    "update",
    "https://verificadorb9-backend.vercel.app/api/promociones",
    "La\x20cámara\x20no\x20soporta\x20las\x20configuraciones\x20requeridas.",
    "3lytxNe",
    "serviceWorker",
    "N/A",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-4\x20d-flex\x20justify-content-center\x20mb-3\x20mb-lg-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fff;\x20border-radius:16px;\x20box-shadow:0\x204px\x2024px\x20rgba(0,0,0,0.15);\x20padding:16px;\x20display:flex;\x20justify-content:center;\x20align-items:center;\x20width:240px;\x20height:140px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "visionData",
    "\x20usos\x20mensuales",
    "filter",
    "✅\x20Endpoint\x20básico\x20consultado:",
    "textAlign",
    "insertAdjacentHTML",
    "submit",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x22\x20style=\x22cursor:pointer;\x22\x20onclick=\x22mostrarProductoPromocion(\x27",
    "SKU\x20desconocido",
    "\x20mensual,\x20",
    "page",
    "getContext",
    "show",
    "textAnnotations",
    "insertBefore",
    "⚠️\x20Scanner\x20ya\x20está\x20activo",
    "\x20minutos",
    "%</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x22\x20style=\x22height:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-",
    "resetMonthlyUsage",
    "primary",
    "\x20\x20\x20•\x20Variable\x20GOOGLE_VISION_API_KEY\x20no\x20configurada\x20en\x20Vercel",
    "rawValue",
    "1036512CNnNuJ",
    "catch",
    "1055",
    "join",
    "\x22\x20loading=\x22lazy\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20object-fit:\x20contain;\x20border-radius:\x208px;\x20background:\x20#f8f9fa;\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.style.display=\x27none\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "race",
    "verTicketCompleto",
    "slice",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Total\x20Ventas</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-success\x22>",
    "padStart",
    "credit",
    "⚠️\x20No\x20se\x20pudieron\x20obtener\x20estadísticas\x20de\x20códigos\x20de\x20barras",
    "📋\x20Detalles\x20completos:",
    "isArray",
    "price",
    "code_39_reader",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20",
    "❌\x20Elementos\x20DOM\x20requeridos\x20no\x20encontrados",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "test",
    "ean_8",
    "formulario",
    "🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "\x20tickets)</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Finalizada\x20en\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code>",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20<strong\x20class=\x22ms-1\x22>",
    "❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API",
    "ticket",
    "🔗\x20Ve\x20a:\x20https://console.cloud.google.com/billing",
    "#btnSpinner",
    "https://contador-apicloudvision.vercel.app/api/stats",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20consultar-historial-btn\x22\x20title=\x22Ver\x20detalles\x20completos\x22\x20data-sku=\x22",
    "85949iNSwBq",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20text-truncate\x22\x20title=\x22",
    "🚀\x20DOM\x20completamente\x20cargado,\x20inicializando\x20aplicación...",
    "Bootstrap\x20modal\x20no\x20activo",
    "🔗\x20Probando\x20endpoint:",
    "scrollIntoView",
  ];
  _0x4c28 = function () {
    return _0x35fb9e;
  };
  return _0x4c28();
}
function detenerScanner() {
  const _0xac61ba = _0x5637fc;
  console["log"]("🛑\x20Deteniendo\x20scanner\x20manualmente..."),
    html5QrCodeGlobal && scannerActivo
      ? html5QrCodeGlobal[_0xac61ba(0x520)]()
          [_0xac61ba(0x1dd)](() => {
            const _0x3f67be = _0xac61ba;
            (scannerActivo = ![]),
              html5QrCodeGlobal[_0x3f67be(0x492)](),
              (html5QrCodeGlobal = null);
            const _0x225ab5 = document[_0x3f67be(0x4a4)](_0x3f67be(0x35c)),
              _0x28ee57 = document[_0x3f67be(0x4a4)](_0x3f67be(0x587)),
              _0x17d1a4 = document[_0x3f67be(0x4a4)](_0x3f67be(0x531));
            if (_0x225ab5)
              _0x225ab5[_0x3f67be(0x342)][_0x3f67be(0x2f0)] = _0x3f67be(0x2e2);
            if (_0x28ee57)
              _0x28ee57[_0x3f67be(0x342)][_0x3f67be(0x2f0)] = "none";
            if (_0x17d1a4) _0x17d1a4[_0x3f67be(0x49f)] = _0x3f67be(0x22a);
            const _0x5b8b1c = document[_0x3f67be(0x4a4)]("resultado");
            _0x5b8b1c && (_0x5b8b1c[_0x3f67be(0x37f)] = ""), renderHistorial();
          })
          ["catch"]((_0x28a278) => {
            const _0x4d9892 = _0xac61ba;
            console[_0x4d9892(0x585)](_0x4d9892(0x580), _0x28a278),
              (scannerActivo = ![]),
              (html5QrCodeGlobal = null);
          })
      : (console["log"](
          "⚠️\x20No\x20hay\x20scanner\x20activo\x20para\x20detener"
        ),
        (scannerActivo = ![]),
        (html5QrCodeGlobal = null));
}
function cerrarCamaraAlAbrirModal(_0x5533c8 = _0x5637fc(0x34a)) {
  const _0xbd6a57 = _0x5637fc;
  html5QrCodeGlobal &&
    scannerActivo &&
    (console[_0xbd6a57(0x3dd)](_0xbd6a57(0x316) + _0x5533c8), detenerScanner());
}
window[_0x5637fc(0x4f6)] = detenerScanner;
function configurarFileInput() {
  const _0x2ba747 = _0x5637fc,
    _0x198c11 = document["getElementById"]("fileInput"),
    _0x1c88a8 = document[_0x2ba747(0x4d5)]("label[for=\x22fileInput\x22]");
  _0x198c11 &&
    _0x1c88a8 &&
    ((_0x198c11[_0x2ba747(0x342)]["cssText"] = _0x2ba747(0x2bc)),
    _0x1c88a8[_0x2ba747(0x245)](
      _0x2ba747(0x409),
      function (_0x1eb4d3) {
        const _0x5acfb2 = _0x2ba747;
        _0x1eb4d3[_0x5acfb2(0x32e)](),
          _0x1eb4d3[_0x5acfb2(0x231)](),
          _0x198c11[_0x5acfb2(0x409)]();
      },
      { capture: !![], passive: ![] }
    ),
    console[_0x2ba747(0x3dd)](_0x2ba747(0x562)));
}
document["readyState"] === _0x5637fc(0x1fc)
  ? document[_0x5637fc(0x245)](_0x5637fc(0x1e7), configurarFileInput)
  : configurarFileInput();
