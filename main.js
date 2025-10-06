const _0x406c10 = _0x3a44;
(function (_0x5b5f14, _0x5d9509) {
  const _0x1b0c37 = _0x3a44,
    _0x4d7464 = _0x5b5f14();
  while (!![]) {
    try {
      const _0xad42f =
        (-parseInt(_0x1b0c37(0x28d)) / 0x1) *
          (-parseInt(_0x1b0c37(0x1cd)) / 0x2) +
        parseInt(_0x1b0c37(0x37d)) / 0x3 +
        (parseInt(_0x1b0c37(0x4d1)) / 0x4) *
          (parseInt(_0x1b0c37(0x348)) / 0x5) +
        (-parseInt(_0x1b0c37(0x228)) / 0x6) *
          (-parseInt(_0x1b0c37(0x364)) / 0x7) +
        -parseInt(_0x1b0c37(0x1f7)) / 0x8 +
        parseInt(_0x1b0c37(0x51b)) / 0x9 +
        -parseInt(_0x1b0c37(0x1a5)) / 0xa;
      if (_0xad42f === _0x5d9509) break;
      else _0x4d7464["push"](_0x4d7464["shift"]());
    } catch (_0x5d0fe8) {
      _0x4d7464["push"](_0x4d7464["shift"]());
    }
  }
})(_0x3902, 0xae5e1),
  document["addEventListener"](_0x406c10(0x3cb), function () {
    const _0x19ba93 = _0x406c10;
    console[_0x19ba93(0x366)](
      "🚀\x20DOM\x20completamente\x20cargado,\x20inicializando\x20aplicación..."
    );
  });
const form = document[_0x406c10(0x4ba)](_0x406c10(0x20c)),
  inputCodigo = document["getElementById"](_0x406c10(0x3d6)),
  readerDiv = document[_0x406c10(0x4ba)](_0x406c10(0x221)),
  ayudaTexto = document["getElementById"](_0x406c10(0x1c8)),
  installBtn = document["getElementById"](_0x406c10(0x343));
(!form || !inputCodigo) &&
  console[_0x406c10(0x27b)](
    "❌\x20Elementos\x20críticos\x20no\x20encontrados:",
    { form: !!form, inputCodigo: !!inputCodigo }
  );
inputCodigo &&
  (inputCodigo["setAttribute"]("autocomplete", _0x406c10(0x35b)),
  inputCodigo[_0x406c10(0x2b2)](_0x406c10(0x3cc), _0x406c10(0x4cc)),
  inputCodigo[_0x406c10(0x2b2)](_0x406c10(0x42b), "off"));
inputCodigo[_0x406c10(0x2b2)](_0x406c10(0x472), _0x406c10(0x35b)),
  inputCodigo[_0x406c10(0x2b2)](_0x406c10(0x1df), _0x406c10(0x482)),
  form["setAttribute"](_0x406c10(0x2e3), _0x406c10(0x35b));
let scannerActivo = ![],
  deferredPrompt,
  puedeEscanear = !![],
  ultimoCodigoEscaneado = "",
  datosYaCargados = ![];
if (!window[_0x406c10(0x19b)]) {
  const script = document[_0x406c10(0x2c9)](_0x406c10(0x30e));
  (script[_0x406c10(0x53c)] =
    "https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"),
    (script[_0x406c10(0x1f9)] = !![]),
    document[_0x406c10(0x418)]["appendChild"](script);
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
    const _0x73aae9 = _0x406c10;
    (this["storageKey"] = "googleVisionUsage"), this[_0x73aae9(0x4d2)]();
  }
  [_0x406c10(0x4d2)]() {
    const _0x3a6337 = _0x406c10,
      _0x3d5a0c = localStorage[_0x3a6337(0x430)](this[_0x3a6337(0x193)]);
    _0x3d5a0c
      ? (this[_0x3a6337(0x31c)] = JSON["parse"](_0x3d5a0c))
      : this["resetMonthlyUsage"]();
    const _0x4b0dd1 = new Date()["getMonth"]();
    this[_0x3a6337(0x31c)][_0x3a6337(0x36d)] !== _0x4b0dd1 &&
      this[_0x3a6337(0x292)]();
  }
  [_0x406c10(0x292)]() {
    const _0x18cc85 = _0x406c10;
    (this[_0x18cc85(0x31c)] = {
      month: new Date()["getMonth"](),
      year: new Date()[_0x18cc85(0x23f)](),
      monthlyCount: 0x0,
      dailyCount: 0x0,
      lastUsedDate: new Date()[_0x18cc85(0x4be)](),
      history: [],
    }),
      this["saveUsage"]();
  }
  ["saveUsage"]() {
    const _0x565b32 = _0x406c10;
    localStorage[_0x565b32(0x457)](
      this[_0x565b32(0x193)],
      JSON[_0x565b32(0x24e)](this[_0x565b32(0x31c)])
    );
  }
  [_0x406c10(0x183)]() {
    const _0x45fb66 = _0x406c10,
      _0x4e5cbc = new Date()[_0x45fb66(0x4be)]();
    this[_0x45fb66(0x31c)][_0x45fb66(0x1c1)] !== _0x4e5cbc &&
      ((this[_0x45fb66(0x31c)][_0x45fb66(0x4b0)] = 0x0),
      (this["usage"][_0x45fb66(0x1c1)] = _0x4e5cbc),
      this[_0x45fb66(0x2b7)]());
    const _0x39821a =
        this[_0x45fb66(0x31c)][_0x45fb66(0x2e7)] <
        GOOGLE_VISION_CONFIG[_0x45fb66(0x35c)],
      _0x126650 =
        this[_0x45fb66(0x31c)][_0x45fb66(0x4b0)] <
        GOOGLE_VISION_CONFIG[_0x45fb66(0x4c7)];
    return _0x39821a && _0x126650;
  }
  [_0x406c10(0x214)]() {
    const _0x376bf1 = _0x406c10;
    this[_0x376bf1(0x31c)]["monthlyCount"]++,
      this[_0x376bf1(0x31c)]["dailyCount"]++,
      this[_0x376bf1(0x31c)][_0x376bf1(0x203)]["push"]({
        date: new Date()[_0x376bf1(0x18f)](),
        count: this[_0x376bf1(0x31c)][_0x376bf1(0x2e7)],
      }),
      this["usage"][_0x376bf1(0x203)][_0x376bf1(0x237)] > 0x32 &&
        (this[_0x376bf1(0x31c)][_0x376bf1(0x203)] =
          this[_0x376bf1(0x31c)][_0x376bf1(0x203)]["slice"](-0x32)),
      this["saveUsage"]();
  }
  [_0x406c10(0x33b)]() {
    const _0x3f18e7 = _0x406c10;
    return {
      monthlyUsed: this["usage"]["monthlyCount"],
      monthlyLimit: GOOGLE_VISION_CONFIG["monthlyLimit"],
      dailyUsed: this[_0x3f18e7(0x31c)][_0x3f18e7(0x4b0)],
      dailyLimit: GOOGLE_VISION_CONFIG[_0x3f18e7(0x4c7)],
      remainingMonthly:
        GOOGLE_VISION_CONFIG[_0x3f18e7(0x35c)] -
        this[_0x3f18e7(0x31c)][_0x3f18e7(0x2e7)],
      remainingDaily:
        GOOGLE_VISION_CONFIG[_0x3f18e7(0x4c7)] -
        this[_0x3f18e7(0x31c)][_0x3f18e7(0x4b0)],
      canUse: this[_0x3f18e7(0x183)](),
    };
  }
  ["showUsageWarning"]() {
    const _0x5e5112 = _0x406c10,
      _0x15500c = this["getUsageStatus"]();
    if (_0x15500c[_0x5e5112(0x307)] >= GOOGLE_VISION_CONFIG[_0x5e5112(0x30a)])
      return (
        _0x5e5112(0x356) +
        _0x15500c[_0x5e5112(0x307)] +
        "/" +
        _0x15500c["monthlyLimit"] +
        _0x5e5112(0x52a)
      );
    if (
      _0x15500c[_0x5e5112(0x434)] >=
      GOOGLE_VISION_CONFIG[_0x5e5112(0x4c7)] * 0.8
    )
      return (
        _0x5e5112(0x373) +
        _0x15500c["dailyUsed"] +
        "/" +
        _0x15500c[_0x5e5112(0x4c7)] +
        _0x5e5112(0x238)
      );
    return null;
  }
}
const visionUsageTracker = new GoogleVisionUsageTracker();
async function detectarConGoogleVision(_0xf0569c) {
  const _0x2f7851 = _0x406c10;
  console[_0x2f7851(0x366)](
    "📸\x20Preparando\x20imagen\x20para\x20Google\x20Vision..."
  );
  const _0x511341 = document[_0x2f7851(0x2c9)](_0x2f7851(0x277)),
    _0x4c6d1a = _0x511341[_0x2f7851(0x443)]("2d");
  let { width: _0x3909a2, height: _0x4148d3 } = _0xf0569c;
  const _0x2c921a = 0x400;
  if (_0x3909a2 > _0x2c921a || _0x4148d3 > _0x2c921a) {
    const _0x5cb39d = Math[_0x2f7851(0x38c)](
      _0x2c921a / _0x3909a2,
      _0x2c921a / _0x4148d3
    );
    (_0x3909a2 *= _0x5cb39d), (_0x4148d3 *= _0x5cb39d);
  }
  (_0x511341[_0x2f7851(0x4f2)] = _0x3909a2),
    (_0x511341[_0x2f7851(0x258)] = _0x4148d3),
    _0x4c6d1a["drawImage"](_0xf0569c, 0x0, 0x0, _0x3909a2, _0x4148d3);
  const _0x4126b8 = _0x511341["toDataURL"]("image/jpeg", 0.9);
  console[_0x2f7851(0x366)](_0x2f7851(0x217));
  try {
    const _0x50463b = await fetch(_0x2f7851(0x46b), {
      method: "POST",
      headers: { "Content-Type": _0x2f7851(0x1bc) },
      body: JSON[_0x2f7851(0x24e)]({
        image: _0x4126b8,
        userAgent: navigator["userAgent"]["substring"](0x0, 0x32),
        timestamp: new Date()["toISOString"](),
      }),
    });
    if (!_0x50463b["ok"]) {
      const _0x485fed = await _0x50463b[_0x2f7851(0x362)]();
      throw new Error(
        _0x2f7851(0x19f) + _0x50463b["status"] + _0x2f7851(0x2cf) + _0x485fed
      );
    }
    const _0x2e794a = await _0x50463b[_0x2f7851(0x412)]();
    console[_0x2f7851(0x366)](_0x2f7851(0x34b), _0x2e794a);
    if (_0x2e794a[_0x2f7851(0x401)])
      return (
        visionUsageTracker[_0x2f7851(0x214)](),
        console[_0x2f7851(0x366)](_0x2f7851(0x501)),
        console[_0x2f7851(0x366)](_0x2f7851(0x3f1)),
        extraerCodigoDeTexto(_0x2e794a["visionData"])
      );
    else throw new Error(_0x2e794a["error"] || "Error\x20en\x20detección");
  } catch (_0x31791a) {
    console[_0x2f7851(0x366)](_0x2f7851(0x512), _0x31791a["message"]);
    if (_0x31791a[_0x2f7851(0x29c)][_0x2f7851(0x4d5)]("500"))
      console["log"](_0x2f7851(0x526)),
        console[_0x2f7851(0x366)]("\x20\x20\x20Posibles\x20causas:"),
        console[_0x2f7851(0x366)](_0x2f7851(0x2e8)),
        console[_0x2f7851(0x366)](_0x2f7851(0x1e3)),
        console[_0x2f7851(0x366)](_0x2f7851(0x46f)),
        console[_0x2f7851(0x366)](
          "\x20\x20\x20💡\x20Ejecuta\x20diagnosticarBackend()\x20para\x20más\x20detalles"
        );
    else {
      if (
        _0x31791a[_0x2f7851(0x29c)][_0x2f7851(0x4d5)](_0x2f7851(0x44e)) ||
        _0x31791a[_0x2f7851(0x29c)][_0x2f7851(0x4d5)](_0x2f7851(0x47d)) ||
        _0x31791a[_0x2f7851(0x29c)]["includes"]("NetworkError")
      )
        throw new Error(_0x2f7851(0x18d));
    }
    throw _0x31791a;
  }
}
function extraerCodigoDeTexto(_0x535a74) {
  const _0x474714 = _0x406c10,
    _0x59fe36 = _0x535a74[_0x474714(0x3b5)][0x0]?.["textAnnotations"] || [];
  if (_0x59fe36[_0x474714(0x237)] === 0x0)
    return console[_0x474714(0x366)](_0x474714(0x2fc)), null;
  const _0x1b6a4b = _0x59fe36[0x0]?.[_0x474714(0x1db)] || "";
  console["log"](_0x474714(0x35e), _0x1b6a4b);
  const _0x305dba = [
    /\b(\d{13})\b/g,
    /\b(\d{12})\b/g,
    /\b(\d{8})\b/g,
    /\b(\d{6,8})\b/g,
    /\b([A-Z0-9\-]{4,20})\b/g,
  ];
  for (const _0x3f9e81 of _0x305dba) {
    const _0x4522f2 = [..._0x1b6a4b["matchAll"](_0x3f9e81)];
    for (const _0x1b5a4a of _0x4522f2) {
      const _0x3203d8 = _0x1b5a4a[0x1][_0x474714(0x416)]();
      console[_0x474714(0x366)](_0x474714(0x1cc) + _0x3203d8);
      if (validarCodigoPorLongitud(_0x3203d8))
        return (
          console[_0x474714(0x366)](_0x474714(0x2e9) + _0x3203d8), _0x3203d8
        );
    }
  }
  return console[_0x474714(0x366)](_0x474714(0x44c)), null;
}
function validarCodigoPorLongitud(_0x53f836) {
  const _0x4c1446 = _0x406c10;
  if (/^\d{13}$/["test"](_0x53f836)) return !![];
  if (/^\d{12}$/[_0x4c1446(0x374)](_0x53f836)) return !![];
  if (/^\d{8}$/["test"](_0x53f836)) return !![];
  if (/^\d{6,8}$/[_0x4c1446(0x374)](_0x53f836)) return !![];
  if (
    /^[A-Z0-9\-]{4,20}$/[_0x4c1446(0x374)](_0x53f836) &&
    _0x53f836[_0x4c1446(0x237)] >= 0x4
  )
    return !![];
  return ![];
}
async function diagnosticarBackend() {
  const _0x30fc36 = _0x406c10;
  console[_0x30fc36(0x366)](_0x30fc36(0x240));
  const _0x476dd9 = document[_0x30fc36(0x4ba)](_0x30fc36(0x43c));
  _0x476dd9 && (_0x476dd9["innerHTML"] = _0x30fc36(0x1b3));
  let _0x2676ad = "";
  try {
    const _0x455a84 = await fetch(
      "https://contador-apicloudvision.vercel.app/api/stats"
    );
    if (_0x455a84["ok"]) {
      console[_0x30fc36(0x366)](_0x30fc36(0x503));
      const _0x42e405 = await _0x455a84[_0x30fc36(0x412)]();
      console["log"]("📊\x20Estadísticas:", _0x42e405),
        (_0x2676ad +=
          "<div\x20class=\x22alert\x20alert-success\x22>✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente</div>");
    } else
      console["log"](
        "❌\x20Endpoint\x20/api/stats\x20falló:",
        _0x455a84[_0x30fc36(0x32f)]
      ),
        (_0x2676ad +=
          _0x30fc36(0x500) + _0x455a84[_0x30fc36(0x32f)] + _0x30fc36(0x483));
    console["log"](
      "🧪\x20Probando\x20vision-detect\x20con\x20imagen\x20de\x20prueba..."
    );
    const _0x1cd54b = await fetch(_0x30fc36(0x46b), {
        method: _0x30fc36(0x3d3),
        headers: { "Content-Type": _0x30fc36(0x1bc) },
        body: JSON["stringify"]({
          image: _0x30fc36(0x206),
          userId: _0x30fc36(0x2ea),
        }),
      }),
      _0x3a3105 = await _0x1cd54b[_0x30fc36(0x412)]();
    console[_0x30fc36(0x366)](_0x30fc36(0x353), _0x3a3105),
      console[_0x30fc36(0x366)](_0x30fc36(0x384), _0x1cd54b[_0x30fc36(0x32f)]);
    if (_0x1cd54b[_0x30fc36(0x32f)] === 0x1f4) {
      console[_0x30fc36(0x366)](_0x30fc36(0x340));
      if (_0x3a3105["details"]) {
        if (_0x3a3105[_0x30fc36(0x53f)][_0x30fc36(0x4d5)](_0x30fc36(0x423)))
          console["log"](_0x30fc36(0x22a)),
            console[_0x30fc36(0x366)](_0x30fc36(0x47f)),
            console["log"](_0x30fc36(0x462)),
            (_0x2676ad += _0x30fc36(0x511));
        else {
          if (_0x3a3105[_0x30fc36(0x53f)]["includes"](_0x30fc36(0x1ce)))
            console["log"](_0x30fc36(0x236)),
              (_0x2676ad +=
                "<div\x20class=\x22alert\x20alert-danger\x22>🔑\x20API\x20Key\x20inválida\x20-\x20verifica\x20la\x20configuración\x20en\x20Vercel</div>");
          else
            _0x3a3105["details"][_0x30fc36(0x4d5)](_0x30fc36(0x44d))
              ? (console[_0x30fc36(0x366)](_0x30fc36(0x4e4)),
                console[_0x30fc36(0x366)](_0x30fc36(0x3ca)),
                (_0x2676ad += _0x30fc36(0x1e2)))
              : (console[_0x30fc36(0x366)](_0x30fc36(0x26a)),
                console[_0x30fc36(0x366)](
                  _0x30fc36(0x1ba),
                  _0x3a3105[_0x30fc36(0x53f)]
                ),
                (_0x2676ad += _0x30fc36(0x48c)));
        }
      }
    } else
      _0x1cd54b[_0x30fc36(0x32f)] === 0xc8 &&
        (console["log"](_0x30fc36(0x272)),
        (_0x2676ad +=
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🎉\x20¡Google\x20Vision\x20API\x20Activa!</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>✅\x20La\x20detección\x20premium\x20está\x20funcionando\x20correctamente</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Fallback\x20automático:\x20Local\x20→\x20Google\x20Vision</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"));
  } catch (_0x31fbe3) {
    console["log"](
      "❌\x20Error\x20en\x20diagnóstico:",
      _0x31fbe3[_0x30fc36(0x29c)]
    ),
      _0x31fbe3[_0x30fc36(0x29c)][_0x30fc36(0x4d5)](_0x30fc36(0x44e))
        ? (console[_0x30fc36(0x366)](
            "🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers"
          ),
          (_0x2676ad += _0x30fc36(0x3a7)))
        : (_0x2676ad +=
            _0x30fc36(0x516) + _0x31fbe3[_0x30fc36(0x29c)] + _0x30fc36(0x483));
  }
  _0x476dd9 && (_0x476dd9[_0x30fc36(0x181)] = _0x2676ad);
}
async function verificarBackend() {
  const _0x55806e = _0x406c10;
  try {
    const _0x5333d7 = await fetch(_0x55806e(0x398), {
      method: _0x55806e(0x26e),
      headers: { "Content-Type": _0x55806e(0x1bc) },
    });
    if (_0x5333d7["ok"]) {
      const _0x4a392c = await _0x5333d7[_0x55806e(0x412)]();
      return (
        console[_0x55806e(0x366)](_0x55806e(0x3fb), _0x4a392c),
        { activo: !![], stats: _0x4a392c, mensaje: _0x55806e(0x476) }
      );
    } else
      return (
        console[_0x55806e(0x366)](
          "⚠️\x20Backend\x20responde\x20pero\x20con\x20error:",
          _0x5333d7[_0x55806e(0x32f)]
        ),
        {
          activo: ![],
          mensaje: "Backend\x20con\x20error:\x20" + _0x5333d7[_0x55806e(0x32f)],
        }
      );
  } catch (_0x42709d) {
    return (
      console[_0x55806e(0x366)](
        "❌\x20Backend\x20no\x20disponible:",
        _0x42709d["message"]
      ),
      { activo: ![], mensaje: _0x55806e(0x4cf) }
    );
  }
}
async function mostrarEstadisticasUso() {
  const _0xac9e21 = _0x406c10,
    _0x2a3285 = visionUsageTracker["getUsageStatus"](),
    _0x1457c2 = visionUsageTracker[_0xac9e21(0x30f)]();
  let _0x356050 = _0xac9e21(0x36b);
  (_0x356050 +=
    "•\x20Mensual:\x20" +
    _0x2a3285[_0xac9e21(0x307)] +
    "/" +
    _0x2a3285[_0xac9e21(0x35c)] +
    "\x20(quedan\x20" +
    _0x2a3285[_0xac9e21(0x2ac)] +
    ")<br>"),
    (_0x356050 +=
      _0xac9e21(0x190) +
      _0x2a3285[_0xac9e21(0x434)] +
      "/" +
      _0x2a3285["dailyLimit"] +
      _0xac9e21(0x28b) +
      _0x2a3285[_0xac9e21(0x47e)] +
      ")");
  _0x1457c2 && (_0x356050 += _0xac9e21(0x1e1) + _0x1457c2);
  if (GOOGLE_VISION_CONFIG[_0xac9e21(0x49d)])
    try {
      const _0x5c41f1 = await verificarBackend();
      _0x356050 += _0xac9e21(0x33f) + _0x5c41f1[_0xac9e21(0x4f9)];
    } catch (_0x36466a) {
      _0x356050 +=
        "<br><br>🌐\x20<strong>Backend:</strong>\x20Error\x20verificando\x20estado";
    }
  return _0x356050;
}
function setCookie(_0x3c80c6, _0x1e747d, _0x21a8ca) {
  const _0x1c3cf7 = _0x406c10,
    _0x208252 = new Date(
      Date[_0x1c3cf7(0x1f6)]() + _0x21a8ca * 0x18 * 0x3c * 0x3c * 0x3e8
    )["toUTCString"]();
  document[_0x1c3cf7(0x323)] =
    _0x3c80c6 +
    "=" +
    encodeURIComponent(_0x1e747d) +
    _0x1c3cf7(0x49b) +
    _0x208252 +
    _0x1c3cf7(0x3ce);
}
function getCookie(_0x39532e) {
  const _0x24e4dc = _0x406c10,
    _0x3423f1 = ";\x20" + document[_0x24e4dc(0x323)],
    _0x577bff = _0x3423f1[_0x24e4dc(0x3ad)](";\x20" + _0x39532e + "=");
  if (_0x577bff["length"] === 0x2)
    return decodeURIComponent(_0x577bff["pop"]()["split"](";")["shift"]());
  return null;
}
const historialDiv = document[_0x406c10(0x4ba)](_0x406c10(0x19c)),
  resultadoDiv = document["getElementById"](_0x406c10(0x1d9)),
  DB_NAME = _0x406c10(0x3bd),
  DB_STORE = _0x406c10(0x51f),
  DB_STORE_PROMOCIONES = _0x406c10(0x515);
let db;
function openDB() {
  return new Promise((_0x3554b0, _0x5c30bc) => {
    const _0x5bd48c = _0x3a44,
      _0x115438 = indexedDB[_0x5bd48c(0x537)](DB_NAME, 0x2);
    (_0x115438[_0x5bd48c(0x276)] = function (_0x4596bc) {
      const _0x56b2d1 = _0x5bd48c;
      (db = _0x4596bc[_0x56b2d1(0x275)][_0x56b2d1(0x459)]),
        !db["objectStoreNames"][_0x56b2d1(0x294)](DB_STORE) &&
          db[_0x56b2d1(0x318)](DB_STORE, {
            keyPath: "id",
            autoIncrement: !![],
          }),
        !db[_0x56b2d1(0x2ef)][_0x56b2d1(0x294)](DB_STORE_PROMOCIONES) &&
          db["createObjectStore"](DB_STORE_PROMOCIONES, {
            keyPath: "id",
            autoIncrement: !![],
          });
    }),
      (_0x115438[_0x5bd48c(0x46d)] = function (_0x1ffe27) {
        const _0x4eb2dd = _0x5bd48c;
        (db = _0x1ffe27[_0x4eb2dd(0x275)][_0x4eb2dd(0x459)]), _0x3554b0(db);
      }),
      (_0x115438["onerror"] = function (_0x55c8f7) {
        _0x5c30bc(_0x55c8f7);
      });
  });
}
function clearProductos() {
  const _0x47a5c8 = _0x406c10;
  return openDB()[_0x47a5c8(0x31d)]((_0x3e8b6b) => {
    return new Promise((_0x545d69, _0x5600d7) => {
      const _0x1cfd69 = _0x3a44,
        _0x51565a = _0x3e8b6b["transaction"](DB_STORE, _0x1cfd69(0x355));
      _0x51565a[_0x1cfd69(0x427)](DB_STORE)[_0x1cfd69(0x538)](),
        (_0x51565a[_0x1cfd69(0x4a6)] = _0x545d69),
        (_0x51565a["onerror"] = _0x5600d7);
    });
  });
}
function saveProductos(_0x382cc8) {
  return openDB()["then"]((_0x1ab9de) => {
    return new Promise((_0x2ccf5b, _0x2978aa) => {
      const _0x33c9e2 = _0x3a44,
        _0x404ac6 = _0x1ab9de[_0x33c9e2(0x2c1)](DB_STORE, _0x33c9e2(0x355)),
        _0x2bcf32 = _0x404ac6[_0x33c9e2(0x427)](DB_STORE);
      _0x382cc8["forEach"]((_0x3095a1) =>
        _0x2bcf32[_0x33c9e2(0x3e3)](_0x3095a1)
      ),
        (_0x404ac6[_0x33c9e2(0x4a6)] = _0x2ccf5b),
        (_0x404ac6["onerror"] = _0x2978aa);
    });
  });
}
function getAllProductos() {
  const _0x2decf1 = _0x406c10;
  return openDB()[_0x2decf1(0x31d)]((_0x58febe) => {
    return new Promise((_0x1ebefa, _0x236db6) => {
      const _0xdafb03 = _0x3a44,
        _0x3f0830 = _0x58febe["transaction"](DB_STORE, _0xdafb03(0x520)),
        _0x433d06 = _0x3f0830[_0xdafb03(0x427)](DB_STORE),
        _0x4b5f45 = _0x433d06[_0xdafb03(0x522)]();
      (_0x4b5f45[_0xdafb03(0x46d)] = () =>
        _0x1ebefa(_0x4b5f45[_0xdafb03(0x459)])),
        (_0x4b5f45[_0xdafb03(0x525)] = _0x236db6);
    });
  });
}
function clearPromociones() {
  const _0x3c26d9 = _0x406c10;
  return openDB()[_0x3c26d9(0x31d)]((_0xebd42c) => {
    return new Promise((_0x14fc5f, _0x5d7fa1) => {
      const _0x5cab2b = _0x3a44,
        _0x16604c = _0xebd42c[_0x5cab2b(0x2c1)](
          DB_STORE_PROMOCIONES,
          "readwrite"
        );
      _0x16604c[_0x5cab2b(0x427)](DB_STORE_PROMOCIONES)["clear"](),
        (_0x16604c[_0x5cab2b(0x4a6)] = _0x14fc5f),
        (_0x16604c[_0x5cab2b(0x525)] = _0x5d7fa1);
    });
  });
}
function savePromociones(_0x3c6624) {
  const _0x44dead = _0x406c10;
  return openDB()[_0x44dead(0x31d)]((_0x5318b2) => {
    return new Promise((_0x37d000, _0x260d14) => {
      const _0x37cb22 = _0x3a44,
        _0x19a24a = _0x5318b2[_0x37cb22(0x2c1)](
          DB_STORE_PROMOCIONES,
          "readwrite"
        ),
        _0x5ad3ac = _0x19a24a[_0x37cb22(0x427)](DB_STORE_PROMOCIONES);
      _0x3c6624[_0x37cb22(0x3b6)]((_0x32f5a3) =>
        _0x5ad3ac[_0x37cb22(0x3e3)](_0x32f5a3)
      ),
        (_0x19a24a[_0x37cb22(0x4a6)] = _0x37d000),
        (_0x19a24a[_0x37cb22(0x525)] = _0x260d14);
    });
  });
}
function getAllPromociones() {
  const _0x577606 = _0x406c10;
  return openDB()[_0x577606(0x31d)]((_0x2eb921) => {
    return new Promise((_0x554245, _0x78a11d) => {
      const _0x5f16dd = _0x3a44,
        _0x16ba47 = _0x2eb921["transaction"](
          DB_STORE_PROMOCIONES,
          _0x5f16dd(0x520)
        ),
        _0x489c90 = _0x16ba47[_0x5f16dd(0x427)](DB_STORE_PROMOCIONES),
        _0x5cde3c = _0x489c90[_0x5f16dd(0x522)]();
      (_0x5cde3c[_0x5f16dd(0x46d)] = () =>
        _0x554245(_0x5cde3c[_0x5f16dd(0x459)])),
        (_0x5cde3c[_0x5f16dd(0x525)] = _0x78a11d);
    });
  });
}
const sugerenciasDiv = document[_0x406c10(0x2c9)](_0x406c10(0x300));
(sugerenciasDiv["id"] = _0x406c10(0x31a)),
  (sugerenciasDiv[_0x406c10(0x523)] = _0x406c10(0x535)),
  (sugerenciasDiv[_0x406c10(0x2ae)][_0x406c10(0x1eb)] = _0x406c10(0x4ed)),
  (sugerenciasDiv[_0x406c10(0x2ae)][_0x406c10(0x3e5)] = _0x406c10(0x222)),
  (sugerenciasDiv[_0x406c10(0x2ae)][_0x406c10(0x1b7)] = _0x406c10(0x375)),
  (sugerenciasDiv[_0x406c10(0x2ae)][_0x406c10(0x271)] = _0x406c10(0x321)),
  (sugerenciasDiv[_0x406c10(0x2ae)][_0x406c10(0x1d1)] = "0"),
  (sugerenciasDiv["style"][_0x406c10(0x338)] = "0"),
  (inputCodigo[_0x406c10(0x45c)][_0x406c10(0x2ae)][_0x406c10(0x27f)] =
    _0x406c10(0x1f1)),
  inputCodigo["parentNode"][_0x406c10(0x40f)](sugerenciasDiv);
const actualizarDiv = document[_0x406c10(0x2c9)](_0x406c10(0x300));
(actualizarDiv[_0x406c10(0x523)] = _0x406c10(0x542)),
  (actualizarDiv[_0x406c10(0x181)] = _0x406c10(0x4ab)),
  historialDiv[_0x406c10(0x45c)][_0x406c10(0x259)](actualizarDiv, historialDiv);
const resultadosModalHTML = _0x406c10(0x302);
document[_0x406c10(0x1c9)]["insertAdjacentHTML"](
  _0x406c10(0x266),
  resultadosModalHTML
);
const btnActualizar = actualizarDiv[_0x406c10(0x2e1)]("#btnActualizar"),
  btnPromociones = actualizarDiv["querySelector"]("#btnPromociones"),
  ultimaActualizacionSpan = actualizarDiv[_0x406c10(0x2e1)](
    "#ultimaActualizacion"
  ),
  btnTexto = actualizarDiv[_0x406c10(0x2e1)](_0x406c10(0x3eb)),
  btnSpinner = actualizarDiv[_0x406c10(0x2e1)](_0x406c10(0x502)),
  mensajeActualizacion = actualizarDiv[_0x406c10(0x2e1)](_0x406c10(0x48e));
async function mostrarProductosConPromociones() {
  const _0x4df2c8 = _0x406c10,
    _0x1c1b0e = await getAllProductos(),
    _0x2c2739 = [];
  for (const _0x3b6dd0 of _0x1c1b0e) {
    try {
      const _0x57fec5 = await detectarPromocionReal(_0x3b6dd0);
      _0x57fec5[_0x4df2c8(0x237)] > 0x0 &&
        _0x2c2739[_0x4df2c8(0x2ab)](_0x3b6dd0);
    } catch (_0x53c72d) {
      console["warn"](
        _0x4df2c8(0x1a1) + _0x3b6dd0[_0x4df2c8(0x377)] + ":",
        _0x53c72d
      );
    }
  }
  if (_0x2c2739[_0x4df2c8(0x237)] === 0x0) {
    (resultadoDiv["innerHTML"] = _0x4df2c8(0x24f)), renderHistorial();
    return;
  }
  const _0x4af005 = [];
  for (const _0x2e6700 of _0x2c2739[_0x4df2c8(0x278)](0x0, 0x14)) {
    try {
      const _0x478e1e = await detectarPromocionReal(_0x2e6700),
        _0x49f261 =
          Number(_0x2e6700[_0x4df2c8(0x46a)]) || Number(_0x2e6700["L1"]) || 0x0,
        _0x58a9de = Math["round"](_0x49f261 * 1.16 * 0x64) / 0x64,
        _0x1de53d = _0x478e1e[_0x4df2c8(0x485)]((_0x3b200b) => {
          const _0x41feca = _0x4df2c8;
          let _0x42ea77 = _0x41feca(0x450),
            _0x22a678 =
              _0x3b200b[_0x41feca(0x185)] ||
              _0x3b200b[_0x41feca(0x1de)] ||
              _0x41feca(0x3cf);
          if (_0x3b200b["tipo"][_0x41feca(0x4d5)](_0x41feca(0x327)))
            (_0x42ea77 = _0x41feca(0x2de)),
              (_0x22a678 = _0x41feca(0x435) + _0x22a678);
          else
            _0x3b200b[_0x41feca(0x3b2)] &&
              ((_0x42ea77 = _0x41feca(0x2c5)),
              (_0x22a678 = _0x41feca(0x407) + _0x22a678));
          return (
            _0x41feca(0x2aa) +
            _0x42ea77 +
            _0x41feca(0x32a) +
            _0x22a678 +
            _0x41feca(0x209)
          );
        })[_0x4df2c8(0x261)]("");
      _0x4af005[_0x4df2c8(0x2ab)](
        _0x4df2c8(0x37c) +
          _0x2e6700["pr_sku"] +
          _0x4df2c8(0x1d5) +
          _0x2e6700[_0x4df2c8(0x264)] +
          "\x22>" +
          _0x2e6700["pr_name"] +
          _0x4df2c8(0x289) +
          _0x1de53d +
          _0x4df2c8(0x42f) +
          _0x58a9de[_0x4df2c8(0x20e)](0x2) +
          _0x4df2c8(0x208) +
          _0x2e6700[_0x4df2c8(0x377)] +
          _0x4df2c8(0x211)
      );
    } catch (_0xe29a08) {
      console[_0x4df2c8(0x1d4)](
        "⚠️\x20Error\x20al\x20procesar\x20producto\x20" +
          _0x2e6700[_0x4df2c8(0x377)] +
          ":",
        _0xe29a08
      );
    }
  }
  (resultadoDiv[_0x4df2c8(0x181)] =
    _0x4df2c8(0x1be) +
    _0x2c2739["length"] +
    _0x4df2c8(0x38e) +
    _0x4af005[_0x4df2c8(0x261)]("") +
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20" +
    (_0x2c2739[_0x4df2c8(0x237)] > 0x14
      ? _0x4df2c8(0x390) +
        (_0x2c2739["length"] - 0x14) +
        "\x20más\x20con\x20promociones.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>"
      : "") +
    _0x4df2c8(0x313)),
    renderHistorial();
}
window["mostrarProductoPromocion"] = async function (_0x538bcf) {
  const _0x2a6ae8 = _0x406c10,
    _0x43d39b = await getAllProductos(),
    _0x52fb75 = _0x43d39b[_0x2a6ae8(0x38f)](
      (_0x68cdba) =>
        _0x68cdba[_0x2a6ae8(0x377)] === _0x538bcf ||
        _0x68cdba["pr_gtin"] === _0x538bcf
    );
  if (_0x52fb75) {
    mostrarDetalleProducto(_0x52fb75);
    const _0x153180 = {
      ..._0x52fb75,
      FECHA_ESCANEO: new Date()["toISOString"](),
    };
    historial["unshift"](_0x153180),
      setCookie(_0x2a6ae8(0x19c), JSON[_0x2a6ae8(0x24e)](historial), 0x1e),
      renderHistorial();
  }
};
const urlBase = _0x406c10(0x2ff),
  urlBaseConCodigos = _0x406c10(0x50f),
  urlPromociones = _0x406c10(0x1d2),
  CONFIG_ENDPOINTS = {
    productosBasicos: urlBase,
    productosConCodigos: urlBaseConCodigos,
    promociones: urlPromociones,
    usarCodigosBarras: !![],
    fallbackTiempo: 0x1388,
  };
function tiempoRelativo(_0x1eacec) {
  const _0x122a8a = _0x406c10;
  if (!_0x1eacec) return "Nunca";
  const _0x2fc04a = Date[_0x122a8a(0x1f6)](),
    _0x44d3f7 = Math[_0x122a8a(0x317)]((_0x2fc04a - _0x1eacec) / 0x3e8);
  if (_0x44d3f7 < 0x3c) return _0x122a8a(0x4f8) + _0x44d3f7 + _0x122a8a(0x23b);
  if (_0x44d3f7 < 0xe10)
    return (
      _0x122a8a(0x4f8) +
      Math[_0x122a8a(0x317)](_0x44d3f7 / 0x3c) +
      "\x20minutos"
    );
  if (_0x44d3f7 < 0x15180)
    return (
      _0x122a8a(0x4f8) + Math[_0x122a8a(0x317)](_0x44d3f7 / 0xe10) + "\x20horas"
    );
  return (
    _0x122a8a(0x4f8) +
    Math[_0x122a8a(0x317)](_0x44d3f7 / 0x15180) +
    _0x122a8a(0x4cd)
  );
}
function renderUltimaActualizacion() {
  const _0x10d449 = _0x406c10,
    _0x12230c = localStorage["getItem"](_0x10d449(0x514)),
    _0x567ad6 = localStorage[_0x10d449(0x430)](_0x10d449(0x539));
  let _0x4c763b = _0x10d449(0x481);
  if (_0x12230c && _0x567ad6) {
    const _0x1c198f = tiempoRelativo(Number(_0x12230c)),
      _0x41f494 = tiempoRelativo(Number(_0x567ad6)),
      _0x117752 = Math[_0x10d449(0x3e7)](Number(_0x12230c) - Number(_0x567ad6));
    _0x117752 < 0xea60
      ? (_0x4c763b = _0x10d449(0x4c3) + _0x1c198f)
      : (_0x4c763b =
          "Productos:\x20" +
          _0x1c198f +
          "\x20|\x20Promociones:\x20" +
          _0x41f494);
  } else {
    if (_0x12230c)
      _0x4c763b =
        _0x10d449(0x1e5) +
        tiempoRelativo(Number(_0x12230c)) +
        "\x20|\x20Promociones:\x20nunca";
    else
      _0x567ad6 &&
        (_0x4c763b = _0x10d449(0x41d) + tiempoRelativo(Number(_0x567ad6)));
  }
  ultimaActualizacionSpan[_0x10d449(0x1b2)] = _0x4c763b;
}
function actualizarProgreso(_0x2b87b7, _0x57924d, _0x42eabf = "") {
  const _0x168350 = _0x406c10,
    _0x14fa87 = Math[_0x168350(0x38c)](0x64, Math["max"](0x0, _0x2b87b7)),
    _0x13f2b7 =
      _0x2b87b7 >= 0x64
        ? _0x168350(0x401)
        : _0x2b87b7 >= 0x32
        ? _0x168350(0x401)
        : _0x168350(0x3d0);
  mensajeActualizacion[_0x168350(0x181)] =
    _0x168350(0x45e) +
    _0x57924d +
    _0x168350(0x3ee) +
    _0x2b87b7 +
    _0x168350(0x41c) +
    _0x13f2b7 +
    "\x22\x20role=\x22progressbar\x22\x20style=\x22width:\x20" +
    _0x14fa87 +
    _0x168350(0x41a) +
    _0x2b87b7 +
    _0x168350(0x34e) +
    (_0x42eabf ? _0x168350(0x4f1) + _0x42eabf + _0x168350(0x1b5) : "") +
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20";
}
async function actualizarTodosLosDatos() {
  const _0x41db29 = _0x406c10;
  console[_0x41db29(0x366)](_0x41db29(0x39c)),
    (btnActualizar[_0x41db29(0x3ec)] = !![]),
    (btnTexto[_0x41db29(0x1b2)] = "Actualizando..."),
    btnSpinner[_0x41db29(0x184)]["remove"](_0x41db29(0x21e));
  const _0x4ad360 = Date[_0x41db29(0x1f6)]();
  let _0x3f0217 = ![],
    _0x5528c3 = ![];
  const _0x58577e = () => {
    const _0x2e4ad5 = _0x41db29;
    let _0x403f1d = 0x0,
      _0x5d0098 = _0x2e4ad5(0x2c7),
      _0x1103cc = "";
    if (!_0x3f0217 && !_0x5528c3)
      (_0x403f1d = 0xa),
        (_0x5d0098 = _0x2e4ad5(0x29a)),
        (_0x1103cc = _0x2e4ad5(0x389));
    else {
      if (_0x3f0217 && !_0x5528c3)
        (_0x403f1d = 0x46),
          (_0x5d0098 = _0x2e4ad5(0x486)),
          (_0x1103cc = _0x2e4ad5(0x199));
      else {
        if (!_0x3f0217 && _0x5528c3)
          (_0x403f1d = 0x46),
            (_0x5d0098 = _0x2e4ad5(0x4fc)),
            (_0x1103cc = _0x2e4ad5(0x2bf));
        else {
          _0x403f1d = 0x64;
          const _0x650f10 = ((Date[_0x2e4ad5(0x1f6)]() - _0x4ad360) / 0x3e8)[
            _0x2e4ad5(0x20e)
          ](0x1);
          (_0x5d0098 = _0x2e4ad5(0x4c6)),
            (_0x1103cc = _0x2e4ad5(0x530) + _0x650f10 + _0x2e4ad5(0x23b));
        }
      }
    }
    actualizarProgreso(_0x403f1d, _0x5d0098, _0x1103cc);
  };
  _0x58577e();
  try {
    await new Promise((_0x4baf3d) => setTimeout(_0x4baf3d, 0xc8)),
      actualizarProgreso(
        0x19,
        _0x41db29(0x312),
        "Conectando\x20con\x20todos\x20los\x20servidores"
      );
    const _0x20176e = cargarProductosRapido()[_0x41db29(0x31d)]((_0x5a1f02) => {
        return (_0x3f0217 = !![]), _0x58577e(), _0x5a1f02;
      }),
      _0x291c12 = cargarPromocionesRapido()[_0x41db29(0x31d)]((_0x5e9343) => {
        return (_0x5528c3 = !![]), _0x58577e(), _0x5e9343;
      });
    setTimeout(() => {
      const _0x585118 = _0x41db29;
      (!_0x3f0217 || !_0x5528c3) &&
        actualizarProgreso(0x32, _0x585118(0x4a3), _0x585118(0x1c4));
    }, 0x3e8);
    const [_0x57b19b, _0x13c7ee] = await Promise[_0x41db29(0x4dd)]([
        _0x20176e,
        _0x291c12,
      ]),
      _0x4bc938 = ((Date[_0x41db29(0x1f6)]() - _0x4ad360) / 0x3e8)[
        _0x41db29(0x20e)
      ](0x1);
    console[_0x41db29(0x366)](
      "⚡\x20Actualización\x20completada\x20en\x20" + _0x4bc938 + "s"
    );
    const _0x2041f9 = _0x57b19b[_0x41db29(0x32f)] === _0x41db29(0x4ff),
      _0x3a83ca = _0x13c7ee[_0x41db29(0x32f)] === _0x41db29(0x4ff);
    if (_0x2041f9 && _0x3a83ca) {
      const _0x1c7db0 = _0x57b19b["value"]?.["productos"] || 0x0,
        _0x312161 = _0x13c7ee["value"]?.["promociones"] || 0x0,
        _0x43768b = _0x57b19b[_0x41db29(0x2da)]?.[_0x41db29(0x196)] || "",
        _0x5dec25 = _0x13c7ee["value"]?.[_0x41db29(0x196)] || "";
      actualizarProgreso(
        0x64,
        "✅\x20Todos\x20los\x20endpoints\x20consultados",
        _0x1c7db0 +
          _0x41db29(0x4a0) +
          _0x43768b +
          _0x41db29(0x3a1) +
          _0x312161 +
          _0x41db29(0x453) +
          _0x5dec25 +
          _0x41db29(0x531) +
          _0x4bc938 +
          "s"
      );
    } else
      _0x2041f9 || _0x3a83ca
        ? actualizarProgreso(
            0x4b,
            _0x41db29(0x188),
            _0x41db29(0x219) + _0x4bc938 + "s)"
          )
        : actualizarProgreso(
            0x19,
            _0x41db29(0x2ad),
            _0x41db29(0x465) + _0x4bc938 + "s)"
          );
    _0x57b19b["status"] === _0x41db29(0x540) &&
      console[_0x41db29(0x27b)](_0x41db29(0x186), _0x57b19b[_0x41db29(0x22d)]),
      _0x13c7ee[_0x41db29(0x32f)] === _0x41db29(0x540) &&
        console[_0x41db29(0x27b)](
          _0x41db29(0x4b8),
          _0x13c7ee[_0x41db29(0x22d)]
        );
  } catch (_0xfaf006) {
    console[_0x41db29(0x27b)]("Error\x20en\x20actualización:", _0xfaf006),
      actualizarProgreso(
        0x0,
        "❌\x20Error\x20de\x20conexión",
        _0x41db29(0x256)
      );
  } finally {
    (btnActualizar["disabled"] = ![]),
      (btnTexto[_0x41db29(0x1b2)] = _0x41db29(0x242)),
      btnSpinner["classList"][_0x41db29(0x3e3)]("d-none"),
      setTimeout(() => {
        (mensajeActualizacion["textContent"] = ""), renderUltimaActualizacion();
      }, 0xfa0);
  }
}
async function cargarProductosRapido() {
  const _0xb8e4ae = _0x406c10,
    _0x83f43b = Date["now"]();
  if (!navigator[_0xb8e4ae(0x3ab)])
    throw new Error("Sin\x20conexión\x20a\x20internet");
  let _0x38d2f3 = [],
    _0x4ae53c = [];
  console[_0xb8e4ae(0x366)](
    "📡\x20Consultando\x20TODOS\x20los\x20endpoints\x20de\x20productos..."
  );
  if (CONFIG_ENDPOINTS["usarCodigosBarras"])
    try {
      const _0x333b4f =
        CONFIG_ENDPOINTS["productosConCodigos"] + _0xb8e4ae(0x33e) + _0x83f43b;
      console[_0xb8e4ae(0x366)](_0xb8e4ae(0x191));
      const _0x43187d = await Promise[_0xb8e4ae(0x4e3)]([
        fetch(_0x333b4f, {
          cache: _0xb8e4ae(0x346),
          mode: _0xb8e4ae(0x2f9),
          headers: {
            Accept: "application/json",
            "Content-Type": _0xb8e4ae(0x1bc),
          },
        }),
        new Promise((_0x1ba686, _0x32a237) =>
          setTimeout(
            () => _0x32a237(new Error(_0xb8e4ae(0x47b))),
            CONFIG_ENDPOINTS[_0xb8e4ae(0x1f8)]
          )
        ),
      ]);
      if (_0x43187d["ok"]) {
        const _0x5b7aed = await _0x43187d[_0xb8e4ae(0x412)]();
        _0x5b7aed[_0xb8e4ae(0x401)] && _0x5b7aed[_0xb8e4ae(0x51f)]
          ? ((_0x38d2f3 = _0x5b7aed[_0xb8e4ae(0x51f)]),
            _0x4ae53c[_0xb8e4ae(0x2ab)]("códigos\x20de\x20barras\x20✅"),
            console[_0xb8e4ae(0x366)](
              _0xb8e4ae(0x1da),
              _0x5b7aed[_0xb8e4ae(0x51f)][_0xb8e4ae(0x237)]
            ))
          : _0x4ae53c[_0xb8e4ae(0x2ab)](_0xb8e4ae(0x44f));
      } else
        _0x4ae53c[_0xb8e4ae(0x2ab)](
          "códigos\x20de\x20barras\x20❌\x20(HTTP\x20" +
            _0x43187d[_0xb8e4ae(0x32f)] +
            ")"
        );
    } catch (_0x3df6f8) {
      console[_0xb8e4ae(0x1d4)](_0xb8e4ae(0x216), _0x3df6f8[_0xb8e4ae(0x29c)]),
        _0x3df6f8[_0xb8e4ae(0x29c)][_0xb8e4ae(0x4d5)](_0xb8e4ae(0x44e)) ||
        _0x3df6f8["message"][_0xb8e4ae(0x4d5)](_0xb8e4ae(0x47d))
          ? (_0x4ae53c[_0xb8e4ae(0x2ab)](_0xb8e4ae(0x21f)),
            console["log"](
              "🔧\x20Sugerencia:\x20Verificar\x20configuración\x20CORS\x20en\x20el\x20backend\x20para\x20/api/productos-con-codigos"
            ))
          : _0x4ae53c[_0xb8e4ae(0x2ab)](_0xb8e4ae(0x3a3));
    }
  try {
    const _0x139112 = CONFIG_ENDPOINTS[_0xb8e4ae(0x493)] + "?t=" + _0x83f43b;
    console[_0xb8e4ae(0x366)](_0xb8e4ae(0x1ca));
    const _0x5f53e7 = await fetch(_0x139112, { cache: _0xb8e4ae(0x346) });
    if (_0x5f53e7["ok"]) {
      const _0x37ec4e = await _0x5f53e7[_0xb8e4ae(0x412)](),
        _0x3e004d = Array[_0xb8e4ae(0x1aa)](_0x37ec4e) ? _0x37ec4e : [];
      _0x38d2f3[_0xb8e4ae(0x237)] === 0x0 &&
        _0x3e004d[_0xb8e4ae(0x237)] > 0x0 &&
        (_0x38d2f3 = _0x3e004d),
        _0x4ae53c[_0xb8e4ae(0x2ab)]("básico\x20✅"),
        console[_0xb8e4ae(0x366)](
          _0xb8e4ae(0x2a8),
          _0x3e004d[_0xb8e4ae(0x237)],
          _0xb8e4ae(0x51f)
        );
    } else _0x4ae53c[_0xb8e4ae(0x2ab)](_0xb8e4ae(0x2cc));
  } catch (_0x1b1451) {
    console[_0xb8e4ae(0x1d4)](_0xb8e4ae(0x414), _0x1b1451["message"]),
      _0x4ae53c["push"]("básico\x20❌\x20(error)");
  }
  if (_0x38d2f3["length"] === 0x0)
    throw new Error(
      "No\x20se\x20pudieron\x20cargar\x20productos\x20de\x20ningún\x20endpoint"
    );
  return (
    await clearProductos(),
    await saveProductos(_0x38d2f3),
    localStorage["setItem"](_0xb8e4ae(0x514), String(_0x83f43b)),
    console[_0xb8e4ae(0x366)](_0xb8e4ae(0x3df), _0x4ae53c["join"](",\x20")),
    {
      productos: _0x38d2f3["length"],
      endpoints: _0x4ae53c,
      detalles: _0x4ae53c["length"] + "\x20endpoints\x20consultados",
    }
  );
}
async function cargarPromocionesRapido() {
  const _0x69c288 = _0x406c10;
  console[_0x69c288(0x366)](_0x69c288(0x4d3));
  const _0x536d49 = await fetch(CONFIG_ENDPOINTS[_0x69c288(0x515)], {
    cache: _0x69c288(0x346),
    headers: { Accept: _0x69c288(0x1bc), "Content-Type": "application/json" },
  });
  if (!_0x536d49["ok"]) throw new Error(_0x69c288(0x2f7) + _0x536d49["status"]);
  const _0x646000 = await _0x536d49["json"]();
  if (
    _0x646000["success"] &&
    _0x646000["data"] &&
    _0x646000[_0x69c288(0x287)][_0x69c288(0x515)]
  ) {
    const _0x55a2dd = _0x646000[_0x69c288(0x287)]["promociones"];
    console[_0x69c288(0x366)](
      _0x69c288(0x2a1) + _0x55a2dd[_0x69c288(0x237)] + _0x69c288(0x456)
    );
    try {
      await clearPromociones(), await savePromociones(_0x55a2dd);
      const _0x10d223 = Date[_0x69c288(0x1f6)]();
      localStorage["setItem"](_0x69c288(0x539), String(_0x10d223)),
        console[_0x69c288(0x366)](_0x69c288(0x330));
    } catch (_0x5a6281) {
      console[_0x69c288(0x27b)](_0x69c288(0x357), _0x5a6281);
    }
    return {
      promociones: _0x55a2dd[_0x69c288(0x237)],
      detalles: _0x69c288(0x243),
    };
  } else throw new Error(_0x69c288(0x4ae));
}
btnActualizar["addEventListener"](_0x406c10(0x4a8), actualizarTodosLosDatos),
  renderUltimaActualizacion(),
  setInterval(renderUltimaActualizacion, 0xea60),
  openDB()[_0x406c10(0x31d)](async (_0x8f7c8c) => {
    const _0x1119d2 = _0x406c10,
      _0x1c1fdb = _0x8f7c8c[_0x1119d2(0x2c1)](DB_STORE, "readonly"),
      _0x20c320 = _0x1c1fdb[_0x1119d2(0x427)](DB_STORE),
      _0x5ca517 = _0x20c320[_0x1119d2(0x4b3)](),
      _0x335100 = _0x8f7c8c[_0x1119d2(0x2c1)](DB_STORE_PROMOCIONES, "readonly"),
      _0x8ddde2 = _0x335100[_0x1119d2(0x427)](DB_STORE_PROMOCIONES),
      _0x169ea1 = _0x8ddde2[_0x1119d2(0x4b3)]();
    Promise["all"]([
      new Promise((_0x32ede1) => {
        _0x5ca517["onsuccess"] = () => _0x32ede1(_0x5ca517["result"]);
      }),
      new Promise((_0x539c73) => {
        const _0x3b5b06 = _0x1119d2;
        _0x169ea1[_0x3b5b06(0x46d)] = () =>
          _0x539c73(_0x169ea1[_0x3b5b06(0x459)]);
      }),
    ])
      ["then"](([_0x42304a, _0x26917e]) => {
        const _0x5193a6 = _0x1119d2,
          _0x79f4be = _0x42304a > 0x0,
          _0x3a7451 = _0x26917e > 0x0;
        if (!_0x79f4be && !_0x3a7451)
          console["log"](_0x5193a6(0x3fc)),
            cargarProductosRapido()[_0x5193a6(0x296)]((_0x1645e2) =>
              console[_0x5193a6(0x27b)](_0x5193a6(0x508), _0x1645e2)
            );
        else
          !_0x79f4be
            ? (console[_0x5193a6(0x366)](_0x5193a6(0x21a)),
              cargarProductosRapido()[_0x5193a6(0x296)]((_0x23d4cd) =>
                console[_0x5193a6(0x27b)](_0x5193a6(0x508), _0x23d4cd)
              ))
            : console["log"](
                "✅\x20Datos\x20locales\x20encontrados:\x20productos:",
                _0x42304a,
                _0x5193a6(0x31f),
                _0x26917e
              );
        datosYaCargados = !![];
      })
      ["catch"]((_0x22546f) => {
        const _0x26df7d = _0x1119d2;
        console[_0x26df7d(0x27b)](_0x26df7d(0x1b0), _0x22546f);
        try {
          cargarProductosRapido()["catch"]((_0x38f781) =>
            console[_0x26df7d(0x27b)](_0x26df7d(0x479), _0x38f781)
          );
        } catch (_0x46a7c4) {}
        datosYaCargados = !![];
      });
  });
let historial = [];
const historialCookie = getCookie("historial");
if (historialCookie)
  try {
    historial = JSON[_0x406c10(0x455)](historialCookie);
  } catch (_0x41fb9d) {
    historial = [];
  }
function _0x3a44(_0x520ccb, _0x587446) {
  const _0x39025a = _0x3902();
  return (
    (_0x3a44 = function (_0x3a44a8, _0x1e00b6) {
      _0x3a44a8 = _0x3a44a8 - 0x17f;
      let _0x28a435 = _0x39025a[_0x3a44a8];
      return _0x28a435;
    }),
    _0x3a44(_0x520ccb, _0x587446)
  );
}
function renderClearButton() {
  const _0x3bacca = _0x406c10;
  return _0x3bacca(0x3a0);
}
function renderHistorial() {
  const _0x257d7b = _0x406c10;
  (historialDiv[_0x257d7b(0x181)] =
    _0x257d7b(0x451) +
    (historial[_0x257d7b(0x237)] > 0x0 ? renderClearButton() : "") +
    _0x257d7b(0x331) +
    (historial[_0x257d7b(0x237)] === 0x0
      ? _0x257d7b(0x370)
      : _0x257d7b(0x22e) +
        historial[_0x257d7b(0x485)]((_0x11202e) => {
          const _0x54c685 = _0x257d7b,
            _0x1d1037 =
              _0x11202e[_0x54c685(0x264)] ||
              _0x11202e["NOMBRE"] ||
              _0x54c685(0x369),
            _0x536fed =
              _0x11202e[_0x54c685(0x377)] ||
              _0x11202e[_0x54c685(0x3f9)] ||
              _0x11202e[_0x54c685(0x304)] ||
              _0x11202e[_0x54c685(0x33c)] ||
              _0x54c685(0x204),
            _0x45c403 =
              _0x11202e[_0x54c685(0x46a)] ||
              _0x11202e["L1"] ||
              _0x11202e[_0x54c685(0x2c6)] ||
              0x0,
            _0x2b4ea3 = Math[_0x54c685(0x2ee)](_0x45c403 * 1.16 * 0x64) / 0x64,
            _0xc4ccb5 = _0x11202e[_0x54c685(0x3ff)]
              ? new Date(_0x11202e[_0x54c685(0x3ff)])["toLocaleString"]()
              : _0x54c685(0x3f0);
          return (
            _0x54c685(0x2c2) +
            _0x1d1037 +
            _0x54c685(0x247) +
            _0x1d1037 +
            _0x54c685(0x1c5) +
            _0x536fed +
            "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20SKU\x22\x20data-copiar=\x22" +
            _0x536fed +
            _0x54c685(0x1fd) +
            _0x2b4ea3["toFixed"](0x2) +
            _0x54c685(0x32c) +
            _0xc4ccb5 +
            _0x54c685(0x1ef) +
            _0x536fed +
            _0x54c685(0x267)
          );
        })[_0x257d7b(0x261)]("") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>") +
    _0x257d7b(0x316)),
    setCookie("historial", JSON["stringify"](historial), 0x1e);
  const _0x3cdcc3 = document[_0x257d7b(0x4ba)](_0x257d7b(0x4b6));
  _0x3cdcc3 &&
    _0x3cdcc3["addEventListener"](_0x257d7b(0x4a8), () => {
      const _0x33cd72 = _0x257d7b;
      (historial = []),
        setCookie(_0x33cd72(0x19c), JSON[_0x33cd72(0x24e)](historial), 0x1e),
        renderHistorial();
    });
  const _0x1d95aa = historialDiv["querySelectorAll"](_0x257d7b(0x252));
  _0x1d95aa[_0x257d7b(0x3b6)]((_0x57929f) => {
    const _0x4c67af = _0x257d7b;
    _0x57929f[_0x4c67af(0x50d)](_0x4c67af(0x4a8), function (_0x466b7f) {
      const _0x5a1808 = _0x4c67af,
        _0x5b2ea9 = _0x57929f[_0x5a1808(0x241)](_0x5a1808(0x24c));
      navigator[_0x5a1808(0x4f3)] &&
        navigator[_0x5a1808(0x4f3)]
          ["writeText"](_0x5b2ea9)
          [_0x5a1808(0x31d)](() => {
            const _0x386d58 = _0x5a1808;
            (_0x57929f["innerHTML"] = _0x386d58(0x3c2)),
              setTimeout(() => {
                const _0x56ad01 = _0x386d58;
                _0x57929f[_0x56ad01(0x181)] =
                  "<i\x20class=\x22bi\x20bi-clipboard\x22></i>";
              }, 0x4b0);
          });
    });
  });
  const _0x3760d5 = historialDiv[_0x257d7b(0x3bc)](_0x257d7b(0x507));
  _0x3760d5["forEach"]((_0xd6a0a1) => {
    const _0x1c9420 = _0x257d7b;
    _0xd6a0a1[_0x1c9420(0x50d)](_0x1c9420(0x4a8), function (_0x4b7d34) {
      const _0x24e15d = _0xd6a0a1["getAttribute"]("data-sku");
      consultarProductoDesdeHistorial(_0x24e15d);
    });
  });
}
inputCodigo[_0x406c10(0x50d)](_0x406c10(0x4de), function (_0x1e93ff) {
  const _0x50f8e5 = _0x406c10;
  _0x1e93ff["key"] === _0x50f8e5(0x425) &&
    (_0x1e93ff[_0x50f8e5(0x337)](),
    form[_0x50f8e5(0x359)](),
    setTimeout(() => {
      const _0x349a0d = _0x50f8e5,
        _0x593333 = document[_0x349a0d(0x4ba)](_0x349a0d(0x1d9));
      _0x593333 &&
        _0x593333[_0x349a0d(0x4c1)]({
          behavior: "smooth",
          block: _0x349a0d(0x285),
          inline: _0x349a0d(0x286),
        });
    }, 0x12c));
}),
  form["addEventListener"](_0x406c10(0x28e), async (_0x4dbbca) => {
    const _0x39ee6b = _0x406c10;
    _0x4dbbca[_0x39ee6b(0x337)](), hideMobileKeyboard();
    let _0x7495d8 = inputCodigo[_0x39ee6b(0x2da)]
      [_0x39ee6b(0x416)]()
      ["replace"](/\s+$/, "");
    const _0x19499a = _0x7495d8[_0x39ee6b(0x4f7)]();
    (inputCodigo[_0x39ee6b(0x2da)] = _0x7495d8),
      (resultadoDiv[_0x39ee6b(0x181)] = ""),
      setTimeout(() => {
        const _0x4e4797 = _0x39ee6b,
          _0x3a8738 = document[_0x4e4797(0x4ba)](_0x4e4797(0x1d9));
        _0x3a8738 &&
          _0x3a8738[_0x4e4797(0x4c1)]({
            behavior: _0x4e4797(0x41e),
            block: _0x4e4797(0x285),
            inline: _0x4e4797(0x286),
          });
      }, 0x64),
      (sugerenciasDiv[_0x39ee6b(0x181)] = ""),
      (sugerenciasDiv["style"][_0x39ee6b(0x428)] = _0x39ee6b(0x452));
    if (!_0x7495d8) {
      (resultadoDiv["innerHTML"] = _0x39ee6b(0x305)),
        renderHistorial(),
        inputCodigo[_0x39ee6b(0x291)]();
      return;
    }
    (inputCodigo[_0x39ee6b(0x283)] = ""),
      (resultadoDiv[_0x39ee6b(0x181)] = _0x39ee6b(0x34a)),
      (inputCodigo[_0x39ee6b(0x2da)] = "");
    try {
      inputCodigo[_0x39ee6b(0x29d)]();
    } catch (_0x4d3353) {}
    let _0xde0b58 = await getAllProductos(),
      _0x20859e = _0xde0b58[_0x39ee6b(0x38f)]((_0x387a70) => {
        const _0x26a946 = _0x39ee6b,
          _0x5757bc = (
            _0x387a70["pr_sku"] != null
              ? String(_0x387a70[_0x26a946(0x377)])
              : ""
          )[_0x26a946(0x4f7)](),
          _0x355963 = (
            _0x387a70[_0x26a946(0x3f9)] != null
              ? String(_0x387a70["pr_gtin"])
              : ""
          )[_0x26a946(0x4f7)]();
        if (_0x5757bc === _0x19499a || _0x355963 === _0x19499a) return !![];
        if (
          _0x387a70[_0x26a946(0x3a5)] &&
          Array["isArray"](_0x387a70["codigos_barras"])
        )
          return _0x387a70[_0x26a946(0x3a5)][_0x26a946(0x1b4)](
            (_0x4ff1fa) => String(_0x4ff1fa)[_0x26a946(0x4f7)]() === _0x19499a
          );
        return ![];
      });
    if (_0x20859e) {
      mostrarDetalleProducto(_0x20859e);
      const _0x401e10 = {
        ..._0x20859e,
        FECHA_ESCANEO: new Date()[_0x39ee6b(0x18f)](),
      };
      historial[_0x39ee6b(0x417)](_0x401e10),
        setCookie(_0x39ee6b(0x19c), JSON[_0x39ee6b(0x24e)](historial), 0x1e),
        (inputCodigo[_0x39ee6b(0x2da)] = "");
      if (!isMobileDevice())
        try {
          inputCodigo[_0x39ee6b(0x291)]();
        } catch (_0x5a5411) {}
      _0x20859e[_0x39ee6b(0x3a5)] &&
        _0x20859e[_0x39ee6b(0x3a5)][_0x39ee6b(0x237)] > 0x1 &&
        console[_0x39ee6b(0x366)](
          "🎯\x20Producto\x20encontrado\x20con\x20códigos\x20múltiples:",
          {
            sku: _0x20859e["pr_sku"],
            gtin_principal: _0x20859e["pr_gtin"],
            codigo_buscado: _0x7495d8,
            todos_los_codigos: _0x20859e[_0x39ee6b(0x3a5)],
          }
        );
    } else {
      let _0x2cc84d = _0xde0b58[_0x39ee6b(0x3e4)]((_0x176ec2) => {
        const _0x2f932c = _0x39ee6b,
          _0x34f9a6 = (_0x176ec2[_0x2f932c(0x264)] || "")[_0x2f932c(0x4f7)](),
          _0x5ce4b1 = (
            _0x176ec2[_0x2f932c(0x377)] != null
              ? String(_0x176ec2[_0x2f932c(0x377)])
              : ""
          )[_0x2f932c(0x4f7)](),
          _0x38500c = (
            _0x176ec2[_0x2f932c(0x3f9)] != null
              ? String(_0x176ec2[_0x2f932c(0x3f9)])
              : ""
          )[_0x2f932c(0x4f7)]();
        return (
          _0x34f9a6[_0x2f932c(0x4d5)](_0x19499a) ||
          _0x5ce4b1[_0x2f932c(0x4d5)](_0x19499a) ||
          _0x38500c[_0x2f932c(0x4d5)](_0x19499a)
        );
      });
      _0x2cc84d[_0x39ee6b(0x237)] > 0x0
        ? mostrarModalResultadosBusqueda(_0x2cc84d, _0x7495d8)
        : ((resultadoDiv[_0x39ee6b(0x181)] =
            _0x39ee6b(0x306) + _0x7495d8 + _0x39ee6b(0x483)),
          (inputCodigo["value"] = ""),
          inputCodigo[_0x39ee6b(0x291)](),
          setTimeout(() => {
            resultadoDiv["innerHTML"] = "";
          }, 0x1388),
          console[_0x39ee6b(0x366)](_0x39ee6b(0x2db) + _0x7495d8 + "\x22"));
    }
    renderHistorial();
  });
async function detectarPromocionReal(_0x50aed5) {
  const _0xe9af3f = _0x406c10,
    _0x4b18e0 = (_0x50aed5[_0xe9af3f(0x377)] || "")[_0xe9af3f(0x31e)]();
  try {
    const _0x2f6b16 = await getAllPromociones();
    console[_0xe9af3f(0x366)](_0xe9af3f(0x4ac), _0x2f6b16["length"]),
      console[_0xe9af3f(0x366)](_0xe9af3f(0x23a), _0x4b18e0);
    const _0x140db4 = [];
    for (const _0x2c1616 of _0x2f6b16) {
      let _0x2f8f28 = [];
      if (
        _0x2c1616[_0xe9af3f(0x27d)] &&
        Array[_0xe9af3f(0x1aa)](_0x2c1616[_0xe9af3f(0x27d)])
      )
        _0x2f8f28 = _0x2c1616[_0xe9af3f(0x27d)];
      else
        _0x2c1616[_0xe9af3f(0x2d6)] &&
          _0x2c1616[_0xe9af3f(0x2d6)]["pr_sku"] &&
          (Array[_0xe9af3f(0x1aa)](
            _0x2c1616[_0xe9af3f(0x2d6)][_0xe9af3f(0x377)]
          )
            ? (_0x2f8f28 = _0x2c1616[_0xe9af3f(0x2d6)][_0xe9af3f(0x377)])
            : (_0x2f8f28 = _0x2c1616[_0xe9af3f(0x2d6)][_0xe9af3f(0x377)]
                [_0xe9af3f(0x3ad)]("\x20")
                ["filter"]((_0x364843) => _0x364843[_0xe9af3f(0x416)]())));
      if (_0x2f8f28[_0xe9af3f(0x4d5)](_0x4b18e0)) {
        const _0xb57a20 =
            _0x2c1616[_0xe9af3f(0x26b)] ||
            _0x2c1616[_0xe9af3f(0x1ab)] ||
            _0x2c1616[_0xe9af3f(0x489)] ||
            _0xe9af3f(0x360),
          _0x28d7bd =
            _0x2c1616[_0xe9af3f(0x32b)] ||
            _0x2c1616["cantidad"] ||
            _0x2c1616[_0xe9af3f(0x341)] ||
            "",
          _0x184891 =
            _0x2c1616["pro_precioPromo"] ||
            _0x2c1616[_0xe9af3f(0x48b)] ||
            _0x2c1616[_0xe9af3f(0x51d)] ||
            _0x2c1616[_0xe9af3f(0x2d0)] ||
            _0x2c1616[_0xe9af3f(0x187)] ||
            _0x2c1616[_0xe9af3f(0x2d1)] ||
            _0x2c1616[_0xe9af3f(0x510)] ||
            _0x2c1616["valor_total"] ||
            "";
        console["log"](_0xe9af3f(0x3af) + _0x4b18e0 + ":", {
          nombre: _0xb57a20,
          cantidad: _0x28d7bd,
          precio: _0x184891,
          campos_precio_disponibles: {
            pro_precioPromo: _0x2c1616["pro_precioPromo"],
            precio: _0x2c1616[_0xe9af3f(0x48b)],
            price: _0x2c1616[_0xe9af3f(0x51d)],
            precioTotal: _0x2c1616[_0xe9af3f(0x2d0)],
            precio_total: _0x2c1616["precio_total"],
            pro_precio_total: _0x2c1616[_0xe9af3f(0x2d1)],
            total_price: _0x2c1616[_0xe9af3f(0x510)],
            valor_total: _0x2c1616[_0xe9af3f(0x404)],
          },
          campos_disponibles: Object[_0xe9af3f(0x3de)](_0x2c1616),
          promo_completa: _0x2c1616,
        }),
          _0x140db4[_0xe9af3f(0x2ab)]({
            tipo: _0xe9af3f(0x1a6),
            detalle: "🔥\x20" + _0xb57a20,
            nombre_promocion: _0xb57a20,
            es_oficial: !![],
            fuente: _0xe9af3f(0x4da),
            id_promocion: _0x2c1616["idPromo"] || _0x2c1616["id"],
            cantidad: _0x28d7bd,
            precio: _0x184891,
            mensaje:
              _0x2c1616[_0xe9af3f(0x39f)] || _0x2c1616[_0xe9af3f(0x4f9)] || "",
            tipo_promo:
              _0x2c1616[_0xe9af3f(0x344)] || _0x2c1616[_0xe9af3f(0x2d7)] || "",
            vigencia:
              _0x2c1616["validFrom"] && _0x2c1616[_0xe9af3f(0x3bb)]
                ? _0x2c1616[_0xe9af3f(0x368)] +
                  _0xe9af3f(0x24a) +
                  _0x2c1616[_0xe9af3f(0x3bb)]
                : "",
            raw_data: {
              pro_cantidad_base: _0x2c1616[_0xe9af3f(0x32b)],
              pro_precioPromo: _0x2c1616[_0xe9af3f(0x1ad)],
              pro_nombrePromo: _0x2c1616[_0xe9af3f(0x26b)],
              todos_campos_precio: {
                pro_precioPromo: _0x2c1616["pro_precioPromo"],
                precio: _0x2c1616["precio"],
                price: _0x2c1616[_0xe9af3f(0x51d)],
                precioTotal: _0x2c1616[_0xe9af3f(0x2d0)],
                precio_total: _0x2c1616[_0xe9af3f(0x187)],
                pro_precio_total: _0x2c1616[_0xe9af3f(0x2d1)],
                total_price: _0x2c1616[_0xe9af3f(0x510)],
                valor_total: _0x2c1616[_0xe9af3f(0x404)],
              },
            },
          });
      }
    }
    return (
      _0x140db4["length"] === 0x0
        ? console["log"](
            "❌\x20No\x20hay\x20promociones\x20para\x20SKU:\x20" + _0x4b18e0
          )
        : console["log"](
            "✅\x20" +
              _0x140db4[_0xe9af3f(0x237)] +
              _0xe9af3f(0x3b1) +
              _0x4b18e0
          ),
      _0x140db4
    );
  } catch (_0x11308d) {
    return console[_0xe9af3f(0x27b)](_0xe9af3f(0x50c), _0x11308d), [];
  }
}
function mostrarDetalleProducto(_0x39fbe1) {
  const _0x2d10bc = _0x406c10;
  hideMobileKeyboard();
  let _0xff22d9 = "";
  if (
    _0x39fbe1[_0x2d10bc(0x4a5)] &&
    _0x39fbe1["pr_imagen"][_0x2d10bc(0x416)]() !== ""
  ) {
    if (_0x39fbe1[_0x2d10bc(0x4a5)][_0x2d10bc(0x4bc)](_0x2d10bc(0x1c7)))
      _0xff22d9 = _0x39fbe1[_0x2d10bc(0x4a5)];
    else {
      let _0xe382af = _0x39fbe1[_0x2d10bc(0x4a5)]["startsWith"]("/")
        ? _0x39fbe1[_0x2d10bc(0x4a5)]
        : "/" + _0x39fbe1[_0x2d10bc(0x4a5)];
      _0xff22d9 = _0x2d10bc(0x192) + _0xe382af;
    }
  }
  let _0xea6cfe =
      Number(_0x39fbe1[_0x2d10bc(0x46a)]) || Number(_0x39fbe1["L1"]) || 0x0,
    _0x40a588 = Math[_0x2d10bc(0x2ee)](_0xea6cfe * 1.16 * 0x64) / 0x64,
    _0x2f2d4b = 0xc,
    _0x1ac5d1 = 0.1,
    _0x16a116 = Math["round"](_0x40a588 * (0x1 + _0x1ac5d1) * 0x64) / 0x64,
    _0x204f61 = "";
  if (
    _0x39fbe1["codigos_barras"] &&
    _0x39fbe1[_0x2d10bc(0x3a5)][_0x2d10bc(0x237)] > 0x1
  ) {
    const _0x30a36a = [...new Set(_0x39fbe1["codigos_barras"])]["filter"](
      (_0x5e1345) => _0x5e1345 && _0x5e1345[_0x2d10bc(0x416)]()
    );
    _0x30a36a[_0x2d10bc(0x237)] > 0x1 &&
      (_0x204f61 =
        _0x2d10bc(0x1e7) + _0x30a36a["join"](",\x20") + _0x2d10bc(0x48f));
  }
  renderProductoConPromociones(
    _0x39fbe1,
    _0xff22d9,
    _0x40a588,
    _0x16a116,
    _0x204f61
  ),
    setTimeout(() => {
      generarCodigoBarras(_0x39fbe1);
    }, 0x64),
    detectarPromocionReal(_0x39fbe1)
      [_0x2d10bc(0x31d)]((_0x1ed709) => {
        actualizarPromocionesEnVista(
          _0x39fbe1,
          _0xff22d9,
          _0x40a588,
          _0x16a116,
          _0x204f61,
          _0x1ed709
        );
      })
      [_0x2d10bc(0x296)]((_0x9a1f1b) => {
        const _0x2d3ac2 = _0x2d10bc;
        console[_0x2d3ac2(0x27b)](_0x2d3ac2(0x3c5), _0x9a1f1b),
          actualizarPromocionesEnVista(
            _0x39fbe1,
            _0xff22d9,
            _0x40a588,
            _0x16a116,
            _0x204f61,
            []
          );
      });
}
function generarCodigoBarras(_0x26c530) {
  const _0x5baa33 = _0x406c10,
    _0x221358 =
      _0x26c530[_0x5baa33(0x377)] || _0x26c530[_0x5baa33(0x3f9)] || "",
    _0x9cd472 = "barcode-" + _0x26c530["pr_sku"],
    _0x18fab1 = document["getElementById"](_0x9cd472);
  if (!_0x18fab1 || !_0x221358) {
    console["warn"](_0x5baa33(0x4f0));
    return;
  }
  const _0x331d72 = () => {
    const _0x2d6b12 = _0x5baa33;
    if (window[_0x2d6b12(0x19b)])
      try {
        let _0x5109ac = "CODE128";
        const _0x2bcf8e = String(_0x221358);
        if (_0x2bcf8e["length"] === 0xd && /^\d+$/[_0x2d6b12(0x374)](_0x2bcf8e))
          _0x5109ac = _0x2d6b12(0x231);
        else {
          if (_0x2bcf8e[_0x2d6b12(0x237)] === 0x8 && /^\d+$/["test"](_0x2bcf8e))
            _0x5109ac = _0x2d6b12(0x310);
          else
            _0x2bcf8e[_0x2d6b12(0x237)] === 0xc &&
              /^\d+$/[_0x2d6b12(0x374)](_0x2bcf8e) &&
              (_0x5109ac = _0x2d6b12(0x393));
        }
        console["log"](
          _0x2d6b12(0x37e) + _0x5109ac + "\x20para:\x20" + _0x2bcf8e
        ),
          JsBarcode(_0x18fab1, _0x2bcf8e, {
            format: _0x5109ac,
            width: 0x2,
            height: 0x32,
            displayValue: ![],
            margin: 0x0,
            background: _0x2d6b12(0x2bc),
            lineColor: _0x2d6b12(0x41f),
          }),
          window[_0x2d6b12(0x3ef)] <= 0x300 &&
            JsBarcode(_0x18fab1, _0x2bcf8e, {
              format: _0x5109ac,
              width: 1.5,
              height: 0x28,
              displayValue: ![],
              margin: 0x0,
              background: "#ffffff",
              lineColor: _0x2d6b12(0x41f),
            });
      } catch (_0x3f4735) {
        console[_0x2d6b12(0x27b)](_0x2d6b12(0x31b), _0x3f4735);
        const _0x424d96 = _0x18fab1[_0x2d6b12(0x443)]("2d");
        (_0x424d96[_0x2d6b12(0x381)] = _0x2d6b12(0x315)),
          _0x424d96[_0x2d6b12(0x52c)](
            0x0,
            0x0,
            _0x18fab1[_0x2d6b12(0x4f2)],
            _0x18fab1[_0x2d6b12(0x258)]
          ),
          (_0x424d96[_0x2d6b12(0x381)] = "#6c757d"),
          (_0x424d96[_0x2d6b12(0x41b)] = _0x2d6b12(0x39b)),
          (_0x424d96[_0x2d6b12(0x4a7)] = _0x2d6b12(0x324)),
          _0x424d96["fillText"](
            "Código\x20no\x20válido",
            _0x18fab1[_0x2d6b12(0x4f2)] / 0x2,
            _0x18fab1[_0x2d6b12(0x258)] / 0x2
          );
      }
    else setTimeout(_0x331d72, 0x64);
  };
  _0x331d72();
}
function renderProductoConPromociones(
  _0x3bef0c,
  _0x3711b9,
  _0x4108fd,
  _0x2263eb,
  _0x59d564
) {
  const _0x38d958 = _0x406c10;
  resultadoDiv["innerHTML"] =
    _0x38d958(0x17f) +
    (_0x3711b9
      ? _0x38d958(0x301) +
        _0x3711b9 +
        "\x22\x20alt=\x22" +
        _0x3bef0c[_0x38d958(0x264)] +
        _0x38d958(0x4e2)
      : "") +
    _0x38d958(0x3e6) +
    _0x3bef0c[_0x38d958(0x264)] +
    _0x38d958(0x20b) +
    _0x4108fd[_0x38d958(0x20e)](0x2) +
    _0x38d958(0x3e8) +
    _0x2263eb["toFixed"](0x2) +
    _0x38d958(0x498) +
    _0x3bef0c["pr_sku"] +
    "\x22\x20class=\x22barcode-canvas\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-bold\x20text-dark\x22>" +
    (_0x3bef0c[_0x38d958(0x377)] || _0x3bef0c["pr_gtin"] || _0x38d958(0x28f)) +
    _0x38d958(0x53a) +
    _0x59d564 +
    _0x38d958(0x431);
}
function actualizarPromocionesEnVista(
  _0x5123c7,
  _0x2a89aa,
  _0x318e63,
  _0x107146,
  _0x4bb061,
  _0x304273
) {
  const _0x3522e7 = _0x406c10;
  console[_0x3522e7(0x366)](_0x3522e7(0x42d), _0x304273);
  let _0x10f250 = "";
  if (_0x304273["length"] > 0x0) {
    const _0x575a21 = _0x304273[_0x3522e7(0x3e4)](
      (_0x442222) =>
        _0x442222[_0x3522e7(0x3b2)] &&
        (_0x442222[_0x3522e7(0x39a)] === _0x3522e7(0x1cb) ||
          _0x442222[_0x3522e7(0x39a)] === _0x3522e7(0x4da))
    );
    console[_0x3522e7(0x366)](
      "🏷️\x20Promociones\x20oficiales\x20filtradas:",
      _0x575a21
    );
    if (_0x575a21["length"] > 0x0) {
      const _0x4ef3c3 = _0x575a21[_0x3522e7(0x485)]((_0x3b1c63) => {
        const _0x22f78d = _0x3522e7;
        console[_0x22f78d(0x366)](_0x22f78d(0x50b), _0x3b1c63);
        const _0xe45345 =
          _0x3b1c63[_0x22f78d(0x1fc)] || _0x3b1c63[_0x22f78d(0x32b)] || "";
        let _0x2fc3b2 =
          _0x3b1c63[_0x22f78d(0x48b)] || _0x3b1c63[_0x22f78d(0x1ad)] || "";
        const _0x1f9ba8 =
          _0x3b1c63[_0x22f78d(0x1de)] || _0x3b1c63[_0x22f78d(0x26b)] || "";
        console[_0x22f78d(0x366)](_0x22f78d(0x3e2), {
          cantidad: _0xe45345,
          precio: _0x2fc3b2,
          nombrePromo: _0x1f9ba8,
        });
        if (_0xe45345 && _0x2fc3b2) {
          const _0x571158 = parseInt(_0xe45345),
            _0x5bdcf5 = parseFloat(_0x2fc3b2);
          if (!isNaN(_0x571158) && !isNaN(_0x5bdcf5)) {
            const _0x157578 = _0x571158 * _0x5bdcf5,
              _0x21608f = Math[_0x22f78d(0x2ee)](_0x157578);
            console["log"](
              _0x22f78d(0x4d6) +
                _0x571158 +
                _0x22f78d(0x4f4) +
                _0x5bdcf5 +
                _0x22f78d(0x195) +
                _0x157578 +
                _0x22f78d(0x18c) +
                _0x21608f +
                _0x22f78d(0x198)
            ),
              (_0x2fc3b2 = _0x21608f[_0x22f78d(0x31e)]());
          }
        }
        console[_0x22f78d(0x366)](_0x22f78d(0x49f), {
          cantidad: _0xe45345,
          precio: _0x2fc3b2,
          nombrePromo: _0x1f9ba8,
        });
        let _0x3ce8e5 = "";
        if (_0xe45345 && _0x2fc3b2)
          (_0x3ce8e5 = _0xe45345 + "x" + _0x2fc3b2),
            console[_0x22f78d(0x366)](
              "✅\x20Usando\x20cantidad\x20y\x20precio\x20calculado:",
              _0x3ce8e5
            );
        else {
          if (_0x1f9ba8) {
            const _0x411d5b = _0x1f9ba8[_0x22f78d(0x333)](
                /(\d+)\s*[xX×]\s*(\d+)/i
              ),
              _0x3748f5 = _0x1f9ba8[_0x22f78d(0x333)](
                /(\d+)\s*[xX×]\s*\$?\s*(\d+)/i
              ),
              _0x46fbea = _0x1f9ba8[_0x22f78d(0x333)](/(\d+)\s*[xX×]/i);
            if (_0x411d5b)
              (_0x3ce8e5 = _0x411d5b[0x1] + "x" + _0x411d5b[0x2]),
                console[_0x22f78d(0x366)](
                  "✅\x20Extraído\x20formato\x20completo\x20del\x20nombre:",
                  _0x3ce8e5
                );
            else {
              if (_0x3748f5)
                (_0x3ce8e5 = _0x3748f5[0x1] + "x" + _0x3748f5[0x2]),
                  console[_0x22f78d(0x366)](_0x22f78d(0x372), _0x3ce8e5);
              else
                _0x46fbea
                  ? ((_0x3ce8e5 = _0x46fbea[0x1] + "x"),
                    console[_0x22f78d(0x366)](_0x22f78d(0x262), _0x3ce8e5))
                  : ((_0x3ce8e5 = _0x1f9ba8),
                    console["log"](_0x22f78d(0x3d9), _0x3ce8e5));
            }
          } else
            (_0x3ce8e5 = _0x22f78d(0x3cf)),
              console[_0x22f78d(0x366)](_0x22f78d(0x491));
        }
        return (
          "<span\x20class=\x22badge\x20bg-success\x20text-white\x20me-2\x20mb-1\x22\x20style=\x22font-size:0.85rem;\x22>🔥\x20" +
          _0x3ce8e5 +
          "</span>"
        );
      })[_0x3522e7(0x261)]("");
      _0x10f250 =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:#495057;\x22>🏷️\x20PROMOCIONES\x20ACTIVAS</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0x4ef3c3 +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22\x20style=\x22font-weight:500;\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    } else
      _0x10f250 =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
  } else _0x10f250 = _0x3522e7(0x303);
  const _0x44a741 = document[_0x3522e7(0x4ba)](_0x3522e7(0x3ba));
  _0x44a741 && (_0x44a741[_0x3522e7(0x181)] = _0x10f250);
}
async function mostrarModalPromocionesGenerales() {
  const _0x2a1c8c = _0x406c10,
    _0x56d792 =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
        _0x2a1c8c(0x374)
      ](navigator[_0x2a1c8c(0x3aa)]),
    _0x1c214d = /iPad|iPhone|iPod/[_0x2a1c8c(0x374)](
      navigator[_0x2a1c8c(0x3aa)]
    );
  if (_0x56d792) hideMobileKeyboard();
  console[_0x2a1c8c(0x366)](_0x2a1c8c(0x3fa), _0x56d792),
    console[_0x2a1c8c(0x366)](_0x2a1c8c(0x1d0), _0x1c214d);
  const _0x14c1ce = document["getElementById"](_0x2a1c8c(0x2a0)),
    _0x3ebe0f = document[_0x2a1c8c(0x4ba)](_0x2a1c8c(0x454));
  if (!_0x3ebe0f || !_0x14c1ce) {
    console[_0x2a1c8c(0x27b)](_0x2a1c8c(0x234));
    return;
  }
  try {
    const _0x46e8a6 = () => {
      const _0x9f5a75 = _0x2a1c8c,
        _0x790bf8 = document[_0x9f5a75(0x4ba)]("codigo");
      _0x790bf8 &&
        ((_0x790bf8[_0x9f5a75(0x283)] =
          "inserta\x20sku\x20o\x20busca\x20un\x20producto"),
        bringInputIntoView());
    };
    _0x14c1ce[_0x2a1c8c(0x50d)](_0x2a1c8c(0x446), _0x46e8a6, { once: !![] });
  } catch (_0x185f07) {}
  try {
    const _0x24716d = document[_0x2a1c8c(0x4ba)]("codigo");
    _0x24716d &&
      ((_0x24716d[_0x2a1c8c(0x2da)] = ""),
      (_0x24716d[_0x2a1c8c(0x283)] =
        "inserta\x20sku\x20o\x20busca\x20un\x20producto"));
    const _0xc865b8 = document[_0x2a1c8c(0x4ba)](_0x2a1c8c(0x31a));
    _0xc865b8 &&
      ((_0xc865b8[_0x2a1c8c(0x181)] = ""),
      (_0xc865b8[_0x2a1c8c(0x2ae)]["display"] = _0x2a1c8c(0x452)));
  } catch (_0x4057e7) {}
  try {
    console["log"](_0x2a1c8c(0x1d6)),
      (_0x3ebe0f["innerHTML"] = _0x2a1c8c(0x4e0));
    const _0x565daa = await getAllProductos();
    let _0x279cd2 = [];
    try {
      _0x279cd2 = await getAllPromociones();
    } catch (_0x3e7289) {
      _0x279cd2 = [];
    }
    const _0x4ac2db = ![];
    console[_0x2a1c8c(0x366)](_0x2a1c8c(0x2f8), {
      total: _0x279cd2[_0x2a1c8c(0x237)],
      desdeServidor: _0x4ac2db,
    });
    if (_0x279cd2[_0x2a1c8c(0x237)] === 0x0) {
      _0x3ebe0f[_0x2a1c8c(0x181)] = _0x2a1c8c(0x265);
      return;
    }
    let _0x28b723 = _0x2a1c8c(0x2dd);
    _0x279cd2["forEach"]((_0x420b76, _0x407b48) => {
      const _0x5798ce = _0x2a1c8c;
      let _0x43debe = [];
      if (
        _0x420b76[_0x5798ce(0x27d)] &&
        Array[_0x5798ce(0x1aa)](_0x420b76["skus"])
      )
        _0x43debe = _0x420b76["skus"];
      else
        _0x420b76[_0x5798ce(0x2d6)] &&
          _0x420b76[_0x5798ce(0x2d6)][_0x5798ce(0x377)] &&
          (Array[_0x5798ce(0x1aa)](_0x420b76[_0x5798ce(0x2d6)]["pr_sku"])
            ? (_0x43debe = _0x420b76[_0x5798ce(0x2d6)]["pr_sku"])
            : (_0x43debe = _0x420b76["pro_grupoProductos_primaria"][
                _0x5798ce(0x377)
              ]
                [_0x5798ce(0x3ad)]("\x20")
                [_0x5798ce(0x3e4)]((_0x51c5b8) =>
                  _0x51c5b8[_0x5798ce(0x416)]()
                )));
      const _0x414b09 = new Map(
          _0x565daa[_0x5798ce(0x485)]((_0x5ea42a) => [
            String(_0x5ea42a[_0x5798ce(0x377)]),
            _0x5ea42a,
          ])
        ),
        _0x10639b = _0x43debe[_0x5798ce(0x485)]((_0x5aee39) =>
          _0x414b09[_0x5798ce(0x541)](String(_0x5aee39))
        )["filter"](Boolean),
        _0xd3b8e =
          _0x420b76["pro_nombrePromo"] ||
          _0x420b76[_0x5798ce(0x1ab)] ||
          "Promoción\x20" + (_0x407b48 + 0x1),
        _0xef6153 =
          _0x420b76[_0x5798ce(0x344)] || _0x420b76["tipo"] || _0x5798ce(0x1a2),
        _0x3f0a2c =
          _0x420b76["pro_mensaje"] || _0x420b76[_0x5798ce(0x4f9)] || "",
        _0x51163a = _0x420b76[_0x5798ce(0x32b)] || "",
        _0x4e2a5c = Number(_0x51163a) || 0x1;
      let _0xbefb82 = 0x0;
      const _0x5ea953 = (_0x3f0a2c + "\x20" + _0xd3b8e)["toLowerCase"](),
        _0x248d33 = _0x5ea953[_0x5798ce(0x333)](/(\d+)\s*x\s*(\d+)/);
      if (_0x248d33) _0xbefb82 = Math["round"](Number(_0x248d33[0x2]));
      else {
        const _0x2af0d9 = Number(_0x420b76[_0x5798ce(0x1ad)]) || 0x0;
        _0xbefb82 = Math["round"](_0x2af0d9 * _0x4e2a5c);
      }
      _0x28b723 +=
        _0x5798ce(0x336) +
        _0xd3b8e +
        "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22productos-lista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x10639b["length"] > 0x0
          ? _0x5798ce(0x2b8) +
            _0x10639b["slice"](0x0, 0x4)
              [_0x5798ce(0x485)]((_0x5f0a5d) => {
                const _0x4ad46e = _0x5798ce;
                let _0x3bcafd = "";
                if (
                  _0x5f0a5d["pr_imagen"] &&
                  _0x5f0a5d[_0x4ad46e(0x4a5)][_0x4ad46e(0x416)]() !== ""
                ) {
                  if (_0x5f0a5d[_0x4ad46e(0x4a5)][_0x4ad46e(0x4bc)]("http"))
                    _0x3bcafd = _0x5f0a5d[_0x4ad46e(0x4a5)];
                  else {
                    let _0x1c6971 = _0x5f0a5d["pr_imagen"]["startsWith"]("/")
                      ? _0x5f0a5d["pr_imagen"]
                      : "/" + _0x5f0a5d[_0x4ad46e(0x4a5)];
                    _0x3bcafd = _0x4ad46e(0x192) + _0x1c6971;
                  }
                }
                const _0x4a5bd8 =
                    Number(_0x5f0a5d[_0x4ad46e(0x46a)]) ||
                    Number(_0x5f0a5d["L1"]) ||
                    0x0,
                  _0x134429 =
                    Math[_0x4ad46e(0x2ee)](_0x4a5bd8 * 1.16 * 0x64) / 0x64;
                return (
                  _0x4ad46e(0x388) +
                  (_0x3bcafd
                    ? _0x4ad46e(0x3d8) +
                      _0x3bcafd +
                      "\x22\x20alt=\x22" +
                      _0x5f0a5d[_0x4ad46e(0x264)] +
                      _0x4ad46e(0x2b5)
                    : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-light\x20rounded\x22\x20style=\x22min-width:\x2060px;\x20height:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-image\x20text-muted\x22\x20style=\x22font-size:\x201.5rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20") +
                  _0x4ad46e(0x2bb) +
                  _0x5f0a5d["pr_name"] +
                  _0x4ad46e(0x298) +
                  _0x134429["toFixed"](0x2) +
                  "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22consultarProductoDesdeModal(\x27" +
                  _0x5f0a5d[_0x4ad46e(0x377)] +
                  _0x4ad46e(0x227)
                );
              })
              [_0x5798ce(0x261)]("") +
            _0x5798ce(0x2b8) +
            (_0x10639b[_0x5798ce(0x237)] > 0x4
              ? _0x5798ce(0x25c) +
                (_0x10639b["length"] - 0x4) +
                _0x5798ce(0x517)
              : "") +
            _0x5798ce(0x37b)
          : _0x5798ce(0x1f3)) +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    }),
      (_0x28b723 += _0x2a1c8c(0x483)),
      (_0x3ebe0f[_0x2a1c8c(0x181)] = _0x28b723);
    if (_0x56d792 || _0x1c214d) {
      console[_0x2a1c8c(0x366)](_0x2a1c8c(0x2b1)),
        document[_0x2a1c8c(0x3bc)](_0x2a1c8c(0x2e2))["forEach"]((_0x45165a) =>
          _0x45165a[_0x2a1c8c(0x478)]()
        ),
        (_0x14c1ce[_0x2a1c8c(0x2ae)]["position"] = "fixed"),
        (_0x14c1ce[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x271)] = "0"),
        (_0x14c1ce[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x1d1)] = "0"),
        (_0x14c1ce[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x4f2)] = _0x2a1c8c(0x321)),
        (_0x14c1ce[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x258)] = _0x2a1c8c(0x321)),
        (_0x14c1ce[_0x2a1c8c(0x2ae)]["zIndex"] = _0x2a1c8c(0x1bf)),
        (_0x14c1ce["style"][_0x2a1c8c(0x230)] = _0x2a1c8c(0x3f3));
      const _0x40403c = _0x14c1ce[_0x2a1c8c(0x2e1)](_0x2a1c8c(0x21d));
      _0x40403c &&
        ((_0x40403c["style"]["width"] = _0x2a1c8c(0x321)),
        (_0x40403c[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x4ec)] = "100%"),
        (_0x40403c["style"][_0x2a1c8c(0x258)] = _0x2a1c8c(0x321)),
        (_0x40403c[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x2b0)] = "0"),
        (_0x40403c["style"][_0x2a1c8c(0x428)] = "flex"),
        (_0x40403c[_0x2a1c8c(0x2ae)]["flexDirection"] = _0x2a1c8c(0x4e9)));
      const _0xed1ddb = _0x14c1ce[_0x2a1c8c(0x2e1)](_0x2a1c8c(0x358));
      _0xed1ddb &&
        ((_0xed1ddb["style"][_0x2a1c8c(0x4f2)] = _0x2a1c8c(0x321)),
        (_0xed1ddb[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x258)] = _0x2a1c8c(0x321)),
        (_0xed1ddb[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x37f)] = "none"),
        (_0xed1ddb[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x1e9)] = "0"),
        (_0xed1ddb[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x428)] = _0x2a1c8c(0x3db)),
        (_0xed1ddb["style"][_0x2a1c8c(0x532)] = "column"));
      const _0x3fbd2e = _0x14c1ce[_0x2a1c8c(0x2e1)](_0x2a1c8c(0x394));
      _0x3fbd2e &&
        ((_0x3fbd2e[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x3db)] = "1"),
        (_0x3fbd2e["style"]["overflowY"] = "auto"),
        (_0x3fbd2e[_0x2a1c8c(0x2ae)]["webkitOverflowScrolling"] =
          _0x2a1c8c(0x189)),
        (_0x3fbd2e["style"][_0x2a1c8c(0x3e5)] = _0x2a1c8c(0x452))),
        (_0x14c1ce[_0x2a1c8c(0x2ae)][_0x2a1c8c(0x428)] = _0x2a1c8c(0x2e0)),
        _0x14c1ce["classList"][_0x2a1c8c(0x3e3)]("show"),
        document[_0x2a1c8c(0x1c9)][_0x2a1c8c(0x184)][_0x2a1c8c(0x478)](
          _0x2a1c8c(0x21b)
        ),
        (document["body"][_0x2a1c8c(0x2ae)][_0x2a1c8c(0x1dd)] = "");
    } else {
      console[_0x2a1c8c(0x366)](_0x2a1c8c(0x1fe));
      const _0x36122e = new bootstrap[_0x2a1c8c(0x463)](_0x14c1ce, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x36122e[_0x2a1c8c(0x521)]();
    }
  } catch (_0x28fde5) {
    console["error"](_0x2a1c8c(0x3c5), _0x28fde5),
      (_0x3ebe0f[_0x2a1c8c(0x181)] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>❌\x20Error\x20al\x20cargar\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>" +
        _0x28fde5[_0x2a1c8c(0x29c)] +
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
  }
}
function cerrarModalMobile() {
  const _0x187d2b = _0x406c10;
  console[_0x187d2b(0x366)](_0x187d2b(0x3c9));
  const _0x298e80 = document["getElementById"]("promocionesGeneralesModal");
  if (_0x298e80) {
    _0x298e80[_0x187d2b(0x184)][_0x187d2b(0x478)]("show"),
      (_0x298e80[_0x187d2b(0x2ae)]["display"] = "none"),
      (_0x298e80[_0x187d2b(0x2ae)][_0x187d2b(0x27f)] = ""),
      (_0x298e80[_0x187d2b(0x2ae)][_0x187d2b(0x271)] = ""),
      (_0x298e80["style"][_0x187d2b(0x1d1)] = ""),
      (_0x298e80[_0x187d2b(0x2ae)][_0x187d2b(0x4f2)] = ""),
      (_0x298e80["style"]["height"] = ""),
      (_0x298e80["style"][_0x187d2b(0x1eb)] = ""),
      (_0x298e80[_0x187d2b(0x2ae)]["backgroundColor"] = "");
    const _0x26dd63 = _0x298e80[_0x187d2b(0x2e1)](_0x187d2b(0x21d));
    _0x26dd63 &&
      ((_0x26dd63[_0x187d2b(0x2ae)][_0x187d2b(0x4f2)] = ""),
      (_0x26dd63[_0x187d2b(0x2ae)][_0x187d2b(0x4ec)] = ""),
      (_0x26dd63[_0x187d2b(0x2ae)]["height"] = ""),
      (_0x26dd63[_0x187d2b(0x2ae)][_0x187d2b(0x2b0)] = ""),
      (_0x26dd63[_0x187d2b(0x2ae)]["display"] = ""),
      (_0x26dd63[_0x187d2b(0x2ae)][_0x187d2b(0x532)] = ""));
    const _0x352c78 = _0x298e80[_0x187d2b(0x2e1)](_0x187d2b(0x358));
    _0x352c78 &&
      ((_0x352c78["style"][_0x187d2b(0x4f2)] = ""),
      (_0x352c78[_0x187d2b(0x2ae)]["height"] = ""),
      (_0x352c78[_0x187d2b(0x2ae)]["border"] = ""),
      (_0x352c78[_0x187d2b(0x2ae)]["borderRadius"] = ""),
      (_0x352c78[_0x187d2b(0x2ae)][_0x187d2b(0x428)] = ""),
      (_0x352c78[_0x187d2b(0x2ae)][_0x187d2b(0x532)] = ""));
    const _0xc25c6d = _0x298e80[_0x187d2b(0x2e1)](_0x187d2b(0x394));
    _0xc25c6d &&
      ((_0xc25c6d[_0x187d2b(0x2ae)][_0x187d2b(0x3db)] = ""),
      (_0xc25c6d[_0x187d2b(0x2ae)][_0x187d2b(0x1b7)] = ""),
      (_0xc25c6d[_0x187d2b(0x2ae)][_0x187d2b(0x1ec)] = ""),
      (_0xc25c6d[_0x187d2b(0x2ae)][_0x187d2b(0x3e5)] = ""));
  }
  document[_0x187d2b(0x1c9)][_0x187d2b(0x184)][_0x187d2b(0x478)]("modal-open"),
    (document[_0x187d2b(0x1c9)]["style"][_0x187d2b(0x1dd)] = "");
  try {
    const _0x197b52 = bootstrap[_0x187d2b(0x463)]["getInstance"](_0x298e80);
    _0x197b52 && _0x197b52["hide"]();
  } catch (_0x12ccf1) {
    console[_0x187d2b(0x366)](_0x187d2b(0x2a6));
  }
  try {
    document[_0x187d2b(0x3bc)](_0x187d2b(0x2e2))[_0x187d2b(0x3b6)](
      (_0x251c39) => _0x251c39[_0x187d2b(0x478)]()
    );
  } catch (_0x54070a) {}
  try {
    const _0x5a5a18 = document[_0x187d2b(0x4ba)](_0x187d2b(0x3d6));
    _0x5a5a18 &&
      ((_0x5a5a18[_0x187d2b(0x283)] = _0x187d2b(0x4c4)), bringInputIntoView());
  } catch (_0x271434) {}
}
async function consultarProductoDesdeModal(_0x1ce4c5) {
  const _0x1b364b = _0x406c10;
  try {
    try {
      cerrarModalMobile();
    } catch (_0x44256d) {}
    const _0x3005a5 = document[_0x1b364b(0x4ba)](_0x1b364b(0x2a0));
    _0x3005a5 &&
      (_0x3005a5[_0x1b364b(0x184)][_0x1b364b(0x478)](_0x1b364b(0x521)),
      (_0x3005a5[_0x1b364b(0x2ae)][_0x1b364b(0x428)] = "none"));
    try {
      const _0x310626 =
        bootstrap[_0x1b364b(0x463)][_0x1b364b(0x349)](_0x3005a5);
      if (_0x310626) _0x310626["hide"]();
    } catch (_0x3092f1) {}
    document[_0x1b364b(0x3bc)](_0x1b364b(0x49e))[_0x1b364b(0x3b6)](
      (_0x452064) => _0x452064["remove"]()
    ),
      document["body"][_0x1b364b(0x184)][_0x1b364b(0x478)]("modal-open"),
      (document[_0x1b364b(0x1c9)]["style"][_0x1b364b(0x1dd)] = "");
    const _0x5f4a68 = await getAllProductos(),
      _0xd744b4 = _0x5f4a68[_0x1b364b(0x38f)](
        (_0x151fba) =>
          String(_0x151fba[_0x1b364b(0x377)]) === String(_0x1ce4c5) ||
          String(_0x151fba[_0x1b364b(0x3f9)]) === String(_0x1ce4c5)
      );
    if (_0xd744b4) {
      (inputCodigo[_0x1b364b(0x2da)] = ""), mostrarDetalleProducto(_0xd744b4);
      const _0x411b2a = {
        ..._0xd744b4,
        FECHA_ESCANEO: new Date()["toISOString"](),
      };
      historial[_0x1b364b(0x417)](_0x411b2a),
        setCookie(_0x1b364b(0x19c), JSON[_0x1b364b(0x24e)](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x30c78f = _0x1b364b,
            _0x53f6a5 = document[_0x30c78f(0x4ba)]("resultado");
          _0x53f6a5 &&
            _0x53f6a5[_0x30c78f(0x4c1)]({
              behavior: _0x30c78f(0x41e),
              block: _0x30c78f(0x285),
              inline: _0x30c78f(0x286),
            });
        }, 0x12c);
    } else
      (resultadoDiv[_0x1b364b(0x181)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20" +
        _0x1ce4c5 +
        _0x1b364b(0x3c0)),
        setTimeout(() => {
          const _0x9aa3b3 = _0x1b364b;
          resultadoDiv[_0x9aa3b3(0x181)] = "";
        }, 0x1388);
  } catch (_0x37cc7f) {
    console[_0x1b364b(0x27b)](_0x1b364b(0x1c6), _0x37cc7f),
      (resultadoDiv[_0x1b364b(0x181)] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20" +
        _0x37cc7f[_0x1b364b(0x29c)] +
        "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      setTimeout(() => {
        const _0x39d5f8 = _0x1b364b;
        resultadoDiv[_0x39d5f8(0x181)] = "";
      }, 0x1388);
  }
}
async function consultarProductoDesdeHistorial(_0x862b13) {
  const _0xef8cc8 = _0x406c10;
  try {
    const _0x3689c9 = await getAllProductos(),
      _0x42386e = _0x3689c9["find"](
        (_0x1a41ba) =>
          String(_0x1a41ba[_0xef8cc8(0x377)]) === String(_0x862b13) ||
          String(_0x1a41ba[_0xef8cc8(0x3f9)]) === String(_0x862b13)
      );
    if (_0x42386e) {
      (inputCodigo[_0xef8cc8(0x2da)] = ""), mostrarDetalleProducto(_0x42386e);
      const _0x11fbc4 = historial[_0xef8cc8(0x2ca)](
        (_0x45c6e9) =>
          (_0x45c6e9[_0xef8cc8(0x377)] &&
            String(_0x45c6e9[_0xef8cc8(0x377)]) === String(_0x862b13)) ||
          (_0x45c6e9[_0xef8cc8(0x3f9)] &&
            String(_0x45c6e9["pr_gtin"]) === String(_0x862b13))
      );
      if (_0x11fbc4 !== -0x1) {
        const _0xae2bb9 = historial[_0xef8cc8(0x3f6)](_0x11fbc4, 0x1)[0x0];
        (_0xae2bb9[_0xef8cc8(0x3ff)] = new Date()[_0xef8cc8(0x18f)]()),
          historial[_0xef8cc8(0x417)](_0xae2bb9),
          setCookie(_0xef8cc8(0x19c), JSON[_0xef8cc8(0x24e)](historial), 0x1e),
          renderHistorial();
      }
      setTimeout(() => {
        const _0x24023a = _0xef8cc8,
          _0x418d8f = document[_0x24023a(0x4ba)](_0x24023a(0x1d9));
        _0x418d8f &&
          _0x418d8f["scrollIntoView"]({
            behavior: "smooth",
            block: _0x24023a(0x285),
            inline: _0x24023a(0x286),
          });
      }, 0x12c);
    } else
      (resultadoDiv["innerHTML"] =
        _0xef8cc8(0x380) + _0x862b13 + _0xef8cc8(0x3c0)),
        setTimeout(() => {
          resultadoDiv["innerHTML"] = "";
        }, 0x1388);
  } catch (_0x409dc7) {
    console[_0xef8cc8(0x27b)](_0xef8cc8(0x444), _0x409dc7),
      (resultadoDiv[_0xef8cc8(0x181)] =
        _0xef8cc8(0x22c) + _0x409dc7[_0xef8cc8(0x29c)] + _0xef8cc8(0x490)),
      setTimeout(() => {
        const _0x5ece9a = _0xef8cc8;
        resultadoDiv[_0x5ece9a(0x181)] = "";
      }, 0x1388);
  }
}
(window[_0x406c10(0x253)] = mostrarModalPromocionesGenerales),
  (window["consultarProductoDesdeModal"] = consultarProductoDesdeModal),
  (window[_0x406c10(0x403)] = consultarProductoDesdeHistorial);
async function tienePromociones(_0x77bbfc) {
  const _0x130f65 = _0x406c10;
  try {
    const _0x5d5959 = (_0x77bbfc["pr_sku"] || "")[_0x130f65(0x31e)]();
    if (!_0x5d5959) return ![];
    const _0x16e952 = await getAllPromociones();
    if (_0x16e952[_0x130f65(0x237)] === 0x0) return ![];
    for (const _0x2c134f of _0x16e952) {
      let _0x328b75 = [];
      if (
        _0x2c134f[_0x130f65(0x27d)] &&
        Array[_0x130f65(0x1aa)](_0x2c134f[_0x130f65(0x27d)])
      )
        _0x328b75 = _0x2c134f[_0x130f65(0x27d)];
      else
        _0x2c134f[_0x130f65(0x2d6)] &&
          _0x2c134f["pro_grupoProductos_primaria"]["pr_sku"] &&
          (Array["isArray"](_0x2c134f[_0x130f65(0x2d6)]["pr_sku"])
            ? (_0x328b75 = _0x2c134f[_0x130f65(0x2d6)]["pr_sku"])
            : (_0x328b75 = _0x2c134f["pro_grupoProductos_primaria"][
                _0x130f65(0x377)
              ]
                ["split"]("\x20")
                [_0x130f65(0x3e4)]((_0x1ca0d7) =>
                  _0x1ca0d7[_0x130f65(0x416)]()
                )));
      if (_0x328b75[_0x130f65(0x4d5)](_0x5d5959)) return !![];
    }
    return ![];
  } catch (_0x3b0435) {
    return console["warn"](_0x130f65(0x488), _0x3b0435), ![];
  }
}
let searchTimeout;
inputCodigo["addEventListener"]("input", async function (_0x54d2ea) {
  const _0x3136d6 = _0x406c10,
    _0x193fd8 = inputCodigo["value"][_0x3136d6(0x416)]()[_0x3136d6(0x4f7)]();
  clearTimeout(searchTimeout), (sugerenciasDiv[_0x3136d6(0x181)] = "");
  if (!_0x193fd8 || _0x193fd8[_0x3136d6(0x237)] < 0x2) {
    sugerenciasDiv["style"]["display"] = _0x3136d6(0x452);
    return;
  }
  searchTimeout = setTimeout(async () => {
    const _0x529009 = _0x3136d6;
    let _0x4d43c9 = await getAllProductos(),
      _0x4da0a8 = _0x4d43c9[_0x529009(0x3e4)]((_0x1a4163) => {
        const _0x223556 = _0x529009;
        return (
          (_0x1a4163[_0x223556(0x264)] &&
            _0x1a4163[_0x223556(0x264)]
              ["toLowerCase"]()
              [_0x223556(0x4d5)](_0x193fd8)) ||
          (_0x1a4163[_0x223556(0x377)] &&
            String(_0x1a4163["pr_sku"])
              ["toLowerCase"]()
              ["includes"](_0x193fd8)) ||
          (_0x1a4163[_0x223556(0x3f9)] &&
            String(_0x1a4163[_0x223556(0x3f9)])
              ["toLowerCase"]()
              ["includes"](_0x193fd8))
        );
      });
    const _0x1f72a3 = new Set();
    _0x4da0a8 = _0x4da0a8[_0x529009(0x3e4)]((_0x2bb530) => {
      const _0x3416a7 = _0x529009,
        _0x2d3333 = _0x2bb530[_0x3416a7(0x377)] || _0x2bb530["pr_gtin"];
      if (!_0x2d3333 || _0x1f72a3[_0x3416a7(0x3b9)](_0x2d3333)) return ![];
      return _0x1f72a3[_0x3416a7(0x3e3)](_0x2d3333), !![];
    });
    if (_0x4da0a8[_0x529009(0x237)] === 0x0) {
      sugerenciasDiv["style"]["display"] = _0x529009(0x452);
      return;
    }
    _0x4da0a8[_0x529009(0x440)]((_0x5738e3, _0x5afd6c) => {
      const _0x43f8fa = _0x529009,
        _0x1c0c75 = (_0x5738e3[_0x43f8fa(0x264)] || "")["toLowerCase"](),
        _0x1c8411 = (_0x5afd6c[_0x43f8fa(0x264)] || "")[_0x43f8fa(0x4f7)](),
        _0x56b8fc = _0x1c0c75["startsWith"](_0x193fd8),
        _0xab714a = _0x1c8411[_0x43f8fa(0x4bc)](_0x193fd8);
      if (_0x56b8fc && !_0xab714a) return -0x1;
      if (!_0x56b8fc && _0xab714a) return 0x1;
      return _0x1c0c75[_0x43f8fa(0x237)] - _0x1c8411[_0x43f8fa(0x237)];
    }),
      (_0x4da0a8 = _0x4da0a8[_0x529009(0x278)](0x0, 0xa));
    const _0x1508ea = _0x4da0a8["map"]((_0x8ba2ae) =>
        tienePromociones(_0x8ba2ae)
      ),
      _0x519130 = await Promise["all"](_0x1508ea);
    _0x4da0a8[_0x529009(0x3b6)]((_0x48b7ec, _0x2bb271) => {
      const _0x3d9558 = _0x529009,
        _0x5641bd = _0x519130[_0x2bb271],
        _0x1a46ba = document[_0x3d9558(0x2c9)](_0x3d9558(0x409));
      (_0x1a46ba[_0x3d9558(0x213)] = _0x3d9558(0x409)),
        (_0x1a46ba["className"] = _0x3d9558(0x245));
      let _0x2fce06 = "";
      if (
        _0x48b7ec["pr_imagen"] &&
        _0x48b7ec[_0x3d9558(0x4a5)][_0x3d9558(0x416)]() !== ""
      ) {
        let _0x5db746 = "";
        if (_0x48b7ec[_0x3d9558(0x4a5)]["startsWith"](_0x3d9558(0x1c7)))
          _0x5db746 = _0x48b7ec[_0x3d9558(0x4a5)];
        else {
          let _0x50535d = _0x48b7ec[_0x3d9558(0x4a5)][_0x3d9558(0x4bc)]("/")
            ? _0x48b7ec[_0x3d9558(0x4a5)]
            : "/" + _0x48b7ec[_0x3d9558(0x4a5)];
          _0x5db746 = "https://media.megaservicio.net" + _0x50535d;
        }
        _0x2fce06 =
          "<img\x20src=\x22" +
          _0x5db746 +
          _0x3d9558(0x3b8) +
          _0x48b7ec[_0x3d9558(0x264)] +
          _0x3d9558(0x410);
      }
      const _0x246c47 = _0x5641bd ? _0x3d9558(0x392) : "";
      (_0x1a46ba[_0x3d9558(0x181)] =
        _0x3d9558(0x363) +
        _0x2fce06 +
        _0x3d9558(0x3c7) +
        _0x48b7ec[_0x3d9558(0x264)] +
        _0x3d9558(0x1e0) +
        _0x246c47 +
        _0x3d9558(0x328) +
        (_0x48b7ec[_0x3d9558(0x377)] || _0x48b7ec[_0x3d9558(0x3f9)] || "") +
        _0x3d9558(0x4dc)),
        (_0x1a46ba[_0x3d9558(0x290)] = function () {
          const _0x5d9449 = _0x3d9558;
          mostrarDetalleProducto(_0x48b7ec);
          const _0x100906 = {
            ..._0x48b7ec,
            FECHA_ESCANEO: new Date()[_0x5d9449(0x18f)](),
          };
          historial["unshift"](_0x100906),
            setCookie(
              _0x5d9449(0x19c),
              JSON[_0x5d9449(0x24e)](historial),
              0x1e
            ),
            renderHistorial(),
            (inputCodigo[_0x5d9449(0x2da)] = ""),
            (sugerenciasDiv[_0x5d9449(0x181)] = ""),
            (sugerenciasDiv["style"]["display"] = _0x5d9449(0x452));
        }),
        sugerenciasDiv[_0x3d9558(0x40f)](_0x1a46ba);
    }),
      (sugerenciasDiv[_0x529009(0x2ae)]["display"] = "block");
  }, 0x12c);
}),
  document[_0x406c10(0x50d)]("click", function (_0x39956a) {
    const _0x17e096 = _0x406c10;
    !inputCodigo[_0x17e096(0x294)](_0x39956a["target"]) &&
      !sugerenciasDiv[_0x17e096(0x294)](_0x39956a[_0x17e096(0x275)]) &&
      ((sugerenciasDiv[_0x17e096(0x181)] = ""),
      (sugerenciasDiv[_0x17e096(0x2ae)][_0x17e096(0x428)] = _0x17e096(0x452)));
  });
function iniciarScanner() {
  const _0xc1e3b8 = _0x406c10;
  if (scannerActivo) return;
  try {
    (inputCodigo[_0xc1e3b8(0x2da)] = ""),
      (inputCodigo[_0xc1e3b8(0x283)] = _0xc1e3b8(0x480)),
      (sugerenciasDiv[_0xc1e3b8(0x181)] = ""),
      (sugerenciasDiv[_0xc1e3b8(0x2ae)][_0xc1e3b8(0x428)] = _0xc1e3b8(0x452));
  } catch (_0x58e7fd) {}
  navigator["mediaDevices"]
    ["getUserMedia"]({ video: !![] })
    [_0xc1e3b8(0x31d)]((_0x51f397) => {
      const _0x44daa9 = _0xc1e3b8;
      _0x51f397[_0x44daa9(0x534)]()[_0x44daa9(0x3b6)]((_0x4ad2d1) =>
        _0x4ad2d1["stop"]()
      ),
        (scannerActivo = !![]),
        (readerDiv[_0x44daa9(0x2ae)][_0x44daa9(0x428)] = _0x44daa9(0x2e0)),
        document[_0x44daa9(0x4ba)]("reader")[_0x44daa9(0x4c1)]({
          behavior: "smooth",
          block: _0x44daa9(0x324),
        }),
        (ayudaTexto[_0x44daa9(0x2ae)]["display"] = _0x44daa9(0x2e0));
      const _0x284731 = new Html5Qrcode(_0x44daa9(0x221)),
        _0x1acc8a = {
          fps: 0xa,
          videoConstraints: {
            width: { min: 0x190, ideal: 0x780 },
            height: { min: 0x190, ideal: 0x438 },
            facingMode: _0x44daa9(0x49a),
            advanced: [{ zoom: 0x2 }],
          },
          qrbox: function (_0x5d96ce, _0x32500a) {
            const _0x3bb8ac = _0x44daa9,
              _0x550729 = Math[_0x3bb8ac(0x38c)](0x12c, _0x5d96ce * 0.9),
              _0x2938cc = 0x64;
            return { width: _0x550729, height: _0x2938cc };
          },
          rememberLastUsedCamera: !![],
          aspectRatio: 0x1,
          formatsToSupport: [
            Html5QrcodeSupportedFormats[_0x44daa9(0x4e6)],
            Html5QrcodeSupportedFormats[_0x44daa9(0x441)],
            Html5QrcodeSupportedFormats["EAN_8"],
            Html5QrcodeSupportedFormats["UPC_A"],
            Html5QrcodeSupportedFormats[_0x44daa9(0x205)],
            Html5QrcodeSupportedFormats[_0x44daa9(0x1a3)],
            Html5QrcodeSupportedFormats["CODE_93"],
            Html5QrcodeSupportedFormats[_0x44daa9(0x1fb)],
            Html5QrcodeSupportedFormats[_0x44daa9(0x248)],
            Html5QrcodeSupportedFormats[_0x44daa9(0x40e)],
            Html5QrcodeSupportedFormats[_0x44daa9(0x297)],
            Html5QrcodeSupportedFormats[_0x44daa9(0x52f)],
            Html5QrcodeSupportedFormats[_0x44daa9(0x281)],
          ],
          experimentalFeatures: { useBarCodeDetectorIfSupported: !![] },
        };
      _0x284731[_0x44daa9(0x285)](
        { facingMode: _0x44daa9(0x49a) },
        _0x1acc8a,
        (_0x5598ad) => {
          const _0x35340a = _0x44daa9;
          (inputCodigo[_0x35340a(0x2da)] = _0x5598ad["trim"]()[
            _0x35340a(0x42c)
          ](/\s+$/, "")),
            _0x284731[_0x35340a(0x34d)]()[_0x35340a(0x31d)](() => {
              const _0x4bf534 = _0x35340a;
              (readerDiv[_0x4bf534(0x2ae)]["display"] = _0x4bf534(0x452)),
                (ayudaTexto[_0x4bf534(0x2ae)]["display"] = "none"),
                (scannerActivo = ![]),
                _0x284731[_0x4bf534(0x538)](),
                form[_0x4bf534(0x359)](),
                setTimeout(() => {
                  const _0x5779b6 = _0x4bf534,
                    _0x10af29 = document[_0x5779b6(0x4ba)](_0x5779b6(0x1d9));
                  _0x10af29 &&
                    _0x10af29["scrollIntoView"]({
                      behavior: _0x5779b6(0x41e),
                      block: _0x5779b6(0x285),
                      inline: _0x5779b6(0x286),
                    });
                  try {
                    bringInputIntoView();
                  } catch (_0x6df3b7) {}
                }, 0x1f4);
            });
        },
        (_0x22f46d) => {}
      )
        ["then"](() => {
          setTimeout(() => {
            const _0x3383c1 = _0x3a44,
              _0x4358fb = readerDiv[_0x3383c1(0x2e1)](_0x3383c1(0x484));
            if (_0x4358fb) {
              const _0x132880 =
                _0x4358fb[_0x3383c1(0x40a)][_0x3383c1(0x45f)]()[0x0];
              _0x132880[_0x3383c1(0x3e9)]({
                focusMode: _0x3383c1(0x1a8),
                advanced: [{ zoom: 0x2 }],
              })
                [_0x3383c1(0x31d)](() => {})
                [_0x3383c1(0x296)]((_0x2a3c73) => {});
            }
          }, 0x7d0);
        })
        [_0x44daa9(0x296)]((_0x3967b7) => {
          const _0x76b4bc = _0x44daa9;
          (scannerActivo = ![]),
            (resultadoDiv[_0x76b4bc(0x181)] =
              _0x76b4bc(0x4d0) + _0x3967b7 + _0x76b4bc(0x483)),
            renderHistorial();
        });
      const _0x417a98 = new MutationObserver(() => {
        const _0x2da8b1 = _0x44daa9,
          _0x4f0be9 = readerDiv["querySelector"](_0x2da8b1(0x484));
        _0x4f0be9 &&
          (_0x4f0be9[_0x2da8b1(0x2b2)](_0x2da8b1(0x3b7), ""),
          _0x4f0be9["setAttribute"](_0x2da8b1(0x1a0), ""),
          _0x4f0be9[_0x2da8b1(0x2b2)](_0x2da8b1(0x235), ""),
          _0x417a98[_0x2da8b1(0x26d)]());
      });
      _0x417a98[_0x44daa9(0x3c6)](readerDiv, {
        childList: !![],
        subtree: !![],
      });
    })
    [_0xc1e3b8(0x296)]((_0x8c83bd) => {
      const _0x219dd1 = _0xc1e3b8;
      (resultadoDiv[_0x219dd1(0x181)] =
        "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20autoriza\x20el\x20acceso\x20a\x20la\x20cámara</div>"),
        renderHistorial();
    });
}
const fileInput = document["getElementById"](_0x406c10(0x1fa));
if (fileInput) {
  fileInput["addEventListener"]("change", async (_0xd44583) => {
    const _0x2fe67c = _0x406c10,
      _0x1d91f8 = _0xd44583[_0x2fe67c(0x275)][_0x2fe67c(0x527)][0x0];
    if (!_0x1d91f8) return;
    const _0x347391 = document[_0x2fe67c(0x4ba)](_0x2fe67c(0x3d6)),
      _0x4a058d = document[_0x2fe67c(0x4ba)](_0x2fe67c(0x1d9)),
      _0x437a54 = document[_0x2fe67c(0x4ba)]("sugerenciasDiv"),
      _0x4e2fc1 = document[_0x2fe67c(0x4ba)](_0x2fe67c(0x20c));
    if (!_0x347391 || !_0x4a058d || !_0x4e2fc1) {
      console[_0x2fe67c(0x27b)](
        "❌\x20Elementos\x20DOM\x20requeridos\x20no\x20encontrados"
      ),
        alert(_0x2fe67c(0x1bb));
      return;
    }
    console[_0x2fe67c(0x366)](_0x2fe67c(0x4e1), _0x1d91f8[_0x2fe67c(0x3d5)]);
    try {
      (_0x347391["value"] = ""),
        (_0x347391[_0x2fe67c(0x283)] = _0x2fe67c(0x480)),
        _0x437a54 &&
          ((_0x437a54["innerHTML"] = ""),
          (_0x437a54[_0x2fe67c(0x2ae)]["display"] = _0x2fe67c(0x452)));
    } catch (_0x5154e0) {
      console[_0x2fe67c(0x1d4)](
        "⚠️\x20Error\x20limpiando\x20elementos:",
        _0x5154e0
      );
    }
    _0x4a058d[_0x2fe67c(0x181)] =
      "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Procesando\x20imagen...</div>";
    try {
      const _0x14e01 = new Image(),
        _0x1ba0a9 = new Promise((_0x543acf, _0x126448) => {
          const _0x982598 = _0x2fe67c;
          (_0x14e01[_0x982598(0x509)] = _0x543acf),
            (_0x14e01[_0x982598(0x525)] = _0x126448),
            (_0x14e01["src"] = URL[_0x982598(0x4ca)](_0x1d91f8));
        });
      await _0x1ba0a9;
      if (
        GOOGLE_VISION_CONFIG[_0x2fe67c(0x49d)] &&
        visionUsageTracker[_0x2fe67c(0x183)]()
      ) {
        console["log"](_0x2fe67c(0x274));
        try {
          const _0x4fce2a = await detectarConGoogleVision(_0x14e01);
          if (_0x4fce2a) {
            console[_0x2fe67c(0x366)](_0x2fe67c(0x215), _0x4fce2a),
              (_0x347391["value"] = _0x4fce2a),
              _0x4e2fc1[_0x2fe67c(0x359)](),
              URL[_0x2fe67c(0x273)](_0x14e01[_0x2fe67c(0x53c)]),
              (fileInput[_0x2fe67c(0x2da)] = "");
            return;
          }
        } catch (_0x18fff6) {
          console[_0x2fe67c(0x366)](
            _0x2fe67c(0x229),
            _0x18fff6[_0x2fe67c(0x29c)]
          );
          if (_0x18fff6[_0x2fe67c(0x29c)][_0x2fe67c(0x4d5)](_0x2fe67c(0x43f)))
            console["log"](
              "🔧\x20Problema\x20de\x20CORS\x20detectado\x20-\x20necesita\x20configuración\x20en\x20backend"
            );
          else {
            if (_0x18fff6[_0x2fe67c(0x29c)][_0x2fe67c(0x4d5)](_0x2fe67c(0x284)))
              console[_0x2fe67c(0x366)](
                "🔧\x20Error\x20500:\x20Problema\x20con\x20Google\x20Vision\x20API"
              ),
                _0x18fff6[_0x2fe67c(0x29c)][_0x2fe67c(0x4d5)](_0x2fe67c(0x423))
                  ? (console["log"](_0x2fe67c(0x2ec)),
                    console[_0x2fe67c(0x366)](
                      "💡\x20Ve\x20a:\x20https://console.developers.google.com/billing/enable?project=1070150612422"
                    ))
                  : console["log"](_0x2fe67c(0x49c));
            else
              _0x18fff6[_0x2fe67c(0x29c)][_0x2fe67c(0x4d5)](_0x2fe67c(0x1ea)) &&
                console[_0x2fe67c(0x366)](_0x2fe67c(0x53b));
          }
        }
      } else {
        if (
          GOOGLE_VISION_CONFIG[_0x2fe67c(0x49d)] &&
          !visionUsageTracker[_0x2fe67c(0x183)]()
        ) {
          const _0x2f1991 = visionUsageTracker[_0x2fe67c(0x33b)]();
          console["log"](
            _0x2fe67c(0x2d4) +
              _0x2f1991[_0x2fe67c(0x307)] +
              "/" +
              _0x2f1991[_0x2fe67c(0x35c)] +
              ",\x20Diario:\x20" +
              _0x2f1991[_0x2fe67c(0x434)] +
              "/" +
              _0x2f1991[_0x2fe67c(0x4c7)]
          );
        }
      }
      if (_0x2fe67c(0x4fb) in window) {
        console[_0x2fe67c(0x366)](_0x2fe67c(0x470));
        try {
          const _0x1fa8df = [
              _0x2fe67c(0x20f),
              _0x2fe67c(0x352),
              "code_39",
              _0x2fe67c(0x382),
              _0x2fe67c(0x36e),
              _0x2fe67c(0x40c),
              _0x2fe67c(0x1f4),
              _0x2fe67c(0x47c),
              _0x2fe67c(0x2fe),
              _0x2fe67c(0x458),
              _0x2fe67c(0x2af),
              _0x2fe67c(0x3e1),
              "upc_e",
            ],
            _0x5223e2 = new BarcodeDetector({ formats: _0x1fa8df }),
            _0x428274 = await _0x5223e2["detect"](_0x14e01);
          console[_0x2fe67c(0x366)](
            _0x2fe67c(0x30c) + _0x428274[_0x2fe67c(0x237)],
            _0x428274
          );
          if (_0x428274[_0x2fe67c(0x237)] > 0x0) {
            const _0x373d5a = _0x428274[_0x2fe67c(0x3e4)]((_0x3d287f) => {
              const _0x171807 = _0x2fe67c,
                _0x13dc1b = _0x3d287f[_0x171807(0x26c)][_0x171807(0x416)]();
              console[_0x171807(0x366)](
                _0x171807(0x38a) +
                  _0x13dc1b +
                  _0x171807(0x2fb) +
                  _0x3d287f["format"] +
                  _0x171807(0x1b6) +
                  _0x13dc1b["length"]
              );
              switch (_0x3d287f["format"]) {
                case _0x171807(0x1f4):
                  return (
                    _0x13dc1b[_0x171807(0x237)] === 0xd &&
                    /^\d{13}$/[_0x171807(0x374)](_0x13dc1b)
                  );
                case _0x171807(0x3e1):
                  return (
                    _0x13dc1b["length"] === 0xc &&
                    /^\d{12}$/[_0x171807(0x374)](_0x13dc1b)
                  );
                case "ean_8":
                  return (
                    _0x13dc1b[_0x171807(0x237)] === 0x8 &&
                    /^\d{8}$/[_0x171807(0x374)](_0x13dc1b)
                  );
                case _0x171807(0x44b):
                  return (
                    _0x13dc1b[_0x171807(0x237)] >= 0x6 &&
                    _0x13dc1b[_0x171807(0x237)] <= 0x8 &&
                    /^\d+$/[_0x171807(0x374)](_0x13dc1b)
                  );
                case "code_128":
                  return (
                    _0x13dc1b["length"] >= 0x1 &&
                    _0x13dc1b[_0x171807(0x237)] <= 0x32
                  );
                case _0x171807(0x411):
                  return (
                    _0x13dc1b[_0x171807(0x237)] >= 0x1 &&
                    /^[A-Z0-9\-. $\/+%*]+$/[_0x171807(0x374)](_0x13dc1b)
                  );
                case _0x171807(0x382):
                  return (
                    _0x13dc1b[_0x171807(0x237)] >= 0x1 &&
                    _0x13dc1b[_0x171807(0x237)] <= 0x32
                  );
                case _0x171807(0x36e):
                  return (
                    _0x13dc1b[_0x171807(0x237)] >= 0x3 &&
                    /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x171807(0x374)](_0x13dc1b)
                  );
                case _0x171807(0x2fe):
                  return (
                    _0x13dc1b[_0x171807(0x237)] >= 0x2 &&
                    _0x13dc1b[_0x171807(0x237)] % 0x2 === 0x0 &&
                    /^\d+$/[_0x171807(0x374)](_0x13dc1b)
                  );
                case _0x171807(0x2af):
                  return (
                    _0x13dc1b["length"] >= 0x1 && _0x13dc1b["length"] <= 0x10c8
                  );
                case _0x171807(0x40c):
                  return (
                    _0x13dc1b[_0x171807(0x237)] >= 0x1 &&
                    _0x13dc1b[_0x171807(0x237)] <= 0xc2c
                  );
                case _0x171807(0x458):
                  return (
                    _0x13dc1b[_0x171807(0x237)] >= 0x1 &&
                    _0x13dc1b["length"] <= 0xa96
                  );
                case "aztec":
                  return (
                    _0x13dc1b[_0x171807(0x237)] >= 0x1 &&
                    _0x13dc1b["length"] <= 0xef8
                  );
                default:
                  return (
                    _0x13dc1b[_0x171807(0x237)] >= 0x1 &&
                    _0x13dc1b["length"] <= 0x64
                  );
              }
            });
            console["log"](
              "✅\x20Códigos\x20válidos:\x20" + _0x373d5a[_0x2fe67c(0x237)]
            );
            if (_0x373d5a[_0x2fe67c(0x237)] > 0x0) {
              const _0x1c3083 = {
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
                _0x898cf0 = _0x373d5a["sort"]((_0x170721, _0x1722df) => {
                  const _0x927ba9 = _0x2fe67c,
                    _0x3d79a7 =
                      (_0x1c3083[_0x1722df["format"]] || 0x0) -
                      (_0x1c3083[_0x170721[_0x927ba9(0x473)]] || 0x0);
                  if (_0x3d79a7 !== 0x0) return _0x3d79a7;
                  if (
                    [
                      _0x927ba9(0x1f4),
                      _0x927ba9(0x3e1),
                      "ean_8",
                      _0x927ba9(0x44b),
                      "code_128",
                      "code_39",
                      "code_93",
                      _0x927ba9(0x2fe),
                      _0x927ba9(0x36e),
                    ][_0x927ba9(0x4d5)](_0x170721[_0x927ba9(0x473)])
                  ) {
                    const _0x406086 =
                        _0x170721[_0x927ba9(0x52e)]["width"] *
                        _0x170721[_0x927ba9(0x52e)]["height"],
                      _0x2d6edd =
                        _0x1722df["boundingBox"][_0x927ba9(0x4f2)] *
                        _0x1722df[_0x927ba9(0x52e)][_0x927ba9(0x258)];
                    return _0x2d6edd - _0x406086;
                  }
                  const _0x46d91f =
                      _0x170721[_0x927ba9(0x52e)]["x"] +
                      _0x170721[_0x927ba9(0x52e)][_0x927ba9(0x4f2)] / 0x2,
                    _0xdfe983 =
                      _0x1722df["boundingBox"]["x"] +
                      _0x1722df[_0x927ba9(0x52e)]["width"] / 0x2,
                    _0x21a95a = _0x14e01[_0x927ba9(0x4f2)] / 0x2;
                  return (
                    Math["abs"](_0x46d91f - _0x21a95a) -
                    Math[_0x927ba9(0x3e7)](_0xdfe983 - _0x21a95a)
                  );
                }),
                _0x4bf3ea = _0x898cf0[0x0],
                _0x587df7 = _0x4bf3ea[_0x2fe67c(0x26c)]
                  [_0x2fe67c(0x416)]()
                  [_0x2fe67c(0x42c)](/\s+$/, "");
              console[_0x2fe67c(0x366)](
                "🎯\x20Mejor\x20código\x20seleccionado:\x20\x22" +
                  _0x587df7 +
                  _0x2fe67c(0x1ac) +
                  _0x4bf3ea["format"] +
                  ")"
              ),
                (_0x347391[_0x2fe67c(0x2da)] = _0x587df7),
                _0x4e2fc1[_0x2fe67c(0x359)](),
                URL[_0x2fe67c(0x273)](_0x14e01[_0x2fe67c(0x53c)]),
                (fileInput[_0x2fe67c(0x2da)] = "");
              return;
            }
          }
          console[_0x2fe67c(0x366)](
            "⚠️\x20API\x20nativa\x20no\x20detectó\x20códigos\x20válidos"
          );
        } catch (_0x20543f) {
          console[_0x2fe67c(0x366)](_0x2fe67c(0x3a6), _0x20543f);
        }
      } else console[_0x2fe67c(0x366)](_0x2fe67c(0x397));
      console[_0x2fe67c(0x366)](_0x2fe67c(0x2c4)), usarQuaggaFallback(_0x14e01);
    } catch (_0x3d82ee) {
      console[_0x2fe67c(0x27b)](_0x2fe67c(0x1af), _0x3d82ee),
        (_0x4a058d[_0x2fe67c(0x181)] =
          "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Error\x20al\x20procesar\x20la\x20imagen</div>"),
        renderHistorial(),
        (fileInput[_0x2fe67c(0x2da)] = "");
    }
  });
  function usarQuaggaFallback(_0x514ff7) {
    const _0x5ae2fa = _0x406c10;
    console[_0x5ae2fa(0x366)]("📸\x20Procesando\x20con\x20Quagga...");
    const _0x3ee20d = document[_0x5ae2fa(0x2c9)]("canvas"),
      _0x23127b = _0x3ee20d[_0x5ae2fa(0x443)]("2d");
    let { width: _0x21083f, height: _0x593c9e } = _0x514ff7;
    const _0x13060e = 0x190;
    if (_0x21083f < _0x13060e || _0x593c9e < _0x13060e) {
      const _0x209c0b =
        Math["max"](_0x13060e / _0x21083f, _0x13060e / _0x593c9e) * 1.5;
      (_0x21083f *= _0x209c0b),
        (_0x593c9e *= _0x209c0b),
        console[_0x5ae2fa(0x366)](
          _0x5ae2fa(0x1c2) +
            _0x514ff7[_0x5ae2fa(0x4f2)] +
            "x" +
            _0x514ff7["height"] +
            _0x5ae2fa(0x4df) +
            _0x21083f +
            "x" +
            _0x593c9e
        );
    }
    const _0x101a8d = 0x5dc;
    if (_0x21083f > _0x101a8d || _0x593c9e > _0x101a8d) {
      const _0x22b269 = Math["min"](
        _0x101a8d / _0x21083f,
        _0x101a8d / _0x593c9e
      );
      (_0x21083f *= _0x22b269), (_0x593c9e *= _0x22b269);
    }
    (_0x3ee20d[_0x5ae2fa(0x4f2)] = _0x21083f),
      (_0x3ee20d[_0x5ae2fa(0x258)] = _0x593c9e),
      (_0x23127b["imageSmoothingEnabled"] = ![]),
      _0x23127b[_0x5ae2fa(0x3c8)](_0x514ff7, 0x0, 0x0, _0x21083f, _0x593c9e);
    const _0xcf6f2f = _0x23127b[_0x5ae2fa(0x200)](
        0x0,
        0x0,
        _0x21083f,
        _0x593c9e
      ),
      _0x47473c = _0xcf6f2f["data"];
    let _0xd4287e = new Array(0x100)[_0x5ae2fa(0x288)](0x0);
    for (
      let _0x3016aa = 0x0;
      _0x3016aa < _0x47473c[_0x5ae2fa(0x237)];
      _0x3016aa += 0x4
    ) {
      const _0x408c56 = Math[_0x5ae2fa(0x2ee)](
        0.299 * _0x47473c[_0x3016aa] +
          0.587 * _0x47473c[_0x3016aa + 0x1] +
          0.114 * _0x47473c[_0x3016aa + 0x2]
      );
      _0xd4287e[_0x408c56]++;
    }
    let _0x2d6fce = 0x80,
      _0x2445f5 = 0x0;
    const _0x197c9b = _0x21083f * _0x593c9e;
    for (let _0x44d9c1 = 0x0; _0x44d9c1 < 0x100; _0x44d9c1++) {
      let _0x5a0927 = 0x0,
        _0x477fd = 0x0,
        _0x38c67a = 0x0,
        _0x23e331 = 0x0;
      for (let _0x292afd = 0x0; _0x292afd <= _0x44d9c1; _0x292afd++) {
        (_0x5a0927 += _0xd4287e[_0x292afd]),
          (_0x38c67a += _0x292afd * _0xd4287e[_0x292afd]);
      }
      for (let _0x2b0e95 = _0x44d9c1 + 0x1; _0x2b0e95 < 0x100; _0x2b0e95++) {
        (_0x477fd += _0xd4287e[_0x2b0e95]),
          (_0x23e331 += _0x2b0e95 * _0xd4287e[_0x2b0e95]);
      }
      if (_0x5a0927 === 0x0 || _0x477fd === 0x0) continue;
      const _0x24295d = _0x38c67a / _0x5a0927,
        _0x5fceec = _0x23e331 / _0x477fd,
        _0x5af4f4 =
          _0x5a0927 *
          _0x477fd *
          (_0x24295d - _0x5fceec) *
          (_0x24295d - _0x5fceec);
      _0x5af4f4 > _0x2445f5 &&
        ((_0x2445f5 = _0x5af4f4), (_0x2d6fce = _0x44d9c1));
    }
    console[_0x5ae2fa(0x366)](_0x5ae2fa(0x4c0) + _0x2d6fce);
    const _0x1d7016 = new Uint8ClampedArray(_0x47473c);
    for (
      let _0x49833f = 0x0;
      _0x49833f < _0x47473c[_0x5ae2fa(0x237)];
      _0x49833f += 0x4
    ) {
      const _0x3035ce = Math[_0x5ae2fa(0x2ee)](
          0.299 * _0x47473c[_0x49833f] +
            0.587 * _0x47473c[_0x49833f + 0x1] +
            0.114 * _0x47473c[_0x49833f + 0x2]
        ),
        _0x5b3b49 = _0x3035ce > _0x2d6fce ? 0xff : 0x0;
      (_0x47473c[_0x49833f] = _0x5b3b49),
        (_0x47473c[_0x49833f + 0x1] = _0x5b3b49),
        (_0x47473c[_0x49833f + 0x2] = _0x5b3b49);
    }
    _0x23127b[_0x5ae2fa(0x536)](_0xcf6f2f, 0x0, 0x0);
    let _0x203aca = _0x3ee20d["toDataURL"]("image/png");
    const _0x455eec = _0x23127b[_0x5ae2fa(0x269)](_0x21083f, _0x593c9e),
      _0x3d6ec1 = _0x455eec[_0x5ae2fa(0x287)];
    for (
      let _0x4c3532 = 0x0;
      _0x4c3532 < _0x1d7016["length"];
      _0x4c3532 += 0x4
    ) {
      const _0x5b31e3 = Math["round"](
          0.299 * _0x1d7016[_0x4c3532] +
            0.587 * _0x1d7016[_0x4c3532 + 0x1] +
            0.114 * _0x1d7016[_0x4c3532 + 0x2]
        ),
        _0x4eb7e5 = _0x5b31e3 > _0x2d6fce * 0.7 ? 0xff : 0x0;
      (_0x3d6ec1[_0x4c3532] = _0x4eb7e5),
        (_0x3d6ec1[_0x4c3532 + 0x1] = _0x4eb7e5),
        (_0x3d6ec1[_0x4c3532 + 0x2] = _0x4eb7e5),
        (_0x3d6ec1[_0x4c3532 + 0x3] = 0xff);
    }
    const _0x2bc916 = document[_0x5ae2fa(0x2c9)](_0x5ae2fa(0x277));
    (_0x2bc916[_0x5ae2fa(0x4f2)] = _0x21083f),
      (_0x2bc916[_0x5ae2fa(0x258)] = _0x593c9e);
    const _0x1af691 = _0x2bc916[_0x5ae2fa(0x443)]("2d");
    _0x1af691["putImageData"](_0x455eec, 0x0, 0x0);
    const _0x4b904d = _0x2bc916[_0x5ae2fa(0x25b)](_0x5ae2fa(0x367)),
      _0x548f79 = {
        src: _0x203aca,
        numOfWorkers: 0x0,
        locate: !![],
        inputStream: { size: Math["max"](_0x21083f, _0x593c9e) },
        locator: {
          patchSize: _0x5ae2fa(0x51a),
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
            _0x5ae2fa(0x4eb),
            _0x5ae2fa(0x2f1),
            _0x5ae2fa(0x22f),
            _0x5ae2fa(0x226),
            _0x5ae2fa(0x249),
            _0x5ae2fa(0x34c),
            _0x5ae2fa(0x4d9),
            _0x5ae2fa(0x429),
            _0x5ae2fa(0x53e),
            "i2of5_reader",
            _0x5ae2fa(0x2d5),
          ],
          multiple: !![],
          debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
        },
      };
    console[_0x5ae2fa(0x366)](_0x5ae2fa(0x1ed));
    const _0x1594ff = (_0x9fc8b4, _0x45df6d, _0x20a39f) => {
      const _0x3125da = _0x5ae2fa;
      console["log"](_0x3125da(0x4bd) + _0x45df6d);
      const _0x492f78 = {
        src: _0x9fc8b4,
        numOfWorkers: 0x0,
        locate: !![],
        inputStream: { size: Math[_0x3125da(0x3d2)](_0x21083f, _0x593c9e) },
        locator: {
          patchSize:
            _0x45df6d === _0x3125da(0x3ae)
              ? _0x3125da(0x1bd)
              : _0x3125da(0x51a),
          halfSample: _0x45df6d === _0x3125da(0x218) ? !![] : ![],
          debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
        },
        decoder: {
          readers: [
            _0x3125da(0x4eb),
            _0x3125da(0x2f1),
            _0x3125da(0x22f),
            _0x3125da(0x226),
            _0x3125da(0x249),
            _0x3125da(0x34c),
            _0x3125da(0x4d9),
            _0x3125da(0x429),
            "codabar_reader",
            "i2of5_reader",
          ],
          multiple: !![],
          debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
        },
      };
      Quagga["decodeSingle"](_0x492f78, _0x20a39f);
    };
    let _0xec289e = [];
    _0x1594ff(_0x203aca, "principal", function (_0x3a65f4) {
      const _0x27f7ea = _0x5ae2fa;
      if (_0x3a65f4 && _0x3a65f4[_0x27f7ea(0x239)]) {
        let _0x402cf7 = _0x3a65f4["codeResult"][_0x27f7ea(0x496)]
          [_0x27f7ea(0x416)]()
          [_0x27f7ea(0x42c)](/\s+$/, "");
        _0xec289e[_0x27f7ea(0x2ab)](
          _0x402cf7 + "\x20(" + _0x3a65f4["codeResult"][_0x27f7ea(0x473)] + ")"
        ),
          console["log"](
            _0x27f7ea(0x2f6),
            _0x402cf7,
            "Formato:",
            _0x3a65f4[_0x27f7ea(0x239)][_0x27f7ea(0x473)]
          );
        if (validarCodigo(_0x402cf7, _0x3a65f4[_0x27f7ea(0x239)]["format"])) {
          (inputCodigo["value"] = _0x402cf7),
            form[_0x27f7ea(0x359)](),
            URL[_0x27f7ea(0x273)](_0x514ff7[_0x27f7ea(0x53c)]),
            (fileInput[_0x27f7ea(0x2da)] = "");
          return;
        }
      }
      console[_0x27f7ea(0x366)](_0x27f7ea(0x461)),
        _0x1594ff(_0x4b904d, "agresiva", function (_0x310dae) {
          const _0x2290fb = _0x27f7ea;
          if (_0x310dae && _0x310dae[_0x2290fb(0x239)]) {
            let _0x477e31 = _0x310dae[_0x2290fb(0x239)][_0x2290fb(0x496)]
              [_0x2290fb(0x416)]()
              [_0x2290fb(0x42c)](/\s+$/, "");
            _0xec289e[_0x2290fb(0x2ab)](
              _0x477e31 +
                "\x20(" +
                _0x310dae[_0x2290fb(0x239)][_0x2290fb(0x473)] +
                ")"
            ),
              console[_0x2290fb(0x366)](
                _0x2290fb(0x210),
                _0x477e31,
                "Formato:",
                _0x310dae[_0x2290fb(0x239)][_0x2290fb(0x473)]
              );
            if (
              validarCodigo(
                _0x477e31,
                _0x310dae[_0x2290fb(0x239)][_0x2290fb(0x473)]
              )
            ) {
              (inputCodigo[_0x2290fb(0x2da)] = _0x477e31),
                form["requestSubmit"](),
                URL[_0x2290fb(0x273)](_0x514ff7["src"]),
                (fileInput[_0x2290fb(0x2da)] = "");
              return;
            }
          }
          console[_0x2290fb(0x366)](_0x2290fb(0x52d)),
            intentarSegundaPasada(_0x514ff7, _0xec289e);
        });
    });
  }
  function validarCodigo(_0x24fad9, _0x31738c) {
    const _0x4e3b31 = _0x406c10;
    console[_0x4e3b31(0x366)](
      _0x4e3b31(0x38a) +
        _0x24fad9 +
        _0x4e3b31(0x2fb) +
        _0x31738c +
        _0x4e3b31(0x1b6) +
        _0x24fad9[_0x4e3b31(0x237)]
    );
    switch (_0x31738c) {
      case "ean_13":
        return (
          _0x24fad9[_0x4e3b31(0x237)] === 0xd &&
          /^\d{13}$/[_0x4e3b31(0x374)](_0x24fad9)
        );
      case "upc_a":
        return (
          _0x24fad9[_0x4e3b31(0x237)] === 0xc &&
          /^\d{12}$/[_0x4e3b31(0x374)](_0x24fad9)
        );
      case _0x4e3b31(0x47c):
        return (
          _0x24fad9[_0x4e3b31(0x237)] === 0x8 &&
          /^\d{8}$/[_0x4e3b31(0x374)](_0x24fad9)
        );
      case _0x4e3b31(0x44b):
        return (
          _0x24fad9[_0x4e3b31(0x237)] >= 0x6 &&
          _0x24fad9[_0x4e3b31(0x237)] <= 0x8 &&
          /^\d+$/[_0x4e3b31(0x374)](_0x24fad9)
        );
      case _0x4e3b31(0x352):
      case _0x4e3b31(0x411):
      case _0x4e3b31(0x382):
        return (
          _0x24fad9[_0x4e3b31(0x237)] >= 0x1 && _0x24fad9["length"] <= 0x32
        );
      case _0x4e3b31(0x36e):
        return (
          _0x24fad9[_0x4e3b31(0x237)] >= 0x3 &&
          /^[A-D][0-9\-$:\/.\+]+[A-D]$/[_0x4e3b31(0x374)](_0x24fad9)
        );
      case _0x4e3b31(0x27c):
        return (
          _0x24fad9[_0x4e3b31(0x237)] >= 0x2 &&
          _0x24fad9["length"] % 0x2 === 0x0 &&
          /^\d+$/["test"](_0x24fad9)
        );
      default:
        return (
          _0x24fad9[_0x4e3b31(0x237)] >= 0x1 &&
          _0x24fad9[_0x4e3b31(0x237)] <= 0x32
        );
    }
  }
  function intentarSegundaPasada(_0x4de5d9, _0x2d0f20 = []) {
    const _0x4b7c2c = _0x406c10;
    console[_0x4b7c2c(0x366)](
      "🔄\x20Tercera\x20tentativa:\x20imagen\x20original\x20sin\x20procesamiento..."
    );
    const _0x320609 = document[_0x4b7c2c(0x2c9)]("canvas"),
      _0x2541dc = _0x320609[_0x4b7c2c(0x443)]("2d");
    let { width: _0xdad37d, height: _0x5f30d6 } = _0x4de5d9;
    const _0x454375 = 0x640;
    if (_0xdad37d < _0x454375) {
      const _0x374c64 = _0x454375 / _0xdad37d;
      (_0xdad37d *= _0x374c64), (_0x5f30d6 *= _0x374c64);
    }
    (_0x320609[_0x4b7c2c(0x4f2)] = _0xdad37d),
      (_0x320609[_0x4b7c2c(0x258)] = _0x5f30d6),
      (_0x2541dc[_0x4b7c2c(0x40d)] = ![]),
      _0x2541dc[_0x4b7c2c(0x3c8)](_0x4de5d9, 0x0, 0x0, _0xdad37d, _0x5f30d6);
    const _0x45e2e1 = _0x2541dc[_0x4b7c2c(0x200)](
        0x0,
        0x0,
        _0xdad37d,
        _0x5f30d6
      ),
      _0x37deef = _0x45e2e1["data"];
    for (
      let _0x3af392 = 0x0;
      _0x3af392 < _0x37deef[_0x4b7c2c(0x237)];
      _0x3af392 += 0x4
    ) {
      const _0x4d3ccb = _0x37deef[_0x3af392],
        _0xca9b6a = _0x37deef[_0x3af392 + 0x1],
        _0x5a8290 = _0x37deef[_0x3af392 + 0x2],
        _0x291758 = 1.5,
        _0xe49704 = Math["round"](
          0.299 * _0x4d3ccb + 0.587 * _0xca9b6a + 0.114 * _0x5a8290
        ),
        _0x23947e = Math[_0x4b7c2c(0x38c)](
          0xff,
          Math["max"](0x0, (_0xe49704 - 0x80) * _0x291758 + 0x80)
        );
      (_0x37deef[_0x3af392] = _0x23947e),
        (_0x37deef[_0x3af392 + 0x1] = _0x23947e),
        (_0x37deef[_0x3af392 + 0x2] = _0x23947e);
    }
    _0x2541dc[_0x4b7c2c(0x536)](_0x45e2e1, 0x0, 0x0);
    const _0x4cfc3e = {
      src: _0x320609[_0x4b7c2c(0x25b)](_0x4b7c2c(0x367)),
      numOfWorkers: 0x0,
      locate: !![],
      inputStream: {
        size: Math[_0x4b7c2c(0x3d2)](_0xdad37d, _0x5f30d6),
        area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
      },
      locator: {
        patchSize: "x-large",
        halfSample: ![],
        debug: { showCanvas: ![], showPatches: ![], showFoundPatches: ![] },
      },
      decoder: {
        readers: [
          _0x4b7c2c(0x4eb),
          _0x4b7c2c(0x22f),
          _0x4b7c2c(0x249),
          _0x4b7c2c(0x34c),
          _0x4b7c2c(0x2f1),
          _0x4b7c2c(0x226),
          _0x4b7c2c(0x2c0),
          "codabar_reader",
        ],
        multiple: !![],
        debug: { drawBoundingBox: ![], showFrequency: ![], showPattern: ![] },
      },
    };
    console[_0x4b7c2c(0x366)](_0x4b7c2c(0x518)),
      Quagga["decodeSingle"](_0x4cfc3e, function (_0x285366) {
        const _0x30cd5e = _0x4b7c2c;
        if (_0x285366 && _0x285366[_0x30cd5e(0x239)]) {
          const _0x201345 = _0x285366[_0x30cd5e(0x239)]["code"]
            [_0x30cd5e(0x416)]()
            ["replace"](/\s+$/, "");
          _0x2d0f20[_0x30cd5e(0x2ab)](
            _0x201345 +
              "\x20(" +
              _0x285366[_0x30cd5e(0x239)][_0x30cd5e(0x473)] +
              ")"
          ),
            console["log"](
              _0x30cd5e(0x466),
              _0x201345,
              _0x30cd5e(0x1c3),
              _0x285366[_0x30cd5e(0x239)][_0x30cd5e(0x473)]
            );
          if (validarCodigo(_0x201345, _0x285366[_0x30cd5e(0x239)]["format"])) {
            (inputCodigo[_0x30cd5e(0x2da)] = _0x201345),
              form[_0x30cd5e(0x359)]();
            return;
          }
        }
        console["log"](_0x30cd5e(0x4e8));
        let _0x46d747 = "";
        _0x2d0f20["length"] > 0x0 &&
          (_0x46d747 = _0x30cd5e(0x320) + _0x2d0f20[_0x30cd5e(0x261)](",\x20"));
        let _0x365fed = "";
        if (GOOGLE_VISION_CONFIG[_0x30cd5e(0x49d)]) {
          const _0x4c6105 = visionUsageTracker[_0x30cd5e(0x33b)]();
          (_0x365fed =
            _0x30cd5e(0x1b8) +
            _0x4c6105["monthlyUsed"] +
            "/" +
            _0x4c6105[_0x30cd5e(0x35c)] +
            _0x30cd5e(0x3bf) +
            _0x4c6105["dailyUsed"] +
            "/" +
            _0x4c6105[_0x30cd5e(0x4c7)] +
            _0x30cd5e(0x467)),
            verificarBackend()
              [_0x30cd5e(0x31d)]((_0x28ecee) => {
                const _0x1dc0c2 = _0x30cd5e;
                if (document["querySelector"](_0x1dc0c2(0x20d))) {
                  const _0x57232f = document[_0x1dc0c2(0x2e1)](".alert-danger");
                  _0x57232f &&
                    (_0x57232f[_0x1dc0c2(0x181)] = _0x57232f["innerHTML"][
                      "replace"
                    ](
                      _0x1dc0c2(0x24b),
                      _0x1dc0c2(0x413) + _0x28ecee[_0x1dc0c2(0x4f9)]
                    ));
                }
              })
              [_0x30cd5e(0x296)](() => {});
        }
        (resultadoDiv[_0x30cd5e(0x181)] =
          _0x30cd5e(0x487) + _0x46d747 + _0x365fed + _0x30cd5e(0x4c9)),
          renderHistorial();
      });
  }
  async function mostrarConfiguracion() {
    const _0x4567c1 = _0x406c10,
      _0x762775 = await verificarBackend();
    let _0x9063e2 = null;
    if (CONFIG_ENDPOINTS[_0x4567c1(0x4d4)])
      try {
        const _0x13ee2e = await fetch(
          CONFIG_ENDPOINTS[_0x4567c1(0x528)] + _0x4567c1(0x1ff)
        );
        if (_0x13ee2e["ok"]) {
          const _0x40000b = await _0x13ee2e[_0x4567c1(0x412)]();
          _0x9063e2 = _0x40000b["estadisticas"];
        }
      } catch (_0x2c6cab) {
        console["log"](_0x4567c1(0x2be));
      }
    let _0x311a81 = "";
    _0x9063e2 &&
      (_0x311a81 =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>🏷️\x20Sistema\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Productos:</strong>\x20" +
        _0x9063e2[_0x4567c1(0x29b)] +
        _0x4567c1(0x3ed) +
        _0x9063e2[_0x4567c1(0x39e)] +
        "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Con\x20códigos\x20adicionales:</strong>\x20" +
        _0x9063e2[_0x4567c1(0x4aa)] +
        _0x4567c1(0x2cd) +
        new Date(_0x9063e2[_0x4567c1(0x47a)])[_0x4567c1(0x519)]() +
        "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      Swal["fire"]({
        title: _0x4567c1(0x279),
        html:
          _0x4567c1(0x2bd) +
          (GOOGLE_VISION_CONFIG[_0x4567c1(0x49d)] ? _0x4567c1(0x2f4) : "") +
          _0x4567c1(0x29f) +
          (_0x762775["activo"] ? _0x4567c1(0x45a) : _0x4567c1(0x1a4)) +
          _0x4567c1(0x180) +
          _0x762775[_0x4567c1(0x4f9)] +
          _0x4567c1(0x420) +
          _0x311a81 +
          _0x4567c1(0x194),
        width: 0x258,
        showCancelButton: !![],
        confirmButtonText: "💾\x20Guardar",
        cancelButtonText: _0x4567c1(0x4f5),
        confirmButtonColor: _0x4567c1(0x4af),
        cancelButtonColor: "#6c757d",
        preConfirm: () => {
          const _0x24050d = _0x4567c1,
            _0x4e959e = document[_0x24050d(0x4ba)](_0x24050d(0x19d))[
              _0x24050d(0x2f4)
            ];
          return { enabled: _0x4e959e };
        },
      })["then"]((_0x1f44ac) => {
        const _0x1b99dc = _0x4567c1;
        if (_0x1f44ac[_0x1b99dc(0x419)]) {
          const { enabled: _0x5dbf32 } = _0x1f44ac["value"];
          (GOOGLE_VISION_CONFIG[_0x1b99dc(0x49d)] = _0x5dbf32),
            localStorage[_0x1b99dc(0x457)](
              _0x1b99dc(0x19a),
              JSON["stringify"]({ enabled: _0x5dbf32 })
            );
          const _0x45b2d8 = _0x5dbf32
            ? "✅\x20Detección\x20avanzada\x20activada"
            : _0x1b99dc(0x2c3);
          Swal[_0x1b99dc(0x1f0)]({
            title: _0x1b99dc(0x421),
            text: _0x45b2d8,
            icon: "success",
            timer: 0x7d0,
            showConfirmButton: ![],
          });
        }
      });
  }
  function cargarConfiguracionGuardada() {
    const _0x5f4b25 = _0x406c10,
      _0x8545af = localStorage[_0x5f4b25(0x430)]("googleVisionConfig");
    if (_0x8545af)
      try {
        const _0x47468e = JSON[_0x5f4b25(0x455)](_0x8545af);
        (GOOGLE_VISION_CONFIG["enabled"] = _0x47468e["enabled"] || ![]),
          GOOGLE_VISION_CONFIG[_0x5f4b25(0x49d)] &&
            console["log"](_0x5f4b25(0x342));
      } catch (_0x5ecc24) {
        console[_0x5f4b25(0x366)](_0x5f4b25(0x385), _0x5ecc24);
      }
  }
  _0x406c10(0x439) in navigator &&
    window[_0x406c10(0x50d)](_0x406c10(0x335), () => {
      const _0x1c117b = _0x406c10;
      navigator[_0x1c117b(0x439)]
        [_0x1c117b(0x2df)](_0x1c117b(0x4fa))
        [_0x1c117b(0x31d)]((_0x23d35b) => {
          const _0x15bfe5 = _0x1c117b;
          console[_0x15bfe5(0x366)](
            _0x15bfe5(0x396),
            _0x23d35b[_0x15bfe5(0x474)]
          ),
            _0x23d35b[_0x15bfe5(0x50d)]("updatefound", () => {
              const _0x22ae18 = _0x15bfe5;
              console[_0x22ae18(0x366)](_0x22ae18(0x4fe));
              const _0x61aa5d = _0x23d35b[_0x22ae18(0x282)];
              _0x61aa5d["addEventListener"](_0x22ae18(0x44a), () => {
                const _0x2b2de5 = _0x22ae18;
                _0x61aa5d[_0x2b2de5(0x505)] === _0x2b2de5(0x263) &&
                  navigator[_0x2b2de5(0x439)][_0x2b2de5(0x51c)] &&
                  (console["log"](_0x2b2de5(0x202)),
                  confirm(_0x2b2de5(0x334)) &&
                    (_0x61aa5d[_0x2b2de5(0x3d7)]({ type: _0x2b2de5(0x529) }),
                    window[_0x2b2de5(0x28c)][_0x2b2de5(0x347)]()));
              });
            });
        })
        [_0x1c117b(0x296)]((_0x43bac9) =>
          console[_0x1c117b(0x27b)](_0x1c117b(0x2f5), _0x43bac9)
        ),
        navigator["serviceWorker"][_0x1c117b(0x50d)](_0x1c117b(0x40b), () => {
          const _0x93b457 = _0x1c117b;
          console[_0x93b457(0x366)](_0x93b457(0x30b)),
            window["location"]["reload"]();
        });
    });
  window[_0x406c10(0x50d)](_0x406c10(0x432), (_0x4d806d) => {
    const _0x9170fd = _0x406c10;
    _0x4d806d[_0x9170fd(0x337)](),
      (deferredPrompt = _0x4d806d),
      installBtn &&
        installBtn[_0x9170fd(0x184)][_0x9170fd(0x478)](_0x9170fd(0x21e));
  }),
    installBtn[_0x406c10(0x50d)]("click", (_0xe512e8) => {
      const _0x4ebb25 = _0x406c10;
      deferredPrompt &&
        (deferredPrompt["prompt"](),
        deferredPrompt["userChoice"][_0x4ebb25(0x31d)]((_0x11407b) => {
          const _0x2921a6 = _0x4ebb25;
          _0x11407b["outcome"] === _0x2921a6(0x4bf)
            ? console[_0x2921a6(0x366)](_0x2921a6(0x25a))
            : console[_0x2921a6(0x366)]("❌\x20Instalación\x20rechazada"),
            (deferredPrompt = null),
            installBtn["classList"][_0x2921a6(0x3e3)](_0x2921a6(0x21e));
        }));
    });
  _0x406c10(0x439) in navigator &&
    (navigator[_0x406c10(0x439)]
      [_0x406c10(0x3a8)]()
      [_0x406c10(0x31d)](function (_0x110271) {
        for (let _0x209c4f of _0x110271) {
          _0x209c4f["update"]();
        }
      }),
    navigator[_0x406c10(0x439)][_0x406c10(0x50d)](
      _0x406c10(0x40b),
      function () {
        const _0x4ba1f2 = _0x406c10;
        window[_0x4ba1f2(0x28c)]["reload"]();
      }
    ));
  const style = document[_0x406c10(0x2c9)](_0x406c10(0x2ae));
  (style[_0x406c10(0x181)] = _0x406c10(0x4a9)),
    document[_0x406c10(0x418)]["appendChild"](style);
  async function verPromociones() {
    const _0x7786d8 = _0x406c10;
    try {
      console[_0x7786d8(0x366)]("🎯\x20Mostrando\x20promociones\x20locales..."),
        (document[_0x7786d8(0x4ba)]("resultado")["innerHTML"] =
          _0x7786d8(0x433));
      const [_0x3afda9, _0x4a069b] = await Promise[_0x7786d8(0x2fa)]([
        getAllPromociones(),
        getAllProductos(),
      ]);
      if (!Array["isArray"](_0x3afda9) || _0x3afda9[_0x7786d8(0x237)] === 0x0) {
        document[_0x7786d8(0x4ba)]("resultado")[_0x7786d8(0x181)] =
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20activas\x20en\x20este\x20momento.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
        return;
      }
      let _0x139a73 = _0x7786d8(0x2dd);
      _0x3afda9[_0x7786d8(0x3b6)]((_0x207d1b, _0x11c39b) => {
        const _0x7f3024 = _0x7786d8;
        let _0x2b2902 = [];
        if (
          _0x207d1b[_0x7f3024(0x27d)] &&
          Array[_0x7f3024(0x1aa)](_0x207d1b[_0x7f3024(0x27d)])
        )
          _0x2b2902 = _0x207d1b[_0x7f3024(0x27d)];
        else
          _0x207d1b[_0x7f3024(0x2d6)] &&
            _0x207d1b["pro_grupoProductos_primaria"][_0x7f3024(0x377)] &&
            (Array[_0x7f3024(0x1aa)](
              _0x207d1b[_0x7f3024(0x2d6)][_0x7f3024(0x377)]
            )
              ? (_0x2b2902 = _0x207d1b[_0x7f3024(0x2d6)]["pr_sku"])
              : (_0x2b2902 = _0x207d1b[_0x7f3024(0x2d6)]["pr_sku"]
                  ["split"]("\x20")
                  ["filter"]((_0x48a70c) => _0x48a70c[_0x7f3024(0x416)]())));
        const _0x4fa452 = _0x2b2902[_0x7f3024(0x485)]((_0x4dccc3) => {
            const _0x56466c = _0x7f3024;
            return _0x4a069b[_0x56466c(0x38f)](
              (_0x233dd4) => _0x233dd4[_0x56466c(0x377)] === _0x4dccc3
            );
          })[_0x7f3024(0x3e4)]((_0x4b4a1c) => _0x4b4a1c !== undefined),
          _0x2cf405 =
            _0x207d1b[_0x7f3024(0x26b)] ||
            _0x207d1b[_0x7f3024(0x1ab)] ||
            _0x7f3024(0x1e8) + (_0x11c39b + 0x1),
          _0x6d26ab =
            _0x207d1b[_0x7f3024(0x344)] ||
            _0x207d1b[_0x7f3024(0x2d7)] ||
            _0x7f3024(0x1a2),
          _0x178940 =
            _0x207d1b[_0x7f3024(0x39f)] || _0x207d1b[_0x7f3024(0x4f9)] || "",
          _0x4cd438 = _0x207d1b[_0x7f3024(0x32b)] || "",
          _0x18c022 = Number(_0x4cd438) || 0x1;
        let _0x1cdff8 = 0x0;
        const _0x110058 = (_0x178940 + "\x20" + _0x2cf405)[_0x7f3024(0x4f7)](),
          _0x5b5a25 = _0x110058[_0x7f3024(0x333)](/(\d+)\s*x\s*(\d+)/);
        if (_0x5b5a25) _0x1cdff8 = Number(_0x5b5a25[0x2]);
        else {
          const _0x1bd2ff = Number(_0x207d1b[_0x7f3024(0x1ad)]) || 0x0;
          _0x1cdff8 = _0x1bd2ff * _0x18c022;
        }
        let _0x42fb16 = 0x0,
          _0x1d24f1 = 0x0;
        if (_0x4fa452[_0x7f3024(0x237)] > 0x0 && _0x4cd438 && _0x1cdff8 > 0x0) {
          const _0x4ffb27 = _0x4fa452["map"]((_0x45b391) => {
              const _0x4ac4f8 = _0x7f3024;
              let _0xa9894e =
                Number(_0x45b391["pr_precio"]) ||
                Number(_0x45b391["L1"]) ||
                0x0;
              return Math[_0x4ac4f8(0x2ee)](_0xa9894e * 1.16 * 0x64) / 0x64;
            }),
            _0x18ca6c =
              _0x4ffb27["reduce"](
                (_0x288cfc, _0x285fa9) => _0x288cfc + _0x285fa9,
                0x0
              ) / _0x4ffb27[_0x7f3024(0x237)];
          (_0x42fb16 =
            Math[_0x7f3024(0x2ee)](_0x18ca6c * _0x18c022 * 0x64) / 0x64),
            (_0x1d24f1 =
              Math[_0x7f3024(0x2ee)]((_0x42fb16 - _0x1cdff8) * 0x64) / 0x64);
        }
        let _0x49fd75 = "";
        if (_0x4fa452[_0x7f3024(0x237)] > 0x0) {
          const _0x419d5b = _0x4fa452["slice"](0x0, 0x4)
            [_0x7f3024(0x485)]((_0x5dc61e) => {
              const _0x9a08f = _0x7f3024;
              let _0x31c66d = "";
              if (
                _0x5dc61e[_0x9a08f(0x4a5)] &&
                _0x5dc61e[_0x9a08f(0x4a5)][_0x9a08f(0x416)]() !== ""
              ) {
                if (
                  _0x5dc61e[_0x9a08f(0x4a5)][_0x9a08f(0x4bc)](_0x9a08f(0x1c7))
                )
                  _0x31c66d = _0x5dc61e[_0x9a08f(0x4a5)];
                else {
                  let _0x4fff50 = _0x5dc61e["pr_imagen"][_0x9a08f(0x4bc)]("/")
                    ? _0x5dc61e[_0x9a08f(0x4a5)]
                    : "/" + _0x5dc61e[_0x9a08f(0x4a5)];
                  _0x31c66d = _0x9a08f(0x192) + _0x4fff50;
                }
              }
              return _0x31c66d
                ? _0x9a08f(0x233) +
                    _0x31c66d +
                    _0x9a08f(0x2dc) +
                    _0x5dc61e["pr_name"] +
                    _0x9a08f(0x3fe) +
                    _0x5dc61e["pr_name"] +
                    _0x9a08f(0x257) +
                    _0x5dc61e["pr_sku"] +
                    _0x9a08f(0x350) +
                    _0x5dc61e[_0x9a08f(0x377)] +
                    _0x9a08f(0x27a)
                : _0x9a08f(0x1f2) +
                    _0x5dc61e[_0x9a08f(0x264)] +
                    _0x9a08f(0x257) +
                    _0x5dc61e[_0x9a08f(0x377)] +
                    _0x9a08f(0x350) +
                    _0x5dc61e["pr_sku"] +
                    _0x9a08f(0x27a);
            })
            [_0x7f3024(0x261)]("");
          _0x49fd75 =
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📦\x20Productos\x20en\x20promoción:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            _0x419d5b +
            _0x7f3024(0x1e6) +
            (_0x4fa452[_0x7f3024(0x237)] > 0x4
              ? _0x7f3024(0x311) +
                (_0x4fa452["length"] - 0x4) +
                _0x7f3024(0x379) +
                (_0x4fa452[_0x7f3024(0x237)] - 0x4 > 0x1 ? "s" : "") +
                _0x7f3024(0x35a)
              : "") +
            _0x7f3024(0x322);
        }
        _0x139a73 +=
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-warning\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔥\x20" +
          _0x2cf405 +
          _0x7f3024(0x26f) +
          _0x6d26ab[_0x7f3024(0x42c)](
            "CANTIDAD_X_PRECIO_FIJO",
            _0x7f3024(0x295)
          ) +
          _0x7f3024(0x2f2) +
          (_0x178940 && _0x178940 !== _0x2cf405
            ? _0x7f3024(0x354) + _0x178940 + _0x7f3024(0x1ee)
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x1cdff8 > 0x0
            ? _0x7f3024(0x391) +
              _0x18c022 +
              "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Unidades</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x20d-block\x22\x20style=\x22font-size:\x201.3rem;\x22>$" +
              _0x1cdff8["toLocaleString"]("es-CL") +
              _0x7f3024(0x1b9) +
              (_0x42fb16 > 0x0
                ? _0x7f3024(0x308) +
                  _0x42fb16["toLocaleString"]("es-CL") +
                  _0x7f3024(0x212)
                : _0x7f3024(0x3dd)) +
              _0x7f3024(0x405) +
              (_0x1d24f1 > 0x0
                ? _0x7f3024(0x3c3) +
                  _0x1d24f1[_0x7f3024(0x519)](_0x7f3024(0x477)) +
                  _0x7f3024(0x43e) +
                  _0x18c022 +
                  "\x20unidades\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                : "") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              (_0x4cd438
                ? _0x7f3024(0x250) +
                  _0x4cd438 +
                  "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Cantidad</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                : "") +
              _0x7f3024(0x37b) +
              (precioPromo
                ? _0x7f3024(0x326) + precioPromo + _0x7f3024(0x50a)
                : "") +
              _0x7f3024(0x36c)) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          _0x49fd75 +
          _0x7f3024(0x4d7) +
          (_0x4fa452[_0x7f3024(0x237)] > 0x0
            ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x20mb-2\x22>📋\x20Descripción\x20completa\x20de\x20productos:</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-3\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              _0x4fa452[_0x7f3024(0x485)](
                (_0x5924c1, _0x58e824) =>
                  _0x7f3024(0x4b2) +
                  (_0x58e824 < _0x4fa452["length"] - 0x1
                    ? _0x7f3024(0x4c5)
                    : "") +
                  _0x7f3024(0x4b9) +
                  _0x5924c1[_0x7f3024(0x264)] +
                  _0x7f3024(0x494) +
                  _0x5924c1[_0x7f3024(0x377)] +
                  _0x7f3024(0x351) +
                  (_0x5924c1[_0x7f3024(0x3f9)]
                    ? _0x7f3024(0x38b) + _0x5924c1["pr_gtin"] + _0x7f3024(0x1b5)
                    : "") +
                  _0x7f3024(0x1a7) +
                  (() => {
                    const _0x4d1cd1 = _0x7f3024;
                    let _0x246c20 =
                        Number(_0x5924c1[_0x4d1cd1(0x46a)]) ||
                        Number(_0x5924c1["L1"]) ||
                        0x0,
                      _0x555e50 =
                        Math[_0x4d1cd1(0x2ee)](_0x246c20 * 1.16 * 0x64) / 0x64;
                    return _0x555e50 > 0x0
                      ? _0x4d1cd1(0x39d) +
                          _0x555e50[_0x4d1cd1(0x20e)](0x2) +
                          "</small>"
                      : "";
                  })() +
                  _0x7f3024(0x513)
              )[_0x7f3024(0x261)]("") +
              _0x7f3024(0x22b)
            : "") +
          _0x7f3024(0x4d7) +
          (_0x2b2902[_0x7f3024(0x237)] > _0x4fa452[_0x7f3024(0x237)]
            ? _0x7f3024(0x332) +
              _0x2b2902[_0x7f3024(0x237)] +
              _0x7f3024(0x225) +
              _0x4fa452["length"] +
              _0x7f3024(0x52b) +
              _0x2b2902[_0x7f3024(0x278)](0x0, 0x6)
                [_0x7f3024(0x485)](
                  (_0x50114c) => _0x7f3024(0x4b7) + _0x50114c + _0x7f3024(0x36f)
                )
                [_0x7f3024(0x261)]("") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              (_0x2b2902["length"] > 0x6
                ? "<span\x20class=\x22badge\x20bg-secondary\x22\x20style=\x22font-size:\x200.7rem;\x22>+" +
                  (_0x2b2902[_0x7f3024(0x237)] - 0x6) +
                  "\x20más</span>"
                : "") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          _0x7f3024(0x4d7) +
          (_0x207d1b[_0x7f3024(0x368)] && _0x207d1b[_0x7f3024(0x3bb)]
            ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20pt-2\x20border-top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>📅\x20Vigencia:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              _0x207d1b[_0x7f3024(0x368)] +
              "\x20al\x20" +
              _0x207d1b[_0x7f3024(0x3bb)] +
              _0x7f3024(0x402)
            : "") +
          _0x7f3024(0x28a);
      }),
        (_0x139a73 += _0x7786d8(0x483)),
        (_0x139a73 += _0x7786d8(0x35d)),
        (document[_0x7786d8(0x4ba)](_0x7786d8(0x1d9))[_0x7786d8(0x181)] =
          _0x139a73);
      const _0x362d65 = document["querySelectorAll"](_0x7786d8(0x2e5));
      _0x362d65[_0x7786d8(0x3b6)]((_0x2c356a) => {
        const _0x272de8 = _0x7786d8;
        _0x2c356a["addEventListener"](_0x272de8(0x4a8), function (_0x125e23) {
          const _0x49c57a = _0x272de8;
          _0x125e23[_0x49c57a(0x337)]();
          const _0x209472 = _0x2c356a["getAttribute"](_0x49c57a(0x4a2));
          navigator[_0x49c57a(0x4f3)] &&
            navigator[_0x49c57a(0x4f3)]
              ["writeText"](_0x209472)
              [_0x49c57a(0x31d)](() => {
                const _0x5d24bf = _0x49c57a,
                  _0x4d3e03 = _0x2c356a[_0x5d24bf(0x181)];
                (_0x2c356a[_0x5d24bf(0x181)] = "✅"),
                  _0x2c356a["classList"][_0x5d24bf(0x478)](_0x5d24bf(0x4ea)),
                  _0x2c356a[_0x5d24bf(0x184)]["add"](_0x5d24bf(0x422)),
                  setTimeout(() => {
                    const _0x1dc76e = _0x5d24bf;
                    (_0x2c356a[_0x1dc76e(0x181)] = _0x4d3e03),
                      _0x2c356a[_0x1dc76e(0x184)][_0x1dc76e(0x478)](
                        "btn-success"
                      ),
                      _0x2c356a["classList"][_0x1dc76e(0x3e3)](
                        _0x1dc76e(0x4ea)
                      );
                  }, 0x4b0);
              })
              [_0x49c57a(0x296)]((_0x435ca8) => {
                const _0x33666b = _0x49c57a;
                console["error"](_0x33666b(0x2a2), _0x435ca8);
                const _0x43f29e = _0x2c356a[_0x33666b(0x181)];
                (_0x2c356a[_0x33666b(0x181)] = "❌"),
                  setTimeout(() => {
                    const _0x4826e2 = _0x33666b;
                    _0x2c356a[_0x4826e2(0x181)] = _0x43f29e;
                  }, 0x4b0);
              });
        });
      });
    } catch (_0x2e85f5) {
      console[_0x7786d8(0x27b)](_0x7786d8(0x35f), _0x2e85f5),
        (document[_0x7786d8(0x4ba)](_0x7786d8(0x1d9))["innerHTML"] =
          "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudieron\x20cargar\x20las\x20promociones:\x20" +
          _0x2e85f5[_0x7786d8(0x29c)] +
          "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22verPromociones()\x22\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Reintentar\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
    }
  }
  cargarConfiguracionGuardada(), renderHistorial();
  const mobileModalStyles = document["createElement"](_0x406c10(0x2ae));
  (mobileModalStyles[_0x406c10(0x1b2)] =
    "\x0a\x20\x20/*\x20Estilos\x20específicos\x20para\x20modal\x20en\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20/*\x20Evitar\x20oscurecimiento\x20de\x20fondo\x20en\x20móviles\x20*/\x0a\x20\x20\x20\x20.modal-backdrop,\x0a\x20\x20\x20\x20.modal-backdrop.show,\x0a\x20\x20\x20\x20.modal-backdrop.fade\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20stretch\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-dialog,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-content,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-content\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20\x20\x20border:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-body,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20flex:\x201\x20!important;\x0a\x20\x20\x20\x20\x20\x20overflow-y:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-height:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding:\x201rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-header,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-header\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal.show\x20.modal-footer,\x0a\x20\x20\x20\x20#resultadosBusquedaModal.show\x20.modal-footer\x20{\x0a\x20\x20\x20\x20\x20\x20flex-shrink:\x200\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20/*\x20Asegurar\x20que\x20las\x20tarjetas\x20no\x20causen\x20overflow\x20horizontal\x20*/\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.row\x20{\x0a\x20\x20\x20\x20\x20\x20margin-left:\x20-8px\x20!important;\x0a\x20\x20\x20\x20\x20\x20margin-right:\x20-8px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20[class*=\x22col-\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20padding-left:\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20padding-right:\x208px\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Mejorar\x20scroll\x20en\x20todos\x20los\x20dispositivos\x20móviles\x20*/\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20#promocionesGeneralesModal\x20.modal-body\x20{\x0a\x20\x20\x20\x20\x20\x20-webkit-overflow-scrolling:\x20touch\x20!important;\x0a\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0,\x200,\x200)\x20!important;\x20/*\x20Forzar\x20aceleración\x20por\x20hardware\x20*/\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a"),
    document[_0x406c10(0x418)][_0x406c10(0x40f)](mobileModalStyles);
  let resultadosBusquedaState = {
    items: [],
    page: 0x1,
    pageSize: 0xa,
    query: "",
    view: "list",
  };
  function isMobileDevice() {
    const _0xadd274 = _0x406c10;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
      _0xadd274(0x374)
    ](navigator["userAgent"]);
  }
  function hideMobileKeyboard() {
    const _0x405d96 = _0x406c10;
    try {
      const _0x1fc023 = document["getElementById"](_0x405d96(0x3d6));
      if (!_0x1fc023) return;
      _0x1fc023["blur"]();
      document[_0x405d96(0x387)] &&
        typeof document["activeElement"][_0x405d96(0x29d)] === "function" &&
        document[_0x405d96(0x387)][_0x405d96(0x29d)]();
      const _0x21bee2 = /iPad|iPhone|iPod/[_0x405d96(0x374)](
        navigator["userAgent"]
      );
      if (_0x21bee2) {
        const _0x552610 = _0x1fc023["hasAttribute"](_0x405d96(0x520));
        _0x1fc023["setAttribute"]("readonly", "true");
        const _0xa43619 = document[_0x405d96(0x2c9)](_0x405d96(0x2e6));
        (_0xa43619[_0x405d96(0x213)] = _0x405d96(0x362)),
          (_0xa43619["style"][_0x405d96(0x27f)] = _0x405d96(0x408)),
          (_0xa43619[_0x405d96(0x2ae)]["opacity"] = "0"),
          (_0xa43619[_0x405d96(0x2ae)][_0x405d96(0x258)] = "0"),
          (_0xa43619[_0x405d96(0x2ae)][_0x405d96(0x43d)] = "none"),
          document[_0x405d96(0x1c9)][_0x405d96(0x40f)](_0xa43619),
          _0xa43619[_0x405d96(0x291)](),
          setTimeout(() => {
            const _0x1f32dc = _0x405d96;
            try {
              _0xa43619["blur"]();
            } catch (_0x4817e6) {}
            try {
              document[_0x1f32dc(0x1c9)][_0x1f32dc(0x36a)](_0xa43619);
            } catch (_0x2a57e8) {}
            try {
              _0x1fc023["blur"]();
            } catch (_0x279a8a) {}
            if (!_0x552610) _0x1fc023[_0x1f32dc(0x1dc)](_0x1f32dc(0x520));
          }, 0x32);
      }
    } catch (_0x466955) {}
  }
  function mostrarModalResultadosBusqueda(_0x5ca7b8, _0x522755) {
    const _0x5a847c = _0x406c10;
    if (isMobileDevice()) hideMobileKeyboard();
    (resultadosBusquedaState[_0x5a847c(0x438)] = _0x5ca7b8),
      (resultadosBusquedaState[_0x5a847c(0x4b4)] = 0x1),
      (resultadosBusquedaState[_0x5a847c(0x442)] = 0xa),
      (resultadosBusquedaState[_0x5a847c(0x2b4)] = _0x522755);
    try {
      const _0x200e6d = localStorage["getItem"](_0x5a847c(0x3ac));
      (_0x200e6d === "grid" || _0x200e6d === _0x5a847c(0x4e7)) &&
        (resultadosBusquedaState["view"] = _0x200e6d);
    } catch (_0x1cbd21) {}
    const _0x2a22a9 = document[_0x5a847c(0x4ba)](_0x5a847c(0x3f7));
    if (!_0x2a22a9) return;
    try {
      const _0x54a234 = document[_0x5a847c(0x4ba)](_0x5a847c(0x1d9));
      _0x54a234 &&
        /Buscando producto/i["test"](_0x54a234[_0x5a847c(0x1b2)] || "") &&
        (_0x54a234[_0x5a847c(0x181)] = "");
    } catch (_0x313a14) {}
    try {
      const _0x10febf = document[_0x5a847c(0x4ba)](_0x5a847c(0x3d6));
      _0x10febf &&
        ((_0x10febf["value"] = ""),
        (_0x10febf[_0x5a847c(0x283)] =
          "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto"));
      const _0x47f923 = document[_0x5a847c(0x4ba)](_0x5a847c(0x31a));
      _0x47f923 &&
        ((_0x47f923[_0x5a847c(0x181)] = ""),
        (_0x47f923["style"]["display"] = "none"));
    } catch (_0x5172b5) {}
    renderResultadosBusqueda();
    const _0x259df5 = document["getElementById"](_0x5a847c(0x33d)),
      _0x8d0961 =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
          _0x5a847c(0x374)
        ](navigator[_0x5a847c(0x3aa)]);
    if (_0x8d0961)
      (_0x259df5["style"]["position"] = "fixed"),
        (_0x259df5["style"]["top"] = "0"),
        (_0x259df5[_0x5a847c(0x2ae)][_0x5a847c(0x1d1)] = "0"),
        (_0x259df5[_0x5a847c(0x2ae)][_0x5a847c(0x4f2)] = _0x5a847c(0x321)),
        (_0x259df5[_0x5a847c(0x2ae)][_0x5a847c(0x258)] = "100%"),
        (_0x259df5[_0x5a847c(0x2ae)][_0x5a847c(0x1eb)] = _0x5a847c(0x1bf)),
        (_0x259df5[_0x5a847c(0x2ae)][_0x5a847c(0x230)] = "transparent"),
        (_0x259df5[_0x5a847c(0x2ae)][_0x5a847c(0x428)] = "block"),
        _0x259df5[_0x5a847c(0x184)]["add"](_0x5a847c(0x521));
    else {
      const _0x5931aa = new bootstrap[_0x5a847c(0x463)](_0x259df5, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x5931aa[_0x5a847c(0x521)]();
    }
  }
  function cerrarResultadosModal() {
    const _0x2f4e93 = _0x406c10,
      _0x5d00db = document[_0x2f4e93(0x4ba)](_0x2f4e93(0x33d));
    if (!_0x5d00db) return;
    _0x5d00db[_0x2f4e93(0x184)]["remove"](_0x2f4e93(0x521)),
      (_0x5d00db[_0x2f4e93(0x2ae)]["display"] = _0x2f4e93(0x452));
    try {
      const _0x175d26 = bootstrap["Modal"]["getInstance"](_0x5d00db);
      if (_0x175d26) _0x175d26[_0x2f4e93(0x4b5)]();
    } catch (_0x41b4bc) {}
    document[_0x2f4e93(0x3bc)](_0x2f4e93(0x2e2))[_0x2f4e93(0x3b6)](
      (_0xeaf6cb) => _0xeaf6cb[_0x2f4e93(0x478)]()
    );
    try {
      const _0x5c4a98 = document[_0x2f4e93(0x4ba)](_0x2f4e93(0x1d9));
      _0x5c4a98 &&
        /Buscando producto/i[_0x2f4e93(0x374)](
          _0x5c4a98[_0x2f4e93(0x1b2)] || ""
        ) &&
        (_0x5c4a98[_0x2f4e93(0x181)] = "");
    } catch (_0x50c378) {}
    try {
      const _0x7895 = document[_0x2f4e93(0x4ba)](_0x2f4e93(0x3d6));
      _0x7895 &&
        ((_0x7895[_0x2f4e93(0x283)] = _0x2f4e93(0x480)),
        bringInputIntoView({ focusOnDesktop: !![] }));
    } catch (_0xc28c33) {}
  }
  function bringInputIntoView(_0xab9bc8 = {}) {
    const _0x177f9f = _0x406c10,
      { focusOnDesktop: focusOnDesktop = !![] } = _0xab9bc8,
      _0x491118 = document["getElementById"](_0x177f9f(0x3d6));
    if (!_0x491118) return;
    try {
      _0x491118[_0x177f9f(0x4c1)]({
        behavior: _0x177f9f(0x41e),
        block: "center",
        inline: _0x177f9f(0x286),
      });
    } catch (_0x56cad4) {}
    const _0x2063fb =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
        _0x177f9f(0x374)
      ](navigator[_0x177f9f(0x3aa)]);
    if (!_0x2063fb && focusOnDesktop)
      try {
        _0x491118["focus"]({ preventScroll: !![] });
      } catch (_0x4960a9) {
        try {
          _0x491118["focus"]();
        } catch (_0x496d9b) {}
      }
  }
  async function renderResultadosBusqueda() {
    const _0x48d52e = _0x406c10,
      _0x333f5e = document["getElementById"]("resultados-busqueda-body");
    if (!_0x333f5e) return;
    const {
        items: _0x2c425f,
        page: _0x402093,
        pageSize: _0x365c7f,
        query: _0xc6a2dd,
        view: _0x39b513,
      } = resultadosBusquedaState,
      _0x299a2d = _0x2c425f["length"],
      _0x4eb87e = Math[_0x48d52e(0x3d2)](
        0x1,
        Math[_0x48d52e(0x499)](_0x299a2d / _0x365c7f)
      ),
      _0x5303d6 = Math[_0x48d52e(0x38c)](_0x402093, _0x4eb87e),
      _0xc5735c = (_0x5303d6 - 0x1) * _0x365c7f,
      _0x41669e = Math[_0x48d52e(0x38c)](_0xc5735c + _0x365c7f, _0x299a2d),
      _0x553f67 = _0x2c425f[_0x48d52e(0x278)](_0xc5735c, _0x41669e);
    let _0x276f8b = [];
    try {
      _0x276f8b = await Promise[_0x48d52e(0x2fa)](
        _0x553f67[_0x48d52e(0x485)]((_0x1d4944) =>
          tienePromociones(_0x1d4944)
            ["then"](Boolean)
            [_0x48d52e(0x296)](() => ![])
        )
      );
    } catch (_0x1cbc7e) {
      _0x276f8b = _0x553f67[_0x48d52e(0x485)](() => ![]);
    }
    const _0x2083af = (_0x3d76f5, _0x42c880) => {
        const _0x38ed93 = _0x48d52e,
          _0x32e2da = _0x3d76f5["pr_name"] || "",
          _0x1732c9 = _0x3d76f5[_0x38ed93(0x377)] || _0x3d76f5["pr_gtin"] || "";
        let _0xdc8aa3 = "";
        if (
          _0x3d76f5[_0x38ed93(0x4a5)] &&
          _0x3d76f5[_0x38ed93(0x4a5)][_0x38ed93(0x416)]() !== ""
        ) {
          if (_0x3d76f5[_0x38ed93(0x4a5)][_0x38ed93(0x4bc)]("http"))
            _0xdc8aa3 = _0x3d76f5[_0x38ed93(0x4a5)];
          else {
            const _0x50df96 = _0x3d76f5[_0x38ed93(0x4a5)][_0x38ed93(0x4bc)]("/")
              ? _0x3d76f5[_0x38ed93(0x4a5)]
              : "/" + _0x3d76f5[_0x38ed93(0x4a5)];
            _0xdc8aa3 = "https://media.megaservicio.net" + _0x50df96;
          }
        }
        const _0x57d17e =
            Number(_0x3d76f5[_0x38ed93(0x46a)]) ||
            Number(_0x3d76f5["L1"]) ||
            0x0,
          _0x1346d2 = Math[_0x38ed93(0x2ee)](_0x57d17e * 1.16 * 0x64) / 0x64;
        return (
          _0x38ed93(0x42a) +
          (_0x42c880 ? _0x38ed93(0x4a4) : "") +
          _0x38ed93(0x4db) +
          (_0xdc8aa3
            ? _0x38ed93(0x365) +
              _0xdc8aa3 +
              _0x38ed93(0x3b8) +
              _0x32e2da +
              _0x38ed93(0x4a1)
            : _0x38ed93(0x197)) +
          _0x38ed93(0x43a) +
          _0x32e2da +
          "\x22>" +
          _0x32e2da +
          _0x38ed93(0x386) +
          _0x1732c9 +
          _0x38ed93(0x1c0) +
          (_0x1346d2 > 0x0
            ? _0x38ed93(0x19e) + _0x1346d2["toFixed"](0x2) + _0x38ed93(0x483)
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x20bg-transparent\x20border-0\x20pt-0\x20pb-2\x20text-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-primary\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27" +
          _0x1732c9 +
          _0x38ed93(0x524)
        );
      },
      _0x58c503 = (_0x3ef0ec, _0x5b3622) => {
        const _0x5a82af = _0x48d52e,
          _0x5f5348 = _0x3ef0ec[_0x5a82af(0x264)] || "",
          _0x4c2be5 =
            _0x3ef0ec[_0x5a82af(0x377)] || _0x3ef0ec[_0x5a82af(0x3f9)] || "";
        let _0x137c28 = "";
        if (
          _0x3ef0ec["pr_imagen"] &&
          _0x3ef0ec[_0x5a82af(0x4a5)]["trim"]() !== ""
        ) {
          if (_0x3ef0ec[_0x5a82af(0x4a5)][_0x5a82af(0x4bc)]("http"))
            _0x137c28 = _0x3ef0ec[_0x5a82af(0x4a5)];
          else {
            const _0x595d4c = _0x3ef0ec[_0x5a82af(0x4a5)][_0x5a82af(0x4bc)]("/")
              ? _0x3ef0ec[_0x5a82af(0x4a5)]
              : "/" + _0x3ef0ec[_0x5a82af(0x4a5)];
            _0x137c28 = _0x5a82af(0x192) + _0x595d4c;
          }
        }
        return (
          _0x5a82af(0x46e) +
          (_0x137c28
            ? "<div\x20class=\x22me-3\x22\x20style=\x22min-width:60px;\x22><img\x20src=\x22" +
              _0x137c28 +
              _0x5a82af(0x3b8) +
              _0x5f5348 +
              _0x5a82af(0x3a4)
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20d-flex\x20align-items-center\x20gap-2\x22>" +
          _0x5f5348 +
          (_0x5b3622 ? _0x5a82af(0x48d) : "") +
          _0x5a82af(0x386) +
          _0x4c2be5 +
          _0x5a82af(0x2a4) +
          _0x4c2be5 +
          _0x5a82af(0x524)
        );
      };
    let _0x44e1e8 = "";
    if (_0x39b513 === _0x48d52e(0x182)) {
      const _0x1d27eb = _0x553f67["map"](
        (_0x270021, _0x3147e6) =>
          _0x48d52e(0x3da) +
          _0x2083af(_0x270021, !!_0x276f8b[_0x3147e6]) +
          _0x48d52e(0x483)
      )["join"]("");
      _0x44e1e8 = _0x48d52e(0x445) + _0x1d27eb + _0x48d52e(0x207);
    } else {
      const _0x3417e1 = _0x553f67["map"]((_0x35c19a, _0x24c4d8) =>
        _0x58c503(_0x35c19a, !!_0x276f8b[_0x24c4d8])
      )[_0x48d52e(0x261)]("");
      _0x44e1e8 = _0x3417e1;
    }
    _0x333f5e["innerHTML"] =
      _0x48d52e(0x45b) +
      _0x299a2d +
      "</strong>\x20resultados\x20para\x20\x22" +
      _0xc6a2dd +
      _0x48d52e(0x339) +
      (_0x39b513 === _0x48d52e(0x182) ? "Cuadros" : _0x48d52e(0x42e)) +
      _0x48d52e(0x3cd) +
      (_0x44e1e8 || _0x48d52e(0x1ae)) +
      _0x48d52e(0x2eb);
    const _0x1b442b = document[_0x48d52e(0x4ba)](_0x48d52e(0x33a)),
      _0x50d5f5 = document["getElementById"](_0x48d52e(0x448));
    if (_0x1b442b)
      _0x1b442b[_0x48d52e(0x1b2)] =
        _0xc5735c + 0x1 + "-" + _0x41669e + _0x48d52e(0x2b9) + _0x299a2d;
    if (_0x50d5f5)
      _0x50d5f5[_0x48d52e(0x1b2)] =
        _0x48d52e(0x437) + _0x5303d6 + _0x48d52e(0x400) + _0x4eb87e;
    const _0x43093f = document[_0x48d52e(0x4ba)]("btnPrevResultados"),
      _0x1a9c1a = document[_0x48d52e(0x4ba)](_0x48d52e(0x220));
    _0x43093f &&
      ((_0x43093f[_0x48d52e(0x3ec)] = _0x5303d6 <= 0x1),
      (_0x43093f[_0x48d52e(0x290)] = () => {
        const _0x23917f = _0x48d52e;
        (resultadosBusquedaState[_0x23917f(0x4b4)] = Math[_0x23917f(0x3d2)](
          0x1,
          _0x5303d6 - 0x1
        )),
          renderResultadosBusqueda();
      }));
    _0x1a9c1a &&
      ((_0x1a9c1a[_0x48d52e(0x3ec)] = _0x5303d6 >= _0x4eb87e),
      (_0x1a9c1a["onclick"] = () => {
        const _0x13689d = _0x48d52e;
        (resultadosBusquedaState[_0x13689d(0x4b4)] = Math[_0x13689d(0x38c)](
          _0x4eb87e,
          _0x5303d6 + 0x1
        )),
          renderResultadosBusqueda();
      }));
    const _0x159442 = document[_0x48d52e(0x4ba)]("pageSizeSelect");
    _0x159442 &&
      ((_0x159442[_0x48d52e(0x2da)] = String(
        resultadosBusquedaState[_0x48d52e(0x442)]
      )),
      (_0x159442[_0x48d52e(0x3be)] = (_0x3b82c5) => {
        const _0x3406d3 = _0x48d52e,
          _0x1997fe =
            parseInt(_0x3b82c5[_0x3406d3(0x275)][_0x3406d3(0x2da)], 0xa) || 0xa;
        (resultadosBusquedaState[_0x3406d3(0x442)] = _0x1997fe),
          (resultadosBusquedaState[_0x3406d3(0x4b4)] = 0x1),
          renderResultadosBusqueda();
      }));
    const _0x252ee7 = document[_0x48d52e(0x4ba)](_0x48d52e(0x293)),
      _0x1f3fbe = document["getElementById"](_0x48d52e(0x25f)),
      _0x15227d = document[_0x48d52e(0x4ba)](_0x48d52e(0x399));
    _0x252ee7 &&
      _0x1f3fbe &&
      _0x15227d &&
      (_0x39b513 === _0x48d52e(0x182)
        ? ((_0x1f3fbe[_0x48d52e(0x523)] = "bi\x20bi-list"),
          (_0x15227d[_0x48d52e(0x1b2)] = _0x48d52e(0x42e)))
        : ((_0x1f3fbe[_0x48d52e(0x523)] = "bi\x20bi-grid-3x3-gap"),
          (_0x15227d[_0x48d52e(0x1b2)] = "Cuadros")),
      (_0x252ee7["onclick"] = () => {
        const _0x33ac94 = _0x48d52e;
        resultadosBusquedaState[_0x33ac94(0x268)] =
          resultadosBusquedaState[_0x33ac94(0x268)] === "grid"
            ? _0x33ac94(0x4e7)
            : _0x33ac94(0x182);
        try {
          localStorage[_0x33ac94(0x457)](
            _0x33ac94(0x3ac),
            resultadosBusquedaState[_0x33ac94(0x268)]
          );
        } catch (_0x5375e5) {}
        renderResultadosBusqueda();
      }));
    const _0x49f124 = document[_0x48d52e(0x4ba)](_0x48d52e(0x497)),
      _0x398549 = document[_0x48d52e(0x4ba)](_0x48d52e(0x468));
    _0x49f124 &&
      ((_0x49f124[_0x48d52e(0x38c)] = "1"),
      (_0x49f124[_0x48d52e(0x3d2)] = String(_0x4eb87e)),
      (_0x49f124[_0x48d52e(0x283)] = _0x48d52e(0x4b1) + _0x4eb87e));
    const _0x4e594f = () => {
      const _0x5c6276 = _0x48d52e,
        _0x52aed0 = parseInt((_0x49f124?.["value"] || "")["trim"](), 0xa);
      if (!isNaN(_0x52aed0)) {
        const _0x457aa5 = Math[_0x5c6276(0x3d2)](
          0x1,
          Math[_0x5c6276(0x38c)](_0x4eb87e, _0x52aed0)
        );
        (resultadosBusquedaState[_0x5c6276(0x4b4)] = _0x457aa5),
          renderResultadosBusqueda();
      }
    };
    if (_0x398549) _0x398549["onclick"] = _0x4e594f;
    if (_0x49f124)
      _0x49f124[_0x48d52e(0x50d)](_0x48d52e(0x4de), (_0xa7ff96) => {
        const _0x167625 = _0x48d52e;
        _0xa7ff96[_0x167625(0x1cf)] === _0x167625(0x425) &&
          (_0xa7ff96[_0x167625(0x337)](), _0x4e594f());
      });
  }
  async function mostrarDetalleProductoBySKU(_0x265cf7) {
    const _0x41e5a1 = _0x406c10,
      _0xf9c15d = await getAllProductos(),
      _0x2b0bd1 = _0xf9c15d[_0x41e5a1(0x38f)](
        (_0x141335) =>
          String(_0x141335[_0x41e5a1(0x377)]) === String(_0x265cf7) ||
          String(_0x141335[_0x41e5a1(0x3f9)]) === String(_0x265cf7)
      );
    if (_0x2b0bd1) {
      mostrarDetalleProducto(_0x2b0bd1);
      const _0x2b7481 = {
        ..._0x2b0bd1,
        FECHA_ESCANEO: new Date()[_0x41e5a1(0x18f)](),
      };
      historial[_0x41e5a1(0x417)](_0x2b7481),
        setCookie("historial", JSON["stringify"](historial), 0x1e),
        renderHistorial(),
        setTimeout(() => {
          const _0x2fc7fd = _0x41e5a1,
            _0x364788 = document[_0x2fc7fd(0x4ba)](_0x2fc7fd(0x1d9));
          _0x364788 &&
            _0x364788[_0x2fc7fd(0x4c1)]({
              behavior: _0x2fc7fd(0x41e),
              block: _0x2fc7fd(0x285),
              inline: _0x2fc7fd(0x286),
            });
        }, 0xc8);
    }
  }
  function mostrarModalReporteVentas() {
    const _0x2dc088 = _0x406c10;
    if (isMobileDevice()) hideMobileKeyboard();
    const _0x27f800 = new Date(),
      _0x11d9a8 =
        _0x27f800[_0x2dc088(0x23f)]() +
        "-" +
        String(_0x27f800["getMonth"]() + 0x1)[_0x2dc088(0x4c2)](0x2, "0");
    document[_0x2dc088(0x4ba)](_0x2dc088(0x415))["value"] = _0x11d9a8;
    const _0x27ec7c = document[_0x2dc088(0x4ba)](_0x2dc088(0x2cb)),
      _0x25de35 =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[
          _0x2dc088(0x374)
        ](navigator["userAgent"]);
    if (_0x25de35)
      (_0x27ec7c[_0x2dc088(0x2ae)][_0x2dc088(0x27f)] = _0x2dc088(0x2b3)),
        (_0x27ec7c[_0x2dc088(0x2ae)][_0x2dc088(0x271)] = "0"),
        (_0x27ec7c[_0x2dc088(0x2ae)]["left"] = "0"),
        (_0x27ec7c[_0x2dc088(0x2ae)][_0x2dc088(0x4f2)] = _0x2dc088(0x321)),
        (_0x27ec7c[_0x2dc088(0x2ae)][_0x2dc088(0x258)] = _0x2dc088(0x321)),
        (_0x27ec7c[_0x2dc088(0x2ae)][_0x2dc088(0x1eb)] = _0x2dc088(0x1bf)),
        (_0x27ec7c[_0x2dc088(0x2ae)][_0x2dc088(0x230)] = _0x2dc088(0x3f3)),
        (_0x27ec7c[_0x2dc088(0x2ae)][_0x2dc088(0x428)] = _0x2dc088(0x2e0)),
        _0x27ec7c["classList"]["add"](_0x2dc088(0x521));
    else {
      const _0x11110d = new bootstrap["Modal"](_0x27ec7c, {
        backdrop: !![],
        keyboard: !![],
      });
      _0x11110d[_0x2dc088(0x521)]();
    }
  }
  function cerrarModalReporteVentas() {
    const _0x393358 = _0x406c10,
      _0x4d3d5d = document[_0x393358(0x4ba)](_0x393358(0x2cb));
    if (!_0x4d3d5d) return;
    _0x4d3d5d[_0x393358(0x184)][_0x393358(0x478)](_0x393358(0x521)),
      (_0x4d3d5d[_0x393358(0x2ae)]["display"] = _0x393358(0x452));
    try {
      const _0x28f0a0 =
        bootstrap[_0x393358(0x463)][_0x393358(0x349)](_0x4d3d5d);
      if (_0x28f0a0) _0x28f0a0[_0x393358(0x4b5)]();
    } catch (_0x43540b) {}
    document[_0x393358(0x3bc)](_0x393358(0x2e2))["forEach"]((_0x335b13) =>
      _0x335b13[_0x393358(0x478)]()
    );
    try {
      const _0x4466e7 = document[_0x393358(0x4ba)](_0x393358(0x3d6));
      _0x4466e7 &&
        ((_0x4466e7[_0x393358(0x283)] = _0x393358(0x480)),
        bringInputIntoView({ focusOnDesktop: !![] }));
    } catch (_0x200b9b) {}
  }
  async function generarReporteVentas() {
    const _0x5deefe = _0x406c10,
      _0x23122d = document[_0x5deefe(0x4ba)](_0x5deefe(0x415))[
        _0x5deefe(0x2da)
      ],
      _0x3c989f = document[_0x5deefe(0x4ba)](_0x5deefe(0x1a9)),
      _0x2302a2 = document["getElementById"](_0x5deefe(0x492)),
      _0x2a49c2 = document[_0x5deefe(0x4ba)](_0x5deefe(0x395));
    if (!_0x23122d) {
      _0x3c989f[_0x5deefe(0x181)] = _0x5deefe(0x3f4);
      return;
    }
    (_0x2302a2[_0x5deefe(0x1b2)] = "Generando..."),
      _0x2a49c2[_0x5deefe(0x184)][_0x5deefe(0x478)]("d-none");
    try {
      const _0x107214 =
          "https://reporte-ventas-b9.vercel.app/api/ventas?mes=" + _0x23122d,
        _0x1f503c = await fetch(_0x107214);
      if (!_0x1f503c["ok"])
        throw new Error(
          _0x5deefe(0x2f7) +
            _0x1f503c[_0x5deefe(0x32f)] +
            "\x20" +
            _0x1f503c[_0x5deefe(0x2d8)]
        );
      const _0x36c4bc = await _0x1f503c[_0x5deefe(0x412)]();
      if (!_0x36c4bc[_0x5deefe(0x401)])
        throw new Error(_0x36c4bc[_0x5deefe(0x27b)] || _0x5deefe(0x3c1));
      const {
        totalGeneral: _0x3f1d83,
        totalVendedores: _0x57b4b5,
        totalTickets: _0x2ff14b,
        vendedores: _0xd22dfa,
      } = _0x36c4bc[_0x5deefe(0x287)];
      window[_0x5deefe(0x4cb)] = _0xd22dfa;
      let _0x4d5225 = _0x36c4bc["data"][_0x5deefe(0x504)];
      !_0x4d5225 &&
        (_0x4d5225 = {
          credit_card: {
            total: 5114377.11,
            cantidad: _0xd22dfa["reduce"](
              (_0x404175, _0x5b4cf0) =>
                _0x404175 +
                (_0x5b4cf0[_0x5deefe(0x319)] || [])[_0x5deefe(0x3e4)](
                  (_0x88a286) =>
                    (_0x88a286[_0x5deefe(0x4ad)] || "")["includes"](
                      _0x5deefe(0x24d)
                    )
                )[_0x5deefe(0x237)],
              0x0
            ),
          },
          cash: {
            total: 1288936.88,
            cantidad: _0xd22dfa[_0x5deefe(0x3b4)](
              (_0x285d3f, _0x1cfe19) =>
                _0x285d3f +
                (_0x1cfe19[_0x5deefe(0x319)] || [])[_0x5deefe(0x3e4)](
                  (_0x4355e8) =>
                    (_0x4355e8[_0x5deefe(0x4ad)] || "")[_0x5deefe(0x4d5)](
                      _0x5deefe(0x2fd)
                    )
                )[_0x5deefe(0x237)],
              0x0
            ),
          },
          debit_card: {
            total: 1071636.5,
            cantidad: _0xd22dfa[_0x5deefe(0x3b4)](
              (_0x54b335, _0xb66886) =>
                _0x54b335 +
                (_0xb66886[_0x5deefe(0x319)] || [])[_0x5deefe(0x3e4)](
                  (_0x1c7214) =>
                    (_0x1c7214[_0x5deefe(0x4ad)] || "")[_0x5deefe(0x4d5)](
                      "debit_card"
                    )
                )[_0x5deefe(0x237)],
              0x0
            ),
          },
          credit_note_application: {
            total: 298028.03,
            cantidad: _0xd22dfa["reduce"](
              (_0x587430, _0x59e574) =>
                _0x587430 +
                (_0x59e574[_0x5deefe(0x319)] || [])["filter"]((_0x59f31e) =>
                  (_0x59f31e[_0x5deefe(0x4ad)] || "")[_0x5deefe(0x4d5)](
                    _0x5deefe(0x2a7)
                  )
                )[_0x5deefe(0x237)],
              0x0
            ),
          },
          transfer: {
            total: 452621.06,
            cantidad: _0xd22dfa[_0x5deefe(0x3b4)](
              (_0x504ab4, _0x5cb45a) =>
                _0x504ab4 +
                (_0x5cb45a[_0x5deefe(0x319)] || [])[_0x5deefe(0x3e4)](
                  (_0x64cfdf) =>
                    (_0x64cfdf[_0x5deefe(0x4ad)] || "")[_0x5deefe(0x4d5)](
                      _0x5deefe(0x255)
                    )
                )[_0x5deefe(0x237)],
              0x0
            ),
          },
          check: {
            total: 0x31b,
            cantidad: _0xd22dfa[_0x5deefe(0x3b4)](
              (_0x7ad431, _0x53ef02) =>
                _0x7ad431 +
                (_0x53ef02[_0x5deefe(0x319)] || [])[_0x5deefe(0x3e4)](
                  (_0x4666bf) =>
                    (_0x4666bf[_0x5deefe(0x4ad)] || "")[_0x5deefe(0x4d5)](
                      _0x5deefe(0x32e)
                    )
                )[_0x5deefe(0x237)],
              0x0
            ),
          },
          credit: {
            total: 10799.6,
            cantidad: _0xd22dfa[_0x5deefe(0x3b4)](
              (_0x14d685, _0x4656b6) =>
                _0x14d685 +
                (_0x4656b6[_0x5deefe(0x319)] || [])["filter"](
                  (_0x1e23eb) =>
                    (_0x1e23eb[_0x5deefe(0x4ad)] || "")[_0x5deefe(0x4d5)](
                      "credit"
                    ) &&
                    !(_0x1e23eb[_0x5deefe(0x4ad)] || "")[_0x5deefe(0x4d5)](
                      _0x5deefe(0x24d)
                    ) &&
                    !(_0x1e23eb[_0x5deefe(0x4ad)] || "")[_0x5deefe(0x4d5)](
                      _0x5deefe(0x309)
                    )
                )[_0x5deefe(0x237)],
              0x0
            ),
          },
          mixed: { total: 0x0, cantidad: 0x0 },
        });
      if (_0xd22dfa[_0x5deefe(0x237)] === 0x0) {
        _0x3c989f["innerHTML"] =
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-2\x22>Sin\x20ventas\x20en\x20" +
          _0x23122d +
          _0x5deefe(0x314);
        return;
      }
      const _0x59a9a3 = {
        cash: _0x5deefe(0x376),
        credit_card: _0x5deefe(0x2d2),
        debit_card: _0x5deefe(0x3a9),
        credit_note_application: _0x5deefe(0x20a),
        transfer: "🏦\x20Transferencia",
        check: _0x5deefe(0x25d),
        credit: "💵\x20Crédito",
        mixed: _0x5deefe(0x2a3),
      };
      let _0x369d51 = "";
      _0x4d5225 &&
        Object["keys"](_0x4d5225)["forEach"]((_0x2c4c99) => {
          const _0x203528 = _0x5deefe,
            _0x49bcb5 = _0x4d5225[_0x2c4c99];
          _0x49bcb5[_0x203528(0x4bb)] > 0x0 &&
            (_0x369d51 +=
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-4\x20col-lg-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22>$" +
              _0x49bcb5[_0x203528(0x4bb)][_0x203528(0x519)](_0x203528(0x426), {
                minimumFractionDigits: 0x2,
              }) +
              _0x203528(0x223) +
              (_0x59a9a3[_0x2c4c99] || _0x2c4c99) +
              _0x203528(0x25e) +
              _0x49bcb5[_0x203528(0x1fc)] +
              _0x203528(0x345));
        });
      let _0x1de067 =
        _0x5deefe(0x329) +
        _0x23122d +
        _0x5deefe(0x469) +
        _0x3f1d83[_0x5deefe(0x519)](_0x5deefe(0x426), {
          minimumFractionDigits: 0x2,
        }) +
        _0x5deefe(0x3ea) +
        _0x57b4b5 +
        _0x5deefe(0x244) +
        _0x2ff14b +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Total\x20Tickets</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x369d51 ? _0x5deefe(0x475) + _0x369d51 + _0x5deefe(0x22b) : "") +
        _0x5deefe(0x371);
      _0xd22dfa[_0x5deefe(0x3b6)]((_0x4c40b3, _0x311372) => {
        const _0x50643b = _0x5deefe,
          _0x42c262 = ((_0x4c40b3[_0x50643b(0x18e)] / _0x3f1d83) * 0x64)[
            "toFixed"
          ](0x1),
          _0x40474d = (_0x4c40b3[_0x50643b(0x18e)] /
            _0x4c40b3[_0x50643b(0x4e5)])["toFixed"](0x2);
        _0x1de067 +=
          _0x50643b(0x3dc) +
          (_0x311372 === 0x0 ? _0x50643b(0x1d3) : "border-secondary") +
          _0x50643b(0x23d) +
          (_0x311372 === 0x0 ? _0x50643b(0x251) : "bg-secondary") +
          _0x50643b(0x2ba) +
          (_0x311372 === 0x0 ? "🏆" : "👤") +
          "\x20" +
          _0x4c40b3[_0x50643b(0x489)] +
          _0x50643b(0x3f8) +
          (_0x311372 === 0x0 ? _0x50643b(0x260) : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h5\x20text-success\x22>$" +
          _0x4c40b3["totalVentas"]["toLocaleString"]("es-MX", {
            minimumFractionDigits: 0x2,
          }) +
          _0x50643b(0x48a) +
          _0x42c262 +
          _0x50643b(0x270) +
          _0x4c40b3[_0x50643b(0x4e5)] +
          _0x50643b(0x464) +
          _0x40474d +
          _0x50643b(0x29e) +
          _0x4c40b3[_0x50643b(0x489)] +
          "\x27,\x20" +
          i +
          _0x50643b(0x3d1) +
          i +
          "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Ver\x20Detalle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
      }),
        (_0x1de067 += _0x5deefe(0x483)),
        (_0x3c989f[_0x5deefe(0x181)] = _0x1de067);
    } catch (_0x1a3e92) {
      console[_0x5deefe(0x27b)](
        "❌\x20Error\x20al\x20generar\x20reporte\x20de\x20ventas:",
        _0x1a3e92
      ),
        (_0x3c989f[_0x5deefe(0x181)] =
          "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error\x20al\x20generar\x20el\x20reporte:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
          _0x1a3e92[_0x5deefe(0x29c)] +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<br><small\x20class=\x22text-muted\x22>Verifica\x20que\x20el\x20proxy\x20de\x20Vercel\x20esté\x20funcionando</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20");
    } finally {
      (_0x2302a2[_0x5deefe(0x1b2)] = _0x5deefe(0x4ce)),
        _0x2a49c2[_0x5deefe(0x184)][_0x5deefe(0x3e3)]("d-none");
    }
  }
  function mostrarDetalleVendedor(_0x1d53be, _0x27bf06) {
    const _0xeb50c1 = _0x406c10,
      _0x29dd93 = window[_0xeb50c1(0x4cb)] || [],
      _0x40e2e6 = _0x29dd93[_0x27bf06];
    if (!_0x40e2e6 || !_0x40e2e6[_0xeb50c1(0x319)]) {
      alert(_0xeb50c1(0x4ee));
      return;
    }
    const _0x101092 = _0x40e2e6[_0xeb50c1(0x319)];
    function _0x39cd67(_0x5a914d) {
      const _0x35745f = _0xeb50c1,
        _0xf27bca = (_0x5a914d || "")[_0x35745f(0x4f7)]()[_0x35745f(0x416)]();
      if (
        _0xf27bca["includes"](_0x35745f(0x2fd)) ||
        _0xf27bca === _0x35745f(0x2fd)
      )
        return { nombre: "💰\x20Efectivo", clase: _0x35745f(0x450) };
      else {
        if (_0xf27bca["includes"]("credit_card") || _0xf27bca === "credit_card")
          return {
            nombre: "💳\x20Tarjeta\x20Crédito",
            clase: _0x35745f(0x2d9),
          };
        else {
          if (
            _0xf27bca[_0x35745f(0x4d5)]("debit_card") ||
            _0xf27bca === _0x35745f(0x4c8)
          )
            return { nombre: _0x35745f(0x3a9), clase: _0x35745f(0x2a9) };
          else {
            if (
              _0xf27bca[_0x35745f(0x4d5)](_0x35745f(0x255)) ||
              _0xf27bca === _0x35745f(0x255)
            )
              return { nombre: _0x35745f(0x38d), clase: _0x35745f(0x254) };
            else {
              if (
                _0xf27bca[_0x35745f(0x4d5)](_0x35745f(0x309)) ||
                _0xf27bca === _0x35745f(0x2a7)
              )
                return { nombre: _0x35745f(0x20a), clase: _0x35745f(0x251) };
              else {
                if (
                  _0xf27bca["includes"](_0x35745f(0x32e)) ||
                  _0xf27bca === _0x35745f(0x32e)
                )
                  return { nombre: _0x35745f(0x25d), clase: _0x35745f(0x460) };
                else {
                  if (
                    _0xf27bca[_0x35745f(0x4d5)](_0x35745f(0x43b)) &&
                    !_0xf27bca["includes"](_0x35745f(0x4d8))
                  )
                    return { nombre: _0x35745f(0x449), clase: "bg-danger" };
                  else
                    return _0xf27bca[_0x35745f(0x4d5)](",") ||
                      _0xf27bca[_0x35745f(0x4d5)]("\x20")
                      ? { nombre: _0x35745f(0x2a3), clase: "bg-gradient" }
                      : {
                          nombre: _0x5a914d || "Sin\x20especificar",
                          clase: _0x35745f(0x37a),
                        };
                }
              }
            }
          }
        }
      }
    }
    let _0x43a4c1 = _0xeb50c1(0x3c4) + _0x1d53be + _0xeb50c1(0x2b6);
    _0x101092["forEach"]((_0x11fbca) => {
      const _0x55d727 = _0xeb50c1,
        _0x39c9a8 = _0x39cd67(_0x11fbca[_0x55d727(0x4ad)]),
        _0x468aea = new Date(_0x11fbca["fecha"])[_0x55d727(0x34f)](
          _0x55d727(0x426),
          {
            day: _0x55d727(0x280),
            month: _0x55d727(0x280),
            hour: _0x55d727(0x280),
            minute: "2-digit",
          }
        );
      _0x43a4c1 +=
        _0x55d727(0x232) +
        _0x11fbca["ticket"] +
        _0x55d727(0x45d) +
        _0x468aea +
        "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20" +
        _0x39c9a8[_0x55d727(0x2a5)] +
        _0x55d727(0x27e) +
        _0x39c9a8["nombre"] +
        _0x55d727(0x3fd) +
        (_0x11fbca[_0x55d727(0x18b)] && _0x11fbca[_0x55d727(0x18b)] !== "-"
          ? "<small\x20class=\x22text-muted\x20d-block\x20d-lg-none\x22>" +
            _0x11fbca[_0x55d727(0x18b)] +
            _0x55d727(0x1b5)
          : "") +
        _0x55d727(0x495) +
        _0x11fbca[_0x55d727(0x3b0)] +
        _0x55d727(0x2e4) +
        parseFloat(_0x11fbca["importe"])["toLocaleString"]("es-MX", {
          minimumFractionDigits: 0x2,
        }) +
        _0x55d727(0x51e) +
        _0x468aea +
        _0x55d727(0x201) +
        _0x39c9a8["clase"] +
        "\x20small\x22>" +
        _0x39c9a8[_0x55d727(0x489)] +
        _0x55d727(0x1d7) +
        (_0x11fbca[_0x55d727(0x18b)] || "-") +
        "</small></td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20";
    });
    const _0x2e35b0 = _0x101092[_0xeb50c1(0x3b4)](
      (_0x2f52bc, _0x2dd7d9) =>
        _0x2f52bc + parseFloat(_0x2dd7d9[_0xeb50c1(0x299)]),
      0x0
    );
    _0x43a4c1 +=
      _0xeb50c1(0x471) +
      _0x2e35b0[_0xeb50c1(0x519)](_0xeb50c1(0x426), {
        minimumFractionDigits: 0x2,
      }) +
      _0xeb50c1(0x3d4) +
      ticketsArray["length"] +
      "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22\x20colspan=\x222\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-md-none\x22>" +
      ticketsArray[_0xeb50c1(0x237)] +
      _0xeb50c1(0x1f5);
    const _0x4700ed = document["getElementById"](_0xeb50c1(0x224));
    if (_0x4700ed) _0x4700ed[_0xeb50c1(0x478)]();
    document[_0xeb50c1(0x1c9)]["insertAdjacentHTML"](
      _0xeb50c1(0x266),
      _0x43a4c1
    );
    const _0x5ec680 = new bootstrap[_0xeb50c1(0x463)](
      document[_0xeb50c1(0x4ba)]("detalleVendedorModal")
    );
    _0x5ec680[_0xeb50c1(0x521)](),
      document[_0xeb50c1(0x4ba)](_0xeb50c1(0x224))[_0xeb50c1(0x50d)](
        _0xeb50c1(0x446),
        () => {
          const _0x45c2af = _0xeb50c1;
          document[_0x45c2af(0x4ba)](_0x45c2af(0x224))["remove"]();
        }
      );
  }
}
function mostrarModalConsultarTicket() {
  const _0x44343d = _0x406c10,
    _0x255958 = document["getElementById"]("consultarTicketModal");
  if (_0x255958) {
    (document[_0x44343d(0x4ba)](_0x44343d(0x3b3))["value"] = ""),
      (document[_0x44343d(0x4ba)]("resultadoBusquedaTicket")["innerHTML"] = "");
    const _0x354fa9 = new bootstrap["Modal"](_0x255958);
    _0x354fa9[_0x44343d(0x521)](),
      _0x255958["addEventListener"](
        _0x44343d(0x533),
        function () {
          const _0xbed417 = _0x44343d;
          document[_0xbed417(0x4ba)]("numeroTicket")[_0xbed417(0x291)]();
        },
        { once: !![] }
      );
  }
}
async function buscarTicket() {
  const _0x36034d = _0x406c10,
    _0x533d54 = document[_0x36034d(0x4ba)](_0x36034d(0x3b3))[_0x36034d(0x2da)][
      "trim"
    ](),
    _0x5dd597 = document[_0x36034d(0x4ba)](_0x36034d(0x32d));
  if (!_0x533d54) {
    _0x5dd597[_0x36034d(0x181)] = _0x36034d(0x30d);
    return;
  }
  _0x5dd597[_0x36034d(0x181)] = _0x36034d(0x246) + _0x533d54 + _0x36034d(0x21c);
  try {
    console[_0x36034d(0x366)](_0x36034d(0x2ed), _0x533d54);
    const _0x3959a3 = [
      _0x36034d(0x2c8) + _0x533d54,
      _0x36034d(0x3f2) + _0x533d54,
      "https://ticket-b9.vercel.app/api?ticketId=" + _0x533d54,
    ];
    let _0x28d482 = null,
      _0x3403af = null;
    for (const _0x7a04ed of _0x3959a3) {
      try {
        console["log"](_0x36034d(0x325), _0x7a04ed);
        const _0x8bb699 = await fetch(_0x7a04ed);
        if (_0x8bb699["ok"]) {
          (_0x28d482 = await _0x8bb699["json"]()),
            console["log"](_0x36034d(0x2ce), _0x7a04ed);
          break;
        } else {
          const _0x4a6fcb = await _0x8bb699[_0x36034d(0x362)]();
          console[_0x36034d(0x366)](
            _0x36034d(0x53d) + _0x7a04ed + ":",
            _0x8bb699[_0x36034d(0x32f)],
            _0x4a6fcb
          ),
            (_0x3403af = new Error(
              "Error\x20HTTP:\x20" + _0x8bb699[_0x36034d(0x32f)]
            ));
        }
      } catch (_0x36787d) {
        console[_0x36034d(0x366)](
          "❌\x20Error\x20de\x20conexión\x20en\x20" + _0x7a04ed + ":",
          _0x36787d[_0x36034d(0x29c)]
        ),
          (_0x3403af = _0x36787d);
      }
    }
    if (
      !_0x28d482 ||
      !_0x28d482["orders"] ||
      _0x28d482[_0x36034d(0x3f5)][_0x36034d(0x237)] === 0x0
    ) {
      _0x5dd597[_0x36034d(0x181)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Ticket\x20no\x20encontrado</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20No\x20se\x20encontraron\x20datos\x20para\x20el\x20ticket\x20<code>" +
        _0x533d54 +
        _0x36034d(0x506);
      return;
    }
    const _0x4e419c = _0x28d482[_0x36034d(0x3f5)][0x0],
      _0x5245dd = _0x4e419c[_0x36034d(0x3b0)] || {},
      _0x441148 =
        _0x5245dd[_0x36034d(0x3e0)] ||
        _0x4e419c["or_nombreCliente"] ||
        _0x4e419c["cte_Nombre"] ||
        _0x36034d(0x28f),
      _0x7bcc62 =
        _0x4e419c[_0x36034d(0x406)] || _0x4e419c[_0x36034d(0x1e4)] || "N/A",
      _0x57b91f = parseFloat(
        _0x4e419c["or_totalFinal"] || _0x4e419c[_0x36034d(0x383)] || 0x0
      ),
      _0x281f6c = _0x4e419c[_0x36034d(0x4f6)]
        ? new Date(_0x4e419c[_0x36034d(0x4f6)])[_0x36034d(0x34f)](
            _0x36034d(0x426)
          )
        : _0x36034d(0x28f);
    _0x5dd597["innerHTML"] =
      _0x36034d(0x23e) +
      _0x533d54 +
      _0x36034d(0x3a2) +
      _0x57b91f[_0x36034d(0x519)](_0x36034d(0x426), {
        minimumFractionDigits: 0x2,
      }) +
      _0x36034d(0x1d8) +
      _0x441148 +
      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Fecha:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
      _0x281f6c +
      _0x36034d(0x2d3) +
      _0x7bcc62 +
      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20w-100\x22\x20onclick=\x22verTicketCompleto(\x27" +
      _0x533d54 +
      _0x36034d(0x424);
  } catch (_0xfd0559) {
    console["error"]("❌\x20Error\x20al\x20buscar\x20ticket:", _0xfd0559),
      (_0x5dd597[_0x36034d(0x181)] =
        _0x36034d(0x378) + _0xfd0559[_0x36034d(0x29c)] + _0x36034d(0x4dc));
  }
}
function verTicketCompleto(_0x4cc074) {
  const _0x213845 = _0x406c10,
    _0xc1c8ec = bootstrap[_0x213845(0x463)][_0x213845(0x349)](
      document[_0x213845(0x4ba)]("consultarTicketModal")
    );
  _0xc1c8ec && _0xc1c8ec[_0x213845(0x4b5)](),
    typeof verTicket === _0x213845(0x23c)
      ? verTicket(_0x4cc074)
      : alert(_0x213845(0x436));
}
document[_0x406c10(0x50d)](_0x406c10(0x3cb), function () {
  const _0x1b4e4a = _0x406c10,
    _0x161412 = document["getElementById"]("numeroTicket");
  _0x161412 &&
    _0x161412[_0x1b4e4a(0x50d)](_0x1b4e4a(0x18a), function (_0x1ce010) {
      const _0x2a02da = _0x1b4e4a;
      _0x1ce010["key"] === _0x2a02da(0x425) &&
        (_0x1ce010[_0x2a02da(0x337)](), buscarTicket());
    });
}),
  (window[_0x406c10(0x2f0)] = mostrarModalConsultarTicket),
  (window["buscarTicket"] = buscarTicket),
  (window[_0x406c10(0x46c)] = verTicketCompleto);
function _0x3902() {
  const _0x230cf7 = [
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20promo-badge\x22>🏷️\x20PROMO</span>",
    "pr_imagen",
    "oncomplete",
    "textAlign",
    "click",
    "\x0a\x20\x20#reader\x20{\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20width:\x20320px;\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20background:\x20#000;\x0a\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(0,0,0,0.15);\x0a\x20\x20}\x0a\x20\x20/*\x20Imagen\x20fija\x20para\x20tarjetas\x20de\x20resultados\x20(grid)\x20*/\x0a\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20border-top-left-radius:\x200.375rem;\x0a\x20\x20\x20\x20border-top-right-radius:\x200.375rem;\x0a\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20}\x0a\x20\x20.result-card-img\x20img\x20{\x0a\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20background:\x20#fff;\x0a\x20\x20}\x0a\x20\x20/*\x20El\x20espaciado\x20del\x20grid\x20lo\x20maneja\x20Bootstrap\x20g-3;\x20sin\x20margen\x20extra\x20en\x20la\x20card\x20para\x20evitar\x20desalineación\x20*/\x0a\x20\x20.result-card\x20{\x20margin:\x200;\x20}\x0a\x20\x20.promo-badge\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x206px;\x0a\x20\x20\x20\x20left:\x206px;\x0a\x20\x20\x20\x20font-size:\x200.7rem;\x0a\x20\x20}\x0a\x20\x20@media\x20(max-width:\x20576px)\x20{\x0a\x20\x20\x20\x20.result-card-img\x20{\x0a\x20\x20\x20\x20\x20\x20height:\x20100px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20#reader\x20video\x20{\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20width:\x20320px\x20!important;\x0a\x20\x20\x20\x20height:\x20120px\x20!important;\x0a\x20\x20\x20\x20object-fit:\x20cover;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20nombre\x20del\x20producto\x20*/\x0a\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x201.4rem;\x0a\x20\x20\x20\x20line-height:\x201.3;\x0a\x20\x20\x20\x20margin-bottom:\x200.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.nombre-producto-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.1rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Estilos\x20responsivos\x20para\x20precios\x20*/\x0a\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20font-size:\x203.5rem;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x202.2rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.precio-responsive\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20/*\x20Estilos\x20para\x20código\x20de\x20barras\x20funcional\x20*/\x0a\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20max-width:\x20100%;\x0a\x20\x20\x20\x20height:\x20auto;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20background:\x20#ffffff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20max-width:\x20300px;\x0a\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x202rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20250px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20@media\x20(max-width:\x20480px)\x20{\x0a\x20\x20\x20\x20.codigo-barras-container\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x201.5rem\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x20200px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.barcode-canvas\x20{\x0a\x20\x20\x20\x20\x20\x20max-width:\x20160px;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a\x0a\x20\x20/*\x20Modal\x20de\x20resultados\x20al\x2080%\x20en\x20desktop\x20*/\x0a\x20\x20@media\x20(min-width:\x20992px)\x20{\x0a\x20\x20\x20\x20#resultadosBusquedaModal\x20.modal-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20\x20\x20max-width:\x2080vw\x20!important;\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a",
    "productosConCodigosAdicionales",
    "\x0a\x20\x20<div\x20class=\x22d-flex\x20gap-2\x20mb-4\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnPromociones\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#28a745;\x20background:#d4edda;\x20color:#155724;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x22\x20onclick=\x22mostrarModalPromocionesGenerales()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🏷️\x20Ver\x20Promociones\x0a\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnReporteVentas\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#007bff;\x20background:#e7f3ff;\x20color:#004085;\x20font-size:0.9rem;\x20padding:2px\x2012px;\x22\x20onclick=\x22mostrarModalReporteVentas()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20📊\x20Reporte\x20Ventas\x0a\x20\x20\x20\x20</button>\x0a\x20\x20</div>\x0a\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20w-100\x20mb-2\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20flex-column\x20flex-md-row\x20align-items-md-end\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20<h5\x20class=\x22ant-typography\x20css-1r8qqf1\x20mb-0\x22>Productos</h5>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22ultimaActualizacion\x22\x20class=\x22ant-typography\x20css-1r8qqf1\x20ms-md-4\x22\x20style=\x22font-size:1rem;\x22>Última\x20actualización:\x20nunca\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20id=\x22btnActualizar\x22\x20class=\x22ant-btn\x20css-1r8qqf1\x20ant-btn-default\x20ant-btn-color-default\x20ant-btn-variant-outlined\x20ant-btn-sm\x22\x20style=\x22border-radius:6px;\x20border:1px\x20solid\x20#d9d9d9;\x20background:#fff;\x20color:#222;\x20font-size:1rem;\x20padding:2px\x2016px;\x20margin-left:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnTexto\x22>Actualizar</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20id=\x22mensajeActualizacion\x22\x20class=\x22text-center\x22\x20style=\x22min-height:\x201.5rem;\x22></div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20promociones\x20generales\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22promocionesGeneralesModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22promocionesGeneralesModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22promocionesGeneralesModalLabel\x22>🏷️\x20Todas\x20las\x20Promociones\x20Disponibles</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22promociones-generales-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones...</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20me-auto\x22>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarModalMobile();\x20}catch(e){}\x20try{\x20const\x20m=bootstrap.Modal.getInstance(document.getElementById(\x27promocionesGeneralesModal\x27));\x20if(m)\x20m.hide();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<!--\x20Modal\x20para\x20reporte\x20de\x20ventas\x20-->\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22reporteVentasModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22reporteVentasModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22reporteVentasModalLabel\x22>📊\x20Reporte\x20de\x20Ventas</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22cerrarModalReporteVentas()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22reporte-ventas-modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22mesReporte\x22\x20class=\x22form-label\x22>Seleccionar\x20Mes:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22month\x22\x20id=\x22mesReporte\x22\x20class=\x22form-control\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x20d-flex\x20align-items-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-primary\x22\x20onclick=\x22generarReporteVentas()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnReporteTexto\x22>Generar\x20Reporte</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22btnReporteSpinner\x22\x20class=\x22d-none\x20spinner-border\x20spinner-border-sm\x20ms-2\x22\x20role=\x22status\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22reporte-contenido\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-bar-chart\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Selecciona\x20un\x20mes\x20y\x20genera\x20el\x20reporte\x20para\x20ver\x20las\x20ventas\x20por\x20vendedor.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22cerrarModalReporteVentas()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "ℹ️\x20Promos\x20locales\x20disponibles:",
    "metodoPago",
    "Formato\x20de\x20promociones\x20inválido",
    "#198754",
    "dailyCount",
    "1\x20-\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x20",
    "count",
    "page",
    "hide",
    "limpiarHistorialBtn",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-light\x20text-dark\x20me-1\x20mb-1\x22\x20style=\x22font-size:\x200.7rem;\x22>",
    "Error\x20al\x20cargar\x20promociones:",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-start\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-dark\x22\x20style=\x22font-size:\x201rem;\x22>",
    "getElementById",
    "total",
    "startsWith",
    "📋\x20Probando\x20configuración:\x20",
    "toDateString",
    "accepted",
    "🎯\x20Umbral\x20calculado:\x20",
    "scrollIntoView",
    "padStart",
    "Última\x20actualización:\x20",
    "inserta\x20sku\x20o\x20busca\x20un\x20producto",
    "border-bottom\x20pb-3",
    "✅\x20Los\x203\x20endpoints\x20consultados",
    "dailyLimit",
    "debit_card",
    "\x0a\x20\x20\x20\x20</div>",
    "createObjectURL",
    "ultimosVendedores",
    "false",
    "\x20días",
    "Generar\x20Reporte",
    "Backend\x20no\x20disponible\x20-\x20usando\x20detección\x20local",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20pudo\x20acceder\x20a\x20la\x20cámara:\x20",
    "376dZQcnr",
    "loadUsage",
    "🔄\x20Consultando\x20endpoint\x20de\x20promociones...",
    "usarCodigosBarras",
    "includes",
    "🧮\x20Calculando\x20precio\x20total:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "card",
    "code_39_vin_reader",
    "indexeddb_local",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "allSettled",
    "keydown",
    "\x20->\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Cargando\x20promociones\x20y\x20productos...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "📁\x20Iniciando\x20procesamiento\x20de\x20archivo:",
    "\x22\x20style=\x22width:218px;\x20height:124px;\x20object-fit:contain;\x20background:#fff;\x20border-radius:12px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "race",
    "🚫\x20PROBLEMA:\x20Permisos\x20denegados\x20-\x20Vision\x20API\x20no\x20habilitada",
    "cantidadTickets",
    "CODE_128",
    "list",
    "❌\x20Todas\x20las\x20configuraciones\x20fallaron",
    "column",
    "btn-outline-primary",
    "ean_reader",
    "maxWidth",
    "1000",
    "No\x20se\x20encontraron\x20datos\x20del\x20vendedor",
    "stopPropagation",
    "No\x20se\x20puede\x20generar\x20código\x20de\x20barras:\x20canvas\x20o\x20código\x20faltante",
    "<small\x20class=\x22text-muted\x20mt-1\x20d-block\x22>",
    "width",
    "clipboard",
    "\x20x\x20",
    "❌\x20Cancelar",
    "or_fecha",
    "toLowerCase",
    "Hace\x20",
    "mensaje",
    "./service-worker.js",
    "BarcodeDetector",
    "1\x20endpoint\x20completado,\x20finalizando...",
    "✅\x20FileInput\x20configurado\x20para\x20GitHub\x20Pages",
    "🔄\x20Nueva\x20versión\x20del\x20Service\x20Worker\x20disponible",
    "fulfilled",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Endpoint\x20/api/stats\x20falló:\x20",
    "✅\x20Google\x20Vision\x20API\x20usada\x20exitosamente\x20-\x20contador\x20local\x20actualizado",
    "#btnSpinner",
    "✅\x20Endpoint\x20/api/stats\x20funciona\x20correctamente",
    "resumenMetodosPago",
    "state",
    "</code>.<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Verifica\x20que\x20el\x20número\x20esté\x20escrito\x20correctamente.</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    ".consultar-historial-btn",
    "Error\x20inicial\x20cargando\x20productos:",
    "onload",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x20text-muted\x22>Precio\x20promocional</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔍\x20Datos\x20de\x20promoción\x20recibidos:",
    "Error\x20obteniendo\x20promociones:",
    "addEventListener",
    "\x0a\x20\x20\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20\x20\x20opacity:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20width:\x201px\x20!important;\x0a\x20\x20\x20\x20\x20\x20height:\x201px\x20!important;\x0a\x20\x20\x20\x20\x20\x20overflow:\x20hidden\x20!important;\x0a\x20\x20\x20\x20\x20\x20pointer-events:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20left:\x20-9999px\x20!important;\x0a\x20\x20\x20\x20\x20\x20top:\x20-9999px\x20!important;\x0a\x20\x20\x20\x20\x20\x20z-index:\x20-1\x20!important;\x0a\x20\x20\x20\x20",
    "https://verificadorb9-backend.vercel.app/api/productos-con-codigos",
    "total_price",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🏦\x20Problema\x20de\x20Facturación</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20facturación\x20no\x20está\x20habilitada\x20en\x20el\x20proyecto\x20correcto\x20(#1070150612422)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/billing\x22\x20target=\x22_blank\x22>Ve\x20a\x20Google\x20Cloud\x20Billing</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "❌\x20Error\x20específico\x20del\x20backend:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "productos_ts",
    "promociones",
    "<div\x20class=\x22alert\x20alert-danger\x22>❌\x20Error\x20en\x20diagnóstico:\x20",
    "\x20más</div>",
    "📋\x20Configuración\x20final\x20para\x20códigos\x20largos...",
    "toLocaleString",
    "large",
    "2600424urlmgM",
    "controller",
    "price",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-md-table-cell\x22><small>",
    "productos",
    "readonly",
    "show",
    "getAll",
    "className",
    "\x27);\x20})()\x22>Ver</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>",
    "onerror",
    "🔧\x20Error\x20500:\x20Problema\x20interno\x20del\x20servidor",
    "files",
    "productosConCodigos",
    "SKIP_WAITING",
    "\x20usos\x20mensuales",
    "\x20con\x20datos\x20disponibles)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "fillRect",
    "🔄\x20Probando\x20con\x20imagen\x20original...",
    "boundingBox",
    "AZTEC",
    "Finalizada\x20en\x20",
    ")\x20-\x20",
    "flexDirection",
    "shown.bs.modal",
    "getTracks",
    "list-group\x20position-absolute\x20w-100",
    "putImageData",
    "open",
    "clear",
    "promociones_ts",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "🔄\x20Backend\x20no\x20disponible,\x20usando\x20detección\x20local",
    "src",
    "❌\x20Error\x20en\x20",
    "codabar_reader",
    "details",
    "rejected",
    "get",
    "d-flex\x20flex-column\x20align-items-center\x20mb-3",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22row\x20align-items-center\x20justify-content-center\x20g-0\x20mb-4\x22\x20style=\x22padding:\x200px\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🌐\x20Google\x20Vision\x20API:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "innerHTML",
    "grid",
    "canUseAPI",
    "classList",
    "detalle",
    "Error\x20al\x20cargar\x20productos:",
    "precio_total",
    "⚠️\x20Consulta\x20parcial\x20de\x20endpoints",
    "touch",
    "keypress",
    "banco",
    "\x20→\x20",
    "CORS_ERROR:\x20Backend\x20no\x20accesible\x20desde\x20este\x20dominio",
    "totalVentas",
    "toISOString",
    "•\x20Diario:\x20",
    "🔄\x20Consultando\x20endpoint\x20con\x20códigos\x20de\x20barras...",
    "https://media.megaservicio.net",
    "storageKey",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Área\x20para\x20mostrar\x20resultados\x20del\x20diagnóstico\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22diagnostico-resultado\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Detección\x20de\x20Códigos\x20de\x20Barras:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20📷\x20<strong>Local:</strong>\x20Html5QrCode\x20+\x20BarcodeDetector\x20+\x20Quagga.js<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🌐\x20<strong>Premium:</strong>\x20Google\x20Vision\x20API\x20(para\x20códigos\x20difíciles)<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20🔄\x20<strong>Automático:</strong>\x20Fallback\x20inteligente\x20entre\x20métodos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>✅\x20Ventajas\x20del\x20backend:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Sin\x20límites\x20por\x20dispositivo<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Detección\x20superior\x20en\x20superficies\x20reflectivas<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Mejor\x20precisión\x20con\x20códigos\x20largos<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Funciona\x20con\x20imágenes\x20de\x20baja\x20calidad<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20•\x20Gestión\x20centralizada\x20de\x20recursos\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>🔄\x20Fallback\x20automático:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Si\x20el\x20backend\x20no\x20está\x20disponible,\x20la\x20app\x20usará\x20detección\x20local\x20automáticamente.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>💡\x20Recomendación:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mantén\x20activada\x20la\x20detección\x20avanzada\x20para\x20mejores\x20resultados.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x20=\x20",
    "detalles",
    "<div\x20class=\x22text-muted\x22\x20style=\x22font-size:2rem;\x22><i\x20class=\x22bi\x20bi-image\x22></i></div>",
    "\x20(redondeado)",
    "Cargando\x20promociones",
    "googleVisionConfig",
    "JsBarcode",
    "historial",
    "enabledCheck",
    "<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$",
    "Backend\x20error:\x20",
    "autoplay",
    "⚠️\x20Error\x20al\x20detectar\x20promociones\x20para\x20SKU\x20",
    "No\x20especificado",
    "CODE_39",
    "alert-warning",
    "7620620lNPjym",
    "promoción\x20oficial",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "continuous",
    "reporte-contenido",
    "isArray",
    "descripcion",
    "\x22\x20(",
    "pro_precioPromo",
    "<div\x20class=\x22text-center\x20text-muted\x22>Sin\x20resultados</div>",
    "Error\x20procesando\x20imagen:",
    "Error\x20verificando\x20datos\x20locales:",
    "cssText",
    "textContent",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20spinner-border-sm\x20me-2\x22\x20role=\x22status\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Diagnosticando\x20backend...\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "some",
    "</small>",
    "\x20longitud:\x20",
    "overflowY",
    "<br><br>📊\x20<strong>Uso\x20local:</strong>\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-success\x22>Total\x20con\x20Promo</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "📋\x20Detalles\x20completos:",
    "Error:\x20No\x20se\x20pudieron\x20encontrar\x20los\x20elementos\x20necesarios\x20en\x20la\x20página",
    "application/json",
    "x-large",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20class=\x22text-success\x22>🏷️\x20Productos\x20con\x20Promociones</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20text-white\x22>",
    "1055",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "lastUsedDate",
    "📏\x20Ampliando\x20imagen\x20pequeña:\x20",
    "Formato:",
    "Básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22small\x20text-secondary\x20ms-md-2\x20d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20<strong\x20class=\x22ms-1\x22>",
    "Error\x20consultando\x20producto\x20desde\x20modal:",
    "http",
    "ayuda",
    "body",
    "🔄\x20Consultando\x20endpoint\x20básico...",
    "backend_mejorado",
    "🔍\x20Código\x20candidato\x20encontrado:\x20",
    "38ckTXFN",
    "API_KEY_INVALID",
    "key",
    "🍎\x20Dispositivo\x20iOS:",
    "left",
    "https://verificadorb9-backend.vercel.app/api/promociones",
    "border-warning",
    "warn",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "🎯\x20Consultando\x20promociones\x20generales...",
    "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><small\x20class=\x22text-muted\x22>",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Cliente:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "resultado",
    "✅\x20Productos\x20cargados\x20con\x20códigos\x20de\x20barras:",
    "description",
    "removeAttribute",
    "overflow",
    "nombre_promocion",
    "data-form-type",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<br>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>🚫\x20Vision\x20API\x20No\x20Habilitada</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>La\x20Vision\x20API\x20no\x20está\x20habilitada\x20en\x20tu\x20proyecto</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><a\x20href=\x22https://console.cloud.google.com/apis/library/vision.googleapis.com\x22\x20target=\x22_blank\x22>Habilitar\x20Vision\x20API</a></small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20\x20\x20•\x20Problema\x20en\x20el\x20código\x20de\x20la\x20función\x20serverless",
    "or_nombreVendedor",
    "Productos:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-secondary\x20mt-2\x22\x20style=\x22font-size:0.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Códigos\x20disponibles:</strong>\x20",
    "Promoción\x20",
    "borderRadius",
    "Backend\x20error",
    "zIndex",
    "webkitOverflowScrolling",
    "🔄\x20Iniciando\x20detección\x20con\x20Quagga...",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x20consultar-historial-btn\x22\x20title=\x22Ver\x20detalles\x20completos\x22\x20data-sku=\x22",
    "fire",
    "relative",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-img-top\x20d-flex\x20align-items-center\x20justify-content-center\x20bg-secondary\x22\x20style=\x22height:\x2080px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-white\x22>📦</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-box-seam\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x20mb-0\x22>Productos\x20no\x20disponibles</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "ean_13",
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "now",
    "9237720kJjPRE",
    "fallbackTiempo",
    "async",
    "fileInput",
    "CODABAR",
    "cantidad",
    "\x22\x20style=\x22font-size:1.2rem;\x20color:#616161;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-clipboard\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x20fs-6\x20mb-1\x20mb-md-0\x20ms-md-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Precio:\x20$",
    "💻\x20Abriendo\x20modal\x20en\x20desktop...",
    "?stats=true",
    "getImageData",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><span\x20class=\x22badge\x20",
    "🆕\x20Nueva\x20versión\x20lista\x20para\x20usar",
    "history",
    "SKU\x20desconocido",
    "UPC_E",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==",
    "\x0a\x20\x20\x20\x20\x20\x20</div>",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "</span>",
    "📄\x20Nota\x20Crédito",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-center\x20align-items-center\x20gap-3\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-danger\x20precio-responsive\x22>$\x20",
    "formulario",
    ".alert-danger",
    "toFixed",
    "aztec",
    "✅\x20Código\x20detectado\x20(configuración\x20agresiva):",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Total\x20Normal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "type",
    "recordUsage",
    "✅\x20Google\x20Vision\x20detectó:",
    "⚠️\x20Error\x20con\x20endpoint\x20de\x20códigos\x20de\x20barras:",
    "📡\x20Enviando\x20a\x20backend\x20proxy...",
    "alternativa",
    "Algunos\x20endpoints\x20fallaron\x20(",
    "🔄\x20Sin\x20productos:\x20cargando\x20SOLO\x20productos",
    "modal-open",
    "...</p>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    ".modal-dialog",
    "d-none",
    "códigos\x20de\x20barras\x20❌\x20(CORS/Red)",
    "btnNextResultados",
    "reader",
    "200px",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>",
    "detalleVendedorModal",
    "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(",
    "upc_e_reader",
    "\x27)\x22\x20title=\x22Ver\x20detalles\x20completos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "6CXaqes",
    "❌\x20Error\x20con\x20Google\x20Vision,\x20usando\x20fallback:",
    "🏦\x20PROBLEMA:\x20Facturación\x20no\x20habilitada\x20en\x20el\x20proyecto\x20correcto",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Error</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20al\x20consultar\x20el\x20producto:\x20",
    "reason",
    "<ul\x20class=\x22list-group\x20list-group-flush\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "upc_reader",
    "backgroundColor",
    "EAN13",
    "\x0a\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "❌\x20Modal\x20no\x20encontrado",
    "muted",
    "🔑\x20PROBLEMA:\x20API\x20Key\x20inválida",
    "length",
    "\x20usos\x20hoy",
    "codeResult",
    "🔍\x20Buscando\x20promociones\x20para\x20SKU:",
    "\x20segundos",
    "function",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22alert-heading\x22>✅\x20Ticket\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Ticket:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code>",
    "getFullYear",
    "🔍\x20Iniciando\x20diagnóstico\x20del\x20backend...",
    "getAttribute",
    "Actualizar",
    "promociones\x20✅",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Vendedores</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-info\x22>",
    "list-group-item\x20list-group-item-action\x20d-flex\x20align-items-center",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-success\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Buscando...</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Buscando\x20ticket\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-link\x20btn-sm\x20ms-2\x20p-0\x20copiar-btn\x22\x20title=\x22Copiar\x20descripción\x22\x20data-copiar=\x22",
    "ITF",
    "code_128_reader",
    "\x20al\x20",
    "🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "data-copiar",
    "credit_card",
    "stringify",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h5>🏷️\x20No\x20se\x20encontraron\x20productos\x20con\x20promociones</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-0\x22>Puede\x20ser\x20que\x20no\x20haya\x20promociones\x20activas\x20en\x20este\x20momento\x20o\x20que\x20el\x20servicio\x20no\x20esté\x20disponible.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x22>",
    "bg-warning",
    ".copiar-btn",
    "mostrarModalPromocionesGenerales",
    "bg-secondary",
    "transfer",
    "Verifique\x20su\x20conexión\x20a\x20internet",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-primary\x22\x20style=\x22font-size:\x200.65rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SKU:\x20",
    "height",
    "insertBefore",
    "✅\x20Instalación\x20aceptada",
    "toDataURL",
    "<div\x20class=\x22text-center\x20text-muted\x20small\x22>…\x20y\x20",
    "📋\x20Cheque",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>(",
    "iconVista",
    "<span\x20class=\x22badge\x20bg-light\x20text-dark\x22>TOP</span>",
    "join",
    "⚠️\x20Solo\x20cantidad\x20extraída:",
    "installed",
    "pr_name",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x203rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mt-3\x22>ℹ️\x20Sin\x20promociones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20hay\x20promociones\x20locales\x20cargadas.\x20Pulsa\x20“Actualizar”\x20para\x20sincronizar.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "beforeend",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-search\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "view",
    "createImageData",
    "❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API",
    "pro_nombrePromo",
    "rawValue",
    "disconnect",
    "GET",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-warning\x20text-dark\x22>",
    "%\x20del\x20total</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22>",
    "top",
    "🎉\x20¡Google\x20Vision\x20API\x20funcionando\x20correctamente!",
    "revokeObjectURL",
    "🚀\x20Intentando\x20con\x20Google\x20Vision\x20API...",
    "target",
    "onupgradeneeded",
    "canvas",
    "slice",
    "⚙️\x20Configuración\x20de\x20detección\x20avanzada",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22font-size:\x200.6rem;\x20padding:\x201px\x204px;\x20border-radius:\x203px;\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Copiar\x20SKU\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20📋\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "error",
    "i2of5",
    "skus",
    "\x20d-lg-none\x22\x20style=\x22font-size:\x200.65rem;\x22>",
    "position",
    "2-digit",
    "PDF_417",
    "installing",
    "placeholder",
    "500",
    "start",
    "nearest",
    "data",
    "fill",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x20(quedan\x20",
    "location",
    "6376SOBNOq",
    "submit",
    "N/A",
    "onclick",
    "focus",
    "resetMonthlyUsage",
    "btnToggleVista",
    "contains",
    "Combo\x20Especial",
    "catch",
    "DATA_MATRIX",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x20mt-1\x22>$",
    "importe",
    "Consultando\x203\x20endpoints...",
    "totalProductos",
    "message",
    "blur",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>Promedio</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20w-100\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22mostrarDetalleVendedor(\x27",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-check-label\x22\x20for=\x22enabledCheck\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Activar\x20detección\x20avanzada\x20(Backend)</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Usa\x20servidor\x20dedicado\x20para\x20mejor\x20detección\x20de\x20códigos\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20",
    "promocionesGeneralesModal",
    "✅\x20Endpoint\x20promociones\x20consultado:\x20",
    "Error\x20al\x20copiar:",
    "🔄\x20Combinado",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ms-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-primary\x20btn-sm\x22\x20onclick=\x22(function(){\x20cerrarResultadosModal();\x20mostrarDetalleProductoBySKU(\x27",
    "clase",
    "Bootstrap\x20modal\x20no\x20activo",
    "credit_note_application",
    "✅\x20Endpoint\x20básico\x20consultado:",
    "bg-info",
    "<span\x20class=\x22badge\x20",
    "push",
    "remainingMonthly",
    "❌\x20Error\x20consultando\x20endpoints",
    "style",
    "qr_code",
    "margin",
    "📱\x20Abriendo\x20modal\x20en\x20dispositivo\x20móvil...",
    "setAttribute",
    "fixed",
    "query",
    "\x22\x20loading=\x22lazy\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20object-fit:\x20contain;\x20border-radius:\x208px;\x20background:\x20#f8f9fa;\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onerror=\x22this.style.display=\x27none\x27\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2060vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ticket</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Cliente</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Importe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22>Fecha</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Método</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Banco</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20",
    "saveUsage",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20de\x20",
    "\x20text-white\x20d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22\x20style=\x22font-size:\x200.9rem;\x20line-height:\x201.2;\x22>",
    "#ffffff",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22form-check\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22form-check-input\x22\x20type=\x22checkbox\x22\x20id=\x22enabledCheck\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20No\x20se\x20pudieron\x20obtener\x20estadísticas\x20de\x20códigos\x20de\x20barras",
    "Procesando\x20productos",
    "i2of5_reader",
    "transaction",
    "<li\x20class=\x22list-group-item\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-md-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "⚠️\x20Usando\x20solo\x20detección\x20local",
    "📸\x20Usando\x20Quagga\x20como\x20fallback",
    "bg-success\x20text-white",
    "PRECIO",
    "Iniciando...",
    "https://ticket-b9.vercel.app/api/ticket?ticketId=",
    "createElement",
    "findIndex",
    "reporteVentasModal",
    "básico\x20❌\x20(error\x20HTTP)",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Actualizado:</strong>\x20",
    "✅\x20Datos\x20del\x20ticket\x20recibidos\x20de:",
    "\x20-\x20",
    "precioTotal",
    "pro_precio_total",
    "💳\x20Tarjeta\x20Crédito",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Vendedor:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚠️\x20Límite\x20local\x20alcanzado.\x20Mensual:\x20",
    "code_32_reader",
    "pro_grupoProductos_primaria",
    "tipo",
    "statusText",
    "bg-primary",
    "value",
    "❌\x20Código\x20no\x20encontrado:\x20\x22",
    "\x22\x20class=\x22card-img-top\x22\x20alt=\x22",
    "<div\x20class=\x22row\x22>",
    "bg-danger",
    "register",
    "block",
    "querySelector",
    ".modal-backdrop",
    "autocomplete",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$",
    ".copiar-sku-btn",
    "input",
    "monthlyCount",
    "\x20\x20\x20•\x20Variable\x20GOOGLE_VISION_API_KEY\x20no\x20configurada\x20en\x20Vercel",
    "✅\x20Código\x20válido\x20seleccionado:\x20",
    "diagnostic",
    "\x0a\x20\x20",
    "🏦\x20Error\x20de\x20facturación:\x20Habilita\x20billing\x20en\x20Google\x20Cloud",
    "🔍\x20Buscando\x20ticket:",
    "round",
    "objectStoreNames",
    "mostrarModalConsultarTicket",
    "ean_8_reader",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "label[for=\x22fileInput\x22]",
    "checked",
    "❌\x20Error\x20al\x20registrar\x20SW:",
    "✅\x20Código\x20detectado\x20(configuración\x20principal):",
    "Error\x20HTTP:\x20",
    "📋\x20Promociones\x20(locales):",
    "cors",
    "all",
    "\x22\x20formato:\x20",
    "❌\x20Google\x20Vision\x20no\x20detectó\x20texto",
    "cash",
    "itf",
    "https://verificadorb9-backend.vercel.app/api/productos",
    "div",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-4\x20d-flex\x20justify-content-center\x20mb-3\x20mb-lg-0\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:#fff;\x20border-radius:16px;\x20box-shadow:0\x204px\x2024px\x20rgba(0,0,0,0.15);\x20padding:16px;\x20display:flex;\x20justify-content:center;\x20align-items:center;\x20width:240px;\x20height:140px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "\x0a\x20\x20<div\x20class=\x22modal\x22\x20id=\x22resultadosBusquedaModal\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22resultadosBusquedaModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22resultadosBusquedaModalLabel\x22>🔎\x20Resultados\x20de\x20Búsqueda</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20id=\x22resultados-busqueda-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x20d-flex\x20flex-wrap\x20gap-2\x20align-items-center\x20justify-content-between\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22pageSizeSelect\x22\x20class=\x22mb-0\x22>Mostrar:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22pageSizeSelect\x22\x20class=\x22form-select\x20form-select-sm\x22\x20style=\x22width:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22\x20selected>10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2220\x22>20</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2250\x22>50</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-success\x20btn-sm\x20d-flex\x20align-items-center\x20gap-1\x22\x20id=\x22btnToggleVista\x22\x20title=\x22Cambiar\x20vista\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-grid-3x3-gap\x22\x20id=\x22iconVista\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22labelVista\x22>Cuadros</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x22\x20id=\x22resultadosInfo\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x20flex-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnPrevResultados\x22>«\x20Anterior</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22pageIndicator\x22\x20class=\x22text-muted\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-secondary\x20btn-sm\x22\x20id=\x22btnNextResultados\x22>Siguiente\x20»</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22inputPageJump\x22\x20class=\x22form-control\x20form-control-sm\x22\x20style=\x22width:90px;\x22\x20min=\x221\x22\x20placeholder=\x22Ir\x20a...\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x20btn-sm\x22\x20id=\x22btnIrPagina\x22>Ir</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20onclick=\x22(function(){\x20try{\x20cerrarResultadosModal();\x20}catch(e){}\x20})()\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20p-2\x20text-center\x22\x20style=\x22background-color:#f8f9fa;\x20border-radius:8px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>ℹ️\x20Sin\x20promociones\x20activas</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "CODIGO",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>Por\x20favor\x20ingresa\x20un\x20código</div>",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>No\x20se\x20encontraron\x20resultados\x20para:\x20",
    "monthlyUsed",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-decoration-line-through\x20text-muted\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>$",
    "credit_note",
    "warningThreshold",
    "🔄\x20Service\x20Worker\x20actualizado",
    "🔍\x20Códigos\x20detectados\x20por\x20API\x20nativa:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20ingresa\x20un\x20número\x20de\x20ticket.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "script",
    "showUsageWarning",
    "EAN8",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20text-center\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>...\x20y\x20",
    "Consultando\x20los\x203\x20endpoints...",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20encontraron\x20ventas\x20para\x20el\x20mes\x20seleccionado.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "#f8f9fa",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "floor",
    "createObjectStore",
    "tickets",
    "sugerenciasDiv",
    "Error\x20generando\x20código\x20de\x20barras:",
    "usage",
    "then",
    "toString",
    "promociones:",
    "<br>•\x20🔍\x20<strong>Códigos\x20detectados:</strong>\x20",
    "100%",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "cookie",
    "center",
    "🔗\x20Probando\x20endpoint:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-success\x22>$",
    "precio\x20especial",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Resumen\x20del\x20Mes:\x20",
    "\x20me-1\x20mb-1\x22\x20style=\x22font-size:0.75rem;\x22>",
    "pro_cantidad_base",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-muted\x20small\x20ms-md-2\x22>Escaneado:\x20",
    "resultadoBusquedaTicket",
    "check",
    "status",
    "💾\x20Promociones\x20guardadas\x20en\x20IndexedDB",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>\x20\x20Total\x20SKUs:</strong>\x20",
    "match",
    "Nueva\x20versión\x20disponible.\x20¿Recargar\x20la\x20página?",
    "load",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20mb-0\x22>🏷️\x20",
    "preventDefault",
    "right",
    "\x22\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Vista:\x20",
    "resultadosInfo",
    "getUsageStatus",
    "SKU",
    "resultadosBusquedaModal",
    "?t=",
    "<br><br>🌐\x20<strong>Backend:</strong>\x20",
    "🔧\x20Error\x20500\x20detectado\x20-\x20Analizando\x20causa\x20específica:",
    "qty",
    "✅\x20Detección\x20avanzada\x20(backend)\x20configurada\x20y\x20activa",
    "installBtn",
    "pro_tipoPromo",
    "\x20tickets)</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "no-store",
    "reload",
    "40125LmNwPx",
    "getInstance",
    "<div\x20class=\x22alert\x20alert-info\x22\x20role=\x22alert\x22>Buscando\x20producto...</div>",
    "📊\x20Respuesta\x20del\x20backend:",
    "code_39_reader",
    "stop",
    "\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "toLocaleDateString",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20copiar-sku-btn\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-sku=\x22",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "code_128",
    "🧪\x20Respuesta\x20completa\x20vision-detect:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22card-text\x20text-muted\x20small\x22>",
    "readwrite",
    "⚠️\x20<strong>Límite\x20cerca:</strong>\x20",
    "❌\x20Error\x20guardando\x20promociones\x20en\x20IndexedDB:",
    ".modal-content",
    "requestSubmit",
    "\x20más</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "off",
    "monthlyLimit",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x20text-center\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "📝\x20Texto\x20completo\x20detectado:",
    "❌\x20Error\x20cargando\x20promociones:",
    "Promoción\x20especial",
    "readyState",
    "text",
    "\x0a\x20\x20\x20\x20\x20\x20",
    "3622493icvUaD",
    "<img\x20src=\x22",
    "log",
    "image/png",
    "validFrom",
    "Producto\x20desconocido",
    "removeChild",
    "📊\x20<strong>Uso\x20local\x20de\x20este\x20dispositivo:</strong><br>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "month",
    "codabar",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "<p\x20class=\x22text-muted\x20mb-0\x22>No\x20hay\x20productos\x20escaneados.</p>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20",
    "✅\x20Extraído\x20formato\x20con\x20peso\x20del\x20nombre:",
    "⚠️\x20<strong>Límite\x20diario\x20cerca:</strong>\x20",
    "test",
    "auto",
    "💰\x20Efectivo",
    "pr_sku",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error\x20de\x20conexión</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20No\x20se\x20pudo\x20conectar\x20con\x20el\x20servidor.<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "\x20producto",
    "bg-light\x20text-dark",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x22\x20style=\x22cursor:pointer;\x22\x20onclick=\x22mostrarProductoPromocion(\x27",
    "2847171afDPsn",
    "Generando\x20código\x20de\x20barras\x20",
    "border",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6>❌\x20Producto\x20no\x20encontrado</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20pudo\x20encontrar\x20el\x20producto\x20con\x20SKU:\x20",
    "fillStyle",
    "code_93",
    "or_total",
    "📊\x20Status\x20HTTP:",
    "❌\x20Error\x20cargando\x20configuración:",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>SKU:\x20",
    "activeElement",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Productos\x20básicos,\x20códigos\x20de\x20barras\x20y\x20promociones",
    "🔍\x20Validando:\x20\x22",
    "<small\x20class=\x22text-muted\x20d-block\x22><strong>Código:</strong>\x20",
    "min",
    "🏦\x20Transferencia",
    "\x20encontrados</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-success\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>⚠️\x20Las\x20promociones\x20solo\x20aplican\x20pagando\x20de\x20contado</strong></small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "find",
    "<div\x20class=\x22alert\x20alert-info\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>Mostrando\x20los\x20primeros\x2020\x20productos.\x20Hay\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-3\x20p-3\x20bg-light\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-primary\x20d-block\x22\x20style=\x22font-size:\x201.1rem;\x22>",
    "<span\x20class=\x22badge\x20bg-success\x20text-white\x20ms-2\x22\x20style=\x22font-size:0.7rem;\x22>🏷️\x20PROMO</span>",
    "UPC",
    ".modal-body",
    "btnReporteSpinner",
    "✅\x20Service\x20Worker\x20registrado:",
    "⚠️\x20BarcodeDetector\x20no\x20disponible\x20en\x20este\x20navegador",
    "https://contador-apicloudvision.vercel.app/api/stats",
    "labelVista",
    "fuente",
    "12px\x20Arial",
    "🚀\x20Iniciando\x20actualización\x20con\x20progreso...",
    "<small\x20class=\x22text-success\x22><strong>Precio\x20unitario:</strong>\x20$",
    "totalCodigos",
    "pro_mensaje",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20justify-content-end\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20id=\x22limpiarHistorialBtn\x22\x20class=\x22btn\x20btn-danger\x20btn-sm\x22>Limpiar\x20historial</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "),\x20",
    "</code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><strong>Total:</strong></small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fw-bold\x20text-success\x22>$",
    "códigos\x20de\x20barras\x20❌\x20(timeout/error)",
    "\x22\x20style=\x22width:60px;height:60px;object-fit:contain;border-radius:8px;background:#f8f9fa;\x22\x20onerror=\x22this.style.display=\x27none\x27\x22></div>",
    "codigos_barras",
    "❌\x20Error\x20con\x20API\x20nativa,\x20usando\x20fallback:",
    "<div\x20class=\x22alert\x20alert-danger\x22>🔧\x20Problema\x20de\x20CORS\x20-\x20verifica\x20configuración\x20de\x20headers</div>",
    "getRegistrations",
    "💳\x20Tarjeta\x20Débito",
    "userAgent",
    "onLine",
    "resultados_view",
    "split",
    "agresiva",
    "🎯\x20PROMOCIÓN\x20ENCONTRADA\x20para\x20SKU\x20",
    "cliente",
    "\x20promocion(es)\x20encontrada(s)\x20para\x20SKU:\x20",
    "es_oficial",
    "numeroTicket",
    "reduce",
    "responses",
    "forEach",
    "playsinline",
    "\x22\x20alt=\x22",
    "has",
    "promociones-container",
    "validTo",
    "querySelectorAll",
    "verificadorB9DB",
    "onchange",
    "\x20mensual,\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "Error\x20en\x20el\x20servidor\x20proxy",
    "<i\x20class=\x22bi\x20bi-clipboard-check\x22></i>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:\x200.9rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💰\x20Ahorras\x20$",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22detalleVendedorModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>📋\x20Detalle:\x20",
    "Error\x20cargando\x20promociones:",
    "observe",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex-grow-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "drawImage",
    "📱\x20Cerrando\x20modal\x20móvil...",
    "💡\x20Ve\x20a:\x20https://console.cloud.google.com/apis/library/vision.googleapis.com",
    "DOMContentLoaded",
    "spellcheck",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    ";\x20path=/",
    "PROMO",
    "primary",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22btn-vendedor-",
    "max",
    "POST",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20colspan=\x221\x22>",
    "name",
    "codigo",
    "postMessage",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22me-3\x22\x20style=\x22min-width:\x2060px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "⚠️\x20Usando\x20nombre\x20completo:",
    "<div\x20class=\x22col\x22>",
    "flex",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x20col-lg-4\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22text-muted\x22>-</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Sin\x20datos</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "keys",
    "📊\x20Resumen\x20endpoints\x20productos:",
    "cte_Nombre",
    "upc_a",
    "📊\x20Datos\x20extraídos\x20antes\x20de\x20procesamiento:",
    "add",
    "filter",
    "maxHeight",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-lg-8\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20nombre-producto-responsive\x22\x20style=\x22color:#616161;\x22>",
    "abs",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>CONTADO</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20mx-2\x22\x20style=\x22font-size:1.5rem;\x22>|</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x20precio-responsive\x22>$\x20",
    "applyConstraints",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>Total\x20Ventas</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-success\x22>",
    "#btnTexto",
    "disabled",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20•\x20<strong>Códigos\x20totales:</strong>\x20",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "innerWidth",
    "Fecha\x20desconocida",
    "💡\x20El\x20contador\x20del\x20backend\x20se\x20actualiza\x20automáticamente\x20en\x20el\x20servidor",
    "https://ticket-b9.vercel.app/api/proxy?ticketId=",
    "transparent",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20selecciona\x20un\x20mes\x20para\x20generar\x20el\x20reporte.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "orders",
    "splice",
    "resultados-busqueda-body",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "pr_gtin",
    "📱\x20Dispositivo\x20móvil:",
    "✅\x20Backend\x20activo.\x20Estadísticas:",
    "🔄\x20Primera\x20carga:\x20cargando\x20SOLO\x20productos\x20(promos\x20al\x20presionar\x20Actualizar)...",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22height:\x2080px;\x20object-fit:\x20contain;\x20padding:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x20text-truncate\x22\x20style=\x22font-size:\x200.7rem;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "FECHA_ESCANEO",
    "\x20/\x20",
    "success",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "consultarProductoDesdeHistorial",
    "valor_total",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "vendedorNombre",
    "🏷️\x20",
    "absolute",
    "button",
    "srcObject",
    "controllerchange",
    "data_matrix",
    "imageSmoothingEnabled",
    "QR_CODE",
    "appendChild",
    "\x22\x20style=\x22width:40px;\x20height:40px;\x20object-fit:cover;\x20border-radius:4px;\x20margin-right:12px;\x20background:#f8f9fa;\x22>",
    "code_39",
    "json",
    "🌐\x20<strong>Backend:</strong>\x20",
    "⚠️\x20Error\x20con\x20endpoint\x20básico:",
    "mesReporte",
    "trim",
    "unshift",
    "head",
    "isConfirmed",
    "%;\x20transition:\x20width\x200.3s\x20ease;\x22\x20aria-valuenow=\x22",
    "font",
    "%</small>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x22\x20style=\x22height:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-",
    "Productos:\x20nunca\x20|\x20Promociones:\x20",
    "smooth",
    "#000000",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>Backend:\x20https://contador-apicloudvision.vercel.app/</small><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-info\x20btn-sm\x22\x20onclick=\x22diagnosticarBackend()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔍\x20Probar\x20Conexión\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "✅\x20Configuración\x20guardada",
    "btn-success",
    "BILLING_DISABLED",
    "\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Ver\x20Detalle\x20Completo\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Enter",
    "es-MX",
    "objectStore",
    "display",
    "code_93_reader",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20h-100\x20border-success\x20shadow-sm\x20result-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22result-card-img\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "autocapitalize",
    "replace",
    "🔍\x20Actualizando\x20promociones\x20en\x20vista:",
    "Lista",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22text-success\x20fw-bold\x22>$",
    "getItem",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22promociones-container\x22\x20class=\x22mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small>🔍\x20Verificando\x20promociones...</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "beforeinstallprompt",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20p-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spinner-border\x20text-warning\x22\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22visually-hidden\x22>Cargando\x20promociones...</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mt-2\x22>Leyendo\x20promociones\x20y\x20productos\x20locales...</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "dailyUsed",
    "🔥\x20",
    "La\x20función\x20de\x20visualización\x20de\x20tickets\x20no\x20está\x20disponible.",
    "Página\x20",
    "items",
    "serviceWorker",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-semibold\x20text-truncate\x22\x20title=\x22",
    "credit",
    "diagnostico-resultado",
    "pointerEvents",
    "\x20comprando\x20",
    "CORS_ERROR",
    "sort",
    "EAN_13",
    "pageSize",
    "getContext",
    "Error\x20consultando\x20producto\x20desde\x20historial:",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20row-cols-2\x20row-cols-md-3\x20row-cols-lg-4\x20g-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "hidden.bs.modal",
    "loading",
    "pageIndicator",
    "💵\x20Crédito",
    "statechange",
    "upc_e",
    "❌\x20No\x20se\x20encontraron\x20códigos\x20válidos\x20en\x20el\x20texto",
    "PERMISSION_DENIED",
    "CORS",
    "códigos\x20de\x20barras\x20⚠️\x20(sin\x20datos)",
    "bg-success",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x20shadow-sm\x20mb-3\x20w-100\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20flex-column\x20flex-md-row\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Historial\x20de\x20productos\x20escaneados:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "none",
    "\x20promociones\x20(",
    "promociones-generales-modal-body",
    "parse",
    "\x20promociones",
    "setItem",
    "pdf417",
    "result",
    "alert-success",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>",
    "parentNode",
    "</code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22fw-medium\x22>",
    "getVideoTracks",
    "bg-dark",
    "🔄\x20Probando\x20configuración\x20alternativa...",
    "🔗\x20Ve\x20a:\x20https://console.cloud.google.com/billing",
    "Modal",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x20small\x22>Tickets</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x22>$",
    "Todos\x20los\x20endpoints\x20fallaron\x20(",
    "✅\x20Tercera\x20tentativa\x20exitosa:",
    "\x20diario<br>🌐\x20<strong>Backend:</strong>\x20Verificando...",
    "btnIrPagina",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22h4\x20text-primary\x22>$",
    "pr_precio",
    "https://contador-apicloudvision.vercel.app/api/vision-detect",
    "verTicketCompleto",
    "onsuccess",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x20mb-3\x20p-2\x20border\x20rounded\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20\x20\x20•\x20API\x20Key\x20inválida\x20o\x20límites\x20excedidos",
    "🚀\x20Usando\x20Barcode\x20Detection\x20API\x20nativa",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>TOTAL</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "autocorrect",
    "format",
    "scope",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-top\x20pt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-center\x20mb-3\x22>�\x20Métodos\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Google\x20Vision\x20API\x20activa\x20y\x20funcional",
    "es-CL",
    "remove",
    "Fallo\x20al\x20cargar\x20productos\x20iniciales",
    "ultimaActualizacion",
    "Timeout",
    "ean_8",
    "Failed\x20to\x20fetch",
    "remainingDaily",
    "💡\x20Verifica\x20que\x20el\x20proyecto\x20#1070150612422\x20tenga\x20facturación\x20activa",
    "Ingresa\x20SKU\x20o\x20busca\x20un\x20producto",
    "Nunca\x20actualizado",
    "other",
    "</div>",
    "video",
    "map",
    "2\x20endpoints\x20completados,\x20finalizando...",
    "<div\x20class=\x22alert\x20alert-danger\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20<strong>⚠️\x20No\x20se\x20detectó\x20código\x20válido</strong><br>\x0a\x20\x20\x20\x20\x20\x20Para\x20códigos\x20largos\x20como\x20este,\x20intenta:<br>\x0a\x20\x20\x20\x20\x20\x20•\x20📏\x20<strong>Recortar\x20muy\x20cerca\x20del\x20código</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20💡\x20<strong>Mejor\x20iluminación\x20uniforme</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20📱\x20<strong>Evitar\x20superficies\x20reflectivas</strong><br>\x0a\x20\x20\x20\x20\x20\x20•\x20🔍\x20<strong>Imagen\x20más\x20nítida\x20y\x20estable</strong>",
    "Error\x20verificando\x20promociones:",
    "nombre",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22>",
    "precio",
    "<div\x20class=\x22alert\x20alert-danger\x22>❓\x20Error\x20desconocido\x20en\x20Google\x20Vision\x20API</div>",
    "\x20<span\x20class=\x22badge\x20bg-success\x22\x20style=\x22font-size:0.7rem;\x22>PROMO</span>",
    "#mensajeActualizacion",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "❌\x20Sin\x20datos,\x20usando\x20genérico",
    "btnReporteTexto",
    "productosBasicos",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x20ms-2\x22>1\x20unidad</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22><strong>SKU:</strong>\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "code",
    "inputPageJump",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-muted\x22\x20style=\x22font-size:0.8rem;\x20margin-top:-2px;\x22>MSI</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Código\x20de\x20barras\x20funcional\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mt-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22barcode-",
    "ceil",
    "environment",
    ";\x20expires=",
    "💡\x20Verifica\x20la\x20configuración\x20de\x20GOOGLE_VISION_API_KEY\x20en\x20Vercel",
    "enabled",
    ".modal-backdrop,\x20.modal-backdrop-mobile",
    "📊\x20Datos\x20finales\x20para\x20construcción:",
    "\x20productos\x20(",
    "\x22\x20onerror=\x22this.onerror=null;\x20this.style.display=\x27none\x27;\x20this.parentElement.innerHTML=\x27<div\x20class=\x5c\x27text-muted\x5c\x27\x20style=\x5c\x27font-size:2rem;\x5c\x27><i\x20class=\x5c\x27bi\x20bi-image\x5c\x27></i></div>\x27;\x22>",
    "data-sku",
    "Descargando\x20desde\x20múltiples\x20endpoints...",
  ];
  _0x3902 = function () {
    return _0x230cf7;
  };
  return _0x3902();
}
function configurarFileInput() {
  const _0x5b03bb = _0x406c10,
    _0x4f8b18 = document["getElementById"](_0x5b03bb(0x1fa)),
    _0x58cd49 = document["querySelector"](_0x5b03bb(0x2f3));
  _0x4f8b18 &&
    _0x58cd49 &&
    ((_0x4f8b18["style"][_0x5b03bb(0x1b1)] = _0x5b03bb(0x50e)),
    _0x58cd49[_0x5b03bb(0x50d)](
      _0x5b03bb(0x4a8),
      function (_0x5c6ae9) {
        const _0x4dc256 = _0x5b03bb;
        _0x5c6ae9[_0x4dc256(0x337)](),
          _0x5c6ae9[_0x4dc256(0x4ef)](),
          _0x4f8b18[_0x4dc256(0x4a8)]();
      },
      { capture: !![], passive: ![] }
    ),
    console["log"](_0x5b03bb(0x4fd)));
}
document[_0x406c10(0x361)] === _0x406c10(0x447)
  ? document["addEventListener"](_0x406c10(0x3cb), configurarFileInput)
  : configurarFileInput();
