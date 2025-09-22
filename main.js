const _0x14e179 = _0x5b4b;
(function (_0x2acf2b, _0x39b6cf) {
  const _0x1fc67b = _0x5b4b,
    _0x407703 = _0x2acf2b();
  while (!![]) {
    try {
      const _0x3633b5 =
        parseInt(_0x1fc67b(0xc5)) / 0x1 +
        parseInt(_0x1fc67b(0x1d9)) / 0x2 +
        (parseInt(_0x1fc67b(0xab)) / 0x3) * (parseInt(_0x1fc67b(0x17d)) / 0x4) +
        -parseInt(_0x1fc67b(0x18e)) / 0x5 +
        -parseInt(_0x1fc67b(0x280)) / 0x6 +
        (parseInt(_0x1fc67b(0x183)) / 0x7) *
          (-parseInt(_0x1fc67b(0x103)) / 0x8) +
        (parseInt(_0x1fc67b(0x2fc)) / 0x9) * (parseInt(_0x1fc67b(0x2fb)) / 0xa);
      if (_0x3633b5 === _0x39b6cf) break;
      else _0x407703["push"](_0x407703["shift"]());
    } catch (_0x214ae7) {
      _0x407703["push"](_0x407703["shift"]());
    }
  }
})(_0x1661, 0x313b9);
const form = document[_0x14e179(0x165)]("formulario"),
  inputCodigo = document[_0x14e179(0x165)](_0x14e179(0xec)),
  readerDiv = document[_0x14e179(0x165)](_0x14e179(0x123)),
  ayudaTexto = document[_0x14e179(0x165)](_0x14e179(0x262)),
  installBtn = document[_0x14e179(0x165)](_0x14e179(0x1fb));
inputCodigo["setAttribute"](_0x14e179(0xd1), _0x14e179(0x253)),
  inputCodigo[_0x14e179(0x290)](_0x14e179(0x243), _0x14e179(0x150)),
  inputCodigo["setAttribute"](_0x14e179(0x1fe), _0x14e179(0x253)),
  inputCodigo[_0x14e179(0x290)](_0x14e179(0x2e7), _0x14e179(0x253)),
  inputCodigo[_0x14e179(0x290)]("data-form-type", _0x14e179(0x294)),
  form["setAttribute"](_0x14e179(0xd1), _0x14e179(0x253));
let scannerActivo = ![],
  deferredPrompt,
  puedeEscanear = !![],
  ultimoCodigoEscaneado = "",
  datosYaCargados = ![];
const GOOGLE_VISION_CONFIG = {
  apiKey: "",
  enabled: !![],
  monthlyLimit: 0x3b6,
  dailyLimit: 0x20,
  warningThreshold: 0x320,
};
class GoogleVisionUsageTracker {
  constructor() {
    const _0x13009b = _0x14e179;
    (this["storageKey"] = _0x13009b(0xb5)), this[_0x13009b(0x154)]();
  }
  ["loadUsage"]() {
    const _0x29ff5d = _0x14e179,
      _0x4f95c4 = localStorage[_0x29ff5d(0x1cf)](this["storageKey"]);
    _0x4f95c4
      ? (this[_0x29ff5d(0x2f1)] = JSON[_0x29ff5d(0xd0)](_0x4f95c4))
      : this[_0x29ff5d(0x1c3)]();
    const _0x4921f0 = new Date()[_0x29ff5d(0x19b)]();
    this["usage"][_0x29ff5d(0x1ef)] !== _0x4921f0 && this[_0x29ff5d(0x1c3)]();
  }
  [_0x14e179(0x1c3)]() {
    const _0x48252a = _0x14e179;
    (this[_0x48252a(0x2f1)] = {
      month: new Date()["getMonth"](),
      year: new Date()[_0x48252a(0xc7)](),
      monthlyCount: 0x0,
      dailyCount: 0x0,
      lastUsedDate: new Date()[_0x48252a(0x13d)](),
      history: [],
    }),
      this[_0x48252a(0x1bc)]();
  }
  ["saveUsage"]() {
    const _0x4bdb4d = _0x14e179;
    localStorage[_0x4bdb4d(0x134)](
      this[_0x4bdb4d(0x1ab)],
      JSON[_0x4bdb4d(0x2a6)](this[_0x4bdb4d(0x2f1)])
    );
  }
  [_0x14e179(0x1ad)]() {
    const _0x3fd641 = _0x14e179,
      _0x3f5d6e = new Date()["toDateString"]();
    this[_0x3fd641(0x2f1)][_0x3fd641(0x24c)] !== _0x3f5d6e &&
      ((this["usage"][_0x3fd641(0xf7)] = 0x0),
      (this["usage"][_0x3fd641(0x24c)] = _0x3f5d6e),
      this[_0x3fd641(0x1bc)]());
    const _0x242469 =
        this[_0x3fd641(0x2f1)][_0x3fd641(0x276)] <
        GOOGLE_VISION_CONFIG["monthlyLimit"],
      _0x1dff85 =
        this[_0x3fd641(0x2f1)][_0x3fd641(0xf7)] <
        GOOGLE_VISION_CONFIG[_0x3fd641(0x9c)];
    return _0x242469 && _0x1dff85;
  }
  ["recordUsage"]() {
    const _0x193925 = _0x14e179;
    this[_0x193925(0x2f1)][_0x193925(0x276)]++,
      this[_0x193925(0x2f1)]["dailyCount"]++,
      this["usage"][_0x193925(0x1f4)][_0x193925(0xfc)]({
        date: new Date()["toISOString"](),
        count: this[_0x193925(0x2f1)][_0x193925(0x276)],
      }),
      this[_0x193925(0x2f1)]["history"][_0x193925(0xd4)] > 0x32 &&
        (this["usage"]["history"] =
          this[_0x193925(0x2f1)][_0x193925(0x1f4)]["slice"](-0x32)),
      this[_0x193925(0x1bc)]();
  }
  [_0x14e179(0x181)]() {
    const _0x23a59b = _0x14e179;
    return {
      monthlyUsed: this[_0x23a59b(0x2f1)]["monthlyCount"],
      monthlyLimit: GOOGLE_VISION_CONFIG[_0x23a59b(0x152)],
      dailyUsed: this[_0x23a59b(0x2f1)][_0x23a59b(0xf7)],
      dailyLimit: GOOGLE_VISION_CONFIG[_0x23a59b(0x9c)],
      remainingMonthly:
        GOOGLE_VISION_CONFIG[_0x23a59b(0x152)] -
        this[_0x23a59b(0x2f1)]["monthlyCount"],
      remainingDaily:
        GOOGLE_VISION_CONFIG["dailyLimit"] -
        this[_0x23a59b(0x2f1)][_0x23a59b(0xf7)],
      canUse: this[_0x23a59b(0x1ad)](),
    };
  }
  [_0x14e179(0x13f)]() {
    const _0x391bbf = _0x14e179,
      _0x128c94 = this[_0x391bbf(0x181)]();
    if (_0x128c94[_0x391bbf(0x1be)] >= GOOGLE_VISION_CONFIG["warningThreshold"])
      return (
        _0x391bbf(0xa2) +
        _0x128c94[_0x391bbf(0x1be)] +
        "/" +
        _0x128c94[_0x391bbf(0x152)] +
        _0x391bbf(0x2f9)
      );
    if (_0x128c94["dailyUsed"] >= GOOGLE_VISION_CONFIG[_0x391bbf(0x9c)] * 0.8)
      return (
        _0x391bbf(0x26d) +
        _0x128c94[_0x391bbf(0x2b9)] +
        "/" +
        _0x128c94[_0x391bbf(0x9c)] +
        _0x391bbf(0x2e9)
      );
    return null;
  }
}
const visionUsageTracker = new GoogleVisionUsageTracker();
async function detectarConGoogleVision(_0x52bd35) {
  const _0x1394b8 = _0x14e179;
  console[_0x1394b8(0x2fa)](_0x1394b8(0x26f));
  const _0x3ef59f = document[_0x1394b8(0x185)](_0x1394b8(0x327)),
    _0x19a42d = _0x3ef59f[_0x1394b8(0x270)]("2d");
  let { width: _0x122d18, height: _0x584390 } = _0x52bd35;
  const _0x3d4a24 = 0x400;
  if (_0x122d18 > _0x3d4a24 || _0x584390 > _0x3d4a24) {
    const _0x262f2b = Math["min"](_0x3d4a24 / _0x122d18, _0x3d4a24 / _0x584390);
    (_0x122d18 *= _0x262f2b), (_0x584390 *= _0x262f2b);
  }
  (_0x3ef59f[_0x1394b8(0x1d2)] = _0x122d18),
    (_0x3ef59f[_0x1394b8(0xe4)] = _0x584390),
    _0x19a42d[_0x1394b8(0x20a)](_0x52bd35, 0x0, 0x0, _0x122d18, _0x584390);
  const _0x5d83ba = _0x3ef59f[_0x1394b8(0x289)]("image/jpeg", 0.9);
  console[_0x1394b8(0x2fa)](_0x1394b8(0x9f));
  try {
    const _0xe7f4ad = await fetch(_0x1394b8(0x158), {
      method: _0x1394b8(0x1b7),
      headers: { "Content-Type": _0x1394b8(0x110) },
      body: JSON["stringify"]({
        image: _0x5d83ba,
        userAgent: navigator[_0x1394b8(0x28d)][_0x1394b8(0x2ef)](0x0, 0x32),
        timestamp: new Date()["toISOString"](),
      }),
    });
    if (!_0xe7f4ad["ok"]) {
      const _0x1d4d82 = await _0xe7f4ad[_0x1394b8(0x90)]();
      throw new Error(
        _0x1394b8(0x1ed) + _0xe7f4ad["status"] + "\x20-\x20" + _0x1d4d82
      );
    }
    const _0x34fc49 = await _0xe7f4ad[_0x1394b8(0x307)]();
    console["log"](_0x1394b8(0x24e), _0x34fc49);
    if (_0x34fc49[_0x1394b8(0x2e4)])
      return (
        visionUsageTracker[_0x1394b8(0x309)](),
        console[_0x1394b8(0x2fa)](_0x1394b8(0xbc)),
        console[_0x1394b8(0x2fa)](_0x1394b8(0x260)),
        extraerCodigoDeTexto(_0x34fc49[_0x1394b8(0x8c)])
      );
    else throw new Error(_0x34fc49[_0x1394b8(0x2e6)] || _0x1394b8(0x159));
  } catch (_0x438781) {
    console["log"](
      "❌\x20Error\x20específico\x20del\x20backend:",
      _0x438781[_0x1394b8(0xa3)]
    );
    if (_0x438781["message"]["includes"](_0x1394b8(0x2c0)))
      console[_0x1394b8(0x2fa)](_0x1394b8(0x11c)),
        console[_0x1394b8(0x2fa)]("\x20\x20\x20Posibles\x20causas:"),
        console[_0x1394b8(0x2fa)](
          "\x20\x20\x20•\x20Variable\x20GOOGLE_VISION_API_KEY\x20no\x20configurada\x20en\x20Vercel"
        ),
        console["log"](_0x1394b8(0x2b1)),
        console["log"](
          "\x20\x20\x20•\x20API\x20Key\x20inválida\x20o\x20límites\x20excedidos"
        ),
        console["log"](
          "\x20\x20\x20💡\x20Ejecuta\x20diagnosticarBackend()\x20para\x20más\x20detalles"
        );
    else {
      if (
        _0x438781[_0x1394b8(0xa3)][_0x1394b8(0x1cb)](_0x1394b8(0xe1)) ||
        _0x438781[_0x1394b8(0xa3)]["includes"](_0x1394b8(0x259)) ||
        _0x438781["message"]["includes"](_0x1394b8(0x122))
      )
        throw new Error(_0x1394b8(0x2f6));
    }
    throw _0x438781;
  }
}
function extraerCodigoDeTexto(_0x117fe7) {
  const _0x6d06ff = _0x14e179,
    _0x341484 = _0x117fe7[_0x6d06ff(0x1e2)][0x0]?.[_0x6d06ff(0x137)] || [];
  if (_0x341484[_0x6d06ff(0xd4)] === 0x0)
    return console[_0x6d06ff(0x2fa)](_0x6d06ff(0x2a5)), null;
  const _0xa3726c = _0x341484[0x0]?.[_0x6d06ff(0xf5)] || "";
  console["log"](_0x6d06ff(0x21a), _0xa3726c);
  const _0x18ee6c = [
    /\b(\d{13})\b/g,
    /\b(\d{12})\b/g,
    /\b(\d{8})\b/g,
    /\b(\d{6,8})\b/g,
    /\b([A-Z0-9\-]{4,20})\b/g,
  ];
  for (const _0x452a9e of _0x18ee6c) {
    const _0x333ee0 = [..._0xa3726c[_0x6d06ff(0xaa)](_0x452a9e)];
    for (const _0x4c30da of _0x333ee0) {
      const _0x263da7 = _0x4c30da[0x1]["trim"]();
      console[_0x6d06ff(0x2fa)](_0x6d06ff(0x10a) + _0x263da7);
      if (validarCodigoPorLongitud(_0x263da7))
        return (
          console[_0x6d06ff(0x2fa)](_0x6d06ff(0x167) + _0x263da7), _0x263da7
        );
    }
  }
  return console[_0x6d06ff(0x2fa)](_0x6d06ff(0xb7)), null;
}
function validarCodigoPorLongitud(_0x39166f) {
  const _0x16f014 = _0x14e179;
  if (/^\d{13}$/[_0x16f014(0x22c)](_0x39166f)) return !![];
  if (/^\d{12}$/["test"](_0x39166f)) return !![];
  if (/^\d{8}$/[_0x16f014(0x22c)](_0x39166f)) return !![];
  if (/^\d{6,8}$/[_0x16f014(0x22c)](_0x39166f)) return !![];
  if (
    /^[A-Z0-9\-]{4,20}$/[_0x16f014(0x22c)](_0x39166f) &&
    _0x39166f[_0x16f014(0xd4)] >= 0x4
  )
    return !![];
  return ![];
}
async function diagnosticarBackend() {
  const _0x52502f = _0x14e179;
  console[_0x52502f(0x2fa)](_0x52502f(0x2e3));
  const _0x5315df = document[_0x52502f(0x165)]("diagnostico-resultado");
  _0x5315df && (_0x5315df[_0x52502f(0x192)] = _0x52502f(0xaf));
  let _0x5a596b = "";
  try {
    const _0x126687 = await fetch(_0x52502f(0x132));
    if (_0x126687["ok"]) {
      console[_0x52502f(0x2fa)](
        "✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente"
      );
      const _0x477c08 = await _0x126687[_0x52502f(0x307)]();
      console["log"](_0x52502f(0x2de), _0x477c08),
        (_0x5a596b += _0x52502f(0xa9));
    } else
      console[_0x52502f(0x2fa)](
        "❌\x20Endpoint\x20/api/stats\x20falló:",
        _0x126687["status"]
      ),
        (_0x5a596b += _0x52502f(0x156) + _0x126687["status"] + _0x52502f(0x96));
    console["log"](_0x52502f(0xbe));
    const _0x1078f6 = await fetch(
        "https://contador-apicloudvision.vercel.app/api/vision-detect",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON[_0x52502f(0x2a6)]({
            image: _0x52502f(0x30e),
            userId: _0x52502f(0x157),
          }),
        }
      ),
      _0x3a58fa = await _0x1078f6["json"]();
    console[_0x52502f(0x2fa)](
      "🧪\x20Respuesta\x20completa\x20vision-detect:",
      _0x3a58fa
    ),
      console["log"]("📊\x20Status\x20HTTP:", _0x1078f6["status"]);
    if (_0x1078f6[_0x52502f(0x305)] === 0x1f4) {
      console["log"](_0x52502f(0x2f8));
      if (_0x3a58fa[_0x52502f(0x105)]) {
        if (_0x3a58fa[_0x52502f(0x105)][_0x52502f(0x1cb)]("BILLING_DISABLED"))
          console[_0x52502f(0x2fa)](_0x52502f(0xa7)),
            console[_0x52502f(0x2fa)](_0x52502f(0xb1)),
            console["log"](_0x52502f(0x19e)),
            (_0x5a596b += _0x52502f(0x13c));
        else {
          if (_0x3a58fa[_0x52502f(0x105)][_0x52502f(0x1cb)]("API_KEY_INVALID"))
            console[_0x52502f(0x2fa)](
              "🔑\x20PROBLEMA:\x20API\x20Key\x20inválida"
            ),
              (_0x5a596b += _0x52502f(0x1ac));
          else
            _0x3a58fa[_0x52502f(0x105)][_0x52502f(0x1cb)](_0x52502f(0x29d))
              ? (console[_0x52502f(0x2fa)](_0x52502f(0xee)),
                console[_0x52502f(0x2fa)](
                  "💡\x20Ve\x20a:\x20https://console.cloud.google.com/apis/library/vision.googleapis.com"
                ),
                (_0x5a596b +=
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🚫\x20Vision\x20API\x20No\x20Habilitada</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20Vision\x20API\x20no\x20está\x20habilitada\x20en\x20tu\x20proyecto</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/apis/library/vision.googleapis.com\x22\x20target=\x22_blank\x22>Habilitar\x20Vision\x20API</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"))
              : (console[_0x52502f(0x2fa)](_0x52502f(0x151)),
                console[_0x52502f(0x2fa)](
                  "📋\x20Detalles\x20completos:",
                  _0x3a58fa[_0x52502f(0x105)]
                ),
                (_0x5a596b += _0x52502f(0x21c)));
        }
      }
    } else
      _0x1078f6[_0x52502f(0x305)] === 0xc8 &&
        (console[_0x52502f(0x2fa)](_0x52502f(0x31e)),
        (_0x5a596b += _0x52502f(0x1d0)));
  } catch (_0x4352fb) {
    console[_0x52502f(0x2fa)](_0x52502f(0x1d7), _0x4352fb[_0x52502f(0xa3)]),
      _0x4352fb[_0x52502f(0xa3)][_0x52502f(0x1cb)](_0x52502f(0xe1))
        ? (console[_0x52502f(0x2fa)](_0x52502f(0x17b)),
          (_0x5a596b += _0x52502f(0x12d)))
        : (_0x5a596b +=
            "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Error\x20en\x20diagnóstico:\x20" +
            _0x4352fb[_0x52502f(0xa3)] +
            "</div>");
  }
  _0x5315df && (_0x5315df[_0x52502f(0x192)] = _0x5a596b);
}
async function verificarBackend() {
  const _0x1dded2 = _0x14e179;
  try {
    const _0x2b835c = await fetch(_0x1dded2(0x132), {
      method: _0x1dded2(0x187),
      headers: { "Content-Type": _0x1dded2(0x110) },
    });
    if (_0x2b835c["ok"]) {
      const _0x4eedd8 = await _0x2b835c[_0x1dded2(0x307)]();
      return (
        console["log"](_0x1dded2(0x2c6), _0x4eedd8),
        {
          activo: !![],
          stats: _0x4eedd8,
          mensaje: "Google\x20Vision\x20API\x20activa\x20y\x20funcional",
        }
      );
    } else
      return (
        console[_0x1dded2(0x2fa)](_0x1dded2(0xb2), _0x2b835c[_0x1dded2(0x305)]),
        { activo: ![], mensaje: _0x1dded2(0x2f3) + _0x2b835c[_0x1dded2(0x305)] }
      );
  } catch (_0xe2a93c) {
    return (
      console[_0x1dded2(0x2fa)](_0x1dded2(0x278), _0xe2a93c["message"]),
      { activo: ![], mensaje: _0x1dded2(0x242) }
    );
  }
}
async function mostrarEstadisticasUso() {
  const _0x3fe12c = _0x14e179,
    _0x3c3bd5 = visionUsageTracker["getUsageStatus"](),
    _0x2b0d53 = visionUsageTracker["showUsageWarning"]();
  let _0x320aba =
    "📊\x20<strong>Uso\x20local\x20de\x20este\x20dispositivo:</strong><br>";
  (_0x320aba +=
    _0x3fe12c(0x2d6) +
    _0x3c3bd5[_0x3fe12c(0x1be)] +
    "/" +
    _0x3c3bd5[_0x3fe12c(0x152)] +
    _0x3fe12c(0x26a) +
    _0x3c3bd5[_0x3fe12c(0xcd)] +
    _0x3fe12c(0x11f)),
    (_0x320aba +=
      _0x3fe12c(0x15f) +
      _0x3c3bd5[_0x3fe12c(0x2b9)] +
      "/" +
      _0x3c3bd5[_0x3fe12c(0x9c)] +
      "\x20(quedan\x20" +
      _0x3c3bd5[_0x3fe12c(0x162)] +
      ")");
  _0x2b0d53 && (_0x320aba += _0x3fe12c(0xc2) + _0x2b0d53);
  if (GOOGLE_VISION_CONFIG[_0x3fe12c(0x241)])
    try {
      const _0x5a231c = await verificarBackend();
      _0x320aba += _0x3fe12c(0x23e) + _0x5a231c["mensaje"];
    } catch (_0x42201e) {
      _0x320aba += _0x3fe12c(0xe0);
    }
  return _0x320aba;
}
function setCookie(_0x300f13, _0x42cafe, _0x775757) {
  const _0x4b9f4b = _0x14e179,
    _0x4e3e51 = new Date(
      Date[_0x4b9f4b(0x15e)]() + _0x775757 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x4b9f4b(0x1e3)]();
  document["cookie"] =
    _0x300f13 +
    "=" +
    encodeURIComponent(_0x42cafe) +
    _0x4b9f4b(0xeb) +
    _0x4e3e51 +
    _0x4b9f4b(0x15a);
}
function getCookie(_0x2517fe) {
  const _0x1fec71 = _0x14e179,
    _0x3ddfd3 = ";\x20" + document[_0x1fec71(0x328)],
    _0x476147 = _0x3ddfd3[_0x1fec71(0x250)](";\x20" + _0x2517fe + "=");
  if (_0x476147[_0x1fec71(0xd4)] === 0x2)
    return decodeURIComponent(
      _0x476147[_0x1fec71(0x87)]()[_0x1fec71(0x250)](";")[_0x1fec71(0x17f)]()
    );
  return null;
}
const historialDiv = document[_0x14e179(0x165)]("historial"),
  resultadoDiv = document[_0x14e179(0x165)](_0x14e179(0x2ae)),
  DB_NAME = _0x14e179(0x1b1),
  DB_STORE = "productos",
  DB_STORE_PROMOCIONES = _0x14e179(0xa0);
let db;
function openDB() {
  return new Promise((_0x3ec631, _0x410931) => {
    const _0x2cdad1 = _0x5b4b,
      _0x53c9b7 = indexedDB[_0x2cdad1(0x291)](DB_NAME, 0x2);
    (_0x53c9b7[_0x2cdad1(0x21d)] = function (_0x1d1ea0) {
      const _0x37cceb = _0x2cdad1;
      (db = _0x1d1ea0["target"][_0x37cceb(0x1de)]),
        !db[_0x37cceb(0x300)][_0x37cceb(0x16d)](DB_STORE) &&
          db[_0x37cceb(0x126)](DB_STORE, {
            keyPath: "id",
            autoIncrement: !![],
          }),
        !db["objectStoreNames"][_0x37cceb(0x16d)](DB_STORE_PROMOCIONES) &&
          db[_0x37cceb(0x126)](DB_STORE_PROMOCIONES, {
            keyPath: "id",
            autoIncrement: !![],
          });
    }),
      (_0x53c9b7[_0x2cdad1(0x23f)] = function (_0x1c3eda) {
        const _0x261ccb = _0x2cdad1;
        (db = _0x1c3eda[_0x261ccb(0x1d5)]["result"]), _0x3ec631(db);
      }),
      (_0x53c9b7[_0x2cdad1(0x29e)] = function (_0x18f7df) {
        _0x410931(_0x18f7df);
      });
  });
}
function clearProductos() {
  const _0x56f9bc = _0x14e179;
  return openDB()[_0x56f9bc(0x205)]((_0x51cb13) => {
    return new Promise((_0x380803, _0x4285a3) => {
      const _0x412752 = _0x5b4b,
        _0x495e71 = _0x51cb13["transaction"](DB_STORE, _0x412752(0x2f7));
      _0x495e71["objectStore"](DB_STORE)[_0x412752(0xd2)](),
        (_0x495e71[_0x412752(0x24d)] = _0x380803),
        (_0x495e71["onerror"] = _0x4285a3);
    });
  });
}
function saveProductos(_0x4e2782) {
  const _0xe0c496 = _0x14e179;
  return openDB()[_0xe0c496(0x205)]((_0x4bb8fa) => {
    return new Promise((_0x100a79, _0x221538) => {
      const _0x61f2da = _0x5b4b,
        _0x1cd546 = _0x4bb8fa[_0x61f2da(0xba)](DB_STORE, _0x61f2da(0x2f7)),
        _0x23c7b6 = _0x1cd546[_0x61f2da(0xce)](DB_STORE);
      _0x4e2782[_0x61f2da(0xc9)]((_0x5d9be5) =>
        _0x23c7b6[_0x61f2da(0x2b7)](_0x5d9be5)
      ),
        (_0x1cd546[_0x61f2da(0x24d)] = _0x100a79),
        (_0x1cd546["onerror"] = _0x221538);
    });
  });
}
function getAllProductos() {
  const _0x4678f4 = _0x14e179;
  return openDB()[_0x4678f4(0x205)]((_0x160e9b) => {
    return new Promise((_0x35ca2e, _0x227845) => {
      const _0x25589c = _0x5b4b,
        _0x49590c = _0x160e9b["transaction"](DB_STORE, _0x25589c(0x197)),
        _0x30ee20 = _0x49590c["objectStore"](DB_STORE),
        _0x361c29 = _0x30ee20[_0x25589c(0x249)]();
      (_0x361c29["onsuccess"] = () => _0x35ca2e(_0x361c29["result"])),
        (_0x361c29["onerror"] = _0x227845);
    });
  });
}
function clearPromociones() {
  return openDB()["then"]((_0x2ffd49) => {
    return new Promise((_0x574f3c, _0x21e358) => {
      const _0x2f8368 = _0x5b4b,
        _0x19fa2d = _0x2ffd49[_0x2f8368(0xba)](
          DB_STORE_PROMOCIONES,
          _0x2f8368(0x2f7)
        );
      _0x19fa2d[_0x2f8368(0xce)](DB_STORE_PROMOCIONES)["clear"](),
        (_0x19fa2d["oncomplete"] = _0x574f3c),
        (_0x19fa2d["onerror"] = _0x21e358);
    });
  });
}
function savePromociones(_0x4ca25b) {
  const _0x2eca69 = _0x14e179;
  return openDB()[_0x2eca69(0x205)]((_0x24ca0f) => {
    return new Promise((_0x1ac638, _0x1d5755) => {
      const _0x453da = _0x5b4b,
        _0x3a1134 = _0x24ca0f[_0x453da(0xba)](
          DB_STORE_PROMOCIONES,
          _0x453da(0x2f7)
        ),
        _0x936cdc = _0x3a1134[_0x453da(0xce)](DB_STORE_PROMOCIONES);
      _0x4ca25b[_0x453da(0xc9)]((_0xf5ff0) =>
        _0x936cdc[_0x453da(0x2b7)](_0xf5ff0)
      ),
        (_0x3a1134[_0x453da(0x24d)] = _0x1ac638),
        (_0x3a1134[_0x453da(0x29e)] = _0x1d5755);
    });
  });
}
function getAllPromociones() {
  return openDB()["then"]((_0x43ca8f) => {
    return new Promise((_0x1efdf4, _0x182e81) => {
      const _0x1df540 = _0x5b4b,
        _0x5f4790 = _0x43ca8f[_0x1df540(0xba)](
          DB_STORE_PROMOCIONES,
          _0x1df540(0x197)
        ),
        _0x34272f = _0x5f4790[_0x1df540(0xce)](DB_STORE_PROMOCIONES),
        _0x47f8a8 = _0x34272f[_0x1df540(0x249)]();
      (_0x47f8a8[_0x1df540(0x23f)] = () =>
        _0x1efdf4(_0x47f8a8[_0x1df540(0x1de)])),
        (_0x47f8a8[_0x1df540(0x29e)] = _0x182e81);
    });
  });
}
const sugerenciasDiv = document[_0x14e179(0x185)](_0x14e179(0x2ce));
(sugerenciasDiv["id"] = _0x14e179(0xa5)),
  (sugerenciasDiv["className"] = _0x14e179(0x323)),
  (sugerenciasDiv[_0x14e179(0x326)]["zIndex"] = _0x14e179(0x2dc)),
  (sugerenciasDiv[_0x14e179(0x326)][_0x14e179(0x2d7)] = _0x14e179(0x30c)),
  (sugerenciasDiv["style"][_0x14e179(0x275)] = _0x14e179(0x271)),
  (sugerenciasDiv[_0x14e179(0x326)][_0x14e179(0x1e5)] = "100%"),
  (sugerenciasDiv[_0x14e179(0x326)][_0x14e179(0x16b)] = "0"),
  (sugerenciasDiv[_0x14e179(0x326)][_0x14e179(0x32b)] = "0"),
  (inputCodigo[_0x14e179(0xd6)][_0x14e179(0x326)][_0x14e179(0x2cc)] =
    _0x14e179(0x286)),
  inputCodigo[_0x14e179(0xd6)][_0x14e179(0x1a7)](sugerenciasDiv);
const actualizarDiv = document[_0x14e179(0x185)](_0x14e179(0x2ce));
(actualizarDiv[_0x14e179(0x30a)] = _0x14e179(0x2c9)),
  (actualizarDiv["innerHTML"] = _0x14e179(0x2ba)),
  historialDiv[_0x14e179(0xd6)][_0x14e179(0x215)](actualizarDiv, historialDiv);
const btnActualizar = actualizarDiv[_0x14e179(0x160)](_0x14e179(0x175)),
  btnPromociones = actualizarDiv[_0x14e179(0x160)]("#btnPromociones"),
  ultimaActualizacionSpan = actualizarDiv[_0x14e179(0x160)](_0x14e179(0x232)),
  btnTexto = actualizarDiv[_0x14e179(0x160)](_0x14e179(0x1df)),
  btnSpinner = actualizarDiv[_0x14e179(0x160)](_0x14e179(0x1a6)),
  mensajeActualizacion = actualizarDiv["querySelector"](_0x14e179(0x8b));
async function mostrarProductosConPromociones() {
  const _0x5d5e56 = _0x14e179,
    _0x1b6b21 = await getAllProductos(),
    _0x4adad6 = [];
  for (const _0x49a088 of _0x1b6b21) {
    try {
      const _0x24fbf4 = await detectarPromocionReal(_0x49a088);
      _0x24fbf4[_0x5d5e56(0xd4)] > 0x0 && _0x4adad6[_0x5d5e56(0xfc)](_0x49a088);
    } catch (_0x2ea46a) {
      console[_0x5d5e56(0x11e)](
        "⚠️\x20Error\x20al\x20detectar\x20promociones\x20para\x20SKU\x20" +
          _0x49a088[_0x5d5e56(0x2c4)] +
          ":",
        _0x2ea46a
      );
    }
  }
  if (_0x4adad6[_0x5d5e56(0xd4)] === 0x0) {
    (resultadoDiv[_0x5d5e56(0x192)] = _0x5d5e56(0x21e)), renderHistorial();
    return;
  }
  const _0x3d5c83 = [];
  for (const _0x3ad8e5 of _0x4adad6[_0x5d5e56(0xbf)](0x0, 0x14)) {
    try {
      const _0x457ea5 = await detectarPromocionReal(_0x3ad8e5),
        _0x5ef45e =
          Number(_0x3ad8e5[_0x5d5e56(0x139)]) || Number(_0x3ad8e5["L1"]) || 0x0,
        _0xf9fa58 = Math[_0x5d5e56(0x2e0)](_0x5ef45e * 1.16 * 0x64) / 0x64,
        _0x14e914 = _0x457ea5["map"]((_0xe97458) => {
          const _0x451c3c = _0x5d5e56;
          let _0x2eb08f = _0x451c3c(0x267),
            _0x448ce7 =
              _0xe97458[_0x451c3c(0x25e)] ||
              _0xe97458[_0x451c3c(0x319)] ||
              "PROMO";
          if (_0xe97458[_0x451c3c(0x22b)][_0x451c3c(0x1cb)](_0x451c3c(0x29a)))
            (_0x2eb08f = _0x451c3c(0x9e)),
              (_0x448ce7 = _0x451c3c(0x8f) + _0x448ce7);
          else
            _0xe97458[_0x451c3c(0x2a9)] &&
              ((_0x2eb08f = _0x451c3c(0x2fe)),
              (_0x448ce7 = _0x451c3c(0x235) + _0x448ce7));
          return (
            "<span\x20class=\x22badge\x20" +
            _0x2eb08f +
            "\x20me-1\x20mb-1\x22\x20style=\x22font-size:0.75rem;\x22>" +
            _0x448ce7 +
            _0x451c3c(0x1c7)
          );
        })[_0x5d5e56(0x104)]("");
      _0x3d5c83["push"](
        _0x5d5e56(0x184) +
          _0x3ad8e5[_0x5d5e56(0x2c4)] +
          _0x5d5e56(0x2db) +
          _0x3ad8e5[_0x5d5e56(0x236)] +
          "\x22>" +
          _0x3ad8e5["pr_name"] +
          _0x5d5e56(0x299) +
          _0x14e914 +
          _0x5d5e56(0x32a) +
          _0xf9fa58[_0x5d5e56(0x1c1)](0x2) +
          _0x5d5e56(0xc6) +
          _0x3ad8e5[_0x5d5e56(0x2c4)] +
          "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"
      );
    } catch (_0x3cd3fc) {
      console[_0x5d5e56(0x11e)](
        _0x5d5e56(0x317) + _0x3ad8e5["pr_sku"] + ":",
        _0x3cd3fc
      );
    }
  }
  (resultadoDiv[_0x5d5e56(0x192)] =
    _0x5d5e56(0x148) +
    _0x4adad6[_0x5d5e56(0xd4)] +
    _0x5d5e56(0x138) +
    _0x3d5c83[_0x5d5e56(0x104)]("") +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20" +
    (_0x4adad6[_0x5d5e56(0xd4)] > 0x14
      ? _0x5d5e56(0xdb) + (_0x4adad6[_0x5d5e56(0xd4)] - 0x14) + _0x5d5e56(0x211)
      : "") +
    _0x5d5e56(0x1b5)),
    renderHistorial();
}
window["mostrarProductoPromocion"] = async function (_0x294e63) {
  const _0x440bac = _0x14e179,
    _0x59ffda = await getAllProductos(),
    _0x2cb4f8 = _0x59ffda["find"](
      (_0xba7376) =>
        _0xba7376[_0x440bac(0x2c4)] === _0x294e63 ||
        _0xba7376[_0x440bac(0x1d6)] === _0x294e63
    );
  if (_0x2cb4f8) {
    mostrarDetalleProducto(_0x2cb4f8);
    const _0x3fcee6 = {
      ..._0x2cb4f8,
      FECHA_ESCANEO: new Date()["toISOString"](),
    };
    historial[_0x440bac(0x1a8)](_0x3fcee6),
      setCookie("historial", JSON[_0x440bac(0x2a6)](historial), 0x1e),
      renderHistorial();
  }
};
const urlBase = _0x14e179(0x117),
  urlBaseConCodigos = _0x14e179(0x1f9),
  urlPromociones = _0x14e179(0x21f),
  CONFIG_ENDPOINTS = {
    productosBasicos: urlBase,
    productosConCodigos: urlBaseConCodigos,
    promociones: urlPromociones,
    usarCodigosBarras: !![],
    fallbackTiempo: 0x1388,
  };
function tiempoRelativo(_0x157bbd) {
  const _0x113f2b = _0x14e179;
  if (!_0x157bbd) return "Nunca";
  const _0x4a1c73 = Date[_0x113f2b(0x15e)](),
    _0x21e99c = Math[_0x113f2b(0x13e)]((_0x4a1c73 - _0x157bbd) / 0x3e8);
  if (_0x21e99c < 0x3c) return _0x113f2b(0x31a) + _0x21e99c + _0x113f2b(0x308);
  if (_0x21e99c < 0xe10)
    return (
      _0x113f2b(0x31a) +
      Math[_0x113f2b(0x13e)](_0x21e99c / 0x3c) +
      _0x113f2b(0x20f)
    );
  if (_0x21e99c < 0x15180)
    return (
      _0x113f2b(0x31a) + Math[_0x113f2b(0x13e)](_0x21e99c / 0xe10) + "\x20horas"
    );
  return (
    _0x113f2b(0x31a) + Math[_0x113f2b(0x13e)](_0x21e99c / 0x15180) + "\x20días"
  );
}
function renderUltimaActualizacion() {
  const _0x1c376f = _0x14e179,
    _0x94da3c = localStorage[_0x1c376f(0x1cf)](_0x1c376f(0x1c8)),
    _0x17f4ed = localStorage["getItem"](_0x1c376f(0x1e8));
  let _0x456635 = _0x1c376f(0xb4);
  if (_0x94da3c && _0x17f4ed) {
    const _0x39afa2 = tiempoRelativo(Number(_0x94da3c)),
      _0x4ea5b4 = tiempoRelativo(Number(_0x17f4ed)),
      _0x548f6c = Math[_0x1c376f(0x2dd)](Number(_0x94da3c) - Number(_0x17f4ed));
    _0x548f6c < 0xea60
      ? (_0x456635 = _0x1c376f(0x226) + _0x39afa2)
      : (_0x456635 =
          _0x1c376f(0x133) +
          _0x39afa2 +
          "\x20|\x20Promociones:\x20" +
          _0x4ea5b4);
  } else {
    if (_0x94da3c)
      _0x456635 =
        _0x1c376f(0x133) +
        tiempoRelativo(Number(_0x94da3c)) +
        "\x20|\x20Promociones:\x20nunca";
    else
      _0x17f4ed &&
        (_0x456635 = _0x1c376f(0x206) + tiempoRelativo(Number(_0x17f4ed)));
  }
  ultimaActualizacionSpan[_0x1c376f(0x1e0)] = _0x456635;
}
function actualizarProgreso(_0x4ede26, _0x5ccd6e, _0x1dd22c = "") {
  const _0x234627 = _0x14e179,
    _0x124c95 = Math[_0x234627(0x324)](
      0x64,
      Math[_0x234627(0x1c5)](0x0, _0x4ede26)
    ),
    _0x31bea1 =
      _0x4ede26 >= 0x64
        ? _0x234627(0x2e4)
        : _0x4ede26 >= 0x32
        ? _0x234627(0x129)
        : _0x234627(0x1c6);
  mensajeActualizacion["innerHTML"] =
    _0x234627(0x114) +
    _0x5ccd6e +
    _0x234627(0x2aa) +
    _0x4ede26 +
    _0x234627(0x266) +
    _0x31bea1 +
    "\x22\x20role=\x22progressbar\x22\x20style=\x22width:\x20" +
    _0x124c95 +
    "%;\x20transition:\x20width\x200.3s\x20ease;\x22\x20aria-valuenow=\x22" +
    _0x4ede26 +
    "\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20" +
    (_0x1dd22c ? _0x234627(0x296) + _0x1dd22c + _0x234627(0x9d) : "") +
    _0x234627(0x1b5);
}
async function actualizarTodosLosDatos() {
  const _0x415fc6 = _0x14e179;
  console["log"](_0x415fc6(0x2c8)),
    (btnActualizar["disabled"] = !![]),
    (btnTexto["textContent"] = _0x415fc6(0x113)),
    btnSpinner[_0x415fc6(0x298)]["remove"]("d-none");
  const _0x517f65 = Date[_0x415fc6(0x15e)]();
  let _0x51716e = ![],
    _0x1019a8 = ![];
  const _0x1d8f55 = () => {
    const _0x6e0aa3 = _0x415fc6;
    let _0x4964fe = 0x0,
      _0x47872c = _0x6e0aa3(0x89),
      _0x18fbe2 = "";
    if (!_0x51716e && !_0x1019a8)
      (_0x4964fe = 0xa),
        (_0x47872c = _0x6e0aa3(0x174)),
        (_0x18fbe2 = _0x6e0aa3(0x1e7));
    else {
      if (_0x51716e && !_0x1019a8)
        (_0x4964fe = 0x46),
          (_0x47872c = _0x6e0aa3(0x8d)),
          (_0x18fbe2 = _0x6e0aa3(0x302));
      else {
        if (!_0x51716e && _0x1019a8)
          (_0x4964fe = 0x46),
            (_0x47872c = _0x6e0aa3(0xb3)),
            (_0x18fbe2 = _0x6e0aa3(0x2d0));
        else {
          _0x4964fe = 0x64;
          const _0x146d1a = ((Date[_0x6e0aa3(0x15e)]() - _0x517f65) / 0x3e8)[
            _0x6e0aa3(0x1c1)
          ](0x1);
          (_0x47872c = _0x6e0aa3(0x95)),
            (_0x18fbe2 = _0x6e0aa3(0xb6) + _0x146d1a + _0x6e0aa3(0x308));
        }
      }
    }
    actualizarProgreso(_0x4964fe, _0x47872c, _0x18fbe2);
  };
  _0x1d8f55();
  try {
    await new Promise((_0x535bb8) => setTimeout(_0x535bb8, 0xc8)),
      actualizarProgreso(0x19, _0x415fc6(0x163), _0x415fc6(0x2c2));
    const _0x126803 = cargarProductosRapido()[_0x415fc6(0x205)]((_0x1d4a77) => {
        return (_0x51716e = !![]), _0x1d8f55(), _0x1d4a77;
      }),
      _0x313a8b = cargarPromocionesRapido()["then"]((_0x3982f5) => {
        return (_0x1019a8 = !![]), _0x1d8f55(), _0x3982f5;
      });
    setTimeout(() => {
      const _0x5cd171 = _0x415fc6;
      (!_0x51716e || !_0x1019a8) &&
        actualizarProgreso(
          0x32,
          _0x5cd171(0x22e),
          "Básicos,\x20códigos\x20de\x20barras\x20y\x20promociones"
        );
    }, 0x3e8);
    const [_0x584df8, _0x4bce68] = await Promise[_0x415fc6(0x1cc)]([
        _0x126803,
        _0x313a8b,
      ]),
      _0x51ab29 = ((Date[_0x415fc6(0x15e)]() - _0x517f65) / 0x3e8)[
        _0x415fc6(0x1c1)
      ](0x1);
    console[_0x415fc6(0x2fa)](_0x415fc6(0xa8) + _0x51ab29 + "s");
    const _0x3860d5 = _0x584df8[_0x415fc6(0x305)] === _0x415fc6(0x121),
      _0x5bc88a = _0x4bce68[_0x415fc6(0x305)] === _0x415fc6(0x121);
    if (_0x3860d5 && _0x5bc88a) {
      const _0x3fb68c = _0x584df8[_0x415fc6(0x23a)]?.["productos"] || 0x0,
        _0x371c8a = _0x4bce68["value"]?.[_0x415fc6(0xa0)] || 0x0,
        _0x2c5c91 = _0x584df8[_0x415fc6(0x23a)]?.[_0x415fc6(0x318)] || "",
        _0x3917a8 = _0x4bce68[_0x415fc6(0x23a)]?.[_0x415fc6(0x318)] || "";
      actualizarProgreso(
        0x64,
        _0x415fc6(0x188),
        _0x3fb68c +
          _0x415fc6(0x11b) +
          _0x2c5c91 +
          _0x415fc6(0x208) +
          _0x371c8a +
          _0x415fc6(0x204) +
          _0x3917a8 +
          ")\x20-\x20" +
          _0x51ab29 +
          "s"
      );
    } else
      _0x3860d5 || _0x5bc88a
        ? actualizarProgreso(
            0x4b,
            _0x415fc6(0x238),
            _0x415fc6(0x2be) + _0x51ab29 + "s)"
          )
        : actualizarProgreso(
            0x19,
            "❌\x20Error\x20consultando\x20endpoints",
            _0x415fc6(0x2f2) + _0x51ab29 + "s)"
          );
    _0x584df8[_0x415fc6(0x305)] === _0x415fc6(0x225) &&
      console[_0x415fc6(0x2e6)](_0x415fc6(0x2c5), _0x584df8["reason"]),
      _0x4bce68[_0x415fc6(0x305)] === _0x415fc6(0x225) &&
        console[_0x415fc6(0x2e6)](_0x415fc6(0x91), _0x4bce68[_0x415fc6(0x1ee)]);
  } catch (_0x44547d) {
    console["error"]("Error\x20en\x20actualización:", _0x44547d),
      actualizarProgreso(
        0x0,
        "❌\x20Error\x20de\x20conexión",
        _0x415fc6(0x2b6)
      );
  } finally {
    (btnActualizar[_0x415fc6(0x223)] = ![]),
      (btnTexto[_0x415fc6(0x1e0)] = _0x415fc6(0x130)),
      btnSpinner[_0x415fc6(0x298)][_0x415fc6(0x2b7)](_0x415fc6(0x237)),
      setTimeout(() => {
        const _0x5807c9 = _0x415fc6;
        (mensajeActualizacion[_0x5807c9(0x1e0)] = ""),
          renderUltimaActualizacion();
      }, 0xfa0);
  }
}
async function cargarProductosRapido() {
  const _0x4804f3 = _0x14e179,
    _0x30bf4e = Date[_0x4804f3(0x15e)]();
  if (!navigator[_0x4804f3(0x325)]) throw new Error(_0x4804f3(0x195));
  let _0x50b5b0 = [],
    _0x4b061f = [];
  console[_0x4804f3(0x2fa)](_0x4804f3(0xf4));
  if (CONFIG_ENDPOINTS[_0x4804f3(0x125)])
    try {
      const _0x26a21c =
        CONFIG_ENDPOINTS[_0x4804f3(0x23b)] + _0x4804f3(0x1a9) + _0x30bf4e;
      console["log"](_0x4804f3(0x1c9));
      const _0x40380d = await Promise["race"]([
        fetch(_0x26a21c, {
          cache: _0x4804f3(0x26b),
          mode: _0x4804f3(0x198),
          headers: {
            Accept: _0x4804f3(0x110),
            "Content-Type": _0x4804f3(0x110),
          },
        }),
        new Promise((_0x46917c, _0x1de7d1) =>
          setTimeout(
            () => _0x1de7d1(new Error(_0x4804f3(0x15c))),
            CONFIG_ENDPOINTS["fallbackTiempo"]
          )
        ),
      ]);
      if (_0x40380d["ok"]) {
        const _0x596274 = await _0x40380d[_0x4804f3(0x307)]();
        _0x596274["success"] && _0x596274["productos"]
          ? ((_0x50b5b0 = _0x596274[_0x4804f3(0x2a0)]),
            _0x4b061f[_0x4804f3(0xfc)]("códigos\x20de\x20barras\x20✅"),
            console["log"](
              _0x4804f3(0x135),
              _0x596274[_0x4804f3(0x2a0)][_0x4804f3(0xd4)]
            ))
          : _0x4b061f[_0x4804f3(0xfc)](_0x4804f3(0x1a0));
      } else
        _0x4b061f["push"](_0x4804f3(0xe3) + _0x40380d[_0x4804f3(0x305)] + ")");
    } catch (_0x2415c6) {
      console[_0x4804f3(0x11e)](_0x4804f3(0x245), _0x2415c6[_0x4804f3(0xa3)]),
        _0x2415c6[_0x4804f3(0xa3)][_0x4804f3(0x1cb)](_0x4804f3(0xe1)) ||
        _0x2415c6["message"]["includes"](_0x4804f3(0x259))
          ? (_0x4b061f[_0x4804f3(0xfc)](
              "códigos\x20de\x20barras\x20❌\x20(CORS/Red)"
            ),
            console[_0x4804f3(0x2fa)](_0x4804f3(0x2bb)))
          : _0x4b061f[_0x4804f3(0xfc)](
              "códigos\x20de\x20barras\x20❌\x20(timeout/error)"
            );
    }
  try {
    const _0x343211 = CONFIG_ENDPOINTS[_0x4804f3(0x213)] + "?t=" + _0x30bf4e;
    console[_0x4804f3(0x2fa)]("🔄\x20Consultando\x20endpoint\x20básico...");
    const _0x2651ef = await fetch(_0x343211, { cache: _0x4804f3(0x26b) });
    if (_0x2651ef["ok"]) {
      const _0x45370f = await _0x2651ef["json"](),
        _0x2ad61e = Array[_0x4804f3(0x1ea)](_0x45370f) ? _0x45370f : [];
      _0x50b5b0["length"] === 0x0 &&
        _0x2ad61e[_0x4804f3(0xd4)] > 0x0 &&
        (_0x50b5b0 = _0x2ad61e),
        _0x4b061f[_0x4804f3(0xfc)](_0x4804f3(0xfe)),
        console["log"](
          _0x4804f3(0x14c),
          _0x2ad61e[_0x4804f3(0xd4)],
          _0x4804f3(0x2a0)
        );
    } else _0x4b061f["push"](_0x4804f3(0x2e1));
  } catch (_0x240929) {
    console[_0x4804f3(0x11e)](
      "⚠️\x20Error\x20con\x20endpoint\x20básico:",
      _0x240929[_0x4804f3(0xa3)]
    ),
      _0x4b061f[_0x4804f3(0xfc)](_0x4804f3(0x303));
  }
  if (_0x50b5b0[_0x4804f3(0xd4)] === 0x0) throw new Error(_0x4804f3(0x285));
  return (
    await clearProductos(),
    await saveProductos(_0x50b5b0),
    localStorage[_0x4804f3(0x134)]("productos_ts", String(_0x30bf4e)),
    console[_0x4804f3(0x2fa)](
      _0x4804f3(0x2bd),
      _0x4b061f[_0x4804f3(0x104)](",\x20")
    ),
    {
      productos: _0x50b5b0[_0x4804f3(0xd4)],
      endpoints: _0x4b061f,
      detalles: _0x4b061f["length"] + "\x20endpoints\x20consultados",
    }
  );
}
async function cargarPromocionesRapido() {
  const _0x5678cd = _0x14e179;
  console["log"](_0x5678cd(0x283));
  const _0x19ce90 = await fetch(CONFIG_ENDPOINTS["promociones"], {
    cache: "no-store",
    headers: { Accept: "application/json", "Content-Type": _0x5678cd(0x110) },
  });
  if (!_0x19ce90["ok"])
    throw new Error(_0x5678cd(0x320) + _0x19ce90[_0x5678cd(0x305)]);
  const _0x2cc6f8 = await _0x19ce90[_0x5678cd(0x307)]();
  if (
    _0x2cc6f8[_0x5678cd(0x2e4)] &&
    _0x2cc6f8[_0x5678cd(0x10e)] &&
    _0x2cc6f8[_0x5678cd(0x10e)][_0x5678cd(0xa0)]
  ) {
    const _0x215f48 = _0x2cc6f8["data"][_0x5678cd(0xa0)];
    console[_0x5678cd(0x2fa)](
      "✅\x20Endpoint\x20promociones\x20consultado:\x20" +
        _0x215f48["length"] +
        _0x5678cd(0x1f0)
    );
    try {
      await clearPromociones(), await savePromociones(_0x215f48);
      const _0x40f2e4 = Date[_0x5678cd(0x15e)]();
      localStorage[_0x5678cd(0x134)](_0x5678cd(0x1e8), String(_0x40f2e4)),
        console[_0x5678cd(0x2fa)](_0x5678cd(0x32f));
    } catch (_0x3c6bf9) {
      console["error"](
        "❌\x20Error\x20guardando\x20promociones\x20en\x20IndexedDB:",
        _0x3c6bf9
      );
    }
    return {
      promociones: _0x215f48[_0x5678cd(0xd4)],
      detalles: "promociones\x20✅",
    };
  } else throw new Error(_0x5678cd(0x1d4));
}
btnActualizar["addEventListener"](_0x14e179(0x14a), actualizarTodosLosDatos),
  btnPromociones[_0x14e179(0xdf)](_0x14e179(0x14a), verPromociones),
  renderUltimaActualizacion(),
  setInterval(renderUltimaActualizacion, 0xea60),
  openDB()[_0x14e179(0x205)](async (_0x47d3f0) => {
    const _0x758186 = _0x14e179,
      _0x2238d6 = _0x47d3f0["transaction"](DB_STORE, _0x758186(0x197)),
      _0x299b5c = _0x2238d6[_0x758186(0xce)](DB_STORE),
      _0x50393c = _0x299b5c[_0x758186(0x1f5)](),
      _0x448ecb = _0x47d3f0[_0x758186(0xba)](
        DB_STORE_PROMOCIONES,
        _0x758186(0x197)
      ),
      _0x380293 = _0x448ecb[_0x758186(0xce)](DB_STORE_PROMOCIONES),
      _0x2cc1fb = _0x380293[_0x758186(0x1f5)]();
    Promise[_0x758186(0x12b)]([
      new Promise((_0x1be30e) => {
        const _0x22f466 = _0x758186;
        _0x50393c[_0x22f466(0x23f)] = () =>
          _0x1be30e(_0x50393c[_0x22f466(0x1de)]);
      }),
      new Promise((_0x43af59) => {
        const _0x2bc823 = _0x758186;
        _0x2cc1fb[_0x2bc823(0x23f)] = () =>
          _0x43af59(_0x2cc1fb[_0x2bc823(0x1de)]);
      }),
    ])
      ["then"](([_0x555a88, _0x382dd2]) => {
        const _0x2dd315 = _0x758186,
          _0x1af86e = _0x555a88 > 0x0,
          _0x25d7dd = _0x382dd2 > 0x0;
        if (!_0x1af86e && !_0x25d7dd)
          console[_0x2dd315(0x2fa)](_0x2dd315(0x1f1)),
            actualizarTodosLosDatos();
        else {
          if (!_0x1af86e)
            console[_0x2dd315(0x2fa)](_0x2dd315(0x247)),
              actualizarTodosLosDatos();
          else
            !_0x25d7dd && !datosYaCargados
              ? (console[_0x2dd315(0x2fa)](_0x2dd315(0x29c)),
                cargarPromocionesRapido())
              : console[_0x2dd315(0x2fa)](
                  "✅\x20Datos\x20locales\x20encontrados:\x20productos:",
                  _0x555a88,
                  _0x2dd315(0x2b3),
                  _0x382dd2
                );
        }
        datosYaCargados = !![];
      })
      [_0x758186(0x144)]((_0xb8a70c) => {
        const _0x17dd4a = _0x758186;
        console[_0x17dd4a(0x2e6)](_0x17dd4a(0x311), _0xb8a70c),
          actualizarTodosLosDatos(),
          (datosYaCargados = !![]);
      });
  });
let historial = [];
const historialCookie = getCookie(_0x14e179(0x2d4));
if (historialCookie)
  try {
    historial = JSON[_0x14e179(0xd0)](historialCookie);
  } catch (_0xee9039) {
    historial = [];
  }
function renderClearButton() {
  const _0x48d004 = _0x14e179;
  return _0x48d004(0x20e);
}
function renderHistorial() {
  const _0x27577e = _0x14e179;
  (historialDiv[_0x27577e(0x192)] =
    _0x27577e(0xad) +
    (historial["length"] > 0x0 ? renderClearButton() : "") +
    _0x27577e(0x100) +
    (historial[_0x27577e(0xd4)] === 0x0
      ? _0x27577e(0x255)
      : "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        historial[_0x27577e(0x19a)]((_0x3c3de9) => {
          const _0x4ac55b = _0x27577e,
            _0x5cd6f3 =
              _0x3c3de9["pr_name"] ||
              _0x3c3de9[_0x4ac55b(0x220)] ||
              _0x4ac55b(0x1ca),
            _0x1a1cd1 =
              _0x3c3de9[_0x4ac55b(0x2c4)] ||
              _0x3c3de9[_0x4ac55b(0x1d6)] ||
              _0x3c3de9[_0x4ac55b(0x17e)] ||
              _0x3c3de9[_0x4ac55b(0x312)] ||
              _0x4ac55b(0x2d8),
            _0x3bab51 =
              _0x3c3de9[_0x4ac55b(0x139)] ||
              _0x3c3de9["L1"] ||
              _0x3c3de9[_0x4ac55b(0x209)] ||
              0x0,
            _0x40584c = Math[_0x4ac55b(0x2e0)](_0x3bab51 * 1.16 * 0x64) / 0x64,
            _0x70ba10 = _0x3c3de9["FECHA_ESCANEO"]
              ? new Date(_0x3c3de9[_0x4ac55b(0x27b)])["toLocaleString"]()
              : _0x4ac55b(0x1dd);
          return (
            _0x4ac55b(0x118) +
            _0x5cd6f3 +
            "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20descripción\x22\x20data-copiar=\x22" +
            _0x5cd6f3 +
            "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20<strong\x20class=\x22ms-1\x22>" +
            _0x1a1cd1 +
            _0x4ac55b(0x268) +
            _0x1a1cd1 +
            _0x4ac55b(0x2b4) +
            _0x40584c["toFixed"](0x2) +
            _0x4ac55b(0x2f0) +
            _0x70ba10 +
            "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>"
          );
        })[_0x27577e(0x104)]("") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>") +
    _0x27577e(0x14e)),
    setCookie(_0x27577e(0x2d4), JSON["stringify"](historial), 0x1e);
  const _0x2e8cdd = document["getElementById"](_0x27577e(0xa1));
  _0x2e8cdd &&
    _0x2e8cdd[_0x27577e(0xdf)]("click", () => {
      const _0x8d95f4 = _0x27577e;
      (historial = []),
        setCookie(_0x8d95f4(0x2d4), JSON[_0x8d95f4(0x2a6)](historial), 0x1e),
        renderHistorial();
    });
  const _0x2c232a = historialDiv["querySelectorAll"](_0x27577e(0x9b));
  _0x2c232a[_0x27577e(0xc9)]((_0x48ef7c) => {
    const _0x524677 = _0x27577e;
    _0x48ef7c[_0x524677(0xdf)](_0x524677(0x14a), function (_0x4bbe0d) {
      const _0x619aa = _0x524677,
        _0x35b3fa = _0x48ef7c[_0x619aa(0x279)](_0x619aa(0x2a1));
      navigator["clipboard"] &&
        navigator[_0x619aa(0x2d1)]
          ["writeText"](_0x35b3fa)
          [_0x619aa(0x205)](() => {
            const _0x207996 = _0x619aa;
            (_0x48ef7c[_0x207996(0x192)] = _0x207996(0x131)),
              setTimeout(() => {
                const _0x34bd24 = _0x207996;
                _0x48ef7c[_0x34bd24(0x192)] = _0x34bd24(0x108);
              }, 0x4b0);
          });
    });
  });
}
inputCodigo[_0x14e179(0xdf)](_0x14e179(0x1ec), function (_0x23b488) {
  const _0x57be26 = _0x14e179;
  _0x23b488[_0x57be26(0x109)] === "Enter" &&
    (_0x23b488[_0x57be26(0x2d3)](),
    form[_0x57be26(0x2d2)](),
    setTimeout(() => {
      const _0x351ec1 = _0x57be26,
        _0x41efbf = document["getElementById"](_0x351ec1(0x2ae));
      _0x41efbf &&
        _0x41efbf[_0x351ec1(0x27c)]({
          behavior: "smooth",
          block: _0x351ec1(0x94),
          inline: _0x351ec1(0x13a),
        });
    }, 0x12c));
}),
  form[_0x14e179(0xdf)](_0x14e179(0xc0), async (_0x542061) => {
    const _0x38e6f0 = _0x14e179;
    _0x542061[_0x38e6f0(0x2d3)]();
    let _0x33189b = inputCodigo[_0x38e6f0(0x23a)]
      [_0x38e6f0(0x1f2)]()
      ["replace"](/\s+$/, "");
    (inputCodigo["value"] = _0x33189b),
      (resultadoDiv[_0x38e6f0(0x192)] = ""),
      setTimeout(() => {
        const _0x59078a = _0x38e6f0,
          _0x1852b9 = document[_0x59078a(0x165)](_0x59078a(0x2ae));
        _0x1852b9 &&
          _0x1852b9[_0x59078a(0x27c)]({
            behavior: _0x59078a(0x1d3),
            block: "start",
            inline: _0x59078a(0x13a),
          });
      }, 0x64),
      (sugerenciasDiv["innerHTML"] = ""),
      (sugerenciasDiv[_0x38e6f0(0x326)][_0x38e6f0(0x251)] = _0x38e6f0(0x178));
    if (!_0x33189b) {
      (resultadoDiv[_0x38e6f0(0x192)] = _0x38e6f0(0x2b2)),
        renderHistorial(),
        inputCodigo[_0x38e6f0(0xbb)]();
      return;
    }
    (inputCodigo[_0x38e6f0(0x234)] = ""),
      (resultadoDiv["innerHTML"] =
        "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>");
    let _0x3f0fe9 = await getAllProductos(),
      _0x2ddb6b = _0x3f0fe9[_0x38e6f0(0x200)]((_0x3d0233) => {
        const _0x40f976 = _0x38e6f0;
        if (
          String(_0x3d0233[_0x40f976(0x2c4)]) === _0x33189b ||
          String(_0x3d0233[_0x40f976(0x1d6)]) === _0x33189b
        )
          return !![];
        if (
          _0x3d0233[_0x40f976(0xc1)] &&
          Array[_0x40f976(0x1ea)](_0x3d0233["codigos_barras"])
        )
          return _0x3d0233[_0x40f976(0xc1)]["some"](
            (_0x524686) => String(_0x524686) === _0x33189b
          );
        return ![];
      });
    if (_0x2ddb6b) {
      mostrarDetalleProducto(_0x2ddb6b);
      const _0x51ecce = {
        ..._0x2ddb6b,
        FECHA_ESCANEO: new Date()[_0x38e6f0(0x1c2)](),
      };
      historial[_0x38e6f0(0x1a8)](_0x51ecce),
        setCookie(_0x38e6f0(0x2d4), JSON[_0x38e6f0(0x2a6)](historial), 0x1e),
        (inputCodigo[_0x38e6f0(0x23a)] = ""),
        inputCodigo[_0x38e6f0(0xbb)](),
        _0x2ddb6b[_0x38e6f0(0xc1)] &&
          _0x2ddb6b["codigos_barras"][_0x38e6f0(0xd4)] > 0x1 &&
          console[_0x38e6f0(0x2fa)](_0x38e6f0(0x1cd), {
            sku: _0x2ddb6b[_0x38e6f0(0x2c4)],
            gtin_principal: _0x2ddb6b["pr_gtin"],
            codigo_buscado: _0x33189b,
            todos_los_codigos: _0x2ddb6b[_0x38e6f0(0xc1)],
          });
    } else
      (resultadoDiv[_0x38e6f0(0x192)] = _0x38e6f0(0xf1)),
        (inputCodigo[_0x38e6f0(0x23a)] = ""),
        inputCodigo[_0x38e6f0(0xbb)](),
        setTimeout(() => {
          const _0xd4446c = _0x38e6f0;
          resultadoDiv[_0xd4446c(0x192)] = "";
        }, 0x1388),
        console[_0x38e6f0(0x2fa)](_0x38e6f0(0x2b0) + _0x33189b + "\x22");
    renderHistorial();
  });
async function detectarPromocionReal(_0x31a1de) {
  const _0x1f2103 = _0x14e179,
    _0x29d72e = (_0x31a1de[_0x1f2103(0x2c4)] || "")[_0x1f2103(0x30f)]();
  try {
    let _0x1e4a22 = await getAllPromociones();
    if (_0x1e4a22[_0x1f2103(0xd4)] === 0x0) {
      console[_0x1f2103(0x2fa)](_0x1f2103(0x8a));
      const _0x8f7215 = await fetch(_0x1f2103(0x272));
      if (!_0x8f7215["ok"])
        return (
          console["log"](_0x1f2103(0x16c), _0x8f7215[_0x1f2103(0x305)]), []
        );
      const _0x3d62b8 = await _0x8f7215[_0x1f2103(0x307)]();
      if (
        _0x3d62b8[_0x1f2103(0x305)] === _0x1f2103(0xcb) &&
        _0x3d62b8[_0x1f2103(0x2f4)]
      )
        _0x1e4a22 = _0x3d62b8[_0x1f2103(0x2f4)];
      else {
        if (Array[_0x1f2103(0x1ea)](_0x3d62b8)) _0x1e4a22 = _0x3d62b8;
        else return console[_0x1f2103(0x2fa)](_0x1f2103(0x269)), [];
      }
      try {
        await clearPromociones(),
          await savePromociones(_0x1e4a22),
          localStorage[_0x1f2103(0x134)](
            _0x1f2103(0x1e8),
            String(Date[_0x1f2103(0x15e)]())
          ),
          console[_0x1f2103(0x2fa)](_0x1f2103(0x261));
      } catch (_0x1c5f69) {
        console[_0x1f2103(0x11e)](_0x1f2103(0x316), _0x1c5f69);
      }
    } else
      console[_0x1f2103(0x2fa)](_0x1f2103(0x1e6), _0x1e4a22[_0x1f2103(0xd4)]);
    console[_0x1f2103(0x2fa)](_0x1f2103(0x2ac), _0x29d72e);
    const _0x34d744 = [];
    for (const _0x27e68e of _0x1e4a22) {
      let _0x5c1e71 = [];
      if (
        _0x27e68e[_0x1f2103(0x27a)] &&
        Array[_0x1f2103(0x1ea)](_0x27e68e[_0x1f2103(0x27a)])
      )
        _0x5c1e71 = _0x27e68e[_0x1f2103(0x27a)];
      else
        _0x27e68e[_0x1f2103(0x2ca)] &&
          _0x27e68e[_0x1f2103(0x2ca)][_0x1f2103(0x2c4)] &&
          (Array[_0x1f2103(0x1ea)](
            _0x27e68e[_0x1f2103(0x2ca)][_0x1f2103(0x2c4)]
          )
            ? (_0x5c1e71 = _0x27e68e[_0x1f2103(0x2ca)][_0x1f2103(0x2c4)])
            : (_0x5c1e71 = _0x27e68e[_0x1f2103(0x2ca)][_0x1f2103(0x2c4)]
                [_0x1f2103(0x250)]("\x20")
                [_0x1f2103(0x265)]((_0x2963dd) =>
                  _0x2963dd[_0x1f2103(0x1f2)]()
                )));
      if (_0x5c1e71[_0x1f2103(0x1cb)](_0x29d72e)) {
        const _0x449dad =
            _0x27e68e["pro_nombrePromo"] ||
            _0x27e68e[_0x1f2103(0x252)] ||
            _0x27e68e[_0x1f2103(0x313)] ||
            _0x1f2103(0xea),
          _0x58a492 =
            _0x27e68e["pro_cantidad_base"] ||
            _0x27e68e[_0x1f2103(0x99)] ||
            _0x27e68e["qty"] ||
            "",
          _0x1cdb6e =
            _0x27e68e[_0x1f2103(0x2ad)] ||
            _0x27e68e["precio"] ||
            _0x27e68e["price"] ||
            _0x27e68e[_0x1f2103(0x169)] ||
            _0x27e68e["precio_total"] ||
            _0x27e68e[_0x1f2103(0xf0)] ||
            _0x27e68e[_0x1f2103(0x321)] ||
            _0x27e68e[_0x1f2103(0x203)] ||
            "";
        console[_0x1f2103(0x2fa)](_0x1f2103(0x2a8) + _0x29d72e + ":", {
          nombre: _0x449dad,
          cantidad: _0x58a492,
          precio: _0x1cdb6e,
          campos_precio_disponibles: {
            pro_precioPromo: _0x27e68e[_0x1f2103(0x2ad)],
            precio: _0x27e68e[_0x1f2103(0x2f5)],
            price: _0x27e68e[_0x1f2103(0x310)],
            precioTotal: _0x27e68e[_0x1f2103(0x169)],
            precio_total: _0x27e68e[_0x1f2103(0x17c)],
            pro_precio_total: _0x27e68e[_0x1f2103(0xf0)],
            total_price: _0x27e68e[_0x1f2103(0x321)],
            valor_total: _0x27e68e["valor_total"],
          },
          campos_disponibles: Object[_0x1f2103(0x27f)](_0x27e68e),
          promo_completa: _0x27e68e,
        }),
          _0x34d744[_0x1f2103(0xfc)]({
            tipo: _0x1f2103(0x288),
            detalle: _0x1f2103(0x8f) + _0x449dad,
            nombre_promocion: _0x449dad,
            es_oficial: !![],
            fuente: _0x1f2103(0x1e1),
            id_promocion: _0x27e68e[_0x1f2103(0xa6)] || _0x27e68e["id"],
            cantidad: _0x58a492,
            precio: _0x1cdb6e,
            mensaje: _0x27e68e[_0x1f2103(0x10c)] || _0x27e68e["mensaje"] || "",
            tipo_promo: _0x27e68e["pro_tipoPromo"] || _0x27e68e["tipo"] || "",
            vigencia:
              _0x27e68e[_0x1f2103(0x88)] && _0x27e68e[_0x1f2103(0x101)]
                ? _0x27e68e["validFrom"] +
                  _0x1f2103(0x287) +
                  _0x27e68e[_0x1f2103(0x101)]
                : "",
            raw_data: {
              pro_cantidad_base: _0x27e68e[_0x1f2103(0x16e)],
              pro_precioPromo: _0x27e68e["pro_precioPromo"],
              pro_nombrePromo: _0x27e68e["pro_nombrePromo"],
              todos_campos_precio: {
                pro_precioPromo: _0x27e68e[_0x1f2103(0x2ad)],
                precio: _0x27e68e[_0x1f2103(0x2f5)],
                price: _0x27e68e["price"],
                precioTotal: _0x27e68e["precioTotal"],
                precio_total: _0x27e68e["precio_total"],
                pro_precio_total: _0x27e68e[_0x1f2103(0xf0)],
                total_price: _0x27e68e[_0x1f2103(0x321)],
                valor_total: _0x27e68e[_0x1f2103(0x203)],
              },
            },
          });
      }
    }
    return (
      _0x34d744[_0x1f2103(0xd4)] === 0x0
        ? console[_0x1f2103(0x2fa)](_0x1f2103(0x27e) + _0x29d72e)
        : console[_0x1f2103(0x2fa)](
            "✅\x20" + _0x34d744[_0x1f2103(0xd4)] + _0x1f2103(0x8e) + _0x29d72e
          ),
      _0x34d744
    );
  } catch (_0x24fb32) {
    return console[_0x1f2103(0x2e6)](_0x1f2103(0x244), _0x24fb32), [];
  }
}
function mostrarDetalleProducto(_0x5f8db8) {
  const _0x94da30 = _0x14e179;
  let _0x425952 = "";
  if (
    _0x5f8db8["pr_imagen"] &&
    _0x5f8db8[_0x94da30(0x2a2)][_0x94da30(0x1f2)]() !== ""
  ) {
    if (_0x5f8db8[_0x94da30(0x2a2)]["startsWith"]("http"))
      _0x425952 = _0x5f8db8[_0x94da30(0x2a2)];
    else {
      let _0x3f280e = _0x5f8db8[_0x94da30(0x2a2)]["startsWith"]("/")
        ? _0x5f8db8[_0x94da30(0x2a2)]
        : "/" + _0x5f8db8[_0x94da30(0x2a2)];
      _0x425952 = _0x94da30(0x153) + _0x3f280e;
    }
  }
  let _0x3cfb27 =
      Number(_0x5f8db8[_0x94da30(0x139)]) || Number(_0x5f8db8["L1"]) || 0x0,
    _0x17f5ff = Math["round"](_0x3cfb27 * 1.16 * 0x64) / 0x64,
    _0x2b6994 = 0xc,
    _0x5ef51d = 0.1,
    _0x317f9e =
      Math[_0x94da30(0x2e0)](_0x17f5ff * (0x1 + _0x5ef51d) * 0x64) / 0x64,
    _0x337419 = "";
  if (
    _0x5f8db8[_0x94da30(0xc1)] &&
    _0x5f8db8["codigos_barras"][_0x94da30(0xd4)] > 0x1
  ) {
    const _0x47858d = [...new Set(_0x5f8db8[_0x94da30(0xc1)])]["filter"](
      (_0x1248f1) => _0x1248f1 && _0x1248f1[_0x94da30(0x1f2)]()
    );
    _0x47858d[_0x94da30(0xd4)] > 0x1 &&
      (_0x337419 =
        _0x94da30(0xca) +
        _0x47858d["join"](",\x20") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20");
  }
  renderProductoConPromociones(
    _0x5f8db8,
    _0x425952,
    _0x17f5ff,
    _0x317f9e,
    _0x337419
  ),
    detectarPromocionReal(_0x5f8db8)
      ["then"]((_0x5abb1f) => {
        actualizarPromocionesEnVista(
          _0x5f8db8,
          _0x425952,
          _0x17f5ff,
          _0x317f9e,
          _0x337419,
          _0x5abb1f
        );
      })
      [_0x94da30(0x144)]((_0xba864d) => {
        const _0x5d9db1 = _0x94da30;
        console[_0x5d9db1(0x2e6)](_0x5d9db1(0x26c), _0xba864d),
          actualizarPromocionesEnVista(
            _0x5f8db8,
            _0x425952,
            _0x17f5ff,
            _0x317f9e,
            _0x337419,
            []
          );
      });
}
function renderProductoConPromociones(
  _0x3c60a5,
  _0x403ef6,
  _0x1426e9,
  _0xba9bbb,
  _0x5b3fdb
) {
  const _0x5c60ec = _0x14e179;
  resultadoDiv["innerHTML"] =
    _0x5c60ec(0xf8) +
    (_0x403ef6
      ? _0x5c60ec(0x15b) +
        _0x403ef6 +
        _0x5c60ec(0x22a) +
        _0x3c60a5[_0x5c60ec(0x236)] +
        _0x5c60ec(0x2b8)
      : "") +
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-8\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22\x20style=\x22font-size:2rem;\x20color:#616161;\x22>" +
    _0x3c60a5[_0x5c60ec(0x236)] +
    _0x5c60ec(0x171) +
    _0x1426e9[_0x5c60ec(0x1c1)](0x2) +
    _0x5c60ec(0x1dc) +
    _0xba9bbb[_0x5c60ec(0x1c1)](0x2) +
    "\x20MXN.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:1rem;\x20margin-top:-5px;\x22>MSI</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x22\x20style=\x22font-size:1rem;\x22>SKU:\x20<b>" +
    _0x3c60a5["pr_sku"] +
    _0x5c60ec(0xfd) +
    _0x5b3fdb +
    _0x5c60ec(0xe7);
}
function actualizarPromocionesEnVista(
  _0x57ca74,
  _0x2e6390,
  _0x414424,
  _0x7a98f8,
  _0xc43f9e,
  _0x2dca67
) {
  const _0x19d692 = _0x14e179;
  console[_0x19d692(0x2fa)](_0x19d692(0x25b), _0x2dca67);
  let _0x2f7426 = "";
  if (_0x2dca67[_0x19d692(0xd4)] > 0x0) {
    const _0x9542a8 = _0x2dca67["filter"](
      (_0x2d0e57) =>
        _0x2d0e57[_0x19d692(0x2a9)] &&
        (_0x2d0e57[_0x19d692(0xdd)] === "backend_mejorado" ||
          _0x2d0e57[_0x19d692(0xdd)] === _0x19d692(0x1e1))
    );
    console[_0x19d692(0x2fa)](
      "🏷️\x20Promociones\x20oficiales\x20filtradas:",
      _0x9542a8
    );
    if (_0x9542a8["length"] > 0x0) {
      const _0x13972e = _0x9542a8[_0x19d692(0x19a)]((_0x5efb27) => {
        const _0x4a13d9 = _0x19d692;
        console["log"](_0x4a13d9(0x120), _0x5efb27);
        const _0x239bdd =
          _0x5efb27[_0x4a13d9(0x99)] || _0x5efb27["pro_cantidad_base"] || "";
        let _0x52d6bb =
          _0x5efb27["precio"] || _0x5efb27[_0x4a13d9(0x2ad)] || "";
        const _0x4e9631 =
          _0x5efb27[_0x4a13d9(0x319)] || _0x5efb27[_0x4a13d9(0x15d)] || "";
        console[_0x4a13d9(0x2fa)](_0x4a13d9(0x196), {
          cantidad: _0x239bdd,
          precio: _0x52d6bb,
          nombrePromo: _0x4e9631,
        });
        if (_0x239bdd && _0x52d6bb) {
          const _0x4cc168 = parseInt(_0x239bdd),
            _0x330a2c = parseFloat(_0x52d6bb);
          if (!isNaN(_0x4cc168) && !isNaN(_0x330a2c)) {
            const _0x5242f8 = _0x4cc168 * _0x330a2c,
              _0x23ff23 = Math["round"](_0x5242f8);
            console[_0x4a13d9(0x2fa)](
              _0x4a13d9(0x1a2) +
                _0x4cc168 +
                "\x20x\x20" +
                _0x330a2c +
                _0x4a13d9(0x31b) +
                _0x5242f8 +
                "\x20→\x20" +
                _0x23ff23 +
                _0x4a13d9(0x227)
            ),
              (_0x52d6bb = _0x23ff23["toString"]());
          }
        }
        console[_0x4a13d9(0x2fa)](_0x4a13d9(0x16f), {
          cantidad: _0x239bdd,
          precio: _0x52d6bb,
          nombrePromo: _0x4e9631,
        });
        let _0x4a8238 = "";
        if (_0x239bdd && _0x52d6bb)
          (_0x4a8238 = _0x239bdd + "x" + _0x52d6bb),
            console[_0x4a13d9(0x2fa)](
              "✅\x20Usando\x20cantidad\x20y\x20precio\x20calculado:",
              _0x4a8238
            );
        else {
          if (_0x4e9631) {
            const _0x408d56 = _0x4e9631["match"](/(\d+)\s*[xX×]\s*(\d+)/i),
              _0x1ead28 = _0x4e9631[_0x4a13d9(0x22d)](
                /(\d+)\s*[xX×]\s*\$?\s*(\d+)/i
              ),
              _0x482847 = _0x4e9631[_0x4a13d9(0x22d)](/(\d+)\s*[xX×]/i);
            if (_0x408d56)
              (_0x4a8238 = _0x408d56[0x1] + "x" + _0x408d56[0x2]),
                console[_0x4a13d9(0x2fa)](_0x4a13d9(0x1f7), _0x4a8238);
            else {
              if (_0x1ead28)
                (_0x4a8238 = _0x1ead28[0x1] + "x" + _0x1ead28[0x2]),
                  console[_0x4a13d9(0x2fa)](_0x4a13d9(0x14d), _0x4a8238);
              else
                _0x482847
                  ? ((_0x4a8238 = _0x482847[0x1] + "x"),
                    console["log"](_0x4a13d9(0xe5), _0x4a8238))
                  : ((_0x4a8238 = _0x4e9631),
                    console[_0x4a13d9(0x2fa)](_0x4a13d9(0x1ae), _0x4a8238));
            }
          } else
            (_0x4a8238 = _0x4a13d9(0x2a4)),
              console[_0x4a13d9(0x2fa)](_0x4a13d9(0x166));
        }
        return (
          "<span\x20class=\x22badge\x20bg-warning\x20text-dark\x20me-2\x20mb-1\x22\x20style=\x22font-size:0.85rem;\x22>🔥\x20" +
          _0x4a8238 +
          _0x4a13d9(0x1c7)
        );
      })[_0x19d692(0x104)]("");
      _0x2f7426 =
        _0x19d692(0xd9) +
        _0x13972e +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-warning\x22\x20style=\x22font-weight:500;\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    } else
      _0x2f7426 =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
  } else _0x2f7426 = _0x19d692(0x233);
  const _0x32fa6e = document[_0x19d692(0x165)]("promociones-container");
  _0x32fa6e && (_0x32fa6e["innerHTML"] = _0x2f7426);
}
async function tienePromociones(_0x4bb108) {
  const _0x4012cf = _0x14e179;
  try {
    const _0x101966 = (_0x4bb108[_0x4012cf(0x2c4)] || "")[_0x4012cf(0x30f)]();
    if (!_0x101966) return ![];
    const _0x4c86c3 = await getAllPromociones();
    if (_0x4c86c3[_0x4012cf(0xd4)] === 0x0) return ![];
    for (const _0x54f6f2 of _0x4c86c3) {
      let _0x48358 = [];
      if (
        _0x54f6f2[_0x4012cf(0x27a)] &&
        Array["isArray"](_0x54f6f2[_0x4012cf(0x27a)])
      )
        _0x48358 = _0x54f6f2[_0x4012cf(0x27a)];
      else
        _0x54f6f2[_0x4012cf(0x2ca)] &&
          _0x54f6f2[_0x4012cf(0x2ca)][_0x4012cf(0x2c4)] &&
          (Array[_0x4012cf(0x1ea)](_0x54f6f2[_0x4012cf(0x2ca)]["pr_sku"])
            ? (_0x48358 = _0x54f6f2[_0x4012cf(0x2ca)][_0x4012cf(0x2c4)])
            : (_0x48358 = _0x54f6f2[_0x4012cf(0x2ca)]["pr_sku"]
                ["split"]("\x20")
                [_0x4012cf(0x265)]((_0x573052) =>
                  _0x573052[_0x4012cf(0x1f2)]()
                )));
      if (_0x48358["includes"](_0x101966)) return !![];
    }
    return ![];
  } catch (_0x1d25be) {
    return (
      console[_0x4012cf(0x11e)](
        "Error\x20verificando\x20promociones:",
        _0x1d25be
      ),
      ![]
    );
  }
}
let searchTimeout;
inputCodigo["addEventListener"]("input", async function (_0x264e00) {
  const _0x36abe9 = _0x14e179,
    _0x3b9877 = inputCodigo[_0x36abe9(0x23a)]
      [_0x36abe9(0x1f2)]()
      ["toLowerCase"]();
  clearTimeout(searchTimeout), (sugerenciasDiv["innerHTML"] = "");
  if (!_0x3b9877 || _0x3b9877[_0x36abe9(0xd4)] < 0x2) {
    sugerenciasDiv[_0x36abe9(0x326)][_0x36abe9(0x251)] = _0x36abe9(0x178);
    return;
  }
  searchTimeout = setTimeout(async () => {
    const _0x3dd85f = _0x36abe9;
    let _0x296d30 = await getAllProductos(),
      _0xb99cf8 = _0x296d30[_0x3dd85f(0x265)]((_0x196d70) => {
        const _0x363dca = _0x3dd85f;
        return (
          (_0x196d70[_0x363dca(0x236)] &&
            _0x196d70[_0x363dca(0x236)]
              [_0x363dca(0x164)]()
              ["includes"](_0x3b9877)) ||
          (_0x196d70[_0x363dca(0x2c4)] &&
            String(_0x196d70[_0x363dca(0x2c4)])
              [_0x363dca(0x164)]()
              [_0x363dca(0x1cb)](_0x3b9877)) ||
          (_0x196d70["pr_gtin"] &&
            String(_0x196d70[_0x363dca(0x1d6)])
              [_0x363dca(0x164)]()
              [_0x363dca(0x1cb)](_0x3b9877))
        );
      });
    const _0xe6bdb = new Set();
    _0xb99cf8 = _0xb99cf8["filter"]((_0x5e198f) => {
      const _0x3ac689 = _0x3dd85f,
        _0x31b19b = _0x5e198f[_0x3ac689(0x2c4)] || _0x5e198f[_0x3ac689(0x1d6)];
      if (!_0x31b19b || _0xe6bdb[_0x3ac689(0x1da)](_0x31b19b)) return ![];
      return _0xe6bdb[_0x3ac689(0x2b7)](_0x31b19b), !![];
    })["slice"](0x0, 0xa);
    if (_0xb99cf8[_0x3dd85f(0xd4)] === 0x0) {
      sugerenciasDiv[_0x3dd85f(0x326)][_0x3dd85f(0x251)] = _0x3dd85f(0x178);
      return;
    }
    _0xb99cf8[_0x3dd85f(0x2ec)]((_0x180b12, _0x361fc6) => {
      const _0x20774a = _0x3dd85f,
        _0x5a14a2 = (_0x180b12["pr_name"] || "")[_0x20774a(0x164)](),
        _0x5d27a5 = (_0x361fc6["pr_name"] || "")["toLowerCase"](),
        _0x4c2b97 = _0x5a14a2["startsWith"](_0x3b9877),
        _0x47e283 = _0x5d27a5[_0x20774a(0x219)](_0x3b9877);
      if (_0x4c2b97 && !_0x47e283) return -0x1;
      if (!_0x4c2b97 && _0x47e283) return 0x1;
      return _0x5a14a2["length"] - _0x5d27a5[_0x20774a(0xd4)];
    });
    const _0xd0c8f1 = _0xb99cf8["map"]((_0x260dae) =>
        tienePromociones(_0x260dae)
      ),
      _0x50c1af = await Promise[_0x3dd85f(0x12b)](_0xd0c8f1);
    _0xb99cf8[_0x3dd85f(0xc9)]((_0x3ed6a0, _0xe949d9) => {
      const _0x3c8a16 = _0x3dd85f,
        _0x269301 = _0x50c1af[_0xe949d9],
        _0x42f8f2 = document["createElement"](_0x3c8a16(0x2e2));
      (_0x42f8f2["type"] = _0x3c8a16(0x2e2)),
        (_0x42f8f2[_0x3c8a16(0x30a)] = _0x3c8a16(0x194));
      let _0x4b9be5 = "";
      if (
        _0x3ed6a0[_0x3c8a16(0x2a2)] &&
        _0x3ed6a0["pr_imagen"][_0x3c8a16(0x1f2)]() !== ""
      ) {
        let _0x2e74b1 = "";
        if (_0x3ed6a0[_0x3c8a16(0x2a2)][_0x3c8a16(0x219)]("http"))
          _0x2e74b1 = _0x3ed6a0[_0x3c8a16(0x2a2)];
        else {
          let _0x4ecdce = _0x3ed6a0["pr_imagen"][_0x3c8a16(0x219)]("/")
            ? _0x3ed6a0[_0x3c8a16(0x2a2)]
            : "/" + _0x3ed6a0[_0x3c8a16(0x2a2)];
          _0x2e74b1 = _0x3c8a16(0x153) + _0x4ecdce;
        }
        _0x4b9be5 =
          "<img\x20src=\x22" +
          _0x2e74b1 +
          _0x3c8a16(0x22a) +
          _0x3ed6a0[_0x3c8a16(0x236)] +
          _0x3c8a16(0x2ee);
      }
      const _0x3c72c2 = _0x269301 ? _0x3c8a16(0x136) : "";
      (_0x42f8f2["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20\x20" +
        _0x4b9be5 +
        _0x3c8a16(0x1e4) +
        _0x3ed6a0[_0x3c8a16(0x236)] +
        _0x3c8a16(0x1c4) +
        _0x3c72c2 +
        _0x3c8a16(0x1ff) +
        (_0x3ed6a0["pr_sku"] || _0x3ed6a0[_0x3c8a16(0x1d6)] || "") +
        _0x3c8a16(0x2af)),
        (_0x42f8f2["onclick"] = function () {
          const _0x16f935 = _0x3c8a16;
          mostrarDetalleProducto(_0x3ed6a0);
          const _0x2b7aef = {
            ..._0x3ed6a0,
            FECHA_ESCANEO: new Date()["toISOString"](),
          };
          historial["unshift"](_0x2b7aef),
            setCookie(
              _0x16f935(0x2d4),
              JSON[_0x16f935(0x2a6)](historial),
              0x1e
            ),
            renderHistorial(),
            (inputCodigo[_0x16f935(0x23a)] = ""),
            (sugerenciasDiv[_0x16f935(0x192)] = ""),
            (sugerenciasDiv[_0x16f935(0x326)]["display"] = "none");
        }),
        sugerenciasDiv[_0x3c8a16(0x1a7)](_0x42f8f2);
    }),
      (sugerenciasDiv["style"][_0x3dd85f(0x251)] = _0x3dd85f(0x128));
  }, 0x12c);
}),
  document[_0x14e179(0xdf)](_0x14e179(0x14a), function (_0x2ceacc) {
    const _0x254413 = _0x14e179;
    !inputCodigo[_0x254413(0x16d)](_0x2ceacc[_0x254413(0x1d5)]) &&
      !sugerenciasDiv["contains"](_0x2ceacc[_0x254413(0x1d5)]) &&
      ((sugerenciasDiv[_0x254413(0x192)] = ""),
      (sugerenciasDiv["style"]["display"] = _0x254413(0x178)));
  });
function iniciarScanner() {
  const _0x230eb8 = _0x14e179;
  if (scannerActivo) return;
  navigator[_0x230eb8(0x2cd)]
    [_0x230eb8(0xf6)]({ video: !![] })
    [_0x230eb8(0x205)]((_0x307b1c) => {
      const _0x43c20a = _0x230eb8;
      _0x307b1c[_0x43c20a(0x2ab)]()[_0x43c20a(0xc9)]((_0x553f66) =>
        _0x553f66[_0x43c20a(0x115)]()
      ),
        (scannerActivo = !![]),
        (readerDiv["style"]["display"] = "block"),
        document[_0x43c20a(0x165)](_0x43c20a(0x123))[_0x43c20a(0x27c)]({
          behavior: "smooth",
          block: _0x43c20a(0xb0),
        }),
        (ayudaTexto[_0x43c20a(0x326)][_0x43c20a(0x251)] = "block");
      const _0x4cfd8d = new Html5Qrcode(_0x43c20a(0x123)),
        _0x358734 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: "environment",
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x529490, _0x24eaf4) {
            const _0x38bf1c = _0x43c20a,
              _0x322ff2 = Math[_0x38bf1c(0x324)](0x12c, _0x529490 * 0.9),
              _0x59b70b = 0x64;
            return { width: _0x322ff2, height: _0x59b70b };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats["CODE_128"],
            Html5QrcodeSupportedFormats[_0x43c20a(0x18a)],
            Html5QrcodeSupportedFormats[_0x43c20a(0x18f)],
            Html5QrcodeSupportedFormats[_0x43c20a(0xf3)],
            Html5QrcodeSupportedFormats[_0x43c20a(0x20b)],
            Html5QrcodeSupportedFormats[_0x43c20a(0x1b6)],
            Html5QrcodeSupportedFormats[_0x43c20a(0xe8)],
            Html5QrcodeSupportedFormats[_0x43c20a(0x173)],
            Html5QrcodeSupportedFormats[_0x43c20a(0x1fd)],
            Html5QrcodeSupportedFormats["QR_CODE"],
            Html5QrcodeSupportedFormats["DATA_MATRIX"],
            Html5QrcodeSupportedFormats[_0x43c20a(0x2c3)],
            Html5QrcodeSupportedFormats[_0x43c20a(0x2fd)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x4cfd8d["start"](
        { facingMode: _0x43c20a(0x1f8) },
        _0x358734,
        (_0x1726cc) => {
          const _0x243d6f = _0x43c20a;
          (inputCodigo[_0x243d6f(0x23a)] = _0x1726cc[_0x243d6f(0x1f2)]()[
            _0x243d6f(0xe9)
          ](/\s+$/, "")),
            _0x4cfd8d[_0x243d6f(0x115)]()[_0x243d6f(0x205)](() => {
              const _0x26ff14 = _0x243d6f;
              (readerDiv[_0x26ff14(0x326)]["display"] = "none"),
                (ayudaTexto["style"][_0x26ff14(0x251)] = _0x26ff14(0x178)),
                (scannerActivo = ![]),
                _0x4cfd8d[_0x26ff14(0xd2)](),
                form[_0x26ff14(0x2d2)](),
                setTimeout(() => {
                  const _0x1694e8 = _0x26ff14,
                    _0x5b665d = document[_0x1694e8(0x165)](_0x1694e8(0x2ae));
                  _0x5b665d &&
                    _0x5b665d[_0x1694e8(0x27c)]({
                      behavior: _0x1694e8(0x1d3),
                      block: _0x1694e8(0x94),
                      inline: _0x1694e8(0x13a),
                    });
                }, 0x1f4);
            });
        },
        (_0x3488e6) => {}
      )
        [_0x43c20a(0x205)](() => {
          setTimeout(() => {
            const _0x3ad313 = _0x5b4b,
              _0x1161ab = readerDiv[_0x3ad313(0x160)](_0x3ad313(0x30b));
            if (_0x1161ab) {
              const _0x32d574 =
                _0x1161ab[_0x3ad313(0x1a3)]["getVideoTracks"]()[0x0];
              _0x32d574["applyConstraints"]({
                focusMode: _0x3ad313(0x284),
                advanced: [{ zoom: 0x2 }],
              })
                [_0x3ad313(0x205)](() => {})
                [_0x3ad313(0x144)]((_0x282b02) => {});
            }
          }, 0x7d0);
        })
        [_0x43c20a(0x144)]((_0x48147b) => {
          const _0x92ba40 = _0x43c20a;
          (scannerActivo = ![]),
            (resultadoDiv[_0x92ba40(0x192)] =
              _0x92ba40(0x142) + _0x48147b + _0x92ba40(0x96)),
            renderHistorial();
        });
      const _0x9f54e1 = new MutationObserver(() => {
        const _0x5d3c93 = _0x43c20a,
          _0x2e1df2 = readerDiv[_0x5d3c93(0x160)]("video");
        _0x2e1df2 &&
          (_0x2e1df2[_0x5d3c93(0x290)]("playsinline", ""),
          _0x2e1df2["setAttribute"](_0x5d3c93(0x11a), ""),
          _0x2e1df2[_0x5d3c93(0x290)](_0x5d3c93(0x140), ""),
          _0x9f54e1["disconnect"]());
      });
      _0x9f54e1[_0x43c20a(0x1b0)](readerDiv, {
        childList: !![],
        subtree: !![],
      });
    })
    [_0x230eb8(0x144)]((_0xe1a087) => {
      const _0x1e3d8d = _0x230eb8;
      (resultadoDiv[_0x1e3d8d(0x192)] = _0x1e3d8d(0x28e)), renderHistorial();
    });
}
function _0x1661() {
  const _0x11c196 = [
    "productos_ts",
    "🔄\x20Consultando\x20endpoint\x20con\x20códigos\x20de\x20barras...",
    "Producto\x20desconocido",
    "includes",
    "allSettled",
    "🎯\x20Producto\x20encontrado\x20con\x20códigos\x20múltiples:",
    "mensaje",
    "getItem",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🎉\x20¡Google\x20Vision\x20API\x20Activa!</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>✅\x20La\x20detección\x20premium\x20está\x20funcionando\x20correctamente</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Fallback\x20automático:\x20Local\x20→\x20Google\x20Vision</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Error\x20al\x20procesar\x20la\x20imagen</div>",
    "width",
    "smooth",
    "Formato\x20de\x20promociones\x20inválido",
    "target",
    "pr_gtin",
    "❌\x20Error\x20en\x20diagnóstico:",
    "\x20con\x20datos\x20disponibles)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "674iqAzwG",
    "has",
    "upc_reader",
    "\x20MXN.</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:1rem;\x20margin-top:-5px;\x22>CONTADO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22\x20style=\x22font-size:3.5rem;\x22>$\x20",
    "Fecha\x20desconocida",
    "result",
    "#btnTexto",
    "textContent",
    "indexeddb_local",
    "responses",
    "toUTCString",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "top",
    "✅\x20Usando\x20promociones\x20desde\x20IndexedDB:",
    "Productos\x20básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "promociones_ts",
    "googleVisionConfig",
    "isArray",
    "head",
    "keydown",
    "Backend\x20error:\x20",
    "reason",
    "month",
    "\x20promociones",
    "🔄\x20Primera\x20carga:\x20cargando\x20productos\x20y\x20promociones...",
    "trim",
    "writeText",
    "history",
    "count",
    "✅\x20Código\x20detectado\x20(configuración\x20principal):",
    "✅\x20Extraído\x20formato\x20completo\x20del\x20nombre:",
    "environment",
    "https://verificadorb9-backend.vercel.app/api/productos-con-codigos",
    "getRegistrations",
    "installBtn",
    "aztec",
    "ITF",
    "autocapitalize",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "find",
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a",
    "agresiva",
    "valor_total",
    "\x20promociones\x20(",
    "then",
    "Productos:\x20nunca\x20|\x20Promociones:\x20",
    "code_32_reader",
    "),\x20",
    "PRECIO",
    "drawImage",
    "UPC_E",
    "Backend\x20error",
    "code_39",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "\x20minutos",
    "change",
    "\x20más\x20con\x20promociones.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "data_matrix",
    "productosBasicos",
    "register",
    "insertBefore",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "userChoice",
    "\x20más</span>",
    "startsWith",
    "📝\x20Texto\x20completo\x20detectado:",
    "src",
    "<div\x20class=\x22alert\x20alert-danger\x22>❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API</div>",
    "onupgradeneeded",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h5>🏷️\x20No\x20se\x20encontraron\x20productos\x20con\x20promociones</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-0\x22>Puede\x20ser\x20que\x20no\x20haya\x20promociones\x20activas\x20en\x20este\x20momento\x20o\x20que\x20el\x20servicio\x20no\x20esté\x20disponible.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "https://verificadorb9-backend.vercel.app/api/promociones",
    "NOMBRE",
    "📏\x20Ampliando\x20imagen\x20pequeña:\x20",
    "image/png",
    "disabled",
    "📋\x20Datos\x20de\x20promociones:",
    "rejected",
    "Última\x20actualización:\x20",
    "\x20(redondeado)",
    "🚀\x20Intentando\x20con\x20Google\x20Vision\x20API...",
    "🔄\x20Tercera\x20tentativa:\x20imagen\x20original\x20sin\x20procesamiento...",
    "\x22\x20alt=\x22",
    "tipo",
    "test",
    "match",
    "Descargando\x20desde\x20múltiples\x20endpoints...",
    "http",
    "getImageData",
    "ean_reader",
    "#ultimaActualizacion",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "placeholder",
    "🏷️\x20",
    "pr_name",
    "d-none",
    "⚠️\x20Consulta\x20parcial\x20de\x20endpoints",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22height:\x2080px;\x20object-fit:\x20contain;\x20padding:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "value",
    "productosConCodigos",
    "Promoción\x20",
    "🔄\x20Probando\x20con\x20imagen\x20original...",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20",
    "onsuccess",
    "❌\x20Error\x20cargando\x20promociones:",
    "enabled",
    "Backend\x20no\x20disponible\x20-\x20usando\x20detección\x20local",
    "spellcheck",
    "Error\x20obteniendo\x20promociones:",
    "⚠️\x20Error\x20con\x20endpoint\x20de\x20códigos\x20de\x20barras:",
    "code_128_reader",
    "🔄\x20Sin\x20productos:\x20cargando\x20productos\x20y\x20promociones...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "getAll",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x22>$",
    "btn-success",
    "lastUsedDate",
    "oncomplete",
    "📊\x20Respuesta\x20del\x20backend:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📋\x20Descripción\x20completa\x20de\x20productos:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-3\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "split",
    "display",
    "descripcion",
    "off",
    "✅\x20Instalación\x20aceptada",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "BILLING_DISABLED",
    "?stats=true",
    "isConfirmed",
    "Failed\x20to\x20fetch",
    "\x20mensual,\x20",
    "🔍\x20Actualizando\x20promociones\x20en\x20vista:",
    "📸\x20Usando\x20Quagga\x20como\x20fallback",
    "⚙️\x20Configuración\x20de\x20detección\x20avanzada",
    "detalle",
    "x-large",
    "💡\x20El\x20contador\x20del\x20backend\x20se\x20actualiza\x20automáticamente\x20en\x20el\x20servidor",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB\x20desde\x20servidor",
    "ayuda",
    "🎯\x20Mejor\x20código\x20seleccionado:\x20\x22",
    "<div\x20class=\x22row\x22>",
    "filter",
    "%</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x22\x20style=\x22height:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-",
    "bg-success",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20SKU\x22\x20data-copiar=\x22",
    "❌\x20Formato\x20de\x20promociones\x20inválido",
    "\x20(quedan\x20",
    "no-store",
    "Error\x20cargando\x20promociones:",
    "⚠️\x20<strong>Límite\x20diario\x20cerca:</strong>\x20",
    "🚀\x20Usando\x20Barcode\x20Detection\x20API\x20nativa",
    "📸\x20Preparando\x20imagen\x20para\x20Google\x20Vision...",
    "getContext",
    "auto",
    "https://verificadorb9-backend.vercel.app/api/promociones-mejoradas",
    "productosConCodigosAdicionales",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "overflowY",
    "monthlyCount",
    "revokeObjectURL",
    "❌\x20Backend\x20no\x20disponible:",
    "getAttribute",
    "skus",
    "FECHA_ESCANEO",
    "scrollIntoView",
    "boundingBox",
    "❌\x20No\x20hay\x20promociones\x20para\x20SKU:\x20",
    "keys",
    "339960LfYNDA",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "putImageData",
    "🔄\x20Consultando\x20endpoint\x20de\x20promociones...",
    "continuous",
    "No\x20se\x20pudieron\x20cargar\x20productos\x20de\x20ningún\x20endpoint",
    "relative",
    "\x20al\x20",
    "promoción\x20oficial",
    "toDataURL",
    "upc_e_reader",
    ".alert-danger",
    "⚠️\x20BarcodeDetector\x20no\x20disponible\x20en\x20este\x20navegador",
    "userAgent",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>",
    "🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "setAttribute",
    "open",
    "load",
    "\x0a\x20\x20\x20\x20</div>",
    "other",
    "Error\x20procesando\x20imagen:",
    "<small\x20class=\x22text-muted\x20mt-1\x20d-block\x22>",
    "format",
    "classList",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>",
    "precio\x20especial",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "🔄\x20Productos\x20existentes:\x20cargando\x20solo\x20promociones...",
    "PERMISSION_DENIED",
    "onerror",
    "ean_8",
    "productos",
    "data-copiar",
    "pr_imagen",
    "BarcodeDetector",
    "PROMO",
    "❌\x20Google\x20Vision\x20no\x20detectó\x20texto",
    "stringify",
    "Error\x20",
    "🎯\x20PROMOCIÓN\x20ENCONTRADA\x20para\x20SKU\x20",
    "es_oficial",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "getTracks",
    "🔍\x20Buscando\x20promociones\x20para\x20SKU:",
    "pro_precioPromo",
    "resultado",
    "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "❌\x20Código\x20no\x20encontrado:\x20\x22",
    "\x20\x20\x20•\x20Problema\x20en\x20el\x20código\x20de\x20la\x20función\x20serverless",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "promociones:",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Precio:\x20$",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Verifique\x20su\x20conexión\x20a\x20internet",
    "add",
    "\x22\x20style=\x22width:218px;\x20height:124px;\x20object-fit:contain;\x20background:#fff;\x20border-radius:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "dailyUsed",
    "\x0a<button\x20type=\x22button\x22\x20id=\x22btnPromociones\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x20mb-4\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#ffc107;\x20background:#fff8dc;\x20color:#856404;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x20margin-left:20px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🏷️\x20Ver\x20Promociones\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20w-100\x20mb-2\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20flex-column\x20flex-md-row\x20align-items-md-end\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20<h5\x20class=\x22ant-typography\x20css-1r8qqf1\x20mb-0\x22>Productos</h5>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22ultimaActualizacion\x22\x20class=\x22ant-typography\x20css-1r8qqf1\x20ms-md-4\x22\x20style=\x22font-size:1rem;\x22>Última\x20actualización:\x20nunca\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnActualizar\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#d9d9d9;\x20background:#fff;\x20color:#222;\x20font-size:1rem;\x20padding:2px\x2016px;\x20margin-left:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnTexto\x22>Actualizar</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20id=\x22mensajeActualizacion\x22\x20class=\x22text-center\x22\x20style=\x22min-height:\x201.5rem;\x22></div>\x0a",
    "🔧\x20Sugerencia:\x20Verificar\x20configuración\x20CORS\x20en\x20el\x20backend\x20para\x20/api/productos-con-codigos",
    "CORS_ERROR",
    "📊\x20Resumen\x20endpoints\x20productos:",
    "Algunos\x20endpoints\x20fallaron\x20(",
    "\x20comprando\x20",
    "500",
    "createImageData",
    "Conectando\x20con\x20todos\x20los\x20servidores",
    "AZTEC",
    "pr_sku",
    "Error\x20al\x20cargar\x20productos:",
    "✅\x20Backend\x20activo.\x20Estadísticas:",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x20ms-2\x22>1\x20unidad</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22><strong>SKU:</strong>\x20",
    "🚀\x20Iniciando\x20actualización\x20con\x20progreso...",
    "d-flex\x20flex-column\x20align-items-center\x20mb-3",
    "pro_grupoProductos_primaria",
    "🔧\x20Error\x20500:\x20Problema\x20con\x20Google\x20Vision\x20API",
    "position",
    "mediaDevices",
    "div",
    "data-sku",
    "Procesando\x20productos",
    "clipboard",
    "requestSubmit",
    "preventDefault",
    "historial",
    "💡\x20Verifica\x20la\x20configuración\x20de\x20GOOGLE_VISION_API_KEY\x20en\x20Vercel",
    "•\x20Mensual:\x20",
    "maxHeight",
    "SKU\x20desconocido",
    "serviceWorker",
    ",\x20Diario:\x20",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "1000",
    "abs",
    "📊\x20Estadísticas:",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Unidades</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x20d-block\x22\x20style=\x22font-size:\x201.3rem;\x22>$",
    "round",
    "básico\x20❌\x20(error\x20HTTP)",
    "button",
    "🔍\x20Iniciando\x20diagnóstico\x20del\x20backend...",
    "success",
    "fill",
    "error",
    "autocorrect",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📦\x20Productos\x20en\x20promoción:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20usos\x20hoy",
    "📋\x20Probando\x20configuración:\x20",
    "rawValue",
    "sort",
    "🎯\x20Umbral\x20calculado:\x20",
    "\x22\x20style=\x22width:40px;\x20height:40px;\x20object-fit:cover;\x20border-radius:4px;\x20margin-right:12px;\x20background:#f8f9fa;\x22>",
    "substring",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "usage",
    "Todos\x20los\x20endpoints\x20fallaron\x20(",
    "Backend\x20con\x20error:\x20",
    "promoResult",
    "precio",
    "CORS_ERROR:\x20Backend\x20no\x20accesible\x20desde\x20este\x20dominio",
    "readwrite",
    "🔧\x20Error\x20500\x20detectado\x20-\x20Analizando\x20causa\x20específica:",
    "\x20usos\x20mensuales",
    "log",
    "10uDzkqz",
    "4222863JrJrzo",
    "PDF_417",
    "bg-warning\x20text-dark",
    "fire",
    "objectStoreNames",
    "<br>•\x20🔍\x20<strong>Códigos\x20detectados:</strong>\x20",
    "Cargando\x20promociones",
    "básico\x20❌\x20(error)",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Total\x20Normal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "status",
    "🎯\x20Consultando\x20promociones...",
    "json",
    "\x20segundos",
    "recordUsage",
    "className",
    "video",
    "200px",
    "statusText",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
    "toString",
    "price",
    "Error\x20verificando\x20datos\x20locales:",
    "SKU",
    "nombre",
    "totalCodigos",
    "estadisticas",
    "⚠️\x20Error\x20guardando\x20promociones:",
    "⚠️\x20Error\x20al\x20procesar\x20producto\x20",
    "detalles",
    "nombre_promocion",
    "Hace\x20",
    "\x20=\x20",
    "🔄\x20Backend\x20no\x20disponible,\x20usando\x20detección\x20local",
    "es-CL",
    "🎉\x20¡Google\x20Vision\x20API\x20funcionando\x20correctamente!",
    "ean_8_reader",
    "Error\x20HTTP:\x20",
    "total_price",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "list-group\x20position-absolute\x20w-100",
    "min",
    "onLine",
    "style",
    "canvas",
    "cookie",
    "❌\x20Instalación\x20rechazada",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-success\x20fw-bold\x22>$",
    "right",
    "beforeinstallprompt",
    "detect",
    "🔧\x20Problema\x20de\x20CORS\x20detectado\x20-\x20necesita\x20configuración\x20en\x20backend",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB",
    "#6c757d",
    "alert-success",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-muted\x22>-</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Sin\x20datos</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "codeResult",
    "activo",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "pop",
    "validFrom",
    "Iniciando...",
    "🔄\x20No\x20hay\x20promociones\x20locales,\x20consultando\x20servidor...",
    "#mensajeActualizacion",
    "visionData",
    "2\x20endpoints\x20completados,\x20finalizando...",
    "\x20promocion(es)\x20encontrada(s)\x20para\x20SKU:\x20",
    "🔥\x20",
    "text",
    "Error\x20al\x20cargar\x20promociones:",
    "No\x20especificado",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22verPromociones()\x22\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "start",
    "✅\x20Los\x203\x20endpoints\x20consultados",
    "</div>",
    "totalProductos",
    "querySelectorAll",
    "cantidad",
    "\x22\x20class=\x22card-img-top\x22\x20alt=\x22",
    ".copiar-btn",
    "dailyLimit",
    "</small>",
    "bg-danger",
    "📡\x20Enviando\x20a\x20backend\x20proxy...",
    "promociones",
    "limpiarHistorialBtn",
    "⚠️\x20<strong>Límite\x20cerca:</strong>\x20",
    "message",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Con\x20códigos\x20adicionales:</strong>\x20",
    "sugerenciasDiv",
    "idPromo",
    "🏦\x20PROBLEMA:\x20Facturación\x20no\x20habilitada\x20en\x20el\x20proyecto\x20correcto",
    "⚡\x20Actualización\x20completada\x20en\x20",
    "<div\x20class=\x22alert\x20alert-success\x22>✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente</div>",
    "matchAll",
    "3UTLVPm",
    "pdf417",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "qr_code",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20spinner-border-sm\x20me-2\x22\x20role=\x22status\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Diagnosticando\x20backend...\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "center",
    "💡\x20Verifica\x20que\x20el\x20proyecto\x20#1070150612422\x20tenga\x20facturación\x20activa",
    "⚠️\x20Backend\x20responde\x20pero\x20con\x20error:",
    "1\x20endpoint\x20completado,\x20finalizando...",
    "Nunca\x20actualizado",
    "googleVisionUsage",
    "Finalizada\x20en\x20",
    "❌\x20No\x20se\x20encontraron\x20códigos\x20válidos\x20en\x20el\x20texto",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "❌\x20Cancelar",
    "transaction",
    "focus",
    "✅\x20Google\x20Vision\x20API\x20usada\x20exitosamente\x20-\x20contador\x20local\x20actualizado",
    "codabar_reader",
    "🧪\x20Probando\x20vision-detect\x20con\x20imagen\x20de\x20prueba...",
    "slice",
    "submit",
    "codigos_barras",
    "<br>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20(",
    "79472HAVLVb",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "getFullYear",
    "code_93_reader",
    "forEach",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x20mt-2\x22\x20style=\x22font-size:0.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Códigos\x20disponibles:</strong>\x20",
    "SUCCESS",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "remainingMonthly",
    "objectStore",
    "codabar",
    "parse",
    "autocomplete",
    "clear",
    "code_39_reader",
    "length",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Actualizado:</strong>\x20",
    "parentNode",
    "i2of5",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:#495057;\x22>🏷️\x20PROMOCIONES\x20ACTIVAS</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:\x200.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💰\x20Ahorras\x20$",
    "<div\x20class=\x22alert\x20alert-info\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Mostrando\x20los\x20primeros\x2020\x20productos.\x20Hay\x20",
    "Combo\x20Especial",
    "fuente",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(",
    "addEventListener",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20Error\x20verificando\x20estado",
    "CORS",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "códigos\x20de\x20barras\x20❌\x20(HTTP\x20",
    "height",
    "⚠️\x20Solo\x20cantidad\x20extraída:",
    "Formato:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22promociones-container\x22\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>🔍\x20Verificando\x20promociones...</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "CODE_93",
    "replace",
    "Promoción\x20especial",
    ";\x20expires=",
    "codigo",
    "enabledCheck",
    "🚫\x20PROBLEMA:\x20Permisos\x20denegados\x20-\x20Vision\x20API\x20no\x20habilitada",
    "🔍\x20Códigos\x20detectados\x20por\x20API\x20nativa:\x20",
    "pro_precio_total",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontró\x20el\x20código\x20ingresado</div>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "UPC_A",
    "📡\x20Consultando\x20TODOS\x20los\x20endpoints\x20de\x20productos...",
    "description",
    "getUserMedia",
    "dailyCount",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22row\x20align-items-center\x20justify-content-center\x20g-0\x20mb-4\x22\x20style=\x22padding:\x200px\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "pro_tipoPromo",
    "🔄\x20Iniciando\x20detección\x20con\x20Quagga...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "push",
    "</b></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "básico\x20✅",
    "decodeSingle",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "validTo",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-check-label\x22\x20for=\x22enabledCheck\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Activar\x20detección\x20avanzada\x20(Backend)</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Usa\x20servidor\x20dedicado\x20para\x20mejor\x20detección\x20de\x20códigos\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20",
    "300592xrsKLO",
    "join",
    "details",
    "toLocaleString",
    "✅\x20Tercera\x20tentativa\x20exitosa:",
    "<i\x20class=\x22bi\x20bi-clipboard\x22></i>",
    "key",
    "🔍\x20Código\x20candidato\x20encontrado:\x20",
    "checked",
    "pro_mensaje",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Códigos\x20totales:</strong>\x20",
    "data",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🌐\x20Google\x20Vision\x20API:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "application/json",
    "principal",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudieron\x20cargar\x20las\x20promociones:\x20",
    "Actualizando...",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-medium\x22>",
    "stop",
    "<small\x20class=\x22text-success\x22><strong>Precio\x20unitario:</strong>\x20$",
    "https://verificadorb9-backend.vercel.app/api/productos",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "⚠️\x20API\x20nativa\x20no\x20detectó\x20códigos\x20válidos",
    "autoplay",
    "\x20productos\x20(",
    "🔧\x20Error\x20500:\x20Problema\x20interno\x20del\x20servidor",
    "✅\x20Configuración\x20guardada",
    "warn",
    ")<br>",
    "🔍\x20Datos\x20de\x20promoción\x20recibidos:",
    "fulfilled",
    "NetworkError",
    "reader",
    "⚠️\x20No\x20se\x20pudieron\x20obtener\x20estadísticas\x20de\x20códigos\x20de\x20barras",
    "usarCodigosBarras",
    "createObjectStore",
    "upc_a",
    "block",
    "warning",
    "files",
    "all",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>🏷️\x20Sistema\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Productos:</strong>\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers</div>",
    "Error\x20al\x20copiar:",
    "#198754",
    "Actualizar",
    "<i\x20class=\x22bi\x20bi-clipboard-check\x22></i>",
    "https://contador-apicloudvision.vercel.app/api/stats",
    "Productos:\x20",
    "setItem",
    "✅\x20Productos\x20cargados\x20con\x20códigos\x20de\x20barras:",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20ms-2\x22\x20style=\x22font-size:0.7rem;\x22>🏷️\x20PROMO</span>",
    "textAnnotations",
    "\x20encontrados</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong></small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "pr_precio",
    "nearest",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🏦\x20Problema\x20de\x20Facturación</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20facturación\x20no\x20está\x20habilitada\x20en\x20el\x20proyecto\x20correcto\x20(#1070150612422)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/billing\x22\x20target=\x22_blank\x22>Ve\x20a\x20Google\x20Cloud\x20Billing</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "toDateString",
    "floor",
    "showUsageWarning",
    "muted",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x22>",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20",
    "outcome",
    "catch",
    "code_93",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "✅\x20Google\x20Vision\x20detectó:",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-warning\x22>🏷️\x20Productos\x20con\x20Promociones</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>",
    "📸\x20Procesando\x20con\x20Quagga...",
    "click",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "✅\x20Endpoint\x20básico\x20consultado:",
    "✅\x20Extraído\x20formato\x20con\x20peso\x20del\x20nombre:",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "\x22\x20formato:\x20",
    "false",
    "❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API",
    "monthlyLimit",
    "https://media.megaservicio.net",
    "loadUsage",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Endpoint\x20/api/stats\x20falló:\x20",
    "diagnostic",
    "https://contador-apicloudvision.vercel.app/api/vision-detect",
    "Error\x20en\x20detección",
    ";\x20path=/",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-4\x20d-flex\x20justify-content-center\x20mb-3\x20mb-lg-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fff;\x20border-radius:16px;\x20box-shadow:0\x204px\x2024px\x20rgba(0,0,0,0.15);\x20padding:16px;\x20display:flex;\x20justify-content:center;\x20align-items:center;\x20width:240px;\x20height:140px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "Timeout",
    "pro_nombrePromo",
    "now",
    "•\x20Diario:\x20",
    "querySelector",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "remainingDaily",
    "Consultando\x20los\x203\x20endpoints...",
    "toLowerCase",
    "getElementById",
    "❌\x20Sin\x20datos,\x20usando\x20genérico",
    "✅\x20Código\x20válido\x20seleccionado:\x20",
    "\x20->\x20",
    "precioTotal",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-start\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-dark\x22\x20style=\x22font-size:\x201rem;\x22>",
    "left",
    "Error\x20al\x20obtener\x20promociones\x20mejoradas:",
    "contains",
    "pro_cantidad_base",
    "📊\x20Datos\x20finales\x20para\x20construcción:",
    "i2of5_reader",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-center\x20align-items-start\x20gap-4\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-danger\x22\x20style=\x22font-size:3.5rem;\x22>$\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x20text-muted\x20small\x22>",
    "CODABAR",
    "Consultando\x203\x20endpoints...",
    "#btnActualizar",
    "location",
    "💡\x20Ve\x20a:\x20https://console.developers.google.com/billing/enable?project=1070150612422",
    "none",
    "ean_13",
    "Formato\x20de\x20respuesta\x20no\x20reconocido",
    "🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers",
    "precio_total",
    "312404OPtHGE",
    "CODIGO",
    "shift",
    "code",
    "getUsageStatus",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20<strong>⚠️\x20No\x20se\x20detectó\x20código\x20válido</strong><br>\x0a\x20\x20\x20\x20\x20\x20Para\x20códigos\x20largos\x20como\x20este,\x20intenta:<br>\x0a\x20\x20\x20\x20\x20\x20•\x20📏\x20<strong>Recortar\x20muy\x20cerca\x20del\x20código</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20💡\x20<strong>Mejor\x20iluminación\x20uniforme</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20📱\x20<strong>Evitar\x20superficies\x20reflectivas</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20🔍\x20<strong>Imagen\x20más\x20nítida\x20y\x20estable</strong>",
    "14ShHtBU",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22\x20style=\x22cursor:pointer;\x22\x20onclick=\x22mostrarProductoPromocion(\x27",
    "createElement",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "GET",
    "✅\x20Todos\x20los\x20endpoints\x20consultados",
    "btn-outline-primary",
    "EAN_13",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "code_128",
    "upc_e",
    "1468260mDZCKp",
    "EAN_8",
    "🔄\x20Probando\x20configuración\x20alternativa...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>�\x20Total\x20SKUs:</strong>\x20",
    "innerHTML",
    "itf",
    "list-group-item\x20list-group-item-action\x20d-flex\x20align-items-center",
    "Sin\x20conexión\x20a\x20internet",
    "📊\x20Datos\x20extraídos\x20antes\x20de\x20procesamiento:",
    "readonly",
    "cors",
    "⚠️\x20Límite\x20local\x20alcanzado.\x20Mensual:\x20",
    "map",
    "getMonth",
    "❌\x20Error\x20con\x20Google\x20Vision,\x20usando\x20fallback:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>...\x20y\x20",
    "🔗\x20Ve\x20a:\x20https://console.cloud.google.com/billing",
    "🔍\x20Validando:\x20\x22",
    "códigos\x20de\x20barras\x20⚠️\x20(sin\x20datos)",
    "\x20longitud:\x20",
    "🧮\x20Calculando\x20precio\x20total:\x20",
    "srcObject",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x20",
    "#btnSpinner",
    "appendChild",
    "unshift",
    "?t=",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20pt-2\x20border-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>📅\x20Vigencia:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "storageKey",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔑\x20API\x20Key\x20inválida\x20-\x20verifica\x20la\x20configuración\x20en\x20Vercel</div>",
    "canUseAPI",
    "⚠️\x20Usando\x20nombre\x20completo:",
    "onload",
    "observe",
    "verificadorB9DB",
    "large",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x20p-3\x20bg-light\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>",
    "CANTIDAD_X_PRECIO_FIJO",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "CODE_39",
    "POST",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "remove",
    "prompt",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20",
    "saveUsage",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-warning\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔥\x20",
    "monthlyUsed",
    "\x20diario<br>🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "service-worker.js",
    "toFixed",
    "toISOString",
    "resetMonthlyUsage",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "max",
    "primary",
    "</span>",
  ];
  _0x1661 = function () {
    return _0x11c196;
  };
  return _0x1661();
}
const fileInput = document[_0x14e179(0x165)]("fileInput");
fileInput[_0x14e179(0xdf)](_0x14e179(0x210), async (_0x451324) => {
  const _0xba4831 = _0x14e179,
    _0x36b761 = _0x451324[_0xba4831(0x1d5)][_0xba4831(0x12a)][0x0];
  if (!_0x36b761) return;
  resultadoDiv["innerHTML"] = _0xba4831(0xcc);
  try {
    const _0x398e77 = new Image(),
      _0x380d27 = new Promise((_0x5356ba, _0x1cda19) => {
        const _0x2ab88f = _0xba4831;
        (_0x398e77[_0x2ab88f(0x1af)] = _0x5356ba),
          (_0x398e77[_0x2ab88f(0x29e)] = _0x1cda19),
          (_0x398e77[_0x2ab88f(0x21b)] = URL["createObjectURL"](_0x36b761));
      });
    await _0x380d27;
    if (
      GOOGLE_VISION_CONFIG[_0xba4831(0x241)] &&
      visionUsageTracker[_0xba4831(0x1ad)]()
    ) {
      console[_0xba4831(0x2fa)](_0xba4831(0x228));
      try {
        const _0x4df844 = await detectarConGoogleVision(_0x398e77);
        if (_0x4df844) {
          console[_0xba4831(0x2fa)](_0xba4831(0x147), _0x4df844),
            (inputCodigo[_0xba4831(0x23a)] = _0x4df844),
            form[_0xba4831(0x2d2)](),
            URL[_0xba4831(0x277)](_0x398e77[_0xba4831(0x21b)]),
            (fileInput[_0xba4831(0x23a)] = "");
          return;
        }
      } catch (_0x475f61) {
        console[_0xba4831(0x2fa)](_0xba4831(0x19c), _0x475f61[_0xba4831(0xa3)]);
        if (_0x475f61[_0xba4831(0xa3)]["includes"](_0xba4831(0x2bc)))
          console[_0xba4831(0x2fa)](_0xba4831(0x32e));
        else {
          if (_0x475f61[_0xba4831(0xa3)]["includes"](_0xba4831(0x2c0)))
            console["log"](_0xba4831(0x2cb)),
              _0x475f61[_0xba4831(0xa3)][_0xba4831(0x1cb)](_0xba4831(0x256))
                ? (console["log"](
                    "🏦\x20Error\x20de\x20facturación:\x20Habilita\x20billing\x20en\x20Google\x20Cloud"
                  ),
                  console[_0xba4831(0x2fa)](_0xba4831(0x177)))
                : console[_0xba4831(0x2fa)](_0xba4831(0x2d5));
          else
            _0x475f61["message"]["includes"](_0xba4831(0x20c)) &&
              console[_0xba4831(0x2fa)](_0xba4831(0x31c));
        }
      }
    } else {
      if (
        GOOGLE_VISION_CONFIG["enabled"] &&
        !visionUsageTracker[_0xba4831(0x1ad)]()
      ) {
        const _0x228e38 = visionUsageTracker["getUsageStatus"]();
        console[_0xba4831(0x2fa)](
          _0xba4831(0x199) +
            _0x228e38[_0xba4831(0x1be)] +
            "/" +
            _0x228e38[_0xba4831(0x152)] +
            _0xba4831(0x2da) +
            _0x228e38[_0xba4831(0x2b9)] +
            "/" +
            _0x228e38["dailyLimit"]
        );
      }
    }
    if (_0xba4831(0x2a3) in window) {
      console[_0xba4831(0x2fa)](_0xba4831(0x26e));
      try {
        const _0xe35c9 = [
            _0xba4831(0x1fc),
            "code_128",
            _0xba4831(0x20d),
            _0xba4831(0x145),
            "codabar",
            "data_matrix",
            _0xba4831(0x179),
            _0xba4831(0x29f),
            _0xba4831(0x193),
            _0xba4831(0xac),
            _0xba4831(0xae),
            _0xba4831(0x127),
            _0xba4831(0x18d),
          ],
          _0x7898c = new BarcodeDetector({ formats: _0xe35c9 }),
          _0x2383d9 = await _0x7898c[_0xba4831(0x32d)](_0x398e77);
        console[_0xba4831(0x2fa)](
          _0xba4831(0xef) + _0x2383d9[_0xba4831(0xd4)],
          _0x2383d9
        );
        if (_0x2383d9[_0xba4831(0xd4)] > 0x0) {
          const _0x5ebb28 = _0x2383d9[_0xba4831(0x265)]((_0x13839e) => {
            const _0x117b49 = _0xba4831,
              _0x274463 = _0x13839e[_0x117b49(0x2eb)]["trim"]();
            console["log"](
              "🔍\x20Validando:\x20\x22" +
                _0x274463 +
                _0x117b49(0x14f) +
                _0x13839e["format"] +
                "\x20longitud:\x20" +
                _0x274463["length"]
            );
            switch (_0x13839e[_0x117b49(0x297)]) {
              case _0x117b49(0x179):
                return (
                  _0x274463[_0x117b49(0xd4)] === 0xd &&
                  /^\d{13}$/[_0x117b49(0x22c)](_0x274463)
                );
              case _0x117b49(0x127):
                return (
                  _0x274463[_0x117b49(0xd4)] === 0xc &&
                  /^\d{12}$/["test"](_0x274463)
                );
              case "ean_8":
                return (
                  _0x274463["length"] === 0x8 &&
                  /^\d{8}$/[_0x117b49(0x22c)](_0x274463)
                );
              case _0x117b49(0x18d):
                return (
                  _0x274463[_0x117b49(0xd4)] >= 0x6 &&
                  _0x274463[_0x117b49(0xd4)] <= 0x8 &&
                  /^\d+$/[_0x117b49(0x22c)](_0x274463)
                );
              case _0x117b49(0x18c):
                return (
                  _0x274463[_0x117b49(0xd4)] >= 0x1 &&
                  _0x274463[_0x117b49(0xd4)] <= 0x32
                );
              case "code_39":
                return (
                  _0x274463[_0x117b49(0xd4)] >= 0x1 &&
                  /^[A-Z0-9\-. $\/+%*]+$/[_0x117b49(0x22c)](_0x274463)
                );
              case _0x117b49(0x145):
                return (
                  _0x274463[_0x117b49(0xd4)] >= 0x1 &&
                  _0x274463["length"] <= 0x32
                );
              case _0x117b49(0xcf):
                return (
                  _0x274463["length"] >= 0x3 &&
                  /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x117b49(0x22c)](_0x274463)
                );
              case "itf":
                return (
                  _0x274463[_0x117b49(0xd4)] >= 0x2 &&
                  _0x274463[_0x117b49(0xd4)] % 0x2 === 0x0 &&
                  /^\d+$/[_0x117b49(0x22c)](_0x274463)
                );
              case _0x117b49(0xae):
                return (
                  _0x274463[_0x117b49(0xd4)] >= 0x1 &&
                  _0x274463["length"] <= 0x10c8
                );
              case _0x117b49(0x212):
                return (
                  _0x274463[_0x117b49(0xd4)] >= 0x1 &&
                  _0x274463[_0x117b49(0xd4)] <= 0xc2c
                );
              case _0x117b49(0xac):
                return (
                  _0x274463[_0x117b49(0xd4)] >= 0x1 &&
                  _0x274463[_0x117b49(0xd4)] <= 0xa96
                );
              case "aztec":
                return (
                  _0x274463["length"] >= 0x1 &&
                  _0x274463[_0x117b49(0xd4)] <= 0xef8
                );
              default:
                return (
                  _0x274463[_0x117b49(0xd4)] >= 0x1 &&
                  _0x274463[_0x117b49(0xd4)] <= 0x64
                );
            }
          });
          console["log"](
            "✅\x20Códigos\x20válidos:\x20" + _0x5ebb28[_0xba4831(0xd4)]
          );
          if (_0x5ebb28["length"] > 0x0) {
            const _0x16ee35 = {
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
              _0x401a40 = _0x5ebb28[_0xba4831(0x2ec)](
                (_0x53e5b4, _0x1e66a9) => {
                  const _0x552cc1 = _0xba4831,
                    _0x10300e =
                      (_0x16ee35[_0x1e66a9[_0x552cc1(0x297)]] || 0x0) -
                      (_0x16ee35[_0x53e5b4[_0x552cc1(0x297)]] || 0x0);
                  if (_0x10300e !== 0x0) return _0x10300e;
                  if (
                    [
                      _0x552cc1(0x179),
                      _0x552cc1(0x127),
                      _0x552cc1(0x29f),
                      _0x552cc1(0x18d),
                      "code_128",
                      _0x552cc1(0x20d),
                      _0x552cc1(0x145),
                      "itf",
                      _0x552cc1(0xcf),
                    ]["includes"](_0x53e5b4[_0x552cc1(0x297)])
                  ) {
                    const _0x802f0 =
                        _0x53e5b4[_0x552cc1(0x27d)][_0x552cc1(0x1d2)] *
                        _0x53e5b4["boundingBox"][_0x552cc1(0xe4)],
                      _0x50381a =
                        _0x1e66a9[_0x552cc1(0x27d)]["width"] *
                        _0x1e66a9[_0x552cc1(0x27d)][_0x552cc1(0xe4)];
                    return _0x50381a - _0x802f0;
                  }
                  const _0x969e48 =
                      _0x53e5b4[_0x552cc1(0x27d)]["x"] +
                      _0x53e5b4["boundingBox"]["width"] / 0x2,
                    _0x2ac722 =
                      _0x1e66a9["boundingBox"]["x"] +
                      _0x1e66a9["boundingBox"]["width"] / 0x2,
                    _0x4dc093 = _0x398e77["width"] / 0x2;
                  return (
                    Math[_0x552cc1(0x2dd)](_0x969e48 - _0x4dc093) -
                    Math[_0x552cc1(0x2dd)](_0x2ac722 - _0x4dc093)
                  );
                }
              ),
              _0x2ade30 = _0x401a40[0x0],
              _0x28bca0 = _0x2ade30["rawValue"]
                ["trim"]()
                [_0xba4831(0xe9)](/\s+$/, "");
            console[_0xba4831(0x2fa)](
              _0xba4831(0x263) +
                _0x28bca0 +
                _0xba4831(0xc4) +
                _0x2ade30[_0xba4831(0x297)] +
                ")"
            ),
              (inputCodigo[_0xba4831(0x23a)] = _0x28bca0),
              form[_0xba4831(0x2d2)](),
              URL[_0xba4831(0x277)](_0x398e77["src"]),
              (fileInput[_0xba4831(0x23a)] = "");
            return;
          }
        }
        console[_0xba4831(0x2fa)](_0xba4831(0x119));
      } catch (_0x55a103) {
        console[_0xba4831(0x2fa)](
          "❌\x20Error\x20con\x20API\x20nativa,\x20usando\x20fallback:",
          _0x55a103
        );
      }
    } else console[_0xba4831(0x2fa)](_0xba4831(0x28c));
    console["log"](_0xba4831(0x25c)), usarQuaggaFallback(_0x398e77);
  } catch (_0x3aa23f) {
    console["error"](_0xba4831(0x295), _0x3aa23f),
      (resultadoDiv["innerHTML"] = _0xba4831(0x1d1)),
      renderHistorial(),
      (fileInput[_0xba4831(0x23a)] = "");
  }
});
function usarQuaggaFallback(_0x39c76) {
  const _0x382942 = _0x14e179;
  console[_0x382942(0x2fa)](_0x382942(0x149));
  const _0x3fd079 = document[_0x382942(0x185)](_0x382942(0x327)),
    _0x5a0d7 = _0x3fd079[_0x382942(0x270)]("2d");
  let { width: _0x3a9ae9, height: _0x30761b } = _0x39c76;
  const _0x5dae5c = 0x190;
  if (_0x3a9ae9 < _0x5dae5c || _0x30761b < _0x5dae5c) {
    const _0x2959d4 =
      Math[_0x382942(0x1c5)](_0x5dae5c / _0x3a9ae9, _0x5dae5c / _0x30761b) *
      1.5;
    (_0x3a9ae9 *= _0x2959d4),
      (_0x30761b *= _0x2959d4),
      console["log"](
        _0x382942(0x221) +
          _0x39c76["width"] +
          "x" +
          _0x39c76["height"] +
          _0x382942(0x168) +
          _0x3a9ae9 +
          "x" +
          _0x30761b
      );
  }
  const _0x1f33c0 = 0x5dc;
  if (_0x3a9ae9 > _0x1f33c0 || _0x30761b > _0x1f33c0) {
    const _0x531e3e = Math[_0x382942(0x324)](
      _0x1f33c0 / _0x3a9ae9,
      _0x1f33c0 / _0x30761b
    );
    (_0x3a9ae9 *= _0x531e3e), (_0x30761b *= _0x531e3e);
  }
  (_0x3fd079["width"] = _0x3a9ae9),
    (_0x3fd079[_0x382942(0xe4)] = _0x30761b),
    (_0x5a0d7["imageSmoothingEnabled"] = ![]),
    _0x5a0d7["drawImage"](_0x39c76, 0x0, 0x0, _0x3a9ae9, _0x30761b);
  const _0x4bcf00 = _0x5a0d7[_0x382942(0x230)](0x0, 0x0, _0x3a9ae9, _0x30761b),
    _0x29b0f3 = _0x4bcf00[_0x382942(0x10e)];
  let _0xdd1fd7 = new Array(0x100)[_0x382942(0x2e5)](0x0);
  for (
    let _0x27f775 = 0x0;
    _0x27f775 < _0x29b0f3[_0x382942(0xd4)];
    _0x27f775 += 0x4
  ) {
    const _0x2359f6 = Math[_0x382942(0x2e0)](
      0.299 * _0x29b0f3[_0x27f775] +
        0.587 * _0x29b0f3[_0x27f775 + 0x1] +
        0.114 * _0x29b0f3[_0x27f775 + 0x2]
    );
    _0xdd1fd7[_0x2359f6]++;
  }
  let _0x7f92c7 = 0x80,
    _0x67035a = 0x0;
  const _0x12cdfe = _0x3a9ae9 * _0x30761b;
  for (let _0x2c90b2 = 0x0; _0x2c90b2 < 0x100; _0x2c90b2++) {
    let _0x4e15d1 = 0x0,
      _0x26794e = 0x0,
      _0x48e90d = 0x0,
      _0x3454ac = 0x0;
    for (let _0x2f2ac6 = 0x0; _0x2f2ac6 <= _0x2c90b2; _0x2f2ac6++) {
      (_0x4e15d1 += _0xdd1fd7[_0x2f2ac6]),
        (_0x48e90d += _0x2f2ac6 * _0xdd1fd7[_0x2f2ac6]);
    }
    for (let _0x213ae5 = _0x2c90b2 + 0x1; _0x213ae5 < 0x100; _0x213ae5++) {
      (_0x26794e += _0xdd1fd7[_0x213ae5]),
        (_0x3454ac += _0x213ae5 * _0xdd1fd7[_0x213ae5]);
    }
    if (_0x4e15d1 === 0x0 || _0x26794e === 0x0) continue;
    const _0x497c7a = _0x48e90d / _0x4e15d1,
      _0x4d8fe8 = _0x3454ac / _0x26794e,
      _0x1f73a7 =
        _0x4e15d1 *
        _0x26794e *
        (_0x497c7a - _0x4d8fe8) *
        (_0x497c7a - _0x4d8fe8);
    _0x1f73a7 > _0x67035a && ((_0x67035a = _0x1f73a7), (_0x7f92c7 = _0x2c90b2));
  }
  console[_0x382942(0x2fa)](_0x382942(0x2ed) + _0x7f92c7);
  const _0x76ece8 = new Uint8ClampedArray(_0x29b0f3);
  for (
    let _0x1302dc = 0x0;
    _0x1302dc < _0x29b0f3[_0x382942(0xd4)];
    _0x1302dc += 0x4
  ) {
    const _0x4080d0 = Math[_0x382942(0x2e0)](
        0.299 * _0x29b0f3[_0x1302dc] +
          0.587 * _0x29b0f3[_0x1302dc + 0x1] +
          0.114 * _0x29b0f3[_0x1302dc + 0x2]
      ),
      _0xfee610 = _0x4080d0 > _0x7f92c7 ? 0xff : 0x0;
    (_0x29b0f3[_0x1302dc] = _0xfee610),
      (_0x29b0f3[_0x1302dc + 0x1] = _0xfee610),
      (_0x29b0f3[_0x1302dc + 0x2] = _0xfee610);
  }
  _0x5a0d7[_0x382942(0x282)](_0x4bcf00, 0x0, 0x0);
  let _0x2775b4 = _0x3fd079[_0x382942(0x289)](_0x382942(0x222));
  const _0x4dca0f = _0x5a0d7[_0x382942(0x2c1)](_0x3a9ae9, _0x30761b),
    _0x216c18 = _0x4dca0f[_0x382942(0x10e)];
  for (
    let _0x571979 = 0x0;
    _0x571979 < _0x76ece8[_0x382942(0xd4)];
    _0x571979 += 0x4
  ) {
    const _0xc29f1f = Math["round"](
        0.299 * _0x76ece8[_0x571979] +
          0.587 * _0x76ece8[_0x571979 + 0x1] +
          0.114 * _0x76ece8[_0x571979 + 0x2]
      ),
      _0x3b335f = _0xc29f1f > _0x7f92c7 * 0.7 ? 0xff : 0x0;
    (_0x216c18[_0x571979] = _0x3b335f),
      (_0x216c18[_0x571979 + 0x1] = _0x3b335f),
      (_0x216c18[_0x571979 + 0x2] = _0x3b335f),
      (_0x216c18[_0x571979 + 0x3] = 0xff);
  }
  const _0x23bde4 = document[_0x382942(0x185)](_0x382942(0x327));
  (_0x23bde4[_0x382942(0x1d2)] = _0x3a9ae9), (_0x23bde4["height"] = _0x30761b);
  const _0xf5a2e5 = _0x23bde4["getContext"]("2d");
  _0xf5a2e5[_0x382942(0x282)](_0x4dca0f, 0x0, 0x0);
  const _0x3b1232 = _0x23bde4["toDataURL"](_0x382942(0x222)),
    _0x240893 = {
      src: _0x2775b4,
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: { size: Math["max"](_0x3a9ae9, _0x30761b) },
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
          _0x382942(0x231),
          _0x382942(0x31f),
          "upc_reader",
          _0x382942(0x28a),
          _0x382942(0x246),
          _0x382942(0xd3),
          "code_39_vin_reader",
          _0x382942(0xc8),
          "codabar_reader",
          _0x382942(0x170),
          _0x382942(0x207),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
  console[_0x382942(0x2fa)](_0x382942(0xfa));
  const _0x2c859e = (_0x1a9765, _0x429796, _0x54ab3d) => {
    const _0x2db7d1 = _0x382942;
    console[_0x2db7d1(0x2fa)](_0x2db7d1(0x2ea) + _0x429796);
    const _0x33bdd6 = {
      src: _0x1a9765,
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: { size: Math["max"](_0x3a9ae9, _0x30761b) },
      locator: {
        patchSize:
          _0x429796 === _0x2db7d1(0x202) ? _0x2db7d1(0x25f) : _0x2db7d1(0x1b2),
        halfSample: _0x429796 === "alternativa" ? !![] : ![],
        debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
      },
      decoder: {
        readers: [
          _0x2db7d1(0x231),
          "ean_8_reader",
          _0x2db7d1(0x1db),
          _0x2db7d1(0x28a),
          "code_128_reader",
          _0x2db7d1(0xd3),
          "code_39_vin_reader",
          _0x2db7d1(0xc8),
          _0x2db7d1(0xbd),
          "i2of5_reader",
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
    Quagga[_0x2db7d1(0xff)](_0x33bdd6, _0x54ab3d);
  };
  let _0x5b8c20 = [];
  _0x2c859e(_0x2775b4, _0x382942(0x111), function (_0x591ecc) {
    const _0x39bee2 = _0x382942;
    if (_0x591ecc && _0x591ecc[_0x39bee2(0x84)]) {
      let _0x584cd5 = _0x591ecc[_0x39bee2(0x84)][_0x39bee2(0x180)]
        [_0x39bee2(0x1f2)]()
        ["replace"](/\s+$/, "");
      _0x5b8c20["push"](
        _0x584cd5 + "\x20(" + _0x591ecc[_0x39bee2(0x84)]["format"] + ")"
      ),
        console[_0x39bee2(0x2fa)](
          _0x39bee2(0x1f6),
          _0x584cd5,
          _0x39bee2(0xe6),
          _0x591ecc[_0x39bee2(0x84)][_0x39bee2(0x297)]
        );
      if (
        validarCodigo(_0x584cd5, _0x591ecc[_0x39bee2(0x84)][_0x39bee2(0x297)])
      ) {
        (inputCodigo[_0x39bee2(0x23a)] = _0x584cd5),
          form[_0x39bee2(0x2d2)](),
          URL[_0x39bee2(0x277)](_0x39c76["src"]),
          (fileInput[_0x39bee2(0x23a)] = "");
        return;
      }
    }
    console[_0x39bee2(0x2fa)](_0x39bee2(0x190)),
      _0x2c859e(_0x3b1232, _0x39bee2(0x202), function (_0x411b10) {
        const _0x47051e = _0x39bee2;
        if (_0x411b10 && _0x411b10[_0x47051e(0x84)]) {
          let _0x256533 = _0x411b10["codeResult"]["code"]
            [_0x47051e(0x1f2)]()
            [_0x47051e(0xe9)](/\s+$/, "");
          _0x5b8c20[_0x47051e(0xfc)](
            _0x256533 +
              "\x20(" +
              _0x411b10["codeResult"][_0x47051e(0x297)] +
              ")"
          ),
            console[_0x47051e(0x2fa)](
              "✅\x20Código\x20detectado\x20(configuración\x20agresiva):",
              _0x256533,
              _0x47051e(0xe6),
              _0x411b10[_0x47051e(0x84)]["format"]
            );
          if (
            validarCodigo(
              _0x256533,
              _0x411b10[_0x47051e(0x84)][_0x47051e(0x297)]
            )
          ) {
            (inputCodigo[_0x47051e(0x23a)] = _0x256533),
              form[_0x47051e(0x2d2)](),
              URL["revokeObjectURL"](_0x39c76[_0x47051e(0x21b)]),
              (fileInput[_0x47051e(0x23a)] = "");
            return;
          }
        }
        console["log"](_0x47051e(0x23d)),
          intentarSegundaPasada(_0x39c76, _0x5b8c20);
      });
  });
}
function validarCodigo(_0x410451, _0x346ed3) {
  const _0x4753fe = _0x14e179;
  console[_0x4753fe(0x2fa)](
    _0x4753fe(0x19f) +
      _0x410451 +
      _0x4753fe(0x14f) +
      _0x346ed3 +
      _0x4753fe(0x1a1) +
      _0x410451[_0x4753fe(0xd4)]
  );
  switch (_0x346ed3) {
    case _0x4753fe(0x179):
      return (
        _0x410451[_0x4753fe(0xd4)] === 0xd &&
        /^\d{13}$/[_0x4753fe(0x22c)](_0x410451)
      );
    case "upc_a":
      return (
        _0x410451["length"] === 0xc && /^\d{12}$/[_0x4753fe(0x22c)](_0x410451)
      );
    case _0x4753fe(0x29f):
      return (
        _0x410451[_0x4753fe(0xd4)] === 0x8 &&
        /^\d{8}$/[_0x4753fe(0x22c)](_0x410451)
      );
    case _0x4753fe(0x18d):
      return (
        _0x410451[_0x4753fe(0xd4)] >= 0x6 &&
        _0x410451[_0x4753fe(0xd4)] <= 0x8 &&
        /^\d+$/[_0x4753fe(0x22c)](_0x410451)
      );
    case _0x4753fe(0x18c):
    case "code_39":
    case _0x4753fe(0x145):
      return (
        _0x410451[_0x4753fe(0xd4)] >= 0x1 && _0x410451[_0x4753fe(0xd4)] <= 0x32
      );
    case _0x4753fe(0xcf):
      return (
        _0x410451[_0x4753fe(0xd4)] >= 0x3 &&
        /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x4753fe(0x22c)](_0x410451)
      );
    case _0x4753fe(0xd7):
      return (
        _0x410451[_0x4753fe(0xd4)] >= 0x2 &&
        _0x410451[_0x4753fe(0xd4)] % 0x2 === 0x0 &&
        /^\d+$/["test"](_0x410451)
      );
    default:
      return _0x410451["length"] >= 0x1 && _0x410451[_0x4753fe(0xd4)] <= 0x32;
  }
}
function intentarSegundaPasada(_0x121279, _0x18eb1a = []) {
  const _0x313293 = _0x14e179;
  console[_0x313293(0x2fa)](_0x313293(0x229));
  const _0x54f30b = document[_0x313293(0x185)]("canvas"),
    _0x1877cb = _0x54f30b["getContext"]("2d");
  let { width: _0x558a64, height: _0x17fd11 } = _0x121279;
  const _0x47f533 = 0x640;
  if (_0x558a64 < _0x47f533) {
    const _0x2670c5 = _0x47f533 / _0x558a64;
    (_0x558a64 *= _0x2670c5), (_0x17fd11 *= _0x2670c5);
  }
  (_0x54f30b[_0x313293(0x1d2)] = _0x558a64),
    (_0x54f30b["height"] = _0x17fd11),
    (_0x1877cb["imageSmoothingEnabled"] = ![]),
    _0x1877cb[_0x313293(0x20a)](_0x121279, 0x0, 0x0, _0x558a64, _0x17fd11);
  const _0xda124c = _0x1877cb[_0x313293(0x230)](0x0, 0x0, _0x558a64, _0x17fd11),
    _0x2be957 = _0xda124c["data"];
  for (let _0x461885 = 0x0; _0x461885 < _0x2be957["length"]; _0x461885 += 0x4) {
    const _0x59e150 = _0x2be957[_0x461885],
      _0x52acbf = _0x2be957[_0x461885 + 0x1],
      _0x2bd7df = _0x2be957[_0x461885 + 0x2],
      _0x2ebc41 = 1.5,
      _0x5e58f8 = Math[_0x313293(0x2e0)](
        0.299 * _0x59e150 + 0.587 * _0x52acbf + 0.114 * _0x2bd7df
      ),
      _0x1d318a = Math["min"](
        0xff,
        Math["max"](0x0, (_0x5e58f8 - 0x80) * _0x2ebc41 + 0x80)
      );
    (_0x2be957[_0x461885] = _0x1d318a),
      (_0x2be957[_0x461885 + 0x1] = _0x1d318a),
      (_0x2be957[_0x461885 + 0x2] = _0x1d318a);
  }
  _0x1877cb[_0x313293(0x282)](_0xda124c, 0x0, 0x0);
  const _0x49f99f = {
    src: _0x54f30b["toDataURL"](_0x313293(0x222)),
    numOfWorkers: 0x0,
    locate: !![],
    inputStream: {
      size: Math[_0x313293(0x1c5)](_0x558a64, _0x17fd11),
      area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
    },
    locator: {
      patchSize: "x-large",
      halfSample: ![],
      debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
    },
    decoder: {
      readers: [
        "ean_reader",
        "upc_reader",
        _0x313293(0x246),
        _0x313293(0xd3),
        "ean_8_reader",
        _0x313293(0x28a),
        _0x313293(0x170),
        "codabar_reader",
      ],
      multiple: !![],
      debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
    },
  };
  console[_0x313293(0x2fa)](
    "📋\x20Configuración\x20final\x20para\x20códigos\x20largos..."
  ),
    Quagga[_0x313293(0xff)](_0x49f99f, function (_0x518d91) {
      const _0x13744 = _0x313293;
      if (_0x518d91 && _0x518d91[_0x13744(0x84)]) {
        const _0xd7105e = _0x518d91[_0x13744(0x84)][_0x13744(0x180)]
          [_0x13744(0x1f2)]()
          ["replace"](/\s+$/, "");
        _0x18eb1a[_0x13744(0xfc)](
          _0xd7105e + "\x20(" + _0x518d91[_0x13744(0x84)][_0x13744(0x297)] + ")"
        ),
          console[_0x13744(0x2fa)](
            _0x13744(0x107),
            _0xd7105e,
            _0x13744(0xe6),
            _0x518d91[_0x13744(0x84)][_0x13744(0x297)]
          );
        if (validarCodigo(_0xd7105e, _0x518d91[_0x13744(0x84)]["format"])) {
          (inputCodigo[_0x13744(0x23a)] = _0xd7105e), form["requestSubmit"]();
          return;
        }
      }
      console["log"]("❌\x20Todas\x20las\x20configuraciones\x20fallaron");
      let _0xed5fd0 = "";
      _0x18eb1a[_0x13744(0xd4)] > 0x0 &&
        (_0xed5fd0 = _0x13744(0x301) + _0x18eb1a[_0x13744(0x104)](",\x20"));
      let _0x47d1eb = "";
      if (GOOGLE_VISION_CONFIG[_0x13744(0x241)]) {
        const _0x13c7d5 = visionUsageTracker["getUsageStatus"]();
        (_0x47d1eb =
          "<br><br>📊\x20<strong>Uso\x20local:</strong>\x20" +
          _0x13c7d5[_0x13744(0x1be)] +
          "/" +
          _0x13c7d5["monthlyLimit"] +
          _0x13744(0x25a) +
          _0x13c7d5["dailyUsed"] +
          "/" +
          _0x13c7d5[_0x13744(0x9c)] +
          _0x13744(0x1bf)),
          verificarBackend()
            ["then"]((_0xbceb2c) => {
              const _0x302ac9 = _0x13744;
              if (document[_0x302ac9(0x160)](".alert-danger")) {
                const _0x1f7c80 = document["querySelector"](_0x302ac9(0x28b));
                _0x1f7c80 &&
                  (_0x1f7c80[_0x302ac9(0x192)] = _0x1f7c80["innerHTML"][
                    "replace"
                  ](
                    _0x302ac9(0x28f),
                    "🌐\x20<strong>Backend:</strong>\x20" +
                      _0xbceb2c[_0x302ac9(0x1ce)]
                  ));
              }
            })
            [_0x13744(0x144)](() => {});
      }
      (resultadoDiv[_0x13744(0x192)] =
        _0x13744(0x182) + _0xed5fd0 + _0x47d1eb + _0x13744(0x293)),
        renderHistorial();
    });
}
async function mostrarConfiguracion() {
  const _0x585806 = _0x14e179,
    _0x1eac89 = await verificarBackend();
  let _0x4c7842 = null;
  if (CONFIG_ENDPOINTS[_0x585806(0x125)])
    try {
      const _0xfb2507 = await fetch(
        CONFIG_ENDPOINTS[_0x585806(0x23b)] + _0x585806(0x257)
      );
      if (_0xfb2507["ok"]) {
        const _0x285e68 = await _0xfb2507[_0x585806(0x307)]();
        _0x4c7842 = _0x285e68[_0x585806(0x315)];
      }
    } catch (_0x446c63) {
      console["log"](_0x585806(0x124));
    }
  let _0x266569 = "";
  _0x4c7842 &&
    (_0x266569 =
      _0x585806(0x12c) +
      _0x4c7842[_0x585806(0x97)] +
      _0x585806(0x10d) +
      _0x4c7842[_0x585806(0x314)] +
      _0x585806(0xa4) +
      _0x4c7842[_0x585806(0x273)] +
      _0x585806(0xd5) +
      new Date(_0x4c7842["ultimaActualizacion"])[_0x585806(0x106)]() +
      _0x585806(0x1a4)),
    Swal[_0x585806(0x2ff)]({
      title: _0x585806(0x25d),
      html:
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-check\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22form-check-input\x22\x20type=\x22checkbox\x22\x20id=\x22enabledCheck\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (GOOGLE_VISION_CONFIG["enabled"] ? _0x585806(0x10b) : "") +
        _0x585806(0x102) +
        (_0x1eac89[_0x585806(0x85)] ? _0x585806(0x331) : "alert-warning") +
        _0x585806(0x10f) +
        _0x1eac89[_0x585806(0x1ce)] +
        "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Backend:\x20https://contador-apicloudvision.vercel.app/</small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-info\x20btn-sm\x22\x20onclick=\x22diagnosticarBackend()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Probar\x20Conexión\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x266569 +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Área\x20para\x20mostrar\x20resultados\x20del\x20diagnóstico\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22diagnostico-resultado\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Detección\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20📷\x20<strong>Local:</strong>\x20Html5QrCode\x20+\x20BarcodeDetector\x20+\x20Quagga.js<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🌐\x20<strong>Premium:</strong>\x20Google\x20Vision\x20API\x20(para\x20códigos\x20difíciles)<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🔄\x20<strong>Automático:</strong>\x20Fallback\x20inteligente\x20entre\x20métodos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>✅\x20Ventajas\x20del\x20backend:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Sin\x20límites\x20por\x20dispositivo<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Detección\x20superior\x20en\x20superficies\x20reflectivas<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Mejor\x20precisión\x20con\x20códigos\x20largos<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Funciona\x20con\x20imágenes\x20de\x20baja\x20calidad<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Gestión\x20centralizada\x20de\x20recursos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🔄\x20Fallback\x20automático:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Si\x20el\x20backend\x20no\x20está\x20disponible,\x20la\x20app\x20usará\x20detección\x20local\x20automáticamente.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Recomendación:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mantén\x20activada\x20la\x20detección\x20avanzada\x20para\x20mejores\x20resultados.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
      width: 0x258,
      showCancelButton: !![],
      confirmButtonText: "💾\x20Guardar",
      cancelButtonText: _0x585806(0xb9),
      confirmButtonColor: _0x585806(0x12f),
      cancelButtonColor: _0x585806(0x330),
      preConfirm: () => {
        const _0x2d3b27 = _0x585806,
          _0x364ea0 = document["getElementById"](_0x2d3b27(0xed))[
            _0x2d3b27(0x10b)
          ];
        return { enabled: _0x364ea0 };
      },
    })[_0x585806(0x205)]((_0x5d7461) => {
      const _0x32df34 = _0x585806;
      if (_0x5d7461[_0x32df34(0x258)]) {
        const { enabled: _0x606b94 } = _0x5d7461[_0x32df34(0x23a)];
        (GOOGLE_VISION_CONFIG["enabled"] = _0x606b94),
          localStorage[_0x32df34(0x134)](
            _0x32df34(0x1e9),
            JSON["stringify"]({ enabled: _0x606b94 })
          );
        const _0x3d4dda = _0x606b94
          ? "✅\x20Detección\x20avanzada\x20activada"
          : "⚠️\x20Usando\x20solo\x20detección\x20local";
        Swal[_0x32df34(0x2ff)]({
          title: _0x32df34(0x11d),
          text: _0x3d4dda,
          icon: "success",
          timer: 0x7d0,
          showConfirmButton: ![],
        });
      }
    });
}
function cargarConfiguracionGuardada() {
  const _0xa722b2 = _0x14e179,
    _0x4bc3ab = localStorage["getItem"]("googleVisionConfig");
  if (_0x4bc3ab)
    try {
      const _0x34c43d = JSON["parse"](_0x4bc3ab);
      (GOOGLE_VISION_CONFIG[_0xa722b2(0x241)] =
        _0x34c43d[_0xa722b2(0x241)] || ![]),
        GOOGLE_VISION_CONFIG[_0xa722b2(0x241)] &&
          console[_0xa722b2(0x2fa)](
            "✅\x20Detección\x20avanzada\x20(backend)\x20configurada\x20y\x20activa"
          );
    } catch (_0x11cd0d) {
      console[_0xa722b2(0x2fa)](
        "❌\x20Error\x20cargando\x20configuración:",
        _0x11cd0d
      );
    }
}
"serviceWorker" in navigator &&
  window[_0x14e179(0xdf)](_0x14e179(0x292), () => {
    const _0x48ad4e = _0x14e179;
    navigator[_0x48ad4e(0x2d9)]
      [_0x48ad4e(0x214)](_0x48ad4e(0x1c0))
      [_0x48ad4e(0x205)]((_0x154583) =>
        console[_0x48ad4e(0x2fa)](
          "✅\x20Service\x20Worker\x20registrado:",
          _0x154583["scope"]
        )
      )
      [_0x48ad4e(0x144)]((_0x39f7d1) =>
        console[_0x48ad4e(0x2e6)](_0x48ad4e(0x1b8), _0x39f7d1)
      );
  });
function _0x5b4b(_0x44a868, _0x99ed5f) {
  const _0x1661d4 = _0x1661();
  return (
    (_0x5b4b = function (_0x5b4b07, _0xaba8df) {
      _0x5b4b07 = _0x5b4b07 - 0x84;
      let _0x3fbd78 = _0x1661d4[_0x5b4b07];
      return _0x3fbd78;
    }),
    _0x5b4b(_0x44a868, _0x99ed5f)
  );
}
window[_0x14e179(0xdf)](_0x14e179(0x32c), (_0x548ed8) => {
  const _0x46a939 = _0x14e179;
  _0x548ed8[_0x46a939(0x2d3)](),
    (deferredPrompt = _0x548ed8),
    installBtn &&
      installBtn[_0x46a939(0x298)][_0x46a939(0x1b9)](_0x46a939(0x237));
}),
  installBtn[_0x14e179(0xdf)](_0x14e179(0x14a), (_0xf0139c) => {
    const _0xe46742 = _0x14e179;
    deferredPrompt &&
      (deferredPrompt[_0xe46742(0x1ba)](),
      deferredPrompt[_0xe46742(0x217)][_0xe46742(0x205)]((_0x47b6b0) => {
        const _0x2e1ca3 = _0xe46742;
        _0x47b6b0[_0x2e1ca3(0x143)] === "accepted"
          ? console[_0x2e1ca3(0x2fa)](_0x2e1ca3(0x254))
          : console[_0x2e1ca3(0x2fa)](_0x2e1ca3(0x329)),
          (deferredPrompt = null),
          installBtn[_0x2e1ca3(0x298)][_0x2e1ca3(0x2b7)](_0x2e1ca3(0x237));
      }));
  });
_0x14e179(0x2d9) in navigator &&
  (navigator[_0x14e179(0x2d9)]
    [_0x14e179(0x1fa)]()
    [_0x14e179(0x205)](function (_0x1a6896) {
      for (let _0x52daba of _0x1a6896) {
        _0x52daba["update"]();
      }
    }),
  navigator[_0x14e179(0x2d9)]["addEventListener"](
    "controllerchange",
    function () {
      const _0x3bf4f5 = _0x14e179;
      window[_0x3bf4f5(0x176)]["reload"]();
    }
  ));
const style = document[_0x14e179(0x185)](_0x14e179(0x326));
(style["innerHTML"] = _0x14e179(0x201)),
  document[_0x14e179(0x1eb)][_0x14e179(0x1a7)](style);
async function verPromociones() {
  const _0x22f23b = _0x14e179;
  try {
    console[_0x22f23b(0x2fa)](_0x22f23b(0x306)),
      (document[_0x22f23b(0x165)](_0x22f23b(0x2ae))["innerHTML"] =
        _0x22f23b(0x29b));
    const [_0x4a5dd6, _0x342f29] = await Promise["all"]([
      fetch(
        "https://verificadorb9-backend.vercel.app/api/promociones-mejoradas"
      ),
      getAllProductos(),
    ]);
    if (!_0x4a5dd6["ok"])
      throw new Error(
        _0x22f23b(0x2a7) +
          _0x4a5dd6["status"] +
          ":\x20" +
          _0x4a5dd6[_0x22f23b(0x30d)]
      );
    const _0x546dd9 = await _0x4a5dd6[_0x22f23b(0x307)]();
    console[_0x22f23b(0x2fa)](_0x22f23b(0x224), _0x546dd9);
    let _0x42fcf6 = [];
    if (_0x546dd9["status"] === _0x22f23b(0xcb) && _0x546dd9[_0x22f23b(0x2f4)])
      _0x42fcf6 = _0x546dd9[_0x22f23b(0x2f4)];
    else {
      if (Array["isArray"](_0x546dd9)) _0x42fcf6 = _0x546dd9;
      else throw new Error(_0x22f23b(0x17a));
    }
    if (_0x42fcf6[_0x22f23b(0xd4)] === 0x0) {
      document[_0x22f23b(0x165)](_0x22f23b(0x2ae))[_0x22f23b(0x192)] =
        _0x22f23b(0x186);
      return;
    }
    let _0x526e39 = _0x22f23b(0x264);
    _0x42fcf6[_0x22f23b(0xc9)]((_0x3a0228, _0x17220e) => {
      const _0x3902a1 = _0x22f23b;
      let _0x362bda = [];
      if (
        _0x3a0228[_0x3902a1(0x27a)] &&
        Array["isArray"](_0x3a0228[_0x3902a1(0x27a)])
      )
        _0x362bda = _0x3a0228[_0x3902a1(0x27a)];
      else
        _0x3a0228["pro_grupoProductos_primaria"] &&
          _0x3a0228["pro_grupoProductos_primaria"][_0x3902a1(0x2c4)] &&
          (Array[_0x3902a1(0x1ea)](
            _0x3a0228["pro_grupoProductos_primaria"]["pr_sku"]
          )
            ? (_0x362bda = _0x3a0228[_0x3902a1(0x2ca)][_0x3902a1(0x2c4)])
            : (_0x362bda = _0x3a0228[_0x3902a1(0x2ca)][_0x3902a1(0x2c4)]
                [_0x3902a1(0x250)]("\x20")
                [_0x3902a1(0x265)]((_0x28bc9f) =>
                  _0x28bc9f[_0x3902a1(0x1f2)]()
                )));
      const _0x1684aa = _0x362bda["map"]((_0x187ae9) => {
          const _0x44cbbe = _0x3902a1;
          return _0x342f29["find"](
            (_0x516849) => _0x516849[_0x44cbbe(0x2c4)] === _0x187ae9
          );
        })[_0x3902a1(0x265)]((_0x49505c) => _0x49505c !== undefined),
        _0x31f655 =
          _0x3a0228[_0x3902a1(0x15d)] ||
          _0x3a0228[_0x3902a1(0x252)] ||
          _0x3902a1(0x23c) + (_0x17220e + 0x1),
        _0x4357c5 =
          _0x3a0228[_0x3902a1(0xf9)] || _0x3a0228["tipo"] || _0x3902a1(0x92),
        _0x24d96f = _0x3a0228[_0x3902a1(0x10c)] || _0x3a0228["mensaje"] || "",
        _0x190526 = _0x3a0228["pro_cantidad_base"] || "",
        _0x5bbb4a = Number(_0x190526) || 0x1;
      let _0x33ac2c = 0x0;
      const _0x4bcf04 = (_0x24d96f + "\x20" + _0x31f655)[_0x3902a1(0x164)](),
        _0x24daf3 = _0x4bcf04[_0x3902a1(0x22d)](/(\d+)\s*x\s*(\d+)/);
      if (_0x24daf3) _0x33ac2c = Number(_0x24daf3[0x2]);
      else {
        const _0x23f3e4 = Number(_0x3a0228[_0x3902a1(0x2ad)]) || 0x0;
        _0x33ac2c = _0x23f3e4 * _0x5bbb4a;
      }
      let _0x564db3 = 0x0,
        _0x3b7a19 = 0x0;
      if (_0x1684aa[_0x3902a1(0xd4)] > 0x0 && _0x190526 && _0x33ac2c > 0x0) {
        const _0x5c289d = _0x1684aa[_0x3902a1(0x19a)]((_0x595729) => {
            const _0x253a03 = _0x3902a1;
            let _0x2611ca =
              Number(_0x595729[_0x253a03(0x139)]) ||
              Number(_0x595729["L1"]) ||
              0x0;
            return Math[_0x253a03(0x2e0)](_0x2611ca * 1.16 * 0x64) / 0x64;
          }),
          _0x54bb2d =
            _0x5c289d["reduce"](
              (_0x58dfdc, _0x3d285f) => _0x58dfdc + _0x3d285f,
              0x0
            ) / _0x5c289d[_0x3902a1(0xd4)];
        (_0x564db3 = Math["round"](_0x54bb2d * _0x5bbb4a * 0x64) / 0x64),
          (_0x3b7a19 =
            Math[_0x3902a1(0x2e0)]((_0x564db3 - _0x33ac2c) * 0x64) / 0x64);
      }
      let _0x4f9d7e = "";
      if (_0x1684aa[_0x3902a1(0xd4)] > 0x0) {
        const _0x1053ab = _0x1684aa[_0x3902a1(0xbf)](0x0, 0x4)
          [_0x3902a1(0x19a)]((_0x2772e4) => {
            const _0x30e6a5 = _0x3902a1;
            let _0x17fb9c = "";
            if (
              _0x2772e4["pr_imagen"] &&
              _0x2772e4[_0x30e6a5(0x2a2)][_0x30e6a5(0x1f2)]() !== ""
            ) {
              if (_0x2772e4["pr_imagen"][_0x30e6a5(0x219)](_0x30e6a5(0x22f)))
                _0x17fb9c = _0x2772e4[_0x30e6a5(0x2a2)];
              else {
                let _0x271fdb = _0x2772e4[_0x30e6a5(0x2a2)][_0x30e6a5(0x219)](
                  "/"
                )
                  ? _0x2772e4[_0x30e6a5(0x2a2)]
                  : "/" + _0x2772e4["pr_imagen"];
                _0x17fb9c = _0x30e6a5(0x153) + _0x271fdb;
              }
            }
            return _0x17fb9c
              ? _0x30e6a5(0xf2) +
                  _0x17fb9c +
                  _0x30e6a5(0x9a) +
                  _0x2772e4[_0x30e6a5(0x236)] +
                  _0x30e6a5(0x239) +
                  _0x2772e4[_0x30e6a5(0x236)] +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20" +
                  _0x2772e4[_0x30e6a5(0x2c4)] +
                  _0x30e6a5(0xd8) +
                  _0x2772e4[_0x30e6a5(0x2c4)] +
                  _0x30e6a5(0x161)
              : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-img-top\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-secondary\x22\x20style=\x22height:\x2080px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-white\x22>📦</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                  _0x2772e4["pr_name"] +
                  _0x30e6a5(0x1bb) +
                  _0x2772e4[_0x30e6a5(0x2c4)] +
                  _0x30e6a5(0xd8) +
                  _0x2772e4[_0x30e6a5(0x2c4)] +
                  _0x30e6a5(0x161);
          })
          ["join"]("");
        _0x4f9d7e =
          _0x3902a1(0x2e8) +
          _0x1053ab +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x1684aa["length"] > 0x4
            ? _0x3902a1(0x19d) +
              (_0x1684aa[_0x3902a1(0xd4)] - 0x4) +
              "\x20producto" +
              (_0x1684aa[_0x3902a1(0xd4)] - 0x4 > 0x1 ? "s" : "") +
              "\x20más</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          _0x3902a1(0xe2);
      }
      _0x526e39 +=
        _0x3902a1(0x1bd) +
        _0x31f655 +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>" +
        _0x4357c5[_0x3902a1(0xe9)](_0x3902a1(0x1b4), _0x3902a1(0xdc)) +
        _0x3902a1(0x14b) +
        (_0x24d96f && _0x24d96f !== _0x31f655
          ? _0x3902a1(0x172) + _0x24d96f + _0x3902a1(0x86)
          : "") +
        _0x3902a1(0x274) +
        (_0x33ac2c > 0x0
          ? _0x3902a1(0x1b3) +
            _0x5bbb4a +
            _0x3902a1(0x2df) +
            _0x33ac2c[_0x3902a1(0x106)](_0x3902a1(0x31d)) +
            "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22>Total\x20con\x20Promo</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            (_0x564db3 > 0x0
              ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-decoration-line-through\x20text-muted\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>$" +
                _0x564db3[_0x3902a1(0x106)](_0x3902a1(0x31d)) +
                _0x3902a1(0x304)
              : _0x3902a1(0x332)) +
            _0x3902a1(0x322) +
            (_0x3b7a19 > 0x0
              ? _0x3902a1(0xda) +
                _0x3b7a19["toLocaleString"](_0x3902a1(0x31d)) +
                _0x3902a1(0x2bf) +
                _0x5bbb4a +
                "\x20unidades\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              : "") +
            _0x3902a1(0x248)
          : _0x3902a1(0xfb) +
            (_0x190526
              ? _0x3902a1(0x141) +
                _0x190526 +
                "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Cantidad</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              : "") +
            _0x3902a1(0xb8) +
            (precioPromo
              ? _0x3902a1(0x24a) +
                precioPromo +
                "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Precio\x20promocional</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              : "") +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20") +
        _0x3902a1(0x274) +
        _0x4f9d7e +
        _0x3902a1(0x274) +
        (_0x1684aa["length"] > 0x0
          ? _0x3902a1(0x24f) +
            _0x1684aa["map"](
              (_0x4cdc2e, _0x3b2c9c) =>
                _0x3902a1(0x1a5) +
                (_0x3b2c9c < _0x1684aa["length"] - 0x1
                  ? "border-bottom\x20pb-3"
                  : "") +
                _0x3902a1(0x16a) +
                _0x4cdc2e[_0x3902a1(0x236)] +
                _0x3902a1(0x2c7) +
                _0x4cdc2e[_0x3902a1(0x2c4)] +
                "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                (_0x4cdc2e["pr_gtin"]
                  ? "<small\x20class=\x22text-muted\x20d-block\x22><strong>Código:</strong>\x20" +
                    _0x4cdc2e["pr_gtin"] +
                    _0x3902a1(0x9d)
                  : "") +
                _0x3902a1(0x216) +
                (() => {
                  const _0x3bcc40 = _0x3902a1;
                  let _0xe82d17 =
                      Number(_0x4cdc2e[_0x3bcc40(0x139)]) ||
                      Number(_0x4cdc2e["L1"]) ||
                      0x0,
                    _0x1ae64f = Math["round"](_0xe82d17 * 1.16 * 0x64) / 0x64;
                  return _0x1ae64f > 0x0
                    ? _0x3bcc40(0x116) +
                        _0x1ae64f[_0x3bcc40(0x1c1)](0x2) +
                        "</small>"
                    : "";
                })() +
                _0x3902a1(0xc3)
            )[_0x3902a1(0x104)]("") +
            _0x3902a1(0x281)
          : "") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x362bda["length"] > _0x1684aa[_0x3902a1(0xd4)]
          ? _0x3902a1(0x191) +
            _0x362bda[_0x3902a1(0xd4)] +
            _0x3902a1(0xde) +
            _0x1684aa[_0x3902a1(0xd4)] +
            _0x3902a1(0x1d8) +
            _0x362bda[_0x3902a1(0xbf)](0x0, 0x6)
              [_0x3902a1(0x19a)](
                (_0x120ef7) =>
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-light\x20text-dark\x20me-1\x20mb-1\x22\x20style=\x22font-size:\x200.7rem;\x22>" +
                  _0x120ef7 +
                  _0x3902a1(0x13b)
              )
              ["join"]("") +
            _0x3902a1(0x146) +
            (_0x362bda[_0x3902a1(0xd4)] > 0x6
              ? "<span\x20class=\x22badge\x20bg-secondary\x22\x20style=\x22font-size:\x200.7rem;\x22>+" +
                (_0x362bda[_0x3902a1(0xd4)] - 0x6) +
                _0x3902a1(0x218)
              : "") +
            _0x3902a1(0x281)
          : "") +
        _0x3902a1(0x274) +
        (_0x3a0228["validFrom"] && _0x3a0228[_0x3902a1(0x101)]
          ? _0x3902a1(0x1aa) +
            _0x3a0228[_0x3902a1(0x88)] +
            _0x3902a1(0x287) +
            _0x3a0228[_0x3902a1(0x101)] +
            _0x3902a1(0x18b)
          : "") +
        _0x3902a1(0x155);
    }),
      (_0x526e39 += _0x22f23b(0x96)),
      (_0x526e39 += _0x22f23b(0x2b5)),
      (document["getElementById"](_0x22f23b(0x2ae))[_0x22f23b(0x192)] =
        _0x526e39);
    const _0x14d1b4 = document[_0x22f23b(0x98)](".copiar-sku-btn");
    _0x14d1b4[_0x22f23b(0xc9)]((_0x5f24b8) => {
      const _0x6ed112 = _0x22f23b;
      _0x5f24b8["addEventListener"](_0x6ed112(0x14a), function (_0x5be8ac) {
        const _0xfa0a67 = _0x6ed112;
        _0x5be8ac["preventDefault"]();
        const _0x4913f7 = _0x5f24b8[_0xfa0a67(0x279)](_0xfa0a67(0x2cf));
        navigator[_0xfa0a67(0x2d1)] &&
          navigator["clipboard"]
            [_0xfa0a67(0x1f3)](_0x4913f7)
            [_0xfa0a67(0x205)](() => {
              const _0x1e9b6f = _0xfa0a67,
                _0x17ae02 = _0x5f24b8[_0x1e9b6f(0x192)];
              (_0x5f24b8[_0x1e9b6f(0x192)] = "✅"),
                _0x5f24b8[_0x1e9b6f(0x298)][_0x1e9b6f(0x1b9)](_0x1e9b6f(0x189)),
                _0x5f24b8[_0x1e9b6f(0x298)][_0x1e9b6f(0x2b7)](_0x1e9b6f(0x24b)),
                setTimeout(() => {
                  const _0x5f1b05 = _0x1e9b6f;
                  (_0x5f24b8[_0x5f1b05(0x192)] = _0x17ae02),
                    _0x5f24b8[_0x5f1b05(0x298)][_0x5f1b05(0x1b9)](
                      _0x5f1b05(0x24b)
                    ),
                    _0x5f24b8[_0x5f1b05(0x298)]["add"](_0x5f1b05(0x189));
                }, 0x4b0);
            })
            [_0xfa0a67(0x144)]((_0x415c86) => {
              const _0x209029 = _0xfa0a67;
              console[_0x209029(0x2e6)](_0x209029(0x12e), _0x415c86);
              const _0x468f56 = _0x5f24b8[_0x209029(0x192)];
              (_0x5f24b8[_0x209029(0x192)] = "❌"),
                setTimeout(() => {
                  _0x5f24b8["innerHTML"] = _0x468f56;
                }, 0x4b0);
            });
      });
    });
  } catch (_0x2f3cbf) {
    console[_0x22f23b(0x2e6)](_0x22f23b(0x240), _0x2f3cbf),
      (document[_0x22f23b(0x165)](_0x22f23b(0x2ae))[_0x22f23b(0x192)] =
        _0x22f23b(0x112) + _0x2f3cbf[_0x22f23b(0xa3)] + _0x22f23b(0x93));
  }
}
cargarConfiguracionGuardada(), renderHistorial();
