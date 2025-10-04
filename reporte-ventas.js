const _0x2a4300 = _0x2a17;
function _0x2a17(_0x258623, _0x3ec704) {
  const _0x38dfa8 = _0x38df();
  return (
    (_0x2a17 = function (_0x2a17f8, _0x5835d0) {
      _0x2a17f8 = _0x2a17f8 - 0xde;
      let _0x20212a = _0x38dfa8[_0x2a17f8];
      return _0x20212a;
    }),
    _0x2a17(_0x258623, _0x3ec704)
  );
}
(function (_0x37aa3c, _0x3bac82) {
  const _0x4d9601 = _0x2a17,
    _0x59467b = _0x37aa3c();
  while (!![]) {
    try {
      const _0x2bb20c =
        (-parseInt(_0x4d9601(0x173)) / 0x1) *
          (-parseInt(_0x4d9601(0xf7)) / 0x2) +
        (-parseInt(_0x4d9601(0x107)) / 0x3) *
          (-parseInt(_0x4d9601(0x152)) / 0x4) +
        (-parseInt(_0x4d9601(0x16e)) / 0x5) *
          (-parseInt(_0x4d9601(0x17e)) / 0x6) +
        parseInt(_0x4d9601(0x1a1)) / 0x7 +
        (parseInt(_0x4d9601(0x197)) / 0x8) *
          (parseInt(_0x4d9601(0x186)) / 0x9) +
        -parseInt(_0x4d9601(0x159)) / 0xa +
        (parseInt(_0x4d9601(0x18e)) / 0xb) *
          (-parseInt(_0x4d9601(0x114)) / 0xc);
      if (_0x2bb20c === _0x3bac82) break;
      else _0x59467b["push"](_0x59467b["shift"]());
    } catch (_0x42803f) {
      _0x59467b["push"](_0x59467b["shift"]());
    }
  }
})(_0x38df, 0x95737);
function mostrarModalReporteVentas() {
  const _0x3dd3ca = _0x2a17,
    _0x33173e = document[_0x3dd3ca(0x155)](_0x3dd3ca(0x11f));
  if (_0x33173e) {
    const _0x902f7c = document["getElementById"](_0x3dd3ca(0x105));
    if (_0x902f7c && !_0x902f7c["value"]) {
      const _0x1fa09f = new Date(),
        _0x4ed16f = _0x1fa09f[_0x3dd3ca(0x14b)](),
        _0x346a37 = (_0x1fa09f[_0x3dd3ca(0x18c)]() + 0x1)
          [_0x3dd3ca(0x1a3)]()
          [_0x3dd3ca(0x178)](0x2, "0");
      _0x902f7c[_0x3dd3ca(0x143)] = _0x4ed16f + "-" + _0x346a37;
    }
    const _0x19256c = new bootstrap["Modal"](_0x33173e);
    _0x19256c[_0x3dd3ca(0x115)]();
  }
}
function cerrarModalReporteVentas() {
  const _0x536ed2 = _0x2a17,
    _0xf20eb9 = document[_0x536ed2(0x155)]("reporteVentasModal");
  if (_0xf20eb9) {
    const _0x17363d = bootstrap[_0x536ed2(0xe2)]["getInstance"](_0xf20eb9);
    _0x17363d && _0x17363d[_0x536ed2(0x10e)]();
  }
}
async function generarReporteVentas() {
  const _0x5638b3 = _0x2a17,
    _0x36aa50 = document[_0x5638b3(0x155)](_0x5638b3(0x105))[_0x5638b3(0x143)],
    _0x411d4f = document[_0x5638b3(0x155)](_0x5638b3(0x172)),
    _0x5b0e3e = document[_0x5638b3(0x155)](_0x5638b3(0x148)),
    _0xc36d33 = document[_0x5638b3(0x155)](_0x5638b3(0xe3));
  if (!_0x36aa50) {
    _0x411d4f[_0x5638b3(0x16a)] = _0x5638b3(0x103);
    return;
  }
  const _0x44b950 = 0x1,
    _0xf19df6 = _0x36aa50 + _0x5638b3(0x1a8),
    _0x5a429d = _0x36aa50 + "-30";
  (_0x5b0e3e[_0x5638b3(0x157)] = _0x5638b3(0x15e)),
    _0xc36d33[_0x5638b3(0x119)][_0x5638b3(0x14f)](_0x5638b3(0xe4));
  try {
    const _0xfeb474 =
        "https://reporte-ventas-b9-9988isin5.vercel.app/api/ventas?mes=" +
        _0x36aa50,
      _0x31337e = await fetch(_0xfeb474);
    if (!_0x31337e["ok"])
      throw new Error(
        _0x5638b3(0x13e) +
          _0x31337e[_0x5638b3(0x11c)] +
          "\x20" +
          _0x31337e["statusText"]
      );
    const _0x260d90 = await _0x31337e[_0x5638b3(0x190)]();
    if (!_0x260d90[_0x5638b3(0x188)])
      throw new Error(_0x260d90[_0x5638b3(0x174)] || _0x5638b3(0x1a2));
    const {
        totalGeneral: _0xbdfbff,
        totalVendedores: _0xcf7d70,
        totalTickets: _0x4ea64e,
        vendedores: _0xc5c369,
      } = _0x260d90["data"],
      _0x5da2dd =
        _0x260d90[_0x5638b3(0x187)]["totalExacto"] ||
        _0x260d90[_0x5638b3(0x187)][_0x5638b3(0x12a)];
    console["log"](_0x5638b3(0xf5)),
      console[_0x5638b3(0xeb)](
        _0x5638b3(0xfe),
        _0x260d90[_0x5638b3(0x187)]["totalExacto"]
      ),
      console[_0x5638b3(0xeb)](
        "🔍\x20Total\x20general\x20del\x20proxy:",
        _0x260d90[_0x5638b3(0x187)][_0x5638b3(0x12a)]
      ),
      console[_0x5638b3(0xeb)](_0x5638b3(0x166), _0x5da2dd),
      console[_0x5638b3(0xeb)](
        _0x5638b3(0x19d),
        Math[_0x5638b3(0x16d)](_0x5da2dd * 0x64) / 0x64
      ),
      (window["ultimosVendedores"] = _0xc5c369);
    let _0x1468bb = {
      credit_card: { total: 0x0, cantidad: 0x0 },
      cash: { total: 0x0, cantidad: 0x0 },
      debit_card: { total: 0x0, cantidad: 0x0 },
      credit_note_application: { total: 0x0, cantidad: 0x0 },
      transfer: { total: 0x0, cantidad: 0x0 },
      check: { total: 0x0, cantidad: 0x0 },
      credit: { total: 0x0, cantidad: 0x0 },
      mixed: { total: 0x0, cantidad: 0x0 },
    };
    _0xc5c369[_0x5638b3(0xec)]((_0x5f0bb4) => {
      const _0x526603 = _0x5638b3;
      _0x5f0bb4[_0x526603(0x12d)] &&
        Array[_0x526603(0xdf)](_0x5f0bb4[_0x526603(0x12d)]) &&
        _0x5f0bb4[_0x526603(0x12d)][_0x526603(0xec)]((_0x1e59e9) => {
          const _0x28a02b = _0x526603,
            _0x59ec4f = (_0x1e59e9[_0x28a02b(0x19c)] || "")[_0x28a02b(0x149)](),
            _0x1a3d94 = parseFloat(_0x1e59e9[_0x28a02b(0x185)]) || 0x0;
          _0x59ec4f[_0x28a02b(0x165)](",")
            ? ((_0x1468bb[_0x28a02b(0xf2)][_0x28a02b(0x17a)] += _0x1a3d94),
              (_0x1468bb[_0x28a02b(0xf2)][_0x28a02b(0x11d)] += 0x1))
            : _0x1468bb[_0x59ec4f]
            ? ((_0x1468bb[_0x59ec4f][_0x28a02b(0x17a)] += _0x1a3d94),
              (_0x1468bb[_0x59ec4f]["cantidad"] += 0x1))
            : (console[_0x28a02b(0xeb)](
                "⚠️\x20Método\x20no\x20reconocido:\x20\x22" + _0x59ec4f + "\x22"
              ),
              (_0x1468bb["mixed"][_0x28a02b(0x17a)] += _0x1a3d94),
              (_0x1468bb[_0x28a02b(0xf2)][_0x28a02b(0x11d)] += 0x1));
        });
    }),
      console[_0x5638b3(0xeb)](
        "📊\x20Resumen\x20métodos\x20de\x20pago\x20calculado:",
        _0x1468bb
      );
    if (_0xc5c369["length"] === 0x0) {
      _0x411d4f[_0x5638b3(0x16a)] = _0x5638b3(0x1a5);
      return;
    }
    const _0x372df9 = {
      credit_card: "💳\x20Tarjeta\x20Crédito",
      cash: _0x5638b3(0x112),
      debit_card: _0x5638b3(0x130),
      credit_note_application: _0x5638b3(0x10b),
      transfer: "🏦\x20Transferencia",
      check: "📋\x20Cheque",
      credit: _0x5638b3(0x10c),
      mixed: _0x5638b3(0x16c),
    };
    let _0x206f46 = "";
    _0x1468bb &&
      Object[_0x5638b3(0x117)](_0x1468bb)["forEach"]((_0xb5242e) => {
        const _0xcea4e5 = _0x5638b3,
          _0xb49426 = _0x1468bb[_0xb5242e];
        _0xb49426[_0xcea4e5(0x17a)] > 0x0 &&
          (_0x206f46 +=
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-4\x20col-lg-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22>$" +
            _0xb49426[_0xcea4e5(0x17a)]["toLocaleString"](_0xcea4e5(0x195), {
              minimumFractionDigits: 0x2,
            }) +
            _0xcea4e5(0x180) +
            (_0x372df9[_0xb5242e] || _0xb5242e) +
            _0xcea4e5(0x14d) +
            Math[_0xcea4e5(0x16d)](_0xb49426["cantidad"]) +
            _0xcea4e5(0x113));
      });
    let _0x304284 =
      _0x5638b3(0x171) +
      _0x36aa50 +
      "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-success\x20mb-0\x22>$" +
      (Math["round"](_0x5da2dd * 0x64) / 0x64)[_0x5638b3(0x18b)]("es-MX", {
        minimumFractionDigits: 0x2,
      }) +
      _0x5638b3(0x1a9) +
      _0xcf7d70 +
      _0x5638b3(0x179) +
      _0x4ea64e +
      _0x5638b3(0x18f) +
      (_0x206f46
        ? _0x5638b3(0x15a) +
          _0x206f46 +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"
        : "") +
      _0x5638b3(0x1a4) +
      _0xc5c369[_0x5638b3(0x110)] +
      _0x5638b3(0x15c);
    _0xc5c369[_0x5638b3(0xec)]((_0x114ff6, _0x23547c) => {
      const _0x54b388 = _0x5638b3,
        _0x3089f0 = _0x114ff6[_0x54b388(0xe7)][_0x54b388(0x18b)](
          _0x54b388(0x195),
          { minimumFractionDigits: 0x2 }
        );
      _0x304284 +=
        _0x54b388(0x150) +
        _0x114ff6[_0x54b388(0xe1)] +
        _0x54b388(0x177) +
        _0x114ff6[_0x54b388(0xe1)] +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x22>$" +
        _0x3089f0 +
        _0x54b388(0x124) +
        _0x114ff6["cantidadTickets"] +
        _0x54b388(0x121) +
        ((_0x114ff6[_0x54b388(0xe7)] /
          (Math[_0x54b388(0x16d)](_0x5da2dd * 0x64) / 0x64)) *
          0x64)[_0x54b388(0x14e)](0x1) +
        _0x54b388(0x139) +
        ((_0x114ff6[_0x54b388(0xe7)] /
          (Math["round"](_0x5da2dd * 0x64) / 0x64)) *
          0x64)[_0x54b388(0x14e)](0x1) +
        _0x54b388(0x11e) +
        _0x114ff6["nombre"] +
        _0x54b388(0x129) +
        _0x23547c +
        _0x54b388(0x10d) +
        _0x23547c +
        "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Ver\x20Detalle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20";
    }),
      (_0x304284 += _0x5638b3(0x102)),
      (_0x411d4f["innerHTML"] = _0x304284),
      generarGraficos(_0x1468bb, _0xc5c369);
  } catch (_0x44c217) {
    console[_0x5638b3(0x174)](_0x5638b3(0x104), _0x44c217),
      (_0x411d4f[_0x5638b3(0x16a)] =
        _0x5638b3(0xf8) + _0x44c217[_0x5638b3(0x14c)] + _0x5638b3(0xf1));
  } finally {
    (_0x5b0e3e[_0x5638b3(0x157)] = _0x5638b3(0x162)),
      _0xc36d33[_0x5638b3(0x119)]["add"]("d-none");
  }
}
function mostrarDetalleVendedor(_0x1fefe8, _0x13fb05) {
  const _0x52c662 = _0x2a17,
    _0x350534 = window["ultimosVendedores"] || [],
    _0x415105 = _0x350534[_0x13fb05];
  if (!_0x415105 || !_0x415105[_0x52c662(0x12d)]) {
    alert(_0x52c662(0x10f));
    return;
  }
  const _0x264cce = _0x415105[_0x52c662(0x12d)];
  function _0x29033a(_0x24d2c4) {
    const _0x3aab89 = _0x52c662,
      _0x2716f3 = (_0x24d2c4 || "")[_0x3aab89(0x132)]()[_0x3aab89(0x149)]();
    if (_0x2716f3[_0x3aab89(0x165)]("cash") || _0x2716f3 === "cash")
      return { nombre: _0x3aab89(0x112), clase: _0x3aab89(0xf3) };
    else {
      if (
        _0x2716f3[_0x3aab89(0x165)](_0x3aab89(0xf0)) ||
        _0x2716f3 === _0x3aab89(0xf0)
      )
        return { nombre: _0x3aab89(0xe6), clase: _0x3aab89(0x156) };
      else {
        if (
          _0x2716f3[_0x3aab89(0x165)]("debit_card") ||
          _0x2716f3 === _0x3aab89(0x17f)
        )
          return { nombre: "💳\x20Tarjeta\x20Débito", clase: _0x3aab89(0xee) };
        else {
          if (
            _0x2716f3[_0x3aab89(0x165)](_0x3aab89(0x163)) ||
            _0x2716f3 === "transfer"
          )
            return { nombre: "🏦\x20Transferencia", clase: _0x3aab89(0x12b) };
          else {
            if (
              _0x2716f3[_0x3aab89(0x165)](_0x3aab89(0x153)) ||
              _0x2716f3 === _0x3aab89(0x164)
            )
              return { nombre: _0x3aab89(0x10b), clase: "bg-warning" };
            else {
              if (
                _0x2716f3["includes"](_0x3aab89(0x144)) ||
                _0x2716f3 === _0x3aab89(0x144)
              )
                return { nombre: "📋\x20Cheque", clase: "bg-dark" };
              else {
                if (
                  _0x2716f3[_0x3aab89(0x165)](_0x3aab89(0x151)) &&
                  !_0x2716f3[_0x3aab89(0x165)](_0x3aab89(0x17c))
                )
                  return { nombre: _0x3aab89(0x10c), clase: _0x3aab89(0x16b) };
                else
                  return _0x2716f3[_0x3aab89(0x165)](",") ||
                    _0x2716f3[_0x3aab89(0x165)]("\x20")
                    ? { nombre: _0x3aab89(0x16c), clase: "bg-gradient" }
                    : { nombre: _0x3aab89(0x15f), clase: _0x3aab89(0x19e) };
              }
            }
          }
        }
      }
    }
  }
  let _0x2940c7 = _0x52c662(0x111) + _0x1fefe8 + _0x52c662(0x108);
  function _0x2f9314(_0x524b08, _0x938a6 = _0x52c662(0x126)) {
    const _0x49b2ac = _0x52c662;
    let _0x498ad4 = _0x524b08;
    _0x938a6 !== _0x49b2ac(0x126) &&
      (_0x498ad4 = _0x524b08[_0x49b2ac(0x136)]((_0x36ed44) => {
        const _0x23df39 = _0x49b2ac,
          _0x256f9f = (_0x36ed44[_0x23df39(0x19c)] || "")
            ["toLowerCase"]()
            [_0x23df39(0x149)]();
        if (_0x938a6 === _0x23df39(0x17d))
          return (
            _0x256f9f[_0x23df39(0x165)](",") || _0x256f9f["includes"]("\x20")
          );
        return _0x256f9f[_0x23df39(0x165)](_0x938a6);
      }));
    let _0x2e2e15 = "";
    return (
      _0x498ad4[_0x49b2ac(0xec)]((_0x5345f3) => {
        const _0x5a19e6 = _0x49b2ac,
          _0x50112a = _0x29033a(_0x5345f3[_0x5a19e6(0x19c)]),
          _0x286df7 = new Date(_0x5345f3["fecha"])["toLocaleDateString"](
            _0x5a19e6(0x195),
            {
              day: _0x5a19e6(0x198),
              month: _0x5a19e6(0x198),
              hour: _0x5a19e6(0x198),
              minute: _0x5a19e6(0x198),
            }
          );
        _0x2e2e15 +=
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><code>" +
          _0x5345f3[_0x5a19e6(0xe5)] +
          _0x5a19e6(0x191) +
          _0x5345f3[_0x5a19e6(0x1aa)] +
          _0x5a19e6(0x1a0) +
          parseFloat(_0x5345f3["importe"])[_0x5a19e6(0x18b)](_0x5a19e6(0x195), {
            minimumFractionDigits: 0x2,
          }) +
          _0x5a19e6(0x189) +
          _0x286df7 +
          _0x5a19e6(0x146) +
          _0x50112a[_0x5a19e6(0xf4)] +
          _0x5a19e6(0x181) +
          _0x50112a[_0x5a19e6(0xe1)] +
          _0x5a19e6(0xde) +
          (_0x5345f3["banco"] || "-") +
          "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20";
      }),
      { filasHTML: _0x2e2e15, ticketsFiltrados: _0x498ad4 }
    );
  }
  const { filasHTML: _0x4569f6, ticketsFiltrados: _0x2e906a } =
    _0x2f9314(_0x264cce);
  _0x2940c7 += _0x4569f6;
  const _0x481fa3 = _0x264cce[_0x52c662(0x194)](
    (_0x3f88fa, _0x3a3bf1) =>
      _0x3f88fa + parseFloat(_0x3a3bf1[_0x52c662(0x185)]),
    0x0
  );
  (_0x2940c7 +=
    _0x52c662(0x134) +
    _0x481fa3["toLocaleString"]("es-MX", { minimumFractionDigits: 0x2 }) +
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x223\x22>" +
    _0x264cce[_0x52c662(0x110)] +
    _0x52c662(0x142)),
    document["body"][_0x52c662(0x13f)](_0x52c662(0x118), _0x2940c7),
    (window[_0x52c662(0x158)] = function () {
      const _0x30750c = _0x52c662,
        _0x4cc6fb = document["getElementById"](_0x30750c(0x14a))["value"],
        _0x5490b6 = document["getElementById"](_0x30750c(0x125))["value"];
      let _0x13318d = [..._0x264cce];
      _0x5490b6 !== "todos" &&
        (_0x13318d = _0x264cce["filter"]((_0x31074c) => {
          const _0x4026b2 = _0x30750c,
            _0x6a6298 = (_0x31074c[_0x4026b2(0x19c)] || "")
              [_0x4026b2(0x132)]()
              [_0x4026b2(0x149)]();
          if (_0x5490b6 === _0x4026b2(0x17d))
            return (
              _0x6a6298["includes"](",") || _0x6a6298[_0x4026b2(0x165)]("\x20")
            );
          return _0x6a6298[_0x4026b2(0x165)](_0x5490b6);
        }));
      switch (_0x4cc6fb) {
        case _0x30750c(0x154):
          _0x13318d["sort"](
            (_0x27efed, _0x385358) =>
              new Date(_0x385358[_0x30750c(0xfd)]) -
              new Date(_0x27efed[_0x30750c(0xfd)])
          );
          break;
        case _0x30750c(0xf9):
          _0x13318d[_0x30750c(0xe0)](
            (_0x3a09dc, _0x56c11f) =>
              new Date(_0x3a09dc[_0x30750c(0xfd)]) -
              new Date(_0x56c11f[_0x30750c(0xfd)])
          );
          break;
        case _0x30750c(0x122):
          _0x13318d[_0x30750c(0xe0)](
            (_0x4c4883, _0x58fc0e) =>
              parseFloat(_0x58fc0e[_0x30750c(0x185)]) -
              parseFloat(_0x4c4883[_0x30750c(0x185)])
          );
          break;
        case "importe-asc":
          _0x13318d[_0x30750c(0xe0)](
            (_0x484a5f, _0x5deaad) =>
              parseFloat(_0x484a5f["importe"]) -
              parseFloat(_0x5deaad["importe"])
          );
          break;
        case "ticket-desc":
          _0x13318d["sort"]((_0x1062fc, _0x203f3b) =>
            _0x203f3b[_0x30750c(0xe5)]["localeCompare"](
              _0x1062fc[_0x30750c(0xe5)],
              undefined,
              { numeric: !![] }
            )
          );
          break;
        case _0x30750c(0x199):
          _0x13318d[_0x30750c(0xe0)]((_0x1f3152, _0x5150e6) =>
            _0x1f3152[_0x30750c(0xe5)][_0x30750c(0x147)](
              _0x5150e6[_0x30750c(0xe5)],
              undefined,
              { numeric: !![] }
            )
          );
          break;
        case _0x30750c(0x141):
          _0x13318d[_0x30750c(0xe0)]((_0x3d9350, _0x28248e) =>
            _0x3d9350[_0x30750c(0x1aa)][_0x30750c(0x147)](_0x28248e["cliente"])
          );
          break;
        case "cliente-desc":
          _0x13318d[_0x30750c(0xe0)]((_0x459881, _0x5ba88d) =>
            _0x5ba88d[_0x30750c(0x1aa)][_0x30750c(0x147)](
              _0x459881[_0x30750c(0x1aa)]
            )
          );
          break;
      }
      const _0x14adc0 = document[_0x30750c(0x155)](_0x30750c(0x116)),
        _0x2ccf22 = document[_0x30750c(0x155)](_0x30750c(0xe9));
      let _0x5d62a2 = "";
      _0x13318d[_0x30750c(0xec)]((_0xeed55f) => {
        const _0x1b5939 = _0x30750c,
          _0x2683d5 = _0x29033a(_0xeed55f[_0x1b5939(0x19c)]),
          _0x2a01f6 = new Date(_0xeed55f[_0x1b5939(0xfd)])[_0x1b5939(0x13b)](
            _0x1b5939(0x195),
            {
              day: _0x1b5939(0x198),
              month: _0x1b5939(0x198),
              hour: _0x1b5939(0x198),
              minute: _0x1b5939(0x198),
            }
          );
        _0x5d62a2 +=
          _0x1b5939(0x18d) +
          _0xeed55f[_0x1b5939(0xe5)] +
          _0x1b5939(0x191) +
          _0xeed55f[_0x1b5939(0x1aa)] +
          _0x1b5939(0x1a0) +
          parseFloat(_0xeed55f[_0x1b5939(0x185)])["toLocaleString"](
            _0x1b5939(0x195),
            { minimumFractionDigits: 0x2 }
          ) +
          _0x1b5939(0x189) +
          _0x2a01f6 +
          _0x1b5939(0x146) +
          _0x2683d5[_0x1b5939(0xf4)] +
          "\x22\x20style=\x22min-width:\x20120px;\x20font-size:\x200.75rem;\x20text-align:\x20center;\x22>" +
          _0x2683d5[_0x1b5939(0xe1)] +
          _0x1b5939(0xde) +
          (_0xeed55f[_0x1b5939(0x19a)] || "-") +
          _0x1b5939(0x161);
      }),
        (_0x14adc0[_0x30750c(0x16a)] = _0x5d62a2);
      const _0x2263cc = _0x13318d[_0x30750c(0x194)](
        (_0x1d0e97, _0x48a8b1) =>
          _0x1d0e97 + parseFloat(_0x48a8b1[_0x30750c(0x185)]),
        0x0
      );
      _0x2ccf22["innerHTML"] =
        _0x30750c(0x193) +
        (_0x5490b6 !== _0x30750c(0x126) ? _0x30750c(0x1a7) : "TOTAL") +
        _0x30750c(0xff) +
        _0x2263cc[_0x30750c(0x18b)](_0x30750c(0x195), {
          minimumFractionDigits: 0x2,
        }) +
        "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x223\x22>" +
        _0x13318d[_0x30750c(0x110)] +
        _0x30750c(0x140) +
        (_0x5490b6 !== _0x30750c(0x126)
          ? _0x30750c(0x1a6) + _0x264cce[_0x30750c(0x110)]
          : "") +
        _0x30750c(0xe8);
    });
  const _0x4febab = new bootstrap["Modal"](
    document["getElementById"](_0x52c662(0x13a))
  );
  _0x4febab[_0x52c662(0x115)](),
    document[_0x52c662(0x155)](_0x52c662(0x13a))[_0x52c662(0xef)](
      _0x52c662(0x182),
      () => {
        const _0x2f3246 = _0x52c662;
        document[_0x2f3246(0x155)](_0x2f3246(0x13a))[_0x2f3246(0x14f)](),
          delete window["reordenarTickets"];
      }
    );
}
function _0x38df() {
  const _0x15887d = [
    "keys",
    "beforeend",
    "classList",
    "substring",
    "bottom",
    "status",
    "cantidad",
    "%\x20del\x20total\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20w-100\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22mostrarDetalleVendedor(\x27",
    "reporteVentasModal",
    "...",
    "\x20tickets</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x20mb-2\x22\x20style=\x22height:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-success\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x20",
    "importe-desc",
    "cerrarModalReporteVentas",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>",
    "filtrarMetodo",
    "todos",
    "#0d6efd",
    "#e9ecef",
    "\x27,\x20",
    "totalGeneral",
    "bg-secondary",
    "graficoVentasDiarias",
    "tickets",
    "Tarjeta\x20Débito",
    "Cheque",
    "💳\x20Tarjeta\x20Débito",
    "#0dcaf0",
    "toLowerCase",
    "split",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tfoot\x20id=\x22tickets-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>TOTAL</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "chartVendedores",
    "filter",
    "Día\x20",
    "graficoMetodosPago",
    "%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "detalleVendedorModal",
    "toLocaleDateString",
    "index",
    "#198754",
    "Error\x20HTTP:\x20",
    "insertAdjacentHTML",
    "\x20tickets",
    "cliente-asc",
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "value",
    "check",
    "destroy",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><span\x20class=\x22badge\x20",
    "localeCompare",
    "btnReporteTexto",
    "trim",
    "ordenarPor",
    "getFullYear",
    "message",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>(",
    "toFixed",
    "remove",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-sm-6\x20col-lg-4\x20col-xl-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20shadow-sm\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "credit",
    "77036oqFltm",
    "credit_note",
    "fecha-desc",
    "getElementById",
    "bg-primary",
    "textContent",
    "reordenarTickets",
    "6886790KgfuxY",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>💳\x20Métodos\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "#20c997",
    ")</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20",
    "mostrarModalReporteVentas",
    "Generando...",
    "❓\x20Otro",
    ":\x20$",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20",
    "Generar\x20Reporte",
    "transfer",
    "credit_note_application",
    "includes",
    "🔍\x20Total\x20usado:",
    "rgba(13,\x20110,\x20253,\x200.8)",
    "getDate",
    "bar",
    "innerHTML",
    "bg-danger",
    "🔄\x20Combinado",
    "round",
    "4884145AkCrbv",
    "generarReporteVentas",
    "chartVentasDiarias",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Resumen\x20del\x20Mes:\x20",
    "reporte-contenido",
    "93374RKPDoU",
    "error",
    "#fd7e14",
    "#fff",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "padStart",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Vendedores</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-info\x20mb-0\x22>",
    "total",
    "mostrarDetalleVendedor",
    "card",
    "combinado",
    "6wySNvA",
    "debit_card",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>",
    "\x22\x20style=\x22min-width:\x20120px;\x20font-size:\x200.75rem;\x20text-align:\x20center;\x22>",
    "hidden.bs.modal",
    "slice",
    "#6c757d",
    "importe",
    "7119iUITOX",
    "data",
    "success",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small>",
    "dataset",
    "toLocaleString",
    "getMonth",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><code>",
    "11fXwxWb",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Tickets</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20",
    "json",
    "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "Tarjeta\x20Crédito",
    "\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>",
    "reduce",
    "es-MX",
    "#ffc107",
    "4488ThvjJg",
    "2-digit",
    "ticket-asc",
    "banco",
    "rgba(13,\x20110,\x20253,\x201)",
    "metodoPago",
    "🔍\x20Total\x20redondeado:",
    "bg-light\x20text-dark",
    "graficoVendedores",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$",
    "7648543OWiNZG",
    "Error\x20en\x20el\x20servidor\x20proxy",
    "toString",
    "\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20Sección\x20de\x20Gráficos\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-6\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-info\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Distribución\x20por\x20Método\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoMetodosPago\x22\x20width=\x22400\x22\x20height=\x22300\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-6\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-warning\x20text-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Top\x2010\x20Vendedores</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoVendedores\x22\x20width=\x22400\x22\x20height=\x22300\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📈\x20Ventas\x20Diarias\x20por\x20Vendedor</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoVentasDiarias\x22\x20width=\x22400\x22\x20height=\x22200\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-secondary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-secondary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Vendedores\x20(",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22mt-2\x22>Sin\x20datos</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20encontraron\x20ventas\x20para\x20el\x20mes\x20seleccionado.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x20de\x20",
    "FILTRADO",
    "-01",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Ventas</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-primary\x20mb-0\x22>",
    "cliente",
    "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small\x20class=\x22text-muted\x22>",
    "isArray",
    "sort",
    "nombre",
    "Modal",
    "btnReporteSpinner",
    "d-none",
    "ticket",
    "💳\x20Tarjeta\x20Crédito",
    "totalVentas",
    "</th>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20",
    "tickets-footer",
    "Transferencia",
    "log",
    "forEach",
    "map",
    "bg-info",
    "addEventListener",
    "credit_card",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "mixed",
    "bg-success",
    "clase",
    "🔍\x20Usando\x20proxy\x20de\x20Vercel\x20actualizado",
    "label",
    "16DBDhKr",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error:</strong>\x20",
    "fecha-asc",
    "Días\x20del\x20Mes",
    "Ventas",
    "#dc3545",
    "fecha",
    "🔍\x20Total\x20exacto\x20del\x20proxy:",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "chartMetodosPago",
    "#6f42c1",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20selecciona\x20un\x20mes\x20para\x20generar\x20el\x20reporte.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "Error\x20al\x20generar\x20reporte:",
    "mesReporte",
    "Efectivo",
    "117pmNlRh",
    "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Controles\x20de\x20ordenamiento\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-label\x20small\x22>Ordenar\x20por:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22ordenarPor\x22\x20class=\x22form-select\x20form-select-sm\x22\x20onchange=\x22reordenarTickets()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fecha-desc\x22>Fecha\x20(Más\x20reciente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fecha-asc\x22>Fecha\x20(Más\x20antigua)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22importe-desc\x22>Importe\x20(Mayor\x20a\x20menor)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22importe-asc\x22>Importe\x20(Menor\x20a\x20mayor)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ticket-desc\x22>Ticket\x20(Descendente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ticket-asc\x22>Ticket\x20(Ascendente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cliente-asc\x22>Cliente\x20(A-Z)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cliente-desc\x22>Cliente\x20(Z-A)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-label\x20small\x22>Filtrar\x20por\x20método:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22filtrarMetodo\x22\x20class=\x22form-select\x20form-select-sm\x22\x20onchange=\x22reordenarTickets()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22todos\x22>Todos\x20los\x20métodos</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cash\x22>💰\x20Efectivo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit_card\x22>💳\x20Tarjeta\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22debit_card\x22>💳\x20Tarjeta\x20Débito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22transfer\x22>🏦\x20Transferencia</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit_note_application\x22>📄\x20Nota\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22check\x22>📋\x20Cheque</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit\x22>💵\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22combinado\x22>🔄\x20Combinado</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ticket</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Cliente</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Importe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Fecha</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Método</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Banco</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22tickets-tbody\x22>\x0a\x20\x20",
    "push",
    "nearest",
    "📄\x20Nota\x20Crédito",
    "💵\x20Crédito",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22btn-vendedor-",
    "hide",
    "No\x20se\x20encontraron\x20datos\x20del\x20vendedor",
    "length",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22detalleVendedorModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>📋\x20Detalle:\x20",
    "💰\x20Efectivo",
    "\x20tickets)</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "32525904sNwwWo",
    "show",
    "tickets-tbody",
  ];
  _0x38df = function () {
    return _0x15887d;
  };
  return _0x38df();
}
function generarGraficos(_0x503e5b, _0x821c17) {
  const _0x5def13 = _0x2a17;
  if (window["chartMetodosPago"]) window[_0x5def13(0x100)][_0x5def13(0x145)]();
  if (window[_0x5def13(0x135)]) window[_0x5def13(0x135)]["destroy"]();
  if (window[_0x5def13(0x170)]) window[_0x5def13(0x170)][_0x5def13(0x145)]();
  const _0x4a2938 = [],
    _0x3341fa = [],
    _0x18c1f4 = [],
    _0x304ec8 = {
      credit_card: _0x5def13(0x127),
      cash: _0x5def13(0x13d),
      debit_card: "#0dcaf0",
      credit_note_application: _0x5def13(0x196),
      transfer: _0x5def13(0x184),
      check: "#212529",
      credit: _0x5def13(0xfc),
      mixed: "#6f42c1",
    },
    _0x1fe41e = {
      credit_card: _0x5def13(0x192),
      cash: _0x5def13(0x106),
      debit_card: _0x5def13(0x12e),
      credit_note_application: "Nota\x20Crédito",
      transfer: _0x5def13(0xea),
      check: _0x5def13(0x12f),
      credit: "Crédito",
      mixed: "Combinado",
    };
  Object[_0x5def13(0x117)](_0x503e5b)[_0x5def13(0xec)]((_0x1ee56c) => {
    const _0x42f7b4 = _0x5def13;
    _0x503e5b[_0x1ee56c][_0x42f7b4(0x17a)] > 0x0 &&
      (_0x4a2938[_0x42f7b4(0x109)](_0x503e5b[_0x1ee56c][_0x42f7b4(0x17a)]),
      _0x3341fa[_0x42f7b4(0x109)](_0x1fe41e[_0x1ee56c] || _0x1ee56c),
      _0x18c1f4["push"](_0x304ec8[_0x1ee56c] || "#666"));
  });
  const _0x2d4b15 = document["getElementById"](_0x5def13(0x138));
  _0x2d4b15 &&
    (window[_0x5def13(0x100)] = new Chart(_0x2d4b15, {
      type: "doughnut",
      data: {
        labels: _0x3341fa,
        datasets: [
          {
            data: _0x4a2938,
            backgroundColor: _0x18c1f4,
            borderWidth: 0x2,
            borderColor: _0x5def13(0x176),
          },
        ],
      },
      options: {
        responsive: !![],
        maintainAspectRatio: ![],
        plugins: {
          legend: {
            position: _0x5def13(0x11b),
            labels: { padding: 0xf, usePointStyle: !![] },
          },
          tooltip: {
            callbacks: {
              label: function (_0x17078b) {
                const _0x4266ef = _0x5def13,
                  _0x2bfd5b = _0x17078b[_0x4266ef(0x18a)][_0x4266ef(0x187)][
                    _0x4266ef(0x194)
                  ]((_0x5cde40, _0x876003) => _0x5cde40 + _0x876003, 0x0),
                  _0x1aabef = ((_0x17078b["parsed"] / _0x2bfd5b) * 0x64)[
                    "toFixed"
                  ](0x1);
                return (
                  _0x17078b[_0x4266ef(0xf6)] +
                  ":\x20$" +
                  _0x17078b["parsed"][_0x4266ef(0x18b)]("es-MX", {
                    minimumFractionDigits: 0x2,
                  }) +
                  "\x20(" +
                  _0x1aabef +
                  "%)"
                );
              },
            },
          },
        },
      },
    }));
  const _0x44edf5 = [..._0x821c17]
      [_0x5def13(0xe0)](
        (_0x40c2e4, _0x1c374d) =>
          _0x1c374d["totalVentas"] - _0x40c2e4[_0x5def13(0xe7)]
      )
      [_0x5def13(0x183)](0x0, 0xa),
    _0x98d683 = _0x44edf5[_0x5def13(0xed)]((_0x3d4c00) =>
      _0x3d4c00[_0x5def13(0xe1)]["length"] > 0xf
        ? _0x3d4c00[_0x5def13(0xe1)][_0x5def13(0x11a)](0x0, 0xf) +
          _0x5def13(0x120)
        : _0x3d4c00[_0x5def13(0xe1)]
    ),
    _0x406b0f = _0x44edf5[_0x5def13(0xed)](
      (_0xda1184) => _0xda1184["totalVentas"]
    ),
    _0x4a4b99 = document[_0x5def13(0x155)](_0x5def13(0x19f));
  _0x4a4b99 &&
    (window[_0x5def13(0x135)] = new Chart(_0x4a4b99, {
      type: _0x5def13(0x169),
      data: {
        labels: _0x98d683,
        datasets: [
          {
            label: _0x5def13(0xfb),
            data: _0x406b0f,
            backgroundColor: _0x5def13(0x167),
            borderColor: _0x5def13(0x19b),
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
              label: function (_0x169eb6) {
                const _0x4df9f2 = _0x5def13;
                return (
                  _0x169eb6[_0x4df9f2(0xf6)] +
                  _0x4df9f2(0x160) +
                  _0x169eb6["parsed"]["x"]["toLocaleString"](_0x4df9f2(0x195), {
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
              callback: function (_0xab87a9) {
                const _0x2b0b91 = _0x5def13;
                return "$" + _0xab87a9[_0x2b0b91(0x18b)](_0x2b0b91(0x195));
              },
            },
          },
        },
      },
    }));
  const _0x137d0f = document[_0x5def13(0x155)](_0x5def13(0x12c));
  if (_0x137d0f) {
    const _0x5cb542 = {},
      _0xf838d1 = {};
    _0x821c17[_0x5def13(0xec)]((_0x4e81a3) => {
      const _0x319039 = _0x5def13;
      _0x4e81a3[_0x319039(0x12d)] &&
        _0x4e81a3[_0x319039(0x12d)][_0x319039(0xec)]((_0x2fe2c0) => {
          const _0x36f986 = _0x319039,
            _0x543d73 = _0x2fe2c0[_0x36f986(0xfd)][_0x36f986(0x133)]("T")[0x0],
            _0x44b359 = new Date(_0x543d73)[_0x36f986(0x168)]();
          !_0x5cb542[_0x44b359] && (_0x5cb542[_0x44b359] = {}),
            !_0x5cb542[_0x44b359][_0x4e81a3[_0x36f986(0xe1)]] &&
              (_0x5cb542[_0x44b359][_0x4e81a3["nombre"]] = 0x0),
            (_0x5cb542[_0x44b359][_0x4e81a3["nombre"]] += parseFloat(
              _0x2fe2c0["importe"]
            )),
            (_0xf838d1[_0x4e81a3[_0x36f986(0xe1)]] = !![]);
        });
    });
    const _0x5b00fc = Object[_0x5def13(0x117)](_0x5cb542)
        [_0x5def13(0xed)](Number)
        [_0x5def13(0xe0)]((_0x1ae12b, _0x16b269) => _0x1ae12b - _0x16b269),
      _0x3afe11 = [..._0x821c17]
        [_0x5def13(0xe0)](
          (_0x10c400, _0x477737) =>
            _0x477737["totalVentas"] - _0x10c400[_0x5def13(0xe7)]
        )
        [_0x5def13(0x183)](0x0, 0x8)
        ["map"]((_0x40202a) => _0x40202a[_0x5def13(0xe1)]),
      _0x226b9b = [
        "#0d6efd",
        _0x5def13(0x13d),
        _0x5def13(0xfc),
        _0x5def13(0x196),
        _0x5def13(0x131),
        _0x5def13(0x101),
        _0x5def13(0x175),
        _0x5def13(0x15b),
      ],
      _0x3cf65b = _0x3afe11[_0x5def13(0xed)]((_0x52c7ed, _0x3a649d) => {
        const _0x16b398 = _0x5def13,
          _0x5d5230 = _0x5b00fc["map"]((_0xd9daac) => {
            return _0x5cb542[_0xd9daac] && _0x5cb542[_0xd9daac][_0x52c7ed]
              ? _0x5cb542[_0xd9daac][_0x52c7ed]
              : 0x0;
          });
        return {
          label:
            _0x52c7ed["length"] > 0x14
              ? _0x52c7ed[_0x16b398(0x11a)](0x0, 0x14) + _0x16b398(0x120)
              : _0x52c7ed,
          data: _0x5d5230,
          borderColor: _0x226b9b[_0x3a649d % _0x226b9b[_0x16b398(0x110)]],
          backgroundColor:
            _0x226b9b[_0x3a649d % _0x226b9b[_0x16b398(0x110)]] + "20",
          borderWidth: 0x2,
          fill: ![],
          tension: 0.3,
          pointRadius: 0x4,
          pointHoverRadius: 0x6,
        };
      });
    window[_0x5def13(0x170)] = new Chart(_0x137d0f, {
      type: "line",
      data: {
        labels: _0x5b00fc[_0x5def13(0xed)](
          (_0x4e2bd7) => _0x5def13(0x137) + _0x4e2bd7
        ),
        datasets: _0x3cf65b,
      },
      options: {
        responsive: !![],
        maintainAspectRatio: ![],
        plugins: {
          legend: {
            position: "bottom",
            labels: { padding: 0xf, usePointStyle: !![], boxWidth: 0x14 },
          },
          tooltip: {
            mode: _0x5def13(0x13c),
            intersect: ![],
            callbacks: {
              label: function (_0x4c4c03) {
                const _0x2ba4ae = _0x5def13;
                return (
                  _0x4c4c03[_0x2ba4ae(0x18a)]["label"] +
                  _0x2ba4ae(0x160) +
                  _0x4c4c03["parsed"]["y"][_0x2ba4ae(0x18b)]("es-MX", {
                    minimumFractionDigits: 0x2,
                  })
                );
              },
            },
          },
        },
        scales: {
          x: {
            title: { display: !![], text: _0x5def13(0xfa) },
            grid: { display: !![], color: _0x5def13(0x128) },
          },
          y: {
            beginAtZero: !![],
            title: { display: !![], text: "Ventas\x20($)" },
            ticks: {
              callback: function (_0x186636) {
                const _0x17d534 = _0x5def13;
                return "$" + _0x186636[_0x17d534(0x18b)](_0x17d534(0x195));
              },
            },
            grid: { display: !![], color: "#e9ecef" },
          },
        },
        interaction: { mode: _0x5def13(0x10a), axis: "x", intersect: ![] },
      },
    });
  }
}
(window[_0x2a4300(0x15d)] = mostrarModalReporteVentas),
  (window[_0x2a4300(0x123)] = cerrarModalReporteVentas),
  (window[_0x2a4300(0x16f)] = generarReporteVentas),
  (window[_0x2a4300(0x17b)] = mostrarDetalleVendedor),
  document["addEventListener"]("DOMContentLoaded", function () {
    const _0x3fe2a4 = _0x2a4300,
      _0x3a5c09 = document["getElementById"]("mesReporte");
    if (_0x3a5c09) {
      const _0x32705a = new Date(),
        _0x4cbc41 = _0x32705a[_0x3fe2a4(0x14b)](),
        _0x314454 = (_0x32705a[_0x3fe2a4(0x18c)]() + 0x1)
          [_0x3fe2a4(0x1a3)]()
          ["padStart"](0x2, "0");
      _0x3a5c09[_0x3fe2a4(0x143)] = _0x4cbc41 + "-" + _0x314454;
    }
  });
