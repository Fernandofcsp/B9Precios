const _0x31f0de = _0x3ab1;
(function (_0x53e20b, _0x2cd798) {
  const _0xde607a = _0x3ab1,
    _0x104f6d = _0x53e20b();
  while (!![]) {
    try {
      const _0x1e050f =
        (-parseInt(_0xde607a(0x29c)) / 0x1) *
          (-parseInt(_0xde607a(0x24a)) / 0x2) +
        (-parseInt(_0xde607a(0x29f)) / 0x3) *
          (parseInt(_0xde607a(0x222)) / 0x4) +
        (-parseInt(_0xde607a(0x259)) / 0x5) *
          (-parseInt(_0xde607a(0x224)) / 0x6) +
        (-parseInt(_0xde607a(0x28c)) / 0x7) *
          (-parseInt(_0xde607a(0x1de)) / 0x8) +
        (-parseInt(_0xde607a(0x29e)) / 0x9) *
          (parseInt(_0xde607a(0x28d)) / 0xa) +
        -parseInt(_0xde607a(0x24b)) / 0xb +
        (parseInt(_0xde607a(0x20c)) / 0xc) * (parseInt(_0xde607a(0x1c5)) / 0xd);
      if (_0x1e050f === _0x2cd798) break;
      else _0x104f6d["push"](_0x104f6d["shift"]());
    } catch (_0x51b158) {
      _0x104f6d["push"](_0x104f6d["shift"]());
    }
  }
})(_0x244b, 0x8dfe0);
function mostrarModalReporteVentas() {
  const _0x351243 = _0x3ab1,
    _0x51084a = document[_0x351243(0x1d0)](_0x351243(0x210));
  if (_0x51084a) {
    const _0x5e378c = document[_0x351243(0x1d0)](_0x351243(0x262));
    if (_0x5e378c && !_0x5e378c["value"]) {
      const _0x1edbdb = new Date(),
        _0x1f365e = _0x1edbdb[_0x351243(0x1e5)](),
        _0x3a316f = (_0x1edbdb[_0x351243(0x1f6)]() + 0x1)
          ["toString"]()
          ["padStart"](0x2, "0");
      _0x5e378c[_0x351243(0x2ac)] = _0x1f365e + "-" + _0x3a316f;
    }
    const _0x1bc0c5 = new bootstrap[_0x351243(0x241)](_0x51084a);
    _0x1bc0c5[_0x351243(0x2ad)]();
  }
}
function cerrarModalReporteVentas() {
  const _0x17846c = _0x3ab1,
    _0x3ab661 = document[_0x17846c(0x1d0)](_0x17846c(0x210));
  if (_0x3ab661) {
    const _0x172437 = bootstrap[_0x17846c(0x241)]["getInstance"](_0x3ab661);
    _0x172437 && _0x172437["hide"]();
  }
}
function _0x3ab1(_0x589262, _0x54e910) {
  const _0x244b53 = _0x244b();
  return (
    (_0x3ab1 = function (_0x3ab185, _0x5c57ac) {
      _0x3ab185 = _0x3ab185 - 0x1bc;
      let _0x35b9be = _0x244b53[_0x3ab185];
      return _0x35b9be;
    }),
    _0x3ab1(_0x589262, _0x54e910)
  );
}
async function generarReporteVentas() {
  const _0x3ee627 = _0x3ab1,
    _0x15d8b5 = document[_0x3ee627(0x1d0)](_0x3ee627(0x262))["value"],
    _0x58d55e = document[_0x3ee627(0x1d0)](_0x3ee627(0x1e7)),
    _0x29355a = document["getElementById"](_0x3ee627(0x1f0)),
    _0x558603 = document[_0x3ee627(0x1d0)](_0x3ee627(0x1da));
  if (!_0x15d8b5) {
    _0x58d55e[_0x3ee627(0x1ec)] =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20selecciona\x20un\x20mes\x20para\x20generar\x20el\x20reporte.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20";
    return;
  }
  const _0x2b099e = 0x1,
    _0x6d8836 = _0x15d8b5 + "-01",
    _0x215567 = _0x15d8b5 + _0x3ee627(0x1fa);
  (_0x29355a["textContent"] = _0x3ee627(0x21f)),
    _0x558603[_0x3ee627(0x1f4)][_0x3ee627(0x230)](_0x3ee627(0x260));
  try {
    const _0x5b042c = _0x3ee627(0x1fd) + _0x15d8b5,
      _0x4ce039 = await fetch(_0x5b042c);
    if (!_0x4ce039["ok"])
      throw new Error(
        _0x3ee627(0x290) +
          _0x4ce039["status"] +
          "\x20" +
          _0x4ce039[_0x3ee627(0x234)]
      );
    const _0x4ecc5a = await _0x4ce039[_0x3ee627(0x257)]();
    if (_0x4ecc5a["status"] !== _0x3ee627(0x2a7))
      throw new Error("Error\x20en\x20la\x20API\x20original");
    const _0x191a39 = _0x4ecc5a[_0x3ee627(0x1d6)][_0x3ee627(0x211)] || [],
      _0x42079a = _0x4ecc5a[_0x3ee627(0x1d6)][_0x3ee627(0x2a4)],
      _0x1e7780 = _0x191a39[_0x3ee627(0x25c)];
    console[_0x3ee627(0x1ed)](
      "🔍\x20Usando\x20estructura\x20original\x20de\x20la\x20API"
    ),
      console[_0x3ee627(0x1ed)](
        "🔍\x20Total\x20exacto\x20original:",
        _0x42079a
      ),
      console[_0x3ee627(0x1ed)](_0x3ee627(0x286), _0x1e7780),
      console[_0x3ee627(0x1ed)](
        "🔍\x20Timezone:",
        _0x4ecc5a["data"][_0x3ee627(0x27f)]
      );
    const _0x4c7c61 = new Map();
    _0x191a39[_0x3ee627(0x1cc)]((_0x2c39e2) => {
      const _0x52304b = _0x3ee627,
        _0x2928d1 = _0x2c39e2["nombreVendedor"] || _0x52304b(0x245),
        _0x33826e = parseFloat(_0x2c39e2[_0x52304b(0x1d2)]) || 0x0;
      !_0x4c7c61[_0x52304b(0x1ee)](_0x2928d1) &&
        _0x4c7c61[_0x52304b(0x1d7)](_0x2928d1, {
          nombre: _0x2928d1,
          totalVentas: 0x0,
          cantidadTickets: 0x0,
          tickets: [],
        });
      const _0x4940e1 = _0x4c7c61[_0x52304b(0x202)](_0x2928d1);
      (_0x4940e1[_0x52304b(0x1fe)] += _0x33826e),
        _0x4940e1[_0x52304b(0x22f)]++,
        _0x4940e1["tickets"]["push"](_0x2c39e2);
    });
    const _0x5ecccc = Array["from"](_0x4c7c61["values"]())["sort"](
        (_0x4b2e90, _0x2b69ac) =>
          _0x2b69ac[_0x3ee627(0x1fe)] - _0x4b2e90[_0x3ee627(0x1fe)]
      ),
      _0x3e027a = _0x5ecccc[_0x3ee627(0x25c)];
    (window[_0x3ee627(0x229)] = _0x5ecccc),
      (window[_0x3ee627(0x205)] = _0x191a39);
    let _0x4ed5cc = {
      credit_card: { total: 0x0, cantidad: 0x0 },
      cash: { total: 0x0, cantidad: 0x0 },
      debit_card: { total: 0x0, cantidad: 0x0 },
      credit_note_application: { total: 0x0, cantidad: 0x0 },
      transfer: { total: 0x0, cantidad: 0x0 },
      check: { total: 0x0, cantidad: 0x0 },
      credit: { total: 0x0, cantidad: 0x0 },
      mixed: { total: 0x0, cantidad: 0x0 },
    };
    _0x191a39["forEach"]((_0x1fe6ea) => {
      const _0x3b7413 = _0x3ee627,
        _0x5af3ec = (_0x1fe6ea[_0x3b7413(0x287)] || "")["trim"](),
        _0x470ebb = parseFloat(_0x1fe6ea[_0x3b7413(0x1d2)]) || 0x0;
      if (_0x5af3ec[_0x3b7413(0x1dc)](",")) {
        const _0x15fe04 = _0x5af3ec[_0x3b7413(0x233)](",")["map"]((_0x8fdb0e) =>
            _0x8fdb0e[_0x3b7413(0x209)]()
          ),
          _0x4654cb = (_0x1fe6ea[_0x3b7413(0x264)] || "")
            [_0x3b7413(0x233)](",")
            ["map"]((_0x4e5dea) => parseFloat(_0x4e5dea["trim"]()) || 0x0);
        console["log"](_0x3b7413(0x295) + _0x5af3ec),
          console[_0x3b7413(0x1ed)](
            "📊\x20Importes:\x20" + _0x4654cb[_0x3b7413(0x2af)](",\x20")
          ),
          _0x15fe04["forEach"]((_0x19e89f, _0x184e59) => {
            const _0x364f7b = _0x3b7413,
              _0x526d3d = _0x4654cb[_0x184e59] || 0x0;
            _0x4ed5cc[_0x19e89f]
              ? ((_0x4ed5cc[_0x19e89f][_0x364f7b(0x2a4)] += _0x526d3d),
                (_0x4ed5cc[_0x19e89f][_0x364f7b(0x214)] += 0x1))
              : (console["log"](_0x364f7b(0x294) + _0x19e89f + "\x22"),
                (_0x4ed5cc["mixed"][_0x364f7b(0x2a4)] += _0x526d3d),
                (_0x4ed5cc[_0x364f7b(0x212)][_0x364f7b(0x214)] += 0x1));
          });
      } else
        _0x4ed5cc[_0x5af3ec]
          ? ((_0x4ed5cc[_0x5af3ec]["total"] += _0x470ebb),
            (_0x4ed5cc[_0x5af3ec][_0x3b7413(0x214)] += 0x1))
          : (console[_0x3b7413(0x1ed)](
              "⚠️\x20Método\x20no\x20reconocido:\x20\x22" + _0x5af3ec + "\x22"
            ),
            (_0x4ed5cc[_0x3b7413(0x212)][_0x3b7413(0x2a4)] += _0x470ebb),
            (_0x4ed5cc[_0x3b7413(0x212)][_0x3b7413(0x214)] += 0x1));
    }),
      console[_0x3ee627(0x1ed)](_0x3ee627(0x1d9), _0x4ed5cc);
    if (_0x5ecccc[_0x3ee627(0x25c)] === 0x0) {
      _0x58d55e["innerHTML"] = _0x3ee627(0x1c6);
      return;
    }
    const _0x3a27b6 = {
      credit_card: "💳\x20Tarjeta\x20Crédito",
      cash: "💰\x20Efectivo",
      debit_card: _0x3ee627(0x20b),
      credit_note_application: "📄\x20Nota\x20Crédito",
      transfer: _0x3ee627(0x266),
      check: _0x3ee627(0x21b),
      credit: "💵\x20Crédito",
      mixed: "🔄\x20Combinado",
    };
    let _0x22d8f = "";
    _0x4ed5cc &&
      Object[_0x3ee627(0x249)](_0x4ed5cc)[_0x3ee627(0x1cc)]((_0x1a922e) => {
        const _0x5094b5 = _0x3ee627,
          _0x492c16 = _0x4ed5cc[_0x1a922e];
        _0x492c16[_0x5094b5(0x2a4)] > 0x0 &&
          (_0x22d8f +=
            _0x5094b5(0x293) +
            _0x492c16[_0x5094b5(0x2a4)][_0x5094b5(0x1c4)]("es-MX", {
              minimumFractionDigits: 0x2,
            }) +
            "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>" +
            (_0x3a27b6[_0x1a922e] || _0x1a922e) +
            _0x5094b5(0x26f) +
            Math[_0x5094b5(0x271)](_0x492c16[_0x5094b5(0x214)]) +
            _0x5094b5(0x251));
      });
    let _0x540f41 =
      _0x3ee627(0x2a3) +
      _0x15d8b5 +
      _0x3ee627(0x20d) +
      (Math[_0x3ee627(0x271)](_0x42079a * 0x64) / 0x64)[_0x3ee627(0x1c4)](
        "es-MX",
        { minimumFractionDigits: 0x2 }
      ) +
      _0x3ee627(0x238) +
      _0x3e027a +
      _0x3ee627(0x25f) +
      _0x1e7780 +
      _0x3ee627(0x1e0) +
      (_0x22d8f
        ? _0x3ee627(0x239) +
          _0x22d8f +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"
        : "") +
      _0x3ee627(0x246) +
      _0x5ecccc["length"] +
      _0x3ee627(0x1f7);
    _0x5ecccc[_0x3ee627(0x1cc)]((_0x240ed1, _0x53cc3d) => {
      const _0x512007 = _0x3ee627,
        _0x1e5b37 = _0x240ed1["totalVentas"]["toLocaleString"](
          _0x512007(0x26b),
          { minimumFractionDigits: 0x2 }
        );
      _0x540f41 +=
        _0x512007(0x252) +
        _0x240ed1[_0x512007(0x23d)] +
        _0x512007(0x25d) +
        _0x240ed1[_0x512007(0x23d)] +
        _0x512007(0x27b) +
        _0x1e5b37 +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>" +
        _0x240ed1[_0x512007(0x22f)] +
        _0x512007(0x216) +
        ((_0x240ed1[_0x512007(0x1fe)] /
          (Math[_0x512007(0x271)](_0x42079a * 0x64) / 0x64)) *
          0x64)[_0x512007(0x1fb)](0x1) +
        _0x512007(0x26c) +
        ((_0x240ed1["totalVentas"] /
          (Math[_0x512007(0x271)](_0x42079a * 0x64) / 0x64)) *
          0x64)[_0x512007(0x1fb)](0x1) +
        _0x512007(0x21c) +
        _0x240ed1[_0x512007(0x23d)] +
        _0x512007(0x269) +
        _0x53cc3d +
        ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22btn-vendedor-" +
        _0x53cc3d +
        _0x512007(0x232);
    }),
      (_0x540f41 +=
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      (_0x58d55e[_0x3ee627(0x1ec)] = _0x540f41),
      generarGraficos(_0x4ed5cc, _0x5ecccc);
  } catch (_0x380f0b) {
    console[_0x3ee627(0x223)](_0x3ee627(0x231), _0x380f0b),
      (_0x58d55e[_0x3ee627(0x1ec)] =
        _0x3ee627(0x206) + _0x380f0b[_0x3ee627(0x1e8)] + _0x3ee627(0x22c));
  } finally {
    (_0x29355a[_0x3ee627(0x228)] = "Generar\x20Reporte"),
      _0x558603["classList"][_0x3ee627(0x1dd)]("d-none");
  }
}
function mostrarDetalleVendedor(_0x5f4aa9, _0xf64a2e) {
  const _0x335935 = _0x3ab1,
    _0xb27cb8 = window["ultimosVendedores"] || [],
    _0x5e2c46 = _0xb27cb8[_0xf64a2e];
  if (!_0x5e2c46 || !_0x5e2c46["tickets"]) {
    alert("No\x20se\x20encontraron\x20datos\x20del\x20vendedor");
    return;
  }
  const _0x45ee71 = _0x5e2c46[_0x335935(0x1fc)];
  function _0x6efad1(_0x47d6d9) {
    const _0x2cd781 = _0x335935,
      _0x2f6200 = (_0x47d6d9 || "")[_0x2cd781(0x218)]()[_0x2cd781(0x209)]();
    if (_0x2f6200[_0x2cd781(0x1dc)]("cash") || _0x2f6200 === "cash")
      return { nombre: _0x2cd781(0x2b0), clase: _0x2cd781(0x267) };
    else {
      if (
        _0x2f6200[_0x2cd781(0x1dc)](_0x2cd781(0x2ae)) ||
        _0x2f6200 === _0x2cd781(0x2ae)
      )
        return { nombre: _0x2cd781(0x2a6), clase: _0x2cd781(0x2a2) };
      else {
        if (
          _0x2f6200[_0x2cd781(0x1dc)](_0x2cd781(0x28a)) ||
          _0x2f6200 === _0x2cd781(0x28a)
        )
          return { nombre: "💳\x20Tarjeta\x20Débito", clase: _0x2cd781(0x20a) };
        else {
          if (
            _0x2f6200[_0x2cd781(0x1dc)]("transfer") ||
            _0x2f6200 === _0x2cd781(0x1c1)
          )
            return { nombre: _0x2cd781(0x266), clase: "bg-secondary" };
          else {
            if (
              _0x2f6200[_0x2cd781(0x1dc)]("credit_note") ||
              _0x2f6200 === _0x2cd781(0x23f)
            )
              return { nombre: _0x2cd781(0x29a), clase: _0x2cd781(0x236) };
            else {
              if (
                _0x2f6200["includes"](_0x2cd781(0x279)) ||
                _0x2f6200 === _0x2cd781(0x279)
              )
                return { nombre: _0x2cd781(0x21b), clase: _0x2cd781(0x291) };
              else {
                if (
                  _0x2f6200["includes"](_0x2cd781(0x284)) &&
                  !_0x2f6200[_0x2cd781(0x1dc)](_0x2cd781(0x250))
                )
                  return { nombre: _0x2cd781(0x1d3), clase: "bg-danger" };
                else
                  return _0x2f6200[_0x2cd781(0x1dc)](",") ||
                    _0x2f6200[_0x2cd781(0x1dc)]("\x20")
                    ? { nombre: _0x2cd781(0x1f8), clase: _0x2cd781(0x22d) }
                    : { nombre: "❓\x20Otro", clase: _0x2cd781(0x1d5) };
              }
            }
          }
        }
      }
    }
  }
  let _0x4bc953 = _0x335935(0x2a9) + _0x5f4aa9 + _0x335935(0x22e);
  function _0x51003a(_0x3c6f36, _0x5130eb = _0x335935(0x217)) {
    const _0x339c8f = _0x335935;
    let _0x8ed70b = _0x3c6f36;
    _0x5130eb !== _0x339c8f(0x217) &&
      (_0x8ed70b = _0x3c6f36[_0x339c8f(0x285)]((_0x3894ec) => {
        const _0x4419d4 = _0x339c8f,
          _0x16617d = (_0x3894ec[_0x4419d4(0x287)] || "")
            [_0x4419d4(0x218)]()
            [_0x4419d4(0x209)]();
        if (_0x5130eb === _0x4419d4(0x2a5))
          return (
            _0x16617d[_0x4419d4(0x1dc)](",") ||
            _0x16617d[_0x4419d4(0x1dc)]("\x20")
          );
        return _0x16617d[_0x4419d4(0x1dc)](_0x5130eb);
      }));
    let _0x124d29 = "";
    return (
      _0x8ed70b[_0x339c8f(0x1cc)]((_0x3d9611) => {
        const _0x216b2b = _0x339c8f,
          _0xb0371d = _0x6efad1(_0x3d9611[_0x216b2b(0x287)]),
          _0x117025 = new Date(_0x3d9611[_0x216b2b(0x258)])[_0x216b2b(0x1d8)](
            _0x216b2b(0x26b),
            {
              day: _0x216b2b(0x23e),
              month: _0x216b2b(0x23e),
              hour: _0x216b2b(0x23e),
              minute: _0x216b2b(0x23e),
            }
          );
        _0x124d29 +=
          _0x216b2b(0x1db) +
          _0x3d9611["Ticket"] +
          "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>" +
          _0x3d9611[_0x216b2b(0x208)] +
          "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$" +
          parseFloat(_0x3d9611[_0x216b2b(0x1d2)])["toLocaleString"](
            _0x216b2b(0x26b),
            { minimumFractionDigits: 0x2 }
          ) +
          _0x216b2b(0x1c0) +
          _0x117025 +
          _0x216b2b(0x1cf) +
          _0xb0371d["clase"] +
          _0x216b2b(0x1f3) +
          _0xb0371d[_0x216b2b(0x23d)] +
          "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small\x20class=\x22text-muted\x22>" +
          (_0x3d9611[_0x216b2b(0x1c3)] || "-") +
          _0x216b2b(0x1c2);
      }),
      { filasHTML: _0x124d29, ticketsFiltrados: _0x8ed70b }
    );
  }
  const { filasHTML: _0x248669, ticketsFiltrados: _0x468408 } =
    _0x51003a(_0x45ee71);
  _0x4bc953 += _0x248669;
  const _0x2926c0 = _0x45ee71[_0x335935(0x1f5)](
    (_0x2c3246, _0x36a483) => _0x2c3246 + parseFloat(_0x36a483["Importe"]),
    0x0
  );
  (_0x4bc953 +=
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tfoot\x20id=\x22tickets-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>TOTAL</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$" +
    _0x2926c0[_0x335935(0x1c4)]("es-MX", { minimumFractionDigits: 0x2 }) +
    _0x335935(0x28f) +
    _0x45ee71[_0x335935(0x25c)] +
    _0x335935(0x21a)),
    document["body"][_0x335935(0x1ff)]("beforeend", _0x4bc953),
    (window["reordenarTickets"] = function () {
      const _0x3929ce = _0x335935,
        _0x599a48 = document["getElementById"](_0x3929ce(0x226))[
          _0x3929ce(0x2ac)
        ],
        _0x3a32e1 = document[_0x3929ce(0x1d0)](_0x3929ce(0x282))[
          _0x3929ce(0x2ac)
        ];
      let _0x575b9c = [..._0x45ee71];
      _0x3a32e1 !== _0x3929ce(0x217) &&
        (_0x575b9c = _0x45ee71[_0x3929ce(0x285)]((_0x24dfc3) => {
          const _0x3c7cbc = _0x3929ce,
            _0x281c12 = (_0x24dfc3["Metodo_pago"] || "")
              [_0x3c7cbc(0x218)]()
              ["trim"]();
          if (_0x3a32e1 === _0x3c7cbc(0x2a5))
            return (
              _0x281c12[_0x3c7cbc(0x1dc)](",") ||
              _0x281c12[_0x3c7cbc(0x1dc)]("\x20")
            );
          return _0x281c12[_0x3c7cbc(0x1dc)](_0x3a32e1);
        }));
      switch (_0x599a48) {
        case _0x3929ce(0x2a8):
          _0x575b9c[_0x3929ce(0x298)](
            (_0x45ff33, _0x3d4f1b) =>
              new Date(_0x3d4f1b["or_fecha"]) -
              new Date(_0x45ff33[_0x3929ce(0x258)])
          );
          break;
        case _0x3929ce(0x255):
          _0x575b9c[_0x3929ce(0x298)](
            (_0x45133c, _0x3733fa) =>
              new Date(_0x45133c[_0x3929ce(0x258)]) -
              new Date(_0x3733fa[_0x3929ce(0x258)])
          );
          break;
        case "importe-desc":
          _0x575b9c[_0x3929ce(0x298)](
            (_0x13e07f, _0x539dde) =>
              parseFloat(_0x539dde[_0x3929ce(0x1d2)]) -
              parseFloat(_0x13e07f["Importe"])
          );
          break;
        case "importe-asc":
          _0x575b9c[_0x3929ce(0x298)](
            (_0x5cff09, _0x993dc9) =>
              parseFloat(_0x5cff09[_0x3929ce(0x1d2)]) -
              parseFloat(_0x993dc9[_0x3929ce(0x1d2)])
          );
          break;
        case "ticket-desc":
          _0x575b9c["sort"]((_0x51c976, _0x3a85be) =>
            _0x3a85be[_0x3929ce(0x20e)]["localeCompare"](
              _0x51c976[_0x3929ce(0x20e)],
              undefined,
              { numeric: !![] }
            )
          );
          break;
        case _0x3929ce(0x276):
          _0x575b9c[_0x3929ce(0x298)]((_0x2d29f8, _0xa38ca9) =>
            _0x2d29f8[_0x3929ce(0x20e)]["localeCompare"](
              _0xa38ca9[_0x3929ce(0x20e)],
              undefined,
              { numeric: !![] }
            )
          );
          break;
        case _0x3929ce(0x1c9):
          _0x575b9c[_0x3929ce(0x298)]((_0x183f83, _0x49f7c8) =>
            _0x183f83[_0x3929ce(0x208)]["localeCompare"](_0x49f7c8["Cliente"])
          );
          break;
        case _0x3929ce(0x270):
          _0x575b9c[_0x3929ce(0x298)]((_0x4692b0, _0x2f0db9) =>
            _0x2f0db9[_0x3929ce(0x208)][_0x3929ce(0x22a)](
              _0x4692b0[_0x3929ce(0x208)]
            )
          );
          break;
      }
      const _0x571ded = document[_0x3929ce(0x1d0)]("tickets-tbody"),
        _0x15442e = document["getElementById"]("tickets-footer");
      let _0x4e6066 = "";
      _0x575b9c[_0x3929ce(0x1cc)]((_0x56f091) => {
        const _0x58822e = _0x3929ce,
          _0x5a6230 = _0x6efad1(_0x56f091[_0x58822e(0x287)]),
          _0x30a133 = new Date(_0x56f091[_0x58822e(0x258)])[
            "toLocaleDateString"
          ](_0x58822e(0x26b), {
            day: _0x58822e(0x23e),
            month: _0x58822e(0x23e),
            hour: _0x58822e(0x23e),
            minute: _0x58822e(0x23e),
          });
        _0x4e6066 +=
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><code>" +
          _0x56f091[_0x58822e(0x1f1)] +
          _0x58822e(0x2a1) +
          _0x56f091["cliente"] +
          _0x58822e(0x20f) +
          parseFloat(_0x56f091[_0x58822e(0x1d2)])["toLocaleString"]("es-MX", {
            minimumFractionDigits: 0x2,
          }) +
          _0x58822e(0x1c0) +
          _0x30a133 +
          _0x58822e(0x1cf) +
          _0x5a6230[_0x58822e(0x1be)] +
          _0x58822e(0x1f3) +
          _0x5a6230[_0x58822e(0x23d)] +
          "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small\x20class=\x22text-muted\x22>" +
          (_0x56f091[_0x58822e(0x21e)] || "-") +
          _0x58822e(0x1c2);
      }),
        (_0x571ded["innerHTML"] = _0x4e6066);
      const _0x1b1bd7 = _0x575b9c["reduce"](
        (_0x39fcba, _0x481cb6) =>
          _0x39fcba + parseFloat(_0x481cb6[_0x3929ce(0x1d2)]),
        0x0
      );
      _0x15442e[_0x3929ce(0x1ec)] =
        _0x3929ce(0x220) +
        (_0x3a32e1 !== _0x3929ce(0x217) ? _0x3929ce(0x213) : _0x3929ce(0x265)) +
        _0x3929ce(0x2a0) +
        _0x1b1bd7[_0x3929ce(0x1c4)](_0x3929ce(0x26b), {
          minimumFractionDigits: 0x2,
        }) +
        "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x223\x22>" +
        _0x575b9c[_0x3929ce(0x25c)] +
        _0x3929ce(0x275) +
        (_0x3a32e1 !== _0x3929ce(0x217)
          ? _0x3929ce(0x29b) + _0x45ee71[_0x3929ce(0x25c)]
          : "") +
        _0x3929ce(0x26a);
    });
  const _0x58803d = new bootstrap[_0x335935(0x241)](
    document[_0x335935(0x1d0)]("detalleVendedorModal")
  );
  _0x58803d["show"](),
    document[_0x335935(0x1d0)](_0x335935(0x274))["addEventListener"](
      _0x335935(0x280),
      () => {
        const _0x2de5d1 = _0x335935;
        document["getElementById"](_0x2de5d1(0x274))[_0x2de5d1(0x230)](),
          delete window[_0x2de5d1(0x299)];
      }
    );
}
function generarGraficos(_0x43745d, _0x339ec5) {
  const _0x3de084 = _0x3ab1;
  if (window[_0x3de084(0x27a)]) window[_0x3de084(0x27a)][_0x3de084(0x219)]();
  if (window["chartVendedores"]) window[_0x3de084(0x1e2)][_0x3de084(0x219)]();
  if (window[_0x3de084(0x244)])
    window["chartVentasDiarias"][_0x3de084(0x219)]();
  const _0x8239fc = [],
    _0x4939c1 = [],
    _0x38772c = [],
    _0x3d1f1d = {
      credit_card: _0x3de084(0x1ca),
      cash: "#198754",
      debit_card: _0x3de084(0x1bf),
      credit_note_application: _0x3de084(0x1d1),
      transfer: _0x3de084(0x263),
      check: _0x3de084(0x1f9),
      credit: _0x3de084(0x1f2),
      mixed: _0x3de084(0x278),
    },
    _0xe02ca4 = {
      credit_card: _0x3de084(0x296),
      cash: "Efectivo",
      debit_card: _0x3de084(0x1df),
      credit_note_application: "Nota\x20Crédito",
      transfer: "Transferencia",
      check: _0x3de084(0x25a),
      credit: _0x3de084(0x227),
      mixed: _0x3de084(0x207),
    };
  Object[_0x3de084(0x249)](_0x43745d)[_0x3de084(0x1cc)]((_0x5f053c) => {
    const _0x490706 = _0x3de084;
    _0x43745d[_0x5f053c][_0x490706(0x2a4)] > 0x0 &&
      (_0x8239fc["push"](_0x43745d[_0x5f053c][_0x490706(0x2a4)]),
      _0x4939c1[_0x490706(0x1bc)](_0xe02ca4[_0x5f053c] || _0x5f053c),
      _0x38772c[_0x490706(0x1bc)](_0x3d1f1d[_0x5f053c] || "#666"));
  });
  const _0x256f4b = document[_0x3de084(0x1d0)](_0x3de084(0x1e1));
  _0x256f4b &&
    (window[_0x3de084(0x27a)] = new Chart(_0x256f4b, {
      type: _0x3de084(0x24e),
      data: {
        labels: _0x4939c1,
        datasets: [
          {
            data: _0x8239fc,
            backgroundColor: _0x38772c,
            borderWidth: 0x2,
            borderColor: _0x3de084(0x235),
          },
        ],
      },
      options: {
        responsive: !![],
        maintainAspectRatio: ![],
        plugins: {
          legend: {
            position: _0x3de084(0x288),
            labels: { padding: 0xf, usePointStyle: !![] },
          },
          tooltip: {
            callbacks: {
              label: function (_0x4e564d) {
                const _0x2d2348 = _0x3de084,
                  _0x28306c = _0x4e564d["dataset"][_0x2d2348(0x1d6)][
                    _0x2d2348(0x1f5)
                  ]((_0x3077e8, _0x15cd4a) => _0x3077e8 + _0x15cd4a, 0x0),
                  _0x12419c = ((_0x4e564d[_0x2d2348(0x1e6)] / _0x28306c) *
                    0x64)["toFixed"](0x1);
                return (
                  _0x4e564d[_0x2d2348(0x242)] +
                  ":\x20$" +
                  _0x4e564d[_0x2d2348(0x1e6)][_0x2d2348(0x1c4)]("es-MX", {
                    minimumFractionDigits: 0x2,
                  }) +
                  "\x20(" +
                  _0x12419c +
                  "%)"
                );
              },
            },
          },
        },
      },
    }));
  const _0x488e43 = [..._0x339ec5]
      [_0x3de084(0x298)](
        (_0x2369c8, _0x205c06) =>
          _0x205c06["totalVentas"] - _0x2369c8["totalVentas"]
      )
      ["slice"](0x0, 0xa),
    _0x3d7533 = _0x488e43[_0x3de084(0x1e4)]((_0x340dc6) =>
      _0x340dc6[_0x3de084(0x23d)]["length"] > 0xf
        ? _0x340dc6[_0x3de084(0x23d)][_0x3de084(0x215)](0x0, 0xf) +
          _0x3de084(0x23a)
        : _0x340dc6[_0x3de084(0x23d)]
    ),
    _0x4c15e7 = _0x488e43[_0x3de084(0x1e4)](
      (_0x160be3) => _0x160be3["totalVentas"]
    ),
    _0x11f92b = document[_0x3de084(0x1d0)](_0x3de084(0x29d));
  _0x11f92b &&
    (window[_0x3de084(0x1e2)] = new Chart(_0x11f92b, {
      type: "bar",
      data: {
        labels: _0x3d7533,
        datasets: [
          {
            label: _0x3de084(0x23b),
            data: _0x4c15e7,
            backgroundColor: _0x3de084(0x1cd),
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
              label: function (_0x21e76a) {
                const _0x1efa0b = _0x3de084;
                return (
                  _0x21e76a[_0x1efa0b(0x242)] +
                  ":\x20$" +
                  _0x21e76a[_0x1efa0b(0x1e6)]["x"][_0x1efa0b(0x1c4)](
                    _0x1efa0b(0x26b),
                    { minimumFractionDigits: 0x2 }
                  )
                );
              },
            },
          },
        },
        scales: {
          x: {
            beginAtZero: !![],
            ticks: {
              callback: function (_0x27b189) {
                const _0x3e07f6 = _0x3de084;
                return "$" + _0x27b189["toLocaleString"](_0x3e07f6(0x26b));
              },
            },
          },
        },
      },
    }));
  const _0x15ebb4 = document[_0x3de084(0x1d0)](_0x3de084(0x1eb));
  if (_0x15ebb4) {
    const _0x3640b3 = {},
      _0x2a7498 = {};
    _0x339ec5[_0x3de084(0x1cc)]((_0x15bdbe) => {
      const _0x3aac4f = _0x3de084;
      _0x15bdbe[_0x3aac4f(0x1fc)] &&
        _0x15bdbe[_0x3aac4f(0x1fc)][_0x3aac4f(0x1cc)]((_0x41cd4b) => {
          const _0x41c483 = _0x3aac4f,
            _0xaf7eeb = _0x41cd4b["or_fecha"][_0x41c483(0x233)]("T")[0x0],
            _0x4240b2 = new Date(_0xaf7eeb)["getDate"]();
          !_0x3640b3[_0x4240b2] && (_0x3640b3[_0x4240b2] = {}),
            !_0x3640b3[_0x4240b2][_0x15bdbe[_0x41c483(0x23d)]] &&
              (_0x3640b3[_0x4240b2][_0x15bdbe[_0x41c483(0x23d)]] = 0x0),
            (_0x3640b3[_0x4240b2][_0x15bdbe[_0x41c483(0x23d)]] += parseFloat(
              _0x41cd4b[_0x41c483(0x1d2)]
            )),
            (_0x2a7498[_0x15bdbe[_0x41c483(0x23d)]] = !![]);
        });
    });
    const _0x37d683 = Object["keys"](_0x3640b3)
        [_0x3de084(0x1e4)](Number)
        ["sort"]((_0x447f58, _0x270bc1) => _0x447f58 - _0x270bc1),
      _0x17a71f = window[_0x3de084(0x1ef)] < 0x300,
      _0x508a11 = _0x17a71f ? 0x5 : 0x8,
      _0xd9e42f = [..._0x339ec5]
        [_0x3de084(0x298)](
          (_0x3c7089, _0x1dd828) =>
            _0x1dd828[_0x3de084(0x1fe)] - _0x3c7089[_0x3de084(0x1fe)]
        )
        [_0x3de084(0x1bd)](0x0, _0x508a11)
        [_0x3de084(0x1e4)]((_0x1c674a) => _0x1c674a[_0x3de084(0x23d)]),
      _0x5c46ec = [
        _0x3de084(0x1ca),
        _0x3de084(0x1f2),
        "#198754",
        _0x3de084(0x1d1),
        _0x3de084(0x278),
        _0x3de084(0x272),
        _0x3de084(0x204),
        _0x3de084(0x1bf),
      ],
      _0x5bb567 = _0xd9e42f[_0x3de084(0x1e4)]((_0xce45eb, _0x9f3b66) => {
        const _0x5a05cc = _0x3de084,
          _0x290bf2 = _0x37d683["map"]((_0x10a297) => {
            return _0x3640b3[_0x10a297] && _0x3640b3[_0x10a297][_0xce45eb]
              ? _0x3640b3[_0x10a297][_0xce45eb]
              : 0x0;
          });
        return {
          label:
            _0x17a71f && _0xce45eb[_0x5a05cc(0x25c)] > 0xf
              ? _0xce45eb[_0x5a05cc(0x215)](0x0, 0xf) + "..."
              : _0xce45eb,
          data: _0x290bf2,
          borderColor: _0x5c46ec[_0x9f3b66 % _0x5c46ec[_0x5a05cc(0x25c)]],
          backgroundColor:
            _0x5c46ec[_0x9f3b66 % _0x5c46ec[_0x5a05cc(0x25c)]] + "20",
          borderWidth: _0x17a71f ? 0x3 : 0x2,
          fill: ![],
          tension: 0.3,
          pointRadius: _0x17a71f ? 0x5 : 0x4,
          pointHoverRadius: _0x17a71f ? 0x8 : 0x6,
          pointBackgroundColor:
            _0x5c46ec[_0x9f3b66 % _0x5c46ec[_0x5a05cc(0x25c)]],
          pointBorderColor: "#fff",
          pointBorderWidth: 0x2,
        };
      });
    window[_0x3de084(0x297)] = {
      diasDelMes: _0x37d683,
      ventasPorDia: _0x3640b3,
      topVendedores: _0xd9e42f,
      datasets: _0x5bb567,
      coloresLineas: _0x5c46ec,
    };
    const _0x28b800 = document["getElementById"](_0x3de084(0x256));
    _0x28b800 &&
      _0x17a71f &&
      ((_0x28b800[_0x3de084(0x1ec)] = _0x3de084(0x1c8)),
      _0xd9e42f[_0x3de084(0x1cc)]((_0x30c283) => {
        const _0x3b25a3 = _0x3de084,
          _0x12b92c = document[_0x3b25a3(0x203)](_0x3b25a3(0x1cb));
        (_0x12b92c[_0x3b25a3(0x2ac)] = _0x30c283),
          (_0x12b92c[_0x3b25a3(0x228)] =
            _0x30c283[_0x3b25a3(0x25c)] > 0x19
              ? _0x30c283[_0x3b25a3(0x215)](0x0, 0x19) + _0x3b25a3(0x23a)
              : _0x30c283),
          _0x28b800[_0x3b25a3(0x247)](_0x12b92c);
      })),
      (window[_0x3de084(0x244)] = new Chart(_0x15ebb4, {
        type: "line",
        data: {
          labels: _0x37d683[_0x3de084(0x1e4)]((_0x318a90) =>
            _0x17a71f ? "" + _0x318a90 : "Día\x20" + _0x318a90
          ),
          datasets: _0x5bb567,
        },
        options: {
          responsive: !![],
          maintainAspectRatio: ![],
          devicePixelRatio: window["devicePixelRatio"] || 0x1,
          plugins: {
            legend: {
              position: _0x17a71f ? _0x3de084(0x288) : _0x3de084(0x1ce),
              display: !_0x17a71f,
              labels: {
                padding: _0x17a71f ? 0xa : 0xf,
                usePointStyle: !![],
                boxWidth: _0x17a71f ? 0xf : 0x14,
                font: { size: _0x17a71f ? 0xa : 0xc },
              },
            },
            tooltip: {
              mode: _0x3de084(0x253),
              intersect: ![],
              backgroundColor: _0x3de084(0x23c),
              titleColor: _0x3de084(0x235),
              bodyColor: _0x3de084(0x235),
              borderColor: _0x3de084(0x277),
              borderWidth: 0x1,
              cornerRadius: 0x8,
              displayColors: !![],
              padding: 0xc,
              callbacks: {
                title: function (_0x55c892) {
                  const _0x4ebe89 = _0x3de084;
                  return _0x4ebe89(0x281) + _0x55c892[0x0][_0x4ebe89(0x242)];
                },
                label: function (_0x306aae) {
                  const _0x41efc3 = _0x3de084;
                  return (
                    _0x306aae["dataset"][_0x41efc3(0x242)] +
                    _0x41efc3(0x24f) +
                    _0x306aae[_0x41efc3(0x1e6)]["y"][_0x41efc3(0x1c4)](
                      _0x41efc3(0x26b),
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
                display: !_0x17a71f,
                text: _0x3de084(0x289),
                font: { size: _0x17a71f ? 0xa : 0xc },
              },
              ticks: {
                font: { size: _0x17a71f ? 0xa : 0xb },
                maxTicksLimit: _0x17a71f ? 0x8 : 0xf,
              },
              grid: { display: !![], color: _0x3de084(0x24c), lineWidth: 0x1 },
            },
            y: {
              beginAtZero: !![],
              title: {
                display: !_0x17a71f,
                text: _0x3de084(0x248),
                font: { size: _0x17a71f ? 0xa : 0xc },
              },
              ticks: {
                font: { size: _0x17a71f ? 0x9 : 0xb },
                callback: function (_0x3b9fa8) {
                  const _0x5394cc = _0x3de084;
                  if (_0x17a71f)
                    return _0x3b9fa8 >= 0x3e8
                      ? "$" + (_0x3b9fa8 / 0x3e8)[_0x5394cc(0x1fb)](0x0) + "K"
                      : "$" + _0x3b9fa8;
                  return "$" + _0x3b9fa8[_0x5394cc(0x1c4)](_0x5394cc(0x26b));
                },
                maxTicksLimit: _0x17a71f ? 0x6 : 0x8,
              },
              grid: { display: !![], color: _0x3de084(0x24c), lineWidth: 0x1 },
            },
          },
          interaction: { mode: _0x3de084(0x1d4), axis: "x", intersect: ![] },
          elements: {
            point: {
              hoverBackgroundColor: _0x3de084(0x235),
              hoverBorderWidth: 0x3,
            },
          },
        },
      }));
  }
}
(window[_0x31f0de(0x2ab)] = mostrarModalReporteVentas),
  (window["cerrarModalReporteVentas"] = cerrarModalReporteVentas),
  (window[_0x31f0de(0x261)] = generarReporteVentas),
  (window[_0x31f0de(0x268)] = mostrarDetalleVendedor),
  document[_0x31f0de(0x26e)](_0x31f0de(0x26d), function () {
    const _0x1db5e8 = _0x31f0de,
      _0x318077 = document["getElementById"](_0x1db5e8(0x262));
    if (_0x318077) {
      const _0x387e59 = new Date(),
        _0x56320d = _0x387e59[_0x1db5e8(0x1e5)](),
        _0x17780d = (_0x387e59[_0x1db5e8(0x1f6)]() + 0x1)
          [_0x1db5e8(0x273)]()
          [_0x1db5e8(0x21d)](0x2, "0");
      _0x318077["value"] = _0x56320d + "-" + _0x17780d;
    }
  });
function toggleVendedoresChart() {
  const _0x4aeea5 = _0x31f0de;
  if (window[_0x4aeea5(0x244)]) {
    const _0x42e1ef =
      window[_0x4aeea5(0x244)][_0x4aeea5(0x283)][_0x4aeea5(0x27d)][
        _0x4aeea5(0x24d)
      ];
    (_0x42e1ef[_0x4aeea5(0x243)] = !_0x42e1ef[_0x4aeea5(0x243)]),
      window[_0x4aeea5(0x244)]["update"]();
  }
}
function fullscreenChart(_0x493650) {
  const _0x2fa015 = _0x31f0de,
    _0x4cd24e = document[_0x2fa015(0x22b)]("#" + _0x493650)[_0x2fa015(0x2aa)](
      ".card"
    );
  _0x4cd24e &&
    (_0x4cd24e[_0x2fa015(0x1f4)][_0x2fa015(0x1e3)](_0x2fa015(0x1e9))
      ? (_0x4cd24e["classList"][_0x2fa015(0x230)](_0x2fa015(0x1e9)),
        (document["body"][_0x2fa015(0x201)][_0x2fa015(0x200)] = "auto"),
        window[_0x2fa015(0x244)] &&
          window[_0x2fa015(0x244)][_0x2fa015(0x27e)]())
      : (_0x4cd24e[_0x2fa015(0x1f4)]["add"]("chart-fullscreen"),
        (document[_0x2fa015(0x225)][_0x2fa015(0x201)][_0x2fa015(0x200)] =
          _0x2fa015(0x254)),
        setTimeout(() => {
          const _0x5a2f94 = _0x2fa015;
          window[_0x5a2f94(0x244)] &&
            window[_0x5a2f94(0x244)][_0x5a2f94(0x27e)]();
        }, 0x64)));
}
function filterVendedorChart() {
  const _0x1fa31c = _0x31f0de;
  if (!window["chartVentasDiarias"] || !window["ventasDiariasData"]) return;
  const _0xb94c90 = document[_0x1fa31c(0x1d0)](_0x1fa31c(0x256))["value"],
    {
      diasDelMes: _0x40ec79,
      ventasPorDia: _0x21d43a,
      topVendedores: _0x511008,
      coloresLineas: _0x33e2b8,
    } = window["ventasDiariasData"];
  let _0x46fb3c;
  if (_0xb94c90 === "")
    _0x46fb3c = _0x511008[_0x1fa31c(0x1e4)]((_0x1aa324, _0x8563b6) => {
      const _0x483599 = _0x1fa31c,
        _0x40baa4 = _0x40ec79["map"]((_0xdd685) => {
          return _0x21d43a[_0xdd685] && _0x21d43a[_0xdd685][_0x1aa324]
            ? _0x21d43a[_0xdd685][_0x1aa324]
            : 0x0;
        });
      return {
        label:
          _0x1aa324[_0x483599(0x25c)] > 0xf
            ? _0x1aa324["substring"](0x0, 0xf) + _0x483599(0x23a)
            : _0x1aa324,
        data: _0x40baa4,
        borderColor: _0x33e2b8[_0x8563b6 % _0x33e2b8[_0x483599(0x25c)]],
        backgroundColor:
          _0x33e2b8[_0x8563b6 % _0x33e2b8[_0x483599(0x25c)]] + "20",
        borderWidth: 0x3,
        fill: ![],
        tension: 0.3,
        pointRadius: 0x5,
        pointHoverRadius: 0x8,
        pointBackgroundColor:
          _0x33e2b8[_0x8563b6 % _0x33e2b8[_0x483599(0x25c)]],
        pointBorderColor: _0x483599(0x235),
        pointBorderWidth: 0x2,
      };
    });
  else {
    const _0x359123 = _0x511008["indexOf"](_0xb94c90),
      _0x132966 = _0x40ec79[_0x1fa31c(0x1e4)]((_0x50eb0b) => {
        return _0x21d43a[_0x50eb0b] && _0x21d43a[_0x50eb0b][_0xb94c90]
          ? _0x21d43a[_0x50eb0b][_0xb94c90]
          : 0x0;
      });
    _0x46fb3c = [
      {
        label: _0xb94c90,
        data: _0x132966,
        borderColor: _0x33e2b8[_0x359123 % _0x33e2b8["length"]],
        backgroundColor:
          _0x33e2b8[_0x359123 % _0x33e2b8[_0x1fa31c(0x25c)]] + "20",
        borderWidth: 0x4,
        fill: !![],
        tension: 0.3,
        pointRadius: 0x6,
        pointHoverRadius: 0xa,
        pointBackgroundColor:
          _0x33e2b8[_0x359123 % _0x33e2b8[_0x1fa31c(0x25c)]],
        pointBorderColor: _0x1fa31c(0x235),
        pointBorderWidth: 0x3,
      },
    ];
  }
  (window[_0x1fa31c(0x244)][_0x1fa31c(0x1d6)]["datasets"] = _0x46fb3c),
    window[_0x1fa31c(0x244)]["update"]();
}
function filterPeriodoChart() {
  const _0x1c77c4 = _0x31f0de;
  if (!window["chartVentasDiarias"] || !window[_0x1c77c4(0x297)]) return;
  const _0x1931ca = document[_0x1c77c4(0x1d0)](_0x1c77c4(0x292))[
      _0x1c77c4(0x2ac)
    ],
    {
      diasDelMes: _0x493eae,
      ventasPorDia: _0x12512b,
      topVendedores: _0xa863f8,
      coloresLineas: _0x3f2937,
    } = window["ventasDiariasData"];
  let _0x583019,
    _0x240a14 = _0x1c77c4(0x281);
  switch (_0x1931ca) {
    case _0x1c77c4(0x25e):
      (_0x583019 = _0x493eae[_0x1c77c4(0x285)](
        (_0x5e3042) => _0x5e3042 >= 0x1 && _0x5e3042 <= 0x7
      )),
        (_0x240a14 = _0x1c77c4(0x237));
      break;
    case _0x1c77c4(0x27c):
      (_0x583019 = _0x493eae[_0x1c77c4(0x285)](
        (_0x329c31) => _0x329c31 >= 0x8 && _0x329c31 <= 0xf
      )),
        (_0x240a14 = _0x1c77c4(0x28b));
      break;
    case _0x1c77c4(0x25b):
      (_0x583019 = _0x493eae[_0x1c77c4(0x285)](
        (_0x277fdd) => _0x277fdd >= 0x10 && _0x277fdd <= 0x17
      )),
        (_0x240a14 = "S3-");
      break;
    case "week4":
      (_0x583019 = _0x493eae[_0x1c77c4(0x285)](
        (_0x3198a0) => _0x3198a0 >= 0x18 && _0x3198a0 <= 0x1f
      )),
        (_0x240a14 = _0x1c77c4(0x240));
      break;
    default:
      (_0x583019 = _0x493eae), (_0x240a14 = "");
  }
  window["chartVentasDiarias"][_0x1c77c4(0x1d6)][_0x1c77c4(0x1c7)] = _0x583019[
    _0x1c77c4(0x1e4)
  ]((_0x1bba29) => "" + _0x240a14 + _0x1bba29);
  const _0x394769 =
      document[_0x1c77c4(0x1d0)]("vendedorFilter")[_0x1c77c4(0x2ac)],
    _0x5ccb5d = _0x394769 === "" ? _0xa863f8 : [_0x394769],
    _0xa452dc = _0x5ccb5d["map"]((_0x5977ea, _0x1c262f) => {
      const _0x5e8836 = _0x1c77c4,
        _0x33edcd = _0x583019[_0x5e8836(0x1e4)]((_0x1cee88) => {
          return _0x12512b[_0x1cee88] && _0x12512b[_0x1cee88][_0x5977ea]
            ? _0x12512b[_0x1cee88][_0x5977ea]
            : 0x0;
        }),
        _0x4a4f43 = _0xa863f8[_0x5e8836(0x1ea)](_0x5977ea);
      return {
        label:
          _0x5977ea["length"] > 0xf
            ? _0x5977ea[_0x5e8836(0x215)](0x0, 0xf) + "..."
            : _0x5977ea,
        data: _0x33edcd,
        borderColor: _0x3f2937[_0x4a4f43 % _0x3f2937["length"]],
        backgroundColor:
          _0x3f2937[_0x4a4f43 % _0x3f2937[_0x5e8836(0x25c)]] + "20",
        borderWidth: _0x394769 === "" ? 0x3 : 0x4,
        fill: _0x394769 !== "",
        tension: 0.3,
        pointRadius: _0x394769 === "" ? 0x5 : 0x6,
        pointHoverRadius: _0x394769 === "" ? 0x8 : 0xa,
        pointBackgroundColor:
          _0x3f2937[_0x4a4f43 % _0x3f2937[_0x5e8836(0x25c)]],
        pointBorderColor: _0x5e8836(0x235),
        pointBorderWidth: _0x394769 === "" ? 0x2 : 0x3,
      };
    });
  (window[_0x1c77c4(0x244)]["data"][_0x1c77c4(0x221)] = _0xa452dc),
    window[_0x1c77c4(0x244)][_0x1c77c4(0x28e)]();
}
function _0x244b() {
  const _0x2268f7 = [
    "top",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><span\x20class=\x22badge\x20",
    "getElementById",
    "#ffc107",
    "Importe",
    "💵\x20Crédito",
    "nearest",
    "bg-light\x20text-dark",
    "data",
    "set",
    "toLocaleDateString",
    "📊\x20Resumen\x20métodos\x20de\x20pago\x20calculado:",
    "btnReporteSpinner",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><code>",
    "includes",
    "add",
    "24bjWQNB",
    "Tarjeta\x20Débito",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Tickets</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20",
    "graficoMetodosPago",
    "chartVendedores",
    "contains",
    "map",
    "getFullYear",
    "parsed",
    "reporte-contenido",
    "message",
    "chart-fullscreen",
    "indexOf",
    "graficoVentasDiarias",
    "innerHTML",
    "log",
    "has",
    "innerWidth",
    "btnReporteTexto",
    "ticket",
    "#dc3545",
    "\x22\x20style=\x22min-width:\x20120px;\x20font-size:\x200.75rem;\x20text-align:\x20center;\x22>",
    "classList",
    "reduce",
    "getMonth",
    ")</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20",
    "🔄\x20Combinado",
    "#212529",
    "-30",
    "toFixed",
    "tickets",
    "https://reporte-ventas-b9.vercel.app/api/ventas?mes=",
    "totalVentas",
    "insertAdjacentHTML",
    "overflow",
    "style",
    "get",
    "createElement",
    "#20c997",
    "ultimosTickets",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error:</strong>\x20",
    "Combinado",
    "Cliente",
    "trim",
    "bg-info",
    "💳\x20Tarjeta\x20Débito",
    "7935684URhiqc",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-success\x20mb-0\x22>$",
    "Ticket",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$",
    "reporteVentasModal",
    "report",
    "mixed",
    "FILTRADO",
    "cantidad",
    "substring",
    "\x20tickets</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x20mb-2\x22\x20style=\x22height:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-success\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x20",
    "todos",
    "toLowerCase",
    "destroy",
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "📋\x20Cheque",
    "%\x20del\x20total\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20w-100\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22mostrarDetalleVendedor(\x27",
    "padStart",
    "banco",
    "Generando...",
    "\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>",
    "datasets",
    "8limnhd",
    "error",
    "90VpQHwe",
    "body",
    "ordenarPor",
    "Crédito",
    "textContent",
    "ultimosVendedores",
    "localeCompare",
    "querySelector",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "bg-gradient",
    "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Controles\x20de\x20ordenamiento\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-label\x20small\x22>Ordenar\x20por:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22ordenarPor\x22\x20class=\x22form-select\x20form-select-sm\x22\x20onchange=\x22reordenarTickets()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fecha-desc\x22>Fecha\x20(Más\x20reciente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fecha-asc\x22>Fecha\x20(Más\x20antigua)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22importe-desc\x22>Importe\x20(Mayor\x20a\x20menor)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22importe-asc\x22>Importe\x20(Menor\x20a\x20mayor)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ticket-desc\x22>Ticket\x20(Descendente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ticket-asc\x22>Ticket\x20(Ascendente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cliente-asc\x22>Cliente\x20(A-Z)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cliente-desc\x22>Cliente\x20(Z-A)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-label\x20small\x22>Filtrar\x20por\x20método:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22filtrarMetodo\x22\x20class=\x22form-select\x20form-select-sm\x22\x20onchange=\x22reordenarTickets()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22todos\x22>Todos\x20los\x20métodos</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cash\x22>💰\x20Efectivo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit_card\x22>💳\x20Tarjeta\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22debit_card\x22>💳\x20Tarjeta\x20Débito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22transfer\x22>🏦\x20Transferencia</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit_note_application\x22>📄\x20Nota\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22check\x22>📋\x20Cheque</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit\x22>💵\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22combinado\x22>🔄\x20Combinado</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ticket</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Cliente</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Importe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Fecha</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Método</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Banco</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22tickets-tbody\x22>\x0a\x20\x20",
    "cantidadTickets",
    "remove",
    "Error\x20al\x20generar\x20reporte:",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Ver\x20Detalle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "split",
    "statusText",
    "#fff",
    "bg-warning",
    "S1-",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Ventas</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-primary\x20mb-0\x22>",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>💳\x20Métodos\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "...",
    "Ventas",
    "rgba(0,0,0,0.9)",
    "nombre",
    "2-digit",
    "credit_note_application",
    "S4-",
    "Modal",
    "label",
    "display",
    "chartVentasDiarias",
    "Sin\x20vendedor",
    "\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20Sección\x20de\x20Gráficos\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-6\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-info\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Distribución\x20por\x20Método\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoMetodosPago\x22\x20width=\x22400\x22\x20height=\x22300\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-6\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-warning\x20text-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Top\x2010\x20Vendedores</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoVendedores\x22\x20width=\x22400\x22\x20height=\x22300\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📈\x20Ventas\x20Diarias\x20por\x20Vendedor</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-outline-light\x22\x20onclick=\x22toggleVendedoresChart()\x22\x20id=\x22btnToggleVendedores\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Mostrar/Ocultar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-outline-light\x20d-lg-none\x22\x20onclick=\x22fullscreenChart(\x27graficoVentasDiarias\x27)\x22\x20id=\x22btnFullscreen\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-arrows-fullscreen\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x20p-md-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chart-container\x22\x20style=\x22position:\x20relative;\x20height:\x20300px;\x20min-height:\x20250px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoVentasDiarias\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Controles\x20para\x20móvil\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-lg-none\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x20form-select-sm\x22\x20id=\x22vendedorFilter\x22\x20onchange=\x22filterVendedorChart()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22\x22>Top\x205\x20vendedores</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x20form-select-sm\x22\x20id=\x22periodoFilter\x22\x20onchange=\x22filterPeriodoChart()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22all\x22>Todo\x20el\x20mes</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week1\x22>Semana\x201\x20(1-7)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week2\x22>Semana\x202\x20(8-15)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week3\x22>Semana\x203\x20(16-23)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week4\x22>Semana\x204\x20(24-31)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-secondary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-secondary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Vendedores\x20(",
    "appendChild",
    "Ventas\x20($)",
    "keys",
    "10LfPcvT",
    "6648807Lhbkhb",
    "#e9ecef",
    "legend",
    "doughnut",
    ":\x20$",
    "card",
    "\x20tickets)</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-sm-6\x20col-lg-4\x20col-xl-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20shadow-sm\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "index",
    "hidden",
    "fecha-asc",
    "vendedorFilter",
    "json",
    "or_fecha",
    "104795ckxBCc",
    "Cheque",
    "week3",
    "length",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "week1",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Vendedores</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-info\x20mb-0\x22>",
    "d-none",
    "generarReporteVentas",
    "mesReporte",
    "#6c757d",
    "mpo_importe",
    "TOTAL",
    "🏦\x20Transferencia",
    "bg-success",
    "mostrarDetalleVendedor",
    "\x27,\x20",
    "</th>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20",
    "es-MX",
    "%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "DOMContentLoaded",
    "addEventListener",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>(",
    "cliente-desc",
    "round",
    "#fd7e14",
    "toString",
    "detalleVendedorModal",
    "\x20tickets",
    "ticket-asc",
    "#dee2e6",
    "#6f42c1",
    "check",
    "chartMetodosPago",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x22>$",
    "week2",
    "plugins",
    "resize",
    "timezone",
    "hidden.bs.modal",
    "Día\x20",
    "filtrarMetodo",
    "options",
    "credit",
    "filter",
    "🔍\x20Total\x20de\x20tickets:",
    "Metodo_pago",
    "bottom",
    "Días\x20del\x20Mes",
    "debit_card",
    "S2-",
    "126007tOwojC",
    "2830VpjrAK",
    "update",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x223\x22>",
    "Error\x20HTTP:\x20",
    "bg-dark",
    "periodoFilter",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-4\x20col-lg-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22>$",
    "⚠️\x20Método\x20combinado\x20no\x20reconocido:\x20\x22",
    "🔄\x20Procesando\x20método\x20combinado:\x20",
    "Tarjeta\x20Crédito",
    "ventasDiariasData",
    "sort",
    "reordenarTickets",
    "📄\x20Nota\x20Crédito",
    "\x20de\x20",
    "201221FNJKVI",
    "graficoVendedores",
    "15507rYuXWR",
    "543231gtyPVJ",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "bg-primary",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Resumen\x20del\x20Mes:\x20",
    "total",
    "combinado",
    "💳\x20Tarjeta\x20Crédito",
    "SUCCESS",
    "fecha-desc",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22detalleVendedorModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>📋\x20Detalle:\x20",
    "closest",
    "mostrarModalReporteVentas",
    "value",
    "show",
    "credit_card",
    "join",
    "💰\x20Efectivo",
    "push",
    "slice",
    "clase",
    "#0dcaf0",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small>",
    "transfer",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20",
    "mpo_banco",
    "toLocaleString",
    "13jAZIyQ",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22mt-2\x22>Sin\x20datos</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20encontraron\x20ventas\x20para\x20el\x20mes\x20seleccionado.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "labels",
    "<option\x20value=\x22\x22>Top\x205\x20vendedores</option>",
    "cliente-asc",
    "#0d6efd",
    "option",
    "forEach",
    "rgba(13,\x20110,\x20253,\x200.8)",
  ];
  _0x244b = function () {
    return _0x2268f7;
  };
  return _0x244b();
}
