const _0x906661 = _0x5145;
(function (_0x2aa548, _0x3c03a2) {
  const _0x57d053 = _0x5145,
    _0x11c168 = _0x2aa548();
  while (!![]) {
    try {
      const _0x45bd28 =
        (-parseInt(_0x57d053(0x209)) / 0x1) *
          (parseInt(_0x57d053(0x42b)) / 0x2) +
        parseInt(_0x57d053(0x48b)) / 0x3 +
        -parseInt(_0x57d053(0x260)) / 0x4 +
        (parseInt(_0x57d053(0x274)) / 0x5) *
          (-parseInt(_0x57d053(0x205)) / 0x6) +
        -parseInt(_0x57d053(0x1c6)) / 0x7 +
        (parseInt(_0x57d053(0x1e3)) / 0x8) *
          (-parseInt(_0x57d053(0x39f)) / 0x9) +
        parseInt(_0x57d053(0x433)) / 0xa;
      if (_0x45bd28 === _0x3c03a2) break;
      else _0x11c168["push"](_0x11c168["shift"]());
    } catch (_0x5f1cb2) {
      _0x11c168["push"](_0x11c168["shift"]());
    }
  }
})(_0x212e, 0xa6512);
const form = document[_0x906661(0x22d)](_0x906661(0x337)),
  inputCodigo = document[_0x906661(0x22d)](_0x906661(0x1cb)),
  readerDiv = document[_0x906661(0x22d)](_0x906661(0x2c2)),
  ayudaTexto = document[_0x906661(0x22d)](_0x906661(0x3c4)),
  installBtn = document["getElementById"](_0x906661(0x286));
inputCodigo[_0x906661(0x407)](_0x906661(0x485), _0x906661(0x186)),
  inputCodigo["setAttribute"](_0x906661(0x2d6), _0x906661(0x321)),
  inputCodigo["setAttribute"](_0x906661(0x32e), _0x906661(0x186)),
  inputCodigo[_0x906661(0x407)](_0x906661(0x2d0), _0x906661(0x186)),
  inputCodigo[_0x906661(0x407)](_0x906661(0x1b3), _0x906661(0x368)),
  form[_0x906661(0x407)]("autocomplete", _0x906661(0x186));
let scannerActivo = ![],
  deferredPrompt,
  puedeEscanear = !![],
  ultimoCodigoEscaneado = "",
  datosYaCargados = ![];
if (!window[_0x906661(0x243)]) {
  const script = document[_0x906661(0x469)](_0x906661(0x420));
  (script["src"] = _0x906661(0x3b0)),
    (script[_0x906661(0x38b)] = !![]),
    document[_0x906661(0x345)]["appendChild"](script);
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
    const _0x439e26 = _0x906661;
    (this[_0x439e26(0x1dd)] = _0x439e26(0x362)), this[_0x439e26(0x278)]();
  }
  [_0x906661(0x278)]() {
    const _0x3ed819 = _0x906661,
      _0x5a327c = localStorage[_0x3ed819(0x41a)](this[_0x3ed819(0x1dd)]);
    _0x5a327c
      ? (this[_0x3ed819(0x45c)] = JSON[_0x3ed819(0x3d0)](_0x5a327c))
      : this[_0x3ed819(0x308)]();
    const _0x41f786 = new Date()[_0x3ed819(0x2a0)]();
    this[_0x3ed819(0x45c)][_0x3ed819(0x462)] !== _0x41f786 &&
      this["resetMonthlyUsage"]();
  }
  [_0x906661(0x308)]() {
    const _0x2caba4 = _0x906661;
    (this[_0x2caba4(0x45c)] = {
      month: new Date()[_0x2caba4(0x2a0)](),
      year: new Date()["getFullYear"](),
      monthlyCount: 0x0,
      dailyCount: 0x0,
      lastUsedDate: new Date()[_0x2caba4(0x288)](),
      history: [],
    }),
      this[_0x2caba4(0x3cb)]();
  }
  ["saveUsage"]() {
    const _0x1ec5b9 = _0x906661;
    localStorage[_0x1ec5b9(0x27f)](
      this[_0x1ec5b9(0x1dd)],
      JSON[_0x1ec5b9(0x31a)](this[_0x1ec5b9(0x45c)])
    );
  }
  ["canUseAPI"]() {
    const _0x298dd1 = _0x906661,
      _0x3d0a41 = new Date()[_0x298dd1(0x288)]();
    this["usage"][_0x298dd1(0x2cb)] !== _0x3d0a41 &&
      ((this[_0x298dd1(0x45c)][_0x298dd1(0x336)] = 0x0),
      (this[_0x298dd1(0x45c)][_0x298dd1(0x2cb)] = _0x3d0a41),
      this["saveUsage"]());
    const _0x5b885a =
        this[_0x298dd1(0x45c)][_0x298dd1(0x425)] <
        GOOGLE_VISION_CONFIG["monthlyLimit"],
      _0x5a2a0e =
        this[_0x298dd1(0x45c)][_0x298dd1(0x336)] <
        GOOGLE_VISION_CONFIG[_0x298dd1(0x246)];
    return _0x5b885a && _0x5a2a0e;
  }
  [_0x906661(0x42d)]() {
    const _0x562264 = _0x906661;
    this[_0x562264(0x45c)][_0x562264(0x425)]++,
      this["usage"][_0x562264(0x336)]++,
      this[_0x562264(0x45c)][_0x562264(0x16b)][_0x562264(0x178)]({
        date: new Date()[_0x562264(0x3c5)](),
        count: this["usage"][_0x562264(0x425)],
      }),
      this[_0x562264(0x45c)][_0x562264(0x16b)][_0x562264(0x330)] > 0x32 &&
        (this[_0x562264(0x45c)][_0x562264(0x16b)] =
          this[_0x562264(0x45c)]["history"][_0x562264(0x2de)](-0x32)),
      this[_0x562264(0x3cb)]();
  }
  [_0x906661(0x328)]() {
    const _0x437c5b = _0x906661;
    return {
      monthlyUsed: this[_0x437c5b(0x45c)]["monthlyCount"],
      monthlyLimit: GOOGLE_VISION_CONFIG[_0x437c5b(0x2ea)],
      dailyUsed: this[_0x437c5b(0x45c)]["dailyCount"],
      dailyLimit: GOOGLE_VISION_CONFIG["dailyLimit"],
      remainingMonthly:
        GOOGLE_VISION_CONFIG[_0x437c5b(0x2ea)] -
        this[_0x437c5b(0x45c)][_0x437c5b(0x425)],
      remainingDaily:
        GOOGLE_VISION_CONFIG[_0x437c5b(0x246)] -
        this[_0x437c5b(0x45c)]["dailyCount"],
      canUse: this[_0x437c5b(0x365)](),
    };
  }
  [_0x906661(0x163)]() {
    const _0x6208e9 = _0x906661,
      _0x478674 = this[_0x6208e9(0x328)]();
    if (_0x478674["monthlyUsed"] >= GOOGLE_VISION_CONFIG["warningThreshold"])
      return (
        _0x6208e9(0x352) +
        _0x478674[_0x6208e9(0x3f0)] +
        "/" +
        _0x478674[_0x6208e9(0x2ea)] +
        "\x20usos\x20mensuales"
      );
    if (
      _0x478674[_0x6208e9(0x39e)] >=
      GOOGLE_VISION_CONFIG[_0x6208e9(0x246)] * 0.8
    )
      return (
        _0x6208e9(0x1d1) +
        _0x478674[_0x6208e9(0x39e)] +
        "/" +
        _0x478674[_0x6208e9(0x246)] +
        _0x6208e9(0x2cf)
      );
    return null;
  }
}
const visionUsageTracker = new GoogleVisionUsageTracker();
async function detectarConGoogleVision(_0x24e71a) {
  const _0x2ad9a2 = _0x906661;
  console[_0x2ad9a2(0x1cd)](
    "📸\x20Preparando\x20imagen\x20para\x20Google\x20Vision..."
  );
  const _0x200df5 = document[_0x2ad9a2(0x469)](_0x2ad9a2(0x2b7)),
    _0x123e23 = _0x200df5["getContext"]("2d");
  let { width: _0x14df68, height: _0x3d6059 } = _0x24e71a;
  const _0x193e67 = 0x400;
  if (_0x14df68 > _0x193e67 || _0x3d6059 > _0x193e67) {
    const _0x122776 = Math[_0x2ad9a2(0x3fc)](
      _0x193e67 / _0x14df68,
      _0x193e67 / _0x3d6059
    );
    (_0x14df68 *= _0x122776), (_0x3d6059 *= _0x122776);
  }
  (_0x200df5[_0x2ad9a2(0x36a)] = _0x14df68),
    (_0x200df5["height"] = _0x3d6059),
    _0x123e23[_0x2ad9a2(0x19d)](_0x24e71a, 0x0, 0x0, _0x14df68, _0x3d6059);
  const _0x38eb66 = _0x200df5["toDataURL"]("image/jpeg", 0.9);
  console[_0x2ad9a2(0x1cd)](_0x2ad9a2(0x39b));
  try {
    const _0x3c84dd = await fetch(_0x2ad9a2(0x38d), {
      method: _0x2ad9a2(0x229),
      headers: { "Content-Type": _0x2ad9a2(0x45f) },
      body: JSON["stringify"]({
        image: _0x38eb66,
        userAgent: navigator[_0x2ad9a2(0x195)][_0x2ad9a2(0x437)](0x0, 0x32),
        timestamp: new Date()[_0x2ad9a2(0x3c5)](),
      }),
    });
    if (!_0x3c84dd["ok"]) {
      const _0x3ef101 = await _0x3c84dd[_0x2ad9a2(0x2b1)]();
      throw new Error(
        _0x2ad9a2(0x20c) +
          _0x3c84dd[_0x2ad9a2(0x24b)] +
          _0x2ad9a2(0x1e9) +
          _0x3ef101
      );
    }
    const _0x380bbc = await _0x3c84dd["json"]();
    console[_0x2ad9a2(0x1cd)](_0x2ad9a2(0x47b), _0x380bbc);
    if (_0x380bbc[_0x2ad9a2(0x251)])
      return (
        visionUsageTracker[_0x2ad9a2(0x42d)](),
        console[_0x2ad9a2(0x1cd)](
          "✅\x20Google\x20Vision\x20API\x20usada\x20exitosamente\x20-\x20contador\x20local\x20actualizado"
        ),
        console[_0x2ad9a2(0x1cd)](_0x2ad9a2(0x2e6)),
        extraerCodigoDeTexto(_0x380bbc[_0x2ad9a2(0x460)])
      );
    else throw new Error(_0x380bbc[_0x2ad9a2(0x169)] || _0x2ad9a2(0x3d8));
  } catch (_0x49ca0a) {
    console[_0x2ad9a2(0x1cd)](
      "❌\x20Error\x20específico\x20del\x20backend:",
      _0x49ca0a[_0x2ad9a2(0x26c)]
    );
    if (_0x49ca0a[_0x2ad9a2(0x26c)][_0x2ad9a2(0x3d6)](_0x2ad9a2(0x19b)))
      console[_0x2ad9a2(0x1cd)](_0x2ad9a2(0x175)),
        console[_0x2ad9a2(0x1cd)](_0x2ad9a2(0x1b5)),
        console["log"](_0x2ad9a2(0x267)),
        console[_0x2ad9a2(0x1cd)](_0x2ad9a2(0x37e)),
        console["log"](_0x2ad9a2(0x282)),
        console["log"](_0x2ad9a2(0x43c));
    else {
      if (
        _0x49ca0a[_0x2ad9a2(0x26c)][_0x2ad9a2(0x3d6)]("CORS") ||
        _0x49ca0a[_0x2ad9a2(0x26c)][_0x2ad9a2(0x3d6)](_0x2ad9a2(0x1ae)) ||
        _0x49ca0a[_0x2ad9a2(0x26c)][_0x2ad9a2(0x3d6)](_0x2ad9a2(0x342))
      )
        throw new Error(_0x2ad9a2(0x2f9));
    }
    throw _0x49ca0a;
  }
}
function extraerCodigoDeTexto(_0x398cd7) {
  const _0x3e5742 = _0x906661,
    _0x448e0a = _0x398cd7[_0x3e5742(0x3cc)][0x0]?.[_0x3e5742(0x489)] || [];
  if (_0x448e0a["length"] === 0x0)
    return (
      console[_0x3e5742(0x1cd)](
        "❌\x20Google\x20Vision\x20no\x20detectó\x20texto"
      ),
      null
    );
  const _0x2c2abe = _0x448e0a[0x0]?.[_0x3e5742(0x2ff)] || "";
  console[_0x3e5742(0x1cd)](_0x3e5742(0x494), _0x2c2abe);
  const _0x37f2aa = [
    /\b(\d{13})\b/g,
    /\b(\d{12})\b/g,
    /\b(\d{8})\b/g,
    /\b(\d{6,8})\b/g,
    /\b([A-Z0-9\-]{4,20})\b/g,
  ];
  for (const _0x138065 of _0x37f2aa) {
    const _0x58b2e3 = [..._0x2c2abe[_0x3e5742(0x182)](_0x138065)];
    for (const _0x15c739 of _0x58b2e3) {
      const _0x44757c = _0x15c739[0x1]["trim"]();
      console[_0x3e5742(0x1cd)](_0x3e5742(0x3ad) + _0x44757c);
      if (validarCodigoPorLongitud(_0x44757c))
        return (
          console[_0x3e5742(0x1cd)](
            "✅\x20Código\x20válido\x20seleccionado:\x20" + _0x44757c
          ),
          _0x44757c
        );
    }
  }
  return (
    console[_0x3e5742(0x1cd)](
      "❌\x20No\x20se\x20encontraron\x20códigos\x20válidos\x20en\x20el\x20texto"
    ),
    null
  );
}
function validarCodigoPorLongitud(_0x293e5f) {
  const _0x29c5db = _0x906661;
  if (/^\d{13}$/["test"](_0x293e5f)) return !![];
  if (/^\d{12}$/[_0x29c5db(0x3b4)](_0x293e5f)) return !![];
  if (/^\d{8}$/[_0x29c5db(0x3b4)](_0x293e5f)) return !![];
  if (/^\d{6,8}$/[_0x29c5db(0x3b4)](_0x293e5f)) return !![];
  if (
    /^[A-Z0-9\-]{4,20}$/[_0x29c5db(0x3b4)](_0x293e5f) &&
    _0x293e5f["length"] >= 0x4
  )
    return !![];
  return ![];
}
async function diagnosticarBackend() {
  const _0x6c1ca6 = _0x906661;
  console["log"](_0x6c1ca6(0x495));
  const _0x5ab548 = document["getElementById"]("diagnostico-resultado");
  _0x5ab548 && (_0x5ab548["innerHTML"] = _0x6c1ca6(0x228));
  let _0x1b5c5d = "";
  try {
    const _0x36abc9 = await fetch(
      "https://contador-apicloudvision.vercel.app/api/stats"
    );
    if (_0x36abc9["ok"]) {
      console[_0x6c1ca6(0x1cd)](
        "✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente"
      );
      const _0x46d03d = await _0x36abc9[_0x6c1ca6(0x1f8)]();
      console[_0x6c1ca6(0x1cd)](_0x6c1ca6(0x428), _0x46d03d),
        (_0x1b5c5d += _0x6c1ca6(0x17a));
    } else
      console[_0x6c1ca6(0x1cd)](
        "❌\x20Endpoint\x20/api/stats\x20falló:",
        _0x36abc9[_0x6c1ca6(0x24b)]
      ),
        (_0x1b5c5d +=
          _0x6c1ca6(0x284) + _0x36abc9[_0x6c1ca6(0x24b)] + "</div>");
    console[_0x6c1ca6(0x1cd)](_0x6c1ca6(0x161));
    const _0x3a984c = await fetch(
        "https://contador-apicloudvision.vercel.app/api/vision-detect",
        {
          method: _0x6c1ca6(0x229),
          headers: { "Content-Type": "application/json" },
          body: JSON["stringify"]({
            image: _0x6c1ca6(0x19e),
            userId: _0x6c1ca6(0x319),
          }),
        }
      ),
      _0x51ddab = await _0x3a984c[_0x6c1ca6(0x1f8)]();
    console[_0x6c1ca6(0x1cd)](_0x6c1ca6(0x257), _0x51ddab),
      console[_0x6c1ca6(0x1cd)](
        "📊\x20Status\x20HTTP:",
        _0x3a984c[_0x6c1ca6(0x24b)]
      );
    if (_0x3a984c["status"] === 0x1f4) {
      console[_0x6c1ca6(0x1cd)](
        "🔧\x20Error\x20500\x20detectado\x20-\x20Analizando\x20causa\x20específica:"
      );
      if (_0x51ddab["details"]) {
        if (_0x51ddab["details"][_0x6c1ca6(0x3d6)](_0x6c1ca6(0x25e)))
          console[_0x6c1ca6(0x1cd)](_0x6c1ca6(0x190)),
            console[_0x6c1ca6(0x1cd)](
              "💡\x20Verifica\x20que\x20el\x20proyecto\x20#1070150612422\x20tenga\x20facturación\x20activa"
            ),
            console[_0x6c1ca6(0x1cd)](_0x6c1ca6(0x258)),
            (_0x1b5c5d += _0x6c1ca6(0x379));
        else {
          if (_0x51ddab["details"][_0x6c1ca6(0x3d6)]("API_KEY_INVALID"))
            console[_0x6c1ca6(0x1cd)](_0x6c1ca6(0x29c)),
              (_0x1b5c5d += _0x6c1ca6(0x3f8));
          else
            _0x51ddab[_0x6c1ca6(0x2ed)][_0x6c1ca6(0x3d6)](_0x6c1ca6(0x41f))
              ? (console[_0x6c1ca6(0x1cd)](
                  "🚫\x20PROBLEMA:\x20Permisos\x20denegados\x20-\x20Vision\x20API\x20no\x20habilitada"
                ),
                console[_0x6c1ca6(0x1cd)](
                  "💡\x20Ve\x20a:\x20https://console.cloud.google.com/apis/library/vision.googleapis.com"
                ),
                (_0x1b5c5d += _0x6c1ca6(0x394)))
              : (console[_0x6c1ca6(0x1cd)](_0x6c1ca6(0x3b8)),
                console["log"](_0x6c1ca6(0x465), _0x51ddab["details"]),
                (_0x1b5c5d += _0x6c1ca6(0x350)));
        }
      }
    } else
      _0x3a984c[_0x6c1ca6(0x24b)] === 0xc8 &&
        (console[_0x6c1ca6(0x1cd)](_0x6c1ca6(0x22b)),
        (_0x1b5c5d += _0x6c1ca6(0x22f)));
  } catch (_0x4086ae) {
    console[_0x6c1ca6(0x1cd)](
      "❌\x20Error\x20en\x20diagnóstico:",
      _0x4086ae[_0x6c1ca6(0x26c)]
    ),
      _0x4086ae[_0x6c1ca6(0x26c)][_0x6c1ca6(0x3d6)](_0x6c1ca6(0x3a3))
        ? (console[_0x6c1ca6(0x1cd)](_0x6c1ca6(0x1bc)),
          (_0x1b5c5d += _0x6c1ca6(0x2e0)))
        : (_0x1b5c5d +=
            _0x6c1ca6(0x435) + _0x4086ae[_0x6c1ca6(0x26c)] + _0x6c1ca6(0x3fb));
  }
  _0x5ab548 && (_0x5ab548[_0x6c1ca6(0x2ae)] = _0x1b5c5d);
}
async function verificarBackend() {
  const _0x44c415 = _0x906661;
  try {
    const _0x57c663 = await fetch(
      "https://contador-apicloudvision.vercel.app/api/stats",
      {
        method: _0x44c415(0x381),
        headers: { "Content-Type": _0x44c415(0x45f) },
      }
    );
    if (_0x57c663["ok"]) {
      const _0x22b9e = await _0x57c663[_0x44c415(0x1f8)]();
      return (
        console[_0x44c415(0x1cd)](_0x44c415(0x177), _0x22b9e),
        {
          activo: !![],
          stats: _0x22b9e,
          mensaje: "Google\x20Vision\x20API\x20activa\x20y\x20funcional",
        }
      );
    } else
      return (
        console[_0x44c415(0x1cd)](
          _0x44c415(0x459),
          _0x57c663[_0x44c415(0x24b)]
        ),
        {
          activo: ![],
          mensaje: "Backend\x20con\x20error:\x20" + _0x57c663[_0x44c415(0x24b)],
        }
      );
  } catch (_0x2c9ffc) {
    return (
      console["log"](_0x44c415(0x25f), _0x2c9ffc["message"]),
      { activo: ![], mensaje: _0x44c415(0x1c2) }
    );
  }
}
async function mostrarEstadisticasUso() {
  const _0x2b3406 = _0x906661,
    _0x1a8263 = visionUsageTracker[_0x2b3406(0x328)](),
    _0x2d6d9d = visionUsageTracker[_0x2b3406(0x163)]();
  let _0x589d7e = _0x2b3406(0x1e1);
  (_0x589d7e +=
    "•\x20Mensual:\x20" +
    _0x1a8263[_0x2b3406(0x3f0)] +
    "/" +
    _0x1a8263["monthlyLimit"] +
    _0x2b3406(0x1da) +
    _0x1a8263["remainingMonthly"] +
    _0x2b3406(0x3d1)),
    (_0x589d7e +=
      _0x2b3406(0x256) +
      _0x1a8263[_0x2b3406(0x39e)] +
      "/" +
      _0x1a8263["dailyLimit"] +
      _0x2b3406(0x1da) +
      _0x1a8263["remainingDaily"] +
      ")");
  _0x2d6d9d && (_0x589d7e += _0x2b3406(0x38c) + _0x2d6d9d);
  if (GOOGLE_VISION_CONFIG["enabled"])
    try {
      const _0x3671d6 = await verificarBackend();
      _0x589d7e +=
        "<br><br>🌐\x20<strong>Backend:</strong>\x20" +
        _0x3671d6[_0x2b3406(0x1bb)];
    } catch (_0x4525c5) {
      _0x589d7e += _0x2b3406(0x2aa);
    }
  return _0x589d7e;
}
function setCookie(_0x53c6c9, _0x4cbf89, _0x38e6e0) {
  const _0x37c287 = _0x906661,
    _0x43fd69 = new Date(
      Date[_0x37c287(0x1d2)]() + _0x38e6e0 * 0x18 * 0x3c * 0x3c * 0x3e8
    )[_0x37c287(0x3c1)]();
  document[_0x37c287(0x32b)] =
    _0x53c6c9 +
    "=" +
    encodeURIComponent(_0x4cbf89) +
    _0x37c287(0x219) +
    _0x43fd69 +
    _0x37c287(0x468);
}
function getCookie(_0xee67f0) {
  const _0x1a6688 = _0x906661,
    _0x2584f1 = ";\x20" + document[_0x1a6688(0x32b)],
    _0x439eaf = _0x2584f1[_0x1a6688(0x3b7)](";\x20" + _0xee67f0 + "=");
  if (_0x439eaf[_0x1a6688(0x330)] === 0x2)
    return decodeURIComponent(
      _0x439eaf["pop"]()[_0x1a6688(0x3b7)](";")["shift"]()
    );
  return null;
}
const historialDiv = document["getElementById"](_0x906661(0x367)),
  resultadoDiv = document[_0x906661(0x22d)](_0x906661(0x44d)),
  DB_NAME = _0x906661(0x197),
  DB_STORE = _0x906661(0x35d),
  DB_STORE_PROMOCIONES = _0x906661(0x223);
let db;
function _0x5145(_0x187a7f, _0x30ea34) {
  const _0x212e99 = _0x212e();
  return (
    (_0x5145 = function (_0x514584, _0xfbf2d2) {
      _0x514584 = _0x514584 - 0x160;
      let _0x15d4ad = _0x212e99[_0x514584];
      return _0x15d4ad;
    }),
    _0x5145(_0x187a7f, _0x30ea34)
  );
}
function openDB() {
  return new Promise((_0xfc1fcf, _0xe5e5df) => {
    const _0x48c37c = _0x5145,
      _0x2c0b71 = indexedDB["open"](DB_NAME, 0x2);
    (_0x2c0b71[_0x48c37c(0x3c2)] = function (_0x1807c5) {
      const _0x1f7fe6 = _0x48c37c;
      (db = _0x1807c5[_0x1f7fe6(0x322)][_0x1f7fe6(0x3c0)]),
        !db[_0x1f7fe6(0x1c4)][_0x1f7fe6(0x434)](DB_STORE) &&
          db[_0x1f7fe6(0x3f7)](DB_STORE, {
            keyPath: "id",
            autoIncrement: !![],
          }),
        !db[_0x1f7fe6(0x1c4)][_0x1f7fe6(0x434)](DB_STORE_PROMOCIONES) &&
          db[_0x1f7fe6(0x3f7)](DB_STORE_PROMOCIONES, {
            keyPath: "id",
            autoIncrement: !![],
          });
    }),
      (_0x2c0b71[_0x48c37c(0x207)] = function (_0x383ffa) {
        const _0x188339 = _0x48c37c;
        (db = _0x383ffa[_0x188339(0x322)][_0x188339(0x3c0)]), _0xfc1fcf(db);
      }),
      (_0x2c0b71[_0x48c37c(0x1bf)] = function (_0x4f94be) {
        _0xe5e5df(_0x4f94be);
      });
  });
}
function clearProductos() {
  const _0x3bc9b3 = _0x906661;
  return openDB()[_0x3bc9b3(0x340)]((_0x57cf59) => {
    return new Promise((_0x447d3c, _0x2e49a0) => {
      const _0x133102 = _0x5145,
        _0x397226 = _0x57cf59[_0x133102(0x24d)](DB_STORE, "readwrite");
      _0x397226["objectStore"](DB_STORE)["clear"](),
        (_0x397226[_0x133102(0x33f)] = _0x447d3c),
        (_0x397226[_0x133102(0x1bf)] = _0x2e49a0);
    });
  });
}
function saveProductos(_0x5d0264) {
  const _0x87c0a8 = _0x906661;
  return openDB()[_0x87c0a8(0x340)]((_0x5f1ea6) => {
    return new Promise((_0x420a75, _0x5c75fb) => {
      const _0x53e366 = _0x5145,
        _0x151919 = _0x5f1ea6[_0x53e366(0x24d)](DB_STORE, "readwrite"),
        _0x456209 = _0x151919["objectStore"](DB_STORE);
      _0x5d0264[_0x53e366(0x2f6)]((_0x34fa95) => _0x456209["add"](_0x34fa95)),
        (_0x151919[_0x53e366(0x33f)] = _0x420a75),
        (_0x151919[_0x53e366(0x1bf)] = _0x5c75fb);
    });
  });
}
function getAllProductos() {
  const _0x46d46e = _0x906661;
  return openDB()[_0x46d46e(0x340)]((_0x203039) => {
    return new Promise((_0xf796c5, _0x59e8d5) => {
      const _0x443e88 = _0x5145,
        _0x47851c = _0x203039["transaction"](DB_STORE, "readonly"),
        _0x222697 = _0x47851c[_0x443e88(0x46e)](DB_STORE),
        _0x5289db = _0x222697[_0x443e88(0x427)]();
      (_0x5289db[_0x443e88(0x207)] = () =>
        _0xf796c5(_0x5289db[_0x443e88(0x3c0)])),
        (_0x5289db[_0x443e88(0x1bf)] = _0x59e8d5);
    });
  });
}
function clearPromociones() {
  const _0x687607 = _0x906661;
  return openDB()[_0x687607(0x340)]((_0x5ba0c5) => {
    return new Promise((_0x3696d2, _0x88f9df) => {
      const _0x53a00f = _0x5145,
        _0x32412 = _0x5ba0c5[_0x53a00f(0x24d)](
          DB_STORE_PROMOCIONES,
          _0x53a00f(0x271)
        );
      _0x32412[_0x53a00f(0x46e)](DB_STORE_PROMOCIONES)[_0x53a00f(0x392)](),
        (_0x32412[_0x53a00f(0x33f)] = _0x3696d2),
        (_0x32412[_0x53a00f(0x1bf)] = _0x88f9df);
    });
  });
}
function savePromociones(_0x5df170) {
  return openDB()["then"]((_0x4ff3dc) => {
    return new Promise((_0x5b5d99, _0x3c4e90) => {
      const _0x30dc3c = _0x5145,
        _0x4d495b = _0x4ff3dc[_0x30dc3c(0x24d)](
          DB_STORE_PROMOCIONES,
          _0x30dc3c(0x271)
        ),
        _0x593cf6 = _0x4d495b[_0x30dc3c(0x46e)](DB_STORE_PROMOCIONES);
      _0x5df170[_0x30dc3c(0x2f6)]((_0x279bfe) =>
        _0x593cf6[_0x30dc3c(0x2a6)](_0x279bfe)
      ),
        (_0x4d495b[_0x30dc3c(0x33f)] = _0x5b5d99),
        (_0x4d495b[_0x30dc3c(0x1bf)] = _0x3c4e90);
    });
  });
}
function getAllPromociones() {
  return openDB()["then"]((_0x4166a6) => {
    return new Promise((_0x1f7301, _0x52880a) => {
      const _0x5a5e71 = _0x5145,
        _0x35743c = _0x4166a6[_0x5a5e71(0x24d)](
          DB_STORE_PROMOCIONES,
          "readonly"
        ),
        _0x1c32c9 = _0x35743c["objectStore"](DB_STORE_PROMOCIONES),
        _0x35b3b8 = _0x1c32c9[_0x5a5e71(0x427)]();
      (_0x35b3b8[_0x5a5e71(0x207)] = () =>
        _0x1f7301(_0x35b3b8[_0x5a5e71(0x3c0)])),
        (_0x35b3b8["onerror"] = _0x52880a);
    });
  });
}
const sugerenciasDiv = document[_0x906661(0x469)](_0x906661(0x2c0));
(sugerenciasDiv["id"] = _0x906661(0x36c)),
  (sugerenciasDiv[_0x906661(0x314)] = _0x906661(0x167)),
  (sugerenciasDiv["style"][_0x906661(0x411)] = _0x906661(0x360)),
  (sugerenciasDiv[_0x906661(0x2d1)][_0x906661(0x172)] = _0x906661(0x33b)),
  (sugerenciasDiv[_0x906661(0x2d1)][_0x906661(0x3de)] = "auto"),
  (sugerenciasDiv["style"][_0x906661(0x2f2)] = _0x906661(0x2b8)),
  (sugerenciasDiv[_0x906661(0x2d1)][_0x906661(0x244)] = "0"),
  (sugerenciasDiv["style"]["right"] = "0"),
  (inputCodigo[_0x906661(0x46c)][_0x906661(0x2d1)]["position"] = "relative"),
  inputCodigo[_0x906661(0x46c)][_0x906661(0x355)](sugerenciasDiv);
const actualizarDiv = document[_0x906661(0x469)]("div");
(actualizarDiv[_0x906661(0x314)] =
  "d-flex\x20flex-column\x20align-items-center\x20mb-3"),
  (actualizarDiv[_0x906661(0x2ae)] = _0x906661(0x431)),
  historialDiv[_0x906661(0x46c)][_0x906661(0x3a5)](actualizarDiv, historialDiv);
const resultadosModalHTML = _0x906661(0x3ea);
document[_0x906661(0x441)][_0x906661(0x48f)](
  _0x906661(0x48d),
  resultadosModalHTML
);
const btnActualizar = actualizarDiv[_0x906661(0x312)](_0x906661(0x329)),
  btnPromociones = actualizarDiv[_0x906661(0x312)](_0x906661(0x3eb)),
  ultimaActualizacionSpan = actualizarDiv[_0x906661(0x312)](_0x906661(0x27e)),
  btnTexto = actualizarDiv[_0x906661(0x312)]("#btnTexto"),
  btnSpinner = actualizarDiv[_0x906661(0x312)](_0x906661(0x1e8)),
  mensajeActualizacion = actualizarDiv[_0x906661(0x312)](_0x906661(0x467));
async function mostrarProductosConPromociones() {
  const _0x479098 = _0x906661,
    _0x490b22 = await getAllProductos(),
    _0x2b84d9 = [];
  for (const _0x5ab37d of _0x490b22) {
    try {
      const _0x45e95c = await detectarPromocionReal(_0x5ab37d);
      _0x45e95c[_0x479098(0x330)] > 0x0 &&
        _0x2b84d9[_0x479098(0x178)](_0x5ab37d);
    } catch (_0x205f1d) {
      console[_0x479098(0x21a)](
        "⚠️\x20Error\x20al\x20detectar\x20promociones\x20para\x20SKU\x20" +
          _0x5ab37d[_0x479098(0x48a)] +
          ":",
        _0x205f1d
      );
    }
  }
  if (_0x2b84d9[_0x479098(0x330)] === 0x0) {
    (resultadoDiv[_0x479098(0x2ae)] = _0x479098(0x45a)), renderHistorial();
    return;
  }
  const _0x3585c5 = [];
  for (const _0x408496 of _0x2b84d9[_0x479098(0x2de)](0x0, 0x14)) {
    try {
      const _0x367fb0 = await detectarPromocionReal(_0x408496),
        _0x42c2fb =
          Number(_0x408496[_0x479098(0x1ac)]) || Number(_0x408496["L1"]) || 0x0,
        _0x416d62 = Math[_0x479098(0x42a)](_0x42c2fb * 1.16 * 0x64) / 0x64,
        _0x137dcf = _0x367fb0[_0x479098(0x22c)]((_0x59c163) => {
          const _0x4b42c3 = _0x479098;
          let _0xec61bd = _0x4b42c3(0x234),
            _0x15d5b7 =
              _0x59c163["detalle"] ||
              _0x59c163[_0x4b42c3(0x1f2)] ||
              _0x4b42c3(0x1f1);
          if (_0x59c163[_0x4b42c3(0x3bb)]["includes"](_0x4b42c3(0x255)))
            (_0xec61bd = "bg-danger"),
              (_0x15d5b7 = _0x4b42c3(0x318) + _0x15d5b7);
          else
            _0x59c163["es_oficial"] &&
              ((_0xec61bd = _0x4b42c3(0x369)),
              (_0x15d5b7 = _0x4b42c3(0x36b) + _0x15d5b7));
          return (
            _0x4b42c3(0x19f) +
            _0xec61bd +
            "\x20me-1\x20mb-1\x22\x20style=\x22font-size:0.75rem;\x22>" +
            _0x15d5b7 +
            "</span>"
          );
        })[_0x479098(0x1ee)]("");
      _0x3585c5[_0x479098(0x178)](
        _0x479098(0x224) +
          _0x408496[_0x479098(0x48a)] +
          _0x479098(0x1a3) +
          _0x408496[_0x479098(0x416)] +
          "\x22>" +
          _0x408496[_0x479098(0x416)] +
          _0x479098(0x272) +
          _0x137dcf +
          _0x479098(0x1a8) +
          _0x416d62[_0x479098(0x18b)](0x2) +
          _0x479098(0x1b1) +
          _0x408496[_0x479098(0x48a)] +
          _0x479098(0x21d)
      );
    } catch (_0x1dfaa2) {
      console[_0x479098(0x21a)](
        _0x479098(0x26b) + _0x408496[_0x479098(0x48a)] + ":",
        _0x1dfaa2
      );
    }
  }
  (resultadoDiv["innerHTML"] =
    _0x479098(0x201) +
    _0x2b84d9["length"] +
    "\x20encontrados</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong></small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    _0x3585c5[_0x479098(0x1ee)]("") +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20" +
    (_0x2b84d9[_0x479098(0x330)] > 0x14
      ? _0x479098(0x19c) + (_0x2b84d9["length"] - 0x14) + _0x479098(0x1de)
      : "") +
    _0x479098(0x475)),
    renderHistorial();
}
window[_0x906661(0x273)] = async function (_0x206b44) {
  const _0x13bbb4 = _0x906661,
    _0x4d44cd = await getAllProductos(),
    _0x3fff2d = _0x4d44cd[_0x13bbb4(0x3cd)](
      (_0x3b2213) =>
        _0x3b2213[_0x13bbb4(0x48a)] === _0x206b44 ||
        _0x3b2213[_0x13bbb4(0x1d3)] === _0x206b44
    );
  if (_0x3fff2d) {
    mostrarDetalleProducto(_0x3fff2d);
    const _0x32dd9a = {
      ..._0x3fff2d,
      FECHA_ESCANEO: new Date()[_0x13bbb4(0x3c5)](),
    };
    historial["unshift"](_0x32dd9a),
      setCookie(_0x13bbb4(0x367), JSON["stringify"](historial), 0x1e),
      renderHistorial();
  }
};
const urlBase = _0x906661(0x466),
  urlBaseConCodigos = _0x906661(0x1db),
  urlPromociones = _0x906661(0x2fd),
  CONFIG_ENDPOINTS = {
    productosBasicos: urlBase,
    productosConCodigos: urlBaseConCodigos,
    promociones: urlPromociones,
    usarCodigosBarras: !![],
    fallbackTiempo: 0x1388,
  };
function tiempoRelativo(_0x377edc) {
  const _0x95fbb8 = _0x906661;
  if (!_0x377edc) return _0x95fbb8(0x29f);
  const _0x571554 = Date[_0x95fbb8(0x1d2)](),
    _0x16ff78 = Math[_0x95fbb8(0x3b5)]((_0x571554 - _0x377edc) / 0x3e8);
  if (_0x16ff78 < 0x3c) return _0x95fbb8(0x23a) + _0x16ff78 + "\x20segundos";
  if (_0x16ff78 < 0xe10)
    return (
      _0x95fbb8(0x23a) +
      Math[_0x95fbb8(0x3b5)](_0x16ff78 / 0x3c) +
      _0x95fbb8(0x2bc)
    );
  if (_0x16ff78 < 0x15180)
    return (
      "Hace\x20" + Math[_0x95fbb8(0x3b5)](_0x16ff78 / 0xe10) + _0x95fbb8(0x35e)
    );
  return (
    "Hace\x20" + Math[_0x95fbb8(0x3b5)](_0x16ff78 / 0x15180) + _0x95fbb8(0x20d)
  );
}
function renderUltimaActualizacion() {
  const _0x4301f7 = _0x906661,
    _0x114ce0 = localStorage[_0x4301f7(0x41a)](_0x4301f7(0x46d)),
    _0x369fac = localStorage["getItem"](_0x4301f7(0x36d));
  let _0x499153 = "Nunca\x20actualizado";
  if (_0x114ce0 && _0x369fac) {
    const _0x27da33 = tiempoRelativo(Number(_0x114ce0)),
      _0x52337a = tiempoRelativo(Number(_0x369fac)),
      _0x334910 = Math[_0x4301f7(0x19a)](Number(_0x114ce0) - Number(_0x369fac));
    _0x334910 < 0xea60
      ? (_0x499153 = "Última\x20actualización:\x20" + _0x27da33)
      : (_0x499153 =
          _0x4301f7(0x17d) + _0x27da33 + _0x4301f7(0x22e) + _0x52337a);
  } else {
    if (_0x114ce0)
      _0x499153 =
        _0x4301f7(0x17d) + tiempoRelativo(Number(_0x114ce0)) + _0x4301f7(0x43b);
    else
      _0x369fac &&
        (_0x499153 = _0x4301f7(0x42c) + tiempoRelativo(Number(_0x369fac)));
  }
  ultimaActualizacionSpan[_0x4301f7(0x3ec)] = _0x499153;
}
function actualizarProgreso(_0x34515a, _0x1b4242, _0x452864 = "") {
  const _0x2e1bb7 = _0x906661,
    _0x53d5a2 = Math[_0x2e1bb7(0x3fc)](
      0x64,
      Math[_0x2e1bb7(0x448)](0x0, _0x34515a)
    ),
    _0x3ddf0e =
      _0x34515a >= 0x64
        ? _0x2e1bb7(0x251)
        : _0x34515a >= 0x32
        ? "success"
        : _0x2e1bb7(0x3f6);
  mensajeActualizacion[_0x2e1bb7(0x2ae)] =
    _0x2e1bb7(0x334) +
    _0x1b4242 +
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>" +
    _0x34515a +
    _0x2e1bb7(0x27b) +
    _0x3ddf0e +
    _0x2e1bb7(0x3c8) +
    _0x53d5a2 +
    _0x2e1bb7(0x389) +
    _0x34515a +
    "\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20" +
    (_0x452864 ? _0x2e1bb7(0x3ca) + _0x452864 + _0x2e1bb7(0x306) : "") +
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20";
}
async function actualizarTodosLosDatos() {
  const _0x5a7714 = _0x906661;
  console[_0x5a7714(0x1cd)](
    "🚀\x20Iniciando\x20actualización\x20con\x20progreso..."
  ),
    (btnActualizar[_0x5a7714(0x2a8)] = !![]),
    (btnTexto[_0x5a7714(0x3ec)] = "Actualizando..."),
    btnSpinner[_0x5a7714(0x3e1)]["remove"](_0x5a7714(0x3ae));
  const _0x1cb2b6 = Date[_0x5a7714(0x1d2)]();
  let _0x135c34 = ![],
    _0x2cd7ca = ![];
  const _0x56a8d8 = () => {
    const _0x4a361d = _0x5a7714;
    let _0x2d6cb3 = 0x0,
      _0x1607c0 = "Iniciando...",
      _0x1fd3d8 = "";
    if (!_0x135c34 && !_0x2cd7ca)
      (_0x2d6cb3 = 0xa),
        (_0x1607c0 = _0x4a361d(0x311)),
        (_0x1fd3d8 = _0x4a361d(0x3b3));
    else {
      if (_0x135c34 && !_0x2cd7ca)
        (_0x2d6cb3 = 0x46),
          (_0x1607c0 = _0x4a361d(0x28b)),
          (_0x1fd3d8 = _0x4a361d(0x386));
      else {
        if (!_0x135c34 && _0x2cd7ca)
          (_0x2d6cb3 = 0x46),
            (_0x1607c0 = _0x4a361d(0x18e)),
            (_0x1fd3d8 = "Procesando\x20productos");
        else {
          _0x2d6cb3 = 0x64;
          const _0x1806ea = ((Date[_0x4a361d(0x1d2)]() - _0x1cb2b6) / 0x3e8)[
            _0x4a361d(0x18b)
          ](0x1);
          (_0x1607c0 = _0x4a361d(0x372)),
            (_0x1fd3d8 = _0x4a361d(0x426) + _0x1806ea + _0x4a361d(0x2c5));
        }
      }
    }
    actualizarProgreso(_0x2d6cb3, _0x1607c0, _0x1fd3d8);
  };
  _0x56a8d8();
  try {
    await new Promise((_0x4916da) => setTimeout(_0x4916da, 0xc8)),
      actualizarProgreso(0x19, _0x5a7714(0x189), _0x5a7714(0x1b4));
    const _0x5cd04c = cargarProductosRapido()[_0x5a7714(0x340)]((_0x9c5844) => {
        return (_0x135c34 = !![]), _0x56a8d8(), _0x9c5844;
      }),
      _0x1335ed = cargarPromocionesRapido()[_0x5a7714(0x340)]((_0x4ddcc9) => {
        return (_0x2cd7ca = !![]), _0x56a8d8(), _0x4ddcc9;
      });
    setTimeout(() => {
      const _0x544d25 = _0x5a7714;
      (!_0x135c34 || !_0x2cd7ca) &&
        actualizarProgreso(0x32, _0x544d25(0x270), _0x544d25(0x2f0));
    }, 0x3e8);
    const [_0x2d6bc2, _0x971e98] = await Promise[_0x5a7714(0x2e5)]([
        _0x5cd04c,
        _0x1335ed,
      ]),
      _0x23570b = ((Date[_0x5a7714(0x1d2)]() - _0x1cb2b6) / 0x3e8)[
        _0x5a7714(0x18b)
      ](0x1);
    console[_0x5a7714(0x1cd)](_0x5a7714(0x2f7) + _0x23570b + "s");
    const _0x3820d9 = _0x2d6bc2["status"] === _0x5a7714(0x2b2),
      _0x460012 = _0x971e98[_0x5a7714(0x24b)] === _0x5a7714(0x2b2);
    if (_0x3820d9 && _0x460012) {
      const _0x5b42ad = _0x2d6bc2[_0x5a7714(0x1be)]?.[_0x5a7714(0x35d)] || 0x0,
        _0x30ef3f = _0x971e98[_0x5a7714(0x1be)]?.["promociones"] || 0x0,
        _0x3f3490 = _0x2d6bc2["value"]?.[_0x5a7714(0x241)] || "",
        _0x3068f0 = _0x971e98[_0x5a7714(0x1be)]?.[_0x5a7714(0x241)] || "";
      actualizarProgreso(
        0x64,
        "✅\x20Todos\x20los\x20endpoints\x20consultados",
        _0x5b42ad +
          _0x5a7714(0x1a7) +
          _0x3f3490 +
          _0x5a7714(0x31c) +
          _0x30ef3f +
          _0x5a7714(0x208) +
          _0x3068f0 +
          _0x5a7714(0x1ba) +
          _0x23570b +
          "s"
      );
    } else
      _0x3820d9 || _0x460012
        ? actualizarProgreso(
            0x4b,
            _0x5a7714(0x452),
            _0x5a7714(0x333) + _0x23570b + "s)"
          )
        : actualizarProgreso(
            0x19,
            _0x5a7714(0x230),
            "Todos\x20los\x20endpoints\x20fallaron\x20(" + _0x23570b + "s)"
          );
    _0x2d6bc2[_0x5a7714(0x24b)] === _0x5a7714(0x2c7) &&
      console[_0x5a7714(0x169)](
        "Error\x20al\x20cargar\x20productos:",
        _0x2d6bc2[_0x5a7714(0x315)]
      ),
      _0x971e98["status"] === "rejected" &&
        console[_0x5a7714(0x169)](
          _0x5a7714(0x1d4),
          _0x971e98[_0x5a7714(0x315)]
        );
  } catch (_0x41c8be) {
    console[_0x5a7714(0x169)](_0x5a7714(0x442), _0x41c8be),
      actualizarProgreso(
        0x0,
        _0x5a7714(0x21e),
        "Verifique\x20su\x20conexión\x20a\x20internet"
      );
  } finally {
    (btnActualizar["disabled"] = ![]),
      (btnTexto[_0x5a7714(0x3ec)] = "Actualizar"),
      btnSpinner[_0x5a7714(0x3e1)][_0x5a7714(0x2a6)](_0x5a7714(0x3ae)),
      setTimeout(() => {
        const _0x47e76c = _0x5a7714;
        (mensajeActualizacion[_0x47e76c(0x3ec)] = ""),
          renderUltimaActualizacion();
      }, 0xfa0);
  }
}
async function cargarProductosRapido() {
  const _0x28e285 = _0x906661,
    _0x2a4ce0 = Date["now"]();
  if (!navigator[_0x28e285(0x2e8)]) throw new Error(_0x28e285(0x176));
  let _0x2ea5e9 = [],
    _0x341371 = [];
  console[_0x28e285(0x1cd)](_0x28e285(0x307));
  if (CONFIG_ENDPOINTS[_0x28e285(0x44f)])
    try {
      const _0x5141c6 =
        CONFIG_ENDPOINTS["productosConCodigos"] + _0x28e285(0x2dc) + _0x2a4ce0;
      console["log"](_0x28e285(0x3e7));
      const _0x178657 = await Promise["race"]([
        fetch(_0x5141c6, {
          cache: _0x28e285(0x199),
          mode: "cors",
          headers: {
            Accept: _0x28e285(0x45f),
            "Content-Type": _0x28e285(0x45f),
          },
        }),
        new Promise((_0x2243c1, _0xea1983) =>
          setTimeout(
            () => _0xea1983(new Error(_0x28e285(0x490))),
            CONFIG_ENDPOINTS["fallbackTiempo"]
          )
        ),
      ]);
      if (_0x178657["ok"]) {
        const _0x309b38 = await _0x178657["json"]();
        _0x309b38["success"] && _0x309b38[_0x28e285(0x35d)]
          ? ((_0x2ea5e9 = _0x309b38[_0x28e285(0x35d)]),
            _0x341371[_0x28e285(0x178)]("códigos\x20de\x20barras\x20✅"),
            console[_0x28e285(0x1cd)](
              "✅\x20Productos\x20cargados\x20con\x20códigos\x20de\x20barras:",
              _0x309b38[_0x28e285(0x35d)][_0x28e285(0x330)]
            ))
          : _0x341371[_0x28e285(0x178)](_0x28e285(0x3d5));
      } else
        _0x341371[_0x28e285(0x178)](
          _0x28e285(0x48e) + _0x178657["status"] + ")"
        );
    } catch (_0x24a293) {
      console[_0x28e285(0x21a)](_0x28e285(0x443), _0x24a293["message"]),
        _0x24a293[_0x28e285(0x26c)][_0x28e285(0x3d6)](_0x28e285(0x3a3)) ||
        _0x24a293[_0x28e285(0x26c)][_0x28e285(0x3d6)]("Failed\x20to\x20fetch")
          ? (_0x341371[_0x28e285(0x178)](
              "códigos\x20de\x20barras\x20❌\x20(CORS/Red)"
            ),
            console[_0x28e285(0x1cd)](_0x28e285(0x451)))
          : _0x341371[_0x28e285(0x178)](
              "códigos\x20de\x20barras\x20❌\x20(timeout/error)"
            );
    }
  try {
    const _0x49144a =
      CONFIG_ENDPOINTS[_0x28e285(0x444)] + _0x28e285(0x2dc) + _0x2a4ce0;
    console[_0x28e285(0x1cd)](_0x28e285(0x3ee));
    const _0x1f8a26 = await fetch(_0x49144a, { cache: _0x28e285(0x199) });
    if (_0x1f8a26["ok"]) {
      const _0x1cc396 = await _0x1f8a26[_0x28e285(0x1f8)](),
        _0x5c7a6f = Array[_0x28e285(0x1c0)](_0x1cc396) ? _0x1cc396 : [];
      _0x2ea5e9[_0x28e285(0x330)] === 0x0 &&
        _0x5c7a6f[_0x28e285(0x330)] > 0x0 &&
        (_0x2ea5e9 = _0x5c7a6f),
        _0x341371[_0x28e285(0x178)](_0x28e285(0x3c6)),
        console[_0x28e285(0x1cd)](
          _0x28e285(0x320),
          _0x5c7a6f[_0x28e285(0x330)],
          _0x28e285(0x35d)
        );
    } else _0x341371["push"](_0x28e285(0x44b));
  } catch (_0xf2ba0f) {
    console[_0x28e285(0x21a)](_0x28e285(0x16d), _0xf2ba0f[_0x28e285(0x26c)]),
      _0x341371[_0x28e285(0x178)]("básico\x20❌\x20(error)");
  }
  if (_0x2ea5e9[_0x28e285(0x330)] === 0x0) throw new Error(_0x28e285(0x2ba));
  return (
    await clearProductos(),
    await saveProductos(_0x2ea5e9),
    localStorage[_0x28e285(0x27f)](_0x28e285(0x46d), String(_0x2a4ce0)),
    console[_0x28e285(0x1cd)](_0x28e285(0x31f), _0x341371["join"](",\x20")),
    {
      productos: _0x2ea5e9[_0x28e285(0x330)],
      endpoints: _0x341371,
      detalles: _0x341371[_0x28e285(0x330)] + _0x28e285(0x317),
    }
  );
}
async function cargarPromocionesRapido() {
  const _0x4745c1 = _0x906661;
  console[_0x4745c1(0x1cd)](_0x4745c1(0x1d7));
  const _0x3f2d10 = await fetch(CONFIG_ENDPOINTS[_0x4745c1(0x223)], {
    cache: _0x4745c1(0x199),
    headers: { Accept: _0x4745c1(0x45f), "Content-Type": _0x4745c1(0x45f) },
  });
  if (!_0x3f2d10["ok"])
    throw new Error(_0x4745c1(0x2d8) + _0x3f2d10[_0x4745c1(0x24b)]);
  const _0x18ac11 = await _0x3f2d10[_0x4745c1(0x1f8)]();
  if (
    _0x18ac11[_0x4745c1(0x251)] &&
    _0x18ac11[_0x4745c1(0x1bd)] &&
    _0x18ac11[_0x4745c1(0x1bd)][_0x4745c1(0x223)]
  ) {
    const _0x48b0ce = _0x18ac11[_0x4745c1(0x1bd)]["promociones"];
    console[_0x4745c1(0x1cd)](
      _0x4745c1(0x3f4) + _0x48b0ce[_0x4745c1(0x330)] + _0x4745c1(0x200)
    );
    try {
      await clearPromociones(), await savePromociones(_0x48b0ce);
      const _0x555ce1 = Date[_0x4745c1(0x1d2)]();
      localStorage["setItem"](_0x4745c1(0x36d), String(_0x555ce1)),
        console[_0x4745c1(0x1cd)](_0x4745c1(0x3e4));
    } catch (_0x350ac3) {
      console["error"](_0x4745c1(0x45e), _0x350ac3);
    }
    return {
      promociones: _0x48b0ce[_0x4745c1(0x330)],
      detalles: _0x4745c1(0x174),
    };
  } else throw new Error(_0x4745c1(0x454));
}
btnActualizar[_0x906661(0x33c)](_0x906661(0x47f), actualizarTodosLosDatos),
  renderUltimaActualizacion(),
  setInterval(renderUltimaActualizacion, 0xea60),
  openDB()[_0x906661(0x340)](async (_0x535de4) => {
    const _0x71fc32 = _0x906661,
      _0x19cadf = _0x535de4[_0x71fc32(0x24d)](DB_STORE, "readonly"),
      _0x554d56 = _0x19cadf[_0x71fc32(0x46e)](DB_STORE),
      _0x210378 = _0x554d56[_0x71fc32(0x414)](),
      _0x5a004a = _0x535de4[_0x71fc32(0x24d)](
        DB_STORE_PROMOCIONES,
        _0x71fc32(0x30b)
      ),
      _0x311c47 = _0x5a004a["objectStore"](DB_STORE_PROMOCIONES),
      _0x42adb6 = _0x311c47["count"]();
    Promise[_0x71fc32(0x383)]([
      new Promise((_0x57f671) => {
        const _0x1f7bd6 = _0x71fc32;
        _0x210378[_0x1f7bd6(0x207)] = () =>
          _0x57f671(_0x210378[_0x1f7bd6(0x3c0)]);
      }),
      new Promise((_0x598a8d) => {
        _0x42adb6["onsuccess"] = () => _0x598a8d(_0x42adb6["result"]);
      }),
    ])
      [_0x71fc32(0x340)](([_0xd7d5d7, _0x162c36]) => {
        const _0x75d995 = _0x71fc32,
          _0x2546f1 = _0xd7d5d7 > 0x0,
          _0x2ca2f7 = _0x162c36 > 0x0;
        if (!_0x2546f1 && !_0x2ca2f7)
          console[_0x75d995(0x1cd)](_0x75d995(0x2e1)),
            cargarProductosRapido()[_0x75d995(0x1d5)]((_0x49be02) =>
              console["error"](_0x75d995(0x46b), _0x49be02)
            );
        else
          !_0x2546f1
            ? (console[_0x75d995(0x1cd)](_0x75d995(0x1df)),
              cargarProductosRapido()[_0x75d995(0x1d5)]((_0x199dc2) =>
                console[_0x75d995(0x169)](_0x75d995(0x46b), _0x199dc2)
              ))
            : console[_0x75d995(0x1cd)](
                "✅\x20Datos\x20locales\x20encontrados:\x20productos:",
                _0xd7d5d7,
                _0x75d995(0x406),
                _0x162c36
              );
        datosYaCargados = !![];
      })
      [_0x71fc32(0x1d5)]((_0x494534) => {
        const _0x2103e9 = _0x71fc32;
        console["error"](_0x2103e9(0x20b), _0x494534);
        try {
          cargarProductosRapido()[_0x2103e9(0x1d5)]((_0x3de352) =>
            console[_0x2103e9(0x169)](_0x2103e9(0x1e0), _0x3de352)
          );
        } catch (_0x42d504) {}
        datosYaCargados = !![];
      });
  });
let historial = [];
const historialCookie = getCookie(_0x906661(0x367));
if (historialCookie)
  try {
    historial = JSON["parse"](historialCookie);
  } catch (_0x5e0611) {
    historial = [];
  }
function renderClearButton() {
  return "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20";
}
function renderHistorial() {
  const _0x359050 = _0x906661;
  (historialDiv[_0x359050(0x2ae)] =
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    (historial[_0x359050(0x330)] > 0x0 ? renderClearButton() : "") +
    _0x359050(0x232) +
    (historial["length"] === 0x0
      ? "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>"
      : _0x359050(0x2e9) +
        historial[_0x359050(0x22c)]((_0x137d07) => {
          const _0x1fc002 = _0x359050,
            _0x5ba8bf =
              _0x137d07["pr_name"] ||
              _0x137d07[_0x1fc002(0x2b9)] ||
              "Producto\x20desconocido",
            _0x588513 =
              _0x137d07[_0x1fc002(0x48a)] ||
              _0x137d07[_0x1fc002(0x1d3)] ||
              _0x137d07[_0x1fc002(0x3b2)] ||
              _0x137d07["SKU"] ||
              _0x1fc002(0x33a),
            _0x530ead =
              _0x137d07[_0x1fc002(0x1ac)] ||
              _0x137d07["L1"] ||
              _0x137d07[_0x1fc002(0x25b)] ||
              0x0,
            _0x49604e = Math[_0x1fc002(0x42a)](_0x530ead * 1.16 * 0x64) / 0x64,
            _0x4e2292 = _0x137d07["FECHA_ESCANEO"]
              ? new Date(_0x137d07["FECHA_ESCANEO"])[_0x1fc002(0x423)]()
              : _0x1fc002(0x488);
          return (
            _0x1fc002(0x371) +
            _0x5ba8bf +
            _0x1fc002(0x20e) +
            _0x5ba8bf +
            "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20<strong\x20class=\x22ms-1\x22>" +
            _0x588513 +
            _0x1fc002(0x440) +
            _0x588513 +
            _0x1fc002(0x275) +
            _0x49604e["toFixed"](0x2) +
            _0x1fc002(0x310) +
            _0x4e2292 +
            "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20consultar-historial-btn\x22\x20title=\x22Ver\x20detalles\x20completos\x22\x20data-sku=\x22" +
            _0x588513 +
            "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>"
          );
        })[_0x359050(0x1ee)]("") +
        _0x359050(0x231)) +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20"),
    setCookie(_0x359050(0x367), JSON["stringify"](historial), 0x1e);
  const _0x566632 = document["getElementById"]("limpiarHistorialBtn");
  _0x566632 &&
    _0x566632[_0x359050(0x33c)]("click", () => {
      const _0x3fae72 = _0x359050;
      (historial = []),
        setCookie("historial", JSON[_0x3fae72(0x31a)](historial), 0x1e),
        renderHistorial();
    });
  const _0x1ab377 = historialDiv[_0x359050(0x184)](_0x359050(0x203));
  _0x1ab377[_0x359050(0x2f6)]((_0x1dc742) => {
    const _0x1d0004 = _0x359050;
    _0x1dc742[_0x1d0004(0x33c)](_0x1d0004(0x47f), function (_0x3ee7ec) {
      const _0x530427 = _0x1d0004,
        _0x175b38 = _0x1dc742[_0x530427(0x303)]("data-copiar");
      navigator["clipboard"] &&
        navigator[_0x530427(0x34d)]
          [_0x530427(0x43f)](_0x175b38)
          [_0x530427(0x340)](() => {
            const _0x12778c = _0x530427;
            (_0x1dc742[_0x12778c(0x2ae)] = _0x12778c(0x30a)),
              setTimeout(() => {
                const _0x6b235 = _0x12778c;
                _0x1dc742[_0x6b235(0x2ae)] = _0x6b235(0x31b);
              }, 0x4b0);
          });
    });
  });
  const _0x45846d = historialDiv[_0x359050(0x184)](_0x359050(0x455));
  _0x45846d[_0x359050(0x2f6)]((_0x363618) => {
    const _0x7e84de = _0x359050;
    _0x363618[_0x7e84de(0x33c)]("click", function (_0x110c68) {
      const _0x5c256c = _0x7e84de,
        _0x29b6ae = _0x363618[_0x5c256c(0x303)]("data-sku");
      consultarProductoDesdeHistorial(_0x29b6ae);
    });
  });
}
inputCodigo[_0x906661(0x33c)](_0x906661(0x2af), function (_0x38e295) {
  const _0x5e1afa = _0x906661;
  _0x38e295["key"] === _0x5e1afa(0x436) &&
    (_0x38e295[_0x5e1afa(0x34b)](),
    form[_0x5e1afa(0x3f1)](),
    setTimeout(() => {
      const _0x20ba24 = _0x5e1afa,
        _0xf1081f = document[_0x20ba24(0x22d)](_0x20ba24(0x44d));
      _0xf1081f &&
        _0xf1081f[_0x20ba24(0x1b2)]({
          behavior: _0x20ba24(0x196),
          block: "start",
          inline: _0x20ba24(0x1fe),
        });
    }, 0x12c));
}),
  form[_0x906661(0x33c)](_0x906661(0x269), async (_0x552641) => {
    const _0x4a79fc = _0x906661;
    _0x552641[_0x4a79fc(0x34b)]();
    let _0x29c677 = inputCodigo["value"]
      [_0x4a79fc(0x2c4)]()
      [_0x4a79fc(0x18a)](/\s+$/, "");
    const _0x4139e5 = _0x29c677[_0x4a79fc(0x2f1)]();
    (inputCodigo[_0x4a79fc(0x1be)] = _0x29c677),
      (resultadoDiv[_0x4a79fc(0x2ae)] = ""),
      setTimeout(() => {
        const _0x2d6b5c = _0x4a79fc,
          _0x174144 = document[_0x2d6b5c(0x22d)](_0x2d6b5c(0x44d));
        _0x174144 &&
          _0x174144["scrollIntoView"]({
            behavior: _0x2d6b5c(0x196),
            block: _0x2d6b5c(0x42e),
            inline: _0x2d6b5c(0x1fe),
          });
      }, 0x64),
      (sugerenciasDiv[_0x4a79fc(0x2ae)] = ""),
      (sugerenciasDiv[_0x4a79fc(0x2d1)][_0x4a79fc(0x2ec)] = _0x4a79fc(0x24f));
    if (!_0x29c677) {
      (resultadoDiv[_0x4a79fc(0x2ae)] = _0x4a79fc(0x3c7)),
        renderHistorial(),
        inputCodigo[_0x4a79fc(0x3f9)]();
      return;
    }
    (inputCodigo["placeholder"] = ""),
      (resultadoDiv[_0x4a79fc(0x2ae)] = _0x4a79fc(0x293)),
      (inputCodigo[_0x4a79fc(0x1be)] = "");
    let _0x3a84be = await getAllProductos(),
      _0x291163 = _0x3a84be[_0x4a79fc(0x3cd)]((_0x116bc2) => {
        const _0x4e4e86 = _0x4a79fc,
          _0x5ac3d2 = (
            _0x116bc2["pr_sku"] != null
              ? String(_0x116bc2[_0x4e4e86(0x48a)])
              : ""
          )[_0x4e4e86(0x2f1)](),
          _0x3d94c8 = (
            _0x116bc2[_0x4e4e86(0x1d3)] != null
              ? String(_0x116bc2["pr_gtin"])
              : ""
          )[_0x4e4e86(0x2f1)]();
        if (_0x5ac3d2 === _0x4139e5 || _0x3d94c8 === _0x4139e5) return !![];
        if (
          _0x116bc2[_0x4e4e86(0x2b0)] &&
          Array[_0x4e4e86(0x1c0)](_0x116bc2[_0x4e4e86(0x2b0)])
        )
          return _0x116bc2[_0x4e4e86(0x2b0)][_0x4e4e86(0x3c3)](
            (_0x5c34d5) => String(_0x5c34d5)["toLowerCase"]() === _0x4139e5
          );
        return ![];
      });
    if (_0x291163) {
      mostrarDetalleProducto(_0x291163);
      const _0x488041 = {
        ..._0x291163,
        FECHA_ESCANEO: new Date()[_0x4a79fc(0x3c5)](),
      };
      historial[_0x4a79fc(0x1cf)](_0x488041),
        setCookie(_0x4a79fc(0x367), JSON[_0x4a79fc(0x31a)](historial), 0x1e),
        (inputCodigo[_0x4a79fc(0x1be)] = ""),
        inputCodigo[_0x4a79fc(0x3f9)](),
        _0x291163[_0x4a79fc(0x2b0)] &&
          _0x291163[_0x4a79fc(0x2b0)][_0x4a79fc(0x330)] > 0x1 &&
          console[_0x4a79fc(0x1cd)](_0x4a79fc(0x327), {
            sku: _0x291163[_0x4a79fc(0x48a)],
            gtin_principal: _0x291163[_0x4a79fc(0x1d3)],
            codigo_buscado: _0x29c677,
            todos_los_codigos: _0x291163["codigos_barras"],
          });
    } else {
      let _0x362fba = _0x3a84be[_0x4a79fc(0x38f)]((_0xf027a9) => {
        const _0x4ce1ba = _0x4a79fc,
          _0x35bb17 = (_0xf027a9["pr_name"] || "")[_0x4ce1ba(0x2f1)](),
          _0x3cb35c = (
            _0xf027a9["pr_sku"] != null
              ? String(_0xf027a9[_0x4ce1ba(0x48a)])
              : ""
          )["toLowerCase"](),
          _0x53c01c = (
            _0xf027a9[_0x4ce1ba(0x1d3)] != null
              ? String(_0xf027a9[_0x4ce1ba(0x1d3)])
              : ""
          )["toLowerCase"]();
        return (
          _0x35bb17["includes"](_0x4139e5) ||
          _0x3cb35c["includes"](_0x4139e5) ||
          _0x53c01c["includes"](_0x4139e5)
        );
      });
      _0x362fba[_0x4a79fc(0x330)] > 0x0
        ? mostrarModalResultadosBusqueda(_0x362fba, _0x29c677)
        : ((resultadoDiv[_0x4a79fc(0x2ae)] =
            _0x4a79fc(0x289) + _0x29c677 + _0x4a79fc(0x3fb)),
          (inputCodigo["value"] = ""),
          inputCodigo["focus"](),
          setTimeout(() => {
            resultadoDiv["innerHTML"] = "";
          }, 0x1388),
          console[_0x4a79fc(0x1cd)](_0x4a79fc(0x265) + _0x29c677 + "\x22"));
    }
    renderHistorial();
  });
async function detectarPromocionReal(_0x5f1c6a) {
  const _0xcb90ef = _0x906661,
    _0x1ac8e2 = (_0x5f1c6a[_0xcb90ef(0x48a)] || "")[_0xcb90ef(0x46a)]();
  try {
    const _0x47ea0f = await getAllPromociones();
    console[_0xcb90ef(0x1cd)](_0xcb90ef(0x35a), _0x47ea0f["length"]),
      console[_0xcb90ef(0x1cd)](_0xcb90ef(0x1ce), _0x1ac8e2);
    const _0x34d0ba = [];
    for (const _0x25603b of _0x47ea0f) {
      let _0x4d040d = [];
      if (
        _0x25603b[_0xcb90ef(0x385)] &&
        Array[_0xcb90ef(0x1c0)](_0x25603b[_0xcb90ef(0x385)])
      )
        _0x4d040d = _0x25603b[_0xcb90ef(0x385)];
      else
        _0x25603b["pro_grupoProductos_primaria"] &&
          _0x25603b[_0xcb90ef(0x3ef)]["pr_sku"] &&
          (Array[_0xcb90ef(0x1c0)](
            _0x25603b["pro_grupoProductos_primaria"][_0xcb90ef(0x48a)]
          )
            ? (_0x4d040d =
                _0x25603b["pro_grupoProductos_primaria"][_0xcb90ef(0x48a)])
            : (_0x4d040d = _0x25603b[_0xcb90ef(0x3ef)]["pr_sku"]
                [_0xcb90ef(0x3b7)]("\x20")
                ["filter"]((_0xf62305) => _0xf62305[_0xcb90ef(0x2c4)]())));
      if (_0x4d040d[_0xcb90ef(0x3d6)](_0x1ac8e2)) {
        const _0x577295 =
            _0x25603b[_0xcb90ef(0x17b)] ||
            _0x25603b[_0xcb90ef(0x249)] ||
            _0x25603b[_0xcb90ef(0x259)] ||
            "Promoción\x20especial",
          _0xd5dbf8 =
            _0x25603b["pro_cantidad_base"] ||
            _0x25603b[_0xcb90ef(0x472)] ||
            _0x25603b[_0xcb90ef(0x482)] ||
            "",
          _0x2ebb5d =
            _0x25603b[_0xcb90ef(0x400)] ||
            _0x25603b["precio"] ||
            _0x25603b[_0xcb90ef(0x266)] ||
            _0x25603b[_0xcb90ef(0x32c)] ||
            _0x25603b[_0xcb90ef(0x2b3)] ||
            _0x25603b[_0xcb90ef(0x38a)] ||
            _0x25603b[_0xcb90ef(0x28a)] ||
            _0x25603b[_0xcb90ef(0x32d)] ||
            "";
        console["log"](_0xcb90ef(0x3d7) + _0x1ac8e2 + ":", {
          nombre: _0x577295,
          cantidad: _0xd5dbf8,
          precio: _0x2ebb5d,
          campos_precio_disponibles: {
            pro_precioPromo: _0x25603b[_0xcb90ef(0x400)],
            precio: _0x25603b[_0xcb90ef(0x27a)],
            price: _0x25603b[_0xcb90ef(0x266)],
            precioTotal: _0x25603b[_0xcb90ef(0x32c)],
            precio_total: _0x25603b[_0xcb90ef(0x2b3)],
            pro_precio_total: _0x25603b["pro_precio_total"],
            total_price: _0x25603b["total_price"],
            valor_total: _0x25603b[_0xcb90ef(0x32d)],
          },
          campos_disponibles: Object[_0xcb90ef(0x239)](_0x25603b),
          promo_completa: _0x25603b,
        }),
          _0x34d0ba[_0xcb90ef(0x178)]({
            tipo: _0xcb90ef(0x2f3),
            detalle: _0xcb90ef(0x318) + _0x577295,
            nombre_promocion: _0x577295,
            es_oficial: !![],
            fuente: _0xcb90ef(0x1fd),
            id_promocion: _0x25603b[_0xcb90ef(0x358)] || _0x25603b["id"],
            cantidad: _0xd5dbf8,
            precio: _0x2ebb5d,
            mensaje:
              _0x25603b[_0xcb90ef(0x364)] || _0x25603b[_0xcb90ef(0x1bb)] || "",
            tipo_promo:
              _0x25603b["pro_tipoPromo"] || _0x25603b[_0xcb90ef(0x3bb)] || "",
            vigencia:
              _0x25603b[_0xcb90ef(0x1a0)] && _0x25603b[_0xcb90ef(0x1e7)]
                ? _0x25603b["validFrom"] +
                  _0xcb90ef(0x16e) +
                  _0x25603b["validTo"]
                : "",
            raw_data: {
              pro_cantidad_base: _0x25603b["pro_cantidad_base"],
              pro_precioPromo: _0x25603b[_0xcb90ef(0x400)],
              pro_nombrePromo: _0x25603b[_0xcb90ef(0x17b)],
              todos_campos_precio: {
                pro_precioPromo: _0x25603b[_0xcb90ef(0x400)],
                precio: _0x25603b["precio"],
                price: _0x25603b[_0xcb90ef(0x266)],
                precioTotal: _0x25603b["precioTotal"],
                precio_total: _0x25603b[_0xcb90ef(0x2b3)],
                pro_precio_total: _0x25603b[_0xcb90ef(0x38a)],
                total_price: _0x25603b[_0xcb90ef(0x28a)],
                valor_total: _0x25603b[_0xcb90ef(0x32d)],
              },
            },
          });
      }
    }
    return (
      _0x34d0ba[_0xcb90ef(0x330)] === 0x0
        ? console[_0xcb90ef(0x1cd)](
            "❌\x20No\x20hay\x20promociones\x20para\x20SKU:\x20" + _0x1ac8e2
          )
        : console["log"](
            "✅\x20" +
              _0x34d0ba[_0xcb90ef(0x330)] +
              _0xcb90ef(0x2d7) +
              _0x1ac8e2
          ),
      _0x34d0ba
    );
  } catch (_0x1ed0e3) {
    return console[_0xcb90ef(0x169)](_0xcb90ef(0x233), _0x1ed0e3), [];
  }
}
function mostrarDetalleProducto(_0x1f442b) {
  const _0x18d645 = _0x906661;
  let _0x7467cc = "";
  if (
    _0x1f442b[_0x18d645(0x294)] &&
    _0x1f442b[_0x18d645(0x294)][_0x18d645(0x2c4)]() !== ""
  ) {
    if (_0x1f442b[_0x18d645(0x294)][_0x18d645(0x2e2)](_0x18d645(0x28c)))
      _0x7467cc = _0x1f442b["pr_imagen"];
    else {
      let _0x3809a7 = _0x1f442b[_0x18d645(0x294)]["startsWith"]("/")
        ? _0x1f442b[_0x18d645(0x294)]
        : "/" + _0x1f442b[_0x18d645(0x294)];
      _0x7467cc = _0x18d645(0x393) + _0x3809a7;
    }
  }
  let _0x4c357a =
      Number(_0x1f442b["pr_precio"]) || Number(_0x1f442b["L1"]) || 0x0,
    _0x56bf72 = Math[_0x18d645(0x42a)](_0x4c357a * 1.16 * 0x64) / 0x64,
    _0xf07b = 0xc,
    _0xe952e = 0.1,
    _0x4c1d9e =
      Math[_0x18d645(0x42a)](_0x56bf72 * (0x1 + _0xe952e) * 0x64) / 0x64,
    _0x35f4b3 = "";
  if (
    _0x1f442b[_0x18d645(0x2b0)] &&
    _0x1f442b[_0x18d645(0x2b0)][_0x18d645(0x330)] > 0x1
  ) {
    const _0x630e81 = [...new Set(_0x1f442b[_0x18d645(0x2b0)])][
      _0x18d645(0x38f)
    ]((_0x14ede3) => _0x14ede3 && _0x14ede3[_0x18d645(0x2c4)]());
    _0x630e81[_0x18d645(0x330)] > 0x1 &&
      (_0x35f4b3 =
        _0x18d645(0x181) +
        _0x630e81[_0x18d645(0x1ee)](",\x20") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20");
  }
  renderProductoConPromociones(
    _0x1f442b,
    _0x7467cc,
    _0x56bf72,
    _0x4c1d9e,
    _0x35f4b3
  ),
    setTimeout(() => {
      generarCodigoBarras(_0x1f442b);
    }, 0x64),
    detectarPromocionReal(_0x1f442b)
      [_0x18d645(0x340)]((_0x2c606e) => {
        actualizarPromocionesEnVista(
          _0x1f442b,
          _0x7467cc,
          _0x56bf72,
          _0x4c1d9e,
          _0x35f4b3,
          _0x2c606e
        );
      })
      [_0x18d645(0x1d5)]((_0x371b91) => {
        const _0x26a312 = _0x18d645;
        console["error"](_0x26a312(0x3ba), _0x371b91),
          actualizarPromocionesEnVista(
            _0x1f442b,
            _0x7467cc,
            _0x56bf72,
            _0x4c1d9e,
            _0x35f4b3,
            []
          );
      });
}
function generarCodigoBarras(_0x246a0d) {
  const _0x5c0905 = _0x906661,
    _0x141cbc = _0x246a0d["pr_sku"] || _0x246a0d[_0x5c0905(0x1d3)] || "",
    _0x46fdf1 = _0x5c0905(0x430) + _0x246a0d["pr_sku"],
    _0xd79223 = document["getElementById"](_0x46fdf1);
  if (!_0xd79223 || !_0x141cbc) {
    console[_0x5c0905(0x21a)](_0x5c0905(0x185));
    return;
  }
  const _0x112aeb = () => {
    const _0x385d6a = _0x5c0905;
    if (window["JsBarcode"])
      try {
        let _0x19e6bf = _0x385d6a(0x268);
        const _0x57b34b = String(_0x141cbc);
        if (
          _0x57b34b[_0x385d6a(0x330)] === 0xd &&
          /^\d+$/[_0x385d6a(0x3b4)](_0x57b34b)
        )
          _0x19e6bf = _0x385d6a(0x332);
        else {
          if (
            _0x57b34b[_0x385d6a(0x330)] === 0x8 &&
            /^\d+$/[_0x385d6a(0x3b4)](_0x57b34b)
          )
            _0x19e6bf = "EAN8";
          else
            _0x57b34b[_0x385d6a(0x330)] === 0xc &&
              /^\d+$/[_0x385d6a(0x3b4)](_0x57b34b) &&
              (_0x19e6bf = _0x385d6a(0x210));
        }
        console[_0x385d6a(0x1cd)](
          _0x385d6a(0x2a2) + _0x19e6bf + _0x385d6a(0x474) + _0x57b34b
        ),
          JsBarcode(_0xd79223, _0x57b34b, {
            format: _0x19e6bf,
            width: 0x2,
            height: 0x32,
            displayValue: ![],
            margin: 0x0,
            background: "#ffffff",
            lineColor: _0x385d6a(0x2fb),
          }),
          window["innerWidth"] <= 0x300 &&
            JsBarcode(_0xd79223, _0x57b34b, {
              format: _0x19e6bf,
              width: 1.5,
              height: 0x28,
              displayValue: ![],
              margin: 0x0,
              background: _0x385d6a(0x401),
              lineColor: _0x385d6a(0x2fb),
            });
      } catch (_0x230da3) {
        console[_0x385d6a(0x169)](
          "Error\x20generando\x20código\x20de\x20barras:",
          _0x230da3
        );
        const _0x9e1a52 = _0xd79223[_0x385d6a(0x23f)]("2d");
        (_0x9e1a52["fillStyle"] = _0x385d6a(0x1f5)),
          _0x9e1a52[_0x385d6a(0x164)](
            0x0,
            0x0,
            _0xd79223[_0x385d6a(0x36a)],
            _0xd79223[_0x385d6a(0x373)]
          ),
          (_0x9e1a52[_0x385d6a(0x1d9)] = _0x385d6a(0x3e2)),
          (_0x9e1a52[_0x385d6a(0x477)] = _0x385d6a(0x33d)),
          (_0x9e1a52[_0x385d6a(0x39c)] = _0x385d6a(0x23c)),
          _0x9e1a52[_0x385d6a(0x3fd)](
            _0x385d6a(0x464),
            _0xd79223[_0x385d6a(0x36a)] / 0x2,
            _0xd79223["height"] / 0x2
          );
      }
    else setTimeout(_0x112aeb, 0x64);
  };
  _0x112aeb();
}
function renderProductoConPromociones(
  _0x542dce,
  _0x151936,
  _0xfe54a8,
  _0x1c247a,
  _0x54af08
) {
  const _0x46484d = _0x906661;
  resultadoDiv[_0x46484d(0x2ae)] =
    _0x46484d(0x25d) +
    (_0x151936
      ? _0x46484d(0x34c) +
        _0x151936 +
        _0x46484d(0x1dc) +
        _0x542dce[_0x46484d(0x416)] +
        "\x22\x20style=\x22width:218px;\x20height:124px;\x20object-fit:contain;\x20background:#fff;\x20border-radius:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"
      : "") +
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-8\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20nombre-producto-responsive\x22\x20style=\x22color:#616161;\x22>" +
    _0x542dce["pr_name"] +
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-center\x20align-items-center\x20gap-3\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-danger\x20precio-responsive\x22>$\x20" +
    _0xfe54a8[_0x46484d(0x18b)](0x2) +
    _0x46484d(0x2e4) +
    _0x1c247a[_0x46484d(0x18b)](0x2) +
    _0x46484d(0x405) +
    _0x542dce["pr_sku"] +
    _0x46484d(0x2be) +
    (_0x542dce["pr_sku"] || _0x542dce["pr_gtin"] || "N/A") +
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    _0x54af08 +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22promociones-container\x22\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>🔍\x20Verificando\x20promociones...</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20";
}
function actualizarPromocionesEnVista(
  _0x454606,
  _0x3606e5,
  _0x190898,
  _0x257c21,
  _0x36f518,
  _0x356775
) {
  const _0x5ed964 = _0x906661;
  console[_0x5ed964(0x1cd)](
    "🔍\x20Actualizando\x20promociones\x20en\x20vista:",
    _0x356775
  );
  let _0x4ca01d = "";
  if (_0x356775[_0x5ed964(0x330)] > 0x0) {
    const _0x119bb1 = _0x356775[_0x5ed964(0x38f)](
      (_0x1ca62c) =>
        _0x1ca62c[_0x5ed964(0x424)] &&
        (_0x1ca62c[_0x5ed964(0x481)] === _0x5ed964(0x192) ||
          _0x1ca62c["fuente"] === _0x5ed964(0x1fd))
    );
    console[_0x5ed964(0x1cd)](
      "🏷️\x20Promociones\x20oficiales\x20filtradas:",
      _0x119bb1
    );
    if (_0x119bb1[_0x5ed964(0x330)] > 0x0) {
      const _0x48bd96 = _0x119bb1["map"]((_0x2381ee) => {
        const _0x5801a2 = _0x5ed964;
        console[_0x5801a2(0x1cd)](
          "🔍\x20Datos\x20de\x20promoción\x20recibidos:",
          _0x2381ee
        );
        const _0x50182a =
          _0x2381ee["cantidad"] || _0x2381ee[_0x5801a2(0x3fe)] || "";
        let _0x2a3636 =
          _0x2381ee["precio"] || _0x2381ee[_0x5801a2(0x400)] || "";
        const _0x3dd2b2 =
          _0x2381ee[_0x5801a2(0x1f2)] || _0x2381ee[_0x5801a2(0x17b)] || "";
        console[_0x5801a2(0x1cd)](_0x5801a2(0x35c), {
          cantidad: _0x50182a,
          precio: _0x2a3636,
          nombrePromo: _0x3dd2b2,
        });
        if (_0x50182a && _0x2a3636) {
          const _0x567ae8 = parseInt(_0x50182a),
            _0x9c4cb8 = parseFloat(_0x2a3636);
          if (!isNaN(_0x567ae8) && !isNaN(_0x9c4cb8)) {
            const _0x2a772b = _0x567ae8 * _0x9c4cb8,
              _0x57aa41 = Math[_0x5801a2(0x42a)](_0x2a772b);
            console[_0x5801a2(0x1cd)](
              _0x5801a2(0x3d9) +
                _0x567ae8 +
                _0x5801a2(0x397) +
                _0x9c4cb8 +
                _0x5801a2(0x25c) +
                _0x2a772b +
                _0x5801a2(0x26e) +
                _0x57aa41 +
                _0x5801a2(0x2ef)
            ),
              (_0x2a3636 = _0x57aa41[_0x5801a2(0x46a)]());
          }
        }
        console[_0x5801a2(0x1cd)](_0x5801a2(0x24c), {
          cantidad: _0x50182a,
          precio: _0x2a3636,
          nombrePromo: _0x3dd2b2,
        });
        let _0x5b5845 = "";
        if (_0x50182a && _0x2a3636)
          (_0x5b5845 = _0x50182a + "x" + _0x2a3636),
            console[_0x5801a2(0x1cd)](
              "✅\x20Usando\x20cantidad\x20y\x20precio\x20calculado:",
              _0x5b5845
            );
        else {
          if (_0x3dd2b2) {
            const _0x1b5a96 = _0x3dd2b2["match"](/(\d+)\s*[xX×]\s*(\d+)/i),
              _0x1d1463 = _0x3dd2b2[_0x5801a2(0x276)](
                /(\d+)\s*[xX×]\s*\$?\s*(\d+)/i
              ),
              _0x36fb6b = _0x3dd2b2[_0x5801a2(0x276)](/(\d+)\s*[xX×]/i);
            if (_0x1b5a96)
              (_0x5b5845 = _0x1b5a96[0x1] + "x" + _0x1b5a96[0x2]),
                console[_0x5801a2(0x1cd)](_0x5801a2(0x36e), _0x5b5845);
            else {
              if (_0x1d1463)
                (_0x5b5845 = _0x1d1463[0x1] + "x" + _0x1d1463[0x2]),
                  console["log"](_0x5801a2(0x1a9), _0x5b5845);
              else
                _0x36fb6b
                  ? ((_0x5b5845 = _0x36fb6b[0x1] + "x"),
                    console[_0x5801a2(0x1cd)](
                      "⚠️\x20Solo\x20cantidad\x20extraída:",
                      _0x5b5845
                    ))
                  : ((_0x5b5845 = _0x3dd2b2),
                    console[_0x5801a2(0x1cd)](_0x5801a2(0x2ce), _0x5b5845));
            }
          } else
            (_0x5b5845 = _0x5801a2(0x1f1)),
              console[_0x5801a2(0x1cd)](_0x5801a2(0x2bd));
        }
        return _0x5801a2(0x37c) + _0x5b5845 + _0x5801a2(0x3cf);
      })["join"]("");
      _0x4ca01d = _0x5ed964(0x1af) + _0x48bd96 + _0x5ed964(0x215);
    } else
      _0x4ca01d =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
  } else _0x4ca01d = _0x5ed964(0x160);
  const _0x3e440f = document[_0x5ed964(0x22d)](_0x5ed964(0x2f5));
  _0x3e440f && (_0x3e440f[_0x5ed964(0x2ae)] = _0x4ca01d);
}
async function mostrarModalPromocionesGenerales() {
  const _0x4279d0 = _0x906661,
    _0x58f15e =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i["test"](
        navigator[_0x4279d0(0x195)]
      ),
    _0x18ead5 = /iPad|iPhone|iPod/[_0x4279d0(0x3b4)](
      navigator[_0x4279d0(0x195)]
    );
  console[_0x4279d0(0x1cd)](_0x4279d0(0x1ec), _0x58f15e),
    console[_0x4279d0(0x1cd)](_0x4279d0(0x290), _0x18ead5);
  const _0x501f0d = document[_0x4279d0(0x22d)]("promocionesGeneralesModal"),
    _0x10d0cb = document[_0x4279d0(0x22d)]("promociones-generales-modal-body");
  if (!_0x10d0cb || !_0x501f0d) {
    console[_0x4279d0(0x169)](_0x4279d0(0x40c));
    return;
  }
  try {
    const _0x2ad502 = () => {
      const _0x31dd57 = _0x4279d0,
        _0x15eac7 = document["getElementById"](_0x31dd57(0x1cb));
      _0x15eac7 &&
        ((_0x15eac7["placeholder"] = _0x31dd57(0x18d)), bringInputIntoView());
    };
    _0x501f0d[_0x4279d0(0x33c)]("hidden.bs.modal", _0x2ad502, { once: !![] });
  } catch (_0x185a99) {}
  try {
    const _0x332552 = document[_0x4279d0(0x22d)](_0x4279d0(0x1cb));
    _0x332552 &&
      ((_0x332552[_0x4279d0(0x1be)] = ""),
      (_0x332552[_0x4279d0(0x487)] = _0x4279d0(0x18d)));
    const _0x495405 = document["getElementById"](_0x4279d0(0x36c));
    _0x495405 &&
      ((_0x495405[_0x4279d0(0x2ae)] = ""),
      (_0x495405[_0x4279d0(0x2d1)][_0x4279d0(0x2ec)] = "none"));
  } catch (_0x51d6e1) {}
  try {
    console[_0x4279d0(0x1cd)](_0x4279d0(0x351)),
      (_0x10d0cb["innerHTML"] = _0x4279d0(0x248));
    const _0x420efa = await getAllProductos();
    let _0xb6e0ec = [];
    try {
      _0xb6e0ec = await getAllPromociones();
    } catch (_0x29fddd) {
      _0xb6e0ec = [];
    }
    const _0x4c7ecd = ![];
    console[_0x4279d0(0x1cd)](_0x4279d0(0x404), {
      total: _0xb6e0ec["length"],
      desdeServidor: _0x4c7ecd,
    });
    if (_0xb6e0ec[_0x4279d0(0x330)] === 0x0) {
      _0x10d0cb[_0x4279d0(0x2ae)] = _0x4279d0(0x21b);
      return;
    }
    let _0x2bf4df = _0x4279d0(0x2d2);
    _0xb6e0ec[_0x4279d0(0x2f6)]((_0x3748fd, _0x11eb84) => {
      const _0x5bcfd1 = _0x4279d0;
      let _0x4bab55 = [];
      if (
        _0x3748fd["skus"] &&
        Array[_0x5bcfd1(0x1c0)](_0x3748fd[_0x5bcfd1(0x385)])
      )
        _0x4bab55 = _0x3748fd[_0x5bcfd1(0x385)];
      else
        _0x3748fd["pro_grupoProductos_primaria"] &&
          _0x3748fd[_0x5bcfd1(0x3ef)]["pr_sku"] &&
          (Array[_0x5bcfd1(0x1c0)](
            _0x3748fd["pro_grupoProductos_primaria"][_0x5bcfd1(0x48a)]
          )
            ? (_0x4bab55 =
                _0x3748fd["pro_grupoProductos_primaria"][_0x5bcfd1(0x48a)])
            : (_0x4bab55 = _0x3748fd[_0x5bcfd1(0x3ef)][_0x5bcfd1(0x48a)]
                [_0x5bcfd1(0x3b7)]("\x20")
                [_0x5bcfd1(0x38f)]((_0x2ae846) =>
                  _0x2ae846[_0x5bcfd1(0x2c4)]()
                )));
      const _0x2744ff = new Map(
          _0x420efa[_0x5bcfd1(0x22c)]((_0x21799e) => [
            String(_0x21799e[_0x5bcfd1(0x48a)]),
            _0x21799e,
          ])
        ),
        _0x4b25eb = _0x4bab55[_0x5bcfd1(0x22c)]((_0x146f66) =>
          _0x2744ff[_0x5bcfd1(0x245)](String(_0x146f66))
        )[_0x5bcfd1(0x38f)](Boolean),
        _0x2ef407 =
          _0x3748fd["pro_nombrePromo"] ||
          _0x3748fd[_0x5bcfd1(0x249)] ||
          _0x5bcfd1(0x3be) + (_0x11eb84 + 0x1),
        _0x2ddff9 =
          _0x3748fd[_0x5bcfd1(0x29a)] ||
          _0x3748fd[_0x5bcfd1(0x3bb)] ||
          _0x5bcfd1(0x1f3),
        _0x577451 = _0x3748fd[_0x5bcfd1(0x364)] || _0x3748fd["mensaje"] || "",
        _0x488f0f = _0x3748fd[_0x5bcfd1(0x3fe)] || "",
        _0x24b70c = Number(_0x488f0f) || 0x1;
      let _0x463b8c = 0x0;
      const _0x575573 = (_0x577451 + "\x20" + _0x2ef407)[_0x5bcfd1(0x2f1)](),
        _0x4a752e = _0x575573[_0x5bcfd1(0x276)](/(\d+)\s*x\s*(\d+)/);
      if (_0x4a752e) _0x463b8c = Math["round"](Number(_0x4a752e[0x2]));
      else {
        const _0x52cbbc = Number(_0x3748fd[_0x5bcfd1(0x400)]) || 0x0;
        _0x463b8c = Math[_0x5bcfd1(0x42a)](_0x52cbbc * _0x24b70c);
      }
      _0x2bf4df +=
        _0x5bcfd1(0x348) +
        _0x2ef407 +
        _0x5bcfd1(0x366) +
        (_0x4b25eb["length"] > 0x0
          ? _0x5bcfd1(0x3db) +
            _0x4b25eb["slice"](0x0, 0x4)
              ["map"]((_0x1c838c) => {
                const _0x14022d = _0x5bcfd1;
                let _0x1f8bbf = "";
                if (
                  _0x1c838c[_0x14022d(0x294)] &&
                  _0x1c838c[_0x14022d(0x294)]["trim"]() !== ""
                ) {
                  if (
                    _0x1c838c["pr_imagen"][_0x14022d(0x2e2)](_0x14022d(0x28c))
                  )
                    _0x1f8bbf = _0x1c838c["pr_imagen"];
                  else {
                    let _0x295075 = _0x1c838c[_0x14022d(0x294)][
                      _0x14022d(0x2e2)
                    ]("/")
                      ? _0x1c838c[_0x14022d(0x294)]
                      : "/" + _0x1c838c[_0x14022d(0x294)];
                    _0x1f8bbf = _0x14022d(0x393) + _0x295075;
                  }
                }
                const _0x4bed1f =
                    Number(_0x1c838c[_0x14022d(0x1ac)]) ||
                    Number(_0x1c838c["L1"]) ||
                    0x0,
                  _0x2c55c0 =
                    Math[_0x14022d(0x42a)](_0x4bed1f * 1.16 * 0x64) / 0x64;
                return (
                  _0x14022d(0x3ed) +
                  (_0x1f8bbf
                    ? _0x14022d(0x422) +
                      _0x1f8bbf +
                      _0x14022d(0x1dc) +
                      _0x1c838c[_0x14022d(0x416)] +
                      _0x14022d(0x361)
                    : _0x14022d(0x29e)) +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22\x20style=\x22font-size:\x200.9rem;\x20line-height:\x201.2;\x22>" +
                  _0x1c838c[_0x14022d(0x416)] +
                  "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$" +
                  _0x2c55c0["toFixed"](0x2) +
                  _0x14022d(0x2c3) +
                  _0x1c838c[_0x14022d(0x48a)] +
                  _0x14022d(0x1ad)
                );
              })
              [_0x5bcfd1(0x1ee)]("") +
            _0x5bcfd1(0x3db) +
            (_0x4b25eb[_0x5bcfd1(0x330)] > 0x4
              ? _0x5bcfd1(0x1f7) +
                (_0x4b25eb[_0x5bcfd1(0x330)] - 0x4) +
                _0x5bcfd1(0x1ef)
              : "") +
            _0x5bcfd1(0x347)
          : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-box-seam\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x20mb-0\x22>Productos\x20no\x20disponibles</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    }),
      (_0x2bf4df += _0x4279d0(0x3fb)),
      (_0x10d0cb["innerHTML"] = _0x2bf4df);
    if (_0x58f15e || _0x18ead5) {
      console["log"](_0x4279d0(0x3d4)),
        document["querySelectorAll"](_0x4279d0(0x479))[_0x4279d0(0x2f6)](
          (_0x32f0d5) => _0x32f0d5[_0x4279d0(0x1c5)]()
        ),
        (_0x501f0d[_0x4279d0(0x2d1)][_0x4279d0(0x1b6)] = _0x4279d0(0x221)),
        (_0x501f0d[_0x4279d0(0x2d1)][_0x4279d0(0x2f2)] = "0"),
        (_0x501f0d[_0x4279d0(0x2d1)][_0x4279d0(0x244)] = "0"),
        (_0x501f0d["style"][_0x4279d0(0x36a)] = _0x4279d0(0x2b8)),
        (_0x501f0d[_0x4279d0(0x2d1)][_0x4279d0(0x373)] = _0x4279d0(0x2b8)),
        (_0x501f0d[_0x4279d0(0x2d1)][_0x4279d0(0x411)] = _0x4279d0(0x438)),
        (_0x501f0d[_0x4279d0(0x2d1)][_0x4279d0(0x33e)] = _0x4279d0(0x35f));
      const _0x17c4f2 = _0x501f0d["querySelector"](_0x4279d0(0x3ac));
      _0x17c4f2 &&
        ((_0x17c4f2["style"][_0x4279d0(0x36a)] = _0x4279d0(0x2b8)),
        (_0x17c4f2["style"][_0x4279d0(0x1ed)] = "100%"),
        (_0x17c4f2["style"][_0x4279d0(0x373)] = "100%"),
        (_0x17c4f2[_0x4279d0(0x2d1)][_0x4279d0(0x313)] = "0"),
        (_0x17c4f2["style"][_0x4279d0(0x2ec)] = _0x4279d0(0x280)),
        (_0x17c4f2[_0x4279d0(0x2d1)][_0x4279d0(0x20a)] = "column"));
      const _0x5b54e2 = _0x501f0d["querySelector"](_0x4279d0(0x3b9));
      _0x5b54e2 &&
        ((_0x5b54e2["style"]["width"] = "100%"),
        (_0x5b54e2[_0x4279d0(0x2d1)]["height"] = _0x4279d0(0x2b8)),
        (_0x5b54e2[_0x4279d0(0x2d1)][_0x4279d0(0x3fa)] = _0x4279d0(0x24f)),
        (_0x5b54e2[_0x4279d0(0x2d1)][_0x4279d0(0x413)] = "0"),
        (_0x5b54e2["style"]["display"] = _0x4279d0(0x280)),
        (_0x5b54e2[_0x4279d0(0x2d1)][_0x4279d0(0x20a)] = _0x4279d0(0x37b)));
      const _0x27e8b3 = _0x501f0d[_0x4279d0(0x312)](_0x4279d0(0x338));
      _0x27e8b3 &&
        ((_0x27e8b3[_0x4279d0(0x2d1)][_0x4279d0(0x280)] = "1"),
        (_0x27e8b3[_0x4279d0(0x2d1)][_0x4279d0(0x3de)] = _0x4279d0(0x48c)),
        (_0x27e8b3["style"][_0x4279d0(0x304)] = _0x4279d0(0x39a)),
        (_0x27e8b3[_0x4279d0(0x2d1)][_0x4279d0(0x172)] = _0x4279d0(0x24f))),
        (_0x501f0d[_0x4279d0(0x2d1)][_0x4279d0(0x2ec)] = _0x4279d0(0x32f)),
        _0x501f0d[_0x4279d0(0x3e1)][_0x4279d0(0x2a6)](_0x4279d0(0x384)),
        document[_0x4279d0(0x441)][_0x4279d0(0x3e1)][_0x4279d0(0x1c5)](
          _0x4279d0(0x3a4)
        ),
        (document[_0x4279d0(0x441)][_0x4279d0(0x2d1)][_0x4279d0(0x26a)] = "");
    } else {
      console[_0x4279d0(0x1cd)](_0x4279d0(0x279));
      const _0x32ef8f = new bootstrap["Modal"](_0x501f0d, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x32ef8f[_0x4279d0(0x384)]();
    }
  } catch (_0x2bc8ac) {
    console[_0x4279d0(0x169)](_0x4279d0(0x3ba), _0x2bc8ac),
      (_0x10d0cb[_0x4279d0(0x2ae)] =
        _0x4279d0(0x496) + _0x2bc8ac[_0x4279d0(0x26c)] + _0x4279d0(0x3ff));
  }
}
function cerrarModalMobile() {
  const _0x1b99d9 = _0x906661;
  console[_0x1b99d9(0x1cd)](_0x1b99d9(0x409));
  const _0x4d43e5 = document["getElementById"](_0x1b99d9(0x23d));
  if (_0x4d43e5) {
    _0x4d43e5["classList"]["remove"](_0x1b99d9(0x384)),
      (_0x4d43e5[_0x1b99d9(0x2d1)][_0x1b99d9(0x2ec)] = _0x1b99d9(0x24f)),
      (_0x4d43e5[_0x1b99d9(0x2d1)]["position"] = ""),
      (_0x4d43e5["style"][_0x1b99d9(0x2f2)] = ""),
      (_0x4d43e5[_0x1b99d9(0x2d1)][_0x1b99d9(0x244)] = ""),
      (_0x4d43e5[_0x1b99d9(0x2d1)]["width"] = ""),
      (_0x4d43e5["style"][_0x1b99d9(0x373)] = ""),
      (_0x4d43e5[_0x1b99d9(0x2d1)][_0x1b99d9(0x411)] = ""),
      (_0x4d43e5[_0x1b99d9(0x2d1)][_0x1b99d9(0x33e)] = "");
    const _0x314796 = _0x4d43e5[_0x1b99d9(0x312)](_0x1b99d9(0x3ac));
    _0x314796 &&
      ((_0x314796[_0x1b99d9(0x2d1)]["width"] = ""),
      (_0x314796[_0x1b99d9(0x2d1)][_0x1b99d9(0x1ed)] = ""),
      (_0x314796[_0x1b99d9(0x2d1)][_0x1b99d9(0x373)] = ""),
      (_0x314796["style"]["margin"] = ""),
      (_0x314796[_0x1b99d9(0x2d1)][_0x1b99d9(0x2ec)] = ""),
      (_0x314796["style"][_0x1b99d9(0x20a)] = ""));
    const _0x255cc2 = _0x4d43e5[_0x1b99d9(0x312)](_0x1b99d9(0x3b9));
    _0x255cc2 &&
      ((_0x255cc2[_0x1b99d9(0x2d1)]["width"] = ""),
      (_0x255cc2[_0x1b99d9(0x2d1)]["height"] = ""),
      (_0x255cc2[_0x1b99d9(0x2d1)][_0x1b99d9(0x3fa)] = ""),
      (_0x255cc2[_0x1b99d9(0x2d1)][_0x1b99d9(0x413)] = ""),
      (_0x255cc2[_0x1b99d9(0x2d1)][_0x1b99d9(0x2ec)] = ""),
      (_0x255cc2[_0x1b99d9(0x2d1)][_0x1b99d9(0x20a)] = ""));
    const _0xdfc574 = _0x4d43e5["querySelector"](_0x1b99d9(0x338));
    _0xdfc574 &&
      ((_0xdfc574["style"][_0x1b99d9(0x280)] = ""),
      (_0xdfc574[_0x1b99d9(0x2d1)]["overflowY"] = ""),
      (_0xdfc574[_0x1b99d9(0x2d1)]["webkitOverflowScrolling"] = ""),
      (_0xdfc574["style"][_0x1b99d9(0x172)] = ""));
  }
  document["body"][_0x1b99d9(0x3e1)][_0x1b99d9(0x1c5)](_0x1b99d9(0x3a4)),
    (document[_0x1b99d9(0x441)][_0x1b99d9(0x2d1)]["overflow"] = "");
  try {
    const _0x36e9b7 = bootstrap[_0x1b99d9(0x3bf)][_0x1b99d9(0x295)](_0x4d43e5);
    _0x36e9b7 && _0x36e9b7[_0x1b99d9(0x24a)]();
  } catch (_0x15834f) {
    console[_0x1b99d9(0x1cd)]("Bootstrap\x20modal\x20no\x20activo");
  }
  try {
    document[_0x1b99d9(0x184)](_0x1b99d9(0x479))[_0x1b99d9(0x2f6)](
      (_0xab1a43) => _0xab1a43["remove"]()
    );
  } catch (_0x433cd0) {}
  try {
    const _0x17f23f = document[_0x1b99d9(0x22d)](_0x1b99d9(0x1cb));
    _0x17f23f &&
      ((_0x17f23f[_0x1b99d9(0x487)] = _0x1b99d9(0x18d)), bringInputIntoView());
  } catch (_0x17eb73) {}
}
async function consultarProductoDesdeModal(_0x39c417) {
  const _0x4368d6 = _0x906661;
  try {
    try {
      cerrarModalMobile();
    } catch (_0x77838f) {}
    const _0x550b46 = document["getElementById"](_0x4368d6(0x23d));
    _0x550b46 &&
      (_0x550b46[_0x4368d6(0x3e1)][_0x4368d6(0x1c5)](_0x4368d6(0x384)),
      (_0x550b46[_0x4368d6(0x2d1)][_0x4368d6(0x2ec)] = _0x4368d6(0x24f)));
    try {
      const _0x2e6498 =
        bootstrap[_0x4368d6(0x3bf)][_0x4368d6(0x295)](_0x550b46);
      if (_0x2e6498) _0x2e6498[_0x4368d6(0x24a)]();
    } catch (_0x268ee7) {}
    document["querySelectorAll"](_0x4368d6(0x40a))[_0x4368d6(0x2f6)](
      (_0x558e68) => _0x558e68[_0x4368d6(0x1c5)]()
    ),
      document["body"]["classList"][_0x4368d6(0x1c5)](_0x4368d6(0x3a4)),
      (document["body"][_0x4368d6(0x2d1)]["overflow"] = "");
    const _0x1f92d4 = await getAllProductos(),
      _0x43839f = _0x1f92d4[_0x4368d6(0x3cd)](
        (_0x515d1a) =>
          String(_0x515d1a["pr_sku"]) === String(_0x39c417) ||
          String(_0x515d1a[_0x4368d6(0x1d3)]) === String(_0x39c417)
      );
    if (_0x43839f) {
      (inputCodigo[_0x4368d6(0x1be)] = ""), mostrarDetalleProducto(_0x43839f);
      const _0xccdb32 = {
        ..._0x43839f,
        FECHA_ESCANEO: new Date()["toISOString"](),
      };
      historial["unshift"](_0xccdb32),
        setCookie(_0x4368d6(0x367), JSON[_0x4368d6(0x31a)](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x320960 = _0x4368d6,
            _0x1de6ab = document["getElementById"](_0x320960(0x44d));
          _0x1de6ab &&
            _0x1de6ab[_0x320960(0x1b2)]({
              behavior: _0x320960(0x196),
              block: _0x320960(0x42e),
              inline: "nearest",
            });
        }, 0x12c);
    } else
      (resultadoDiv[_0x4368d6(0x2ae)] =
        _0x4368d6(0x3a9) + _0x39c417 + _0x4368d6(0x213)),
        setTimeout(() => {
          const _0x13f790 = _0x4368d6;
          resultadoDiv[_0x13f790(0x2ae)] = "";
        }, 0x1388);
  } catch (_0x953ee3) {
    console["error"](_0x4368d6(0x165), _0x953ee3),
      (resultadoDiv[_0x4368d6(0x2ae)] =
        _0x4368d6(0x1e5) + _0x953ee3[_0x4368d6(0x26c)] + _0x4368d6(0x380)),
      setTimeout(() => {
        const _0x1a31f4 = _0x4368d6;
        resultadoDiv[_0x1a31f4(0x2ae)] = "";
      }, 0x1388);
  }
}
async function consultarProductoDesdeHistorial(_0x562b06) {
  const _0x5b4c43 = _0x906661;
  try {
    const _0x326b56 = await getAllProductos(),
      _0x146937 = _0x326b56[_0x5b4c43(0x3cd)](
        (_0x9cad9f) =>
          String(_0x9cad9f[_0x5b4c43(0x48a)]) === String(_0x562b06) ||
          String(_0x9cad9f[_0x5b4c43(0x1d3)]) === String(_0x562b06)
      );
    if (_0x146937) {
      (inputCodigo["value"] = ""), mostrarDetalleProducto(_0x146937);
      const _0xf79e11 = historial[_0x5b4c43(0x353)](
        (_0xb84ad1) =>
          (_0xb84ad1[_0x5b4c43(0x48a)] &&
            String(_0xb84ad1["pr_sku"]) === String(_0x562b06)) ||
          (_0xb84ad1[_0x5b4c43(0x1d3)] &&
            String(_0xb84ad1[_0x5b4c43(0x1d3)]) === String(_0x562b06))
      );
      if (_0xf79e11 !== -0x1) {
        const _0x4689a2 = historial[_0x5b4c43(0x2c6)](_0xf79e11, 0x1)[0x0];
        (_0x4689a2[_0x5b4c43(0x2b6)] = new Date()[_0x5b4c43(0x3c5)]()),
          historial[_0x5b4c43(0x1cf)](_0x4689a2),
          setCookie(_0x5b4c43(0x367), JSON[_0x5b4c43(0x31a)](historial), 0x1e),
          renderHistorial();
      }
      setTimeout(() => {
        const _0x3ec204 = _0x5b4c43,
          _0x4c651c = document["getElementById"](_0x3ec204(0x44d));
        _0x4c651c &&
          _0x4c651c["scrollIntoView"]({
            behavior: "smooth",
            block: "start",
            inline: _0x3ec204(0x1fe),
          });
      }, 0x12c);
    } else
      (resultadoDiv[_0x5b4c43(0x2ae)] =
        _0x5b4c43(0x3a9) + _0x562b06 + _0x5b4c43(0x213)),
        setTimeout(() => {
          const _0x31cffd = _0x5b4c43;
          resultadoDiv[_0x31cffd(0x2ae)] = "";
        }, 0x1388);
  } catch (_0x1de341) {
    console[_0x5b4c43(0x169)](_0x5b4c43(0x3a0), _0x1de341),
      (resultadoDiv[_0x5b4c43(0x2ae)] =
        _0x5b4c43(0x1e5) + _0x1de341[_0x5b4c43(0x26c)] + _0x5b4c43(0x380)),
      setTimeout(() => {
        resultadoDiv["innerHTML"] = "";
      }, 0x1388);
  }
}
(window[_0x906661(0x3e6)] = mostrarModalPromocionesGenerales),
  (window[_0x906661(0x20f)] = consultarProductoDesdeModal),
  (window[_0x906661(0x29b)] = consultarProductoDesdeHistorial);
async function tienePromociones(_0x4b36b5) {
  const _0x1265a2 = _0x906661;
  try {
    const _0x2ec386 = (_0x4b36b5[_0x1265a2(0x48a)] || "")["toString"]();
    if (!_0x2ec386) return ![];
    const _0x353f40 = await getAllPromociones();
    if (_0x353f40[_0x1265a2(0x330)] === 0x0) return ![];
    for (const _0x358b04 of _0x353f40) {
      let _0x389035 = [];
      if (
        _0x358b04[_0x1265a2(0x385)] &&
        Array["isArray"](_0x358b04[_0x1265a2(0x385)])
      )
        _0x389035 = _0x358b04[_0x1265a2(0x385)];
      else
        _0x358b04[_0x1265a2(0x3ef)] &&
          _0x358b04[_0x1265a2(0x3ef)][_0x1265a2(0x48a)] &&
          (Array[_0x1265a2(0x1c0)](
            _0x358b04["pro_grupoProductos_primaria"][_0x1265a2(0x48a)]
          )
            ? (_0x389035 = _0x358b04[_0x1265a2(0x3ef)][_0x1265a2(0x48a)])
            : (_0x389035 = _0x358b04[_0x1265a2(0x3ef)][_0x1265a2(0x48a)]
                [_0x1265a2(0x3b7)]("\x20")
                ["filter"]((_0x39f015) => _0x39f015[_0x1265a2(0x2c4)]())));
      if (_0x389035[_0x1265a2(0x3d6)](_0x2ec386)) return !![];
    }
    return ![];
  } catch (_0x375049) {
    return (
      console[_0x1265a2(0x21a)](
        "Error\x20verificando\x20promociones:",
        _0x375049
      ),
      ![]
    );
  }
}
let searchTimeout;
inputCodigo["addEventListener"](_0x906661(0x2f8), async function (_0x5398c2) {
  const _0x1d8361 = _0x906661,
    _0x1d92e4 = inputCodigo[_0x1d8361(0x1be)]
      [_0x1d8361(0x2c4)]()
      [_0x1d8361(0x2f1)]();
  clearTimeout(searchTimeout), (sugerenciasDiv[_0x1d8361(0x2ae)] = "");
  if (!_0x1d92e4 || _0x1d92e4["length"] < 0x2) {
    sugerenciasDiv[_0x1d8361(0x2d1)][_0x1d8361(0x2ec)] = "none";
    return;
  }
  searchTimeout = setTimeout(async () => {
    const _0x4f8f41 = _0x1d8361;
    let _0x352ba4 = await getAllProductos(),
      _0x392023 = _0x352ba4[_0x4f8f41(0x38f)]((_0x3d105e) => {
        const _0x242dd5 = _0x4f8f41;
        return (
          (_0x3d105e[_0x242dd5(0x416)] &&
            _0x3d105e[_0x242dd5(0x416)]
              [_0x242dd5(0x2f1)]()
              [_0x242dd5(0x3d6)](_0x1d92e4)) ||
          (_0x3d105e[_0x242dd5(0x48a)] &&
            String(_0x3d105e[_0x242dd5(0x48a)])
              [_0x242dd5(0x2f1)]()
              [_0x242dd5(0x3d6)](_0x1d92e4)) ||
          (_0x3d105e["pr_gtin"] &&
            String(_0x3d105e[_0x242dd5(0x1d3)])
              [_0x242dd5(0x2f1)]()
              [_0x242dd5(0x3d6)](_0x1d92e4))
        );
      });
    const _0x5b59ad = new Set();
    _0x392023 = _0x392023[_0x4f8f41(0x38f)]((_0x536f31) => {
      const _0x41f298 = _0x4f8f41,
        _0x285ee2 = _0x536f31[_0x41f298(0x48a)] || _0x536f31[_0x41f298(0x1d3)];
      if (!_0x285ee2 || _0x5b59ad["has"](_0x285ee2)) return ![];
      return _0x5b59ad[_0x41f298(0x2a6)](_0x285ee2), !![];
    });
    if (_0x392023[_0x4f8f41(0x330)] === 0x0) {
      sugerenciasDiv[_0x4f8f41(0x2d1)][_0x4f8f41(0x2ec)] = _0x4f8f41(0x24f);
      return;
    }
    _0x392023["sort"]((_0x4eae4e, _0x187fca) => {
      const _0x1d48a5 = _0x4f8f41,
        _0x17d0d = (_0x4eae4e[_0x1d48a5(0x416)] || "")[_0x1d48a5(0x2f1)](),
        _0x5938e8 = (_0x187fca[_0x1d48a5(0x416)] || "")[_0x1d48a5(0x2f1)](),
        _0x123665 = _0x17d0d[_0x1d48a5(0x2e2)](_0x1d92e4),
        _0x134642 = _0x5938e8[_0x1d48a5(0x2e2)](_0x1d92e4);
      if (_0x123665 && !_0x134642) return -0x1;
      if (!_0x123665 && _0x134642) return 0x1;
      return _0x17d0d["length"] - _0x5938e8["length"];
    }),
      (_0x392023 = _0x392023["slice"](0x0, 0xa));
    const _0x456d43 = _0x392023[_0x4f8f41(0x22c)]((_0x22bf3e) =>
        tienePromociones(_0x22bf3e)
      ),
      _0x13c39d = await Promise["all"](_0x456d43);
    _0x392023[_0x4f8f41(0x2f6)]((_0x28eea3, _0x4cf0b2) => {
      const _0xff1fa9 = _0x4f8f41,
        _0x4972c2 = _0x13c39d[_0x4cf0b2],
        _0x4d5788 = document["createElement"](_0xff1fa9(0x2ad));
      (_0x4d5788[_0xff1fa9(0x1e6)] = "button"),
        (_0x4d5788[_0xff1fa9(0x314)] =
          "list-group-item\x20list-group-item-action\x20d-flex\x20align-items-center");
      let _0x56918c = "";
      if (
        _0x28eea3["pr_imagen"] &&
        _0x28eea3["pr_imagen"][_0xff1fa9(0x2c4)]() !== ""
      ) {
        let _0x41f2ff = "";
        if (_0x28eea3[_0xff1fa9(0x294)]["startsWith"](_0xff1fa9(0x28c)))
          _0x41f2ff = _0x28eea3[_0xff1fa9(0x294)];
        else {
          let _0x5e9729 = _0x28eea3[_0xff1fa9(0x294)][_0xff1fa9(0x2e2)]("/")
            ? _0x28eea3[_0xff1fa9(0x294)]
            : "/" + _0x28eea3["pr_imagen"];
          _0x41f2ff = _0xff1fa9(0x393) + _0x5e9729;
        }
        _0x56918c =
          _0xff1fa9(0x2db) +
          _0x41f2ff +
          _0xff1fa9(0x1dc) +
          _0x28eea3[_0xff1fa9(0x416)] +
          _0xff1fa9(0x2dd);
      }
      const _0x16aa1f = _0x4972c2 ? _0xff1fa9(0x1ca) : "";
      (_0x4d5788[_0xff1fa9(0x2ae)] =
        _0xff1fa9(0x211) +
        _0x56918c +
        _0xff1fa9(0x429) +
        _0x28eea3[_0xff1fa9(0x416)] +
        _0xff1fa9(0x1c7) +
        _0x16aa1f +
        _0xff1fa9(0x1b8) +
        (_0x28eea3[_0xff1fa9(0x48a)] || _0x28eea3[_0xff1fa9(0x1d3)] || "") +
        _0xff1fa9(0x396)),
        (_0x4d5788[_0xff1fa9(0x204)] = function () {
          const _0x4e1468 = _0xff1fa9;
          mostrarDetalleProducto(_0x28eea3);
          const _0x4bd075 = {
            ..._0x28eea3,
            FECHA_ESCANEO: new Date()[_0x4e1468(0x3c5)](),
          };
          historial[_0x4e1468(0x1cf)](_0x4bd075),
            setCookie("historial", JSON["stringify"](historial), 0x1e),
            renderHistorial(),
            (inputCodigo[_0x4e1468(0x1be)] = ""),
            (sugerenciasDiv["innerHTML"] = ""),
            (sugerenciasDiv["style"][_0x4e1468(0x2ec)] = _0x4e1468(0x24f));
        }),
        sugerenciasDiv[_0xff1fa9(0x355)](_0x4d5788);
    }),
      (sugerenciasDiv[_0x4f8f41(0x2d1)][_0x4f8f41(0x2ec)] = "block");
  }, 0x12c);
}),
  document[_0x906661(0x33c)](_0x906661(0x47f), function (_0x2509a8) {
    const _0x183339 = _0x906661;
    !inputCodigo[_0x183339(0x434)](_0x2509a8[_0x183339(0x322)]) &&
      !sugerenciasDiv["contains"](_0x2509a8[_0x183339(0x322)]) &&
      ((sugerenciasDiv[_0x183339(0x2ae)] = ""),
      (sugerenciasDiv[_0x183339(0x2d1)]["display"] = _0x183339(0x24f)));
  });
function iniciarScanner() {
  const _0x2ed3ac = _0x906661;
  if (scannerActivo) return;
  try {
    (inputCodigo[_0x2ed3ac(0x1be)] = ""),
      (inputCodigo[_0x2ed3ac(0x487)] =
        "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto"),
      (sugerenciasDiv[_0x2ed3ac(0x2ae)] = ""),
      (sugerenciasDiv[_0x2ed3ac(0x2d1)][_0x2ed3ac(0x2ec)] = _0x2ed3ac(0x24f));
  } catch (_0x2b0d39) {}
  navigator[_0x2ed3ac(0x449)]
    [_0x2ed3ac(0x30c)]({ video: !![] })
    ["then"]((_0x324d59) => {
      const _0x420cc7 = _0x2ed3ac;
      _0x324d59["getTracks"]()[_0x420cc7(0x2f6)]((_0x2fff95) =>
        _0x2fff95[_0x420cc7(0x45b)]()
      ),
        (scannerActivo = !![]),
        (readerDiv[_0x420cc7(0x2d1)][_0x420cc7(0x2ec)] = _0x420cc7(0x32f)),
        document[_0x420cc7(0x22d)](_0x420cc7(0x2c2))[_0x420cc7(0x1b2)]({
          behavior: _0x420cc7(0x196),
          block: _0x420cc7(0x23c),
        }),
        (ayudaTexto[_0x420cc7(0x2d1)]["display"] = _0x420cc7(0x32f));
      const _0x1bc30c = new Html5Qrcode("reader"),
        _0xb7cb66 = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: _0x420cc7(0x226),
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x2ba20d, _0x19cd4e) {
            const _0x4d09eb = _0x420cc7,
              _0x59d6cc = Math[_0x4d09eb(0x3fc)](0x12c, _0x2ba20d * 0.9),
              _0x3f77d9 = 0x64;
            return { width: _0x59d6cc, height: _0x3f77d9 };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x420cc7(0x2da)],
            Html5QrcodeSupportedFormats[_0x420cc7(0x492)],
            Html5QrcodeSupportedFormats[_0x420cc7(0x1a1)],
            Html5QrcodeSupportedFormats[_0x420cc7(0x1d0)],
            Html5QrcodeSupportedFormats[_0x420cc7(0x18c)],
            Html5QrcodeSupportedFormats["CODE_39"],
            Html5QrcodeSupportedFormats[_0x420cc7(0x264)],
            Html5QrcodeSupportedFormats["CODABAR"],
            Html5QrcodeSupportedFormats[_0x420cc7(0x206)],
            Html5QrcodeSupportedFormats[_0x420cc7(0x27d)],
            Html5QrcodeSupportedFormats[_0x420cc7(0x446)],
            Html5QrcodeSupportedFormats["AZTEC"],
            Html5QrcodeSupportedFormats[_0x420cc7(0x3f5)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x1bc30c[_0x420cc7(0x42e)](
        { facingMode: _0x420cc7(0x226) },
        _0xb7cb66,
        (_0x2341d2) => {
          const _0x427190 = _0x420cc7;
          (inputCodigo[_0x427190(0x1be)] = _0x2341d2["trim"]()["replace"](
            /\s+$/,
            ""
          )),
            _0x1bc30c[_0x427190(0x45b)]()[_0x427190(0x340)](() => {
              const _0x34e839 = _0x427190;
              (readerDiv[_0x34e839(0x2d1)][_0x34e839(0x2ec)] =
                _0x34e839(0x24f)),
                (ayudaTexto[_0x34e839(0x2d1)]["display"] = _0x34e839(0x24f)),
                (scannerActivo = ![]),
                _0x1bc30c["clear"](),
                form[_0x34e839(0x3f1)](),
                setTimeout(() => {
                  const _0x2b5203 = _0x34e839,
                    _0x31d009 = document[_0x2b5203(0x22d)]("resultado");
                  _0x31d009 &&
                    _0x31d009[_0x2b5203(0x1b2)]({
                      behavior: _0x2b5203(0x196),
                      block: "start",
                      inline: _0x2b5203(0x1fe),
                    });
                  try {
                    bringInputIntoView();
                  } catch (_0x14f478) {}
                }, 0x1f4);
            });
        },
        (_0x53bfa1) => {}
      )
        [_0x420cc7(0x340)](() => {
          setTimeout(() => {
            const _0x138500 = _0x5145,
              _0x148960 = readerDiv["querySelector"](_0x138500(0x2a5));
            if (_0x148960) {
              const _0x2f21e3 =
                _0x148960[_0x138500(0x16f)][_0x138500(0x40d)]()[0x0];
              _0x2f21e3[_0x138500(0x2ab)]({
                focusMode: "continuous",
                advanced: [{ zoom: 0x2 }],
              })
                [_0x138500(0x340)](() => {})
                [_0x138500(0x1d5)]((_0x7759fc) => {});
            }
          }, 0x7d0);
        })
        ["catch"]((_0x2c258a) => {
          const _0xd6c514 = _0x420cc7;
          (scannerActivo = ![]),
            (resultadoDiv[_0xd6c514(0x2ae)] =
              _0xd6c514(0x32a) + _0x2c258a + _0xd6c514(0x3fb)),
            renderHistorial();
        });
      const _0x50a7d8 = new MutationObserver(() => {
        const _0x538022 = _0x420cc7,
          _0x39ad61 = readerDiv[_0x538022(0x312)](_0x538022(0x2a5));
        _0x39ad61 &&
          (_0x39ad61[_0x538022(0x407)](_0x538022(0x16c), ""),
          _0x39ad61[_0x538022(0x407)](_0x538022(0x47c), ""),
          _0x39ad61["setAttribute"](_0x538022(0x41d), ""),
          _0x50a7d8[_0x538022(0x341)]());
      });
      _0x50a7d8[_0x420cc7(0x1b0)](readerDiv, {
        childList: !![],
        subtree: !![],
      });
    })
    [_0x2ed3ac(0x1d5)]((_0x44965c) => {
      const _0x34248e = _0x2ed3ac;
      (resultadoDiv[_0x34248e(0x2ae)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>"),
        renderHistorial();
    });
}
const fileInput = document[_0x906661(0x22d)](_0x906661(0x2df));
fileInput["addEventListener"](_0x906661(0x1a6), async (_0x486d50) => {
  const _0x1c8866 = _0x906661,
    _0x4a52f0 = _0x486d50["target"][_0x1c8866(0x28e)][0x0];
  if (!_0x4a52f0) return;
  try {
    (inputCodigo["value"] = ""),
      (inputCodigo[_0x1c8866(0x487)] = _0x1c8866(0x198)),
      (sugerenciasDiv[_0x1c8866(0x2ae)] = ""),
      (sugerenciasDiv["style"][_0x1c8866(0x2ec)] = _0x1c8866(0x24f));
  } catch (_0x123e1f) {}
  resultadoDiv[_0x1c8866(0x2ae)] = _0x1c8866(0x247);
  try {
    const _0x258c11 = new Image(),
      _0x4563b4 = new Promise((_0xac73a, _0x5af40e) => {
        const _0x3c441a = _0x1c8866;
        (_0x258c11[_0x3c441a(0x240)] = _0xac73a),
          (_0x258c11[_0x3c441a(0x1bf)] = _0x5af40e),
          (_0x258c11[_0x3c441a(0x3f3)] = URL["createObjectURL"](_0x4a52f0));
      });
    await _0x4563b4;
    if (
      GOOGLE_VISION_CONFIG["enabled"] &&
      visionUsageTracker[_0x1c8866(0x365)]()
    ) {
      console["log"]("🚀\x20Intentando\x20con\x20Google\x20Vision\x20API...");
      try {
        const _0x91738c = await detectarConGoogleVision(_0x258c11);
        if (_0x91738c) {
          console[_0x1c8866(0x1cd)](_0x1c8866(0x2c9), _0x91738c),
            (inputCodigo[_0x1c8866(0x1be)] = _0x91738c),
            form[_0x1c8866(0x3f1)](),
            URL[_0x1c8866(0x390)](_0x258c11["src"]),
            (fileInput["value"] = "");
          return;
        }
      } catch (_0x3f12af) {
        console[_0x1c8866(0x1cd)](
          _0x1c8866(0x2ee),
          _0x3f12af[_0x1c8866(0x26c)]
        );
        if (_0x3f12af[_0x1c8866(0x26c)][_0x1c8866(0x3d6)](_0x1c8866(0x3e5)))
          console[_0x1c8866(0x1cd)](_0x1c8866(0x2fe));
        else {
          if (_0x3f12af[_0x1c8866(0x26c)][_0x1c8866(0x3d6)](_0x1c8866(0x19b)))
            console["log"](_0x1c8866(0x391)),
              _0x3f12af[_0x1c8866(0x26c)][_0x1c8866(0x3d6)]("BILLING_DISABLED")
                ? (console[_0x1c8866(0x1cd)](_0x1c8866(0x40b)),
                  console[_0x1c8866(0x1cd)](_0x1c8866(0x47d)))
                : console[_0x1c8866(0x1cd)](
                    "💡\x20Verifica\x20la\x20configuración\x20de\x20GOOGLE_VISION_API_KEY\x20en\x20Vercel"
                  );
          else
            _0x3f12af[_0x1c8866(0x26c)][_0x1c8866(0x3d6)](_0x1c8866(0x412)) &&
              console[_0x1c8866(0x1cd)](_0x1c8866(0x41c));
        }
      }
    } else {
      if (
        GOOGLE_VISION_CONFIG[_0x1c8866(0x1a5)] &&
        !visionUsageTracker[_0x1c8866(0x365)]()
      ) {
        const _0xd112e2 = visionUsageTracker["getUsageStatus"]();
        console["log"](
          _0x1c8866(0x26d) +
            _0xd112e2[_0x1c8866(0x3f0)] +
            "/" +
            _0xd112e2[_0x1c8866(0x2ea)] +
            _0x1c8866(0x3a1) +
            _0xd112e2["dailyUsed"] +
            "/" +
            _0xd112e2["dailyLimit"]
        );
      }
    }
    if (_0x1c8866(0x3dc) in window) {
      console[_0x1c8866(0x1cd)](
        "🚀\x20Usando\x20Barcode\x20Detection\x20API\x20nativa"
      );
      try {
        const _0x54754e = [
            _0x1c8866(0x18f),
            _0x1c8866(0x3a7),
            _0x1c8866(0x1c8),
            _0x1c8866(0x30e),
            _0x1c8866(0x28d),
            _0x1c8866(0x1c3),
            "ean_13",
            _0x1c8866(0x222),
            "itf",
            _0x1c8866(0x2a3),
            "qr_code",
            _0x1c8866(0x408),
            "upc_e",
          ],
          _0x22044c = new BarcodeDetector({ formats: _0x54754e }),
          _0x35e970 = await _0x22044c[_0x1c8866(0x326)](_0x258c11);
        console[_0x1c8866(0x1cd)](
          "🔍\x20Códigos\x20detectados\x20por\x20API\x20nativa:\x20" +
            _0x35e970[_0x1c8866(0x330)],
          _0x35e970
        );
        if (_0x35e970[_0x1c8866(0x330)] > 0x0) {
          const _0x540572 = _0x35e970[_0x1c8866(0x38f)]((_0x442972) => {
            const _0x582f53 = _0x1c8866,
              _0x167689 = _0x442972[_0x582f53(0x283)][_0x582f53(0x2c4)]();
            console["log"](
              _0x582f53(0x2b4) +
                _0x167689 +
                _0x582f53(0x3a6) +
                _0x442972[_0x582f53(0x193)] +
                _0x582f53(0x237) +
                _0x167689[_0x582f53(0x330)]
            );
            switch (_0x442972[_0x582f53(0x193)]) {
              case _0x582f53(0x3bc):
                return (
                  _0x167689[_0x582f53(0x330)] === 0xd &&
                  /^\d{13}$/[_0x582f53(0x3b4)](_0x167689)
                );
              case _0x582f53(0x408):
                return (
                  _0x167689[_0x582f53(0x330)] === 0xc &&
                  /^\d{12}$/[_0x582f53(0x3b4)](_0x167689)
                );
              case _0x582f53(0x222):
                return (
                  _0x167689["length"] === 0x8 &&
                  /^\d{8}$/[_0x582f53(0x3b4)](_0x167689)
                );
              case _0x582f53(0x1a2):
                return (
                  _0x167689[_0x582f53(0x330)] >= 0x6 &&
                  _0x167689[_0x582f53(0x330)] <= 0x8 &&
                  /^\d+$/[_0x582f53(0x3b4)](_0x167689)
                );
              case _0x582f53(0x3a7):
                return (
                  _0x167689["length"] >= 0x1 && _0x167689["length"] <= 0x32
                );
              case _0x582f53(0x1c8):
                return (
                  _0x167689[_0x582f53(0x330)] >= 0x1 &&
                  /^[A-Z0-9\-. $\/+%*]+$/[_0x582f53(0x3b4)](_0x167689)
                );
              case _0x582f53(0x30e):
                return (
                  _0x167689[_0x582f53(0x330)] >= 0x1 &&
                  _0x167689["length"] <= 0x32
                );
              case _0x582f53(0x28d):
                return (
                  _0x167689[_0x582f53(0x330)] >= 0x3 &&
                  /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x582f53(0x3b4)](_0x167689)
                );
              case _0x582f53(0x395):
                return (
                  _0x167689[_0x582f53(0x330)] >= 0x2 &&
                  _0x167689[_0x582f53(0x330)] % 0x2 === 0x0 &&
                  /^\d+$/[_0x582f53(0x3b4)](_0x167689)
                );
              case _0x582f53(0x335):
                return (
                  _0x167689["length"] >= 0x1 &&
                  _0x167689[_0x582f53(0x330)] <= 0x10c8
                );
              case _0x582f53(0x1c3):
                return (
                  _0x167689["length"] >= 0x1 &&
                  _0x167689[_0x582f53(0x330)] <= 0xc2c
                );
              case _0x582f53(0x2a3):
                return (
                  _0x167689[_0x582f53(0x330)] >= 0x1 &&
                  _0x167689[_0x582f53(0x330)] <= 0xa96
                );
              case _0x582f53(0x18f):
                return (
                  _0x167689[_0x582f53(0x330)] >= 0x1 &&
                  _0x167689[_0x582f53(0x330)] <= 0xef8
                );
              default:
                return (
                  _0x167689[_0x582f53(0x330)] >= 0x1 &&
                  _0x167689[_0x582f53(0x330)] <= 0x64
                );
            }
          });
          console[_0x1c8866(0x1cd)](
            _0x1c8866(0x1f6) + _0x540572[_0x1c8866(0x330)]
          );
          if (_0x540572["length"] > 0x0) {
            const _0xf2a446 = {
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
              _0x125d1e = _0x540572[_0x1c8866(0x31d)](
                (_0x1f83e7, _0x48f677) => {
                  const _0x17253 = _0x1c8866,
                    _0x2d07c3 =
                      (_0xf2a446[_0x48f677["format"]] || 0x0) -
                      (_0xf2a446[_0x1f83e7[_0x17253(0x193)]] || 0x0);
                  if (_0x2d07c3 !== 0x0) return _0x2d07c3;
                  if (
                    [
                      _0x17253(0x3bc),
                      "upc_a",
                      _0x17253(0x222),
                      "upc_e",
                      "code_128",
                      _0x17253(0x1c8),
                      "code_93",
                      _0x17253(0x395),
                      _0x17253(0x28d),
                    ]["includes"](_0x1f83e7["format"])
                  ) {
                    const _0x42dda8 =
                        _0x1f83e7["boundingBox"][_0x17253(0x36a)] *
                        _0x1f83e7[_0x17253(0x171)]["height"],
                      _0x4fc0f0 =
                        _0x48f677[_0x17253(0x171)][_0x17253(0x36a)] *
                        _0x48f677[_0x17253(0x171)]["height"];
                    return _0x4fc0f0 - _0x42dda8;
                  }
                  const _0x4d6b96 =
                      _0x1f83e7[_0x17253(0x171)]["x"] +
                      _0x1f83e7[_0x17253(0x171)][_0x17253(0x36a)] / 0x2,
                    _0x3b32e0 =
                      _0x48f677[_0x17253(0x171)]["x"] +
                      _0x48f677[_0x17253(0x171)][_0x17253(0x36a)] / 0x2,
                    _0x1ec252 = _0x258c11[_0x17253(0x36a)] / 0x2;
                  return (
                    Math[_0x17253(0x19a)](_0x4d6b96 - _0x1ec252) -
                    Math[_0x17253(0x19a)](_0x3b32e0 - _0x1ec252)
                  );
                }
              ),
              _0x353b99 = _0x125d1e[0x0],
              _0x3c7bf7 = _0x353b99[_0x1c8866(0x283)]
                [_0x1c8866(0x2c4)]()
                ["replace"](/\s+$/, "");
            console[_0x1c8866(0x1cd)](
              _0x1c8866(0x37d) +
                _0x3c7bf7 +
                _0x1c8866(0x291) +
                _0x353b99[_0x1c8866(0x193)] +
                ")"
            ),
              (inputCodigo[_0x1c8866(0x1be)] = _0x3c7bf7),
              form[_0x1c8866(0x3f1)](),
              URL[_0x1c8866(0x390)](_0x258c11[_0x1c8866(0x3f3)]),
              (fileInput[_0x1c8866(0x1be)] = "");
            return;
          }
        }
        console[_0x1c8866(0x1cd)](
          "⚠️\x20API\x20nativa\x20no\x20detectó\x20códigos\x20válidos"
        );
      } catch (_0x5d4e40) {
        console[_0x1c8866(0x1cd)](_0x1c8866(0x2ac), _0x5d4e40);
      }
    } else console[_0x1c8866(0x1cd)](_0x1c8866(0x170));
    console[_0x1c8866(0x1cd)]("📸\x20Usando\x20Quagga\x20como\x20fallback"),
      usarQuaggaFallback(_0x258c11);
  } catch (_0x207db1) {
    console["error"](_0x1c8866(0x40f), _0x207db1),
      (resultadoDiv["innerHTML"] = _0x1c8866(0x463)),
      renderHistorial(),
      (fileInput[_0x1c8866(0x1be)] = "");
  }
});
function usarQuaggaFallback(_0x173b3b) {
  const _0x576bc3 = _0x906661;
  console["log"](_0x576bc3(0x180));
  const _0x11aadc = document[_0x576bc3(0x469)](_0x576bc3(0x2b7)),
    _0x5212d5 = _0x11aadc[_0x576bc3(0x23f)]("2d");
  let { width: _0x330007, height: _0x29597e } = _0x173b3b;
  const _0x9f9671 = 0x190;
  if (_0x330007 < _0x9f9671 || _0x29597e < _0x9f9671) {
    const _0x20c99f =
      Math[_0x576bc3(0x448)](_0x9f9671 / _0x330007, _0x9f9671 / _0x29597e) *
      1.5;
    (_0x330007 *= _0x20c99f),
      (_0x29597e *= _0x20c99f),
      console[_0x576bc3(0x1cd)](
        _0x576bc3(0x2a1) +
          _0x173b3b[_0x576bc3(0x36a)] +
          "x" +
          _0x173b3b["height"] +
          _0x576bc3(0x2d9) +
          _0x330007 +
          "x" +
          _0x29597e
      );
  }
  const _0x1a6b07 = 0x5dc;
  if (_0x330007 > _0x1a6b07 || _0x29597e > _0x1a6b07) {
    const _0x31261b = Math["min"](_0x1a6b07 / _0x330007, _0x1a6b07 / _0x29597e);
    (_0x330007 *= _0x31261b), (_0x29597e *= _0x31261b);
  }
  (_0x11aadc["width"] = _0x330007),
    (_0x11aadc[_0x576bc3(0x373)] = _0x29597e),
    (_0x5212d5[_0x576bc3(0x3dd)] = ![]),
    _0x5212d5[_0x576bc3(0x19d)](_0x173b3b, 0x0, 0x0, _0x330007, _0x29597e);
  const _0x304219 = _0x5212d5["getImageData"](0x0, 0x0, _0x330007, _0x29597e),
    _0x2cefe0 = _0x304219[_0x576bc3(0x1bd)];
  let _0xea6504 = new Array(0x100)["fill"](0x0);
  for (let _0x2dfb41 = 0x0; _0x2dfb41 < _0x2cefe0["length"]; _0x2dfb41 += 0x4) {
    const _0x2b77e6 = Math["round"](
      0.299 * _0x2cefe0[_0x2dfb41] +
        0.587 * _0x2cefe0[_0x2dfb41 + 0x1] +
        0.114 * _0x2cefe0[_0x2dfb41 + 0x2]
    );
    _0xea6504[_0x2b77e6]++;
  }
  let _0x246375 = 0x80,
    _0x34a09e = 0x0;
  const _0x148195 = _0x330007 * _0x29597e;
  for (let _0x344ebc = 0x0; _0x344ebc < 0x100; _0x344ebc++) {
    let _0x531d2e = 0x0,
      _0x140d20 = 0x0,
      _0x248744 = 0x0,
      _0x450333 = 0x0;
    for (let _0x54e540 = 0x0; _0x54e540 <= _0x344ebc; _0x54e540++) {
      (_0x531d2e += _0xea6504[_0x54e540]),
        (_0x248744 += _0x54e540 * _0xea6504[_0x54e540]);
    }
    for (let _0x4a654c = _0x344ebc + 0x1; _0x4a654c < 0x100; _0x4a654c++) {
      (_0x140d20 += _0xea6504[_0x4a654c]),
        (_0x450333 += _0x4a654c * _0xea6504[_0x4a654c]);
    }
    if (_0x531d2e === 0x0 || _0x140d20 === 0x0) continue;
    const _0x6b5c27 = _0x248744 / _0x531d2e,
      _0x5bc440 = _0x450333 / _0x140d20,
      _0x262872 =
        _0x531d2e *
        _0x140d20 *
        (_0x6b5c27 - _0x5bc440) *
        (_0x6b5c27 - _0x5bc440);
    _0x262872 > _0x34a09e && ((_0x34a09e = _0x262872), (_0x246375 = _0x344ebc));
  }
  console[_0x576bc3(0x1cd)](_0x576bc3(0x299) + _0x246375);
  const _0x174666 = new Uint8ClampedArray(_0x2cefe0);
  for (
    let _0x4c5890 = 0x0;
    _0x4c5890 < _0x2cefe0[_0x576bc3(0x330)];
    _0x4c5890 += 0x4
  ) {
    const _0x10d195 = Math[_0x576bc3(0x42a)](
        0.299 * _0x2cefe0[_0x4c5890] +
          0.587 * _0x2cefe0[_0x4c5890 + 0x1] +
          0.114 * _0x2cefe0[_0x4c5890 + 0x2]
      ),
      _0x11b962 = _0x10d195 > _0x246375 ? 0xff : 0x0;
    (_0x2cefe0[_0x4c5890] = _0x11b962),
      (_0x2cefe0[_0x4c5890 + 0x1] = _0x11b962),
      (_0x2cefe0[_0x4c5890 + 0x2] = _0x11b962);
  }
  _0x5212d5["putImageData"](_0x304219, 0x0, 0x0);
  let _0x4c8da0 = _0x11aadc["toDataURL"]("image/png");
  const _0x104fe1 = _0x5212d5[_0x576bc3(0x34e)](_0x330007, _0x29597e),
    _0x326fae = _0x104fe1[_0x576bc3(0x1bd)];
  for (
    let _0x9e8269 = 0x0;
    _0x9e8269 < _0x174666[_0x576bc3(0x330)];
    _0x9e8269 += 0x4
  ) {
    const _0x26eb52 = Math[_0x576bc3(0x42a)](
        0.299 * _0x174666[_0x9e8269] +
          0.587 * _0x174666[_0x9e8269 + 0x1] +
          0.114 * _0x174666[_0x9e8269 + 0x2]
      ),
      _0x225114 = _0x26eb52 > _0x246375 * 0.7 ? 0xff : 0x0;
    (_0x326fae[_0x9e8269] = _0x225114),
      (_0x326fae[_0x9e8269 + 0x1] = _0x225114),
      (_0x326fae[_0x9e8269 + 0x2] = _0x225114),
      (_0x326fae[_0x9e8269 + 0x3] = 0xff);
  }
  const _0x353e62 = document["createElement"]("canvas");
  (_0x353e62["width"] = _0x330007), (_0x353e62[_0x576bc3(0x373)] = _0x29597e);
  const _0x18db95 = _0x353e62[_0x576bc3(0x23f)]("2d");
  _0x18db95[_0x576bc3(0x179)](_0x104fe1, 0x0, 0x0);
  const _0x575fb2 = _0x353e62[_0x576bc3(0x194)](_0x576bc3(0x166)),
    _0x1ee5dc = {
      src: _0x4c8da0,
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: { size: Math[_0x576bc3(0x448)](_0x330007, _0x29597e) },
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
          _0x576bc3(0x1d6),
          _0x576bc3(0x42f),
          _0x576bc3(0x457),
          _0x576bc3(0x43e),
          _0x576bc3(0x41b),
          _0x576bc3(0x2fc),
          _0x576bc3(0x432),
          _0x576bc3(0x497),
          _0x576bc3(0x16a),
          "i2of5_reader",
          _0x576bc3(0x30f),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
  console["log"](_0x576bc3(0x2d5));
  const _0xf7fd46 = (_0x43017d, _0x38c0d1, _0x444e61) => {
    const _0x1290a4 = _0x576bc3;
    console[_0x1290a4(0x1cd)](_0x1290a4(0x316) + _0x38c0d1);
    const _0x515f54 = {
      src: _0x43017d,
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: { size: Math["max"](_0x330007, _0x29597e) },
      locator: {
        patchSize: _0x38c0d1 === _0x1290a4(0x1f4) ? _0x1290a4(0x1ab) : "large",
        halfSample: _0x38c0d1 === _0x1290a4(0x398) ? !![] : ![],
        debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
      },
      decoder: {
        readers: [
          _0x1290a4(0x1d6),
          _0x1290a4(0x42f),
          "upc_reader",
          _0x1290a4(0x43e),
          _0x1290a4(0x41b),
          _0x1290a4(0x2fc),
          "code_39_vin_reader",
          _0x1290a4(0x497),
          "codabar_reader",
          _0x1290a4(0x2f4),
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
    Quagga[_0x1290a4(0x1eb)](_0x515f54, _0x444e61);
  };
  let _0x2640d5 = [];
  _0xf7fd46(_0x4c8da0, _0x576bc3(0x447), function (_0x5c9d64) {
    const _0x42d3f6 = _0x576bc3;
    if (_0x5c9d64 && _0x5c9d64["codeResult"]) {
      let _0x3dd41c = _0x5c9d64["codeResult"]["code"]
        ["trim"]()
        [_0x42d3f6(0x18a)](/\s+$/, "");
      _0x2640d5[_0x42d3f6(0x178)](
        _0x3dd41c +
          "\x20(" +
          _0x5c9d64[_0x42d3f6(0x43a)][_0x42d3f6(0x193)] +
          ")"
      ),
        console["log"](
          "✅\x20Código\x20detectado\x20(configuración\x20principal):",
          _0x3dd41c,
          "Formato:",
          _0x5c9d64["codeResult"][_0x42d3f6(0x193)]
        );
      if (
        validarCodigo(_0x3dd41c, _0x5c9d64[_0x42d3f6(0x43a)][_0x42d3f6(0x193)])
      ) {
        (inputCodigo[_0x42d3f6(0x1be)] = _0x3dd41c),
          form[_0x42d3f6(0x3f1)](),
          URL[_0x42d3f6(0x390)](_0x173b3b[_0x42d3f6(0x3f3)]),
          (fileInput[_0x42d3f6(0x1be)] = "");
        return;
      }
    }
    console[_0x42d3f6(0x1cd)](_0x42d3f6(0x1ea)),
      _0xf7fd46(_0x575fb2, _0x42d3f6(0x1f4), function (_0x13c4dd) {
        const _0x2da9d6 = _0x42d3f6;
        if (_0x13c4dd && _0x13c4dd[_0x2da9d6(0x43a)]) {
          let _0x58880a = _0x13c4dd[_0x2da9d6(0x43a)]["code"]
            [_0x2da9d6(0x2c4)]()
            [_0x2da9d6(0x18a)](/\s+$/, "");
          _0x2640d5[_0x2da9d6(0x178)](
            _0x58880a + "\x20(" + _0x13c4dd[_0x2da9d6(0x43a)]["format"] + ")"
          ),
            console[_0x2da9d6(0x1cd)](
              _0x2da9d6(0x30d),
              _0x58880a,
              _0x2da9d6(0x26f),
              _0x13c4dd["codeResult"][_0x2da9d6(0x193)]
            );
          if (validarCodigo(_0x58880a, _0x13c4dd[_0x2da9d6(0x43a)]["format"])) {
            (inputCodigo["value"] = _0x58880a),
              form[_0x2da9d6(0x3f1)](),
              URL["revokeObjectURL"](_0x173b3b[_0x2da9d6(0x3f3)]),
              (fileInput["value"] = "");
            return;
          }
        }
        console[_0x2da9d6(0x1cd)](
          "🔄\x20Probando\x20con\x20imagen\x20original..."
        ),
          intentarSegundaPasada(_0x173b3b, _0x2640d5);
      });
  });
}
function validarCodigo(_0x1424a0, _0x18ca01) {
  const _0x28a0d4 = _0x906661;
  console["log"](
    _0x28a0d4(0x2b4) +
      _0x1424a0 +
      _0x28a0d4(0x3a6) +
      _0x18ca01 +
      "\x20longitud:\x20" +
      _0x1424a0[_0x28a0d4(0x330)]
  );
  switch (_0x18ca01) {
    case _0x28a0d4(0x3bc):
      return (
        _0x1424a0[_0x28a0d4(0x330)] === 0xd &&
        /^\d{13}$/[_0x28a0d4(0x3b4)](_0x1424a0)
      );
    case _0x28a0d4(0x408):
      return _0x1424a0["length"] === 0xc && /^\d{12}$/["test"](_0x1424a0);
    case "ean_8":
      return (
        _0x1424a0[_0x28a0d4(0x330)] === 0x8 &&
        /^\d{8}$/[_0x28a0d4(0x3b4)](_0x1424a0)
      );
    case _0x28a0d4(0x1a2):
      return (
        _0x1424a0["length"] >= 0x6 &&
        _0x1424a0["length"] <= 0x8 &&
        /^\d+$/[_0x28a0d4(0x3b4)](_0x1424a0)
      );
    case "code_128":
    case _0x28a0d4(0x1c8):
    case _0x28a0d4(0x30e):
      return (
        _0x1424a0[_0x28a0d4(0x330)] >= 0x1 &&
        _0x1424a0[_0x28a0d4(0x330)] <= 0x32
      );
    case "codabar":
      return (
        _0x1424a0[_0x28a0d4(0x330)] >= 0x3 &&
        /^[A-D][0-9\-$:\/.\+]+[A-D]$/["test"](_0x1424a0)
      );
    case _0x28a0d4(0x346):
      return (
        _0x1424a0["length"] >= 0x2 &&
        _0x1424a0[_0x28a0d4(0x330)] % 0x2 === 0x0 &&
        /^\d+$/[_0x28a0d4(0x3b4)](_0x1424a0)
      );
    default:
      return _0x1424a0["length"] >= 0x1 && _0x1424a0["length"] <= 0x32;
  }
}
function intentarSegundaPasada(_0x19cce9, _0x263fa4 = []) {
  const _0x285574 = _0x906661;
  console[_0x285574(0x1cd)](_0x285574(0x3df));
  const _0x2b64ff = document[_0x285574(0x469)](_0x285574(0x2b7)),
    _0x7ebec3 = _0x2b64ff[_0x285574(0x23f)]("2d");
  let { width: _0x51e320, height: _0x54f5bc } = _0x19cce9;
  const _0x176c0a = 0x640;
  if (_0x51e320 < _0x176c0a) {
    const _0x46159f = _0x176c0a / _0x51e320;
    (_0x51e320 *= _0x46159f), (_0x54f5bc *= _0x46159f);
  }
  (_0x2b64ff[_0x285574(0x36a)] = _0x51e320),
    (_0x2b64ff[_0x285574(0x373)] = _0x54f5bc),
    (_0x7ebec3[_0x285574(0x3dd)] = ![]),
    _0x7ebec3[_0x285574(0x19d)](_0x19cce9, 0x0, 0x0, _0x51e320, _0x54f5bc);
  const _0x5bf2c6 = _0x7ebec3["getImageData"](0x0, 0x0, _0x51e320, _0x54f5bc),
    _0x5bf89a = _0x5bf2c6["data"];
  for (
    let _0x2e6043 = 0x0;
    _0x2e6043 < _0x5bf89a[_0x285574(0x330)];
    _0x2e6043 += 0x4
  ) {
    const _0x842e2c = _0x5bf89a[_0x2e6043],
      _0x5dd777 = _0x5bf89a[_0x2e6043 + 0x1],
      _0x1a68dd = _0x5bf89a[_0x2e6043 + 0x2],
      _0xd7d78c = 1.5,
      _0x10d43b = Math["round"](
        0.299 * _0x842e2c + 0.587 * _0x5dd777 + 0.114 * _0x1a68dd
      ),
      _0x5ab205 = Math["min"](
        0xff,
        Math["max"](0x0, (_0x10d43b - 0x80) * _0xd7d78c + 0x80)
      );
    (_0x5bf89a[_0x2e6043] = _0x5ab205),
      (_0x5bf89a[_0x2e6043 + 0x1] = _0x5ab205),
      (_0x5bf89a[_0x2e6043 + 0x2] = _0x5ab205);
  }
  _0x7ebec3[_0x285574(0x179)](_0x5bf2c6, 0x0, 0x0);
  const _0x250305 = {
    src: _0x2b64ff[_0x285574(0x194)](_0x285574(0x166)),
    numOfWorkers: 0x0,
    locate: !![],
    inputStream: {
      size: Math[_0x285574(0x448)](_0x51e320, _0x54f5bc),
      area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
    },
    locator: {
      patchSize: _0x285574(0x1ab),
      halfSample: ![],
      debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
    },
    decoder: {
      readers: [
        _0x285574(0x1d6),
        _0x285574(0x457),
        _0x285574(0x41b),
        _0x285574(0x2fc),
        _0x285574(0x42f),
        "upc_e_reader",
        _0x285574(0x2f4),
        _0x285574(0x16a),
      ],
      multiple: !![],
      debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
    },
  };
  console[_0x285574(0x1cd)](_0x285574(0x25a)),
    Quagga[_0x285574(0x1eb)](_0x250305, function (_0x1a36b1) {
      const _0x5c3241 = _0x285574;
      if (_0x1a36b1 && _0x1a36b1[_0x5c3241(0x43a)]) {
        const _0x323b6d = _0x1a36b1[_0x5c3241(0x43a)][_0x5c3241(0x298)]
          [_0x5c3241(0x2c4)]()
          [_0x5c3241(0x18a)](/\s+$/, "");
        _0x263fa4[_0x5c3241(0x178)](
          _0x323b6d + "\x20(" + _0x1a36b1[_0x5c3241(0x43a)]["format"] + ")"
        ),
          console[_0x5c3241(0x1cd)](
            _0x5c3241(0x458),
            _0x323b6d,
            _0x5c3241(0x26f),
            _0x1a36b1["codeResult"][_0x5c3241(0x193)]
          );
        if (
          validarCodigo(
            _0x323b6d,
            _0x1a36b1[_0x5c3241(0x43a)][_0x5c3241(0x193)]
          )
        ) {
          (inputCodigo[_0x5c3241(0x1be)] = _0x323b6d), form["requestSubmit"]();
          return;
        }
      }
      console["log"]("❌\x20Todas\x20las\x20configuraciones\x20fallaron");
      let _0x415218 = "";
      _0x263fa4[_0x5c3241(0x330)] > 0x0 &&
        (_0x415218 = _0x5c3241(0x450) + _0x263fa4[_0x5c3241(0x1ee)](",\x20"));
      let _0x1fbf0c = "";
      if (GOOGLE_VISION_CONFIG[_0x5c3241(0x1a5)]) {
        const _0x464e57 = visionUsageTracker[_0x5c3241(0x328)]();
        (_0x1fbf0c =
          _0x5c3241(0x43d) +
          _0x464e57[_0x5c3241(0x3f0)] +
          "/" +
          _0x464e57["monthlyLimit"] +
          "\x20mensual,\x20" +
          _0x464e57["dailyUsed"] +
          "/" +
          _0x464e57[_0x5c3241(0x246)] +
          _0x5c3241(0x216)),
          verificarBackend()
            [_0x5c3241(0x340)]((_0x474cce) => {
              const _0x565e6b = _0x5c3241;
              if (document["querySelector"](_0x565e6b(0x1fa))) {
                const _0x1d12db = document[_0x565e6b(0x312)](_0x565e6b(0x1fa));
                _0x1d12db &&
                  (_0x1d12db[_0x565e6b(0x2ae)] = _0x1d12db["innerHTML"][
                    "replace"
                  ](_0x565e6b(0x218), _0x565e6b(0x3bd) + _0x474cce["mensaje"]));
              }
            })
            [_0x5c3241(0x1d5)](() => {});
      }
      (resultadoDiv[_0x5c3241(0x2ae)] =
        _0x5c3241(0x187) + _0x415218 + _0x1fbf0c + _0x5c3241(0x297)),
        renderHistorial();
    });
}
async function mostrarConfiguracion() {
  const _0x1495da = _0x906661,
    _0x26523f = await verificarBackend();
  let _0x47982e = null;
  if (CONFIG_ENDPOINTS[_0x1495da(0x44f)])
    try {
      const _0x1086ed = await fetch(
        CONFIG_ENDPOINTS[_0x1495da(0x344)] + _0x1495da(0x253)
      );
      if (_0x1086ed["ok"]) {
        const _0x14b5e4 = await _0x1086ed["json"]();
        _0x47982e = _0x14b5e4[_0x1495da(0x2e7)];
      }
    } catch (_0x5234a9) {
      console[_0x1495da(0x1cd)](_0x1495da(0x262));
    }
  let _0x1bd3ae = "";
  _0x47982e &&
    (_0x1bd3ae =
      _0x1495da(0x3e0) +
      _0x47982e[_0x1495da(0x292)] +
      _0x1495da(0x461) +
      _0x47982e[_0x1495da(0x3b1)] +
      _0x1495da(0x1c1) +
      _0x47982e[_0x1495da(0x263)] +
      _0x1495da(0x1c9) +
      new Date(_0x47982e[_0x1495da(0x399)])[_0x1495da(0x423)]() +
      _0x1495da(0x2d3)),
    Swal[_0x1495da(0x281)]({
      title: _0x1495da(0x1fc),
      html:
        _0x1495da(0x2a7) +
        (GOOGLE_VISION_CONFIG["enabled"] ? _0x1495da(0x44c) : "") +
        _0x1495da(0x1aa) +
        (_0x26523f[_0x1495da(0x1d8)] ? _0x1495da(0x402) : "alert-warning") +
        _0x1495da(0x183) +
        _0x26523f["mensaje"] +
        _0x1495da(0x325) +
        _0x1bd3ae +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Área\x20para\x20mostrar\x20resultados\x20del\x20diagnóstico\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22diagnostico-resultado\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Detección\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20📷\x20<strong>Local:</strong>\x20Html5QrCode\x20+\x20BarcodeDetector\x20+\x20Quagga.js<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🌐\x20<strong>Premium:</strong>\x20Google\x20Vision\x20API\x20(para\x20códigos\x20difíciles)<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🔄\x20<strong>Automático:</strong>\x20Fallback\x20inteligente\x20entre\x20métodos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>✅\x20Ventajas\x20del\x20backend:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Sin\x20límites\x20por\x20dispositivo<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Detección\x20superior\x20en\x20superficies\x20reflectivas<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Mejor\x20precisión\x20con\x20códigos\x20largos<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Funciona\x20con\x20imágenes\x20de\x20baja\x20calidad<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Gestión\x20centralizada\x20de\x20recursos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🔄\x20Fallback\x20automático:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Si\x20el\x20backend\x20no\x20está\x20disponible,\x20la\x20app\x20usará\x20detección\x20local\x20automáticamente.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Recomendación:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mantén\x20activada\x20la\x20detección\x20avanzada\x20para\x20mejores\x20resultados.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
      width: 0x258,
      showCancelButton: !![],
      confirmButtonText: _0x1495da(0x3ce),
      cancelButtonText: _0x1495da(0x22a),
      confirmButtonColor: _0x1495da(0x387),
      cancelButtonColor: _0x1495da(0x3e2),
      preConfirm: () => {
        const _0x17469a = _0x1495da,
          _0x101584 = document["getElementById"](_0x17469a(0x44a))[
            _0x17469a(0x44c)
          ];
        return { enabled: _0x101584 };
      },
    })["then"]((_0x24e687) => {
      const _0x5d902f = _0x1495da;
      if (_0x24e687[_0x5d902f(0x3d3)]) {
        const { enabled: _0x144098 } = _0x24e687["value"];
        (GOOGLE_VISION_CONFIG[_0x5d902f(0x1a5)] = _0x144098),
          localStorage[_0x5d902f(0x27f)](
            _0x5d902f(0x252),
            JSON[_0x5d902f(0x31a)]({ enabled: _0x144098 })
          );
        const _0x15fee6 = _0x144098 ? _0x5d902f(0x235) : _0x5d902f(0x23b);
        Swal[_0x5d902f(0x281)]({
          title: _0x5d902f(0x28f),
          text: _0x15fee6,
          icon: "success",
          timer: 0x7d0,
          showConfirmButton: ![],
        });
      }
    });
}
function cargarConfiguracionGuardada() {
  const _0x4e8014 = _0x906661,
    _0x4f73ce = localStorage[_0x4e8014(0x41a)](_0x4e8014(0x252));
  if (_0x4f73ce)
    try {
      const _0x529f74 = JSON[_0x4e8014(0x3d0)](_0x4f73ce);
      (GOOGLE_VISION_CONFIG[_0x4e8014(0x1a5)] =
        _0x529f74[_0x4e8014(0x1a5)] || ![]),
        GOOGLE_VISION_CONFIG[_0x4e8014(0x1a5)] &&
          console[_0x4e8014(0x1cd)](_0x4e8014(0x3e9));
    } catch (_0x200095) {
      console[_0x4e8014(0x1cd)](
        "❌\x20Error\x20cargando\x20configuración:",
        _0x200095
      );
    }
}
function _0x212e() {
  const _0x419acf = [
    "promociones_ts",
    "✅\x20Extraído\x20formato\x20completo\x20del\x20nombre:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "✅\x20Los\x203\x20endpoints\x20consultados",
    "height",
    "getRegistrations",
    "\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:0.7rem;\x22>PROMO</span>",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "SKIP_WAITING",
    "iconVista",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🏦\x20Problema\x20de\x20Facturación</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20facturación\x20no\x20está\x20habilitada\x20en\x20el\x20proyecto\x20correcto\x20(#1070150612422)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/billing\x22\x20target=\x22_blank\x22>Ve\x20a\x20Google\x20Cloud\x20Billing</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-warning\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔥\x20",
    "column",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20me-2\x20mb-1\x22\x20style=\x22font-size:0.85rem;\x22>🔥\x20",
    "🎯\x20Mejor\x20código\x20seleccionado:\x20\x22",
    "\x20\x20\x20•\x20Problema\x20en\x20el\x20código\x20de\x20la\x20función\x20serverless",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:\x200.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💰\x20Ahorras\x20$",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "GET",
    "Lista",
    "all",
    "show",
    "skus",
    "Cargando\x20promociones",
    "#198754",
    "\x22\x20style=\x22width:60px;height:60px;object-fit:contain;border-radius:8px;background:#f8f9fa;\x22\x20onerror=\x22this.style.display=\x27none\x27\x22></div>",
    "%;\x20transition:\x20width\x200.3s\x20ease;\x22\x20aria-valuenow=\x22",
    "pro_precio_total",
    "async",
    "<br>",
    "https://contador-apicloudvision.vercel.app/api/vision-detect",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "filter",
    "revokeObjectURL",
    "🔧\x20Error\x20500:\x20Problema\x20con\x20Google\x20Vision\x20API",
    "clear",
    "https://media.megaservicio.net",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🚫\x20Vision\x20API\x20No\x20Habilitada</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20Vision\x20API\x20no\x20está\x20habilitada\x20en\x20tu\x20proyecto</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/apis/library/vision.googleapis.com\x22\x20target=\x22_blank\x22>Habilitar\x20Vision\x20API</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "itf",
    "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x20x\x20",
    "alternativa",
    "ultimaActualizacion",
    "touch",
    "📡\x20Enviando\x20a\x20backend\x20proxy...",
    "textAlign",
    "page",
    "dailyUsed",
    "2151fFzVEI",
    "Error\x20consultando\x20producto\x20desde\x20historial:",
    ",\x20Diario:\x20",
    "items",
    "CORS",
    "modal-open",
    "insertBefore",
    "\x22\x20formato:\x20",
    "code_128",
    "list",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20",
    "installed",
    "\x20comprando\x20",
    ".modal-dialog",
    "🔍\x20Código\x20candidato\x20encontrado:\x20",
    "d-none",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Unidades</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x20d-block\x22\x20style=\x22font-size:\x201.3rem;\x22>$",
    "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js",
    "totalCodigos",
    "CODIGO",
    "Productos\x20básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "test",
    "floor",
    "resultadosInfo",
    "split",
    "❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API",
    ".modal-content",
    "Error\x20cargando\x20promociones:",
    "tipo",
    "ean_13",
    "🌐\x20<strong>Backend:</strong>\x20",
    "Promoción\x20",
    "Modal",
    "result",
    "toUTCString",
    "onupgradeneeded",
    "some",
    "ayuda",
    "toISOString",
    "básico\x20✅",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "\x22\x20role=\x22progressbar\x22\x20style=\x22width:\x20",
    "\x22\x20onerror=\x22this.onerror=null;\x20this.style.display=\x27none\x27;\x20this.parentElement.innerHTML=\x27<div\x20class=\x5c\x27text-muted\x5c\x27\x20style=\x5c\x27font-size:2rem;\x5c\x27><i\x20class=\x5c\x27bi\x20bi-image\x5c\x27></i></div>\x27;\x22>",
    "<small\x20class=\x22text-muted\x20mt-1\x20d-block\x22>",
    "saveUsage",
    "responses",
    "find",
    "💾\x20Guardar",
    "</span>",
    "parse",
    ")<br>",
    "updatefound",
    "isConfirmed",
    "📱\x20Abriendo\x20modal\x20en\x20dispositivo\x20móvil...",
    "códigos\x20de\x20barras\x20⚠️\x20(sin\x20datos)",
    "includes",
    "🎯\x20PROMOCIÓN\x20ENCONTRADA\x20para\x20SKU\x20",
    "Error\x20en\x20detección",
    "🧮\x20Calculando\x20precio\x20total:\x20",
    "btn-success",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "BarcodeDetector",
    "imageSmoothingEnabled",
    "overflowY",
    "🔄\x20Tercera\x20tentativa:\x20imagen\x20original\x20sin\x20procesamiento...",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>🏷️\x20Sistema\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Productos:</strong>\x20",
    "classList",
    "#6c757d",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB",
    "CORS_ERROR",
    "mostrarModalPromocionesGenerales",
    "🔄\x20Consultando\x20endpoint\x20con\x20códigos\x20de\x20barras...",
    "🔄\x20Nueva\x20versión\x20del\x20Service\x20Worker\x20disponible",
    "✅\x20Detección\x20avanzada\x20(backend)\x20configurada\x20y\x20activa",
    "\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22resultadosBusquedaModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22resultadosBusquedaModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22resultadosBusquedaModalLabel\x22>🔎\x20Resultados\x20de\x20Búsqueda</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22resultados-busqueda-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x20d-flex\x20flex-wrap\x20gap-2\x20align-items-center\x20justify-content-between\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22pageSizeSelect\x22\x20class=\x22mb-0\x22>Mostrar:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22pageSizeSelect\x22\x20class=\x22form-select\x20form-select-sm\x22\x20style=\x22width:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22\x20selected>10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2220\x22>20</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2250\x22>50</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-success\x20btn-sm\x20d-flex\x20align-items-center\x20gap-1\x22\x20id=\x22btnToggleVista\x22\x20title=\x22Cambiar\x20vista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-grid-3x3-gap\x22\x20id=\x22iconVista\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22labelVista\x22>Cuadros</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x22\x20id=\x22resultadosInfo\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnPrevResultados\x22>«\x20Anterior</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22pageIndicator\x22\x20class=\x22text-muted\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnNextResultados\x22>Siguiente\x20»</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22inputPageJump\x22\x20class=\x22form-control\x20form-control-sm\x22\x20style=\x22width:90px;\x22\x20min=\x221\x22\x20placeholder=\x22Ir\x20a...\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x20btn-sm\x22\x20id=\x22btnIrPagina\x22>Ir</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>",
    "#btnPromociones",
    "textContent",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔄\x20Consultando\x20endpoint\x20básico...",
    "pro_grupoProductos_primaria",
    "monthlyUsed",
    "requestSubmit",
    "\x0a\x20\x20\x20\x20\x20\x20</div>",
    "src",
    "✅\x20Endpoint\x20promociones\x20consultado:\x20",
    "PDF_417",
    "primary",
    "createObjectStore",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔑\x20API\x20Key\x20inválida\x20-\x20verifica\x20la\x20configuración\x20en\x20Vercel</div>",
    "focus",
    "border",
    "</div>",
    "min",
    "fillText",
    "pro_cantidad_base",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "pro_precioPromo",
    "#ffffff",
    "alert-success",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Total\x20Normal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "📋\x20Promociones\x20(locales):",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>MSI</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Código\x20de\x20barras\x20funcional\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22barcode-",
    "promociones:",
    "setAttribute",
    "upc_a",
    "📱\x20Cerrando\x20modal\x20móvil...",
    ".modal-backdrop,\x20.modal-backdrop-mobile",
    "🏦\x20Error\x20de\x20facturación:\x20Habilita\x20billing\x20en\x20Google\x20Cloud",
    "❌\x20Modal\x20no\x20encontrado",
    "getVideoTracks",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📋\x20Descripción\x20completa\x20de\x20productos:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-3\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Error\x20procesando\x20imagen:",
    "Cuadros",
    "zIndex",
    "Backend\x20error",
    "borderRadius",
    "count",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x20ms-2\x22>1\x20unidad</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22><strong>SKU:</strong>\x20",
    "pr_name",
    "❌\x20Instalación\x20rechazada",
    "pageIndicator",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "getItem",
    "code_128_reader",
    "🔄\x20Backend\x20no\x20disponible,\x20usando\x20detección\x20local",
    "muted",
    "load",
    "PERMISSION_DENIED",
    "script",
    "\x0a\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x22\x20style=\x22min-width:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "toLocaleString",
    "es_oficial",
    "monthlyCount",
    "Finalizada\x20en\x20",
    "getAll",
    "📊\x20Estadísticas:",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "round",
    "4MEeDHY",
    "Productos:\x20nunca\x20|\x20Promociones:\x20",
    "recordUsage",
    "start",
    "ean_8_reader",
    "barcode-",
    "\x0a<button\x20type=\x22button\x22\x20id=\x22btnPromociones\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x20mb-4\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#28a745;\x20background:#d4edda;\x20color:#155724;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x20margin-left:20px;\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🏷️\x20Ver\x20Promociones\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20w-100\x20mb-2\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20flex-column\x20flex-md-row\x20align-items-md-end\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20<h5\x20class=\x22ant-typography\x20css-1r8qqf1\x20mb-0\x22>Productos</h5>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22ultimaActualizacion\x22\x20class=\x22ant-typography\x20css-1r8qqf1\x20ms-md-4\x22\x20style=\x22font-size:1rem;\x22>Última\x20actualización:\x20nunca\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnActualizar\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#d9d9d9;\x20background:#fff;\x20color:#222;\x20font-size:1rem;\x20padding:2px\x2016px;\x20margin-left:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnTexto\x22>Actualizar</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20id=\x22mensajeActualizacion\x22\x20class=\x22text-center\x22\x20style=\x22min-height:\x201.5rem;\x22></div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20promociones\x20generales\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22promocionesGeneralesModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22promocionesGeneralesModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22promocionesGeneralesModalLabel\x22>🏷️\x20Todas\x20las\x20Promociones\x20Disponibles</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22promociones-generales-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones...</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20me-auto\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "code_39_vin_reader",
    "28182240DAwDPJ",
    "contains",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Error\x20en\x20diagnóstico:\x20",
    "Enter",
    "substring",
    "1055",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(",
    "codeResult",
    "\x20|\x20Promociones:\x20nunca",
    "\x20\x20\x20💡\x20Ejecuta\x20diagnosticarBackend()\x20para\x20más\x20detalles",
    "<br><br>📊\x20<strong>Uso\x20local:</strong>\x20",
    "upc_e_reader",
    "writeText",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20SKU\x22\x20data-copiar=\x22",
    "body",
    "Error\x20en\x20actualización:",
    "⚠️\x20Error\x20con\x20endpoint\x20de\x20códigos\x20de\x20barras:",
    "productosBasicos",
    "🎯\x20Mostrando\x20promociones\x20locales...",
    "DATA_MATRIX",
    "principal",
    "max",
    "mediaDevices",
    "enabledCheck",
    "básico\x20❌\x20(error\x20HTTP)",
    "checked",
    "resultado",
    "<div\x20class=\x22text-muted\x22\x20style=\x22font-size:2rem;\x22><i\x20class=\x22bi\x20bi-image\x22></i></div>",
    "usarCodigosBarras",
    "<br>•\x20🔍\x20<strong>Códigos\x20detectados:</strong>\x20",
    "🔧\x20Sugerencia:\x20Verificar\x20configuración\x20CORS\x20en\x20el\x20backend\x20para\x20/api/productos-con-codigos",
    "⚠️\x20Consulta\x20parcial\x20de\x20endpoints",
    "installing",
    "Formato\x20de\x20promociones\x20inválido",
    ".consultar-historial-btn",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Cantidad</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "upc_reader",
    "✅\x20Tercera\x20tentativa\x20exitosa:",
    "⚠️\x20Backend\x20responde\x20pero\x20con\x20error:",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h5>🏷️\x20No\x20se\x20encontraron\x20productos\x20con\x20promociones</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-0\x22>Puede\x20ser\x20que\x20no\x20haya\x20promociones\x20activas\x20en\x20este\x20momento\x20o\x20que\x20el\x20servicio\x20no\x20esté\x20disponible.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "stop",
    "usage",
    "./service-worker.js",
    "❌\x20Error\x20guardando\x20promociones\x20en\x20IndexedDB:",
    "application/json",
    "visionData",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Códigos\x20totales:</strong>\x20",
    "month",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Error\x20al\x20procesar\x20la\x20imagen</div>",
    "Código\x20no\x20válido",
    "📋\x20Detalles\x20completos:",
    "https://verificadorb9-backend.vercel.app/api/productos",
    "#mensajeActualizacion",
    ";\x20path=/",
    "createElement",
    "toString",
    "Error\x20inicial\x20cargando\x20productos:",
    "parentNode",
    "productos_ts",
    "objectStore",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-muted\x22>-</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Sin\x20datos</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "grid",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x20text-muted\x20small\x22>",
    "cantidad",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20para:\x20",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20",
    "font",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    ".modal-backdrop",
    "<small\x20class=\x22text-muted\x20d-block\x22><strong>Código:</strong>\x20",
    "📊\x20Respuesta\x20del\x20backend:",
    "autoplay",
    "💡\x20Ve\x20a:\x20https://console.developers.google.com/billing/enable?project=1070150612422",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "click",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-light\x20text-dark\x20me-1\x20mb-1\x22\x20style=\x22font-size:\x200.7rem;\x22>",
    "fuente",
    "qty",
    "es-CL",
    "outcome",
    "autocomplete",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "placeholder",
    "Fecha\x20desconocida",
    "textAnnotations",
    "pr_sku",
    "2498730cqtrtn",
    "auto",
    "beforeend",
    "códigos\x20de\x20barras\x20❌\x20(HTTP\x20",
    "insertAdjacentHTML",
    "Timeout",
    "controller",
    "EAN_13",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "📝\x20Texto\x20completo\x20detectado:",
    "🔍\x20Iniciando\x20diagnóstico\x20del\x20backend...",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>❌\x20Error\x20al\x20cargar\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "code_93_reader",
    "🔄\x20Service\x20Worker\x20actualizado",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "🧪\x20Probando\x20vision-detect\x20con\x20imagen\x20de\x20prueba...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>...\x20y\x20",
    "showUsageWarning",
    "fillRect",
    "Error\x20consultando\x20producto\x20desde\x20modal:",
    "image/png",
    "list-group\x20position-absolute\x20w-100",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-decoration-line-through\x20text-muted\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>$",
    "error",
    "codabar_reader",
    "history",
    "playsinline",
    "⚠️\x20Error\x20con\x20endpoint\x20básico:",
    "\x20al\x20",
    "srcObject",
    "⚠️\x20BarcodeDetector\x20no\x20disponible\x20en\x20este\x20navegador",
    "boundingBox",
    "maxHeight",
    "btnNextResultados",
    "promociones\x20✅",
    "🔧\x20Error\x20500:\x20Problema\x20interno\x20del\x20servidor",
    "Sin\x20conexión\x20a\x20internet",
    "✅\x20Backend\x20activo.\x20Estadísticas:",
    "push",
    "putImageData",
    "<div\x20class=\x22alert\x20alert-success\x22>✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente</div>",
    "pro_nombrePromo",
    "reload",
    "Productos:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x20bg-transparent\x20border-0\x20pt-0\x20pb-2\x20text-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-primary\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27",
    "beforeinstallprompt",
    "📸\x20Procesando\x20con\x20Quagga...",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x20mt-2\x22\x20style=\x22font-size:0.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Códigos\x20disponibles:</strong>\x20",
    "matchAll",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🌐\x20Google\x20Vision\x20API:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "querySelectorAll",
    "No\x20se\x20puede\x20generar\x20código\x20de\x20barras:\x20canvas\x20o\x20código\x20faltante",
    "off",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20<strong>⚠️\x20No\x20se\x20detectó\x20código\x20válido</strong><br>\x0a\x20\x20\x20\x20\x20\x20Para\x20códigos\x20largos\x20como\x20este,\x20intenta:<br>\x0a\x20\x20\x20\x20\x20\x20•\x20📏\x20<strong>Recortar\x20muy\x20cerca\x20del\x20código</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20💡\x20<strong>Mejor\x20iluminación\x20uniforme</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20📱\x20<strong>Evitar\x20superficies\x20reflectivas</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20🔍\x20<strong>Imagen\x20más\x20nítida\x20y\x20estable</strong>",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-start\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-dark\x22\x20style=\x22font-size:\x201rem;\x22>",
    "Consultando\x20los\x203\x20endpoints...",
    "replace",
    "toFixed",
    "UPC_E",
    "inserta\x20sku\x20o\x20busca\x20un\x20producto",
    "1\x20endpoint\x20completado,\x20finalizando...",
    "aztec",
    "🏦\x20PROBLEMA:\x20Facturación\x20no\x20habilitada\x20en\x20el\x20proyecto\x20correcto",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "backend_mejorado",
    "format",
    "toDataURL",
    "userAgent",
    "smooth",
    "verificadorB9DB",
    "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto",
    "no-store",
    "abs",
    "500",
    "<div\x20class=\x22alert\x20alert-info\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Mostrando\x20los\x20primeros\x2020\x20productos.\x20Hay\x20",
    "drawImage",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
    "<span\x20class=\x22badge\x20",
    "validFrom",
    "EAN_8",
    "upc_e",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "✅\x20Instalación\x20aceptada",
    "enabled",
    "change",
    "\x20productos\x20(",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-success\x20fw-bold\x22>$",
    "✅\x20Extraído\x20formato\x20con\x20peso\x20del\x20nombre:",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-check-label\x22\x20for=\x22enabledCheck\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Activar\x20detección\x20avanzada\x20(Backend)</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Usa\x20servidor\x20dedicado\x20para\x20mejor\x20detección\x20de\x20códigos\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20",
    "x-large",
    "pr_precio",
    "\x27)\x22\x20title=\x22Ver\x20detalles\x20completos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Failed\x20to\x20fetch",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:#495057;\x22>🏷️\x20PROMOCIONES\x20ACTIVAS</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "observe",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "scrollIntoView",
    "data-form-type",
    "Conectando\x20con\x20todos\x20los\x20servidores",
    "\x20\x20\x20Posibles\x20causas:",
    "position",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x20result-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22result-card-img\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    ")\x20-\x20",
    "mensaje",
    "🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers",
    "data",
    "value",
    "onerror",
    "isArray",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Con\x20códigos\x20adicionales:</strong>\x20",
    "Backend\x20no\x20disponible\x20-\x20usando\x20detección\x20local",
    "data_matrix",
    "objectStoreNames",
    "remove",
    "805336ERDzWQ",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "code_39",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Actualizado:</strong>\x20",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20ms-2\x22\x20style=\x22font-size:0.7rem;\x22>🏷️\x20PROMO</span>",
    "codigo",
    "query",
    "log",
    "🔍\x20Buscando\x20promociones\x20para\x20SKU:",
    "unshift",
    "UPC_A",
    "⚠️\x20<strong>Límite\x20diario\x20cerca:</strong>\x20",
    "now",
    "pr_gtin",
    "Error\x20al\x20cargar\x20promociones:",
    "catch",
    "ean_reader",
    "🔄\x20Consultando\x20endpoint\x20de\x20promociones...",
    "activo",
    "fillStyle",
    "\x20(quedan\x20",
    "https://verificadorb9-backend.vercel.app/api/productos-con-codigos",
    "\x22\x20alt=\x22",
    "storageKey",
    "\x20más\x20con\x20promociones.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "🔄\x20Sin\x20productos:\x20cargando\x20SOLO\x20productos",
    "Fallo\x20al\x20cargar\x20productos\x20iniciales",
    "📊\x20<strong>Uso\x20local\x20de\x20este\x20dispositivo:</strong><br>",
    "key",
    "44168SXPvhG",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20",
    "type",
    "validTo",
    "#btnSpinner",
    "\x20-\x20",
    "🔄\x20Probando\x20configuración\x20alternativa...",
    "decodeSingle",
    "📱\x20Dispositivo\x20móvil:",
    "maxWidth",
    "join",
    "\x20más</div>",
    "\x22\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Vista:\x20",
    "PROMO",
    "nombre_promocion",
    "No\x20especificado",
    "agresiva",
    "#f8f9fa",
    "✅\x20Códigos\x20válidos:\x20",
    "<div\x20class=\x22text-center\x20text-muted\x20small\x22>…\x20y\x20",
    "json",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22verPromociones()\x22\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    ".alert-danger",
    "postMessage",
    "⚙️\x20Configuración\x20de\x20detección\x20avanzada",
    "indexeddb_local",
    "nearest",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x20promociones",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-success\x22>🏷️\x20Productos\x20con\x20Promociones</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20text-white\x22>",
    "inputPageJump",
    ".copiar-btn",
    "onclick",
    "323970kiKGlS",
    "ITF",
    "onsuccess",
    "\x20promociones\x20(",
    "166609KhWspu",
    "flexDirection",
    "Error\x20verificando\x20datos\x20locales:",
    "Backend\x20error:\x20",
    "\x20días",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20descripción\x22\x20data-copiar=\x22",
    "consultarProductoDesdeModal",
    "UPC",
    "\x0a\x20\x20\x20\x20\x20\x20",
    "serviceWorker",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "Error\x20al\x20copiar:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22\x20style=\x22font-weight:500;\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x20diario<br>🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "\x27);\x20})()\x22>Ver</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>",
    "🌐\x20<strong>Backend:</strong>\x20Verificando...",
    ";\x20expires=",
    "warn",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20locales\x20cargadas.\x20Pulsa\x20“Actualizar”\x20para\x20sincronizar.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "view",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "❌\x20Error\x20de\x20conexión",
    "resultadosBusquedaModal",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "fixed",
    "ean_8",
    "promociones",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x22\x20style=\x22cursor:pointer;\x22\x20onclick=\x22mostrarProductoPromocion(\x27",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27",
    "environment",
    "<div\x20class=\x22col\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20spinner-border-sm\x20me-2\x22\x20role=\x22status\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Diagnosticando\x20backend...\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "POST",
    "❌\x20Cancelar",
    "🎉\x20¡Google\x20Vision\x20API\x20funcionando\x20correctamente!",
    "map",
    "getElementById",
    "\x20|\x20Promociones:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🎉\x20¡Google\x20Vision\x20API\x20Activa!</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>✅\x20La\x20detección\x20premium\x20está\x20funcionando\x20correctamente</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Fallback\x20automático:\x20Local\x20→\x20Google\x20Vision</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "❌\x20Error\x20consultando\x20endpoints",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "Error\x20obteniendo\x20promociones:",
    "bg-success",
    "✅\x20Detección\x20avanzada\x20activada",
    "btnToggleVista",
    "\x20longitud:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x20",
    "keys",
    "Hace\x20",
    "⚠️\x20Usando\x20solo\x20detección\x20local",
    "center",
    "promocionesGeneralesModal",
    "userChoice",
    "getContext",
    "onload",
    "detalles",
    "\x20/\x20",
    "JsBarcode",
    "left",
    "get",
    "dailyLimit",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "descripcion",
    "hide",
    "status",
    "📊\x20Datos\x20finales\x20para\x20construcción:",
    "transaction",
    "Nueva\x20versión\x20disponible.\x20¿Recargar\x20la\x20página?",
    "none",
    "❌\x20Error\x20cargando\x20promociones:",
    "success",
    "googleVisionConfig",
    "?stats=true",
    "Combo\x20Especial",
    "precio\x20especial",
    "•\x20Diario:\x20",
    "🧪\x20Respuesta\x20completa\x20vision-detect:",
    "🔗\x20Ve\x20a:\x20https://console.cloud.google.com/billing",
    "nombre",
    "📋\x20Configuración\x20final\x20para\x20códigos\x20largos...",
    "PRECIO",
    "\x20=\x20",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22row\x20align-items-center\x20justify-content-center\x20g-0\x20mb-4\x22\x20style=\x22padding:\x200px\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "BILLING_DISABLED",
    "❌\x20Backend\x20no\x20disponible:",
    "4376500dZbPoO",
    "\x20más</span>",
    "⚠️\x20No\x20se\x20pudieron\x20obtener\x20estadísticas\x20de\x20códigos\x20de\x20barras",
    "productosConCodigosAdicionales",
    "CODE_93",
    "❌\x20Código\x20no\x20encontrado:\x20\x22",
    "price",
    "\x20\x20\x20•\x20Variable\x20GOOGLE_VISION_API_KEY\x20no\x20configurada\x20en\x20Vercel",
    "CODE128",
    "submit",
    "overflow",
    "⚠️\x20Error\x20al\x20procesar\x20producto\x20",
    "message",
    "⚠️\x20Límite\x20local\x20alcanzado.\x20Mensual:\x20",
    "\x20→\x20",
    "Formato:",
    "Descargando\x20desde\x20múltiples\x20endpoints...",
    "readwrite",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>",
    "mostrarProductoPromocion",
    "10juYxit",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Precio:\x20$",
    "match",
    "onchange",
    "loadUsage",
    "💻\x20Abriendo\x20modal\x20en\x20desktop...",
    "precio",
    "%</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x22\x20style=\x22height:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-",
    "\x20de\x20",
    "QR_CODE",
    "#ultimaActualizacion",
    "setItem",
    "flex",
    "fire",
    "\x20\x20\x20•\x20API\x20Key\x20inválida\x20o\x20límites\x20excedidos",
    "rawValue",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Endpoint\x20/api/stats\x20falló:\x20",
    "data-sku",
    "installBtn",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>",
    "toDateString",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontraron\x20resultados\x20para:\x20",
    "total_price",
    "2\x20endpoints\x20completados,\x20finalizando...",
    "http",
    "codabar",
    "files",
    "✅\x20Configuración\x20guardada",
    "🍎\x20Dispositivo\x20iOS:",
    "\x22\x20(",
    "totalProductos",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "pr_imagen",
    "getInstance",
    "\x22\x20class=\x22card-img-top\x22\x20alt=\x22",
    "\x0a\x20\x20\x20\x20</div>",
    "code",
    "🎯\x20Umbral\x20calculado:\x20",
    "pro_tipoPromo",
    "consultarProductoDesdeHistorial",
    "🔑\x20PROBLEMA:\x20API\x20Key\x20inválida",
    "</strong>\x20resultados\x20para\x20\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-light\x20rounded\x22\x20style=\x22min-width:\x2060px;\x20height:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-image\x20text-muted\x22\x20style=\x22font-size:\x201.5rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Nunca",
    "getMonth",
    "📏\x20Ampliando\x20imagen\x20pequeña:\x20",
    "Generando\x20código\x20de\x20barras\x20",
    "pdf417",
    "prompt",
    "video",
    "add",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-check\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22form-check-input\x22\x20type=\x22checkbox\x22\x20id=\x22enabledCheck\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "disabled",
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20/*\x20Imagen\x20fija\x20para\x20tarjetas\x20de\x20resultados\x20(grid)\x20*/\x0a\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20border-top-left-radius:\x200.375rem;\x0a\x20\x20\x20\x20border-top-right-radius:\x200.375rem;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20}\x0a\x20\x20.result-card-img\x20img\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20}\x0a\x20\x20/*\x20El\x20espaciado\x20del\x20grid\x20lo\x20maneja\x20Bootstrap\x20g-3;\x20sin\x20margen\x20extra\x20en\x20la\x20card\x20para\x20evitar\x20desalineación\x20*/\x0a\x20\x20.result-card\x20{\x20margin:\x200;\x20}\x0a\x20\x20.promo-badge\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x206px;\x0a\x20\x20\x20\x20left:\x206px;\x0a\x20\x20\x20\x20font-size:\x200.7rem;\x0a\x20\x20}\x0a\x20\x20@media\x20(max-width:\x20576px)\x20{\x0a\x20\x20\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20\x20\x20height:\x20100px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20nombre\x20del\x20producto\x20*/\x0a\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x201.4rem;\x0a\x20\x20\x20\x20line-height:\x201.3;\x0a\x20\x20\x20\x20margin-bottom:\x200.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.1rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20precios\x20*/\x0a\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x203.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x202.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20para\x20código\x20de\x20barras\x20funcional\x20*/\x0a\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20max-width:\x20100%;\x0a\x20\x20\x20\x20height:\x20auto;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20background:\x20#ffffff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x202rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x201.5rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20160px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Modal\x20de\x20resultados\x20al\x2080%\x20en\x20desktop\x20*/\x0a\x20\x20@media\x20(min-width:\x20992px)\x20{\x0a\x20\x20\x20\x20#resultadosBusquedaModal\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20Error\x20verificando\x20estado",
    "applyConstraints",
    "❌\x20Error\x20con\x20API\x20nativa,\x20usando\x20fallback:",
    "button",
    "innerHTML",
    "keydown",
    "codigos_barras",
    "text",
    "fulfilled",
    "precio_total",
    "🔍\x20Validando:\x20\x22",
    "state",
    "FECHA_ESCANEO",
    "canvas",
    "100%",
    "NOMBRE",
    "No\x20se\x20pudieron\x20cargar\x20productos\x20de\x20ningún\x20endpoint",
    "pageSize",
    "\x20minutos",
    "❌\x20Sin\x20datos,\x20usando\x20genérico",
    "\x22\x20class=\x22barcode-canvas\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-bold\x20text-dark\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "div",
    "<span\x20class=\x22badge\x20bg-secondary\x22\x20style=\x22font-size:\x200.7rem;\x22>+",
    "reader",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22consultarProductoDesdeModal(\x27",
    "trim",
    "\x20segundos",
    "splice",
    "rejected",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x22>",
    "✅\x20Google\x20Vision\x20detectó:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "lastUsedDate",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>\x20\x20Total\x20SKUs:</strong>\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Precio\x20promocional</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Usando\x20nombre\x20completo:",
    "\x20usos\x20hoy",
    "autocorrect",
    "style",
    "<div\x20class=\x22row\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22height:\x2080px;\x20object-fit:\x20contain;\x20padding:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔄\x20Iniciando\x20detección\x20con\x20Quagga...",
    "spellcheck",
    "\x20promocion(es)\x20encontrada(s)\x20para\x20SKU:\x20",
    "Error\x20HTTP:\x20",
    "\x20->\x20",
    "CODE_128",
    "<img\x20src=\x22",
    "?t=",
    "\x22\x20style=\x22width:40px;\x20height:40px;\x20object-fit:cover;\x20border-radius:4px;\x20margin-right:12px;\x20background:#f8f9fa;\x22>",
    "slice",
    "fileInput",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers</div>",
    "🔄\x20Primera\x20carga:\x20cargando\x20SOLO\x20productos\x20(promos\x20al\x20presionar\x20Actualizar)...",
    "startsWith",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Leyendo\x20promociones\x20y\x20productos\x20locales...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>CONTADO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20mx-2\x22\x20style=\x22font-size:1.5rem;\x22>|</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x20precio-responsive\x22>$\x20",
    "allSettled",
    "💡\x20El\x20contador\x20del\x20backend\x20se\x20actualiza\x20automáticamente\x20en\x20el\x20servidor",
    "estadisticas",
    "onLine",
    "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "monthlyLimit",
    "btnIrPagina",
    "display",
    "details",
    "❌\x20Error\x20con\x20Google\x20Vision,\x20usando\x20fallback:",
    "\x20(redondeado)",
    "Básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "toLowerCase",
    "top",
    "promoción\x20oficial",
    "i2of5_reader",
    "promociones-container",
    "forEach",
    "⚡\x20Actualización\x20completada\x20en\x20",
    "input",
    "CORS_ERROR:\x20Backend\x20no\x20accesible\x20desde\x20este\x20dominio",
    "accepted",
    "#000000",
    "code_39_reader",
    "https://verificadorb9-backend.vercel.app/api/promociones",
    "🔧\x20Problema\x20de\x20CORS\x20detectado\x20-\x20necesita\x20configuración\x20en\x20backend",
    "description",
    "Página\x20",
    "btn-outline-primary",
    "ceil",
    "getAttribute",
    "webkitOverflowScrolling",
    "1\x20-\x20",
    "</small>",
    "📡\x20Consultando\x20TODOS\x20los\x20endpoints\x20de\x20productos...",
    "resetMonthlyUsage",
    "reduce",
    "<i\x20class=\x22bi\x20bi-clipboard-check\x22></i>",
    "readonly",
    "getUserMedia",
    "✅\x20Código\x20detectado\x20(configuración\x20agresiva):",
    "code_93",
    "code_32_reader",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "Consultando\x203\x20endpoints...",
    "querySelector",
    "margin",
    "className",
    "reason",
    "📋\x20Probando\x20configuración:\x20",
    "\x20endpoints\x20consultados",
    "🔥\x20",
    "diagnostic",
    "stringify",
    "<i\x20class=\x22bi\x20bi-clipboard\x22></i>",
    "),\x20",
    "sort",
    "bi\x20bi-list",
    "📊\x20Resumen\x20endpoints\x20productos:",
    "✅\x20Endpoint\x20básico\x20consultado:",
    "false",
    "target",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20text-truncate\x22\x20title=\x22",
    "update",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Backend:\x20https://contador-apicloudvision.vercel.app/</small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-info\x20btn-sm\x22\x20onclick=\x22diagnosticarBackend()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Probar\x20Conexión\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "detect",
    "🎯\x20Producto\x20encontrado\x20con\x20códigos\x20múltiples:",
    "getUsageStatus",
    "#btnActualizar",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20",
    "cookie",
    "precioTotal",
    "valor_total",
    "autocapitalize",
    "block",
    "length",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📦\x20Productos\x20en\x20promoción:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "EAN13",
    "Algunos\x20endpoints\x20fallaron\x20(",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-medium\x22>",
    "qr_code",
    "dailyCount",
    "formulario",
    ".modal-body",
    "✅\x20Service\x20Worker\x20registrado:",
    "SKU\x20desconocido",
    "200px",
    "addEventListener",
    "12px\x20Arial",
    "backgroundColor",
    "oncomplete",
    "then",
    "disconnect",
    "NetworkError",
    "resultados-busqueda-body",
    "productosConCodigos",
    "head",
    "i2of5",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20mb-0\x22>🏷️\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20pt-2\x20border-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>📅\x20Vigencia:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "location",
    "preventDefault",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-4\x20d-flex\x20justify-content-center\x20mb-3\x20mb-lg-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fff;\x20border-radius:16px;\x20box-shadow:0\x204px\x2024px\x20rgba(0,0,0,0.15);\x20padding:16px;\x20display:flex;\x20justify-content:center;\x20align-items:center;\x20width:240px;\x20height:140px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "clipboard",
    "createImageData",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<div\x20class=\x22alert\x20alert-danger\x22>❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API</div>",
    "🎯\x20Consultando\x20promociones\x20generales...",
    "⚠️\x20<strong>Límite\x20cerca:</strong>\x20",
    "findIndex",
    "CANTIDAD_X_PRECIO_FIJO",
    "appendChild",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x22>$",
    "btnPrevResultados",
    "idPromo",
    "<div\x20class=\x22text-center\x20text-muted\x22>Sin\x20resultados</div>",
    "ℹ️\x20Promos\x20locales\x20disponibles:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20d-flex\x20align-items-center\x20gap-2\x22>",
    "📊\x20Datos\x20extraídos\x20antes\x20de\x20procesamiento:",
    "productos",
    "\x20horas",
    "transparent",
    "1000",
    "\x22\x20loading=\x22lazy\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20object-fit:\x20contain;\x20border-radius:\x208px;\x20background:\x20#f8f9fa;\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.style.display=\x27none\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "googleVisionUsage",
    "\x20unidades\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "pro_mensaje",
    "canUseAPI",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22productos-lista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "historial",
    "other",
    "bg-success\x20text-white",
    "width",
    "🏷️\x20",
    "sugerenciasDiv",
  ];
  _0x212e = function () {
    return _0x419acf;
  };
  return _0x212e();
}
_0x906661(0x212) in navigator &&
  window[_0x906661(0x33c)](_0x906661(0x41e), () => {
    const _0x4ed37f = _0x906661;
    navigator[_0x4ed37f(0x212)]
      ["register"](_0x4ed37f(0x45d))
      [_0x4ed37f(0x340)]((_0x5d03ed) => {
        const _0x207e9e = _0x4ed37f;
        console[_0x207e9e(0x1cd)](_0x207e9e(0x339), _0x5d03ed["scope"]),
          _0x5d03ed[_0x207e9e(0x33c)](_0x207e9e(0x3d2), () => {
            const _0x18435e = _0x207e9e;
            console[_0x18435e(0x1cd)](_0x18435e(0x3e8));
            const _0x157e72 = _0x5d03ed[_0x18435e(0x453)];
            _0x157e72["addEventListener"]("statechange", () => {
              const _0x3dc0a8 = _0x18435e;
              _0x157e72[_0x3dc0a8(0x2b5)] === _0x3dc0a8(0x3aa) &&
                navigator[_0x3dc0a8(0x212)][_0x3dc0a8(0x491)] &&
                (console["log"](
                  "🆕\x20Nueva\x20versión\x20lista\x20para\x20usar"
                ),
                confirm(_0x3dc0a8(0x24e)) &&
                  (_0x157e72[_0x3dc0a8(0x1fb)]({ type: _0x3dc0a8(0x377) }),
                  window["location"][_0x3dc0a8(0x17c)]()));
            });
          });
      })
      [_0x4ed37f(0x1d5)]((_0x5b22c6) =>
        console["error"](_0x4ed37f(0x493), _0x5b22c6)
      ),
      navigator[_0x4ed37f(0x212)]["addEventListener"](
        "controllerchange",
        () => {
          const _0x1e23f7 = _0x4ed37f;
          console[_0x1e23f7(0x1cd)](_0x1e23f7(0x498)),
            window[_0x1e23f7(0x34a)][_0x1e23f7(0x17c)]();
        }
      );
  });
window[_0x906661(0x33c)](_0x906661(0x17f), (_0x3fdf7d) => {
  const _0x14dcee = _0x906661;
  _0x3fdf7d[_0x14dcee(0x34b)](),
    (deferredPrompt = _0x3fdf7d),
    installBtn && installBtn["classList"][_0x14dcee(0x1c5)](_0x14dcee(0x3ae));
}),
  installBtn["addEventListener"](_0x906661(0x47f), (_0x15b32a) => {
    const _0x708a3a = _0x906661;
    deferredPrompt &&
      (deferredPrompt[_0x708a3a(0x2a4)](),
      deferredPrompt[_0x708a3a(0x23e)][_0x708a3a(0x340)]((_0x19441a) => {
        const _0x361162 = _0x708a3a;
        _0x19441a[_0x361162(0x484)] === _0x361162(0x2fa)
          ? console[_0x361162(0x1cd)](_0x361162(0x1a4))
          : console["log"](_0x361162(0x417)),
          (deferredPrompt = null),
          installBtn[_0x361162(0x3e1)]["add"](_0x361162(0x3ae));
      }));
  });
_0x906661(0x212) in navigator &&
  (navigator["serviceWorker"]
    [_0x906661(0x374)]()
    [_0x906661(0x340)](function (_0x51f11d) {
      const _0x43d679 = _0x906661;
      for (let _0x36012e of _0x51f11d) {
        _0x36012e[_0x43d679(0x324)]();
      }
    }),
  navigator[_0x906661(0x212)][_0x906661(0x33c)](
    "controllerchange",
    function () {
      const _0x5527a6 = _0x906661;
      window[_0x5527a6(0x34a)][_0x5527a6(0x17c)]();
    }
  ));
const style = document["createElement"](_0x906661(0x2d1));
(style[_0x906661(0x2ae)] = _0x906661(0x2a9)),
  document[_0x906661(0x345)][_0x906661(0x355)](style);
async function verPromociones() {
  const _0x520d26 = _0x906661;
  try {
    console[_0x520d26(0x1cd)](_0x520d26(0x445)),
      (document[_0x520d26(0x22d)](_0x520d26(0x44d))[_0x520d26(0x2ae)] =
        _0x520d26(0x2e3));
    const [_0x33961f, _0x84bb5d] = await Promise["all"]([
      getAllPromociones(),
      getAllProductos(),
    ]);
    if (!Array["isArray"](_0x33961f) || _0x33961f[_0x520d26(0x330)] === 0x0) {
      document[_0x520d26(0x22d)]("resultado")[_0x520d26(0x2ae)] =
        _0x520d26(0x1b7);
      return;
    }
    let _0x546be9 = _0x520d26(0x2d2);
    _0x33961f[_0x520d26(0x2f6)]((_0x16e9e6, _0x69ef0c) => {
      const _0x58ca2d = _0x520d26;
      let _0x1b0108 = [];
      if (
        _0x16e9e6["skus"] &&
        Array[_0x58ca2d(0x1c0)](_0x16e9e6[_0x58ca2d(0x385)])
      )
        _0x1b0108 = _0x16e9e6[_0x58ca2d(0x385)];
      else
        _0x16e9e6[_0x58ca2d(0x3ef)] &&
          _0x16e9e6[_0x58ca2d(0x3ef)][_0x58ca2d(0x48a)] &&
          (Array[_0x58ca2d(0x1c0)](
            _0x16e9e6[_0x58ca2d(0x3ef)][_0x58ca2d(0x48a)]
          )
            ? (_0x1b0108 = _0x16e9e6["pro_grupoProductos_primaria"]["pr_sku"])
            : (_0x1b0108 = _0x16e9e6[_0x58ca2d(0x3ef)][_0x58ca2d(0x48a)]
                [_0x58ca2d(0x3b7)]("\x20")
                ["filter"]((_0x4b6f48) => _0x4b6f48["trim"]())));
      const _0x397ce0 = _0x1b0108["map"]((_0x7a9c50) => {
          const _0x3e8651 = _0x58ca2d;
          return _0x84bb5d[_0x3e8651(0x3cd)](
            (_0x16e352) => _0x16e352["pr_sku"] === _0x7a9c50
          );
        })[_0x58ca2d(0x38f)]((_0x5cdf05) => _0x5cdf05 !== undefined),
        _0x305d20 =
          _0x16e9e6[_0x58ca2d(0x17b)] ||
          _0x16e9e6["descripcion"] ||
          "Promoción\x20" + (_0x69ef0c + 0x1),
        _0x20cf45 =
          _0x16e9e6["pro_tipoPromo"] || _0x16e9e6["tipo"] || _0x58ca2d(0x1f3),
        _0x2ace1a =
          _0x16e9e6[_0x58ca2d(0x364)] || _0x16e9e6[_0x58ca2d(0x1bb)] || "",
        _0x6fd352 = _0x16e9e6[_0x58ca2d(0x3fe)] || "",
        _0x559543 = Number(_0x6fd352) || 0x1;
      let _0x186be4 = 0x0;
      const _0x350093 = (_0x2ace1a + "\x20" + _0x305d20)[_0x58ca2d(0x2f1)](),
        _0x3eeca2 = _0x350093[_0x58ca2d(0x276)](/(\d+)\s*x\s*(\d+)/);
      if (_0x3eeca2) _0x186be4 = Number(_0x3eeca2[0x2]);
      else {
        const _0x35b045 = Number(_0x16e9e6["pro_precioPromo"]) || 0x0;
        _0x186be4 = _0x35b045 * _0x559543;
      }
      let _0x30f2fd = 0x0,
        _0x545695 = 0x0;
      if (_0x397ce0[_0x58ca2d(0x330)] > 0x0 && _0x6fd352 && _0x186be4 > 0x0) {
        const _0x1c70dd = _0x397ce0[_0x58ca2d(0x22c)]((_0x46aab7) => {
            const _0x20ac12 = _0x58ca2d;
            let _0x41cfd3 =
              Number(_0x46aab7[_0x20ac12(0x1ac)]) ||
              Number(_0x46aab7["L1"]) ||
              0x0;
            return Math["round"](_0x41cfd3 * 1.16 * 0x64) / 0x64;
          }),
          _0x223d07 =
            _0x1c70dd[_0x58ca2d(0x309)](
              (_0x3386c4, _0x826b7c) => _0x3386c4 + _0x826b7c,
              0x0
            ) / _0x1c70dd[_0x58ca2d(0x330)];
        (_0x30f2fd =
          Math[_0x58ca2d(0x42a)](_0x223d07 * _0x559543 * 0x64) / 0x64),
          (_0x545695 = Math["round"]((_0x30f2fd - _0x186be4) * 0x64) / 0x64);
      }
      let _0x21d36c = "";
      if (_0x397ce0[_0x58ca2d(0x330)] > 0x0) {
        const _0x4a8ed5 = _0x397ce0["slice"](0x0, 0x4)
          ["map"]((_0x583e6c) => {
            const _0x19d344 = _0x58ca2d;
            let _0x78f26a = "";
            if (
              _0x583e6c[_0x19d344(0x294)] &&
              _0x583e6c[_0x19d344(0x294)][_0x19d344(0x2c4)]() !== ""
            ) {
              if (
                _0x583e6c[_0x19d344(0x294)][_0x19d344(0x2e2)](_0x19d344(0x28c))
              )
                _0x78f26a = _0x583e6c[_0x19d344(0x294)];
              else {
                let _0x16e3b1 = _0x583e6c[_0x19d344(0x294)][_0x19d344(0x2e2)](
                  "/"
                )
                  ? _0x583e6c[_0x19d344(0x294)]
                  : "/" + _0x583e6c[_0x19d344(0x294)];
                _0x78f26a = _0x19d344(0x393) + _0x16e3b1;
              }
            }
            return _0x78f26a
              ? _0x19d344(0x2ca) +
                  _0x78f26a +
                  _0x19d344(0x296) +
                  _0x583e6c[_0x19d344(0x416)] +
                  _0x19d344(0x2d4) +
                  _0x583e6c[_0x19d344(0x416)] +
                  _0x19d344(0x476) +
                  _0x583e6c["pr_sku"] +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22" +
                  _0x583e6c[_0x19d344(0x48a)] +
                  "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-img-top\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-secondary\x22\x20style=\x22height:\x2080px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-white\x22>📦</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                  _0x583e6c[_0x19d344(0x416)] +
                  _0x19d344(0x476) +
                  _0x583e6c[_0x19d344(0x48a)] +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22" +
                  _0x583e6c[_0x19d344(0x48a)] +
                  _0x19d344(0x34f);
          })
          [_0x58ca2d(0x1ee)]("");
        _0x21d36c =
          _0x58ca2d(0x331) +
          _0x4a8ed5 +
          _0x58ca2d(0x38e) +
          (_0x397ce0[_0x58ca2d(0x330)] > 0x4
            ? _0x58ca2d(0x162) +
              (_0x397ce0[_0x58ca2d(0x330)] - 0x4) +
              "\x20producto" +
              (_0x397ce0[_0x58ca2d(0x330)] - 0x4 > 0x1 ? "s" : "") +
              "\x20más</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20";
      }
      _0x546be9 +=
        _0x58ca2d(0x37a) +
        _0x305d20 +
        _0x58ca2d(0x287) +
        _0x20cf45["replace"](_0x58ca2d(0x354), _0x58ca2d(0x254)) +
        "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x2ace1a && _0x2ace1a !== _0x305d20
          ? _0x58ca2d(0x471) + _0x2ace1a + _0x58ca2d(0x220)
          : "") +
        _0x58ca2d(0x473) +
        (_0x186be4 > 0x0
          ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x20p-3\x20bg-light\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>" +
            _0x559543 +
            _0x58ca2d(0x3af) +
            _0x186be4[_0x58ca2d(0x423)]("es-CL") +
            "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22>Total\x20con\x20Promo</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            (_0x30f2fd > 0x0
              ? _0x58ca2d(0x168) +
                _0x30f2fd[_0x58ca2d(0x423)]("es-CL") +
                _0x58ca2d(0x403)
              : _0x58ca2d(0x46f)) +
            _0x58ca2d(0x1e4) +
            (_0x545695 > 0x0
              ? _0x58ca2d(0x37f) +
                _0x545695[_0x58ca2d(0x423)](_0x58ca2d(0x483)) +
                _0x58ca2d(0x3ab) +
                _0x559543 +
                _0x58ca2d(0x363)
              : "") +
            _0x58ca2d(0x191)
          : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            (_0x6fd352 ? _0x58ca2d(0x2c8) + _0x6fd352 + _0x58ca2d(0x456) : "") +
            _0x58ca2d(0x347) +
            (precioPromo
              ? _0x58ca2d(0x356) + precioPromo + _0x58ca2d(0x2cd)
              : "") +
            _0x58ca2d(0x191)) +
        _0x58ca2d(0x473) +
        _0x21d36c +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x397ce0["length"] > 0x0
          ? _0x58ca2d(0x40e) +
            _0x397ce0[_0x58ca2d(0x22c)](
              (_0x212e7a, _0x1ceccb) =>
                _0x58ca2d(0x238) +
                (_0x1ceccb < _0x397ce0["length"] - 0x1
                  ? "border-bottom\x20pb-3"
                  : "") +
                _0x58ca2d(0x188) +
                _0x212e7a[_0x58ca2d(0x416)] +
                _0x58ca2d(0x415) +
                _0x212e7a[_0x58ca2d(0x48a)] +
                _0x58ca2d(0x370) +
                (_0x212e7a[_0x58ca2d(0x1d3)]
                  ? _0x58ca2d(0x47a) +
                    _0x212e7a[_0x58ca2d(0x1d3)] +
                    _0x58ca2d(0x306)
                  : "") +
                _0x58ca2d(0x3e3) +
                (() => {
                  const _0x32aa5f = _0x58ca2d;
                  let _0x3f4d77 =
                      Number(_0x212e7a[_0x32aa5f(0x1ac)]) ||
                      Number(_0x212e7a["L1"]) ||
                      0x0,
                    _0x4e9ca5 = Math["round"](_0x3f4d77 * 1.16 * 0x64) / 0x64;
                  return _0x4e9ca5 > 0x0
                    ? "<small\x20class=\x22text-success\x22><strong>Precio\x20unitario:</strong>\x20$" +
                        _0x4e9ca5[_0x32aa5f(0x18b)](0x2) +
                        "</small>"
                    : "";
                })() +
                _0x58ca2d(0x36f)
            )["join"]("") +
            _0x58ca2d(0x478)
          : "") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x1b0108["length"] > _0x397ce0[_0x58ca2d(0x330)]
          ? _0x58ca2d(0x2cc) +
            _0x1b0108["length"] +
            _0x58ca2d(0x439) +
            _0x397ce0["length"] +
            "\x20con\x20datos\x20disponibles)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            _0x1b0108[_0x58ca2d(0x2de)](0x0, 0x6)
              ["map"](
                (_0x3549ad) => _0x58ca2d(0x480) + _0x3549ad + _0x58ca2d(0x47e)
              )
              ["join"]("") +
            _0x58ca2d(0x3db) +
            (_0x1b0108[_0x58ca2d(0x330)] > 0x6
              ? _0x58ca2d(0x2c1) +
                (_0x1b0108[_0x58ca2d(0x330)] - 0x6) +
                _0x58ca2d(0x261)
              : "") +
            _0x58ca2d(0x478)
          : "") +
        _0x58ca2d(0x473) +
        (_0x16e9e6[_0x58ca2d(0x1a0)] && _0x16e9e6[_0x58ca2d(0x1e7)]
          ? _0x58ca2d(0x349) +
            _0x16e9e6[_0x58ca2d(0x1a0)] +
            "\x20al\x20" +
            _0x16e9e6[_0x58ca2d(0x1e7)] +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
          : "") +
        _0x58ca2d(0x1ff);
    }),
      (_0x546be9 += _0x520d26(0x3fb)),
      (_0x546be9 += _0x520d26(0x486)),
      (document[_0x520d26(0x22d)](_0x520d26(0x44d))[_0x520d26(0x2ae)] =
        _0x546be9);
    const _0x4ca24a = document[_0x520d26(0x184)](".copiar-sku-btn");
    _0x4ca24a[_0x520d26(0x2f6)]((_0x251b85) => {
      const _0x2a62eb = _0x520d26;
      _0x251b85["addEventListener"](_0x2a62eb(0x47f), function (_0xd69583) {
        const _0x2817f0 = _0x2a62eb;
        _0xd69583[_0x2817f0(0x34b)]();
        const _0x31d921 = _0x251b85[_0x2817f0(0x303)](_0x2817f0(0x285));
        navigator[_0x2817f0(0x34d)] &&
          navigator["clipboard"]
            [_0x2817f0(0x43f)](_0x31d921)
            [_0x2817f0(0x340)](() => {
              const _0x5e6045 = _0x2817f0,
                _0xd4defe = _0x251b85[_0x5e6045(0x2ae)];
              (_0x251b85[_0x5e6045(0x2ae)] = "✅"),
                _0x251b85["classList"][_0x5e6045(0x1c5)](_0x5e6045(0x301)),
                _0x251b85["classList"][_0x5e6045(0x2a6)](_0x5e6045(0x3da)),
                setTimeout(() => {
                  const _0x48ebe6 = _0x5e6045;
                  (_0x251b85[_0x48ebe6(0x2ae)] = _0xd4defe),
                    _0x251b85[_0x48ebe6(0x3e1)][_0x48ebe6(0x1c5)](
                      _0x48ebe6(0x3da)
                    ),
                    _0x251b85["classList"][_0x48ebe6(0x2a6)](
                      "btn-outline-primary"
                    );
                }, 0x4b0);
            })
            [_0x2817f0(0x1d5)]((_0x463635) => {
              const _0xe1d875 = _0x2817f0;
              console[_0xe1d875(0x169)](_0xe1d875(0x214), _0x463635);
              const _0x2935a5 = _0x251b85["innerHTML"];
              (_0x251b85[_0xe1d875(0x2ae)] = "❌"),
                setTimeout(() => {
                  const _0x5f41ed = _0xe1d875;
                  _0x251b85[_0x5f41ed(0x2ae)] = _0x2935a5;
                }, 0x4b0);
            });
      });
    });
  } catch (_0x1ec2a3) {
    console[_0x520d26(0x169)](_0x520d26(0x250), _0x1ec2a3),
      (document["getElementById"](_0x520d26(0x44d))["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudieron\x20cargar\x20las\x20promociones:\x20" +
        _0x1ec2a3[_0x520d26(0x26c)] +
        _0x520d26(0x1f9));
  }
}
cargarConfiguracionGuardada(), renderHistorial();
const mobileModalStyles = document[_0x906661(0x469)]("style");
(mobileModalStyles[_0x906661(0x3ec)] =
  "\x0a\x20\x20/*\x20Estilos\x20específicos\x20para\x20modal\x20en\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20/*\x20Evitar\x20oscurecimiento\x20de\x20fondo\x20en\x20móviles\x20*/\x0a\x20\x20\x20\x20.modal-backdrop,\x0a\x20\x20\x20\x20.modal-backdrop.show,\x0a\x20\x20\x20\x20.modal-backdrop.fade\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20stretch\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-dialog,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-content,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-body,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20flex:\x201\x20!important;\x0a\x20\x20\x20\x20\x20\x20overflow-y:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-height:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding:\x201rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-header,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-footer,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-footer\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20Asegurar\x20que\x20las\x20tarjetas\x20no\x20causen\x20overflow\x20horizontal\x20*/\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.row\x20{\x0a\x20\x20\x20\x20\x20\x20margin-left:\x20-8px\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin-right:\x20-8px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20[class*=\x22col-\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20padding-left:\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding-right:\x208px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Mejorar\x20scroll\x20en\x20todos\x20los\x20dispositivos\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0,\x200,\x200)\x20!important;\x20/*\x20Forzar\x20aceleración\x20por\x20hardware\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a"),
  document[_0x906661(0x345)][_0x906661(0x355)](mobileModalStyles);
let resultadosBusquedaState = {
  items: [],
  page: 0x1,
  pageSize: 0xa,
  query: "",
  view: "list",
};
function mostrarModalResultadosBusqueda(_0x3f455d, _0x13a4d6) {
  const _0x23956c = _0x906661;
  (resultadosBusquedaState[_0x23956c(0x3a2)] = _0x3f455d),
    (resultadosBusquedaState[_0x23956c(0x39d)] = 0x1),
    (resultadosBusquedaState[_0x23956c(0x2bb)] = 0xa),
    (resultadosBusquedaState[_0x23956c(0x1cc)] = _0x13a4d6);
  try {
    const _0x536bec = localStorage["getItem"]("resultados_view");
    (_0x536bec === _0x23956c(0x470) || _0x536bec === _0x23956c(0x3a8)) &&
      (resultadosBusquedaState["view"] = _0x536bec);
  } catch (_0x38cc55) {}
  const _0x3caed2 = document[_0x23956c(0x22d)](_0x23956c(0x343));
  if (!_0x3caed2) return;
  try {
    const _0x17bc7d = document[_0x23956c(0x22d)](_0x23956c(0x44d));
    _0x17bc7d &&
      /Buscando producto/i[_0x23956c(0x3b4)](_0x17bc7d["textContent"] || "") &&
      (_0x17bc7d["innerHTML"] = "");
  } catch (_0x30e66b) {}
  try {
    const _0x3763a9 = document["getElementById"]("codigo");
    _0x3763a9 &&
      ((_0x3763a9[_0x23956c(0x1be)] = ""),
      (_0x3763a9["placeholder"] = _0x23956c(0x198)));
    const _0x5ba0d9 = document[_0x23956c(0x22d)]("sugerenciasDiv");
    _0x5ba0d9 &&
      ((_0x5ba0d9[_0x23956c(0x2ae)] = ""),
      (_0x5ba0d9[_0x23956c(0x2d1)]["display"] = _0x23956c(0x24f)));
  } catch (_0x3e21a6) {}
  renderResultadosBusqueda();
  const _0x4a4cf4 = document[_0x23956c(0x22d)](_0x23956c(0x21f)),
    _0x4e253e =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i["test"](
        navigator[_0x23956c(0x195)]
      );
  if (_0x4e253e)
    (_0x4a4cf4[_0x23956c(0x2d1)]["position"] = _0x23956c(0x221)),
      (_0x4a4cf4[_0x23956c(0x2d1)][_0x23956c(0x2f2)] = "0"),
      (_0x4a4cf4[_0x23956c(0x2d1)][_0x23956c(0x244)] = "0"),
      (_0x4a4cf4[_0x23956c(0x2d1)][_0x23956c(0x36a)] = _0x23956c(0x2b8)),
      (_0x4a4cf4[_0x23956c(0x2d1)][_0x23956c(0x373)] = _0x23956c(0x2b8)),
      (_0x4a4cf4["style"][_0x23956c(0x411)] = _0x23956c(0x438)),
      (_0x4a4cf4[_0x23956c(0x2d1)][_0x23956c(0x33e)] = _0x23956c(0x35f)),
      (_0x4a4cf4[_0x23956c(0x2d1)][_0x23956c(0x2ec)] = _0x23956c(0x32f)),
      _0x4a4cf4[_0x23956c(0x3e1)]["add"](_0x23956c(0x384));
  else {
    const _0x1ab6fe = new bootstrap[_0x23956c(0x3bf)](_0x4a4cf4, {
      backdrop: !![],
      keyboard: !![],
    });
    _0x1ab6fe["show"]();
  }
}
function cerrarResultadosModal() {
  const _0x16fe0e = _0x906661,
    _0x33bc84 = document[_0x16fe0e(0x22d)](_0x16fe0e(0x21f));
  if (!_0x33bc84) return;
  _0x33bc84["classList"][_0x16fe0e(0x1c5)](_0x16fe0e(0x384)),
    (_0x33bc84[_0x16fe0e(0x2d1)]["display"] = _0x16fe0e(0x24f));
  try {
    const _0x5c92bc = bootstrap[_0x16fe0e(0x3bf)][_0x16fe0e(0x295)](_0x33bc84);
    if (_0x5c92bc) _0x5c92bc["hide"]();
  } catch (_0x28cb70) {}
  document[_0x16fe0e(0x184)](".modal-backdrop")[_0x16fe0e(0x2f6)]((_0x45bffe) =>
    _0x45bffe[_0x16fe0e(0x1c5)]()
  );
  try {
    const _0x22e537 = document["getElementById"](_0x16fe0e(0x44d));
    _0x22e537 &&
      /Buscando producto/i[_0x16fe0e(0x3b4)](_0x22e537["textContent"] || "") &&
      (_0x22e537["innerHTML"] = "");
  } catch (_0xaaedb3) {}
  try {
    const _0x2d5008 = document[_0x16fe0e(0x22d)](_0x16fe0e(0x1cb));
    _0x2d5008 &&
      ((_0x2d5008[_0x16fe0e(0x487)] = _0x16fe0e(0x198)), bringInputIntoView());
  } catch (_0x4b4ad3) {}
}
function bringInputIntoView(_0x25a80b = {}) {
  const _0x23cd0f = _0x906661,
    { focusOnDesktop: focusOnDesktop = !![] } = _0x25a80b,
    _0x5b3f31 = document[_0x23cd0f(0x22d)](_0x23cd0f(0x1cb));
  if (!_0x5b3f31) return;
  try {
    _0x5b3f31[_0x23cd0f(0x1b2)]({
      behavior: _0x23cd0f(0x196),
      block: _0x23cd0f(0x23c),
      inline: _0x23cd0f(0x1fe),
    });
  } catch (_0x1e9702) {}
  const _0x1dd806 =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
      _0x23cd0f(0x3b4)
    ](navigator[_0x23cd0f(0x195)]);
  if (!_0x1dd806 && focusOnDesktop)
    try {
      _0x5b3f31[_0x23cd0f(0x3f9)]({ preventScroll: !![] });
    } catch (_0x39731e) {
      try {
        _0x5b3f31[_0x23cd0f(0x3f9)]();
      } catch (_0x6bd1d2) {}
    }
}
async function renderResultadosBusqueda() {
  const _0x1986c9 = _0x906661,
    _0x5cf73d = document["getElementById"]("resultados-busqueda-body");
  if (!_0x5cf73d) return;
  const {
      items: _0x4a9239,
      page: _0x3753a7,
      pageSize: _0x5f0ed0,
      query: _0x135045,
      view: _0x789600,
    } = resultadosBusquedaState,
    _0x566cad = _0x4a9239["length"],
    _0x1c2863 = Math[_0x1986c9(0x448)](
      0x1,
      Math[_0x1986c9(0x302)](_0x566cad / _0x5f0ed0)
    ),
    _0x280fb4 = Math[_0x1986c9(0x3fc)](_0x3753a7, _0x1c2863),
    _0x48cdc4 = (_0x280fb4 - 0x1) * _0x5f0ed0,
    _0x67721e = Math[_0x1986c9(0x3fc)](_0x48cdc4 + _0x5f0ed0, _0x566cad),
    _0x1e3a6a = _0x4a9239[_0x1986c9(0x2de)](_0x48cdc4, _0x67721e);
  let _0x2998b7 = [];
  try {
    _0x2998b7 = await Promise[_0x1986c9(0x383)](
      _0x1e3a6a[_0x1986c9(0x22c)]((_0x1b0bf4) =>
        tienePromociones(_0x1b0bf4)
          [_0x1986c9(0x340)](Boolean)
          [_0x1986c9(0x1d5)](() => ![])
      )
    );
  } catch (_0xd1c056) {
    _0x2998b7 = _0x1e3a6a["map"](() => ![]);
  }
  const _0x149f91 = (_0x7c1052, _0x48b699) => {
      const _0x580099 = _0x1986c9,
        _0x2e69a1 = _0x7c1052[_0x580099(0x416)] || "",
        _0x2a3780 =
          _0x7c1052[_0x580099(0x48a)] || _0x7c1052[_0x580099(0x1d3)] || "";
      let _0xa72352 = "";
      if (
        _0x7c1052[_0x580099(0x294)] &&
        _0x7c1052[_0x580099(0x294)][_0x580099(0x2c4)]() !== ""
      ) {
        if (_0x7c1052["pr_imagen"][_0x580099(0x2e2)](_0x580099(0x28c)))
          _0xa72352 = _0x7c1052[_0x580099(0x294)];
        else {
          const _0x283379 = _0x7c1052[_0x580099(0x294)][_0x580099(0x2e2)]("/")
            ? _0x7c1052["pr_imagen"]
            : "/" + _0x7c1052[_0x580099(0x294)];
          _0xa72352 = "https://media.megaservicio.net" + _0x283379;
        }
      }
      const _0x5dc8d8 =
          Number(_0x7c1052[_0x580099(0x1ac)]) || Number(_0x7c1052["L1"]) || 0x0,
        _0x35d771 = Math[_0x580099(0x42a)](_0x5dc8d8 * 1.16 * 0x64) / 0x64;
      return (
        _0x580099(0x1b9) +
        (_0x48b699
          ? "<span\x20class=\x22badge\x20bg-success\x20text-white\x20promo-badge\x22>🏷️\x20PROMO</span>"
          : "") +
        _0x580099(0x2bf) +
        (_0xa72352
          ? "<img\x20src=\x22" +
            _0xa72352 +
            _0x580099(0x1dc) +
            _0x2e69a1 +
            _0x580099(0x3c9)
          : _0x580099(0x44e)) +
        _0x580099(0x323) +
        _0x2e69a1 +
        "\x22>" +
        _0x2e69a1 +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20" +
        _0x2a3780 +
        "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x35d771 > 0x0
          ? "<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$" +
            _0x35d771["toFixed"](0x2) +
            _0x580099(0x3fb)
          : "") +
        _0x580099(0x17e) +
        _0x2a3780 +
        _0x580099(0x217)
      );
    },
    _0x5591cf = (_0x121967, _0x5f49a0) => {
      const _0x4d9428 = _0x1986c9,
        _0x5c29f4 = _0x121967[_0x4d9428(0x416)] || "",
        _0x6901fd =
          _0x121967[_0x4d9428(0x48a)] || _0x121967[_0x4d9428(0x1d3)] || "";
      let _0x55d7d6 = "";
      if (
        _0x121967[_0x4d9428(0x294)] &&
        _0x121967[_0x4d9428(0x294)]["trim"]() !== ""
      ) {
        if (_0x121967[_0x4d9428(0x294)][_0x4d9428(0x2e2)]("http"))
          _0x55d7d6 = _0x121967[_0x4d9428(0x294)];
        else {
          const _0xf1b3f4 = _0x121967["pr_imagen"][_0x4d9428(0x2e2)]("/")
            ? _0x121967[_0x4d9428(0x294)]
            : "/" + _0x121967["pr_imagen"];
          _0x55d7d6 = "https://media.megaservicio.net" + _0xf1b3f4;
        }
      }
      return (
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x55d7d6
          ? "<div\x20class=\x22me-3\x22\x20style=\x22min-width:60px;\x22><img\x20src=\x22" +
            _0x55d7d6 +
            _0x4d9428(0x1dc) +
            _0x5c29f4 +
            _0x4d9428(0x388)
          : "") +
        _0x4d9428(0x35b) +
        _0x5c29f4 +
        (_0x5f49a0 ? _0x4d9428(0x375) : "") +
        _0x4d9428(0x376) +
        _0x6901fd +
        _0x4d9428(0x225) +
        _0x6901fd +
        "\x27);\x20})()\x22>Ver</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>"
      );
    };
  let _0x2587c1 = "";
  if (_0x789600 === _0x1986c9(0x470)) {
    const _0x2be40e = _0x1e3a6a[_0x1986c9(0x22c)](
      (_0x2d31b5, _0xe1a1c2) =>
        _0x1986c9(0x227) +
        _0x149f91(_0x2d31b5, !!_0x2998b7[_0xe1a1c2]) +
        _0x1986c9(0x3fb)
    )[_0x1986c9(0x1ee)]("");
    _0x2587c1 =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20row-cols-2\x20row-cols-md-3\x20row-cols-lg-4\x20g-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
      _0x2be40e +
      _0x1986c9(0x3f2);
  } else {
    const _0x156d4f = _0x1e3a6a[_0x1986c9(0x22c)]((_0x2a3a94, _0xaf55e4) =>
      _0x5591cf(_0x2a3a94, !!_0x2998b7[_0xaf55e4])
    )[_0x1986c9(0x1ee)]("");
    _0x2587c1 = _0x156d4f;
  }
  _0x5cf73d["innerHTML"] =
    _0x1986c9(0x419) +
    _0x566cad +
    _0x1986c9(0x29d) +
    _0x135045 +
    _0x1986c9(0x1f0) +
    (_0x789600 === _0x1986c9(0x470) ? _0x1986c9(0x410) : _0x1986c9(0x382)) +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20" +
    (_0x2587c1 || _0x1986c9(0x359)) +
    _0x1986c9(0x421);
  const _0x4d004f = document[_0x1986c9(0x22d)](_0x1986c9(0x3b6)),
    _0x74babe = document[_0x1986c9(0x22d)](_0x1986c9(0x418));
  if (_0x4d004f)
    _0x4d004f["textContent"] =
      _0x48cdc4 + 0x1 + "-" + _0x67721e + _0x1986c9(0x27c) + _0x566cad;
  if (_0x74babe)
    _0x74babe[_0x1986c9(0x3ec)] =
      _0x1986c9(0x300) + _0x280fb4 + _0x1986c9(0x242) + _0x1c2863;
  const _0x5509a6 = document[_0x1986c9(0x22d)](_0x1986c9(0x357)),
    _0x4e2e94 = document[_0x1986c9(0x22d)](_0x1986c9(0x173));
  _0x5509a6 &&
    ((_0x5509a6[_0x1986c9(0x2a8)] = _0x280fb4 <= 0x1),
    (_0x5509a6[_0x1986c9(0x204)] = () => {
      const _0x1685ab = _0x1986c9;
      (resultadosBusquedaState[_0x1685ab(0x39d)] = Math["max"](
        0x1,
        _0x280fb4 - 0x1
      )),
        renderResultadosBusqueda();
    }));
  _0x4e2e94 &&
    ((_0x4e2e94[_0x1986c9(0x2a8)] = _0x280fb4 >= _0x1c2863),
    (_0x4e2e94[_0x1986c9(0x204)] = () => {
      const _0x3a2ade = _0x1986c9;
      (resultadosBusquedaState["page"] = Math[_0x3a2ade(0x3fc)](
        _0x1c2863,
        _0x280fb4 + 0x1
      )),
        renderResultadosBusqueda();
    }));
  const _0x1af800 = document["getElementById"]("pageSizeSelect");
  _0x1af800 &&
    ((_0x1af800[_0x1986c9(0x1be)] = String(
      resultadosBusquedaState[_0x1986c9(0x2bb)]
    )),
    (_0x1af800[_0x1986c9(0x277)] = (_0x3709e8) => {
      const _0x55cee0 = _0x1986c9,
        _0x13355e = parseInt(_0x3709e8[_0x55cee0(0x322)]["value"], 0xa) || 0xa;
      (resultadosBusquedaState[_0x55cee0(0x2bb)] = _0x13355e),
        (resultadosBusquedaState[_0x55cee0(0x39d)] = 0x1),
        renderResultadosBusqueda();
    }));
  const _0x188765 = document[_0x1986c9(0x22d)](_0x1986c9(0x236)),
    _0x401de4 = document[_0x1986c9(0x22d)](_0x1986c9(0x378)),
    _0x1c8d93 = document["getElementById"]("labelVista");
  _0x188765 &&
    _0x401de4 &&
    _0x1c8d93 &&
    (_0x789600 === "grid"
      ? ((_0x401de4[_0x1986c9(0x314)] = _0x1986c9(0x31e)),
        (_0x1c8d93[_0x1986c9(0x3ec)] = _0x1986c9(0x382)))
      : ((_0x401de4[_0x1986c9(0x314)] = "bi\x20bi-grid-3x3-gap"),
        (_0x1c8d93["textContent"] = "Cuadros")),
    (_0x188765[_0x1986c9(0x204)] = () => {
      const _0x2bcff1 = _0x1986c9;
      resultadosBusquedaState[_0x2bcff1(0x21c)] =
        resultadosBusquedaState[_0x2bcff1(0x21c)] === "grid"
          ? _0x2bcff1(0x3a8)
          : _0x2bcff1(0x470);
      try {
        localStorage["setItem"](
          "resultados_view",
          resultadosBusquedaState[_0x2bcff1(0x21c)]
        );
      } catch (_0x3a8b9d) {}
      renderResultadosBusqueda();
    }));
  const _0x30c359 = document[_0x1986c9(0x22d)](_0x1986c9(0x202)),
    _0x9f6043 = document["getElementById"](_0x1986c9(0x2eb));
  _0x30c359 &&
    ((_0x30c359[_0x1986c9(0x3fc)] = "1"),
    (_0x30c359["max"] = String(_0x1c2863)),
    (_0x30c359[_0x1986c9(0x487)] = _0x1986c9(0x305) + _0x1c2863));
  const _0x1bedb0 = () => {
    const _0x3ebbfa = _0x1986c9,
      _0x222b3f = parseInt(
        (_0x30c359?.[_0x3ebbfa(0x1be)] || "")["trim"](),
        0xa
      );
    if (!isNaN(_0x222b3f)) {
      const _0x4c188c = Math[_0x3ebbfa(0x448)](
        0x1,
        Math["min"](_0x1c2863, _0x222b3f)
      );
      (resultadosBusquedaState["page"] = _0x4c188c), renderResultadosBusqueda();
    }
  };
  if (_0x9f6043) _0x9f6043[_0x1986c9(0x204)] = _0x1bedb0;
  if (_0x30c359)
    _0x30c359[_0x1986c9(0x33c)]("keydown", (_0x20fe7a) => {
      const _0x3303c3 = _0x1986c9;
      _0x20fe7a[_0x3303c3(0x1e2)] === _0x3303c3(0x436) &&
        (_0x20fe7a[_0x3303c3(0x34b)](), _0x1bedb0());
    });
}
async function mostrarDetalleProductoBySKU(_0x204bca) {
  const _0x440fa9 = _0x906661,
    _0x335d77 = await getAllProductos(),
    _0x406f98 = _0x335d77[_0x440fa9(0x3cd)](
      (_0x5a9d28) =>
        String(_0x5a9d28[_0x440fa9(0x48a)]) === String(_0x204bca) ||
        String(_0x5a9d28[_0x440fa9(0x1d3)]) === String(_0x204bca)
    );
  if (_0x406f98) {
    mostrarDetalleProducto(_0x406f98);
    const _0x41c5d7 = {
      ..._0x406f98,
      FECHA_ESCANEO: new Date()[_0x440fa9(0x3c5)](),
    };
    historial[_0x440fa9(0x1cf)](_0x41c5d7),
      setCookie(_0x440fa9(0x367), JSON[_0x440fa9(0x31a)](historial), 0x1e),
      renderHistorial(),
      setTimeout(() => {
        const _0x4f2480 = _0x440fa9,
          _0x2f8b12 = document["getElementById"](_0x4f2480(0x44d));
        _0x2f8b12 &&
          _0x2f8b12[_0x4f2480(0x1b2)]({
            behavior: _0x4f2480(0x196),
            block: _0x4f2480(0x42e),
            inline: _0x4f2480(0x1fe),
          });
      }, 0xc8);
  }
}
