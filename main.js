const _0x1b5bb5 = _0x1f33;
(function (_0x2d5c35, _0x2b5bcc) {
  const _0x1b5ab2 = _0x1f33,
    _0x4ab7a3 = _0x2d5c35();
  while (!![]) {
    try {
      const _0x43acee =
        (parseInt(_0x1b5ab2(0x177)) / 0x1) *
          (parseInt(_0x1b5ab2(0x2d1)) / 0x2) +
        parseInt(_0x1b5ab2(0x1e0)) / 0x3 +
        (-parseInt(_0x1b5ab2(0x253)) / 0x4) *
          (-parseInt(_0x1b5ab2(0x36d)) / 0x5) +
        parseInt(_0x1b5ab2(0x1ac)) / 0x6 +
        (-parseInt(_0x1b5ab2(0x199)) / 0x7) *
          (parseInt(_0x1b5ab2(0x198)) / 0x8) +
        (parseInt(_0x1b5ab2(0x151)) / 0x9) *
          (-parseInt(_0x1b5ab2(0x1d4)) / 0xa) +
        parseInt(_0x1b5ab2(0x125)) / 0xb;
      if (_0x43acee === _0x2b5bcc) break;
      else _0x4ab7a3["push"](_0x4ab7a3["shift"]());
    } catch (_0x2901ab) {
      _0x4ab7a3["push"](_0x4ab7a3["shift"]());
    }
  }
})(_0x2e04, 0x79b9f);
const form = document[_0x1b5bb5(0x185)](_0x1b5bb5(0x2db)),
  inputCodigo = document["getElementById"](_0x1b5bb5(0x1a0)),
  readerDiv = document[_0x1b5bb5(0x185)](_0x1b5bb5(0x197)),
  ayudaTexto = document[_0x1b5bb5(0x185)](_0x1b5bb5(0x175)),
  installBtn = document[_0x1b5bb5(0x185)]("installBtn");
inputCodigo[_0x1b5bb5(0x2bf)](_0x1b5bb5(0x19a), _0x1b5bb5(0x2ec)),
  inputCodigo[_0x1b5bb5(0x2bf)]("spellcheck", _0x1b5bb5(0x2d5)),
  inputCodigo[_0x1b5bb5(0x2bf)](_0x1b5bb5(0xe6), _0x1b5bb5(0x2ec)),
  inputCodigo[_0x1b5bb5(0x2bf)]("autocorrect", _0x1b5bb5(0x2ec)),
  inputCodigo["setAttribute"]("data-form-type", "other"),
  form[_0x1b5bb5(0x2bf)](_0x1b5bb5(0x19a), _0x1b5bb5(0x2ec));
let scannerActivo = ![],
  deferredPrompt,
  puedeEscanear = !![],
  ultimoCodigoEscaneado = "",
  datosYaCargados = ![];
if (!window["JsBarcode"]) {
  const script = document[_0x1b5bb5(0x14e)](_0x1b5bb5(0x2bb));
  (script[_0x1b5bb5(0x37a)] = _0x1b5bb5(0x23b)),
    (script["async"] = !![]),
    document[_0x1b5bb5(0x346)][_0x1b5bb5(0xc1)](script);
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
    const _0x5ca93a = _0x1b5bb5;
    (this[_0x5ca93a(0x1f0)] = "googleVisionUsage"), this[_0x5ca93a(0x164)]();
  }
  [_0x1b5bb5(0x164)]() {
    const _0x21790f = _0x1b5bb5,
      _0x1638c4 = localStorage[_0x21790f(0x1bc)](this[_0x21790f(0x1f0)]);
    _0x1638c4
      ? (this[_0x21790f(0x33b)] = JSON["parse"](_0x1638c4))
      : this[_0x21790f(0x341)]();
    const _0x29de4f = new Date()[_0x21790f(0x20a)]();
    this[_0x21790f(0x33b)][_0x21790f(0xa1)] !== _0x29de4f &&
      this["resetMonthlyUsage"]();
  }
  [_0x1b5bb5(0x341)]() {
    const _0x5f2b4a = _0x1b5bb5;
    (this[_0x5f2b4a(0x33b)] = {
      month: new Date()[_0x5f2b4a(0x20a)](),
      year: new Date()[_0x5f2b4a(0xcc)](),
      monthlyCount: 0x0,
      dailyCount: 0x0,
      lastUsedDate: new Date()[_0x5f2b4a(0x351)](),
      history: [],
    }),
      this[_0x5f2b4a(0x169)]();
  }
  [_0x1b5bb5(0x169)]() {
    const _0x46238e = _0x1b5bb5;
    localStorage[_0x46238e(0x358)](
      this["storageKey"],
      JSON[_0x46238e(0x328)](this["usage"])
    );
  }
  [_0x1b5bb5(0x2e2)]() {
    const _0x592c4c = _0x1b5bb5,
      _0x4fe4ee = new Date()["toDateString"]();
    this[_0x592c4c(0x33b)][_0x592c4c(0x2f8)] !== _0x4fe4ee &&
      ((this[_0x592c4c(0x33b)][_0x592c4c(0x1d1)] = 0x0),
      (this[_0x592c4c(0x33b)][_0x592c4c(0x2f8)] = _0x4fe4ee),
      this[_0x592c4c(0x169)]());
    const _0x5ab9ea =
        this["usage"][_0x592c4c(0x269)] <
        GOOGLE_VISION_CONFIG[_0x592c4c(0x25d)],
      _0x12ca62 =
        this["usage"][_0x592c4c(0x1d1)] < GOOGLE_VISION_CONFIG["dailyLimit"];
    return _0x5ab9ea && _0x12ca62;
  }
  [_0x1b5bb5(0xcd)]() {
    const _0x12da39 = _0x1b5bb5;
    this["usage"]["monthlyCount"]++,
      this[_0x12da39(0x33b)]["dailyCount"]++,
      this[_0x12da39(0x33b)][_0x12da39(0x13a)]["push"]({
        date: new Date()[_0x12da39(0x271)](),
        count: this["usage"]["monthlyCount"],
      }),
      this["usage"]["history"][_0x12da39(0x359)] > 0x32 &&
        (this[_0x12da39(0x33b)][_0x12da39(0x13a)] =
          this["usage"][_0x12da39(0x13a)][_0x12da39(0x19f)](-0x32)),
      this[_0x12da39(0x169)]();
  }
  ["getUsageStatus"]() {
    const _0x3b6bf4 = _0x1b5bb5;
    return {
      monthlyUsed: this[_0x3b6bf4(0x33b)][_0x3b6bf4(0x269)],
      monthlyLimit: GOOGLE_VISION_CONFIG[_0x3b6bf4(0x25d)],
      dailyUsed: this[_0x3b6bf4(0x33b)][_0x3b6bf4(0x1d1)],
      dailyLimit: GOOGLE_VISION_CONFIG["dailyLimit"],
      remainingMonthly:
        GOOGLE_VISION_CONFIG["monthlyLimit"] - this["usage"][_0x3b6bf4(0x269)],
      remainingDaily:
        GOOGLE_VISION_CONFIG[_0x3b6bf4(0x102)] -
        this[_0x3b6bf4(0x33b)]["dailyCount"],
      canUse: this["canUseAPI"](),
    };
  }
  [_0x1b5bb5(0x367)]() {
    const _0x32aa2f = _0x1b5bb5,
      _0xeafb90 = this[_0x32aa2f(0x287)]();
    if (_0xeafb90[_0x32aa2f(0xcb)] >= GOOGLE_VISION_CONFIG[_0x32aa2f(0x1ff)])
      return (
        "⚠️\x20<strong>Límite\x20cerca:</strong>\x20" +
        _0xeafb90[_0x32aa2f(0xcb)] +
        "/" +
        _0xeafb90["monthlyLimit"] +
        _0x32aa2f(0x16a)
      );
    if (
      _0xeafb90[_0x32aa2f(0xbf)] >=
      GOOGLE_VISION_CONFIG[_0x32aa2f(0x102)] * 0.8
    )
      return (
        _0x32aa2f(0x1c2) +
        _0xeafb90[_0x32aa2f(0xbf)] +
        "/" +
        _0xeafb90["dailyLimit"] +
        _0x32aa2f(0x318)
      );
    return null;
  }
}
const visionUsageTracker = new GoogleVisionUsageTracker();
async function detectarConGoogleVision(_0x4c49af) {
  const _0x40e38b = _0x1b5bb5;
  console[_0x40e38b(0x1f3)](_0x40e38b(0x368));
  const _0x397c07 = document[_0x40e38b(0x14e)](_0x40e38b(0x29a)),
    _0x5af4f0 = _0x397c07[_0x40e38b(0x331)]("2d");
  let { width: _0x268fc9, height: _0x29db0c } = _0x4c49af;
  const _0x2ed735 = 0x400;
  if (_0x268fc9 > _0x2ed735 || _0x29db0c > _0x2ed735) {
    const _0x344a58 = Math["min"](_0x2ed735 / _0x268fc9, _0x2ed735 / _0x29db0c);
    (_0x268fc9 *= _0x344a58), (_0x29db0c *= _0x344a58);
  }
  (_0x397c07[_0x40e38b(0xfc)] = _0x268fc9),
    (_0x397c07["height"] = _0x29db0c),
    _0x5af4f0[_0x40e38b(0x347)](_0x4c49af, 0x0, 0x0, _0x268fc9, _0x29db0c);
  const _0x3754ea = _0x397c07["toDataURL"](_0x40e38b(0x29e), 0.9);
  console[_0x40e38b(0x1f3)]("📡\x20Enviando\x20a\x20backend\x20proxy...");
  try {
    const _0x1bd912 = await fetch(_0x40e38b(0x2fd), {
      method: "POST",
      headers: { "Content-Type": _0x40e38b(0x108) },
      body: JSON[_0x40e38b(0x328)]({
        image: _0x3754ea,
        userAgent: navigator[_0x40e38b(0xfd)][_0x40e38b(0xb0)](0x0, 0x32),
        timestamp: new Date()["toISOString"](),
      }),
    });
    if (!_0x1bd912["ok"]) {
      const _0x2618b5 = await _0x1bd912[_0x40e38b(0x294)]();
      throw new Error(
        _0x40e38b(0x244) + _0x1bd912[_0x40e38b(0x1af)] + "\x20-\x20" + _0x2618b5
      );
    }
    const _0x9207e7 = await _0x1bd912["json"]();
    console[_0x40e38b(0x1f3)](_0x40e38b(0x26d), _0x9207e7);
    if (_0x9207e7[_0x40e38b(0x206)])
      return (
        visionUsageTracker[_0x40e38b(0xcd)](),
        console[_0x40e38b(0x1f3)](_0x40e38b(0x17c)),
        console[_0x40e38b(0x1f3)](_0x40e38b(0x306)),
        extraerCodigoDeTexto(_0x9207e7["visionData"])
      );
    else throw new Error(_0x9207e7[_0x40e38b(0x12e)] || _0x40e38b(0xbc));
  } catch (_0x561b9b) {
    console[_0x40e38b(0x1f3)](_0x40e38b(0x242), _0x561b9b[_0x40e38b(0x254)]);
    if (_0x561b9b[_0x40e38b(0x254)][_0x40e38b(0x278)]("500"))
      console[_0x40e38b(0x1f3)](_0x40e38b(0x327)),
        console[_0x40e38b(0x1f3)](_0x40e38b(0x210)),
        console[_0x40e38b(0x1f3)](_0x40e38b(0x2a1)),
        console[_0x40e38b(0x1f3)](_0x40e38b(0x1d2)),
        console[_0x40e38b(0x1f3)](
          "\x20\x20\x20•\x20API\x20Key\x20inválida\x20o\x20límites\x20excedidos"
        ),
        console["log"](
          "\x20\x20\x20💡\x20Ejecuta\x20diagnosticarBackend()\x20para\x20más\x20detalles"
        );
    else {
      if (
        _0x561b9b[_0x40e38b(0x254)][_0x40e38b(0x278)]("CORS") ||
        _0x561b9b["message"][_0x40e38b(0x278)](_0x40e38b(0x20b)) ||
        _0x561b9b[_0x40e38b(0x254)][_0x40e38b(0x278)](_0x40e38b(0x21f))
      )
        throw new Error(_0x40e38b(0x262));
    }
    throw _0x561b9b;
  }
}
function _0x1f33(_0x38db8d, _0x48a747) {
  const _0x2e04ad = _0x2e04();
  return (
    (_0x1f33 = function (_0x1f33bf, _0x311a89) {
      _0x1f33bf = _0x1f33bf - 0x91;
      let _0xd202de = _0x2e04ad[_0x1f33bf];
      return _0xd202de;
    }),
    _0x1f33(_0x38db8d, _0x48a747)
  );
}
function extraerCodigoDeTexto(_0x3fb7bd) {
  const _0x23c358 = _0x1b5bb5,
    _0x16a489 = _0x3fb7bd["responses"][0x0]?.[_0x23c358(0x2d3)] || [];
  if (_0x16a489["length"] === 0x0)
    return console[_0x23c358(0x1f3)](_0x23c358(0x1a3)), null;
  const _0x12a714 = _0x16a489[0x0]?.[_0x23c358(0x30c)] || "";
  console[_0x23c358(0x1f3)](_0x23c358(0x28d), _0x12a714);
  const _0x5f437a = [
    /\b(\d{13})\b/g,
    /\b(\d{12})\b/g,
    /\b(\d{8})\b/g,
    /\b(\d{6,8})\b/g,
    /\b([A-Z0-9\-]{4,20})\b/g,
  ];
  for (const _0x5627b1 of _0x5f437a) {
    const _0x3abbf8 = [..._0x12a714[_0x23c358(0x183)](_0x5627b1)];
    for (const _0x2de929 of _0x3abbf8) {
      const _0x34688a = _0x2de929[0x1][_0x23c358(0x219)]();
      console[_0x23c358(0x1f3)](_0x23c358(0x1d5) + _0x34688a);
      if (validarCodigoPorLongitud(_0x34688a))
        return (
          console[_0x23c358(0x1f3)](_0x23c358(0x2c1) + _0x34688a), _0x34688a
        );
    }
  }
  return (
    console[_0x23c358(0x1f3)](
      "❌\x20No\x20se\x20encontraron\x20códigos\x20válidos\x20en\x20el\x20texto"
    ),
    null
  );
}
function validarCodigoPorLongitud(_0x22ae11) {
  const _0x48972f = _0x1b5bb5;
  if (/^\d{13}$/[_0x48972f(0xdc)](_0x22ae11)) return !![];
  if (/^\d{12}$/[_0x48972f(0xdc)](_0x22ae11)) return !![];
  if (/^\d{8}$/[_0x48972f(0xdc)](_0x22ae11)) return !![];
  if (/^\d{6,8}$/["test"](_0x22ae11)) return !![];
  if (
    /^[A-Z0-9\-]{4,20}$/[_0x48972f(0xdc)](_0x22ae11) &&
    _0x22ae11["length"] >= 0x4
  )
    return !![];
  return ![];
}
async function diagnosticarBackend() {
  const _0x3ce762 = _0x1b5bb5;
  console[_0x3ce762(0x1f3)](
    "🔍\x20Iniciando\x20diagnóstico\x20del\x20backend..."
  );
  const _0x503a3f = document[_0x3ce762(0x185)]("diagnostico-resultado");
  _0x503a3f && (_0x503a3f[_0x3ce762(0x12a)] = _0x3ce762(0x1e8));
  let _0x1aba83 = "";
  try {
    const _0x566e71 = await fetch(_0x3ce762(0xb8));
    if (_0x566e71["ok"]) {
      console[_0x3ce762(0x1f3)](
        "✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente"
      );
      const _0x5e4c8f = await _0x566e71["json"]();
      console[_0x3ce762(0x1f3)]("📊\x20Estadísticas:", _0x5e4c8f),
        (_0x1aba83 += _0x3ce762(0x276));
    } else
      console[_0x3ce762(0x1f3)](_0x3ce762(0x1e5), _0x566e71[_0x3ce762(0x1af)]),
        (_0x1aba83 +=
          _0x3ce762(0x2da) + _0x566e71[_0x3ce762(0x1af)] + _0x3ce762(0x154));
    console[_0x3ce762(0x1f3)](_0x3ce762(0x353));
    const _0x174464 = await fetch(_0x3ce762(0x2fd), {
        method: "POST",
        headers: { "Content-Type": _0x3ce762(0x108) },
        body: JSON["stringify"]({
          image: _0x3ce762(0x207),
          userId: "diagnostic",
        }),
      }),
      _0x17432f = await _0x174464[_0x3ce762(0x193)]();
    console["log"]("🧪\x20Respuesta\x20completa\x20vision-detect:", _0x17432f),
      console[_0x3ce762(0x1f3)](_0x3ce762(0x36a), _0x174464[_0x3ce762(0x1af)]);
    if (_0x174464[_0x3ce762(0x1af)] === 0x1f4) {
      console[_0x3ce762(0x1f3)](_0x3ce762(0x281));
      if (_0x17432f[_0x3ce762(0x288)]) {
        if (_0x17432f["details"]["includes"](_0x3ce762(0x297)))
          console[_0x3ce762(0x1f3)](_0x3ce762(0x2af)),
            console[_0x3ce762(0x1f3)](_0x3ce762(0x352)),
            console[_0x3ce762(0x1f3)](_0x3ce762(0x1fe)),
            (_0x1aba83 += _0x3ce762(0x149));
        else {
          if (_0x17432f[_0x3ce762(0x288)]["includes"](_0x3ce762(0x133)))
            console[_0x3ce762(0x1f3)](
              "🔑\x20PROBLEMA:\x20API\x20Key\x20inválida"
            ),
              (_0x1aba83 += _0x3ce762(0x148));
          else
            _0x17432f[_0x3ce762(0x288)][_0x3ce762(0x278)](_0x3ce762(0xe4))
              ? (console[_0x3ce762(0x1f3)](_0x3ce762(0x2ba)),
                console[_0x3ce762(0x1f3)](_0x3ce762(0x321)),
                (_0x1aba83 += _0x3ce762(0xa3)))
              : (console[_0x3ce762(0x1f3)](
                  "❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API"
                ),
                console[_0x3ce762(0x1f3)](
                  "📋\x20Detalles\x20completos:",
                  _0x17432f[_0x3ce762(0x288)]
                ),
                (_0x1aba83 += _0x3ce762(0x184)));
        }
      }
    } else
      _0x174464[_0x3ce762(0x1af)] === 0xc8 &&
        (console["log"](_0x3ce762(0x92)), (_0x1aba83 += _0x3ce762(0x170)));
  } catch (_0x6e8913) {
    console["log"](_0x3ce762(0x110), _0x6e8913[_0x3ce762(0x254)]),
      _0x6e8913[_0x3ce762(0x254)][_0x3ce762(0x278)](_0x3ce762(0x252))
        ? (console[_0x3ce762(0x1f3)](
            "🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers"
          ),
          (_0x1aba83 += _0x3ce762(0x2b8)))
        : (_0x1aba83 +=
            _0x3ce762(0x20d) + _0x6e8913[_0x3ce762(0x254)] + _0x3ce762(0x154));
  }
  _0x503a3f && (_0x503a3f[_0x3ce762(0x12a)] = _0x1aba83);
}
async function verificarBackend() {
  const _0x141858 = _0x1b5bb5;
  try {
    const _0x5d7077 = await fetch(_0x141858(0xb8), {
      method: _0x141858(0x335),
      headers: { "Content-Type": _0x141858(0x108) },
    });
    if (_0x5d7077["ok"]) {
      const _0x50ebe7 = await _0x5d7077[_0x141858(0x193)]();
      return (
        console["log"](_0x141858(0x2de), _0x50ebe7),
        {
          activo: !![],
          stats: _0x50ebe7,
          mensaje: "Google\x20Vision\x20API\x20activa\x20y\x20funcional",
        }
      );
    } else
      return (
        console[_0x141858(0x1f3)](_0x141858(0xc4), _0x5d7077[_0x141858(0x1af)]),
        {
          activo: ![],
          mensaje: "Backend\x20con\x20error:\x20" + _0x5d7077[_0x141858(0x1af)],
        }
      );
  } catch (_0x209917) {
    return (
      console[_0x141858(0x1f3)](
        "❌\x20Backend\x20no\x20disponible:",
        _0x209917[_0x141858(0x254)]
      ),
      { activo: ![], mensaje: _0x141858(0x14d) }
    );
  }
}
async function mostrarEstadisticasUso() {
  const _0x2fa9aa = _0x1b5bb5,
    _0x1fa21d = visionUsageTracker[_0x2fa9aa(0x287)](),
    _0x4768a6 = visionUsageTracker[_0x2fa9aa(0x367)]();
  let _0x1e048f =
    "📊\x20<strong>Uso\x20local\x20de\x20este\x20dispositivo:</strong><br>";
  (_0x1e048f +=
    _0x2fa9aa(0x1ba) +
    _0x1fa21d["monthlyUsed"] +
    "/" +
    _0x1fa21d[_0x2fa9aa(0x25d)] +
    _0x2fa9aa(0xba) +
    _0x1fa21d["remainingMonthly"] +
    _0x2fa9aa(0x2b5)),
    (_0x1e048f +=
      _0x2fa9aa(0x15b) +
      _0x1fa21d[_0x2fa9aa(0xbf)] +
      "/" +
      _0x1fa21d[_0x2fa9aa(0x102)] +
      _0x2fa9aa(0xba) +
      _0x1fa21d[_0x2fa9aa(0x138)] +
      ")");
  _0x4768a6 && (_0x1e048f += _0x2fa9aa(0x1a5) + _0x4768a6);
  if (GOOGLE_VISION_CONFIG[_0x2fa9aa(0x142)])
    try {
      const _0xa9470 = await verificarBackend();
      _0x1e048f += _0x2fa9aa(0xb6) + _0xa9470[_0x2fa9aa(0x304)];
    } catch (_0xa29abc) {
      _0x1e048f += _0x2fa9aa(0x100);
    }
  return _0x1e048f;
}
function setCookie(_0x8cf8ee, _0x5cc760, _0x3309b9) {
  const _0x645fa3 = _0x1b5bb5,
    _0x5be974 = new Date(
      Date[_0x645fa3(0xdd)]() + _0x3309b9 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x645fa3(0x135)]();
  document[_0x645fa3(0xda)] =
    _0x8cf8ee +
    "=" +
    encodeURIComponent(_0x5cc760) +
    ";\x20expires=" +
    _0x5be974 +
    _0x645fa3(0x171);
}
function getCookie(_0x5cb604) {
  const _0x5f39ac = _0x1b5bb5,
    _0x702088 = ";\x20" + document[_0x5f39ac(0xda)],
    _0x1e250c = _0x702088["split"](";\x20" + _0x5cb604 + "=");
  if (_0x1e250c[_0x5f39ac(0x359)] === 0x2)
    return decodeURIComponent(
      _0x1e250c[_0x5f39ac(0x229)]()[_0x5f39ac(0x250)](";")["shift"]()
    );
  return null;
}
const historialDiv = document["getElementById"]("historial"),
  resultadoDiv = document[_0x1b5bb5(0x185)](_0x1b5bb5(0x2c3)),
  DB_NAME = _0x1b5bb5(0x2f1),
  DB_STORE = "productos",
  DB_STORE_PROMOCIONES = _0x1b5bb5(0x29d);
let db;
function openDB() {
  return new Promise((_0x546465, _0x2ad304) => {
    const _0x5675db = _0x1f33,
      _0x530a65 = indexedDB["open"](DB_NAME, 0x2);
    (_0x530a65[_0x5675db(0x2a9)] = function (_0x3e050e) {
      const _0x3d99cf = _0x5675db;
      (db = _0x3e050e[_0x3d99cf(0x26e)]["result"]),
        !db[_0x3d99cf(0x35a)][_0x3d99cf(0x31e)](DB_STORE) &&
          db[_0x3d99cf(0x338)](DB_STORE, {
            keyPath: "id",
            autoIncrement: !![],
          }),
        !db[_0x3d99cf(0x35a)][_0x3d99cf(0x31e)](DB_STORE_PROMOCIONES) &&
          db["createObjectStore"](DB_STORE_PROMOCIONES, {
            keyPath: "id",
            autoIncrement: !![],
          });
    }),
      (_0x530a65[_0x5675db(0x2dc)] = function (_0x1dfa29) {
        (db = _0x1dfa29["target"]["result"]), _0x546465(db);
      }),
      (_0x530a65[_0x5675db(0x2ea)] = function (_0x5c20d2) {
        _0x2ad304(_0x5c20d2);
      });
  });
}
function clearProductos() {
  const _0x4aac4c = _0x1b5bb5;
  return openDB()[_0x4aac4c(0x153)]((_0x467306) => {
    return new Promise((_0x53ccea, _0x356f38) => {
      const _0x2cf044 = _0x1f33,
        _0x28e8e0 = _0x467306["transaction"](DB_STORE, _0x2cf044(0x14a));
      _0x28e8e0[_0x2cf044(0x340)](DB_STORE)[_0x2cf044(0x30b)](),
        (_0x28e8e0["oncomplete"] = _0x53ccea),
        (_0x28e8e0["onerror"] = _0x356f38);
    });
  });
}
function saveProductos(_0x50e3e5) {
  return openDB()["then"]((_0xaeb3a6) => {
    return new Promise((_0x3b2f36, _0x25bfc8) => {
      const _0x366c2a = _0x1f33,
        _0x26fc05 = _0xaeb3a6[_0x366c2a(0x2e9)](DB_STORE, "readwrite"),
        _0x2d2468 = _0x26fc05[_0x366c2a(0x340)](DB_STORE);
      _0x50e3e5[_0x366c2a(0x248)]((_0x332b3c) =>
        _0x2d2468[_0x366c2a(0xe0)](_0x332b3c)
      ),
        (_0x26fc05["oncomplete"] = _0x3b2f36),
        (_0x26fc05["onerror"] = _0x25bfc8);
    });
  });
}
function getAllProductos() {
  const _0x5e9893 = _0x1b5bb5;
  return openDB()[_0x5e9893(0x153)]((_0x5cf95e) => {
    return new Promise((_0x7319a5, _0xbf7d14) => {
      const _0x2b21fb = _0x1f33,
        _0x40172c = _0x5cf95e["transaction"](DB_STORE, _0x2b21fb(0x15a)),
        _0x3a8197 = _0x40172c[_0x2b21fb(0x340)](DB_STORE),
        _0x38dfb6 = _0x3a8197["getAll"]();
      (_0x38dfb6[_0x2b21fb(0x2dc)] = () => _0x7319a5(_0x38dfb6["result"])),
        (_0x38dfb6[_0x2b21fb(0x2ea)] = _0xbf7d14);
    });
  });
}
function clearPromociones() {
  const _0x443674 = _0x1b5bb5;
  return openDB()[_0x443674(0x153)]((_0xb3aac0) => {
    return new Promise((_0x80dfab, _0x15fa73) => {
      const _0x2fd0e7 = _0x1f33,
        _0x48aafc = _0xb3aac0[_0x2fd0e7(0x2e9)](
          DB_STORE_PROMOCIONES,
          _0x2fd0e7(0x14a)
        );
      _0x48aafc[_0x2fd0e7(0x340)](DB_STORE_PROMOCIONES)[_0x2fd0e7(0x30b)](),
        (_0x48aafc[_0x2fd0e7(0x182)] = _0x80dfab),
        (_0x48aafc["onerror"] = _0x15fa73);
    });
  });
}
function savePromociones(_0x1b16a4) {
  const _0x50c5e1 = _0x1b5bb5;
  return openDB()[_0x50c5e1(0x153)]((_0x535944) => {
    return new Promise((_0x909c5, _0x1fa5d5) => {
      const _0x484d07 = _0x1f33,
        _0x46a68a = _0x535944[_0x484d07(0x2e9)](
          DB_STORE_PROMOCIONES,
          "readwrite"
        ),
        _0x1f0a73 = _0x46a68a[_0x484d07(0x340)](DB_STORE_PROMOCIONES);
      _0x1b16a4["forEach"]((_0x301004) =>
        _0x1f0a73[_0x484d07(0xe0)](_0x301004)
      ),
        (_0x46a68a[_0x484d07(0x182)] = _0x909c5),
        (_0x46a68a[_0x484d07(0x2ea)] = _0x1fa5d5);
    });
  });
}
function getAllPromociones() {
  const _0x1a8f1f = _0x1b5bb5;
  return openDB()[_0x1a8f1f(0x153)]((_0x327578) => {
    return new Promise((_0x58c88a, _0x152d20) => {
      const _0x1c0ade = _0x1f33,
        _0x512846 = _0x327578[_0x1c0ade(0x2e9)](
          DB_STORE_PROMOCIONES,
          _0x1c0ade(0x15a)
        ),
        _0x22191f = _0x512846[_0x1c0ade(0x340)](DB_STORE_PROMOCIONES),
        _0xca8d14 = _0x22191f["getAll"]();
      (_0xca8d14[_0x1c0ade(0x2dc)] = () => _0x58c88a(_0xca8d14["result"])),
        (_0xca8d14[_0x1c0ade(0x2ea)] = _0x152d20);
    });
  });
}
const sugerenciasDiv = document[_0x1b5bb5(0x14e)]("div");
(sugerenciasDiv["id"] = _0x1b5bb5(0x1e3)),
  (sugerenciasDiv[_0x1b5bb5(0xeb)] = _0x1b5bb5(0x28e)),
  (sugerenciasDiv[_0x1b5bb5(0x280)][_0x1b5bb5(0x21d)] = _0x1b5bb5(0x261)),
  (sugerenciasDiv[_0x1b5bb5(0x280)]["maxHeight"] = _0x1b5bb5(0x225)),
  (sugerenciasDiv["style"][_0x1b5bb5(0x313)] = _0x1b5bb5(0x1bb)),
  (sugerenciasDiv[_0x1b5bb5(0x280)]["top"] = "100%"),
  (sugerenciasDiv[_0x1b5bb5(0x280)][_0x1b5bb5(0x1d9)] = "0"),
  (sugerenciasDiv[_0x1b5bb5(0x280)]["right"] = "0"),
  (inputCodigo[_0x1b5bb5(0x282)][_0x1b5bb5(0x280)][_0x1b5bb5(0x1a4)] =
    _0x1b5bb5(0x1f9)),
  inputCodigo[_0x1b5bb5(0x282)][_0x1b5bb5(0xc1)](sugerenciasDiv);
const promocionesDiv = document[_0x1b5bb5(0x14e)](_0x1b5bb5(0x2ae));
(promocionesDiv[_0x1b5bb5(0xeb)] = _0x1b5bb5(0x11c)),
  (promocionesDiv[_0x1b5bb5(0x12a)] =
    "\x0a\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnPromociones\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#ffc107;\x20background:#fff8dc;\x20color:#856404;\x20font-size:0.9rem;\x20padding:6px\x2016px;\x22>\x0a\x20\x20\x20\x20🏷️\x20Ver\x20Promociones\x0a\x20\x20</button>\x0a");
const actualizarDiv = document[_0x1b5bb5(0x14e)](_0x1b5bb5(0x2ae));
(actualizarDiv[_0x1b5bb5(0xeb)] = _0x1b5bb5(0x156)),
  (actualizarDiv[_0x1b5bb5(0x12a)] = _0x1b5bb5(0x319)),
  historialDiv[_0x1b5bb5(0x282)][_0x1b5bb5(0x260)](
    promocionesDiv,
    historialDiv
  ),
  historialDiv["parentNode"][_0x1b5bb5(0x260)](actualizarDiv, historialDiv);
const btnActualizar = actualizarDiv[_0x1b5bb5(0x18c)](_0x1b5bb5(0x2a7)),
  btnPromociones = promocionesDiv["querySelector"](_0x1b5bb5(0x23e)),
  ultimaActualizacionSpan = actualizarDiv[_0x1b5bb5(0x18c)](_0x1b5bb5(0x289)),
  btnTexto = actualizarDiv["querySelector"](_0x1b5bb5(0x17b)),
  btnSpinner = actualizarDiv["querySelector"](_0x1b5bb5(0x25f)),
  mensajeActualizacion = actualizarDiv[_0x1b5bb5(0x18c)](_0x1b5bb5(0x259));
async function mostrarProductosConPromociones() {
  const _0x392a35 = _0x1b5bb5,
    _0x5adb1e = await getAllProductos(),
    _0x589630 = [];
  for (const _0x485687 of _0x5adb1e) {
    try {
      const _0x410db0 = await detectarPromocionReal(_0x485687);
      _0x410db0[_0x392a35(0x359)] > 0x0 &&
        _0x589630[_0x392a35(0x311)](_0x485687);
    } catch (_0x28f875) {
      console["warn"](
        _0x392a35(0x317) + _0x485687[_0x392a35(0xe8)] + ":",
        _0x28f875
      );
    }
  }
  if (_0x589630["length"] === 0x0) {
    (resultadoDiv[_0x392a35(0x12a)] =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h5>🏷️\x20No\x20se\x20encontraron\x20productos\x20con\x20promociones</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-0\x22>Puede\x20ser\x20que\x20no\x20haya\x20promociones\x20activas\x20en\x20este\x20momento\x20o\x20que\x20el\x20servicio\x20no\x20esté\x20disponible.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      renderHistorial();
    return;
  }
  const _0x426e19 = [];
  for (const _0x5e02f4 of _0x589630["slice"](0x0, 0x14)) {
    try {
      const _0x7671ef = await detectarPromocionReal(_0x5e02f4),
        _0x4567fb =
          Number(_0x5e02f4[_0x392a35(0x1ad)]) || Number(_0x5e02f4["L1"]) || 0x0,
        _0x4bfe1f = Math[_0x392a35(0x222)](_0x4567fb * 1.16 * 0x64) / 0x64,
        _0x56852c = _0x7671ef["map"]((_0xc68947) => {
          const _0x222b40 = _0x392a35;
          let _0x22943a = "bg-success",
            _0x1d2ca7 =
              _0xc68947[_0x222b40(0x303)] ||
              _0xc68947[_0x222b40(0x205)] ||
              _0x222b40(0x35c);
          if (_0xc68947["tipo"][_0x222b40(0x278)]("precio\x20especial"))
            (_0x22943a = _0x222b40(0x22f)),
              (_0x1d2ca7 = _0x222b40(0x10c) + _0x1d2ca7);
          else
            _0xc68947["es_oficial"] &&
              ((_0x22943a = "bg-warning\x20text-dark"),
              (_0x1d2ca7 = _0x222b40(0x1c8) + _0x1d2ca7));
          return (
            _0x222b40(0x379) +
            _0x22943a +
            _0x222b40(0x324) +
            _0x1d2ca7 +
            _0x222b40(0x2aa)
          );
        })[_0x392a35(0x1b5)]("");
      _0x426e19[_0x392a35(0x311)](
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22\x20style=\x22cursor:pointer;\x22\x20onclick=\x22mostrarProductoPromocion(\x27" +
          _0x5e02f4[_0x392a35(0xe8)] +
          _0x392a35(0x179) +
          _0x5e02f4[_0x392a35(0xdf)] +
          "\x22>" +
          _0x5e02f4[_0x392a35(0xdf)] +
          _0x392a35(0x13b) +
          _0x56852c +
          _0x392a35(0x2fe) +
          _0x4bfe1f[_0x392a35(0x161)](0x2) +
          _0x392a35(0xa2) +
          _0x5e02f4[_0x392a35(0xe8)] +
          _0x392a35(0x33f)
      );
    } catch (_0x36433a) {
      console[_0x392a35(0x377)](
        _0x392a35(0x2e1) + _0x5e02f4[_0x392a35(0xe8)] + ":",
        _0x36433a
      );
    }
  }
  (resultadoDiv[_0x392a35(0x12a)] =
    _0x392a35(0x1ae) +
    _0x589630[_0x392a35(0x359)] +
    _0x392a35(0xfe) +
    _0x426e19["join"]("") +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20" +
    (_0x589630[_0x392a35(0x359)] > 0x14
      ? _0x392a35(0xbe) +
        (_0x589630[_0x392a35(0x359)] - 0x14) +
        "\x20más\x20con\x20promociones.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>"
      : "") +
    _0x392a35(0x2e4)),
    renderHistorial();
}
window[_0x1b5bb5(0x23d)] = async function (_0x3c9875) {
  const _0x19334b = _0x1b5bb5,
    _0x23b8cc = await getAllProductos(),
    _0x22b2ee = _0x23b8cc["find"](
      (_0x4fcda5) =>
        _0x4fcda5["pr_sku"] === _0x3c9875 ||
        _0x4fcda5[_0x19334b(0x308)] === _0x3c9875
    );
  if (_0x22b2ee) {
    mostrarDetalleProducto(_0x22b2ee);
    const _0x54dc34 = {
      ..._0x22b2ee,
      FECHA_ESCANEO: new Date()[_0x19334b(0x271)](),
    };
    historial["unshift"](_0x54dc34),
      setCookie("historial", JSON[_0x19334b(0x328)](historial), 0x1e),
      renderHistorial();
  }
};
const urlBase = "https://verificadorb9-backend.vercel.app/api/productos",
  urlBaseConCodigos =
    "https://verificadorb9-backend.vercel.app/api/productos-con-codigos",
  urlPromociones = _0x1b5bb5(0x37b),
  CONFIG_ENDPOINTS = {
    productosBasicos: urlBase,
    productosConCodigos: urlBaseConCodigos,
    promociones: urlPromociones,
    usarCodigosBarras: !![],
    fallbackTiempo: 0x1388,
  };
function tiempoRelativo(_0xaf7b21) {
  const _0x399340 = _0x1b5bb5;
  if (!_0xaf7b21) return _0x399340(0x18b);
  const _0x5ebb38 = Date["now"](),
    _0x230c07 = Math[_0x399340(0x221)]((_0x5ebb38 - _0xaf7b21) / 0x3e8);
  if (_0x230c07 < 0x3c) return _0x399340(0x132) + _0x230c07 + _0x399340(0x283);
  if (_0x230c07 < 0xe10)
    return (
      _0x399340(0x132) + Math["floor"](_0x230c07 / 0x3c) + _0x399340(0x34e)
    );
  if (_0x230c07 < 0x15180)
    return (
      _0x399340(0x132) +
      Math[_0x399340(0x221)](_0x230c07 / 0xe10) +
      _0x399340(0x348)
    );
  return _0x399340(0x132) + Math["floor"](_0x230c07 / 0x15180) + "\x20días";
}
function renderUltimaActualizacion() {
  const _0x4de2d0 = _0x1b5bb5,
    _0x2708fa = localStorage[_0x4de2d0(0x1bc)](_0x4de2d0(0x2f0)),
    _0x4060a1 = localStorage[_0x4de2d0(0x1bc)](_0x4de2d0(0x12c));
  let _0x215a5d = _0x4de2d0(0x16e);
  if (_0x2708fa && _0x4060a1) {
    const _0x337ca4 = tiempoRelativo(Number(_0x2708fa)),
      _0x2600ce = tiempoRelativo(Number(_0x4060a1)),
      _0x22e883 = Math[_0x4de2d0(0x230)](Number(_0x2708fa) - Number(_0x4060a1));
    _0x22e883 < 0xea60
      ? (_0x215a5d = "Última\x20actualización:\x20" + _0x337ca4)
      : (_0x215a5d =
          _0x4de2d0(0x279) + _0x337ca4 + _0x4de2d0(0xe2) + _0x2600ce);
  } else {
    if (_0x2708fa)
      _0x215a5d =
        _0x4de2d0(0x279) +
        tiempoRelativo(Number(_0x2708fa)) +
        "\x20|\x20Promociones:\x20nunca";
    else
      _0x4060a1 &&
        (_0x215a5d = _0x4de2d0(0x1a8) + tiempoRelativo(Number(_0x4060a1)));
  }
  ultimaActualizacionSpan[_0x4de2d0(0x29b)] = _0x215a5d;
}
function actualizarProgreso(_0x54b260, _0x5e7550, _0x2d0c3b = "") {
  const _0x2d9f02 = _0x1b5bb5,
    _0x211280 = Math["min"](0x64, Math[_0x2d9f02(0x220)](0x0, _0x54b260)),
    _0x4e0ef1 =
      _0x54b260 >= 0x64
        ? _0x2d9f02(0x206)
        : _0x54b260 >= 0x32
        ? _0x2d9f02(0xa9)
        : _0x2d9f02(0x212);
  mensajeActualizacion[_0x2d9f02(0x12a)] =
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-medium\x22>" +
    _0x5e7550 +
    _0x2d9f02(0x2b2) +
    _0x54b260 +
    _0x2d9f02(0x13c) +
    _0x4e0ef1 +
    _0x2d9f02(0x1d7) +
    _0x211280 +
    _0x2d9f02(0x141) +
    _0x54b260 +
    _0x2d9f02(0x20f) +
    (_0x2d0c3b ? _0x2d9f02(0xfb) + _0x2d0c3b + _0x2d9f02(0xee) : "") +
    _0x2d9f02(0x2e4);
}
async function actualizarTodosLosDatos() {
  const _0x1cf0bc = _0x1b5bb5;
  console[_0x1cf0bc(0x1f3)](
    "🚀\x20Iniciando\x20actualización\x20con\x20progreso..."
  ),
    (btnActualizar[_0x1cf0bc(0x36e)] = !![]),
    (btnTexto["textContent"] = _0x1cf0bc(0x243)),
    btnSpinner[_0x1cf0bc(0x2e7)][_0x1cf0bc(0x365)](_0x1cf0bc(0x1aa));
  const _0x3f28d2 = Date[_0x1cf0bc(0xdd)]();
  let _0x3cbfc3 = ![],
    _0x411afe = ![];
  const _0x557a55 = () => {
    const _0x874339 = _0x1cf0bc;
    let _0x357e9b = 0x0,
      _0x373959 = _0x874339(0x2e8),
      _0x4a7aff = "";
    if (!_0x3cbfc3 && !_0x411afe)
      (_0x357e9b = 0xa),
        (_0x373959 = _0x874339(0x24c)),
        (_0x4a7aff = _0x874339(0x36c));
    else {
      if (_0x3cbfc3 && !_0x411afe)
        (_0x357e9b = 0x46),
          (_0x373959 = _0x874339(0x305)),
          (_0x4a7aff = "Cargando\x20promociones");
      else {
        if (!_0x3cbfc3 && _0x411afe)
          (_0x357e9b = 0x46),
            (_0x373959 = _0x874339(0x1c1)),
            (_0x4a7aff = "Procesando\x20productos");
        else {
          _0x357e9b = 0x64;
          const _0x5c0535 = ((Date[_0x874339(0xdd)]() - _0x3f28d2) / 0x3e8)[
            "toFixed"
          ](0x1);
          (_0x373959 = _0x874339(0x369)),
            (_0x4a7aff = _0x874339(0x2ef) + _0x5c0535 + _0x874339(0x283));
        }
      }
    }
    actualizarProgreso(_0x357e9b, _0x373959, _0x4a7aff);
  };
  _0x557a55();
  try {
    await new Promise((_0x1e7fc6) => setTimeout(_0x1e7fc6, 0xc8)),
      actualizarProgreso(0x19, _0x1cf0bc(0x26f), _0x1cf0bc(0x1ce));
    const _0xe298a9 = cargarProductosRapido()[_0x1cf0bc(0x153)]((_0x1463a9) => {
        return (_0x3cbfc3 = !![]), _0x557a55(), _0x1463a9;
      }),
      _0x3d23bd = cargarPromocionesRapido()["then"]((_0x31a138) => {
        return (_0x411afe = !![]), _0x557a55(), _0x31a138;
      });
    setTimeout(() => {
      const _0x26b802 = _0x1cf0bc;
      (!_0x3cbfc3 || !_0x411afe) &&
        actualizarProgreso(0x32, _0x26b802(0x2a3), _0x26b802(0x160));
    }, 0x3e8);
    const [_0x79f648, _0x5bc905] = await Promise[_0x1cf0bc(0x355)]([
        _0xe298a9,
        _0x3d23bd,
      ]),
      _0x503aef = ((Date[_0x1cf0bc(0xdd)]() - _0x3f28d2) / 0x3e8)[
        _0x1cf0bc(0x161)
      ](0x1);
    console["log"](_0x1cf0bc(0x203) + _0x503aef + "s");
    const _0x20880a = _0x79f648[_0x1cf0bc(0x1af)] === "fulfilled",
      _0x26a27a = _0x5bc905["status"] === _0x1cf0bc(0xf8);
    if (_0x20880a && _0x26a27a) {
      const _0x29a7e8 = _0x79f648[_0x1cf0bc(0xd6)]?.[_0x1cf0bc(0xf3)] || 0x0,
        _0x3395d2 = _0x5bc905[_0x1cf0bc(0xd6)]?.["promociones"] || 0x0,
        _0x33bfc0 = _0x79f648[_0x1cf0bc(0xd6)]?.[_0x1cf0bc(0x1a2)] || "",
        _0x45eac4 = _0x5bc905["value"]?.["detalles"] || "";
      actualizarProgreso(
        0x64,
        _0x1cf0bc(0x117),
        _0x29a7e8 +
          _0x1cf0bc(0x2ce) +
          _0x33bfc0 +
          "),\x20" +
          _0x3395d2 +
          "\x20promociones\x20(" +
          _0x45eac4 +
          _0x1cf0bc(0xc0) +
          _0x503aef +
          "s"
      );
    } else
      _0x20880a || _0x26a27a
        ? actualizarProgreso(
            0x4b,
            "⚠️\x20Consulta\x20parcial\x20de\x20endpoints",
            "Algunos\x20endpoints\x20fallaron\x20(" + _0x503aef + "s)"
          )
        : actualizarProgreso(
            0x19,
            _0x1cf0bc(0x1ab),
            _0x1cf0bc(0x37c) + _0x503aef + "s)"
          );
    _0x79f648[_0x1cf0bc(0x1af)] === _0x1cf0bc(0x245) &&
      console["error"](_0x1cf0bc(0x146), _0x79f648[_0x1cf0bc(0x2df)]),
      _0x5bc905[_0x1cf0bc(0x1af)] === _0x1cf0bc(0x245) &&
        console[_0x1cf0bc(0x12e)](
          _0x1cf0bc(0x267),
          _0x5bc905[_0x1cf0bc(0x2df)]
        );
  } catch (_0x21b1b0) {
    console["error"](_0x1cf0bc(0x2b6), _0x21b1b0),
      actualizarProgreso(
        0x0,
        "❌\x20Error\x20de\x20conexión",
        _0x1cf0bc(0x2cc)
      );
  } finally {
    (btnActualizar[_0x1cf0bc(0x36e)] = ![]),
      (btnTexto[_0x1cf0bc(0x29b)] = _0x1cf0bc(0xf1)),
      btnSpinner[_0x1cf0bc(0x2e7)]["add"]("d-none"),
      setTimeout(() => {
        (mensajeActualizacion["textContent"] = ""), renderUltimaActualizacion();
      }, 0xfa0);
  }
}
async function cargarProductosRapido() {
  const _0x5b49db = _0x1b5bb5,
    _0x5bf5c0 = Date[_0x5b49db(0xdd)]();
  if (!navigator[_0x5b49db(0x195)]) throw new Error(_0x5b49db(0xc6));
  let _0x163273 = [],
    _0x5498b8 = [];
  console[_0x5b49db(0x1f3)](_0x5b49db(0x307));
  if (CONFIG_ENDPOINTS["usarCodigosBarras"])
    try {
      const _0x9d94f1 =
        CONFIG_ENDPOINTS["productosConCodigos"] + "?t=" + _0x5bf5c0;
      console[_0x5b49db(0x1f3)](_0x5b49db(0x1cb));
      const _0x1d1266 = await Promise[_0x5b49db(0x208)]([
        fetch(_0x9d94f1, {
          cache: "no-store",
          mode: _0x5b49db(0x2be),
          headers: {
            Accept: _0x5b49db(0x108),
            "Content-Type": _0x5b49db(0x108),
          },
        }),
        new Promise((_0x4d3fc7, _0x43bc7d) =>
          setTimeout(
            () => _0x43bc7d(new Error(_0x5b49db(0x105))),
            CONFIG_ENDPOINTS["fallbackTiempo"]
          )
        ),
      ]);
      if (_0x1d1266["ok"]) {
        const _0xee989e = await _0x1d1266[_0x5b49db(0x193)]();
        _0xee989e[_0x5b49db(0x206)] && _0xee989e[_0x5b49db(0xf3)]
          ? ((_0x163273 = _0xee989e[_0x5b49db(0xf3)]),
            _0x5498b8[_0x5b49db(0x311)](_0x5b49db(0x28c)),
            console["log"](
              "✅\x20Productos\x20cargados\x20con\x20códigos\x20de\x20barras:",
              _0xee989e["productos"][_0x5b49db(0x359)]
            ))
          : _0x5498b8["push"](_0x5b49db(0x2bd));
      } else
        _0x5498b8["push"](_0x5b49db(0x375) + _0x1d1266[_0x5b49db(0x1af)] + ")");
    } catch (_0x47ae27) {
      console[_0x5b49db(0x377)](_0x5b49db(0x17e), _0x47ae27[_0x5b49db(0x254)]),
        _0x47ae27[_0x5b49db(0x254)][_0x5b49db(0x278)]("CORS") ||
        _0x47ae27[_0x5b49db(0x254)][_0x5b49db(0x278)](_0x5b49db(0x20b))
          ? (_0x5498b8[_0x5b49db(0x311)](
              "códigos\x20de\x20barras\x20❌\x20(CORS/Red)"
            ),
            console[_0x5b49db(0x1f3)](_0x5b49db(0x1ca)))
          : _0x5498b8[_0x5b49db(0x311)](_0x5b49db(0x192));
    }
  try {
    const _0x37eafd =
      CONFIG_ENDPOINTS[_0x5b49db(0x295)] + _0x5b49db(0x127) + _0x5bf5c0;
    console[_0x5b49db(0x1f3)](_0x5b49db(0x147));
    const _0x5136f5 = await fetch(_0x37eafd, { cache: "no-store" });
    if (_0x5136f5["ok"]) {
      const _0x38dfc4 = await _0x5136f5[_0x5b49db(0x193)](),
        _0x278611 = Array[_0x5b49db(0x116)](_0x38dfc4) ? _0x38dfc4 : [];
      _0x163273[_0x5b49db(0x359)] === 0x0 &&
        _0x278611[_0x5b49db(0x359)] > 0x0 &&
        (_0x163273 = _0x278611),
        _0x5498b8[_0x5b49db(0x311)](_0x5b49db(0x15d)),
        console["log"](_0x5b49db(0x26a), _0x278611["length"], _0x5b49db(0xf3));
    } else _0x5498b8[_0x5b49db(0x311)](_0x5b49db(0x2c4));
  } catch (_0x426da1) {
    console["warn"](_0x5b49db(0x201), _0x426da1[_0x5b49db(0x254)]),
      _0x5498b8[_0x5b49db(0x311)](_0x5b49db(0x213));
  }
  if (_0x163273["length"] === 0x0) throw new Error(_0x5b49db(0x28a));
  return (
    await clearProductos(),
    await saveProductos(_0x163273),
    localStorage[_0x5b49db(0x358)](_0x5b49db(0x2f0), String(_0x5bf5c0)),
    console[_0x5b49db(0x1f3)](
      _0x5b49db(0xe7),
      _0x5498b8[_0x5b49db(0x1b5)](",\x20")
    ),
    {
      productos: _0x163273[_0x5b49db(0x359)],
      endpoints: _0x5498b8,
      detalles: _0x5498b8["length"] + _0x5b49db(0xa7),
    }
  );
}
async function cargarPromocionesRapido() {
  const _0x862803 = _0x1b5bb5;
  console["log"](_0x862803(0x2a0));
  const _0x172529 = await fetch(CONFIG_ENDPOINTS[_0x862803(0x29d)], {
    cache: _0x862803(0x113),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
  if (!_0x172529["ok"]) throw new Error(_0x862803(0x10f) + _0x172529["status"]);
  const _0x1b3f1d = await _0x172529[_0x862803(0x193)]();
  if (
    _0x1b3f1d[_0x862803(0x206)] &&
    _0x1b3f1d[_0x862803(0x36f)] &&
    _0x1b3f1d[_0x862803(0x36f)][_0x862803(0x29d)]
  ) {
    const _0x24ae92 = _0x1b3f1d[_0x862803(0x36f)]["promociones"];
    console[_0x862803(0x1f3)](
      _0x862803(0x165) + _0x24ae92["length"] + _0x862803(0x314)
    );
    try {
      await clearPromociones(), await savePromociones(_0x24ae92);
      const _0x39fbe0 = Date[_0x862803(0xdd)]();
      localStorage["setItem"]("promociones_ts", String(_0x39fbe0)),
        console[_0x862803(0x1f3)](_0x862803(0x10b));
    } catch (_0x4ec3c7) {
      console["error"](_0x862803(0x2a6), _0x4ec3c7);
    }
    return {
      promociones: _0x24ae92[_0x862803(0x359)],
      detalles: "promociones\x20✅",
    };
  } else throw new Error(_0x862803(0x196));
}
btnActualizar[_0x1b5bb5(0x342)](_0x1b5bb5(0x373), actualizarTodosLosDatos),
  btnPromociones[_0x1b5bb5(0x342)](
    _0x1b5bb5(0x373),
    mostrarModalPromocionesGenerales
  ),
  renderUltimaActualizacion(),
  setInterval(renderUltimaActualizacion, 0xea60),
  openDB()["then"](async (_0x4a3855) => {
    const _0x539614 = _0x1b5bb5,
      _0x2e2930 = _0x4a3855["transaction"](DB_STORE, _0x539614(0x15a)),
      _0x2c185c = _0x2e2930["objectStore"](DB_STORE),
      _0x3e661b = _0x2c185c[_0x539614(0x32e)](),
      _0x805d72 = _0x4a3855[_0x539614(0x2e9)](
        DB_STORE_PROMOCIONES,
        _0x539614(0x15a)
      ),
      _0x26966e = _0x805d72["objectStore"](DB_STORE_PROMOCIONES),
      _0x362001 = _0x26966e[_0x539614(0x32e)]();
    Promise[_0x539614(0x2e5)]([
      new Promise((_0x91f31b) => {
        const _0x3da1d8 = _0x539614;
        _0x3e661b[_0x3da1d8(0x2dc)] = () => _0x91f31b(_0x3e661b["result"]);
      }),
      new Promise((_0x1cab1f) => {
        const _0x44b4e0 = _0x539614;
        _0x362001[_0x44b4e0(0x2dc)] = () =>
          _0x1cab1f(_0x362001[_0x44b4e0(0x228)]);
      }),
    ])
      [_0x539614(0x153)](([_0x398950, _0x13d2e6]) => {
        const _0x2fe63f = _0x539614,
          _0x4bfd55 = _0x398950 > 0x0,
          _0xaf6c93 = _0x13d2e6 > 0x0;
        if (!_0x4bfd55 && !_0xaf6c93)
          console[_0x2fe63f(0x1f3)](_0x2fe63f(0x119)),
            actualizarTodosLosDatos();
        else {
          if (!_0x4bfd55)
            console[_0x2fe63f(0x1f3)](_0x2fe63f(0x34a)),
              actualizarTodosLosDatos();
          else
            !_0xaf6c93 && !datosYaCargados
              ? (console[_0x2fe63f(0x1f3)](_0x2fe63f(0xed)),
                cargarPromocionesRapido())
              : console[_0x2fe63f(0x1f3)](
                  _0x2fe63f(0x2fb),
                  _0x398950,
                  _0x2fe63f(0x1fb),
                  _0x13d2e6
                );
        }
        datosYaCargados = !![];
      })
      [_0x539614(0xd7)]((_0x5bfb45) => {
        const _0x25e5e8 = _0x539614;
        console["error"](_0x25e5e8(0x150), _0x5bfb45),
          actualizarTodosLosDatos(),
          (datosYaCargados = !![]);
      });
  });
let historial = [];
const historialCookie = getCookie(_0x1b5bb5(0x167));
if (historialCookie)
  try {
    historial = JSON[_0x1b5bb5(0x2c5)](historialCookie);
  } catch (_0x4fee15) {
    historial = [];
  }
function renderClearButton() {
  const _0x47d6c0 = _0x1b5bb5;
  return _0x47d6c0(0xe5);
}
function renderHistorial() {
  const _0x26eafc = _0x1b5bb5;
  (historialDiv[_0x26eafc(0x12a)] =
    _0x26eafc(0x1e6) +
    (historial[_0x26eafc(0x359)] > 0x0 ? renderClearButton() : "") +
    _0x26eafc(0x35d) +
    (historial[_0x26eafc(0x359)] === 0x0
      ? _0x26eafc(0x349)
      : _0x26eafc(0x158) +
        historial[_0x26eafc(0x22e)]((_0x3c690d) => {
          const _0x2456b8 = _0x26eafc,
            _0x5bdf3b =
              _0x3c690d[_0x2456b8(0xdf)] ||
              _0x3c690d[_0x2456b8(0x27e)] ||
              "Producto\x20desconocido",
            _0x32697b =
              _0x3c690d[_0x2456b8(0xe8)] ||
              _0x3c690d["pr_gtin"] ||
              _0x3c690d[_0x2456b8(0x2d8)] ||
              _0x3c690d[_0x2456b8(0xe3)] ||
              _0x2456b8(0xf9),
            _0x102dce =
              _0x3c690d[_0x2456b8(0x1ad)] ||
              _0x3c690d["L1"] ||
              _0x3c690d[_0x2456b8(0x159)] ||
              0x0,
            _0x3768c6 = Math[_0x2456b8(0x222)](_0x102dce * 1.16 * 0x64) / 0x64,
            _0x569ee1 = _0x3c690d[_0x2456b8(0x1f6)]
              ? new Date(_0x3c690d[_0x2456b8(0x1f6)])[_0x2456b8(0x2e3)]()
              : _0x2456b8(0xf0);
          return (
            _0x2456b8(0x231) +
            _0x5bdf3b +
            _0x2456b8(0x16d) +
            _0x5bdf3b +
            _0x2456b8(0x2dd) +
            _0x32697b +
            _0x2456b8(0x136) +
            _0x32697b +
            "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Precio:\x20$" +
            _0x3768c6[_0x2456b8(0x161)](0x2) +
            _0x2456b8(0x23a) +
            _0x569ee1 +
            _0x2456b8(0x265) +
            _0x32697b +
            _0x2456b8(0x34f)
          );
        })[_0x26eafc(0x1b5)]("") +
        _0x26eafc(0x2ed)) +
    _0x26eafc(0x168)),
    setCookie(_0x26eafc(0x167), JSON["stringify"](historial), 0x1e);
  const _0x1b399e = document["getElementById"](_0x26eafc(0x1da));
  _0x1b399e &&
    _0x1b399e[_0x26eafc(0x342)](_0x26eafc(0x373), () => {
      const _0x178278 = _0x26eafc;
      (historial = []),
        setCookie(_0x178278(0x167), JSON[_0x178278(0x328)](historial), 0x1e),
        renderHistorial();
    });
  const _0x35841f = historialDiv[_0x26eafc(0x2f2)](".copiar-btn");
  _0x35841f[_0x26eafc(0x248)]((_0x5efa01) => {
    const _0x6ed0e6 = _0x26eafc;
    _0x5efa01[_0x6ed0e6(0x342)](_0x6ed0e6(0x373), function (_0x1207d1) {
      const _0x419591 = _0x6ed0e6,
        _0x1eedc4 = _0x5efa01[_0x419591(0x329)](_0x419591(0xf5));
      navigator[_0x419591(0x1a1)] &&
        navigator[_0x419591(0x1a1)]
          ["writeText"](_0x1eedc4)
          [_0x419591(0x153)](() => {
            const _0x3beb92 = _0x419591;
            (_0x5efa01[_0x3beb92(0x12a)] = _0x3beb92(0x15e)),
              setTimeout(() => {
                const _0x154cc6 = _0x3beb92;
                _0x5efa01[_0x154cc6(0x12a)] =
                  "<i\x20class=\x22bi\x20bi-clipboard\x22></i>";
              }, 0x4b0);
          });
    });
  });
  const _0x936ec5 = historialDiv[_0x26eafc(0x2f2)](_0x26eafc(0x2a4));
  _0x936ec5[_0x26eafc(0x248)]((_0x4833a9) => {
    const _0x10ce6d = _0x26eafc;
    _0x4833a9[_0x10ce6d(0x342)]("click", function (_0x506247) {
      const _0x4d3e92 = _0x10ce6d,
        _0x3b05d6 = _0x4833a9[_0x4d3e92(0x329)](_0x4d3e92(0x334));
      consultarProductoDesdeHistorial(_0x3b05d6);
    });
  });
}
inputCodigo[_0x1b5bb5(0x342)]("keydown", function (_0x24c119) {
  const _0x19171f = _0x1b5bb5;
  _0x24c119[_0x19171f(0x2d7)] === _0x19171f(0xd0) &&
    (_0x24c119["preventDefault"](),
    form[_0x19171f(0x19e)](),
    setTimeout(() => {
      const _0x3533de = _0x19171f,
        _0x398c5e = document[_0x3533de(0x185)](_0x3533de(0x2c3));
      _0x398c5e &&
        _0x398c5e[_0x3533de(0x18a)]({
          behavior: _0x3533de(0x2a2),
          block: "start",
          inline: _0x3533de(0x1f7),
        });
    }, 0x12c));
}),
  form["addEventListener"](_0x1b5bb5(0x301), async (_0x4d8994) => {
    const _0x29d33d = _0x1b5bb5;
    _0x4d8994["preventDefault"]();
    let _0x46d520 = inputCodigo[_0x29d33d(0xd6)]
      [_0x29d33d(0x219)]()
      [_0x29d33d(0x18e)](/\s+$/, "");
    (inputCodigo["value"] = _0x46d520),
      (resultadoDiv["innerHTML"] = ""),
      setTimeout(() => {
        const _0x54f94b = _0x29d33d,
          _0x514c7b = document[_0x54f94b(0x185)](_0x54f94b(0x2c3));
        _0x514c7b &&
          _0x514c7b[_0x54f94b(0x18a)]({
            behavior: _0x54f94b(0x2a2),
            block: "start",
            inline: "nearest",
          });
      }, 0x64),
      (sugerenciasDiv[_0x29d33d(0x12a)] = ""),
      (sugerenciasDiv["style"][_0x29d33d(0x34c)] = "none");
    if (!_0x46d520) {
      (resultadoDiv[_0x29d33d(0x12a)] = _0x29d33d(0x223)),
        renderHistorial(),
        inputCodigo[_0x29d33d(0x9b)]();
      return;
    }
    (inputCodigo[_0x29d33d(0x2fc)] = ""),
      (resultadoDiv[_0x29d33d(0x12a)] = _0x29d33d(0x277));
    let _0x5dbf9f = await getAllProductos(),
      _0xb4049 = _0x5dbf9f["find"]((_0x312c28) => {
        const _0x3bce02 = _0x29d33d;
        if (
          String(_0x312c28[_0x3bce02(0xe8)]) === _0x46d520 ||
          String(_0x312c28[_0x3bce02(0x308)]) === _0x46d520
        )
          return !![];
        if (
          _0x312c28[_0x3bce02(0x232)] &&
          Array[_0x3bce02(0x116)](_0x312c28[_0x3bce02(0x232)])
        )
          return _0x312c28[_0x3bce02(0x232)][_0x3bce02(0x106)](
            (_0x2b0b57) => String(_0x2b0b57) === _0x46d520
          );
        return ![];
      });
    if (_0xb4049) {
      mostrarDetalleProducto(_0xb4049);
      const _0x4477fb = {
        ..._0xb4049,
        FECHA_ESCANEO: new Date()[_0x29d33d(0x271)](),
      };
      historial[_0x29d33d(0x2bc)](_0x4477fb),
        setCookie(_0x29d33d(0x167), JSON[_0x29d33d(0x328)](historial), 0x1e),
        (inputCodigo[_0x29d33d(0xd6)] = ""),
        inputCodigo[_0x29d33d(0x9b)](),
        _0xb4049[_0x29d33d(0x232)] &&
          _0xb4049[_0x29d33d(0x232)]["length"] > 0x1 &&
          console[_0x29d33d(0x1f3)](_0x29d33d(0x268), {
            sku: _0xb4049[_0x29d33d(0xe8)],
            gtin_principal: _0xb4049["pr_gtin"],
            codigo_buscado: _0x46d520,
            todos_los_codigos: _0xb4049[_0x29d33d(0x232)],
          });
    } else
      (resultadoDiv["innerHTML"] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontró\x20el\x20código\x20ingresado</div>"),
        (inputCodigo[_0x29d33d(0xd6)] = ""),
        inputCodigo[_0x29d33d(0x9b)](),
        setTimeout(() => {
          resultadoDiv["innerHTML"] = "";
        }, 0x1388),
        console[_0x29d33d(0x1f3)](_0x29d33d(0x218) + _0x46d520 + "\x22");
    renderHistorial();
  });
async function detectarPromocionReal(_0x5be0aa) {
  const _0xb1172d = _0x1b5bb5,
    _0x2ebbdc = (_0x5be0aa[_0xb1172d(0xe8)] || "")[_0xb1172d(0x33c)]();
  try {
    let _0xd7cd4 = await getAllPromociones();
    if (_0xd7cd4["length"] === 0x0) {
      console[_0xb1172d(0x1f3)](_0xb1172d(0x246));
      const _0x3cfaf1 = await fetch(_0xb1172d(0x155));
      if (!_0x3cfaf1["ok"])
        return (
          console[_0xb1172d(0x1f3)](
            "Error\x20al\x20obtener\x20promociones\x20mejoradas:",
            _0x3cfaf1["status"]
          ),
          []
        );
      const _0x221750 = await _0x3cfaf1[_0xb1172d(0x193)]();
      if (
        _0x221750[_0xb1172d(0x1af)] === "SUCCESS" &&
        _0x221750[_0xb1172d(0x21b)]
      )
        _0xd7cd4 = _0x221750[_0xb1172d(0x21b)];
      else {
        if (Array["isArray"](_0x221750)) _0xd7cd4 = _0x221750;
        else return console["log"](_0xb1172d(0xef)), [];
      }
      try {
        await clearPromociones(),
          await savePromociones(_0xd7cd4),
          localStorage["setItem"](
            _0xb1172d(0x12c),
            String(Date[_0xb1172d(0xdd)]())
          ),
          console[_0xb1172d(0x1f3)](_0xb1172d(0x32f));
      } catch (_0x11240d) {
        console[_0xb1172d(0x377)](
          "⚠️\x20Error\x20guardando\x20promociones:",
          _0x11240d
        );
      }
    } else console["log"](_0xb1172d(0x30f), _0xd7cd4[_0xb1172d(0x359)]);
    console[_0xb1172d(0x1f3)](_0xb1172d(0x9d), _0x2ebbdc);
    const _0x5a9f91 = [];
    for (const _0x3f41f4 of _0xd7cd4) {
      let _0x116220 = [];
      if (
        _0x3f41f4["skus"] &&
        Array[_0xb1172d(0x116)](_0x3f41f4[_0xb1172d(0x1be)])
      )
        _0x116220 = _0x3f41f4[_0xb1172d(0x1be)];
      else
        _0x3f41f4["pro_grupoProductos_primaria"] &&
          _0x3f41f4[_0xb1172d(0x33d)][_0xb1172d(0xe8)] &&
          (Array[_0xb1172d(0x116)](
            _0x3f41f4["pro_grupoProductos_primaria"]["pr_sku"]
          )
            ? (_0x116220 = _0x3f41f4[_0xb1172d(0x33d)]["pr_sku"])
            : (_0x116220 = _0x3f41f4[_0xb1172d(0x33d)][_0xb1172d(0xe8)]
                ["split"]("\x20")
                [_0xb1172d(0x17f)]((_0x524796) =>
                  _0x524796[_0xb1172d(0x219)]()
                )));
      if (_0x116220[_0xb1172d(0x278)](_0x2ebbdc)) {
        const _0x1085c5 =
            _0x3f41f4["pro_nombrePromo"] ||
            _0x3f41f4["descripcion"] ||
            _0x3f41f4[_0xb1172d(0x291)] ||
            "Promoción\x20especial",
          _0x194301 =
            _0x3f41f4[_0xb1172d(0x356)] ||
            _0x3f41f4["cantidad"] ||
            _0x3f41f4[_0xb1172d(0x24d)] ||
            "",
          _0x27c49b =
            _0x3f41f4[_0xb1172d(0x27f)] ||
            _0x3f41f4[_0xb1172d(0x2b9)] ||
            _0x3f41f4["price"] ||
            _0x3f41f4[_0xb1172d(0x19c)] ||
            _0x3f41f4[_0xb1172d(0x1f5)] ||
            _0x3f41f4["pro_precio_total"] ||
            _0x3f41f4[_0xb1172d(0x2b7)] ||
            _0x3f41f4[_0xb1172d(0xfa)] ||
            "";
        console[_0xb1172d(0x1f3)](
          "🎯\x20PROMOCIÓN\x20ENCONTRADA\x20para\x20SKU\x20" + _0x2ebbdc + ":",
          {
            nombre: _0x1085c5,
            cantidad: _0x194301,
            precio: _0x27c49b,
            campos_precio_disponibles: {
              pro_precioPromo: _0x3f41f4[_0xb1172d(0x27f)],
              precio: _0x3f41f4["precio"],
              price: _0x3f41f4["price"],
              precioTotal: _0x3f41f4["precioTotal"],
              precio_total: _0x3f41f4[_0xb1172d(0x1f5)],
              pro_precio_total: _0x3f41f4[_0xb1172d(0x194)],
              total_price: _0x3f41f4[_0xb1172d(0x2b7)],
              valor_total: _0x3f41f4[_0xb1172d(0xfa)],
            },
            campos_disponibles: Object[_0xb1172d(0x101)](_0x3f41f4),
            promo_completa: _0x3f41f4,
          }
        ),
          _0x5a9f91[_0xb1172d(0x311)]({
            tipo: "promoción\x20oficial",
            detalle: _0xb1172d(0x10c) + _0x1085c5,
            nombre_promocion: _0x1085c5,
            es_oficial: !![],
            fuente: _0xb1172d(0x35e),
            id_promocion: _0x3f41f4[_0xb1172d(0x1b8)] || _0x3f41f4["id"],
            cantidad: _0x194301,
            precio: _0x27c49b,
            mensaje:
              _0x3f41f4[_0xb1172d(0xcf)] || _0x3f41f4[_0xb1172d(0x304)] || "",
            tipo_promo:
              _0x3f41f4[_0xb1172d(0x118)] || _0x3f41f4[_0xb1172d(0x15c)] || "",
            vigencia:
              _0x3f41f4[_0xb1172d(0x1a6)] && _0x3f41f4["validTo"]
                ? _0x3f41f4[_0xb1172d(0x1a6)] +
                  _0xb1172d(0x93) +
                  _0x3f41f4[_0xb1172d(0x343)]
                : "",
            raw_data: {
              pro_cantidad_base: _0x3f41f4["pro_cantidad_base"],
              pro_precioPromo: _0x3f41f4[_0xb1172d(0x27f)],
              pro_nombrePromo: _0x3f41f4[_0xb1172d(0xf7)],
              todos_campos_precio: {
                pro_precioPromo: _0x3f41f4[_0xb1172d(0x27f)],
                precio: _0x3f41f4[_0xb1172d(0x2b9)],
                price: _0x3f41f4[_0xb1172d(0xd1)],
                precioTotal: _0x3f41f4[_0xb1172d(0x19c)],
                precio_total: _0x3f41f4[_0xb1172d(0x1f5)],
                pro_precio_total: _0x3f41f4[_0xb1172d(0x194)],
                total_price: _0x3f41f4[_0xb1172d(0x2b7)],
                valor_total: _0x3f41f4["valor_total"],
              },
            },
          });
      }
    }
    return (
      _0x5a9f91["length"] === 0x0
        ? console[_0xb1172d(0x1f3)](_0xb1172d(0x315) + _0x2ebbdc)
        : console[_0xb1172d(0x1f3)](
            "✅\x20" +
              _0x5a9f91[_0xb1172d(0x359)] +
              "\x20promocion(es)\x20encontrada(s)\x20para\x20SKU:\x20" +
              _0x2ebbdc
          ),
      _0x5a9f91
    );
  } catch (_0x25ecec) {
    return console[_0xb1172d(0x12e)](_0xb1172d(0x11d), _0x25ecec), [];
  }
}
function mostrarDetalleProducto(_0x4ad413) {
  const _0x25739d = _0x1b5bb5;
  let _0x30841f = "";
  if (
    _0x4ad413[_0x25739d(0xb4)] &&
    _0x4ad413[_0x25739d(0xb4)][_0x25739d(0x219)]() !== ""
  ) {
    if (_0x4ad413[_0x25739d(0xb4)][_0x25739d(0x270)](_0x25739d(0x21e)))
      _0x30841f = _0x4ad413[_0x25739d(0xb4)];
    else {
      let _0x964f38 = _0x4ad413["pr_imagen"]["startsWith"]("/")
        ? _0x4ad413["pr_imagen"]
        : "/" + _0x4ad413[_0x25739d(0xb4)];
      _0x30841f = _0x25739d(0x2f6) + _0x964f38;
    }
  }
  let _0x42a4f1 =
      Number(_0x4ad413[_0x25739d(0x1ad)]) || Number(_0x4ad413["L1"]) || 0x0,
    _0x55681b = Math["round"](_0x42a4f1 * 1.16 * 0x64) / 0x64,
    _0x54f1c9 = 0xc,
    _0x5aaa92 = 0.1,
    _0x5e44d8 =
      Math[_0x25739d(0x222)](_0x55681b * (0x1 + _0x5aaa92) * 0x64) / 0x64,
    _0x556e85 = "";
  if (
    _0x4ad413["codigos_barras"] &&
    _0x4ad413["codigos_barras"][_0x25739d(0x359)] > 0x1
  ) {
    const _0x8a6535 = [...new Set(_0x4ad413["codigos_barras"])][
      _0x25739d(0x17f)
    ]((_0x5bc7f3) => _0x5bc7f3 && _0x5bc7f3[_0x25739d(0x219)]());
    _0x8a6535[_0x25739d(0x359)] > 0x1 &&
      (_0x556e85 =
        _0x25739d(0xb9) +
        _0x8a6535["join"](",\x20") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20");
  }
  renderProductoConPromociones(
    _0x4ad413,
    _0x30841f,
    _0x55681b,
    _0x5e44d8,
    _0x556e85
  ),
    setTimeout(() => {
      generarCodigoBarras(_0x4ad413);
    }, 0x64),
    detectarPromocionReal(_0x4ad413)
      [_0x25739d(0x153)]((_0x1c4e8a) => {
        actualizarPromocionesEnVista(
          _0x4ad413,
          _0x30841f,
          _0x55681b,
          _0x5e44d8,
          _0x556e85,
          _0x1c4e8a
        );
      })
      [_0x25739d(0xd7)]((_0x2c1b42) => {
        const _0x648111 = _0x25739d;
        console[_0x648111(0x12e)](_0x648111(0xca), _0x2c1b42),
          actualizarPromocionesEnVista(
            _0x4ad413,
            _0x30841f,
            _0x55681b,
            _0x5e44d8,
            _0x556e85,
            []
          );
      });
}
function generarCodigoBarras(_0x395a36) {
  const _0x4b1520 = _0x1b5bb5,
    _0x235259 = _0x395a36[_0x4b1520(0xe8)] || _0x395a36[_0x4b1520(0x308)] || "",
    _0x4c1421 = "barcode-" + _0x395a36["pr_sku"],
    _0x15e006 = document["getElementById"](_0x4c1421);
  if (!_0x15e006 || !_0x235259) {
    console[_0x4b1520(0x377)](_0x4b1520(0x1e1));
    return;
  }
  const _0x573f1f = () => {
    const _0x5d26e6 = _0x4b1520;
    if (window[_0x5d26e6(0x376)])
      try {
        let _0x37ce3a = _0x5d26e6(0x189);
        const _0x1097c9 = String(_0x235259);
        if (_0x1097c9[_0x5d26e6(0x359)] === 0xd && /^\d+$/["test"](_0x1097c9))
          _0x37ce3a = "EAN13";
        else {
          if (
            _0x1097c9[_0x5d26e6(0x359)] === 0x8 &&
            /^\d+$/[_0x5d26e6(0xdc)](_0x1097c9)
          )
            _0x37ce3a = _0x5d26e6(0x24f);
          else
            _0x1097c9[_0x5d26e6(0x359)] === 0xc &&
              /^\d+$/[_0x5d26e6(0xdc)](_0x1097c9) &&
              (_0x37ce3a = "UPC");
        }
        console[_0x5d26e6(0x1f3)](
          _0x5d26e6(0x285) + _0x37ce3a + _0x5d26e6(0x1fa) + _0x1097c9
        ),
          JsBarcode(_0x15e006, _0x1097c9, {
            format: _0x37ce3a,
            width: 0x2,
            height: 0x32,
            displayValue: ![],
            margin: 0x0,
            background: _0x5d26e6(0x273),
            lineColor: _0x5d26e6(0x124),
          }),
          window[_0x5d26e6(0x300)] <= 0x300 &&
            JsBarcode(_0x15e006, _0x1097c9, {
              format: _0x37ce3a,
              width: 1.5,
              height: 0x28,
              displayValue: ![],
              margin: 0x0,
              background: _0x5d26e6(0x273),
              lineColor: _0x5d26e6(0x124),
            });
      } catch (_0x1d5ea6) {
        console["error"](
          "Error\x20generando\x20código\x20de\x20barras:",
          _0x1d5ea6
        );
        const _0x55a2c8 = _0x15e006[_0x5d26e6(0x331)]("2d");
        (_0x55a2c8[_0x5d26e6(0xd8)] = _0x5d26e6(0x234)),
          _0x55a2c8[_0x5d26e6(0x162)](
            0x0,
            0x0,
            _0x15e006["width"],
            _0x15e006[_0x5d26e6(0x188)]
          ),
          (_0x55a2c8[_0x5d26e6(0xd8)] = _0x5d26e6(0x309)),
          (_0x55a2c8["font"] = "12px\x20Arial"),
          (_0x55a2c8["textAlign"] = _0x5d26e6(0x2c8)),
          _0x55a2c8[_0x5d26e6(0x24a)](
            _0x5d26e6(0xf4),
            _0x15e006[_0x5d26e6(0xfc)] / 0x2,
            _0x15e006[_0x5d26e6(0x188)] / 0x2
          );
      }
    else setTimeout(_0x573f1f, 0x64);
  };
  _0x573f1f();
}
function renderProductoConPromociones(
  _0x4fcf0a,
  _0x2b414b,
  _0x58ac1f,
  _0x54e8bb,
  _0x1412e1
) {
  const _0x1fbbfe = _0x1b5bb5;
  resultadoDiv[_0x1fbbfe(0x12a)] =
    _0x1fbbfe(0x1f2) +
    (_0x2b414b
      ? _0x1fbbfe(0x21a) +
        _0x2b414b +
        "\x22\x20alt=\x22" +
        _0x4fcf0a[_0x1fbbfe(0xdf)] +
        _0x1fbbfe(0x284)
      : "") +
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-8\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20nombre-producto-responsive\x22\x20style=\x22color:#616161;\x22>" +
    _0x4fcf0a[_0x1fbbfe(0xdf)] +
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-center\x20align-items-center\x20gap-3\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-danger\x20precio-responsive\x22>$\x20" +
    _0x58ac1f["toFixed"](0x2) +
    _0x1fbbfe(0x186) +
    _0x54e8bb[_0x1fbbfe(0x161)](0x2) +
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>MSI</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Código\x20de\x20barras\x20funcional\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22barcode-" +
    _0x4fcf0a[_0x1fbbfe(0xe8)] +
    _0x1fbbfe(0xa4) +
    (_0x4fcf0a["pr_sku"] || _0x4fcf0a[_0x1fbbfe(0x308)] || _0x1fbbfe(0xa5)) +
    _0x1fbbfe(0x103) +
    _0x1412e1 +
    _0x1fbbfe(0x1b4);
}
function actualizarPromocionesEnVista(
  _0x517d2a,
  _0x28b32a,
  _0x567fe5,
  _0x1dddbc,
  _0x1753ab,
  _0x457347
) {
  const _0x3f7afd = _0x1b5bb5;
  console[_0x3f7afd(0x1f3)](
    "🔍\x20Actualizando\x20promociones\x20en\x20vista:",
    _0x457347
  );
  let _0x35dd8b = "";
  if (_0x457347[_0x3f7afd(0x359)] > 0x0) {
    const _0x1ff91f = _0x457347[_0x3f7afd(0x17f)](
      (_0x55cc8c) =>
        _0x55cc8c[_0x3f7afd(0x2b0)] &&
        (_0x55cc8c[_0x3f7afd(0x24b)] === _0x3f7afd(0xd4) ||
          _0x55cc8c["fuente"] === _0x3f7afd(0x35e))
    );
    console["log"](_0x3f7afd(0x320), _0x1ff91f);
    if (_0x1ff91f[_0x3f7afd(0x359)] > 0x0) {
      const _0x100dd9 = _0x1ff91f[_0x3f7afd(0x22e)]((_0x53a620) => {
        const _0x3a230e = _0x3f7afd;
        console[_0x3a230e(0x1f3)](
          "🔍\x20Datos\x20de\x20promoción\x20recibidos:",
          _0x53a620
        );
        const _0x13fc98 =
          _0x53a620[_0x3a230e(0x131)] || _0x53a620[_0x3a230e(0x356)] || "";
        let _0x28047c =
          _0x53a620[_0x3a230e(0x2b9)] || _0x53a620[_0x3a230e(0x27f)] || "";
        const _0x4518f4 =
          _0x53a620[_0x3a230e(0x205)] || _0x53a620[_0x3a230e(0xf7)] || "";
        console[_0x3a230e(0x1f3)](_0x3a230e(0x1d8), {
          cantidad: _0x13fc98,
          precio: _0x28047c,
          nombrePromo: _0x4518f4,
        });
        if (_0x13fc98 && _0x28047c) {
          const _0x274579 = parseInt(_0x13fc98),
            _0x3735b1 = parseFloat(_0x28047c);
          if (!isNaN(_0x274579) && !isNaN(_0x3735b1)) {
            const _0x1ff179 = _0x274579 * _0x3735b1,
              _0x488931 = Math[_0x3a230e(0x222)](_0x1ff179);
            console[_0x3a230e(0x1f3)](
              "🧮\x20Calculando\x20precio\x20total:\x20" +
                _0x274579 +
                "\x20x\x20" +
                _0x3735b1 +
                _0x3a230e(0x370) +
                _0x1ff179 +
                _0x3a230e(0x32c) +
                _0x488931 +
                _0x3a230e(0x2d4)
            ),
              (_0x28047c = _0x488931[_0x3a230e(0x33c)]());
          }
        }
        console[_0x3a230e(0x1f3)](_0x3a230e(0x2ab), {
          cantidad: _0x13fc98,
          precio: _0x28047c,
          nombrePromo: _0x4518f4,
        });
        let _0x536db3 = "";
        if (_0x13fc98 && _0x28047c)
          (_0x536db3 = _0x13fc98 + "x" + _0x28047c),
            console[_0x3a230e(0x1f3)](_0x3a230e(0xd9), _0x536db3);
        else {
          if (_0x4518f4) {
            const _0x57cc7b = _0x4518f4[_0x3a230e(0x266)](
                /(\d+)\s*[xX×]\s*(\d+)/i
              ),
              _0xbad052 = _0x4518f4["match"](/(\d+)\s*[xX×]\s*\$?\s*(\d+)/i),
              _0x558592 = _0x4518f4[_0x3a230e(0x266)](/(\d+)\s*[xX×]/i);
            if (_0x57cc7b)
              (_0x536db3 = _0x57cc7b[0x1] + "x" + _0x57cc7b[0x2]),
                console[_0x3a230e(0x1f3)](
                  "✅\x20Extraído\x20formato\x20completo\x20del\x20nombre:",
                  _0x536db3
                );
            else {
              if (_0xbad052)
                (_0x536db3 = _0xbad052[0x1] + "x" + _0xbad052[0x2]),
                  console[_0x3a230e(0x1f3)](_0x3a230e(0x1e4), _0x536db3);
              else
                _0x558592
                  ? ((_0x536db3 = _0x558592[0x1] + "x"),
                    console[_0x3a230e(0x1f3)](_0x3a230e(0x1d0), _0x536db3))
                  : ((_0x536db3 = _0x4518f4),
                    console[_0x3a230e(0x1f3)](_0x3a230e(0x178), _0x536db3));
            }
          } else
            (_0x536db3 = _0x3a230e(0x35c)),
              console[_0x3a230e(0x1f3)](_0x3a230e(0x174));
        }
        return _0x3a230e(0x226) + _0x536db3 + "</span>";
      })["join"]("");
      _0x35dd8b = _0x3f7afd(0x255) + _0x100dd9 + _0x3f7afd(0x17a);
    } else _0x35dd8b = _0x3f7afd(0x1cc);
  } else _0x35dd8b = _0x3f7afd(0x299);
  const _0x2b972a = document[_0x3f7afd(0x185)](_0x3f7afd(0x357));
  _0x2b972a && (_0x2b972a[_0x3f7afd(0x12a)] = _0x35dd8b);
}
async function mostrarModalPromocionesGenerales() {
  const _0x1eb844 = _0x1b5bb5,
    _0x518ba3 = document["getElementById"](_0x1eb844(0x2c7)),
    _0x28df7f = document[_0x1eb844(0x185)](_0x1eb844(0x274));
  if (!_0x28df7f || !_0x518ba3) return;
  let _0x217bec;
  try {
    _0x217bec = new bootstrap[_0x1eb844(0x35f)](_0x518ba3, {
      backdrop: !![],
      keyboard: !![],
      focus: !![],
    });
  } catch (_0x3f88d3) {
    console[_0x1eb844(0x12e)](_0x1eb844(0x237), _0x3f88d3);
    return;
  }
  try {
    console["log"](_0x1eb844(0x362)),
      (_0x28df7f["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      _0x217bec["show"](),
      _0x518ba3[_0x1eb844(0x342)](_0x1eb844(0x373), function (_0x2f924a) {
        _0x2f924a["target"] === _0x518ba3 && cerrarModalIOS();
      });
    const [_0x4185cb, _0x34951e] = await Promise["all"]([
      fetch(_0x1eb844(0x155)),
      getAllProductos(),
    ]);
    if (!_0x4185cb["ok"])
      throw new Error(
        _0x1eb844(0x123) +
          _0x4185cb[_0x1eb844(0x1af)] +
          ":\x20" +
          _0x4185cb["statusText"]
      );
    const _0x597021 = await _0x4185cb[_0x1eb844(0x193)]();
    console[_0x1eb844(0x1f3)]("📋\x20Datos\x20de\x20promociones:", _0x597021);
    let _0x1c1979 = [];
    if (
      _0x597021[_0x1eb844(0x1af)] === _0x1eb844(0x13d) &&
      _0x597021[_0x1eb844(0x21b)]
    )
      _0x1c1979 = _0x597021[_0x1eb844(0x21b)];
    else {
      if (Array["isArray"](_0x597021)) _0x1c1979 = _0x597021;
      else throw new Error(_0x1eb844(0x166));
    }
    if (_0x1c1979[_0x1eb844(0x359)] === 0x0) {
      _0x28df7f[_0x1eb844(0x12a)] = _0x1eb844(0xbb);
      return;
    }
    let _0x242ee4 = "<div\x20class=\x22row\x22>";
    _0x1c1979[_0x1eb844(0x248)]((_0x816724, _0x9e2d9e) => {
      const _0x504188 = _0x1eb844;
      let _0x3f4ccc = [];
      if (
        _0x816724[_0x504188(0x1be)] &&
        Array[_0x504188(0x116)](_0x816724[_0x504188(0x1be)])
      )
        _0x3f4ccc = _0x816724[_0x504188(0x1be)];
      else
        _0x816724[_0x504188(0x33d)] &&
          _0x816724[_0x504188(0x33d)][_0x504188(0xe8)] &&
          (Array[_0x504188(0x116)](
            _0x816724["pro_grupoProductos_primaria"][_0x504188(0xe8)]
          )
            ? (_0x3f4ccc = _0x816724[_0x504188(0x33d)][_0x504188(0xe8)])
            : (_0x3f4ccc = _0x816724[_0x504188(0x33d)]["pr_sku"]
                [_0x504188(0x250)]("\x20")
                [_0x504188(0x17f)]((_0x3378c4) =>
                  _0x3378c4[_0x504188(0x219)]()
                )));
      const _0x347a98 = _0x3f4ccc[_0x504188(0x22e)]((_0x3c8cd0) => {
          const _0x539f87 = _0x504188;
          return _0x34951e[_0x539f87(0x337)](
            (_0x385108) => _0x385108[_0x539f87(0xe8)] === _0x3c8cd0
          );
        })[_0x504188(0x17f)]((_0x1ac77a) => _0x1ac77a !== undefined),
        _0x571f91 =
          _0x816724[_0x504188(0xf7)] ||
          _0x816724[_0x504188(0x323)] ||
          _0x504188(0x344) + (_0x9e2d9e + 0x1),
        _0x495530 =
          _0x816724[_0x504188(0x118)] || _0x816724["tipo"] || _0x504188(0x202),
        _0x2b92a3 =
          _0x816724[_0x504188(0xcf)] || _0x816724[_0x504188(0x304)] || "",
        _0x5d5d89 = _0x816724[_0x504188(0x356)] || "",
        _0x56c947 = Number(_0x5d5d89) || 0x1;
      let _0x6e2e15 = 0x0;
      const _0x5a858a = (_0x2b92a3 + "\x20" + _0x571f91)[_0x504188(0x374)](),
        _0x18f16e = _0x5a858a[_0x504188(0x266)](/(\d+)\s*x\s*(\d+)/);
      if (_0x18f16e) _0x6e2e15 = Math["round"](Number(_0x18f16e[0x2]));
      else {
        const _0x5b436d = Number(_0x816724[_0x504188(0x27f)]) || 0x0;
        _0x6e2e15 = Math[_0x504188(0x222)](_0x5b436d * _0x56c947);
      }
      _0x242ee4 +=
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x20shadow-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-warning\x20text-dark\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20mb-0\x22>🏷️\x20" +
        _0x571f91 +
        _0x504188(0x235) +
        _0x56c947 +
        "x" +
        (_0x6e2e15 > 0x0 ? _0x6e2e15 : "PROMO") +
        _0x504188(0x30e) +
        (_0x347a98[_0x504188(0x359)] > 0x0
          ? _0x347a98[_0x504188(0x22e)]((_0x29e08d) => {
              const _0xd20262 = _0x504188;
              let _0x22efe6 = "";
              if (
                _0x29e08d["pr_imagen"] &&
                _0x29e08d[_0xd20262(0xb4)]["trim"]() !== ""
              ) {
                if (_0x29e08d[_0xd20262(0xb4)][_0xd20262(0x270)]("http"))
                  _0x22efe6 = _0x29e08d[_0xd20262(0xb4)];
                else {
                  let _0x12aa0c = _0x29e08d["pr_imagen"]["startsWith"]("/")
                    ? _0x29e08d["pr_imagen"]
                    : "/" + _0x29e08d[_0xd20262(0xb4)];
                  _0x22efe6 = _0xd20262(0x2f6) + _0x12aa0c;
                }
              }
              const _0x1240c1 =
                  Number(_0x29e08d[_0xd20262(0x1ad)]) ||
                  Number(_0x29e08d["L1"]) ||
                  0x0,
                _0x496fd8 =
                  Math[_0xd20262(0x222)](_0x1240c1 * 1.16 * 0x64) / 0x64;
              return (
                "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                (_0x22efe6
                  ? _0xd20262(0x128) +
                    _0x22efe6 +
                    _0xd20262(0x1e7) +
                    _0x29e08d[_0xd20262(0xdf)] +
                    _0xd20262(0x350)
                  : _0xd20262(0x345)) +
                _0xd20262(0xd5) +
                _0x29e08d[_0xd20262(0xdf)] +
                _0xd20262(0x1b1) +
                _0x496fd8[_0xd20262(0x161)](0x2) +
                _0xd20262(0x18d) +
                _0x29e08d["pr_sku"] +
                "\x27)\x22\x20title=\x22Ver\x20detalles\x20completos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              );
            })["join"]("")
          : _0x504188(0x1ea)) +
        _0x504188(0x25c);
    }),
      (_0x242ee4 += _0x1eb844(0x154)),
      (_0x28df7f[_0x1eb844(0x12a)] = _0x242ee4);
  } catch (_0x102720) {
    console[_0x1eb844(0x12e)](_0x1eb844(0xca), _0x102720),
      (_0x28df7f[_0x1eb844(0x12a)] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>❌\x20Error\x20al\x20cargar\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>" +
        _0x102720[_0x1eb844(0x254)] +
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-warning\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
  }
}
async function consultarProductoDesdeModal(_0x103502) {
  const _0x27c49f = _0x1b5bb5;
  try {
    const _0x248b65 = bootstrap[_0x27c49f(0x35f)][_0x27c49f(0x27c)](
      document["getElementById"]("promocionesGeneralesModal")
    );
    _0x248b65 && _0x248b65[_0x27c49f(0x16f)]();
    const _0x4321e4 = await getAllProductos(),
      _0x54eac0 = _0x4321e4["find"](
        (_0x46f162) =>
          String(_0x46f162[_0x27c49f(0xe8)]) === String(_0x103502) ||
          String(_0x46f162["pr_gtin"]) === String(_0x103502)
      );
    if (_0x54eac0) {
      (inputCodigo[_0x27c49f(0xd6)] = ""), mostrarDetalleProducto(_0x54eac0);
      const _0x2cae7e = {
        ..._0x54eac0,
        FECHA_ESCANEO: new Date()[_0x27c49f(0x271)](),
      };
      historial[_0x27c49f(0x2bc)](_0x2cae7e),
        setCookie(_0x27c49f(0x167), JSON[_0x27c49f(0x328)](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x3436c1 = _0x27c49f,
            _0x168432 = document[_0x3436c1(0x185)]("resultado");
          _0x168432 &&
            _0x168432["scrollIntoView"]({
              behavior: _0x3436c1(0x2a2),
              block: _0x3436c1(0xb2),
              inline: _0x3436c1(0x1f7),
            });
        }, 0x12c);
    } else
      (resultadoDiv[_0x27c49f(0x12a)] =
        _0x27c49f(0x33a) + _0x103502 + _0x27c49f(0x1c5)),
        setTimeout(() => {
          resultadoDiv["innerHTML"] = "";
        }, 0x1388);
  } catch (_0x347975) {
    console["error"](
      "Error\x20consultando\x20producto\x20desde\x20modal:",
      _0x347975
    ),
      (resultadoDiv[_0x27c49f(0x12a)] =
        _0x27c49f(0x1ec) + _0x347975[_0x27c49f(0x254)] + _0x27c49f(0x12f)),
      setTimeout(() => {
        const _0x59bbee = _0x27c49f;
        resultadoDiv[_0x59bbee(0x12a)] = "";
      }, 0x1388);
  }
}
async function consultarProductoDesdeHistorial(_0x5c6058) {
  const _0xfb6716 = _0x1b5bb5;
  try {
    const _0x4e62ac = await getAllProductos(),
      _0x4ea14c = _0x4e62ac[_0xfb6716(0x337)](
        (_0x44557f) =>
          String(_0x44557f["pr_sku"]) === String(_0x5c6058) ||
          String(_0x44557f[_0xfb6716(0x308)]) === String(_0x5c6058)
      );
    if (_0x4ea14c) {
      (inputCodigo[_0xfb6716(0xd6)] = ""), mostrarDetalleProducto(_0x4ea14c);
      const _0x577107 = historial[_0xfb6716(0x32d)](
        (_0xe3e835) =>
          (_0xe3e835[_0xfb6716(0xe8)] &&
            String(_0xe3e835[_0xfb6716(0xe8)]) === String(_0x5c6058)) ||
          (_0xe3e835[_0xfb6716(0x308)] &&
            String(_0xe3e835[_0xfb6716(0x308)]) === String(_0x5c6058))
      );
      if (_0x577107 !== -0x1) {
        const _0x249d71 = historial[_0xfb6716(0x272)](_0x577107, 0x1)[0x0];
        (_0x249d71[_0xfb6716(0x1f6)] = new Date()["toISOString"]()),
          historial[_0xfb6716(0x2bc)](_0x249d71),
          setCookie("historial", JSON["stringify"](historial), 0x1e),
          renderHistorial();
      }
      setTimeout(() => {
        const _0x2ebd0f = _0xfb6716,
          _0x19cf4a = document[_0x2ebd0f(0x185)]("resultado");
        _0x19cf4a &&
          _0x19cf4a[_0x2ebd0f(0x18a)]({
            behavior: _0x2ebd0f(0x2a2),
            block: _0x2ebd0f(0xb2),
            inline: _0x2ebd0f(0x1f7),
          });
      }, 0x12c);
    } else
      (resultadoDiv[_0xfb6716(0x12a)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20" +
        _0x5c6058 +
        _0xfb6716(0x1c5)),
        setTimeout(() => {
          const _0xd718df = _0xfb6716;
          resultadoDiv[_0xd718df(0x12a)] = "";
        }, 0x1388);
  } catch (_0x179937) {
    console[_0xfb6716(0x12e)](_0xfb6716(0x2cf), _0x179937),
      (resultadoDiv[_0xfb6716(0x12a)] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20" +
        _0x179937[_0xfb6716(0x254)] +
        "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      setTimeout(() => {
        const _0x29a19b = _0xfb6716;
        resultadoDiv[_0x29a19b(0x12a)] = "";
      }, 0x1388);
  }
}
function cerrarModalIOS() {
  const _0x538dc1 = _0x1b5bb5,
    _0x7bd7c = document["getElementById"]("promocionesGeneralesModal");
  if (_0x7bd7c) {
    const _0x182c2a = bootstrap["Modal"]["getInstance"](_0x7bd7c);
    if (_0x182c2a) _0x182c2a[_0x538dc1(0x16f)]();
    else {
      _0x7bd7c[_0x538dc1(0x2e7)][_0x538dc1(0x365)]("show"),
        (_0x7bd7c[_0x538dc1(0x280)][_0x538dc1(0x34c)] = _0x538dc1(0x140)),
        document[_0x538dc1(0x27b)]["classList"]["remove"]("modal-open");
      const _0x3ca1a1 = document[_0x538dc1(0x18c)](_0x538dc1(0x1df));
      _0x3ca1a1 && _0x3ca1a1[_0x538dc1(0x365)]();
    }
  }
}
(window[_0x1b5bb5(0x152)] = mostrarModalPromocionesGenerales),
  (window[_0x1b5bb5(0x30d)] = consultarProductoDesdeModal),
  (window[_0x1b5bb5(0x1b3)] = consultarProductoDesdeHistorial),
  (window[_0x1b5bb5(0x16b)] = cerrarModalIOS);
async function tienePromociones(_0x3a52ee) {
  const _0x463c39 = _0x1b5bb5;
  try {
    const _0x5eef02 = (_0x3a52ee[_0x463c39(0xe8)] || "")["toString"]();
    if (!_0x5eef02) return ![];
    const _0x2ca356 = await getAllPromociones();
    if (_0x2ca356["length"] === 0x0) return ![];
    for (const _0x8f4a4a of _0x2ca356) {
      let _0x2a6f22 = [];
      if (
        _0x8f4a4a[_0x463c39(0x1be)] &&
        Array[_0x463c39(0x116)](_0x8f4a4a[_0x463c39(0x1be)])
      )
        _0x2a6f22 = _0x8f4a4a["skus"];
      else
        _0x8f4a4a[_0x463c39(0x33d)] &&
          _0x8f4a4a[_0x463c39(0x33d)][_0x463c39(0xe8)] &&
          (Array[_0x463c39(0x116)](_0x8f4a4a[_0x463c39(0x33d)][_0x463c39(0xe8)])
            ? (_0x2a6f22 = _0x8f4a4a[_0x463c39(0x33d)][_0x463c39(0xe8)])
            : (_0x2a6f22 = _0x8f4a4a[_0x463c39(0x33d)][_0x463c39(0xe8)]
                [_0x463c39(0x250)]("\x20")
                [_0x463c39(0x17f)]((_0x41834a) => _0x41834a["trim"]())));
      if (_0x2a6f22[_0x463c39(0x278)](_0x5eef02)) return !![];
    }
    return ![];
  } catch (_0x2bc296) {
    return console[_0x463c39(0x377)](_0x463c39(0x29f), _0x2bc296), ![];
  }
}
let searchTimeout;
inputCodigo[_0x1b5bb5(0x342)](_0x1b5bb5(0x2f3), async function (_0x44c505) {
  const _0x2ae37a = _0x1b5bb5,
    _0x47b9f6 = inputCodigo[_0x2ae37a(0xd6)]
      [_0x2ae37a(0x219)]()
      [_0x2ae37a(0x374)]();
  clearTimeout(searchTimeout), (sugerenciasDiv[_0x2ae37a(0x12a)] = "");
  if (!_0x47b9f6 || _0x47b9f6["length"] < 0x2) {
    sugerenciasDiv[_0x2ae37a(0x280)][_0x2ae37a(0x34c)] = _0x2ae37a(0x140);
    return;
  }
  searchTimeout = setTimeout(async () => {
    const _0x5ea3bb = _0x2ae37a;
    let _0x2cd6ce = await getAllProductos(),
      _0x574c2d = _0x2cd6ce["filter"]((_0x3fb263) => {
        const _0x3cc499 = _0x1f33;
        return (
          (_0x3fb263[_0x3cc499(0xdf)] &&
            _0x3fb263[_0x3cc499(0xdf)]
              [_0x3cc499(0x374)]()
              [_0x3cc499(0x278)](_0x47b9f6)) ||
          (_0x3fb263["pr_sku"] &&
            String(_0x3fb263[_0x3cc499(0xe8)])
              [_0x3cc499(0x374)]()
              [_0x3cc499(0x278)](_0x47b9f6)) ||
          (_0x3fb263[_0x3cc499(0x308)] &&
            String(_0x3fb263[_0x3cc499(0x308)])
              ["toLowerCase"]()
              [_0x3cc499(0x278)](_0x47b9f6))
        );
      });
    const _0x2c8be6 = new Set();
    _0x574c2d = _0x574c2d[_0x5ea3bb(0x17f)]((_0xa1e30b) => {
      const _0x25767a = _0x5ea3bb,
        _0x266a2f = _0xa1e30b[_0x25767a(0xe8)] || _0xa1e30b[_0x25767a(0x308)];
      if (!_0x266a2f || _0x2c8be6[_0x25767a(0x1eb)](_0x266a2f)) return ![];
      return _0x2c8be6[_0x25767a(0xe0)](_0x266a2f), !![];
    });
    if (_0x574c2d[_0x5ea3bb(0x359)] === 0x0) {
      sugerenciasDiv[_0x5ea3bb(0x280)]["display"] = "none";
      return;
    }
    _0x574c2d[_0x5ea3bb(0x31f)]((_0x448702, _0x29b9df) => {
      const _0x526bac = _0x5ea3bb,
        _0x24ac52 = (_0x448702[_0x526bac(0xdf)] || "")["toLowerCase"](),
        _0x54bd8d = (_0x29b9df[_0x526bac(0xdf)] || "")[_0x526bac(0x374)](),
        _0x3f3269 = _0x24ac52[_0x526bac(0x270)](_0x47b9f6),
        _0x2e5aed = _0x54bd8d["startsWith"](_0x47b9f6);
      if (_0x3f3269 && !_0x2e5aed) return -0x1;
      if (!_0x3f3269 && _0x2e5aed) return 0x1;
      return _0x24ac52[_0x526bac(0x359)] - _0x54bd8d["length"];
    });
    const _0x359cca = _0x574c2d["map"]((_0x275430) =>
        tienePromociones(_0x275430)
      ),
      _0x83f8b1 = await Promise["all"](_0x359cca);
    _0x574c2d[_0x5ea3bb(0x248)]((_0x48fc90, _0x46de3c) => {
      const _0x2a574f = _0x5ea3bb,
        _0x5ed481 = _0x83f8b1[_0x46de3c],
        _0x13993b = document[_0x2a574f(0x14e)]("button");
      (_0x13993b[_0x2a574f(0xa0)] = _0x2a574f(0x2ac)),
        (_0x13993b[_0x2a574f(0xeb)] =
          "list-group-item\x20list-group-item-action\x20d-flex\x20align-items-center");
      let _0x352575 = "";
      if (
        _0x48fc90["pr_imagen"] &&
        _0x48fc90[_0x2a574f(0xb4)][_0x2a574f(0x219)]() !== ""
      ) {
        let _0x472000 = "";
        if (_0x48fc90[_0x2a574f(0xb4)][_0x2a574f(0x270)](_0x2a574f(0x21e)))
          _0x472000 = _0x48fc90[_0x2a574f(0xb4)];
        else {
          let _0x5ee50b = _0x48fc90[_0x2a574f(0xb4)][_0x2a574f(0x270)]("/")
            ? _0x48fc90["pr_imagen"]
            : "/" + _0x48fc90["pr_imagen"];
          _0x472000 = _0x2a574f(0x2f6) + _0x5ee50b;
        }
        _0x352575 =
          _0x2a574f(0x211) +
          _0x472000 +
          _0x2a574f(0x1e7) +
          _0x48fc90[_0x2a574f(0xdf)] +
          "\x22\x20style=\x22width:40px;\x20height:40px;\x20object-fit:cover;\x20border-radius:4px;\x20margin-right:12px;\x20background:#f8f9fa;\x22>";
      }
      const _0x116eb8 = _0x5ed481 ? _0x2a574f(0x2a5) : "";
      (_0x13993b[_0x2a574f(0x12a)] =
        _0x2a574f(0x214) +
        _0x352575 +
        _0x2a574f(0x33e) +
        _0x48fc90[_0x2a574f(0xdf)] +
        _0x2a574f(0x144) +
        _0x116eb8 +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20" +
        (_0x48fc90[_0x2a574f(0xe8)] || _0x48fc90[_0x2a574f(0x308)] || "") +
        "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
        (_0x13993b[_0x2a574f(0x109)] = function () {
          const _0x3d97a7 = _0x2a574f;
          mostrarDetalleProducto(_0x48fc90);
          const _0x35510b = {
            ..._0x48fc90,
            FECHA_ESCANEO: new Date()[_0x3d97a7(0x271)](),
          };
          historial[_0x3d97a7(0x2bc)](_0x35510b),
            setCookie("historial", JSON[_0x3d97a7(0x328)](historial), 0x1e),
            renderHistorial(),
            (inputCodigo[_0x3d97a7(0xd6)] = ""),
            (sugerenciasDiv["innerHTML"] = ""),
            (sugerenciasDiv["style"][_0x3d97a7(0x34c)] = _0x3d97a7(0x140));
        }),
        sugerenciasDiv["appendChild"](_0x13993b);
    }),
      (sugerenciasDiv["style"][_0x5ea3bb(0x34c)] = "block");
  }, 0x12c);
}),
  document[_0x1b5bb5(0x342)](_0x1b5bb5(0x373), function (_0x28a5c1) {
    const _0xe5477b = _0x1b5bb5;
    !inputCodigo["contains"](_0x28a5c1["target"]) &&
      !sugerenciasDiv[_0xe5477b(0x31e)](_0x28a5c1[_0xe5477b(0x26e)]) &&
      ((sugerenciasDiv[_0xe5477b(0x12a)] = ""),
      (sugerenciasDiv["style"][_0xe5477b(0x34c)] = _0xe5477b(0x140)));
  });
function iniciarScanner() {
  const _0xc1e9de = _0x1b5bb5;
  if (scannerActivo) return;
  navigator[_0xc1e9de(0x17d)]
    ["getUserMedia"]({ video: !![] })
    ["then"]((_0x4d0732) => {
      const _0x24e83d = _0xc1e9de;
      _0x4d0732[_0x24e83d(0x249)]()[_0x24e83d(0x248)]((_0xa7b045) =>
        _0xa7b045[_0x24e83d(0x2e0)]()
      ),
        (scannerActivo = !![]),
        (readerDiv[_0x24e83d(0x280)][_0x24e83d(0x34c)] = _0x24e83d(0x112)),
        document[_0x24e83d(0x185)](_0x24e83d(0x197))[_0x24e83d(0x18a)]({
          behavior: _0x24e83d(0x2a2),
          block: _0x24e83d(0x2c8),
        }),
        (ayudaTexto["style"]["display"] = _0x24e83d(0x112));
      const _0x1e5b08 = new Html5Qrcode("reader"),
        _0xb7fbc4 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: _0x24e83d(0x1bd),
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x2f6977, _0x5473ab) {
            const _0xa7967f = Math["min"](0x12c, _0x2f6977 * 0.9),
              _0x17f07d = 0x64;
            return { width: _0xa7967f, height: _0x17f07d };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x24e83d(0x26c)],
            Html5QrcodeSupportedFormats["EAN_13"],
            Html5QrcodeSupportedFormats["EAN_8"],
            Html5QrcodeSupportedFormats[_0x24e83d(0x2d6)],
            Html5QrcodeSupportedFormats[_0x24e83d(0x95)],
            Html5QrcodeSupportedFormats[_0x24e83d(0x98)],
            Html5QrcodeSupportedFormats[_0x24e83d(0x1e9)],
            Html5QrcodeSupportedFormats[_0x24e83d(0x24e)],
            Html5QrcodeSupportedFormats[_0x24e83d(0x2d9)],
            Html5QrcodeSupportedFormats["QR_CODE"],
            Html5QrcodeSupportedFormats[_0x24e83d(0x139)],
            Html5QrcodeSupportedFormats["AZTEC"],
            Html5QrcodeSupportedFormats[_0x24e83d(0x23f)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x1e5b08[_0x24e83d(0xb2)](
        { facingMode: _0x24e83d(0x1bd) },
        _0xb7fbc4,
        (_0xdcd47) => {
          const _0x43fd2d = _0x24e83d;
          (inputCodigo["value"] = _0xdcd47[_0x43fd2d(0x219)]()[
            _0x43fd2d(0x18e)
          ](/\s+$/, "")),
            _0x1e5b08[_0x43fd2d(0x2e0)]()["then"](() => {
              const _0x35e523 = _0x43fd2d;
              (readerDiv[_0x35e523(0x280)][_0x35e523(0x34c)] =
                _0x35e523(0x140)),
                (ayudaTexto["style"]["display"] = "none"),
                (scannerActivo = ![]),
                _0x1e5b08[_0x35e523(0x30b)](),
                form[_0x35e523(0x19e)](),
                setTimeout(() => {
                  const _0x60d934 = _0x35e523,
                    _0x24415d = document["getElementById"](_0x60d934(0x2c3));
                  _0x24415d &&
                    _0x24415d[_0x60d934(0x18a)]({
                      behavior: _0x60d934(0x2a2),
                      block: _0x60d934(0xb2),
                      inline: _0x60d934(0x1f7),
                    });
                }, 0x1f4);
            });
        },
        (_0x3a4280) => {}
      )
        [_0x24e83d(0x153)](() => {
          setTimeout(() => {
            const _0x2e8bec = _0x1f33,
              _0x2969db = readerDiv[_0x2e8bec(0x18c)](_0x2e8bec(0x209));
            if (_0x2969db) {
              const _0x2f9b6c =
                _0x2969db[_0x2e8bec(0x233)][_0x2e8bec(0x9c)]()[0x0];
              _0x2f9b6c[_0x2e8bec(0x25a)]({
                focusMode: _0x2e8bec(0x122),
                advanced: [{ zoom: 0x2 }],
              })
                [_0x2e8bec(0x153)](() => {})
                [_0x2e8bec(0xd7)]((_0x2b520e) => {});
            }
          }, 0x7d0);
        })
        [_0x24e83d(0xd7)]((_0x40c6c2) => {
          const _0x255394 = _0x24e83d;
          (scannerActivo = ![]),
            (resultadoDiv[_0x255394(0x12a)] =
              _0x255394(0x1d3) + _0x40c6c2 + "</div>"),
            renderHistorial();
        });
      const _0x2bb212 = new MutationObserver(() => {
        const _0x5457bf = _0x24e83d,
          _0x43605 = readerDiv[_0x5457bf(0x18c)](_0x5457bf(0x209));
        _0x43605 &&
          (_0x43605[_0x5457bf(0x2bf)](_0x5457bf(0x360), ""),
          _0x43605["setAttribute"]("autoplay", ""),
          _0x43605[_0x5457bf(0x2bf)]("muted", ""),
          _0x2bb212[_0x5457bf(0x2ad)]());
      });
      _0x2bb212["observe"](readerDiv, { childList: !![], subtree: !![] });
    })
    [_0xc1e9de(0xd7)]((_0xed6b5) => {
      const _0x6fee38 = _0xc1e9de;
      (resultadoDiv["innerHTML"] = _0x6fee38(0x1b7)), renderHistorial();
    });
}
const fileInput = document[_0x1b5bb5(0x185)](_0x1b5bb5(0x1a7));
fileInput["addEventListener"](_0x1b5bb5(0x378), async (_0x32d014) => {
  const _0x5831fa = _0x1b5bb5,
    _0x3e1931 = _0x32d014[_0x5831fa(0x26e)][_0x5831fa(0x240)][0x0];
  if (!_0x3e1931) return;
  resultadoDiv["innerHTML"] = _0x5831fa(0x23c);
  try {
    const _0x3cc073 = new Image(),
      _0x458dbe = new Promise((_0x276e09, _0x345919) => {
        const _0x2bb640 = _0x5831fa;
        (_0x3cc073[_0x2bb640(0x31c)] = _0x276e09),
          (_0x3cc073[_0x2bb640(0x2ea)] = _0x345919),
          (_0x3cc073[_0x2bb640(0x37a)] = URL[_0x2bb640(0x286)](_0x3e1931));
      });
    await _0x458dbe;
    if (
      GOOGLE_VISION_CONFIG[_0x5831fa(0x142)] &&
      visionUsageTracker[_0x5831fa(0x2e2)]()
    ) {
      console[_0x5831fa(0x1f3)](_0x5831fa(0x302));
      try {
        const _0xea5ebe = await detectarConGoogleVision(_0x3cc073);
        if (_0xea5ebe) {
          console[_0x5831fa(0x1f3)](_0x5831fa(0xaa), _0xea5ebe),
            (inputCodigo[_0x5831fa(0xd6)] = _0xea5ebe),
            form[_0x5831fa(0x19e)](),
            URL[_0x5831fa(0xec)](_0x3cc073[_0x5831fa(0x37a)]),
            (fileInput["value"] = "");
          return;
        }
      } catch (_0x273162) {
        console[_0x5831fa(0x1f3)](
          _0x5831fa(0x14b),
          _0x273162[_0x5831fa(0x254)]
        );
        if (_0x273162[_0x5831fa(0x254)][_0x5831fa(0x278)](_0x5831fa(0x1f4)))
          console[_0x5831fa(0x1f3)](
            "🔧\x20Problema\x20de\x20CORS\x20detectado\x20-\x20necesita\x20configuración\x20en\x20backend"
          );
        else {
          if (_0x273162["message"]["includes"](_0x5831fa(0x1db)))
            console["log"](_0x5831fa(0xb3)),
              _0x273162["message"]["includes"]("BILLING_DISABLED")
                ? (console[_0x5831fa(0x1f3)](_0x5831fa(0x200)),
                  console["log"](_0x5831fa(0x264)))
                : console[_0x5831fa(0x1f3)](
                    "💡\x20Verifica\x20la\x20configuración\x20de\x20GOOGLE_VISION_API_KEY\x20en\x20Vercel"
                  );
          else
            _0x273162[_0x5831fa(0x254)]["includes"](_0x5831fa(0x104)) &&
              console[_0x5831fa(0x1f3)](
                "🔄\x20Backend\x20no\x20disponible,\x20usando\x20detección\x20local"
              );
        }
      }
    } else {
      if (
        GOOGLE_VISION_CONFIG[_0x5831fa(0x142)] &&
        !visionUsageTracker[_0x5831fa(0x2e2)]()
      ) {
        const _0x18c7b3 = visionUsageTracker[_0x5831fa(0x287)]();
        console[_0x5831fa(0x1f3)](
          _0x5831fa(0x181) +
            _0x18c7b3[_0x5831fa(0xcb)] +
            "/" +
            _0x18c7b3[_0x5831fa(0x25d)] +
            _0x5831fa(0x325) +
            _0x18c7b3["dailyUsed"] +
            "/" +
            _0x18c7b3[_0x5831fa(0x102)]
        );
      }
    }
    if (_0x5831fa(0x216) in window) {
      console["log"](_0x5831fa(0x173));
      try {
        const _0x4b1fd3 = [
            _0x5831fa(0x99),
            "code_128",
            "code_39",
            "code_93",
            _0x5831fa(0x363),
            _0x5831fa(0xe9),
            _0x5831fa(0x2f7),
            _0x5831fa(0x126),
            _0x5831fa(0x13f),
            _0x5831fa(0x9e),
            _0x5831fa(0x30a),
            _0x5831fa(0x121),
            _0x5831fa(0x107),
          ],
          _0x53a9b7 = new BarcodeDetector({ formats: _0x4b1fd3 }),
          _0x44e8c3 = await _0x53a9b7["detect"](_0x3cc073);
        console[_0x5831fa(0x1f3)](
          _0x5831fa(0x20c) + _0x44e8c3[_0x5831fa(0x359)],
          _0x44e8c3
        );
        if (_0x44e8c3[_0x5831fa(0x359)] > 0x0) {
          const _0x544b14 = _0x44e8c3[_0x5831fa(0x17f)]((_0x5f0a9b) => {
            const _0x696dec = _0x5831fa,
              _0x2367c1 = _0x5f0a9b[_0x696dec(0x2b1)]["trim"]();
            console[_0x696dec(0x1f3)](
              _0x696dec(0x2cd) +
                _0x2367c1 +
                _0x696dec(0x22a) +
                _0x5f0a9b[_0x696dec(0x111)] +
                _0x696dec(0x21c) +
                _0x2367c1[_0x696dec(0x359)]
            );
            switch (_0x5f0a9b[_0x696dec(0x111)]) {
              case _0x696dec(0x2f7):
                return (
                  _0x2367c1[_0x696dec(0x359)] === 0xd &&
                  /^\d{13}$/[_0x696dec(0xdc)](_0x2367c1)
                );
              case _0x696dec(0x121):
                return (
                  _0x2367c1["length"] === 0xc &&
                  /^\d{12}$/[_0x696dec(0xdc)](_0x2367c1)
                );
              case _0x696dec(0x126):
                return (
                  _0x2367c1[_0x696dec(0x359)] === 0x8 &&
                  /^\d{8}$/[_0x696dec(0xdc)](_0x2367c1)
                );
              case _0x696dec(0x107):
                return (
                  _0x2367c1[_0x696dec(0x359)] >= 0x6 &&
                  _0x2367c1["length"] <= 0x8 &&
                  /^\d+$/[_0x696dec(0xdc)](_0x2367c1)
                );
              case _0x696dec(0x32a):
                return (
                  _0x2367c1[_0x696dec(0x359)] >= 0x1 &&
                  _0x2367c1["length"] <= 0x32
                );
              case _0x696dec(0xf6):
                return (
                  _0x2367c1[_0x696dec(0x359)] >= 0x1 &&
                  /^[A-Z0-9\-. $\/+%*]+$/[_0x696dec(0xdc)](_0x2367c1)
                );
              case _0x696dec(0x2b4):
                return (
                  _0x2367c1[_0x696dec(0x359)] >= 0x1 &&
                  _0x2367c1[_0x696dec(0x359)] <= 0x32
                );
              case "codabar":
                return (
                  _0x2367c1[_0x696dec(0x359)] >= 0x3 &&
                  /^[A-D][0-9\-$:\/.\+]+[A-D]$/["test"](_0x2367c1)
                );
              case _0x696dec(0x13f):
                return (
                  _0x2367c1[_0x696dec(0x359)] >= 0x2 &&
                  _0x2367c1["length"] % 0x2 === 0x0 &&
                  /^\d+$/[_0x696dec(0xdc)](_0x2367c1)
                );
              case "qr_code":
                return (
                  _0x2367c1[_0x696dec(0x359)] >= 0x1 &&
                  _0x2367c1["length"] <= 0x10c8
                );
              case _0x696dec(0xe9):
                return (
                  _0x2367c1[_0x696dec(0x359)] >= 0x1 &&
                  _0x2367c1[_0x696dec(0x359)] <= 0xc2c
                );
              case _0x696dec(0x9e):
                return (
                  _0x2367c1[_0x696dec(0x359)] >= 0x1 &&
                  _0x2367c1[_0x696dec(0x359)] <= 0xa96
                );
              case "aztec":
                return (
                  _0x2367c1["length"] >= 0x1 &&
                  _0x2367c1[_0x696dec(0x359)] <= 0xef8
                );
              default:
                return (
                  _0x2367c1[_0x696dec(0x359)] >= 0x1 &&
                  _0x2367c1[_0x696dec(0x359)] <= 0x64
                );
            }
          });
          console[_0x5831fa(0x1f3)](
            _0x5831fa(0x129) + _0x544b14[_0x5831fa(0x359)]
          );
          if (_0x544b14[_0x5831fa(0x359)] > 0x0) {
            const _0x25ca53 = {
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
              _0x1b8062 = _0x544b14[_0x5831fa(0x31f)](
                (_0x198abe, _0x2e2cc7) => {
                  const _0x5eda1d = _0x5831fa,
                    _0x35d110 =
                      (_0x25ca53[_0x2e2cc7[_0x5eda1d(0x111)]] || 0x0) -
                      (_0x25ca53[_0x198abe[_0x5eda1d(0x111)]] || 0x0);
                  if (_0x35d110 !== 0x0) return _0x35d110;
                  if (
                    [
                      _0x5eda1d(0x2f7),
                      _0x5eda1d(0x121),
                      _0x5eda1d(0x126),
                      _0x5eda1d(0x107),
                      _0x5eda1d(0x32a),
                      _0x5eda1d(0xf6),
                      "code_93",
                      _0x5eda1d(0x13f),
                      "codabar",
                    ]["includes"](_0x198abe[_0x5eda1d(0x111)])
                  ) {
                    const _0x4b5e36 =
                        _0x198abe["boundingBox"][_0x5eda1d(0xfc)] *
                        _0x198abe[_0x5eda1d(0x2c9)][_0x5eda1d(0x188)],
                      _0x4a48c2 =
                        _0x2e2cc7[_0x5eda1d(0x2c9)][_0x5eda1d(0xfc)] *
                        _0x2e2cc7[_0x5eda1d(0x2c9)][_0x5eda1d(0x188)];
                    return _0x4a48c2 - _0x4b5e36;
                  }
                  const _0x1ef2e2 =
                      _0x198abe[_0x5eda1d(0x2c9)]["x"] +
                      _0x198abe[_0x5eda1d(0x2c9)][_0x5eda1d(0xfc)] / 0x2,
                    _0x33c5d9 =
                      _0x2e2cc7["boundingBox"]["x"] +
                      _0x2e2cc7[_0x5eda1d(0x2c9)][_0x5eda1d(0xfc)] / 0x2,
                    _0x234592 = _0x3cc073[_0x5eda1d(0xfc)] / 0x2;
                  return (
                    Math[_0x5eda1d(0x230)](_0x1ef2e2 - _0x234592) -
                    Math[_0x5eda1d(0x230)](_0x33c5d9 - _0x234592)
                  );
                }
              ),
              _0x5c5505 = _0x1b8062[0x0],
              _0x241b05 = _0x5c5505[_0x5831fa(0x2b1)]
                [_0x5831fa(0x219)]()
                [_0x5831fa(0x18e)](/\s+$/, "");
            console[_0x5831fa(0x1f3)](
              _0x5831fa(0x13e) +
                _0x241b05 +
                _0x5831fa(0x19d) +
                _0x5c5505[_0x5831fa(0x111)] +
                ")"
            ),
              (inputCodigo[_0x5831fa(0xd6)] = _0x241b05),
              form[_0x5831fa(0x19e)](),
              URL[_0x5831fa(0xec)](_0x3cc073[_0x5831fa(0x37a)]),
              (fileInput["value"] = "");
            return;
          }
        }
        console[_0x5831fa(0x1f3)](_0x5831fa(0x330));
      } catch (_0x3bf66a) {
        console[_0x5831fa(0x1f3)](
          "❌\x20Error\x20con\x20API\x20nativa,\x20usando\x20fallback:",
          _0x3bf66a
        );
      }
    } else console[_0x5831fa(0x1f3)](_0x5831fa(0x1f8));
    console["log"](_0x5831fa(0xce)), usarQuaggaFallback(_0x3cc073);
  } catch (_0x366553) {
    console[_0x5831fa(0x12e)](_0x5831fa(0x28b), _0x366553),
      (resultadoDiv[_0x5831fa(0x12a)] = _0x5831fa(0xc8)),
      renderHistorial(),
      (fileInput[_0x5831fa(0xd6)] = "");
  }
});
function usarQuaggaFallback(_0x52202b) {
  const _0x206d8c = _0x1b5bb5;
  console["log"]("📸\x20Procesando\x20con\x20Quagga...");
  const _0x5d1cc7 = document[_0x206d8c(0x14e)]("canvas"),
    _0xfde757 = _0x5d1cc7[_0x206d8c(0x331)]("2d");
  let { width: _0x1cd959, height: _0x5ad23e } = _0x52202b;
  const _0x4ca56c = 0x190;
  if (_0x1cd959 < _0x4ca56c || _0x5ad23e < _0x4ca56c) {
    const _0x1bc63e =
      Math[_0x206d8c(0x220)](_0x4ca56c / _0x1cd959, _0x4ca56c / _0x5ad23e) *
      1.5;
    (_0x1cd959 *= _0x1bc63e),
      (_0x5ad23e *= _0x1bc63e),
      console["log"](
        _0x206d8c(0xaf) +
          _0x52202b[_0x206d8c(0xfc)] +
          "x" +
          _0x52202b[_0x206d8c(0x188)] +
          _0x206d8c(0x12b) +
          _0x1cd959 +
          "x" +
          _0x5ad23e
      );
  }
  const _0x573b72 = 0x5dc;
  if (_0x1cd959 > _0x573b72 || _0x5ad23e > _0x573b72) {
    const _0x3841b0 = Math[_0x206d8c(0xa6)](
      _0x573b72 / _0x1cd959,
      _0x573b72 / _0x5ad23e
    );
    (_0x1cd959 *= _0x3841b0), (_0x5ad23e *= _0x3841b0);
  }
  (_0x5d1cc7["width"] = _0x1cd959),
    (_0x5d1cc7[_0x206d8c(0x188)] = _0x5ad23e),
    (_0xfde757[_0x206d8c(0x217)] = ![]),
    _0xfde757["drawImage"](_0x52202b, 0x0, 0x0, _0x1cd959, _0x5ad23e);
  const _0x106ae6 = _0xfde757[_0x206d8c(0x11b)](0x0, 0x0, _0x1cd959, _0x5ad23e),
    _0x4dbebe = _0x106ae6["data"];
  let _0x1d1611 = new Array(0x100)["fill"](0x0);
  for (
    let _0x595fc0 = 0x0;
    _0x595fc0 < _0x4dbebe[_0x206d8c(0x359)];
    _0x595fc0 += 0x4
  ) {
    const _0x492dc1 = Math[_0x206d8c(0x222)](
      0.299 * _0x4dbebe[_0x595fc0] +
        0.587 * _0x4dbebe[_0x595fc0 + 0x1] +
        0.114 * _0x4dbebe[_0x595fc0 + 0x2]
    );
    _0x1d1611[_0x492dc1]++;
  }
  let _0x294e0e = 0x80,
    _0x570e07 = 0x0;
  const _0x30e969 = _0x1cd959 * _0x5ad23e;
  for (let _0x46600e = 0x0; _0x46600e < 0x100; _0x46600e++) {
    let _0x736d92 = 0x0,
      _0x535fca = 0x0,
      _0x569226 = 0x0,
      _0x4afa39 = 0x0;
    for (let _0x7b7da1 = 0x0; _0x7b7da1 <= _0x46600e; _0x7b7da1++) {
      (_0x736d92 += _0x1d1611[_0x7b7da1]),
        (_0x569226 += _0x7b7da1 * _0x1d1611[_0x7b7da1]);
    }
    for (let _0x2070d6 = _0x46600e + 0x1; _0x2070d6 < 0x100; _0x2070d6++) {
      (_0x535fca += _0x1d1611[_0x2070d6]),
        (_0x4afa39 += _0x2070d6 * _0x1d1611[_0x2070d6]);
    }
    if (_0x736d92 === 0x0 || _0x535fca === 0x0) continue;
    const _0x4fefa4 = _0x569226 / _0x736d92,
      _0x5904a9 = _0x4afa39 / _0x535fca,
      _0x38a16e =
        _0x736d92 *
        _0x535fca *
        (_0x4fefa4 - _0x5904a9) *
        (_0x4fefa4 - _0x5904a9);
    _0x38a16e > _0x570e07 && ((_0x570e07 = _0x38a16e), (_0x294e0e = _0x46600e));
  }
  console[_0x206d8c(0x1f3)](_0x206d8c(0x236) + _0x294e0e);
  const _0x4630c3 = new Uint8ClampedArray(_0x4dbebe);
  for (
    let _0x32d7ed = 0x0;
    _0x32d7ed < _0x4dbebe[_0x206d8c(0x359)];
    _0x32d7ed += 0x4
  ) {
    const _0x4044f0 = Math["round"](
        0.299 * _0x4dbebe[_0x32d7ed] +
          0.587 * _0x4dbebe[_0x32d7ed + 0x1] +
          0.114 * _0x4dbebe[_0x32d7ed + 0x2]
      ),
      _0x1cdac4 = _0x4044f0 > _0x294e0e ? 0xff : 0x0;
    (_0x4dbebe[_0x32d7ed] = _0x1cdac4),
      (_0x4dbebe[_0x32d7ed + 0x1] = _0x1cdac4),
      (_0x4dbebe[_0x32d7ed + 0x2] = _0x1cdac4);
  }
  _0xfde757[_0x206d8c(0x19b)](_0x106ae6, 0x0, 0x0);
  let _0x346571 = _0x5d1cc7[_0x206d8c(0x333)]("image/png");
  const _0x363539 = _0xfde757[_0x206d8c(0x94)](_0x1cd959, _0x5ad23e),
    _0x32490c = _0x363539[_0x206d8c(0x36f)];
  for (let _0xc1a6fa = 0x0; _0xc1a6fa < _0x4630c3["length"]; _0xc1a6fa += 0x4) {
    const _0x18b815 = Math["round"](
        0.299 * _0x4630c3[_0xc1a6fa] +
          0.587 * _0x4630c3[_0xc1a6fa + 0x1] +
          0.114 * _0x4630c3[_0xc1a6fa + 0x2]
      ),
      _0x4fc823 = _0x18b815 > _0x294e0e * 0.7 ? 0xff : 0x0;
    (_0x32490c[_0xc1a6fa] = _0x4fc823),
      (_0x32490c[_0xc1a6fa + 0x1] = _0x4fc823),
      (_0x32490c[_0xc1a6fa + 0x2] = _0x4fc823),
      (_0x32490c[_0xc1a6fa + 0x3] = 0xff);
  }
  const _0x343719 = document[_0x206d8c(0x14e)]("canvas");
  (_0x343719[_0x206d8c(0xfc)] = _0x1cd959), (_0x343719["height"] = _0x5ad23e);
  const _0x2b4e60 = _0x343719[_0x206d8c(0x331)]("2d");
  _0x2b4e60[_0x206d8c(0x19b)](_0x363539, 0x0, 0x0);
  const _0xacb6ea = _0x343719[_0x206d8c(0x333)](_0x206d8c(0xdb)),
    _0x4c8435 = {
      src: _0x346571,
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: { size: Math[_0x206d8c(0x220)](_0x1cd959, _0x5ad23e) },
      locator: {
        patchSize: _0x206d8c(0x2d2),
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
          _0x206d8c(0xea),
          "ean_8_reader",
          _0x206d8c(0x1c9),
          "upc_e_reader",
          _0x206d8c(0x366),
          "code_39_reader",
          _0x206d8c(0x163),
          _0x206d8c(0xb7),
          _0x206d8c(0x35b),
          _0x206d8c(0x2d0),
          _0x206d8c(0x134),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
  console["log"]("🔄\x20Iniciando\x20detección\x20con\x20Quagga...");
  const _0x432153 = (_0x53e214, _0x465d4e, _0x15ae3c) => {
    const _0x243769 = _0x206d8c;
    console[_0x243769(0x1f3)](
      "📋\x20Probando\x20configuración:\x20" + _0x465d4e
    );
    const _0x3a1a76 = {
      src: _0x53e214,
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: { size: Math["max"](_0x1cd959, _0x5ad23e) },
      locator: {
        patchSize:
          _0x465d4e === _0x243769(0x1ee) ? _0x243769(0x1c3) : _0x243769(0x2d2),
        halfSample: _0x465d4e === _0x243769(0x1c4) ? !![] : ![],
        debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
      },
      decoder: {
        readers: [
          _0x243769(0xea),
          "ean_8_reader",
          _0x243769(0x1c9),
          _0x243769(0x16c),
          _0x243769(0x366),
          _0x243769(0xb1),
          _0x243769(0x163),
          "code_93_reader",
          _0x243769(0x35b),
          _0x243769(0x2d0),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
    Quagga[_0x243769(0x115)](_0x3a1a76, _0x15ae3c);
  };
  let _0x164360 = [];
  _0x432153(_0x346571, _0x206d8c(0x29c), function (_0x3a4a8c) {
    const _0x4fc3ef = _0x206d8c;
    if (_0x3a4a8c && _0x3a4a8c[_0x4fc3ef(0xc7)]) {
      let _0x4a0a27 = _0x3a4a8c[_0x4fc3ef(0xc7)][_0x4fc3ef(0x10d)]
        [_0x4fc3ef(0x219)]()
        ["replace"](/\s+$/, "");
      _0x164360["push"](
        _0x4a0a27 + "\x20(" + _0x3a4a8c[_0x4fc3ef(0xc7)][_0x4fc3ef(0x111)] + ")"
      ),
        console[_0x4fc3ef(0x1f3)](
          _0x4fc3ef(0x1b0),
          _0x4a0a27,
          _0x4fc3ef(0x130),
          _0x3a4a8c[_0x4fc3ef(0xc7)][_0x4fc3ef(0x111)]
        );
      if (
        validarCodigo(_0x4a0a27, _0x3a4a8c[_0x4fc3ef(0xc7)][_0x4fc3ef(0x111)])
      ) {
        (inputCodigo[_0x4fc3ef(0xd6)] = _0x4a0a27),
          form["requestSubmit"](),
          URL[_0x4fc3ef(0xec)](_0x52202b["src"]),
          (fileInput["value"] = "");
        return;
      }
    }
    console["log"](_0x4fc3ef(0x180)),
      _0x432153(_0xacb6ea, "agresiva", function (_0x1a6531) {
        const _0xde7eec = _0x4fc3ef;
        if (_0x1a6531 && _0x1a6531["codeResult"]) {
          let _0x2d42f5 = _0x1a6531[_0xde7eec(0xc7)][_0xde7eec(0x10d)]
            ["trim"]()
            [_0xde7eec(0x18e)](/\s+$/, "");
          _0x164360[_0xde7eec(0x311)](
            _0x2d42f5 + "\x20(" + _0x1a6531[_0xde7eec(0xc7)]["format"] + ")"
          ),
            console[_0xde7eec(0x1f3)](
              _0xde7eec(0x1de),
              _0x2d42f5,
              "Formato:",
              _0x1a6531[_0xde7eec(0xc7)][_0xde7eec(0x111)]
            );
          if (
            validarCodigo(_0x2d42f5, _0x1a6531["codeResult"][_0xde7eec(0x111)])
          ) {
            (inputCodigo[_0xde7eec(0xd6)] = _0x2d42f5),
              form["requestSubmit"](),
              URL[_0xde7eec(0xec)](_0x52202b[_0xde7eec(0x37a)]),
              (fileInput["value"] = "");
            return;
          }
        }
        console[_0xde7eec(0x1f3)](
          "🔄\x20Probando\x20con\x20imagen\x20original..."
        ),
          intentarSegundaPasada(_0x52202b, _0x164360);
      });
  });
}
function validarCodigo(_0x15a9d4, _0x1ecffe) {
  const _0x5c88f7 = _0x1b5bb5;
  console["log"](
    _0x5c88f7(0x2cd) +
      _0x15a9d4 +
      _0x5c88f7(0x22a) +
      _0x1ecffe +
      _0x5c88f7(0x21c) +
      _0x15a9d4[_0x5c88f7(0x359)]
  );
  switch (_0x1ecffe) {
    case _0x5c88f7(0x2f7):
      return (
        _0x15a9d4[_0x5c88f7(0x359)] === 0xd && /^\d{13}$/["test"](_0x15a9d4)
      );
    case "upc_a":
      return (
        _0x15a9d4[_0x5c88f7(0x359)] === 0xc &&
        /^\d{12}$/[_0x5c88f7(0xdc)](_0x15a9d4)
      );
    case "ean_8":
      return (
        _0x15a9d4[_0x5c88f7(0x359)] === 0x8 &&
        /^\d{8}$/[_0x5c88f7(0xdc)](_0x15a9d4)
      );
    case _0x5c88f7(0x107):
      return (
        _0x15a9d4[_0x5c88f7(0x359)] >= 0x6 &&
        _0x15a9d4[_0x5c88f7(0x359)] <= 0x8 &&
        /^\d+$/[_0x5c88f7(0xdc)](_0x15a9d4)
      );
    case _0x5c88f7(0x32a):
    case _0x5c88f7(0xf6):
    case _0x5c88f7(0x2b4):
      return _0x15a9d4["length"] >= 0x1 && _0x15a9d4[_0x5c88f7(0x359)] <= 0x32;
    case _0x5c88f7(0x363):
      return (
        _0x15a9d4[_0x5c88f7(0x359)] >= 0x3 &&
        /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x5c88f7(0xdc)](_0x15a9d4)
      );
    case _0x5c88f7(0x91):
      return (
        _0x15a9d4[_0x5c88f7(0x359)] >= 0x2 &&
        _0x15a9d4["length"] % 0x2 === 0x0 &&
        /^\d+$/[_0x5c88f7(0xdc)](_0x15a9d4)
      );
    default:
      return (
        _0x15a9d4[_0x5c88f7(0x359)] >= 0x1 &&
        _0x15a9d4[_0x5c88f7(0x359)] <= 0x32
      );
  }
}
function _0x2e04() {
  const _0x220cdc = [
    "📡\x20Consultando\x20TODOS\x20los\x20endpoints\x20de\x20productos...",
    "pr_gtin",
    "#6c757d",
    "qr_code",
    "clear",
    "description",
    "consultarProductoDesdeModal",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22productos-lista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "✅\x20Usando\x20promociones\x20desde\x20IndexedDB:",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20<strong>⚠️\x20No\x20se\x20detectó\x20código\x20válido</strong><br>\x0a\x20\x20\x20\x20\x20\x20Para\x20códigos\x20largos\x20como\x20este,\x20intenta:<br>\x0a\x20\x20\x20\x20\x20\x20•\x20📏\x20<strong>Recortar\x20muy\x20cerca\x20del\x20código</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20💡\x20<strong>Mejor\x20iluminación\x20uniforme</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20📱\x20<strong>Evitar\x20superficies\x20reflectivas</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20🔍\x20<strong>Imagen\x20más\x20nítida\x20y\x20estable</strong>",
    "push",
    "accepted",
    "overflowY",
    "\x20promociones",
    "❌\x20No\x20hay\x20promociones\x20para\x20SKU:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Error\x20al\x20detectar\x20promociones\x20para\x20SKU\x20",
    "\x20usos\x20hoy",
    "\x0a\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20w-100\x20mb-2\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20flex-column\x20flex-md-row\x20align-items-md-end\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20<h5\x20class=\x22ant-typography\x20css-1r8qqf1\x20mb-0\x22>Productos</h5>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22ultimaActualizacion\x22\x20class=\x22ant-typography\x20css-1r8qqf1\x20ms-md-4\x22\x20style=\x22font-size:1rem;\x22>Última\x20actualización:\x20nunca\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnActualizar\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#d9d9d9;\x20background:#fff;\x20color:#222;\x20font-size:1rem;\x20padding:2px\x2016px;\x20margin-left:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnTexto\x22>Actualizar</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20id=\x22mensajeActualizacion\x22\x20class=\x22text-center\x22\x20style=\x22min-height:\x201.5rem;\x22></div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20promociones\x20generales\x20-->\x0a\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22promocionesGeneralesModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22promocionesGeneralesModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-warning\x20text-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22promocionesGeneralesModalLabel\x22>🏷️\x20Todas\x20las\x20Promociones\x20Disponibles</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22cerrarModalIOS()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22promociones-generales-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones...</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20me-auto\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22cerrarModalIOS()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20",
    "writeText",
    "onload",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x22>",
    "contains",
    "sort",
    "🏷️\x20Promociones\x20oficiales\x20filtradas:",
    "💡\x20Ve\x20a:\x20https://console.cloud.google.com/apis/library/vision.googleapis.com",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>🏷️\x20Sistema\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Productos:</strong>\x20",
    "descripcion",
    "\x20me-1\x20mb-1\x22\x20style=\x22font-size:0.75rem;\x22>",
    ",\x20Diario:\x20",
    "productosConCodigosAdicionales",
    "🔧\x20Error\x20500:\x20Problema\x20interno\x20del\x20servidor",
    "stringify",
    "getAttribute",
    "code_128",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>\x20\x20Total\x20SKUs:</strong>\x20",
    "\x20→\x20",
    "findIndex",
    "count",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB\x20desde\x20servidor",
    "⚠️\x20API\x20nativa\x20no\x20detectó\x20códigos\x20válidos",
    "getContext",
    "location",
    "toDataURL",
    "data-sku",
    "GET",
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20nombre\x20del\x20producto\x20*/\x0a\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x201.4rem;\x0a\x20\x20\x20\x20line-height:\x201.3;\x0a\x20\x20\x20\x20margin-bottom:\x200.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.1rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20precios\x20*/\x0a\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x203.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x202.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20para\x20código\x20de\x20barras\x20funcional\x20*/\x0a\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20max-width:\x20100%;\x0a\x20\x20\x20\x20height:\x20auto;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20background:\x20#ffffff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x202rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x201.5rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20160px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Fix\x20específico\x20para\x20iOS\x20-\x20Modal\x20compatibility\x20*/\x0a\x20\x20@supports\x20(-webkit-touch-callout:\x20none)\x20{\x0a\x20\x20\x20\x20.modal\x20{\x0a\x20\x20\x20\x20\x20\x20-webkit-transform:\x20translate3d(0,0,0);\x0a\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0,0,0);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.modal-backdrop\x20{\x0a\x20\x20\x20\x20\x20\x20-webkit-transform:\x20translate3d(0,0,0);\x0a\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0,0,0);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20-webkit-transform:\x20translate3d(0,0,0);\x0a\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0,0,0);\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Asegurar\x20que\x20el\x20modal\x20sea\x20interactivo\x20en\x20iOS\x20*/\x0a\x20\x20.modal.show\x20{\x0a\x20\x20\x20\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20pointer-events:\x20auto\x20!important;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.modal-backdrop.show\x20{\x0a\x20\x20\x20\x20opacity:\x200.5\x20!important;\x0a\x20\x20\x20\x20pointer-events:\x20auto\x20!important;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Fix\x20para\x20z-index\x20en\x20iOS\x20*/\x0a\x20\x20@media\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:\x200)\x20{\x0a\x20\x20\x20\x20.modal\x20{\x0a\x20\x20\x20\x20\x20\x20z-index:\x201060\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.modal-backdrop\x20{\x0a\x20\x20\x20\x20\x20\x20z-index:\x201040\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    "find",
    "createObjectStore",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22height:\x2080px;\x20object-fit:\x20contain;\x20padding:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20",
    "usage",
    "toString",
    "pro_grupoProductos_primaria",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "objectStore",
    "resetMonthlyUsage",
    "addEventListener",
    "validTo",
    "Promoción\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-light\x20rounded\x22\x20style=\x22min-width:\x2060px;\x20height:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-image\x20text-muted\x22\x20style=\x22font-size:\x201.5rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "head",
    "drawImage",
    "\x20horas",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "🔄\x20Sin\x20productos:\x20cargando\x20productos\x20y\x20promociones...",
    "\x0a\x20\x20\x20\x20</div>",
    "display",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20minutos",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20object-fit:\x20contain;\x20border-radius:\x208px;\x20background:\x20#f8f9fa;\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.style.display=\x27none\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "toDateString",
    "💡\x20Verifica\x20que\x20el\x20proyecto\x20#1070150612422\x20tenga\x20facturación\x20activa",
    "🧪\x20Probando\x20vision-detect\x20con\x20imagen\x20de\x20prueba...",
    "update",
    "allSettled",
    "pro_cantidad_base",
    "promociones-container",
    "setItem",
    "length",
    "objectStoreNames",
    "codabar_reader",
    "PROMO",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "indexeddb_local",
    "Modal",
    "playsinline",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📋\x20Descripción\x20completa\x20de\x20productos:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-3\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🎯\x20Consultando\x20promociones\x20generales...",
    "codabar",
    "alert-warning",
    "remove",
    "code_128_reader",
    "showUsageWarning",
    "📸\x20Preparando\x20imagen\x20para\x20Google\x20Vision...",
    "✅\x20Los\x203\x20endpoints\x20consultados",
    "📊\x20Status\x20HTTP:",
    "postMessage",
    "Productos\x20básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "6205FNbWXK",
    "disabled",
    "data",
    "\x20=\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Cantidad</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20No\x20se\x20pudieron\x20obtener\x20estadísticas\x20de\x20códigos\x20de\x20barras",
    "click",
    "toLowerCase",
    "códigos\x20de\x20barras\x20❌\x20(HTTP\x20",
    "JsBarcode",
    "warn",
    "change",
    "<span\x20class=\x22badge\x20",
    "src",
    "https://verificadorb9-backend.vercel.app/api/promociones",
    "Todos\x20los\x20endpoints\x20fallaron\x20(",
    "i2of5",
    "🎉\x20¡Google\x20Vision\x20API\x20funcionando\x20correctamente!",
    "\x20al\x20",
    "createImageData",
    "UPC_E",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-light\x20text-dark\x20me-1\x20mb-1\x22\x20style=\x22font-size:\x200.7rem;\x22>",
    "updatefound",
    "CODE_39",
    "aztec",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "focus",
    "getVideoTracks",
    "🔍\x20Buscando\x20promociones\x20para\x20SKU:",
    "pdf417",
    "✅\x20Service\x20Worker\x20registrado:",
    "type",
    "month",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🚫\x20Vision\x20API\x20No\x20Habilitada</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20Vision\x20API\x20no\x20está\x20habilitada\x20en\x20tu\x20proyecto</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/apis/library/vision.googleapis.com\x22\x20target=\x22_blank\x22>Habilitar\x20Vision\x20API</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20class=\x22barcode-canvas\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-bold\x20text-dark\x22>",
    "N/A",
    "min",
    "\x20endpoints\x20consultados",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:\x200.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💰\x20Ahorras\x20$",
    "warning",
    "✅\x20Google\x20Vision\x20detectó:",
    "<small\x20class=\x22text-muted\x20d-block\x22><strong>Código:</strong>\x20",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Total\x20Normal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "✅\x20Detección\x20avanzada\x20(backend)\x20configurada\x20y\x20activa",
    "ean_8_reader",
    "📏\x20Ampliando\x20imagen\x20pequeña:\x20",
    "substring",
    "code_39_reader",
    "start",
    "🔧\x20Error\x20500:\x20Problema\x20con\x20Google\x20Vision\x20API",
    "pr_imagen",
    "\x22\x20class=\x22card-img-top\x22\x20alt=\x22",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20",
    "code_93_reader",
    "https://contador-apicloudvision.vercel.app/api/stats",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x20mt-2\x22\x20style=\x22font-size:0.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Códigos\x20disponibles:</strong>\x20",
    "\x20(quedan\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "Error\x20en\x20detección",
    "CANTIDAD_X_PRECIO_FIJO",
    "<div\x20class=\x22alert\x20alert-info\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Mostrando\x20los\x20primeros\x2020\x20productos.\x20Hay\x20",
    "dailyUsed",
    ")\x20-\x20",
    "appendChild",
    "ultimaActualizacion",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Backend\x20responde\x20pero\x20con\x20error:",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Sin\x20conexión\x20a\x20internet",
    "codeResult",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Error\x20al\x20procesar\x20la\x20imagen</div>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📦\x20Productos\x20en\x20promoción:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Error\x20cargando\x20promociones:",
    "monthlyUsed",
    "getFullYear",
    "recordUsage",
    "📸\x20Usando\x20Quagga\x20como\x20fallback",
    "pro_mensaje",
    "Enter",
    "price",
    "❌\x20Error\x20cargando\x20promociones:",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Unidades</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x20d-block\x22\x20style=\x22font-size:\x201.3rem;\x22>$",
    "backend_mejorado",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22\x20style=\x22font-size:\x200.9rem;\x20line-height:\x201.2;\x22>",
    "value",
    "catch",
    "fillStyle",
    "✅\x20Usando\x20cantidad\x20y\x20precio\x20calculado:",
    "cookie",
    "image/png",
    "test",
    "now",
    "\x20con\x20datos\x20disponibles)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "pr_name",
    "add",
    "<br>•\x20🔍\x20<strong>Códigos\x20detectados:</strong>\x20",
    "\x20|\x20Promociones:\x20",
    "SKU",
    "PERMISSION_DENIED",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "autocapitalize",
    "📊\x20Resumen\x20endpoints\x20productos:",
    "pr_sku",
    "data_matrix",
    "ean_reader",
    "className",
    "revokeObjectURL",
    "🔄\x20Productos\x20existentes:\x20cargando\x20solo\x20promociones...",
    "</small>",
    "❌\x20Formato\x20de\x20promociones\x20inválido",
    "Fecha\x20desconocida",
    "Actualizar",
    "Nueva\x20versión\x20disponible.\x20¿Recargar\x20la\x20página?",
    "productos",
    "Código\x20no\x20válido",
    "data-copiar",
    "code_39",
    "pro_nombrePromo",
    "fulfilled",
    "SKU\x20desconocido",
    "valor_total",
    "<small\x20class=\x22text-muted\x20mt-1\x20d-block\x22>",
    "width",
    "userAgent",
    "\x20encontrados</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong></small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "❌\x20Error\x20cargando\x20configuración:",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20Error\x20verificando\x20estado",
    "keys",
    "dailyLimit",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "Backend\x20error",
    "Timeout",
    "some",
    "upc_e",
    "application/json",
    "onclick",
    "📋\x20Configuración\x20final\x20para\x20códigos\x20largos...",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB",
    "🔥\x20",
    "code",
    "<div\x20class=\x22row\x22>",
    "Error\x20HTTP:\x20",
    "❌\x20Error\x20en\x20diagnóstico:",
    "format",
    "block",
    "no-store",
    "#198754",
    "decodeSingle",
    "isArray",
    "✅\x20Todos\x20los\x20endpoints\x20consultados",
    "pro_tipoPromo",
    "🔄\x20Primera\x20carga:\x20cargando\x20productos\x20y\x20promociones...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>",
    "getImageData",
    "d-flex\x20justify-content-center\x20mb-3",
    "Error\x20obteniendo\x20promociones:",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22>Total\x20con\x20Promo</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "upc_a",
    "continuous",
    "Error\x20",
    "#000000",
    "1292929CACxpu",
    "ean_8",
    "?t=",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x22\x20style=\x22min-width:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "✅\x20Códigos\x20válidos:\x20",
    "innerHTML",
    "\x20->\x20",
    "promociones_ts",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "error",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Formato:",
    "cantidad",
    "Hace\x20",
    "API_KEY_INVALID",
    "code_32_reader",
    "toUTCString",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20SKU\x22\x20data-copiar=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "remainingDaily",
    "DATA_MATRIX",
    "history",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>",
    "%</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x22\x20style=\x22height:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-",
    "SUCCESS",
    "🎯\x20Mejor\x20código\x20seleccionado:\x20\x22",
    "itf",
    "none",
    "%;\x20transition:\x20width\x200.3s\x20ease;\x22\x20aria-valuenow=\x22",
    "enabled",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudieron\x20cargar\x20las\x20promociones:\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Con\x20códigos\x20adicionales:</strong>\x20",
    "Error\x20al\x20cargar\x20productos:",
    "🔄\x20Consultando\x20endpoint\x20básico...",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔑\x20API\x20Key\x20inválida\x20-\x20verifica\x20la\x20configuración\x20en\x20Vercel</div>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🏦\x20Problema\x20de\x20Facturación</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20facturación\x20no\x20está\x20habilitada\x20en\x20el\x20proyecto\x20correcto\x20(#1070150612422)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/billing\x22\x20target=\x22_blank\x22>Ve\x20a\x20Google\x20Cloud\x20Billing</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "readwrite",
    "❌\x20Error\x20con\x20Google\x20Vision,\x20usando\x20fallback:",
    "controllerchange",
    "Backend\x20no\x20disponible\x20-\x20usando\x20detección\x20local",
    "createElement",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Error\x20verificando\x20datos\x20locales:",
    "2441097pHYTvn",
    "mostrarModalPromocionesGenerales",
    "then",
    "</div>",
    "https://verificadorb9-backend.vercel.app/api/promociones-mejoradas",
    "d-flex\x20flex-column\x20align-items-center\x20mb-3",
    "💾\x20Guardar",
    "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "PRECIO",
    "readonly",
    "•\x20Diario:\x20",
    "tipo",
    "básico\x20✅",
    "<i\x20class=\x22bi\x20bi-clipboard-check\x22></i>",
    ".alert-danger",
    "Básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "toFixed",
    "fillRect",
    "code_39_vin_reader",
    "loadUsage",
    "✅\x20Endpoint\x20promociones\x20consultado:\x20",
    "Formato\x20de\x20respuesta\x20no\x20reconocido",
    "historial",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "saveUsage",
    "\x20usos\x20mensuales",
    "cerrarModalIOS",
    "upc_e_reader",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20descripción\x22\x20data-copiar=\x22",
    "Nunca\x20actualizado",
    "hide",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🎉\x20¡Google\x20Vision\x20API\x20Activa!</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>✅\x20La\x20detección\x20premium\x20está\x20funcionando\x20correctamente</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Fallback\x20automático:\x20Local\x20→\x20Google\x20Vision</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    ";\x20path=/",
    "statechange",
    "🚀\x20Usando\x20Barcode\x20Detection\x20API\x20nativa",
    "❌\x20Sin\x20datos,\x20usando\x20genérico",
    "ayuda",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x20",
    "8367MpfjrA",
    "⚠️\x20Usando\x20nombre\x20completo:",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-warning\x22\x20style=\x22font-weight:500;\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "#btnTexto",
    "✅\x20Google\x20Vision\x20API\x20usada\x20exitosamente\x20-\x20contador\x20local\x20actualizado",
    "mediaDevices",
    "⚠️\x20Error\x20con\x20endpoint\x20de\x20códigos\x20de\x20barras:",
    "filter",
    "🔄\x20Probando\x20configuración\x20alternativa...",
    "⚠️\x20Límite\x20local\x20alcanzado.\x20Mensual:\x20",
    "oncomplete",
    "matchAll",
    "<div\x20class=\x22alert\x20alert-danger\x22>❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API</div>",
    "getElementById",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>CONTADO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20mx-2\x22\x20style=\x22font-size:1.5rem;\x22>|</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x20precio-responsive\x22>$\x20",
    "preventDefault",
    "height",
    "CODE128",
    "scrollIntoView",
    "Nunca",
    "querySelector",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22consultarProductoDesdeModal(\x27",
    "replace",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Área\x20para\x20mostrar\x20resultados\x20del\x20diagnóstico\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22diagnostico-resultado\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Detección\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20📷\x20<strong>Local:</strong>\x20Html5QrCode\x20+\x20BarcodeDetector\x20+\x20Quagga.js<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🌐\x20<strong>Premium:</strong>\x20Google\x20Vision\x20API\x20(para\x20códigos\x20difíciles)<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🔄\x20<strong>Automático:</strong>\x20Fallback\x20inteligente\x20entre\x20métodos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>✅\x20Ventajas\x20del\x20backend:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Sin\x20límites\x20por\x20dispositivo<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Detección\x20superior\x20en\x20superficies\x20reflectivas<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Mejor\x20precisión\x20con\x20códigos\x20largos<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Funciona\x20con\x20imágenes\x20de\x20baja\x20calidad<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Gestión\x20centralizada\x20de\x20recursos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🔄\x20Fallback\x20automático:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Si\x20el\x20backend\x20no\x20está\x20disponible,\x20la\x20app\x20usará\x20detección\x20local\x20automáticamente.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Recomendación:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mantén\x20activada\x20la\x20detección\x20avanzada\x20para\x20mejores\x20resultados.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "🔄\x20Nueva\x20versión\x20del\x20Service\x20Worker\x20disponible",
    "códigos\x20de\x20barras\x20❌\x20(timeout/error)",
    "json",
    "pro_precio_total",
    "onLine",
    "Formato\x20de\x20promociones\x20inválido",
    "reader",
    "904LCdcZb",
    "27349pBRSzm",
    "autocomplete",
    "putImageData",
    "precioTotal",
    "\x22\x20(",
    "requestSubmit",
    "slice",
    "codigo",
    "clipboard",
    "detalles",
    "❌\x20Google\x20Vision\x20no\x20detectó\x20texto",
    "position",
    "<br>",
    "validFrom",
    "fileInput",
    "Productos:\x20nunca\x20|\x20Promociones:\x20",
    "./service-worker.js",
    "d-none",
    "❌\x20Error\x20consultando\x20endpoints",
    "2023374msXyzE",
    "pr_precio",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-warning\x22>🏷️\x20Productos\x20con\x20Promociones</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>",
    "status",
    "✅\x20Código\x20detectado\x20(configuración\x20principal):",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-img-top\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-secondary\x22\x20style=\x22height:\x2080px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-white\x22>📦</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "consultarProductoDesdeHistorial",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22promociones-container\x22\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>🔍\x20Verificando\x20promociones...</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "join",
    "checked",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>",
    "idPromo",
    "Error\x20al\x20copiar:",
    "•\x20Mensual:\x20",
    "auto",
    "getItem",
    "environment",
    "skus",
    "state",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>...\x20y\x20",
    "1\x20endpoint\x20completado,\x20finalizando...",
    "⚠️\x20<strong>Límite\x20diario\x20cerca:</strong>\x20",
    "x-large",
    "alternativa",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Usando\x20solo\x20detección\x20local",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x22>$",
    "🏷️\x20",
    "upc_reader",
    "🔧\x20Sugerencia:\x20Verificar\x20configuración\x20CORS\x20en\x20el\x20backend\x20para\x20/api/productos-con-codigos",
    "🔄\x20Consultando\x20endpoint\x20con\x20códigos\x20de\x20barras...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(",
    "Conectando\x20con\x20todos\x20los\x20servidores",
    "serviceWorker",
    "⚠️\x20Solo\x20cantidad\x20extraída:",
    "dailyCount",
    "\x20\x20\x20•\x20Problema\x20en\x20el\x20código\x20de\x20la\x20función\x20serverless",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20",
    "30CxyGSO",
    "🔍\x20Código\x20candidato\x20encontrado:\x20",
    "\x20unidades\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20role=\x22progressbar\x22\x20style=\x22width:\x20",
    "📊\x20Datos\x20extraídos\x20antes\x20de\x20procesamiento:",
    "left",
    "limpiarHistorialBtn",
    "500",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "userChoice",
    "✅\x20Código\x20detectado\x20(configuración\x20agresiva):",
    ".modal-backdrop",
    "1006422iZhcWl",
    "No\x20se\x20puede\x20generar\x20código\x20de\x20barras:\x20canvas\x20o\x20código\x20faltante",
    "googleVisionConfig",
    "sugerenciasDiv",
    "✅\x20Extraído\x20formato\x20con\x20peso\x20del\x20nombre:",
    "❌\x20Endpoint\x20/api/stats\x20falló:",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20alt=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20spinner-border-sm\x20me-2\x22\x20role=\x22status\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Diagnosticando\x20backend...\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "CODE_93",
    "<div\x20class=\x22text-center\x20text-muted\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-box-seam\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x20mb-0\x22>Productos\x20no\x20disponibles</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "has",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20",
    "btn-success",
    "agresiva",
    "🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "storageKey",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22row\x20align-items-center\x20justify-content-center\x20g-0\x20mb-4\x22\x20style=\x22padding:\x200px\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "log",
    "CORS_ERROR",
    "precio_total",
    "FECHA_ESCANEO",
    "nearest",
    "⚠️\x20BarcodeDetector\x20no\x20disponible\x20en\x20este\x20navegador",
    "relative",
    "\x20para:\x20",
    "promociones:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x20text-muted\x20small\x22>",
    "\x20comprando\x20",
    "🔗\x20Ve\x20a:\x20https://console.cloud.google.com/billing",
    "warningThreshold",
    "🏦\x20Error\x20de\x20facturación:\x20Habilita\x20billing\x20en\x20Google\x20Cloud",
    "⚠️\x20Error\x20con\x20endpoint\x20básico:",
    "No\x20especificado",
    "⚡\x20Actualización\x20completada\x20en\x20",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Actualizado:</strong>\x20",
    "nombre_promocion",
    "success",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
    "race",
    "video",
    "getMonth",
    "Failed\x20to\x20fetch",
    "🔍\x20Códigos\x20detectados\x20por\x20API\x20nativa:\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Error\x20en\x20diagnóstico:\x20",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x20\x20\x20Posibles\x20causas:",
    "<img\x20src=\x22",
    "primary",
    "básico\x20❌\x20(error)",
    "\x0a\x20\x20\x20\x20\x20\x20",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "BarcodeDetector",
    "imageSmoothingEnabled",
    "❌\x20Código\x20no\x20encontrado:\x20\x22",
    "trim",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-4\x20d-flex\x20justify-content-center\x20mb-3\x20mb-lg-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fff;\x20border-radius:16px;\x20box-shadow:0\x204px\x2024px\x20rgba(0,0,0,0.15);\x20padding:16px;\x20display:flex;\x20justify-content:center;\x20align-items:center;\x20width:240px;\x20height:140px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "promoResult",
    "\x20longitud:\x20",
    "zIndex",
    "http",
    "NetworkError",
    "max",
    "floor",
    "round",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "statusText",
    "200px",
    "<span\x20class=\x22badge\x20bg-warning\x20text-dark\x20me-2\x20mb-1\x22\x20style=\x22font-size:0.85rem;\x22>🔥\x20",
    "⚙️\x20Configuración\x20de\x20detección\x20avanzada",
    "result",
    "pop",
    "\x22\x20formato:\x20",
    "❌\x20Instalación\x20rechazada",
    "isConfirmed",
    "<span\x20class=\x22badge\x20bg-secondary\x22\x20style=\x22font-size:\x200.7rem;\x22>+",
    "map",
    "bg-danger",
    "abs",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "codigos_barras",
    "srcObject",
    "#f8f9fa",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-danger\x20text-white\x22\x20style=\x22font-size:\x201.2rem;\x20padding:\x2010px\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🎯\x20Umbral\x20calculado:\x20",
    "Error\x20creando\x20modal\x20Bootstrap:",
    "es-CL",
    "🌐\x20<strong>Backend:</strong>\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "mostrarProductoPromocion",
    "#btnPromociones",
    "PDF_417",
    "files",
    "📋\x20Datos\x20de\x20promociones:",
    "❌\x20Error\x20específico\x20del\x20backend:",
    "Actualizando...",
    "Backend\x20error:\x20",
    "rejected",
    "🔄\x20No\x20hay\x20promociones\x20locales,\x20consultando\x20servidor...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20pt-2\x20border-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>📅\x20Vigencia:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "forEach",
    "getTracks",
    "fillText",
    "fuente",
    "Consultando\x203\x20endpoints...",
    "qty",
    "CODABAR",
    "EAN8",
    "split",
    "alert-success",
    "CORS",
    "2836MhIiUI",
    "message",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:#495057;\x22>🏷️\x20PROMOCIONES\x20ACTIVAS</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "controller",
    "🎯\x20Consultando\x20promociones...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "#mensajeActualizacion",
    "applyConstraints",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22verPromociones()\x22\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "monthlyLimit",
    "\x20más</span>",
    "#btnSpinner",
    "insertBefore",
    "1000",
    "CORS_ERROR:\x20Backend\x20no\x20accesible\x20desde\x20este\x20dominio",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "💡\x20Ve\x20a:\x20https://console.developers.google.com/billing/enable?project=1070150612422",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20consultar-historial-btn\x22\x20title=\x22Ver\x20detalles\x20completos\x22\x20data-sku=\x22",
    "match",
    "Error\x20al\x20cargar\x20promociones:",
    "🎯\x20Producto\x20encontrado\x20con\x20códigos\x20múltiples:",
    "monthlyCount",
    "✅\x20Endpoint\x20básico\x20consultado:",
    "enabledCheck",
    "CODE_128",
    "📊\x20Respuesta\x20del\x20backend:",
    "target",
    "Consultando\x20los\x203\x20endpoints...",
    "startsWith",
    "toISOString",
    "splice",
    "#ffffff",
    "promociones-generales-modal-body",
    "✅\x20Detección\x20avanzada\x20activada",
    "<div\x20class=\x22alert\x20alert-success\x22>✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente</div>",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "includes",
    "Productos:\x20",
    "getRegistrations",
    "body",
    "getInstance",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "NOMBRE",
    "pro_precioPromo",
    "style",
    "🔧\x20Error\x20500\x20detectado\x20-\x20Analizando\x20causa\x20específica:",
    "parentNode",
    "\x20segundos",
    "\x22\x20style=\x22width:218px;\x20height:124px;\x20object-fit:contain;\x20background:#fff;\x20border-radius:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "Generando\x20código\x20de\x20barras\x20",
    "createObjectURL",
    "getUsageStatus",
    "details",
    "#ultimaActualizacion",
    "No\x20se\x20pudieron\x20cargar\x20productos\x20de\x20ningún\x20endpoint",
    "Error\x20procesando\x20imagen:",
    "códigos\x20de\x20barras\x20✅",
    "📝\x20Texto\x20completo\x20detectado:",
    "list-group\x20position-absolute\x20w-100",
    "✅\x20Configuración\x20guardada",
    "reduce",
    "nombre",
    "fire",
    "totalCodigos",
    "text",
    "productosBasicos",
    "\x20diario<br>🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "BILLING_DISABLED",
    "outcome",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "canvas",
    "textContent",
    "principal",
    "promociones",
    "image/jpeg",
    "Error\x20verificando\x20promociones:",
    "🔄\x20Consultando\x20endpoint\x20de\x20promociones...",
    "\x20\x20\x20•\x20Variable\x20GOOGLE_VISION_API_KEY\x20no\x20configurada\x20en\x20Vercel",
    "smooth",
    "Descargando\x20desde\x20múltiples\x20endpoints...",
    ".consultar-historial-btn",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20ms-2\x22\x20style=\x22font-size:0.7rem;\x22>🏷️\x20PROMO</span>",
    "❌\x20Error\x20guardando\x20promociones\x20en\x20IndexedDB:",
    "#btnActualizar",
    "register",
    "onupgradeneeded",
    "</span>",
    "📊\x20Datos\x20finales\x20para\x20construcción:",
    "button",
    "disconnect",
    "div",
    "🏦\x20PROBLEMA:\x20Facturación\x20no\x20habilitada\x20en\x20el\x20proyecto\x20correcto",
    "es_oficial",
    "rawValue",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "usarCodigosBarras",
    "code_93",
    ")<br>",
    "Error\x20en\x20actualización:",
    "total_price",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers</div>",
    "precio",
    "🚫\x20PROBLEMA:\x20Permisos\x20denegados\x20-\x20Vision\x20API\x20no\x20habilitada",
    "script",
    "unshift",
    "códigos\x20de\x20barras\x20⚠️\x20(sin\x20datos)",
    "cors",
    "setAttribute",
    "installed",
    "✅\x20Código\x20válido\x20seleccionado:\x20",
    "<small\x20class=\x22text-success\x22><strong>Precio\x20unitario:</strong>\x20$",
    "resultado",
    "básico\x20❌\x20(error\x20HTTP)",
    "parse",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x20ms-2\x22>1\x20unidad</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22><strong>SKU:</strong>\x20",
    "promocionesGeneralesModal",
    "center",
    "boundingBox",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-decoration-line-through\x20text-muted\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>$",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-warning\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔥\x20",
    "Verifique\x20su\x20conexión\x20a\x20internet",
    "🔍\x20Validando:\x20\x22",
    "\x20productos\x20(",
    "Error\x20consultando\x20producto\x20desde\x20historial:",
    "i2of5_reader",
    "20BEMANy",
    "large",
    "textAnnotations",
    "\x20(redondeado)",
    "false",
    "UPC_A",
    "key",
    "CODIGO",
    "ITF",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Endpoint\x20/api/stats\x20falló:\x20",
    "formulario",
    "onsuccess",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20<strong\x20class=\x22ms-1\x22>",
    "✅\x20Backend\x20activo.\x20Estadísticas:",
    "reason",
    "stop",
    "⚠️\x20Error\x20al\x20procesar\x20producto\x20",
    "canUseAPI",
    "toLocaleString",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "all",
    "btn-outline-primary",
    "classList",
    "Iniciando...",
    "transaction",
    "onerror",
    "reload",
    "off",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
    "?stats=true",
    "Finalizada\x20en\x20",
    "productos_ts",
    "verificadorB9DB",
    "querySelectorAll",
    "input",
    "❌\x20Todas\x20las\x20configuraciones\x20fallaron",
    "❌\x20Cancelar",
    "https://media.megaservicio.net",
    "ean_13",
    "lastUsedDate",
    "✅\x20Tercera\x20tentativa\x20exitosa:",
    "border-bottom\x20pb-3",
    "✅\x20Datos\x20locales\x20encontrados:\x20productos:",
    "placeholder",
    "https://contador-apicloudvision.vercel.app/api/vision-detect",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-success\x20fw-bold\x22>$",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Códigos\x20totales:</strong>\x20",
    "innerWidth",
    "submit",
    "🚀\x20Intentando\x20con\x20Google\x20Vision\x20API...",
    "detalle",
    "mensaje",
    "2\x20endpoints\x20completados,\x20finalizando...",
    "💡\x20El\x20contador\x20del\x20backend\x20se\x20actualiza\x20automáticamente\x20en\x20el\x20servidor",
  ];
  _0x2e04 = function () {
    return _0x220cdc;
  };
  return _0x2e04();
}
function intentarSegundaPasada(_0xe76a07, _0x824abe = []) {
  const _0x18c53a = _0x1b5bb5;
  console["log"](
    "🔄\x20Tercera\x20tentativa:\x20imagen\x20original\x20sin\x20procesamiento..."
  );
  const _0x6a5480 = document[_0x18c53a(0x14e)](_0x18c53a(0x29a)),
    _0x369f56 = _0x6a5480[_0x18c53a(0x331)]("2d");
  let { width: _0x42af8a, height: _0x2fc1d1 } = _0xe76a07;
  const _0x503136 = 0x640;
  if (_0x42af8a < _0x503136) {
    const _0x3e70b6 = _0x503136 / _0x42af8a;
    (_0x42af8a *= _0x3e70b6), (_0x2fc1d1 *= _0x3e70b6);
  }
  (_0x6a5480["width"] = _0x42af8a),
    (_0x6a5480["height"] = _0x2fc1d1),
    (_0x369f56[_0x18c53a(0x217)] = ![]),
    _0x369f56["drawImage"](_0xe76a07, 0x0, 0x0, _0x42af8a, _0x2fc1d1);
  const _0xed602a = _0x369f56[_0x18c53a(0x11b)](0x0, 0x0, _0x42af8a, _0x2fc1d1),
    _0x23b20f = _0xed602a[_0x18c53a(0x36f)];
  for (
    let _0x4eea56 = 0x0;
    _0x4eea56 < _0x23b20f[_0x18c53a(0x359)];
    _0x4eea56 += 0x4
  ) {
    const _0x1cf3b1 = _0x23b20f[_0x4eea56],
      _0x2671c7 = _0x23b20f[_0x4eea56 + 0x1],
      _0x231e95 = _0x23b20f[_0x4eea56 + 0x2],
      _0x8323f8 = 1.5,
      _0x1eeec5 = Math[_0x18c53a(0x222)](
        0.299 * _0x1cf3b1 + 0.587 * _0x2671c7 + 0.114 * _0x231e95
      ),
      _0x13924c = Math["min"](
        0xff,
        Math[_0x18c53a(0x220)](0x0, (_0x1eeec5 - 0x80) * _0x8323f8 + 0x80)
      );
    (_0x23b20f[_0x4eea56] = _0x13924c),
      (_0x23b20f[_0x4eea56 + 0x1] = _0x13924c),
      (_0x23b20f[_0x4eea56 + 0x2] = _0x13924c);
  }
  _0x369f56["putImageData"](_0xed602a, 0x0, 0x0);
  const _0x1d977f = {
    src: _0x6a5480[_0x18c53a(0x333)](_0x18c53a(0xdb)),
    numOfWorkers: 0x0,
    locate: !![],
    inputStream: {
      size: Math[_0x18c53a(0x220)](_0x42af8a, _0x2fc1d1),
      area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
    },
    locator: {
      patchSize: _0x18c53a(0x1c3),
      halfSample: ![],
      debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
    },
    decoder: {
      readers: [
        _0x18c53a(0xea),
        _0x18c53a(0x1c9),
        _0x18c53a(0x366),
        _0x18c53a(0xb1),
        _0x18c53a(0xae),
        _0x18c53a(0x16c),
        "i2of5_reader",
        _0x18c53a(0x35b),
      ],
      multiple: !![],
      debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
    },
  };
  console["log"](_0x18c53a(0x10a)),
    Quagga[_0x18c53a(0x115)](_0x1d977f, function (_0x1a132a) {
      const _0x4d8695 = _0x18c53a;
      if (_0x1a132a && _0x1a132a[_0x4d8695(0xc7)]) {
        const _0x445e2a = _0x1a132a[_0x4d8695(0xc7)][_0x4d8695(0x10d)]
          [_0x4d8695(0x219)]()
          [_0x4d8695(0x18e)](/\s+$/, "");
        _0x824abe[_0x4d8695(0x311)](
          _0x445e2a +
            "\x20(" +
            _0x1a132a[_0x4d8695(0xc7)][_0x4d8695(0x111)] +
            ")"
        ),
          console[_0x4d8695(0x1f3)](
            _0x4d8695(0x2f9),
            _0x445e2a,
            "Formato:",
            _0x1a132a[_0x4d8695(0xc7)][_0x4d8695(0x111)]
          );
        if (
          validarCodigo(_0x445e2a, _0x1a132a["codeResult"][_0x4d8695(0x111)])
        ) {
          (inputCodigo[_0x4d8695(0xd6)] = _0x445e2a), form["requestSubmit"]();
          return;
        }
      }
      console["log"](_0x4d8695(0x2f4));
      let _0x54ca2e = "";
      _0x824abe[_0x4d8695(0x359)] > 0x0 &&
        (_0x54ca2e = _0x4d8695(0xe1) + _0x824abe[_0x4d8695(0x1b5)](",\x20"));
      let _0x247861 = "";
      if (GOOGLE_VISION_CONFIG["enabled"]) {
        const _0x39d423 = visionUsageTracker[_0x4d8695(0x287)]();
        (_0x247861 =
          "<br><br>📊\x20<strong>Uso\x20local:</strong>\x20" +
          _0x39d423[_0x4d8695(0xcb)] +
          "/" +
          _0x39d423[_0x4d8695(0x25d)] +
          "\x20mensual,\x20" +
          _0x39d423[_0x4d8695(0xbf)] +
          "/" +
          _0x39d423[_0x4d8695(0x102)] +
          _0x4d8695(0x296)),
          verificarBackend()
            [_0x4d8695(0x153)]((_0x442a77) => {
              const _0x2a51ee = _0x4d8695;
              if (document["querySelector"](_0x2a51ee(0x15f))) {
                const _0x19c036 = document[_0x2a51ee(0x18c)](_0x2a51ee(0x15f));
                _0x19c036 &&
                  (_0x19c036[_0x2a51ee(0x12a)] = _0x19c036[_0x2a51ee(0x12a)][
                    "replace"
                  ](
                    _0x2a51ee(0x1ef),
                    _0x2a51ee(0x239) + _0x442a77[_0x2a51ee(0x304)]
                  ));
              }
            })
            ["catch"](() => {});
      }
      (resultadoDiv["innerHTML"] =
        _0x4d8695(0x310) + _0x54ca2e + _0x247861 + _0x4d8695(0x34b)),
        renderHistorial();
    });
}
async function mostrarConfiguracion() {
  const _0x526f31 = _0x1b5bb5,
    _0x526e97 = await verificarBackend();
  let _0x46e278 = null;
  if (CONFIG_ENDPOINTS[_0x526f31(0x2b3)])
    try {
      const _0x174bda = await fetch(
        CONFIG_ENDPOINTS["productosConCodigos"] + _0x526f31(0x2ee)
      );
      if (_0x174bda["ok"]) {
        const _0x1d7ed7 = await _0x174bda[_0x526f31(0x193)]();
        _0x46e278 = _0x1d7ed7["estadisticas"];
      }
    } catch (_0x5455f6) {
      console["log"](_0x526f31(0x372));
    }
  let _0x31924b = "";
  _0x46e278 &&
    (_0x31924b =
      _0x526f31(0x322) +
      _0x46e278["totalProductos"] +
      _0x526f31(0x2ff) +
      _0x46e278[_0x526f31(0x293)] +
      _0x526f31(0x145) +
      _0x46e278[_0x526f31(0x326)] +
      _0x526f31(0x204) +
      new Date(_0x46e278[_0x526f31(0xc2)])[_0x526f31(0x2e3)]() +
      _0x526f31(0xc5)),
    Swal[_0x526f31(0x292)]({
      title: _0x526f31(0x227),
      html:
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-check\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22form-check-input\x22\x20type=\x22checkbox\x22\x20id=\x22enabledCheck\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (GOOGLE_VISION_CONFIG[_0x526f31(0x142)] ? _0x526f31(0x1b6) : "") +
        ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-check-label\x22\x20for=\x22enabledCheck\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Activar\x20detección\x20avanzada\x20(Backend)</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Usa\x20servidor\x20dedicado\x20para\x20mejor\x20detección\x20de\x20códigos\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20" +
        (_0x526e97["activo"] ? _0x526f31(0x251) : _0x526f31(0x364)) +
        "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🌐\x20Google\x20Vision\x20API:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x526e97[_0x526f31(0x304)] +
        "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Backend:\x20https://contador-apicloudvision.vercel.app/</small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-info\x20btn-sm\x22\x20onclick=\x22diagnosticarBackend()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Probar\x20Conexión\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x31924b +
        _0x526f31(0x18f),
      width: 0x258,
      showCancelButton: !![],
      confirmButtonText: _0x526f31(0x157),
      cancelButtonText: _0x526f31(0x2f5),
      confirmButtonColor: _0x526f31(0x114),
      cancelButtonColor: _0x526f31(0x309),
      preConfirm: () => {
        const _0x1f7a7e = _0x526f31,
          _0x19bc33 = document["getElementById"](_0x1f7a7e(0x26b))[
            _0x1f7a7e(0x1b6)
          ];
        return { enabled: _0x19bc33 };
      },
    })[_0x526f31(0x153)]((_0x2da468) => {
      const _0x2432fc = _0x526f31;
      if (_0x2da468[_0x2432fc(0x22c)]) {
        const { enabled: _0x3c8fdd } = _0x2da468[_0x2432fc(0xd6)];
        (GOOGLE_VISION_CONFIG["enabled"] = _0x3c8fdd),
          localStorage[_0x2432fc(0x358)](
            _0x2432fc(0x1e2),
            JSON[_0x2432fc(0x328)]({ enabled: _0x3c8fdd })
          );
        const _0x57bbb9 = _0x3c8fdd ? _0x2432fc(0x275) : _0x2432fc(0x1c6);
        Swal[_0x2432fc(0x292)]({
          title: _0x2432fc(0x28f),
          text: _0x57bbb9,
          icon: _0x2432fc(0x206),
          timer: 0x7d0,
          showConfirmButton: ![],
        });
      }
    });
}
function cargarConfiguracionGuardada() {
  const _0x42f780 = _0x1b5bb5,
    _0x4fe976 = localStorage[_0x42f780(0x1bc)]("googleVisionConfig");
  if (_0x4fe976)
    try {
      const _0x5020ab = JSON[_0x42f780(0x2c5)](_0x4fe976);
      (GOOGLE_VISION_CONFIG[_0x42f780(0x142)] =
        _0x5020ab[_0x42f780(0x142)] || ![]),
        GOOGLE_VISION_CONFIG[_0x42f780(0x142)] &&
          console["log"](_0x42f780(0xad));
    } catch (_0x2ad6f2) {
      console[_0x42f780(0x1f3)](_0x42f780(0xff), _0x2ad6f2);
    }
}
"serviceWorker" in navigator &&
  window[_0x1b5bb5(0x342)]("load", () => {
    const _0x11e459 = _0x1b5bb5;
    navigator[_0x11e459(0x1cf)]
      [_0x11e459(0x2a8)](_0x11e459(0x1a9))
      [_0x11e459(0x153)]((_0x3079af) => {
        const _0x3d2beb = _0x11e459;
        console["log"](_0x3d2beb(0x9f), _0x3079af["scope"]),
          _0x3079af[_0x3d2beb(0x342)](_0x3d2beb(0x97), () => {
            const _0x1e8563 = _0x3d2beb;
            console[_0x1e8563(0x1f3)](_0x1e8563(0x191));
            const _0x1899db = _0x3079af["installing"];
            _0x1899db[_0x1e8563(0x342)](_0x1e8563(0x172), () => {
              const _0x4a7e39 = _0x1e8563;
              _0x1899db[_0x4a7e39(0x1bf)] === _0x4a7e39(0x2c0) &&
                navigator["serviceWorker"][_0x4a7e39(0x256)] &&
                (console["log"](
                  "🆕\x20Nueva\x20versión\x20lista\x20para\x20usar"
                ),
                confirm(_0x4a7e39(0xf2)) &&
                  (_0x1899db[_0x4a7e39(0x36b)]({ type: "SKIP_WAITING" }),
                  window[_0x4a7e39(0x332)][_0x4a7e39(0x2eb)]()));
            });
          });
      })
      ["catch"]((_0x3d2a56) => console["error"](_0x11e459(0x263), _0x3d2a56)),
      navigator[_0x11e459(0x1cf)][_0x11e459(0x342)]("controllerchange", () => {
        const _0x4d32fd = _0x11e459;
        console["log"]("🔄\x20Service\x20Worker\x20actualizado"),
          window["location"][_0x4d32fd(0x2eb)]();
      });
  });
window[_0x1b5bb5(0x342)]("beforeinstallprompt", (_0x31b19f) => {
  const _0x151341 = _0x1b5bb5;
  _0x31b19f[_0x151341(0x187)](),
    (deferredPrompt = _0x31b19f),
    installBtn &&
      installBtn[_0x151341(0x2e7)][_0x151341(0x365)](_0x151341(0x1aa));
}),
  installBtn[_0x1b5bb5(0x342)](_0x1b5bb5(0x373), (_0x39901f) => {
    const _0x51a77e = _0x1b5bb5;
    deferredPrompt &&
      (deferredPrompt["prompt"](),
      deferredPrompt[_0x51a77e(0x1dd)]["then"]((_0x17d184) => {
        const _0x4f83b3 = _0x51a77e;
        _0x17d184[_0x4f83b3(0x298)] === _0x4f83b3(0x312)
          ? console["log"]("✅\x20Instalación\x20aceptada")
          : console[_0x4f83b3(0x1f3)](_0x4f83b3(0x22b)),
          (deferredPrompt = null),
          installBtn["classList"][_0x4f83b3(0xe0)]("d-none");
      }));
  });
"serviceWorker" in navigator &&
  (navigator[_0x1b5bb5(0x1cf)]
    [_0x1b5bb5(0x27a)]()
    [_0x1b5bb5(0x153)](function (_0x1f12cd) {
      const _0x1a2ae4 = _0x1b5bb5;
      for (let _0x375c1f of _0x1f12cd) {
        _0x375c1f[_0x1a2ae4(0x354)]();
      }
    }),
  navigator["serviceWorker"][_0x1b5bb5(0x342)](_0x1b5bb5(0x14c), function () {
    window["location"]["reload"]();
  }));
const style = document[_0x1b5bb5(0x14e)](_0x1b5bb5(0x280));
(style["innerHTML"] = _0x1b5bb5(0x336)),
  document[_0x1b5bb5(0x346)][_0x1b5bb5(0xc1)](style);
async function verPromociones() {
  const _0xe6d31a = _0x1b5bb5;
  try {
    console["log"](_0xe6d31a(0x257)),
      (document[_0xe6d31a(0x185)](_0xe6d31a(0x2c3))[_0xe6d31a(0x12a)] =
        _0xe6d31a(0x120));
    const [_0x1bd1a3, _0x3187d8] = await Promise[_0xe6d31a(0x2e5)]([
      fetch(_0xe6d31a(0x155)),
      getAllProductos(),
    ]);
    if (!_0x1bd1a3["ok"])
      throw new Error(
        _0xe6d31a(0x123) +
          _0x1bd1a3[_0xe6d31a(0x1af)] +
          ":\x20" +
          _0x1bd1a3[_0xe6d31a(0x224)]
      );
    const _0xcaec9c = await _0x1bd1a3[_0xe6d31a(0x193)]();
    console["log"](_0xe6d31a(0x241), _0xcaec9c);
    let _0x358bdf = [];
    if (
      _0xcaec9c[_0xe6d31a(0x1af)] === _0xe6d31a(0x13d) &&
      _0xcaec9c["promoResult"]
    )
      _0x358bdf = _0xcaec9c["promoResult"];
    else {
      if (Array[_0xe6d31a(0x116)](_0xcaec9c)) _0x358bdf = _0xcaec9c;
      else throw new Error(_0xe6d31a(0x166));
    }
    if (_0x358bdf[_0xe6d31a(0x359)] === 0x0) {
      document[_0xe6d31a(0x185)](_0xe6d31a(0x2c3))[_0xe6d31a(0x12a)] =
        _0xe6d31a(0x9a);
      return;
    }
    let _0xcdf5c6 = _0xe6d31a(0x10e);
    _0x358bdf[_0xe6d31a(0x248)]((_0x24310f, _0x2c56e0) => {
      const _0x29c3c7 = _0xe6d31a;
      let _0x3d5537 = [];
      if (
        _0x24310f[_0x29c3c7(0x1be)] &&
        Array[_0x29c3c7(0x116)](_0x24310f[_0x29c3c7(0x1be)])
      )
        _0x3d5537 = _0x24310f[_0x29c3c7(0x1be)];
      else
        _0x24310f["pro_grupoProductos_primaria"] &&
          _0x24310f[_0x29c3c7(0x33d)]["pr_sku"] &&
          (Array[_0x29c3c7(0x116)](
            _0x24310f["pro_grupoProductos_primaria"][_0x29c3c7(0xe8)]
          )
            ? (_0x3d5537 = _0x24310f[_0x29c3c7(0x33d)][_0x29c3c7(0xe8)])
            : (_0x3d5537 = _0x24310f[_0x29c3c7(0x33d)]["pr_sku"]
                [_0x29c3c7(0x250)]("\x20")
                [_0x29c3c7(0x17f)]((_0x1f0c68) => _0x1f0c68["trim"]())));
      const _0x5d9f50 = _0x3d5537[_0x29c3c7(0x22e)]((_0x32d494) => {
          const _0x2aaaa1 = _0x29c3c7;
          return _0x3187d8[_0x2aaaa1(0x337)](
            (_0x5712d1) => _0x5712d1[_0x2aaaa1(0xe8)] === _0x32d494
          );
        })[_0x29c3c7(0x17f)]((_0x39e866) => _0x39e866 !== undefined),
        _0x52f783 =
          _0x24310f["pro_nombrePromo"] ||
          _0x24310f[_0x29c3c7(0x323)] ||
          _0x29c3c7(0x344) + (_0x2c56e0 + 0x1),
        _0x4c9671 =
          _0x24310f["pro_tipoPromo"] ||
          _0x24310f[_0x29c3c7(0x15c)] ||
          "No\x20especificado",
        _0x52cea =
          _0x24310f[_0x29c3c7(0xcf)] || _0x24310f[_0x29c3c7(0x304)] || "",
        _0x8c3c86 = _0x24310f[_0x29c3c7(0x356)] || "",
        _0xfc9358 = Number(_0x8c3c86) || 0x1;
      let _0x5be859 = 0x0;
      const _0x47196c = (_0x52cea + "\x20" + _0x52f783)[_0x29c3c7(0x374)](),
        _0x18fe3d = _0x47196c["match"](/(\d+)\s*x\s*(\d+)/);
      if (_0x18fe3d) _0x5be859 = Number(_0x18fe3d[0x2]);
      else {
        const _0x4048d6 = Number(_0x24310f[_0x29c3c7(0x27f)]) || 0x0;
        _0x5be859 = _0x4048d6 * _0xfc9358;
      }
      let _0x2faaed = 0x0,
        _0x4c7ce3 = 0x0;
      if (_0x5d9f50[_0x29c3c7(0x359)] > 0x0 && _0x8c3c86 && _0x5be859 > 0x0) {
        const _0x3e54cf = _0x5d9f50[_0x29c3c7(0x22e)]((_0x208123) => {
            const _0x4e2a58 = _0x29c3c7;
            let _0x3b0f23 =
              Number(_0x208123[_0x4e2a58(0x1ad)]) ||
              Number(_0x208123["L1"]) ||
              0x0;
            return Math[_0x4e2a58(0x222)](_0x3b0f23 * 1.16 * 0x64) / 0x64;
          }),
          _0x4dfb66 =
            _0x3e54cf[_0x29c3c7(0x290)](
              (_0x1401fe, _0xd44092) => _0x1401fe + _0xd44092,
              0x0
            ) / _0x3e54cf[_0x29c3c7(0x359)];
        (_0x2faaed =
          Math[_0x29c3c7(0x222)](_0x4dfb66 * _0xfc9358 * 0x64) / 0x64),
          (_0x4c7ce3 =
            Math[_0x29c3c7(0x222)]((_0x2faaed - _0x5be859) * 0x64) / 0x64);
      }
      let _0x68f328 = "";
      if (_0x5d9f50[_0x29c3c7(0x359)] > 0x0) {
        const _0x240790 = _0x5d9f50[_0x29c3c7(0x19f)](0x0, 0x4)
          ["map"]((_0x136d8a) => {
            const _0x3ba6b4 = _0x29c3c7;
            let _0x5eaed0 = "";
            if (
              _0x136d8a[_0x3ba6b4(0xb4)] &&
              _0x136d8a[_0x3ba6b4(0xb4)][_0x3ba6b4(0x219)]() !== ""
            ) {
              if (_0x136d8a[_0x3ba6b4(0xb4)]["startsWith"](_0x3ba6b4(0x21e)))
                _0x5eaed0 = _0x136d8a[_0x3ba6b4(0xb4)];
              else {
                let _0x23d441 = _0x136d8a[_0x3ba6b4(0xb4)]["startsWith"]("/")
                  ? _0x136d8a[_0x3ba6b4(0xb4)]
                  : "/" + _0x136d8a[_0x3ba6b4(0xb4)];
                _0x5eaed0 = _0x3ba6b4(0x2f6) + _0x23d441;
              }
            }
            return _0x5eaed0
              ? _0x3ba6b4(0x258) +
                  _0x5eaed0 +
                  _0x3ba6b4(0xb5) +
                  _0x136d8a[_0x3ba6b4(0xdf)] +
                  _0x3ba6b4(0x339) +
                  _0x136d8a[_0x3ba6b4(0xdf)] +
                  _0x3ba6b4(0x31a) +
                  _0x136d8a[_0x3ba6b4(0xe8)] +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22" +
                  _0x136d8a[_0x3ba6b4(0xe8)] +
                  _0x3ba6b4(0x34d)
              : _0x3ba6b4(0x1b2) +
                  _0x136d8a[_0x3ba6b4(0xdf)] +
                  _0x3ba6b4(0x31a) +
                  _0x136d8a[_0x3ba6b4(0xe8)] +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22" +
                  _0x136d8a[_0x3ba6b4(0xe8)] +
                  _0x3ba6b4(0x34d);
          })
          ["join"]("");
        _0x68f328 =
          _0x29c3c7(0xc9) +
          _0x240790 +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x5d9f50[_0x29c3c7(0x359)] > 0x4
            ? _0x29c3c7(0x1c0) +
              (_0x5d9f50[_0x29c3c7(0x359)] - 0x4) +
              "\x20producto" +
              (_0x5d9f50[_0x29c3c7(0x359)] - 0x4 > 0x1 ? "s" : "") +
              "\x20más</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20";
      }
      _0xcdf5c6 +=
        _0x29c3c7(0x2cb) +
        _0x52f783 +
        _0x29c3c7(0x11a) +
        _0x4c9671[_0x29c3c7(0x18e)](_0x29c3c7(0xbd), "Combo\x20Especial") +
        _0x29c3c7(0x20e) +
        (_0x52cea && _0x52cea !== _0x52f783
          ? _0x29c3c7(0x1fc) +
            _0x52cea +
            "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
          : "") +
        _0x29c3c7(0x12d) +
        (_0x5be859 > 0x0
          ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x20p-3\x20bg-light\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>" +
            _0xfc9358 +
            _0x29c3c7(0xd3) +
            _0x5be859["toLocaleString"](_0x29c3c7(0x238)) +
            _0x29c3c7(0x11e) +
            (_0x2faaed > 0x0
              ? _0x29c3c7(0x2ca) +
                _0x2faaed[_0x29c3c7(0x2e3)](_0x29c3c7(0x238)) +
                _0x29c3c7(0xac)
              : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-muted\x22>-</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Sin\x20datos</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20") +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            (_0x4c7ce3 > 0x0
              ? _0x29c3c7(0xa8) +
                _0x4c7ce3["toLocaleString"](_0x29c3c7(0x238)) +
                _0x29c3c7(0x1fd) +
                _0xfc9358 +
                _0x29c3c7(0x1d6)
              : "") +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
          : _0x29c3c7(0x27d) +
            (_0x8c3c86 ? _0x29c3c7(0x31d) + _0x8c3c86 + _0x29c3c7(0x371) : "") +
            _0x29c3c7(0x1dc) +
            (precioPromo
              ? _0x29c3c7(0x1c7) +
                precioPromo +
                "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Precio\x20promocional</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              : "") +
            _0x29c3c7(0x11f)) +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x68f328 +
        _0x29c3c7(0x12d) +
        (_0x5d9f50[_0x29c3c7(0x359)] > 0x0
          ? _0x29c3c7(0x361) +
            _0x5d9f50[_0x29c3c7(0x22e)](
              (_0x4e8994, _0x3cb781) =>
                _0x29c3c7(0x176) +
                (_0x3cb781 < _0x5d9f50[_0x29c3c7(0x359)] - 0x1
                  ? _0x29c3c7(0x2fa)
                  : "") +
                "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-start\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-dark\x22\x20style=\x22font-size:\x201rem;\x22>" +
                _0x4e8994[_0x29c3c7(0xdf)] +
                _0x29c3c7(0x2c6) +
                _0x4e8994[_0x29c3c7(0xe8)] +
                _0x29c3c7(0x215) +
                (_0x4e8994[_0x29c3c7(0x308)]
                  ? _0x29c3c7(0xab) +
                    _0x4e8994[_0x29c3c7(0x308)] +
                    _0x29c3c7(0xee)
                  : "") +
                _0x29c3c7(0xc3) +
                (() => {
                  const _0x5876d2 = _0x29c3c7;
                  let _0x474759 =
                      Number(_0x4e8994[_0x5876d2(0x1ad)]) ||
                      Number(_0x4e8994["L1"]) ||
                      0x0,
                    _0x9fc337 =
                      Math[_0x5876d2(0x222)](_0x474759 * 1.16 * 0x64) / 0x64;
                  return _0x9fc337 > 0x0
                    ? _0x5876d2(0x2c2) +
                        _0x9fc337[_0x5876d2(0x161)](0x2) +
                        "</small>"
                    : "";
                })() +
                _0x29c3c7(0x316)
            )[_0x29c3c7(0x1b5)]("") +
            _0x29c3c7(0x14f)
          : "") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x3d5537[_0x29c3c7(0x359)] > _0x5d9f50[_0x29c3c7(0x359)]
          ? _0x29c3c7(0x32b) +
            _0x3d5537[_0x29c3c7(0x359)] +
            _0x29c3c7(0x1cd) +
            _0x5d9f50[_0x29c3c7(0x359)] +
            _0x29c3c7(0xde) +
            _0x3d5537[_0x29c3c7(0x19f)](0x0, 0x6)
              ["map"](
                (_0xb005f8) =>
                  _0x29c3c7(0x96) +
                  _0xb005f8 +
                  "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              )
              [_0x29c3c7(0x1b5)]("") +
            _0x29c3c7(0x1f1) +
            (_0x3d5537[_0x29c3c7(0x359)] > 0x6
              ? _0x29c3c7(0x22d) +
                (_0x3d5537[_0x29c3c7(0x359)] - 0x6) +
                _0x29c3c7(0x25e)
              : "") +
            _0x29c3c7(0x14f)
          : "") +
        _0x29c3c7(0x12d) +
        (_0x24310f[_0x29c3c7(0x1a6)] && _0x24310f[_0x29c3c7(0x343)]
          ? _0x29c3c7(0x247) +
            _0x24310f[_0x29c3c7(0x1a6)] +
            _0x29c3c7(0x93) +
            _0x24310f[_0x29c3c7(0x343)] +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
          : "") +
        _0x29c3c7(0x190);
    }),
      (_0xcdf5c6 += "</div>"),
      (_0xcdf5c6 += _0xe6d31a(0x137)),
      (document[_0xe6d31a(0x185)](_0xe6d31a(0x2c3))[_0xe6d31a(0x12a)] =
        _0xcdf5c6);
    const _0x42af7f = document[_0xe6d31a(0x2f2)](".copiar-sku-btn");
    _0x42af7f[_0xe6d31a(0x248)]((_0x223f8d) => {
      const _0x227b90 = _0xe6d31a;
      _0x223f8d[_0x227b90(0x342)]("click", function (_0x2cdda3) {
        const _0xf059ad = _0x227b90;
        _0x2cdda3["preventDefault"]();
        const _0x4e11ca = _0x223f8d[_0xf059ad(0x329)](_0xf059ad(0x334));
        navigator[_0xf059ad(0x1a1)] &&
          navigator["clipboard"]
            [_0xf059ad(0x31b)](_0x4e11ca)
            [_0xf059ad(0x153)](() => {
              const _0x253372 = _0xf059ad,
                _0x194503 = _0x223f8d[_0x253372(0x12a)];
              (_0x223f8d[_0x253372(0x12a)] = "✅"),
                _0x223f8d[_0x253372(0x2e7)][_0x253372(0x365)](_0x253372(0x2e6)),
                _0x223f8d["classList"][_0x253372(0xe0)](_0x253372(0x1ed)),
                setTimeout(() => {
                  const _0x25c083 = _0x253372;
                  (_0x223f8d[_0x25c083(0x12a)] = _0x194503),
                    _0x223f8d[_0x25c083(0x2e7)][_0x25c083(0x365)](
                      _0x25c083(0x1ed)
                    ),
                    _0x223f8d["classList"]["add"](_0x25c083(0x2e6));
                }, 0x4b0);
            })
            [_0xf059ad(0xd7)]((_0x3c3975) => {
              const _0x1dd28f = _0xf059ad;
              console["error"](_0x1dd28f(0x1b9), _0x3c3975);
              const _0x208fc = _0x223f8d[_0x1dd28f(0x12a)];
              (_0x223f8d["innerHTML"] = "❌"),
                setTimeout(() => {
                  const _0x248bb9 = _0x1dd28f;
                  _0x223f8d[_0x248bb9(0x12a)] = _0x208fc;
                }, 0x4b0);
            });
      });
    });
  } catch (_0x483b9d) {
    console["error"](_0xe6d31a(0xd2), _0x483b9d),
      (document["getElementById"]("resultado")[_0xe6d31a(0x12a)] =
        _0xe6d31a(0x143) + _0x483b9d[_0xe6d31a(0x254)] + _0xe6d31a(0x25b));
  }
}
cargarConfiguracionGuardada(), renderHistorial();
