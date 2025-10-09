const _0x3466ad = _0x9707;
(function (_0x265012, _0xc897b9) {
  const _0x45dab4 = _0x9707,
    _0x58be08 = _0x265012();
  while (!![]) {
    try {
      const _0x3bee24 =
        -parseInt(_0x45dab4(0x260)) / 0x1 +
        (parseInt(_0x45dab4(0x25f)) / 0x2) *
          (parseInt(_0x45dab4(0x136)) / 0x3) +
        (-parseInt(_0x45dab4(0x1d0)) / 0x4) *
          (parseInt(_0x45dab4(0x208)) / 0x5) +
        parseInt(_0x45dab4(0x1dc)) / 0x6 +
        (-parseInt(_0x45dab4(0x20c)) / 0x7) *
          (-parseInt(_0x45dab4(0x23e)) / 0x8) +
        -parseInt(_0x45dab4(0x1a2)) / 0x9 +
        (-parseInt(_0x45dab4(0x161)) / 0xa) *
          (-parseInt(_0x45dab4(0x213)) / 0xb);
      if (_0x3bee24 === _0xc897b9) break;
      else _0x58be08["push"](_0x58be08["shift"]());
    } catch (_0x899f56) {
      _0x58be08["push"](_0x58be08["shift"]());
    }
  }
})(_0x4e74, 0xddf61);
let valoresDesbloqueados = ![];
const PASSWORD_CORRECTA = _0x3466ad(0x152);
function censurarValor(_0x2aa8d6) {
  const _0x1a83f8 = _0x3466ad;
  if (valoresDesbloqueados)
    return _0x2aa8d6[_0x1a83f8(0x25b)](_0x1a83f8(0x14a), {
      minimumFractionDigits: 0x2,
    });
  return _0x1a83f8(0x293);
}
function mostrarModalPassword() {
  const _0x11326f = _0x3466ad,
    _0x2c8d96 = document[_0x11326f(0x17a)]("modalPassword");
  if (!_0x2c8d96) {
    alert(_0x11326f(0x195));
    return;
  }
  const _0x40547c = document[_0x11326f(0x17a)](_0x11326f(0x24e)),
    _0x44f553 = document[_0x11326f(0x17a)](_0x11326f(0x143));
  _0x40547c && (_0x40547c["value"] = "");
  _0x44f553 &&
    (_0x44f553[_0x11326f(0x263)][_0x11326f(0x28c)] = _0x11326f(0x1cf));
  const _0x2d4cf4 = new bootstrap[_0x11326f(0x237)](_0x2c8d96);
  _0x2d4cf4[_0x11326f(0x17e)](),
    setTimeout(() => {
      const _0x5aa05f = _0x11326f;
      _0x40547c && _0x40547c[_0x5aa05f(0x1f4)]();
    }, 0x1f4);
}
function verificarPassword() {
  const _0x1d39db = _0x3466ad,
    _0x4047e0 = document[_0x1d39db(0x17a)]("passwordInput"),
    _0x5644b6 = document["getElementById"](_0x1d39db(0x143));
  if (_0x4047e0[_0x1d39db(0x19e)] === PASSWORD_CORRECTA) {
    valoresDesbloqueados = !![];
    const _0x5c2918 = bootstrap["Modal"][_0x1d39db(0x1ba)](
      document[_0x1d39db(0x17a)](_0x1d39db(0x1ae))
    );
    _0x5c2918 && _0x5c2918[_0x1d39db(0x24a)](),
      actualizarValoresMostrados(),
      actualizarBotonToggle();
  } else
    _0x5644b6[_0x1d39db(0x26f)][_0x1d39db(0x29c)]("d-none"),
      (_0x4047e0[_0x1d39db(0x19e)] = ""),
      _0x4047e0[_0x1d39db(0x1f4)]();
}
function actualizarValoresMostrados() {
  const _0x1862d7 = _0x3466ad,
    _0x46f4e9 = document[_0x1862d7(0x17a)](_0x1862d7(0x16d));
  if (_0x46f4e9 && _0x46f4e9[_0x1862d7(0x262)][_0x1862d7(0x275)]() !== "") {
    const _0x15da71 = document[_0x1862d7(0x17a)](_0x1862d7(0x240));
    _0x15da71 && _0x15da71[_0x1862d7(0x19e)] && generarReporteVentas();
  }
}
function bloquearValores() {
  (valoresDesbloqueados = ![]),
    actualizarValoresMostrados(),
    actualizarBotonToggle();
}
function toggleValores() {
  valoresDesbloqueados ? bloquearValores() : mostrarModalPassword();
}
function actualizarBotonToggle() {
  const _0x355d0d = _0x3466ad,
    _0x2bbf00 = document[_0x355d0d(0x17a)](_0x355d0d(0x232));
  _0x2bbf00 &&
    (valoresDesbloqueados
      ? ((_0x2bbf00[_0x355d0d(0x262)] = _0x355d0d(0x148)),
        (_0x2bbf00[_0x355d0d(0x22a)] = "Bloquear\x20valores\x20monetarios"),
        (_0x2bbf00["className"] = _0x355d0d(0x215)))
      : ((_0x2bbf00[_0x355d0d(0x262)] = _0x355d0d(0x15b)),
        (_0x2bbf00[_0x355d0d(0x22a)] = _0x355d0d(0x1a5)),
        (_0x2bbf00["className"] = _0x355d0d(0x253))));
}
function getMetodoPagoInfo(_0x592812) {
  const _0x1cb550 = _0x3466ad,
    _0x17ce32 = (_0x592812 || "")[_0x1cb550(0x1ed)]()[_0x1cb550(0x275)]();
  if (_0x17ce32["includes"]("cash") || _0x17ce32 === _0x1cb550(0x1ce))
    return { nombre: _0x1cb550(0x21f), clase: _0x1cb550(0x23b) };
  else {
    if (
      _0x17ce32[_0x1cb550(0x23f)]("credit_card") ||
      _0x17ce32 === _0x1cb550(0x1e7)
    )
      return { nombre: _0x1cb550(0x290), clase: _0x1cb550(0x1ad) };
    else {
      if (
        _0x17ce32[_0x1cb550(0x23f)](_0x1cb550(0x193)) ||
        _0x17ce32 === "debit_card"
      )
        return { nombre: _0x1cb550(0x17b), clase: _0x1cb550(0x225) };
      else {
        if (
          _0x17ce32[_0x1cb550(0x23f)](_0x1cb550(0x13e)) ||
          _0x17ce32 === "transfer"
        )
          return { nombre: "🏦\x20Transferencia", clase: "bg-secondary" };
        else {
          if (
            _0x17ce32["includes"](_0x1cb550(0x21d)) ||
            _0x17ce32 === "credit_note_application"
          )
            return { nombre: _0x1cb550(0x1b7), clase: "bg-warning" };
          else {
            if (
              _0x17ce32[_0x1cb550(0x23f)](_0x1cb550(0x1fe)) ||
              _0x17ce32 === _0x1cb550(0x1fe)
            )
              return { nombre: "📋\x20Cheque", clase: _0x1cb550(0x27d) };
            else {
              if (
                _0x17ce32[_0x1cb550(0x23f)]("credit") &&
                !_0x17ce32[_0x1cb550(0x23f)](_0x1cb550(0x1bf))
              )
                return { nombre: _0x1cb550(0x137), clase: _0x1cb550(0x204) };
              else
                return _0x17ce32[_0x1cb550(0x23f)](",") ||
                  _0x17ce32[_0x1cb550(0x23f)]("\x20")
                  ? { nombre: "🔄\x20Combinado", clase: "bg-gradient" }
                  : { nombre: "❓\x20Otro", clase: "bg-light\x20text-dark" };
            }
          }
        }
      }
    }
  }
}
function mostrarModalReporteVentas() {
  const _0x2230a2 = _0x3466ad,
    _0x5393de = document["getElementById"](_0x2230a2(0x252));
  if (_0x5393de) {
    const _0x274f75 = document[_0x2230a2(0x17a)](_0x2230a2(0x240));
    if (_0x274f75 && !_0x274f75["value"]) {
      const _0x2c1276 = new Date(),
        _0x3f1826 = _0x2c1276[_0x2230a2(0x21a)](),
        _0x141ecd = (_0x2c1276[_0x2230a2(0x210)]() + 0x1)
          [_0x2230a2(0x176)]()
          [_0x2230a2(0x27c)](0x2, "0");
      _0x274f75[_0x2230a2(0x19e)] = _0x3f1826 + "-" + _0x141ecd;
    }
    const _0x4b5b88 = new bootstrap[_0x2230a2(0x237)](_0x5393de);
    _0x4b5b88["show"]();
  }
}
function cerrarModalReporteVentas() {
  const _0x42da5c = _0x3466ad,
    _0x17fcd8 = document[_0x42da5c(0x17a)](_0x42da5c(0x252));
  if (_0x17fcd8) {
    const _0x45c97d = bootstrap["Modal"][_0x42da5c(0x1ba)](_0x17fcd8);
    _0x45c97d && _0x45c97d[_0x42da5c(0x24a)]();
  }
}
async function generarReporteVentas() {
  const _0x577a27 = _0x3466ad,
    _0x42519d = document[_0x577a27(0x17a)]("mesReporte")[_0x577a27(0x19e)],
    _0x1f9ab0 = document[_0x577a27(0x17a)]("reporte-contenido"),
    _0x3040e3 = document[_0x577a27(0x17a)]("btnReporteTexto"),
    _0x125e76 = document[_0x577a27(0x17a)](_0x577a27(0x258));
  if (!_0x42519d) {
    _0x1f9ab0[_0x577a27(0x262)] =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20selecciona\x20un\x20mes\x20para\x20generar\x20el\x20reporte.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20";
    return;
  }
  const _0x51ad30 = 0x1,
    _0x48bea2 = _0x42519d + _0x577a27(0x23c),
    _0x88c77c = _0x42519d + _0x577a27(0x1d2);
  (_0x3040e3[_0x577a27(0x1b3)] = _0x577a27(0x1f6)),
    _0x125e76[_0x577a27(0x26f)][_0x577a27(0x29c)]("d-none");
  try {
    const _0x3c06ae = _0x577a27(0x211) + _0x42519d,
      _0xf0b5e3 = await fetch(_0x3c06ae);
    if (!_0xf0b5e3["ok"])
      throw new Error(
        _0x577a27(0x179) +
          _0xf0b5e3[_0x577a27(0x15d)] +
          "\x20" +
          _0xf0b5e3[_0x577a27(0x170)]
      );
    const _0xf6a476 = await _0xf0b5e3["json"]();
    if (_0xf6a476["status"] !== _0x577a27(0x150))
      throw new Error(_0x577a27(0x1b9));
    const _0x4b8150 = _0xf6a476[_0x577a27(0x151)]["report"] || [],
      _0x47ce0d = _0xf6a476[_0x577a27(0x151)][_0x577a27(0x13c)],
      _0x2c4645 = _0x4b8150[_0x577a27(0x20e)],
      _0x32d4e9 = new Map();
    _0x4b8150[_0x577a27(0x218)]((_0x1e1dcc) => {
      const _0x3b03b5 = _0x577a27,
        _0x53b1fb = _0x1e1dcc[_0x3b03b5(0x257)] || _0x3b03b5(0x281),
        _0x5b159d = parseFloat(_0x1e1dcc["Importe"]) || 0x0;
      !_0x32d4e9[_0x3b03b5(0x174)](_0x53b1fb) &&
        _0x32d4e9["set"](_0x53b1fb, {
          nombre: _0x53b1fb,
          totalVentas: 0x0,
          cantidadTickets: 0x0,
          tickets: [],
        });
      const _0x286066 = _0x32d4e9[_0x3b03b5(0x138)](_0x53b1fb);
      (_0x286066[_0x3b03b5(0x295)] += _0x5b159d),
        _0x286066[_0x3b03b5(0x276)]++,
        _0x286066[_0x3b03b5(0x29a)][_0x3b03b5(0x1c2)](_0x1e1dcc);
    });
    const _0x30008a = Array[_0x577a27(0x22d)](_0x32d4e9["values"]())[
        _0x577a27(0x13f)
      ](
        (_0x1b7bbc, _0x30e602) =>
          _0x30e602["totalVentas"] - _0x1b7bbc["totalVentas"]
      ),
      _0x7794f6 = _0x30008a[_0x577a27(0x20e)];
    (window[_0x577a27(0x236)] = _0x30008a),
      (window[_0x577a27(0x186)] = _0x4b8150);
    let _0x3d99fe = {
      credit_card: { total: 0x0, cantidad: 0x0 },
      cash: { total: 0x0, cantidad: 0x0 },
      debit_card: { total: 0x0, cantidad: 0x0 },
      credit_note_application: { total: 0x0, cantidad: 0x0 },
      transfer: { total: 0x0, cantidad: 0x0 },
      check: { total: 0x0, cantidad: 0x0 },
      credit: { total: 0x0, cantidad: 0x0 },
      mixed: { total: 0x0, cantidad: 0x0 },
    };
    _0x4b8150[_0x577a27(0x218)]((_0xba4a30) => {
      const _0x11f4ea = _0x577a27,
        _0x1275b9 = (_0xba4a30[_0x11f4ea(0x199)] || "")[_0x11f4ea(0x275)](),
        _0x385b12 = parseFloat(_0xba4a30[_0x11f4ea(0x18d)]) || 0x0;
      if (_0x1275b9[_0x11f4ea(0x23f)](",")) {
        const _0x1e0d41 = _0x1275b9[_0x11f4ea(0x14d)](",")[_0x11f4ea(0x14c)](
            (_0x3e58ef) => _0x3e58ef["trim"]()
          ),
          _0x5bc596 = (_0xba4a30[_0x11f4ea(0x298)] || "")
            [_0x11f4ea(0x14d)](",")
            [_0x11f4ea(0x14c)](
              (_0x589a66) => parseFloat(_0x589a66[_0x11f4ea(0x275)]()) || 0x0
            );
        _0x1e0d41["forEach"]((_0x15d7bf, _0x112d3a) => {
          const _0x154749 = _0x11f4ea,
            _0x4e377b = _0x5bc596[_0x112d3a] || 0x0;
          _0x3d99fe[_0x15d7bf]
            ? ((_0x3d99fe[_0x15d7bf][_0x154749(0x13c)] += _0x4e377b),
              (_0x3d99fe[_0x15d7bf][_0x154749(0x25e)] += 0x1))
            : ((_0x3d99fe["mixed"][_0x154749(0x13c)] += _0x4e377b),
              (_0x3d99fe["mixed"][_0x154749(0x25e)] += 0x1));
        });
      } else
        _0x3d99fe[_0x1275b9]
          ? ((_0x3d99fe[_0x1275b9][_0x11f4ea(0x13c)] += _0x385b12),
            (_0x3d99fe[_0x1275b9]["cantidad"] += 0x1))
          : ((_0x3d99fe[_0x11f4ea(0x1de)][_0x11f4ea(0x13c)] += _0x385b12),
            (_0x3d99fe[_0x11f4ea(0x1de)]["cantidad"] += 0x1));
    });
    if (_0x30008a["length"] === 0x0) {
      _0x1f9ab0[_0x577a27(0x262)] = _0x577a27(0x1f8);
      return;
    }
    const _0x92196 = {
      credit_card: _0x577a27(0x290),
      cash: "💰\x20Efectivo",
      debit_card: "💳\x20Tarjeta\x20Débito",
      credit_note_application: "📄\x20Nota\x20Crédito",
      transfer: _0x577a27(0x23d),
      check: _0x577a27(0x251),
      credit: "💵\x20Crédito",
      mixed: _0x577a27(0x279),
    };
    let _0x46a051 = "";
    _0x3d99fe &&
      Object[_0x577a27(0x1cd)](_0x3d99fe)[_0x577a27(0x218)]((_0x14f8c4) => {
        const _0x43eefd = _0x577a27,
          _0x1122dd = _0x3d99fe[_0x14f8c4];
        _0x1122dd[_0x43eefd(0x13c)] > 0x0 &&
          (_0x46a051 +=
            _0x43eefd(0x29d) +
            censurarValor(_0x1122dd[_0x43eefd(0x13c)]) +
            _0x43eefd(0x1a3) +
            (_0x92196[_0x14f8c4] || _0x14f8c4) +
            "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>(" +
            Math[_0x43eefd(0x243)](_0x1122dd[_0x43eefd(0x25e)]) +
            _0x43eefd(0x1bc));
      });
    let _0x35b38c =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Resumen\x20del\x20Mes:\x20" +
      _0x42519d +
      _0x577a27(0x1e4) +
      censurarValor(Math[_0x577a27(0x243)](_0x47ce0d * 0x64) / 0x64) +
      "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Ventas</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-primary\x20mb-0\x22>" +
      _0x7794f6 +
      "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Vendedores</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-info\x20mb-0\x22>" +
      _0x2c4645 +
      _0x577a27(0x1c4) +
      (_0x46a051
        ? _0x577a27(0x20d) +
          _0x46a051 +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"
        : "") +
      _0x577a27(0x282) +
      _0x30008a[_0x577a27(0x20e)] +
      _0x577a27(0x231);
    _0x30008a[_0x577a27(0x218)]((_0x85dadf, _0x49ec2c) => {
      const _0x4a176e = _0x577a27,
        _0x35a0cd = censurarValor(_0x85dadf[_0x4a176e(0x295)]);
      _0x35b38c +=
        _0x4a176e(0x242) +
        _0x85dadf[_0x4a176e(0x19d)] +
        _0x4a176e(0x178) +
        _0x85dadf[_0x4a176e(0x19d)] +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x22>$" +
        _0x35a0cd +
        _0x4a176e(0x19c) +
        _0x85dadf[_0x4a176e(0x276)] +
        _0x4a176e(0x194) +
        ((_0x85dadf[_0x4a176e(0x295)] /
          (Math[_0x4a176e(0x243)](_0x47ce0d * 0x64) / 0x64)) *
          0x64)["toFixed"](0x1) +
        "%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        ((_0x85dadf[_0x4a176e(0x295)] /
          (Math[_0x4a176e(0x243)](_0x47ce0d * 0x64) / 0x64)) *
          0x64)[_0x4a176e(0x157)](0x1) +
        "%\x20del\x20total\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20w-100\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22mostrarDetalleVendedor(\x27" +
        _0x85dadf[_0x4a176e(0x19d)] +
        _0x4a176e(0x1f7) +
        _0x49ec2c +
        _0x4a176e(0x200) +
        _0x49ec2c +
        _0x4a176e(0x1cb);
    }),
      (_0x35b38c += _0x577a27(0x16a)),
      (_0x1f9ab0[_0x577a27(0x262)] = _0x35b38c),
      setTimeout(() => {
        const _0x3a727a = _0x577a27,
          _0x473839 = document[_0x3a727a(0x17a)]("passwordInput");
        _0x473839 &&
          _0x473839["addEventListener"]("keypress", function (_0x6ff82e) {
            _0x6ff82e["key"] === "Enter" && verificarPassword();
          });
      }, 0x64),
      generarGraficos(_0x3d99fe, _0x30008a),
      setTimeout(() => {
        actualizarBotonToggle();
      }, 0xc8);
  } catch (_0x22e8ca) {
    _0x1f9ab0[_0x577a27(0x262)] =
      _0x577a27(0x153) + _0x22e8ca[_0x577a27(0x292)] + _0x577a27(0x26c);
  } finally {
    (_0x3040e3[_0x577a27(0x1b3)] = "Generar\x20Reporte"),
      _0x125e76[_0x577a27(0x26f)]["add"]("d-none");
  }
}
function mostrarDetalleVendedor(_0x4a8c79, _0x2dc929) {
  const _0x457227 = _0x3466ad,
    _0x1634d3 = window[_0x457227(0x236)] || [],
    _0x2ec657 = _0x1634d3[_0x2dc929];
  if (!_0x2ec657 || !_0x2ec657[_0x457227(0x29a)]) {
    alert("No\x20se\x20encontraron\x20datos\x20del\x20vendedor");
    return;
  }
  const _0x20266b = _0x2ec657[_0x457227(0x29a)];
  let _0x1ab098 = _0x457227(0x1b1) + _0x4a8c79 + _0x457227(0x241);
  function _0x59415e(_0x440b9a, _0xbf8546 = _0x457227(0x20a)) {
    const _0x46e1de = _0x457227;
    let _0x489960 = _0x440b9a;
    _0xbf8546 !== "todos" &&
      (_0x489960 = _0x440b9a["filter"]((_0x2bb953) => {
        const _0x5c4fe5 = _0x9707,
          _0x1b0740 = (_0x2bb953["Metodo_pago"] || "")
            ["toLowerCase"]()
            [_0x5c4fe5(0x275)]();
        if (_0xbf8546 === "combinado")
          return (
            _0x1b0740[_0x5c4fe5(0x23f)](",") ||
            _0x1b0740[_0x5c4fe5(0x23f)]("\x20")
          );
        return _0x1b0740[_0x5c4fe5(0x23f)](_0xbf8546);
      }));
    let _0x27eeda = "";
    return (
      _0x489960[_0x46e1de(0x218)]((_0x578c7b) => {
        const _0x328033 = _0x46e1de,
          _0x240067 = getMetodoPagoInfo(_0x578c7b[_0x328033(0x199)]),
          _0x147457 = new Date(_0x578c7b[_0x328033(0x1a7)])[_0x328033(0x27a)](
            _0x328033(0x14a),
            {
              day: "2-digit",
              month: _0x328033(0x226),
              hour: "2-digit",
              minute: _0x328033(0x226),
            }
          );
        _0x27eeda +=
          _0x328033(0x250) +
          _0x578c7b["Ticket"] +
          "</code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>" +
          _0x147457 +
          _0x328033(0x26d) +
          _0x240067["clase"] +
          _0x328033(0x1fd) +
          _0x240067[_0x328033(0x19d)] +
          _0x328033(0x177) +
          (_0x578c7b[_0x328033(0x183)] && _0x578c7b[_0x328033(0x183)] !== "-"
            ? _0x328033(0x1aa) + _0x578c7b["mpo_banco"] + _0x328033(0x146)
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>" +
          _0x578c7b[_0x328033(0x14b)] +
          _0x328033(0x1ca) +
          censurarValor(parseFloat(_0x578c7b[_0x328033(0x18d)])) +
          _0x328033(0x1e3) +
          _0x147457 +
          _0x328033(0x1d1) +
          _0x240067["clase"] +
          _0x328033(0x27f) +
          _0x240067[_0x328033(0x19d)] +
          "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><small\x20class=\x22text-muted\x22>" +
          (_0x578c7b[_0x328033(0x183)] || "-") +
          "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-info\x20btn-sm\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22verTicket(\x27" +
          _0x578c7b[_0x328033(0x19f)] +
          _0x328033(0x27b);
      }),
      { filasHTML: _0x27eeda, ticketsFiltrados: _0x489960 }
    );
  }
  const { filasHTML: _0x16ea77, ticketsFiltrados: _0xc211b3 } =
    _0x59415e(_0x20266b);
  _0x1ab098 += _0x16ea77;
  const _0x4479df = _0x20266b["reduce"](
    (_0xfa4c0d, _0x43cc22) =>
      _0xfa4c0d + parseFloat(_0x43cc22[_0x457227(0x18d)]),
    0x0
  );
  (_0x1ab098 +=
    _0x457227(0x248) +
    censurarValor(_0x4479df) +
    _0x457227(0x1ef) +
    _0x20266b["length"] +
    _0x457227(0x239) +
    _0x20266b[_0x457227(0x20e)] +
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20"),
    document[_0x457227(0x18e)][_0x457227(0x214)](_0x457227(0x180), _0x1ab098),
    (window[_0x457227(0x24f)] = function () {
      const _0x30697e = _0x457227,
        _0x7ad9d2 = document["getElementById"]("ordenarPor")[_0x30697e(0x19e)],
        _0x9c5aee = document[_0x30697e(0x17a)](_0x30697e(0x1e9))["value"];
      let _0x2000e9 = [..._0x20266b];
      _0x9c5aee !== "todos" &&
        (_0x2000e9 = _0x20266b[_0x30697e(0x229)]((_0x3b902e) => {
          const _0x2761ad = _0x30697e,
            _0x350eab = (_0x3b902e[_0x2761ad(0x199)] || "")
              [_0x2761ad(0x1ed)]()
              [_0x2761ad(0x275)]();
          if (_0x9c5aee === "combinado")
            return (
              _0x350eab[_0x2761ad(0x23f)](",") ||
              _0x350eab[_0x2761ad(0x23f)]("\x20")
            );
          return _0x350eab["includes"](_0x9c5aee);
        }));
      switch (_0x7ad9d2) {
        case "fecha-desc":
          _0x2000e9["sort"](
            (_0x53eca9, _0x3a87ef) =>
              new Date(_0x3a87ef[_0x30697e(0x1a7)]) -
              new Date(_0x53eca9[_0x30697e(0x1a7)])
          );
          break;
        case _0x30697e(0x267):
          _0x2000e9["sort"](
            (_0x492519, _0x5569b5) =>
              new Date(_0x492519[_0x30697e(0x1a7)]) -
              new Date(_0x5569b5[_0x30697e(0x1a7)])
          );
          break;
        case "importe-desc":
          _0x2000e9[_0x30697e(0x13f)](
            (_0x2d2721, _0x3f39cd) =>
              parseFloat(_0x3f39cd[_0x30697e(0x18d)]) -
              parseFloat(_0x2d2721[_0x30697e(0x18d)])
          );
          break;
        case _0x30697e(0x173):
          _0x2000e9[_0x30697e(0x13f)](
            (_0x536421, _0x259f4b) =>
              parseFloat(_0x536421["Importe"]) -
              parseFloat(_0x259f4b[_0x30697e(0x18d)])
          );
          break;
        case _0x30697e(0x1dd):
          _0x2000e9["sort"]((_0x10f197, _0x2fef34) =>
            _0x2fef34[_0x30697e(0x19f)][_0x30697e(0x1e1)](
              _0x10f197[_0x30697e(0x19f)],
              undefined,
              { numeric: !![] }
            )
          );
          break;
        case "ticket-asc":
          _0x2000e9[_0x30697e(0x13f)]((_0x1a25c8, _0x155abc) =>
            _0x1a25c8["Ticket"]["localeCompare"](
              _0x155abc[_0x30697e(0x19f)],
              undefined,
              { numeric: !![] }
            )
          );
          break;
        case _0x30697e(0x25d):
          _0x2000e9[_0x30697e(0x13f)]((_0x12da00, _0x24ee9d) =>
            _0x12da00[_0x30697e(0x14b)][_0x30697e(0x1e1)](_0x24ee9d["Cliente"])
          );
          break;
        case _0x30697e(0x28f):
          _0x2000e9[_0x30697e(0x13f)]((_0x399cda, _0x31e262) =>
            _0x31e262[_0x30697e(0x14b)]["localeCompare"](_0x399cda["Cliente"])
          );
          break;
      }
      const _0x4723fa = document[_0x30697e(0x17a)](_0x30697e(0x1b0)),
        _0xa96153 = document["getElementById"](_0x30697e(0x22c));
      let _0x5d93a2 = "";
      _0x2000e9[_0x30697e(0x218)]((_0x272ab0) => {
        const _0x30ec52 = _0x30697e,
          _0xeed397 = getMetodoPagoInfo(_0x272ab0["Metodo_pago"]),
          _0x4ca623 = new Date(_0x272ab0["or_fecha"])[_0x30ec52(0x27a)](
            _0x30ec52(0x14a),
            {
              day: _0x30ec52(0x226),
              month: "2-digit",
              hour: _0x30ec52(0x226),
              minute: "2-digit",
            }
          );
        _0x5d93a2 +=
          _0x30ec52(0x26a) +
          _0x272ab0[_0x30ec52(0x189)] +
          "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>" +
          _0x272ab0[_0x30ec52(0x13b)] +
          "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$" +
          censurarValor(parseFloat(_0x272ab0[_0x30ec52(0x18d)])) +
          "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small>" +
          _0x4ca623 +
          _0x30ec52(0x165) +
          _0xeed397[_0x30ec52(0x217)] +
          _0x30ec52(0x27f) +
          _0xeed397[_0x30ec52(0x19d)] +
          "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small\x20class=\x22text-muted\x22>" +
          (_0x272ab0["banco"] || "-") +
          _0x30ec52(0x18a) +
          _0x272ab0[_0x30ec52(0x189)] +
          _0x30ec52(0x27b);
      }),
        (_0x4723fa[_0x30697e(0x262)] = _0x5d93a2);
      const _0x993b94 = _0x2000e9[_0x30697e(0x1ff)](
        (_0x9b1458, _0x160c0c) =>
          _0x9b1458 + parseFloat(_0x160c0c[_0x30697e(0x18d)]),
        0x0
      );
      _0xa96153[_0x30697e(0x262)] =
        _0x30697e(0x1b8) +
        (_0x9c5aee !== _0x30697e(0x20a) ? _0x30697e(0x227) : _0x30697e(0x198)) +
        _0x30697e(0x1d7) +
        censurarValor(_0x993b94) +
        "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20colspan=\x221\x22>" +
        _0x2000e9[_0x30697e(0x20e)] +
        _0x30697e(0x238) +
        (_0x9c5aee !== _0x30697e(0x20a)
          ? _0x30697e(0x145) + _0x20266b[_0x30697e(0x20e)]
          : "") +
        "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22\x20colspan=\x223\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-md-none\x22>" +
        _0x2000e9[_0x30697e(0x20e)] +
        "\x20tickets" +
        (_0x9c5aee !== "todos"
          ? "\x20de\x20" + _0x20266b[_0x30697e(0x20e)]
          : "") +
        _0x30697e(0x1c3);
    });
  const _0x3bfc51 = new bootstrap[_0x457227(0x237)](
    document[_0x457227(0x17a)](_0x457227(0x201))
  );
  _0x3bfc51[_0x457227(0x17e)](),
    document[_0x457227(0x17a)]("detalleVendedorModal")["addEventListener"](
      "hidden.bs.modal",
      () => {
        const _0x52bb1d = _0x457227;
        document["getElementById"](_0x52bb1d(0x201))[_0x52bb1d(0x29c)](),
          delete window["reordenarTickets"];
      }
    );
}
function generarGraficos(_0xd7ee64, _0x582682) {
  const _0x3fe4f8 = _0x3466ad;
  if (window[_0x3fe4f8(0x1f5)]) window[_0x3fe4f8(0x1f5)][_0x3fe4f8(0x280)]();
  if (window[_0x3fe4f8(0x22b)]) window[_0x3fe4f8(0x22b)][_0x3fe4f8(0x280)]();
  if (window[_0x3fe4f8(0x266)]) window[_0x3fe4f8(0x266)]["destroy"]();
  const _0xc5aff0 = [],
    _0x2aeb8c = [],
    _0x2b940f = [],
    _0x323734 = {
      credit_card: _0x3fe4f8(0x271),
      cash: "#198754",
      debit_card: _0x3fe4f8(0x1d3),
      credit_note_application: "#ffc107",
      transfer: _0x3fe4f8(0x21c),
      check: _0x3fe4f8(0x1a1),
      credit: _0x3fe4f8(0x297),
      mixed: _0x3fe4f8(0x1b6),
    },
    _0x3a3ab2 = {
      credit_card: "Tarjeta\x20Crédito",
      cash: "Efectivo",
      debit_card: _0x3fe4f8(0x25a),
      credit_note_application: _0x3fe4f8(0x22e),
      transfer: _0x3fe4f8(0x23a),
      check: _0x3fe4f8(0x17d),
      credit: _0x3fe4f8(0x1df),
      mixed: _0x3fe4f8(0x1c8),
    };
  Object[_0x3fe4f8(0x1cd)](_0xd7ee64)[_0x3fe4f8(0x218)]((_0x2d77a6) => {
    const _0x246fc3 = _0x3fe4f8;
    _0xd7ee64[_0x2d77a6][_0x246fc3(0x13c)] > 0x0 &&
      (_0xc5aff0[_0x246fc3(0x1c2)](_0xd7ee64[_0x2d77a6][_0x246fc3(0x13c)]),
      _0x2aeb8c["push"](_0x3a3ab2[_0x2d77a6] || _0x2d77a6),
      _0x2b940f[_0x246fc3(0x1c2)](_0x323734[_0x2d77a6] || _0x246fc3(0x15c)));
  });
  const _0x953bad = document["getElementById"](_0x3fe4f8(0x272));
  _0x953bad &&
    (window[_0x3fe4f8(0x1f5)] = new Chart(_0x953bad, {
      type: _0x3fe4f8(0x1f0),
      data: {
        labels: _0x2aeb8c,
        datasets: [
          {
            data: _0xc5aff0,
            backgroundColor: _0x2b940f,
            borderWidth: 0x2,
            borderColor: "#fff",
          },
        ],
      },
      options: {
        responsive: !![],
        maintainAspectRatio: ![],
        plugins: {
          legend: {
            position: _0x3fe4f8(0x256),
            labels: { padding: 0xf, usePointStyle: !![] },
          },
          tooltip: {
            callbacks: {
              label: function (_0x4d6dbe) {
                const _0x36e793 = _0x3fe4f8,
                  _0x1cacd0 = _0x4d6dbe[_0x36e793(0x16c)][_0x36e793(0x151)][
                    _0x36e793(0x1ff)
                  ]((_0x438b5f, _0x47aed6) => _0x438b5f + _0x47aed6, 0x0),
                  _0x824059 = ((_0x4d6dbe[_0x36e793(0x1d5)] / _0x1cacd0) *
                    0x64)["toFixed"](0x1);
                return (
                  _0x4d6dbe[_0x36e793(0x1ab)] +
                  _0x36e793(0x190) +
                  censurarValor(_0x4d6dbe[_0x36e793(0x1d5)]) +
                  "\x20(" +
                  _0x824059 +
                  "%)"
                );
              },
            },
          },
        },
      },
    }));
  const _0x124594 = [..._0x582682]
      [_0x3fe4f8(0x13f)](
        (_0x56527f, _0x4d7fe3) =>
          _0x4d7fe3[_0x3fe4f8(0x295)] - _0x56527f["totalVentas"]
      )
      [_0x3fe4f8(0x1a8)](0x0, 0xa),
    _0x10b1ea = _0x124594[_0x3fe4f8(0x14c)]((_0x2cf5e5) =>
      _0x2cf5e5[_0x3fe4f8(0x19d)]["length"] > 0xf
        ? _0x2cf5e5["nombre"][_0x3fe4f8(0x284)](0x0, 0xf) + _0x3fe4f8(0x1c7)
        : _0x2cf5e5[_0x3fe4f8(0x19d)]
    ),
    _0x323349 = _0x124594["map"]((_0x44faeb) => _0x44faeb[_0x3fe4f8(0x295)]),
    _0x48a04b = document["getElementById"](_0x3fe4f8(0x1be));
  _0x48a04b &&
    (window[_0x3fe4f8(0x22b)] = new Chart(_0x48a04b, {
      type: "bar",
      data: {
        labels: _0x10b1ea,
        datasets: [
          {
            label: _0x3fe4f8(0x1d6),
            data: _0x323349,
            backgroundColor: _0x3fe4f8(0x22f),
            borderColor: "rgba(13,\x20110,\x20253,\x201)",
            borderWidth: 0x1,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: !![],
        maintainAspectRatio: ![],
        plugins: {
          legend: { display: ![] },
          tooltip: {
            callbacks: {
              label: function (_0x3c641a) {
                const _0x27fa8a = _0x3fe4f8;
                return (
                  _0x3c641a[_0x27fa8a(0x1ab)] +
                  _0x27fa8a(0x190) +
                  censurarValor(_0x3c641a[_0x27fa8a(0x1d5)]["x"])
                );
              },
            },
          },
        },
        scales: {
          x: {
            beginAtZero: !![],
            ticks: {
              callback: function (_0x25ef29) {
                return "$" + censurarValor(_0x25ef29);
              },
            },
          },
        },
      },
    }));
  const _0x53458b = document[_0x3fe4f8(0x17a)](_0x3fe4f8(0x19b));
  if (_0x53458b) {
    const _0x53de30 = {},
      _0x31ec04 = {};
    _0x582682[_0x3fe4f8(0x218)]((_0x46c7ce) => {
      const _0x4b5535 = _0x3fe4f8;
      _0x46c7ce["tickets"] &&
        _0x46c7ce["tickets"][_0x4b5535(0x218)]((_0x130c31) => {
          const _0x19cefa = _0x4b5535,
            _0x28dccd = _0x130c31["or_fecha"]["split"]("T")[0x0],
            _0x4d5603 = new Date(_0x28dccd)[_0x19cefa(0x1d9)]();
          !_0x53de30[_0x4d5603] && (_0x53de30[_0x4d5603] = {}),
            !_0x53de30[_0x4d5603][_0x46c7ce[_0x19cefa(0x19d)]] &&
              (_0x53de30[_0x4d5603][_0x46c7ce[_0x19cefa(0x19d)]] = 0x0),
            (_0x53de30[_0x4d5603][_0x46c7ce[_0x19cefa(0x19d)]] += parseFloat(
              _0x130c31[_0x19cefa(0x18d)]
            )),
            (_0x31ec04[_0x46c7ce["nombre"]] = !![]);
        });
    });
    const _0x56beac = Object[_0x3fe4f8(0x1cd)](_0x53de30)
        [_0x3fe4f8(0x14c)](Number)
        [_0x3fe4f8(0x13f)]((_0x2a673b, _0x303003) => _0x2a673b - _0x303003),
      _0x5557f6 = window[_0x3fe4f8(0x1ac)] < 0x300,
      _0x1f26f2 = _0x5557f6 ? 0x5 : 0x8,
      _0xe15e6c = [..._0x582682]
        [_0x3fe4f8(0x13f)](
          (_0x1f1364, _0x126434) =>
            _0x126434[_0x3fe4f8(0x295)] - _0x1f1364["totalVentas"]
        )
        [_0x3fe4f8(0x1a8)](0x0, _0x1f26f2)
        ["map"]((_0x2c6a1d) => _0x2c6a1d[_0x3fe4f8(0x19d)]),
      _0x311afb = [
        _0x3fe4f8(0x271),
        "#dc3545",
        _0x3fe4f8(0x269),
        _0x3fe4f8(0x1a4),
        _0x3fe4f8(0x1b6),
        "#fd7e14",
        "#20c997",
        _0x3fe4f8(0x1d3),
      ],
      _0x4d5e69 = _0xe15e6c[_0x3fe4f8(0x14c)]((_0x43a172, _0x2a6698) => {
        const _0x3e94d2 = _0x3fe4f8,
          _0x1f611a = _0x56beac[_0x3e94d2(0x14c)]((_0x4e6329) => {
            return _0x53de30[_0x4e6329] && _0x53de30[_0x4e6329][_0x43a172]
              ? _0x53de30[_0x4e6329][_0x43a172]
              : 0x0;
          });
        return {
          label:
            _0x5557f6 && _0x43a172[_0x3e94d2(0x20e)] > 0xf
              ? _0x43a172[_0x3e94d2(0x284)](0x0, 0xf) + _0x3e94d2(0x1c7)
              : _0x43a172,
          data: _0x1f611a,
          borderColor: _0x311afb[_0x2a6698 % _0x311afb[_0x3e94d2(0x20e)]],
          backgroundColor:
            _0x311afb[_0x2a6698 % _0x311afb[_0x3e94d2(0x20e)]] + "20",
          borderWidth: _0x5557f6 ? 0x3 : 0x2,
          fill: ![],
          tension: 0.3,
          pointRadius: _0x5557f6 ? 0x5 : 0x4,
          pointHoverRadius: _0x5557f6 ? 0x8 : 0x6,
          pointBackgroundColor:
            _0x311afb[_0x2a6698 % _0x311afb[_0x3e94d2(0x20e)]],
          pointBorderColor: _0x3e94d2(0x247),
          pointBorderWidth: 0x2,
        };
      });
    window[_0x3fe4f8(0x1b5)] = {
      diasDelMes: _0x56beac,
      ventasPorDia: _0x53de30,
      topVendedores: _0xe15e6c,
      datasets: _0x4d5e69,
      coloresLineas: _0x311afb,
    };
    const _0x53e3a9 = document[_0x3fe4f8(0x17a)](_0x3fe4f8(0x1ec));
    _0x53e3a9 &&
      _0x5557f6 &&
      ((_0x53e3a9[_0x3fe4f8(0x262)] =
        "<option\x20value=\x22\x22>Top\x205\x20vendedores</option>"),
      _0xe15e6c["forEach"]((_0x1a15eb) => {
        const _0x516594 = _0x3fe4f8,
          _0x1faf19 = document[_0x516594(0x149)](_0x516594(0x24c));
        (_0x1faf19[_0x516594(0x19e)] = _0x1a15eb),
          (_0x1faf19[_0x516594(0x1b3)] =
            _0x1a15eb[_0x516594(0x20e)] > 0x19
              ? _0x1a15eb[_0x516594(0x284)](0x0, 0x19) + "..."
              : _0x1a15eb),
          _0x53e3a9[_0x516594(0x17c)](_0x1faf19);
      })),
      (window["chartVentasDiarias"] = new Chart(_0x53458b, {
        type: "line",
        data: {
          labels: _0x56beac["map"]((_0xaa932d) =>
            _0x5557f6 ? "" + _0xaa932d : _0x3fe4f8(0x249) + _0xaa932d
          ),
          datasets: _0x4d5e69,
        },
        options: {
          responsive: !![],
          maintainAspectRatio: ![],
          devicePixelRatio: window["devicePixelRatio"] || 0x1,
          plugins: {
            legend: {
              position: _0x5557f6 ? _0x3fe4f8(0x256) : _0x3fe4f8(0x166),
              display: !_0x5557f6,
              labels: {
                padding: _0x5557f6 ? 0xa : 0xf,
                usePointStyle: !![],
                boxWidth: _0x5557f6 ? 0xf : 0x14,
                font: { size: _0x5557f6 ? 0xa : 0xc },
              },
            },
            tooltip: {
              mode: _0x3fe4f8(0x278),
              intersect: ![],
              backgroundColor: _0x3fe4f8(0x24d),
              titleColor: _0x3fe4f8(0x247),
              bodyColor: _0x3fe4f8(0x247),
              borderColor: _0x3fe4f8(0x158),
              borderWidth: 0x1,
              cornerRadius: 0x8,
              displayColors: !![],
              padding: 0xc,
              callbacks: {
                title: function (_0x118684) {
                  const _0x43eb26 = _0x3fe4f8;
                  return _0x43eb26(0x249) + _0x118684[0x0][_0x43eb26(0x1ab)];
                },
                label: function (_0x16cf10) {
                  const _0x4facdc = _0x3fe4f8;
                  return (
                    _0x16cf10["dataset"][_0x4facdc(0x1ab)] +
                    ":\x20$" +
                    censurarValor(_0x16cf10[_0x4facdc(0x1d5)]["y"])
                  );
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: !_0x5557f6,
                text: _0x3fe4f8(0x1db),
                font: { size: _0x5557f6 ? 0xa : 0xc },
              },
              ticks: {
                font: { size: _0x5557f6 ? 0xa : 0xb },
                maxTicksLimit: _0x5557f6 ? 0x8 : 0xf,
              },
              grid: { display: !![], color: _0x3fe4f8(0x216), lineWidth: 0x1 },
            },
            y: {
              beginAtZero: !![],
              title: {
                display: !_0x5557f6,
                text: _0x3fe4f8(0x15f),
                font: { size: _0x5557f6 ? 0xa : 0xc },
              },
              ticks: {
                font: { size: _0x5557f6 ? 0x9 : 0xb },
                callback: function (_0x5be0ff) {
                  if (_0x5557f6)
                    return _0x5be0ff >= 0x3e8
                      ? "$" + (_0x5be0ff / 0x3e8)["toFixed"](0x0) + "K"
                      : "$" + censurarValor(_0x5be0ff);
                  return "$" + censurarValor(_0x5be0ff);
                },
                maxTicksLimit: _0x5557f6 ? 0x6 : 0x8,
              },
              grid: { display: !![], color: "#e9ecef", lineWidth: 0x1 },
            },
          },
          interaction: { mode: "nearest", axis: "x", intersect: ![] },
          elements: {
            point: { hoverBackgroundColor: "#fff", hoverBorderWidth: 0x3 },
          },
        },
      }));
  }
}
(window[_0x3466ad(0x244)] = mostrarModalReporteVentas),
  (window[_0x3466ad(0x1c1)] = cerrarModalReporteVentas),
  (window[_0x3466ad(0x26e)] = generarReporteVentas),
  (window[_0x3466ad(0x228)] = mostrarDetalleVendedor),
  document[_0x3466ad(0x235)](_0x3466ad(0x287), function () {
    const _0x249577 = _0x3466ad,
      _0x241534 = document[_0x249577(0x17a)](_0x249577(0x240));
    if (_0x241534) {
      const _0x48ead3 = new Date(),
        _0x4b1c68 = _0x48ead3["getFullYear"](),
        _0x188ba4 = (_0x48ead3[_0x249577(0x210)]() + 0x1)
          [_0x249577(0x176)]()
          [_0x249577(0x27c)](0x2, "0");
      _0x241534[_0x249577(0x19e)] = _0x4b1c68 + "-" + _0x188ba4;
    }
  });
function toggleVendedoresChart() {
  const _0x58a515 = _0x3466ad;
  if (window[_0x58a515(0x266)]) {
    const _0x28f55c =
      window[_0x58a515(0x266)][_0x58a515(0x13d)]["plugins"][_0x58a515(0x230)];
    (_0x28f55c[_0x58a515(0x28c)] = !_0x28f55c["display"]),
      window[_0x58a515(0x266)][_0x58a515(0x163)]();
  }
}
function fullscreenChart(_0x1c118a) {
  const _0x43e62b = _0x3466ad,
    _0x3833c7 = document[_0x43e62b(0x20b)]("#" + _0x1c118a)[_0x43e62b(0x168)](
      _0x43e62b(0x1e2)
    );
  _0x3833c7 &&
    (_0x3833c7[_0x43e62b(0x26f)][_0x43e62b(0x1fc)](_0x43e62b(0x18f))
      ? (_0x3833c7[_0x43e62b(0x26f)]["remove"]("chart-fullscreen"),
        (document[_0x43e62b(0x18e)][_0x43e62b(0x263)][_0x43e62b(0x261)] =
          _0x43e62b(0x147)),
        window[_0x43e62b(0x266)] && window[_0x43e62b(0x266)]["resize"]())
      : (_0x3833c7[_0x43e62b(0x26f)][_0x43e62b(0x28a)](_0x43e62b(0x18f)),
        (document["body"][_0x43e62b(0x263)][_0x43e62b(0x261)] =
          _0x43e62b(0x172)),
        setTimeout(() => {
          const _0x3642c7 = _0x43e62b;
          window[_0x3642c7(0x266)] &&
            window[_0x3642c7(0x266)][_0x3642c7(0x13a)]();
        }, 0x64)));
}
function _0x9707(_0x17e565, _0x142991) {
  const _0x4e744b = _0x4e74();
  return (
    (_0x9707 = function (_0x97079, _0x1c637b) {
      _0x97079 = _0x97079 - 0x136;
      let _0x230d8b = _0x4e744b[_0x97079];
      return _0x230d8b;
    }),
    _0x9707(_0x17e565, _0x142991)
  );
}
function _0x4e74() {
  const _0x2a0f3b = [
    "https://reporte-ventas-b9.vercel.app/api/ventas?mes=",
    "...\x20$",
    "5313DCcWbY",
    "insertAdjacentHTML",
    "btn\x20btn-warning\x20btn-sm",
    "#e9ecef",
    "clase",
    "forEach",
    "Datos\x20de\x20ejemplo\x20-\x20API\x20no\x20disponible",
    "getFullYear",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22ticketDetalleModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>🎫\x20Detalle\x20del\x20Ticket:\x20",
    "#6c757d",
    "credit_note",
    "ord_baseImpuesto",
    "💰\x20Efectivo",
    "cte_rfc",
    "ord_impSubtotal",
    "week2",
    "or_totalImp",
    "ord_descripcion",
    "bg-info",
    "2-digit",
    "FILTRADO",
    "mostrarDetalleVendedor",
    "filter",
    "title",
    "chartVendedores",
    "tickets-footer",
    "from",
    "Nota\x20Crédito",
    "rgba(13,\x20110,\x20253,\x200.8)",
    "legend",
    ")</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20",
    "btnToggleValores",
    "or_metodoPago",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "addEventListener",
    "ultimosVendedores",
    "Modal",
    "\x20tickets",
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22\x20colspan=\x223\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-md-none\x22>",
    "Transferencia",
    "bg-success",
    "-01",
    "🏦\x20Transferencia",
    "8WkaZQL",
    "includes",
    "mesReporte",
    "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Controles\x20de\x20ordenamiento\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-label\x20small\x22>Ordenar\x20por:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22ordenarPor\x22\x20class=\x22form-select\x20form-select-sm\x22\x20onchange=\x22reordenarTickets()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fecha-desc\x22>Fecha\x20(Más\x20reciente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fecha-asc\x22>Fecha\x20(Más\x20antigua)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22importe-desc\x22>Importe\x20(Mayor\x20a\x20menor)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22importe-asc\x22>Importe\x20(Menor\x20a\x20mayor)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ticket-desc\x22>Ticket\x20(Descendente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ticket-asc\x22>Ticket\x20(Ascendente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cliente-asc\x22>Cliente\x20(A-Z)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cliente-desc\x22>Cliente\x20(Z-A)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-label\x20small\x22>Filtrar\x20por\x20método:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22filtrarMetodo\x22\x20class=\x22form-select\x20form-select-sm\x22\x20onchange=\x22reordenarTickets()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22todos\x22>Todos\x20los\x20métodos</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cash\x22>💰\x20Efectivo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit_card\x22>💳\x20Tarjeta\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22debit_card\x22>💳\x20Tarjeta\x20Débito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22transfer\x22>🏦\x20Transferencia</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit_note_application\x22>📄\x20Nota\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22check\x22>📋\x20Cheque</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit\x22>💵\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22combinado\x22>🔄\x20Combinado</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ticket</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Cliente</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Importe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22>Fecha</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Método</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Banco</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Acciones</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22tickets-tbody\x22>\x0a\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-sm-6\x20col-lg-4\x20col-xl-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20shadow-sm\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "round",
    "mostrarModalReporteVentas",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Resumen\x20de\x20totales\x20al\x20estilo\x20ticket\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-8\x20col-md-7\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Vendedor:</strong>\x20",
    "#fff",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tfoot\x20id=\x22tickets-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>TOTAL</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "Día\x20",
    "hide",
    "json",
    "option",
    "rgba(0,0,0,0.9)",
    "passwordInput",
    "reordenarTickets",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code>",
    "📋\x20Cheque",
    "reporteVentasModal",
    "btn\x20btn-outline-light\x20btn-sm",
    "vendedorNombre",
    "https://ticket-b9.vercel.app/api/proxy?ticketId=",
    "bottom",
    "nombreVendedor",
    "btnReporteSpinner",
    "ord_total",
    "Tarjeta\x20Débito",
    "toLocaleString",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22><strong>Total:</strong></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20fw-bold\x22>$",
    "cliente-asc",
    "cantidad",
    "152QZSwEA",
    "909226BWNeER",
    "overflow",
    "innerHTML",
    "style",
    "or_folio",
    "ord_idProducto",
    "chartVentasDiarias",
    "fecha-asc",
    "or_idordenExt",
    "#198754",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><code>",
    "or_series",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20",
    "generarReporteVentas",
    "classList",
    "S4-",
    "#0d6efd",
    "graficoMetodosPago",
    "or_total",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Banco:</strong>\x20",
    "trim",
    "cantidadTickets",
    "\x0a\x0aVerifica\x20que\x20la\x20API\x20esté\x20funcionando\x20correctamente.",
    "index",
    "🔄\x20Combinado",
    "toLocaleDateString",
    "\x27)\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Ver\x20ticket\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20",
    "padStart",
    "bg-dark",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22\x20style=\x22min-width:\x20120px;\x20font-size:\x200.75rem;\x20text-align:\x20center;\x22>",
    "destroy",
    "Sin\x20vendedor",
    "\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20Sección\x20de\x20Gráficos\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-6\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-info\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Distribución\x20por\x20Método\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoMetodosPago\x22\x20width=\x22400\x22\x20height=\x22300\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-6\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-warning\x20text-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Top\x2010\x20Vendedores</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoVendedores\x22\x20width=\x22400\x22\x20height=\x22300\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📈\x20Ventas\x20Diarias\x20por\x20Vendedor</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-outline-light\x22\x20onclick=\x22toggleVendedoresChart()\x22\x20id=\x22btnToggleVendedores\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Mostrar/Ocultar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-outline-light\x20d-lg-none\x22\x20onclick=\x22fullscreenChart(\x27graficoVentasDiarias\x27)\x22\x20id=\x22btnFullscreen\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-arrows-fullscreen\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x20p-md-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chart-container\x22\x20style=\x22position:\x20relative;\x20height:\x20300px;\x20min-height:\x20250px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoVentasDiarias\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Controles\x20para\x20móvil\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-lg-none\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x20form-select-sm\x22\x20id=\x22vendedorFilter\x22\x20onchange=\x22filterVendedorChart()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22\x22>Top\x205\x20vendedores</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x20form-select-sm\x22\x20id=\x22periodoFilter\x22\x20onchange=\x22filterPeriodoChart()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22all\x22>Todo\x20el\x20mes</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week1\x22>Semana\x201\x20(1-7)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week2\x22>Semana\x202\x20(8-15)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week3\x22>Semana\x203\x20(16-23)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week4\x22>Semana\x204\x20(24-31)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-secondary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-secondary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Vendedores\x20(",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22>Total:\x20$",
    "substring",
    "mpo_numero",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x22>Observaciones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-2\x22>",
    "DOMContentLoaded",
    "ord_cantProducto",
    "hidden.bs.modal",
    "add",
    "detalles",
    "display",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-x-circle\x22></i>\x20Cerrar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20text-success\x20fw-bold\x20d-none\x20d-md-table-cell\x22>$",
    "cliente-desc",
    "💳\x20Tarjeta\x20Crédito",
    "text",
    "message",
    "●●●●●",
    "https://ticket-b9.vercel.app/api/ticket?ticketId=",
    "totalVentas",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Impuestos:</strong>\x20<span\x20class=\x22text-warning\x22>$",
    "#dc3545",
    "mpo_importe",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Referencia:</strong>\x20",
    "tickets",
    "Error\x20al\x20cargar\x20el\x20ticket\x20",
    "remove",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-4\x20col-lg-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22>$",
    "24438YVEskK",
    "💵\x20Crédito",
    "get",
    "S3-",
    "resize",
    "cliente",
    "total",
    "options",
    "transfer",
    "sort",
    "orders",
    "PLAYERA\x20PUMA\x20CABALLERO\x20630299\x2001\x20TALLA\x20XL\x20AZUL\x20MARINO/VERDE",
    "od_precio",
    "passwordError",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20de\x20",
    "</small>",
    "auto",
    "<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Ocultar\x20Valores",
    "createElement",
    "es-MX",
    "Cliente",
    "map",
    "split",
    "verTicket",
    "toast-container\x20position-fixed\x20top-0\x20end-0\x20p-3",
    "SUCCESS",
    "data",
    "Back9_gdl9123",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error:</strong>\x20",
    "<div\x20class=\x22alert\x20alert-info\x22><i\x20class=\x22bi\x20bi-info-circle\x22></i>\x20No\x20hay\x20información\x20de\x20productos\x20disponible.</div>",
    "note",
    "<small\x20class=\x22text-muted\x20d-block\x20mt-1\x22>Impuesto:\x20$",
    "toFixed",
    "#dee2e6",
    "or_paymentMethod",
    "periodoFilter",
    "<i\x20class=\x22bi\x20bi-eye-slash\x22></i>\x20Ver\x20Valores",
    "#666",
    "status",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Estado:</strong>\x20<span\x20class=\x22badge\x20bg-",
    "Ventas\x20($)",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20d-none\x20d-lg-table-cell\x22>$",
    "11490pnqpqw",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "update",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>RFC:</strong>\x20",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><span\x20class=\x22badge\x20",
    "top",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x20mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>SKU:\x20",
    "closest",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-4\x20col-md-5\x20d-none\x20d-md-block\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-sm\x20table-borderless\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22><strong>Subtotal:</strong></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22>$",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20Modal\x20para\x20contraseña\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22modalPassword\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22modalPasswordLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22modalPasswordLabel\x22>🔒\x20Acceso\x20Restringido</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-3\x22>Ingresa\x20la\x20contraseña\x20para\x20ver\x20los\x20valores\x20monetarios:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22input-group-text\x22><i\x20class=\x22bi\x20bi-key\x22></i></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22password\x22\x20class=\x22form-control\x22\x20id=\x22passwordInput\x22\x20placeholder=\x22Contraseña\x22\x20maxlength=\x2220\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22passwordError\x22\x20class=\x22text-danger\x20mt-2\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><i\x20class=\x22bi\x20bi-exclamation-circle\x22></i>\x20Contraseña\x20incorrecta</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cancelar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-primary\x22\x20onclick=\x22verificarPassword()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Desbloquear\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x22>Precio:\x20$",
    "dataset",
    "reporte-contenido",
    "PUBLICO\x20EN\x20GENERAL",
    "removeChild",
    "statusText",
    "<br>",
    "hidden",
    "importe-asc",
    "has",
    "</code></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Serie/Folio:</strong>\x20",
    "toString",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Error\x20HTTP:\x20",
    "getElementById",
    "💳\x20Tarjeta\x20Débito",
    "appendChild",
    "Cheque",
    "show",
    "or_impuestos",
    "beforeend",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20d-none\x20d-md-table-cell\x22>$",
    "or_moneda",
    "mpo_banco",
    "https://ticket-b9.vercel.app/api?ticketId=",
    "S2-",
    "ultimosTickets",
    "cte_Nombre",
    "HSBC",
    "ticket",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-info\x20btn-sm\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22verTicket(\x27",
    "join",
    "or_nombreCliente",
    "Importe",
    "body",
    "chart-fullscreen",
    ":\x20$",
    "or_estatus",
    "or_totalFinal",
    "debit_card",
    "\x20tickets</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x20mb-2\x22\x20style=\x22height:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-success\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x20",
    "Error:\x20Modal\x20de\x20contraseña\x20no\x20encontrado.\x20Genera\x20un\x20reporte\x20primero.",
    "datasets",
    "ticketDetalleModal",
    "TOTAL",
    "Metodo_pago",
    "197673777718",
    "graficoVentasDiarias",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "nombre",
    "value",
    "Ticket",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Total\x20Final:</strong>\x20<span\x20class=\x22text-success\x20fw-bold\x20fs-5\x22>$",
    "#212529",
    "10363284YvJEPY",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>",
    "#ffc107",
    "Desbloquear\x20valores\x20monetarios",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Moneda:</strong>\x20",
    "or_fecha",
    "slice",
    "or_codMon",
    "<small\x20class=\x22text-muted\x20d-block\x20d-lg-none\x22>",
    "label",
    "innerWidth",
    "bg-primary",
    "modalPassword",
    "success",
    "tickets-tbody",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22detalleVendedorModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>📋\x20Detalle:\x20",
    "N/A",
    "textContent",
    "ord_precio_unitario",
    "ventasDiariasData",
    "#6f42c1",
    "📄\x20Nota\x20Crédito",
    "\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>",
    "Error\x20en\x20la\x20API\x20original",
    "getInstance",
    "\x20artículos)</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20style=\x22min-width:\x2080px;\x22>SKU</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22min-width:\x20200px;\x22>Descripción</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-center\x22\x20style=\x22min-width:\x2080px;\x22>Cantidad</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-end\x20d-none\x20d-md-table-cell\x22\x20style=\x22min-width:\x20100px;\x22>Precio\x20unitario</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-end\x20d-none\x20d-lg-table-cell\x22\x20style=\x22min-width:\x20100px;\x22>Impuesto</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-end\x20d-none\x20d-md-table-cell\x22\x20style=\x22min-width:\x20100px;\x22>Total</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20tickets)</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-info\x22>🛍️\x20Productos\x20(",
    "graficoVendedores",
    "card",
    "week1",
    "cerrarModalReporteVentas",
    "push",
    "</th>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Tickets</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22toast\x20show\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toast-body\x20bg-info\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-arrow-clockwise\x22></i>\x20Cargando\x20ticket\x20",
    "or_subtotal",
    "...",
    "Combinado",
    "week4",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Ver\x20Detalle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x20-\x20",
    "keys",
    "cash",
    "none",
    "60EPHXtc",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><span\x20class=\x22badge\x20",
    "-30",
    "#0dcaf0",
    "\x20/\x20",
    "parsed",
    "Ventas",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "getDate",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Días\x20del\x20Mes",
    "1078500LsRTMl",
    "ticket-desc",
    "mixed",
    "Crédito",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Fecha:</strong>\x20",
    "localeCompare",
    ".card",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-md-table-cell\x22><small>",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btnToggleValores\x22\x20class=\x22btn\x20btn-outline-light\x20btn-sm\x22\x20onclick=\x22toggleValores()\x22\x20title=\x22Desbloquear\x20valores\x20monetarios\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye-slash\x22></i>\x20Ver\x20Valores\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-success\x20mb-0\x22>$",
    "payments",
    "od_total",
    "credit_card",
    "2025-10-05\x2012:00:06",
    "filtrarMetodo",
    "od_producto",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-success\x22>💰\x20Información\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Subtotal:</strong>\x20<span\x20class=\x22text-info\x22>$",
    "vendedorFilter",
    "toLowerCase",
    "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-block\x20fw-bold\x22>",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20colspan=\x221\x22>",
    "doughnut",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22><strong>Impuesto:</strong></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22>$",
    "warning",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-center\x20fw-bold\x20align-middle\x22>",
    "focus",
    "chartMetodosPago",
    "Generando...",
    "\x27,\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22mt-2\x22>Sin\x20datos</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20encontraron\x20ventas\x20para\x20el\x20mes\x20seleccionado.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Descuento:</strong>\x20<span\x20class=\x22text-warning\x22>$",
    "S1-",
    "details",
    "contains",
    "\x20d-lg-none\x22\x20style=\x22font-size:\x200.65rem;\x22>",
    "check",
    "reduce",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22btn-vendedor-",
    "detalleVendedorModal",
    "indexOf",
    "MXN",
    "bg-danger",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-md-table-cell\x22><code\x20class=\x22small\x22>",
    "completed",
    "Datos\x20de\x20ejemplo\x20-\x20La\x20API\x20proxy\x20no\x20está\x20disponible",
    "9415uzhsKV",
    "or_idorden",
    "todos",
    "querySelector",
    "11510009TvVFPq",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>💳\x20Métodos\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "length",
    "or_nombreVendedor",
    "getMonth",
  ];
  _0x4e74 = function () {
    return _0x2a0f3b;
  };
  return _0x4e74();
}
function filterVendedorChart() {
  const _0x189f03 = _0x3466ad;
  if (!window[_0x189f03(0x266)] || !window[_0x189f03(0x1b5)]) return;
  const _0x258c96 =
      document[_0x189f03(0x17a)]("vendedorFilter")[_0x189f03(0x19e)],
    {
      diasDelMes: _0x2b8b68,
      ventasPorDia: _0x1e4836,
      topVendedores: _0x1696eb,
      coloresLineas: _0x5dfc6c,
    } = window["ventasDiariasData"];
  let _0x41e4a1;
  if (_0x258c96 === "")
    _0x41e4a1 = _0x1696eb["map"]((_0x4f96ec, _0x2ad58) => {
      const _0x3d3578 = _0x189f03,
        _0x26f5e4 = _0x2b8b68[_0x3d3578(0x14c)]((_0x26591a) => {
          return _0x1e4836[_0x26591a] && _0x1e4836[_0x26591a][_0x4f96ec]
            ? _0x1e4836[_0x26591a][_0x4f96ec]
            : 0x0;
        });
      return {
        label:
          _0x4f96ec[_0x3d3578(0x20e)] > 0xf
            ? _0x4f96ec[_0x3d3578(0x284)](0x0, 0xf) + _0x3d3578(0x1c7)
            : _0x4f96ec,
        data: _0x26f5e4,
        borderColor: _0x5dfc6c[_0x2ad58 % _0x5dfc6c[_0x3d3578(0x20e)]],
        backgroundColor:
          _0x5dfc6c[_0x2ad58 % _0x5dfc6c[_0x3d3578(0x20e)]] + "20",
        borderWidth: 0x3,
        fill: ![],
        tension: 0.3,
        pointRadius: 0x5,
        pointHoverRadius: 0x8,
        pointBackgroundColor: _0x5dfc6c[_0x2ad58 % _0x5dfc6c[_0x3d3578(0x20e)]],
        pointBorderColor: _0x3d3578(0x247),
        pointBorderWidth: 0x2,
      };
    });
  else {
    const _0x11ec1e = _0x1696eb[_0x189f03(0x202)](_0x258c96),
      _0x2cac78 = _0x2b8b68[_0x189f03(0x14c)]((_0x4725ad) => {
        return _0x1e4836[_0x4725ad] && _0x1e4836[_0x4725ad][_0x258c96]
          ? _0x1e4836[_0x4725ad][_0x258c96]
          : 0x0;
      });
    _0x41e4a1 = [
      {
        label: _0x258c96,
        data: _0x2cac78,
        borderColor: _0x5dfc6c[_0x11ec1e % _0x5dfc6c[_0x189f03(0x20e)]],
        backgroundColor:
          _0x5dfc6c[_0x11ec1e % _0x5dfc6c[_0x189f03(0x20e)]] + "20",
        borderWidth: 0x4,
        fill: !![],
        tension: 0.3,
        pointRadius: 0x6,
        pointHoverRadius: 0xa,
        pointBackgroundColor:
          _0x5dfc6c[_0x11ec1e % _0x5dfc6c[_0x189f03(0x20e)]],
        pointBorderColor: "#fff",
        pointBorderWidth: 0x3,
      },
    ];
  }
  (window[_0x189f03(0x266)][_0x189f03(0x151)][_0x189f03(0x196)] = _0x41e4a1),
    window[_0x189f03(0x266)][_0x189f03(0x163)]();
}
function filterPeriodoChart() {
  const _0x1be514 = _0x3466ad;
  if (!window[_0x1be514(0x266)] || !window[_0x1be514(0x1b5)]) return;
  const _0x2e0df2 = document["getElementById"](_0x1be514(0x15a))[
      _0x1be514(0x19e)
    ],
    {
      diasDelMes: _0x257e11,
      ventasPorDia: _0x2994c0,
      topVendedores: _0x44aa4d,
      coloresLineas: _0x309cfc,
    } = window[_0x1be514(0x1b5)];
  let _0x421034,
    _0x5606cc = _0x1be514(0x249);
  switch (_0x2e0df2) {
    case _0x1be514(0x1c0):
      (_0x421034 = _0x257e11[_0x1be514(0x229)](
        (_0x3ae5f5) => _0x3ae5f5 >= 0x1 && _0x3ae5f5 <= 0x7
      )),
        (_0x5606cc = _0x1be514(0x1fa));
      break;
    case _0x1be514(0x222):
      (_0x421034 = _0x257e11["filter"](
        (_0x228080) => _0x228080 >= 0x8 && _0x228080 <= 0xf
      )),
        (_0x5606cc = _0x1be514(0x185));
      break;
    case "week3":
      (_0x421034 = _0x257e11[_0x1be514(0x229)](
        (_0x4eb055) => _0x4eb055 >= 0x10 && _0x4eb055 <= 0x17
      )),
        (_0x5606cc = _0x1be514(0x139));
      break;
    case _0x1be514(0x1c9):
      (_0x421034 = _0x257e11[_0x1be514(0x229)](
        (_0x524930) => _0x524930 >= 0x18 && _0x524930 <= 0x1f
      )),
        (_0x5606cc = _0x1be514(0x270));
      break;
    default:
      (_0x421034 = _0x257e11), (_0x5606cc = "");
  }
  window[_0x1be514(0x266)][_0x1be514(0x151)]["labels"] = _0x421034[
    _0x1be514(0x14c)
  ]((_0x482086) => "" + _0x5606cc + _0x482086);
  const _0x27348b =
      document[_0x1be514(0x17a)]("vendedorFilter")[_0x1be514(0x19e)],
    _0x2d5704 = _0x27348b === "" ? _0x44aa4d : [_0x27348b],
    _0x112e1f = _0x2d5704[_0x1be514(0x14c)]((_0x2d3cb4, _0x26b346) => {
      const _0x4bd211 = _0x1be514,
        _0xc0f35d = _0x421034["map"]((_0x555816) => {
          return _0x2994c0[_0x555816] && _0x2994c0[_0x555816][_0x2d3cb4]
            ? _0x2994c0[_0x555816][_0x2d3cb4]
            : 0x0;
        }),
        _0x5bed4d = _0x44aa4d[_0x4bd211(0x202)](_0x2d3cb4);
      return {
        label:
          _0x2d3cb4[_0x4bd211(0x20e)] > 0xf
            ? _0x2d3cb4[_0x4bd211(0x284)](0x0, 0xf) + _0x4bd211(0x1c7)
            : _0x2d3cb4,
        data: _0xc0f35d,
        borderColor: _0x309cfc[_0x5bed4d % _0x309cfc[_0x4bd211(0x20e)]],
        backgroundColor:
          _0x309cfc[_0x5bed4d % _0x309cfc[_0x4bd211(0x20e)]] + "20",
        borderWidth: _0x27348b === "" ? 0x3 : 0x4,
        fill: _0x27348b !== "",
        tension: 0.3,
        pointRadius: _0x27348b === "" ? 0x5 : 0x6,
        pointHoverRadius: _0x27348b === "" ? 0x8 : 0xa,
        pointBackgroundColor:
          _0x309cfc[_0x5bed4d % _0x309cfc[_0x4bd211(0x20e)]],
        pointBorderColor: _0x4bd211(0x247),
        pointBorderWidth: _0x27348b === "" ? 0x2 : 0x3,
      };
    });
  (window[_0x1be514(0x266)][_0x1be514(0x151)]["datasets"] = _0x112e1f),
    window[_0x1be514(0x266)][_0x1be514(0x163)]();
}
async function verTicket(_0x1e0c3c) {
  const _0x56761f = _0x3466ad;
  try {
    const _0x402314 = document[_0x56761f(0x149)]("div");
    (_0x402314["className"] = _0x56761f(0x14f)),
      (_0x402314[_0x56761f(0x262)] =
        _0x56761f(0x1c5) +
        _0x1e0c3c +
        "...\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      document[_0x56761f(0x18e)][_0x56761f(0x17c)](_0x402314);
    const _0x52e202 = [
      _0x56761f(0x294) + _0x1e0c3c,
      _0x56761f(0x255) + _0x1e0c3c,
      _0x56761f(0x184) + _0x1e0c3c,
    ];
    let _0x506560 = null,
      _0x54ccca = null;
    for (const _0x27634a of _0x52e202) {
      try {
        const _0x27b420 = await fetch(_0x27634a);
        if (_0x27b420["ok"]) {
          _0x506560 = await _0x27b420[_0x56761f(0x24b)]();
          break;
        } else {
          const _0x392732 = await _0x27b420[_0x56761f(0x291)]();
          _0x54ccca = new Error(
            _0x56761f(0x179) +
              _0x27b420["status"] +
              _0x56761f(0x1cc) +
              _0x392732
          );
        }
      } catch (_0x1d3a1d) {
        _0x54ccca = _0x1d3a1d;
      }
    }
    document[_0x56761f(0x18e)][_0x56761f(0x16f)](_0x402314),
      !_0x506560 &&
        ((_0x506560 = {
          orders: [
            {
              or_idorden: 0x3ea8,
              or_idordenExt: _0x1e0c3c,
              or_fecha: _0x56761f(0x1e8),
              or_nombreCliente: _0x56761f(0x16e),
              or_subtotal: 1741.37931,
              or_totalImp: 278.62069,
              or_totalFinal: 0x7e4,
              or_metodoPago: _0x56761f(0x1e7),
              or_moneda: _0x56761f(0x203),
              or_estatus: _0x56761f(0x206),
              vendedorNombre: _0x56761f(0x219),
              detalles: [
                {
                  ord_idProducto: _0x56761f(0x19a),
                  ord_descripcion: _0x56761f(0x141),
                  ord_cantProducto: 0x1,
                  ord_precio_unitario: 1741.37931,
                  ord_total: 0x7e4,
                },
              ],
              payments: [
                {
                  mpo_idMetodoPago: _0x56761f(0x1e7),
                  mpo_importe: 0x7e4,
                  mpo_banco: _0x56761f(0x188),
                  mpo_numero: "5450",
                },
              ],
            },
          ],
          status: _0x56761f(0x150),
          note: _0x56761f(0x207),
        }),
        setTimeout(() => {
          alert(
            "⚠️\x20API\x20no\x20disponible\x0a\x0aSe\x20están\x20mostrando\x20datos\x20de\x20ejemplo\x20para\x20el\x20ticket\x20" +
              _0x1e0c3c +
              ".\x0a\x0aPara\x20datos\x20reales,\x20verifica\x20que\x20la\x20API\x20proxy\x20esté\x20desplegada\x20correctamente\x20en:\x0a" +
              _0x52e202[0x0]
          );
        }, 0x64)),
      mostrarModalTicket(_0x506560, _0x1e0c3c);
  } catch (_0x31ba28) {
    alert(
      _0x56761f(0x29b) +
        _0x1e0c3c +
        ":\x0a" +
        _0x31ba28[_0x56761f(0x292)] +
        _0x56761f(0x277)
    );
  }
}
function mostrarModalTicket(_0x78f0ae, _0x56f89c) {
  const _0x4eaf39 = _0x3466ad,
    _0xe19d72 = _0x78f0ae[_0x4eaf39(0x140)] || [],
    _0xc75169 = _0xe19d72[_0x4eaf39(0x20e)] > 0x0 ? _0xe19d72[0x0] : {},
    _0x492698 = _0xc75169["cliente"] || {},
    _0x41150e =
      _0x492698[_0x4eaf39(0x187)] ||
      _0xc75169[_0x4eaf39(0x18c)] ||
      _0xc75169[_0x4eaf39(0x187)] ||
      _0x4eaf39(0x1b2),
    _0x34f282 = _0xc75169[_0x4eaf39(0x1e5)] || [],
    _0x1938b5 = _0x34f282[_0x4eaf39(0x20e)] > 0x0 ? _0x34f282[0x0] : {},
    _0x11f44d =
      _0x1938b5["mpo_idMetodoPago"] ||
      _0xc75169[_0x4eaf39(0x233)] ||
      _0xc75169[_0x4eaf39(0x159)] ||
      _0x4eaf39(0x1b2),
    _0x4c5a7c =
      _0x1938b5[_0x4eaf39(0x183)] || _0xc75169[_0x4eaf39(0x183)] || "N/A",
    _0x2f21db =
      _0xc75169[_0x4eaf39(0x28b)] || _0xc75169[_0x4eaf39(0x1fb)] || [],
    _0x282565 =
      _0xc75169[_0x4eaf39(0x254)] ||
      _0xc75169[_0x4eaf39(0x20f)] ||
      _0x4eaf39(0x1b2),
    _0x44fc15 =
      _0x4eaf39(0x21b) +
      _0x56f89c +
      "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x20btn-close-white\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
      (_0xe19d72[_0x4eaf39(0x20e)] === 0x0
        ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20No\x20se\x20encontraron\x20datos\x20para\x20el\x20ticket\x20" +
          _0x56f89c +
          _0x4eaf39(0x234)
        : _0x4eaf39(0x1da) +
          (_0x78f0ae[_0x4eaf39(0x155)]
            ? _0x4eaf39(0x1d8) +
              _0x78f0ae[_0x4eaf39(0x155)] +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-primary\x22>📋\x20Información\x20General</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Ticket:</strong>\x20<code>" +
          (_0xc75169[_0x4eaf39(0x268)] || _0x56f89c) +
          "</code></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>ID\x20Orden:</strong>\x20<code>" +
          (_0xc75169[_0x4eaf39(0x209)] ||
            _0xc75169["or_id"] ||
            _0x4eaf39(0x1b2)) +
          _0x4eaf39(0x175) +
          (_0xc75169[_0x4eaf39(0x26b)] || "N/A") +
          (_0xc75169[_0x4eaf39(0x264)]
            ? _0x4eaf39(0x1d4) + _0xc75169[_0x4eaf39(0x264)]
            : "") +
          "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Cliente:</strong>\x20" +
          _0x41150e +
          _0x4eaf39(0x164) +
          (_0x492698[_0x4eaf39(0x220)] ||
            _0xc75169["or_rfc"] ||
            _0x4eaf39(0x1b2)) +
          _0x4eaf39(0x1e0) +
          (_0xc75169[_0x4eaf39(0x1a7)]
            ? new Date(_0xc75169[_0x4eaf39(0x1a7)])[_0x4eaf39(0x25b)](
                _0x4eaf39(0x14a)
              )
            : _0x4eaf39(0x1b2)) +
          _0x4eaf39(0x246) +
          _0x282565 +
          _0x4eaf39(0x15e) +
          (_0xc75169["or_status"] === "completed" ||
          _0xc75169[_0x4eaf39(0x191)] === _0x4eaf39(0x206)
            ? _0x4eaf39(0x1af)
            : _0x4eaf39(0x1f2)) +
          "\x22>" +
          (_0xc75169["or_status"] || _0xc75169[_0x4eaf39(0x191)] || "N/A") +
          _0x4eaf39(0x1eb) +
          censurarValor(parseFloat(_0xc75169[_0x4eaf39(0x1c6)] || 0x0)) +
          _0x4eaf39(0x1f9) +
          censurarValor(parseFloat(_0xc75169["or_descTotal"] || 0x0)) +
          _0x4eaf39(0x296) +
          censurarValor(
            parseFloat(
              _0xc75169[_0x4eaf39(0x223)] || _0xc75169[_0x4eaf39(0x17f)] || 0x0
            )
          ) +
          _0x4eaf39(0x1a0) +
          censurarValor(
            parseFloat(
              _0xc75169[_0x4eaf39(0x192)] || _0xc75169[_0x4eaf39(0x273)] || 0x0
            )
          ) +
          "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Método\x20de\x20Pago:</strong>\x20" +
          _0x11f44d +
          _0x4eaf39(0x274) +
          _0x4c5a7c +
          _0x4eaf39(0x299) +
          (_0x1938b5[_0x4eaf39(0x285)] || _0x4eaf39(0x1b2)) +
          _0x4eaf39(0x1a6) +
          (_0xc75169[_0x4eaf39(0x1a9)] ||
            _0xc75169[_0x4eaf39(0x182)] ||
            _0x4eaf39(0x203)) +
          _0x4eaf39(0x162) +
          (_0x2f21db && _0x2f21db[_0x4eaf39(0x20e)] > 0x0
            ? _0x4eaf39(0x1bd) +
              _0x2f21db[_0x4eaf39(0x20e)] +
              _0x4eaf39(0x1bb) +
              _0x2f21db[_0x4eaf39(0x14c)](
                (_0x229a0a) =>
                  _0x4eaf39(0x205) +
                  (_0x229a0a[_0x4eaf39(0x265)] ||
                    _0x229a0a[_0x4eaf39(0x1ea)] ||
                    _0x4eaf39(0x1b2)) +
                  _0x4eaf39(0x1ee) +
                  (_0x229a0a[_0x4eaf39(0x224)] ||
                    _0x229a0a["od_descripcion"] ||
                    "N/A") +
                  _0x4eaf39(0x167) +
                  (_0x229a0a[_0x4eaf39(0x265)] ||
                    _0x229a0a[_0x4eaf39(0x1ea)] ||
                    _0x4eaf39(0x1b2)) +
                  _0x4eaf39(0x16b) +
                  censurarValor(
                    parseFloat(
                      _0x229a0a[_0x4eaf39(0x1b4)] ||
                        _0x229a0a[_0x4eaf39(0x142)] ||
                        0x0
                    )
                  ) +
                  _0x4eaf39(0x283) +
                  censurarValor(
                    parseFloat(
                      _0x229a0a["ord_total"] ||
                        _0x229a0a[_0x4eaf39(0x1e6)] ||
                        0x0
                    )
                  ) +
                  _0x4eaf39(0x27e) +
                  (_0x229a0a[_0x4eaf39(0x221)] ||
                  _0x229a0a[_0x4eaf39(0x21e)] * 0.16
                    ? _0x4eaf39(0x156) +
                      censurarValor(
                        parseFloat(
                          _0x229a0a["ord_impSubtotal"] ||
                            _0x229a0a[_0x4eaf39(0x21e)] * 0.16 ||
                            0x0
                        )
                      ) +
                      _0x4eaf39(0x146)
                    : "") +
                  _0x4eaf39(0x1f3) +
                  (_0x229a0a[_0x4eaf39(0x288)] ||
                    _0x229a0a["od_cantidad"] ||
                    0x0) +
                  _0x4eaf39(0x181) +
                  censurarValor(
                    parseFloat(
                      _0x229a0a[_0x4eaf39(0x1b4)] ||
                        _0x229a0a[_0x4eaf39(0x142)] ||
                        0x0
                    )
                  ) +
                  _0x4eaf39(0x160) +
                  censurarValor(
                    parseFloat(
                      _0x229a0a[_0x4eaf39(0x221)] ||
                        _0x229a0a[_0x4eaf39(0x21e)] * 0.16 ||
                        0x0
                    )
                  ) +
                  _0x4eaf39(0x28e) +
                  censurarValor(
                    parseFloat(
                      _0x229a0a[_0x4eaf39(0x259)] ||
                        _0x229a0a[_0x4eaf39(0x1e6)] ||
                        0x0
                    )
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
              )[_0x4eaf39(0x18b)]("") +
              _0x4eaf39(0x245) +
              (_0xc75169["or_observaciones"]
                ? _0x4eaf39(0x286) +
                  _0xc75169["or_observaciones"] +
                  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                : "") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Información\x20adicional\x20del\x20ticket\x20para\x20móviles\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>Subtotal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>$" +
              censurarValor(parseFloat(_0xc75169[_0x4eaf39(0x1c6)] || 0x0)) +
              "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>Impuesto</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>$" +
              censurarValor(
                parseFloat(
                  _0xc75169["or_totalImp"] || _0xc75169["or_impuestos"] || 0x0
                )
              ) +
              "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-2\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x22>Total</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>$" +
              censurarValor(
                parseFloat(
                  _0xc75169["or_totalFinal"] || _0xc75169["or_total"] || 0x0
                )
              ) +
              "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Información\x20adicional\x20del\x20ticket\x20para\x20desktop\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Información\x20adicional\x20del\x20ticket\x20para\x20desktop\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-none\x20d-md-block\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              _0x2f21db[_0x4eaf39(0x14c)](
                (_0x4a9066) =>
                  (_0x4a9066[_0x4eaf39(0x265)] ||
                    _0x4a9066[_0x4eaf39(0x1ea)] ||
                    "") +
                  "\x20" +
                  (_0x4a9066[_0x4eaf39(0x224)] ||
                    _0x4a9066["od_descripcion"] ||
                    "")[_0x4eaf39(0x284)](0x0, 0x1e) +
                  _0x4eaf39(0x212) +
                  censurarValor(
                    parseFloat(
                      _0x4a9066[_0x4eaf39(0x1b4)] ||
                        _0x4a9066["od_precio"] ||
                        0x0
                    )
                  )
              )[_0x4eaf39(0x18b)](_0x4eaf39(0x171)) +
              _0x4eaf39(0x169) +
              censurarValor(parseFloat(_0xc75169[_0x4eaf39(0x1c6)] || 0x0)) +
              _0x4eaf39(0x1f1) +
              censurarValor(
                parseFloat(
                  _0xc75169[_0x4eaf39(0x223)] ||
                    _0xc75169[_0x4eaf39(0x17f)] ||
                    0x0
                )
              ) +
              _0x4eaf39(0x25c) +
              censurarValor(
                parseFloat(
                  _0xc75169[_0x4eaf39(0x192)] || _0xc75169["or_total"] || 0x0
                )
              ) +
              _0x4eaf39(0x144)
            : _0x4eaf39(0x154)) +
          _0x4eaf39(0x1da)) +
      _0x4eaf39(0x28d),
    _0x30ce28 = document[_0x4eaf39(0x17a)]("ticketDetalleModal");
  _0x30ce28 && _0x30ce28[_0x4eaf39(0x29c)]();
  document[_0x4eaf39(0x18e)][_0x4eaf39(0x214)](_0x4eaf39(0x180), _0x44fc15);
  const _0x4a07d3 = new bootstrap[_0x4eaf39(0x237)](
    document["getElementById"](_0x4eaf39(0x197))
  );
  _0x4a07d3["show"](),
    document[_0x4eaf39(0x17a)]("ticketDetalleModal")[_0x4eaf39(0x235)](
      _0x4eaf39(0x289),
      () => {
        const _0x5ec725 = _0x4eaf39;
        document[_0x5ec725(0x17a)](_0x5ec725(0x197))["remove"]();
      }
    );
}
window[_0x3466ad(0x14e)] = verTicket;
