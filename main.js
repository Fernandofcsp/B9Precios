const _0x472491 = _0x8674;
(function (_0x30c544, _0x31ce2a) {
  const _0x3937f4 = _0x8674,
    _0x4b1d38 = _0x30c544();
  while (!![]) {
    try {
      const _0x589951 =
        parseInt(_0x3937f4(0x318)) / 0x1 +
        (parseInt(_0x3937f4(0x28e)) / 0x2) *
          (parseInt(_0x3937f4(0x15e)) / 0x3) +
        parseInt(_0x3937f4(0x102)) / 0x4 +
        parseInt(_0x3937f4(0xd4)) / 0x5 +
        parseInt(_0x3937f4(0x2cb)) / 0x6 +
        -parseInt(_0x3937f4(0x33e)) / 0x7 +
        (-parseInt(_0x3937f4(0x109)) / 0x8) *
          (parseInt(_0x3937f4(0x3a6)) / 0x9);
      if (_0x589951 === _0x31ce2a) break;
      else _0x4b1d38["push"](_0x4b1d38["shift"]());
    } catch (_0x38b980) {
      _0x4b1d38["push"](_0x4b1d38["shift"]());
    }
  }
})(_0xc301, 0x74866);
const form = document[_0x472491(0x2e4)](_0x472491(0x352)),
  inputCodigo = document[_0x472491(0x2e4)](_0x472491(0x34f)),
  readerDiv = document["getElementById"](_0x472491(0x2e1)),
  ayudaTexto = document[_0x472491(0x2e4)](_0x472491(0x10f)),
  installBtn = document[_0x472491(0x2e4)](_0x472491(0x233));
inputCodigo[_0x472491(0x174)](_0x472491(0x1a7), _0x472491(0x1af)),
  inputCodigo[_0x472491(0x174)](_0x472491(0x26e), "false"),
  inputCodigo[_0x472491(0x174)](_0x472491(0x3a8), _0x472491(0x1af)),
  inputCodigo[_0x472491(0x174)]("autocorrect", _0x472491(0x1af)),
  inputCodigo["setAttribute"](_0x472491(0x21a), _0x472491(0x128)),
  form[_0x472491(0x174)](_0x472491(0x1a7), "off");
let scannerActivo = ![],
  deferredPrompt,
  puedeEscanear = !![],
  ultimoCodigoEscaneado = "",
  datosYaCargados = ![];
if (!window[_0x472491(0x383)]) {
  const script = document["createElement"](_0x472491(0x1dd));
  (script[_0x472491(0x29f)] = _0x472491(0x371)),
    (script[_0x472491(0xf4)] = !![]),
    document[_0x472491(0x24f)][_0x472491(0x224)](script);
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
    const _0x2421cb = _0x472491;
    (this["storageKey"] = _0x2421cb(0x2ed)), this[_0x2421cb(0x18a)]();
  }
  [_0x472491(0x18a)]() {
    const _0x18f089 = _0x472491,
      _0x5db511 = localStorage["getItem"](this[_0x18f089(0x2e2)]);
    _0x5db511
      ? (this[_0x18f089(0x167)] = JSON[_0x18f089(0x329)](_0x5db511))
      : this["resetMonthlyUsage"]();
    const _0x392f15 = new Date()[_0x18f089(0x2c8)]();
    this[_0x18f089(0x167)][_0x18f089(0x13b)] !== _0x392f15 &&
      this[_0x18f089(0xf0)]();
  }
  ["resetMonthlyUsage"]() {
    const _0x374a4d = _0x472491;
    (this["usage"] = {
      month: new Date()[_0x374a4d(0x2c8)](),
      year: new Date()[_0x374a4d(0x397)](),
      monthlyCount: 0x0,
      dailyCount: 0x0,
      lastUsedDate: new Date()[_0x374a4d(0x104)](),
      history: [],
    }),
      this[_0x374a4d(0x15b)]();
  }
  [_0x472491(0x15b)]() {
    const _0x1b7990 = _0x472491;
    localStorage[_0x1b7990(0xa6)](
      this[_0x1b7990(0x2e2)],
      JSON[_0x1b7990(0xbb)](this[_0x1b7990(0x167)])
    );
  }
  [_0x472491(0x13a)]() {
    const _0x245cb5 = _0x472491,
      _0x379c37 = new Date()["toDateString"]();
    this[_0x245cb5(0x167)][_0x245cb5(0x13d)] !== _0x379c37 &&
      ((this[_0x245cb5(0x167)][_0x245cb5(0x1c9)] = 0x0),
      (this[_0x245cb5(0x167)][_0x245cb5(0x13d)] = _0x379c37),
      this["saveUsage"]());
    const _0x1a21a6 =
        this[_0x245cb5(0x167)][_0x245cb5(0x2c4)] <
        GOOGLE_VISION_CONFIG[_0x245cb5(0x1d1)],
      _0x2edd37 =
        this["usage"][_0x245cb5(0x1c9)] < GOOGLE_VISION_CONFIG[_0x245cb5(0x96)];
    return _0x1a21a6 && _0x2edd37;
  }
  [_0x472491(0xe2)]() {
    const _0x4cd813 = _0x472491;
    this["usage"]["monthlyCount"]++,
      this["usage"]["dailyCount"]++,
      this[_0x4cd813(0x167)][_0x4cd813(0x9a)][_0x4cd813(0x1cb)]({
        date: new Date()[_0x4cd813(0x124)](),
        count: this[_0x4cd813(0x167)]["monthlyCount"],
      }),
      this["usage"][_0x4cd813(0x9a)][_0x4cd813(0x2db)] > 0x32 &&
        (this["usage"]["history"] =
          this[_0x4cd813(0x167)][_0x4cd813(0x9a)][_0x4cd813(0xeb)](-0x32)),
      this["saveUsage"]();
  }
  [_0x472491(0xaa)]() {
    const _0x5cd4f8 = _0x472491;
    return {
      monthlyUsed: this[_0x5cd4f8(0x167)][_0x5cd4f8(0x2c4)],
      monthlyLimit: GOOGLE_VISION_CONFIG[_0x5cd4f8(0x1d1)],
      dailyUsed: this[_0x5cd4f8(0x167)][_0x5cd4f8(0x1c9)],
      dailyLimit: GOOGLE_VISION_CONFIG[_0x5cd4f8(0x96)],
      remainingMonthly:
        GOOGLE_VISION_CONFIG["monthlyLimit"] -
        this[_0x5cd4f8(0x167)][_0x5cd4f8(0x2c4)],
      remainingDaily:
        GOOGLE_VISION_CONFIG[_0x5cd4f8(0x96)] -
        this[_0x5cd4f8(0x167)][_0x5cd4f8(0x1c9)],
      canUse: this[_0x5cd4f8(0x13a)](),
    };
  }
  [_0x472491(0x1d9)]() {
    const _0x185312 = _0x472491,
      _0x2f3ffd = this["getUsageStatus"]();
    if (_0x2f3ffd["monthlyUsed"] >= GOOGLE_VISION_CONFIG[_0x185312(0x161)])
      return (
        _0x185312(0x39f) +
        _0x2f3ffd[_0x185312(0x1b4)] +
        "/" +
        _0x2f3ffd["monthlyLimit"] +
        _0x185312(0xc4)
      );
    if (
      _0x2f3ffd[_0x185312(0xfd)] >=
      GOOGLE_VISION_CONFIG[_0x185312(0x96)] * 0.8
    )
      return (
        _0x185312(0x15a) +
        _0x2f3ffd["dailyUsed"] +
        "/" +
        _0x2f3ffd[_0x185312(0x96)] +
        _0x185312(0x19c)
      );
    return null;
  }
}
const visionUsageTracker = new GoogleVisionUsageTracker();
async function detectarConGoogleVision(_0x38edd3) {
  const _0x2ac91b = _0x472491;
  console[_0x2ac91b(0x335)](_0x2ac91b(0x31a));
  const _0x4821f2 = document["createElement"](_0x2ac91b(0x17b)),
    _0xdb23a5 = _0x4821f2[_0x2ac91b(0x155)]("2d");
  let { width: _0x1fc1e6, height: _0x5d64dd } = _0x38edd3;
  const _0x22dbd9 = 0x400;
  if (_0x1fc1e6 > _0x22dbd9 || _0x5d64dd > _0x22dbd9) {
    const _0x28c956 = Math[_0x2ac91b(0x126)](
      _0x22dbd9 / _0x1fc1e6,
      _0x22dbd9 / _0x5d64dd
    );
    (_0x1fc1e6 *= _0x28c956), (_0x5d64dd *= _0x28c956);
  }
  (_0x4821f2[_0x2ac91b(0x264)] = _0x1fc1e6),
    (_0x4821f2[_0x2ac91b(0xb4)] = _0x5d64dd),
    _0xdb23a5[_0x2ac91b(0x34d)](_0x38edd3, 0x0, 0x0, _0x1fc1e6, _0x5d64dd);
  const _0x32b7bd = _0x4821f2[_0x2ac91b(0x314)](_0x2ac91b(0x2b8), 0.9);
  console[_0x2ac91b(0x335)]("📡\x20Enviando\x20a\x20backend\x20proxy...");
  try {
    const _0x56d0db = await fetch(_0x2ac91b(0x142), {
      method: "POST",
      headers: { "Content-Type": _0x2ac91b(0x1ba) },
      body: JSON[_0x2ac91b(0xbb)]({
        image: _0x32b7bd,
        userAgent: navigator[_0x2ac91b(0x341)][_0x2ac91b(0x27c)](0x0, 0x32),
        timestamp: new Date()[_0x2ac91b(0x124)](),
      }),
    });
    if (!_0x56d0db["ok"]) {
      const _0x5b9751 = await _0x56d0db[_0x2ac91b(0x18e)]();
      throw new Error(
        _0x2ac91b(0xa1) +
          _0x56d0db[_0x2ac91b(0x92)] +
          _0x2ac91b(0xcd) +
          _0x5b9751
      );
    }
    const _0x22e4be = await _0x56d0db[_0x2ac91b(0x192)]();
    console[_0x2ac91b(0x335)]("📊\x20Respuesta\x20del\x20backend:", _0x22e4be);
    if (_0x22e4be["success"])
      return (
        visionUsageTracker[_0x2ac91b(0xe2)](),
        console["log"](_0x2ac91b(0x2f2)),
        console[_0x2ac91b(0x335)](_0x2ac91b(0x387)),
        extraerCodigoDeTexto(_0x22e4be[_0x2ac91b(0x236)])
      );
    else throw new Error(_0x22e4be[_0x2ac91b(0x200)] || _0x2ac91b(0x38f));
  } catch (_0x38f84d) {
    console[_0x2ac91b(0x335)](_0x2ac91b(0x20c), _0x38f84d[_0x2ac91b(0x159)]);
    if (_0x38f84d[_0x2ac91b(0x159)][_0x2ac91b(0x1b3)](_0x2ac91b(0x2e5)))
      console[_0x2ac91b(0x335)](_0x2ac91b(0x1b7)),
        console["log"](_0x2ac91b(0x262)),
        console[_0x2ac91b(0x335)](
          "\x20\x20\x20•\x20Variable\x20GOOGLE_VISION_API_KEY\x20no\x20configurada\x20en\x20Vercel"
        ),
        console["log"](_0x2ac91b(0x2bd)),
        console[_0x2ac91b(0x335)](_0x2ac91b(0xab)),
        console["log"](_0x2ac91b(0x2ad));
    else {
      if (
        _0x38f84d[_0x2ac91b(0x159)][_0x2ac91b(0x1b3)](_0x2ac91b(0xad)) ||
        _0x38f84d[_0x2ac91b(0x159)][_0x2ac91b(0x1b3)](
          "Failed\x20to\x20fetch"
        ) ||
        _0x38f84d[_0x2ac91b(0x159)][_0x2ac91b(0x1b3)]("NetworkError")
      )
        throw new Error(_0x2ac91b(0xde));
    }
    throw _0x38f84d;
  }
}
function extraerCodigoDeTexto(_0x1d3cfe) {
  const _0x327866 = _0x472491,
    _0x478eb5 = _0x1d3cfe[_0x327866(0x1e8)][0x0]?.[_0x327866(0x268)] || [];
  if (_0x478eb5["length"] === 0x0)
    return (
      console[_0x327866(0x335)](
        "❌\x20Google\x20Vision\x20no\x20detectó\x20texto"
      ),
      null
    );
  const _0x455024 = _0x478eb5[0x0]?.[_0x327866(0x272)] || "";
  console[_0x327866(0x335)](_0x327866(0x115), _0x455024);
  const _0x403998 = [
    /\b(\d{13})\b/g,
    /\b(\d{12})\b/g,
    /\b(\d{8})\b/g,
    /\b(\d{6,8})\b/g,
    /\b([A-Z0-9\-]{4,20})\b/g,
  ];
  for (const _0x58a2d2 of _0x403998) {
    const _0x15032e = [..._0x455024["matchAll"](_0x58a2d2)];
    for (const _0x5a93d0 of _0x15032e) {
      const _0x581d48 = _0x5a93d0[0x1][_0x327866(0x26a)]();
      console[_0x327866(0x335)](_0x327866(0x1b2) + _0x581d48);
      if (validarCodigoPorLongitud(_0x581d48))
        return (
          console[_0x327866(0x335)](
            "✅\x20Código\x20válido\x20seleccionado:\x20" + _0x581d48
          ),
          _0x581d48
        );
    }
  }
  return console[_0x327866(0x335)](_0x327866(0x357)), null;
}
function validarCodigoPorLongitud(_0x2ed670) {
  const _0x145e63 = _0x472491;
  if (/^\d{13}$/[_0x145e63(0xfc)](_0x2ed670)) return !![];
  if (/^\d{12}$/[_0x145e63(0xfc)](_0x2ed670)) return !![];
  if (/^\d{8}$/[_0x145e63(0xfc)](_0x2ed670)) return !![];
  if (/^\d{6,8}$/[_0x145e63(0xfc)](_0x2ed670)) return !![];
  if (/^[A-Z0-9\-]{4,20}$/["test"](_0x2ed670) && _0x2ed670["length"] >= 0x4)
    return !![];
  return ![];
}
async function diagnosticarBackend() {
  const _0x4b9847 = _0x472491;
  console[_0x4b9847(0x335)](
    "🔍\x20Iniciando\x20diagnóstico\x20del\x20backend..."
  );
  const _0x1a2a69 = document[_0x4b9847(0x2e4)](_0x4b9847(0x2af));
  _0x1a2a69 && (_0x1a2a69["innerHTML"] = _0x4b9847(0x347));
  let _0x4c9611 = "";
  try {
    const _0x3f01d2 = await fetch(_0x4b9847(0x37e));
    if (_0x3f01d2["ok"]) {
      console["log"](_0x4b9847(0x31b));
      const _0x5bc336 = await _0x3f01d2["json"]();
      console[_0x4b9847(0x335)]("📊\x20Estadísticas:", _0x5bc336),
        (_0x4c9611 += _0x4b9847(0x1fb));
    } else
      console[_0x4b9847(0x335)](_0x4b9847(0x393), _0x3f01d2[_0x4b9847(0x92)]),
        (_0x4c9611 +=
          "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Endpoint\x20/api/stats\x20falló:\x20" +
          _0x3f01d2[_0x4b9847(0x92)] +
          _0x4b9847(0x21c));
    console[_0x4b9847(0x335)](
      "🧪\x20Probando\x20vision-detect\x20con\x20imagen\x20de\x20prueba..."
    );
    const _0x42159a = await fetch(
        "https://contador-apicloudvision.vercel.app/api/vision-detect",
        {
          method: _0x4b9847(0x38e),
          headers: { "Content-Type": _0x4b9847(0x1ba) },
          body: JSON[_0x4b9847(0xbb)]({
            image: _0x4b9847(0x11a),
            userId: _0x4b9847(0x22a),
          }),
        }
      ),
      _0x5a503e = await _0x42159a[_0x4b9847(0x192)]();
    console[_0x4b9847(0x335)](_0x4b9847(0x136), _0x5a503e),
      console[_0x4b9847(0x335)](_0x4b9847(0x11e), _0x42159a[_0x4b9847(0x92)]);
    if (_0x42159a[_0x4b9847(0x92)] === 0x1f4) {
      console[_0x4b9847(0x335)](_0x4b9847(0x1cd));
      if (_0x5a503e[_0x4b9847(0x35e)]) {
        if (_0x5a503e[_0x4b9847(0x35e)]["includes"](_0x4b9847(0x220)))
          console[_0x4b9847(0x335)](_0x4b9847(0x24a)),
            console[_0x4b9847(0x335)](
              "💡\x20Verifica\x20que\x20el\x20proyecto\x20#1070150612422\x20tenga\x20facturación\x20activa"
            ),
            console[_0x4b9847(0x335)](_0x4b9847(0x3aa)),
            (_0x4c9611 += _0x4b9847(0x34b));
        else {
          if (_0x5a503e[_0x4b9847(0x35e)][_0x4b9847(0x1b3)](_0x4b9847(0x1ae)))
            console[_0x4b9847(0x335)](_0x4b9847(0x28d)),
              (_0x4c9611 += _0x4b9847(0x364));
          else
            _0x5a503e[_0x4b9847(0x35e)][_0x4b9847(0x1b3)](_0x4b9847(0x2ce))
              ? (console["log"](_0x4b9847(0xe0)),
                console[_0x4b9847(0x335)](_0x4b9847(0x37a)),
                (_0x4c9611 += _0x4b9847(0x1c8)))
              : (console[_0x4b9847(0x335)](_0x4b9847(0x22e)),
                console[_0x4b9847(0x335)](
                  _0x4b9847(0x26d),
                  _0x5a503e[_0x4b9847(0x35e)]
                ),
                (_0x4c9611 += _0x4b9847(0x325)));
        }
      }
    } else
      _0x42159a[_0x4b9847(0x92)] === 0xc8 &&
        (console["log"](_0x4b9847(0x322)), (_0x4c9611 += _0x4b9847(0x2b3)));
  } catch (_0x183909) {
    console[_0x4b9847(0x335)](_0x4b9847(0x2b4), _0x183909[_0x4b9847(0x159)]),
      _0x183909["message"][_0x4b9847(0x1b3)](_0x4b9847(0xad))
        ? (console[_0x4b9847(0x335)](_0x4b9847(0x121)),
          (_0x4c9611 += _0x4b9847(0x25e)))
        : (_0x4c9611 +=
            _0x4b9847(0x14c) + _0x183909["message"] + _0x4b9847(0x21c));
  }
  _0x1a2a69 && (_0x1a2a69[_0x4b9847(0xd7)] = _0x4c9611);
}
async function verificarBackend() {
  const _0x183cd1 = _0x472491;
  try {
    const _0x53ebfb = await fetch(_0x183cd1(0x37e), {
      method: _0x183cd1(0x158),
      headers: { "Content-Type": _0x183cd1(0x1ba) },
    });
    if (_0x53ebfb["ok"]) {
      const _0x257b3e = await _0x53ebfb[_0x183cd1(0x192)]();
      return (
        console[_0x183cd1(0x335)](_0x183cd1(0x150), _0x257b3e),
        { activo: !![], stats: _0x257b3e, mensaje: _0x183cd1(0x2a5) }
      );
    } else
      return (
        console["log"](_0x183cd1(0x296), _0x53ebfb["status"]),
        { activo: ![], mensaje: _0x183cd1(0x370) + _0x53ebfb[_0x183cd1(0x92)] }
      );
  } catch (_0x6d0e23) {
    return (
      console[_0x183cd1(0x335)](_0x183cd1(0x39b), _0x6d0e23["message"]),
      {
        activo: ![],
        mensaje:
          "Backend\x20no\x20disponible\x20-\x20usando\x20detección\x20local",
      }
    );
  }
}
async function mostrarEstadisticasUso() {
  const _0x56ea62 = _0x472491,
    _0x441ce8 = visionUsageTracker["getUsageStatus"](),
    _0x4322da = visionUsageTracker[_0x56ea62(0x1d9)]();
  let _0x14e064 = _0x56ea62(0xc9);
  (_0x14e064 +=
    _0x56ea62(0x321) +
    _0x441ce8["monthlyUsed"] +
    "/" +
    _0x441ce8["monthlyLimit"] +
    _0x56ea62(0x348) +
    _0x441ce8[_0x56ea62(0x179)] +
    _0x56ea62(0xfa)),
    (_0x14e064 +=
      _0x56ea62(0xd6) +
      _0x441ce8[_0x56ea62(0xfd)] +
      "/" +
      _0x441ce8[_0x56ea62(0x96)] +
      _0x56ea62(0x348) +
      _0x441ce8[_0x56ea62(0x210)] +
      ")");
  _0x4322da && (_0x14e064 += _0x56ea62(0x194) + _0x4322da);
  if (GOOGLE_VISION_CONFIG[_0x56ea62(0x89)])
    try {
      const _0x479c91 = await verificarBackend();
      _0x14e064 += _0x56ea62(0x1f1) + _0x479c91["mensaje"];
    } catch (_0x3ade03) {
      _0x14e064 += _0x56ea62(0xb1);
    }
  return _0x14e064;
}
function setCookie(_0x666c5a, _0x5d82d4, _0x131aa2) {
  const _0x436703 = _0x472491,
    _0x449d52 = new Date(
      Date["now"]() + _0x131aa2 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x436703(0x363)]();
  document[_0x436703(0x295)] =
    _0x666c5a +
    "=" +
    encodeURIComponent(_0x5d82d4) +
    _0x436703(0xcb) +
    _0x449d52 +
    _0x436703(0x18b);
}
function getCookie(_0x42f1c6) {
  const _0x457262 = _0x472491,
    _0x28d526 = ";\x20" + document[_0x457262(0x295)],
    _0x4cf3f9 = _0x28d526[_0x457262(0x275)](";\x20" + _0x42f1c6 + "=");
  if (_0x4cf3f9[_0x457262(0x2db)] === 0x2)
    return decodeURIComponent(
      _0x4cf3f9["pop"]()[_0x457262(0x275)](";")[_0x457262(0x1fe)]()
    );
  return null;
}
const historialDiv = document[_0x472491(0x2e4)]("historial"),
  resultadoDiv = document[_0x472491(0x2e4)]("resultado"),
  DB_NAME = _0x472491(0x3ae),
  DB_STORE = _0x472491(0x23a),
  DB_STORE_PROMOCIONES = "promociones";
let db;
function openDB() {
  return new Promise((_0x349a4a, _0x4b4b0c) => {
    const _0x1ea976 = _0x8674,
      _0x3b7224 = indexedDB["open"](DB_NAME, 0x2);
    (_0x3b7224["onupgradeneeded"] = function (_0x5283d6) {
      const _0x4d3b14 = _0x8674;
      (db = _0x5283d6[_0x4d3b14(0x242)]["result"]),
        !db[_0x4d3b14(0x37b)][_0x4d3b14(0x362)](DB_STORE) &&
          db[_0x4d3b14(0x10c)](DB_STORE, {
            keyPath: "id",
            autoIncrement: !![],
          }),
        !db[_0x4d3b14(0x37b)]["contains"](DB_STORE_PROMOCIONES) &&
          db[_0x4d3b14(0x10c)](DB_STORE_PROMOCIONES, {
            keyPath: "id",
            autoIncrement: !![],
          });
    }),
      (_0x3b7224[_0x1ea976(0x153)] = function (_0x563430) {
        const _0x574376 = _0x1ea976;
        (db = _0x563430[_0x574376(0x242)]["result"]), _0x349a4a(db);
      }),
      (_0x3b7224[_0x1ea976(0x2c7)] = function (_0x3ad39a) {
        _0x4b4b0c(_0x3ad39a);
      });
  });
}
function clearProductos() {
  return openDB()["then"]((_0x172180) => {
    return new Promise((_0x368fba, _0x432ab6) => {
      const _0x3c4d1a = _0x8674,
        _0x46622c = _0x172180[_0x3c4d1a(0x25c)](DB_STORE, "readwrite");
      _0x46622c[_0x3c4d1a(0x266)](DB_STORE)[_0x3c4d1a(0x30d)](),
        (_0x46622c[_0x3c4d1a(0x14b)] = _0x368fba),
        (_0x46622c[_0x3c4d1a(0x2c7)] = _0x432ab6);
    });
  });
}
function saveProductos(_0x52401c) {
  const _0xd6d1f9 = _0x472491;
  return openDB()[_0xd6d1f9(0x1ad)]((_0x36bb61) => {
    return new Promise((_0x18fc07, _0x113ba2) => {
      const _0x5dd7f6 = _0x8674,
        _0x4851f3 = _0x36bb61[_0x5dd7f6(0x25c)](DB_STORE, "readwrite"),
        _0x36e4ef = _0x4851f3[_0x5dd7f6(0x266)](DB_STORE);
      _0x52401c[_0x5dd7f6(0x250)]((_0x38e6fa) =>
        _0x36e4ef[_0x5dd7f6(0x1c3)](_0x38e6fa)
      ),
        (_0x4851f3[_0x5dd7f6(0x14b)] = _0x18fc07),
        (_0x4851f3[_0x5dd7f6(0x2c7)] = _0x113ba2);
    });
  });
}
function getAllProductos() {
  const _0x156b71 = _0x472491;
  return openDB()[_0x156b71(0x1ad)]((_0x4edc58) => {
    return new Promise((_0x8ae26f, _0x47e3c7) => {
      const _0x44225d = _0x8674,
        _0x433300 = _0x4edc58[_0x44225d(0x25c)](DB_STORE, _0x44225d(0x114)),
        _0x482b65 = _0x433300["objectStore"](DB_STORE),
        _0x19b81c = _0x482b65["getAll"]();
      (_0x19b81c["onsuccess"] = () => _0x8ae26f(_0x19b81c[_0x44225d(0xd5)])),
        (_0x19b81c[_0x44225d(0x2c7)] = _0x47e3c7);
    });
  });
}
function clearPromociones() {
  const _0x1d59fc = _0x472491;
  return openDB()[_0x1d59fc(0x1ad)]((_0x2880b2) => {
    return new Promise((_0xf974db, _0x2e241f) => {
      const _0x577e20 = _0x8674,
        _0x2f3f87 = _0x2880b2[_0x577e20(0x25c)](
          DB_STORE_PROMOCIONES,
          _0x577e20(0x2d6)
        );
      _0x2f3f87[_0x577e20(0x266)](DB_STORE_PROMOCIONES)[_0x577e20(0x30d)](),
        (_0x2f3f87[_0x577e20(0x14b)] = _0xf974db),
        (_0x2f3f87[_0x577e20(0x2c7)] = _0x2e241f);
    });
  });
}
function savePromociones(_0x3ade1e) {
  const _0xfe68c9 = _0x472491;
  return openDB()[_0xfe68c9(0x1ad)]((_0x1e9ee8) => {
    return new Promise((_0x51e348, _0x2473a7) => {
      const _0x93c448 = _0x8674,
        _0x41ed45 = _0x1e9ee8[_0x93c448(0x25c)](
          DB_STORE_PROMOCIONES,
          _0x93c448(0x2d6)
        ),
        _0x3051af = _0x41ed45["objectStore"](DB_STORE_PROMOCIONES);
      _0x3ade1e[_0x93c448(0x250)]((_0x11d965) => _0x3051af["add"](_0x11d965)),
        (_0x41ed45[_0x93c448(0x14b)] = _0x51e348),
        (_0x41ed45["onerror"] = _0x2473a7);
    });
  });
}
function getAllPromociones() {
  const _0x36e1a8 = _0x472491;
  return openDB()[_0x36e1a8(0x1ad)]((_0x3eadc7) => {
    return new Promise((_0x538ee0, _0x31aa07) => {
      const _0x54b426 = _0x8674,
        _0x3b1c68 = _0x3eadc7[_0x54b426(0x25c)](
          DB_STORE_PROMOCIONES,
          _0x54b426(0x114)
        ),
        _0x33010b = _0x3b1c68["objectStore"](DB_STORE_PROMOCIONES),
        _0x2c9336 = _0x33010b[_0x54b426(0x39e)]();
      (_0x2c9336["onsuccess"] = () => _0x538ee0(_0x2c9336[_0x54b426(0xd5)])),
        (_0x2c9336[_0x54b426(0x2c7)] = _0x31aa07);
    });
  });
}
const sugerenciasDiv = document[_0x472491(0x2fb)](_0x472491(0x2d4));
(sugerenciasDiv["id"] = "sugerenciasDiv"),
  (sugerenciasDiv[_0x472491(0x180)] = _0x472491(0x1a9)),
  (sugerenciasDiv["style"][_0x472491(0xd9)] = _0x472491(0x32b)),
  (sugerenciasDiv[_0x472491(0x27d)]["maxHeight"] = _0x472491(0x32d)),
  (sugerenciasDiv[_0x472491(0x27d)][_0x472491(0x359)] = _0x472491(0x9f)),
  (sugerenciasDiv[_0x472491(0x27d)]["top"] = "100%"),
  (sugerenciasDiv[_0x472491(0x27d)][_0x472491(0x300)] = "0"),
  (sugerenciasDiv[_0x472491(0x27d)][_0x472491(0x3a9)] = "0"),
  (inputCodigo[_0x472491(0x1de)][_0x472491(0x27d)][_0x472491(0x2e8)] =
    "relative"),
  inputCodigo[_0x472491(0x1de)][_0x472491(0x224)](sugerenciasDiv);
const actualizarDiv = document[_0x472491(0x2fb)]("div");
(actualizarDiv[_0x472491(0x180)] = _0x472491(0x1c5)),
  (actualizarDiv[_0x472491(0xd7)] = _0x472491(0x379)),
  historialDiv[_0x472491(0x1de)]["insertBefore"](actualizarDiv, historialDiv);
function _0xc301() {
  const _0x31ba5a = [
    "Procesando\x20productos",
    "beforeinstallprompt",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Límite\x20local\x20alcanzado.\x20Mensual:\x20",
    "🔑\x20PROBLEMA:\x20API\x20Key\x20inválida",
    "20314Gpsphe",
    "alert-success",
    "🔄\x20Probando\x20con\x20imagen\x20original...",
    "map",
    "⚠️\x20API\x20nativa\x20no\x20detectó\x20códigos\x20válidos",
    "fill",
    "\x20al\x20",
    "cookie",
    "⚠️\x20Backend\x20responde\x20pero\x20con\x20error:",
    "🔄\x20Nueva\x20versión\x20del\x20Service\x20Worker\x20disponible",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📦\x20Productos\x20en\x20promoción:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔄\x20Primera\x20carga:\x20cargando\x20SOLO\x20productos\x20(promos\x20al\x20presionar\x20Actualizar)...",
    "Generando\x20código\x20de\x20barras\x20",
    "Error\x20consultando\x20producto\x20desde\x20historial:",
    "focus",
    "🌐\x20<strong>Backend:</strong>\x20",
    "📡\x20Consultando\x20TODOS\x20los\x20endpoints\x20de\x20productos...",
    "src",
    "items",
    "clipboard",
    "\x22\x20class=\x22barcode-canvas\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-bold\x20text-dark\x22>",
    "labelVista",
    "\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "Google\x20Vision\x20API\x20activa\x20y\x20funcional",
    "<div\x20class=\x22row\x22>",
    "📱\x20Dispositivo\x20móvil:",
    "🔄\x20Probando\x20configuración\x20alternativa...",
    ".copiar-btn",
    "hide",
    "⚙️\x20Configuración\x20de\x20detección\x20avanzada",
    "isConfirmed",
    "\x20\x20\x20💡\x20Ejecuta\x20diagnosticarBackend()\x20para\x20más\x20detalles",
    "detect",
    "diagnostico-resultado",
    "http",
    "upc_reader",
    "PROMO",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🎉\x20¡Google\x20Vision\x20API\x20Activa!</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>✅\x20La\x20detección\x20premium\x20está\x20funcionando\x20correctamente</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Fallback\x20automático:\x20Local\x20→\x20Google\x20Vision</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "❌\x20Error\x20en\x20diagnóstico:",
    "ITF",
    "\x20unidades\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "i2of5",
    "image/jpeg",
    "📋\x20Promociones\x20(locales):",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20diario<br>🌐\x20<strong>Backend:</strong>\x20Verificando...",
    ".modal-backdrop",
    "\x20\x20\x20•\x20Problema\x20en\x20el\x20código\x20de\x20la\x20función\x20serverless",
    "\x22\x20class=\x22card-img-top\x22\x20alt=\x22",
    "💾\x20Guardar",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-8\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20nombre-producto-responsive\x22\x20style=\x22color:#616161;\x22>",
    "getImageData",
    "básico\x20✅",
    "SKIP_WAITING",
    "monthlyCount",
    "cantidad",
    "DATA_MATRIX",
    "onerror",
    "getMonth",
    "rejected",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Error\x20al\x20procesar\x20la\x20imagen</div>",
    "4972722ttXbZT",
    "Todos\x20los\x20endpoints\x20fallaron\x20(",
    "Backend\x20error",
    "PERMISSION_DENIED",
    "keydown",
    ".modal-content",
    "<span\x20class=\x22badge\x20",
    "🎯\x20PROMOCIÓN\x20ENCONTRADA\x20para\x20SKU\x20",
    "productos_ts",
    "div",
    "No\x20especificado",
    "readwrite",
    "all",
    "CODE_128",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "primary",
    "length",
    "getItem",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-img-top\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-secondary\x22\x20style=\x22height:\x2080px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-white\x22>📦</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "📋\x20Configuración\x20final\x20para\x20códigos\x20largos...",
    "⚠️\x20No\x20se\x20pudieron\x20obtener\x20estadísticas\x20de\x20códigos\x20de\x20barras",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20mb-0\x22>🏷️\x20",
    "reader",
    "storageKey",
    "totalCodigos",
    "getElementById",
    "500",
    "bi\x20bi-grid-3x3-gap",
    "📊\x20Datos\x20finales\x20para\x20construcción:",
    "position",
    "\x22\x20style=\x22width:218px;\x20height:124px;\x20object-fit:contain;\x20background:#fff;\x20border-radius:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "btnNextResultados",
    "precio_total",
    "🆕\x20Nueva\x20versión\x20lista\x20para\x20usar",
    "googleVisionUsage",
    "✅\x20Detección\x20avanzada\x20activada",
    "valor_total",
    "Productos:\x20nunca\x20|\x20Promociones:\x20",
    "border-bottom\x20pb-3",
    "✅\x20Google\x20Vision\x20API\x20usada\x20exitosamente\x20-\x20contador\x20local\x20actualizado",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudieron\x20cargar\x20las\x20promociones:\x20",
    "Timeout",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-muted\x22>-</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Sin\x20datos</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "function",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x20p-3\x20bg-light\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>",
    "btn-outline-primary",
    "N/A",
    "limpiarHistorialBtn",
    "createElement",
    "códigos\x20de\x20barras\x20❌\x20(timeout/error)",
    "serviceWorker",
    "⚠️\x20Usando\x20solo\x20detección\x20local",
    "format",
    "left",
    "writeText",
    "CANTIDAD_X_PRECIO_FIJO",
    "code_39_vin_reader",
    "💻\x20Abriendo\x20modal\x20en\x20desktop...",
    "✅\x20Configuración\x20guardada",
    "✅\x20Google\x20Vision\x20detectó:",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-success\x22>🏷️\x20Productos\x20con\x20Promociones</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20text-white\x22>",
    "\x20/\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "pro_tipoPromo",
    "\x22\x20alt=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "clear",
    "Formato:",
    "code_39",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Error\x20al\x20detectar\x20promociones\x20para\x20SKU\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22verPromociones()\x22\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "🏦\x20Error\x20de\x20facturación:\x20Habilita\x20billing\x20en\x20Google\x20Cloud",
    "toDataURL",
    "backgroundColor",
    "skus",
    "smooth",
    "748420qXNVQA",
    "grid",
    "📸\x20Preparando\x20imagen\x20para\x20Google\x20Vision...",
    "✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>CONTADO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20mx-2\x22\x20style=\x22font-size:1.5rem;\x22>|</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x20precio-responsive\x22>$\x20",
    "button",
    "\x22\x20loading=\x22lazy\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20object-fit:\x20contain;\x20border-radius:\x208px;\x20background:\x20#f8f9fa;\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.style.display=\x27none\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "•\x20Mensual:\x20",
    "🎉\x20¡Google\x20Vision\x20API\x20funcionando\x20correctamente!",
    "\x20más\x20con\x20promociones.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "removeAttribute",
    "<div\x20class=\x22alert\x20alert-danger\x22>❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API</div>",
    "precio\x20especial",
    "🧮\x20Calculando\x20precio\x20total:\x20",
    "<span\x20class=\x22badge\x20bg-secondary\x22\x20style=\x22font-size:\x200.7rem;\x22>+",
    "parse",
    "sugerenciasDiv",
    "1000",
    "floor",
    "200px",
    "\x20→\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "success",
    "Código\x20no\x20válido",
    "race",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "\x20longitud:\x20",
    "log",
    "get",
    "Failed\x20to\x20fetch",
    "Productos:\x20",
    "Sin\x20conexión\x20a\x20internet",
    "promocionesGeneralesModal",
    "?stats=true",
    "✅\x20Instalación\x20aceptada",
    "historial",
    "3299765qggxAm",
    "getAttribute",
    "\x20|\x20Promociones:\x20nunca",
    "userAgent",
    "code_128",
    "❌\x20No\x20hay\x20promociones\x20para\x20SKU:\x20",
    "backend_mejorado",
    "allSettled",
    "codigos_barras",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20spinner-border-sm\x20me-2\x22\x20role=\x22status\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Diagnosticando\x20backend...\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x20(quedan\x20",
    "consultarProductoDesdeModal",
    "column",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🏦\x20Problema\x20de\x20Facturación</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20facturación\x20no\x20está\x20habilitada\x20en\x20el\x20proyecto\x20correcto\x20(#1070150612422)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/billing\x22\x20target=\x22_blank\x22>Ve\x20a\x20Google\x20Cloud\x20Billing</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20minutos",
    "drawImage",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "codigo",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20",
    "\x22\x20(",
    "formulario",
    "upc_a",
    "overflow",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "),\x20",
    "❌\x20No\x20se\x20encontraron\x20códigos\x20válidos\x20en\x20el\x20texto",
    "getUserMedia",
    "overflowY",
    "\x27)\x22\x20title=\x22Ver\x20detalles\x20completos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    ".consultar-historial-btn",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22row\x20align-items-center\x20justify-content-center\x20g-0\x20mb-4\x22\x20style=\x22padding:\x200px\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "resultados-busqueda-body",
    "details",
    "%</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x22\x20style=\x22height:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-",
    "reload",
    "removeChild",
    "contains",
    "toUTCString",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔑\x20API\x20Key\x20inválida\x20-\x20verifica\x20la\x20configuración\x20en\x20Vercel</div>",
    "\x0a\x20\x20\x20\x20\x20\x20</div>",
    "códigos\x20de\x20barras\x20❌\x20(HTTP\x20",
    "qr_code",
    "#f8f9fa",
    "validFrom",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22promociones-container\x22\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>🔍\x20Verificando\x20promociones...</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "QR_CODE",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "i2of5_reader",
    "borderRadius",
    "Backend\x20con\x20error:\x20",
    "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js",
    "pro_precio_total",
    "flexDirection",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x22\x20style=\x22min-width:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "SKU\x20desconocido",
    "fallbackTiempo",
    "Producto\x20desconocido",
    "\x0a<button\x20type=\x22button\x22\x20id=\x22btnPromociones\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x20mb-4\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#28a745;\x20background:#d4edda;\x20color:#155724;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x20margin-left:20px;\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🏷️\x20Ver\x20Promociones\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20w-100\x20mb-2\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20flex-column\x20flex-md-row\x20align-items-md-end\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20<h5\x20class=\x22ant-typography\x20css-1r8qqf1\x20mb-0\x22>Productos</h5>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22ultimaActualizacion\x22\x20class=\x22ant-typography\x20css-1r8qqf1\x20ms-md-4\x22\x20style=\x22font-size:1rem;\x22>Última\x20actualización:\x20nunca\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnActualizar\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#d9d9d9;\x20background:#fff;\x20color:#222;\x20font-size:1rem;\x20padding:2px\x2016px;\x20margin-left:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnTexto\x22>Actualizar</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20id=\x22mensajeActualizacion\x22\x20class=\x22text-center\x22\x20style=\x22min-height:\x201.5rem;\x22></div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20promociones\x20generales\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22promocionesGeneralesModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22promocionesGeneralesModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22promocionesGeneralesModalLabel\x22>🏷️\x20Todas\x20las\x20Promociones\x20Disponibles</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22promociones-generales-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones...</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20me-auto\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "💡\x20Ve\x20a:\x20https://console.cloud.google.com/apis/library/vision.googleapis.com",
    "objectStoreNames",
    "bg-success",
    "promociones:",
    "https://contador-apicloudvision.vercel.app/api/stats",
    "1\x20endpoint\x20completado,\x20finalizando...",
    "\x20más</div>",
    "Error\x20inicial\x20cargando\x20productos:",
    "mostrarModalPromocionesGenerales",
    "JsBarcode",
    "boundingBox",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22consultarProductoDesdeModal(\x27",
    "pr_sku",
    "💡\x20El\x20contador\x20del\x20backend\x20se\x20actualiza\x20automáticamente\x20en\x20el\x20servidor",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20",
    "beforeend",
    "❌\x20Cancelar",
    "./service-worker.js",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Precio:\x20$",
    "display",
    "POST",
    "Error\x20en\x20detección",
    "Error\x20en\x20actualización:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🎯\x20Mostrando\x20promociones\x20locales...",
    "❌\x20Endpoint\x20/api/stats\x20falló:",
    "find",
    "✅\x20Detección\x20avanzada\x20(backend)\x20configurada\x20y\x20activa",
    "Bootstrap\x20modal\x20no\x20activo",
    "getFullYear",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "#000000",
    "✅\x20Endpoint\x20promociones\x20consultado:\x20",
    "❌\x20Backend\x20no\x20disponible:",
    "toString",
    "state",
    "getAll",
    "⚠️\x20<strong>Límite\x20cerca:</strong>\x20",
    "</span>",
    "indexeddb_local",
    "Página\x20",
    "putImageData",
    "✅\x20Extraído\x20formato\x20completo\x20del\x20nombre:",
    "touch",
    "23443191mhHFme",
    "⚡\x20Actualización\x20completada\x20en\x20",
    "autocapitalize",
    "right",
    "🔗\x20Ve\x20a:\x20https://console.cloud.google.com/billing",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "pageSizeSelect",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "verificadorB9DB",
    "isArray",
    "CORS_ERROR",
    "webkitOverflowScrolling",
    "⚠️\x20Error\x20con\x20endpoint\x20de\x20códigos\x20de\x20barras:",
    "textAlign",
    "\x22\x20style=\x22width:60px;height:60px;object-fit:contain;border-radius:8px;background:#f8f9fa;\x22\x20onerror=\x22this.style.display=\x27none\x27\x22></div>",
    "<div\x20class=\x22col\x22>",
    "code",
    "enabled",
    "\x20endpoints\x20consultados",
    "CODE128",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "📸\x20Usando\x20Quagga\x20como\x20fallback",
    "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "#btnSpinner",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "autoplay",
    "status",
    "\x20para:\x20",
    "usarCodigosBarras",
    "\x20productos\x20(",
    "dailyLimit",
    "códigos\x20de\x20barras\x20⚠️\x20(sin\x20datos)",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22",
    "codeResult",
    "history",
    "🔍\x20Validando:\x20\x22",
    "classList",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20descripción\x22\x20data-copiar=\x22",
    "auto",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Backend\x20error:\x20",
    "Descargando\x20desde\x20múltiples\x20endpoints...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "list-group-item\x20list-group-item-action\x20d-flex\x20align-items-center",
    "🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "setItem",
    "FECHA_ESCANEO",
    "\x20con\x20datos\x20disponibles)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "onLine",
    "getUsageStatus",
    "\x20\x20\x20•\x20API\x20Key\x20inválida\x20o\x20límites\x20excedidos",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20me-2\x20mb-1\x22\x20style=\x22font-size:0.85rem;\x22>🔥\x20",
    "CORS",
    "❌\x20Modal\x20no\x20encontrado",
    "productosConCodigosAdicionales",
    "productosConCodigos",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20Error\x20verificando\x20estado",
    "price",
    "transparent",
    "height",
    "bg-danger",
    "match",
    "Nunca\x20actualizado",
    "\x20segundos",
    "bg-success\x20text-white",
    "pdf417",
    "stringify",
    "activo",
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20/*\x20Imagen\x20fija\x20para\x20tarjetas\x20de\x20resultados\x20(grid)\x20*/\x0a\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20border-top-left-radius:\x200.375rem;\x0a\x20\x20\x20\x20border-top-right-radius:\x200.375rem;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20}\x0a\x20\x20.result-card-img\x20img\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20}\x0a\x20\x20/*\x20El\x20espaciado\x20del\x20grid\x20lo\x20maneja\x20Bootstrap\x20g-3;\x20sin\x20margen\x20extra\x20en\x20la\x20card\x20para\x20evitar\x20desalineación\x20*/\x0a\x20\x20.result-card\x20{\x20margin:\x200;\x20}\x0a\x20\x20.promo-badge\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x206px;\x0a\x20\x20\x20\x20left:\x206px;\x0a\x20\x20\x20\x20font-size:\x200.7rem;\x0a\x20\x20}\x0a\x20\x20@media\x20(max-width:\x20576px)\x20{\x0a\x20\x20\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20\x20\x20height:\x20100px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20nombre\x20del\x20producto\x20*/\x0a\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x201.4rem;\x0a\x20\x20\x20\x20line-height:\x201.3;\x0a\x20\x20\x20\x20margin-bottom:\x200.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.1rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20precios\x20*/\x0a\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x203.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x202.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20para\x20código\x20de\x20barras\x20funcional\x20*/\x0a\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20max-width:\x20100%;\x0a\x20\x20\x20\x20height:\x20auto;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20background:\x20#ffffff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x202rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x201.5rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20160px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Modal\x20de\x20resultados\x20al\x2080%\x20en\x20desktop\x20*/\x0a\x20\x20@media\x20(min-width:\x20992px)\x20{\x0a\x20\x20\x20\x20#resultadosBusquedaModal\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    "outcome",
    "value",
    "estadisticas",
    "\x22\x20formato:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22\x20style=\x22font-size:\x200.9rem;\x20line-height:\x201.2;\x22>",
    "codabar",
    "\x20usos\x20mensuales",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Cantidad</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔄\x20Consultando\x20endpoint\x20de\x20promociones...",
    "💡\x20Verifica\x20la\x20configuración\x20de\x20GOOGLE_VISION_API_KEY\x20en\x20Vercel",
    "Nueva\x20versión\x20disponible.\x20¿Recargar\x20la\x20página?",
    "📊\x20<strong>Uso\x20local\x20de\x20este\x20dispositivo:</strong><br>",
    "📊\x20Resumen\x20endpoints\x20productos:",
    ";\x20expires=",
    "modal-open",
    "\x20-\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20locales\x20cargadas.\x20Pulsa\x20“Actualizar”\x20para\x20sincronizar.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20consultar-historial-btn\x22\x20title=\x22Ver\x20detalles\x20completos\x22\x20data-sku=\x22",
    "#btnTexto",
    "CODABAR",
    "agresiva",
    "querySelectorAll",
    "4742520XzQZps",
    "result",
    "•\x20Diario:\x20",
    "innerHTML",
    "\x22\x20role=\x22progressbar\x22\x20style=\x22width:\x20",
    "zIndex",
    "center",
    "activeElement",
    "pageSize",
    "PRECIO",
    "CORS_ERROR:\x20Backend\x20no\x20accesible\x20desde\x20este\x20dominio",
    "blur",
    "🚫\x20PROBLEMA:\x20Permisos\x20denegados\x20-\x20Vision\x20API\x20no\x20habilitada",
    "list",
    "recordUsage",
    "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto",
    "flex",
    "resultadosInfo",
    "fire",
    "\x22\x20style=\x22width:40px;\x20height:40px;\x20object-fit:cover;\x20border-radius:4px;\x20margin-right:12px;\x20background:#f8f9fa;\x22>",
    "catch",
    "❌\x20Sin\x20datos,\x20usando\x20genérico",
    "❌\x20Error\x20con\x20API\x20nativa,\x20usando\x20fallback:",
    "slice",
    "🔍\x20Códigos\x20detectados\x20por\x20API\x20nativa:\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Unidades</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x20d-block\x22\x20style=\x22font-size:\x201.3rem;\x22>$",
    "✅\x20Datos\x20locales\x20encontrados:\x20productos:",
    "🔍\x20Datos\x20de\x20promoción\x20recibidos:",
    "resetMonthlyUsage",
    "input",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔥\x20",
    "async",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontraron\x20resultados\x20para:\x20",
    "🚀\x20Iniciando\x20actualización\x20con\x20progreso...",
    "createObjectURL",
    "\x20producto",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    ")<br>",
    "bi\x20bi-list",
    "test",
    "dailyUsed",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>MSI</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Código\x20de\x20barras\x20funcional\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22barcode-",
    "d-none",
    "font",
    "block",
    "2160932mVTmYf",
    "mediaDevices",
    "toDateString",
    "pro_precioPromo",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-4\x20d-flex\x20justify-content-center\x20mb-3\x20mb-lg-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fff;\x20border-radius:16px;\x20box-shadow:0\x204px\x2024px\x20rgba(0,0,0,0.15);\x20padding:16px;\x20display:flex;\x20justify-content:center;\x20align-items:center;\x20width:240px;\x20height:140px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "NOMBRE",
    "8OTPSxi",
    "es-CL",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "createObjectStore",
    ".alert-danger",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-check\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22form-check-input\x22\x20type=\x22checkbox\x22\x20id=\x22enabledCheck\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "ayuda",
    "data_matrix",
    "\x0a\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20text-truncate\x22\x20title=\x22",
    "code_32_reader",
    "readonly",
    "📝\x20Texto\x20completo\x20detectado:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>",
    "stop",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h5>🏷️\x20No\x20se\x20encontraron\x20productos\x20con\x20promociones</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-0\x22>Puede\x20ser\x20que\x20no\x20haya\x20promociones\x20activas\x20en\x20este\x20momento\x20o\x20que\x20el\x20servicio\x20no\x20esté\x20disponible.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "PDF_417",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
    "#ffffff",
    "pro_grupoProductos_primaria",
    "📸\x20Procesando\x20con\x20Quagga...",
    "📊\x20Status\x20HTTP:",
    "\x20promocion(es)\x20encontrada(s)\x20para\x20SKU:\x20",
    "promociones_ts",
    "🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers",
    "installed",
    "maxWidth",
    "toISOString",
    "body",
    "min",
    "alternativa",
    "other",
    "pro_nombrePromo",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "toLocaleString",
    "opacity",
    "UPC_A",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-box-seam\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x20mb-0\x22>Productos\x20no\x20disponibles</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Promoción\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20",
    "https://media.megaservicio.net",
    "controllerchange",
    "Error\x20HTTP:\x20",
    "🎯\x20Mejor\x20código\x20seleccionado:\x20\x22",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>❌\x20Error\x20al\x20cargar\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "🧪\x20Respuesta\x20completa\x20vision-detect:",
    "preventDefault",
    "\x20|\x20Promociones:\x20",
    "fillRect",
    "canUseAPI",
    "month",
    "getInstance",
    "lastUsedDate",
    "pro_cantidad_base",
    "\x20promociones",
    "no-store",
    "básico\x20❌\x20(error)",
    "https://contador-apicloudvision.vercel.app/api/vision-detect",
    "Error\x20al\x20copiar:",
    "inputPageJump",
    "❌\x20Instalación\x20rechazada",
    "createImageData",
    "productosBasicos",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x20mt-2\x22\x20style=\x22font-size:0.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Códigos\x20disponibles:</strong>\x20",
    "fillText",
    "count",
    "oncomplete",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Error\x20en\x20diagnóstico:\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x20ms-2\x22>1\x20unidad</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22><strong>SKU:</strong>\x20",
    "splice",
    "🔧\x20Error\x20500:\x20Problema\x20con\x20Google\x20Vision\x20API",
    "✅\x20Backend\x20activo.\x20Estadísticas:",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "onsuccess",
    "</strong>\x20resultados\x20para\x20\x22",
    "getContext",
    "📊\x20Datos\x20extraídos\x20antes\x20de\x20procesamiento:",
    "Combo\x20Especial",
    "GET",
    "message",
    "⚠️\x20<strong>Límite\x20diario\x20cerca:</strong>\x20",
    "saveUsage",
    "load",
    "12px\x20Arial",
    "144CAoBSe",
    "🔄\x20Consultando\x20endpoint\x20con\x20códigos\x20de\x20barras...",
    "playsinline",
    "warningThreshold",
    "inserta\x20sku\x20o\x20busca\x20un\x20producto",
    "📏\x20Ampliando\x20imagen\x20pequeña:\x20",
    "EAN13",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
    "btnToggleVista",
    "usage",
    "🔄\x20Consultando\x20endpoint\x20básico...",
    "mensaje",
    "prompt",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Actualizado:</strong>\x20",
    "tipo",
    "total_price",
    "video",
    "updatefound",
    "getTracks",
    "continuous",
    "UPC",
    "sort",
    "setAttribute",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22productos-lista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "nombre_promocion",
    "#mensajeActualizacion",
    "page",
    "remainingMonthly",
    "location",
    "canvas",
    "❌\x20Error\x20guardando\x20promociones\x20en\x20IndexedDB:",
    "change",
    "Fecha\x20desconocida",
    "getRegistrations",
    "className",
    "precio",
    "querySelector",
    "qty",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-success\x20fw-bold\x22>$",
    "hidden.bs.modal",
    "\x20horas",
    "✅\x20Código\x20detectado\x20(configuración\x20principal):",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x22\x20style=\x22cursor:pointer;\x22\x20onclick=\x22mostrarProductoPromocion(\x27",
    "\x22\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Vista:\x20",
    "loadUsage",
    ";\x20path=/",
    "🔧\x20Problema\x20de\x20CORS\x20detectado\x20-\x20necesita\x20configuración\x20en\x20backend",
    "code_93",
    "text",
    "start",
    "data",
    "margin",
    "json",
    "googleVisionConfig",
    "<br>",
    "top",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "EAN_8",
    "fulfilled",
    "accepted",
    "Error\x20generando\x20código\x20de\x20barras:",
    "btn-success",
    "\x20usos\x20hoy",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "🏷️\x20Promociones\x20oficiales\x20filtradas:",
    "muted",
    "warn",
    "aztec",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    ".copiar-sku-btn",
    "abs",
    "CODIGO",
    "remove",
    "autocomplete",
    "✅\x20Tercera\x20tentativa\x20exitosa:",
    "list-group\x20position-absolute\x20w-100",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20<strong\x20class=\x22ms-1\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20d-flex\x20align-items-center\x20gap-2\x22>",
    "then",
    "API_KEY_INVALID",
    "off",
    "📋\x20Probando\x20configuración:\x20",
    "❌\x20Error\x20de\x20conexión",
    "🔍\x20Código\x20candidato\x20encontrado:\x20",
    "includes",
    "monthlyUsed",
    "x-large",
    "Actualizando...",
    "🔧\x20Error\x20500:\x20Problema\x20interno\x20del\x20servidor",
    "promociones-generales-modal-body",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Total\x20Normal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "application/json",
    "Consultando\x20los\x203\x20endpoints...",
    "🍎\x20Dispositivo\x20iOS:",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Consulta\x20parcial\x20de\x20endpoints",
    "Promoción\x20especial",
    "Verifique\x20su\x20conexión\x20a\x20internet",
    "pr_precio",
    "<div\x20class=\x22text-center\x20text-muted\x20small\x22>…\x20y\x20",
    "add",
    ".modal-body",
    "d-flex\x20flex-column\x20align-items-center\x20mb-3",
    "code_128_reader",
    "onclick",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🚫\x20Vision\x20API\x20No\x20Habilitada</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20Vision\x20API\x20no\x20está\x20habilitada\x20en\x20tu\x20proyecto</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/apis/library/vision.googleapis.com\x22\x20target=\x22_blank\x22>Habilitar\x20Vision\x20API</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "dailyCount",
    "\x20=\x20",
    "push",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Leyendo\x20promociones\x20y\x20productos\x20locales...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "🔧\x20Error\x20500\x20detectado\x20-\x20Analizando\x20causa\x20específica:",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "✅\x20Todos\x20los\x20endpoints\x20consultados",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "monthlyLimit",
    "promociones-container",
    "https://verificadorb9-backend.vercel.app/api/productos-con-codigos",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-decoration-line-through\x20text-muted\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>$",
    "rawValue",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Precio\x20promocional</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "addEventListener",
    "precioTotal",
    "showUsageWarning",
    "✅\x20Los\x203\x20endpoints\x20consultados",
    "environment",
    "checked",
    "script",
    "parentNode",
    "pro_mensaje",
    "startsWith",
    "<div\x20class=\x22alert\x20alert-info\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Mostrando\x20los\x20primeros\x2020\x20productos.\x20Hay\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x22>$",
    "iconVista",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    ")\x20-\x20",
    "replace",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:\x200.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💰\x20Ahorras\x20$",
    "responses",
    "disabled",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "pr_imagen",
    "🎯\x20Umbral\x20calculado:\x20",
    "🔄\x20Sin\x20productos:\x20cargando\x20SOLO\x20productos",
    "❌\x20Todas\x20las\x20configuraciones\x20fallaron",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Área\x20para\x20mostrar\x20resultados\x20del\x20diagnóstico\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22diagnostico-resultado\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Detección\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20📷\x20<strong>Local:</strong>\x20Html5QrCode\x20+\x20BarcodeDetector\x20+\x20Quagga.js<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🌐\x20<strong>Premium:</strong>\x20Google\x20Vision\x20API\x20(para\x20códigos\x20difíciles)<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🔄\x20<strong>Automático:</strong>\x20Fallback\x20inteligente\x20entre\x20métodos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>✅\x20Ventajas\x20del\x20backend:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Sin\x20límites\x20por\x20dispositivo<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Detección\x20superior\x20en\x20superficies\x20reflectivas<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Mejor\x20precisión\x20con\x20códigos\x20largos<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Funciona\x20con\x20imágenes\x20de\x20baja\x20calidad<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Gestión\x20centralizada\x20de\x20recursos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🔄\x20Fallback\x20automático:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Si\x20el\x20backend\x20no\x20está\x20disponible,\x20la\x20app\x20usará\x20detección\x20local\x20automáticamente.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Recomendación:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mantén\x20activada\x20la\x20detección\x20avanzada\x20para\x20mejores\x20resultados.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "#6c757d",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20",
    "ean_reader",
    "codabar_reader",
    "❌\x20Código\x20no\x20encontrado:\x20\x22",
    "pr_gtin",
    "No\x20se\x20puede\x20generar\x20código\x20de\x20barras:\x20canvas\x20o\x20código\x20faltante",
    "🎯\x20Consultando\x20promociones\x20generales...",
    "getVideoTracks",
    "round",
    "100%",
    "<div\x20class=\x22alert\x20alert-success\x22>✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente</div>",
    "join",
    "scrollIntoView",
    "shift",
    "pr_name",
    "error",
    "Modal",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20promo-badge\x22>🏷️\x20PROMO</span>",
    "some",
    "view",
    "Error\x20cargando\x20promociones:",
    "promociones",
    "type",
    "requestSubmit",
    "click",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x20text-muted\x20small\x22>",
    "\x20x\x20",
    "❌\x20Error\x20específico\x20del\x20backend:",
    "image/png",
    "Error\x20al\x20cargar\x20productos:",
    "imageSmoothingEnabled",
    "remainingDaily",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Con\x20códigos\x20adicionales:</strong>\x20",
    "\x20me-1\x20mb-1\x22\x20style=\x22font-size:0.75rem;\x22>",
    "toLowerCase",
    "toFixed",
    "fuente",
    "Lista",
    "show",
    "🔄\x20Iniciando\x20detección\x20con\x20Quagga...",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "data-form-type",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-check-label\x22\x20for=\x22enabledCheck\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Activar\x20detección\x20avanzada\x20(Backend)</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Usa\x20servidor\x20dedicado\x20para\x20mejor\x20detección\x20de\x20códigos\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20",
    "</div>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x22>",
    "<i\x20class=\x22bi\x20bi-clipboard\x22></i>",
    "BILLING_DISABLED",
    "none",
    "large",
    "\x20(redondeado)",
    "appendChild",
    "decodeSingle",
    "nombre",
    "ultimaActualizacion",
    "✅\x20Código\x20detectado\x20(configuración\x20agresiva):",
    "Enter",
    "diagnostic",
    "validTo",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "\x20de\x20",
    "❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB",
    "EAN8",
    "placeholder",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "installBtn",
    "resultado",
    "✅\x20Extraído\x20formato\x20con\x20peso\x20del\x20nombre:",
    "visionData",
    "mostrarProductoPromocion",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>\x20\x20Total\x20SKUs:</strong>\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "productos",
    "ℹ️\x20Promos\x20locales\x20disponibles:",
    "textContent",
    "Error\x20consultando\x20producto\x20desde\x20modal:",
    "update",
    "❌\x20Error\x20consultando\x20endpoints",
    "⚠️\x20BarcodeDetector\x20no\x20disponible\x20en\x20este\x20navegador",
    "Cuadros",
    "target",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20pt-2\x20border-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>📅\x20Vigencia:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Formato\x20de\x20promociones\x20inválido",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "max",
    "🔧\x20Sugerencia:\x20Verificar\x20configuración\x20CORS\x20en\x20el\x20backend\x20para\x20/api/productos-con-codigos",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📋\x20Descripción\x20completa\x20de\x20productos:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-3\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Backend:\x20https://contador-apicloudvision.vercel.app/</small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-info\x20btn-sm\x22\x20onclick=\x22diagnosticarBackend()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Probar\x20Conexión\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "🏦\x20PROBLEMA:\x20Facturación\x20no\x20habilitada\x20en\x20el\x20proyecto\x20correcto",
    "ean_8",
    "upc_e_reader",
    "ean_13",
    "now",
    "head",
    "forEach",
    "Algunos\x20endpoints\x20fallaron\x20(",
    "upc_e",
    "📱\x20Cerrando\x20modal\x20móvil...",
    "🔄\x20Backend\x20no\x20disponible,\x20usando\x20detección\x20local",
    "Error\x20verificando\x20datos\x20locales:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x20bg-transparent\x20border-0\x20pt-0\x20pb-2\x20text-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-primary\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27",
    "hasAttribute",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-medium\x22>",
    "%;\x20transition:\x20width\x200.3s\x20ease;\x22\x20aria-valuenow=\x22",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20<strong>⚠️\x20No\x20se\x20detectó\x20código\x20válido</strong><br>\x0a\x20\x20\x20\x20\x20\x20Para\x20códigos\x20largos\x20como\x20este,\x20intenta:<br>\x0a\x20\x20\x20\x20\x20\x20•\x20📏\x20<strong>Recortar\x20muy\x20cerca\x20del\x20código</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20💡\x20<strong>Mejor\x20iluminación\x20uniforme</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20📱\x20<strong>Evitar\x20superficies\x20reflectivas</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20🔍\x20<strong>Imagen\x20más\x20nítida\x20y\x20estable</strong>",
    "✅\x20Productos\x20cargados\x20con\x20códigos\x20de\x20barras:",
    "transaction",
    "code_39_reader",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers</div>",
    "enabledCheck",
    "submit",
    "❌\x20Error\x20cargando\x20promociones:",
    "\x20\x20\x20Posibles\x20causas:",
    "?t=",
    "width",
    "fillStyle",
    "objectStore",
    "Básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "textAnnotations",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-warning\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔥\x20",
    "trim",
    "Hace\x20",
    "ean_8_reader",
    "📋\x20Detalles\x20completos:",
    "spellcheck",
    "CODE_39",
    "revokeObjectURL",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:#495057;\x22>🏷️\x20PROMOCIONES\x20ACTIVAS</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "description",
    "descripcion",
    "filter",
    "split",
    "principal",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x20",
    "data-sku",
    "1055",
    "🔄\x20Service\x20Worker\x20actualizado",
    "https://verificadorb9-backend.vercel.app/api/promociones",
    "substring",
    "style",
    "resultados_view",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22>Total\x20con\x20Promo</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "nearest",
    "fixed",
    "resultadosBusquedaModal",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-light\x20text-dark\x20me-1\x20mb-1\x22\x20style=\x22font-size:\x200.7rem;\x22>",
    "\x27);\x20})()\x22>Ver</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>",
    "unshift",
    "</small>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
  ];
  _0xc301 = function () {
    return _0x31ba5a;
  };
  return _0xc301();
}
const resultadosModalHTML =
  "\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22resultadosBusquedaModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22resultadosBusquedaModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22resultadosBusquedaModalLabel\x22>🔎\x20Resultados\x20de\x20Búsqueda</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22resultados-busqueda-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x20d-flex\x20flex-wrap\x20gap-2\x20align-items-center\x20justify-content-between\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22pageSizeSelect\x22\x20class=\x22mb-0\x22>Mostrar:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22pageSizeSelect\x22\x20class=\x22form-select\x20form-select-sm\x22\x20style=\x22width:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22\x20selected>10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2220\x22>20</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2250\x22>50</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-success\x20btn-sm\x20d-flex\x20align-items-center\x20gap-1\x22\x20id=\x22btnToggleVista\x22\x20title=\x22Cambiar\x20vista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-grid-3x3-gap\x22\x20id=\x22iconVista\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22labelVista\x22>Cuadros</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x22\x20id=\x22resultadosInfo\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnPrevResultados\x22>«\x20Anterior</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22pageIndicator\x22\x20class=\x22text-muted\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnNextResultados\x22>Siguiente\x20»</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22inputPageJump\x22\x20class=\x22form-control\x20form-control-sm\x22\x20style=\x22width:90px;\x22\x20min=\x221\x22\x20placeholder=\x22Ir\x20a...\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x20btn-sm\x22\x20id=\x22btnIrPagina\x22>Ir</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>";
document[_0x472491(0x125)]["insertAdjacentHTML"](
  _0x472491(0x389),
  resultadosModalHTML
);
const btnActualizar = actualizarDiv[_0x472491(0x182)]("#btnActualizar"),
  btnPromociones = actualizarDiv["querySelector"]("#btnPromociones"),
  ultimaActualizacionSpan = actualizarDiv[_0x472491(0x182)](
    "#ultimaActualizacion"
  ),
  btnTexto = actualizarDiv[_0x472491(0x182)](_0x472491(0xd0)),
  btnSpinner = actualizarDiv[_0x472491(0x182)](_0x472491(0x8f)),
  mensajeActualizacion = actualizarDiv[_0x472491(0x182)](_0x472491(0x177));
async function mostrarProductosConPromociones() {
  const _0x471156 = _0x472491,
    _0x420a5d = await getAllProductos(),
    _0x2f7c6a = [];
  for (const _0x2ef249 of _0x420a5d) {
    try {
      const _0x227f7f = await detectarPromocionReal(_0x2ef249);
      _0x227f7f["length"] > 0x0 && _0x2f7c6a[_0x471156(0x1cb)](_0x2ef249);
    } catch (_0x5019e3) {
      console[_0x471156(0x1a0)](
        _0x471156(0x311) + _0x2ef249[_0x471156(0x386)] + ":",
        _0x5019e3
      );
    }
  }
  if (_0x2f7c6a["length"] === 0x0) {
    (resultadoDiv[_0x471156(0xd7)] = _0x471156(0x118)), renderHistorial();
    return;
  }
  const _0x154441 = [];
  for (const _0x4dee58 of _0x2f7c6a[_0x471156(0xeb)](0x0, 0x14)) {
    try {
      const _0x1ad3fa = await detectarPromocionReal(_0x4dee58),
        _0x20d0f7 =
          Number(_0x4dee58[_0x471156(0x1c1)]) || Number(_0x4dee58["L1"]) || 0x0,
        _0x109be1 = Math[_0x471156(0x1f9)](_0x20d0f7 * 1.16 * 0x64) / 0x64,
        _0x51b7c1 = _0x1ad3fa[_0x471156(0x291)]((_0x48282d) => {
          const _0x3e00b4 = _0x471156;
          let _0x35a466 = _0x3e00b4(0x37c),
            _0x43f1ed =
              _0x48282d["detalle"] ||
              _0x48282d[_0x3e00b4(0x176)] ||
              _0x3e00b4(0x2b2);
          if (_0x48282d[_0x3e00b4(0x16c)][_0x3e00b4(0x1b3)](_0x3e00b4(0x326)))
            (_0x35a466 = _0x3e00b4(0xb5)),
              (_0x43f1ed = _0x3e00b4(0xf3) + _0x43f1ed);
          else
            _0x48282d["es_oficial"] &&
              ((_0x35a466 = _0x3e00b4(0xb9)),
              (_0x43f1ed = "🏷️\x20" + _0x43f1ed));
          return (
            _0x3e00b4(0x2d1) +
            _0x35a466 +
            _0x3e00b4(0x212) +
            _0x43f1ed +
            _0x3e00b4(0x3a0)
          );
        })["join"]("");
      _0x154441[_0x471156(0x1cb)](
        _0x471156(0x188) +
          _0x4dee58[_0x471156(0x386)] +
          _0x471156(0x22c) +
          _0x4dee58["pr_name"] +
          "\x22>" +
          _0x4dee58[_0x471156(0x1ff)] +
          "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>" +
          _0x51b7c1 +
          _0x471156(0x184) +
          _0x109be1[_0x471156(0x214)](0x2) +
          _0x471156(0x333) +
          _0x4dee58[_0x471156(0x386)] +
          _0x471156(0x1ce)
      );
    } catch (_0x3235ab) {
      console[_0x471156(0x1a0)](
        "⚠️\x20Error\x20al\x20procesar\x20producto\x20" +
          _0x4dee58[_0x471156(0x386)] +
          ":",
        _0x3235ab
      );
    }
  }
  (resultadoDiv[_0x471156(0xd7)] =
    _0x471156(0x307) +
    _0x2f7c6a[_0x471156(0x2db)] +
    "\x20encontrados</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong></small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    _0x154441["join"]("") +
    _0x471156(0x90) +
    (_0x2f7c6a[_0x471156(0x2db)] > 0x14
      ? _0x471156(0x1e1) +
        (_0x2f7c6a[_0x471156(0x2db)] - 0x14) +
        _0x471156(0x323)
      : "") +
    _0x471156(0x1e4)),
    renderHistorial();
}
window[_0x472491(0x237)] = async function (_0x4cf105) {
  const _0x4777d2 = _0x472491,
    _0x3e1acf = await getAllProductos(),
    _0x23c55a = _0x3e1acf[_0x4777d2(0x394)](
      (_0x33a2de) =>
        _0x33a2de[_0x4777d2(0x386)] === _0x4cf105 ||
        _0x33a2de[_0x4777d2(0x1f5)] === _0x4cf105
    );
  if (_0x23c55a) {
    mostrarDetalleProducto(_0x23c55a);
    const _0xaa31c2 = {
      ..._0x23c55a,
      FECHA_ESCANEO: new Date()[_0x4777d2(0x124)](),
    };
    historial["unshift"](_0xaa31c2),
      setCookie(_0x4777d2(0x33d), JSON["stringify"](historial), 0x1e),
      renderHistorial();
  }
};
const urlBase = "https://verificadorb9-backend.vercel.app/api/productos",
  urlBaseConCodigos = _0x472491(0x1d3),
  urlPromociones = _0x472491(0x27b),
  CONFIG_ENDPOINTS = {
    productosBasicos: urlBase,
    productosConCodigos: urlBaseConCodigos,
    promociones: urlPromociones,
    usarCodigosBarras: !![],
    fallbackTiempo: 0x1388,
  };
function tiempoRelativo(_0x19f9b9) {
  const _0x2fd17f = _0x472491;
  if (!_0x19f9b9) return "Nunca";
  const _0x3b88b0 = Date[_0x2fd17f(0x24e)](),
    _0x118783 = Math[_0x2fd17f(0x32c)]((_0x3b88b0 - _0x19f9b9) / 0x3e8);
  if (_0x118783 < 0x3c) return _0x2fd17f(0x26b) + _0x118783 + _0x2fd17f(0xb8);
  if (_0x118783 < 0xe10)
    return (
      "Hace\x20" + Math[_0x2fd17f(0x32c)](_0x118783 / 0x3c) + _0x2fd17f(0x34c)
    );
  if (_0x118783 < 0x15180)
    return (
      _0x2fd17f(0x26b) +
      Math[_0x2fd17f(0x32c)](_0x118783 / 0xe10) +
      _0x2fd17f(0x186)
    );
  return (
    _0x2fd17f(0x26b) + Math[_0x2fd17f(0x32c)](_0x118783 / 0x15180) + "\x20días"
  );
}
function renderUltimaActualizacion() {
  const _0x2c6ed0 = _0x472491,
    _0x4572db = localStorage[_0x2c6ed0(0x2dc)](_0x2c6ed0(0x2d3)),
    _0x18d7a3 = localStorage[_0x2c6ed0(0x2dc)](_0x2c6ed0(0x120));
  let _0x881b47 = _0x2c6ed0(0xb7);
  if (_0x4572db && _0x18d7a3) {
    const _0x47d52e = tiempoRelativo(Number(_0x4572db)),
      _0x3f1a6a = tiempoRelativo(Number(_0x18d7a3)),
      _0x36b3ee = Math[_0x2c6ed0(0x1a4)](Number(_0x4572db) - Number(_0x18d7a3));
    _0x36b3ee < 0xea60
      ? (_0x881b47 = "Última\x20actualización:\x20" + _0x47d52e)
      : (_0x881b47 =
          _0x2c6ed0(0x338) + _0x47d52e + _0x2c6ed0(0x138) + _0x3f1a6a);
  } else {
    if (_0x4572db)
      _0x881b47 =
        _0x2c6ed0(0x338) + tiempoRelativo(Number(_0x4572db)) + _0x2c6ed0(0x340);
    else
      _0x18d7a3 &&
        (_0x881b47 = _0x2c6ed0(0x2f0) + tiempoRelativo(Number(_0x18d7a3)));
  }
  ultimaActualizacionSpan[_0x2c6ed0(0x23c)] = _0x881b47;
}
function actualizarProgreso(_0x5c0ec6, _0x36d9d4, _0x223533 = "") {
  const _0x50fa27 = _0x472491,
    _0x43322e = Math[_0x50fa27(0x126)](
      0x64,
      Math[_0x50fa27(0x246)](0x0, _0x5c0ec6)
    ),
    _0x1303e2 =
      _0x5c0ec6 >= 0x64
        ? _0x50fa27(0x330)
        : _0x5c0ec6 >= 0x32
        ? "success"
        : _0x50fa27(0x2da);
  mensajeActualizacion[_0x50fa27(0xd7)] =
    _0x50fa27(0x258) +
    _0x36d9d4 +
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>" +
    _0x5c0ec6 +
    _0x50fa27(0x35f) +
    _0x1303e2 +
    _0x50fa27(0xd8) +
    _0x43322e +
    _0x50fa27(0x259) +
    _0x5c0ec6 +
    _0x50fa27(0x2a4) +
    (_0x223533
      ? "<small\x20class=\x22text-muted\x20mt-1\x20d-block\x22>" +
        _0x223533 +
        _0x50fa27(0x287)
      : "") +
    _0x50fa27(0x1e4);
}
async function actualizarTodosLosDatos() {
  const _0x4d9b65 = _0x472491;
  console[_0x4d9b65(0x335)](_0x4d9b65(0xf6)),
    (btnActualizar[_0x4d9b65(0x1e9)] = !![]),
    (btnTexto[_0x4d9b65(0x23c)] = _0x4d9b65(0x1b6)),
    btnSpinner["classList"]["remove"](_0x4d9b65(0xff));
  const _0x15a9c7 = Date[_0x4d9b65(0x24e)]();
  let _0x57abef = ![],
    _0x33beb6 = ![];
  const _0x224056 = () => {
    const _0x36841c = _0x4d9b65;
    let _0x525eae = 0x0,
      _0x1930f2 = "Iniciando...",
      _0x443cfe = "";
    if (!_0x57abef && !_0x33beb6)
      (_0x525eae = 0xa),
        (_0x1930f2 = "Consultando\x203\x20endpoints..."),
        (_0x443cfe =
          "Productos\x20básicos,\x20códigos\x20de\x20barras\x20y\x20promociones");
    else {
      if (_0x57abef && !_0x33beb6)
        (_0x525eae = 0x46),
          (_0x1930f2 = "2\x20endpoints\x20completados,\x20finalizando..."),
          (_0x443cfe = "Cargando\x20promociones");
      else {
        if (!_0x57abef && _0x33beb6)
          (_0x525eae = 0x46),
            (_0x1930f2 = _0x36841c(0x37f)),
            (_0x443cfe = _0x36841c(0x289));
        else {
          _0x525eae = 0x64;
          const _0x33b76a = ((Date[_0x36841c(0x24e)]() - _0x15a9c7) / 0x3e8)[
            "toFixed"
          ](0x1);
          (_0x1930f2 = _0x36841c(0x1da)),
            (_0x443cfe = "Finalizada\x20en\x20" + _0x33b76a + _0x36841c(0xb8));
        }
      }
    }
    actualizarProgreso(_0x525eae, _0x1930f2, _0x443cfe);
  };
  _0x224056();
  try {
    await new Promise((_0x197c8f) => setTimeout(_0x197c8f, 0xc8)),
      actualizarProgreso(
        0x19,
        _0x4d9b65(0x1bb),
        "Conectando\x20con\x20todos\x20los\x20servidores"
      );
    const _0x3bd2ee = cargarProductosRapido()["then"]((_0x4c74ec) => {
        return (_0x57abef = !![]), _0x224056(), _0x4c74ec;
      }),
      _0x2d2b72 = cargarPromocionesRapido()["then"]((_0x4e117b) => {
        return (_0x33beb6 = !![]), _0x224056(), _0x4e117b;
      });
    setTimeout(() => {
      const _0x2f280e = _0x4d9b65;
      (!_0x57abef || !_0x33beb6) &&
        actualizarProgreso(0x32, _0x2f280e(0xa2), _0x2f280e(0x267));
    }, 0x3e8);
    const [_0x16541c, _0x3e53e8] = await Promise[_0x4d9b65(0x345)]([
        _0x3bd2ee,
        _0x2d2b72,
      ]),
      _0x503adf = ((Date[_0x4d9b65(0x24e)]() - _0x15a9c7) / 0x3e8)[
        _0x4d9b65(0x214)
      ](0x1);
    console[_0x4d9b65(0x335)](_0x4d9b65(0x3a7) + _0x503adf + "s");
    const _0x2d23da = _0x16541c[_0x4d9b65(0x92)] === _0x4d9b65(0x198),
      _0x3d41e5 = _0x3e53e8[_0x4d9b65(0x92)] === "fulfilled";
    if (_0x2d23da && _0x3d41e5) {
      const _0x2bf6f5 = _0x16541c[_0x4d9b65(0xbf)]?.[_0x4d9b65(0x23a)] || 0x0,
        _0x3da794 = _0x3e53e8[_0x4d9b65(0xbf)]?.[_0x4d9b65(0x206)] || 0x0,
        _0x2afdc9 = _0x16541c["value"]?.["detalles"] || "",
        _0x23b56b = _0x3e53e8[_0x4d9b65(0xbf)]?.["detalles"] || "";
      actualizarProgreso(
        0x64,
        _0x4d9b65(0x1cf),
        _0x2bf6f5 +
          _0x4d9b65(0x95) +
          _0x2afdc9 +
          _0x4d9b65(0x356) +
          _0x3da794 +
          "\x20promociones\x20(" +
          _0x23b56b +
          _0x4d9b65(0x1e5) +
          _0x503adf +
          "s"
      );
    } else
      _0x2d23da || _0x3d41e5
        ? actualizarProgreso(
            0x4b,
            _0x4d9b65(0x1be),
            _0x4d9b65(0x251) + _0x503adf + "s)"
          )
        : actualizarProgreso(
            0x19,
            _0x4d9b65(0x23f),
            _0x4d9b65(0x2cc) + _0x503adf + "s)"
          );
    _0x16541c[_0x4d9b65(0x92)] === _0x4d9b65(0x2c9) &&
      console[_0x4d9b65(0x200)](_0x4d9b65(0x20e), _0x16541c["reason"]),
      _0x3e53e8[_0x4d9b65(0x92)] === _0x4d9b65(0x2c9) &&
        console["error"](
          "Error\x20al\x20cargar\x20promociones:",
          _0x3e53e8["reason"]
        );
  } catch (_0x33525f) {
    console[_0x4d9b65(0x200)](_0x4d9b65(0x390), _0x33525f),
      actualizarProgreso(0x0, _0x4d9b65(0x1b1), _0x4d9b65(0x1c0));
  } finally {
    (btnActualizar["disabled"] = ![]),
      (btnTexto[_0x4d9b65(0x23c)] = "Actualizar"),
      btnSpinner["classList"][_0x4d9b65(0x1c3)]("d-none"),
      setTimeout(() => {
        const _0x419362 = _0x4d9b65;
        (mensajeActualizacion[_0x419362(0x23c)] = ""),
          renderUltimaActualizacion();
      }, 0xfa0);
  }
}
async function cargarProductosRapido() {
  const _0xc80194 = _0x472491,
    _0x5210e1 = Date[_0xc80194(0x24e)]();
  if (!navigator[_0xc80194(0xa9)]) throw new Error(_0xc80194(0x339));
  let _0x36afd1 = [],
    _0x49fae3 = [];
  console[_0xc80194(0x335)](_0xc80194(0x29e));
  if (CONFIG_ENDPOINTS[_0xc80194(0x94)])
    try {
      const _0x1ba5cd =
        CONFIG_ENDPOINTS["productosConCodigos"] + "?t=" + _0x5210e1;
      console[_0xc80194(0x335)](_0xc80194(0x15f));
      const _0x30abee = await Promise[_0xc80194(0x332)]([
        fetch(_0x1ba5cd, {
          cache: "no-store",
          mode: "cors",
          headers: {
            Accept: _0xc80194(0x1ba),
            "Content-Type": _0xc80194(0x1ba),
          },
        }),
        new Promise((_0x46880d, _0x51b22e) =>
          setTimeout(
            () => _0x51b22e(new Error(_0xc80194(0x2f4))),
            CONFIG_ENDPOINTS[_0xc80194(0x377)]
          )
        ),
      ]);
      if (_0x30abee["ok"]) {
        const _0x1124d0 = await _0x30abee[_0xc80194(0x192)]();
        _0x1124d0[_0xc80194(0x330)] && _0x1124d0[_0xc80194(0x23a)]
          ? ((_0x36afd1 = _0x1124d0[_0xc80194(0x23a)]),
            _0x49fae3[_0xc80194(0x1cb)]("códigos\x20de\x20barras\x20✅"),
            console[_0xc80194(0x335)](
              _0xc80194(0x25b),
              _0x1124d0[_0xc80194(0x23a)]["length"]
            ))
          : _0x49fae3["push"](_0xc80194(0x97));
      } else
        _0x49fae3[_0xc80194(0x1cb)](
          _0xc80194(0x366) + _0x30abee[_0xc80194(0x92)] + ")"
        );
    } catch (_0x575fa7) {
      console["warn"](_0xc80194(0x3b2), _0x575fa7[_0xc80194(0x159)]),
        _0x575fa7[_0xc80194(0x159)][_0xc80194(0x1b3)]("CORS") ||
        _0x575fa7[_0xc80194(0x159)][_0xc80194(0x1b3)](_0xc80194(0x337))
          ? (_0x49fae3["push"]("códigos\x20de\x20barras\x20❌\x20(CORS/Red)"),
            console[_0xc80194(0x335)](_0xc80194(0x247)))
          : _0x49fae3[_0xc80194(0x1cb)](_0xc80194(0x2fc));
    }
  try {
    const _0x3ac2d9 =
      CONFIG_ENDPOINTS[_0xc80194(0x147)] + _0xc80194(0x263) + _0x5210e1;
    console["log"](_0xc80194(0x168));
    const _0x445a5d = await fetch(_0x3ac2d9, { cache: _0xc80194(0x140) });
    if (_0x445a5d["ok"]) {
      const _0x102f90 = await _0x445a5d["json"](),
        _0x5d441e = Array[_0xc80194(0x3af)](_0x102f90) ? _0x102f90 : [];
      _0x36afd1["length"] === 0x0 &&
        _0x5d441e[_0xc80194(0x2db)] > 0x0 &&
        (_0x36afd1 = _0x5d441e),
        _0x49fae3[_0xc80194(0x1cb)](_0xc80194(0x2c2)),
        console[_0xc80194(0x335)](
          "✅\x20Endpoint\x20básico\x20consultado:",
          _0x5d441e[_0xc80194(0x2db)],
          "productos"
        );
    } else _0x49fae3["push"]("básico\x20❌\x20(error\x20HTTP)");
  } catch (_0xf1aa82) {
    console["warn"](
      "⚠️\x20Error\x20con\x20endpoint\x20básico:",
      _0xf1aa82[_0xc80194(0x159)]
    ),
      _0x49fae3[_0xc80194(0x1cb)](_0xc80194(0x141));
  }
  if (_0x36afd1["length"] === 0x0)
    throw new Error(
      "No\x20se\x20pudieron\x20cargar\x20productos\x20de\x20ningún\x20endpoint"
    );
  return (
    await clearProductos(),
    await saveProductos(_0x36afd1),
    localStorage[_0xc80194(0xa6)](_0xc80194(0x2d3), String(_0x5210e1)),
    console[_0xc80194(0x335)](
      _0xc80194(0xca),
      _0x49fae3[_0xc80194(0x1fc)](",\x20")
    ),
    {
      productos: _0x36afd1["length"],
      endpoints: _0x49fae3,
      detalles: _0x49fae3["length"] + _0xc80194(0x8a),
    }
  );
}
async function cargarPromocionesRapido() {
  const _0x2c7efc = _0x472491;
  console[_0x2c7efc(0x335)](_0x2c7efc(0xc6));
  const _0x466b78 = await fetch(CONFIG_ENDPOINTS[_0x2c7efc(0x206)], {
    cache: _0x2c7efc(0x140),
    headers: { Accept: _0x2c7efc(0x1ba), "Content-Type": _0x2c7efc(0x1ba) },
  });
  if (!_0x466b78["ok"])
    throw new Error(_0x2c7efc(0x133) + _0x466b78[_0x2c7efc(0x92)]);
  const _0x3840d4 = await _0x466b78[_0x2c7efc(0x192)]();
  if (
    _0x3840d4["success"] &&
    _0x3840d4["data"] &&
    _0x3840d4["data"][_0x2c7efc(0x206)]
  ) {
    const _0x520299 = _0x3840d4[_0x2c7efc(0x190)]["promociones"];
    console[_0x2c7efc(0x335)](
      _0x2c7efc(0x39a) + _0x520299[_0x2c7efc(0x2db)] + _0x2c7efc(0x13f)
    );
    try {
      await clearPromociones(), await savePromociones(_0x520299);
      const _0x13445f = Date[_0x2c7efc(0x24e)]();
      localStorage[_0x2c7efc(0xa6)](_0x2c7efc(0x120), String(_0x13445f)),
        console["log"](_0x2c7efc(0x22f));
    } catch (_0x1e2948) {
      console[_0x2c7efc(0x200)](_0x2c7efc(0x17c), _0x1e2948);
    }
    return { promociones: _0x520299["length"], detalles: "promociones\x20✅" };
  } else throw new Error(_0x2c7efc(0x244));
}
btnActualizar[_0x472491(0x1d7)](_0x472491(0x209), actualizarTodosLosDatos),
  renderUltimaActualizacion(),
  setInterval(renderUltimaActualizacion, 0xea60),
  openDB()[_0x472491(0x1ad)](async (_0x138fcb) => {
    const _0x3663ed = _0x472491,
      _0x1f7313 = _0x138fcb[_0x3663ed(0x25c)](DB_STORE, _0x3663ed(0x114)),
      _0x45f74c = _0x1f7313[_0x3663ed(0x266)](DB_STORE),
      _0x51055e = _0x45f74c[_0x3663ed(0x14a)](),
      _0x18fde3 = _0x138fcb[_0x3663ed(0x25c)](
        DB_STORE_PROMOCIONES,
        _0x3663ed(0x114)
      ),
      _0x987fb3 = _0x18fde3[_0x3663ed(0x266)](DB_STORE_PROMOCIONES),
      _0x5949c0 = _0x987fb3[_0x3663ed(0x14a)]();
    Promise[_0x3663ed(0x2d7)]([
      new Promise((_0x5a27c1) => {
        const _0x1c6aa3 = _0x3663ed;
        _0x51055e[_0x1c6aa3(0x153)] = () =>
          _0x5a27c1(_0x51055e[_0x1c6aa3(0xd5)]);
      }),
      new Promise((_0x462928) => {
        const _0x4d278b = _0x3663ed;
        _0x5949c0[_0x4d278b(0x153)] = () =>
          _0x462928(_0x5949c0[_0x4d278b(0xd5)]);
      }),
    ])
      ["then"](([_0x140d2b, _0x2f9ec5]) => {
        const _0x4ec1da = _0x3663ed,
          _0x5a3c5d = _0x140d2b > 0x0,
          _0x17ac5f = _0x2f9ec5 > 0x0;
        if (!_0x5a3c5d && !_0x17ac5f)
          console[_0x4ec1da(0x335)](_0x4ec1da(0x299)),
            cargarProductosRapido()[_0x4ec1da(0xe8)]((_0x5bee10) =>
              console[_0x4ec1da(0x200)](_0x4ec1da(0x381), _0x5bee10)
            );
        else
          !_0x5a3c5d
            ? (console["log"](_0x4ec1da(0x1ed)),
              cargarProductosRapido()[_0x4ec1da(0xe8)]((_0x334fa3) =>
                console["error"](
                  "Error\x20inicial\x20cargando\x20productos:",
                  _0x334fa3
                )
              ))
            : console["log"](
                _0x4ec1da(0xee),
                _0x140d2b,
                _0x4ec1da(0x37d),
                _0x2f9ec5
              );
        datosYaCargados = !![];
      })
      [_0x3663ed(0xe8)]((_0x37bfb6) => {
        const _0x1ae9f5 = _0x3663ed;
        console["error"](_0x1ae9f5(0x255), _0x37bfb6);
        try {
          cargarProductosRapido()[_0x1ae9f5(0xe8)]((_0x2d94a7) =>
            console[_0x1ae9f5(0x200)](
              "Fallo\x20al\x20cargar\x20productos\x20iniciales",
              _0x2d94a7
            )
          );
        } catch (_0x484857) {}
        datosYaCargados = !![];
      });
  });
let historial = [];
const historialCookie = getCookie(_0x472491(0x33d));
if (historialCookie)
  try {
    historial = JSON[_0x472491(0x329)](historialCookie);
  } catch (_0x30c423) {
    historial = [];
  }
function renderClearButton() {
  const _0x4b5be5 = _0x472491;
  return _0x4b5be5(0x196);
}
function renderHistorial() {
  const _0x46937a = _0x472491;
  (historialDiv[_0x46937a(0xd7)] =
    _0x46937a(0x3ad) +
    (historial[_0x46937a(0x2db)] > 0x0 ? renderClearButton() : "") +
    _0x46937a(0x10b) +
    (historial["length"] === 0x0
      ? _0x46937a(0x36d)
      : "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        historial["map"]((_0x9a2464) => {
          const _0x39ce6a = _0x46937a,
            _0x14c0ad =
              _0x9a2464[_0x39ce6a(0x1ff)] ||
              _0x9a2464[_0x39ce6a(0x108)] ||
              _0x39ce6a(0x378),
            _0x15bfdd =
              _0x9a2464[_0x39ce6a(0x386)] ||
              _0x9a2464[_0x39ce6a(0x1f5)] ||
              _0x9a2464[_0x39ce6a(0x1a5)] ||
              _0x9a2464["SKU"] ||
              _0x39ce6a(0x376),
            _0x394ed3 =
              _0x9a2464[_0x39ce6a(0x1c1)] ||
              _0x9a2464["L1"] ||
              _0x9a2464[_0x39ce6a(0xdd)] ||
              0x0,
            _0x1b6ba2 = Math[_0x39ce6a(0x1f9)](_0x394ed3 * 1.16 * 0x64) / 0x64,
            _0x2ea613 = _0x9a2464[_0x39ce6a(0xa7)]
              ? new Date(_0x9a2464[_0x39ce6a(0xa7)])[_0x39ce6a(0x12b)]()
              : _0x39ce6a(0x17e);
          return (
            _0x39ce6a(0x375) +
            _0x14c0ad +
            _0x39ce6a(0x9e) +
            _0x14c0ad +
            _0x39ce6a(0x1ab) +
            _0x15bfdd +
            "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20SKU\x22\x20data-copiar=\x22" +
            _0x15bfdd +
            _0x39ce6a(0x38c) +
            _0x1b6ba2[_0x39ce6a(0x214)](0x2) +
            _0x39ce6a(0xf9) +
            _0x2ea613 +
            _0x39ce6a(0xcf) +
            _0x15bfdd +
            _0x39ce6a(0x355)
          );
        })[_0x46937a(0x1fc)]("") +
        _0x46937a(0x165)) +
    _0x46937a(0x8c)),
    setCookie(_0x46937a(0x33d), JSON[_0x46937a(0xbb)](historial), 0x1e);
  const _0x5ed1e2 = document[_0x46937a(0x2e4)](_0x46937a(0x2fa));
  _0x5ed1e2 &&
    _0x5ed1e2["addEventListener"](_0x46937a(0x209), () => {
      const _0x25bdff = _0x46937a;
      (historial = []),
        setCookie(_0x25bdff(0x33d), JSON[_0x25bdff(0xbb)](historial), 0x1e),
        renderHistorial();
    });
  const _0x898f09 = historialDiv[_0x46937a(0xd3)](_0x46937a(0x2a9));
  _0x898f09[_0x46937a(0x250)]((_0xabefe6) => {
    const _0xaf8981 = _0x46937a;
    _0xabefe6[_0xaf8981(0x1d7)](_0xaf8981(0x209), function (_0x585a0d) {
      const _0x367056 = _0xaf8981,
        _0x4b1567 = _0xabefe6[_0x367056(0x33f)]("data-copiar");
      navigator[_0x367056(0x2a1)] &&
        navigator[_0x367056(0x2a1)]["writeText"](_0x4b1567)["then"](() => {
          const _0x3d4d11 = _0x367056;
          (_0xabefe6[_0x3d4d11(0xd7)] =
            "<i\x20class=\x22bi\x20bi-clipboard-check\x22></i>"),
            setTimeout(() => {
              const _0x537aba = _0x3d4d11;
              _0xabefe6[_0x537aba(0xd7)] = _0x537aba(0x21f);
            }, 0x4b0);
        });
    });
  });
  const _0x2d0ce8 = historialDiv[_0x46937a(0xd3)](_0x46937a(0x35b));
  _0x2d0ce8["forEach"]((_0x44e27e) => {
    const _0x41db32 = _0x46937a;
    _0x44e27e[_0x41db32(0x1d7)](_0x41db32(0x209), function (_0x29ee6b) {
      const _0x5660f2 = _0x41db32,
        _0x3604b8 = _0x44e27e[_0x5660f2(0x33f)](_0x5660f2(0x278));
      consultarProductoDesdeHistorial(_0x3604b8);
    });
  });
}
inputCodigo[_0x472491(0x1d7)](_0x472491(0x2cf), function (_0x15ac52) {
  const _0x4642e7 = _0x472491;
  _0x15ac52["key"] === "Enter" &&
    (_0x15ac52[_0x4642e7(0x137)](),
    form[_0x4642e7(0x208)](),
    setTimeout(() => {
      const _0x30913e = _0x4642e7,
        _0x6c4db4 = document[_0x30913e(0x2e4)]("resultado");
      _0x6c4db4 &&
        _0x6c4db4["scrollIntoView"]({
          behavior: _0x30913e(0x317),
          block: _0x30913e(0x18f),
          inline: _0x30913e(0x280),
        });
    }, 0x12c));
}),
  form["addEventListener"](_0x472491(0x260), async (_0x599f23) => {
    const _0x2665cd = _0x472491;
    _0x599f23["preventDefault"](), hideMobileKeyboard();
    let _0x8b882d = inputCodigo[_0x2665cd(0xbf)]
      [_0x2665cd(0x26a)]()
      [_0x2665cd(0x1e6)](/\s+$/, "");
    const _0x52c763 = _0x8b882d[_0x2665cd(0x213)]();
    (inputCodigo["value"] = _0x8b882d),
      (resultadoDiv[_0x2665cd(0xd7)] = ""),
      setTimeout(() => {
        const _0x46d76e = _0x2665cd,
          _0x3b6968 = document[_0x46d76e(0x2e4)](_0x46d76e(0x234));
        _0x3b6968 &&
          _0x3b6968[_0x46d76e(0x1fd)]({
            behavior: _0x46d76e(0x317),
            block: _0x46d76e(0x18f),
            inline: "nearest",
          });
      }, 0x64),
      (sugerenciasDiv[_0x2665cd(0xd7)] = ""),
      (sugerenciasDiv[_0x2665cd(0x27d)]["display"] = _0x2665cd(0x221));
    if (!_0x8b882d) {
      (resultadoDiv[_0x2665cd(0xd7)] = _0x2665cd(0x107)),
        renderHistorial(),
        inputCodigo[_0x2665cd(0x29c)]();
      return;
    }
    (inputCodigo["placeholder"] = ""),
      (resultadoDiv[_0x2665cd(0xd7)] =
        "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>"),
      (inputCodigo["value"] = "");
    try {
      inputCodigo["blur"]();
    } catch (_0x32bba1) {}
    let _0x3602b0 = await getAllProductos(),
      _0x4569d0 = _0x3602b0["find"]((_0x258e53) => {
        const _0x19f399 = _0x2665cd,
          _0xa2ba95 = (
            _0x258e53["pr_sku"] != null
              ? String(_0x258e53[_0x19f399(0x386)])
              : ""
          )[_0x19f399(0x213)](),
          _0x7dd782 = (
            _0x258e53["pr_gtin"] != null
              ? String(_0x258e53[_0x19f399(0x1f5)])
              : ""
          )[_0x19f399(0x213)]();
        if (_0xa2ba95 === _0x52c763 || _0x7dd782 === _0x52c763) return !![];
        if (
          _0x258e53[_0x19f399(0x346)] &&
          Array[_0x19f399(0x3af)](_0x258e53[_0x19f399(0x346)])
        )
          return _0x258e53[_0x19f399(0x346)][_0x19f399(0x203)](
            (_0x19108d) => String(_0x19108d)[_0x19f399(0x213)]() === _0x52c763
          );
        return ![];
      });
    if (_0x4569d0) {
      mostrarDetalleProducto(_0x4569d0);
      const _0x149f40 = {
        ..._0x4569d0,
        FECHA_ESCANEO: new Date()[_0x2665cd(0x124)](),
      };
      historial[_0x2665cd(0x286)](_0x149f40),
        setCookie(_0x2665cd(0x33d), JSON[_0x2665cd(0xbb)](historial), 0x1e),
        (inputCodigo[_0x2665cd(0xbf)] = "");
      if (!isMobileDevice())
        try {
          inputCodigo[_0x2665cd(0x29c)]();
        } catch (_0x4a2252) {}
      _0x4569d0[_0x2665cd(0x346)] &&
        _0x4569d0[_0x2665cd(0x346)][_0x2665cd(0x2db)] > 0x1 &&
        console[_0x2665cd(0x335)](
          "🎯\x20Producto\x20encontrado\x20con\x20códigos\x20múltiples:",
          {
            sku: _0x4569d0[_0x2665cd(0x386)],
            gtin_principal: _0x4569d0[_0x2665cd(0x1f5)],
            codigo_buscado: _0x8b882d,
            todos_los_codigos: _0x4569d0[_0x2665cd(0x346)],
          }
        );
    } else {
      let _0x2842cd = _0x3602b0["filter"]((_0x2d2a22) => {
        const _0x5d265b = _0x2665cd,
          _0x5acffa = (_0x2d2a22["pr_name"] || "")["toLowerCase"](),
          _0x1ca04e = (
            _0x2d2a22[_0x5d265b(0x386)] != null
              ? String(_0x2d2a22["pr_sku"])
              : ""
          )[_0x5d265b(0x213)](),
          _0x23a535 = (
            _0x2d2a22[_0x5d265b(0x1f5)] != null
              ? String(_0x2d2a22["pr_gtin"])
              : ""
          )[_0x5d265b(0x213)]();
        return (
          _0x5acffa[_0x5d265b(0x1b3)](_0x52c763) ||
          _0x1ca04e["includes"](_0x52c763) ||
          _0x23a535["includes"](_0x52c763)
        );
      });
      _0x2842cd["length"] > 0x0
        ? mostrarModalResultadosBusqueda(_0x2842cd, _0x8b882d)
        : ((resultadoDiv["innerHTML"] =
            _0x2665cd(0xf5) + _0x8b882d + _0x2665cd(0x21c)),
          (inputCodigo["value"] = ""),
          inputCodigo[_0x2665cd(0x29c)](),
          setTimeout(() => {
            const _0x13ac7e = _0x2665cd;
            resultadoDiv[_0x13ac7e(0xd7)] = "";
          }, 0x1388),
          console[_0x2665cd(0x335)](_0x2665cd(0x1f4) + _0x8b882d + "\x22"));
    }
    renderHistorial();
  });
async function detectarPromocionReal(_0x412ae0) {
  const _0x1a19ff = _0x472491,
    _0x3d78f7 = (_0x412ae0[_0x1a19ff(0x386)] || "")[_0x1a19ff(0x39c)]();
  try {
    const _0x3777d5 = await getAllPromociones();
    console[_0x1a19ff(0x335)](_0x1a19ff(0x23b), _0x3777d5[_0x1a19ff(0x2db)]),
      console[_0x1a19ff(0x335)](
        "🔍\x20Buscando\x20promociones\x20para\x20SKU:",
        _0x3d78f7
      );
    const _0x1eeff2 = [];
    for (const _0x3549cb of _0x3777d5) {
      let _0x3a0381 = [];
      if (
        _0x3549cb[_0x1a19ff(0x316)] &&
        Array[_0x1a19ff(0x3af)](_0x3549cb[_0x1a19ff(0x316)])
      )
        _0x3a0381 = _0x3549cb["skus"];
      else
        _0x3549cb[_0x1a19ff(0x11c)] &&
          _0x3549cb[_0x1a19ff(0x11c)][_0x1a19ff(0x386)] &&
          (Array[_0x1a19ff(0x3af)](
            _0x3549cb[_0x1a19ff(0x11c)][_0x1a19ff(0x386)]
          )
            ? (_0x3a0381 =
                _0x3549cb["pro_grupoProductos_primaria"][_0x1a19ff(0x386)])
            : (_0x3a0381 = _0x3549cb[_0x1a19ff(0x11c)][_0x1a19ff(0x386)]
                [_0x1a19ff(0x275)]("\x20")
                [_0x1a19ff(0x274)]((_0x2868b2) =>
                  _0x2868b2[_0x1a19ff(0x26a)]()
                )));
      if (_0x3a0381[_0x1a19ff(0x1b3)](_0x3d78f7)) {
        const _0xc2c485 =
            _0x3549cb[_0x1a19ff(0x129)] ||
            _0x3549cb[_0x1a19ff(0x273)] ||
            _0x3549cb[_0x1a19ff(0x226)] ||
            _0x1a19ff(0x1bf),
          _0x33e3ff =
            _0x3549cb[_0x1a19ff(0x13e)] ||
            _0x3549cb[_0x1a19ff(0x2c5)] ||
            _0x3549cb[_0x1a19ff(0x183)] ||
            "",
          _0xf5b651 =
            _0x3549cb[_0x1a19ff(0x105)] ||
            _0x3549cb[_0x1a19ff(0x181)] ||
            _0x3549cb[_0x1a19ff(0xb2)] ||
            _0x3549cb[_0x1a19ff(0x1d8)] ||
            _0x3549cb["precio_total"] ||
            _0x3549cb["pro_precio_total"] ||
            _0x3549cb[_0x1a19ff(0x16d)] ||
            _0x3549cb["valor_total"] ||
            "";
        console["log"](_0x1a19ff(0x2d2) + _0x3d78f7 + ":", {
          nombre: _0xc2c485,
          cantidad: _0x33e3ff,
          precio: _0xf5b651,
          campos_precio_disponibles: {
            pro_precioPromo: _0x3549cb[_0x1a19ff(0x105)],
            precio: _0x3549cb[_0x1a19ff(0x181)],
            price: _0x3549cb[_0x1a19ff(0xb2)],
            precioTotal: _0x3549cb[_0x1a19ff(0x1d8)],
            precio_total: _0x3549cb["precio_total"],
            pro_precio_total: _0x3549cb[_0x1a19ff(0x372)],
            total_price: _0x3549cb[_0x1a19ff(0x16d)],
            valor_total: _0x3549cb[_0x1a19ff(0x2ef)],
          },
          campos_disponibles: Object["keys"](_0x3549cb),
          promo_completa: _0x3549cb,
        }),
          _0x1eeff2["push"]({
            tipo: "promoción\x20oficial",
            detalle: _0x1a19ff(0xf3) + _0xc2c485,
            nombre_promocion: _0xc2c485,
            es_oficial: !![],
            fuente: _0x1a19ff(0x3a1),
            id_promocion: _0x3549cb["idPromo"] || _0x3549cb["id"],
            cantidad: _0x33e3ff,
            precio: _0xf5b651,
            mensaje:
              _0x3549cb[_0x1a19ff(0x1df)] || _0x3549cb[_0x1a19ff(0x169)] || "",
            tipo_promo:
              _0x3549cb["pro_tipoPromo"] || _0x3549cb[_0x1a19ff(0x16c)] || "",
            vigencia:
              _0x3549cb[_0x1a19ff(0x369)] && _0x3549cb[_0x1a19ff(0x22b)]
                ? _0x3549cb[_0x1a19ff(0x369)] +
                  _0x1a19ff(0x294) +
                  _0x3549cb[_0x1a19ff(0x22b)]
                : "",
            raw_data: {
              pro_cantidad_base: _0x3549cb["pro_cantidad_base"],
              pro_precioPromo: _0x3549cb["pro_precioPromo"],
              pro_nombrePromo: _0x3549cb[_0x1a19ff(0x129)],
              todos_campos_precio: {
                pro_precioPromo: _0x3549cb[_0x1a19ff(0x105)],
                precio: _0x3549cb[_0x1a19ff(0x181)],
                price: _0x3549cb[_0x1a19ff(0xb2)],
                precioTotal: _0x3549cb[_0x1a19ff(0x1d8)],
                precio_total: _0x3549cb[_0x1a19ff(0x2eb)],
                pro_precio_total: _0x3549cb["pro_precio_total"],
                total_price: _0x3549cb[_0x1a19ff(0x16d)],
                valor_total: _0x3549cb["valor_total"],
              },
            },
          });
      }
    }
    return (
      _0x1eeff2[_0x1a19ff(0x2db)] === 0x0
        ? console[_0x1a19ff(0x335)](_0x1a19ff(0x343) + _0x3d78f7)
        : console[_0x1a19ff(0x335)](
            "✅\x20" +
              _0x1eeff2[_0x1a19ff(0x2db)] +
              _0x1a19ff(0x11f) +
              _0x3d78f7
          ),
      _0x1eeff2
    );
  } catch (_0x3c94b0) {
    return (
      console["error"]("Error\x20obteniendo\x20promociones:", _0x3c94b0), []
    );
  }
}
function mostrarDetalleProducto(_0x2b9e64) {
  const _0x5d7346 = _0x472491;
  hideMobileKeyboard();
  let _0x29eda5 = "";
  if (
    _0x2b9e64[_0x5d7346(0x1eb)] &&
    _0x2b9e64[_0x5d7346(0x1eb)][_0x5d7346(0x26a)]() !== ""
  ) {
    if (_0x2b9e64["pr_imagen"][_0x5d7346(0x1e0)](_0x5d7346(0x2b0)))
      _0x29eda5 = _0x2b9e64["pr_imagen"];
    else {
      let _0x4c7f46 = _0x2b9e64[_0x5d7346(0x1eb)]["startsWith"]("/")
        ? _0x2b9e64["pr_imagen"]
        : "/" + _0x2b9e64[_0x5d7346(0x1eb)];
      _0x29eda5 = "https://media.megaservicio.net" + _0x4c7f46;
    }
  }
  let _0xa70774 =
      Number(_0x2b9e64[_0x5d7346(0x1c1)]) || Number(_0x2b9e64["L1"]) || 0x0,
    _0x18e3f0 = Math[_0x5d7346(0x1f9)](_0xa70774 * 1.16 * 0x64) / 0x64,
    _0x5e7d93 = 0xc,
    _0xb20f00 = 0.1,
    _0x14c9b1 =
      Math[_0x5d7346(0x1f9)](_0x18e3f0 * (0x1 + _0xb20f00) * 0x64) / 0x64,
    _0x15df56 = "";
  if (
    _0x2b9e64["codigos_barras"] &&
    _0x2b9e64[_0x5d7346(0x346)][_0x5d7346(0x2db)] > 0x1
  ) {
    const _0x472bad = [...new Set(_0x2b9e64[_0x5d7346(0x346)])]["filter"](
      (_0x13aced) => _0x13aced && _0x13aced["trim"]()
    );
    _0x472bad[_0x5d7346(0x2db)] > 0x1 &&
      (_0x15df56 =
        _0x5d7346(0x148) +
        _0x472bad[_0x5d7346(0x1fc)](",\x20") +
        _0x5d7346(0xa3));
  }
  renderProductoConPromociones(
    _0x2b9e64,
    _0x29eda5,
    _0x18e3f0,
    _0x14c9b1,
    _0x15df56
  ),
    setTimeout(() => {
      generarCodigoBarras(_0x2b9e64);
    }, 0x64),
    detectarPromocionReal(_0x2b9e64)
      [_0x5d7346(0x1ad)]((_0x28c5e0) => {
        actualizarPromocionesEnVista(
          _0x2b9e64,
          _0x29eda5,
          _0x18e3f0,
          _0x14c9b1,
          _0x15df56,
          _0x28c5e0
        );
      })
      [_0x5d7346(0xe8)]((_0x575635) => {
        const _0x14c872 = _0x5d7346;
        console["error"](_0x14c872(0x205), _0x575635),
          actualizarPromocionesEnVista(
            _0x2b9e64,
            _0x29eda5,
            _0x18e3f0,
            _0x14c9b1,
            _0x15df56,
            []
          );
      });
}
function generarCodigoBarras(_0x8dcb56) {
  const _0x2bc144 = _0x472491,
    _0x3efee6 = _0x8dcb56["pr_sku"] || _0x8dcb56[_0x2bc144(0x1f5)] || "",
    _0x3370fd = "barcode-" + _0x8dcb56[_0x2bc144(0x386)],
    _0x2e6717 = document[_0x2bc144(0x2e4)](_0x3370fd);
  if (!_0x2e6717 || !_0x3efee6) {
    console[_0x2bc144(0x1a0)](_0x2bc144(0x1f6));
    return;
  }
  const _0x3b0836 = () => {
    const _0x33fbc8 = _0x2bc144;
    if (window[_0x33fbc8(0x383)])
      try {
        let _0x377faa = _0x33fbc8(0x8b);
        const _0x45f389 = String(_0x3efee6);
        if (
          _0x45f389[_0x33fbc8(0x2db)] === 0xd &&
          /^\d+$/[_0x33fbc8(0xfc)](_0x45f389)
        )
          _0x377faa = _0x33fbc8(0x164);
        else {
          if (_0x45f389["length"] === 0x8 && /^\d+$/["test"](_0x45f389))
            _0x377faa = _0x33fbc8(0x230);
          else
            _0x45f389["length"] === 0xc &&
              /^\d+$/["test"](_0x45f389) &&
              (_0x377faa = _0x33fbc8(0x172));
        }
        console[_0x33fbc8(0x335)](
          _0x33fbc8(0x29a) + _0x377faa + _0x33fbc8(0x93) + _0x45f389
        ),
          JsBarcode(_0x2e6717, _0x45f389, {
            format: _0x377faa,
            width: 0x2,
            height: 0x32,
            displayValue: ![],
            margin: 0x0,
            background: _0x33fbc8(0x11b),
            lineColor: _0x33fbc8(0x399),
          }),
          window["innerWidth"] <= 0x300 &&
            JsBarcode(_0x2e6717, _0x45f389, {
              format: _0x377faa,
              width: 1.5,
              height: 0x28,
              displayValue: ![],
              margin: 0x0,
              background: _0x33fbc8(0x11b),
              lineColor: "#000000",
            });
      } catch (_0x34ce75) {
        console[_0x33fbc8(0x200)](_0x33fbc8(0x19a), _0x34ce75);
        const _0x5b05de = _0x2e6717["getContext"]("2d");
        (_0x5b05de[_0x33fbc8(0x265)] = _0x33fbc8(0x368)),
          _0x5b05de[_0x33fbc8(0x139)](
            0x0,
            0x0,
            _0x2e6717[_0x33fbc8(0x264)],
            _0x2e6717["height"]
          ),
          (_0x5b05de[_0x33fbc8(0x265)] = _0x33fbc8(0x1f0)),
          (_0x5b05de[_0x33fbc8(0x100)] = _0x33fbc8(0x15d)),
          (_0x5b05de[_0x33fbc8(0x3b3)] = "center"),
          _0x5b05de[_0x33fbc8(0x149)](
            _0x33fbc8(0x331),
            _0x2e6717["width"] / 0x2,
            _0x2e6717["height"] / 0x2
          );
      }
    else setTimeout(_0x3b0836, 0x64);
  };
  _0x3b0836();
}
function renderProductoConPromociones(
  _0x30411a,
  _0x48bde9,
  _0x1150df,
  _0x3e756e,
  _0x10bbbe
) {
  const _0x34dfb1 = _0x472491;
  resultadoDiv[_0x34dfb1(0xd7)] =
    _0x34dfb1(0x35c) +
    (_0x48bde9
      ? _0x34dfb1(0x106) +
        _0x48bde9 +
        _0x34dfb1(0x30b) +
        _0x30411a[_0x34dfb1(0x1ff)] +
        _0x34dfb1(0x2e9)
      : "") +
    _0x34dfb1(0x2c0) +
    _0x30411a[_0x34dfb1(0x1ff)] +
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-center\x20align-items-center\x20gap-3\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-danger\x20precio-responsive\x22>$\x20" +
    _0x1150df[_0x34dfb1(0x214)](0x2) +
    _0x34dfb1(0x31d) +
    _0x3e756e["toFixed"](0x2) +
    _0x34dfb1(0xfe) +
    _0x30411a[_0x34dfb1(0x386)] +
    _0x34dfb1(0x2a2) +
    (_0x30411a["pr_sku"] || _0x30411a[_0x34dfb1(0x1f5)] || _0x34dfb1(0x2f9)) +
    _0x34dfb1(0x19d) +
    _0x10bbbe +
    _0x34dfb1(0x36a);
}
function actualizarPromocionesEnVista(
  _0x55e53b,
  _0x95e10f,
  _0x5c632b,
  _0x38353,
  _0x1b1966,
  _0x3dcad1
) {
  const _0x4eb581 = _0x472491;
  console["log"](
    "🔍\x20Actualizando\x20promociones\x20en\x20vista:",
    _0x3dcad1
  );
  let _0x31901d = "";
  if (_0x3dcad1[_0x4eb581(0x2db)] > 0x0) {
    const _0x506f52 = _0x3dcad1[_0x4eb581(0x274)](
      (_0x2c7e32) =>
        _0x2c7e32["es_oficial"] &&
        (_0x2c7e32[_0x4eb581(0x215)] === _0x4eb581(0x344) ||
          _0x2c7e32[_0x4eb581(0x215)] === _0x4eb581(0x3a1))
    );
    console[_0x4eb581(0x335)](_0x4eb581(0x19e), _0x506f52);
    if (_0x506f52[_0x4eb581(0x2db)] > 0x0) {
      const _0xa3f6a8 = _0x506f52["map"]((_0x191956) => {
        const _0x2568cf = _0x4eb581;
        console[_0x2568cf(0x335)](_0x2568cf(0xef), _0x191956);
        const _0x2af1f9 =
          _0x191956["cantidad"] || _0x191956[_0x2568cf(0x13e)] || "";
        let _0x2e17a1 =
          _0x191956[_0x2568cf(0x181)] || _0x191956[_0x2568cf(0x105)] || "";
        const _0x4ee662 =
          _0x191956[_0x2568cf(0x176)] || _0x191956[_0x2568cf(0x129)] || "";
        console[_0x2568cf(0x335)](_0x2568cf(0x156), {
          cantidad: _0x2af1f9,
          precio: _0x2e17a1,
          nombrePromo: _0x4ee662,
        });
        if (_0x2af1f9 && _0x2e17a1) {
          const _0x15504f = parseInt(_0x2af1f9),
            _0x4099f2 = parseFloat(_0x2e17a1);
          if (!isNaN(_0x15504f) && !isNaN(_0x4099f2)) {
            const _0x1c91ee = _0x15504f * _0x4099f2,
              _0x53dd06 = Math[_0x2568cf(0x1f9)](_0x1c91ee);
            console["log"](
              _0x2568cf(0x327) +
                _0x15504f +
                _0x2568cf(0x20b) +
                _0x4099f2 +
                _0x2568cf(0x1ca) +
                _0x1c91ee +
                _0x2568cf(0x32e) +
                _0x53dd06 +
                _0x2568cf(0x223)
            ),
              (_0x2e17a1 = _0x53dd06[_0x2568cf(0x39c)]());
          }
        }
        console[_0x2568cf(0x335)](_0x2568cf(0x2e7), {
          cantidad: _0x2af1f9,
          precio: _0x2e17a1,
          nombrePromo: _0x4ee662,
        });
        let _0x18c0a6 = "";
        if (_0x2af1f9 && _0x2e17a1)
          (_0x18c0a6 = _0x2af1f9 + "x" + _0x2e17a1),
            console[_0x2568cf(0x335)](
              "✅\x20Usando\x20cantidad\x20y\x20precio\x20calculado:",
              _0x18c0a6
            );
        else {
          if (_0x4ee662) {
            const _0x4b2a7a = _0x4ee662["match"](/(\d+)\s*[xX×]\s*(\d+)/i),
              _0x36120c = _0x4ee662["match"](/(\d+)\s*[xX×]\s*\$?\s*(\d+)/i),
              _0x1b0e3e = _0x4ee662[_0x2568cf(0xb6)](/(\d+)\s*[xX×]/i);
            if (_0x4b2a7a)
              (_0x18c0a6 = _0x4b2a7a[0x1] + "x" + _0x4b2a7a[0x2]),
                console[_0x2568cf(0x335)](_0x2568cf(0x3a4), _0x18c0a6);
            else {
              if (_0x36120c)
                (_0x18c0a6 = _0x36120c[0x1] + "x" + _0x36120c[0x2]),
                  console[_0x2568cf(0x335)](_0x2568cf(0x235), _0x18c0a6);
              else
                _0x1b0e3e
                  ? ((_0x18c0a6 = _0x1b0e3e[0x1] + "x"),
                    console[_0x2568cf(0x335)](
                      "⚠️\x20Solo\x20cantidad\x20extraída:",
                      _0x18c0a6
                    ))
                  : ((_0x18c0a6 = _0x4ee662),
                    console["log"](
                      "⚠️\x20Usando\x20nombre\x20completo:",
                      _0x18c0a6
                    ));
            }
          } else
            (_0x18c0a6 = "PROMO"), console[_0x2568cf(0x335)](_0x2568cf(0xe9));
        }
        return _0x2568cf(0xac) + _0x18c0a6 + "</span>";
      })[_0x4eb581(0x1fc)]("");
      _0x31901d =
        _0x4eb581(0x271) +
        _0xa3f6a8 +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22\x20style=\x22font-weight:500;\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    } else _0x31901d = _0x4eb581(0x288);
  } else _0x31901d = _0x4eb581(0x309);
  const _0x5199ee = document[_0x4eb581(0x2e4)](_0x4eb581(0x1d2));
  _0x5199ee && (_0x5199ee["innerHTML"] = _0x31901d);
}
async function mostrarModalPromocionesGenerales() {
  const _0x58f076 = _0x472491,
    _0xbac961 =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i["test"](
        navigator[_0x58f076(0x341)]
      ),
    _0x54a4b6 = /iPad|iPhone|iPod/[_0x58f076(0xfc)](
      navigator[_0x58f076(0x341)]
    );
  if (_0xbac961) hideMobileKeyboard();
  console[_0x58f076(0x335)](_0x58f076(0x2a7), _0xbac961),
    console[_0x58f076(0x335)](_0x58f076(0x1bc), _0x54a4b6);
  const _0x40274e = document[_0x58f076(0x2e4)]("promocionesGeneralesModal"),
    _0x3323f7 = document["getElementById"](_0x58f076(0x1b8));
  if (!_0x3323f7 || !_0x40274e) {
    console[_0x58f076(0x200)](_0x58f076(0xae));
    return;
  }
  try {
    const _0x5cc95c = () => {
      const _0x12df1c = _0x58f076,
        _0x5152e5 = document[_0x12df1c(0x2e4)](_0x12df1c(0x34f));
      _0x5152e5 &&
        ((_0x5152e5[_0x12df1c(0x231)] = _0x12df1c(0x162)),
        bringInputIntoView());
    };
    _0x40274e["addEventListener"](_0x58f076(0x185), _0x5cc95c, { once: !![] });
  } catch (_0x1c7b7a) {}
  try {
    const _0x24f2bb = document[_0x58f076(0x2e4)](_0x58f076(0x34f));
    _0x24f2bb &&
      ((_0x24f2bb["value"] = ""),
      (_0x24f2bb[_0x58f076(0x231)] = _0x58f076(0x162)));
    const _0x18e8fb = document[_0x58f076(0x2e4)](_0x58f076(0x32a));
    _0x18e8fb &&
      ((_0x18e8fb["innerHTML"] = ""),
      (_0x18e8fb["style"][_0x58f076(0x38d)] = _0x58f076(0x221)));
  } catch (_0x3e49df) {}
  try {
    console[_0x58f076(0x335)](_0x58f076(0x1f7)),
      (_0x3323f7[_0x58f076(0xd7)] = _0x58f076(0x1a2));
    const _0x56975a = await getAllProductos();
    let _0x44481e = [];
    try {
      _0x44481e = await getAllPromociones();
    } catch (_0x3e93ee) {
      _0x44481e = [];
    }
    const _0x1d8dc2 = ![];
    console[_0x58f076(0x335)](_0x58f076(0x2b9), {
      total: _0x44481e[_0x58f076(0x2db)],
      desdeServidor: _0x1d8dc2,
    });
    if (_0x44481e[_0x58f076(0x2db)] === 0x0) {
      _0x3323f7["innerHTML"] = _0x58f076(0xce);
      return;
    }
    let _0x2f12c7 = _0x58f076(0x2a6);
    _0x44481e["forEach"]((_0x1d9f31, _0x1341e6) => {
      const _0x399e77 = _0x58f076;
      let _0x28c11d = [];
      if (
        _0x1d9f31[_0x399e77(0x316)] &&
        Array[_0x399e77(0x3af)](_0x1d9f31[_0x399e77(0x316)])
      )
        _0x28c11d = _0x1d9f31["skus"];
      else
        _0x1d9f31[_0x399e77(0x11c)] &&
          _0x1d9f31[_0x399e77(0x11c)][_0x399e77(0x386)] &&
          (Array[_0x399e77(0x3af)](
            _0x1d9f31[_0x399e77(0x11c)][_0x399e77(0x386)]
          )
            ? (_0x28c11d = _0x1d9f31[_0x399e77(0x11c)][_0x399e77(0x386)])
            : (_0x28c11d = _0x1d9f31[_0x399e77(0x11c)][_0x399e77(0x386)]
                [_0x399e77(0x275)]("\x20")
                ["filter"]((_0x56ca0b) => _0x56ca0b[_0x399e77(0x26a)]())));
      const _0x5a8644 = new Map(
          _0x56975a[_0x399e77(0x291)]((_0x1182db) => [
            String(_0x1182db[_0x399e77(0x386)]),
            _0x1182db,
          ])
        ),
        _0x57da28 = _0x28c11d[_0x399e77(0x291)]((_0x236efb) =>
          _0x5a8644[_0x399e77(0x336)](String(_0x236efb))
        )[_0x399e77(0x274)](Boolean),
        _0x502391 =
          _0x1d9f31[_0x399e77(0x129)] ||
          _0x1d9f31[_0x399e77(0x273)] ||
          "Promoción\x20" + (_0x1341e6 + 0x1),
        _0x290adb =
          _0x1d9f31[_0x399e77(0x30a)] ||
          _0x1d9f31[_0x399e77(0x16c)] ||
          "No\x20especificado",
        _0x11a65a =
          _0x1d9f31[_0x399e77(0x1df)] || _0x1d9f31[_0x399e77(0x169)] || "",
        _0x16edb8 = _0x1d9f31["pro_cantidad_base"] || "",
        _0x2023b6 = Number(_0x16edb8) || 0x1;
      let _0xc2ab6 = 0x0;
      const _0x4e96cd = (_0x11a65a + "\x20" + _0x502391)[_0x399e77(0x213)](),
        _0x44b3a1 = _0x4e96cd[_0x399e77(0xb6)](/(\d+)\s*x\s*(\d+)/);
      if (_0x44b3a1) _0xc2ab6 = Math[_0x399e77(0x1f9)](Number(_0x44b3a1[0x2]));
      else {
        const _0x5f2c30 = Number(_0x1d9f31[_0x399e77(0x105)]) || 0x0;
        _0xc2ab6 = Math[_0x399e77(0x1f9)](_0x5f2c30 * _0x2023b6);
      }
      _0x2f12c7 +=
        _0x399e77(0x2e0) +
        _0x502391 +
        _0x399e77(0x175) +
        (_0x57da28[_0x399e77(0x2db)] > 0x0
          ? _0x399e77(0xa0) +
            _0x57da28[_0x399e77(0xeb)](0x0, 0x4)
              [_0x399e77(0x291)]((_0x4161d7) => {
                const _0x3e7030 = _0x399e77;
                let _0x23a04b = "";
                if (
                  _0x4161d7["pr_imagen"] &&
                  _0x4161d7[_0x3e7030(0x1eb)][_0x3e7030(0x26a)]() !== ""
                ) {
                  if (
                    _0x4161d7[_0x3e7030(0x1eb)][_0x3e7030(0x1e0)](
                      _0x3e7030(0x2b0)
                    )
                  )
                    _0x23a04b = _0x4161d7["pr_imagen"];
                  else {
                    let _0x1195f0 = _0x4161d7[_0x3e7030(0x1eb)]["startsWith"](
                      "/"
                    )
                      ? _0x4161d7[_0x3e7030(0x1eb)]
                      : "/" + _0x4161d7[_0x3e7030(0x1eb)];
                    _0x23a04b = _0x3e7030(0x131) + _0x1195f0;
                  }
                }
                const _0x513fe1 =
                    Number(_0x4161d7["pr_precio"]) ||
                    Number(_0x4161d7["L1"]) ||
                    0x0,
                  _0x50fc36 =
                    Math[_0x3e7030(0x1f9)](_0x513fe1 * 1.16 * 0x64) / 0x64;
                return (
                  _0x3e7030(0x32f) +
                  (_0x23a04b
                    ? _0x3e7030(0x374) +
                      _0x23a04b +
                      "\x22\x20alt=\x22" +
                      _0x4161d7["pr_name"] +
                      _0x3e7030(0x31f)
                    : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-light\x20rounded\x22\x20style=\x22min-width:\x2060px;\x20height:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-image\x20text-muted\x22\x20style=\x22font-size:\x201.5rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20") +
                  _0x3e7030(0xc2) +
                  _0x4161d7[_0x3e7030(0x1ff)] +
                  _0x3e7030(0x9d) +
                  _0x50fc36["toFixed"](0x2) +
                  _0x3e7030(0x385) +
                  _0x4161d7[_0x3e7030(0x386)] +
                  _0x3e7030(0x35a)
                );
              })
              [_0x399e77(0x1fc)]("") +
            _0x399e77(0xa0) +
            (_0x57da28[_0x399e77(0x2db)] > 0x4
              ? _0x399e77(0x1c2) +
                (_0x57da28[_0x399e77(0x2db)] - 0x4) +
                _0x399e77(0x380)
              : "") +
            _0x399e77(0x2ba)
          : _0x399e77(0x12e)) +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    }),
      (_0x2f12c7 += "</div>"),
      (_0x3323f7[_0x58f076(0xd7)] = _0x2f12c7);
    if (_0xbac961 || _0x54a4b6) {
      console["log"](
        "📱\x20Abriendo\x20modal\x20en\x20dispositivo\x20móvil..."
      ),
        document[_0x58f076(0xd3)](_0x58f076(0x2bc))[_0x58f076(0x250)](
          (_0x2fa7e3) => _0x2fa7e3[_0x58f076(0x1a6)]()
        ),
        (_0x40274e[_0x58f076(0x27d)][_0x58f076(0x2e8)] = _0x58f076(0x281)),
        (_0x40274e[_0x58f076(0x27d)][_0x58f076(0x195)] = "0"),
        (_0x40274e["style"][_0x58f076(0x300)] = "0"),
        (_0x40274e["style"][_0x58f076(0x264)] = "100%"),
        (_0x40274e["style"][_0x58f076(0xb4)] = _0x58f076(0x1fa)),
        (_0x40274e[_0x58f076(0x27d)][_0x58f076(0xd9)] = "1055"),
        (_0x40274e[_0x58f076(0x27d)][_0x58f076(0x315)] = _0x58f076(0xb3));
      const _0x5f32e8 = _0x40274e[_0x58f076(0x182)](".modal-dialog");
      _0x5f32e8 &&
        ((_0x5f32e8["style"][_0x58f076(0x264)] = _0x58f076(0x1fa)),
        (_0x5f32e8[_0x58f076(0x27d)][_0x58f076(0x123)] = _0x58f076(0x1fa)),
        (_0x5f32e8[_0x58f076(0x27d)]["height"] = _0x58f076(0x1fa)),
        (_0x5f32e8[_0x58f076(0x27d)][_0x58f076(0x191)] = "0"),
        (_0x5f32e8["style"][_0x58f076(0x38d)] = _0x58f076(0xe4)),
        (_0x5f32e8[_0x58f076(0x27d)][_0x58f076(0x373)] = "column"));
      const _0x32f103 = _0x40274e["querySelector"](".modal-content");
      _0x32f103 &&
        ((_0x32f103[_0x58f076(0x27d)][_0x58f076(0x264)] = _0x58f076(0x1fa)),
        (_0x32f103[_0x58f076(0x27d)][_0x58f076(0xb4)] = _0x58f076(0x1fa)),
        (_0x32f103[_0x58f076(0x27d)]["border"] = _0x58f076(0x221)),
        (_0x32f103["style"]["borderRadius"] = "0"),
        (_0x32f103[_0x58f076(0x27d)][_0x58f076(0x38d)] = _0x58f076(0xe4)),
        (_0x32f103["style"][_0x58f076(0x373)] = _0x58f076(0x34a)));
      const _0xf75a97 = _0x40274e[_0x58f076(0x182)](".modal-body");
      _0xf75a97 &&
        ((_0xf75a97[_0x58f076(0x27d)][_0x58f076(0xe4)] = "1"),
        (_0xf75a97["style"]["overflowY"] = _0x58f076(0x9f)),
        (_0xf75a97["style"]["webkitOverflowScrolling"] = _0x58f076(0x3a5)),
        (_0xf75a97[_0x58f076(0x27d)]["maxHeight"] = _0x58f076(0x221))),
        (_0x40274e["style"][_0x58f076(0x38d)] = "block"),
        _0x40274e[_0x58f076(0x9c)]["add"](_0x58f076(0x217)),
        document["body"][_0x58f076(0x9c)][_0x58f076(0x1a6)](_0x58f076(0xcc)),
        (document["body"][_0x58f076(0x27d)][_0x58f076(0x354)] = "");
    } else {
      console["log"](_0x58f076(0x304));
      const _0x19db39 = new bootstrap[_0x58f076(0x201)](_0x40274e, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x19db39[_0x58f076(0x217)]();
    }
  } catch (_0xc94c9d) {
    console[_0x58f076(0x200)](_0x58f076(0x205), _0xc94c9d),
      (_0x3323f7["innerHTML"] =
        _0x58f076(0x135) + _0xc94c9d[_0x58f076(0x159)] + _0x58f076(0x36b));
  }
}
function cerrarModalMobile() {
  const _0x1d6683 = _0x472491;
  console["log"](_0x1d6683(0x253));
  const _0x1851ee = document[_0x1d6683(0x2e4)](_0x1d6683(0x33a));
  if (_0x1851ee) {
    _0x1851ee[_0x1d6683(0x9c)][_0x1d6683(0x1a6)]("show"),
      (_0x1851ee[_0x1d6683(0x27d)][_0x1d6683(0x38d)] = "none"),
      (_0x1851ee["style"][_0x1d6683(0x2e8)] = ""),
      (_0x1851ee[_0x1d6683(0x27d)][_0x1d6683(0x195)] = ""),
      (_0x1851ee["style"][_0x1d6683(0x300)] = ""),
      (_0x1851ee["style"][_0x1d6683(0x264)] = ""),
      (_0x1851ee["style"]["height"] = ""),
      (_0x1851ee[_0x1d6683(0x27d)][_0x1d6683(0xd9)] = ""),
      (_0x1851ee[_0x1d6683(0x27d)][_0x1d6683(0x315)] = "");
    const _0x462a4b = _0x1851ee["querySelector"](".modal-dialog");
    _0x462a4b &&
      ((_0x462a4b[_0x1d6683(0x27d)]["width"] = ""),
      (_0x462a4b[_0x1d6683(0x27d)][_0x1d6683(0x123)] = ""),
      (_0x462a4b[_0x1d6683(0x27d)][_0x1d6683(0xb4)] = ""),
      (_0x462a4b[_0x1d6683(0x27d)][_0x1d6683(0x191)] = ""),
      (_0x462a4b[_0x1d6683(0x27d)][_0x1d6683(0x38d)] = ""),
      (_0x462a4b["style"][_0x1d6683(0x373)] = ""));
    const _0x2ff06a = _0x1851ee[_0x1d6683(0x182)](_0x1d6683(0x2d0));
    _0x2ff06a &&
      ((_0x2ff06a[_0x1d6683(0x27d)][_0x1d6683(0x264)] = ""),
      (_0x2ff06a[_0x1d6683(0x27d)][_0x1d6683(0xb4)] = ""),
      (_0x2ff06a[_0x1d6683(0x27d)]["border"] = ""),
      (_0x2ff06a[_0x1d6683(0x27d)][_0x1d6683(0x36f)] = ""),
      (_0x2ff06a[_0x1d6683(0x27d)][_0x1d6683(0x38d)] = ""),
      (_0x2ff06a[_0x1d6683(0x27d)][_0x1d6683(0x373)] = ""));
    const _0x1ae271 = _0x1851ee[_0x1d6683(0x182)](_0x1d6683(0x1c4));
    _0x1ae271 &&
      ((_0x1ae271[_0x1d6683(0x27d)][_0x1d6683(0xe4)] = ""),
      (_0x1ae271[_0x1d6683(0x27d)][_0x1d6683(0x359)] = ""),
      (_0x1ae271[_0x1d6683(0x27d)][_0x1d6683(0x3b1)] = ""),
      (_0x1ae271[_0x1d6683(0x27d)]["maxHeight"] = ""));
  }
  document[_0x1d6683(0x125)][_0x1d6683(0x9c)][_0x1d6683(0x1a6)](
    _0x1d6683(0xcc)
  ),
    (document[_0x1d6683(0x125)][_0x1d6683(0x27d)][_0x1d6683(0x354)] = "");
  try {
    const _0x3f8c0e = bootstrap[_0x1d6683(0x201)][_0x1d6683(0x13c)](_0x1851ee);
    _0x3f8c0e && _0x3f8c0e[_0x1d6683(0x2aa)]();
  } catch (_0x28797b) {
    console[_0x1d6683(0x335)](_0x1d6683(0x396));
  }
  try {
    document["querySelectorAll"](_0x1d6683(0x2bc))[_0x1d6683(0x250)](
      (_0x39e307) => _0x39e307[_0x1d6683(0x1a6)]()
    );
  } catch (_0x16dfab) {}
  try {
    const _0x24f269 = document[_0x1d6683(0x2e4)]("codigo");
    _0x24f269 &&
      ((_0x24f269[_0x1d6683(0x231)] = _0x1d6683(0x162)), bringInputIntoView());
  } catch (_0x4e19e8) {}
}
async function consultarProductoDesdeModal(_0x3e7489) {
  const _0xcfa2d4 = _0x472491;
  try {
    try {
      cerrarModalMobile();
    } catch (_0x1935cb) {}
    const _0x58ebc8 = document[_0xcfa2d4(0x2e4)](_0xcfa2d4(0x33a));
    _0x58ebc8 &&
      (_0x58ebc8[_0xcfa2d4(0x9c)]["remove"]("show"),
      (_0x58ebc8["style"][_0xcfa2d4(0x38d)] = _0xcfa2d4(0x221)));
    try {
      const _0x2d6a8b = bootstrap["Modal"][_0xcfa2d4(0x13c)](_0x58ebc8);
      if (_0x2d6a8b) _0x2d6a8b[_0xcfa2d4(0x2aa)]();
    } catch (_0x33aec5) {}
    document[_0xcfa2d4(0xd3)](".modal-backdrop,\x20.modal-backdrop-mobile")[
      _0xcfa2d4(0x250)
    ]((_0x36682d) => _0x36682d[_0xcfa2d4(0x1a6)]()),
      document[_0xcfa2d4(0x125)][_0xcfa2d4(0x9c)]["remove"](_0xcfa2d4(0xcc)),
      (document[_0xcfa2d4(0x125)][_0xcfa2d4(0x27d)][_0xcfa2d4(0x354)] = "");
    const _0x26d341 = await getAllProductos(),
      _0x5e706f = _0x26d341[_0xcfa2d4(0x394)](
        (_0x85d418) =>
          String(_0x85d418[_0xcfa2d4(0x386)]) === String(_0x3e7489) ||
          String(_0x85d418[_0xcfa2d4(0x1f5)]) === String(_0x3e7489)
      );
    if (_0x5e706f) {
      (inputCodigo["value"] = ""), mostrarDetalleProducto(_0x5e706f);
      const _0x2683c1 = {
        ..._0x5e706f,
        FECHA_ESCANEO: new Date()[_0xcfa2d4(0x124)](),
      };
      historial[_0xcfa2d4(0x286)](_0x2683c1),
        setCookie("historial", JSON[_0xcfa2d4(0xbb)](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x4217aa = _0xcfa2d4,
            _0x5be448 = document[_0x4217aa(0x2e4)](_0x4217aa(0x234));
          _0x5be448 &&
            _0x5be448["scrollIntoView"]({
              behavior: _0x4217aa(0x317),
              block: _0x4217aa(0x18f),
              inline: _0x4217aa(0x280),
            });
        }, 0x12c);
    } else
      (resultadoDiv["innerHTML"] =
        _0xcfa2d4(0x130) + _0x3e7489 + _0xcfa2d4(0x320)),
        setTimeout(() => {
          const _0x6941c5 = _0xcfa2d4;
          resultadoDiv[_0x6941c5(0xd7)] = "";
        }, 0x1388);
  } catch (_0x4ecdc1) {
    console[_0xcfa2d4(0x200)](_0xcfa2d4(0x23d), _0x4ecdc1),
      (resultadoDiv[_0xcfa2d4(0xd7)] =
        _0xcfa2d4(0x350) + _0x4ecdc1[_0xcfa2d4(0x159)] + _0xcfa2d4(0x12a)),
      setTimeout(() => {
        const _0x1f672a = _0xcfa2d4;
        resultadoDiv[_0x1f672a(0xd7)] = "";
      }, 0x1388);
  }
}
async function consultarProductoDesdeHistorial(_0x1a03a1) {
  const _0x37dfce = _0x472491;
  try {
    const _0x213da0 = await getAllProductos(),
      _0x4d5740 = _0x213da0[_0x37dfce(0x394)](
        (_0x2f944c) =>
          String(_0x2f944c[_0x37dfce(0x386)]) === String(_0x1a03a1) ||
          String(_0x2f944c[_0x37dfce(0x1f5)]) === String(_0x1a03a1)
      );
    if (_0x4d5740) {
      (inputCodigo[_0x37dfce(0xbf)] = ""), mostrarDetalleProducto(_0x4d5740);
      const _0x1e1c71 = historial["findIndex"](
        (_0x138aa7) =>
          (_0x138aa7[_0x37dfce(0x386)] &&
            String(_0x138aa7["pr_sku"]) === String(_0x1a03a1)) ||
          (_0x138aa7[_0x37dfce(0x1f5)] &&
            String(_0x138aa7["pr_gtin"]) === String(_0x1a03a1))
      );
      if (_0x1e1c71 !== -0x1) {
        const _0x5b6f10 = historial[_0x37dfce(0x14e)](_0x1e1c71, 0x1)[0x0];
        (_0x5b6f10[_0x37dfce(0xa7)] = new Date()[_0x37dfce(0x124)]()),
          historial["unshift"](_0x5b6f10),
          setCookie(_0x37dfce(0x33d), JSON[_0x37dfce(0xbb)](historial), 0x1e),
          renderHistorial();
      }
      setTimeout(() => {
        const _0x494408 = _0x37dfce,
          _0x171d55 = document[_0x494408(0x2e4)](_0x494408(0x234));
        _0x171d55 &&
          _0x171d55[_0x494408(0x1fd)]({
            behavior: _0x494408(0x317),
            block: _0x494408(0x18f),
            inline: "nearest",
          });
      }, 0x12c);
    } else
      (resultadoDiv[_0x37dfce(0xd7)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20" +
        _0x1a03a1 +
        _0x37dfce(0x320)),
        setTimeout(() => {
          resultadoDiv["innerHTML"] = "";
        }, 0x1388);
  } catch (_0x5d666b) {
    console[_0x37dfce(0x200)](_0x37dfce(0x29b), _0x5d666b),
      (resultadoDiv[_0x37dfce(0xd7)] =
        _0x37dfce(0x350) + _0x5d666b[_0x37dfce(0x159)] + _0x37dfce(0x12a)),
      setTimeout(() => {
        resultadoDiv["innerHTML"] = "";
      }, 0x1388);
  }
}
(window[_0x472491(0x382)] = mostrarModalPromocionesGenerales),
  (window[_0x472491(0x349)] = consultarProductoDesdeModal),
  (window["consultarProductoDesdeHistorial"] = consultarProductoDesdeHistorial);
async function tienePromociones(_0x1badf2) {
  const _0x5ca98a = _0x472491;
  try {
    const _0x2c8b7e = (_0x1badf2["pr_sku"] || "")[_0x5ca98a(0x39c)]();
    if (!_0x2c8b7e) return ![];
    const _0xaaa677 = await getAllPromociones();
    if (_0xaaa677[_0x5ca98a(0x2db)] === 0x0) return ![];
    for (const _0x18c7fc of _0xaaa677) {
      let _0x424725 = [];
      if (
        _0x18c7fc[_0x5ca98a(0x316)] &&
        Array[_0x5ca98a(0x3af)](_0x18c7fc[_0x5ca98a(0x316)])
      )
        _0x424725 = _0x18c7fc["skus"];
      else
        _0x18c7fc[_0x5ca98a(0x11c)] &&
          _0x18c7fc[_0x5ca98a(0x11c)][_0x5ca98a(0x386)] &&
          (Array["isArray"](
            _0x18c7fc["pro_grupoProductos_primaria"][_0x5ca98a(0x386)]
          )
            ? (_0x424725 = _0x18c7fc[_0x5ca98a(0x11c)]["pr_sku"])
            : (_0x424725 = _0x18c7fc["pro_grupoProductos_primaria"][
                _0x5ca98a(0x386)
              ]
                [_0x5ca98a(0x275)]("\x20")
                ["filter"]((_0x3340b2) => _0x3340b2[_0x5ca98a(0x26a)]())));
      if (_0x424725[_0x5ca98a(0x1b3)](_0x2c8b7e)) return !![];
    }
    return ![];
  } catch (_0xac0adc) {
    return (
      console[_0x5ca98a(0x1a0)](
        "Error\x20verificando\x20promociones:",
        _0xac0adc
      ),
      ![]
    );
  }
}
let searchTimeout;
inputCodigo[_0x472491(0x1d7)](_0x472491(0xf1), async function (_0x56c9b4) {
  const _0x27de58 = _0x472491,
    _0x29c050 = inputCodigo["value"][_0x27de58(0x26a)]()[_0x27de58(0x213)]();
  clearTimeout(searchTimeout), (sugerenciasDiv[_0x27de58(0xd7)] = "");
  if (!_0x29c050 || _0x29c050[_0x27de58(0x2db)] < 0x2) {
    sugerenciasDiv["style"][_0x27de58(0x38d)] = _0x27de58(0x221);
    return;
  }
  searchTimeout = setTimeout(async () => {
    const _0x3ae76a = _0x27de58;
    let _0x498769 = await getAllProductos(),
      _0x5eaeb0 = _0x498769[_0x3ae76a(0x274)]((_0x2aa4ec) => {
        const _0x53fb41 = _0x3ae76a;
        return (
          (_0x2aa4ec[_0x53fb41(0x1ff)] &&
            _0x2aa4ec[_0x53fb41(0x1ff)]
              [_0x53fb41(0x213)]()
              [_0x53fb41(0x1b3)](_0x29c050)) ||
          (_0x2aa4ec[_0x53fb41(0x386)] &&
            String(_0x2aa4ec["pr_sku"])
              ["toLowerCase"]()
              [_0x53fb41(0x1b3)](_0x29c050)) ||
          (_0x2aa4ec[_0x53fb41(0x1f5)] &&
            String(_0x2aa4ec[_0x53fb41(0x1f5)])
              [_0x53fb41(0x213)]()
              ["includes"](_0x29c050))
        );
      });
    const _0x33f35f = new Set();
    _0x5eaeb0 = _0x5eaeb0["filter"]((_0x309007) => {
      const _0x4d29a3 = _0x3ae76a,
        _0x5610e9 = _0x309007[_0x4d29a3(0x386)] || _0x309007["pr_gtin"];
      if (!_0x5610e9 || _0x33f35f["has"](_0x5610e9)) return ![];
      return _0x33f35f[_0x4d29a3(0x1c3)](_0x5610e9), !![];
    });
    if (_0x5eaeb0[_0x3ae76a(0x2db)] === 0x0) {
      sugerenciasDiv[_0x3ae76a(0x27d)]["display"] = _0x3ae76a(0x221);
      return;
    }
    _0x5eaeb0["sort"]((_0x1d46c1, _0x3d037f) => {
      const _0x4f5c3 = _0x3ae76a,
        _0x5cebf2 = (_0x1d46c1[_0x4f5c3(0x1ff)] || "")[_0x4f5c3(0x213)](),
        _0x337539 = (_0x3d037f[_0x4f5c3(0x1ff)] || "")["toLowerCase"](),
        _0x381fb2 = _0x5cebf2[_0x4f5c3(0x1e0)](_0x29c050),
        _0x591a17 = _0x337539[_0x4f5c3(0x1e0)](_0x29c050);
      if (_0x381fb2 && !_0x591a17) return -0x1;
      if (!_0x381fb2 && _0x591a17) return 0x1;
      return _0x5cebf2[_0x4f5c3(0x2db)] - _0x337539["length"];
    }),
      (_0x5eaeb0 = _0x5eaeb0[_0x3ae76a(0xeb)](0x0, 0xa));
    const _0x1ee207 = _0x5eaeb0["map"]((_0x181d73) =>
        tienePromociones(_0x181d73)
      ),
      _0x25aa74 = await Promise[_0x3ae76a(0x2d7)](_0x1ee207);
    _0x5eaeb0[_0x3ae76a(0x250)]((_0x3a5d70, _0x2185a6) => {
      const _0x2d0931 = _0x3ae76a,
        _0x3acd29 = _0x25aa74[_0x2185a6],
        _0x143b73 = document[_0x2d0931(0x2fb)](_0x2d0931(0x31e));
      (_0x143b73[_0x2d0931(0x207)] = _0x2d0931(0x31e)),
        (_0x143b73[_0x2d0931(0x180)] = _0x2d0931(0xa4));
      let _0x4f1455 = "";
      if (
        _0x3a5d70[_0x2d0931(0x1eb)] &&
        _0x3a5d70["pr_imagen"]["trim"]() !== ""
      ) {
        let _0x6b86f2 = "";
        if (_0x3a5d70[_0x2d0931(0x1eb)][_0x2d0931(0x1e0)](_0x2d0931(0x2b0)))
          _0x6b86f2 = _0x3a5d70["pr_imagen"];
        else {
          let _0x1de157 = _0x3a5d70[_0x2d0931(0x1eb)][_0x2d0931(0x1e0)]("/")
            ? _0x3a5d70[_0x2d0931(0x1eb)]
            : "/" + _0x3a5d70[_0x2d0931(0x1eb)];
          _0x6b86f2 = "https://media.megaservicio.net" + _0x1de157;
        }
        _0x4f1455 =
          "<img\x20src=\x22" +
          _0x6b86f2 +
          _0x2d0931(0x30b) +
          _0x3a5d70[_0x2d0931(0x1ff)] +
          _0x2d0931(0xe7);
      }
      const _0x383f6b = _0x3acd29
        ? "<span\x20class=\x22badge\x20bg-success\x20text-white\x20ms-2\x22\x20style=\x22font-size:0.7rem;\x22>🏷️\x20PROMO</span>"
        : "";
      (_0x143b73[_0x2d0931(0xd7)] =
        _0x2d0931(0x111) +
        _0x4f1455 +
        _0x2d0931(0x1ea) +
        _0x3a5d70[_0x2d0931(0x1ff)] +
        _0x2d0931(0x398) +
        _0x383f6b +
        _0x2d0931(0x30c) +
        (_0x3a5d70[_0x2d0931(0x386)] || _0x3a5d70[_0x2d0931(0x1f5)] || "") +
        _0x2d0931(0x8e)),
        (_0x143b73[_0x2d0931(0x1c7)] = function () {
          const _0x19bba9 = _0x2d0931;
          mostrarDetalleProducto(_0x3a5d70);
          const _0x1357fd = {
            ..._0x3a5d70,
            FECHA_ESCANEO: new Date()[_0x19bba9(0x124)](),
          };
          historial["unshift"](_0x1357fd),
            setCookie("historial", JSON["stringify"](historial), 0x1e),
            renderHistorial(),
            (inputCodigo[_0x19bba9(0xbf)] = ""),
            (sugerenciasDiv[_0x19bba9(0xd7)] = ""),
            (sugerenciasDiv[_0x19bba9(0x27d)][_0x19bba9(0x38d)] =
              _0x19bba9(0x221));
        }),
        sugerenciasDiv[_0x2d0931(0x224)](_0x143b73);
    }),
      (sugerenciasDiv["style"][_0x3ae76a(0x38d)] = "block");
  }, 0x12c);
}),
  document[_0x472491(0x1d7)](_0x472491(0x209), function (_0x5cf4b5) {
    const _0x478869 = _0x472491;
    !inputCodigo[_0x478869(0x362)](_0x5cf4b5[_0x478869(0x242)]) &&
      !sugerenciasDiv[_0x478869(0x362)](_0x5cf4b5[_0x478869(0x242)]) &&
      ((sugerenciasDiv[_0x478869(0xd7)] = ""),
      (sugerenciasDiv[_0x478869(0x27d)]["display"] = _0x478869(0x221)));
  });
function iniciarScanner() {
  const _0x52cf12 = _0x472491;
  if (scannerActivo) return;
  try {
    (inputCodigo[_0x52cf12(0xbf)] = ""),
      (inputCodigo["placeholder"] = _0x52cf12(0xe3)),
      (sugerenciasDiv[_0x52cf12(0xd7)] = ""),
      (sugerenciasDiv[_0x52cf12(0x27d)][_0x52cf12(0x38d)] = _0x52cf12(0x221));
  } catch (_0x4a9049) {}
  navigator[_0x52cf12(0x103)]
    [_0x52cf12(0x358)]({ video: !![] })
    [_0x52cf12(0x1ad)]((_0x2d2dfa) => {
      const _0xf74a0a = _0x52cf12;
      _0x2d2dfa[_0xf74a0a(0x170)]()["forEach"]((_0x22f621) =>
        _0x22f621["stop"]()
      ),
        (scannerActivo = !![]),
        (readerDiv[_0xf74a0a(0x27d)]["display"] = _0xf74a0a(0x101)),
        document[_0xf74a0a(0x2e4)](_0xf74a0a(0x2e1))[_0xf74a0a(0x1fd)]({
          behavior: _0xf74a0a(0x317),
          block: _0xf74a0a(0xda),
        }),
        (ayudaTexto[_0xf74a0a(0x27d)]["display"] = _0xf74a0a(0x101));
      const _0x217423 = new Html5Qrcode(_0xf74a0a(0x2e1)),
        _0x3273ea = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: _0xf74a0a(0x1db),
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x140678, _0x345ad7) {
            const _0x8866a4 = _0xf74a0a,
              _0x28489b = Math[_0x8866a4(0x126)](0x12c, _0x140678 * 0.9),
              _0x6b9dd3 = 0x64;
            return { width: _0x28489b, height: _0x6b9dd3 };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0xf74a0a(0x2d8)],
            Html5QrcodeSupportedFormats["EAN_13"],
            Html5QrcodeSupportedFormats[_0xf74a0a(0x197)],
            Html5QrcodeSupportedFormats[_0xf74a0a(0x12d)],
            Html5QrcodeSupportedFormats["UPC_E"],
            Html5QrcodeSupportedFormats[_0xf74a0a(0x26f)],
            Html5QrcodeSupportedFormats["CODE_93"],
            Html5QrcodeSupportedFormats[_0xf74a0a(0xd1)],
            Html5QrcodeSupportedFormats[_0xf74a0a(0x2b5)],
            Html5QrcodeSupportedFormats[_0xf74a0a(0x36c)],
            Html5QrcodeSupportedFormats[_0xf74a0a(0x2c6)],
            Html5QrcodeSupportedFormats["AZTEC"],
            Html5QrcodeSupportedFormats[_0xf74a0a(0x119)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x217423[_0xf74a0a(0x18f)](
        { facingMode: _0xf74a0a(0x1db) },
        _0x3273ea,
        (_0x242da1) => {
          const _0x423ddf = _0xf74a0a;
          (inputCodigo[_0x423ddf(0xbf)] = _0x242da1[_0x423ddf(0x26a)]()[
            "replace"
          ](/\s+$/, "")),
            _0x217423[_0x423ddf(0x117)]()["then"](() => {
              const _0x431500 = _0x423ddf;
              (readerDiv[_0x431500(0x27d)][_0x431500(0x38d)] = "none"),
                (ayudaTexto[_0x431500(0x27d)]["display"] = _0x431500(0x221)),
                (scannerActivo = ![]),
                _0x217423[_0x431500(0x30d)](),
                form[_0x431500(0x208)](),
                setTimeout(() => {
                  const _0x1c79ef = _0x431500,
                    _0x4a976c = document[_0x1c79ef(0x2e4)](_0x1c79ef(0x234));
                  _0x4a976c &&
                    _0x4a976c[_0x1c79ef(0x1fd)]({
                      behavior: _0x1c79ef(0x317),
                      block: _0x1c79ef(0x18f),
                      inline: _0x1c79ef(0x280),
                    });
                  try {
                    bringInputIntoView();
                  } catch (_0x1a1f5f) {}
                }, 0x1f4);
            });
        },
        (_0x2b4d6f) => {}
      )
        [_0xf74a0a(0x1ad)](() => {
          setTimeout(() => {
            const _0x25b3ba = _0x8674,
              _0x140f50 = readerDiv[_0x25b3ba(0x182)](_0x25b3ba(0x16e));
            if (_0x140f50) {
              const _0x36b6a8 = _0x140f50["srcObject"][_0x25b3ba(0x1f8)]()[0x0];
              _0x36b6a8["applyConstraints"]({
                focusMode: _0x25b3ba(0x171),
                advanced: [{ zoom: 0x2 }],
              })
                ["then"](() => {})
                ["catch"]((_0x3b493c) => {});
            }
          }, 0x7d0);
        })
        [_0xf74a0a(0xe8)]((_0x312cb5) => {
          const _0x3a952a = _0xf74a0a;
          (scannerActivo = ![]),
            (resultadoDiv[_0x3a952a(0xd7)] =
              "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20" +
              _0x312cb5 +
              _0x3a952a(0x21c)),
            renderHistorial();
        });
      const _0x218be3 = new MutationObserver(() => {
        const _0x12c874 = _0xf74a0a,
          _0x2b493a = readerDiv[_0x12c874(0x182)](_0x12c874(0x16e));
        _0x2b493a &&
          (_0x2b493a["setAttribute"](_0x12c874(0x160), ""),
          _0x2b493a["setAttribute"](_0x12c874(0x91), ""),
          _0x2b493a[_0x12c874(0x174)](_0x12c874(0x19f), ""),
          _0x218be3["disconnect"]());
      });
      _0x218be3["observe"](readerDiv, { childList: !![], subtree: !![] });
    })
    [_0x52cf12(0xe8)]((_0x440413) => {
      const _0x58d8ec = _0x52cf12;
      (resultadoDiv[_0x58d8ec(0xd7)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>"),
        renderHistorial();
    });
}
const fileInput = document[_0x472491(0x2e4)]("fileInput");
fileInput[_0x472491(0x1d7)](_0x472491(0x17d), async (_0x4cd77c) => {
  const _0xdabeaf = _0x472491,
    _0x2fe5b1 = _0x4cd77c[_0xdabeaf(0x242)]["files"][0x0];
  if (!_0x2fe5b1) return;
  try {
    (inputCodigo[_0xdabeaf(0xbf)] = ""),
      (inputCodigo[_0xdabeaf(0x231)] = _0xdabeaf(0xe3)),
      (sugerenciasDiv[_0xdabeaf(0xd7)] = ""),
      (sugerenciasDiv[_0xdabeaf(0x27d)][_0xdabeaf(0x38d)] = _0xdabeaf(0x221));
  } catch (_0x4ab6f8) {}
  resultadoDiv[_0xdabeaf(0xd7)] = _0xdabeaf(0x219);
  try {
    const _0x26457e = new Image(),
      _0x3f1135 = new Promise((_0x554634, _0x2a75c6) => {
        const _0x5e10d4 = _0xdabeaf;
        (_0x26457e["onload"] = _0x554634),
          (_0x26457e["onerror"] = _0x2a75c6),
          (_0x26457e[_0x5e10d4(0x29f)] = URL[_0x5e10d4(0xf7)](_0x2fe5b1));
      });
    await _0x3f1135;
    if (
      GOOGLE_VISION_CONFIG["enabled"] &&
      visionUsageTracker[_0xdabeaf(0x13a)]()
    ) {
      console[_0xdabeaf(0x335)](
        "🚀\x20Intentando\x20con\x20Google\x20Vision\x20API..."
      );
      try {
        const _0x41a6f1 = await detectarConGoogleVision(_0x26457e);
        if (_0x41a6f1) {
          console["log"](_0xdabeaf(0x306), _0x41a6f1),
            (inputCodigo[_0xdabeaf(0xbf)] = _0x41a6f1),
            form[_0xdabeaf(0x208)](),
            URL["revokeObjectURL"](_0x26457e[_0xdabeaf(0x29f)]),
            (fileInput["value"] = "");
          return;
        }
      } catch (_0x5b642a) {
        console["log"](
          "❌\x20Error\x20con\x20Google\x20Vision,\x20usando\x20fallback:",
          _0x5b642a[_0xdabeaf(0x159)]
        );
        if (_0x5b642a["message"][_0xdabeaf(0x1b3)](_0xdabeaf(0x3b0)))
          console[_0xdabeaf(0x335)](_0xdabeaf(0x18c));
        else {
          if (_0x5b642a[_0xdabeaf(0x159)][_0xdabeaf(0x1b3)](_0xdabeaf(0x2e5)))
            console[_0xdabeaf(0x335)](_0xdabeaf(0x14f)),
              _0x5b642a[_0xdabeaf(0x159)][_0xdabeaf(0x1b3)](_0xdabeaf(0x220))
                ? (console[_0xdabeaf(0x335)](_0xdabeaf(0x313)),
                  console[_0xdabeaf(0x335)](
                    "💡\x20Ve\x20a:\x20https://console.developers.google.com/billing/enable?project=1070150612422"
                  ))
                : console[_0xdabeaf(0x335)](_0xdabeaf(0xc7));
          else
            _0x5b642a[_0xdabeaf(0x159)][_0xdabeaf(0x1b3)](_0xdabeaf(0x2cd)) &&
              console[_0xdabeaf(0x335)](_0xdabeaf(0x254));
        }
      }
    } else {
      if (
        GOOGLE_VISION_CONFIG[_0xdabeaf(0x89)] &&
        !visionUsageTracker["canUseAPI"]()
      ) {
        const _0x339136 = visionUsageTracker[_0xdabeaf(0xaa)]();
        console[_0xdabeaf(0x335)](
          _0xdabeaf(0x28c) +
            _0x339136[_0xdabeaf(0x1b4)] +
            "/" +
            _0x339136[_0xdabeaf(0x1d1)] +
            ",\x20Diario:\x20" +
            _0x339136[_0xdabeaf(0xfd)] +
            "/" +
            _0x339136[_0xdabeaf(0x96)]
        );
      }
    }
    if ("BarcodeDetector" in window) {
      console[_0xdabeaf(0x335)](
        "🚀\x20Usando\x20Barcode\x20Detection\x20API\x20nativa"
      );
      try {
        const _0x1d4d95 = [
            _0xdabeaf(0x1a1),
            _0xdabeaf(0x342),
            _0xdabeaf(0x30f),
            _0xdabeaf(0x18d),
            _0xdabeaf(0xc3),
            _0xdabeaf(0x110),
            _0xdabeaf(0x24d),
            _0xdabeaf(0x24b),
            "itf",
            _0xdabeaf(0xba),
            _0xdabeaf(0x367),
            _0xdabeaf(0x353),
            "upc_e",
          ],
          _0x62e442 = new BarcodeDetector({ formats: _0x1d4d95 }),
          _0x5dcc45 = await _0x62e442[_0xdabeaf(0x2ae)](_0x26457e);
        console[_0xdabeaf(0x335)](
          _0xdabeaf(0xec) + _0x5dcc45[_0xdabeaf(0x2db)],
          _0x5dcc45
        );
        if (_0x5dcc45[_0xdabeaf(0x2db)] > 0x0) {
          const _0x2aa292 = _0x5dcc45[_0xdabeaf(0x274)]((_0x4043d7) => {
            const _0x244dc1 = _0xdabeaf,
              _0x4253d4 = _0x4043d7["rawValue"]["trim"]();
            console[_0x244dc1(0x335)](
              _0x244dc1(0x9b) +
                _0x4253d4 +
                _0x244dc1(0xc1) +
                _0x4043d7[_0x244dc1(0x2ff)] +
                _0x244dc1(0x334) +
                _0x4253d4[_0x244dc1(0x2db)]
            );
            switch (_0x4043d7[_0x244dc1(0x2ff)]) {
              case _0x244dc1(0x24d):
                return (
                  _0x4253d4[_0x244dc1(0x2db)] === 0xd &&
                  /^\d{13}$/["test"](_0x4253d4)
                );
              case _0x244dc1(0x353):
                return (
                  _0x4253d4[_0x244dc1(0x2db)] === 0xc &&
                  /^\d{12}$/[_0x244dc1(0xfc)](_0x4253d4)
                );
              case _0x244dc1(0x24b):
                return (
                  _0x4253d4[_0x244dc1(0x2db)] === 0x8 &&
                  /^\d{8}$/["test"](_0x4253d4)
                );
              case _0x244dc1(0x252):
                return (
                  _0x4253d4[_0x244dc1(0x2db)] >= 0x6 &&
                  _0x4253d4[_0x244dc1(0x2db)] <= 0x8 &&
                  /^\d+$/[_0x244dc1(0xfc)](_0x4253d4)
                );
              case _0x244dc1(0x342):
                return (
                  _0x4253d4[_0x244dc1(0x2db)] >= 0x1 &&
                  _0x4253d4[_0x244dc1(0x2db)] <= 0x32
                );
              case "code_39":
                return (
                  _0x4253d4[_0x244dc1(0x2db)] >= 0x1 &&
                  /^[A-Z0-9\-. $\/+%*]+$/[_0x244dc1(0xfc)](_0x4253d4)
                );
              case _0x244dc1(0x18d):
                return (
                  _0x4253d4[_0x244dc1(0x2db)] >= 0x1 &&
                  _0x4253d4[_0x244dc1(0x2db)] <= 0x32
                );
              case _0x244dc1(0xc3):
                return (
                  _0x4253d4["length"] >= 0x3 &&
                  /^[A-D][0-9\-$:\/.\+]+[A-D]$/["test"](_0x4253d4)
                );
              case "itf":
                return (
                  _0x4253d4[_0x244dc1(0x2db)] >= 0x2 &&
                  _0x4253d4[_0x244dc1(0x2db)] % 0x2 === 0x0 &&
                  /^\d+$/[_0x244dc1(0xfc)](_0x4253d4)
                );
              case "qr_code":
                return (
                  _0x4253d4["length"] >= 0x1 &&
                  _0x4253d4[_0x244dc1(0x2db)] <= 0x10c8
                );
              case _0x244dc1(0x110):
                return (
                  _0x4253d4[_0x244dc1(0x2db)] >= 0x1 &&
                  _0x4253d4[_0x244dc1(0x2db)] <= 0xc2c
                );
              case _0x244dc1(0xba):
                return (
                  _0x4253d4[_0x244dc1(0x2db)] >= 0x1 &&
                  _0x4253d4[_0x244dc1(0x2db)] <= 0xa96
                );
              case _0x244dc1(0x1a1):
                return (
                  _0x4253d4[_0x244dc1(0x2db)] >= 0x1 &&
                  _0x4253d4[_0x244dc1(0x2db)] <= 0xef8
                );
              default:
                return (
                  _0x4253d4[_0x244dc1(0x2db)] >= 0x1 &&
                  _0x4253d4[_0x244dc1(0x2db)] <= 0x64
                );
            }
          });
          console[_0xdabeaf(0x335)](
            "✅\x20Códigos\x20válidos:\x20" + _0x2aa292[_0xdabeaf(0x2db)]
          );
          if (_0x2aa292[_0xdabeaf(0x2db)] > 0x0) {
            const _0x34f9e1 = {
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
              _0x52d279 = _0x2aa292[_0xdabeaf(0x173)](
                (_0x176269, _0x58ee0c) => {
                  const _0x4ca3b8 = _0xdabeaf,
                    _0x264040 =
                      (_0x34f9e1[_0x58ee0c[_0x4ca3b8(0x2ff)]] || 0x0) -
                      (_0x34f9e1[_0x176269[_0x4ca3b8(0x2ff)]] || 0x0);
                  if (_0x264040 !== 0x0) return _0x264040;
                  if (
                    [
                      _0x4ca3b8(0x24d),
                      _0x4ca3b8(0x353),
                      _0x4ca3b8(0x24b),
                      _0x4ca3b8(0x252),
                      _0x4ca3b8(0x342),
                      _0x4ca3b8(0x30f),
                      _0x4ca3b8(0x18d),
                      "itf",
                      _0x4ca3b8(0xc3),
                    ][_0x4ca3b8(0x1b3)](_0x176269["format"])
                  ) {
                    const _0x45568c =
                        _0x176269[_0x4ca3b8(0x384)][_0x4ca3b8(0x264)] *
                        _0x176269[_0x4ca3b8(0x384)][_0x4ca3b8(0xb4)],
                      _0x58ccd1 =
                        _0x58ee0c[_0x4ca3b8(0x384)][_0x4ca3b8(0x264)] *
                        _0x58ee0c[_0x4ca3b8(0x384)][_0x4ca3b8(0xb4)];
                    return _0x58ccd1 - _0x45568c;
                  }
                  const _0x4739dd =
                      _0x176269[_0x4ca3b8(0x384)]["x"] +
                      _0x176269[_0x4ca3b8(0x384)]["width"] / 0x2,
                    _0x465472 =
                      _0x58ee0c[_0x4ca3b8(0x384)]["x"] +
                      _0x58ee0c[_0x4ca3b8(0x384)][_0x4ca3b8(0x264)] / 0x2,
                    _0x36958e = _0x26457e[_0x4ca3b8(0x264)] / 0x2;
                  return (
                    Math[_0x4ca3b8(0x1a4)](_0x4739dd - _0x36958e) -
                    Math["abs"](_0x465472 - _0x36958e)
                  );
                }
              ),
              _0x3c612d = _0x52d279[0x0],
              _0xe5339 = _0x3c612d[_0xdabeaf(0x1d5)]
                ["trim"]()
                [_0xdabeaf(0x1e6)](/\s+$/, "");
            console[_0xdabeaf(0x335)](
              _0xdabeaf(0x134) +
                _0xe5339 +
                _0xdabeaf(0x351) +
                _0x3c612d[_0xdabeaf(0x2ff)] +
                ")"
            ),
              (inputCodigo[_0xdabeaf(0xbf)] = _0xe5339),
              form[_0xdabeaf(0x208)](),
              URL[_0xdabeaf(0x270)](_0x26457e[_0xdabeaf(0x29f)]),
              (fileInput[_0xdabeaf(0xbf)] = "");
            return;
          }
        }
        console[_0xdabeaf(0x335)](_0xdabeaf(0x292));
      } catch (_0x5bc4ea) {
        console[_0xdabeaf(0x335)](_0xdabeaf(0xea), _0x5bc4ea);
      }
    } else console[_0xdabeaf(0x335)](_0xdabeaf(0x240));
    console[_0xdabeaf(0x335)](_0xdabeaf(0x8d)), usarQuaggaFallback(_0x26457e);
  } catch (_0x3b0a6f) {
    console["error"]("Error\x20procesando\x20imagen:", _0x3b0a6f),
      (resultadoDiv[_0xdabeaf(0xd7)] = _0xdabeaf(0x2ca)),
      renderHistorial(),
      (fileInput[_0xdabeaf(0xbf)] = "");
  }
});
function usarQuaggaFallback(_0x3ec52e) {
  const _0x21dfba = _0x472491;
  console[_0x21dfba(0x335)](_0x21dfba(0x11d));
  const _0x1bd846 = document[_0x21dfba(0x2fb)]("canvas"),
    _0x51cbc5 = _0x1bd846["getContext"]("2d");
  let { width: _0x5eaa7b, height: _0xb108c5 } = _0x3ec52e;
  const _0x5dbf1 = 0x190;
  if (_0x5eaa7b < _0x5dbf1 || _0xb108c5 < _0x5dbf1) {
    const _0x26fa2e =
      Math[_0x21dfba(0x246)](_0x5dbf1 / _0x5eaa7b, _0x5dbf1 / _0xb108c5) * 1.5;
    (_0x5eaa7b *= _0x26fa2e),
      (_0xb108c5 *= _0x26fa2e),
      console["log"](
        _0x21dfba(0x163) +
          _0x3ec52e[_0x21dfba(0x264)] +
          "x" +
          _0x3ec52e[_0x21dfba(0xb4)] +
          "\x20->\x20" +
          _0x5eaa7b +
          "x" +
          _0xb108c5
      );
  }
  const _0x37e65d = 0x5dc;
  if (_0x5eaa7b > _0x37e65d || _0xb108c5 > _0x37e65d) {
    const _0x55e003 = Math[_0x21dfba(0x126)](
      _0x37e65d / _0x5eaa7b,
      _0x37e65d / _0xb108c5
    );
    (_0x5eaa7b *= _0x55e003), (_0xb108c5 *= _0x55e003);
  }
  (_0x1bd846["width"] = _0x5eaa7b),
    (_0x1bd846[_0x21dfba(0xb4)] = _0xb108c5),
    (_0x51cbc5[_0x21dfba(0x20f)] = ![]),
    _0x51cbc5[_0x21dfba(0x34d)](_0x3ec52e, 0x0, 0x0, _0x5eaa7b, _0xb108c5);
  const _0x558738 = _0x51cbc5["getImageData"](0x0, 0x0, _0x5eaa7b, _0xb108c5),
    _0x4220c1 = _0x558738[_0x21dfba(0x190)];
  let _0x2b762d = new Array(0x100)[_0x21dfba(0x293)](0x0);
  for (
    let _0x5cc227 = 0x0;
    _0x5cc227 < _0x4220c1[_0x21dfba(0x2db)];
    _0x5cc227 += 0x4
  ) {
    const _0x4f684f = Math["round"](
      0.299 * _0x4220c1[_0x5cc227] +
        0.587 * _0x4220c1[_0x5cc227 + 0x1] +
        0.114 * _0x4220c1[_0x5cc227 + 0x2]
    );
    _0x2b762d[_0x4f684f]++;
  }
  let _0x2b32b9 = 0x80,
    _0x28ca9d = 0x0;
  const _0x4a5e8b = _0x5eaa7b * _0xb108c5;
  for (let _0x5aabad = 0x0; _0x5aabad < 0x100; _0x5aabad++) {
    let _0x3f0055 = 0x0,
      _0xdf7e49 = 0x0,
      _0xbc3938 = 0x0,
      _0xf26439 = 0x0;
    for (let _0x3290e5 = 0x0; _0x3290e5 <= _0x5aabad; _0x3290e5++) {
      (_0x3f0055 += _0x2b762d[_0x3290e5]),
        (_0xbc3938 += _0x3290e5 * _0x2b762d[_0x3290e5]);
    }
    for (let _0x196f06 = _0x5aabad + 0x1; _0x196f06 < 0x100; _0x196f06++) {
      (_0xdf7e49 += _0x2b762d[_0x196f06]),
        (_0xf26439 += _0x196f06 * _0x2b762d[_0x196f06]);
    }
    if (_0x3f0055 === 0x0 || _0xdf7e49 === 0x0) continue;
    const _0x420aa1 = _0xbc3938 / _0x3f0055,
      _0x12d177 = _0xf26439 / _0xdf7e49,
      _0x1af0a0 =
        _0x3f0055 *
        _0xdf7e49 *
        (_0x420aa1 - _0x12d177) *
        (_0x420aa1 - _0x12d177);
    _0x1af0a0 > _0x28ca9d && ((_0x28ca9d = _0x1af0a0), (_0x2b32b9 = _0x5aabad));
  }
  console[_0x21dfba(0x335)](_0x21dfba(0x1ec) + _0x2b32b9);
  const _0x26ea25 = new Uint8ClampedArray(_0x4220c1);
  for (let _0x17ae87 = 0x0; _0x17ae87 < _0x4220c1["length"]; _0x17ae87 += 0x4) {
    const _0x15d599 = Math[_0x21dfba(0x1f9)](
        0.299 * _0x4220c1[_0x17ae87] +
          0.587 * _0x4220c1[_0x17ae87 + 0x1] +
          0.114 * _0x4220c1[_0x17ae87 + 0x2]
      ),
      _0x592c12 = _0x15d599 > _0x2b32b9 ? 0xff : 0x0;
    (_0x4220c1[_0x17ae87] = _0x592c12),
      (_0x4220c1[_0x17ae87 + 0x1] = _0x592c12),
      (_0x4220c1[_0x17ae87 + 0x2] = _0x592c12);
  }
  _0x51cbc5["putImageData"](_0x558738, 0x0, 0x0);
  let _0x467f29 = _0x1bd846["toDataURL"]("image/png");
  const _0x33e274 = _0x51cbc5[_0x21dfba(0x146)](_0x5eaa7b, _0xb108c5),
    _0x1d0ca1 = _0x33e274["data"];
  for (
    let _0x4d10e2 = 0x0;
    _0x4d10e2 < _0x26ea25[_0x21dfba(0x2db)];
    _0x4d10e2 += 0x4
  ) {
    const _0x15bc87 = Math[_0x21dfba(0x1f9)](
        0.299 * _0x26ea25[_0x4d10e2] +
          0.587 * _0x26ea25[_0x4d10e2 + 0x1] +
          0.114 * _0x26ea25[_0x4d10e2 + 0x2]
      ),
      _0x209001 = _0x15bc87 > _0x2b32b9 * 0.7 ? 0xff : 0x0;
    (_0x1d0ca1[_0x4d10e2] = _0x209001),
      (_0x1d0ca1[_0x4d10e2 + 0x1] = _0x209001),
      (_0x1d0ca1[_0x4d10e2 + 0x2] = _0x209001),
      (_0x1d0ca1[_0x4d10e2 + 0x3] = 0xff);
  }
  const _0x564adb = document[_0x21dfba(0x2fb)]("canvas");
  (_0x564adb[_0x21dfba(0x264)] = _0x5eaa7b), (_0x564adb["height"] = _0xb108c5);
  const _0x4065b0 = _0x564adb[_0x21dfba(0x155)]("2d");
  _0x4065b0[_0x21dfba(0x3a3)](_0x33e274, 0x0, 0x0);
  const _0x1429d2 = _0x564adb["toDataURL"](_0x21dfba(0x20d)),
    _0x59ed70 = {
      src: _0x467f29,
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: { size: Math[_0x21dfba(0x246)](_0x5eaa7b, _0xb108c5) },
      locator: {
        patchSize: _0x21dfba(0x222),
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
          _0x21dfba(0x1f2),
          _0x21dfba(0x26c),
          "upc_reader",
          _0x21dfba(0x24c),
          _0x21dfba(0x1c6),
          _0x21dfba(0x25d),
          "code_39_vin_reader",
          "code_93_reader",
          _0x21dfba(0x1f3),
          _0x21dfba(0x36e),
          _0x21dfba(0x113),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
  console[_0x21dfba(0x335)](_0x21dfba(0x218));
  const _0x16266a = (_0x49f5e6, _0x261493, _0x5c1624) => {
    const _0xf06da4 = _0x21dfba;
    console["log"](_0xf06da4(0x1b0) + _0x261493);
    const _0x179adb = {
      src: _0x49f5e6,
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: { size: Math[_0xf06da4(0x246)](_0x5eaa7b, _0xb108c5) },
      locator: {
        patchSize:
          _0x261493 === _0xf06da4(0xd2) ? _0xf06da4(0x1b5) : _0xf06da4(0x222),
        halfSample: _0x261493 === _0xf06da4(0x127) ? !![] : ![],
        debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
      },
      decoder: {
        readers: [
          _0xf06da4(0x1f2),
          "ean_8_reader",
          _0xf06da4(0x2b1),
          _0xf06da4(0x24c),
          _0xf06da4(0x1c6),
          "code_39_reader",
          _0xf06da4(0x303),
          "code_93_reader",
          _0xf06da4(0x1f3),
          _0xf06da4(0x36e),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
    Quagga[_0xf06da4(0x225)](_0x179adb, _0x5c1624);
  };
  let _0x3a7c90 = [];
  _0x16266a(_0x467f29, _0x21dfba(0x276), function (_0xd32908) {
    const _0x4ab02d = _0x21dfba;
    if (_0xd32908 && _0xd32908[_0x4ab02d(0x99)]) {
      let _0x4e43ee = _0xd32908[_0x4ab02d(0x99)][_0x4ab02d(0x88)]
        [_0x4ab02d(0x26a)]()
        [_0x4ab02d(0x1e6)](/\s+$/, "");
      _0x3a7c90["push"](
        _0x4e43ee + "\x20(" + _0xd32908["codeResult"][_0x4ab02d(0x2ff)] + ")"
      ),
        console[_0x4ab02d(0x335)](
          _0x4ab02d(0x187),
          _0x4e43ee,
          _0x4ab02d(0x30e),
          _0xd32908[_0x4ab02d(0x99)]["format"]
        );
      if (
        validarCodigo(_0x4e43ee, _0xd32908[_0x4ab02d(0x99)][_0x4ab02d(0x2ff)])
      ) {
        (inputCodigo[_0x4ab02d(0xbf)] = _0x4e43ee),
          form[_0x4ab02d(0x208)](),
          URL[_0x4ab02d(0x270)](_0x3ec52e[_0x4ab02d(0x29f)]),
          (fileInput["value"] = "");
        return;
      }
    }
    console[_0x4ab02d(0x335)](_0x4ab02d(0x2a8)),
      _0x16266a(_0x1429d2, "agresiva", function (_0x4d8431) {
        const _0x30cdf4 = _0x4ab02d;
        if (_0x4d8431 && _0x4d8431["codeResult"]) {
          let _0x2561dc = _0x4d8431["codeResult"][_0x30cdf4(0x88)]
            ["trim"]()
            [_0x30cdf4(0x1e6)](/\s+$/, "");
          _0x3a7c90[_0x30cdf4(0x1cb)](
            _0x2561dc + "\x20(" + _0x4d8431["codeResult"]["format"] + ")"
          ),
            console[_0x30cdf4(0x335)](
              _0x30cdf4(0x228),
              _0x2561dc,
              _0x30cdf4(0x30e),
              _0x4d8431["codeResult"][_0x30cdf4(0x2ff)]
            );
          if (validarCodigo(_0x2561dc, _0x4d8431[_0x30cdf4(0x99)]["format"])) {
            (inputCodigo["value"] = _0x2561dc),
              form[_0x30cdf4(0x208)](),
              URL[_0x30cdf4(0x270)](_0x3ec52e[_0x30cdf4(0x29f)]),
              (fileInput[_0x30cdf4(0xbf)] = "");
            return;
          }
        }
        console[_0x30cdf4(0x335)](_0x30cdf4(0x290)),
          intentarSegundaPasada(_0x3ec52e, _0x3a7c90);
      });
  });
}
function validarCodigo(_0x5e5401, _0x1521a9) {
  const _0x2aebf1 = _0x472491;
  console["log"](
    _0x2aebf1(0x9b) +
      _0x5e5401 +
      _0x2aebf1(0xc1) +
      _0x1521a9 +
      _0x2aebf1(0x334) +
      _0x5e5401[_0x2aebf1(0x2db)]
  );
  switch (_0x1521a9) {
    case _0x2aebf1(0x24d):
      return (
        _0x5e5401[_0x2aebf1(0x2db)] === 0xd &&
        /^\d{13}$/[_0x2aebf1(0xfc)](_0x5e5401)
      );
    case _0x2aebf1(0x353):
      return (
        _0x5e5401[_0x2aebf1(0x2db)] === 0xc && /^\d{12}$/["test"](_0x5e5401)
      );
    case _0x2aebf1(0x24b):
      return (
        _0x5e5401[_0x2aebf1(0x2db)] === 0x8 &&
        /^\d{8}$/[_0x2aebf1(0xfc)](_0x5e5401)
      );
    case _0x2aebf1(0x252):
      return (
        _0x5e5401[_0x2aebf1(0x2db)] >= 0x6 &&
        _0x5e5401[_0x2aebf1(0x2db)] <= 0x8 &&
        /^\d+$/[_0x2aebf1(0xfc)](_0x5e5401)
      );
    case "code_128":
    case _0x2aebf1(0x30f):
    case "code_93":
      return (
        _0x5e5401[_0x2aebf1(0x2db)] >= 0x1 &&
        _0x5e5401[_0x2aebf1(0x2db)] <= 0x32
      );
    case _0x2aebf1(0xc3):
      return (
        _0x5e5401["length"] >= 0x3 &&
        /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x2aebf1(0xfc)](_0x5e5401)
      );
    case _0x2aebf1(0x2b7):
      return (
        _0x5e5401[_0x2aebf1(0x2db)] >= 0x2 &&
        _0x5e5401["length"] % 0x2 === 0x0 &&
        /^\d+$/["test"](_0x5e5401)
      );
    default:
      return (
        _0x5e5401[_0x2aebf1(0x2db)] >= 0x1 &&
        _0x5e5401[_0x2aebf1(0x2db)] <= 0x32
      );
  }
}
function intentarSegundaPasada(_0x2f5a7b, _0x7260b7 = []) {
  const _0xec9d42 = _0x472491;
  console[_0xec9d42(0x335)](
    "🔄\x20Tercera\x20tentativa:\x20imagen\x20original\x20sin\x20procesamiento..."
  );
  const _0x1feef7 = document[_0xec9d42(0x2fb)]("canvas"),
    _0x2bd1f7 = _0x1feef7[_0xec9d42(0x155)]("2d");
  let { width: _0x3960ab, height: _0xdff63a } = _0x2f5a7b;
  const _0x503b92 = 0x640;
  if (_0x3960ab < _0x503b92) {
    const _0x117475 = _0x503b92 / _0x3960ab;
    (_0x3960ab *= _0x117475), (_0xdff63a *= _0x117475);
  }
  (_0x1feef7[_0xec9d42(0x264)] = _0x3960ab),
    (_0x1feef7[_0xec9d42(0xb4)] = _0xdff63a),
    (_0x2bd1f7[_0xec9d42(0x20f)] = ![]),
    _0x2bd1f7[_0xec9d42(0x34d)](_0x2f5a7b, 0x0, 0x0, _0x3960ab, _0xdff63a);
  const _0x2ef27a = _0x2bd1f7[_0xec9d42(0x2c1)](0x0, 0x0, _0x3960ab, _0xdff63a),
    _0x3c9f98 = _0x2ef27a[_0xec9d42(0x190)];
  for (
    let _0x3de909 = 0x0;
    _0x3de909 < _0x3c9f98[_0xec9d42(0x2db)];
    _0x3de909 += 0x4
  ) {
    const _0x4c4287 = _0x3c9f98[_0x3de909],
      _0x17038c = _0x3c9f98[_0x3de909 + 0x1],
      _0x133a63 = _0x3c9f98[_0x3de909 + 0x2],
      _0x2b1581 = 1.5,
      _0xdc8739 = Math["round"](
        0.299 * _0x4c4287 + 0.587 * _0x17038c + 0.114 * _0x133a63
      ),
      _0x503404 = Math[_0xec9d42(0x126)](
        0xff,
        Math[_0xec9d42(0x246)](0x0, (_0xdc8739 - 0x80) * _0x2b1581 + 0x80)
      );
    (_0x3c9f98[_0x3de909] = _0x503404),
      (_0x3c9f98[_0x3de909 + 0x1] = _0x503404),
      (_0x3c9f98[_0x3de909 + 0x2] = _0x503404);
  }
  _0x2bd1f7[_0xec9d42(0x3a3)](_0x2ef27a, 0x0, 0x0);
  const _0x21383a = {
    src: _0x1feef7["toDataURL"](_0xec9d42(0x20d)),
    numOfWorkers: 0x0,
    locate: !![],
    inputStream: {
      size: Math[_0xec9d42(0x246)](_0x3960ab, _0xdff63a),
      area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
    },
    locator: {
      patchSize: _0xec9d42(0x1b5),
      halfSample: ![],
      debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
    },
    decoder: {
      readers: [
        _0xec9d42(0x1f2),
        _0xec9d42(0x2b1),
        _0xec9d42(0x1c6),
        _0xec9d42(0x25d),
        _0xec9d42(0x26c),
        _0xec9d42(0x24c),
        _0xec9d42(0x36e),
        "codabar_reader",
      ],
      multiple: !![],
      debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
    },
  };
  console["log"](_0xec9d42(0x2de)),
    Quagga[_0xec9d42(0x225)](_0x21383a, function (_0x369760) {
      const _0x54383f = _0xec9d42;
      if (_0x369760 && _0x369760[_0x54383f(0x99)]) {
        const _0x3982c3 = _0x369760[_0x54383f(0x99)][_0x54383f(0x88)]
          [_0x54383f(0x26a)]()
          [_0x54383f(0x1e6)](/\s+$/, "");
        _0x7260b7[_0x54383f(0x1cb)](
          _0x3982c3 +
            "\x20(" +
            _0x369760[_0x54383f(0x99)][_0x54383f(0x2ff)] +
            ")"
        ),
          console[_0x54383f(0x335)](
            _0x54383f(0x1a8),
            _0x3982c3,
            _0x54383f(0x30e),
            _0x369760[_0x54383f(0x99)]["format"]
          );
        if (
          validarCodigo(_0x3982c3, _0x369760[_0x54383f(0x99)][_0x54383f(0x2ff)])
        ) {
          (inputCodigo[_0x54383f(0xbf)] = _0x3982c3), form["requestSubmit"]();
          return;
        }
      }
      console[_0x54383f(0x335)](_0x54383f(0x1ee));
      let _0x36249a = "";
      _0x7260b7[_0x54383f(0x2db)] > 0x0 &&
        (_0x36249a =
          "<br>•\x20🔍\x20<strong>Códigos\x20detectados:</strong>\x20" +
          _0x7260b7[_0x54383f(0x1fc)](",\x20"));
      let _0x53b81c = "";
      if (GOOGLE_VISION_CONFIG[_0x54383f(0x89)]) {
        const _0x4b214c = visionUsageTracker[_0x54383f(0xaa)]();
        (_0x53b81c =
          "<br><br>📊\x20<strong>Uso\x20local:</strong>\x20" +
          _0x4b214c["monthlyUsed"] +
          "/" +
          _0x4b214c[_0x54383f(0x1d1)] +
          "\x20mensual,\x20" +
          _0x4b214c[_0x54383f(0xfd)] +
          "/" +
          _0x4b214c["dailyLimit"] +
          _0x54383f(0x2bb)),
          verificarBackend()
            ["then"]((_0x2e3215) => {
              const _0x2dc67c = _0x54383f;
              if (document["querySelector"](_0x2dc67c(0x10d))) {
                const _0x21be6f = document["querySelector"](_0x2dc67c(0x10d));
                _0x21be6f &&
                  (_0x21be6f["innerHTML"] = _0x21be6f[_0x2dc67c(0xd7)][
                    _0x2dc67c(0x1e6)
                  ](
                    _0x2dc67c(0xa5),
                    _0x2dc67c(0x29d) + _0x2e3215[_0x2dc67c(0x169)]
                  ));
              }
            })
            ["catch"](() => {});
      }
      (resultadoDiv[_0x54383f(0xd7)] =
        _0x54383f(0x25a) +
        _0x36249a +
        _0x53b81c +
        "\x0a\x20\x20\x20\x20</div>"),
        renderHistorial();
    });
}
async function mostrarConfiguracion() {
  const _0x1fa61b = _0x472491,
    _0x54672b = await verificarBackend();
  let _0x285657 = null;
  if (CONFIG_ENDPOINTS[_0x1fa61b(0x94)])
    try {
      const _0x10b926 = await fetch(
        CONFIG_ENDPOINTS[_0x1fa61b(0xb0)] + _0x1fa61b(0x33b)
      );
      if (_0x10b926["ok"]) {
        const _0x41d7d8 = await _0x10b926[_0x1fa61b(0x192)]();
        _0x285657 = _0x41d7d8[_0x1fa61b(0xc0)];
      }
    } catch (_0x2e1cd5) {
      console["log"](_0x1fa61b(0x2df));
    }
  let _0x2c9bb2 = "";
  _0x285657 &&
    (_0x2c9bb2 =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>🏷️\x20Sistema\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Productos:</strong>\x20" +
      _0x285657["totalProductos"] +
      "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Códigos\x20totales:</strong>\x20" +
      _0x285657[_0x1fa61b(0x2e3)] +
      _0x1fa61b(0x211) +
      _0x285657[_0x1fa61b(0xaf)] +
      _0x1fa61b(0x16b) +
      new Date(_0x285657[_0x1fa61b(0x227)])["toLocaleString"]() +
      "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
    Swal[_0x1fa61b(0xe6)]({
      title: _0x1fa61b(0x2ab),
      html:
        _0x1fa61b(0x10e) +
        (GOOGLE_VISION_CONFIG[_0x1fa61b(0x89)] ? _0x1fa61b(0x1dc) : "") +
        _0x1fa61b(0x21b) +
        (_0x54672b[_0x1fa61b(0xbc)] ? _0x1fa61b(0x28f) : "alert-warning") +
        "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🌐\x20Google\x20Vision\x20API:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x54672b["mensaje"] +
        _0x1fa61b(0x249) +
        _0x2c9bb2 +
        _0x1fa61b(0x1ef),
      width: 0x258,
      showCancelButton: !![],
      confirmButtonText: _0x1fa61b(0x2bf),
      cancelButtonText: _0x1fa61b(0x38a),
      confirmButtonColor: "#198754",
      cancelButtonColor: _0x1fa61b(0x1f0),
      preConfirm: () => {
        const _0x19c4c5 = _0x1fa61b,
          _0x2b8f4e = document[_0x19c4c5(0x2e4)](_0x19c4c5(0x25f))[
            _0x19c4c5(0x1dc)
          ];
        return { enabled: _0x2b8f4e };
      },
    })[_0x1fa61b(0x1ad)]((_0x1ebd5a) => {
      const _0x852240 = _0x1fa61b;
      if (_0x1ebd5a[_0x852240(0x2ac)]) {
        const { enabled: _0x4befba } = _0x1ebd5a[_0x852240(0xbf)];
        (GOOGLE_VISION_CONFIG["enabled"] = _0x4befba),
          localStorage[_0x852240(0xa6)](
            _0x852240(0x193),
            JSON[_0x852240(0xbb)]({ enabled: _0x4befba })
          );
        const _0x53eaf5 = _0x4befba ? _0x852240(0x2ee) : _0x852240(0x2fe);
        Swal[_0x852240(0xe6)]({
          title: _0x852240(0x305),
          text: _0x53eaf5,
          icon: _0x852240(0x330),
          timer: 0x7d0,
          showConfirmButton: ![],
        });
      }
    });
}
function cargarConfiguracionGuardada() {
  const _0xc2bbd4 = _0x472491,
    _0x41c887 = localStorage[_0xc2bbd4(0x2dc)](_0xc2bbd4(0x193));
  if (_0x41c887)
    try {
      const _0x3e2b27 = JSON[_0xc2bbd4(0x329)](_0x41c887);
      (GOOGLE_VISION_CONFIG[_0xc2bbd4(0x89)] =
        _0x3e2b27[_0xc2bbd4(0x89)] || ![]),
        GOOGLE_VISION_CONFIG["enabled"] &&
          console[_0xc2bbd4(0x335)](_0xc2bbd4(0x395));
    } catch (_0x2dc382) {
      console["log"]("❌\x20Error\x20cargando\x20configuración:", _0x2dc382);
    }
}
_0x472491(0x2fd) in navigator &&
  window["addEventListener"](_0x472491(0x15c), () => {
    const _0x53ad35 = _0x472491;
    navigator["serviceWorker"]
      ["register"](_0x53ad35(0x38b))
      [_0x53ad35(0x1ad)]((_0x331906) => {
        const _0x22cbbc = _0x53ad35;
        console["log"](
          "✅\x20Service\x20Worker\x20registrado:",
          _0x331906["scope"]
        ),
          _0x331906["addEventListener"](_0x22cbbc(0x16f), () => {
            const _0xe03687 = _0x22cbbc;
            console[_0xe03687(0x335)](_0xe03687(0x297));
            const _0x5c6f26 = _0x331906["installing"];
            _0x5c6f26[_0xe03687(0x1d7)]("statechange", () => {
              const _0x3a4de5 = _0xe03687;
              _0x5c6f26[_0x3a4de5(0x39d)] === _0x3a4de5(0x122) &&
                navigator[_0x3a4de5(0x2fd)]["controller"] &&
                (console[_0x3a4de5(0x335)](_0x3a4de5(0x2ec)),
                confirm(_0x3a4de5(0xc8)) &&
                  (_0x5c6f26["postMessage"]({ type: _0x3a4de5(0x2c3) }),
                  window[_0x3a4de5(0x17a)][_0x3a4de5(0x360)]()));
            });
          });
      })
      [_0x53ad35(0xe8)]((_0x3a889c) =>
        console[_0x53ad35(0x200)](
          "❌\x20Error\x20al\x20registrar\x20SW:",
          _0x3a889c
        )
      ),
      navigator["serviceWorker"]["addEventListener"](_0x53ad35(0x132), () => {
        const _0x5b136e = _0x53ad35;
        console[_0x5b136e(0x335)](_0x5b136e(0x27a)),
          window["location"]["reload"]();
      });
  });
window[_0x472491(0x1d7)](_0x472491(0x28a), (_0x4263b2) => {
  const _0x31c6c2 = _0x472491;
  _0x4263b2[_0x31c6c2(0x137)](),
    (deferredPrompt = _0x4263b2),
    installBtn &&
      installBtn[_0x31c6c2(0x9c)][_0x31c6c2(0x1a6)](_0x31c6c2(0xff));
}),
  installBtn["addEventListener"](_0x472491(0x209), (_0x353dea) => {
    const _0x40c71f = _0x472491;
    deferredPrompt &&
      (deferredPrompt[_0x40c71f(0x16a)](),
      deferredPrompt["userChoice"][_0x40c71f(0x1ad)]((_0x41d46c) => {
        const _0x3efbe6 = _0x40c71f;
        _0x41d46c[_0x3efbe6(0xbe)] === _0x3efbe6(0x199)
          ? console[_0x3efbe6(0x335)](_0x3efbe6(0x33c))
          : console[_0x3efbe6(0x335)](_0x3efbe6(0x145)),
          (deferredPrompt = null),
          installBtn[_0x3efbe6(0x9c)][_0x3efbe6(0x1c3)](_0x3efbe6(0xff));
      }));
  });
function _0x8674(_0xf3ed74, _0x12b536) {
  const _0xc30177 = _0xc301();
  return (
    (_0x8674 = function (_0x867404, _0x38042f) {
      _0x867404 = _0x867404 - 0x86;
      let _0x2dd874 = _0xc30177[_0x867404];
      return _0x2dd874;
    }),
    _0x8674(_0xf3ed74, _0x12b536)
  );
}
_0x472491(0x2fd) in navigator &&
  (navigator[_0x472491(0x2fd)]
    [_0x472491(0x17f)]()
    ["then"](function (_0x38b04e) {
      const _0x2a8d27 = _0x472491;
      for (let _0x7eac0f of _0x38b04e) {
        _0x7eac0f[_0x2a8d27(0x23e)]();
      }
    }),
  navigator[_0x472491(0x2fd)][_0x472491(0x1d7)](
    "controllerchange",
    function () {
      const _0x1bfce0 = _0x472491;
      window[_0x1bfce0(0x17a)][_0x1bfce0(0x360)]();
    }
  ));
const style = document[_0x472491(0x2fb)](_0x472491(0x27d));
(style[_0x472491(0xd7)] = _0x472491(0xbd)),
  document[_0x472491(0x24f)][_0x472491(0x224)](style);
async function verPromociones() {
  const _0x571c3c = _0x472491;
  try {
    console["log"](_0x571c3c(0x392)),
      (document[_0x571c3c(0x2e4)](_0x571c3c(0x234))[_0x571c3c(0xd7)] =
        _0x571c3c(0x1cc));
    const [_0x1fc488, _0x48d8fa] = await Promise[_0x571c3c(0x2d7)]([
      getAllPromociones(),
      getAllProductos(),
    ]);
    if (!Array["isArray"](_0x1fc488) || _0x1fc488["length"] === 0x0) {
      document[_0x571c3c(0x2e4)](_0x571c3c(0x234))[_0x571c3c(0xd7)] =
        _0x571c3c(0x3ab);
      return;
    }
    let _0x1441db = _0x571c3c(0x2a6);
    _0x1fc488[_0x571c3c(0x250)]((_0x52bf26, _0x249fbd) => {
      const _0x2ef710 = _0x571c3c;
      let _0x538d47 = [];
      if (_0x52bf26[_0x2ef710(0x316)] && Array["isArray"](_0x52bf26["skus"]))
        _0x538d47 = _0x52bf26[_0x2ef710(0x316)];
      else
        _0x52bf26["pro_grupoProductos_primaria"] &&
          _0x52bf26[_0x2ef710(0x11c)][_0x2ef710(0x386)] &&
          (Array[_0x2ef710(0x3af)](_0x52bf26[_0x2ef710(0x11c)]["pr_sku"])
            ? (_0x538d47 = _0x52bf26[_0x2ef710(0x11c)][_0x2ef710(0x386)])
            : (_0x538d47 = _0x52bf26["pro_grupoProductos_primaria"]["pr_sku"]
                [_0x2ef710(0x275)]("\x20")
                [_0x2ef710(0x274)]((_0x28946d) => _0x28946d["trim"]())));
      const _0x2d770c = _0x538d47[_0x2ef710(0x291)]((_0x1cba6d) => {
          const _0x5b4be7 = _0x2ef710;
          return _0x48d8fa[_0x5b4be7(0x394)](
            (_0x3c0a0a) => _0x3c0a0a[_0x5b4be7(0x386)] === _0x1cba6d
          );
        })[_0x2ef710(0x274)]((_0x1807ec) => _0x1807ec !== undefined),
        _0x18f285 =
          _0x52bf26[_0x2ef710(0x129)] ||
          _0x52bf26[_0x2ef710(0x273)] ||
          _0x2ef710(0x12f) + (_0x249fbd + 0x1),
        _0x36f5b5 =
          _0x52bf26["pro_tipoPromo"] ||
          _0x52bf26[_0x2ef710(0x16c)] ||
          _0x2ef710(0x2d5),
        _0xcebf21 =
          _0x52bf26[_0x2ef710(0x1df)] || _0x52bf26[_0x2ef710(0x169)] || "",
        _0x4eb9a3 = _0x52bf26[_0x2ef710(0x13e)] || "",
        _0x4ab4a1 = Number(_0x4eb9a3) || 0x1;
      let _0xf20a9c = 0x0;
      const _0x52333c = (_0xcebf21 + "\x20" + _0x18f285)[_0x2ef710(0x213)](),
        _0x47d175 = _0x52333c[_0x2ef710(0xb6)](/(\d+)\s*x\s*(\d+)/);
      if (_0x47d175) _0xf20a9c = Number(_0x47d175[0x2]);
      else {
        const _0x319458 = Number(_0x52bf26[_0x2ef710(0x105)]) || 0x0;
        _0xf20a9c = _0x319458 * _0x4ab4a1;
      }
      let _0x494e35 = 0x0,
        _0x5c5ffd = 0x0;
      if (_0x2d770c[_0x2ef710(0x2db)] > 0x0 && _0x4eb9a3 && _0xf20a9c > 0x0) {
        const _0x43cfe6 = _0x2d770c[_0x2ef710(0x291)]((_0x3bf63a) => {
            const _0x14fd3c = _0x2ef710;
            let _0x35dc40 =
              Number(_0x3bf63a[_0x14fd3c(0x1c1)]) ||
              Number(_0x3bf63a["L1"]) ||
              0x0;
            return Math[_0x14fd3c(0x1f9)](_0x35dc40 * 1.16 * 0x64) / 0x64;
          }),
          _0x3db2dd =
            _0x43cfe6["reduce"](
              (_0x5e2a66, _0x5d1feb) => _0x5e2a66 + _0x5d1feb,
              0x0
            ) / _0x43cfe6["length"];
        (_0x494e35 =
          Math[_0x2ef710(0x1f9)](_0x3db2dd * _0x4ab4a1 * 0x64) / 0x64),
          (_0x5c5ffd =
            Math[_0x2ef710(0x1f9)]((_0x494e35 - _0xf20a9c) * 0x64) / 0x64);
      }
      let _0x1a973f = "";
      if (_0x2d770c[_0x2ef710(0x2db)] > 0x0) {
        const _0x1678b7 = _0x2d770c["slice"](0x0, 0x4)
          [_0x2ef710(0x291)]((_0x527867) => {
            const _0x4b4968 = _0x2ef710;
            let _0xb9d962 = "";
            if (
              _0x527867[_0x4b4968(0x1eb)] &&
              _0x527867[_0x4b4968(0x1eb)][_0x4b4968(0x26a)]() !== ""
            ) {
              if (
                _0x527867[_0x4b4968(0x1eb)][_0x4b4968(0x1e0)](_0x4b4968(0x2b0))
              )
                _0xb9d962 = _0x527867["pr_imagen"];
              else {
                let _0x496d94 = _0x527867[_0x4b4968(0x1eb)][_0x4b4968(0x1e0)](
                  "/"
                )
                  ? _0x527867[_0x4b4968(0x1eb)]
                  : "/" + _0x527867[_0x4b4968(0x1eb)];
                _0xb9d962 = "https://media.megaservicio.net" + _0x496d94;
              }
            }
            return _0xb9d962
              ? _0x4b4968(0x21d) +
                  _0xb9d962 +
                  _0x4b4968(0x2be) +
                  _0x527867[_0x4b4968(0x1ff)] +
                  "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22height:\x2080px;\x20object-fit:\x20contain;\x20padding:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                  _0x527867[_0x4b4968(0x1ff)] +
                  _0x4b4968(0x388) +
                  _0x527867[_0x4b4968(0x386)] +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22" +
                  _0x527867[_0x4b4968(0x386)] +
                  _0x4b4968(0x28b)
              : _0x4b4968(0x2dd) +
                  _0x527867[_0x4b4968(0x1ff)] +
                  _0x4b4968(0x388) +
                  _0x527867[_0x4b4968(0x386)] +
                  _0x4b4968(0x98) +
                  _0x527867["pr_sku"] +
                  _0x4b4968(0x28b);
          })
          [_0x2ef710(0x1fc)]("");
        _0x1a973f =
          _0x2ef710(0x298) +
          _0x1678b7 +
          _0x2ef710(0x239) +
          (_0x2d770c[_0x2ef710(0x2db)] > 0x4
            ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>...\x20y\x20" +
              (_0x2d770c["length"] - 0x4) +
              _0x2ef710(0xf8) +
              (_0x2d770c[_0x2ef710(0x2db)] - 0x4 > 0x1 ? "s" : "") +
              "\x20más</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20";
      }
      _0x1441db +=
        _0x2ef710(0x269) +
        _0x18f285 +
        _0x2ef710(0x116) +
        _0x36f5b5["replace"](_0x2ef710(0x302), _0x2ef710(0x157)) +
        "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0xcebf21 && _0xcebf21 !== _0x18f285
          ? _0x2ef710(0x20a) + _0xcebf21 + _0x2ef710(0x310)
          : "") +
        _0x2ef710(0x391) +
        (_0xf20a9c > 0x0
          ? _0x2ef710(0x2f7) +
            _0x4ab4a1 +
            _0x2ef710(0xed) +
            _0xf20a9c[_0x2ef710(0x12b)](_0x2ef710(0x10a)) +
            _0x2ef710(0x27f) +
            (_0x494e35 > 0x0
              ? _0x2ef710(0x1d4) +
                _0x494e35[_0x2ef710(0x12b)](_0x2ef710(0x10a)) +
                _0x2ef710(0x1b9)
              : _0x2ef710(0x2f5)) +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            (_0x5c5ffd > 0x0
              ? _0x2ef710(0x1e7) +
                _0x5c5ffd[_0x2ef710(0x12b)]("es-CL") +
                "\x20comprando\x20" +
                _0x4ab4a1 +
                _0x2ef710(0x2b6)
              : "") +
            _0x2ef710(0xf2)
          : _0x2ef710(0x1aa) +
            (_0x4eb9a3 ? _0x2ef710(0x21e) + _0x4eb9a3 + _0x2ef710(0xc5) : "") +
            _0x2ef710(0x2ba) +
            (precioPromo
              ? _0x2ef710(0x1e2) + precioPromo + _0x2ef710(0x1d6)
              : "") +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x1a973f +
        _0x2ef710(0x391) +
        (_0x2d770c[_0x2ef710(0x2db)] > 0x0
          ? _0x2ef710(0x248) +
            _0x2d770c[_0x2ef710(0x291)](
              (_0x2c26a7, _0x53bd91) =>
                _0x2ef710(0x277) +
                (_0x53bd91 < _0x2d770c[_0x2ef710(0x2db)] - 0x1
                  ? _0x2ef710(0x2f1)
                  : "") +
                "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-start\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-dark\x22\x20style=\x22font-size:\x201rem;\x22>" +
                _0x2c26a7[_0x2ef710(0x1ff)] +
                _0x2ef710(0x14d) +
                _0x2c26a7["pr_sku"] +
                _0x2ef710(0x245) +
                (_0x2c26a7["pr_gtin"]
                  ? "<small\x20class=\x22text-muted\x20d-block\x22><strong>Código:</strong>\x20" +
                    _0x2c26a7[_0x2ef710(0x1f5)] +
                    _0x2ef710(0x287)
                  : "") +
                "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                (() => {
                  const _0x5f0932 = _0x2ef710;
                  let _0x3682b6 =
                      Number(_0x2c26a7["pr_precio"]) ||
                      Number(_0x2c26a7["L1"]) ||
                      0x0,
                    _0x244049 =
                      Math[_0x5f0932(0x1f9)](_0x3682b6 * 1.16 * 0x64) / 0x64;
                  return _0x244049 > 0x0
                    ? "<small\x20class=\x22text-success\x22><strong>Precio\x20unitario:</strong>\x20$" +
                        _0x244049[_0x5f0932(0x214)](0x2) +
                        _0x5f0932(0x287)
                    : "";
                })() +
                _0x2ef710(0x283)
            )[_0x2ef710(0x1fc)]("") +
            _0x2ef710(0x152)
          : "") +
        _0x2ef710(0x391) +
        (_0x538d47[_0x2ef710(0x2db)] > _0x2d770c[_0x2ef710(0x2db)]
          ? _0x2ef710(0x238) +
            _0x538d47[_0x2ef710(0x2db)] +
            "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(" +
            _0x2d770c[_0x2ef710(0x2db)] +
            _0x2ef710(0xa8) +
            _0x538d47[_0x2ef710(0xeb)](0x0, 0x6)
              ["map"](
                (_0x2259ec) => _0x2ef710(0x284) + _0x2259ec + _0x2ef710(0x31c)
              )
              ["join"]("") +
            _0x2ef710(0xa0) +
            (_0x538d47["length"] > 0x6
              ? _0x2ef710(0x328) +
                (_0x538d47["length"] - 0x6) +
                "\x20más</span>"
              : "") +
            _0x2ef710(0x152)
          : "") +
        _0x2ef710(0x391) +
        (_0x52bf26[_0x2ef710(0x369)] && _0x52bf26["validTo"]
          ? _0x2ef710(0x243) +
            _0x52bf26[_0x2ef710(0x369)] +
            _0x2ef710(0x294) +
            _0x52bf26["validTo"] +
            _0x2ef710(0x232)
          : "") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    }),
      (_0x1441db += _0x571c3c(0x21c)),
      (_0x1441db += _0x571c3c(0x34e)),
      (document[_0x571c3c(0x2e4)](_0x571c3c(0x234))[_0x571c3c(0xd7)] =
        _0x1441db);
    const _0x2bfaa5 = document[_0x571c3c(0xd3)](_0x571c3c(0x1a3));
    _0x2bfaa5[_0x571c3c(0x250)]((_0x51b82c) => {
      const _0x262bef = _0x571c3c;
      _0x51b82c[_0x262bef(0x1d7)]("click", function (_0x6e5531) {
        const _0x1fea89 = _0x262bef;
        _0x6e5531[_0x1fea89(0x137)]();
        const _0x3bb9b8 = _0x51b82c[_0x1fea89(0x33f)]("data-sku");
        navigator[_0x1fea89(0x2a1)] &&
          navigator["clipboard"]
            [_0x1fea89(0x301)](_0x3bb9b8)
            ["then"](() => {
              const _0x2655dc = _0x1fea89,
                _0x250acd = _0x51b82c["innerHTML"];
              (_0x51b82c[_0x2655dc(0xd7)] = "✅"),
                _0x51b82c[_0x2655dc(0x9c)]["remove"](_0x2655dc(0x2f8)),
                _0x51b82c[_0x2655dc(0x9c)][_0x2655dc(0x1c3)](_0x2655dc(0x19b)),
                setTimeout(() => {
                  const _0x4078e5 = _0x2655dc;
                  (_0x51b82c[_0x4078e5(0xd7)] = _0x250acd),
                    _0x51b82c[_0x4078e5(0x9c)][_0x4078e5(0x1a6)](
                      _0x4078e5(0x19b)
                    ),
                    _0x51b82c["classList"][_0x4078e5(0x1c3)](_0x4078e5(0x2f8));
                }, 0x4b0);
            })
            [_0x1fea89(0xe8)]((_0x2dabbd) => {
              const _0x11e1d2 = _0x1fea89;
              console[_0x11e1d2(0x200)](_0x11e1d2(0x143), _0x2dabbd);
              const _0x35d82e = _0x51b82c[_0x11e1d2(0xd7)];
              (_0x51b82c[_0x11e1d2(0xd7)] = "❌"),
                setTimeout(() => {
                  const _0xe8a392 = _0x11e1d2;
                  _0x51b82c[_0xe8a392(0xd7)] = _0x35d82e;
                }, 0x4b0);
            });
      });
    });
  } catch (_0x56018e) {
    console[_0x571c3c(0x200)](_0x571c3c(0x261), _0x56018e),
      (document[_0x571c3c(0x2e4)](_0x571c3c(0x234))[_0x571c3c(0xd7)] =
        _0x571c3c(0x2f3) + _0x56018e[_0x571c3c(0x159)] + _0x571c3c(0x312));
  }
}
cargarConfiguracionGuardada(), renderHistorial();
const mobileModalStyles = document[_0x472491(0x2fb)]("style");
(mobileModalStyles[_0x472491(0x23c)] =
  "\x0a\x20\x20/*\x20Estilos\x20específicos\x20para\x20modal\x20en\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20/*\x20Evitar\x20oscurecimiento\x20de\x20fondo\x20en\x20móviles\x20*/\x0a\x20\x20\x20\x20.modal-backdrop,\x0a\x20\x20\x20\x20.modal-backdrop.show,\x0a\x20\x20\x20\x20.modal-backdrop.fade\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20stretch\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-dialog,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-content,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-body,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20flex:\x201\x20!important;\x0a\x20\x20\x20\x20\x20\x20overflow-y:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-height:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding:\x201rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-header,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-footer,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-footer\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20Asegurar\x20que\x20las\x20tarjetas\x20no\x20causen\x20overflow\x20horizontal\x20*/\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.row\x20{\x0a\x20\x20\x20\x20\x20\x20margin-left:\x20-8px\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin-right:\x20-8px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20[class*=\x22col-\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20padding-left:\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding-right:\x208px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Mejorar\x20scroll\x20en\x20todos\x20los\x20dispositivos\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0,\x200,\x200)\x20!important;\x20/*\x20Forzar\x20aceleración\x20por\x20hardware\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a"),
  document[_0x472491(0x24f)]["appendChild"](mobileModalStyles);
let resultadosBusquedaState = {
  items: [],
  page: 0x1,
  pageSize: 0xa,
  query: "",
  view: _0x472491(0xe1),
};
function isMobileDevice() {
  const _0x1f1107 = _0x472491;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
    _0x1f1107(0xfc)
  ](navigator["userAgent"]);
}
function hideMobileKeyboard() {
  const _0x34a1d4 = _0x472491;
  try {
    const _0x57473f = document[_0x34a1d4(0x2e4)]("codigo");
    if (!_0x57473f) return;
    _0x57473f[_0x34a1d4(0xdf)]();
    document[_0x34a1d4(0xdb)] &&
      typeof document[_0x34a1d4(0xdb)][_0x34a1d4(0xdf)] === _0x34a1d4(0x2f6) &&
      document["activeElement"]["blur"]();
    const _0x1a46c1 = /iPad|iPhone|iPod/[_0x34a1d4(0xfc)](
      navigator[_0x34a1d4(0x341)]
    );
    if (_0x1a46c1) {
      const _0x4b5217 = _0x57473f[_0x34a1d4(0x257)](_0x34a1d4(0x114));
      _0x57473f[_0x34a1d4(0x174)](_0x34a1d4(0x114), "true");
      const _0x470e20 = document["createElement"](_0x34a1d4(0xf1));
      (_0x470e20[_0x34a1d4(0x207)] = _0x34a1d4(0x18e)),
        (_0x470e20[_0x34a1d4(0x27d)][_0x34a1d4(0x2e8)] = "absolute"),
        (_0x470e20["style"][_0x34a1d4(0x12c)] = "0"),
        (_0x470e20[_0x34a1d4(0x27d)][_0x34a1d4(0xb4)] = "0"),
        (_0x470e20[_0x34a1d4(0x27d)]["pointerEvents"] = _0x34a1d4(0x221)),
        document[_0x34a1d4(0x125)][_0x34a1d4(0x224)](_0x470e20),
        _0x470e20[_0x34a1d4(0x29c)](),
        setTimeout(() => {
          const _0x4818ff = _0x34a1d4;
          try {
            _0x470e20[_0x4818ff(0xdf)]();
          } catch (_0x5cdacb) {}
          try {
            document["body"][_0x4818ff(0x361)](_0x470e20);
          } catch (_0xd363d3) {}
          try {
            _0x57473f[_0x4818ff(0xdf)]();
          } catch (_0x4b7aa2) {}
          if (!_0x4b5217) _0x57473f[_0x4818ff(0x324)](_0x4818ff(0x114));
        }, 0x32);
    }
  } catch (_0x3db92a) {}
}
function mostrarModalResultadosBusqueda(_0x292a05, _0x104fd8) {
  const _0xba6898 = _0x472491;
  if (isMobileDevice()) hideMobileKeyboard();
  (resultadosBusquedaState[_0xba6898(0x2a0)] = _0x292a05),
    (resultadosBusquedaState[_0xba6898(0x178)] = 0x1),
    (resultadosBusquedaState[_0xba6898(0xdc)] = 0xa),
    (resultadosBusquedaState["query"] = _0x104fd8);
  try {
    const _0xe4efd3 = localStorage[_0xba6898(0x2dc)]("resultados_view");
    (_0xe4efd3 === _0xba6898(0x319) || _0xe4efd3 === _0xba6898(0xe1)) &&
      (resultadosBusquedaState[_0xba6898(0x204)] = _0xe4efd3);
  } catch (_0x41c7a9) {}
  const _0x2c8f6c = document[_0xba6898(0x2e4)](_0xba6898(0x35d));
  if (!_0x2c8f6c) return;
  try {
    const _0x1660f7 = document[_0xba6898(0x2e4)](_0xba6898(0x234));
    _0x1660f7 &&
      /Buscando producto/i[_0xba6898(0xfc)](
        _0x1660f7[_0xba6898(0x23c)] || ""
      ) &&
      (_0x1660f7[_0xba6898(0xd7)] = "");
  } catch (_0x5601b4) {}
  try {
    const _0x37141f = document["getElementById"](_0xba6898(0x34f));
    _0x37141f &&
      ((_0x37141f[_0xba6898(0xbf)] = ""),
      (_0x37141f["placeholder"] =
        "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto"));
    const _0x1d1b5e = document[_0xba6898(0x2e4)](_0xba6898(0x32a));
    _0x1d1b5e &&
      ((_0x1d1b5e[_0xba6898(0xd7)] = ""),
      (_0x1d1b5e["style"]["display"] = _0xba6898(0x221)));
  } catch (_0x3560a3) {}
  renderResultadosBusqueda();
  const _0x3285bf = document[_0xba6898(0x2e4)](_0xba6898(0x282)),
    _0x531bee =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
        _0xba6898(0xfc)
      ](navigator[_0xba6898(0x341)]);
  if (_0x531bee)
    (_0x3285bf[_0xba6898(0x27d)][_0xba6898(0x2e8)] = _0xba6898(0x281)),
      (_0x3285bf[_0xba6898(0x27d)]["top"] = "0"),
      (_0x3285bf[_0xba6898(0x27d)]["left"] = "0"),
      (_0x3285bf["style"][_0xba6898(0x264)] = _0xba6898(0x1fa)),
      (_0x3285bf["style"][_0xba6898(0xb4)] = _0xba6898(0x1fa)),
      (_0x3285bf[_0xba6898(0x27d)][_0xba6898(0xd9)] = _0xba6898(0x279)),
      (_0x3285bf["style"][_0xba6898(0x315)] = "transparent"),
      (_0x3285bf[_0xba6898(0x27d)][_0xba6898(0x38d)] = _0xba6898(0x101)),
      _0x3285bf[_0xba6898(0x9c)][_0xba6898(0x1c3)](_0xba6898(0x217));
  else {
    const _0x3f6d44 = new bootstrap[_0xba6898(0x201)](_0x3285bf, {
      backdrop: !![],
      keyboard: !![],
    });
    _0x3f6d44["show"]();
  }
}
function cerrarResultadosModal() {
  const _0x26f2b7 = _0x472491,
    _0x4ed389 = document[_0x26f2b7(0x2e4)](_0x26f2b7(0x282));
  if (!_0x4ed389) return;
  _0x4ed389["classList"][_0x26f2b7(0x1a6)](_0x26f2b7(0x217)),
    (_0x4ed389["style"][_0x26f2b7(0x38d)] = _0x26f2b7(0x221));
  try {
    const _0x80b605 = bootstrap[_0x26f2b7(0x201)][_0x26f2b7(0x13c)](_0x4ed389);
    if (_0x80b605) _0x80b605[_0x26f2b7(0x2aa)]();
  } catch (_0x3a37dd) {}
  document[_0x26f2b7(0xd3)](_0x26f2b7(0x2bc))[_0x26f2b7(0x250)]((_0x4f18d8) =>
    _0x4f18d8["remove"]()
  );
  try {
    const _0x374d44 = document[_0x26f2b7(0x2e4)](_0x26f2b7(0x234));
    _0x374d44 &&
      /Buscando producto/i[_0x26f2b7(0xfc)](_0x374d44["textContent"] || "") &&
      (_0x374d44[_0x26f2b7(0xd7)] = "");
  } catch (_0x93ff3d) {}
  try {
    const _0x468c7f = document[_0x26f2b7(0x2e4)]("codigo");
    _0x468c7f &&
      ((_0x468c7f[_0x26f2b7(0x231)] = _0x26f2b7(0xe3)),
      bringInputIntoView({ focusOnDesktop: !![] }));
  } catch (_0x30e933) {}
}
function bringInputIntoView(_0x48715c = {}) {
  const _0xd5981b = _0x472491,
    { focusOnDesktop: focusOnDesktop = !![] } = _0x48715c,
    _0x426b03 = document[_0xd5981b(0x2e4)](_0xd5981b(0x34f));
  if (!_0x426b03) return;
  try {
    _0x426b03[_0xd5981b(0x1fd)]({
      behavior: "smooth",
      block: _0xd5981b(0xda),
      inline: _0xd5981b(0x280),
    });
  } catch (_0x4389c0) {}
  const _0x351d4a =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i["test"](
      navigator[_0xd5981b(0x341)]
    );
  if (!_0x351d4a && focusOnDesktop)
    try {
      _0x426b03["focus"]({ preventScroll: !![] });
    } catch (_0x2bd714) {
      try {
        _0x426b03[_0xd5981b(0x29c)]();
      } catch (_0x4ac097) {}
    }
}
async function renderResultadosBusqueda() {
  const _0x32ca83 = _0x472491,
    _0x55ad68 = document[_0x32ca83(0x2e4)]("resultados-busqueda-body");
  if (!_0x55ad68) return;
  const {
      items: _0x4cf032,
      page: _0x4d7163,
      pageSize: _0x1fc36e,
      query: _0x3f680f,
      view: _0x448819,
    } = resultadosBusquedaState,
    _0x289d3b = _0x4cf032[_0x32ca83(0x2db)],
    _0x54eccd = Math["max"](0x1, Math["ceil"](_0x289d3b / _0x1fc36e)),
    _0x5550f4 = Math[_0x32ca83(0x126)](_0x4d7163, _0x54eccd),
    _0x3a73b6 = (_0x5550f4 - 0x1) * _0x1fc36e,
    _0xf275ce = Math[_0x32ca83(0x126)](_0x3a73b6 + _0x1fc36e, _0x289d3b),
    _0x20f987 = _0x4cf032[_0x32ca83(0xeb)](_0x3a73b6, _0xf275ce);
  let _0x34f74e = [];
  try {
    _0x34f74e = await Promise[_0x32ca83(0x2d7)](
      _0x20f987[_0x32ca83(0x291)]((_0x5ad214) =>
        tienePromociones(_0x5ad214)
          ["then"](Boolean)
          [_0x32ca83(0xe8)](() => ![])
      )
    );
  } catch (_0x23b989) {
    _0x34f74e = _0x20f987[_0x32ca83(0x291)](() => ![]);
  }
  const _0x11cdf4 = (_0xf30f7c, _0x26fead) => {
      const _0x5c75f9 = _0x32ca83,
        _0x4ebb7e = _0xf30f7c[_0x5c75f9(0x1ff)] || "",
        _0x13c98b =
          _0xf30f7c[_0x5c75f9(0x386)] || _0xf30f7c[_0x5c75f9(0x1f5)] || "";
      let _0x2a3b94 = "";
      if (
        _0xf30f7c[_0x5c75f9(0x1eb)] &&
        _0xf30f7c[_0x5c75f9(0x1eb)][_0x5c75f9(0x26a)]() !== ""
      ) {
        if (_0xf30f7c["pr_imagen"][_0x5c75f9(0x1e0)](_0x5c75f9(0x2b0)))
          _0x2a3b94 = _0xf30f7c[_0x5c75f9(0x1eb)];
        else {
          const _0x5d50e2 = _0xf30f7c[_0x5c75f9(0x1eb)][_0x5c75f9(0x1e0)]("/")
            ? _0xf30f7c[_0x5c75f9(0x1eb)]
            : "/" + _0xf30f7c[_0x5c75f9(0x1eb)];
          _0x2a3b94 = _0x5c75f9(0x131) + _0x5d50e2;
        }
      }
      const _0x4a8a87 =
          Number(_0xf30f7c["pr_precio"]) || Number(_0xf30f7c["L1"]) || 0x0,
        _0x2f50d7 = Math[_0x5c75f9(0x1f9)](_0x4a8a87 * 1.16 * 0x64) / 0x64;
      return (
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x20result-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22result-card-img\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x26fead ? _0x5c75f9(0x202) : "") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x2a3b94
          ? "<img\x20src=\x22" +
            _0x2a3b94 +
            _0x5c75f9(0x30b) +
            _0x4ebb7e +
            "\x22\x20onerror=\x22this.onerror=null;\x20this.style.display=\x27none\x27;\x20this.parentElement.innerHTML=\x27<div\x20class=\x5c\x27text-muted\x5c\x27\x20style=\x5c\x27font-size:2rem;\x5c\x27><i\x20class=\x5c\x27bi\x20bi-image\x5c\x27></i></div>\x27;\x22>"
          : "<div\x20class=\x22text-muted\x22\x20style=\x22font-size:2rem;\x22><i\x20class=\x22bi\x20bi-image\x22></i></div>") +
        _0x5c75f9(0x112) +
        _0x4ebb7e +
        "\x22>" +
        _0x4ebb7e +
        _0x5c75f9(0x1d0) +
        _0x13c98b +
        _0x5c75f9(0x2d9) +
        (_0x2f50d7 > 0x0
          ? "<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$" +
            _0x2f50d7[_0x5c75f9(0x214)](0x2) +
            "</div>"
          : "") +
        _0x5c75f9(0x256) +
        _0x13c98b +
        _0x5c75f9(0x285)
      );
    },
    _0x33ea3b = (_0x11fc31, _0x1928b1) => {
      const _0x30bf57 = _0x32ca83,
        _0xccd7cc = _0x11fc31[_0x30bf57(0x1ff)] || "",
        _0x480081 = _0x11fc31["pr_sku"] || _0x11fc31["pr_gtin"] || "";
      let _0x1d5f28 = "";
      if (_0x11fc31["pr_imagen"] && _0x11fc31["pr_imagen"]["trim"]() !== "") {
        if (_0x11fc31[_0x30bf57(0x1eb)][_0x30bf57(0x1e0)](_0x30bf57(0x2b0)))
          _0x1d5f28 = _0x11fc31[_0x30bf57(0x1eb)];
        else {
          const _0x5873d7 = _0x11fc31[_0x30bf57(0x1eb)]["startsWith"]("/")
            ? _0x11fc31["pr_imagen"]
            : "/" + _0x11fc31[_0x30bf57(0x1eb)];
          _0x1d5f28 = _0x30bf57(0x131) + _0x5873d7;
        }
      }
      return (
        _0x30bf57(0x1bd) +
        (_0x1d5f28
          ? "<div\x20class=\x22me-3\x22\x20style=\x22min-width:60px;\x22><img\x20src=\x22" +
            _0x1d5f28 +
            _0x30bf57(0x30b) +
            _0xccd7cc +
            _0x30bf57(0x86)
          : "") +
        _0x30bf57(0x1ac) +
        _0xccd7cc +
        (_0x1928b1
          ? "\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:0.7rem;\x22>PROMO</span>"
          : "") +
        _0x30bf57(0x1d0) +
        _0x480081 +
        "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27" +
        _0x480081 +
        _0x30bf57(0x285)
      );
    };
  let _0x402721 = "";
  if (_0x448819 === _0x32ca83(0x319)) {
    const _0x359406 = _0x20f987[_0x32ca83(0x291)](
      (_0x230c9e, _0x126b8b) =>
        _0x32ca83(0x87) +
        _0x11cdf4(_0x230c9e, !!_0x34f74e[_0x126b8b]) +
        "</div>"
    )[_0x32ca83(0x1fc)]("");
    _0x402721 =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20row-cols-2\x20row-cols-md-3\x20row-cols-lg-4\x20g-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
      _0x359406 +
      _0x32ca83(0x365);
  } else {
    const _0x17e77d = _0x20f987["map"]((_0x191101, _0x17dfd3) =>
      _0x33ea3b(_0x191101, !!_0x34f74e[_0x17dfd3])
    )[_0x32ca83(0x1fc)]("");
    _0x402721 = _0x17e77d;
  }
  _0x55ad68["innerHTML"] =
    _0x32ca83(0x151) +
    _0x289d3b +
    _0x32ca83(0x154) +
    _0x3f680f +
    _0x32ca83(0x189) +
    (_0x448819 === "grid" ? _0x32ca83(0x241) : "Lista") +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20" +
    (_0x402721 ||
      "<div\x20class=\x22text-center\x20text-muted\x22>Sin\x20resultados</div>") +
    "\x0a\x20\x20";
  const _0x3fa0ab = document[_0x32ca83(0x2e4)](_0x32ca83(0xe5)),
    _0x33a72a = document[_0x32ca83(0x2e4)]("pageIndicator");
  if (_0x3fa0ab)
    _0x3fa0ab[_0x32ca83(0x23c)] =
      _0x3a73b6 + 0x1 + "-" + _0xf275ce + _0x32ca83(0x22d) + _0x289d3b;
  if (_0x33a72a)
    _0x33a72a["textContent"] =
      _0x32ca83(0x3a2) + _0x5550f4 + _0x32ca83(0x308) + _0x54eccd;
  const _0x2272b4 = document["getElementById"]("btnPrevResultados"),
    _0x2195ee = document["getElementById"](_0x32ca83(0x2ea));
  _0x2272b4 &&
    ((_0x2272b4[_0x32ca83(0x1e9)] = _0x5550f4 <= 0x1),
    (_0x2272b4[_0x32ca83(0x1c7)] = () => {
      const _0x223353 = _0x32ca83;
      (resultadosBusquedaState["page"] = Math[_0x223353(0x246)](
        0x1,
        _0x5550f4 - 0x1
      )),
        renderResultadosBusqueda();
    }));
  _0x2195ee &&
    ((_0x2195ee[_0x32ca83(0x1e9)] = _0x5550f4 >= _0x54eccd),
    (_0x2195ee[_0x32ca83(0x1c7)] = () => {
      const _0x21534c = _0x32ca83;
      (resultadosBusquedaState[_0x21534c(0x178)] = Math[_0x21534c(0x126)](
        _0x54eccd,
        _0x5550f4 + 0x1
      )),
        renderResultadosBusqueda();
    }));
  const _0x151b4f = document[_0x32ca83(0x2e4)](_0x32ca83(0x3ac));
  _0x151b4f &&
    ((_0x151b4f["value"] = String(resultadosBusquedaState[_0x32ca83(0xdc)])),
    (_0x151b4f["onchange"] = (_0x5aa1bb) => {
      const _0x4839a5 = _0x32ca83,
        _0x323e53 =
          parseInt(_0x5aa1bb[_0x4839a5(0x242)][_0x4839a5(0xbf)], 0xa) || 0xa;
      (resultadosBusquedaState["pageSize"] = _0x323e53),
        (resultadosBusquedaState["page"] = 0x1),
        renderResultadosBusqueda();
    }));
  const _0x393865 = document[_0x32ca83(0x2e4)](_0x32ca83(0x166)),
    _0x34367b = document[_0x32ca83(0x2e4)](_0x32ca83(0x1e3)),
    _0x38ad44 = document[_0x32ca83(0x2e4)](_0x32ca83(0x2a3));
  _0x393865 &&
    _0x34367b &&
    _0x38ad44 &&
    (_0x448819 === "grid"
      ? ((_0x34367b[_0x32ca83(0x180)] = _0x32ca83(0xfb)),
        (_0x38ad44[_0x32ca83(0x23c)] = _0x32ca83(0x216)))
      : ((_0x34367b[_0x32ca83(0x180)] = _0x32ca83(0x2e6)),
        (_0x38ad44[_0x32ca83(0x23c)] = _0x32ca83(0x241))),
    (_0x393865[_0x32ca83(0x1c7)] = () => {
      const _0x3e2f05 = _0x32ca83;
      resultadosBusquedaState[_0x3e2f05(0x204)] =
        resultadosBusquedaState[_0x3e2f05(0x204)] === _0x3e2f05(0x319)
          ? _0x3e2f05(0xe1)
          : _0x3e2f05(0x319);
      try {
        localStorage[_0x3e2f05(0xa6)](
          _0x3e2f05(0x27e),
          resultadosBusquedaState[_0x3e2f05(0x204)]
        );
      } catch (_0x372667) {}
      renderResultadosBusqueda();
    }));
  const _0x3abdd2 = document[_0x32ca83(0x2e4)](_0x32ca83(0x144)),
    _0x5f7282 = document[_0x32ca83(0x2e4)]("btnIrPagina");
  _0x3abdd2 &&
    ((_0x3abdd2["min"] = "1"),
    (_0x3abdd2[_0x32ca83(0x246)] = String(_0x54eccd)),
    (_0x3abdd2[_0x32ca83(0x231)] = "1\x20-\x20" + _0x54eccd));
  const _0xa5f1fe = () => {
    const _0x53eab3 = _0x32ca83,
      _0x215dc0 = parseInt(
        (_0x3abdd2?.[_0x53eab3(0xbf)] || "")[_0x53eab3(0x26a)](),
        0xa
      );
    if (!isNaN(_0x215dc0)) {
      const _0x41e0bc = Math[_0x53eab3(0x246)](
        0x1,
        Math[_0x53eab3(0x126)](_0x54eccd, _0x215dc0)
      );
      (resultadosBusquedaState[_0x53eab3(0x178)] = _0x41e0bc),
        renderResultadosBusqueda();
    }
  };
  if (_0x5f7282) _0x5f7282[_0x32ca83(0x1c7)] = _0xa5f1fe;
  if (_0x3abdd2)
    _0x3abdd2[_0x32ca83(0x1d7)](_0x32ca83(0x2cf), (_0x212d72) => {
      const _0x38e1a7 = _0x32ca83;
      _0x212d72["key"] === _0x38e1a7(0x229) &&
        (_0x212d72[_0x38e1a7(0x137)](), _0xa5f1fe());
    });
}
async function mostrarDetalleProductoBySKU(_0x44bef3) {
  const _0x19229f = _0x472491,
    _0x101327 = await getAllProductos(),
    _0x3ce461 = _0x101327[_0x19229f(0x394)](
      (_0x496238) =>
        String(_0x496238["pr_sku"]) === String(_0x44bef3) ||
        String(_0x496238[_0x19229f(0x1f5)]) === String(_0x44bef3)
    );
  if (_0x3ce461) {
    mostrarDetalleProducto(_0x3ce461);
    const _0x43da1a = {
      ..._0x3ce461,
      FECHA_ESCANEO: new Date()["toISOString"](),
    };
    historial[_0x19229f(0x286)](_0x43da1a),
      setCookie(_0x19229f(0x33d), JSON[_0x19229f(0xbb)](historial), 0x1e),
      renderHistorial(),
      setTimeout(() => {
        const _0x10e5b0 = _0x19229f,
          _0x3dde00 = document[_0x10e5b0(0x2e4)]("resultado");
        _0x3dde00 &&
          _0x3dde00[_0x10e5b0(0x1fd)]({
            behavior: "smooth",
            block: _0x10e5b0(0x18f),
            inline: "nearest",
          });
      }, 0xc8);
  }
}
