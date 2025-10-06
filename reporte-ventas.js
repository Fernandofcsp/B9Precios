const _0x100a03 = _0x5a0e;
(function (_0x38701a, _0x23e53e) {
  const _0x39a1f1 = _0x5a0e,
    _0x8c4aae = _0x38701a();
  while (!![]) {
    try {
      const _0x4b292c =
        (parseInt(_0x39a1f1(0x146)) / 0x1) *
          (parseInt(_0x39a1f1(0x114)) / 0x2) +
        (parseInt(_0x39a1f1(0x1d3)) / 0x3) *
          (parseInt(_0x39a1f1(0x236)) / 0x4) +
        parseInt(_0x39a1f1(0x209)) / 0x5 +
        parseInt(_0x39a1f1(0x184)) / 0x6 +
        (parseInt(_0x39a1f1(0x1f9)) / 0x7) *
          (-parseInt(_0x39a1f1(0x13a)) / 0x8) +
        (parseInt(_0x39a1f1(0x254)) / 0x9) *
          (parseInt(_0x39a1f1(0x163)) / 0xa) +
        -parseInt(_0x39a1f1(0x204)) / 0xb;
      if (_0x4b292c === _0x23e53e) break;
      else _0x8c4aae["push"](_0x8c4aae["shift"]());
    } catch (_0x359431) {
      _0x8c4aae["push"](_0x8c4aae["shift"]());
    }
  }
})(_0x35ae, 0xa51ac);
function getMetodoPagoInfo(_0x863995) {
  const _0x4509ee = _0x5a0e,
    _0x546889 = (_0x863995 || "")[_0x4509ee(0x1f5)]()[_0x4509ee(0x186)]();
  if (_0x546889["includes"](_0x4509ee(0x232)) || _0x546889 === _0x4509ee(0x232))
    return { nombre: "💰\x20Efectivo", clase: "bg-success" };
  else {
    if (
      _0x546889[_0x4509ee(0x11e)](_0x4509ee(0x124)) ||
      _0x546889 === "credit_card"
    )
      return { nombre: _0x4509ee(0x1c1), clase: _0x4509ee(0x138) };
    else {
      if (
        _0x546889[_0x4509ee(0x11e)]("debit_card") ||
        _0x546889 === _0x4509ee(0x12d)
      )
        return { nombre: _0x4509ee(0x125), clase: _0x4509ee(0x1fa) };
      else {
        if (_0x546889[_0x4509ee(0x11e)]("transfer") || _0x546889 === "transfer")
          return { nombre: _0x4509ee(0x19a), clase: _0x4509ee(0x12b) };
        else {
          if (
            _0x546889[_0x4509ee(0x11e)](_0x4509ee(0x19d)) ||
            _0x546889 === _0x4509ee(0x223)
          )
            return { nombre: _0x4509ee(0x1c6), clase: "bg-warning" };
          else {
            if (
              _0x546889[_0x4509ee(0x11e)](_0x4509ee(0x207)) ||
              _0x546889 === _0x4509ee(0x207)
            )
              return { nombre: _0x4509ee(0x235), clase: _0x4509ee(0x18d) };
            else {
              if (
                _0x546889[_0x4509ee(0x11e)](_0x4509ee(0x22a)) &&
                !_0x546889[_0x4509ee(0x11e)](_0x4509ee(0x233))
              )
                return { nombre: _0x4509ee(0x1b6), clase: _0x4509ee(0x139) };
              else
                return _0x546889[_0x4509ee(0x11e)](",") ||
                  _0x546889[_0x4509ee(0x11e)]("\x20")
                  ? { nombre: "🔄\x20Combinado", clase: _0x4509ee(0x13b) }
                  : { nombre: _0x4509ee(0x208), clase: _0x4509ee(0x16a) };
            }
          }
        }
      }
    }
  }
}
function mostrarModalReporteVentas() {
  const _0x5a56dc = _0x5a0e,
    _0x3543aa = document["getElementById"](_0x5a56dc(0x148));
  if (_0x3543aa) {
    const _0x353677 = document["getElementById"](_0x5a56dc(0x266));
    if (_0x353677 && !_0x353677[_0x5a56dc(0x17d)]) {
      const _0x135778 = new Date(),
        _0x422bcd = _0x135778[_0x5a56dc(0x226)](),
        _0x26998f = (_0x135778["getMonth"]() + 0x1)
          [_0x5a56dc(0x261)]()
          [_0x5a56dc(0x131)](0x2, "0");
      _0x353677[_0x5a56dc(0x17d)] = _0x422bcd + "-" + _0x26998f;
    }
    const _0x3701e8 = new bootstrap["Modal"](_0x3543aa);
    _0x3701e8[_0x5a56dc(0x1b1)]();
  }
}
function cerrarModalReporteVentas() {
  const _0x5312bf = _0x5a0e,
    _0xa11dc0 = document[_0x5312bf(0x189)](_0x5312bf(0x148));
  if (_0xa11dc0) {
    const _0x1003ae = bootstrap["Modal"][_0x5312bf(0x24c)](_0xa11dc0);
    _0x1003ae && _0x1003ae[_0x5312bf(0x1b4)]();
  }
}
async function generarReporteVentas() {
  const _0x12830f = _0x5a0e,
    _0x497e42 = document[_0x12830f(0x189)](_0x12830f(0x266))["value"],
    _0x1be3ae = document[_0x12830f(0x189)]("reporte-contenido"),
    _0x5a72f0 = document[_0x12830f(0x189)]("btnReporteTexto"),
    _0x232482 = document[_0x12830f(0x189)](_0x12830f(0x170));
  if (!_0x497e42) {
    _0x1be3ae[_0x12830f(0x174)] = _0x12830f(0x123);
    return;
  }
  const _0x5d3aa6 = 0x1,
    _0x8c1ec8 = _0x497e42 + _0x12830f(0x191),
    _0x64ee48 = _0x497e42 + _0x12830f(0x1c3);
  (_0x5a72f0["textContent"] = _0x12830f(0x21c)),
    _0x232482[_0x12830f(0x118)]["remove"](_0x12830f(0x179));
  try {
    const _0xc70ed3 = _0x12830f(0x1d0) + _0x497e42,
      _0x57ad75 = await fetch(_0xc70ed3);
    if (!_0x57ad75["ok"])
      throw new Error(
        "Error\x20HTTP:\x20" +
          _0x57ad75[_0x12830f(0x14b)] +
          "\x20" +
          _0x57ad75["statusText"]
      );
    const _0x13bf09 = await _0x57ad75[_0x12830f(0x1b0)]();
    if (_0x13bf09[_0x12830f(0x14b)] !== _0x12830f(0x212))
      throw new Error(_0x12830f(0x20d));
    const _0x1d28de = _0x13bf09[_0x12830f(0x251)][_0x12830f(0x182)] || [],
      _0x284802 = _0x13bf09[_0x12830f(0x251)][_0x12830f(0x1ed)],
      _0x22c5a4 = _0x1d28de[_0x12830f(0x1be)],
      _0x20c3a5 = new Map();
    _0x1d28de[_0x12830f(0x1a9)]((_0x466dd8) => {
      const _0x1b7cb3 = _0x12830f,
        _0x14bb20 = _0x466dd8[_0x1b7cb3(0x1dd)] || _0x1b7cb3(0x247),
        _0x9a9b29 = parseFloat(_0x466dd8[_0x1b7cb3(0x25b)]) || 0x0;
      !_0x20c3a5[_0x1b7cb3(0x23b)](_0x14bb20) &&
        _0x20c3a5["set"](_0x14bb20, {
          nombre: _0x14bb20,
          totalVentas: 0x0,
          cantidadTickets: 0x0,
          tickets: [],
        });
      const _0x222b5f = _0x20c3a5[_0x1b7cb3(0x1e5)](_0x14bb20);
      (_0x222b5f[_0x1b7cb3(0x141)] += _0x9a9b29),
        _0x222b5f[_0x1b7cb3(0x10b)]++,
        _0x222b5f["tickets"][_0x1b7cb3(0x10f)](_0x466dd8);
    });
    const _0x440fd0 = Array[_0x12830f(0x218)](_0x20c3a5[_0x12830f(0x160)]())[
        "sort"
      ](
        (_0xbe6b43, _0x239b95) =>
          _0x239b95[_0x12830f(0x141)] - _0xbe6b43[_0x12830f(0x141)]
      ),
      _0x5a0305 = _0x440fd0[_0x12830f(0x1be)];
    (window["ultimosVendedores"] = _0x440fd0),
      (window[_0x12830f(0x21e)] = _0x1d28de);
    let _0x305f33 = {
      credit_card: { total: 0x0, cantidad: 0x0 },
      cash: { total: 0x0, cantidad: 0x0 },
      debit_card: { total: 0x0, cantidad: 0x0 },
      credit_note_application: { total: 0x0, cantidad: 0x0 },
      transfer: { total: 0x0, cantidad: 0x0 },
      check: { total: 0x0, cantidad: 0x0 },
      credit: { total: 0x0, cantidad: 0x0 },
      mixed: { total: 0x0, cantidad: 0x0 },
    };
    _0x1d28de[_0x12830f(0x1a9)]((_0x5be5b7) => {
      const _0x31cdcf = _0x12830f,
        _0x490a3e = (_0x5be5b7[_0x31cdcf(0x119)] || "")["trim"](),
        _0x4f663c = parseFloat(_0x5be5b7["Importe"]) || 0x0;
      if (_0x490a3e[_0x31cdcf(0x11e)](",")) {
        const _0x2611e9 = _0x490a3e["split"](",")[_0x31cdcf(0x24b)](
            (_0x3cf7b8) => _0x3cf7b8[_0x31cdcf(0x186)]()
          ),
          _0x24d750 = (_0x5be5b7[_0x31cdcf(0x1bd)] || "")
            [_0x31cdcf(0x1d8)](",")
            [_0x31cdcf(0x24b)](
              (_0xc4b96) => parseFloat(_0xc4b96[_0x31cdcf(0x186)]()) || 0x0
            );
        _0x2611e9[_0x31cdcf(0x1a9)]((_0x5cc0f3, _0xb15e5) => {
          const _0x2bff8b = _0x31cdcf,
            _0x355046 = _0x24d750[_0xb15e5] || 0x0;
          _0x305f33[_0x5cc0f3]
            ? ((_0x305f33[_0x5cc0f3][_0x2bff8b(0x1ed)] += _0x355046),
              (_0x305f33[_0x5cc0f3][_0x2bff8b(0x17f)] += 0x1))
            : ((_0x305f33[_0x2bff8b(0x229)]["total"] += _0x355046),
              (_0x305f33[_0x2bff8b(0x229)][_0x2bff8b(0x17f)] += 0x1));
        });
      } else
        _0x305f33[_0x490a3e]
          ? ((_0x305f33[_0x490a3e][_0x31cdcf(0x1ed)] += _0x4f663c),
            (_0x305f33[_0x490a3e][_0x31cdcf(0x17f)] += 0x1))
          : ((_0x305f33["mixed"][_0x31cdcf(0x1ed)] += _0x4f663c),
            (_0x305f33["mixed"][_0x31cdcf(0x17f)] += 0x1));
    });
    if (_0x440fd0["length"] === 0x0) {
      _0x1be3ae[_0x12830f(0x174)] = _0x12830f(0x193);
      return;
    }
    const _0xf114e9 = {
      credit_card: _0x12830f(0x1c1),
      cash: _0x12830f(0x14e),
      debit_card: _0x12830f(0x125),
      credit_note_application: "📄\x20Nota\x20Crédito",
      transfer: "🏦\x20Transferencia",
      check: "📋\x20Cheque",
      credit: _0x12830f(0x1b6),
      mixed: _0x12830f(0x1bf),
    };
    let _0x3f4443 = "";
    _0x305f33 &&
      Object[_0x12830f(0x249)](_0x305f33)[_0x12830f(0x1a9)]((_0x1a7f12) => {
        const _0x2390d9 = _0x12830f,
          _0x470408 = _0x305f33[_0x1a7f12];
        _0x470408[_0x2390d9(0x1ed)] > 0x0 &&
          (_0x3f4443 +=
            _0x2390d9(0x1f6) +
            _0x470408[_0x2390d9(0x1ed)][_0x2390d9(0x137)]("es-MX", {
              minimumFractionDigits: 0x2,
            }) +
            _0x2390d9(0x11d) +
            (_0xf114e9[_0x1a7f12] || _0x1a7f12) +
            _0x2390d9(0x19c) +
            Math[_0x2390d9(0x178)](_0x470408["cantidad"]) +
            _0x2390d9(0x250));
      });
    let _0x54acba =
      _0x12830f(0x1ba) +
      _0x497e42 +
      "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-success\x20mb-0\x22>$" +
      (Math[_0x12830f(0x178)](_0x284802 * 0x64) / 0x64)[_0x12830f(0x137)](
        "es-MX",
        { minimumFractionDigits: 0x2 }
      ) +
      _0x12830f(0x23f) +
      _0x5a0305 +
      _0x12830f(0x128) +
      _0x22c5a4 +
      _0x12830f(0x255) +
      (_0x3f4443 ? _0x12830f(0x136) + _0x3f4443 + _0x12830f(0x23a) : "") +
      "\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20Sección\x20de\x20Gráficos\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-6\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-info\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Distribución\x20por\x20Método\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoMetodosPago\x22\x20width=\x22400\x22\x20height=\x22300\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-6\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-warning\x20text-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Top\x2010\x20Vendedores</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoVendedores\x22\x20width=\x22400\x22\x20height=\x22300\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📈\x20Ventas\x20Diarias\x20por\x20Vendedor</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-outline-light\x22\x20onclick=\x22toggleVendedoresChart()\x22\x20id=\x22btnToggleVendedores\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Mostrar/Ocultar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-outline-light\x20d-lg-none\x22\x20onclick=\x22fullscreenChart(\x27graficoVentasDiarias\x27)\x22\x20id=\x22btnFullscreen\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-arrows-fullscreen\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x20p-md-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chart-container\x22\x20style=\x22position:\x20relative;\x20height:\x20300px;\x20min-height:\x20250px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoVentasDiarias\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Controles\x20para\x20móvil\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-lg-none\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x20form-select-sm\x22\x20id=\x22vendedorFilter\x22\x20onchange=\x22filterVendedorChart()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22\x22>Top\x205\x20vendedores</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x20form-select-sm\x22\x20id=\x22periodoFilter\x22\x20onchange=\x22filterPeriodoChart()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22all\x22>Todo\x20el\x20mes</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week1\x22>Semana\x201\x20(1-7)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week2\x22>Semana\x202\x20(8-15)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week3\x22>Semana\x203\x20(16-23)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week4\x22>Semana\x204\x20(24-31)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-secondary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-secondary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Vendedores\x20(" +
      _0x440fd0[_0x12830f(0x1be)] +
      _0x12830f(0x14d);
    _0x440fd0[_0x12830f(0x1a9)]((_0x3cae55, _0x3eb984) => {
      const _0x1abe86 = _0x12830f,
        _0x1a1344 = _0x3cae55[_0x1abe86(0x141)]["toLocaleString"](
          _0x1abe86(0x240),
          { minimumFractionDigits: 0x2 }
        );
      _0x54acba +=
        _0x1abe86(0x22e) +
        _0x3cae55["nombre"] +
        _0x1abe86(0x1ac) +
        _0x3cae55[_0x1abe86(0x256)] +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x22>$" +
        _0x1a1344 +
        _0x1abe86(0x17e) +
        _0x3cae55["cantidadTickets"] +
        "\x20tickets</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x20mb-2\x22\x20style=\x22height:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-success\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x20" +
        ((_0x3cae55["totalVentas"] /
          (Math[_0x1abe86(0x178)](_0x284802 * 0x64) / 0x64)) *
          0x64)["toFixed"](0x1) +
        "%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        ((_0x3cae55[_0x1abe86(0x141)] /
          (Math[_0x1abe86(0x178)](_0x284802 * 0x64) / 0x64)) *
          0x64)[_0x1abe86(0x25d)](0x1) +
        _0x1abe86(0x145) +
        _0x3cae55[_0x1abe86(0x256)] +
        _0x1abe86(0x176) +
        _0x3eb984 +
        _0x1abe86(0x1d7) +
        _0x3eb984 +
        "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Ver\x20Detalle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    }),
      (_0x54acba += _0x12830f(0x152)),
      (_0x1be3ae[_0x12830f(0x174)] = _0x54acba),
      generarGraficos(_0x305f33, _0x440fd0);
  } catch (_0xf101d4) {
    _0x1be3ae[_0x12830f(0x174)] =
      _0x12830f(0x1c5) +
      _0xf101d4["message"] +
      "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20";
  } finally {
    (_0x5a72f0[_0x12830f(0x1b7)] = _0x12830f(0x188)),
      _0x232482[_0x12830f(0x118)][_0x12830f(0x10a)](_0x12830f(0x179));
  }
}
function mostrarDetalleVendedor(_0x3d3534, _0x5380d9) {
  const _0x5cbfbd = _0x5a0e,
    _0x2581e2 = window[_0x5cbfbd(0x267)] || [],
    _0x2972d1 = _0x2581e2[_0x5380d9];
  if (!_0x2972d1 || !_0x2972d1[_0x5cbfbd(0x1f1)]) {
    alert(_0x5cbfbd(0x13c));
    return;
  }
  const _0x5a61d6 = _0x2972d1["tickets"];
  let _0x37f189 =
    _0x5cbfbd(0x17c) +
    _0x3d3534 +
    "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Controles\x20de\x20ordenamiento\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-label\x20small\x22>Ordenar\x20por:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22ordenarPor\x22\x20class=\x22form-select\x20form-select-sm\x22\x20onchange=\x22reordenarTickets()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fecha-desc\x22>Fecha\x20(Más\x20reciente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fecha-asc\x22>Fecha\x20(Más\x20antigua)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22importe-desc\x22>Importe\x20(Mayor\x20a\x20menor)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22importe-asc\x22>Importe\x20(Menor\x20a\x20mayor)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ticket-desc\x22>Ticket\x20(Descendente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ticket-asc\x22>Ticket\x20(Ascendente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cliente-asc\x22>Cliente\x20(A-Z)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cliente-desc\x22>Cliente\x20(Z-A)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-label\x20small\x22>Filtrar\x20por\x20método:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22filtrarMetodo\x22\x20class=\x22form-select\x20form-select-sm\x22\x20onchange=\x22reordenarTickets()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22todos\x22>Todos\x20los\x20métodos</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cash\x22>💰\x20Efectivo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit_card\x22>💳\x20Tarjeta\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22debit_card\x22>💳\x20Tarjeta\x20Débito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22transfer\x22>🏦\x20Transferencia</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit_note_application\x22>📄\x20Nota\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22check\x22>📋\x20Cheque</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit\x22>💵\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22combinado\x22>🔄\x20Combinado</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ticket</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Cliente</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Importe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22>Fecha</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Método</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Banco</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Acciones</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22tickets-tbody\x22>\x0a\x20\x20";
  function _0x14c297(_0x5dac55, _0x2a4f7a = _0x5cbfbd(0x23e)) {
    const _0x5d9814 = _0x5cbfbd;
    let _0x339887 = _0x5dac55;
    _0x2a4f7a !== _0x5d9814(0x23e) &&
      (_0x339887 = _0x5dac55[_0x5d9814(0x257)]((_0x1132da) => {
        const _0x2149b5 = _0x5d9814,
          _0x245079 = (_0x1132da[_0x2149b5(0x119)] || "")
            [_0x2149b5(0x1f5)]()
            [_0x2149b5(0x186)]();
        if (_0x2a4f7a === _0x2149b5(0x16f))
          return (
            _0x245079[_0x2149b5(0x11e)](",") ||
            _0x245079[_0x2149b5(0x11e)]("\x20")
          );
        return _0x245079[_0x2149b5(0x11e)](_0x2a4f7a);
      }));
    let _0x16b938 = "";
    return (
      _0x339887[_0x5d9814(0x1a9)]((_0x1f5098) => {
        const _0x3403dd = _0x5d9814,
          _0x42af13 = getMetodoPagoInfo(_0x1f5098[_0x3403dd(0x119)]),
          _0x283d88 = new Date(_0x1f5098[_0x3403dd(0x175)])[
            "toLocaleDateString"
          ]("es-MX", {
            day: _0x3403dd(0x20b),
            month: _0x3403dd(0x20b),
            hour: _0x3403dd(0x20b),
            minute: _0x3403dd(0x20b),
          });
        _0x16b938 +=
          _0x3403dd(0x1ca) +
          _0x1f5098[_0x3403dd(0x197)] +
          _0x3403dd(0x258) +
          _0x283d88 +
          _0x3403dd(0x115) +
          _0x42af13[_0x3403dd(0x12c)] +
          _0x3403dd(0x1cc) +
          _0x42af13[_0x3403dd(0x256)] +
          "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x1f5098[_0x3403dd(0x1f2)] && _0x1f5098["mpo_banco"] !== "-"
            ? _0x3403dd(0x215) + _0x1f5098["mpo_banco"] + _0x3403dd(0x1da)
            : "") +
          _0x3403dd(0x155) +
          _0x1f5098[_0x3403dd(0x1a8)] +
          _0x3403dd(0x259) +
          parseFloat(_0x1f5098[_0x3403dd(0x25b)])[_0x3403dd(0x137)](
            _0x3403dd(0x240),
            { minimumFractionDigits: 0x2 }
          ) +
          _0x3403dd(0x246) +
          _0x283d88 +
          "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><span\x20class=\x22badge\x20" +
          _0x42af13[_0x3403dd(0x12c)] +
          _0x3403dd(0x13e) +
          _0x42af13[_0x3403dd(0x256)] +
          _0x3403dd(0x110) +
          (_0x1f5098[_0x3403dd(0x1f2)] || "-") +
          _0x3403dd(0x149) +
          _0x1f5098[_0x3403dd(0x197)] +
          _0x3403dd(0x1fb);
      }),
      { filasHTML: _0x16b938, ticketsFiltrados: _0x339887 }
    );
  }
  const { filasHTML: _0x5a9ebe, ticketsFiltrados: _0x5289d5 } =
    _0x14c297(_0x5a61d6);
  _0x37f189 += _0x5a9ebe;
  const _0x1db986 = _0x5a61d6[_0x5cbfbd(0x202)](
    (_0x43559b, _0x5db71b) =>
      _0x43559b + parseFloat(_0x5db71b[_0x5cbfbd(0x25b)]),
    0x0
  );
  (_0x37f189 +=
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tfoot\x20id=\x22tickets-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>TOTAL</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$" +
    _0x1db986[_0x5cbfbd(0x137)](_0x5cbfbd(0x240), {
      minimumFractionDigits: 0x2,
    }) +
    _0x5cbfbd(0x1af) +
    _0x5a61d6[_0x5cbfbd(0x1be)] +
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22\x20colspan=\x223\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-md-none\x22>" +
    _0x5a61d6[_0x5cbfbd(0x1be)] +
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20"),
    document[_0x5cbfbd(0x25c)][_0x5cbfbd(0x1c7)](_0x5cbfbd(0x112), _0x37f189),
    (window[_0x5cbfbd(0x162)] = function () {
      const _0x32377a = _0x5cbfbd,
        _0x2d7c12 = document["getElementById"](_0x32377a(0x1cd))[
          _0x32377a(0x17d)
        ],
        _0x18eec3 = document[_0x32377a(0x189)](_0x32377a(0x1d6))[
          _0x32377a(0x17d)
        ];
      let _0x12ac01 = [..._0x5a61d6];
      _0x18eec3 !== _0x32377a(0x23e) &&
        (_0x12ac01 = _0x5a61d6["filter"]((_0x361ee3) => {
          const _0x196926 = _0x32377a,
            _0x83e00b = (_0x361ee3[_0x196926(0x119)] || "")
              [_0x196926(0x1f5)]()
              ["trim"]();
          if (_0x18eec3 === _0x196926(0x16f))
            return (
              _0x83e00b[_0x196926(0x11e)](",") ||
              _0x83e00b[_0x196926(0x11e)]("\x20")
            );
          return _0x83e00b[_0x196926(0x11e)](_0x18eec3);
        }));
      switch (_0x2d7c12) {
        case _0x32377a(0x1ec):
          _0x12ac01[_0x32377a(0x22f)](
            (_0x55ded8, _0x46bb48) =>
              new Date(_0x46bb48[_0x32377a(0x175)]) -
              new Date(_0x55ded8["or_fecha"])
          );
          break;
        case _0x32377a(0x24d):
          _0x12ac01[_0x32377a(0x22f)](
            (_0x4ad226, _0x596e9d) =>
              new Date(_0x4ad226[_0x32377a(0x175)]) -
              new Date(_0x596e9d[_0x32377a(0x175)])
          );
          break;
        case _0x32377a(0x156):
          _0x12ac01["sort"](
            (_0x4881a5, _0x527854) =>
              parseFloat(_0x527854["Importe"]) -
              parseFloat(_0x4881a5[_0x32377a(0x25b)])
          );
          break;
        case _0x32377a(0x1b8):
          _0x12ac01[_0x32377a(0x22f)](
            (_0x50aeab, _0x146d65) =>
              parseFloat(_0x50aeab[_0x32377a(0x25b)]) -
              parseFloat(_0x146d65[_0x32377a(0x25b)])
          );
          break;
        case _0x32377a(0x18c):
          _0x12ac01[_0x32377a(0x22f)]((_0x19c391, _0x555c43) =>
            _0x555c43[_0x32377a(0x197)]["localeCompare"](
              _0x19c391[_0x32377a(0x197)],
              undefined,
              { numeric: !![] }
            )
          );
          break;
        case "ticket-asc":
          _0x12ac01["sort"]((_0xb67639, _0x416f9e) =>
            _0xb67639[_0x32377a(0x197)][_0x32377a(0x1eb)](
              _0x416f9e[_0x32377a(0x197)],
              undefined,
              { numeric: !![] }
            )
          );
          break;
        case _0x32377a(0x1a3):
          _0x12ac01[_0x32377a(0x22f)]((_0x41b9a6, _0x3ff6a4) =>
            _0x41b9a6[_0x32377a(0x1a8)][_0x32377a(0x1eb)](
              _0x3ff6a4[_0x32377a(0x1a8)]
            )
          );
          break;
        case _0x32377a(0x220):
          _0x12ac01[_0x32377a(0x22f)]((_0x2436df, _0x308784) =>
            _0x308784["Cliente"][_0x32377a(0x1eb)](_0x2436df[_0x32377a(0x1a8)])
          );
          break;
      }
      const _0xa80360 = document["getElementById"](_0x32377a(0x166)),
        _0x43b869 = document[_0x32377a(0x189)](_0x32377a(0x15f));
      let _0x187a01 = "";
      _0x12ac01[_0x32377a(0x1a9)]((_0x3d792b) => {
        const _0x24e50f = _0x32377a,
          _0x771286 = getMetodoPagoInfo(_0x3d792b["Metodo_pago"]),
          _0x4188a5 = new Date(_0x3d792b[_0x24e50f(0x175)])[_0x24e50f(0x158)](
            _0x24e50f(0x240),
            {
              day: _0x24e50f(0x20b),
              month: _0x24e50f(0x20b),
              hour: _0x24e50f(0x20b),
              minute: _0x24e50f(0x20b),
            }
          );
        _0x187a01 +=
          _0x24e50f(0x1cb) +
          _0x3d792b[_0x24e50f(0x24f)] +
          _0x24e50f(0x154) +
          _0x3d792b["cliente"] +
          _0x24e50f(0x259) +
          parseFloat(_0x3d792b[_0x24e50f(0x25b)])[_0x24e50f(0x137)](
            _0x24e50f(0x240),
            { minimumFractionDigits: 0x2 }
          ) +
          _0x24e50f(0x238) +
          _0x4188a5 +
          _0x24e50f(0x15d) +
          _0x771286[_0x24e50f(0x12c)] +
          _0x24e50f(0x13e) +
          _0x771286[_0x24e50f(0x256)] +
          _0x24e50f(0x24e) +
          (_0x3d792b[_0x24e50f(0x1a2)] || "-") +
          "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-info\x20btn-sm\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22verTicket(\x27" +
          _0x3d792b[_0x24e50f(0x24f)] +
          "\x27)\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Ver\x20ticket\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20";
      }),
        (_0xa80360[_0x32377a(0x174)] = _0x187a01);
      const _0xfce2b3 = _0x12ac01[_0x32377a(0x202)](
        (_0x5b3eb5, _0x5b69f1) => _0x5b3eb5 + parseFloat(_0x5b69f1["Importe"]),
        0x0
      );
      _0x43b869["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>" +
        (_0x18eec3 !== "todos" ? "FILTRADO" : "TOTAL") +
        "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$" +
        _0xfce2b3["toLocaleString"]("es-MX", { minimumFractionDigits: 0x2 }) +
        _0x32377a(0x18f) +
        _0x12ac01[_0x32377a(0x1be)] +
        _0x32377a(0x1f0) +
        (_0x18eec3 !== "todos"
          ? "\x20de\x20" + _0x5a61d6[_0x32377a(0x1be)]
          : "") +
        _0x32377a(0x13f) +
        _0x12ac01[_0x32377a(0x1be)] +
        "\x20tickets" +
        (_0x18eec3 !== _0x32377a(0x23e)
          ? _0x32377a(0x263) + _0x5a61d6[_0x32377a(0x1be)]
          : "") +
        "</th>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20";
    });
  const _0x2fad8c = new bootstrap[_0x5cbfbd(0x1f3)](
    document["getElementById"](_0x5cbfbd(0x219))
  );
  _0x2fad8c[_0x5cbfbd(0x1b1)](),
    document[_0x5cbfbd(0x189)](_0x5cbfbd(0x219))["addEventListener"](
      _0x5cbfbd(0x199),
      () => {
        const _0x38ffd3 = _0x5cbfbd;
        document[_0x38ffd3(0x189)](_0x38ffd3(0x219))[_0x38ffd3(0x21d)](),
          delete window[_0x38ffd3(0x162)];
      }
    );
}
function _0x5a0e(_0x1e466f, _0x38d874) {
  const _0x35ae05 = _0x35ae();
  return (
    (_0x5a0e = function (_0x5a0e53, _0x458ad9) {
      _0x5a0e53 = _0x5a0e53 - 0x10a;
      let _0x34f5f4 = _0x35ae05[_0x5a0e53];
      return _0x34f5f4;
    }),
    _0x5a0e(_0x1e466f, _0x38d874)
  );
}
function generarGraficos(_0x4c5417, _0x296bfc) {
  const _0x2e2bf8 = _0x5a0e;
  if (window["chartMetodosPago"])
    window["chartMetodosPago"][_0x2e2bf8(0x200)]();
  if (window[_0x2e2bf8(0x16e)]) window[_0x2e2bf8(0x16e)]["destroy"]();
  if (window["chartVentasDiarias"])
    window[_0x2e2bf8(0x1b9)][_0x2e2bf8(0x200)]();
  const _0xab7049 = [],
    _0x2fd6c1 = [],
    _0x33c536 = [],
    _0x5d2784 = {
      credit_card: _0x2e2bf8(0x1c2),
      cash: _0x2e2bf8(0x211),
      debit_card: "#0dcaf0",
      credit_note_application: "#ffc107",
      transfer: "#6c757d",
      check: _0x2e2bf8(0x224),
      credit: _0x2e2bf8(0x1d9),
      mixed: _0x2e2bf8(0x1a0),
    },
    _0x3cb21d = {
      credit_card: "Tarjeta\x20Crédito",
      cash: "Efectivo",
      debit_card: _0x2e2bf8(0x1a4),
      credit_note_application: _0x2e2bf8(0x18e),
      transfer: _0x2e2bf8(0x228),
      check: _0x2e2bf8(0x260),
      credit: _0x2e2bf8(0x150),
      mixed: _0x2e2bf8(0x1ad),
    };
  Object["keys"](_0x4c5417)[_0x2e2bf8(0x1a9)]((_0x43b1d7) => {
    const _0x4eacf6 = _0x2e2bf8;
    _0x4c5417[_0x43b1d7][_0x4eacf6(0x1ed)] > 0x0 &&
      (_0xab7049[_0x4eacf6(0x10f)](_0x4c5417[_0x43b1d7]["total"]),
      _0x2fd6c1[_0x4eacf6(0x10f)](_0x3cb21d[_0x43b1d7] || _0x43b1d7),
      _0x33c536[_0x4eacf6(0x10f)](_0x5d2784[_0x43b1d7] || _0x4eacf6(0x1c0)));
  });
  const _0x18180b = document["getElementById"](_0x2e2bf8(0x142));
  _0x18180b &&
    (window[_0x2e2bf8(0x10c)] = new Chart(_0x18180b, {
      type: _0x2e2bf8(0x243),
      data: {
        labels: _0x2fd6c1,
        datasets: [
          {
            data: _0xab7049,
            backgroundColor: _0x33c536,
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
            position: _0x2e2bf8(0x10d),
            labels: { padding: 0xf, usePointStyle: !![] },
          },
          tooltip: {
            callbacks: {
              label: function (_0x36d79f) {
                const _0x327b2b = _0x2e2bf8,
                  _0x57ea41 = _0x36d79f[_0x327b2b(0x1e6)][_0x327b2b(0x251)][
                    "reduce"
                  ]((_0x3fe9fe, _0x523a83) => _0x3fe9fe + _0x523a83, 0x0),
                  _0x279603 = ((_0x36d79f[_0x327b2b(0x187)] / _0x57ea41) *
                    0x64)["toFixed"](0x1);
                return (
                  _0x36d79f[_0x327b2b(0x230)] +
                  _0x327b2b(0x164) +
                  _0x36d79f["parsed"]["toLocaleString"]("es-MX", {
                    minimumFractionDigits: 0x2,
                  }) +
                  "\x20(" +
                  _0x279603 +
                  "%)"
                );
              },
            },
          },
        },
      },
    }));
  const _0x132df3 = [..._0x296bfc]
      ["sort"](
        (_0x22bbba, _0x33518c) =>
          _0x33518c[_0x2e2bf8(0x141)] - _0x22bbba[_0x2e2bf8(0x141)]
      )
      ["slice"](0x0, 0xa),
    _0xb9da1c = _0x132df3[_0x2e2bf8(0x24b)]((_0x3b3214) =>
      _0x3b3214[_0x2e2bf8(0x256)][_0x2e2bf8(0x1be)] > 0xf
        ? _0x3b3214[_0x2e2bf8(0x256)]["substring"](0x0, 0xf) + _0x2e2bf8(0x165)
        : _0x3b3214[_0x2e2bf8(0x256)]
    ),
    _0x3ce030 = _0x132df3["map"]((_0x124330) => _0x124330[_0x2e2bf8(0x141)]),
    _0x3a2630 = document[_0x2e2bf8(0x189)](_0x2e2bf8(0x24a));
  _0x3a2630 &&
    (window[_0x2e2bf8(0x16e)] = new Chart(_0x3a2630, {
      type: _0x2e2bf8(0x11c),
      data: {
        labels: _0xb9da1c,
        datasets: [
          {
            label: _0x2e2bf8(0x1d1),
            data: _0x3ce030,
            backgroundColor: _0x2e2bf8(0x1bb),
            borderColor: _0x2e2bf8(0x14c),
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
              label: function (_0x59490b) {
                const _0x2706f3 = _0x2e2bf8;
                return (
                  _0x59490b[_0x2706f3(0x230)] +
                  _0x2706f3(0x164) +
                  _0x59490b["parsed"]["x"][_0x2706f3(0x137)](_0x2706f3(0x240), {
                    minimumFractionDigits: 0x2,
                  })
                );
              },
            },
          },
        },
        scales: {
          x: {
            beginAtZero: !![],
            ticks: {
              callback: function (_0x38afa1) {
                const _0x59f27c = _0x2e2bf8;
                return "$" + _0x38afa1[_0x59f27c(0x137)](_0x59f27c(0x240));
              },
            },
          },
        },
      },
    }));
  const _0x77718a = document[_0x2e2bf8(0x189)]("graficoVentasDiarias");
  if (_0x77718a) {
    const _0x231c48 = {},
      _0x186c79 = {};
    _0x296bfc[_0x2e2bf8(0x1a9)]((_0x2ccb1b) => {
      const _0x1b303f = _0x2e2bf8;
      _0x2ccb1b[_0x1b303f(0x1f1)] &&
        _0x2ccb1b["tickets"][_0x1b303f(0x1a9)]((_0x298ec6) => {
          const _0xf20077 = _0x1b303f,
            _0x485ef8 = _0x298ec6["or_fecha"][_0xf20077(0x1d8)]("T")[0x0],
            _0x3e1a44 = new Date(_0x485ef8)[_0xf20077(0x11f)]();
          !_0x231c48[_0x3e1a44] && (_0x231c48[_0x3e1a44] = {}),
            !_0x231c48[_0x3e1a44][_0x2ccb1b[_0xf20077(0x256)]] &&
              (_0x231c48[_0x3e1a44][_0x2ccb1b["nombre"]] = 0x0),
            (_0x231c48[_0x3e1a44][_0x2ccb1b["nombre"]] += parseFloat(
              _0x298ec6[_0xf20077(0x25b)]
            )),
            (_0x186c79[_0x2ccb1b[_0xf20077(0x256)]] = !![]);
        });
    });
    const _0x53b02a = Object["keys"](_0x231c48)
        [_0x2e2bf8(0x24b)](Number)
        [_0x2e2bf8(0x22f)]((_0x4b9717, _0xcc4c32) => _0x4b9717 - _0xcc4c32),
      _0x284c75 = window["innerWidth"] < 0x300,
      _0x206c63 = _0x284c75 ? 0x5 : 0x8,
      _0x19338f = [..._0x296bfc]
        [_0x2e2bf8(0x22f)](
          (_0x28fcb2, _0x39755e) =>
            _0x39755e[_0x2e2bf8(0x141)] - _0x28fcb2["totalVentas"]
        )
        ["slice"](0x0, _0x206c63)
        [_0x2e2bf8(0x24b)]((_0x57f1e4) => _0x57f1e4[_0x2e2bf8(0x256)]),
      _0x515c12 = [
        _0x2e2bf8(0x1c2),
        _0x2e2bf8(0x1d9),
        _0x2e2bf8(0x211),
        _0x2e2bf8(0x15a),
        _0x2e2bf8(0x1a0),
        "#fd7e14",
        _0x2e2bf8(0x1f8),
        _0x2e2bf8(0x25e),
      ],
      _0x463395 = _0x19338f[_0x2e2bf8(0x24b)]((_0x3a1bbe, _0x264741) => {
        const _0x284048 = _0x2e2bf8,
          _0x3a44fe = _0x53b02a[_0x284048(0x24b)]((_0xca0509) => {
            return _0x231c48[_0xca0509] && _0x231c48[_0xca0509][_0x3a1bbe]
              ? _0x231c48[_0xca0509][_0x3a1bbe]
              : 0x0;
          });
        return {
          label:
            _0x284c75 && _0x3a1bbe["length"] > 0xf
              ? _0x3a1bbe["substring"](0x0, 0xf) + "..."
              : _0x3a1bbe,
          data: _0x3a44fe,
          borderColor: _0x515c12[_0x264741 % _0x515c12[_0x284048(0x1be)]],
          backgroundColor:
            _0x515c12[_0x264741 % _0x515c12[_0x284048(0x1be)]] + "20",
          borderWidth: _0x284c75 ? 0x3 : 0x2,
          fill: ![],
          tension: 0.3,
          pointRadius: _0x284c75 ? 0x5 : 0x4,
          pointHoverRadius: _0x284c75 ? 0x8 : 0x6,
          pointBackgroundColor:
            _0x515c12[_0x264741 % _0x515c12[_0x284048(0x1be)]],
          pointBorderColor: _0x284048(0x22d),
          pointBorderWidth: 0x2,
        };
      });
    window[_0x2e2bf8(0x183)] = {
      diasDelMes: _0x53b02a,
      ventasPorDia: _0x231c48,
      topVendedores: _0x19338f,
      datasets: _0x463395,
      coloresLineas: _0x515c12,
    };
    const _0x173ff5 = document[_0x2e2bf8(0x189)](_0x2e2bf8(0x12f));
    _0x173ff5 &&
      _0x284c75 &&
      ((_0x173ff5["innerHTML"] =
        "<option\x20value=\x22\x22>Top\x205\x20vendedores</option>"),
      _0x19338f[_0x2e2bf8(0x1a9)]((_0x192a91) => {
        const _0x40cd41 = _0x2e2bf8,
          _0x34e091 = document["createElement"](_0x40cd41(0x1a7));
        (_0x34e091[_0x40cd41(0x17d)] = _0x192a91),
          (_0x34e091["textContent"] =
            _0x192a91[_0x40cd41(0x1be)] > 0x19
              ? _0x192a91["substring"](0x0, 0x19) + _0x40cd41(0x165)
              : _0x192a91),
          _0x173ff5["appendChild"](_0x34e091);
      })),
      (window[_0x2e2bf8(0x1b9)] = new Chart(_0x77718a, {
        type: _0x2e2bf8(0x132),
        data: {
          labels: _0x53b02a[_0x2e2bf8(0x24b)]((_0x3ae1fe) =>
            _0x284c75 ? "" + _0x3ae1fe : _0x2e2bf8(0x245) + _0x3ae1fe
          ),
          datasets: _0x463395,
        },
        options: {
          responsive: !![],
          maintainAspectRatio: ![],
          devicePixelRatio: window[_0x2e2bf8(0x196)] || 0x1,
          plugins: {
            legend: {
              position: _0x284c75 ? _0x2e2bf8(0x10d) : _0x2e2bf8(0x16b),
              display: !_0x284c75,
              labels: {
                padding: _0x284c75 ? 0xa : 0xf,
                usePointStyle: !![],
                boxWidth: _0x284c75 ? 0xf : 0x14,
                font: { size: _0x284c75 ? 0xa : 0xc },
              },
            },
            tooltip: {
              mode: _0x2e2bf8(0x262),
              intersect: ![],
              backgroundColor: _0x2e2bf8(0x253),
              titleColor: _0x2e2bf8(0x22d),
              bodyColor: _0x2e2bf8(0x22d),
              borderColor: "#dee2e6",
              borderWidth: 0x1,
              cornerRadius: 0x8,
              displayColors: !![],
              padding: 0xc,
              callbacks: {
                title: function (_0x5aa5b2) {
                  const _0x43f970 = _0x2e2bf8;
                  return _0x43f970(0x245) + _0x5aa5b2[0x0][_0x43f970(0x230)];
                },
                label: function (_0x5093a8) {
                  const _0xf4a2d1 = _0x2e2bf8;
                  return (
                    _0x5093a8[_0xf4a2d1(0x1e6)][_0xf4a2d1(0x230)] +
                    _0xf4a2d1(0x164) +
                    _0x5093a8[_0xf4a2d1(0x187)]["y"][_0xf4a2d1(0x137)](
                      _0xf4a2d1(0x240),
                      { minimumFractionDigits: 0x2 }
                    )
                  );
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: !_0x284c75,
                text: _0x2e2bf8(0x20f),
                font: { size: _0x284c75 ? 0xa : 0xc },
              },
              ticks: {
                font: { size: _0x284c75 ? 0xa : 0xb },
                maxTicksLimit: _0x284c75 ? 0x8 : 0xf,
              },
              grid: { display: !![], color: _0x2e2bf8(0x13d), lineWidth: 0x1 },
            },
            y: {
              beginAtZero: !![],
              title: {
                display: !_0x284c75,
                text: "Ventas\x20($)",
                font: { size: _0x284c75 ? 0xa : 0xc },
              },
              ticks: {
                font: { size: _0x284c75 ? 0x9 : 0xb },
                callback: function (_0x2c1c6e) {
                  const _0x6059af = _0x2e2bf8;
                  if (_0x284c75)
                    return _0x2c1c6e >= 0x3e8
                      ? "$" + (_0x2c1c6e / 0x3e8)["toFixed"](0x0) + "K"
                      : "$" + _0x2c1c6e;
                  return "$" + _0x2c1c6e[_0x6059af(0x137)]("es-MX");
                },
                maxTicksLimit: _0x284c75 ? 0x6 : 0x8,
              },
              grid: { display: !![], color: _0x2e2bf8(0x13d), lineWidth: 0x1 },
            },
          },
          interaction: { mode: "nearest", axis: "x", intersect: ![] },
          elements: {
            point: {
              hoverBackgroundColor: _0x2e2bf8(0x22d),
              hoverBorderWidth: 0x3,
            },
          },
        },
      }));
  }
}
(window["mostrarModalReporteVentas"] = mostrarModalReporteVentas),
  (window[_0x100a03(0x130)] = cerrarModalReporteVentas),
  (window[_0x100a03(0x172)] = generarReporteVentas),
  (window[_0x100a03(0x234)] = mostrarDetalleVendedor),
  document[_0x100a03(0x134)](_0x100a03(0x181), function () {
    const _0x285c82 = _0x100a03,
      _0x279d12 = document[_0x285c82(0x189)](_0x285c82(0x266));
    if (_0x279d12) {
      const _0x3f139c = new Date(),
        _0x29513b = _0x3f139c[_0x285c82(0x226)](),
        _0x3518be = (_0x3f139c[_0x285c82(0x177)]() + 0x1)
          [_0x285c82(0x261)]()
          [_0x285c82(0x131)](0x2, "0");
      _0x279d12[_0x285c82(0x17d)] = _0x29513b + "-" + _0x3518be;
    }
  });
function toggleVendedoresChart() {
  const _0x1ea640 = _0x100a03;
  if (window["chartVentasDiarias"]) {
    const _0x3a019e =
      window["chartVentasDiarias"]["options"][_0x1ea640(0x117)]["legend"];
    (_0x3a019e[_0x1ea640(0x111)] = !_0x3a019e["display"]),
      window[_0x1ea640(0x1b9)][_0x1ea640(0x210)]();
  }
}
function fullscreenChart(_0x429912) {
  const _0x204910 = _0x100a03,
    _0x5f055c = document[_0x204910(0x244)]("#" + _0x429912)[_0x204910(0x1b2)](
      _0x204910(0x1e3)
    );
  _0x5f055c &&
    (_0x5f055c[_0x204910(0x118)][_0x204910(0x12a)](_0x204910(0x231))
      ? (_0x5f055c[_0x204910(0x118)][_0x204910(0x21d)](_0x204910(0x231)),
        (document[_0x204910(0x25c)]["style"][_0x204910(0x25f)] =
          _0x204910(0x252)),
        window[_0x204910(0x1b9)] &&
          window[_0x204910(0x1b9)][_0x204910(0x225)]())
      : (_0x5f055c[_0x204910(0x118)][_0x204910(0x10a)](_0x204910(0x231)),
        (document[_0x204910(0x25c)][_0x204910(0x1ab)][_0x204910(0x25f)] =
          "hidden"),
        setTimeout(() => {
          const _0x1986d1 = _0x204910;
          window["chartVentasDiarias"] &&
            window[_0x1986d1(0x1b9)][_0x1986d1(0x225)]();
        }, 0x64)));
}
function filterVendedorChart() {
  const _0x42fa7e = _0x100a03;
  if (!window[_0x42fa7e(0x1b9)] || !window["ventasDiariasData"]) return;
  const _0x3e857e =
      document[_0x42fa7e(0x189)]("vendedorFilter")[_0x42fa7e(0x17d)],
    {
      diasDelMes: _0x40b09d,
      ventasPorDia: _0x5b6794,
      topVendedores: _0x57c631,
      coloresLineas: _0x462982,
    } = window[_0x42fa7e(0x183)];
  let _0x1af19a;
  if (_0x3e857e === "")
    _0x1af19a = _0x57c631[_0x42fa7e(0x24b)]((_0x30fffb, _0x26d49d) => {
      const _0x2e9599 = _0x42fa7e,
        _0x2a5b76 = _0x40b09d[_0x2e9599(0x24b)]((_0x1af1c5) => {
          return _0x5b6794[_0x1af1c5] && _0x5b6794[_0x1af1c5][_0x30fffb]
            ? _0x5b6794[_0x1af1c5][_0x30fffb]
            : 0x0;
        });
      return {
        label:
          _0x30fffb["length"] > 0xf
            ? _0x30fffb[_0x2e9599(0x19f)](0x0, 0xf) + "..."
            : _0x30fffb,
        data: _0x2a5b76,
        borderColor: _0x462982[_0x26d49d % _0x462982[_0x2e9599(0x1be)]],
        backgroundColor:
          _0x462982[_0x26d49d % _0x462982[_0x2e9599(0x1be)]] + "20",
        borderWidth: 0x3,
        fill: ![],
        tension: 0.3,
        pointRadius: 0x5,
        pointHoverRadius: 0x8,
        pointBackgroundColor: _0x462982[_0x26d49d % _0x462982["length"]],
        pointBorderColor: _0x2e9599(0x22d),
        pointBorderWidth: 0x2,
      };
    });
  else {
    const _0x306620 = _0x57c631[_0x42fa7e(0x135)](_0x3e857e),
      _0x2bce48 = _0x40b09d[_0x42fa7e(0x24b)]((_0x465e85) => {
        return _0x5b6794[_0x465e85] && _0x5b6794[_0x465e85][_0x3e857e]
          ? _0x5b6794[_0x465e85][_0x3e857e]
          : 0x0;
      });
    _0x1af19a = [
      {
        label: _0x3e857e,
        data: _0x2bce48,
        borderColor: _0x462982[_0x306620 % _0x462982["length"]],
        backgroundColor:
          _0x462982[_0x306620 % _0x462982[_0x42fa7e(0x1be)]] + "20",
        borderWidth: 0x4,
        fill: !![],
        tension: 0.3,
        pointRadius: 0x6,
        pointHoverRadius: 0xa,
        pointBackgroundColor:
          _0x462982[_0x306620 % _0x462982[_0x42fa7e(0x1be)]],
        pointBorderColor: _0x42fa7e(0x22d),
        pointBorderWidth: 0x3,
      },
    ];
  }
  (window[_0x42fa7e(0x1b9)][_0x42fa7e(0x251)]["datasets"] = _0x1af19a),
    window[_0x42fa7e(0x1b9)][_0x42fa7e(0x210)]();
}
function filterPeriodoChart() {
  const _0x141c22 = _0x100a03;
  if (!window[_0x141c22(0x1b9)] || !window["ventasDiariasData"]) return;
  const _0x281246 = document[_0x141c22(0x189)](_0x141c22(0x1ae))["value"],
    {
      diasDelMes: _0x397e23,
      ventasPorDia: _0x11f67a,
      topVendedores: _0x577814,
      coloresLineas: _0x2bd80c,
    } = window[_0x141c22(0x183)];
  let _0xb8c98d,
    _0x553d96 = _0x141c22(0x245);
  switch (_0x281246) {
    case _0x141c22(0x19e):
      (_0xb8c98d = _0x397e23[_0x141c22(0x257)](
        (_0xfd3545) => _0xfd3545 >= 0x1 && _0xfd3545 <= 0x7
      )),
        (_0x553d96 = "S1-");
      break;
    case _0x141c22(0x241):
      (_0xb8c98d = _0x397e23[_0x141c22(0x257)](
        (_0xec487) => _0xec487 >= 0x8 && _0xec487 <= 0xf
      )),
        (_0x553d96 = _0x141c22(0x22c));
      break;
    case _0x141c22(0x192):
      (_0xb8c98d = _0x397e23[_0x141c22(0x257)](
        (_0x2757cc) => _0x2757cc >= 0x10 && _0x2757cc <= 0x17
      )),
        (_0x553d96 = _0x141c22(0x268));
      break;
    case "week4":
      (_0xb8c98d = _0x397e23[_0x141c22(0x257)](
        (_0x565cc0) => _0x565cc0 >= 0x18 && _0x565cc0 <= 0x1f
      )),
        (_0x553d96 = _0x141c22(0x194));
      break;
    default:
      (_0xb8c98d = _0x397e23), (_0x553d96 = "");
  }
  window[_0x141c22(0x1b9)]["data"][_0x141c22(0x11b)] = _0xb8c98d[
    _0x141c22(0x24b)
  ]((_0xd8ae8b) => "" + _0x553d96 + _0xd8ae8b);
  const _0x51bb75 = document[_0x141c22(0x189)](_0x141c22(0x12f))[
      _0x141c22(0x17d)
    ],
    _0x12f5b0 = _0x51bb75 === "" ? _0x577814 : [_0x51bb75],
    _0x17c3c4 = _0x12f5b0["map"]((_0x2eb59a, _0x506fd6) => {
      const _0x2abf34 = _0x141c22,
        _0x36e737 = _0xb8c98d[_0x2abf34(0x24b)]((_0x12eecd) => {
          return _0x11f67a[_0x12eecd] && _0x11f67a[_0x12eecd][_0x2eb59a]
            ? _0x11f67a[_0x12eecd][_0x2eb59a]
            : 0x0;
        }),
        _0xdd97ce = _0x577814[_0x2abf34(0x135)](_0x2eb59a);
      return {
        label:
          _0x2eb59a[_0x2abf34(0x1be)] > 0xf
            ? _0x2eb59a[_0x2abf34(0x19f)](0x0, 0xf) + _0x2abf34(0x165)
            : _0x2eb59a,
        data: _0x36e737,
        borderColor: _0x2bd80c[_0xdd97ce % _0x2bd80c[_0x2abf34(0x1be)]],
        backgroundColor:
          _0x2bd80c[_0xdd97ce % _0x2bd80c[_0x2abf34(0x1be)]] + "20",
        borderWidth: _0x51bb75 === "" ? 0x3 : 0x4,
        fill: _0x51bb75 !== "",
        tension: 0.3,
        pointRadius: _0x51bb75 === "" ? 0x5 : 0x6,
        pointHoverRadius: _0x51bb75 === "" ? 0x8 : 0xa,
        pointBackgroundColor:
          _0x2bd80c[_0xdd97ce % _0x2bd80c[_0x2abf34(0x1be)]],
        pointBorderColor: "#fff",
        pointBorderWidth: _0x51bb75 === "" ? 0x2 : 0x3,
      };
    });
  (window[_0x141c22(0x1b9)][_0x141c22(0x251)]["datasets"] = _0x17c3c4),
    window[_0x141c22(0x1b9)][_0x141c22(0x210)]();
}
function _0x35ae() {
  const _0x32df4c = [
    "payments",
    "destroy",
    "ord_descripcion",
    "reduce",
    "or_impuestos",
    "18693378sUmwth",
    "appendChild",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20d-none\x20d-lg-table-cell\x22>$",
    "check",
    "❓\x20Otro",
    "4063390BbAbGZ",
    "or_nombreVendedor",
    "2-digit",
    "completed",
    "Error\x20en\x20la\x20API\x20original",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Método\x20de\x20Pago:</strong>\x20",
    "Días\x20del\x20Mes",
    "update",
    "#198754",
    "SUCCESS",
    "PLAYERA\x20PUMA\x20CABALLERO\x20630299\x2001\x20TALLA\x20XL\x20AZUL\x20MARINO/VERDE",
    "toast-container\x20position-fixed\x20top-0\x20end-0\x20p-3",
    "<small\x20class=\x22text-muted\x20d-block\x20d-lg-none\x22>",
    "\x20-\x20",
    "\x0a\x0aVerifica\x20que\x20la\x20API\x20esté\x20funcionando\x20correctamente.",
    "from",
    "detalleVendedorModal",
    "or_total",
    "text",
    "Generando...",
    "remove",
    "ultimosTickets",
    "od_cantidad",
    "cliente-desc",
    "\x20/\x20",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "credit_note_application",
    "#212529",
    "resize",
    "getFullYear",
    "cte_Nombre",
    "Transferencia",
    "mixed",
    "credit",
    "or_codMon",
    "S2-",
    "#fff",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-sm-6\x20col-lg-4\x20col-xl-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20shadow-sm\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "sort",
    "label",
    "chart-fullscreen",
    "cash",
    "card",
    "mostrarDetalleVendedor",
    "📋\x20Cheque",
    "1290768HzrACY",
    "Error\x20al\x20cargar\x20el\x20ticket\x20",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "has",
    "\x20artículos)</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20style=\x22min-width:\x2080px;\x22>SKU</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22min-width:\x20200px;\x22>Descripción</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-center\x22\x20style=\x22min-width:\x2080px;\x22>Cantidad</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-end\x20d-none\x20d-md-table-cell\x22\x20style=\x22min-width:\x20100px;\x22>Precio\x20unitario</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-end\x20d-none\x20d-lg-table-cell\x22\x20style=\x22min-width:\x20100px;\x22>Impuesto</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-end\x20d-none\x20d-md-table-cell\x22\x20style=\x22min-width:\x20100px;\x22>Total</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22>Total:\x20$",
    "todos",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Ventas</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-primary\x20mb-0\x22>",
    "es-MX",
    "week2",
    "or_idordenExt",
    "doughnut",
    "querySelector",
    "Día\x20",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-md-table-cell\x22><small>",
    "Sin\x20vendedor",
    "ticketDetalleModal",
    "keys",
    "graficoVendedores",
    "map",
    "getInstance",
    "fecha-asc",
    "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small\x20class=\x22text-muted\x22>",
    "ticket",
    "\x20tickets)</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "data",
    "auto",
    "rgba(0,0,0,0.9)",
    "180963UtxOHG",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Tickets</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20",
    "nombre",
    "filter",
    "</code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$",
    "⚠️\x20API\x20no\x20disponible\x0a\x0aSe\x20están\x20mostrando\x20datos\x20de\x20ejemplo\x20para\x20el\x20ticket\x20",
    "Importe",
    "body",
    "toFixed",
    "#0dcaf0",
    "overflow",
    "Cheque",
    "toString",
    "index",
    "\x20de\x20",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-2\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x22>Total</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>$",
    "od_producto",
    "mesReporte",
    "ultimosVendedores",
    "S3-",
    "add",
    "cantidadTickets",
    "chartMetodosPago",
    "bottom",
    "...\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "push",
    "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><small\x20class=\x22text-muted\x22>",
    "display",
    "beforeend",
    "verTicket",
    "26KApnNh",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20",
    "or_idorden",
    "plugins",
    "classList",
    "Metodo_pago",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "labels",
    "bar",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>",
    "includes",
    "getDate",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Información\x20adicional\x20del\x20ticket\x20para\x20móviles\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>Subtotal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>$",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-success\x22>💰\x20Información\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Subtotal:</strong>\x20<span\x20class=\x22text-info\x22>$",
    "or_series",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20selecciona\x20un\x20mes\x20para\x20generar\x20el\x20reporte.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "credit_card",
    "💳\x20Tarjeta\x20Débito",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20text-success\x20fw-bold\x20d-none\x20d-md-table-cell\x22>$",
    "or_subtotal",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Vendedores</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-info\x20mb-0\x22>",
    "warning",
    "contains",
    "bg-secondary",
    "clase",
    "debit_card",
    "Datos\x20de\x20ejemplo\x20-\x20API\x20no\x20disponible",
    "vendedorFilter",
    "cerrarModalReporteVentas",
    "padStart",
    "line",
    "or_descTotal",
    "addEventListener",
    "indexOf",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>💳\x20Métodos\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "toLocaleString",
    "bg-primary",
    "bg-danger",
    "524392kQSzBp",
    "bg-gradient",
    "No\x20se\x20encontraron\x20datos\x20del\x20vendedor",
    "#e9ecef",
    "\x22\x20style=\x22min-width:\x20120px;\x20font-size:\x200.75rem;\x20text-align:\x20center;\x22>",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22\x20colspan=\x223\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-md-none\x22>",
    "createElement",
    "totalVentas",
    "graficoMetodosPago",
    "MXN",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-4\x20col-md-5\x20d-none\x20d-md-block\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-sm\x20table-borderless\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22><strong>Subtotal:</strong></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22>$",
    "%\x20del\x20total\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20w-100\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22mostrarDetalleVendedor(\x27",
    "59660dikdoI",
    "or_metodoPago",
    "reporteVentasModal",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-info\x20btn-sm\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22verTicket(\x27",
    "mpo_idMetodoPago",
    "status",
    "rgba(13,\x20110,\x20253,\x201)",
    ")</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20",
    "💰\x20Efectivo",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Referencia:</strong>\x20",
    "Crédito",
    "div",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Descuento:</strong>\x20<span\x20class=\x22text-warning\x22>$",
    "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "importe-desc",
    "or_folio",
    "toLocaleDateString",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20d-none\x20d-md-table-cell\x22>$",
    "#ffc107",
    "ord_idProducto",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><span\x20class=\x22badge\x20",
    "<small\x20class=\x22text-muted\x20d-block\x20mt-1\x22>Impuesto:\x20$",
    "tickets-footer",
    "values",
    "od_precio",
    "reordenarTickets",
    "80CgaHQp",
    ":\x20$",
    "...",
    "tickets-tbody",
    "or_nombreCliente",
    "orders",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-center\x20fw-bold\x20align-middle\x22>",
    "bg-light\x20text-dark",
    "top",
    "join",
    "Error\x20HTTP:\x20",
    "chartVendedores",
    "combinado",
    "btnReporteSpinner",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-info\x22>🛍️\x20Productos\x20(",
    "generarReporteVentas",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "innerHTML",
    "or_fecha",
    "\x27,\x20",
    "getMonth",
    "round",
    "d-none",
    "or_paymentMethod",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Fecha:</strong>\x20",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22detalleVendedorModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>📋\x20Detalle:\x20",
    "value",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "cantidad",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22><strong>Impuesto:</strong></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22>$",
    "DOMContentLoaded",
    "report",
    "ventasDiariasData",
    "7722570vrkicx",
    "or_moneda",
    "trim",
    "parsed",
    "Generar\x20Reporte",
    "getElementById",
    "ord_cantProducto",
    "ord_precio_unitario",
    "ticket-desc",
    "bg-dark",
    "Nota\x20Crédito",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20colspan=\x221\x22>",
    "or_status",
    "-01",
    "week3",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22mt-2\x22>Sin\x20datos</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20encontraron\x20ventas\x20para\x20el\x20mes\x20seleccionado.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "S4-",
    "</code></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Serie/Folio:</strong>\x20",
    "devicePixelRatio",
    "Ticket",
    "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-block\x20fw-bold\x22>",
    "hidden.bs.modal",
    "🏦\x20Transferencia",
    "5450",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>(",
    "credit_note",
    "week1",
    "substring",
    "#6f42c1",
    "https://ticket-b9.vercel.app/api?ticketId=",
    "banco",
    "cliente-asc",
    "Tarjeta\x20Débito",
    "N/A",
    "or_estatus",
    "option",
    "Cliente",
    "forEach",
    "detalles",
    "style",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Combinado",
    "periodoFilter",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20colspan=\x221\x22>",
    "json",
    "show",
    "closest",
    "PUBLICO\x20EN\x20GENERAL",
    "hide",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Información\x20adicional\x20del\x20ticket\x20para\x20desktop\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Información\x20adicional\x20del\x20ticket\x20para\x20desktop\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-none\x20d-md-block\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "💵\x20Crédito",
    "textContent",
    "importe-asc",
    "chartVentasDiarias",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Resumen\x20del\x20Mes:\x20",
    "rgba(13,\x20110,\x20253,\x200.8)",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Total\x20Final:</strong>\x20<span\x20class=\x22text-success\x20fw-bold\x20fs-5\x22>$",
    "mpo_importe",
    "length",
    "🔄\x20Combinado",
    "#666",
    "💳\x20Tarjeta\x20Crédito",
    "#0d6efd",
    "-30",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20No\x20se\x20encontraron\x20datos\x20para\x20el\x20ticket\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error:</strong>\x20",
    "📄\x20Nota\x20Crédito",
    "insertAdjacentHTML",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x20mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>SKU:\x20",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Impuestos:</strong>\x20<span\x20class=\x22text-warning\x22>$",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><code>",
    "\x20d-lg-none\x22\x20style=\x22font-size:\x200.65rem;\x22>",
    "ordenarPor",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Moneda:</strong>\x20",
    "ord_total",
    "https://reporte-ventas-b9.vercel.app/api/ventas?mes=",
    "Ventas",
    "or_totalImp",
    "3pGOaQj",
    "2025-10-05\x2012:00:06",
    "or_observaciones",
    "filtrarMetodo",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22btn-vendedor-",
    "split",
    "#dc3545",
    "</small>",
    "note",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "nombreVendedor",
    "ord_baseImpuesto",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Estado:</strong>\x20<span\x20class=\x22badge\x20bg-",
    "vendedorNombre",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x22>Observaciones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-2\x22>",
    "197673777718",
    ".card",
    "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x20btn-close-white\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "get",
    "dataset",
    "<br>",
    "or_rfc",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-primary\x22>📋\x20Información\x20General</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Ticket:</strong>\x20<code>",
    "...\x20$",
    "localeCompare",
    "fecha-desc",
    "total",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "or_totalFinal",
    "\x20tickets",
    "tickets",
    "mpo_banco",
    "Modal",
    "removeChild",
    "toLowerCase",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-4\x20col-lg-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22>$",
    "ord_impSubtotal",
    "#20c997",
    "105OsQZzp",
    "bg-info",
    "\x27)\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Ver\x20ticket\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20",
    ".\x0a\x0aPara\x20datos\x20reales,\x20verifica\x20que\x20la\x20API\x20proxy\x20esté\x20desplegada\x20correctamente\x20en:\x0a",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Cliente:</strong>\x20",
    "od_descripcion",
  ];
  _0x35ae = function () {
    return _0x32df4c;
  };
  return _0x35ae();
}
async function verTicket(_0x4fb429) {
  const _0x199646 = _0x100a03;
  try {
    const _0x3513b2 = document[_0x199646(0x140)](_0x199646(0x151));
    (_0x3513b2["className"] = _0x199646(0x214)),
      (_0x3513b2[_0x199646(0x174)] =
        "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22toast\x20show\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toast-body\x20bg-info\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-arrow-clockwise\x22></i>\x20Cargando\x20ticket\x20" +
        _0x4fb429 +
        _0x199646(0x10e)),
      document[_0x199646(0x25c)][_0x199646(0x205)](_0x3513b2);
    const _0x2ec6f2 = [
      "https://ticket-b9.vercel.app/api/ticket?ticketId=" + _0x4fb429,
      "https://ticket-b9.vercel.app/api/proxy?ticketId=" + _0x4fb429,
      _0x199646(0x1a1) + _0x4fb429,
    ];
    let _0x2033b8 = null,
      _0x52287a = null;
    for (const _0x3a8fad of _0x2ec6f2) {
      try {
        const _0x55921b = await fetch(_0x3a8fad);
        if (_0x55921b["ok"]) {
          _0x2033b8 = await _0x55921b[_0x199646(0x1b0)]();
          break;
        } else {
          const _0x21458e = await _0x55921b[_0x199646(0x21b)]();
          _0x52287a = new Error(
            _0x199646(0x16d) +
              _0x55921b[_0x199646(0x14b)] +
              _0x199646(0x216) +
              _0x21458e
          );
        }
      } catch (_0x2301b3) {
        _0x52287a = _0x2301b3;
      }
    }
    document[_0x199646(0x25c)][_0x199646(0x1f4)](_0x3513b2),
      !_0x2033b8 &&
        ((_0x2033b8 = {
          orders: [
            {
              or_idorden: 0x3ea8,
              or_idordenExt: _0x4fb429,
              or_fecha: _0x199646(0x1d4),
              or_nombreCliente: _0x199646(0x1b3),
              or_subtotal: 1741.37931,
              or_totalImp: 278.62069,
              or_totalFinal: 0x7e4,
              or_metodoPago: "credit_card",
              or_moneda: "MXN",
              or_estatus: _0x199646(0x20c),
              vendedorNombre: _0x199646(0x12e),
              detalles: [
                {
                  ord_idProducto: _0x199646(0x1e2),
                  ord_descripcion: _0x199646(0x213),
                  ord_cantProducto: 0x1,
                  ord_precio_unitario: 1741.37931,
                  ord_total: 0x7e4,
                },
              ],
              payments: [
                {
                  mpo_idMetodoPago: _0x199646(0x124),
                  mpo_importe: 0x7e4,
                  mpo_banco: "HSBC",
                  mpo_numero: _0x199646(0x19b),
                },
              ],
            },
          ],
          status: "SUCCESS",
          note: "Datos\x20de\x20ejemplo\x20-\x20La\x20API\x20proxy\x20no\x20está\x20disponible",
        }),
        setTimeout(() => {
          const _0x128ba9 = _0x199646;
          alert(
            _0x128ba9(0x25a) + _0x4fb429 + _0x128ba9(0x1fc) + _0x2ec6f2[0x0]
          );
        }, 0x64)),
      mostrarModalTicket(_0x2033b8, _0x4fb429);
  } catch (_0x5d1a04) {
    alert(
      _0x199646(0x237) +
        _0x4fb429 +
        ":\x0a" +
        _0x5d1a04["message"] +
        _0x199646(0x217)
    );
  }
}
function mostrarModalTicket(_0x2fd5a9, _0x5ec62a) {
  const _0x150b09 = _0x100a03,
    _0x4b92b5 = _0x2fd5a9[_0x150b09(0x168)] || [],
    _0x13cf3e = _0x4b92b5["length"] > 0x0 ? _0x4b92b5[0x0] : {},
    _0x331653 = _0x13cf3e["cliente"] || {},
    _0x53ff96 =
      _0x331653[_0x150b09(0x227)] ||
      _0x13cf3e[_0x150b09(0x167)] ||
      _0x13cf3e[_0x150b09(0x227)] ||
      _0x150b09(0x1a5),
    _0x1e7b92 = _0x13cf3e[_0x150b09(0x1ff)] || [],
    _0x59072b = _0x1e7b92[_0x150b09(0x1be)] > 0x0 ? _0x1e7b92[0x0] : {},
    _0x2b0341 =
      _0x59072b[_0x150b09(0x14a)] ||
      _0x13cf3e[_0x150b09(0x147)] ||
      _0x13cf3e[_0x150b09(0x17a)] ||
      _0x150b09(0x1a5),
    _0xc9a465 =
      _0x59072b[_0x150b09(0x1f2)] ||
      _0x13cf3e[_0x150b09(0x1f2)] ||
      _0x150b09(0x1a5),
    _0x278c34 = _0x13cf3e[_0x150b09(0x1aa)] || _0x13cf3e["details"] || [],
    _0x50faed =
      _0x13cf3e[_0x150b09(0x1e0)] ||
      _0x13cf3e[_0x150b09(0x20a)] ||
      _0x150b09(0x1a5),
    _0x4a30c3 =
      "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22ticketDetalleModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>🎫\x20Detalle\x20del\x20Ticket:\x20" +
      _0x5ec62a +
      _0x150b09(0x1e4) +
      (_0x4b92b5[_0x150b09(0x1be)] === 0x0
        ? _0x150b09(0x1c4) +
          _0x5ec62a +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
        : _0x150b09(0x11a) +
          (_0x2fd5a9[_0x150b09(0x1db)]
            ? _0x150b09(0x1dc) +
              _0x2fd5a9[_0x150b09(0x1db)] +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          _0x150b09(0x1e9) +
          (_0x13cf3e[_0x150b09(0x242)] || _0x5ec62a) +
          "</code></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>ID\x20Orden:</strong>\x20<code>" +
          (_0x13cf3e[_0x150b09(0x116)] || _0x13cf3e["or_id"] || "N/A") +
          _0x150b09(0x195) +
          (_0x13cf3e[_0x150b09(0x122)] || "N/A") +
          (_0x13cf3e[_0x150b09(0x157)]
            ? _0x150b09(0x221) + _0x13cf3e[_0x150b09(0x157)]
            : "") +
          _0x150b09(0x1fd) +
          _0x53ff96 +
          "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>RFC:</strong>\x20" +
          (_0x331653["cte_rfc"] ||
            _0x13cf3e[_0x150b09(0x1e8)] ||
            _0x150b09(0x1a5)) +
          _0x150b09(0x17b) +
          (_0x13cf3e[_0x150b09(0x175)]
            ? new Date(_0x13cf3e["or_fecha"])[_0x150b09(0x137)](
                _0x150b09(0x240)
              )
            : "N/A") +
          "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Vendedor:</strong>\x20" +
          _0x50faed +
          _0x150b09(0x1df) +
          (_0x13cf3e[_0x150b09(0x190)] === _0x150b09(0x20c) ||
          _0x13cf3e[_0x150b09(0x1a6)] === "completed"
            ? "success"
            : _0x150b09(0x129)) +
          "\x22>" +
          (_0x13cf3e["or_status"] ||
            _0x13cf3e["or_estatus"] ||
            _0x150b09(0x1a5)) +
          _0x150b09(0x121) +
          parseFloat(_0x13cf3e["or_subtotal"] || 0x0)[_0x150b09(0x137)](
            "es-MX",
            { minimumFractionDigits: 0x2 }
          ) +
          _0x150b09(0x153) +
          parseFloat(_0x13cf3e[_0x150b09(0x133)] || 0x0)[_0x150b09(0x137)](
            _0x150b09(0x240),
            { minimumFractionDigits: 0x2 }
          ) +
          _0x150b09(0x1c9) +
          parseFloat(
            _0x13cf3e[_0x150b09(0x1d2)] || _0x13cf3e[_0x150b09(0x203)] || 0x0
          )[_0x150b09(0x137)](_0x150b09(0x240), {
            minimumFractionDigits: 0x2,
          }) +
          _0x150b09(0x1bc) +
          parseFloat(
            _0x13cf3e[_0x150b09(0x1ef)] || _0x13cf3e["or_total"] || 0x0
          )[_0x150b09(0x137)](_0x150b09(0x240), {
            minimumFractionDigits: 0x2,
          }) +
          _0x150b09(0x20e) +
          _0x2b0341 +
          "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Banco:</strong>\x20" +
          _0xc9a465 +
          _0x150b09(0x14f) +
          (_0x59072b["mpo_numero"] || _0x150b09(0x1a5)) +
          _0x150b09(0x1ce) +
          (_0x13cf3e[_0x150b09(0x22b)] ||
            _0x13cf3e[_0x150b09(0x185)] ||
            _0x150b09(0x143)) +
          _0x150b09(0x239) +
          (_0x278c34 && _0x278c34["length"] > 0x0
            ? _0x150b09(0x171) +
              _0x278c34[_0x150b09(0x1be)] +
              _0x150b09(0x23c) +
              _0x278c34["map"](
                (_0x1a870a) =>
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-md-table-cell\x22><code\x20class=\x22small\x22>" +
                  (_0x1a870a[_0x150b09(0x15b)] ||
                    _0x1a870a[_0x150b09(0x265)] ||
                    _0x150b09(0x1a5)) +
                  _0x150b09(0x198) +
                  (_0x1a870a[_0x150b09(0x201)] ||
                    _0x1a870a[_0x150b09(0x1fe)] ||
                    "N/A") +
                  _0x150b09(0x1c8) +
                  (_0x1a870a[_0x150b09(0x15b)] ||
                    _0x1a870a["od_producto"] ||
                    _0x150b09(0x1a5)) +
                  "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x22>Precio:\x20$" +
                  parseFloat(
                    _0x1a870a[_0x150b09(0x18b)] || _0x1a870a["od_precio"] || 0x0
                  )[_0x150b09(0x137)]("es-MX", { minimumFractionDigits: 0x2 }) +
                  _0x150b09(0x23d) +
                  parseFloat(
                    _0x1a870a[_0x150b09(0x1cf)] || _0x1a870a["od_total"] || 0x0
                  )[_0x150b09(0x137)](_0x150b09(0x240), {
                    minimumFractionDigits: 0x2,
                  }) +
                  _0x150b09(0x173) +
                  (_0x1a870a["ord_impSubtotal"] ||
                  _0x1a870a[_0x150b09(0x1de)] * 0.16
                    ? _0x150b09(0x15e) +
                      parseFloat(
                        _0x1a870a[_0x150b09(0x1f7)] ||
                          _0x1a870a[_0x150b09(0x1de)] * 0.16 ||
                          0x0
                      )[_0x150b09(0x137)](_0x150b09(0x240), {
                        minimumFractionDigits: 0x2,
                      }) +
                      _0x150b09(0x1da)
                    : "") +
                  _0x150b09(0x169) +
                  (_0x1a870a[_0x150b09(0x18a)] ||
                    _0x1a870a[_0x150b09(0x21f)] ||
                    0x0) +
                  _0x150b09(0x159) +
                  parseFloat(
                    _0x1a870a[_0x150b09(0x18b)] ||
                      _0x1a870a[_0x150b09(0x161)] ||
                      0x0
                  )["toLocaleString"](_0x150b09(0x240), {
                    minimumFractionDigits: 0x2,
                  }) +
                  _0x150b09(0x206) +
                  parseFloat(
                    _0x1a870a[_0x150b09(0x1f7)] ||
                      _0x1a870a["ord_baseImpuesto"] * 0.16 ||
                      0x0
                  )["toLocaleString"]("es-MX", { minimumFractionDigits: 0x2 }) +
                  _0x150b09(0x126) +
                  parseFloat(
                    _0x1a870a[_0x150b09(0x1cf)] || _0x1a870a["od_total"] || 0x0
                  )[_0x150b09(0x137)]("es-MX", { minimumFractionDigits: 0x2 }) +
                  _0x150b09(0x15c)
              )["join"]("") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Resumen\x20de\x20totales\x20al\x20estilo\x20ticket\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-8\x20col-md-7\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              (_0x13cf3e[_0x150b09(0x1d5)]
                ? _0x150b09(0x1e1) +
                  _0x13cf3e["or_observaciones"] +
                  _0x150b09(0x1ee)
                : "") +
              _0x150b09(0x120) +
              parseFloat(_0x13cf3e[_0x150b09(0x127)] || 0x0)["toLocaleString"](
                _0x150b09(0x240),
                { minimumFractionDigits: 0x2 }
              ) +
              "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>Impuesto</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>$" +
              parseFloat(
                _0x13cf3e[_0x150b09(0x1d2)] ||
                  _0x13cf3e[_0x150b09(0x203)] ||
                  0x0
              )["toLocaleString"]("es-MX", { minimumFractionDigits: 0x2 }) +
              _0x150b09(0x264) +
              parseFloat(
                _0x13cf3e["or_totalFinal"] || _0x13cf3e["or_total"] || 0x0
              )[_0x150b09(0x137)]("es-MX", { minimumFractionDigits: 0x2 }) +
              _0x150b09(0x1b5) +
              _0x278c34[_0x150b09(0x24b)](
                (_0x553b02) =>
                  (_0x553b02[_0x150b09(0x15b)] ||
                    _0x553b02["od_producto"] ||
                    "") +
                  "\x20" +
                  (_0x553b02[_0x150b09(0x201)] ||
                    _0x553b02[_0x150b09(0x1fe)] ||
                    "")[_0x150b09(0x19f)](0x0, 0x1e) +
                  _0x150b09(0x1ea) +
                  parseFloat(
                    _0x553b02["ord_precio_unitario"] ||
                      _0x553b02["od_precio"] ||
                      0x0
                  )[_0x150b09(0x137)](_0x150b09(0x240), {
                    minimumFractionDigits: 0x0,
                  })
              )[_0x150b09(0x16c)](_0x150b09(0x1e7)) +
              _0x150b09(0x144) +
              parseFloat(_0x13cf3e[_0x150b09(0x127)] || 0x0)[_0x150b09(0x137)](
                "es-MX",
                { minimumFractionDigits: 0x2 }
              ) +
              _0x150b09(0x180) +
              parseFloat(
                _0x13cf3e["or_totalImp"] || _0x13cf3e[_0x150b09(0x203)] || 0x0
              )[_0x150b09(0x137)](_0x150b09(0x240), {
                minimumFractionDigits: 0x2,
              }) +
              "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22><strong>Total:</strong></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20fw-bold\x22>$" +
              parseFloat(
                _0x13cf3e[_0x150b09(0x1ef)] ||
                  _0x13cf3e[_0x150b09(0x21a)] ||
                  0x0
              )["toLocaleString"](_0x150b09(0x240), {
                minimumFractionDigits: 0x2,
              }) +
              _0x150b09(0x222)
            : "<div\x20class=\x22alert\x20alert-info\x22><i\x20class=\x22bi\x20bi-info-circle\x22></i>\x20No\x20hay\x20información\x20de\x20productos\x20disponible.</div>") +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20") +
      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-x-circle\x22></i>\x20Cerrar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    _0xedbb55 = document["getElementById"](_0x150b09(0x248));
  _0xedbb55 && _0xedbb55["remove"]();
  document[_0x150b09(0x25c)][_0x150b09(0x1c7)](_0x150b09(0x112), _0x4a30c3);
  const _0x56194f = new bootstrap[_0x150b09(0x1f3)](
    document[_0x150b09(0x189)]("ticketDetalleModal")
  );
  _0x56194f[_0x150b09(0x1b1)](),
    document[_0x150b09(0x189)](_0x150b09(0x248))[_0x150b09(0x134)](
      _0x150b09(0x199),
      () => {
        const _0x43a26f = _0x150b09;
        document[_0x43a26f(0x189)](_0x43a26f(0x248))["remove"]();
      }
    );
}
window[_0x100a03(0x113)] = verTicket;
