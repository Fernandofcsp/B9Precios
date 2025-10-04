const _0x51ede5 = _0x1c9f;
(function (_0x276fe0, _0x2f81d3) {
  const _0x2d520b = _0x1c9f,
    _0x1060db = _0x276fe0();
  while (!![]) {
    try {
      const _0x2ea0c5 =
        -parseInt(_0x2d520b(0x4ba)) / 0x1 +
        -parseInt(_0x2d520b(0x2c7)) / 0x2 +
        parseInt(_0x2d520b(0x48b)) / 0x3 +
        (-parseInt(_0x2d520b(0x36d)) / 0x4) *
          (-parseInt(_0x2d520b(0x3f8)) / 0x5) +
        parseInt(_0x2d520b(0x3a8)) / 0x6 +
        (-parseInt(_0x2d520b(0x4e6)) / 0x7) *
          (-parseInt(_0x2d520b(0x49f)) / 0x8) +
        -parseInt(_0x2d520b(0x1f9)) / 0x9;
      if (_0x2ea0c5 === _0x2f81d3) break;
      else _0x1060db["push"](_0x1060db["shift"]());
    } catch (_0x45f104) {
      _0x1060db["push"](_0x1060db["shift"]());
    }
  }
})(_0x215a, 0xe3961);
const form = document["getElementById"]("formulario"),
  inputCodigo = document[_0x51ede5(0x50b)](_0x51ede5(0x3c8)),
  readerDiv = document[_0x51ede5(0x50b)](_0x51ede5(0x1e5)),
  ayudaTexto = document[_0x51ede5(0x50b)](_0x51ede5(0x341)),
  installBtn = document[_0x51ede5(0x50b)](_0x51ede5(0x404));
inputCodigo[_0x51ede5(0x353)](_0x51ede5(0x2d1), "off"),
  inputCodigo["setAttribute"](_0x51ede5(0x4e3), "false"),
  inputCodigo[_0x51ede5(0x353)]("autocapitalize", _0x51ede5(0x22d)),
  inputCodigo[_0x51ede5(0x353)](_0x51ede5(0x2ce), "off"),
  inputCodigo[_0x51ede5(0x353)](_0x51ede5(0x23f), "other"),
  form[_0x51ede5(0x353)](_0x51ede5(0x2d1), _0x51ede5(0x22d));
let scannerActivo = ![],
  deferredPrompt,
  puedeEscanear = !![],
  ultimoCodigoEscaneado = "",
  datosYaCargados = ![];
if (!window[_0x51ede5(0x4a9)]) {
  const script = document[_0x51ede5(0x338)]("script");
  (script[_0x51ede5(0x46f)] = _0x51ede5(0x4e2)),
    (script[_0x51ede5(0x441)] = !![]),
    document["head"][_0x51ede5(0x218)](script);
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
    const _0x29294c = _0x51ede5;
    (this["storageKey"] = _0x29294c(0x292)), this[_0x29294c(0x463)]();
  }
  ["loadUsage"]() {
    const _0x3cb79f = _0x51ede5,
      _0x546055 = localStorage[_0x3cb79f(0x3a2)](this[_0x3cb79f(0x281)]);
    _0x546055
      ? (this[_0x3cb79f(0x3c1)] = JSON[_0x3cb79f(0x196)](_0x546055))
      : this[_0x3cb79f(0x272)]();
    const _0x3485f4 = new Date()[_0x3cb79f(0x1a3)]();
    this["usage"][_0x3cb79f(0x2b3)] !== _0x3485f4 && this[_0x3cb79f(0x272)]();
  }
  [_0x51ede5(0x272)]() {
    const _0x236b78 = _0x51ede5;
    (this[_0x236b78(0x3c1)] = {
      month: new Date()[_0x236b78(0x1a3)](),
      year: new Date()[_0x236b78(0x19d)](),
      monthlyCount: 0x0,
      dailyCount: 0x0,
      lastUsedDate: new Date()[_0x236b78(0x2e0)](),
      history: [],
    }),
      this[_0x236b78(0x2eb)]();
  }
  [_0x51ede5(0x2eb)]() {
    const _0x20163c = _0x51ede5;
    localStorage[_0x20163c(0x2e9)](
      this[_0x20163c(0x281)],
      JSON[_0x20163c(0x408)](this[_0x20163c(0x3c1)])
    );
  }
  [_0x51ede5(0x286)]() {
    const _0x365fa9 = _0x51ede5,
      _0x376e5a = new Date()[_0x365fa9(0x2e0)]();
    this["usage"][_0x365fa9(0x1b9)] !== _0x376e5a &&
      ((this[_0x365fa9(0x3c1)][_0x365fa9(0x36e)] = 0x0),
      (this[_0x365fa9(0x3c1)][_0x365fa9(0x1b9)] = _0x376e5a),
      this["saveUsage"]());
    const _0x250660 =
        this["usage"][_0x365fa9(0x2e5)] <
        GOOGLE_VISION_CONFIG[_0x365fa9(0x438)],
      _0x2413f9 =
        this[_0x365fa9(0x3c1)]["dailyCount"] <
        GOOGLE_VISION_CONFIG[_0x365fa9(0x46c)];
    return _0x250660 && _0x2413f9;
  }
  [_0x51ede5(0x4d8)]() {
    const _0x1268e7 = _0x51ede5;
    this["usage"]["monthlyCount"]++,
      this[_0x1268e7(0x3c1)][_0x1268e7(0x36e)]++,
      this[_0x1268e7(0x3c1)][_0x1268e7(0x511)]["push"]({
        date: new Date()["toISOString"](),
        count: this[_0x1268e7(0x3c1)]["monthlyCount"],
      }),
      this[_0x1268e7(0x3c1)][_0x1268e7(0x511)][_0x1268e7(0x527)] > 0x32 &&
        (this["usage"][_0x1268e7(0x511)] =
          this[_0x1268e7(0x3c1)][_0x1268e7(0x511)][_0x1268e7(0x33b)](-0x32)),
      this[_0x1268e7(0x2eb)]();
  }
  [_0x51ede5(0x20c)]() {
    const _0x249ab2 = _0x51ede5;
    return {
      monthlyUsed: this[_0x249ab2(0x3c1)][_0x249ab2(0x2e5)],
      monthlyLimit: GOOGLE_VISION_CONFIG[_0x249ab2(0x438)],
      dailyUsed: this[_0x249ab2(0x3c1)][_0x249ab2(0x36e)],
      dailyLimit: GOOGLE_VISION_CONFIG[_0x249ab2(0x46c)],
      remainingMonthly:
        GOOGLE_VISION_CONFIG[_0x249ab2(0x438)] -
        this[_0x249ab2(0x3c1)][_0x249ab2(0x2e5)],
      remainingDaily:
        GOOGLE_VISION_CONFIG[_0x249ab2(0x46c)] -
        this[_0x249ab2(0x3c1)][_0x249ab2(0x36e)],
      canUse: this[_0x249ab2(0x286)](),
    };
  }
  [_0x51ede5(0x365)]() {
    const _0x2b3155 = _0x51ede5,
      _0x1284e8 = this[_0x2b3155(0x20c)]();
    if (_0x1284e8[_0x2b3155(0x4ff)] >= GOOGLE_VISION_CONFIG[_0x2b3155(0x430)])
      return (
        _0x2b3155(0x1e6) +
        _0x1284e8[_0x2b3155(0x4ff)] +
        "/" +
        _0x1284e8[_0x2b3155(0x438)] +
        _0x2b3155(0x32a)
      );
    if (_0x1284e8[_0x2b3155(0x461)] >= GOOGLE_VISION_CONFIG["dailyLimit"] * 0.8)
      return (
        "⚠️\x20<strong>Límite\x20diario\x20cerca:</strong>\x20" +
        _0x1284e8[_0x2b3155(0x461)] +
        "/" +
        _0x1284e8[_0x2b3155(0x46c)] +
        _0x2b3155(0x36b)
      );
    return null;
  }
}
const visionUsageTracker = new GoogleVisionUsageTracker();
async function detectarConGoogleVision(_0x52b8ca) {
  const _0x4e95d1 = _0x51ede5;
  console["log"]("📸\x20Preparando\x20imagen\x20para\x20Google\x20Vision...");
  const _0x1bbf18 = document[_0x4e95d1(0x338)](_0x4e95d1(0x1f2)),
    _0xe33666 = _0x1bbf18[_0x4e95d1(0x4c3)]("2d");
  let { width: _0x5b27c8, height: _0x50948f } = _0x52b8ca;
  const _0x5a2bd3 = 0x400;
  if (_0x5b27c8 > _0x5a2bd3 || _0x50948f > _0x5a2bd3) {
    const _0x572f4d = Math[_0x4e95d1(0x424)](
      _0x5a2bd3 / _0x5b27c8,
      _0x5a2bd3 / _0x50948f
    );
    (_0x5b27c8 *= _0x572f4d), (_0x50948f *= _0x572f4d);
  }
  (_0x1bbf18["width"] = _0x5b27c8),
    (_0x1bbf18[_0x4e95d1(0x429)] = _0x50948f),
    _0xe33666[_0x4e95d1(0x42f)](_0x52b8ca, 0x0, 0x0, _0x5b27c8, _0x50948f);
  const _0x283137 = _0x1bbf18[_0x4e95d1(0x4b0)](_0x4e95d1(0x3f9), 0.9);
  console[_0x4e95d1(0x1c4)](_0x4e95d1(0x35b));
  try {
    const _0x4bcd87 = await fetch(
      "https://contador-apicloudvision.vercel.app/api/vision-detect",
      {
        method: _0x4e95d1(0x4c1),
        headers: { "Content-Type": _0x4e95d1(0x2b9) },
        body: JSON["stringify"]({
          image: _0x283137,
          userAgent: navigator["userAgent"][_0x4e95d1(0x370)](0x0, 0x32),
          timestamp: new Date()[_0x4e95d1(0x266)](),
        }),
      }
    );
    if (!_0x4bcd87["ok"]) {
      const _0x457c62 = await _0x4bcd87[_0x4e95d1(0x305)]();
      throw new Error(
        _0x4e95d1(0x314) +
          _0x4bcd87[_0x4e95d1(0x39a)] +
          _0x4e95d1(0x1c3) +
          _0x457c62
      );
    }
    const _0x237769 = await _0x4bcd87[_0x4e95d1(0x1a6)]();
    console["log"](_0x4e95d1(0x4e0), _0x237769);
    if (_0x237769[_0x4e95d1(0x24a)])
      return (
        visionUsageTracker[_0x4e95d1(0x4d8)](),
        console[_0x4e95d1(0x1c4)](_0x4e95d1(0x4c6)),
        console[_0x4e95d1(0x1c4)](_0x4e95d1(0x254)),
        extraerCodigoDeTexto(_0x237769["visionData"])
      );
    else throw new Error(_0x237769[_0x4e95d1(0x39b)] || _0x4e95d1(0x489));
  } catch (_0x3f8b19) {
    console[_0x4e95d1(0x1c4)](_0x4e95d1(0x28b), _0x3f8b19[_0x4e95d1(0x4f5)]);
    if (_0x3f8b19[_0x4e95d1(0x4f5)][_0x4e95d1(0x231)](_0x4e95d1(0x195)))
      console["log"](_0x4e95d1(0x4c5)),
        console[_0x4e95d1(0x1c4)](_0x4e95d1(0x43c)),
        console["log"](_0x4e95d1(0x422)),
        console[_0x4e95d1(0x1c4)](_0x4e95d1(0x2aa)),
        console[_0x4e95d1(0x1c4)](
          "\x20\x20\x20•\x20API\x20Key\x20inválida\x20o\x20límites\x20excedidos"
        ),
        console["log"](_0x4e95d1(0x30f));
    else {
      if (
        _0x3f8b19["message"]["includes"]("CORS") ||
        _0x3f8b19["message"][_0x4e95d1(0x231)](_0x4e95d1(0x267)) ||
        _0x3f8b19["message"][_0x4e95d1(0x231)](_0x4e95d1(0x332))
      )
        throw new Error(_0x4e95d1(0x2c3));
    }
    throw _0x3f8b19;
  }
}
function extraerCodigoDeTexto(_0x7e058) {
  const _0x171670 = _0x51ede5,
    _0xb5e4e7 = _0x7e058[_0x171670(0x247)][0x0]?.[_0x171670(0x3c9)] || [];
  if (_0xb5e4e7["length"] === 0x0)
    return console["log"](_0x171670(0x1b1)), null;
  const _0xb98b53 = _0xb5e4e7[0x0]?.[_0x171670(0x2c2)] || "";
  console[_0x171670(0x1c4)](_0x171670(0x41b), _0xb98b53);
  const _0x4a88fa = [
    /\b(\d{13})\b/g,
    /\b(\d{12})\b/g,
    /\b(\d{8})\b/g,
    /\b(\d{6,8})\b/g,
    /\b([A-Z0-9\-]{4,20})\b/g,
  ];
  for (const _0x114473 of _0x4a88fa) {
    const _0x246031 = [..._0xb98b53[_0x171670(0x304)](_0x114473)];
    for (const _0x148e47 of _0x246031) {
      const _0x356b7a = _0x148e47[0x1][_0x171670(0x45b)]();
      console[_0x171670(0x1c4)](_0x171670(0x2da) + _0x356b7a);
      if (validarCodigoPorLongitud(_0x356b7a))
        return console["log"](_0x171670(0x4dd) + _0x356b7a), _0x356b7a;
    }
  }
  return console["log"](_0x171670(0x2d4)), null;
}
function validarCodigoPorLongitud(_0x40e12f) {
  const _0x416cc7 = _0x51ede5;
  if (/^\d{13}$/[_0x416cc7(0x325)](_0x40e12f)) return !![];
  if (/^\d{12}$/[_0x416cc7(0x325)](_0x40e12f)) return !![];
  if (/^\d{8}$/[_0x416cc7(0x325)](_0x40e12f)) return !![];
  if (/^\d{6,8}$/[_0x416cc7(0x325)](_0x40e12f)) return !![];
  if (
    /^[A-Z0-9\-]{4,20}$/[_0x416cc7(0x325)](_0x40e12f) &&
    _0x40e12f[_0x416cc7(0x527)] >= 0x4
  )
    return !![];
  return ![];
}
async function diagnosticarBackend() {
  const _0x23ba52 = _0x51ede5;
  console[_0x23ba52(0x1c4)](_0x23ba52(0x1d4));
  const _0x47193c = document[_0x23ba52(0x50b)](_0x23ba52(0x1f7));
  _0x47193c && (_0x47193c[_0x23ba52(0x270)] = _0x23ba52(0x374));
  let _0x259703 = "";
  try {
    const _0x2a4831 = await fetch(_0x23ba52(0x4e5));
    if (_0x2a4831["ok"]) {
      console["log"](_0x23ba52(0x3c6));
      const _0x318e2c = await _0x2a4831[_0x23ba52(0x1a6)]();
      console["log"](_0x23ba52(0x445), _0x318e2c),
        (_0x259703 += _0x23ba52(0x45c));
    } else
      console[_0x23ba52(0x1c4)](_0x23ba52(0x2fb), _0x2a4831[_0x23ba52(0x39a)]),
        (_0x259703 +=
          "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Endpoint\x20/api/stats\x20falló:\x20" +
          _0x2a4831[_0x23ba52(0x39a)] +
          _0x23ba52(0x26f));
    console[_0x23ba52(0x1c4)](_0x23ba52(0x259));
    const _0x4d5de7 = await fetch(
        "https://contador-apicloudvision.vercel.app/api/vision-detect",
        {
          method: "POST",
          headers: { "Content-Type": _0x23ba52(0x2b9) },
          body: JSON["stringify"]({
            image: _0x23ba52(0x509),
            userId: _0x23ba52(0x3ee),
          }),
        }
      ),
      _0xe4675d = await _0x4d5de7["json"]();
    console[_0x23ba52(0x1c4)](_0x23ba52(0x1e9), _0xe4675d),
      console[_0x23ba52(0x1c4)](
        "📊\x20Status\x20HTTP:",
        _0x4d5de7[_0x23ba52(0x39a)]
      );
    if (_0x4d5de7["status"] === 0x1f4) {
      console[_0x23ba52(0x1c4)](
        "🔧\x20Error\x20500\x20detectado\x20-\x20Analizando\x20causa\x20específica:"
      );
      if (_0xe4675d[_0x23ba52(0x3cc)]) {
        if (_0xe4675d[_0x23ba52(0x3cc)][_0x23ba52(0x231)](_0x23ba52(0x399)))
          console[_0x23ba52(0x1c4)](
            "🏦\x20PROBLEMA:\x20Facturación\x20no\x20habilitada\x20en\x20el\x20proyecto\x20correcto"
          ),
            console[_0x23ba52(0x1c4)](_0x23ba52(0x517)),
            console["log"](_0x23ba52(0x3cd)),
            (_0x259703 +=
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🏦\x20Problema\x20de\x20Facturación</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20facturación\x20no\x20está\x20habilitada\x20en\x20el\x20proyecto\x20correcto\x20(#1070150612422)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/billing\x22\x20target=\x22_blank\x22>Ve\x20a\x20Google\x20Cloud\x20Billing</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20");
        else {
          if (_0xe4675d[_0x23ba52(0x3cc)][_0x23ba52(0x231)](_0x23ba52(0x368)))
            console[_0x23ba52(0x1c4)](
              "🔑\x20PROBLEMA:\x20API\x20Key\x20inválida"
            ),
              (_0x259703 += _0x23ba52(0x518));
          else
            _0xe4675d[_0x23ba52(0x3cc)]["includes"](_0x23ba52(0x1e8))
              ? (console["log"](_0x23ba52(0x449)),
                console[_0x23ba52(0x1c4)](_0x23ba52(0x462)),
                (_0x259703 += _0x23ba52(0x3e4)))
              : (console[_0x23ba52(0x1c4)](
                  "❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API"
                ),
                console[_0x23ba52(0x1c4)](
                  _0x23ba52(0x2f8),
                  _0xe4675d[_0x23ba52(0x3cc)]
                ),
                (_0x259703 += _0x23ba52(0x3f2)));
        }
      }
    } else
      _0x4d5de7[_0x23ba52(0x39a)] === 0xc8 &&
        (console[_0x23ba52(0x1c4)](_0x23ba52(0x448)),
        (_0x259703 +=
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🎉\x20¡Google\x20Vision\x20API\x20Activa!</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>✅\x20La\x20detección\x20premium\x20está\x20funcionando\x20correctamente</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Fallback\x20automático:\x20Local\x20→\x20Google\x20Vision</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"));
  } catch (_0x1ca92d) {
    console[_0x23ba52(0x1c4)](_0x23ba52(0x398), _0x1ca92d[_0x23ba52(0x4f5)]),
      _0x1ca92d[_0x23ba52(0x4f5)][_0x23ba52(0x231)](_0x23ba52(0x40c))
        ? (console[_0x23ba52(0x1c4)](_0x23ba52(0x4eb)),
          (_0x259703 += _0x23ba52(0x35e)))
        : (_0x259703 +=
            _0x23ba52(0x3da) + _0x1ca92d["message"] + _0x23ba52(0x26f));
  }
  _0x47193c && (_0x47193c[_0x23ba52(0x270)] = _0x259703);
}
async function verificarBackend() {
  const _0x104d40 = _0x51ede5;
  try {
    const _0x3c4c24 = await fetch(_0x104d40(0x4e5), {
      method: _0x104d40(0x27a),
      headers: { "Content-Type": "application/json" },
    });
    if (_0x3c4c24["ok"]) {
      const _0x54585f = await _0x3c4c24[_0x104d40(0x1a6)]();
      return (
        console["log"](_0x104d40(0x394), _0x54585f),
        { activo: !![], stats: _0x54585f, mensaje: _0x104d40(0x37e) }
      );
    } else
      return (
        console["log"](
          "⚠️\x20Backend\x20responde\x20pero\x20con\x20error:",
          _0x3c4c24[_0x104d40(0x39a)]
        ),
        { activo: ![], mensaje: _0x104d40(0x1eb) + _0x3c4c24["status"] }
      );
  } catch (_0x1254dd) {
    return (
      console["log"](_0x104d40(0x2d8), _0x1254dd["message"]),
      { activo: ![], mensaje: _0x104d40(0x434) }
    );
  }
}
async function mostrarEstadisticasUso() {
  const _0x267c25 = _0x51ede5,
    _0xc8190e = visionUsageTracker[_0x267c25(0x20c)](),
    _0x29aa97 = visionUsageTracker[_0x267c25(0x365)]();
  let _0x5bce7b = _0x267c25(0x384);
  (_0x5bce7b +=
    _0x267c25(0x2ac) +
    _0xc8190e[_0x267c25(0x4ff)] +
    "/" +
    _0xc8190e[_0x267c25(0x438)] +
    "\x20(quedan\x20" +
    _0xc8190e[_0x267c25(0x206)] +
    ")<br>"),
    (_0x5bce7b +=
      "•\x20Diario:\x20" +
      _0xc8190e["dailyUsed"] +
      "/" +
      _0xc8190e["dailyLimit"] +
      _0x267c25(0x31a) +
      _0xc8190e[_0x267c25(0x3ff)] +
      ")");
  _0x29aa97 && (_0x5bce7b += _0x267c25(0x276) + _0x29aa97);
  if (GOOGLE_VISION_CONFIG[_0x267c25(0x334)])
    try {
      const _0xdebd9a = await verificarBackend();
      _0x5bce7b += _0x267c25(0x526) + _0xdebd9a["mensaje"];
    } catch (_0x2d42ae) {
      _0x5bce7b += _0x267c25(0x531);
    }
  return _0x5bce7b;
}
function setCookie(_0x23919e, _0x33b807, _0x207fdf) {
  const _0x414465 = _0x51ede5,
    _0x4f3d24 = new Date(
      Date[_0x414465(0x26b)]() + _0x207fdf * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x414465(0x4d3)]();
  document[_0x414465(0x2c9)] =
    _0x23919e +
    "=" +
    encodeURIComponent(_0x33b807) +
    ";\x20expires=" +
    _0x4f3d24 +
    _0x414465(0x42a);
}
function getCookie(_0x482030) {
  const _0x14daad = _0x51ede5,
    _0x2ee7ef = ";\x20" + document[_0x14daad(0x2c9)],
    _0x4a81b2 = _0x2ee7ef[_0x14daad(0x1a9)](";\x20" + _0x482030 + "=");
  if (_0x4a81b2[_0x14daad(0x527)] === 0x2)
    return decodeURIComponent(
      _0x4a81b2[_0x14daad(0x53b)]()[_0x14daad(0x1a9)](";")[_0x14daad(0x20d)]()
    );
  return null;
}
const historialDiv = document[_0x51ede5(0x50b)](_0x51ede5(0x19e)),
  resultadoDiv = document[_0x51ede5(0x50b)](_0x51ede5(0x263)),
  DB_NAME = _0x51ede5(0x27e),
  DB_STORE = _0x51ede5(0x32e),
  DB_STORE_PROMOCIONES = "promociones";
let db;
function openDB() {
  return new Promise((_0xfeb16b, _0x5bb4e7) => {
    const _0x183ea3 = _0x1c9f,
      _0x2d02c8 = indexedDB[_0x183ea3(0x33f)](DB_NAME, 0x2);
    (_0x2d02c8["onupgradeneeded"] = function (_0x437604) {
      const _0x163d40 = _0x183ea3;
      (db = _0x437604[_0x163d40(0x495)][_0x163d40(0x431)]),
        !db[_0x163d40(0x2a2)]["contains"](DB_STORE) &&
          db[_0x163d40(0x366)](DB_STORE, {
            keyPath: "id",
            autoIncrement: !![],
          }),
        !db[_0x163d40(0x2a2)][_0x163d40(0x4c7)](DB_STORE_PROMOCIONES) &&
          db[_0x163d40(0x366)](DB_STORE_PROMOCIONES, {
            keyPath: "id",
            autoIncrement: !![],
          });
    }),
      (_0x2d02c8["onsuccess"] = function (_0x38b033) {
        const _0x543650 = _0x183ea3;
        (db = _0x38b033[_0x543650(0x495)]["result"]), _0xfeb16b(db);
      }),
      (_0x2d02c8[_0x183ea3(0x457)] = function (_0x248c3a) {
        _0x5bb4e7(_0x248c3a);
      });
  });
}
function clearProductos() {
  const _0x37780b = _0x51ede5;
  return openDB()[_0x37780b(0x240)]((_0x3a9125) => {
    return new Promise((_0x503252, _0x49848e) => {
      const _0x372061 = _0x1c9f,
        _0x6c6b88 = _0x3a9125["transaction"](DB_STORE, _0x372061(0x302));
      _0x6c6b88["objectStore"](DB_STORE)["clear"](),
        (_0x6c6b88[_0x372061(0x3f1)] = _0x503252),
        (_0x6c6b88[_0x372061(0x457)] = _0x49848e);
    });
  });
}
function saveProductos(_0x700d39) {
  const _0x16a193 = _0x51ede5;
  return openDB()[_0x16a193(0x240)]((_0x14413a) => {
    return new Promise((_0x5441d0, _0x5c7169) => {
      const _0x48cd6f = _0x1c9f,
        _0x215045 = _0x14413a[_0x48cd6f(0x3b3)](DB_STORE, _0x48cd6f(0x302)),
        _0x36be8e = _0x215045["objectStore"](DB_STORE);
      _0x700d39[_0x48cd6f(0x24f)]((_0x1e9033) =>
        _0x36be8e[_0x48cd6f(0x52f)](_0x1e9033)
      ),
        (_0x215045["oncomplete"] = _0x5441d0),
        (_0x215045[_0x48cd6f(0x457)] = _0x5c7169);
    });
  });
}
function getAllProductos() {
  const _0x2df3fc = _0x51ede5;
  return openDB()[_0x2df3fc(0x240)]((_0x580db4) => {
    return new Promise((_0x3c4fb6, _0x59138c) => {
      const _0x2d93f7 = _0x1c9f,
        _0xe1f3e = _0x580db4[_0x2d93f7(0x3b3)](DB_STORE, _0x2d93f7(0x246)),
        _0x46d39d = _0xe1f3e[_0x2d93f7(0x293)](DB_STORE),
        _0x3056ce = _0x46d39d[_0x2d93f7(0x25a)]();
      (_0x3056ce[_0x2d93f7(0x27b)] = () =>
        _0x3c4fb6(_0x3056ce[_0x2d93f7(0x431)])),
        (_0x3056ce["onerror"] = _0x59138c);
    });
  });
}
function clearPromociones() {
  const _0x3ff173 = _0x51ede5;
  return openDB()[_0x3ff173(0x240)]((_0x4afec9) => {
    return new Promise((_0x2369be, _0x315531) => {
      const _0x688d2d = _0x1c9f,
        _0x509ca6 = _0x4afec9[_0x688d2d(0x3b3)](
          DB_STORE_PROMOCIONES,
          _0x688d2d(0x302)
        );
      _0x509ca6[_0x688d2d(0x293)](DB_STORE_PROMOCIONES)["clear"](),
        (_0x509ca6["oncomplete"] = _0x2369be),
        (_0x509ca6[_0x688d2d(0x457)] = _0x315531);
    });
  });
}
function savePromociones(_0x6e49d6) {
  return openDB()["then"]((_0x45d5c8) => {
    return new Promise((_0x12d037, _0x59bc49) => {
      const _0x24070e = _0x1c9f,
        _0x1e7f43 = _0x45d5c8[_0x24070e(0x3b3)](
          DB_STORE_PROMOCIONES,
          _0x24070e(0x302)
        ),
        _0x408f98 = _0x1e7f43[_0x24070e(0x293)](DB_STORE_PROMOCIONES);
      _0x6e49d6["forEach"]((_0x4ed0d5) =>
        _0x408f98[_0x24070e(0x52f)](_0x4ed0d5)
      ),
        (_0x1e7f43[_0x24070e(0x3f1)] = _0x12d037),
        (_0x1e7f43[_0x24070e(0x457)] = _0x59bc49);
    });
  });
}
function getAllPromociones() {
  const _0x3b5367 = _0x51ede5;
  return openDB()[_0x3b5367(0x240)]((_0x51019e) => {
    return new Promise((_0x141a00, _0x2cf987) => {
      const _0x219540 = _0x1c9f,
        _0x4a490f = _0x51019e[_0x219540(0x3b3)](
          DB_STORE_PROMOCIONES,
          _0x219540(0x246)
        ),
        _0x1fc1b0 = _0x4a490f[_0x219540(0x293)](DB_STORE_PROMOCIONES),
        _0x271857 = _0x1fc1b0[_0x219540(0x25a)]();
      (_0x271857[_0x219540(0x27b)] = () =>
        _0x141a00(_0x271857[_0x219540(0x431)])),
        (_0x271857[_0x219540(0x457)] = _0x2cf987);
    });
  });
}
const sugerenciasDiv = document[_0x51ede5(0x338)]("div");
(sugerenciasDiv["id"] = _0x51ede5(0x2dc)),
  (sugerenciasDiv["className"] = _0x51ede5(0x432)),
  (sugerenciasDiv[_0x51ede5(0x503)][_0x51ede5(0x2fc)] = "1000"),
  (sugerenciasDiv[_0x51ede5(0x503)][_0x51ede5(0x282)] = _0x51ede5(0x3e3)),
  (sugerenciasDiv["style"]["overflowY"] = _0x51ede5(0x223)),
  (sugerenciasDiv[_0x51ede5(0x503)][_0x51ede5(0x31f)] = _0x51ede5(0x2e4)),
  (sugerenciasDiv[_0x51ede5(0x503)][_0x51ede5(0x50d)] = "0"),
  (sugerenciasDiv["style"][_0x51ede5(0x3e9)] = "0"),
  (inputCodigo["parentNode"][_0x51ede5(0x503)]["position"] = _0x51ede5(0x244)),
  inputCodigo[_0x51ede5(0x3cb)][_0x51ede5(0x218)](sugerenciasDiv);
const actualizarDiv = document[_0x51ede5(0x338)](_0x51ede5(0x3ec));
(actualizarDiv[_0x51ede5(0x199)] = _0x51ede5(0x2bc)),
  (actualizarDiv[_0x51ede5(0x270)] = _0x51ede5(0x2e6)),
  historialDiv[_0x51ede5(0x3cb)][_0x51ede5(0x40f)](actualizarDiv, historialDiv);
const resultadosModalHTML = _0x51ede5(0x4ec);
document["body"][_0x51ede5(0x243)](_0x51ede5(0x1f6), resultadosModalHTML);
const btnActualizar = actualizarDiv["querySelector"]("#btnActualizar"),
  btnPromociones = actualizarDiv[_0x51ede5(0x1b8)](_0x51ede5(0x350)),
  ultimaActualizacionSpan = actualizarDiv["querySelector"](_0x51ede5(0x471)),
  btnTexto = actualizarDiv[_0x51ede5(0x1b8)](_0x51ede5(0x1ab)),
  btnSpinner = actualizarDiv[_0x51ede5(0x1b8)](_0x51ede5(0x4f4)),
  mensajeActualizacion = actualizarDiv[_0x51ede5(0x1b8)](_0x51ede5(0x4ea));
async function mostrarProductosConPromociones() {
  const _0x178883 = _0x51ede5,
    _0xa3b0cd = await getAllProductos(),
    _0xb121b9 = [];
  for (const _0x3ced4f of _0xa3b0cd) {
    try {
      const _0x150a89 = await detectarPromocionReal(_0x3ced4f);
      _0x150a89["length"] > 0x0 && _0xb121b9[_0x178883(0x347)](_0x3ced4f);
    } catch (_0x3588f5) {
      console[_0x178883(0x278)](
        "⚠️\x20Error\x20al\x20detectar\x20promociones\x20para\x20SKU\x20" +
          _0x3ced4f[_0x178883(0x28c)] +
          ":",
        _0x3588f5
      );
    }
  }
  if (_0xb121b9["length"] === 0x0) {
    (resultadoDiv["innerHTML"] = _0x178883(0x301)), renderHistorial();
    return;
  }
  const _0x5cf609 = [];
  for (const _0x29813f of _0xb121b9[_0x178883(0x33b)](0x0, 0x14)) {
    try {
      const _0x478b97 = await detectarPromocionReal(_0x29813f),
        _0x27925b =
          Number(_0x29813f[_0x178883(0x419)]) || Number(_0x29813f["L1"]) || 0x0,
        _0x23698c = Math[_0x178883(0x481)](_0x27925b * 1.16 * 0x64) / 0x64,
        _0x5698b1 = _0x478b97[_0x178883(0x1c2)]((_0x4626a5) => {
          const _0xc99858 = _0x178883;
          let _0x48d10c = "bg-success",
            _0x312b56 =
              _0x4626a5["detalle"] || _0x4626a5[_0xc99858(0x1dc)] || "PROMO";
          if (_0x4626a5[_0xc99858(0x25b)]["includes"](_0xc99858(0x42b)))
            (_0x48d10c = _0xc99858(0x3e5)),
              (_0x312b56 = _0xc99858(0x485) + _0x312b56);
          else
            _0x4626a5[_0xc99858(0x345)] &&
              ((_0x48d10c = _0xc99858(0x313)),
              (_0x312b56 = _0xc99858(0x41a) + _0x312b56));
          return (
            _0xc99858(0x2db) +
            _0x48d10c +
            _0xc99858(0x4c4) +
            _0x312b56 +
            _0xc99858(0x37b)
          );
        })[_0x178883(0x3ea)]("");
      _0x5cf609[_0x178883(0x347)](
        _0x178883(0x1d3) +
          _0x29813f[_0x178883(0x28c)] +
          _0x178883(0x23c) +
          _0x29813f[_0x178883(0x344)] +
          "\x22>" +
          _0x29813f[_0x178883(0x344)] +
          _0x178883(0x348) +
          _0x5698b1 +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-success\x20fw-bold\x22>$" +
          _0x23698c[_0x178883(0x482)](0x2) +
          "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20" +
          _0x29813f[_0x178883(0x28c)] +
          _0x178883(0x3ba)
      );
    } catch (_0x227eaa) {
      console[_0x178883(0x278)](
        _0x178883(0x479) + _0x29813f[_0x178883(0x28c)] + ":",
        _0x227eaa
      );
    }
  }
  (resultadoDiv["innerHTML"] =
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-success\x22>🏷️\x20Productos\x20con\x20Promociones</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20text-white\x22>" +
    _0xb121b9[_0x178883(0x527)] +
    _0x178883(0x1b6) +
    _0x5cf609[_0x178883(0x3ea)]("") +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20" +
    (_0xb121b9[_0x178883(0x527)] > 0x14
      ? "<div\x20class=\x22alert\x20alert-info\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Mostrando\x20los\x20primeros\x2020\x20productos.\x20Hay\x20" +
        (_0xb121b9[_0x178883(0x527)] - 0x14) +
        _0x178883(0x1bd)
      : "") +
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20"),
    renderHistorial();
}
window[_0x51ede5(0x233)] = async function (_0x43f3f1) {
  const _0x1d3df3 = _0x51ede5,
    _0x104ef8 = await getAllProductos(),
    _0x104341 = _0x104ef8[_0x1d3df3(0x3d3)](
      (_0x197a44) =>
        _0x197a44[_0x1d3df3(0x28c)] === _0x43f3f1 ||
        _0x197a44[_0x1d3df3(0x204)] === _0x43f3f1
    );
  if (_0x104341) {
    mostrarDetalleProducto(_0x104341);
    const _0xaf97f = {
      ..._0x104341,
      FECHA_ESCANEO: new Date()[_0x1d3df3(0x266)](),
    };
    historial["unshift"](_0xaf97f),
      setCookie(_0x1d3df3(0x19e), JSON[_0x1d3df3(0x408)](historial), 0x1e),
      renderHistorial();
  }
};
const urlBase = _0x51ede5(0x4fb),
  urlBaseConCodigos = _0x51ede5(0x4a5),
  urlPromociones = _0x51ede5(0x330),
  CONFIG_ENDPOINTS = {
    productosBasicos: urlBase,
    productosConCodigos: urlBaseConCodigos,
    promociones: urlPromociones,
    usarCodigosBarras: !![],
    fallbackTiempo: 0x1388,
  };
function tiempoRelativo(_0xeb9a9f) {
  const _0x12e069 = _0x51ede5;
  if (!_0xeb9a9f) return "Nunca";
  const _0x48de27 = Date["now"](),
    _0x1f9971 = Math["floor"]((_0x48de27 - _0xeb9a9f) / 0x3e8);
  if (_0x1f9971 < 0x3c) return _0x12e069(0x360) + _0x1f9971 + _0x12e069(0x28f);
  if (_0x1f9971 < 0xe10)
    return (
      "Hace\x20" + Math[_0x12e069(0x369)](_0x1f9971 / 0x3c) + _0x12e069(0x45e)
    );
  if (_0x1f9971 < 0x15180)
    return (
      "Hace\x20" + Math[_0x12e069(0x369)](_0x1f9971 / 0xe10) + _0x12e069(0x336)
    );
  return (
    _0x12e069(0x360) + Math["floor"](_0x1f9971 / 0x15180) + _0x12e069(0x4bb)
  );
}
function renderUltimaActualizacion() {
  const _0x45696d = _0x51ede5,
    _0x45166e = localStorage[_0x45696d(0x3a2)]("productos_ts"),
    _0x2076bb = localStorage[_0x45696d(0x3a2)](_0x45696d(0x212));
  let _0x33b456 = _0x45696d(0x3a3);
  if (_0x45166e && _0x2076bb) {
    const _0x4163ee = tiempoRelativo(Number(_0x45166e)),
      _0x41badd = tiempoRelativo(Number(_0x2076bb)),
      _0x4a0baf = Math[_0x45696d(0x468)](Number(_0x45166e) - Number(_0x2076bb));
    _0x4a0baf < 0xea60
      ? (_0x33b456 = "Última\x20actualización:\x20" + _0x4163ee)
      : (_0x33b456 =
          "Productos:\x20" + _0x4163ee + _0x45696d(0x388) + _0x41badd);
  } else {
    if (_0x45166e)
      _0x33b456 =
        _0x45696d(0x24e) + tiempoRelativo(Number(_0x45166e)) + _0x45696d(0x29b);
    else
      _0x2076bb &&
        (_0x33b456 =
          "Productos:\x20nunca\x20|\x20Promociones:\x20" +
          tiempoRelativo(Number(_0x2076bb)));
  }
  ultimaActualizacionSpan[_0x45696d(0x1e2)] = _0x33b456;
}
function actualizarProgreso(_0x3160fa, _0x234af0, _0x1de044 = "") {
  const _0x26a96b = _0x51ede5,
    _0x9f5022 = Math["min"](0x64, Math[_0x26a96b(0x3fc)](0x0, _0x3160fa)),
    _0x210cdf =
      _0x3160fa >= 0x64
        ? _0x26a96b(0x24a)
        : _0x3160fa >= 0x32
        ? _0x26a96b(0x24a)
        : _0x26a96b(0x4b1);
  mensajeActualizacion[_0x26a96b(0x270)] =
    _0x26a96b(0x3c3) +
    _0x234af0 +
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>" +
    _0x3160fa +
    _0x26a96b(0x2c1) +
    _0x210cdf +
    _0x26a96b(0x238) +
    _0x9f5022 +
    _0x26a96b(0x2d5) +
    _0x3160fa +
    _0x26a96b(0x2d6) +
    (_0x1de044
      ? "<small\x20class=\x22text-muted\x20mt-1\x20d-block\x22>" +
        _0x1de044 +
        "</small>"
      : "") +
    _0x26a96b(0x1cd);
}
async function actualizarTodosLosDatos() {
  const _0x2d46d4 = _0x51ede5;
  console["log"](_0x2d46d4(0x4b8)),
    (btnActualizar["disabled"] = !![]),
    (btnTexto["textContent"] = "Actualizando..."),
    btnSpinner[_0x2d46d4(0x274)]["remove"](_0x2d46d4(0x236));
  const _0x209096 = Date[_0x2d46d4(0x26b)]();
  let _0x273083 = ![],
    _0x121950 = ![];
  const _0x62b319 = () => {
    const _0x5b9cc0 = _0x2d46d4;
    let _0x53ed75 = 0x0,
      _0x4a29f4 = "Iniciando...",
      _0x7a6c3d = "";
    if (!_0x273083 && !_0x121950)
      (_0x53ed75 = 0xa),
        (_0x4a29f4 = _0x5b9cc0(0x4f7)),
        (_0x7a6c3d =
          "Productos\x20básicos,\x20códigos\x20de\x20barras\x20y\x20promociones");
    else {
      if (_0x273083 && !_0x121950)
        (_0x53ed75 = 0x46),
          (_0x4a29f4 = "2\x20endpoints\x20completados,\x20finalizando..."),
          (_0x7a6c3d = _0x5b9cc0(0x24c));
      else {
        if (!_0x273083 && _0x121950)
          (_0x53ed75 = 0x46),
            (_0x4a29f4 = _0x5b9cc0(0x379)),
            (_0x7a6c3d = _0x5b9cc0(0x25d));
        else {
          _0x53ed75 = 0x64;
          const _0x2b3c30 = ((Date["now"]() - _0x209096) / 0x3e8)["toFixed"](
            0x1
          );
          (_0x4a29f4 = _0x5b9cc0(0x50c)),
            (_0x7a6c3d = "Finalizada\x20en\x20" + _0x2b3c30 + _0x5b9cc0(0x28f));
        }
      }
    }
    actualizarProgreso(_0x53ed75, _0x4a29f4, _0x7a6c3d);
  };
  _0x62b319();
  try {
    await new Promise((_0xaea3da) => setTimeout(_0xaea3da, 0xc8)),
      actualizarProgreso(0x19, _0x2d46d4(0x43f), _0x2d46d4(0x49b));
    const _0x383ee0 = cargarProductosRapido()["then"]((_0x56c975) => {
        return (_0x273083 = !![]), _0x62b319(), _0x56c975;
      }),
      _0x39e05e = cargarPromocionesRapido()["then"]((_0x5cc641) => {
        return (_0x121950 = !![]), _0x62b319(), _0x5cc641;
      });
    setTimeout(() => {
      (!_0x273083 || !_0x121950) &&
        actualizarProgreso(
          0x32,
          "Descargando\x20desde\x20múltiples\x20endpoints...",
          "Básicos,\x20códigos\x20de\x20barras\x20y\x20promociones"
        );
    }, 0x3e8);
    const [_0x482e03, _0x1c9506] = await Promise[_0x2d46d4(0x391)]([
        _0x383ee0,
        _0x39e05e,
      ]),
      _0x5e4fb1 = ((Date[_0x2d46d4(0x26b)]() - _0x209096) / 0x3e8)["toFixed"](
        0x1
      );
    console[_0x2d46d4(0x1c4)](_0x2d46d4(0x3d8) + _0x5e4fb1 + "s");
    const _0x1db8a5 = _0x482e03["status"] === _0x2d46d4(0x43e),
      _0x2653d2 = _0x1c9506[_0x2d46d4(0x39a)] === _0x2d46d4(0x43e);
    if (_0x1db8a5 && _0x2653d2) {
      const _0x2eb319 = _0x482e03[_0x2d46d4(0x29f)]?.["productos"] || 0x0,
        _0x4928d2 = _0x1c9506[_0x2d46d4(0x29f)]?.[_0x2d46d4(0x4d1)] || 0x0,
        _0x3c98f2 = _0x482e03[_0x2d46d4(0x29f)]?.[_0x2d46d4(0x38d)] || "",
        _0x33436d = _0x1c9506[_0x2d46d4(0x29f)]?.[_0x2d46d4(0x38d)] || "";
      actualizarProgreso(
        0x64,
        _0x2d46d4(0x393),
        _0x2eb319 +
          "\x20productos\x20(" +
          _0x3c98f2 +
          "),\x20" +
          _0x4928d2 +
          _0x2d46d4(0x464) +
          _0x33436d +
          ")\x20-\x20" +
          _0x5e4fb1 +
          "s"
      );
    } else
      _0x1db8a5 || _0x2653d2
        ? actualizarProgreso(
            0x4b,
            _0x2d46d4(0x1fb),
            "Algunos\x20endpoints\x20fallaron\x20(" + _0x5e4fb1 + "s)"
          )
        : actualizarProgreso(
            0x19,
            _0x2d46d4(0x34c),
            _0x2d46d4(0x46e) + _0x5e4fb1 + "s)"
          );
    _0x482e03[_0x2d46d4(0x39a)] === _0x2d46d4(0x33e) &&
      console[_0x2d46d4(0x39b)](_0x2d46d4(0x407), _0x482e03["reason"]),
      _0x1c9506[_0x2d46d4(0x39a)] === _0x2d46d4(0x33e) &&
        console[_0x2d46d4(0x39b)](
          "Error\x20al\x20cargar\x20promociones:",
          _0x1c9506[_0x2d46d4(0x3ab)]
        );
  } catch (_0x862aef) {
    console["error"](_0x2d46d4(0x4f6), _0x862aef),
      actualizarProgreso(0x0, _0x2d46d4(0x3a7), _0x2d46d4(0x52e));
  } finally {
    (btnActualizar[_0x2d46d4(0x2b5)] = ![]),
      (btnTexto[_0x2d46d4(0x1e2)] = _0x2d46d4(0x31b)),
      btnSpinner[_0x2d46d4(0x274)][_0x2d46d4(0x52f)]("d-none"),
      setTimeout(() => {
        const _0x17aaf8 = _0x2d46d4;
        (mensajeActualizacion[_0x17aaf8(0x1e2)] = ""),
          renderUltimaActualizacion();
      }, 0xfa0);
  }
}
async function cargarProductosRapido() {
  const _0x47ef6d = _0x51ede5,
    _0x5585ad = Date["now"]();
  if (!navigator[_0x47ef6d(0x343)]) throw new Error(_0x47ef6d(0x3d2));
  let _0x4d1c0d = [],
    _0x5027fa = [];
  console[_0x47ef6d(0x1c4)](_0x47ef6d(0x1a1));
  if (CONFIG_ENDPOINTS[_0x47ef6d(0x39d)])
    try {
      const _0x409744 =
        CONFIG_ENDPOINTS["productosConCodigos"] + "?t=" + _0x5585ad;
      console["log"](
        "🔄\x20Consultando\x20endpoint\x20con\x20códigos\x20de\x20barras..."
      );
      const _0x2f61b1 = await Promise[_0x47ef6d(0x4b7)]([
        fetch(_0x409744, {
          cache: _0x47ef6d(0x1f4),
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": _0x47ef6d(0x2b9),
          },
        }),
        new Promise((_0x9e69a6, _0x2b63a3) =>
          setTimeout(
            () => _0x2b63a3(new Error(_0x47ef6d(0x300))),
            CONFIG_ENDPOINTS[_0x47ef6d(0x51e)]
          )
        ),
      ]);
      if (_0x2f61b1["ok"]) {
        const _0x4b8b6c = await _0x2f61b1[_0x47ef6d(0x1a6)]();
        _0x4b8b6c[_0x47ef6d(0x24a)] && _0x4b8b6c[_0x47ef6d(0x32e)]
          ? ((_0x4d1c0d = _0x4b8b6c[_0x47ef6d(0x32e)]),
            _0x5027fa[_0x47ef6d(0x347)](_0x47ef6d(0x363)),
            console[_0x47ef6d(0x1c4)](
              _0x47ef6d(0x4b6),
              _0x4b8b6c[_0x47ef6d(0x32e)][_0x47ef6d(0x527)]
            ))
          : _0x5027fa["push"](
              "códigos\x20de\x20barras\x20⚠️\x20(sin\x20datos)"
            );
      } else
        _0x5027fa[_0x47ef6d(0x347)](
          "códigos\x20de\x20barras\x20❌\x20(HTTP\x20" +
            _0x2f61b1[_0x47ef6d(0x39a)] +
            ")"
        );
    } catch (_0x54bf7c) {
      console[_0x47ef6d(0x278)](_0x47ef6d(0x225), _0x54bf7c[_0x47ef6d(0x4f5)]),
        _0x54bf7c[_0x47ef6d(0x4f5)][_0x47ef6d(0x231)]("CORS") ||
        _0x54bf7c[_0x47ef6d(0x4f5)][_0x47ef6d(0x231)](_0x47ef6d(0x267))
          ? (_0x5027fa["push"](_0x47ef6d(0x1f8)),
            console[_0x47ef6d(0x1c4)](_0x47ef6d(0x23e)))
          : _0x5027fa["push"](
              "códigos\x20de\x20barras\x20❌\x20(timeout/error)"
            );
    }
  try {
    const _0x2e1e7e =
      CONFIG_ENDPOINTS[_0x47ef6d(0x493)] + _0x47ef6d(0x2bd) + _0x5585ad;
    console["log"](_0x47ef6d(0x4a7));
    const _0x429890 = await fetch(_0x2e1e7e, { cache: _0x47ef6d(0x1f4) });
    if (_0x429890["ok"]) {
      const _0x1b14e1 = await _0x429890[_0x47ef6d(0x1a6)](),
        _0x340af9 = Array[_0x47ef6d(0x3ca)](_0x1b14e1) ? _0x1b14e1 : [];
      _0x4d1c0d[_0x47ef6d(0x527)] === 0x0 &&
        _0x340af9[_0x47ef6d(0x527)] > 0x0 &&
        (_0x4d1c0d = _0x340af9),
        _0x5027fa[_0x47ef6d(0x347)]("básico\x20✅"),
        console[_0x47ef6d(0x1c4)](
          _0x47ef6d(0x26a),
          _0x340af9[_0x47ef6d(0x527)],
          _0x47ef6d(0x32e)
        );
    } else _0x5027fa[_0x47ef6d(0x347)](_0x47ef6d(0x261));
  } catch (_0x3013c2) {
    console[_0x47ef6d(0x278)](_0x47ef6d(0x1fc), _0x3013c2["message"]),
      _0x5027fa[_0x47ef6d(0x347)]("básico\x20❌\x20(error)");
  }
  if (_0x4d1c0d[_0x47ef6d(0x527)] === 0x0) throw new Error(_0x47ef6d(0x23d));
  return (
    await clearProductos(),
    await saveProductos(_0x4d1c0d),
    localStorage[_0x47ef6d(0x2e9)](_0x47ef6d(0x4e4), String(_0x5585ad)),
    console[_0x47ef6d(0x1c4)](
      _0x47ef6d(0x3be),
      _0x5027fa[_0x47ef6d(0x3ea)](",\x20")
    ),
    {
      productos: _0x4d1c0d[_0x47ef6d(0x527)],
      endpoints: _0x5027fa,
      detalles: _0x5027fa[_0x47ef6d(0x527)] + "\x20endpoints\x20consultados",
    }
  );
}
async function cargarPromocionesRapido() {
  const _0x573848 = _0x51ede5;
  console["log"](_0x573848(0x30a));
  const _0x51958c = await fetch(CONFIG_ENDPOINTS[_0x573848(0x4d1)], {
    cache: _0x573848(0x1f4),
    headers: { Accept: _0x573848(0x2b9), "Content-Type": _0x573848(0x2b9) },
  });
  if (!_0x51958c["ok"])
    throw new Error(_0x573848(0x2de) + _0x51958c[_0x573848(0x39a)]);
  const _0x17a67e = await _0x51958c["json"]();
  if (
    _0x17a67e[_0x573848(0x24a)] &&
    _0x17a67e[_0x573848(0x4a4)] &&
    _0x17a67e[_0x573848(0x4a4)][_0x573848(0x4d1)]
  ) {
    const _0x2e1d80 = _0x17a67e[_0x573848(0x4a4)]["promociones"];
    console[_0x573848(0x1c4)](
      _0x573848(0x3f3) + _0x2e1d80[_0x573848(0x527)] + _0x573848(0x473)
    );
    try {
      await clearPromociones(), await savePromociones(_0x2e1d80);
      const _0x495175 = Date[_0x573848(0x26b)]();
      localStorage[_0x573848(0x2e9)](_0x573848(0x212), String(_0x495175)),
        console[_0x573848(0x1c4)](_0x573848(0x48d));
    } catch (_0x99049b) {
      console["error"](_0x573848(0x20e), _0x99049b);
    }
    return { promociones: _0x2e1d80["length"], detalles: "promociones\x20✅" };
  } else throw new Error(_0x573848(0x340));
}
btnActualizar[_0x51ede5(0x537)](_0x51ede5(0x516), actualizarTodosLosDatos),
  renderUltimaActualizacion(),
  setInterval(renderUltimaActualizacion, 0xea60),
  openDB()[_0x51ede5(0x240)](async (_0x55a39f) => {
    const _0x25959d = _0x51ede5,
      _0x5d9dc1 = _0x55a39f[_0x25959d(0x3b3)](DB_STORE, _0x25959d(0x246)),
      _0x5c53e3 = _0x5d9dc1[_0x25959d(0x293)](DB_STORE),
      _0xfb5f9b = _0x5c53e3["count"](),
      _0x2bde05 = _0x55a39f[_0x25959d(0x3b3)](
        DB_STORE_PROMOCIONES,
        _0x25959d(0x246)
      ),
      _0x18802f = _0x2bde05["objectStore"](DB_STORE_PROMOCIONES),
      _0x4e9e7e = _0x18802f[_0x25959d(0x51a)]();
    Promise[_0x25959d(0x43a)]([
      new Promise((_0xab3f20) => {
        const _0x41a810 = _0x25959d;
        _0xfb5f9b[_0x41a810(0x27b)] = () => _0xab3f20(_0xfb5f9b["result"]);
      }),
      new Promise((_0x1ae168) => {
        const _0x1ef3bc = _0x25959d;
        _0x4e9e7e[_0x1ef3bc(0x27b)] = () =>
          _0x1ae168(_0x4e9e7e[_0x1ef3bc(0x431)]);
      }),
    ])
      ["then"](([_0x597321, _0xcdb0af]) => {
        const _0x2705ea = _0x25959d,
          _0x2d5ae6 = _0x597321 > 0x0,
          _0x4d8876 = _0xcdb0af > 0x0;
        if (!_0x2d5ae6 && !_0x4d8876)
          console[_0x2705ea(0x1c4)](_0x2705ea(0x4c8)),
            cargarProductosRapido()[_0x2705ea(0x306)]((_0x3f16a3) =>
              console[_0x2705ea(0x39b)](
                "Error\x20inicial\x20cargando\x20productos:",
                _0x3f16a3
              )
            );
        else
          !_0x2d5ae6
            ? (console[_0x2705ea(0x1c4)](_0x2705ea(0x2d9)),
              cargarProductosRapido()[_0x2705ea(0x306)]((_0x1c62ad) =>
                console["error"](_0x2705ea(0x255), _0x1c62ad)
              ))
            : console["log"](
                _0x2705ea(0x4b3),
                _0x597321,
                _0x2705ea(0x33a),
                _0xcdb0af
              );
        datosYaCargados = !![];
      })
      [_0x25959d(0x306)]((_0x2db222) => {
        const _0x3ab17f = _0x25959d;
        console[_0x3ab17f(0x39b)](_0x3ab17f(0x3bc), _0x2db222);
        try {
          cargarProductosRapido()[_0x3ab17f(0x306)]((_0x18bba1) =>
            console[_0x3ab17f(0x39b)](_0x3ab17f(0x42e), _0x18bba1)
          );
        } catch (_0x42e879) {}
        datosYaCargados = !![];
      });
  });
let historial = [];
const historialCookie = getCookie(_0x51ede5(0x19e));
if (historialCookie)
  try {
    historial = JSON[_0x51ede5(0x196)](historialCookie);
  } catch (_0x341479) {
    historial = [];
  }
function renderClearButton() {
  return "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20";
}
function renderHistorial() {
  const _0x3ad4f7 = _0x51ede5;
  (historialDiv["innerHTML"] =
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    (historial["length"] > 0x0 ? renderClearButton() : "") +
    _0x3ad4f7(0x291) +
    (historial[_0x3ad4f7(0x527)] === 0x0
      ? _0x3ad4f7(0x385)
      : _0x3ad4f7(0x315) +
        historial["map"]((_0xf35810) => {
          const _0x1fea46 = _0x3ad4f7,
            _0x45409f =
              _0xf35810[_0x1fea46(0x344)] ||
              _0xf35810[_0x1fea46(0x4aa)] ||
              _0x1fea46(0x3bb),
            _0xa4da74 =
              _0xf35810[_0x1fea46(0x28c)] ||
              _0xf35810["pr_gtin"] ||
              _0xf35810[_0x1fea46(0x29d)] ||
              _0xf35810["SKU"] ||
              "SKU\x20desconocido",
            _0x4ce297 =
              _0xf35810[_0x1fea46(0x419)] ||
              _0xf35810["L1"] ||
              _0xf35810[_0x1fea46(0x288)] ||
              0x0,
            _0x4c1a74 = Math[_0x1fea46(0x481)](_0x4ce297 * 1.16 * 0x64) / 0x64,
            _0xdc75be = _0xf35810[_0x1fea46(0x241)]
              ? new Date(_0xf35810[_0x1fea46(0x241)])[_0x1fea46(0x44a)]()
              : _0x1fea46(0x4f2);
          return (
            _0x1fea46(0x1d2) +
            _0x45409f +
            _0x1fea46(0x21e) +
            _0x45409f +
            "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20<strong\x20class=\x22ms-1\x22>" +
            _0xa4da74 +
            _0x1fea46(0x46b) +
            _0xa4da74 +
            _0x1fea46(0x4da) +
            _0x4c1a74[_0x1fea46(0x482)](0x2) +
            _0x1fea46(0x41e) +
            _0xdc75be +
            _0x1fea46(0x498) +
            _0xa4da74 +
            _0x1fea46(0x3e7)
          );
        })["join"]("") +
        _0x3ad4f7(0x2bf)) +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20"),
    setCookie(_0x3ad4f7(0x19e), JSON[_0x3ad4f7(0x408)](historial), 0x1e);
  const _0x299a51 = document[_0x3ad4f7(0x50b)](_0x3ad4f7(0x354));
  _0x299a51 &&
    _0x299a51[_0x3ad4f7(0x537)](_0x3ad4f7(0x516), () => {
      const _0x5a819f = _0x3ad4f7;
      (historial = []),
        setCookie(_0x5a819f(0x19e), JSON["stringify"](historial), 0x1e),
        renderHistorial();
    });
  const _0x18a17f = historialDiv["querySelectorAll"](_0x3ad4f7(0x4c2));
  _0x18a17f[_0x3ad4f7(0x24f)]((_0x37c1c7) => {
    _0x37c1c7["addEventListener"]("click", function (_0x88762e) {
      const _0x3a185b = _0x1c9f,
        _0x2e1d5f = _0x37c1c7[_0x3a185b(0x3d7)](_0x3a185b(0x397));
      navigator[_0x3a185b(0x2fa)] &&
        navigator[_0x3a185b(0x2fa)]
          ["writeText"](_0x2e1d5f)
          [_0x3a185b(0x240)](() => {
            const _0x852408 = _0x3a185b;
            (_0x37c1c7[_0x852408(0x270)] = _0x852408(0x4d2)),
              setTimeout(() => {
                const _0x3fdbc4 = _0x852408;
                _0x37c1c7[_0x3fdbc4(0x270)] = _0x3fdbc4(0x3f5);
              }, 0x4b0);
          });
    });
  });
  const _0x1abdd2 = historialDiv[_0x3ad4f7(0x401)](_0x3ad4f7(0x380));
  _0x1abdd2[_0x3ad4f7(0x24f)]((_0x39351f) => {
    const _0xe7bf82 = _0x3ad4f7;
    _0x39351f[_0xe7bf82(0x537)](_0xe7bf82(0x516), function (_0x325a8e) {
      const _0x7e9a8b = _0xe7bf82,
        _0x4a9d29 = _0x39351f[_0x7e9a8b(0x3d7)]("data-sku");
      consultarProductoDesdeHistorial(_0x4a9d29);
    });
  });
}
inputCodigo[_0x51ede5(0x537)](_0x51ede5(0x4cd), function (_0x43cb35) {
  const _0x2a9943 = _0x51ede5;
  _0x43cb35["key"] === _0x2a9943(0x264) &&
    (_0x43cb35[_0x2a9943(0x52b)](),
    form["requestSubmit"](),
    setTimeout(() => {
      const _0x36142e = _0x2a9943,
        _0x2430b1 = document[_0x36142e(0x50b)]("resultado");
      _0x2430b1 &&
        _0x2430b1[_0x36142e(0x533)]({
          behavior: _0x36142e(0x4be),
          block: _0x36142e(0x40e),
          inline: "nearest",
        });
    }, 0x12c));
}),
  form["addEventListener"](_0x51ede5(0x26c), async (_0x333757) => {
    const _0x5b9793 = _0x51ede5;
    _0x333757["preventDefault"](), hideMobileKeyboard();
    let _0x563f6c = inputCodigo["value"]
      [_0x5b9793(0x45b)]()
      [_0x5b9793(0x346)](/\s+$/, "");
    const _0x3d41a2 = _0x563f6c[_0x5b9793(0x359)]();
    (inputCodigo[_0x5b9793(0x29f)] = _0x563f6c),
      (resultadoDiv[_0x5b9793(0x270)] = ""),
      setTimeout(() => {
        const _0x58e361 = _0x5b9793,
          _0x467d66 = document["getElementById"](_0x58e361(0x263));
        _0x467d66 &&
          _0x467d66[_0x58e361(0x533)]({
            behavior: "smooth",
            block: _0x58e361(0x40e),
            inline: "nearest",
          });
      }, 0x64),
      (sugerenciasDiv[_0x5b9793(0x270)] = ""),
      (sugerenciasDiv[_0x5b9793(0x503)][_0x5b9793(0x277)] = _0x5b9793(0x31e));
    if (!_0x563f6c) {
      (resultadoDiv[_0x5b9793(0x270)] = _0x5b9793(0x1a4)),
        renderHistorial(),
        inputCodigo[_0x5b9793(0x273)]();
      return;
    }
    (inputCodigo[_0x5b9793(0x3b1)] = ""),
      (resultadoDiv[_0x5b9793(0x270)] = _0x5b9793(0x256)),
      (inputCodigo[_0x5b9793(0x29f)] = "");
    try {
      inputCodigo[_0x5b9793(0x3b0)]();
    } catch (_0x5cc1f7) {}
    let _0x2db93d = await getAllProductos(),
      _0x2c36db = _0x2db93d["find"]((_0x44c377) => {
        const _0x28554f = _0x5b9793,
          _0x37b142 = (
            _0x44c377[_0x28554f(0x28c)] != null
              ? String(_0x44c377[_0x28554f(0x28c)])
              : ""
          )[_0x28554f(0x359)](),
          _0x765ce = (
            _0x44c377["pr_gtin"] != null
              ? String(_0x44c377[_0x28554f(0x204)])
              : ""
          )[_0x28554f(0x359)]();
        if (_0x37b142 === _0x3d41a2 || _0x765ce === _0x3d41a2) return !![];
        if (
          _0x44c377[_0x28554f(0x52c)] &&
          Array[_0x28554f(0x3ca)](_0x44c377[_0x28554f(0x52c)])
        )
          return _0x44c377[_0x28554f(0x52c)]["some"](
            (_0x542d29) => String(_0x542d29)[_0x28554f(0x359)]() === _0x3d41a2
          );
        return ![];
      });
    if (_0x2c36db) {
      mostrarDetalleProducto(_0x2c36db);
      const _0x409af6 = {
        ..._0x2c36db,
        FECHA_ESCANEO: new Date()["toISOString"](),
      };
      historial[_0x5b9793(0x50f)](_0x409af6),
        setCookie(_0x5b9793(0x19e), JSON[_0x5b9793(0x408)](historial), 0x1e),
        (inputCodigo[_0x5b9793(0x29f)] = "");
      if (!isMobileDevice())
        try {
          inputCodigo[_0x5b9793(0x273)]();
        } catch (_0x18d9d1) {}
      _0x2c36db[_0x5b9793(0x52c)] &&
        _0x2c36db[_0x5b9793(0x52c)][_0x5b9793(0x527)] > 0x1 &&
        console[_0x5b9793(0x1c4)](_0x5b9793(0x412), {
          sku: _0x2c36db[_0x5b9793(0x28c)],
          gtin_principal: _0x2c36db[_0x5b9793(0x204)],
          codigo_buscado: _0x563f6c,
          todos_los_codigos: _0x2c36db[_0x5b9793(0x52c)],
        });
    } else {
      let _0x430eb2 = _0x2db93d["filter"]((_0x191d43) => {
        const _0x1f0db4 = _0x5b9793,
          _0x1a0440 = (_0x191d43[_0x1f0db4(0x344)] || "")[_0x1f0db4(0x359)](),
          _0x243817 = (
            _0x191d43[_0x1f0db4(0x28c)] != null
              ? String(_0x191d43[_0x1f0db4(0x28c)])
              : ""
          )[_0x1f0db4(0x359)](),
          _0x106a44 = (
            _0x191d43[_0x1f0db4(0x204)] != null
              ? String(_0x191d43[_0x1f0db4(0x204)])
              : ""
          )[_0x1f0db4(0x359)]();
        return (
          _0x1a0440[_0x1f0db4(0x231)](_0x3d41a2) ||
          _0x243817[_0x1f0db4(0x231)](_0x3d41a2) ||
          _0x106a44[_0x1f0db4(0x231)](_0x3d41a2)
        );
      });
      _0x430eb2[_0x5b9793(0x527)] > 0x0
        ? mostrarModalResultadosBusqueda(_0x430eb2, _0x563f6c)
        : ((resultadoDiv[_0x5b9793(0x270)] =
            _0x5b9793(0x4b5) + _0x563f6c + _0x5b9793(0x26f)),
          (inputCodigo["value"] = ""),
          inputCodigo[_0x5b9793(0x273)](),
          setTimeout(() => {
            const _0x45e9d4 = _0x5b9793;
            resultadoDiv[_0x45e9d4(0x270)] = "";
          }, 0x1388),
          console[_0x5b9793(0x1c4)](
            "❌\x20Código\x20no\x20encontrado:\x20\x22" + _0x563f6c + "\x22"
          ));
    }
    renderHistorial();
  });
async function detectarPromocionReal(_0x4fb1b1) {
  const _0x155da5 = _0x51ede5,
    _0x30aea8 = (_0x4fb1b1["pr_sku"] || "")["toString"]();
  try {
    const _0x2c84ec = await getAllPromociones();
    console[_0x155da5(0x1c4)](_0x155da5(0x248), _0x2c84ec[_0x155da5(0x527)]),
      console[_0x155da5(0x1c4)](_0x155da5(0x4ca), _0x30aea8);
    const _0xffc5bb = [];
    for (const _0x528528 of _0x2c84ec) {
      let _0x59293c = [];
      if (
        _0x528528[_0x155da5(0x2c4)] &&
        Array["isArray"](_0x528528[_0x155da5(0x2c4)])
      )
        _0x59293c = _0x528528["skus"];
      else
        _0x528528[_0x155da5(0x333)] &&
          _0x528528[_0x155da5(0x333)][_0x155da5(0x28c)] &&
          (Array["isArray"](_0x528528[_0x155da5(0x333)]["pr_sku"])
            ? (_0x59293c = _0x528528[_0x155da5(0x333)][_0x155da5(0x28c)])
            : (_0x59293c = _0x528528[_0x155da5(0x333)]["pr_sku"]
                [_0x155da5(0x1a9)]("\x20")
                ["filter"]((_0x57618a) => _0x57618a[_0x155da5(0x45b)]())));
      if (_0x59293c[_0x155da5(0x231)](_0x30aea8)) {
        const _0x2b1496 =
            _0x528528[_0x155da5(0x501)] ||
            _0x528528[_0x155da5(0x48e)] ||
            _0x528528[_0x155da5(0x21a)] ||
            _0x155da5(0x51d),
          _0x1856de =
            _0x528528[_0x155da5(0x443)] ||
            _0x528528["cantidad"] ||
            _0x528528[_0x155da5(0x2f3)] ||
            "",
          _0x19a918 =
            _0x528528[_0x155da5(0x323)] ||
            _0x528528["precio"] ||
            _0x528528[_0x155da5(0x3c0)] ||
            _0x528528["precioTotal"] ||
            _0x528528[_0x155da5(0x2a8)] ||
            _0x528528[_0x155da5(0x1ff)] ||
            _0x528528[_0x155da5(0x49e)] ||
            _0x528528[_0x155da5(0x51b)] ||
            "";
        console["log"](_0x155da5(0x1dd) + _0x30aea8 + ":", {
          nombre: _0x2b1496,
          cantidad: _0x1856de,
          precio: _0x19a918,
          campos_precio_disponibles: {
            pro_precioPromo: _0x528528[_0x155da5(0x323)],
            precio: _0x528528["precio"],
            price: _0x528528[_0x155da5(0x3c0)],
            precioTotal: _0x528528[_0x155da5(0x298)],
            precio_total: _0x528528["precio_total"],
            pro_precio_total: _0x528528[_0x155da5(0x1ff)],
            total_price: _0x528528[_0x155da5(0x49e)],
            valor_total: _0x528528[_0x155da5(0x51b)],
          },
          campos_disponibles: Object[_0x155da5(0x50a)](_0x528528),
          promo_completa: _0x528528,
        }),
          _0xffc5bb["push"]({
            tipo: "promoción\x20oficial",
            detalle: "🔥\x20" + _0x2b1496,
            nombre_promocion: _0x2b1496,
            es_oficial: !![],
            fuente: "indexeddb_local",
            id_promocion: _0x528528[_0x155da5(0x1b2)] || _0x528528["id"],
            cantidad: _0x1856de,
            precio: _0x19a918,
            mensaje:
              _0x528528[_0x155da5(0x3bf)] || _0x528528[_0x155da5(0x22a)] || "",
            tipo_promo:
              _0x528528[_0x155da5(0x51c)] || _0x528528[_0x155da5(0x25b)] || "",
            vigencia:
              _0x528528[_0x155da5(0x24d)] && _0x528528[_0x155da5(0x4ed)]
                ? _0x528528[_0x155da5(0x24d)] +
                  _0x155da5(0x23a) +
                  _0x528528[_0x155da5(0x4ed)]
                : "",
            raw_data: {
              pro_cantidad_base: _0x528528[_0x155da5(0x443)],
              pro_precioPromo: _0x528528[_0x155da5(0x323)],
              pro_nombrePromo: _0x528528[_0x155da5(0x501)],
              todos_campos_precio: {
                pro_precioPromo: _0x528528[_0x155da5(0x323)],
                precio: _0x528528[_0x155da5(0x318)],
                price: _0x528528[_0x155da5(0x3c0)],
                precioTotal: _0x528528[_0x155da5(0x298)],
                precio_total: _0x528528[_0x155da5(0x2a8)],
                pro_precio_total: _0x528528[_0x155da5(0x1ff)],
                total_price: _0x528528[_0x155da5(0x49e)],
                valor_total: _0x528528[_0x155da5(0x51b)],
              },
            },
          });
      }
    }
    return (
      _0xffc5bb[_0x155da5(0x527)] === 0x0
        ? console[_0x155da5(0x1c4)](
            "❌\x20No\x20hay\x20promociones\x20para\x20SKU:\x20" + _0x30aea8
          )
        : console[_0x155da5(0x1c4)](
            "✅\x20" +
              _0xffc5bb[_0x155da5(0x527)] +
              _0x155da5(0x21d) +
              _0x30aea8
          ),
      _0xffc5bb
    );
  } catch (_0x4e2b4a) {
    return console[_0x155da5(0x39b)](_0x155da5(0x2f4), _0x4e2b4a), [];
  }
}
function mostrarDetalleProducto(_0x14fbdf) {
  const _0x3c5a2a = _0x51ede5;
  hideMobileKeyboard();
  let _0x23efd0 = "";
  if (
    _0x14fbdf["pr_imagen"] &&
    _0x14fbdf[_0x3c5a2a(0x1c1)][_0x3c5a2a(0x45b)]() !== ""
  ) {
    if (_0x14fbdf["pr_imagen"]["startsWith"]("http"))
      _0x23efd0 = _0x14fbdf[_0x3c5a2a(0x1c1)];
    else {
      let _0x4e36a7 = _0x14fbdf[_0x3c5a2a(0x1c1)][_0x3c5a2a(0x299)]("/")
        ? _0x14fbdf[_0x3c5a2a(0x1c1)]
        : "/" + _0x14fbdf[_0x3c5a2a(0x1c1)];
      _0x23efd0 = _0x3c5a2a(0x521) + _0x4e36a7;
    }
  }
  let _0x122e09 =
      Number(_0x14fbdf[_0x3c5a2a(0x419)]) || Number(_0x14fbdf["L1"]) || 0x0,
    _0x990b91 = Math["round"](_0x122e09 * 1.16 * 0x64) / 0x64,
    _0x8a1e = 0xc,
    _0x2348aa = 0.1,
    _0x4e6117 =
      Math[_0x3c5a2a(0x481)](_0x990b91 * (0x1 + _0x2348aa) * 0x64) / 0x64,
    _0x4690ac = "";
  if (
    _0x14fbdf[_0x3c5a2a(0x52c)] &&
    _0x14fbdf[_0x3c5a2a(0x52c)][_0x3c5a2a(0x527)] > 0x1
  ) {
    const _0x176d52 = [...new Set(_0x14fbdf[_0x3c5a2a(0x52c)])][
      _0x3c5a2a(0x1ba)
    ]((_0x280088) => _0x280088 && _0x280088[_0x3c5a2a(0x45b)]());
    _0x176d52[_0x3c5a2a(0x527)] > 0x1 &&
      (_0x4690ac =
        _0x3c5a2a(0x3a1) + _0x176d52["join"](",\x20") + _0x3c5a2a(0x4c0));
  }
  renderProductoConPromociones(
    _0x14fbdf,
    _0x23efd0,
    _0x990b91,
    _0x4e6117,
    _0x4690ac
  ),
    setTimeout(() => {
      generarCodigoBarras(_0x14fbdf);
    }, 0x64),
    detectarPromocionReal(_0x14fbdf)
      [_0x3c5a2a(0x240)]((_0x46f524) => {
        actualizarPromocionesEnVista(
          _0x14fbdf,
          _0x23efd0,
          _0x990b91,
          _0x4e6117,
          _0x4690ac,
          _0x46f524
        );
      })
      [_0x3c5a2a(0x306)]((_0x5f1d51) => {
        const _0x397022 = _0x3c5a2a;
        console[_0x397022(0x39b)](_0x397022(0x2f1), _0x5f1d51),
          actualizarPromocionesEnVista(
            _0x14fbdf,
            _0x23efd0,
            _0x990b91,
            _0x4e6117,
            _0x4690ac,
            []
          );
      });
}
function generarCodigoBarras(_0x25523b) {
  const _0x333e78 = _0x51ede5,
    _0x6b971b =
      _0x25523b[_0x333e78(0x28c)] || _0x25523b[_0x333e78(0x204)] || "",
    _0x25ee38 = _0x333e78(0x1aa) + _0x25523b[_0x333e78(0x28c)],
    _0x471745 = document["getElementById"](_0x25ee38);
  if (!_0x471745 || !_0x6b971b) {
    console[_0x333e78(0x278)](
      "No\x20se\x20puede\x20generar\x20código\x20de\x20barras:\x20canvas\x20o\x20código\x20faltante"
    );
    return;
  }
  const _0x43e4bb = () => {
    const _0x44658c = _0x333e78;
    if (window[_0x44658c(0x4a9)])
      try {
        let _0x1ebd28 = _0x44658c(0x3d1);
        const _0xce8891 = String(_0x6b971b);
        if (
          _0xce8891[_0x44658c(0x527)] === 0xd &&
          /^\d+$/[_0x44658c(0x325)](_0xce8891)
        )
          _0x1ebd28 = _0x44658c(0x2f6);
        else {
          if (
            _0xce8891[_0x44658c(0x527)] === 0x8 &&
            /^\d+$/[_0x44658c(0x325)](_0xce8891)
          )
            _0x1ebd28 = _0x44658c(0x1e3);
          else
            _0xce8891["length"] === 0xc &&
              /^\d+$/["test"](_0xce8891) &&
              (_0x1ebd28 = _0x44658c(0x262));
        }
        console["log"](
          _0x44658c(0x2ae) + _0x1ebd28 + _0x44658c(0x4d7) + _0xce8891
        ),
          JsBarcode(_0x471745, _0xce8891, {
            format: _0x1ebd28,
            width: 0x2,
            height: 0x32,
            displayValue: ![],
            margin: 0x0,
            background: "#ffffff",
            lineColor: _0x44658c(0x357),
          }),
          window[_0x44658c(0x40b)] <= 0x300 &&
            JsBarcode(_0x471745, _0xce8891, {
              format: _0x1ebd28,
              width: 1.5,
              height: 0x28,
              displayValue: ![],
              margin: 0x0,
              background: _0x44658c(0x3ae),
              lineColor: "#000000",
            });
      } catch (_0x12e976) {
        console[_0x44658c(0x39b)](_0x44658c(0x1b0), _0x12e976);
        const _0x42a393 = _0x471745[_0x44658c(0x4c3)]("2d");
        (_0x42a393[_0x44658c(0x45d)] = _0x44658c(0x1b5)),
          _0x42a393[_0x44658c(0x447)](
            0x0,
            0x0,
            _0x471745[_0x44658c(0x24b)],
            _0x471745[_0x44658c(0x429)]
          ),
          (_0x42a393[_0x44658c(0x45d)] = _0x44658c(0x28d)),
          (_0x42a393[_0x44658c(0x294)] = "12px\x20Arial"),
          (_0x42a393[_0x44658c(0x515)] = _0x44658c(0x29c)),
          _0x42a393[_0x44658c(0x3af)](
            "Código\x20no\x20válido",
            _0x471745[_0x44658c(0x24b)] / 0x2,
            _0x471745[_0x44658c(0x429)] / 0x2
          );
      }
    else setTimeout(_0x43e4bb, 0x64);
  };
  _0x43e4bb();
}
function renderProductoConPromociones(
  _0x31f176,
  _0x4c78e4,
  _0x9fbafb,
  _0x46a394,
  _0x52f4bc
) {
  const _0x3afed7 = _0x51ede5;
  resultadoDiv[_0x3afed7(0x270)] =
    _0x3afed7(0x2af) +
    (_0x4c78e4
      ? _0x3afed7(0x494) +
        _0x4c78e4 +
        _0x3afed7(0x3d5) +
        _0x31f176[_0x3afed7(0x344)] +
        _0x3afed7(0x433)
      : "") +
    _0x3afed7(0x470) +
    _0x31f176["pr_name"] +
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-center\x20align-items-center\x20gap-3\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-danger\x20precio-responsive\x22>$\x20" +
    _0x9fbafb[_0x3afed7(0x482)](0x2) +
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>CONTADO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20mx-2\x22\x20style=\x22font-size:1.5rem;\x22>|</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x20precio-responsive\x22>$\x20" +
    _0x46a394[_0x3afed7(0x482)](0x2) +
    _0x3afed7(0x37c) +
    _0x31f176[_0x3afed7(0x28c)] +
    _0x3afed7(0x2cd) +
    (_0x31f176[_0x3afed7(0x28c)] || _0x31f176[_0x3afed7(0x204)] || "N/A") +
    _0x3afed7(0x428) +
    _0x52f4bc +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22promociones-container\x22\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>🔍\x20Verificando\x20promociones...</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20";
}
function actualizarPromocionesEnVista(
  _0x5104f1,
  _0xc5998a,
  _0x14d90d,
  _0x5a02eb,
  _0x1465db,
  _0x2d3728
) {
  const _0x409646 = _0x51ede5;
  console[_0x409646(0x1c4)](_0x409646(0x39e), _0x2d3728);
  let _0x2d067d = "";
  if (_0x2d3728["length"] > 0x0) {
    const _0x16a4e6 = _0x2d3728[_0x409646(0x1ba)](
      (_0x25bbe1) =>
        _0x25bbe1[_0x409646(0x345)] &&
        (_0x25bbe1[_0x409646(0x22b)] === _0x409646(0x200) ||
          _0x25bbe1["fuente"] === _0x409646(0x3cf))
    );
    console["log"]("🏷️\x20Promociones\x20oficiales\x20filtradas:", _0x16a4e6);
    if (_0x16a4e6[_0x409646(0x527)] > 0x0) {
      const _0x566cb1 = _0x16a4e6[_0x409646(0x1c2)]((_0x382c07) => {
        const _0x1f39fc = _0x409646;
        console["log"](_0x1f39fc(0x459), _0x382c07);
        const _0x5d5101 =
          _0x382c07[_0x1f39fc(0x1d1)] || _0x382c07[_0x1f39fc(0x443)] || "";
        let _0x23c255 =
          _0x382c07[_0x1f39fc(0x318)] || _0x382c07[_0x1f39fc(0x323)] || "";
        const _0xaecfeb =
          _0x382c07[_0x1f39fc(0x1dc)] || _0x382c07["pro_nombrePromo"] || "";
        console["log"](
          "📊\x20Datos\x20extraídos\x20antes\x20de\x20procesamiento:",
          { cantidad: _0x5d5101, precio: _0x23c255, nombrePromo: _0xaecfeb }
        );
        if (_0x5d5101 && _0x23c255) {
          const _0x53f981 = parseInt(_0x5d5101),
            _0x206dc9 = parseFloat(_0x23c255);
          if (!isNaN(_0x53f981) && !isNaN(_0x206dc9)) {
            const _0x14ccd1 = _0x53f981 * _0x206dc9,
              _0x5f4fba = Math[_0x1f39fc(0x481)](_0x14ccd1);
            console[_0x1f39fc(0x1c4)](
              _0x1f39fc(0x39c) +
                _0x53f981 +
                "\x20x\x20" +
                _0x206dc9 +
                "\x20=\x20" +
                _0x14ccd1 +
                _0x1f39fc(0x1cc) +
                _0x5f4fba +
                "\x20(redondeado)"
            ),
              (_0x23c255 = _0x5f4fba["toString"]());
          }
        }
        console[_0x1f39fc(0x1c4)](
          "📊\x20Datos\x20finales\x20para\x20construcción:",
          { cantidad: _0x5d5101, precio: _0x23c255, nombrePromo: _0xaecfeb }
        );
        let _0x25a6ec = "";
        if (_0x5d5101 && _0x23c255)
          (_0x25a6ec = _0x5d5101 + "x" + _0x23c255),
            console[_0x1f39fc(0x1c4)](
              "✅\x20Usando\x20cantidad\x20y\x20precio\x20calculado:",
              _0x25a6ec
            );
        else {
          if (_0xaecfeb) {
            const _0x4a0725 = _0xaecfeb["match"](/(\d+)\s*[xX×]\s*(\d+)/i),
              _0x5eaa2a = _0xaecfeb["match"](/(\d+)\s*[xX×]\s*\$?\s*(\d+)/i),
              _0x36dd42 = _0xaecfeb[_0x1f39fc(0x342)](/(\d+)\s*[xX×]/i);
            if (_0x4a0725)
              (_0x25a6ec = _0x4a0725[0x1] + "x" + _0x4a0725[0x2]),
                console[_0x1f39fc(0x1c4)](_0x1f39fc(0x1ef), _0x25a6ec);
            else {
              if (_0x5eaa2a)
                (_0x25a6ec = _0x5eaa2a[0x1] + "x" + _0x5eaa2a[0x2]),
                  console["log"](_0x1f39fc(0x2ad), _0x25a6ec);
              else
                _0x36dd42
                  ? ((_0x25a6ec = _0x36dd42[0x1] + "x"),
                    console[_0x1f39fc(0x1c4)](
                      "⚠️\x20Solo\x20cantidad\x20extraída:",
                      _0x25a6ec
                    ))
                  : ((_0x25a6ec = _0xaecfeb),
                    console[_0x1f39fc(0x1c4)](
                      "⚠️\x20Usando\x20nombre\x20completo:",
                      _0x25a6ec
                    ));
            }
          } else
            (_0x25a6ec = "PROMO"), console[_0x1f39fc(0x1c4)](_0x1f39fc(0x1bb));
        }
        return (
          "<span\x20class=\x22badge\x20bg-success\x20text-white\x20me-2\x20mb-1\x22\x20style=\x22font-size:0.85rem;\x22>🔥\x20" +
          _0x25a6ec +
          _0x1f39fc(0x37b)
        );
      })[_0x409646(0x3ea)]("");
      _0x2d067d =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:#495057;\x22>🏷️\x20PROMOCIONES\x20ACTIVAS</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x566cb1 +
        _0x409646(0x48a);
    } else _0x2d067d = _0x409646(0x34f);
  } else
    _0x2d067d =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20";
  const _0x1c2b77 = document[_0x409646(0x50b)](_0x409646(0x519));
  _0x1c2b77 && (_0x1c2b77[_0x409646(0x270)] = _0x2d067d);
}
async function mostrarModalPromocionesGenerales() {
  const _0x21d41b = _0x51ede5,
    _0x58634c =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
        _0x21d41b(0x325)
      ](navigator[_0x21d41b(0x3e8)]),
    _0x4b085f = /iPad|iPhone|iPod/[_0x21d41b(0x325)](
      navigator[_0x21d41b(0x3e8)]
    );
  if (_0x58634c) hideMobileKeyboard();
  console[_0x21d41b(0x1c4)](_0x21d41b(0x202), _0x58634c),
    console[_0x21d41b(0x1c4)](_0x21d41b(0x2a4), _0x4b085f);
  const _0x56cd49 = document["getElementById"](_0x21d41b(0x3b5)),
    _0x47281e = document[_0x21d41b(0x50b)](_0x21d41b(0x3fd));
  if (!_0x47281e || !_0x56cd49) {
    console["error"](_0x21d41b(0x44e));
    return;
  }
  try {
    const _0xdf239e = () => {
      const _0x28de25 = _0x21d41b,
        _0x2e0300 = document["getElementById"](_0x28de25(0x3c8));
      _0x2e0300 &&
        ((_0x2e0300[_0x28de25(0x3b1)] = _0x28de25(0x34e)),
        bringInputIntoView());
    };
    _0x56cd49[_0x21d41b(0x537)]("hidden.bs.modal", _0xdf239e, { once: !![] });
  } catch (_0x59a6ed) {}
  try {
    const _0x4e8af2 = document[_0x21d41b(0x50b)](_0x21d41b(0x3c8));
    _0x4e8af2 &&
      ((_0x4e8af2[_0x21d41b(0x29f)] = ""),
      (_0x4e8af2["placeholder"] =
        "inserta\x20sku\x20o\x20busca\x20un\x20producto"));
    const _0x52be4f = document[_0x21d41b(0x50b)](_0x21d41b(0x2dc));
    _0x52be4f &&
      ((_0x52be4f[_0x21d41b(0x270)] = ""),
      (_0x52be4f[_0x21d41b(0x503)][_0x21d41b(0x277)] = _0x21d41b(0x31e)));
  } catch (_0x27e272) {}
  try {
    console[_0x21d41b(0x1c4)](
      "🎯\x20Consultando\x20promociones\x20generales..."
    ),
      (_0x47281e["innerHTML"] = _0x21d41b(0x35f));
    const _0x2f7f83 = await getAllProductos();
    let _0x2d1150 = [];
    try {
      _0x2d1150 = await getAllPromociones();
    } catch (_0x2cd16a) {
      _0x2d1150 = [];
    }
    const _0x364733 = ![];
    console[_0x21d41b(0x1c4)](_0x21d41b(0x414), {
      total: _0x2d1150[_0x21d41b(0x527)],
      desdeServidor: _0x364733,
    });
    if (_0x2d1150["length"] === 0x0) {
      _0x47281e[_0x21d41b(0x270)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20locales\x20cargadas.\x20Pulsa\x20“Actualizar”\x20para\x20sincronizar.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
      return;
    }
    let _0x2a3a8b = "<div\x20class=\x22row\x22>";
    _0x2d1150[_0x21d41b(0x24f)]((_0x501be9, _0x1f037a) => {
      const _0x244dd9 = _0x21d41b;
      let _0x357ba3 = [];
      if (
        _0x501be9[_0x244dd9(0x2c4)] &&
        Array[_0x244dd9(0x3ca)](_0x501be9[_0x244dd9(0x2c4)])
      )
        _0x357ba3 = _0x501be9["skus"];
      else
        _0x501be9[_0x244dd9(0x333)] &&
          _0x501be9[_0x244dd9(0x333)][_0x244dd9(0x28c)] &&
          (Array[_0x244dd9(0x3ca)](_0x501be9[_0x244dd9(0x333)]["pr_sku"])
            ? (_0x357ba3 = _0x501be9[_0x244dd9(0x333)][_0x244dd9(0x28c)])
            : (_0x357ba3 = _0x501be9[_0x244dd9(0x333)]["pr_sku"]
                [_0x244dd9(0x1a9)]("\x20")
                [_0x244dd9(0x1ba)]((_0x3671ce) =>
                  _0x3671ce[_0x244dd9(0x45b)]()
                )));
      const _0x78da18 = new Map(
          _0x2f7f83[_0x244dd9(0x1c2)]((_0x3c6420) => [
            String(_0x3c6420[_0x244dd9(0x28c)]),
            _0x3c6420,
          ])
        ),
        _0x1850cc = _0x357ba3[_0x244dd9(0x1c2)]((_0x175c92) =>
          _0x78da18[_0x244dd9(0x226)](String(_0x175c92))
        )[_0x244dd9(0x1ba)](Boolean),
        _0x3efea9 =
          _0x501be9[_0x244dd9(0x501)] ||
          _0x501be9["descripcion"] ||
          _0x244dd9(0x48f) + (_0x1f037a + 0x1),
        _0x24c2db =
          _0x501be9[_0x244dd9(0x51c)] ||
          _0x501be9[_0x244dd9(0x25b)] ||
          _0x244dd9(0x19b),
        _0x38be35 =
          _0x501be9["pro_mensaje"] || _0x501be9[_0x244dd9(0x22a)] || "",
        _0x1818a3 = _0x501be9[_0x244dd9(0x443)] || "",
        _0x90a653 = Number(_0x1818a3) || 0x1;
      let _0x376a08 = 0x0;
      const _0xe8249f = (_0x38be35 + "\x20" + _0x3efea9)[_0x244dd9(0x359)](),
        _0x16ef40 = _0xe8249f[_0x244dd9(0x342)](/(\d+)\s*x\s*(\d+)/);
      if (_0x16ef40) _0x376a08 = Math["round"](Number(_0x16ef40[0x2]));
      else {
        const _0x786004 = Number(_0x501be9[_0x244dd9(0x323)]) || 0x0;
        _0x376a08 = Math[_0x244dd9(0x481)](_0x786004 * _0x90a653);
      }
      _0x2a3a8b +=
        _0x244dd9(0x2ca) +
        _0x3efea9 +
        "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22productos-lista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x1850cc[_0x244dd9(0x527)] > 0x0
          ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            _0x1850cc["slice"](0x0, 0x4)
              [_0x244dd9(0x1c2)]((_0xf53b10) => {
                const _0x2454a6 = _0x244dd9;
                let _0x30781f = "";
                if (
                  _0xf53b10["pr_imagen"] &&
                  _0xf53b10[_0x2454a6(0x1c1)]["trim"]() !== ""
                ) {
                  if (_0xf53b10["pr_imagen"]["startsWith"](_0x2454a6(0x36a)))
                    _0x30781f = _0xf53b10[_0x2454a6(0x1c1)];
                  else {
                    let _0x190e66 = _0xf53b10["pr_imagen"][_0x2454a6(0x299)](
                      "/"
                    )
                      ? _0xf53b10[_0x2454a6(0x1c1)]
                      : "/" + _0xf53b10[_0x2454a6(0x1c1)];
                    _0x30781f = _0x2454a6(0x521) + _0x190e66;
                  }
                }
                const _0x5db08d =
                    Number(_0xf53b10["pr_precio"]) ||
                    Number(_0xf53b10["L1"]) ||
                    0x0,
                  _0xa627a0 =
                    Math[_0x2454a6(0x481)](_0x5db08d * 1.16 * 0x64) / 0x64;
                return (
                  _0x2454a6(0x290) +
                  (_0x30781f
                    ? _0x2454a6(0x211) +
                      _0x30781f +
                      _0x2454a6(0x3d5) +
                      _0xf53b10["pr_name"] +
                      "\x22\x20loading=\x22lazy\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20object-fit:\x20contain;\x20border-radius:\x208px;\x20background:\x20#f8f9fa;\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.style.display=\x27none\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                    : _0x2454a6(0x465)) +
                  _0x2454a6(0x446) +
                  _0xf53b10["pr_name"] +
                  "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$" +
                  _0xa627a0[_0x2454a6(0x482)](0x2) +
                  _0x2454a6(0x4fe) +
                  _0xf53b10[_0x2454a6(0x28c)] +
                  _0x2454a6(0x1e4)
                );
              })
              [_0x244dd9(0x3ea)]("") +
            _0x244dd9(0x4a8) +
            (_0x1850cc[_0x244dd9(0x527)] > 0x4
              ? "<div\x20class=\x22text-center\x20text-muted\x20small\x22>…\x20y\x20" +
                (_0x1850cc[_0x244dd9(0x527)] - 0x4) +
                _0x244dd9(0x45f)
              : "") +
            _0x244dd9(0x436)
          : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-box-seam\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x20mb-0\x22>Productos\x20no\x20disponibles</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20") +
        _0x244dd9(0x390);
    }),
      (_0x2a3a8b += "</div>"),
      (_0x47281e[_0x21d41b(0x270)] = _0x2a3a8b);
    if (_0x58634c || _0x4b085f) {
      console[_0x21d41b(0x1c4)](_0x21d41b(0x4e1)),
        document[_0x21d41b(0x401)](_0x21d41b(0x245))["forEach"]((_0x42885f) =>
          _0x42885f[_0x21d41b(0x36f)]()
        ),
        (_0x56cd49[_0x21d41b(0x503)][_0x21d41b(0x285)] = _0x21d41b(0x410)),
        (_0x56cd49[_0x21d41b(0x503)]["top"] = "0"),
        (_0x56cd49[_0x21d41b(0x503)][_0x21d41b(0x50d)] = "0"),
        (_0x56cd49[_0x21d41b(0x503)][_0x21d41b(0x24b)] = "100%"),
        (_0x56cd49[_0x21d41b(0x503)][_0x21d41b(0x429)] = "100%"),
        (_0x56cd49[_0x21d41b(0x503)]["zIndex"] = "1055"),
        (_0x56cd49[_0x21d41b(0x503)][_0x21d41b(0x1f5)] = "transparent");
      const _0x40b82e = _0x56cd49["querySelector"](_0x21d41b(0x284));
      _0x40b82e &&
        ((_0x40b82e["style"]["width"] = "100%"),
        (_0x40b82e[_0x21d41b(0x503)][_0x21d41b(0x538)] = _0x21d41b(0x2e4)),
        (_0x40b82e[_0x21d41b(0x503)]["height"] = _0x21d41b(0x2e4)),
        (_0x40b82e[_0x21d41b(0x503)][_0x21d41b(0x3ad)] = "0"),
        (_0x40b82e["style"][_0x21d41b(0x277)] = _0x21d41b(0x27f)),
        (_0x40b82e[_0x21d41b(0x503)]["flexDirection"] = "column"));
      const _0x4199ba = _0x56cd49[_0x21d41b(0x1b8)](_0x21d41b(0x4cf));
      _0x4199ba &&
        ((_0x4199ba[_0x21d41b(0x503)]["width"] = _0x21d41b(0x2e4)),
        (_0x4199ba[_0x21d41b(0x503)][_0x21d41b(0x429)] = _0x21d41b(0x2e4)),
        (_0x4199ba[_0x21d41b(0x503)][_0x21d41b(0x427)] = _0x21d41b(0x31e)),
        (_0x4199ba["style"][_0x21d41b(0x460)] = "0"),
        (_0x4199ba["style"]["display"] = _0x21d41b(0x27f)),
        (_0x4199ba[_0x21d41b(0x503)][_0x21d41b(0x376)] = "column"));
      const _0x30b120 = _0x56cd49["querySelector"](_0x21d41b(0x47e));
      _0x30b120 &&
        ((_0x30b120[_0x21d41b(0x503)]["flex"] = "1"),
        (_0x30b120["style"][_0x21d41b(0x4c9)] = _0x21d41b(0x223)),
        (_0x30b120[_0x21d41b(0x503)]["webkitOverflowScrolling"] =
          _0x21d41b(0x320)),
        (_0x30b120[_0x21d41b(0x503)][_0x21d41b(0x282)] = _0x21d41b(0x31e))),
        (_0x56cd49["style"][_0x21d41b(0x277)] = _0x21d41b(0x1bc)),
        _0x56cd49[_0x21d41b(0x274)][_0x21d41b(0x52f)]("show"),
        document[_0x21d41b(0x34d)][_0x21d41b(0x274)][_0x21d41b(0x36f)](
          _0x21d41b(0x309)
        ),
        (document["body"][_0x21d41b(0x503)][_0x21d41b(0x453)] = "");
    } else {
      console[_0x21d41b(0x1c4)](_0x21d41b(0x4a1));
      const _0x501427 = new bootstrap["Modal"](_0x56cd49, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x501427[_0x21d41b(0x2d3)]();
    }
  } catch (_0xba5a65) {
    console["error"](_0x21d41b(0x2f1), _0xba5a65),
      (_0x47281e["innerHTML"] =
        _0x21d41b(0x502) +
        _0xba5a65["message"] +
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
  }
}
function cerrarModalMobile() {
  const _0x281c16 = _0x51ede5;
  console[_0x281c16(0x1c4)](_0x281c16(0x253));
  const _0x47406e = document[_0x281c16(0x50b)](_0x281c16(0x3b5));
  if (_0x47406e) {
    _0x47406e[_0x281c16(0x274)][_0x281c16(0x36f)]("show"),
      (_0x47406e[_0x281c16(0x503)]["display"] = _0x281c16(0x31e)),
      (_0x47406e["style"]["position"] = ""),
      (_0x47406e[_0x281c16(0x503)][_0x281c16(0x31f)] = ""),
      (_0x47406e[_0x281c16(0x503)][_0x281c16(0x50d)] = ""),
      (_0x47406e[_0x281c16(0x503)][_0x281c16(0x24b)] = ""),
      (_0x47406e[_0x281c16(0x503)]["height"] = ""),
      (_0x47406e[_0x281c16(0x503)][_0x281c16(0x2fc)] = ""),
      (_0x47406e[_0x281c16(0x503)][_0x281c16(0x1f5)] = "");
    const _0x1b807d = _0x47406e[_0x281c16(0x1b8)](".modal-dialog");
    _0x1b807d &&
      ((_0x1b807d[_0x281c16(0x503)]["width"] = ""),
      (_0x1b807d[_0x281c16(0x503)][_0x281c16(0x538)] = ""),
      (_0x1b807d[_0x281c16(0x503)]["height"] = ""),
      (_0x1b807d["style"]["margin"] = ""),
      (_0x1b807d[_0x281c16(0x503)]["display"] = ""),
      (_0x1b807d[_0x281c16(0x503)][_0x281c16(0x376)] = ""));
    const _0x5d468c = _0x47406e[_0x281c16(0x1b8)](_0x281c16(0x4cf));
    _0x5d468c &&
      ((_0x5d468c[_0x281c16(0x503)][_0x281c16(0x24b)] = ""),
      (_0x5d468c["style"][_0x281c16(0x429)] = ""),
      (_0x5d468c[_0x281c16(0x503)][_0x281c16(0x427)] = ""),
      (_0x5d468c[_0x281c16(0x503)][_0x281c16(0x460)] = ""),
      (_0x5d468c[_0x281c16(0x503)][_0x281c16(0x277)] = ""),
      (_0x5d468c["style"]["flexDirection"] = ""));
    const _0x566335 = _0x47406e[_0x281c16(0x1b8)](_0x281c16(0x47e));
    _0x566335 &&
      ((_0x566335[_0x281c16(0x503)][_0x281c16(0x27f)] = ""),
      (_0x566335[_0x281c16(0x503)][_0x281c16(0x4c9)] = ""),
      (_0x566335[_0x281c16(0x503)][_0x281c16(0x30c)] = ""),
      (_0x566335[_0x281c16(0x503)][_0x281c16(0x282)] = ""));
  }
  document[_0x281c16(0x34d)][_0x281c16(0x274)]["remove"](_0x281c16(0x309)),
    (document[_0x281c16(0x34d)][_0x281c16(0x503)][_0x281c16(0x453)] = "");
  try {
    const _0x20e3c6 = bootstrap[_0x281c16(0x423)][_0x281c16(0x317)](_0x47406e);
    _0x20e3c6 && _0x20e3c6["hide"]();
  } catch (_0x116f3c) {
    console[_0x281c16(0x1c4)]("Bootstrap\x20modal\x20no\x20activo");
  }
  try {
    document["querySelectorAll"](_0x281c16(0x245))[_0x281c16(0x24f)](
      (_0x34acc4) => _0x34acc4[_0x281c16(0x36f)]()
    );
  } catch (_0x31c5d9) {}
  try {
    const _0x446500 = document[_0x281c16(0x50b)]("codigo");
    _0x446500 &&
      ((_0x446500[_0x281c16(0x3b1)] = _0x281c16(0x34e)), bringInputIntoView());
  } catch (_0x34636a) {}
}
async function consultarProductoDesdeModal(_0x35323e) {
  const _0x2c0c41 = _0x51ede5;
  try {
    try {
      cerrarModalMobile();
    } catch (_0x98c793) {}
    const _0x53bfc3 = document["getElementById"](_0x2c0c41(0x3b5));
    _0x53bfc3 &&
      (_0x53bfc3["classList"]["remove"]("show"),
      (_0x53bfc3[_0x2c0c41(0x503)][_0x2c0c41(0x277)] = _0x2c0c41(0x31e)));
    try {
      const _0x21e388 =
        bootstrap[_0x2c0c41(0x423)][_0x2c0c41(0x317)](_0x53bfc3);
      if (_0x21e388) _0x21e388[_0x2c0c41(0x47d)]();
    } catch (_0x49bd29) {}
    document[_0x2c0c41(0x401)](_0x2c0c41(0x1a7))["forEach"]((_0xb39d49) =>
      _0xb39d49[_0x2c0c41(0x36f)]()
    ),
      document[_0x2c0c41(0x34d)][_0x2c0c41(0x274)][_0x2c0c41(0x36f)](
        _0x2c0c41(0x309)
      ),
      (document[_0x2c0c41(0x34d)][_0x2c0c41(0x503)][_0x2c0c41(0x453)] = "");
    const _0x103066 = await getAllProductos(),
      _0x3ee863 = _0x103066[_0x2c0c41(0x3d3)](
        (_0x23c56b) =>
          String(_0x23c56b[_0x2c0c41(0x28c)]) === String(_0x35323e) ||
          String(_0x23c56b[_0x2c0c41(0x204)]) === String(_0x35323e)
      );
    if (_0x3ee863) {
      (inputCodigo[_0x2c0c41(0x29f)] = ""), mostrarDetalleProducto(_0x3ee863);
      const _0x577b36 = {
        ..._0x3ee863,
        FECHA_ESCANEO: new Date()[_0x2c0c41(0x266)](),
      };
      historial[_0x2c0c41(0x50f)](_0x577b36),
        setCookie(_0x2c0c41(0x19e), JSON[_0x2c0c41(0x408)](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x39e120 = _0x2c0c41,
            _0x4c76fd = document[_0x39e120(0x50b)](_0x39e120(0x263));
          _0x4c76fd &&
            _0x4c76fd[_0x39e120(0x533)]({
              behavior: "smooth",
              block: _0x39e120(0x40e),
              inline: _0x39e120(0x329),
            });
        }, 0x12c);
    } else
      (resultadoDiv[_0x2c0c41(0x270)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20" +
        _0x35323e +
        _0x2c0c41(0x364)),
        setTimeout(() => {
          const _0x259bbf = _0x2c0c41;
          resultadoDiv[_0x259bbf(0x270)] = "";
        }, 0x1388);
  } catch (_0x141283) {
    console["error"](
      "Error\x20consultando\x20producto\x20desde\x20modal:",
      _0x141283
    ),
      (resultadoDiv["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20" +
        _0x141283[_0x2c0c41(0x4f5)] +
        _0x2c0c41(0x295)),
      setTimeout(() => {
        const _0x543e79 = _0x2c0c41;
        resultadoDiv[_0x543e79(0x270)] = "";
      }, 0x1388);
  }
}
async function consultarProductoDesdeHistorial(_0x5a0a81) {
  const _0x44752e = _0x51ede5;
  try {
    const _0x5b4808 = await getAllProductos(),
      _0x4e552d = _0x5b4808[_0x44752e(0x3d3)](
        (_0x4b5438) =>
          String(_0x4b5438[_0x44752e(0x28c)]) === String(_0x5a0a81) ||
          String(_0x4b5438[_0x44752e(0x204)]) === String(_0x5a0a81)
      );
    if (_0x4e552d) {
      (inputCodigo["value"] = ""), mostrarDetalleProducto(_0x4e552d);
      const _0x3187f7 = historial[_0x44752e(0x46d)](
        (_0x5038cc) =>
          (_0x5038cc[_0x44752e(0x28c)] &&
            String(_0x5038cc[_0x44752e(0x28c)]) === String(_0x5a0a81)) ||
          (_0x5038cc[_0x44752e(0x204)] &&
            String(_0x5038cc[_0x44752e(0x204)]) === String(_0x5a0a81))
      );
      if (_0x3187f7 !== -0x1) {
        const _0x5a5e42 = historial["splice"](_0x3187f7, 0x1)[0x0];
        (_0x5a5e42[_0x44752e(0x241)] = new Date()[_0x44752e(0x266)]()),
          historial[_0x44752e(0x50f)](_0x5a5e42),
          setCookie(_0x44752e(0x19e), JSON["stringify"](historial), 0x1e),
          renderHistorial();
      }
      setTimeout(() => {
        const _0x50c1ca = _0x44752e,
          _0x50bfe6 = document[_0x50c1ca(0x50b)](_0x50c1ca(0x263));
        _0x50bfe6 &&
          _0x50bfe6[_0x50c1ca(0x533)]({
            behavior: "smooth",
            block: _0x50c1ca(0x40e),
            inline: _0x50c1ca(0x329),
          });
      }, 0x12c);
    } else
      (resultadoDiv[_0x44752e(0x270)] =
        _0x44752e(0x232) + _0x5a0a81 + _0x44752e(0x364)),
        setTimeout(() => {
          resultadoDiv["innerHTML"] = "";
        }, 0x1388);
  } catch (_0x3b37ca) {
    console[_0x44752e(0x39b)](_0x44752e(0x1ac), _0x3b37ca),
      (resultadoDiv[_0x44752e(0x270)] =
        _0x44752e(0x279) + _0x3b37ca["message"] + _0x44752e(0x295)),
      setTimeout(() => {
        const _0x1e4f5c = _0x44752e;
        resultadoDiv[_0x1e4f5c(0x270)] = "";
      }, 0x1388);
  }
}
function _0x1c9f(_0x2c6743, _0x54cefd) {
  const _0x215ac4 = _0x215a();
  return (
    (_0x1c9f = function (_0x1c9f39, _0x8881ac) {
      _0x1c9f39 = _0x1c9f39 - 0x194;
      let _0x5d18ec = _0x215ac4[_0x1c9f39];
      return _0x5d18ec;
    }),
    _0x1c9f(_0x2c6743, _0x54cefd)
  );
}
(window[_0x51ede5(0x4b9)] = mostrarModalPromocionesGenerales),
  (window[_0x51ede5(0x476)] = consultarProductoDesdeModal),
  (window[_0x51ede5(0x3e1)] = consultarProductoDesdeHistorial);
async function tienePromociones(_0x558901) {
  const _0x126b93 = _0x51ede5;
  try {
    const _0x2856c7 = (_0x558901[_0x126b93(0x28c)] || "")[_0x126b93(0x22f)]();
    if (!_0x2856c7) return ![];
    const _0x40dce9 = await getAllPromociones();
    if (_0x40dce9[_0x126b93(0x527)] === 0x0) return ![];
    for (const _0x4d5417 of _0x40dce9) {
      let _0x5d65af = [];
      if (
        _0x4d5417["skus"] &&
        Array[_0x126b93(0x3ca)](_0x4d5417[_0x126b93(0x2c4)])
      )
        _0x5d65af = _0x4d5417[_0x126b93(0x2c4)];
      else
        _0x4d5417["pro_grupoProductos_primaria"] &&
          _0x4d5417[_0x126b93(0x333)][_0x126b93(0x28c)] &&
          (Array[_0x126b93(0x3ca)](
            _0x4d5417[_0x126b93(0x333)][_0x126b93(0x28c)]
          )
            ? (_0x5d65af = _0x4d5417[_0x126b93(0x333)]["pr_sku"])
            : (_0x5d65af = _0x4d5417[_0x126b93(0x333)][_0x126b93(0x28c)]
                [_0x126b93(0x1a9)]("\x20")
                [_0x126b93(0x1ba)]((_0x85033) =>
                  _0x85033[_0x126b93(0x45b)]()
                )));
      if (_0x5d65af["includes"](_0x2856c7)) return !![];
    }
    return ![];
  } catch (_0x24d091) {
    return console[_0x126b93(0x278)](_0x126b93(0x42c), _0x24d091), ![];
  }
}
let searchTimeout;
inputCodigo[_0x51ede5(0x537)](_0x51ede5(0x411), async function (_0x4e55ab) {
  const _0x475a64 = _0x51ede5,
    _0x4c4d87 = inputCodigo[_0x475a64(0x29f)]
      [_0x475a64(0x45b)]()
      ["toLowerCase"]();
  clearTimeout(searchTimeout), (sugerenciasDiv[_0x475a64(0x270)] = "");
  if (!_0x4c4d87 || _0x4c4d87[_0x475a64(0x527)] < 0x2) {
    sugerenciasDiv[_0x475a64(0x503)][_0x475a64(0x277)] = "none";
    return;
  }
  searchTimeout = setTimeout(async () => {
    const _0x5d584d = _0x475a64;
    let _0x59d616 = await getAllProductos(),
      _0x31fd45 = _0x59d616[_0x5d584d(0x1ba)]((_0x2cc0fc) => {
        const _0x551283 = _0x5d584d;
        return (
          (_0x2cc0fc[_0x551283(0x344)] &&
            _0x2cc0fc[_0x551283(0x344)]
              ["toLowerCase"]()
              [_0x551283(0x231)](_0x4c4d87)) ||
          (_0x2cc0fc[_0x551283(0x28c)] &&
            String(_0x2cc0fc[_0x551283(0x28c)])
              [_0x551283(0x359)]()
              [_0x551283(0x231)](_0x4c4d87)) ||
          (_0x2cc0fc["pr_gtin"] &&
            String(_0x2cc0fc[_0x551283(0x204)])
              [_0x551283(0x359)]()
              [_0x551283(0x231)](_0x4c4d87))
        );
      });
    const _0xb01b26 = new Set();
    _0x31fd45 = _0x31fd45[_0x5d584d(0x1ba)]((_0x2204ec) => {
      const _0xa1dc3b = _0x5d584d,
        _0x15c795 = _0x2204ec[_0xa1dc3b(0x28c)] || _0x2204ec["pr_gtin"];
      if (!_0x15c795 || _0xb01b26[_0xa1dc3b(0x217)](_0x15c795)) return ![];
      return _0xb01b26[_0xa1dc3b(0x52f)](_0x15c795), !![];
    });
    if (_0x31fd45[_0x5d584d(0x527)] === 0x0) {
      sugerenciasDiv[_0x5d584d(0x503)]["display"] = _0x5d584d(0x31e);
      return;
    }
    _0x31fd45["sort"]((_0x58b83f, _0x5100ff) => {
      const _0x182029 = _0x5d584d,
        _0x5ddada = (_0x58b83f[_0x182029(0x344)] || "")[_0x182029(0x359)](),
        _0x7249c1 = (_0x5100ff[_0x182029(0x344)] || "")["toLowerCase"](),
        _0x19e63b = _0x5ddada[_0x182029(0x299)](_0x4c4d87),
        _0x56a897 = _0x7249c1[_0x182029(0x299)](_0x4c4d87);
      if (_0x19e63b && !_0x56a897) return -0x1;
      if (!_0x19e63b && _0x56a897) return 0x1;
      return _0x5ddada["length"] - _0x7249c1[_0x182029(0x527)];
    }),
      (_0x31fd45 = _0x31fd45["slice"](0x0, 0xa));
    const _0x486022 = _0x31fd45[_0x5d584d(0x1c2)]((_0x3f1707) =>
        tienePromociones(_0x3f1707)
      ),
      _0x5e8dbe = await Promise["all"](_0x486022);
    _0x31fd45[_0x5d584d(0x24f)]((_0x37d7e6, _0x9a7b09) => {
      const _0x46d4cb = _0x5d584d,
        _0xb00f1b = _0x5e8dbe[_0x9a7b09],
        _0x556b00 = document[_0x46d4cb(0x338)](_0x46d4cb(0x362));
      (_0x556b00["type"] = _0x46d4cb(0x362)),
        (_0x556b00[_0x46d4cb(0x199)] = _0x46d4cb(0x514));
      let _0xbc2bc4 = "";
      if (
        _0x37d7e6[_0x46d4cb(0x1c1)] &&
        _0x37d7e6[_0x46d4cb(0x1c1)][_0x46d4cb(0x45b)]() !== ""
      ) {
        let _0x506641 = "";
        if (_0x37d7e6[_0x46d4cb(0x1c1)][_0x46d4cb(0x299)](_0x46d4cb(0x36a)))
          _0x506641 = _0x37d7e6[_0x46d4cb(0x1c1)];
        else {
          let _0x528ac7 = _0x37d7e6[_0x46d4cb(0x1c1)][_0x46d4cb(0x299)]("/")
            ? _0x37d7e6[_0x46d4cb(0x1c1)]
            : "/" + _0x37d7e6[_0x46d4cb(0x1c1)];
          _0x506641 = _0x46d4cb(0x521) + _0x528ac7;
        }
        _0xbc2bc4 =
          _0x46d4cb(0x1b3) +
          _0x506641 +
          _0x46d4cb(0x3d5) +
          _0x37d7e6[_0x46d4cb(0x344)] +
          "\x22\x20style=\x22width:40px;\x20height:40px;\x20object-fit:cover;\x20border-radius:4px;\x20margin-right:12px;\x20background:#f8f9fa;\x22>";
      }
      const _0x33790e = _0xb00f1b ? _0x46d4cb(0x41c) : "";
      (_0x556b00[_0x46d4cb(0x270)] =
        _0x46d4cb(0x530) +
        _0xbc2bc4 +
        _0x46d4cb(0x44d) +
        _0x37d7e6["pr_name"] +
        _0x46d4cb(0x2c5) +
        _0x33790e +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20" +
        (_0x37d7e6["pr_sku"] || _0x37d7e6[_0x46d4cb(0x204)] || "") +
        "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
        (_0x556b00[_0x46d4cb(0x47f)] = function () {
          const _0x39ff03 = _0x46d4cb;
          mostrarDetalleProducto(_0x37d7e6);
          const _0x5e53ff = {
            ..._0x37d7e6,
            FECHA_ESCANEO: new Date()["toISOString"](),
          };
          historial[_0x39ff03(0x50f)](_0x5e53ff),
            setCookie(_0x39ff03(0x19e), JSON["stringify"](historial), 0x1e),
            renderHistorial(),
            (inputCodigo[_0x39ff03(0x29f)] = ""),
            (sugerenciasDiv[_0x39ff03(0x270)] = ""),
            (sugerenciasDiv[_0x39ff03(0x503)]["display"] = _0x39ff03(0x31e));
        }),
        sugerenciasDiv["appendChild"](_0x556b00);
    }),
      (sugerenciasDiv[_0x5d584d(0x503)][_0x5d584d(0x277)] = _0x5d584d(0x1bc));
  }, 0x12c);
}),
  document[_0x51ede5(0x537)]("click", function (_0xd48bd0) {
    const _0x1421ec = _0x51ede5;
    !inputCodigo[_0x1421ec(0x4c7)](_0xd48bd0[_0x1421ec(0x495)]) &&
      !sugerenciasDiv[_0x1421ec(0x4c7)](_0xd48bd0[_0x1421ec(0x495)]) &&
      ((sugerenciasDiv[_0x1421ec(0x270)] = ""),
      (sugerenciasDiv[_0x1421ec(0x503)][_0x1421ec(0x277)] = _0x1421ec(0x31e)));
  });
function iniciarScanner() {
  const _0x5cea36 = _0x51ede5;
  if (scannerActivo) return;
  try {
    (inputCodigo[_0x5cea36(0x29f)] = ""),
      (inputCodigo["placeholder"] =
        "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto"),
      (sugerenciasDiv[_0x5cea36(0x270)] = ""),
      (sugerenciasDiv["style"][_0x5cea36(0x277)] = _0x5cea36(0x31e));
  } catch (_0x6bdbd3) {}
  navigator[_0x5cea36(0x2cb)]
    [_0x5cea36(0x296)]({ video: !![] })
    [_0x5cea36(0x240)]((_0x48149f) => {
      const _0x38795d = _0x5cea36;
      _0x48149f[_0x38795d(0x1d6)]()[_0x38795d(0x24f)]((_0x4e6d32) =>
        _0x4e6d32[_0x38795d(0x504)]()
      ),
        (scannerActivo = !![]),
        (readerDiv["style"][_0x38795d(0x277)] = "block"),
        document["getElementById"](_0x38795d(0x1e5))[_0x38795d(0x533)]({
          behavior: _0x38795d(0x4be),
          block: _0x38795d(0x29c),
        }),
        (ayudaTexto["style"]["display"] = _0x38795d(0x1bc));
      const _0x296a70 = new Html5Qrcode("reader"),
        _0x200e99 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: _0x38795d(0x2bb),
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x5e10cb, _0x46d7ca) {
            const _0x24a7e6 = _0x38795d,
              _0x9e8c70 = Math[_0x24a7e6(0x424)](0x12c, _0x5e10cb * 0.9),
              _0x150d1b = 0x64;
            return { width: _0x9e8c70, height: _0x150d1b };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x38795d(0x475)],
            Html5QrcodeSupportedFormats[_0x38795d(0x2f7)],
            Html5QrcodeSupportedFormats[_0x38795d(0x416)],
            Html5QrcodeSupportedFormats["UPC_A"],
            Html5QrcodeSupportedFormats[_0x38795d(0x4ab)],
            Html5QrcodeSupportedFormats["CODE_39"],
            Html5QrcodeSupportedFormats[_0x38795d(0x375)],
            Html5QrcodeSupportedFormats[_0x38795d(0x2f5)],
            Html5QrcodeSupportedFormats[_0x38795d(0x287)],
            Html5QrcodeSupportedFormats[_0x38795d(0x474)],
            Html5QrcodeSupportedFormats[_0x38795d(0x405)],
            Html5QrcodeSupportedFormats[_0x38795d(0x4fc)],
            Html5QrcodeSupportedFormats["PDF_417"],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x296a70[_0x38795d(0x40e)](
        { facingMode: _0x38795d(0x2bb) },
        _0x200e99,
        (_0x404530) => {
          const _0x2a8314 = _0x38795d;
          (inputCodigo[_0x2a8314(0x29f)] = _0x404530["trim"]()["replace"](
            /\s+$/,
            ""
          )),
            _0x296a70[_0x2a8314(0x504)]()[_0x2a8314(0x240)](() => {
              const _0x18e609 = _0x2a8314;
              (readerDiv[_0x18e609(0x503)][_0x18e609(0x277)] =
                _0x18e609(0x31e)),
                (ayudaTexto[_0x18e609(0x503)][_0x18e609(0x277)] =
                  _0x18e609(0x31e)),
                (scannerActivo = ![]),
                _0x296a70["clear"](),
                form[_0x18e609(0x239)](),
                setTimeout(() => {
                  const _0x5b2256 = _0x18e609,
                    _0x1ca15e = document[_0x5b2256(0x50b)](_0x5b2256(0x263));
                  _0x1ca15e &&
                    _0x1ca15e[_0x5b2256(0x533)]({
                      behavior: "smooth",
                      block: _0x5b2256(0x40e),
                      inline: _0x5b2256(0x329),
                    });
                  try {
                    bringInputIntoView();
                  } catch (_0x428701) {}
                }, 0x1f4);
            });
        },
        (_0x2956af) => {}
      )
        [_0x38795d(0x240)](() => {
          setTimeout(() => {
            const _0x43fe1c = _0x1c9f,
              _0x5ee029 = readerDiv[_0x43fe1c(0x1b8)](_0x43fe1c(0x42d));
            if (_0x5ee029) {
              const _0x3cdaca =
                _0x5ee029[_0x43fe1c(0x525)]["getVideoTracks"]()[0x0];
              _0x3cdaca[_0x43fe1c(0x2f0)]({
                focusMode: "continuous",
                advanced: [{ zoom: 0x2 }],
              })
                [_0x43fe1c(0x240)](() => {})
                [_0x43fe1c(0x306)]((_0x143158) => {});
            }
          }, 0x7d0);
        })
        ["catch"]((_0x57f070) => {
          const _0x43a7da = _0x38795d;
          (scannerActivo = ![]),
            (resultadoDiv[_0x43a7da(0x270)] =
              _0x43a7da(0x321) + _0x57f070 + _0x43a7da(0x26f)),
            renderHistorial();
        });
      const _0x105455 = new MutationObserver(() => {
        const _0x2bf26b = _0x38795d,
          _0x4777a4 = readerDiv[_0x2bf26b(0x1b8)](_0x2bf26b(0x42d));
        _0x4777a4 &&
          (_0x4777a4[_0x2bf26b(0x353)]("playsinline", ""),
          _0x4777a4["setAttribute"]("autoplay", ""),
          _0x4777a4[_0x2bf26b(0x353)](_0x2bf26b(0x371), ""),
          _0x105455[_0x2bf26b(0x2e7)]());
      });
      _0x105455[_0x38795d(0x205)](readerDiv, {
        childList: !![],
        subtree: !![],
      });
    })
    ["catch"]((_0x58abc7) => {
      const _0x5a9e70 = _0x5cea36;
      (resultadoDiv[_0x5a9e70(0x270)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>"),
        renderHistorial();
    });
}
const fileInput = document[_0x51ede5(0x50b)](_0x51ede5(0x440));
if (fileInput) {
  fileInput[_0x51ede5(0x537)](_0x51ede5(0x3a9), async (_0x199a93) => {
    const _0x194913 = _0x51ede5,
      _0x2d84f1 = _0x199a93[_0x194913(0x495)][_0x194913(0x20a)][0x0];
    if (!_0x2d84f1) return;
    try {
      (inputCodigo[_0x194913(0x29f)] = ""),
        (inputCodigo["placeholder"] = _0x194913(0x4a6)),
        (sugerenciasDiv[_0x194913(0x270)] = ""),
        (sugerenciasDiv[_0x194913(0x503)][_0x194913(0x277)] = _0x194913(0x31e));
    } catch (_0x3d2965) {}
    resultadoDiv[_0x194913(0x270)] = _0x194913(0x326);
    try {
      const _0x4cb21c = new Image(),
        _0x4aaeba = new Promise((_0x127278, _0x2fe49) => {
          const _0x54e721 = _0x194913;
          (_0x4cb21c[_0x54e721(0x492)] = _0x127278),
            (_0x4cb21c[_0x54e721(0x457)] = _0x2fe49),
            (_0x4cb21c[_0x54e721(0x46f)] = URL["createObjectURL"](_0x2d84f1));
        });
      await _0x4aaeba;
      if (
        GOOGLE_VISION_CONFIG[_0x194913(0x334)] &&
        visionUsageTracker["canUseAPI"]()
      ) {
        console[_0x194913(0x1c4)](_0x194913(0x3c2));
        try {
          const _0x1fad2f = await detectarConGoogleVision(_0x4cb21c);
          if (_0x1fad2f) {
            console[_0x194913(0x1c4)](_0x194913(0x47c), _0x1fad2f),
              (inputCodigo["value"] = _0x1fad2f),
              form[_0x194913(0x239)](),
              URL[_0x194913(0x472)](_0x4cb21c[_0x194913(0x46f)]),
              (fileInput[_0x194913(0x29f)] = "");
            return;
          }
        } catch (_0x442281) {
          console[_0x194913(0x1c4)](
            _0x194913(0x2e8),
            _0x442281[_0x194913(0x4f5)]
          );
          if (_0x442281[_0x194913(0x4f5)][_0x194913(0x231)](_0x194913(0x283)))
            console["log"](_0x194913(0x2a1));
          else {
            if (_0x442281[_0x194913(0x4f5)][_0x194913(0x231)]("500"))
              console["log"](_0x194913(0x507)),
                _0x442281["message"][_0x194913(0x231)](_0x194913(0x399))
                  ? (console["log"](_0x194913(0x3e6)),
                    console[_0x194913(0x1c4)](_0x194913(0x322)))
                  : console[_0x194913(0x1c4)](_0x194913(0x37d));
            else
              _0x442281["message"]["includes"](_0x194913(0x19a)) &&
                console[_0x194913(0x1c4)](_0x194913(0x1ae));
          }
        }
      } else {
        if (
          GOOGLE_VISION_CONFIG["enabled"] &&
          !visionUsageTracker[_0x194913(0x286)]()
        ) {
          const _0x48514d = visionUsageTracker[_0x194913(0x20c)]();
          console["log"](
            "⚠️\x20Límite\x20local\x20alcanzado.\x20Mensual:\x20" +
              _0x48514d["monthlyUsed"] +
              "/" +
              _0x48514d[_0x194913(0x438)] +
              _0x194913(0x4a2) +
              _0x48514d["dailyUsed"] +
              "/" +
              _0x48514d[_0x194913(0x46c)]
          );
        }
      }
      if ("BarcodeDetector" in window) {
        console[_0x194913(0x1c4)](_0x194913(0x1ed));
        try {
          const _0x3ae96b = [
              "aztec",
              "code_128",
              _0x194913(0x478),
              "code_93",
              _0x194913(0x1d9),
              "data_matrix",
              _0x194913(0x35a),
              _0x194913(0x4df),
              "itf",
              _0x194913(0x486),
              "qr_code",
              _0x194913(0x38f),
              _0x194913(0x47a),
            ],
            _0x45139c = new BarcodeDetector({ formats: _0x3ae96b }),
            _0x27fad1 = await _0x45139c["detect"](_0x4cb21c);
          console[_0x194913(0x1c4)](
            "🔍\x20Códigos\x20detectados\x20por\x20API\x20nativa:\x20" +
              _0x27fad1[_0x194913(0x527)],
            _0x27fad1
          );
          if (_0x27fad1[_0x194913(0x527)] > 0x0) {
            const _0x53c65b = _0x27fad1["filter"]((_0x1525c9) => {
              const _0x154b19 = _0x194913,
                _0x58985a = _0x1525c9[_0x154b19(0x1e0)]["trim"]();
              console["log"](
                _0x154b19(0x39f) +
                  _0x58985a +
                  "\x22\x20formato:\x20" +
                  _0x1525c9[_0x154b19(0x310)] +
                  _0x154b19(0x1da) +
                  _0x58985a[_0x154b19(0x527)]
              );
              switch (_0x1525c9[_0x154b19(0x310)]) {
                case _0x154b19(0x35a):
                  return (
                    _0x58985a[_0x154b19(0x527)] === 0xd &&
                    /^\d{13}$/[_0x154b19(0x325)](_0x58985a)
                  );
                case "upc_a":
                  return (
                    _0x58985a[_0x154b19(0x527)] === 0xc &&
                    /^\d{12}$/["test"](_0x58985a)
                  );
                case _0x154b19(0x4df):
                  return (
                    _0x58985a[_0x154b19(0x527)] === 0x8 &&
                    /^\d{8}$/[_0x154b19(0x325)](_0x58985a)
                  );
                case _0x154b19(0x47a):
                  return (
                    _0x58985a["length"] >= 0x6 &&
                    _0x58985a["length"] <= 0x8 &&
                    /^\d+$/[_0x154b19(0x325)](_0x58985a)
                  );
                case _0x154b19(0x21c):
                  return (
                    _0x58985a[_0x154b19(0x527)] >= 0x1 &&
                    _0x58985a[_0x154b19(0x527)] <= 0x32
                  );
                case _0x154b19(0x478):
                  return (
                    _0x58985a[_0x154b19(0x527)] >= 0x1 &&
                    /^[A-Z0-9\-. $\/+%*]+$/[_0x154b19(0x325)](_0x58985a)
                  );
                case "code_93":
                  return (
                    _0x58985a[_0x154b19(0x527)] >= 0x1 &&
                    _0x58985a[_0x154b19(0x527)] <= 0x32
                  );
                case _0x154b19(0x1d9):
                  return (
                    _0x58985a["length"] >= 0x3 &&
                    /^[A-D][0-9\-$:\/.\+]+[A-D]$/["test"](_0x58985a)
                  );
                case _0x154b19(0x3bd):
                  return (
                    _0x58985a[_0x154b19(0x527)] >= 0x2 &&
                    _0x58985a[_0x154b19(0x527)] % 0x2 === 0x0 &&
                    /^\d+$/[_0x154b19(0x325)](_0x58985a)
                  );
                case _0x154b19(0x1d8):
                  return (
                    _0x58985a[_0x154b19(0x527)] >= 0x1 &&
                    _0x58985a[_0x154b19(0x527)] <= 0x10c8
                  );
                case "data_matrix":
                  return (
                    _0x58985a[_0x154b19(0x527)] >= 0x1 &&
                    _0x58985a[_0x154b19(0x527)] <= 0xc2c
                  );
                case _0x154b19(0x486):
                  return (
                    _0x58985a[_0x154b19(0x527)] >= 0x1 &&
                    _0x58985a[_0x154b19(0x527)] <= 0xa96
                  );
                case _0x154b19(0x1a0):
                  return (
                    _0x58985a[_0x154b19(0x527)] >= 0x1 &&
                    _0x58985a[_0x154b19(0x527)] <= 0xef8
                  );
                default:
                  return (
                    _0x58985a[_0x154b19(0x527)] >= 0x1 &&
                    _0x58985a[_0x154b19(0x527)] <= 0x64
                  );
              }
            });
            console[_0x194913(0x1c4)](
              _0x194913(0x38c) + _0x53c65b[_0x194913(0x527)]
            );
            if (_0x53c65b[_0x194913(0x527)] > 0x0) {
              const _0x19aeb3 = {
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
                _0x2fb1c5 = _0x53c65b[_0x194913(0x444)](
                  (_0x21b63c, _0x1087d9) => {
                    const _0xe91de6 = _0x194913,
                      _0x45826c =
                        (_0x19aeb3[_0x1087d9[_0xe91de6(0x310)]] || 0x0) -
                        (_0x19aeb3[_0x21b63c[_0xe91de6(0x310)]] || 0x0);
                    if (_0x45826c !== 0x0) return _0x45826c;
                    if (
                      [
                        "ean_13",
                        _0xe91de6(0x38f),
                        _0xe91de6(0x4df),
                        _0xe91de6(0x47a),
                        _0xe91de6(0x21c),
                        _0xe91de6(0x478),
                        _0xe91de6(0x35c),
                        _0xe91de6(0x3bd),
                        _0xe91de6(0x1d9),
                      ]["includes"](_0x21b63c[_0xe91de6(0x310)])
                    ) {
                      const _0xb1df9f =
                          _0x21b63c["boundingBox"][_0xe91de6(0x24b)] *
                          _0x21b63c[_0xe91de6(0x2b0)][_0xe91de6(0x429)],
                        _0x1e4371 =
                          _0x1087d9[_0xe91de6(0x2b0)][_0xe91de6(0x24b)] *
                          _0x1087d9[_0xe91de6(0x2b0)][_0xe91de6(0x429)];
                      return _0x1e4371 - _0xb1df9f;
                    }
                    const _0x508aa4 =
                        _0x21b63c[_0xe91de6(0x2b0)]["x"] +
                        _0x21b63c[_0xe91de6(0x2b0)][_0xe91de6(0x24b)] / 0x2,
                      _0x1b1c8b =
                        _0x1087d9[_0xe91de6(0x2b0)]["x"] +
                        _0x1087d9[_0xe91de6(0x2b0)][_0xe91de6(0x24b)] / 0x2,
                      _0x4dcf89 = _0x4cb21c["width"] / 0x2;
                    return (
                      Math["abs"](_0x508aa4 - _0x4dcf89) -
                      Math[_0xe91de6(0x468)](_0x1b1c8b - _0x4dcf89)
                    );
                  }
                ),
                _0x2b0835 = _0x2fb1c5[0x0],
                _0xa0f4a5 = _0x2b0835[_0x194913(0x1e0)]
                  ["trim"]()
                  [_0x194913(0x346)](/\s+$/, "");
              console[_0x194913(0x1c4)](
                _0x194913(0x451) +
                  _0xa0f4a5 +
                  _0x194913(0x4dc) +
                  _0x2b0835[_0x194913(0x310)] +
                  ")"
              ),
                (inputCodigo[_0x194913(0x29f)] = _0xa0f4a5),
                form[_0x194913(0x239)](),
                URL[_0x194913(0x472)](_0x4cb21c[_0x194913(0x46f)]),
                (fileInput["value"] = "");
              return;
            }
          }
          console[_0x194913(0x1c4)](
            "⚠️\x20API\x20nativa\x20no\x20detectó\x20códigos\x20válidos"
          );
        } catch (_0x94affa) {
          console[_0x194913(0x1c4)](_0x194913(0x386), _0x94affa);
        }
      } else console["log"](_0x194913(0x207));
      console[_0x194913(0x1c4)](_0x194913(0x415)),
        usarQuaggaFallback(_0x4cb21c);
    } catch (_0x3d6af1) {
      console["error"](_0x194913(0x37f), _0x3d6af1),
        (resultadoDiv[_0x194913(0x270)] = _0x194913(0x1c8)),
        renderHistorial(),
        (fileInput[_0x194913(0x29f)] = "");
    }
  });
  function usarQuaggaFallback(_0x50a562) {
    const _0x5b3302 = _0x51ede5;
    console[_0x5b3302(0x1c4)](_0x5b3302(0x4f9));
    const _0x1fbcdb = document[_0x5b3302(0x338)](_0x5b3302(0x1f2)),
      _0x1100d8 = _0x1fbcdb[_0x5b3302(0x4c3)]("2d");
    let { width: _0x174f87, height: _0x1d834a } = _0x50a562;
    const _0x3470ab = 0x190;
    if (_0x174f87 < _0x3470ab || _0x1d834a < _0x3470ab) {
      const _0x2aed54 =
        Math[_0x5b3302(0x3fc)](_0x3470ab / _0x174f87, _0x3470ab / _0x1d834a) *
        1.5;
      (_0x174f87 *= _0x2aed54),
        (_0x1d834a *= _0x2aed54),
        console[_0x5b3302(0x1c4)](
          _0x5b3302(0x23b) +
            _0x50a562[_0x5b3302(0x24b)] +
            "x" +
            _0x50a562[_0x5b3302(0x429)] +
            _0x5b3302(0x2a3) +
            _0x174f87 +
            "x" +
            _0x1d834a
        );
    }
    const _0x2b7c53 = 0x5dc;
    if (_0x174f87 > _0x2b7c53 || _0x1d834a > _0x2b7c53) {
      const _0x3ed3ca = Math["min"](
        _0x2b7c53 / _0x174f87,
        _0x2b7c53 / _0x1d834a
      );
      (_0x174f87 *= _0x3ed3ca), (_0x1d834a *= _0x3ed3ca);
    }
    (_0x1fbcdb["width"] = _0x174f87),
      (_0x1fbcdb[_0x5b3302(0x429)] = _0x1d834a),
      (_0x1100d8[_0x5b3302(0x319)] = ![]),
      _0x1100d8[_0x5b3302(0x42f)](_0x50a562, 0x0, 0x0, _0x174f87, _0x1d834a);
    const _0xf73bf2 = _0x1100d8[_0x5b3302(0x4ef)](
        0x0,
        0x0,
        _0x174f87,
        _0x1d834a
      ),
      _0x4c810c = _0xf73bf2[_0x5b3302(0x4a4)];
    let _0x3aef5a = new Array(0x100)[_0x5b3302(0x513)](0x0);
    for (
      let _0x4db570 = 0x0;
      _0x4db570 < _0x4c810c[_0x5b3302(0x527)];
      _0x4db570 += 0x4
    ) {
      const _0x256f74 = Math[_0x5b3302(0x481)](
        0.299 * _0x4c810c[_0x4db570] +
          0.587 * _0x4c810c[_0x4db570 + 0x1] +
          0.114 * _0x4c810c[_0x4db570 + 0x2]
      );
      _0x3aef5a[_0x256f74]++;
    }
    let _0x16d4a1 = 0x80,
      _0x9038a5 = 0x0;
    const _0x96df69 = _0x174f87 * _0x1d834a;
    for (let _0x3304c2 = 0x0; _0x3304c2 < 0x100; _0x3304c2++) {
      let _0x4217ac = 0x0,
        _0x244c61 = 0x0,
        _0x4a0e63 = 0x0,
        _0x50d49a = 0x0;
      for (let _0x42ec3c = 0x0; _0x42ec3c <= _0x3304c2; _0x42ec3c++) {
        (_0x4217ac += _0x3aef5a[_0x42ec3c]),
          (_0x4a0e63 += _0x42ec3c * _0x3aef5a[_0x42ec3c]);
      }
      for (let _0x11417a = _0x3304c2 + 0x1; _0x11417a < 0x100; _0x11417a++) {
        (_0x244c61 += _0x3aef5a[_0x11417a]),
          (_0x50d49a += _0x11417a * _0x3aef5a[_0x11417a]);
      }
      if (_0x4217ac === 0x0 || _0x244c61 === 0x0) continue;
      const _0x16bab3 = _0x4a0e63 / _0x4217ac,
        _0x421dea = _0x50d49a / _0x244c61,
        _0x4f23f7 =
          _0x4217ac *
          _0x244c61 *
          (_0x16bab3 - _0x421dea) *
          (_0x16bab3 - _0x421dea);
      _0x4f23f7 > _0x9038a5 &&
        ((_0x9038a5 = _0x4f23f7), (_0x16d4a1 = _0x3304c2));
    }
    console[_0x5b3302(0x1c4)](_0x5b3302(0x220) + _0x16d4a1);
    const _0x1f01a0 = new Uint8ClampedArray(_0x4c810c);
    for (
      let _0xe1d69e = 0x0;
      _0xe1d69e < _0x4c810c[_0x5b3302(0x527)];
      _0xe1d69e += 0x4
    ) {
      const _0x5b65af = Math[_0x5b3302(0x481)](
          0.299 * _0x4c810c[_0xe1d69e] +
            0.587 * _0x4c810c[_0xe1d69e + 0x1] +
            0.114 * _0x4c810c[_0xe1d69e + 0x2]
        ),
        _0xd8fd8a = _0x5b65af > _0x16d4a1 ? 0xff : 0x0;
      (_0x4c810c[_0xe1d69e] = _0xd8fd8a),
        (_0x4c810c[_0xe1d69e + 0x1] = _0xd8fd8a),
        (_0x4c810c[_0xe1d69e + 0x2] = _0xd8fd8a);
    }
    _0x1100d8["putImageData"](_0xf73bf2, 0x0, 0x0);
    let _0x5860a7 = _0x1fbcdb[_0x5b3302(0x4b0)](_0x5b3302(0x30d));
    const _0x10f01c = _0x1100d8["createImageData"](_0x174f87, _0x1d834a),
      _0x20acee = _0x10f01c["data"];
    for (
      let _0x38329c = 0x0;
      _0x38329c < _0x1f01a0[_0x5b3302(0x527)];
      _0x38329c += 0x4
    ) {
      const _0x3a5e45 = Math[_0x5b3302(0x481)](
          0.299 * _0x1f01a0[_0x38329c] +
            0.587 * _0x1f01a0[_0x38329c + 0x1] +
            0.114 * _0x1f01a0[_0x38329c + 0x2]
        ),
        _0x39a851 = _0x3a5e45 > _0x16d4a1 * 0.7 ? 0xff : 0x0;
      (_0x20acee[_0x38329c] = _0x39a851),
        (_0x20acee[_0x38329c + 0x1] = _0x39a851),
        (_0x20acee[_0x38329c + 0x2] = _0x39a851),
        (_0x20acee[_0x38329c + 0x3] = 0xff);
    }
    const _0x44e9a4 = document[_0x5b3302(0x338)](_0x5b3302(0x1f2));
    (_0x44e9a4["width"] = _0x174f87), (_0x44e9a4[_0x5b3302(0x429)] = _0x1d834a);
    const _0x23f923 = _0x44e9a4[_0x5b3302(0x4c3)]("2d");
    _0x23f923[_0x5b3302(0x2ec)](_0x10f01c, 0x0, 0x0);
    const _0x1d6d8d = _0x44e9a4["toDataURL"]("image/png"),
      _0x7fc6ee = {
        src: _0x5860a7,
        numOfWorkers: 0x0,
        locate: !![],
        inputStream: { size: Math[_0x5b3302(0x3fc)](_0x174f87, _0x1d834a) },
        locator: {
          patchSize: _0x5b3302(0x269),
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
            _0x5b3302(0x1fe),
            _0x5b3302(0x505),
            _0x5b3302(0x21f),
            _0x5b3302(0x3b7),
            _0x5b3302(0x439),
            _0x5b3302(0x337),
            _0x5b3302(0x19f),
            "codabar_reader",
            _0x5b3302(0x381),
            _0x5b3302(0x3de),
          ],
          multiple: !![],
          debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
        },
      };
    console[_0x5b3302(0x1c4)](_0x5b3302(0x4d5));
    const _0x403907 = (_0x2464ca, _0x47877c, _0x9388b1) => {
      const _0x38d667 = _0x5b3302;
      console[_0x38d667(0x1c4)](_0x38d667(0x491) + _0x47877c);
      const _0x42d604 = {
        src: _0x2464ca,
        numOfWorkers: 0x0,
        locate: !![],
        inputStream: { size: Math["max"](_0x174f87, _0x1d834a) },
        locator: {
          patchSize:
            _0x47877c === _0x38d667(0x265)
              ? _0x38d667(0x224)
              : _0x38d667(0x269),
          halfSample: _0x47877c === _0x38d667(0x522) ? !![] : ![],
          debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
        },
        decoder: {
          readers: [
            _0x38d667(0x4b2),
            _0x38d667(0x1fe),
            "upc_reader",
            _0x38d667(0x21f),
            _0x38d667(0x3b7),
            _0x38d667(0x439),
            _0x38d667(0x337),
            _0x38d667(0x19f),
            _0x38d667(0x3ef),
            _0x38d667(0x381),
          ],
          multiple: !![],
          debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
        },
      };
      Quagga[_0x38d667(0x1bf)](_0x42d604, _0x9388b1);
    };
    let _0x4550dd = [];
    _0x403907(_0x5860a7, "principal", function (_0x52f647) {
      const _0x2039f9 = _0x5b3302;
      if (_0x52f647 && _0x52f647[_0x2039f9(0x2e3)]) {
        let _0xa7385 = _0x52f647["codeResult"][_0x2039f9(0x324)]
          [_0x2039f9(0x45b)]()
          ["replace"](/\s+$/, "");
        _0x4550dd[_0x2039f9(0x347)](
          _0xa7385 + "\x20(" + _0x52f647["codeResult"][_0x2039f9(0x310)] + ")"
        ),
          console["log"](
            _0x2039f9(0x2ee),
            _0xa7385,
            "Formato:",
            _0x52f647[_0x2039f9(0x2e3)]["format"]
          );
        if (
          validarCodigo(_0xa7385, _0x52f647[_0x2039f9(0x2e3)][_0x2039f9(0x310)])
        ) {
          (inputCodigo[_0x2039f9(0x29f)] = _0xa7385),
            form["requestSubmit"](),
            URL[_0x2039f9(0x472)](_0x50a562[_0x2039f9(0x46f)]),
            (fileInput["value"] = "");
          return;
        }
      }
      console[_0x2039f9(0x1c4)](
        "🔄\x20Probando\x20configuración\x20alternativa..."
      ),
        _0x403907(_0x1d6d8d, _0x2039f9(0x265), function (_0x50d700) {
          const _0x285110 = _0x2039f9;
          if (_0x50d700 && _0x50d700[_0x285110(0x2e3)]) {
            let _0x3d52ec = _0x50d700["codeResult"][_0x285110(0x324)]
              ["trim"]()
              ["replace"](/\s+$/, "");
            _0x4550dd[_0x285110(0x347)](
              _0x3d52ec +
                "\x20(" +
                _0x50d700["codeResult"][_0x285110(0x310)] +
                ")"
            ),
              console[_0x285110(0x1c4)](
                _0x285110(0x46a),
                _0x3d52ec,
                _0x285110(0x260),
                _0x50d700[_0x285110(0x2e3)]["format"]
              );
            if (
              validarCodigo(
                _0x3d52ec,
                _0x50d700[_0x285110(0x2e3)][_0x285110(0x310)]
              )
            ) {
              (inputCodigo["value"] = _0x3d52ec),
                form[_0x285110(0x239)](),
                URL[_0x285110(0x472)](_0x50a562["src"]),
                (fileInput[_0x285110(0x29f)] = "");
              return;
            }
          }
          console["log"](_0x285110(0x349)),
            intentarSegundaPasada(_0x50a562, _0x4550dd);
        });
    });
  }
  function validarCodigo(_0x53be56, _0x4bbe2d) {
    const _0x194985 = _0x51ede5;
    console["log"](
      _0x194985(0x39f) +
        _0x53be56 +
        _0x194985(0x529) +
        _0x4bbe2d +
        _0x194985(0x1da) +
        _0x53be56[_0x194985(0x527)]
    );
    switch (_0x4bbe2d) {
      case _0x194985(0x35a):
        return (
          _0x53be56["length"] === 0xd && /^\d{13}$/[_0x194985(0x325)](_0x53be56)
        );
      case _0x194985(0x38f):
        return (
          _0x53be56[_0x194985(0x527)] === 0xc &&
          /^\d{12}$/[_0x194985(0x325)](_0x53be56)
        );
      case _0x194985(0x4df):
        return (
          _0x53be56[_0x194985(0x527)] === 0x8 &&
          /^\d{8}$/[_0x194985(0x325)](_0x53be56)
        );
      case _0x194985(0x47a):
        return (
          _0x53be56[_0x194985(0x527)] >= 0x6 &&
          _0x53be56[_0x194985(0x527)] <= 0x8 &&
          /^\d+$/[_0x194985(0x325)](_0x53be56)
        );
      case _0x194985(0x21c):
      case "code_39":
      case _0x194985(0x35c):
        return (
          _0x53be56[_0x194985(0x527)] >= 0x1 && _0x53be56["length"] <= 0x32
        );
      case _0x194985(0x1d9):
        return (
          _0x53be56[_0x194985(0x527)] >= 0x3 &&
          /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x194985(0x325)](_0x53be56)
        );
      case _0x194985(0x497):
        return (
          _0x53be56[_0x194985(0x527)] >= 0x2 &&
          _0x53be56[_0x194985(0x527)] % 0x2 === 0x0 &&
          /^\d+$/[_0x194985(0x325)](_0x53be56)
        );
      default:
        return (
          _0x53be56[_0x194985(0x527)] >= 0x1 &&
          _0x53be56[_0x194985(0x527)] <= 0x32
        );
    }
  }
  function intentarSegundaPasada(_0x5015ac, _0x361d6b = []) {
    const _0x219e3a = _0x51ede5;
    console["log"](_0x219e3a(0x506));
    const _0x4e9943 = document["createElement"](_0x219e3a(0x1f2)),
      _0x402839 = _0x4e9943[_0x219e3a(0x4c3)]("2d");
    let { width: _0x1fe9e3, height: _0x530b0e } = _0x5015ac;
    const _0x1508ea = 0x640;
    if (_0x1fe9e3 < _0x1508ea) {
      const _0x225adf = _0x1508ea / _0x1fe9e3;
      (_0x1fe9e3 *= _0x225adf), (_0x530b0e *= _0x225adf);
    }
    (_0x4e9943[_0x219e3a(0x24b)] = _0x1fe9e3),
      (_0x4e9943[_0x219e3a(0x429)] = _0x530b0e),
      (_0x402839[_0x219e3a(0x319)] = ![]),
      _0x402839[_0x219e3a(0x42f)](_0x5015ac, 0x0, 0x0, _0x1fe9e3, _0x530b0e);
    const _0x358917 = _0x402839[_0x219e3a(0x4ef)](
        0x0,
        0x0,
        _0x1fe9e3,
        _0x530b0e
      ),
      _0x14eea0 = _0x358917[_0x219e3a(0x4a4)];
    for (
      let _0x47aa59 = 0x0;
      _0x47aa59 < _0x14eea0[_0x219e3a(0x527)];
      _0x47aa59 += 0x4
    ) {
      const _0x51a694 = _0x14eea0[_0x47aa59],
        _0x3c96aa = _0x14eea0[_0x47aa59 + 0x1],
        _0x443a4e = _0x14eea0[_0x47aa59 + 0x2],
        _0x55451c = 1.5,
        _0x41dfb7 = Math[_0x219e3a(0x481)](
          0.299 * _0x51a694 + 0.587 * _0x3c96aa + 0.114 * _0x443a4e
        ),
        _0x45a5fe = Math[_0x219e3a(0x424)](
          0xff,
          Math[_0x219e3a(0x3fc)](0x0, (_0x41dfb7 - 0x80) * _0x55451c + 0x80)
        );
      (_0x14eea0[_0x47aa59] = _0x45a5fe),
        (_0x14eea0[_0x47aa59 + 0x1] = _0x45a5fe),
        (_0x14eea0[_0x47aa59 + 0x2] = _0x45a5fe);
    }
    _0x402839[_0x219e3a(0x2ec)](_0x358917, 0x0, 0x0);
    const _0x26e254 = {
      src: _0x4e9943["toDataURL"]("image/png"),
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: {
        size: Math[_0x219e3a(0x3fc)](_0x1fe9e3, _0x530b0e),
        area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
      },
      locator: {
        patchSize: _0x219e3a(0x224),
        halfSample: ![],
        debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
      },
      decoder: {
        readers: [
          "ean_reader",
          "upc_reader",
          _0x219e3a(0x3b7),
          _0x219e3a(0x439),
          _0x219e3a(0x1fe),
          "upc_e_reader",
          _0x219e3a(0x381),
          _0x219e3a(0x3ef),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
    console[_0x219e3a(0x1c4)](_0x219e3a(0x1a8)),
      Quagga["decodeSingle"](_0x26e254, function (_0x5f288d) {
        const _0x5a9fdd = _0x219e3a;
        if (_0x5f288d && _0x5f288d[_0x5a9fdd(0x2e3)]) {
          const _0x18fb87 = _0x5f288d[_0x5a9fdd(0x2e3)][_0x5a9fdd(0x324)]
            [_0x5a9fdd(0x45b)]()
            [_0x5a9fdd(0x346)](/\s+$/, "");
          _0x361d6b[_0x5a9fdd(0x347)](
            _0x18fb87 + "\x20(" + _0x5f288d[_0x5a9fdd(0x2e3)]["format"] + ")"
          ),
            console[_0x5a9fdd(0x1c4)](
              _0x5a9fdd(0x235),
              _0x18fb87,
              _0x5a9fdd(0x260),
              _0x5f288d[_0x5a9fdd(0x2e3)][_0x5a9fdd(0x310)]
            );
          if (
            validarCodigo(
              _0x18fb87,
              _0x5f288d[_0x5a9fdd(0x2e3)][_0x5a9fdd(0x310)]
            )
          ) {
            (inputCodigo[_0x5a9fdd(0x29f)] = _0x18fb87),
              form[_0x5a9fdd(0x239)]();
            return;
          }
        }
        console[_0x5a9fdd(0x1c4)](_0x5a9fdd(0x3b6));
        let _0x21b07d = "";
        _0x361d6b[_0x5a9fdd(0x527)] > 0x0 &&
          (_0x21b07d = _0x5a9fdd(0x44b) + _0x361d6b[_0x5a9fdd(0x3ea)](",\x20"));
        let _0x40dbb4 = "";
        if (GOOGLE_VISION_CONFIG[_0x5a9fdd(0x334)]) {
          const _0x2c3119 = visionUsageTracker[_0x5a9fdd(0x20c)]();
          (_0x40dbb4 =
            _0x5a9fdd(0x197) +
            _0x2c3119[_0x5a9fdd(0x4ff)] +
            "/" +
            _0x2c3119[_0x5a9fdd(0x438)] +
            _0x5a9fdd(0x50e) +
            _0x2c3119[_0x5a9fdd(0x461)] +
            "/" +
            _0x2c3119[_0x5a9fdd(0x46c)] +
            _0x5a9fdd(0x3a5)),
            verificarBackend()
              [_0x5a9fdd(0x240)]((_0x3cbec2) => {
                const _0x208747 = _0x5a9fdd;
                if (document[_0x208747(0x1b8)](_0x208747(0x483))) {
                  const _0x2e217f = document["querySelector"](_0x208747(0x483));
                  _0x2e217f &&
                    (_0x2e217f[_0x208747(0x270)] = _0x2e217f[_0x208747(0x270)][
                      _0x208747(0x346)
                    ](
                      _0x208747(0x469),
                      _0x208747(0x2be) + _0x3cbec2[_0x208747(0x22a)]
                    ));
                }
              })
              [_0x5a9fdd(0x306)](() => {});
        }
        (resultadoDiv["innerHTML"] =
          _0x5a9fdd(0x2df) + _0x21b07d + _0x40dbb4 + _0x5a9fdd(0x3f0)),
          renderHistorial();
      });
  }
  async function mostrarConfiguracion() {
    const _0x24a74d = _0x51ede5,
      _0x4a5c49 = await verificarBackend();
    let _0x8300b = null;
    if (CONFIG_ENDPOINTS["usarCodigosBarras"])
      try {
        const _0x957584 = await fetch(
          CONFIG_ENDPOINTS[_0x24a74d(0x1ad)] + _0x24a74d(0x1c0)
        );
        if (_0x957584["ok"]) {
          const _0x4f75ae = await _0x957584["json"]();
          _0x8300b = _0x4f75ae[_0x24a74d(0x242)];
        }
      } catch (_0x1c50f0) {
        console["log"](_0x24a74d(0x26d));
      }
    let _0x38f8ae = "";
    _0x8300b &&
      (_0x38f8ae =
        _0x24a74d(0x356) +
        _0x8300b["totalProductos"] +
        _0x24a74d(0x2f9) +
        _0x8300b[_0x24a74d(0x32d)] +
        _0x24a74d(0x3df) +
        _0x8300b[_0x24a74d(0x382)] +
        _0x24a74d(0x252) +
        new Date(_0x8300b[_0x24a74d(0x257)])[_0x24a74d(0x44a)]() +
        "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      Swal[_0x24a74d(0x2a7)]({
        title: _0x24a74d(0x3eb),
        html:
          _0x24a74d(0x38a) +
          (GOOGLE_VISION_CONFIG[_0x24a74d(0x334)] ? _0x24a74d(0x4d4) : "") +
          ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-check-label\x22\x20for=\x22enabledCheck\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Activar\x20detección\x20avanzada\x20(Backend)</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Usa\x20servidor\x20dedicado\x20para\x20mejor\x20detección\x20de\x20códigos\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20" +
          (_0x4a5c49[_0x24a74d(0x307)] ? "alert-success" : "alert-warning") +
          _0x24a74d(0x1a2) +
          _0x4a5c49[_0x24a74d(0x22a)] +
          _0x24a74d(0x532) +
          _0x38f8ae +
          _0x24a74d(0x331),
        width: 0x258,
        showCancelButton: !![],
        confirmButtonText: _0x24a74d(0x1ce),
        cancelButtonText: "❌\x20Cancelar",
        confirmButtonColor: _0x24a74d(0x38e),
        cancelButtonColor: _0x24a74d(0x28d),
        preConfirm: () => {
          const _0xd9bf27 = _0x24a74d,
            _0x2b7c68 = document[_0xd9bf27(0x50b)](_0xd9bf27(0x1d7))[
              _0xd9bf27(0x4d4)
            ];
          return { enabled: _0x2b7c68 };
        },
      })[_0x24a74d(0x240)]((_0x4563aa) => {
        const _0xf89107 = _0x24a74d;
        if (_0x4563aa[_0xf89107(0x4d6)]) {
          const { enabled: _0x388936 } = _0x4563aa[_0xf89107(0x29f)];
          (GOOGLE_VISION_CONFIG["enabled"] = _0x388936),
            localStorage["setItem"](
              "googleVisionConfig",
              JSON[_0xf89107(0x408)]({ enabled: _0x388936 })
            );
          const _0x59cd72 = _0x388936
            ? _0xf89107(0x1c9)
            : "⚠️\x20Usando\x20solo\x20detección\x20local";
          Swal[_0xf89107(0x2a7)]({
            title: _0xf89107(0x2f2),
            text: _0x59cd72,
            icon: "success",
            timer: 0x7d0,
            showConfirmButton: ![],
          });
        }
      });
  }
  function cargarConfiguracionGuardada() {
    const _0x32f70d = _0x51ede5,
      _0xc83d77 = localStorage[_0x32f70d(0x3a2)](_0x32f70d(0x4f8));
    if (_0xc83d77)
      try {
        const _0x3ab3d2 = JSON["parse"](_0xc83d77);
        (GOOGLE_VISION_CONFIG[_0x32f70d(0x334)] =
          _0x3ab3d2[_0x32f70d(0x334)] || ![]),
          GOOGLE_VISION_CONFIG[_0x32f70d(0x334)] &&
            console[_0x32f70d(0x1c4)](_0x32f70d(0x2b8));
      } catch (_0x12ae67) {
        console[_0x32f70d(0x1c4)](_0x32f70d(0x452), _0x12ae67);
      }
  }
  "serviceWorker" in navigator &&
    window["addEventListener"](_0x51ede5(0x35d), () => {
      const _0x47c4dc = _0x51ede5;
      navigator[_0x47c4dc(0x2e2)]
        [_0x47c4dc(0x1e7)](_0x47c4dc(0x4de))
        [_0x47c4dc(0x240)]((_0x521cbc) => {
          const _0x2dddc2 = _0x47c4dc;
          console[_0x2dddc2(0x1c4)](
            _0x2dddc2(0x2fe),
            _0x521cbc[_0x2dddc2(0x48c)]
          ),
            _0x521cbc["addEventListener"]("updatefound", () => {
              const _0x3292ce = _0x2dddc2;
              console[_0x3292ce(0x1c4)](_0x3292ce(0x387));
              const _0x134fc5 = _0x521cbc[_0x3292ce(0x47b)];
              _0x134fc5[_0x3292ce(0x537)](_0x3292ce(0x271), () => {
                const _0x4a20aa = _0x3292ce;
                _0x134fc5[_0x4a20aa(0x289)] === _0x4a20aa(0x351) &&
                  navigator[_0x4a20aa(0x2e2)]["controller"] &&
                  (console[_0x4a20aa(0x1c4)](_0x4a20aa(0x4e7)),
                  confirm(_0x4a20aa(0x230)) &&
                    (_0x134fc5[_0x4a20aa(0x4f3)]({ type: _0x4a20aa(0x1cf) }),
                    window["location"][_0x4a20aa(0x3fe)]()));
              });
            });
        })
        [_0x47c4dc(0x306)]((_0x22405a) =>
          console[_0x47c4dc(0x39b)](_0x47c4dc(0x4ad), _0x22405a)
        ),
        navigator[_0x47c4dc(0x2e2)][_0x47c4dc(0x537)](_0x47c4dc(0x33c), () => {
          const _0x5899df = _0x47c4dc;
          console["log"](_0x5899df(0x377)),
            window[_0x5899df(0x49a)][_0x5899df(0x3fe)]();
        });
    });
  window[_0x51ede5(0x537)](_0x51ede5(0x41f), (_0x51562e) => {
    const _0x451e54 = _0x51ede5;
    _0x51562e[_0x451e54(0x52b)](),
      (deferredPrompt = _0x51562e),
      installBtn && installBtn[_0x451e54(0x274)][_0x451e54(0x36f)]("d-none");
  }),
    installBtn["addEventListener"]("click", (_0x438397) => {
      const _0xf18f10 = _0x51ede5;
      deferredPrompt &&
        (deferredPrompt["prompt"](),
        deferredPrompt[_0xf18f10(0x25e)][_0xf18f10(0x240)]((_0x5b1fa5) => {
          const _0x2710e3 = _0xf18f10;
          _0x5b1fa5[_0x2710e3(0x1c5)] === _0x2710e3(0x20f)
            ? console[_0x2710e3(0x1c4)](_0x2710e3(0x249))
            : console[_0x2710e3(0x1c4)](_0x2710e3(0x477)),
            (deferredPrompt = null),
            installBtn["classList"][_0x2710e3(0x52f)](_0x2710e3(0x236));
        }));
    });
  _0x51ede5(0x2e2) in navigator &&
    (navigator[_0x51ede5(0x2e2)]
      ["getRegistrations"]()
      [_0x51ede5(0x240)](function (_0x206ff0) {
        const _0x482a4b = _0x51ede5;
        for (let _0x376862 of _0x206ff0) {
          _0x376862[_0x482a4b(0x524)]();
        }
      }),
    navigator[_0x51ede5(0x2e2)][_0x51ede5(0x537)](
      "controllerchange",
      function () {
        const _0x33324f = _0x51ede5;
        window[_0x33324f(0x49a)]["reload"]();
      }
    ));
  const style = document["createElement"](_0x51ede5(0x503));
  (style[_0x51ede5(0x270)] =
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20/*\x20Imagen\x20fija\x20para\x20tarjetas\x20de\x20resultados\x20(grid)\x20*/\x0a\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20border-top-left-radius:\x200.375rem;\x0a\x20\x20\x20\x20border-top-right-radius:\x200.375rem;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20}\x0a\x20\x20.result-card-img\x20img\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20}\x0a\x20\x20/*\x20El\x20espaciado\x20del\x20grid\x20lo\x20maneja\x20Bootstrap\x20g-3;\x20sin\x20margen\x20extra\x20en\x20la\x20card\x20para\x20evitar\x20desalineación\x20*/\x0a\x20\x20.result-card\x20{\x20margin:\x200;\x20}\x0a\x20\x20.promo-badge\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x206px;\x0a\x20\x20\x20\x20left:\x206px;\x0a\x20\x20\x20\x20font-size:\x200.7rem;\x0a\x20\x20}\x0a\x20\x20@media\x20(max-width:\x20576px)\x20{\x0a\x20\x20\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20\x20\x20height:\x20100px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20nombre\x20del\x20producto\x20*/\x0a\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x201.4rem;\x0a\x20\x20\x20\x20line-height:\x201.3;\x0a\x20\x20\x20\x20margin-bottom:\x200.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.1rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20precios\x20*/\x0a\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x203.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x202.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20para\x20código\x20de\x20barras\x20funcional\x20*/\x0a\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20max-width:\x20100%;\x0a\x20\x20\x20\x20height:\x20auto;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20background:\x20#ffffff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x202rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x201.5rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20160px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Modal\x20de\x20resultados\x20al\x2080%\x20en\x20desktop\x20*/\x0a\x20\x20@media\x20(min-width:\x20992px)\x20{\x0a\x20\x20\x20\x20#resultadosBusquedaModal\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a"),
    document[_0x51ede5(0x3aa)][_0x51ede5(0x218)](style);
  async function verPromociones() {
    const _0x2656e6 = _0x51ede5;
    try {
      console[_0x2656e6(0x1c4)](_0x2656e6(0x4cc)),
        (document[_0x2656e6(0x50b)](_0x2656e6(0x263))[_0x2656e6(0x270)] =
          "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Leyendo\x20promociones\x20y\x20productos\x20locales...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
      const [_0x29ccf5, _0x17395b] = await Promise[_0x2656e6(0x43a)]([
        getAllPromociones(),
        getAllProductos(),
      ]);
      if (!Array["isArray"](_0x29ccf5) || _0x29ccf5["length"] === 0x0) {
        document[_0x2656e6(0x50b)](_0x2656e6(0x263))[_0x2656e6(0x270)] =
          _0x2656e6(0x487);
        return;
      }
      let _0x260168 = _0x2656e6(0x203);
      _0x29ccf5[_0x2656e6(0x24f)]((_0x23a412, _0x30afb0) => {
        const _0x54f068 = _0x2656e6;
        let _0x55dd79 = [];
        if (
          _0x23a412["skus"] &&
          Array[_0x54f068(0x3ca)](_0x23a412[_0x54f068(0x2c4)])
        )
          _0x55dd79 = _0x23a412[_0x54f068(0x2c4)];
        else
          _0x23a412[_0x54f068(0x333)] &&
            _0x23a412[_0x54f068(0x333)]["pr_sku"] &&
            (Array[_0x54f068(0x3ca)](
              _0x23a412[_0x54f068(0x333)][_0x54f068(0x28c)]
            )
              ? (_0x55dd79 =
                  _0x23a412["pro_grupoProductos_primaria"][_0x54f068(0x28c)])
              : (_0x55dd79 = _0x23a412["pro_grupoProductos_primaria"][
                  _0x54f068(0x28c)
                ]
                  [_0x54f068(0x1a9)]("\x20")
                  [_0x54f068(0x1ba)]((_0xecd884) =>
                    _0xecd884[_0x54f068(0x45b)]()
                  )));
        const _0x5cef51 = _0x55dd79[_0x54f068(0x1c2)]((_0x5baac9) => {
            const _0x2a90d1 = _0x54f068;
            return _0x17395b[_0x2a90d1(0x3d3)](
              (_0x1b8aea) => _0x1b8aea[_0x2a90d1(0x28c)] === _0x5baac9
            );
          })["filter"]((_0x21ffb1) => _0x21ffb1 !== undefined),
          _0x1a23e4 =
            _0x23a412[_0x54f068(0x501)] ||
            _0x23a412[_0x54f068(0x48e)] ||
            _0x54f068(0x48f) + (_0x30afb0 + 0x1),
          _0x27afab =
            _0x23a412[_0x54f068(0x51c)] ||
            _0x23a412[_0x54f068(0x25b)] ||
            _0x54f068(0x19b),
          _0x35e9a4 =
            _0x23a412["pro_mensaje"] || _0x23a412[_0x54f068(0x22a)] || "",
          _0xb96daf = _0x23a412["pro_cantidad_base"] || "",
          _0x369d9b = Number(_0xb96daf) || 0x1;
        let _0x366f54 = 0x0;
        const _0x219e9f = (_0x35e9a4 + "\x20" + _0x1a23e4)[_0x54f068(0x359)](),
          _0x4a10b2 = _0x219e9f[_0x54f068(0x342)](/(\d+)\s*x\s*(\d+)/);
        if (_0x4a10b2) _0x366f54 = Number(_0x4a10b2[0x2]);
        else {
          const _0x2a7a4f = Number(_0x23a412[_0x54f068(0x323)]) || 0x0;
          _0x366f54 = _0x2a7a4f * _0x369d9b;
        }
        let _0x3e3bb0 = 0x0,
          _0x9412e3 = 0x0;
        if (_0x5cef51[_0x54f068(0x527)] > 0x0 && _0xb96daf && _0x366f54 > 0x0) {
          const _0x1a15d5 = _0x5cef51[_0x54f068(0x1c2)]((_0x25a84e) => {
              const _0x1d0dec = _0x54f068;
              let _0x46940e =
                Number(_0x25a84e[_0x1d0dec(0x419)]) ||
                Number(_0x25a84e["L1"]) ||
                0x0;
              return Math[_0x1d0dec(0x481)](_0x46940e * 1.16 * 0x64) / 0x64;
            }),
            _0x2f61ac =
              _0x1a15d5[_0x54f068(0x2fd)](
                (_0x3225f0, _0x55ad1c) => _0x3225f0 + _0x55ad1c,
                0x0
              ) / _0x1a15d5["length"];
          (_0x3e3bb0 =
            Math[_0x54f068(0x481)](_0x2f61ac * _0x369d9b * 0x64) / 0x64),
            (_0x9412e3 =
              Math[_0x54f068(0x481)]((_0x3e3bb0 - _0x366f54) * 0x64) / 0x64);
        }
        let _0x120cee = "";
        if (_0x5cef51[_0x54f068(0x527)] > 0x0) {
          const _0xab9210 = _0x5cef51[_0x54f068(0x33b)](0x0, 0x4)
            ["map"]((_0x525f89) => {
              const _0x52b930 = _0x54f068;
              let _0x2d7eee = "";
              if (
                _0x525f89[_0x52b930(0x1c1)] &&
                _0x525f89[_0x52b930(0x1c1)][_0x52b930(0x45b)]() !== ""
              ) {
                if (_0x525f89[_0x52b930(0x1c1)][_0x52b930(0x299)]("http"))
                  _0x2d7eee = _0x525f89["pr_imagen"];
                else {
                  let _0x16c61a = _0x525f89["pr_imagen"]["startsWith"]("/")
                    ? _0x525f89[_0x52b930(0x1c1)]
                    : "/" + _0x525f89[_0x52b930(0x1c1)];
                  _0x2d7eee = _0x52b930(0x521) + _0x16c61a;
                }
              }
              return _0x2d7eee
                ? _0x52b930(0x3f4) +
                    _0x2d7eee +
                    "\x22\x20class=\x22card-img-top\x22\x20alt=\x22" +
                    _0x525f89[_0x52b930(0x344)] +
                    _0x52b930(0x4f0) +
                    _0x525f89[_0x52b930(0x344)] +
                    _0x52b930(0x34a) +
                    _0x525f89[_0x52b930(0x28c)] +
                    _0x52b930(0x4ee) +
                    _0x525f89[_0x52b930(0x28c)] +
                    _0x52b930(0x312)
                : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-img-top\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-secondary\x22\x20style=\x22height:\x2080px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-white\x22>📦</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                    _0x525f89[_0x52b930(0x344)] +
                    _0x52b930(0x34a) +
                    _0x525f89["pr_sku"] +
                    _0x52b930(0x4ee) +
                    _0x525f89["pr_sku"] +
                    _0x52b930(0x312);
            })
            [_0x54f068(0x3ea)]("");
          _0x120cee =
            _0x54f068(0x1ca) +
            _0xab9210 +
            _0x54f068(0x534) +
            (_0x5cef51[_0x54f068(0x527)] > 0x4
              ? _0x54f068(0x3b8) +
                (_0x5cef51["length"] - 0x4) +
                _0x54f068(0x1f0) +
                (_0x5cef51[_0x54f068(0x527)] - 0x4 > 0x1 ? "s" : "") +
                _0x54f068(0x400)
              : "") +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20";
        }
        _0x260168 +=
          _0x54f068(0x4bd) +
          _0x1a23e4 +
          _0x54f068(0x43d) +
          _0x27afab[_0x54f068(0x346)](_0x54f068(0x1f3), _0x54f068(0x4f1)) +
          _0x54f068(0x2cc) +
          (_0x35e9a4 && _0x35e9a4 !== _0x1a23e4
            ? _0x54f068(0x510) + _0x35e9a4 + _0x54f068(0x1c7)
            : "") +
          _0x54f068(0x528) +
          (_0x366f54 > 0x0
            ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x20p-3\x20bg-light\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>" +
              _0x369d9b +
              _0x54f068(0x426) +
              _0x366f54["toLocaleString"]("es-CL") +
              _0x54f068(0x339) +
              (_0x3e3bb0 > 0x0
                ? _0x54f068(0x1a5) +
                  _0x3e3bb0[_0x54f068(0x44a)](_0x54f068(0x228)) +
                  "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Total\x20Normal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                : _0x54f068(0x38b)) +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              (_0x9412e3 > 0x0
                ? _0x54f068(0x4af) +
                  _0x9412e3[_0x54f068(0x44a)](_0x54f068(0x228)) +
                  "\x20comprando\x20" +
                  _0x369d9b +
                  "\x20unidades\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                : "") +
              _0x54f068(0x28a)
            : _0x54f068(0x437) +
              (_0xb96daf
                ? _0x54f068(0x3dd) + _0xb96daf + _0x54f068(0x198)
                : "") +
              _0x54f068(0x436) +
              (precioPromo
                ? _0x54f068(0x418) + precioPromo + _0x54f068(0x51f)
                : "") +
              _0x54f068(0x28a)) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          _0x120cee +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x5cef51[_0x54f068(0x527)] > 0x0
            ? _0x54f068(0x2ba) +
              _0x5cef51["map"](
                (_0x12a1da, _0x488396) =>
                  _0x54f068(0x27d) +
                  (_0x488396 < _0x5cef51[_0x54f068(0x527)] - 0x1
                    ? "border-bottom\x20pb-3"
                    : "") +
                  _0x54f068(0x480) +
                  _0x12a1da[_0x54f068(0x344)] +
                  _0x54f068(0x308) +
                  _0x12a1da[_0x54f068(0x28c)] +
                  _0x54f068(0x2ef) +
                  (_0x12a1da[_0x54f068(0x204)]
                    ? "<small\x20class=\x22text-muted\x20d-block\x22><strong>Código:</strong>\x20" +
                      _0x12a1da[_0x54f068(0x204)] +
                      _0x54f068(0x4e9)
                    : "") +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                  (() => {
                    const _0x298613 = _0x54f068;
                    let _0x5d173a =
                        Number(_0x12a1da[_0x298613(0x419)]) ||
                        Number(_0x12a1da["L1"]) ||
                        0x0,
                      _0x11c43b =
                        Math[_0x298613(0x481)](_0x5d173a * 1.16 * 0x64) / 0x64;
                    return _0x11c43b > 0x0
                      ? _0x298613(0x4a3) +
                          _0x11c43b["toFixed"](0x2) +
                          _0x298613(0x4e9)
                      : "";
                  })() +
                  _0x54f068(0x4ac)
              )["join"]("") +
              _0x54f068(0x25f)
            : "") +
          _0x54f068(0x528) +
          (_0x55dd79[_0x54f068(0x527)] > _0x5cef51["length"]
            ? _0x54f068(0x52d) +
              _0x55dd79[_0x54f068(0x527)] +
              _0x54f068(0x4cb) +
              _0x5cef51[_0x54f068(0x527)] +
              "\x20con\x20datos\x20disponibles)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              _0x55dd79[_0x54f068(0x33b)](0x0, 0x6)
                [_0x54f068(0x1c2)](
                  (_0x53cc34) =>
                    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-light\x20text-dark\x20me-1\x20mb-1\x22\x20style=\x22font-size:\x200.7rem;\x22>" +
                    _0x53cc34 +
                    _0x54f068(0x3a6)
                )
                [_0x54f068(0x3ea)]("") +
              _0x54f068(0x4a8) +
              (_0x55dd79[_0x54f068(0x527)] > 0x6
                ? _0x54f068(0x214) +
                  (_0x55dd79[_0x54f068(0x527)] - 0x6) +
                  "\x20más</span>"
                : "") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          _0x54f068(0x528) +
          (_0x23a412["validFrom"] && _0x23a412[_0x54f068(0x4ed)]
            ? _0x54f068(0x421) +
              _0x23a412[_0x54f068(0x24d)] +
              _0x54f068(0x23a) +
              _0x23a412[_0x54f068(0x4ed)] +
              _0x54f068(0x52a)
            : "") +
          _0x54f068(0x1b4);
      }),
        (_0x260168 += "</div>"),
        (_0x260168 += _0x2656e6(0x3d0)),
        (document[_0x2656e6(0x50b)](_0x2656e6(0x263))["innerHTML"] = _0x260168);
      const _0x20b946 = document[_0x2656e6(0x401)](_0x2656e6(0x44f));
      _0x20b946[_0x2656e6(0x24f)]((_0x1ffec2) => {
        const _0x31829c = _0x2656e6;
        _0x1ffec2[_0x31829c(0x537)](_0x31829c(0x516), function (_0xa046be) {
          const _0x18ba98 = _0x31829c;
          _0xa046be[_0x18ba98(0x52b)]();
          const _0x28eab4 = _0x1ffec2[_0x18ba98(0x3d7)](_0x18ba98(0x520));
          navigator[_0x18ba98(0x2fa)] &&
            navigator[_0x18ba98(0x2fa)]
              ["writeText"](_0x28eab4)
              ["then"](() => {
                const _0x42fca8 = _0x18ba98,
                  _0x51ce97 = _0x1ffec2["innerHTML"];
                (_0x1ffec2["innerHTML"] = "✅"),
                  _0x1ffec2[_0x42fca8(0x274)]["remove"](_0x42fca8(0x3fb)),
                  _0x1ffec2[_0x42fca8(0x274)][_0x42fca8(0x52f)](
                    _0x42fca8(0x3d4)
                  ),
                  setTimeout(() => {
                    const _0x5275b3 = _0x42fca8;
                    (_0x1ffec2[_0x5275b3(0x270)] = _0x51ce97),
                      _0x1ffec2[_0x5275b3(0x274)][_0x5275b3(0x36f)](
                        _0x5275b3(0x3d4)
                      ),
                      _0x1ffec2[_0x5275b3(0x274)][_0x5275b3(0x52f)](
                        _0x5275b3(0x3fb)
                      );
                  }, 0x4b0);
              })
              ["catch"]((_0x4f1b74) => {
                const _0x92ae99 = _0x18ba98;
                console[_0x92ae99(0x39b)]("Error\x20al\x20copiar:", _0x4f1b74);
                const _0xd5fc7e = _0x1ffec2[_0x92ae99(0x270)];
                (_0x1ffec2[_0x92ae99(0x270)] = "❌"),
                  setTimeout(() => {
                    const _0x5da7c7 = _0x92ae99;
                    _0x1ffec2[_0x5da7c7(0x270)] = _0xd5fc7e;
                  }, 0x4b0);
              });
        });
      });
    } catch (_0x29bed6) {
      console["error"](_0x2656e6(0x2ab), _0x29bed6),
        (document[_0x2656e6(0x50b)](_0x2656e6(0x263))[_0x2656e6(0x270)] =
          _0x2656e6(0x1d5) + _0x29bed6[_0x2656e6(0x4f5)] + _0x2656e6(0x21b));
    }
  }
  cargarConfiguracionGuardada(), renderHistorial();
  const mobileModalStyles = document[_0x51ede5(0x338)](_0x51ede5(0x503));
  (mobileModalStyles[_0x51ede5(0x1e2)] = _0x51ede5(0x250)),
    document[_0x51ede5(0x3aa)][_0x51ede5(0x218)](mobileModalStyles);
  let resultadosBusquedaState = {
    items: [],
    page: 0x1,
    pageSize: 0xa,
    query: "",
    view: _0x51ede5(0x3d9),
  };
  function isMobileDevice() {
    const _0x4e64e4 = _0x51ede5;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
      _0x4e64e4(0x325)
    ](navigator[_0x4e64e4(0x3e8)]);
  }
  function hideMobileKeyboard() {
    const _0x2aa080 = _0x51ede5;
    try {
      const _0x47a81d = document["getElementById"](_0x2aa080(0x3c8));
      if (!_0x47a81d) return;
      _0x47a81d["blur"]();
      document[_0x2aa080(0x389)] &&
        typeof document[_0x2aa080(0x389)][_0x2aa080(0x3b0)] ===
          _0x2aa080(0x209) &&
        document[_0x2aa080(0x389)][_0x2aa080(0x3b0)]();
      const _0x482960 = /iPad|iPhone|iPod/[_0x2aa080(0x325)](
        navigator[_0x2aa080(0x3e8)]
      );
      if (_0x482960) {
        const _0x3b7fe0 = _0x47a81d["hasAttribute"]("readonly");
        _0x47a81d[_0x2aa080(0x353)](_0x2aa080(0x246), _0x2aa080(0x535));
        const _0x5ae63d = document[_0x2aa080(0x338)](_0x2aa080(0x411));
        (_0x5ae63d[_0x2aa080(0x2a6)] = _0x2aa080(0x305)),
          (_0x5ae63d[_0x2aa080(0x503)]["position"] = _0x2aa080(0x22e)),
          (_0x5ae63d[_0x2aa080(0x503)][_0x2aa080(0x1fa)] = "0"),
          (_0x5ae63d[_0x2aa080(0x503)][_0x2aa080(0x429)] = "0"),
          (_0x5ae63d["style"][_0x2aa080(0x378)] = _0x2aa080(0x31e)),
          document[_0x2aa080(0x34d)][_0x2aa080(0x218)](_0x5ae63d),
          _0x5ae63d[_0x2aa080(0x273)](),
          setTimeout(() => {
            const _0xbf08f9 = _0x2aa080;
            try {
              _0x5ae63d[_0xbf08f9(0x3b0)]();
            } catch (_0x672088) {}
            try {
              document[_0xbf08f9(0x34d)][_0xbf08f9(0x352)](_0x5ae63d);
            } catch (_0x398d5b) {}
            try {
              _0x47a81d["blur"]();
            } catch (_0x40d9d1) {}
            if (!_0x3b7fe0) _0x47a81d["removeAttribute"]("readonly");
          }, 0x32);
      }
    } catch (_0x1ddc28) {}
  }
  function mostrarModalResultadosBusqueda(_0x168082, _0x35c2a5) {
    const _0x558597 = _0x51ede5;
    if (isMobileDevice()) hideMobileKeyboard();
    (resultadosBusquedaState[_0x558597(0x4b4)] = _0x168082),
      (resultadosBusquedaState[_0x558597(0x303)] = 0x1),
      (resultadosBusquedaState[_0x558597(0x328)] = 0xa),
      (resultadosBusquedaState[_0x558597(0x2b4)] = _0x35c2a5);
    try {
      const _0x382db1 = localStorage[_0x558597(0x3a2)]("resultados_view");
      (_0x382db1 === _0x558597(0x4e8) || _0x382db1 === _0x558597(0x3d9)) &&
        (resultadosBusquedaState[_0x558597(0x28e)] = _0x382db1);
    } catch (_0x24e296) {}
    const _0x3c6fed = document[_0x558597(0x50b)]("resultados-busqueda-body");
    if (!_0x3c6fed) return;
    try {
      const _0x2b8c06 = document[_0x558597(0x50b)](_0x558597(0x263));
      _0x2b8c06 &&
        /Buscando producto/i[_0x558597(0x325)](
          _0x2b8c06[_0x558597(0x1e2)] || ""
        ) &&
        (_0x2b8c06[_0x558597(0x270)] = "");
    } catch (_0x6244e3) {}
    try {
      const _0x34d30c = document[_0x558597(0x50b)](_0x558597(0x3c8));
      _0x34d30c &&
        ((_0x34d30c["value"] = ""),
        (_0x34d30c[_0x558597(0x3b1)] =
          "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto"));
      const _0xfa8875 = document[_0x558597(0x50b)]("sugerenciasDiv");
      _0xfa8875 &&
        ((_0xfa8875[_0x558597(0x270)] = ""),
        (_0xfa8875[_0x558597(0x503)]["display"] = _0x558597(0x31e)));
    } catch (_0x5c5fae) {}
    renderResultadosBusqueda();
    const _0xa491f6 = document[_0x558597(0x50b)](_0x558597(0x30b)),
      _0x54ad0a =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
          _0x558597(0x325)
        ](navigator[_0x558597(0x3e8)]);
    if (_0x54ad0a)
      (_0xa491f6[_0x558597(0x503)]["position"] = _0x558597(0x410)),
        (_0xa491f6["style"][_0x558597(0x31f)] = "0"),
        (_0xa491f6[_0x558597(0x503)][_0x558597(0x50d)] = "0"),
        (_0xa491f6[_0x558597(0x503)][_0x558597(0x24b)] = "100%"),
        (_0xa491f6[_0x558597(0x503)][_0x558597(0x429)] = _0x558597(0x2e4)),
        (_0xa491f6["style"][_0x558597(0x2fc)] = _0x558597(0x3f6)),
        (_0xa491f6[_0x558597(0x503)][_0x558597(0x1f5)] = _0x558597(0x395)),
        (_0xa491f6[_0x558597(0x503)][_0x558597(0x277)] = "block"),
        _0xa491f6[_0x558597(0x274)][_0x558597(0x52f)]("show");
    else {
      const _0x5762a5 = new bootstrap[_0x558597(0x423)](_0xa491f6, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x5762a5[_0x558597(0x2d3)]();
    }
  }
  function cerrarResultadosModal() {
    const _0x2ff8ec = _0x51ede5,
      _0x55a3cb = document[_0x2ff8ec(0x50b)](_0x2ff8ec(0x30b));
    if (!_0x55a3cb) return;
    _0x55a3cb[_0x2ff8ec(0x274)][_0x2ff8ec(0x36f)](_0x2ff8ec(0x2d3)),
      (_0x55a3cb[_0x2ff8ec(0x503)][_0x2ff8ec(0x277)] = _0x2ff8ec(0x31e));
    try {
      const _0x251f9f =
        bootstrap[_0x2ff8ec(0x423)][_0x2ff8ec(0x317)](_0x55a3cb);
      if (_0x251f9f) _0x251f9f["hide"]();
    } catch (_0x2c7cc0) {}
    document[_0x2ff8ec(0x401)](_0x2ff8ec(0x245))["forEach"]((_0x4b7874) =>
      _0x4b7874["remove"]()
    );
    try {
      const _0x4f4819 = document[_0x2ff8ec(0x50b)](_0x2ff8ec(0x263));
      _0x4f4819 &&
        /Buscando producto/i["test"](_0x4f4819[_0x2ff8ec(0x1e2)] || "") &&
        (_0x4f4819[_0x2ff8ec(0x270)] = "");
    } catch (_0x114cb5) {}
    try {
      const _0xf55e2 = document[_0x2ff8ec(0x50b)](_0x2ff8ec(0x3c8));
      _0xf55e2 &&
        ((_0xf55e2[_0x2ff8ec(0x3b1)] =
          "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto"),
        bringInputIntoView({ focusOnDesktop: !![] }));
    } catch (_0x8840d7) {}
  }
  function bringInputIntoView(_0x254218 = {}) {
    const _0x2f98db = _0x51ede5,
      { focusOnDesktop: focusOnDesktop = !![] } = _0x254218,
      _0x3db9ca = document["getElementById"](_0x2f98db(0x3c8));
    if (!_0x3db9ca) return;
    try {
      _0x3db9ca[_0x2f98db(0x533)]({
        behavior: _0x2f98db(0x4be),
        block: _0x2f98db(0x29c),
        inline: _0x2f98db(0x329),
      });
    } catch (_0x237455) {}
    const _0x4405bf =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
        _0x2f98db(0x325)
      ](navigator["userAgent"]);
    if (!_0x4405bf && focusOnDesktop)
      try {
        _0x3db9ca[_0x2f98db(0x273)]({ preventScroll: !![] });
      } catch (_0xb08d1c) {
        try {
          _0x3db9ca["focus"]();
        } catch (_0x4cf80f) {}
      }
  }
  async function renderResultadosBusqueda() {
    const _0x55f678 = _0x51ede5,
      _0x2517e5 = document["getElementById"](_0x55f678(0x1f1));
    if (!_0x2517e5) return;
    const {
        items: _0x5a9a4d,
        page: _0x493aa4,
        pageSize: _0xa98230,
        query: _0x431cfe,
        view: _0x5e668b,
      } = resultadosBusquedaState,
      _0x27798a = _0x5a9a4d[_0x55f678(0x527)],
      _0x1d0043 = Math[_0x55f678(0x3fc)](
        0x1,
        Math[_0x55f678(0x3dc)](_0x27798a / _0xa98230)
      ),
      _0x4dccc2 = Math["min"](_0x493aa4, _0x1d0043),
      _0x46b818 = (_0x4dccc2 - 0x1) * _0xa98230,
      _0x37752e = Math[_0x55f678(0x424)](_0x46b818 + _0xa98230, _0x27798a),
      _0x1a5e7d = _0x5a9a4d[_0x55f678(0x33b)](_0x46b818, _0x37752e);
    let _0x5f29f2 = [];
    try {
      _0x5f29f2 = await Promise[_0x55f678(0x43a)](
        _0x1a5e7d[_0x55f678(0x1c2)]((_0x2ac3ad) =>
          tienePromociones(_0x2ac3ad)
            ["then"](Boolean)
            ["catch"](() => ![])
        )
      );
    } catch (_0x3ec792) {
      _0x5f29f2 = _0x1a5e7d[_0x55f678(0x1c2)](() => ![]);
    }
    const _0x5918d6 = (_0x54bc36, _0x39ad5a) => {
        const _0x1a6fe2 = _0x55f678,
          _0x34b7e9 = _0x54bc36["pr_name"] || "",
          _0x3e73dd =
            _0x54bc36[_0x1a6fe2(0x28c)] || _0x54bc36[_0x1a6fe2(0x204)] || "";
        let _0x39183d = "";
        if (
          _0x54bc36["pr_imagen"] &&
          _0x54bc36[_0x1a6fe2(0x1c1)][_0x1a6fe2(0x45b)]() !== ""
        ) {
          if (_0x54bc36[_0x1a6fe2(0x1c1)][_0x1a6fe2(0x299)](_0x1a6fe2(0x36a)))
            _0x39183d = _0x54bc36["pr_imagen"];
          else {
            const _0x107c15 = _0x54bc36[_0x1a6fe2(0x1c1)][_0x1a6fe2(0x299)]("/")
              ? _0x54bc36[_0x1a6fe2(0x1c1)]
              : "/" + _0x54bc36[_0x1a6fe2(0x1c1)];
            _0x39183d = _0x1a6fe2(0x521) + _0x107c15;
          }
        }
        const _0x1f2a5e =
            Number(_0x54bc36[_0x1a6fe2(0x419)]) ||
            Number(_0x54bc36["L1"]) ||
            0x0,
          _0x37a5d9 = Math["round"](_0x1f2a5e * 1.16 * 0x64) / 0x64;
        return (
          _0x1a6fe2(0x3ac) +
          (_0x39ad5a ? _0x1a6fe2(0x499) : "") +
          _0x1a6fe2(0x4ae) +
          (_0x39183d
            ? _0x1a6fe2(0x1b3) +
              _0x39183d +
              _0x1a6fe2(0x3d5) +
              _0x34b7e9 +
              _0x1a6fe2(0x454)
            : _0x1a6fe2(0x30e)) +
          _0x1a6fe2(0x2d7) +
          _0x34b7e9 +
          "\x22>" +
          _0x34b7e9 +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20" +
          _0x3e73dd +
          _0x1a6fe2(0x456) +
          (_0x37a5d9 > 0x0
            ? _0x1a6fe2(0x3b2) + _0x37a5d9["toFixed"](0x2) + _0x1a6fe2(0x26f)
            : "") +
          _0x1a6fe2(0x373) +
          _0x3e73dd +
          "\x27);\x20})()\x22>Ver</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>"
        );
      },
      _0x20d3c5 = (_0xe07174, _0x596ebe) => {
        const _0x4de860 = _0x55f678,
          _0x3cebe6 = _0xe07174["pr_name"] || "",
          _0x5efa0a =
            _0xe07174[_0x4de860(0x28c)] || _0xe07174[_0x4de860(0x204)] || "";
        let _0x9cb051 = "";
        if (
          _0xe07174["pr_imagen"] &&
          _0xe07174[_0x4de860(0x1c1)]["trim"]() !== ""
        ) {
          if (_0xe07174[_0x4de860(0x1c1)][_0x4de860(0x299)]("http"))
            _0x9cb051 = _0xe07174["pr_imagen"];
          else {
            const _0x529bce = _0xe07174[_0x4de860(0x1c1)][_0x4de860(0x299)]("/")
              ? _0xe07174[_0x4de860(0x1c1)]
              : "/" + _0xe07174[_0x4de860(0x1c1)];
            _0x9cb051 = _0x4de860(0x521) + _0x529bce;
          }
        }
        return (
          _0x4de860(0x2ff) +
          (_0x9cb051
            ? _0x4de860(0x2d2) +
              _0x9cb051 +
              _0x4de860(0x3d5) +
              _0x3cebe6 +
              "\x22\x20style=\x22width:60px;height:60px;object-fit:contain;border-radius:8px;background:#f8f9fa;\x22\x20onerror=\x22this.style.display=\x27none\x27\x22></div>"
            : "") +
          _0x4de860(0x508) +
          _0x3cebe6 +
          (_0x596ebe
            ? "\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:0.7rem;\x22>PROMO</span>"
            : "") +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20" +
          _0x5efa0a +
          _0x4de860(0x467) +
          _0x5efa0a +
          _0x4de860(0x29a)
        );
      };
    let _0x42b2e3 = "";
    if (_0x5e668b === _0x55f678(0x4e8)) {
      const _0x2e5777 = _0x1a5e7d[_0x55f678(0x1c2)](
        (_0x3c9221, _0x499ab9) =>
          _0x55f678(0x3d6) +
          _0x5918d6(_0x3c9221, !!_0x5f29f2[_0x499ab9]) +
          _0x55f678(0x26f)
      )[_0x55f678(0x3ea)]("");
      _0x42b2e3 =
        _0x55f678(0x484) + _0x2e5777 + "\x0a\x20\x20\x20\x20\x20\x20</div>";
    } else {
      const _0x38c0e2 = _0x1a5e7d[_0x55f678(0x1c2)]((_0x2d0ad2, _0x53278c) =>
        _0x20d3c5(_0x2d0ad2, !!_0x5f29f2[_0x53278c])
      )["join"]("");
      _0x42b2e3 = _0x38c0e2;
    }
    _0x2517e5["innerHTML"] =
      _0x55f678(0x275) +
      _0x27798a +
      _0x55f678(0x2ed) +
      _0x431cfe +
      _0x55f678(0x201) +
      (_0x5e668b === "grid" ? _0x55f678(0x311) : _0x55f678(0x2a9)) +
      _0x55f678(0x1af) +
      (_0x42b2e3 || _0x55f678(0x221)) +
      "\x0a\x20\x20";
    const _0x411d00 = document[_0x55f678(0x50b)]("resultadosInfo"),
      _0x21c01a = document[_0x55f678(0x50b)](_0x55f678(0x425));
    if (_0x411d00)
      _0x411d00[_0x55f678(0x1e2)] =
        _0x46b818 + 0x1 + "-" + _0x37752e + _0x55f678(0x361) + _0x27798a;
    if (_0x21c01a)
      _0x21c01a[_0x55f678(0x1e2)] =
        "Página\x20" + _0x4dccc2 + _0x55f678(0x2c8) + _0x1d0043;
    const _0x40f227 = document[_0x55f678(0x50b)](_0x55f678(0x3ed)),
      _0x12300c = document[_0x55f678(0x50b)](_0x55f678(0x36c));
    _0x40f227 &&
      ((_0x40f227[_0x55f678(0x2b5)] = _0x4dccc2 <= 0x1),
      (_0x40f227[_0x55f678(0x47f)] = () => {
        (resultadosBusquedaState["page"] = Math["max"](0x1, _0x4dccc2 - 0x1)),
          renderResultadosBusqueda();
      }));
    _0x12300c &&
      ((_0x12300c[_0x55f678(0x2b5)] = _0x4dccc2 >= _0x1d0043),
      (_0x12300c[_0x55f678(0x47f)] = () => {
        const _0x23e64d = _0x55f678;
        (resultadosBusquedaState[_0x23e64d(0x303)] = Math[_0x23e64d(0x424)](
          _0x1d0043,
          _0x4dccc2 + 0x1
        )),
          renderResultadosBusqueda();
      }));
    const _0x56ec56 = document[_0x55f678(0x50b)]("pageSizeSelect");
    _0x56ec56 &&
      ((_0x56ec56[_0x55f678(0x29f)] = String(
        resultadosBusquedaState["pageSize"]
      )),
      (_0x56ec56[_0x55f678(0x1c6)] = (_0x1672f0) => {
        const _0xd66841 = _0x55f678,
          _0x2a65fd =
            parseInt(_0x1672f0[_0xd66841(0x495)][_0xd66841(0x29f)], 0xa) || 0xa;
        (resultadosBusquedaState[_0xd66841(0x328)] = _0x2a65fd),
          (resultadosBusquedaState[_0xd66841(0x303)] = 0x1),
          renderResultadosBusqueda();
      }));
    const _0x2b239a = document[_0x55f678(0x50b)]("btnToggleVista"),
      _0x5176ac = document[_0x55f678(0x50b)]("iconVista"),
      _0x33dc2c = document[_0x55f678(0x50b)](_0x55f678(0x258));
    _0x2b239a &&
      _0x5176ac &&
      _0x33dc2c &&
      (_0x5e668b === _0x55f678(0x4e8)
        ? ((_0x5176ac["className"] = _0x55f678(0x1cb)),
          (_0x33dc2c[_0x55f678(0x1e2)] = _0x55f678(0x2a9)))
        : ((_0x5176ac[_0x55f678(0x199)] = _0x55f678(0x237)),
          (_0x33dc2c[_0x55f678(0x1e2)] = _0x55f678(0x311))),
      (_0x2b239a[_0x55f678(0x47f)] = () => {
        const _0x1bd95f = _0x55f678;
        resultadosBusquedaState[_0x1bd95f(0x28e)] =
          resultadosBusquedaState[_0x1bd95f(0x28e)] === "grid"
            ? _0x1bd95f(0x3d9)
            : _0x1bd95f(0x4e8);
        try {
          localStorage["setItem"](
            _0x1bd95f(0x403),
            resultadosBusquedaState[_0x1bd95f(0x28e)]
          );
        } catch (_0x3c9c80) {}
        renderResultadosBusqueda();
      }));
    const _0x93c955 = document[_0x55f678(0x50b)](_0x55f678(0x3f7)),
      _0x483b5a = document[_0x55f678(0x50b)]("btnIrPagina");
    _0x93c955 &&
      ((_0x93c955[_0x55f678(0x424)] = "1"),
      (_0x93c955["max"] = String(_0x1d0043)),
      (_0x93c955[_0x55f678(0x3b1)] = "1\x20-\x20" + _0x1d0043));
    const _0x49c774 = () => {
      const _0x37acf0 = _0x55f678,
        _0x1d69bb = parseInt(
          (_0x93c955?.[_0x37acf0(0x29f)] || "")[_0x37acf0(0x45b)](),
          0xa
        );
      if (!isNaN(_0x1d69bb)) {
        const _0x3628fd = Math[_0x37acf0(0x3fc)](
          0x1,
          Math[_0x37acf0(0x424)](_0x1d0043, _0x1d69bb)
        );
        (resultadosBusquedaState[_0x37acf0(0x303)] = _0x3628fd),
          renderResultadosBusqueda();
      }
    };
    if (_0x483b5a) _0x483b5a[_0x55f678(0x47f)] = _0x49c774;
    if (_0x93c955)
      _0x93c955[_0x55f678(0x537)]("keydown", (_0x362661) => {
        const _0x2811ad = _0x55f678;
        _0x362661[_0x2811ad(0x488)] === _0x2811ad(0x264) &&
          (_0x362661["preventDefault"](), _0x49c774());
      });
  }
  async function mostrarDetalleProductoBySKU(_0x3026ed) {
    const _0x27c828 = _0x51ede5,
      _0x4c3d42 = await getAllProductos(),
      _0x5a8d15 = _0x4c3d42[_0x27c828(0x3d3)](
        (_0x1ced19) =>
          String(_0x1ced19[_0x27c828(0x28c)]) === String(_0x3026ed) ||
          String(_0x1ced19[_0x27c828(0x204)]) === String(_0x3026ed)
      );
    if (_0x5a8d15) {
      mostrarDetalleProducto(_0x5a8d15);
      const _0x4deb7c = {
        ..._0x5a8d15,
        FECHA_ESCANEO: new Date()[_0x27c828(0x266)](),
      };
      historial[_0x27c828(0x50f)](_0x4deb7c),
        setCookie("historial", JSON[_0x27c828(0x408)](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x139809 = _0x27c828,
            _0x55ade1 = document[_0x139809(0x50b)](_0x139809(0x263));
          _0x55ade1 &&
            _0x55ade1["scrollIntoView"]({
              behavior: _0x139809(0x4be),
              block: "start",
              inline: _0x139809(0x329),
            });
        }, 0xc8);
    }
  }
  function mostrarModalReporteVentas() {
    const _0x3d4a3b = _0x51ede5;
    if (isMobileDevice()) hideMobileKeyboard();
    const _0x40a40d = new Date(),
      _0x18332a =
        _0x40a40d["getFullYear"]() +
        "-" +
        String(_0x40a40d[_0x3d4a3b(0x1a3)]() + 0x1)[_0x3d4a3b(0x227)](0x2, "0");
    document[_0x3d4a3b(0x50b)](_0x3d4a3b(0x1ec))[_0x3d4a3b(0x29f)] = _0x18332a;
    const _0x30de11 = document[_0x3d4a3b(0x50b)](_0x3d4a3b(0x1b7)),
      _0x46e21d =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
          _0x3d4a3b(0x325)
        ](navigator["userAgent"]);
    if (_0x46e21d)
      (_0x30de11["style"][_0x3d4a3b(0x285)] = _0x3d4a3b(0x410)),
        (_0x30de11[_0x3d4a3b(0x503)][_0x3d4a3b(0x31f)] = "0"),
        (_0x30de11[_0x3d4a3b(0x503)][_0x3d4a3b(0x50d)] = "0"),
        (_0x30de11["style"]["width"] = "100%"),
        (_0x30de11[_0x3d4a3b(0x503)][_0x3d4a3b(0x429)] = _0x3d4a3b(0x2e4)),
        (_0x30de11["style"][_0x3d4a3b(0x2fc)] = "1055"),
        (_0x30de11[_0x3d4a3b(0x503)][_0x3d4a3b(0x1f5)] = _0x3d4a3b(0x395)),
        (_0x30de11[_0x3d4a3b(0x503)][_0x3d4a3b(0x277)] = _0x3d4a3b(0x1bc)),
        _0x30de11[_0x3d4a3b(0x274)][_0x3d4a3b(0x52f)](_0x3d4a3b(0x2d3));
    else {
      const _0x385875 = new bootstrap[_0x3d4a3b(0x423)](_0x30de11, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x385875["show"]();
    }
  }
  function cerrarModalReporteVentas() {
    const _0x16c261 = _0x51ede5,
      _0x3bc00f = document["getElementById"](_0x16c261(0x1b7));
    if (!_0x3bc00f) return;
    _0x3bc00f[_0x16c261(0x274)]["remove"](_0x16c261(0x2d3)),
      (_0x3bc00f[_0x16c261(0x503)][_0x16c261(0x277)] = "none");
    try {
      const _0x3a09ad =
        bootstrap[_0x16c261(0x423)][_0x16c261(0x317)](_0x3bc00f);
      if (_0x3a09ad) _0x3a09ad[_0x16c261(0x47d)]();
    } catch (_0x465941) {}
    document[_0x16c261(0x401)](_0x16c261(0x245))["forEach"]((_0x3bc87e) =>
      _0x3bc87e["remove"]()
    );
    try {
      const _0x1611e7 = document[_0x16c261(0x50b)](_0x16c261(0x3c8));
      _0x1611e7 &&
        ((_0x1611e7[_0x16c261(0x3b1)] = _0x16c261(0x4a6)),
        bringInputIntoView({ focusOnDesktop: !![] }));
    } catch (_0x58441e) {}
  }
  async function generarReporteVentas() {
    const _0x40e4fb = _0x51ede5,
      _0x11e227 = document["getElementById"]("mesReporte")[_0x40e4fb(0x29f)],
      _0x326c88 = document["getElementById"]("reporte-contenido"),
      _0x1e44d5 = document["getElementById"](_0x40e4fb(0x26e)),
      _0x5c0e18 = document["getElementById"](_0x40e4fb(0x413));
    if (!_0x11e227) {
      _0x326c88[_0x40e4fb(0x270)] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20selecciona\x20un\x20mes\x20para\x20generar\x20el\x20reporte.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20";
      return;
    }
    (_0x1e44d5["textContent"] = "Generando..."),
      _0x5c0e18[_0x40e4fb(0x274)][_0x40e4fb(0x36f)](_0x40e4fb(0x236));
    try {
      const _0x207575 =
          "https://reporte-ventas-b9.vercel.app/api/ventas?mes=" + _0x11e227,
        _0x5955fe = await fetch(_0x207575);
      if (!_0x5955fe["ok"])
        throw new Error(
          _0x40e4fb(0x2de) +
            _0x5955fe[_0x40e4fb(0x39a)] +
            "\x20" +
            _0x5955fe[_0x40e4fb(0x2cf)]
        );
      const _0x27834e = await _0x5955fe["json"]();
      if (!_0x27834e[_0x40e4fb(0x24a)])
        throw new Error(_0x27834e[_0x40e4fb(0x39b)] || _0x40e4fb(0x216));
      const {
        totalGeneral: _0x44fed3,
        totalVendedores: _0x19a4df,
        totalTickets: _0x5529b1,
        vendedores: _0x7be821,
      } = _0x27834e[_0x40e4fb(0x4a4)];
      window[_0x40e4fb(0x43b)] = _0x7be821;
      let _0x1a9120 = _0x27834e["data"]["resumenMetodosPago"];
      !_0x1a9120 &&
        (_0x1a9120 = {
          credit_card: {
            total: 5114377.11,
            cantidad: _0x7be821[_0x40e4fb(0x2fd)](
              (_0x1167e7, _0x15fe94) =>
                _0x1167e7 +
                (_0x15fe94[_0x40e4fb(0x2c0)] || [])[_0x40e4fb(0x1ba)](
                  (_0x40646a) =>
                    (_0x40646a[_0x40e4fb(0x458)] || "")[_0x40e4fb(0x231)](
                      "credit_card"
                    )
                )[_0x40e4fb(0x527)],
              0x0
            ),
          },
          cash: {
            total: 1288936.88,
            cantidad: _0x7be821[_0x40e4fb(0x2fd)](
              (_0x572ea1, _0x1b4c9c) =>
                _0x572ea1 +
                (_0x1b4c9c[_0x40e4fb(0x2c0)] || [])[_0x40e4fb(0x1ba)](
                  (_0x3bf39c) =>
                    (_0x3bf39c[_0x40e4fb(0x458)] || "")[_0x40e4fb(0x231)](
                      "cash"
                    )
                )[_0x40e4fb(0x527)],
              0x0
            ),
          },
          debit_card: {
            total: 1071636.5,
            cantidad: _0x7be821[_0x40e4fb(0x2fd)](
              (_0x3f7528, _0x4f3876) =>
                _0x3f7528 +
                (_0x4f3876[_0x40e4fb(0x2c0)] || [])[_0x40e4fb(0x1ba)](
                  (_0x5140b7) =>
                    (_0x5140b7[_0x40e4fb(0x458)] || "")[_0x40e4fb(0x231)](
                      "debit_card"
                    )
                )[_0x40e4fb(0x527)],
              0x0
            ),
          },
          credit_note_application: {
            total: 298028.03,
            cantidad: _0x7be821[_0x40e4fb(0x2fd)](
              (_0x160b1f, _0xcd0f32) =>
                _0x160b1f +
                (_0xcd0f32[_0x40e4fb(0x2c0)] || [])[_0x40e4fb(0x1ba)](
                  (_0x4bdf40) =>
                    (_0x4bdf40[_0x40e4fb(0x458)] || "")[_0x40e4fb(0x231)](
                      "credit_note_application"
                    )
                )[_0x40e4fb(0x527)],
              0x0
            ),
          },
          transfer: {
            total: 452621.06,
            cantidad: _0x7be821[_0x40e4fb(0x2fd)](
              (_0x140910, _0x45d903) =>
                _0x140910 +
                (_0x45d903[_0x40e4fb(0x2c0)] || [])[_0x40e4fb(0x1ba)](
                  (_0x3d5a19) =>
                    (_0x3d5a19[_0x40e4fb(0x458)] || "")[_0x40e4fb(0x231)](
                      _0x40e4fb(0x442)
                    )
                )[_0x40e4fb(0x527)],
              0x0
            ),
          },
          check: {
            total: 0x31b,
            cantidad: _0x7be821[_0x40e4fb(0x2fd)](
              (_0x5aebce, _0x33819c) =>
                _0x5aebce +
                (_0x33819c[_0x40e4fb(0x2c0)] || [])[_0x40e4fb(0x1ba)](
                  (_0x3af076) =>
                    (_0x3af076[_0x40e4fb(0x458)] || "")[_0x40e4fb(0x231)](
                      "check"
                    )
                )[_0x40e4fb(0x527)],
              0x0
            ),
          },
          credit: {
            total: 10799.6,
            cantidad: _0x7be821[_0x40e4fb(0x2fd)](
              (_0x333bb8, _0xa6252a) =>
                _0x333bb8 +
                (_0xa6252a["tickets"] || [])["filter"](
                  (_0x2299b1) =>
                    (_0x2299b1[_0x40e4fb(0x458)] || "")[_0x40e4fb(0x231)](
                      _0x40e4fb(0x1be)
                    ) &&
                    !(_0x2299b1[_0x40e4fb(0x458)] || "")["includes"](
                      "credit_card"
                    ) &&
                    !(_0x2299b1[_0x40e4fb(0x458)] || "")[_0x40e4fb(0x231)](
                      _0x40e4fb(0x490)
                    )
                )[_0x40e4fb(0x527)],
              0x0
            ),
          },
          mixed: { total: 0x0, cantidad: 0x0 },
        });
      if (_0x7be821[_0x40e4fb(0x527)] === 0x0) {
        _0x326c88[_0x40e4fb(0x270)] =
          _0x40e4fb(0x1db) + _0x11e227 + _0x40e4fb(0x40d);
        return;
      }
      const _0x1d3727 = {
        cash: _0x40e4fb(0x234),
        credit_card: _0x40e4fb(0x20b),
        debit_card: _0x40e4fb(0x213),
        credit_note_application: _0x40e4fb(0x4bc),
        transfer: _0x40e4fb(0x355),
        check: _0x40e4fb(0x215),
        credit: "💵\x20Crédito",
        mixed: _0x40e4fb(0x466),
      };
      let _0x200939 = "";
      _0x1a9120 &&
        Object[_0x40e4fb(0x50a)](_0x1a9120)[_0x40e4fb(0x24f)]((_0x214a3e) => {
          const _0x2fd289 = _0x40e4fb,
            _0x12edaf = _0x1a9120[_0x214a3e];
          _0x12edaf[_0x2fd289(0x455)] > 0x0 &&
            (_0x200939 +=
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-4\x20col-lg-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22>$" +
              _0x12edaf[_0x2fd289(0x455)]["toLocaleString"](_0x2fd289(0x383), {
                minimumFractionDigits: 0x2,
              }) +
              _0x2fd289(0x44c) +
              (_0x1d3727[_0x214a3e] || _0x214a3e) +
              _0x2fd289(0x3e2) +
              _0x12edaf[_0x2fd289(0x1d1)] +
              _0x2fd289(0x1ee));
        });
      let _0x31f1dc =
        _0x40e4fb(0x53a) +
        _0x11e227 +
        _0x40e4fb(0x2e1) +
        _0x44fed3["toLocaleString"](_0x40e4fb(0x383), {
          minimumFractionDigits: 0x2,
        }) +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Total\x20Ventas</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-success\x22>" +
        _0x19a4df +
        _0x40e4fb(0x3b9) +
        _0x5529b1 +
        _0x40e4fb(0x1df) +
        (_0x200939
          ? _0x40e4fb(0x29e) +
            _0x200939 +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
          : "") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20";
      _0x7be821[_0x40e4fb(0x24f)]((_0x5b9a57, _0x357d5e) => {
        const _0x3035d9 = _0x40e4fb,
          _0x69fd27 = ((_0x5b9a57["totalVentas"] / _0x44fed3) * 0x64)[
            _0x3035d9(0x482)
          ](0x1),
          _0x2b1bbe = (_0x5b9a57[_0x3035d9(0x33d)] /
            _0x5b9a57["cantidadTickets"])["toFixed"](0x2);
        _0x31f1dc +=
          _0x3035d9(0x435) +
          (_0x357d5e === 0x0 ? _0x3035d9(0x3db) : _0x3035d9(0x500)) +
          _0x3035d9(0x335) +
          (_0x357d5e === 0x0 ? _0x3035d9(0x34b) : _0x3035d9(0x3c7)) +
          _0x3035d9(0x1ea) +
          (_0x357d5e === 0x0 ? "🏆" : "👤") +
          "\x20" +
          _0x5b9a57[_0x3035d9(0x21a)] +
          "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x357d5e === 0x0
            ? "<span\x20class=\x22badge\x20bg-light\x20text-dark\x22>TOP</span>"
            : "") +
          _0x3035d9(0x251) +
          _0x5b9a57[_0x3035d9(0x33d)][_0x3035d9(0x44a)]("es-MX", {
            minimumFractionDigits: 0x2,
          }) +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>" +
          _0x69fd27 +
          _0x3035d9(0x19c) +
          _0x5b9a57["cantidadTickets"] +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>Tickets</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22>$" +
          _0x2b1bbe +
          _0x3035d9(0x4bf) +
          _0x5b9a57[_0x3035d9(0x21a)] +
          "\x27,\x20" +
          i +
          _0x3035d9(0x22c) +
          i +
          _0x3035d9(0x45a);
      }),
        (_0x31f1dc += _0x40e4fb(0x26f)),
        (_0x326c88[_0x40e4fb(0x270)] = _0x31f1dc);
    } catch (_0x364b78) {
      console["error"](_0x40e4fb(0x450), _0x364b78),
        (_0x326c88[_0x40e4fb(0x270)] =
          _0x40e4fb(0x1fd) + _0x364b78[_0x40e4fb(0x4f5)] + _0x40e4fb(0x396));
    } finally {
      (_0x1e44d5[_0x40e4fb(0x1e2)] = _0x40e4fb(0x4d0)),
        _0x5c0e18[_0x40e4fb(0x274)]["add"](_0x40e4fb(0x236));
    }
  }
  function mostrarDetalleVendedor(_0x1581ea, _0xfc9639) {
    const _0x139f56 = _0x51ede5,
      _0x7fe375 = window["ultimosVendedores"] || [],
      _0x5db39e = _0x7fe375[_0xfc9639];
    if (!_0x5db39e || !_0x5db39e[_0x139f56(0x2c0)]) {
      alert(_0x139f56(0x2b2));
      return;
    }
    const _0x438456 = _0x5db39e[_0x139f56(0x2c0)];
    function _0x451e3a(_0x3972d8) {
      const _0xac5b2b = _0x139f56,
        _0x42efd7 = (_0x3972d8 || "")[_0xac5b2b(0x359)]()[_0xac5b2b(0x45b)]();
      if (_0x42efd7[_0xac5b2b(0x231)](_0xac5b2b(0x2ea)) || _0x42efd7 === "cash")
        return { nombre: "💰\x20Efectivo", clase: _0xac5b2b(0x2b1) };
      else {
        if (
          _0x42efd7[_0xac5b2b(0x231)](_0xac5b2b(0x2c6)) ||
          _0x42efd7 === _0xac5b2b(0x2c6)
        )
          return { nombre: _0xac5b2b(0x20b), clase: _0xac5b2b(0x1de) };
        else {
          if (
            _0x42efd7[_0xac5b2b(0x231)](_0xac5b2b(0x420)) ||
            _0x42efd7 === "debit_card"
          )
            return { nombre: _0xac5b2b(0x213), clase: _0xac5b2b(0x417) };
          else {
            if (
              _0x42efd7[_0xac5b2b(0x231)](_0xac5b2b(0x442)) ||
              _0x42efd7 === _0xac5b2b(0x442)
            )
              return { nombre: "🏦\x20Transferencia", clase: _0xac5b2b(0x3c7) };
            else {
              if (
                _0x42efd7[_0xac5b2b(0x231)]("credit_note") ||
                _0x42efd7 === _0xac5b2b(0x31d)
              )
                return { nombre: _0xac5b2b(0x4bc), clase: _0xac5b2b(0x34b) };
              else {
                if (
                  _0x42efd7[_0xac5b2b(0x231)](_0xac5b2b(0x2b7)) ||
                  _0x42efd7 === _0xac5b2b(0x2b7)
                )
                  return { nombre: _0xac5b2b(0x215), clase: _0xac5b2b(0x4fd) };
                else {
                  if (
                    _0x42efd7[_0xac5b2b(0x231)](_0xac5b2b(0x1be)) &&
                    !_0x42efd7[_0xac5b2b(0x231)]("card")
                  )
                    return { nombre: "💵\x20Crédito", clase: "bg-danger" };
                  else
                    return _0x42efd7[_0xac5b2b(0x231)](",") ||
                      _0x42efd7[_0xac5b2b(0x231)]("\x20")
                      ? { nombre: "🔄\x20Combinado", clase: _0xac5b2b(0x37a) }
                      : {
                          nombre: _0x3972d8 || _0xac5b2b(0x536),
                          clase: "bg-light\x20text-dark",
                        };
                }
              }
            }
          }
        }
      }
    }
    let _0x419e3e =
      _0x139f56(0x372) +
      _0x1581ea +
      "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2060vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ticket</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Cliente</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Importe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Fecha</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Método</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Banco</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20";
    _0x438456["forEach"]((_0x3c3273) => {
      const _0xe3774 = _0x139f56,
        _0x2d7c05 = _0x451e3a(_0x3c3273["metodoPago"]),
        _0x37bd15 = new Date(_0x3c3273[_0xe3774(0x280)])["toLocaleDateString"](
          "es-MX",
          {
            day: "2-digit",
            month: _0xe3774(0x2a5),
            hour: _0xe3774(0x2a5),
            minute: "2-digit",
          }
        );
      _0x419e3e +=
        "\x0a\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td><code>" +
        _0x3c3273[_0xe3774(0x496)] +
        _0xe3774(0x25c) +
        _0x3c3273[_0xe3774(0x219)] +
        _0xe3774(0x402) +
        parseFloat(_0x3c3273["importe"])[_0xe3774(0x44a)](_0xe3774(0x383), {
          minimumFractionDigits: 0x2,
        }) +
        "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td><small>" +
        _0x37bd15 +
        _0xe3774(0x41d) +
        _0x2d7c05[_0xe3774(0x367)] +
        _0xe3774(0x4db) +
        _0x2d7c05[_0xe3774(0x21a)] +
        _0xe3774(0x316) +
        (_0x3c3273[_0xe3774(0x268)] || "-") +
        _0xe3774(0x409);
    });
    const _0x3be1bf = _0x438456["reduce"](
      (_0x3b1a7e, _0xa8f8ce) =>
        _0x3b1a7e + parseFloat(_0xa8f8ce[_0x139f56(0x194)]),
      0x0
    );
    _0x419e3e +=
      _0x139f56(0x210) +
      _0x3be1bf[_0x139f56(0x44a)](_0x139f56(0x383), {
        minimumFractionDigits: 0x2,
      }) +
      _0x139f56(0x4d9) +
      ticketsArray[_0x139f56(0x527)] +
      "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20";
    const _0x593967 = document[_0x139f56(0x50b)](_0x139f56(0x297));
    if (_0x593967) _0x593967[_0x139f56(0x36f)]();
    document[_0x139f56(0x34d)][_0x139f56(0x243)](_0x139f56(0x1f6), _0x419e3e);
    const _0x5d0aef = new bootstrap[_0x139f56(0x423)](
      document[_0x139f56(0x50b)](_0x139f56(0x297))
    );
    _0x5d0aef[_0x139f56(0x2d3)](),
      document["getElementById"](_0x139f56(0x297))[_0x139f56(0x537)](
        _0x139f56(0x358),
        () => {
          const _0x309ce7 = _0x139f56;
          document[_0x309ce7(0x50b)](_0x309ce7(0x297))["remove"]();
        }
      );
  }
}
function _0x215a() {
  const _0x5a28ad = [
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "monthlyLimit",
    "code_39_reader",
    "all",
    "ultimosVendedores",
    "\x20\x20\x20Posibles\x20causas:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>",
    "fulfilled",
    "Consultando\x20los\x203\x20endpoints...",
    "fileInput",
    "async",
    "transfer",
    "pro_cantidad_base",
    "sort",
    "📊\x20Estadísticas:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22\x20style=\x22font-size:\x200.9rem;\x20line-height:\x201.2;\x22>",
    "fillRect",
    "🎉\x20¡Google\x20Vision\x20API\x20funcionando\x20correctamente!",
    "🚫\x20PROBLEMA:\x20Permisos\x20denegados\x20-\x20Vision\x20API\x20no\x20habilitada",
    "toLocaleString",
    "<br>•\x20🔍\x20<strong>Códigos\x20detectados:</strong>\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "❌\x20Modal\x20no\x20encontrado",
    ".copiar-sku-btn",
    "❌\x20Error\x20al\x20generar\x20reporte\x20de\x20ventas:",
    "🎯\x20Mejor\x20código\x20seleccionado:\x20\x22",
    "❌\x20Error\x20cargando\x20configuración:",
    "overflow",
    "\x22\x20onerror=\x22this.onerror=null;\x20this.style.display=\x27none\x27;\x20this.parentElement.innerHTML=\x27<div\x20class=\x5c\x27text-muted\x5c\x27\x20style=\x5c\x27font-size:2rem;\x5c\x27><i\x20class=\x5c\x27bi\x20bi-image\x5c\x27></i></div>\x27;\x22>",
    "total",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "onerror",
    "metodoPago",
    "🔍\x20Datos\x20de\x20promoción\x20recibidos:",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Ver\x20Detalle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "trim",
    "<div\x20class=\x22alert\x20alert-success\x22>✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente</div>",
    "fillStyle",
    "\x20minutos",
    "\x20más</div>",
    "borderRadius",
    "dailyUsed",
    "💡\x20Ve\x20a:\x20https://console.cloud.google.com/apis/library/vision.googleapis.com",
    "loadUsage",
    "\x20promociones\x20(",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-light\x20rounded\x22\x20style=\x22min-width:\x2060px;\x20height:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-image\x20text-muted\x22\x20style=\x22font-size:\x201.5rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔄\x20Combinado",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27",
    "abs",
    "🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "✅\x20Código\x20detectado\x20(configuración\x20agresiva):",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20SKU\x22\x20data-copiar=\x22",
    "dailyLimit",
    "findIndex",
    "Todos\x20los\x20endpoints\x20fallaron\x20(",
    "src",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-8\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20nombre-producto-responsive\x22\x20style=\x22color:#616161;\x22>",
    "#ultimaActualizacion",
    "revokeObjectURL",
    "\x20promociones",
    "QR_CODE",
    "CODE_128",
    "consultarProductoDesdeModal",
    "❌\x20Instalación\x20rechazada",
    "code_39",
    "⚠️\x20Error\x20al\x20procesar\x20producto\x20",
    "upc_e",
    "installing",
    "✅\x20Google\x20Vision\x20detectó:",
    "hide",
    ".modal-body",
    "onclick",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-start\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-dark\x22\x20style=\x22font-size:\x201rem;\x22>",
    "round",
    "toFixed",
    ".alert-danger",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20row-cols-2\x20row-cols-md-3\x20row-cols-lg-4\x20g-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔥\x20",
    "pdf417",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "key",
    "Error\x20en\x20detección",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22\x20style=\x22font-weight:500;\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "4293972ijBrwM",
    "scope",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB",
    "descripcion",
    "Promoción\x20",
    "credit_note",
    "📋\x20Probando\x20configuración:\x20",
    "onload",
    "productosBasicos",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-4\x20d-flex\x20justify-content-center\x20mb-3\x20mb-lg-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fff;\x20border-radius:16px;\x20box-shadow:0\x204px\x2024px\x20rgba(0,0,0,0.15);\x20padding:16px;\x20display:flex;\x20justify-content:center;\x20align-items:center;\x20width:240px;\x20height:140px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "target",
    "ticket",
    "i2of5",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20consultar-historial-btn\x22\x20title=\x22Ver\x20detalles\x20completos\x22\x20data-sku=\x22",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20promo-badge\x22>🏷️\x20PROMO</span>",
    "location",
    "Conectando\x20con\x20todos\x20los\x20servidores",
    "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2060vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ticket</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Cliente</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Importe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Fecha</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Método</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Banco</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td><small>",
    "total_price",
    "8466088sKbZoy",
    ")</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20",
    "💻\x20Abriendo\x20modal\x20en\x20desktop...",
    ",\x20Diario:\x20",
    "<small\x20class=\x22text-success\x22><strong>Precio\x20unitario:</strong>\x20$",
    "data",
    "https://verificadorb9-backend.vercel.app/api/productos-con-codigos",
    "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto",
    "🔄\x20Consultando\x20endpoint\x20básico...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "JsBarcode",
    "NOMBRE",
    "UPC_E",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:\x200.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💰\x20Ahorras\x20$",
    "toDataURL",
    "primary",
    "ean_reader",
    "✅\x20Datos\x20locales\x20encontrados:\x20productos:",
    "items",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontraron\x20resultados\x20para:\x20",
    "✅\x20Productos\x20cargados\x20con\x20códigos\x20de\x20barras:",
    "race",
    "🚀\x20Iniciando\x20actualización\x20con\x20progreso...",
    "mostrarModalPromocionesGenerales",
    "1196748juLeVG",
    "\x20días",
    "📄\x20Nota\x20Crédito",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-warning\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔥\x20",
    "smooth",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>Promedio</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20w-100\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22mostrarDetalleVendedor(\x27",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "POST",
    ".copiar-btn",
    "getContext",
    "\x20me-1\x20mb-1\x22\x20style=\x22font-size:0.75rem;\x22>",
    "🔧\x20Error\x20500:\x20Problema\x20interno\x20del\x20servidor",
    "✅\x20Google\x20Vision\x20API\x20usada\x20exitosamente\x20-\x20contador\x20local\x20actualizado",
    "contains",
    "🔄\x20Primera\x20carga:\x20cargando\x20SOLO\x20productos\x20(promos\x20al\x20presionar\x20Actualizar)...",
    "overflowY",
    "🔍\x20Buscando\x20promociones\x20para\x20SKU:",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(",
    "🎯\x20Mostrando\x20promociones\x20locales...",
    "keydown",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-4\x20col-lg-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22>$",
    ".modal-content",
    "Generar\x20Reporte",
    "promociones",
    "<i\x20class=\x22bi\x20bi-clipboard-check\x22></i>",
    "toUTCString",
    "checked",
    "🔄\x20Iniciando\x20detección\x20con\x20Quagga...",
    "isConfirmed",
    "\x20para:\x20",
    "recordUsage",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x223\x22>",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Precio:\x20$",
    "\x20small\x22>",
    "\x22\x20(",
    "✅\x20Código\x20válido\x20seleccionado:\x20",
    "./service-worker.js",
    "ean_8",
    "📊\x20Respuesta\x20del\x20backend:",
    "📱\x20Abriendo\x20modal\x20en\x20dispositivo\x20móvil...",
    "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js",
    "spellcheck",
    "productos_ts",
    "https://contador-apicloudvision.vercel.app/api/stats",
    "7mHYYAz",
    "🆕\x20Nueva\x20versión\x20lista\x20para\x20usar",
    "grid",
    "</small>",
    "#mensajeActualizacion",
    "🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers",
    "\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22resultadosBusquedaModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22resultadosBusquedaModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22resultadosBusquedaModalLabel\x22>🔎\x20Resultados\x20de\x20Búsqueda</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22resultados-busqueda-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x20d-flex\x20flex-wrap\x20gap-2\x20align-items-center\x20justify-content-between\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22pageSizeSelect\x22\x20class=\x22mb-0\x22>Mostrar:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22pageSizeSelect\x22\x20class=\x22form-select\x20form-select-sm\x22\x20style=\x22width:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22\x20selected>10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2220\x22>20</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2250\x22>50</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-success\x20btn-sm\x20d-flex\x20align-items-center\x20gap-1\x22\x20id=\x22btnToggleVista\x22\x20title=\x22Cambiar\x20vista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-grid-3x3-gap\x22\x20id=\x22iconVista\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22labelVista\x22>Cuadros</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x22\x20id=\x22resultadosInfo\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnPrevResultados\x22>«\x20Anterior</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22pageIndicator\x22\x20class=\x22text-muted\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnNextResultados\x22>Siguiente\x20»</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22inputPageJump\x22\x20class=\x22form-control\x20form-control-sm\x22\x20style=\x22width:90px;\x22\x20min=\x221\x22\x20placeholder=\x22Ir\x20a...\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x20btn-sm\x22\x20id=\x22btnIrPagina\x22>Ir</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>",
    "validTo",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22",
    "getImageData",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22height:\x2080px;\x20object-fit:\x20contain;\x20padding:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Combo\x20Especial",
    "Fecha\x20desconocida",
    "postMessage",
    "#btnSpinner",
    "message",
    "Error\x20en\x20actualización:",
    "Consultando\x203\x20endpoints...",
    "googleVisionConfig",
    "📸\x20Procesando\x20con\x20Quagga...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x22>$",
    "https://verificadorb9-backend.vercel.app/api/productos",
    "AZTEC",
    "bg-dark",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22consultarProductoDesdeModal(\x27",
    "monthlyUsed",
    "border-secondary",
    "pro_nombrePromo",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>❌\x20Error\x20al\x20cargar\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "style",
    "stop",
    "upc_reader",
    "🔄\x20Tercera\x20tentativa:\x20imagen\x20original\x20sin\x20procesamiento...",
    "🔧\x20Error\x20500:\x20Problema\x20con\x20Google\x20Vision\x20API",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20d-flex\x20align-items-center\x20gap-2\x22>",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
    "keys",
    "getElementById",
    "✅\x20Los\x203\x20endpoints\x20consultados",
    "left",
    "\x20mensual,\x20",
    "unshift",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x20text-muted\x20small\x22>",
    "history",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Vendedores</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-info\x20mb-0\x22>",
    "fill",
    "list-group-item\x20list-group-item-action\x20d-flex\x20align-items-center",
    "textAlign",
    "click",
    "💡\x20Verifica\x20que\x20el\x20proyecto\x20#1070150612422\x20tenga\x20facturación\x20activa",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔑\x20API\x20Key\x20inválida\x20-\x20verifica\x20la\x20configuración\x20en\x20Vercel</div>",
    "promociones-container",
    "count",
    "valor_total",
    "pro_tipoPromo",
    "Promoción\x20especial",
    "fallbackTiempo",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Precio\x20promocional</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "data-sku",
    "https://media.megaservicio.net",
    "alternativa",
    "Error\x20al\x20generar\x20reporte:",
    "update",
    "srcObject",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20",
    "length",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20formato:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "preventDefault",
    "codigos_barras",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>\x20\x20Total\x20SKUs:</strong>\x20",
    "Verifique\x20su\x20conexión\x20a\x20internet",
    "add",
    "\x0a\x20\x20\x20\x20\x20\x20",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20Error\x20verificando\x20estado",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Backend:\x20https://contador-apicloudvision.vercel.app/</small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-info\x20btn-sm\x22\x20onclick=\x22diagnosticarBackend()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Probar\x20Conexión\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "scrollIntoView",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "true",
    "Sin\x20especificar",
    "addEventListener",
    "maxWidth",
    "Generando...",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Resumen\x20del\x20Mes:\x20",
    "pop",
    "importe",
    "500",
    "parse",
    "<br><br>📊\x20<strong>Uso\x20local:</strong>\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Cantidad</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "className",
    "Backend\x20error",
    "No\x20especificado",
    "%\x20del\x20total</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22>",
    "getFullYear",
    "historial",
    "code_93_reader",
    "aztec",
    "📡\x20Consultando\x20TODOS\x20los\x20endpoints\x20de\x20productos...",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🌐\x20Google\x20Vision\x20API:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "getMonth",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-decoration-line-through\x20text-muted\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>$",
    "json",
    ".modal-backdrop,\x20.modal-backdrop-mobile",
    "📋\x20Configuración\x20final\x20para\x20códigos\x20largos...",
    "split",
    "barcode-",
    "#btnTexto",
    "Error\x20consultando\x20producto\x20desde\x20historial:",
    "productosConCodigos",
    "🔄\x20Backend\x20no\x20disponible,\x20usando\x20detección\x20local",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Error\x20generando\x20código\x20de\x20barras:",
    "❌\x20Google\x20Vision\x20no\x20detectó\x20texto",
    "idPromo",
    "<img\x20src=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "#f8f9fa",
    "\x20encontrados</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong></small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "reporteVentasModal",
    "querySelector",
    "lastUsedDate",
    "filter",
    "❌\x20Sin\x20datos,\x20usando\x20genérico",
    "block",
    "\x20más\x20con\x20promociones.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "credit",
    "decodeSingle",
    "?stats=true",
    "pr_imagen",
    "map",
    "\x20-\x20",
    "log",
    "outcome",
    "onchange",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Error\x20al\x20procesar\x20la\x20imagen</div>",
    "✅\x20Detección\x20avanzada\x20activada",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📦\x20Productos\x20en\x20promoción:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "bi\x20bi-list",
    "\x20→\x20",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "💾\x20Guardar",
    "SKIP_WAITING",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Ventas</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-primary\x20mb-0\x22>",
    "cantidad",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x22\x20style=\x22cursor:pointer;\x22\x20onclick=\x22mostrarProductoPromocion(\x27",
    "🔍\x20Iniciando\x20diagnóstico\x20del\x20backend...",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudieron\x20cargar\x20las\x20promociones:\x20",
    "getTracks",
    "enabledCheck",
    "qr_code",
    "codabar",
    "\x20longitud:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-2\x22>Sin\x20ventas\x20en\x20",
    "nombre_promocion",
    "🎯\x20PROMOCIÓN\x20ENCONTRADA\x20para\x20SKU\x20",
    "bg-primary",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Total\x20Tickets</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "rawValue",
    "\x20tickets</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x20mb-2\x22\x20style=\x22height:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-success\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x20",
    "textContent",
    "EAN8",
    "\x27)\x22\x20title=\x22Ver\x20detalles\x20completos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "reader",
    "⚠️\x20<strong>Límite\x20cerca:</strong>\x20",
    "register",
    "PERMISSION_DENIED",
    "🧪\x20Respuesta\x20completa\x20vision-detect:",
    "\x20text-white\x20d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>",
    "Backend\x20con\x20error:\x20",
    "mesReporte",
    "🚀\x20Usando\x20Barcode\x20Detection\x20API\x20nativa",
    "\x20tickets)</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "✅\x20Extraído\x20formato\x20completo\x20del\x20nombre:",
    "\x20producto",
    "resultados-busqueda-body",
    "canvas",
    "CANTIDAD_X_PRECIO_FIJO",
    "no-store",
    "backgroundColor",
    "beforeend",
    "diagnostico-resultado",
    "códigos\x20de\x20barras\x20❌\x20(CORS/Red)",
    "17706150idZgVa",
    "opacity",
    "⚠️\x20Consulta\x20parcial\x20de\x20endpoints",
    "⚠️\x20Error\x20con\x20endpoint\x20básico:",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error\x20al\x20generar\x20el\x20reporte:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "ean_8_reader",
    "pro_precio_total",
    "backend_mejorado",
    "\x22\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Vista:\x20",
    "📱\x20Dispositivo\x20móvil:",
    "<div\x20class=\x22row\x22>",
    "pr_gtin",
    "observe",
    "remainingMonthly",
    "⚠️\x20BarcodeDetector\x20no\x20disponible\x20en\x20este\x20navegador",
    "💵\x20Crédito",
    "function",
    "files",
    "💳\x20Tarjeta\x20Crédito",
    "getUsageStatus",
    "shift",
    "❌\x20Error\x20guardando\x20promociones\x20en\x20IndexedDB:",
    "accepted",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>TOTAL</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x22\x20style=\x22min-width:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "promociones_ts",
    "💳\x20Tarjeta\x20Débito",
    "<span\x20class=\x22badge\x20bg-secondary\x22\x20style=\x22font-size:\x200.7rem;\x22>+",
    "📋\x20Cheque",
    "Error\x20en\x20el\x20servidor\x20proxy",
    "has",
    "appendChild",
    "cliente",
    "nombre",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22verPromociones()\x22\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "code_128",
    "\x20promocion(es)\x20encontrada(s)\x20para\x20SKU:\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20descripción\x22\x20data-copiar=\x22",
    "upc_e_reader",
    "🎯\x20Umbral\x20calculado:\x20",
    "<div\x20class=\x22text-center\x20text-muted\x22>Sin\x20resultados</div>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20selecciona\x20un\x20mes\x20para\x20generar\x20el\x20reporte.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "auto",
    "x-large",
    "⚠️\x20Error\x20con\x20endpoint\x20de\x20códigos\x20de\x20barras:",
    "get",
    "padStart",
    "es-CL",
    "https://reporte-ventas-b9.vercel.app/api/ventas?mes=",
    "mensaje",
    "fuente",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22btn-vendedor-",
    "off",
    "absolute",
    "toString",
    "Nueva\x20versión\x20disponible.\x20¿Recargar\x20la\x20página?",
    "includes",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20",
    "mostrarProductoPromocion",
    "💰\x20Efectivo",
    "✅\x20Tercera\x20tentativa\x20exitosa:",
    "d-none",
    "bi\x20bi-grid-3x3-gap",
    "\x22\x20role=\x22progressbar\x22\x20style=\x22width:\x20",
    "requestSubmit",
    "\x20al\x20",
    "📏\x20Ampliando\x20imagen\x20pequeña:\x20",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "No\x20se\x20pudieron\x20cargar\x20productos\x20de\x20ningún\x20endpoint",
    "🔧\x20Sugerencia:\x20Verificar\x20configuración\x20CORS\x20en\x20el\x20backend\x20para\x20/api/productos-con-codigos",
    "data-form-type",
    "then",
    "FECHA_ESCANEO",
    "estadisticas",
    "insertAdjacentHTML",
    "relative",
    ".modal-backdrop",
    "readonly",
    "responses",
    "ℹ️\x20Promos\x20locales\x20disponibles:",
    "✅\x20Instalación\x20aceptada",
    "success",
    "width",
    "Cargando\x20promociones",
    "validFrom",
    "Productos:\x20",
    "forEach",
    "\x0a\x20\x20/*\x20Estilos\x20específicos\x20para\x20modal\x20en\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20/*\x20Evitar\x20oscurecimiento\x20de\x20fondo\x20en\x20móviles\x20*/\x0a\x20\x20\x20\x20.modal-backdrop,\x0a\x20\x20\x20\x20.modal-backdrop.show,\x0a\x20\x20\x20\x20.modal-backdrop.fade\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20stretch\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-dialog,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-content,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-body,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20flex:\x201\x20!important;\x0a\x20\x20\x20\x20\x20\x20overflow-y:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-height:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding:\x201rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-header,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-footer,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-footer\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20Asegurar\x20que\x20las\x20tarjetas\x20no\x20causen\x20overflow\x20horizontal\x20*/\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.row\x20{\x0a\x20\x20\x20\x20\x20\x20margin-left:\x20-8px\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin-right:\x20-8px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20[class*=\x22col-\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20padding-left:\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding-right:\x208px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Mejorar\x20scroll\x20en\x20todos\x20los\x20dispositivos\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0,\x200,\x200)\x20!important;\x20/*\x20Forzar\x20aceleración\x20por\x20hardware\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h5\x20text-success\x22>$",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Actualizado:</strong>\x20",
    "📱\x20Cerrando\x20modal\x20móvil...",
    "💡\x20El\x20contador\x20del\x20backend\x20se\x20actualiza\x20automáticamente\x20en\x20el\x20servidor",
    "Error\x20inicial\x20cargando\x20productos:",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "ultimaActualizacion",
    "labelVista",
    "🧪\x20Probando\x20vision-detect\x20con\x20imagen\x20de\x20prueba...",
    "getAll",
    "tipo",
    "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "Procesando\x20productos",
    "userChoice",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Formato:",
    "básico\x20❌\x20(error\x20HTTP)",
    "UPC",
    "resultado",
    "Enter",
    "agresiva",
    "toISOString",
    "Failed\x20to\x20fetch",
    "banco",
    "large",
    "✅\x20Endpoint\x20básico\x20consultado:",
    "now",
    "submit",
    "⚠️\x20No\x20se\x20pudieron\x20obtener\x20estadísticas\x20de\x20códigos\x20de\x20barras",
    "btnReporteTexto",
    "</div>",
    "innerHTML",
    "statechange",
    "resetMonthlyUsage",
    "focus",
    "classList",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "<br>",
    "display",
    "warn",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20",
    "GET",
    "onsuccess",
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x20",
    "verificadorB9DB",
    "flex",
    "fecha",
    "storageKey",
    "maxHeight",
    "CORS_ERROR",
    ".modal-dialog",
    "position",
    "canUseAPI",
    "ITF",
    "PRECIO",
    "state",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "❌\x20Error\x20específico\x20del\x20backend:",
    "pr_sku",
    "#6c757d",
    "view",
    "\x20segundos",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "googleVisionUsage",
    "objectStore",
    "font",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "getUserMedia",
    "detalleVendedorModal",
    "precioTotal",
    "startsWith",
    "\x27);\x20})()\x22>Ver</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>",
    "\x20|\x20Promociones:\x20nunca",
    "center",
    "CODIGO",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-top\x20pt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-center\x20mb-3\x22>�\x20Métodos\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "value",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-success\x20mb-0\x22>$",
    "🔧\x20Problema\x20de\x20CORS\x20detectado\x20-\x20necesita\x20configuración\x20en\x20backend",
    "objectStoreNames",
    "\x20->\x20",
    "🍎\x20Dispositivo\x20iOS:",
    "2-digit",
    "type",
    "fire",
    "precio_total",
    "Lista",
    "\x20\x20\x20•\x20Problema\x20en\x20el\x20código\x20de\x20la\x20función\x20serverless",
    "❌\x20Error\x20cargando\x20promociones:",
    "•\x20Mensual:\x20",
    "✅\x20Extraído\x20formato\x20con\x20peso\x20del\x20nombre:",
    "Generando\x20código\x20de\x20barras\x20",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22row\x20align-items-center\x20justify-content-center\x20g-0\x20mb-4\x22\x20style=\x22padding:\x200px\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "boundingBox",
    "bg-success",
    "No\x20se\x20encontraron\x20datos\x20del\x20vendedor",
    "month",
    "query",
    "disabled",
    "cantidadTickets",
    "check",
    "✅\x20Detección\x20avanzada\x20(backend)\x20configurada\x20y\x20activa",
    "application/json",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📋\x20Descripción\x20completa\x20de\x20productos:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-3\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "environment",
    "d-flex\x20flex-column\x20align-items-center\x20mb-3",
    "?t=",
    "🌐\x20<strong>Backend:</strong>\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
    "tickets",
    "%</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x22\x20style=\x22height:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-",
    "description",
    "CORS_ERROR:\x20Backend\x20no\x20accesible\x20desde\x20este\x20dominio",
    "skus",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "credit_card",
    "1560826jTNRSI",
    "\x20/\x20",
    "cookie",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20mb-0\x22>🏷️\x20",
    "mediaDevices",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20class=\x22barcode-canvas\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-bold\x20text-dark\x22>",
    "autocorrect",
    "statusText",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>💳\x20Métodos\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "autocomplete",
    "<div\x20class=\x22me-3\x22\x20style=\x22min-width:60px;\x22><img\x20src=\x22",
    "show",
    "❌\x20No\x20se\x20encontraron\x20códigos\x20válidos\x20en\x20el\x20texto",
    "%;\x20transition:\x20width\x200.3s\x20ease;\x22\x20aria-valuenow=\x22",
    "\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20text-truncate\x22\x20title=\x22",
    "❌\x20Backend\x20no\x20disponible:",
    "🔄\x20Sin\x20productos:\x20cargando\x20SOLO\x20productos",
    "🔍\x20Código\x20candidato\x20encontrado:\x20",
    "<span\x20class=\x22badge\x20",
    "sugerenciasDiv",
    "%\x20del\x20total\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20w-100\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22mostrarDetalleVendedor(\x27",
    "Error\x20HTTP:\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20<strong>⚠️\x20No\x20se\x20detectó\x20código\x20válido</strong><br>\x0a\x20\x20\x20\x20\x20\x20Para\x20códigos\x20largos\x20como\x20este,\x20intenta:<br>\x0a\x20\x20\x20\x20\x20\x20•\x20📏\x20<strong>Recortar\x20muy\x20cerca\x20del\x20código</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20💡\x20<strong>Mejor\x20iluminación\x20uniforme</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20📱\x20<strong>Evitar\x20superficies\x20reflectivas</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20🔍\x20<strong>Imagen\x20más\x20nítida\x20y\x20estable</strong>",
    "toDateString",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-primary\x22>$",
    "serviceWorker",
    "codeResult",
    "100%",
    "monthlyCount",
    "\x0a\x20\x20<div\x20class=\x22d-flex\x20gap-2\x20mb-4\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnPromociones\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#28a745;\x20background:#d4edda;\x20color:#155724;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🏷️\x20Ver\x20Promociones\x0a\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnReporteVentas\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#007bff;\x20background:#e7f3ff;\x20color:#004085;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x22\x20onclick=\x22mostrarModalReporteVentas()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20📊\x20Reporte\x20Ventas\x0a\x20\x20\x20\x20</button>\x0a\x20\x20</div>\x0a\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20w-100\x20mb-2\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20flex-column\x20flex-md-row\x20align-items-md-end\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20<h5\x20class=\x22ant-typography\x20css-1r8qqf1\x20mb-0\x22>Productos</h5>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22ultimaActualizacion\x22\x20class=\x22ant-typography\x20css-1r8qqf1\x20ms-md-4\x22\x20style=\x22font-size:1rem;\x22>Última\x20actualización:\x20nunca\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnActualizar\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#d9d9d9;\x20background:#fff;\x20color:#222;\x20font-size:1rem;\x20padding:2px\x2016px;\x20margin-left:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnTexto\x22>Actualizar</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20id=\x22mensajeActualizacion\x22\x20class=\x22text-center\x22\x20style=\x22min-height:\x201.5rem;\x22></div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20promociones\x20generales\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22promocionesGeneralesModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22promocionesGeneralesModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22promocionesGeneralesModalLabel\x22>🏷️\x20Todas\x20las\x20Promociones\x20Disponibles</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22promociones-generales-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones...</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20me-auto\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20reporte\x20de\x20ventas\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22reporteVentasModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22reporteVentasModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22reporteVentasModalLabel\x22>📊\x20Reporte\x20de\x20Ventas</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22cerrarModalReporteVentas()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22reporte-ventas-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22mesReporte\x22\x20class=\x22form-label\x22>Seleccionar\x20Mes:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22month\x22\x20id=\x22mesReporte\x22\x20class=\x22form-control\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x20d-flex\x20align-items-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-primary\x22\x20onclick=\x22generarReporteVentas()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnReporteTexto\x22>Generar\x20Reporte</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnReporteSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22reporte-contenido\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-bar-chart\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Selecciona\x20un\x20mes\x20y\x20genera\x20el\x20reporte\x20para\x20ver\x20las\x20ventas\x20por\x20vendedor.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22cerrarModalReporteVentas()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "disconnect",
    "❌\x20Error\x20con\x20Google\x20Vision,\x20usando\x20fallback:",
    "setItem",
    "cash",
    "saveUsage",
    "putImageData",
    "</strong>\x20resultados\x20para\x20\x22",
    "✅\x20Código\x20detectado\x20(configuración\x20principal):",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "applyConstraints",
    "Error\x20cargando\x20promociones:",
    "✅\x20Configuración\x20guardada",
    "qty",
    "Error\x20obteniendo\x20promociones:",
    "CODABAR",
    "EAN13",
    "EAN_13",
    "📋\x20Detalles\x20completos:",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Códigos\x20totales:</strong>\x20",
    "clipboard",
    "❌\x20Endpoint\x20/api/stats\x20falló:",
    "zIndex",
    "reduce",
    "✅\x20Service\x20Worker\x20registrado:",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "Timeout",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h5>🏷️\x20No\x20se\x20encontraron\x20productos\x20con\x20promociones</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-0\x22>Puede\x20ser\x20que\x20no\x20haya\x20promociones\x20activas\x20en\x20este\x20momento\x20o\x20que\x20el\x20servicio\x20no\x20esté\x20disponible.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "readwrite",
    "page",
    "matchAll",
    "text",
    "catch",
    "activo",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x20ms-2\x22>1\x20unidad</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22><strong>SKU:</strong>\x20",
    "modal-open",
    "🔄\x20Consultando\x20endpoint\x20de\x20promociones...",
    "resultadosBusquedaModal",
    "webkitOverflowScrolling",
    "image/png",
    "<div\x20class=\x22text-muted\x22\x20style=\x22font-size:2rem;\x22><i\x20class=\x22bi\x20bi-image\x22></i></div>",
    "\x20\x20\x20💡\x20Ejecuta\x20diagnosticarBackend()\x20para\x20más\x20detalles",
    "format",
    "Cuadros",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "bg-success\x20text-white",
    "Backend\x20error:\x20",
    "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td><small\x20class=\x22text-muted\x22>",
    "getInstance",
    "precio",
    "imageSmoothingEnabled",
    "\x20(quedan\x20",
    "Actualizar",
    "\x27,\x20",
    "credit_note_application",
    "none",
    "top",
    "touch",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20",
    "💡\x20Ve\x20a:\x20https://console.developers.google.com/billing/enable?project=1070150612422",
    "pro_precioPromo",
    "code",
    "test",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "card",
    "pageSize",
    "nearest",
    "\x20usos\x20mensuales",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "totalCodigos",
    "productos",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error:</strong>\x20",
    "https://verificadorb9-backend.vercel.app/api/promociones",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Área\x20para\x20mostrar\x20resultados\x20del\x20diagnóstico\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22diagnostico-resultado\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Detección\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20📷\x20<strong>Local:</strong>\x20Html5QrCode\x20+\x20BarcodeDetector\x20+\x20Quagga.js<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🌐\x20<strong>Premium:</strong>\x20Google\x20Vision\x20API\x20(para\x20códigos\x20difíciles)<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🔄\x20<strong>Automático:</strong>\x20Fallback\x20inteligente\x20entre\x20métodos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>✅\x20Ventajas\x20del\x20backend:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Sin\x20límites\x20por\x20dispositivo<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Detección\x20superior\x20en\x20superficies\x20reflectivas<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Mejor\x20precisión\x20con\x20códigos\x20largos<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Funciona\x20con\x20imágenes\x20de\x20baja\x20calidad<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Gestión\x20centralizada\x20de\x20recursos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🔄\x20Fallback\x20automático:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Si\x20el\x20backend\x20no\x20está\x20disponible,\x20la\x20app\x20usará\x20detección\x20local\x20automáticamente.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Recomendación:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mantén\x20activada\x20la\x20detección\x20avanzada\x20para\x20mejores\x20resultados.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "NetworkError",
    "pro_grupoProductos_primaria",
    "enabled",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20",
    "\x20horas",
    "code_39_vin_reader",
    "createElement",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22>Total\x20con\x20Promo</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "promociones:",
    "slice",
    "controllerchange",
    "totalVentas",
    "rejected",
    "open",
    "Formato\x20de\x20promociones\x20inválido",
    "ayuda",
    "match",
    "onLine",
    "pr_name",
    "es_oficial",
    "replace",
    "push",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>",
    "🔄\x20Probando\x20con\x20imagen\x20original...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20",
    "bg-warning",
    "❌\x20Error\x20consultando\x20endpoints",
    "body",
    "inserta\x20sku\x20o\x20busca\x20un\x20producto",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "#btnPromociones",
    "installed",
    "removeChild",
    "setAttribute",
    "limpiarHistorialBtn",
    "🏦\x20Transferencia",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>🏷️\x20Sistema\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Productos:</strong>\x20",
    "#000000",
    "hidden.bs.modal",
    "toLowerCase",
    "ean_13",
    "📡\x20Enviando\x20a\x20backend\x20proxy...",
    "code_93",
    "load",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers</div>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Hace\x20",
    "\x20de\x20",
    "button",
    "códigos\x20de\x20barras\x20✅",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "showUsageWarning",
    "createObjectStore",
    "clase",
    "API_KEY_INVALID",
    "floor",
    "http",
    "\x20usos\x20hoy",
    "btnNextResultados",
    "152EzEYDA",
    "dailyCount",
    "remove",
    "substring",
    "muted",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22detalleVendedorModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>📋\x20Detalle:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x20bg-transparent\x20border-0\x20pt-0\x20pb-2\x20text-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-primary\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20spinner-border-sm\x20me-2\x22\x20role=\x22status\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Diagnosticando\x20backend...\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "CODE_93",
    "flexDirection",
    "🔄\x20Service\x20Worker\x20actualizado",
    "pointerEvents",
    "1\x20endpoint\x20completado,\x20finalizando...",
    "bg-gradient",
    "</span>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>MSI</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Código\x20de\x20barras\x20funcional\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22barcode-",
    "💡\x20Verifica\x20la\x20configuración\x20de\x20GOOGLE_VISION_API_KEY\x20en\x20Vercel",
    "Google\x20Vision\x20API\x20activa\x20y\x20funcional",
    "Error\x20procesando\x20imagen:",
    ".consultar-historial-btn",
    "i2of5_reader",
    "productosConCodigosAdicionales",
    "es-MX",
    "📊\x20<strong>Uso\x20local\x20de\x20este\x20dispositivo:</strong><br>",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "❌\x20Error\x20con\x20API\x20nativa,\x20usando\x20fallback:",
    "🔄\x20Nueva\x20versión\x20del\x20Service\x20Worker\x20disponible",
    "\x20|\x20Promociones:\x20",
    "activeElement",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-check\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22form-check-input\x22\x20type=\x22checkbox\x22\x20id=\x22enabledCheck\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-muted\x22>-</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Sin\x20datos</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "✅\x20Códigos\x20válidos:\x20",
    "detalles",
    "#198754",
    "upc_a",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "allSettled",
    "generarReporteVentas",
    "✅\x20Todos\x20los\x20endpoints\x20consultados",
    "✅\x20Backend\x20activo.\x20Estadísticas:",
    "transparent",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<br><small\x20class=\x22text-muted\x22>Verifica\x20que\x20el\x20proxy\x20de\x20Vercel\x20esté\x20funcionando</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "data-copiar",
    "❌\x20Error\x20en\x20diagnóstico:",
    "BILLING_DISABLED",
    "status",
    "error",
    "🧮\x20Calculando\x20precio\x20total:\x20",
    "usarCodigosBarras",
    "🔍\x20Actualizando\x20promociones\x20en\x20vista:",
    "🔍\x20Validando:\x20\x22",
    "❓\x20Otro",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x20mt-2\x22\x20style=\x22font-size:0.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Códigos\x20disponibles:</strong>\x20",
    "getItem",
    "Nunca\x20actualizado",
    "mostrarDetalleVendedor",
    "\x20diario<br>🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "❌\x20Error\x20de\x20conexión",
    "3912690SsOKOD",
    "change",
    "head",
    "reason",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x20result-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22result-card-img\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "margin",
    "#ffffff",
    "fillText",
    "blur",
    "placeholder",
    "<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$",
    "transaction",
    "bg-light\x20text-dark",
    "promocionesGeneralesModal",
    "❌\x20Todas\x20las\x20configuraciones\x20fallaron",
    "code_128_reader",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>...\x20y\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Vendedores</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-info\x22>",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "Producto\x20desconocido",
    "Error\x20verificando\x20datos\x20locales:",
    "itf",
    "📊\x20Resumen\x20endpoints\x20productos:",
    "pro_mensaje",
    "price",
    "usage",
    "🚀\x20Intentando\x20con\x20Google\x20Vision\x20API...",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-medium\x22>",
    "toLocaleDateString",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-sm-6\x20col-lg-4\x20col-xl-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20shadow-sm\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente",
    "bg-secondary",
    "codigo",
    "textAnnotations",
    "isArray",
    "parentNode",
    "details",
    "🔗\x20Ve\x20a:\x20https://console.cloud.google.com/billing",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Tickets</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20",
    "indexeddb_local",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "CODE128",
    "Sin\x20conexión\x20a\x20internet",
    "find",
    "btn-success",
    "\x22\x20alt=\x22",
    "<div\x20class=\x22col\x22>",
    "getAttribute",
    "⚡\x20Actualización\x20completada\x20en\x20",
    "list",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Error\x20en\x20diagnóstico:\x20",
    "border-warning",
    "ceil",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x22>",
    "code_32_reader",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Con\x20códigos\x20adicionales:</strong>\x20",
    "reporte-contenido",
    "consultarProductoDesdeHistorial",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>(",
    "200px",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🚫\x20Vision\x20API\x20No\x20Habilitada</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20Vision\x20API\x20no\x20está\x20habilitada\x20en\x20tu\x20proyecto</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/apis/library/vision.googleapis.com\x22\x20target=\x22_blank\x22>Habilitar\x20Vision\x20API</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "bg-danger",
    "🏦\x20Error\x20de\x20facturación:\x20Habilita\x20billing\x20en\x20Google\x20Cloud",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "userAgent",
    "right",
    "join",
    "⚙️\x20Configuración\x20de\x20detección\x20avanzada",
    "div",
    "btnPrevResultados",
    "diagnostic",
    "codabar_reader",
    "\x0a\x20\x20\x20\x20</div>",
    "oncomplete",
    "<div\x20class=\x22alert\x20alert-danger\x22>❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API</div>",
    "✅\x20Endpoint\x20promociones\x20consultado:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "<i\x20class=\x22bi\x20bi-clipboard\x22></i>",
    "1055",
    "inputPageJump",
    "228290kmuJIh",
    "image/jpeg",
    "%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "btn-outline-primary",
    "max",
    "promociones-generales-modal-body",
    "reload",
    "remainingDaily",
    "\x20más</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "querySelectorAll",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$",
    "resultados_view",
    "installBtn",
    "DATA_MATRIX",
    "\x0a\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td><code>",
    "Error\x20al\x20cargar\x20productos:",
    "stringify",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "innerWidth",
    "CORS",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20encontraron\x20ventas\x20para\x20el\x20mes\x20seleccionado.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "start",
    "insertBefore",
    "fixed",
    "input",
    "🎯\x20Producto\x20encontrado\x20con\x20códigos\x20múltiples:",
    "btnReporteSpinner",
    "📋\x20Promociones\x20(locales):",
    "📸\x20Usando\x20Quagga\x20como\x20fallback",
    "EAN_8",
    "bg-info",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x22>$",
    "pr_precio",
    "🏷️\x20",
    "📝\x20Texto\x20completo\x20detectado:",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20ms-2\x22\x20style=\x22font-size:0.7rem;\x22>🏷️\x20PROMO</span>",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td><span\x20class=\x22badge\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "beforeinstallprompt",
    "debit_card",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20pt-2\x20border-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>📅\x20Vigencia:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20\x20\x20•\x20Variable\x20GOOGLE_VISION_API_KEY\x20no\x20configurada\x20en\x20Vercel",
    "Modal",
    "min",
    "pageIndicator",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Unidades</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x20d-block\x22\x20style=\x22font-size:\x201.3rem;\x22>$",
    "border",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "height",
    ";\x20path=/",
    "precio\x20especial",
    "Error\x20verificando\x20promociones:",
    "video",
    "Fallo\x20al\x20cargar\x20productos\x20iniciales",
    "drawImage",
    "warningThreshold",
    "result",
    "list-group\x20position-absolute\x20w-100",
    "\x22\x20style=\x22width:218px;\x20height:124px;\x20object-fit:contain;\x20background:#fff;\x20border-radius:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "Backend\x20no\x20disponible\x20-\x20usando\x20detección\x20local",
  ];
  _0x215a = function () {
    return _0x5a28ad;
  };
  return _0x215a();
}
function mostrarModalReporteVentas() {
  const _0xb2f4fc = _0x51ede5,
    _0xac96f6 = document[_0xb2f4fc(0x50b)](_0xb2f4fc(0x1b7));
  if (_0xac96f6) {
    const _0x244956 = new bootstrap[_0xb2f4fc(0x423)](_0xac96f6);
    _0x244956[_0xb2f4fc(0x2d3)]();
  }
}
function cerrarModalReporteVentas() {
  const _0x23e3eb = _0x51ede5,
    _0x2e7f0a = document[_0x23e3eb(0x50b)](_0x23e3eb(0x1b7));
  if (_0x2e7f0a) {
    const _0x250012 = bootstrap[_0x23e3eb(0x423)]["getInstance"](_0x2e7f0a);
    _0x250012 && _0x250012["hide"]();
  }
}
async function generarReporteVentas() {
  const _0x584955 = _0x51ede5,
    _0x1029c4 = document["getElementById"]("mesReporte")[_0x584955(0x29f)],
    _0x5bc546 = document[_0x584955(0x50b)](_0x584955(0x3e0)),
    _0x7f95b2 = document[_0x584955(0x50b)](_0x584955(0x26e)),
    _0x3b8b3d = document[_0x584955(0x50b)]("btnReporteSpinner");
  if (!_0x1029c4) {
    _0x5bc546[_0x584955(0x270)] = _0x584955(0x222);
    return;
  }
  (_0x7f95b2["textContent"] = _0x584955(0x539)),
    _0x3b8b3d["classList"][_0x584955(0x36f)](_0x584955(0x236));
  try {
    const _0x3e6de1 = _0x584955(0x229) + _0x1029c4,
      _0x2e89b7 = await fetch(_0x3e6de1);
    if (!_0x2e89b7["ok"])
      throw new Error(
        "Error\x20HTTP:\x20" +
          _0x2e89b7[_0x584955(0x39a)] +
          "\x20" +
          _0x2e89b7[_0x584955(0x2cf)]
      );
    const _0x3b477f = await _0x2e89b7[_0x584955(0x1a6)]();
    if (!_0x3b477f[_0x584955(0x24a)])
      throw new Error(_0x3b477f[_0x584955(0x39b)] || _0x584955(0x216));
    const {
      totalGeneral: _0x3e8ebf,
      totalVendedores: _0x1b7bf3,
      totalTickets: _0xc39430,
      vendedores: _0x5954ad,
    } = _0x3b477f[_0x584955(0x4a4)];
    window[_0x584955(0x43b)] = _0x5954ad;
    let _0xec5f26 = _0x3b477f[_0x584955(0x4a4)]["resumenMetodosPago"];
    !_0xec5f26 &&
      (_0xec5f26 = {
        credit_card: {
          total: 5114377.11,
          cantidad: _0x5954ad[_0x584955(0x2fd)](
            (_0x27d8fe, _0x21c739) =>
              _0x27d8fe +
              (_0x21c739[_0x584955(0x2c0)] || [])[_0x584955(0x1ba)](
                (_0x4e9e08) =>
                  (_0x4e9e08[_0x584955(0x458)] || "")["includes"]("credit_card")
              )[_0x584955(0x527)],
            0x0
          ),
        },
        cash: {
          total: 1288936.88,
          cantidad: _0x5954ad["reduce"](
            (_0x5b2d4b, _0x40ea75) =>
              _0x5b2d4b +
              (_0x40ea75[_0x584955(0x2c0)] || [])[_0x584955(0x1ba)](
                (_0x25680a) =>
                  (_0x25680a[_0x584955(0x458)] || "")[_0x584955(0x231)](
                    _0x584955(0x2ea)
                  )
              )["length"],
            0x0
          ),
        },
        debit_card: {
          total: 1071636.5,
          cantidad: _0x5954ad[_0x584955(0x2fd)](
            (_0x4e45da, _0x2af43e) =>
              _0x4e45da +
              (_0x2af43e["tickets"] || [])["filter"]((_0x3898b1) =>
                (_0x3898b1[_0x584955(0x458)] || "")[_0x584955(0x231)](
                  _0x584955(0x420)
                )
              )[_0x584955(0x527)],
            0x0
          ),
        },
        credit_note_application: {
          total: 298028.03,
          cantidad: _0x5954ad["reduce"](
            (_0x395d5a, _0x1fdbab) =>
              _0x395d5a +
              (_0x1fdbab["tickets"] || [])[_0x584955(0x1ba)]((_0x532ec7) =>
                (_0x532ec7[_0x584955(0x458)] || "")["includes"](
                  _0x584955(0x31d)
                )
              )[_0x584955(0x527)],
            0x0
          ),
        },
        transfer: {
          total: 452621.06,
          cantidad: _0x5954ad[_0x584955(0x2fd)](
            (_0x55b53e, _0x4b5b33) =>
              _0x55b53e +
              (_0x4b5b33["tickets"] || [])[_0x584955(0x1ba)]((_0x56032c) =>
                (_0x56032c[_0x584955(0x458)] || "")[_0x584955(0x231)](
                  _0x584955(0x442)
                )
              )[_0x584955(0x527)],
            0x0
          ),
        },
        check: {
          total: 0x31b,
          cantidad: _0x5954ad[_0x584955(0x2fd)](
            (_0x693bd5, _0x1fcbdf) =>
              _0x693bd5 +
              (_0x1fcbdf[_0x584955(0x2c0)] || [])["filter"]((_0x2dc11a) =>
                (_0x2dc11a[_0x584955(0x458)] || "")[_0x584955(0x231)](
                  _0x584955(0x2b7)
                )
              )[_0x584955(0x527)],
            0x0
          ),
        },
        credit: {
          total: 10799.6,
          cantidad: _0x5954ad[_0x584955(0x2fd)](
            (_0x21c741, _0x24b477) =>
              _0x21c741 +
              (_0x24b477["tickets"] || [])[_0x584955(0x1ba)](
                (_0x5ee460) =>
                  (_0x5ee460[_0x584955(0x458)] || "")["includes"](
                    _0x584955(0x1be)
                  ) &&
                  !(_0x5ee460["metodoPago"] || "")["includes"](
                    _0x584955(0x2c6)
                  ) &&
                  !(_0x5ee460["metodoPago"] || "")[_0x584955(0x231)](
                    _0x584955(0x490)
                  )
              )[_0x584955(0x527)],
            0x0
          ),
        },
        mixed: { total: 0x0, cantidad: 0x0 },
      });
    if (_0x5954ad[_0x584955(0x527)] === 0x0) {
      _0x5bc546[_0x584955(0x270)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22mt-2\x22>Sin\x20datos</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20encontraron\x20ventas\x20para\x20el\x20mes\x20seleccionado.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
      return;
    }
    const _0xbb5b86 = {
      credit_card: _0x584955(0x20b),
      cash: _0x584955(0x234),
      debit_card: "💳\x20Tarjeta\x20Débito",
      credit_note_application: _0x584955(0x4bc),
      transfer: _0x584955(0x355),
      check: _0x584955(0x215),
      credit: _0x584955(0x208),
      mixed: "🔄\x20Combinado",
    };
    let _0x5cba57 = "";
    _0xec5f26 &&
      Object[_0x584955(0x50a)](_0xec5f26)["forEach"]((_0x2d8e9c) => {
        const _0x3de45a = _0x584955,
          _0x1610f1 = _0xec5f26[_0x2d8e9c];
        _0x1610f1["total"] > 0x0 &&
          (_0x5cba57 +=
            _0x3de45a(0x4ce) +
            _0x1610f1["total"]["toLocaleString"](_0x3de45a(0x383), {
              minimumFractionDigits: 0x2,
            }) +
            "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>" +
            (_0xbb5b86[_0x2d8e9c] || _0x2d8e9c) +
            "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>(" +
            Math[_0x3de45a(0x481)](_0x1610f1[_0x3de45a(0x1d1)]) +
            _0x3de45a(0x1ee));
      });
    let _0x2f1666 =
      _0x584955(0x53a) +
      _0x1029c4 +
      _0x584955(0x2a0) +
      _0x3e8ebf[_0x584955(0x44a)](_0x584955(0x383), {
        minimumFractionDigits: 0x2,
      }) +
      _0x584955(0x1d0) +
      _0x1b7bf3 +
      _0x584955(0x512) +
      _0xc39430 +
      _0x584955(0x3ce) +
      (_0x5cba57 ? _0x584955(0x2d0) + _0x5cba57 + _0x584955(0x32c) : "") +
      "\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-secondary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-secondary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Vendedores\x20(" +
      _0x5954ad[_0x584955(0x527)] +
      _0x584955(0x4a0);
    _0x5954ad[_0x584955(0x24f)]((_0x54a406, _0xc54919) => {
      const _0x1b7e75 = _0x584955,
        _0x122bf9 = _0x54a406[_0x1b7e75(0x33d)][_0x1b7e75(0x44a)](
          _0x1b7e75(0x383),
          { minimumFractionDigits: 0x2 }
        );
      _0x2f1666 +=
        _0x1b7e75(0x3c5) +
        _0x54a406["nombre"] +
        "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x54a406[_0x1b7e75(0x21a)] +
        _0x1b7e75(0x4fa) +
        _0x122bf9 +
        _0x1b7e75(0x32b) +
        _0x54a406[_0x1b7e75(0x2b6)] +
        _0x1b7e75(0x1e1) +
        ((_0x54a406[_0x1b7e75(0x33d)] / _0x3e8ebf) * 0x64)[_0x1b7e75(0x482)](
          0x1
        ) +
        _0x1b7e75(0x3fa) +
        ((_0x54a406[_0x1b7e75(0x33d)] / _0x3e8ebf) * 0x64)["toFixed"](0x1) +
        _0x1b7e75(0x2dd) +
        _0x54a406[_0x1b7e75(0x21a)] +
        _0x1b7e75(0x31c) +
        _0xc54919 +
        _0x1b7e75(0x22c) +
        _0xc54919 +
        _0x1b7e75(0x45a);
    }),
      (_0x2f1666 += _0x584955(0x40a)),
      (_0x5bc546["innerHTML"] = _0x2f1666);
  } catch (_0x404258) {
    console[_0x584955(0x39b)](_0x584955(0x523), _0x404258),
      (_0x5bc546[_0x584955(0x270)] =
        _0x584955(0x32f) +
        _0x404258[_0x584955(0x4f5)] +
        "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
  } finally {
    (_0x7f95b2[_0x584955(0x1e2)] = _0x584955(0x4d0)),
      _0x3b8b3d["classList"][_0x584955(0x52f)](_0x584955(0x236));
  }
}
function mostrarDetalleVendedor(_0x34d3c6, _0x2678f1) {
  const _0x132d99 = _0x51ede5,
    _0x234728 = window["ultimosVendedores"] || [],
    _0x3f24c3 = _0x234728[_0x2678f1];
  if (!_0x3f24c3 || !_0x3f24c3[_0x132d99(0x2c0)]) {
    alert(_0x132d99(0x2b2));
    return;
  }
  const _0x1f1439 = _0x3f24c3[_0x132d99(0x2c0)];
  function _0x4dc0c0(_0x16c5d7) {
    const _0x5c3824 = _0x132d99,
      _0x21fc16 = (_0x16c5d7 || "")[_0x5c3824(0x359)]()[_0x5c3824(0x45b)]();
    if (_0x21fc16[_0x5c3824(0x231)]("cash") || _0x21fc16 === _0x5c3824(0x2ea))
      return { nombre: _0x5c3824(0x234), clase: _0x5c3824(0x2b1) };
    else {
      if (
        _0x21fc16["includes"]("credit_card") ||
        _0x21fc16 === _0x5c3824(0x2c6)
      )
        return { nombre: _0x5c3824(0x20b), clase: _0x5c3824(0x1de) };
      else {
        if (
          _0x21fc16[_0x5c3824(0x231)](_0x5c3824(0x420)) ||
          _0x21fc16 === _0x5c3824(0x420)
        )
          return { nombre: _0x5c3824(0x213), clase: _0x5c3824(0x417) };
        else {
          if (
            _0x21fc16[_0x5c3824(0x231)](_0x5c3824(0x442)) ||
            _0x21fc16 === _0x5c3824(0x442)
          )
            return { nombre: _0x5c3824(0x355), clase: _0x5c3824(0x3c7) };
          else {
            if (
              _0x21fc16[_0x5c3824(0x231)](_0x5c3824(0x490)) ||
              _0x21fc16 === _0x5c3824(0x31d)
            )
              return { nombre: _0x5c3824(0x4bc), clase: _0x5c3824(0x34b) };
            else {
              if (
                _0x21fc16[_0x5c3824(0x231)]("check") ||
                _0x21fc16 === _0x5c3824(0x2b7)
              )
                return { nombre: "📋\x20Cheque", clase: _0x5c3824(0x4fd) };
              else {
                if (
                  _0x21fc16[_0x5c3824(0x231)](_0x5c3824(0x1be)) &&
                  !_0x21fc16["includes"](_0x5c3824(0x327))
                )
                  return { nombre: _0x5c3824(0x208), clase: _0x5c3824(0x3e5) };
                else
                  return _0x21fc16["includes"](",") ||
                    _0x21fc16[_0x5c3824(0x231)]("\x20")
                    ? { nombre: "🔄\x20Combinado", clase: _0x5c3824(0x37a) }
                    : { nombre: _0x5c3824(0x3a0), clase: _0x5c3824(0x3b4) };
              }
            }
          }
        }
      }
    }
  }
  let _0x1c280a = _0x132d99(0x372) + _0x34d3c6 + _0x132d99(0x49c);
  _0x1f1439[_0x132d99(0x24f)]((_0x31916b) => {
    const _0x2d6840 = _0x132d99,
      _0x1a41d8 = _0x4dc0c0(_0x31916b["metodoPago"]),
      _0x24c76a = new Date(_0x31916b[_0x2d6840(0x280)])[_0x2d6840(0x3c4)](
        _0x2d6840(0x383),
        {
          day: _0x2d6840(0x2a5),
          month: _0x2d6840(0x2a5),
          hour: _0x2d6840(0x2a5),
          minute: "2-digit",
        }
      );
    _0x1c280a +=
      _0x2d6840(0x406) +
      _0x31916b[_0x2d6840(0x496)] +
      "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>" +
      _0x31916b[_0x2d6840(0x219)] +
      "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$" +
      parseFloat(_0x31916b["importe"])["toLocaleString"](_0x2d6840(0x383), {
        minimumFractionDigits: 0x2,
      }) +
      _0x2d6840(0x49d) +
      _0x24c76a +
      _0x2d6840(0x41d) +
      _0x1a41d8[_0x2d6840(0x367)] +
      "\x20small\x22>" +
      _0x1a41d8[_0x2d6840(0x21a)] +
      _0x2d6840(0x316) +
      (_0x31916b["banco"] || "-") +
      _0x2d6840(0x409);
  });
  const _0x4fe76c = _0x1f1439["reduce"](
    (_0x374bf7, _0x2154b4) =>
      _0x374bf7 + parseFloat(_0x2154b4[_0x132d99(0x194)]),
    0x0
  );
  (_0x1c280a +=
    _0x132d99(0x210) +
    _0x4fe76c["toLocaleString"]("es-MX", { minimumFractionDigits: 0x2 }) +
    _0x132d99(0x4d9) +
    _0x1f1439["length"] +
    _0x132d99(0x27c)),
    document[_0x132d99(0x34d)][_0x132d99(0x243)](_0x132d99(0x1f6), _0x1c280a);
  const _0x475888 = new bootstrap[_0x132d99(0x423)](
    document["getElementById"](_0x132d99(0x297))
  );
  _0x475888[_0x132d99(0x2d3)](),
    document[_0x132d99(0x50b)](_0x132d99(0x297))["addEventListener"](
      _0x132d99(0x358),
      () => {
        const _0x3abd1f = _0x132d99;
        document["getElementById"](_0x3abd1f(0x297))[_0x3abd1f(0x36f)]();
      }
    );
}
(window["mostrarModalReporteVentas"] = mostrarModalReporteVentas),
  (window["cerrarModalReporteVentas"] = cerrarModalReporteVentas),
  (window[_0x51ede5(0x392)] = generarReporteVentas),
  (window[_0x51ede5(0x3a4)] = mostrarDetalleVendedor);
