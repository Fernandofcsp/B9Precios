const _0x581315 = _0x4a11;
(function (_0x1ee2d2, _0x413e51) {
  const _0xb3cb2a = _0x4a11,
    _0x125b9b = _0x1ee2d2();
  while (!![]) {
    try {
      const _0x528baf =
        (-parseInt(_0xb3cb2a(0x299)) / 0x1) *
          (parseInt(_0xb3cb2a(0x282)) / 0x2) +
        (-parseInt(_0xb3cb2a(0x29c)) / 0x3) *
          (-parseInt(_0xb3cb2a(0x15b)) / 0x4) +
        (parseInt(_0xb3cb2a(0x187)) / 0x5) *
          (parseInt(_0xb3cb2a(0x1d9)) / 0x6) +
        (parseInt(_0xb3cb2a(0x190)) / 0x7) *
          (parseInt(_0xb3cb2a(0x1fa)) / 0x8) +
        -parseInt(_0xb3cb2a(0x2ba)) / 0x9 +
        (parseInt(_0xb3cb2a(0x1c6)) / 0xa) *
          (parseInt(_0xb3cb2a(0x1e5)) / 0xb) +
        parseInt(_0xb3cb2a(0x1c7)) / 0xc;
      if (_0x528baf === _0x413e51) break;
      else _0x125b9b["push"](_0x125b9b["shift"]());
    } catch (_0x3d109a) {
      _0x125b9b["push"](_0x125b9b["shift"]());
    }
  }
})(_0x6f6a, 0x73542);
let valoresDesbloqueados = ![];
const PASSWORD_CORRECTA = "Back9_gdl9123";
function censurarValor(_0x3feeec) {
  const _0x2ee357 = _0x4a11;
  if (valoresDesbloqueados)
    return _0x3feeec["toLocaleString"](_0x2ee357(0x1b6), {
      minimumFractionDigits: 0x2,
    });
  return _0x2ee357(0x29f);
}
function mostrarModalPassword() {
  const _0x6b77dd = _0x4a11,
    _0x4fe576 = document[_0x6b77dd(0x222)](_0x6b77dd(0x2b1));
  if (!_0x4fe576) {
    alert(
      "Error:\x20Modal\x20de\x20contraseña\x20no\x20encontrado.\x20Genera\x20un\x20reporte\x20primero."
    );
    return;
  }
  const _0x51271a = document["getElementById"](_0x6b77dd(0x188)),
    _0x471979 = document["getElementById"](_0x6b77dd(0x2ab));
  _0x51271a && (_0x51271a[_0x6b77dd(0x164)] = "");
  _0x471979 && (_0x471979[_0x6b77dd(0x248)][_0x6b77dd(0x1b9)] = "none");
  const _0x3883a3 = new bootstrap[_0x6b77dd(0x155)](_0x4fe576);
  _0x3883a3["show"](),
    setTimeout(() => {
      const _0x236170 = _0x6b77dd;
      _0x51271a && _0x51271a[_0x236170(0x2b9)]();
    }, 0x1f4);
}
function verificarPassword() {
  const _0xb06674 = _0x4a11,
    _0x194d3e = document[_0xb06674(0x222)](_0xb06674(0x188)),
    _0x10bbdb = document[_0xb06674(0x222)](_0xb06674(0x2ab));
  if (_0x194d3e[_0xb06674(0x164)] === PASSWORD_CORRECTA) {
    valoresDesbloqueados = !![];
    const _0x41e1f1 = bootstrap[_0xb06674(0x155)][_0xb06674(0x1e2)](
      document["getElementById"]("modalPassword")
    );
    _0x41e1f1 && _0x41e1f1[_0xb06674(0x23c)](),
      actualizarValoresMostrados(),
      actualizarBotonToggle();
  } else
    _0x10bbdb[_0xb06674(0x2a3)]["remove"](_0xb06674(0x27a)),
      (_0x194d3e[_0xb06674(0x164)] = ""),
      _0x194d3e["focus"]();
}
function actualizarValoresMostrados() {
  const _0x2489be = _0x4a11,
    _0x5840c4 = document[_0x2489be(0x222)](_0x2489be(0x1a8));
  if (_0x5840c4 && _0x5840c4[_0x2489be(0x27e)][_0x2489be(0x174)]() !== "") {
    const _0xf976d0 = document[_0x2489be(0x222)](_0x2489be(0x260));
    _0xf976d0 && _0xf976d0["value"] && generarReporteVentas();
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
function _0x6f6a() {
  const _0x32270a = [
    "💰\x20Efectivo",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tfoot\x20id=\x22tickets-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>TOTAL</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "\x22\x20style=\x22min-width:\x20120px;\x20font-size:\x200.75rem;\x20text-align:\x20center;\x22>",
    "bar",
    "bg-danger",
    "https://ticket-b9.vercel.app/api/ticket?ticketId=",
    "week4",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>(",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20colspan=\x221\x22>",
    "3307310GaTeXa",
    "793272WMJBuX",
    "197673777718",
    "status",
    "label",
    "🔄\x20Combinado",
    "bg-dark",
    "💳\x20Tarjeta\x20Débito",
    "getDate",
    "generarReporteVentas",
    "\x20tickets</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress\x20mb-2\x22\x20style=\x22height:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x20bg-success\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x20",
    "show",
    "details",
    "className",
    "Desbloquear\x20valores\x20monetarios",
    "parsed",
    "indexOf",
    "🏦\x20Transferencia",
    "toLocaleString",
    "47382ISDcfk",
    "#6f42c1",
    "Enter",
    "importe-desc",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-success\x22>💰\x20Información\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Subtotal:</strong>\x20<span\x20class=\x22text-info\x22>$",
    "completed",
    "tickets-footer",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "mpo_importe",
    "getInstance",
    "innerWidth",
    "nearest",
    "11jwehhs",
    "has",
    "padStart",
    "total",
    "cliente",
    "nombre",
    "or_fecha",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-success\x22>$",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Ver\x20Detalle\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "dataset",
    "Ventas\x20($)",
    "or_metodoPago",
    "https://ticket-b9.vercel.app/api/proxy?ticketId=",
    "ventasDiariasData",
    "💳\x20Tarjeta\x20Crédito",
    "\x27)\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Ver\x20ticket\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20",
    "ordenarPor",
    "auto",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20text-success\x20fw-bold\x20d-none\x20d-md-table-cell\x22>$",
    "mpo_banco",
    "or_observaciones",
    "1992FiGZLQ",
    "Tarjeta\x20Débito",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "resize",
    "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-block\x20fw-bold\x22>",
    "or_idordenExt",
    "od_total",
    "#0d6efd",
    "addEventListener",
    "</th>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20",
    "Ventas",
    "or_estatus",
    "getFullYear",
    "Error\x20al\x20cargar\x20el\x20ticket\x20",
    "or_paymentMethod",
    "chartMetodosPago",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Tickets</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x20mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>SKU:\x20",
    "#fff",
    "nombreVendedor",
    "ord_impSubtotal",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x20col-sm-6\x20col-lg-4\x20col-xl-3\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-0\x20shadow-sm\x20h-100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20text-truncate\x22\x20title=\x22",
    "Ticket",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Vendedor:</strong>\x20",
    "S2-",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "ultimosVendedores",
    "substring",
    "hidden.bs.modal",
    "Día\x20",
    "forEach",
    "Sin\x20vendedor",
    "or_rfc",
    "filtrarMetodo",
    "Importe",
    "\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20Sección\x20de\x20Gráficos\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-6\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-info\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Distribución\x20por\x20Método\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoMetodosPago\x22\x20width=\x22400\x22\x20height=\x22300\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-6\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-warning\x20text-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Top\x2010\x20Vendedores</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoVendedores\x22\x20width=\x22400\x22\x20height=\x22300\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📈\x20Ventas\x20Diarias\x20por\x20Vendedor</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20gap-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-outline-light\x22\x20onclick=\x22toggleVendedoresChart()\x22\x20id=\x22btnToggleVendedores\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Mostrar/Ocultar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-sm\x20btn-outline-light\x20d-lg-none\x22\x20onclick=\x22fullscreenChart(\x27graficoVentasDiarias\x27)\x22\x20id=\x22btnFullscreen\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-arrows-fullscreen\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x20p-md-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chart-container\x22\x20style=\x22position:\x20relative;\x20height:\x20300px;\x20min-height:\x20250px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22graficoVentasDiarias\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Controles\x20para\x20móvil\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-lg-none\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x20form-select-sm\x22\x20id=\x22vendedorFilter\x22\x20onchange=\x22filterVendedorChart()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22\x22>Top\x205\x20vendedores</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x20form-select-sm\x22\x20id=\x22periodoFilter\x22\x20onchange=\x22filterPeriodoChart()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22all\x22>Todo\x20el\x20mes</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week1\x22>Semana\x201\x20(1-7)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week2\x22>Semana\x202\x20(8-15)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week3\x22>Semana\x203\x20(16-23)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22week4\x22>Semana\x204\x20(24-31)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-secondary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-secondary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>👥\x20Vendedores\x20(",
    "transfer",
    "or_total",
    "<div\x20class=\x22alert\x20alert-info\x22><i\x20class=\x22bi\x20bi-info-circle\x22></i>\x20No\x20hay\x20información\x20de\x20productos\x20disponible.</div>",
    "getElementById",
    "cantidad",
    "<option\x20value=\x22\x22>Top\x205\x20vendedores</option>",
    "remove",
    "credit",
    "or_status",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22><strong>Total:</strong></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20fw-bold\x22>$",
    "bg-info",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20Modal\x20para\x20contraseña\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22modalPassword\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22modalPasswordLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22modalPasswordLabel\x22>🔒\x20Acceso\x20Restringido</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-3\x22>Ingresa\x20la\x20contraseña\x20para\x20ver\x20los\x20valores\x20monetarios:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22input-group-text\x22><i\x20class=\x22bi\x20bi-key\x22></i></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22password\x22\x20class=\x22form-control\x22\x20id=\x22passwordInput\x22\x20placeholder=\x22Contraseña\x22\x20maxlength=\x2220\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22passwordError\x22\x20class=\x22text-danger\x20mt-2\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small><i\x20class=\x22bi\x20bi-exclamation-circle\x22></i>\x20Contraseña\x20incorrecta</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cancelar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-primary\x22\x20onclick=\x22verificarPassword()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Desbloquear\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "toLowerCase",
    "slice",
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tfoot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "PLAYERA\x20PUMA\x20CABALLERO\x20630299\x2001\x20TALLA\x20XL\x20AZUL\x20MARINO/VERDE",
    "totalVentas",
    "📄\x20Nota\x20Crédito",
    "<br>",
    "toLocaleDateString",
    "tickets",
    "DOMContentLoaded",
    "\x20/\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-success\x20fw-bold\x22>$",
    "btnReporteSpinner",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Estado:</strong>\x20<span\x20class=\x22badge\x20bg-",
    "textContent",
    "https://reporte-ventas-b9.vercel.app/api/ventas?mes=",
    "...",
    "hide",
    "ultimosTickets",
    "\x20de\x20",
    "fecha-desc",
    ")\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22btn-vendedor-",
    "title",
    "N/A",
    "vendedorNombre",
    "#dc3545",
    "payments",
    "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22\x20style=\x22max-height:\x2070vh;\x20overflow-y:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Controles\x20de\x20ordenamiento\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-label\x20small\x22>Ordenar\x20por:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22ordenarPor\x22\x20class=\x22form-select\x20form-select-sm\x22\x20onchange=\x22reordenarTickets()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fecha-desc\x22>Fecha\x20(Más\x20reciente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fecha-asc\x22>Fecha\x20(Más\x20antigua)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22importe-desc\x22>Importe\x20(Mayor\x20a\x20menor)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22importe-asc\x22>Importe\x20(Menor\x20a\x20mayor)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ticket-desc\x22>Ticket\x20(Descendente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ticket-asc\x22>Ticket\x20(Ascendente)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cliente-asc\x22>Cliente\x20(A-Z)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cliente-desc\x22>Cliente\x20(Z-A)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22form-label\x20small\x22>Filtrar\x20por\x20método:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22filtrarMetodo\x22\x20class=\x22form-select\x20form-select-sm\x22\x20onchange=\x22reordenarTickets()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22todos\x22>Todos\x20los\x20métodos</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22cash\x22>💰\x20Efectivo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit_card\x22>💳\x20Tarjeta\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22debit_card\x22>💳\x20Tarjeta\x20Débito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22transfer\x22>🏦\x20Transferencia</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit_note_application\x22>📄\x20Nota\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22check\x22>📋\x20Cheque</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22credit\x22>💵\x20Crédito</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22combinado\x22>🔄\x20Combinado</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ticket</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Cliente</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Importe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22>Fecha</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Método</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22>Banco</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Acciones</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22tickets-tbody\x22>\x0a\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22\x20style=\x22font-size:\x202rem;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22mt-2\x22>Sin\x20datos</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20se\x20encontraron\x20ventas\x20para\x20el\x20mes\x20seleccionado.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "style",
    "reordenarTickets",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><code>",
    "cte_rfc",
    "Nota\x20Crédito",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Fecha:</strong>\x20",
    "toFixed",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-success\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>💳\x20Métodos\x20de\x20Pago</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Datos\x20de\x20ejemplo\x20-\x20La\x20API\x20proxy\x20no\x20está\x20disponible",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-success\x20fw-bold\x22>$",
    "success",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Descuento:</strong>\x20<span\x20class=\x22text-warning\x22>$",
    ".\x0a\x0aPara\x20datos\x20reales,\x20verifica\x20que\x20la\x20API\x20proxy\x20esté\x20desplegada\x20correctamente\x20en:\x0a",
    "sort",
    "or_subtotal",
    "set",
    "od_producto",
    "length",
    "createElement",
    "getMonth",
    "S4-",
    "beforeend",
    "ticketDetalleModal",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-muted\x22>Observaciones</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22mb-2\x22>",
    "mesReporte",
    "Tarjeta\x20Crédito",
    "mixed",
    "cerrarModalReporteVentas",
    "bg-secondary",
    "ord_total",
    "#e9ecef",
    "chart-fullscreen",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-center\x20fw-bold\x20align-middle\x22>",
    "cantidadTickets",
    "update",
    "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-info-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Cheque",
    "check",
    "statusText",
    "od_cantidad",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Información\x20adicional\x20del\x20ticket\x20para\x20móviles\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>Subtotal</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>$",
    "week3",
    "rgba(13,\x20110,\x20253,\x201)",
    "cash",
    ")</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20",
    "map",
    "#ffc107",
    "devicePixelRatio",
    "#dee2e6",
    "d-none",
    "S1-",
    "📋\x20Cheque",
    "clase",
    "innerHTML",
    "2-digit",
    "od_precio",
    "join",
    "20628pPeqAN",
    "reporteVentasModal",
    "values",
    "closest",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small>",
    "from",
    "...\x20$",
    "cliente-asc",
    "\x20artículos)</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-striped\x20table-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead\x20class=\x22table-dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20style=\x22min-width:\x2080px;\x22>SKU</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22min-width:\x20200px;\x22>Descripción</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-center\x22\x20style=\x22min-width:\x2080px;\x22>Cantidad</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-end\x20d-none\x20d-md-table-cell\x22\x20style=\x22min-width:\x20100px;\x22>Precio\x20unitario</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-end\x20d-none\x20d-lg-table-cell\x22\x20style=\x22min-width:\x20100px;\x22>Impuesto</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22text-end\x20d-none\x20d-md-table-cell\x22\x20style=\x22min-width:\x20100px;\x22>Total</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Generar\x20Reporte",
    "message",
    "Error\x20HTTP:\x20",
    "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Total\x20Final:</strong>\x20<span\x20class=\x22text-success\x20fw-bold\x20fs-5\x22>$",
    "Generando...",
    "#20c997",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Transferencia",
    "or_totalImp",
    "\x0a\x0aVerifica\x20que\x20la\x20API\x20esté\x20funcionando\x20correctamente.",
    "credit_card",
    "https://ticket-b9.vercel.app/api?ticketId=",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Moneda:</strong>\x20",
    "banco",
    "8fRaUqj",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-info\x20btn-sm\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22verTicket(\x27",
    "detalles",
    "1083wnoacK",
    "btn\x20btn-warning\x20btn-sm",
    "contains",
    "●●●●●",
    "</small>",
    "\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22table-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-md-table-cell\x22><small>",
    "classList",
    "round",
    "or_folio",
    "❓\x20Otro",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-4\x20col-md-5\x20d-none\x20d-md-block\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22table-responsive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table\x20table-sm\x20table-borderless\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22><strong>Subtotal:</strong></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22>$",
    "localeCompare",
    "\x20tickets)</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22small\x20text-muted\x22>",
    "passwordError",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-info\x22>🛍️\x20Productos\x20(",
    "keys",
    "\x20-\x20",
    "reduce",
    "ord_descripcion",
    "modalPassword",
    "FILTRADO",
    "labels",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20d-none\x20d-lg-table-cell\x22>$",
    "💵\x20Crédito",
    "graficoVendedores",
    "%\x20del\x20total\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-outline-primary\x20btn-sm\x20w-100\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20onclick=\x22mostrarDetalleVendedor(\x27",
    "#6c757d",
    "focus",
    "7771392LfZMCB",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22text-primary\x22>📋\x20Información\x20General</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Ticket:</strong>\x20<code>",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "credit_note",
    "bg-primary",
    "Combinado",
    "Modal",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>RFC:</strong>\x20",
    "graficoMetodosPago",
    "<small\x20class=\x22text-muted\x20d-block\x20mt-1\x22>Impuesto:\x20$",
    "-30",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Cliente:</strong>\x20",
    "6812jrPqPY",
    "cte_Nombre",
    "ord_idProducto",
    "filter",
    "todos",
    "#0dcaf0",
    ":\x20$",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "</code>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-md-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>",
    "value",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20No\x20se\x20encontraron\x20datos\x20para\x20el\x20ticket\x20",
    "#198754",
    "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><small\x20class=\x22text-muted\x22>",
    "datasets",
    "destroy",
    "vendedorFilter",
    "Efectivo",
    "Metodo_pago",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-danger\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong>Error:</strong>\x20",
    "add",
    "PUBLICO\x20EN\x20GENERAL",
    "...\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "get",
    "note",
    "mostrarDetalleVendedor",
    "trim",
    "<i\x20class=\x22bi\x20bi-eye-slash\x22></i>\x20Ver\x20Valores",
    "chartVentasDiarias",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Referencia:</strong>\x20",
    "2025-10-05\x2012:00:06",
    "#666",
    "or_id",
    "card",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22toast\x20show\x22\x20role=\x22alert\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toast-body\x20bg-info\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-arrow-clockwise\x22></i>\x20Cargando\x20ticket\x20",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "div",
    "\x20tickets</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22\x20colspan=\x223\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-md-none\x22>",
    "ord_precio_unitario",
    "</code></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>",
    "overflow",
    "Días\x20del\x20Mes",
    "ticket",
    "Cliente",
    "data",
    "235XAmxxE",
    "passwordInput",
    "split",
    "ticket-desc",
    "ord_baseImpuesto",
    "querySelector",
    "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><span\x20class=\x22badge\x20",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20mb-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20border-primary\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x20bg-primary\x20text-white\x20d-flex\x20justify-content-between\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22mb-0\x22>📊\x20Resumen\x20del\x20Mes:\x20",
    "detalleVendedorModal",
    "1001EXFwwI",
    "appendChild",
    "tickets-tbody",
    "json",
    "insertAdjacentHTML",
    "includes",
    "push",
    "report",
    "bottom",
    "cliente-desc",
    "od_descripcion",
    "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btnToggleValores\x22\x20class=\x22btn\x20btn-outline-light\x20btn-sm\x22\x20onclick=\x22toggleValores()\x22\x20title=\x22Desbloquear\x20valores\x20monetarios\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye-slash\x22></i>\x20Ver\x20Valores\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-success\x20mb-0\x22>$",
    "fecha-asc",
    "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-md-table-cell\x22\x20colspan=\x221\x22>",
    "or_impuestos",
    "key",
    "keypress",
    "\x20tickets",
    "or_totalFinal",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "bg-light\x20text-dark",
    "#212529",
    "</code></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Serie/Folio:</strong>\x20",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x20d-none\x20d-md-table-cell\x22>$",
    "reporte-contenido",
    "Datos\x20de\x20ejemplo\x20-\x20API\x20no\x20disponible",
    "No\x20se\x20encontraron\x20datos\x20del\x20vendedor",
    "plugins",
    "or_nombreVendedor",
    "line",
    "SUCCESS",
    "or_moneda",
    "or_idorden",
    "MXN",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22detalleVendedorModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>📋\x20Detalle:\x20",
    "hidden",
    "HSBC",
    "es-MX",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-x-circle\x22></i>\x20Cerrar\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "TOTAL",
    "display",
    "mpo_numero",
    "body",
    "doughnut",
  ];
  _0x6f6a = function () {
    return _0x32270a;
  };
  return _0x6f6a();
}
function actualizarBotonToggle() {
  const _0x1217ca = _0x4a11,
    _0x33ba43 = document[_0x1217ca(0x222)]("btnToggleValores");
  _0x33ba43 &&
    (valoresDesbloqueados
      ? ((_0x33ba43[_0x1217ca(0x27e)] =
          "<i\x20class=\x22bi\x20bi-eye\x22></i>\x20Ocultar\x20Valores"),
        (_0x33ba43[_0x1217ca(0x241)] = "Bloquear\x20valores\x20monetarios"),
        (_0x33ba43["className"] = _0x1217ca(0x29d)))
      : ((_0x33ba43[_0x1217ca(0x27e)] = _0x1217ca(0x175)),
        (_0x33ba43[_0x1217ca(0x241)] = _0x1217ca(0x1d4)),
        (_0x33ba43[_0x1217ca(0x1d3)] = "btn\x20btn-outline-light\x20btn-sm")));
}
function _0x4a11(_0x31d0a7, _0x24b2fe) {
  const _0x6f6aee = _0x6f6a();
  return (
    (_0x4a11 = function (_0x4a11e8, _0x56b089) {
      _0x4a11e8 = _0x4a11e8 - 0x151;
      let _0x4467a3 = _0x6f6aee[_0x4a11e8];
      return _0x4467a3;
    }),
    _0x4a11(_0x31d0a7, _0x24b2fe)
  );
}
function getMetodoPagoInfo(_0x4d8ac2) {
  const _0x28afb1 = _0x4a11,
    _0x1625b7 = (_0x4d8ac2 || "")[_0x28afb1(0x22b)]()["trim"]();
  if (
    _0x1625b7[_0x28afb1(0x195)](_0x28afb1(0x274)) ||
    _0x1625b7 === _0x28afb1(0x274)
  )
    return { nombre: "💰\x20Efectivo", clase: "bg-success" };
  else {
    if (
      _0x1625b7[_0x28afb1(0x195)]("credit_card") ||
      _0x1625b7 === "credit_card"
    )
      return { nombre: _0x28afb1(0x1f3), clase: _0x28afb1(0x153) };
    else {
      if (
        _0x1625b7[_0x28afb1(0x195)]("debit_card") ||
        _0x1625b7 === "debit_card"
      )
        return { nombre: _0x28afb1(0x1cd), clase: _0x28afb1(0x229) };
      else {
        if (
          _0x1625b7[_0x28afb1(0x195)]("transfer") ||
          _0x1625b7 === _0x28afb1(0x21f)
        )
          return { nombre: "🏦\x20Transferencia", clase: _0x28afb1(0x264) };
        else {
          if (
            _0x1625b7[_0x28afb1(0x195)](_0x28afb1(0x152)) ||
            _0x1625b7 === "credit_note_application"
          )
            return { nombre: _0x28afb1(0x230), clase: "bg-warning" };
          else {
            if (
              _0x1625b7[_0x28afb1(0x195)](_0x28afb1(0x26e)) ||
              _0x1625b7 === "check"
            )
              return { nombre: _0x28afb1(0x27c), clase: _0x28afb1(0x1cc) };
            else {
              if (
                _0x1625b7[_0x28afb1(0x195)](_0x28afb1(0x226)) &&
                !_0x1625b7[_0x28afb1(0x195)](_0x28afb1(0x17b))
              )
                return { nombre: "💵\x20Crédito", clase: _0x28afb1(0x1c1) };
              else
                return _0x1625b7[_0x28afb1(0x195)](",") ||
                  _0x1625b7["includes"]("\x20")
                  ? { nombre: _0x28afb1(0x1cb), clase: "bg-gradient" }
                  : { nombre: _0x28afb1(0x2a6), clase: _0x28afb1(0x1a4) };
            }
          }
        }
      }
    }
  }
}
function mostrarModalReporteVentas() {
  const _0x1d5aeb = _0x4a11,
    _0x5f1d67 = document[_0x1d5aeb(0x222)](_0x1d5aeb(0x283));
  if (_0x5f1d67) {
    const _0xb60bcb = document[_0x1d5aeb(0x222)](_0x1d5aeb(0x260));
    if (_0xb60bcb && !_0xb60bcb[_0x1d5aeb(0x164)]) {
      const _0x2f44cc = new Date(),
        _0x52d8cd = _0x2f44cc[_0x1d5aeb(0x206)](),
        _0x111403 = (_0x2f44cc[_0x1d5aeb(0x25b)]() + 0x1)
          ["toString"]()
          [_0x1d5aeb(0x1e7)](0x2, "0");
      _0xb60bcb[_0x1d5aeb(0x164)] = _0x52d8cd + "-" + _0x111403;
    }
    const _0x11018b = new bootstrap[_0x1d5aeb(0x155)](_0x5f1d67);
    _0x11018b[_0x1d5aeb(0x1d1)]();
  }
}
function cerrarModalReporteVentas() {
  const _0x322253 = _0x4a11,
    _0x3ac1ed = document[_0x322253(0x222)]("reporteVentasModal");
  if (_0x3ac1ed) {
    const _0x412b15 = bootstrap[_0x322253(0x155)][_0x322253(0x1e2)](_0x3ac1ed);
    _0x412b15 && _0x412b15[_0x322253(0x23c)]();
  }
}
async function generarReporteVentas() {
  const _0x4e6801 = _0x4a11,
    _0x1b9dfc = document["getElementById"](_0x4e6801(0x260))[_0x4e6801(0x164)],
    _0xefb23a = document[_0x4e6801(0x222)]("reporte-contenido"),
    _0x186752 = document["getElementById"]("btnReporteTexto"),
    _0x1e7d59 = document[_0x4e6801(0x222)](_0x4e6801(0x237));
  if (!_0x1b9dfc) {
    _0xefb23a[_0x4e6801(0x27e)] =
      "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20alert-warning\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-exclamation-triangle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Por\x20favor\x20selecciona\x20un\x20mes\x20para\x20generar\x20el\x20reporte.\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20";
    return;
  }
  const _0x141b13 = 0x1,
    _0x1e9aef = _0x1b9dfc + "-01",
    _0x84e6be = _0x1b9dfc + _0x4e6801(0x159);
  (_0x186752[_0x4e6801(0x239)] = _0x4e6801(0x28f)),
    _0x1e7d59[_0x4e6801(0x2a3)][_0x4e6801(0x225)]("d-none");
  try {
    const _0x178eb9 = _0x4e6801(0x23a) + _0x1b9dfc,
      _0x424c36 = await fetch(_0x178eb9);
    if (!_0x424c36["ok"])
      throw new Error(
        _0x4e6801(0x28d) +
          _0x424c36[_0x4e6801(0x1c9)] +
          "\x20" +
          _0x424c36[_0x4e6801(0x26f)]
      );
    const _0x3f1e4e = await _0x424c36[_0x4e6801(0x193)]();
    if (_0x3f1e4e[_0x4e6801(0x1c9)] !== _0x4e6801(0x1ae))
      throw new Error("Error\x20en\x20la\x20API\x20original");
    const _0x46cc4e = _0x3f1e4e[_0x4e6801(0x186)][_0x4e6801(0x197)] || [],
      _0x1e8344 = _0x3f1e4e[_0x4e6801(0x186)][_0x4e6801(0x1e8)],
      _0x4087e9 = _0x46cc4e[_0x4e6801(0x259)],
      _0x27e63e = new Map();
    _0x46cc4e[_0x4e6801(0x219)]((_0x549352) => {
      const _0x259690 = _0x4e6801,
        _0x3070ad = _0x549352[_0x259690(0x20d)] || _0x259690(0x21a),
        _0x1acef1 = parseFloat(_0x549352[_0x259690(0x21d)]) || 0x0;
      !_0x27e63e[_0x259690(0x1e6)](_0x3070ad) &&
        _0x27e63e[_0x259690(0x257)](_0x3070ad, {
          nombre: _0x3070ad,
          totalVentas: 0x0,
          cantidadTickets: 0x0,
          tickets: [],
        });
      const _0x5b0015 = _0x27e63e[_0x259690(0x171)](_0x3070ad);
      (_0x5b0015[_0x259690(0x22f)] += _0x1acef1),
        _0x5b0015["cantidadTickets"]++,
        _0x5b0015["tickets"][_0x259690(0x196)](_0x549352);
    });
    const _0x353000 = Array[_0x4e6801(0x287)](_0x27e63e[_0x4e6801(0x284)]())[
        _0x4e6801(0x255)
      ](
        (_0x50de3b, _0x4b45b7) =>
          _0x4b45b7["totalVentas"] - _0x50de3b[_0x4e6801(0x22f)]
      ),
      _0x3a4e70 = _0x353000[_0x4e6801(0x259)];
    (window[_0x4e6801(0x215)] = _0x353000),
      (window[_0x4e6801(0x23d)] = _0x46cc4e);
    let _0x38da5c = {
      credit_card: { total: 0x0, cantidad: 0x0 },
      cash: { total: 0x0, cantidad: 0x0 },
      debit_card: { total: 0x0, cantidad: 0x0 },
      credit_note_application: { total: 0x0, cantidad: 0x0 },
      transfer: { total: 0x0, cantidad: 0x0 },
      check: { total: 0x0, cantidad: 0x0 },
      credit: { total: 0x0, cantidad: 0x0 },
      mixed: { total: 0x0, cantidad: 0x0 },
    };
    _0x46cc4e["forEach"]((_0x55342e) => {
      const _0x351ea1 = _0x4e6801,
        _0x398981 = (_0x55342e[_0x351ea1(0x16c)] || "")["trim"](),
        _0x285bde = parseFloat(_0x55342e[_0x351ea1(0x21d)]) || 0x0;
      if (_0x398981["includes"](",")) {
        const _0x393134 = _0x398981["split"](",")[_0x351ea1(0x276)](
            (_0x19f748) => _0x19f748[_0x351ea1(0x174)]()
          ),
          _0x838200 = (_0x55342e[_0x351ea1(0x1e1)] || "")
            [_0x351ea1(0x189)](",")
            [_0x351ea1(0x276)](
              (_0x4291a8) => parseFloat(_0x4291a8[_0x351ea1(0x174)]()) || 0x0
            );
        _0x393134[_0x351ea1(0x219)]((_0x11275a, _0x28a2f6) => {
          const _0x4b3172 = _0x351ea1,
            _0x5342ec = _0x838200[_0x28a2f6] || 0x0;
          _0x38da5c[_0x11275a]
            ? ((_0x38da5c[_0x11275a][_0x4b3172(0x1e8)] += _0x5342ec),
              (_0x38da5c[_0x11275a][_0x4b3172(0x223)] += 0x1))
            : ((_0x38da5c[_0x4b3172(0x262)]["total"] += _0x5342ec),
              (_0x38da5c[_0x4b3172(0x262)]["cantidad"] += 0x1));
        });
      } else
        _0x38da5c[_0x398981]
          ? ((_0x38da5c[_0x398981][_0x351ea1(0x1e8)] += _0x285bde),
            (_0x38da5c[_0x398981][_0x351ea1(0x223)] += 0x1))
          : ((_0x38da5c["mixed"]["total"] += _0x285bde),
            (_0x38da5c[_0x351ea1(0x262)][_0x351ea1(0x223)] += 0x1));
    });
    if (_0x353000[_0x4e6801(0x259)] === 0x0) {
      _0xefb23a["innerHTML"] = _0x4e6801(0x247);
      return;
    }
    const _0x57d0ea = {
      credit_card: _0x4e6801(0x1f3),
      cash: _0x4e6801(0x1bd),
      debit_card: _0x4e6801(0x1cd),
      credit_note_application: "📄\x20Nota\x20Crédito",
      transfer: _0x4e6801(0x1d7),
      check: _0x4e6801(0x27c),
      credit: _0x4e6801(0x2b5),
      mixed: _0x4e6801(0x1cb),
    };
    let _0x22af33 = "";
    _0x38da5c &&
      Object[_0x4e6801(0x2ad)](_0x38da5c)[_0x4e6801(0x219)]((_0x32ba4c) => {
        const _0x2b18bf = _0x4e6801,
          _0x5f1cac = _0x38da5c[_0x32ba4c];
        _0x5f1cac[_0x2b18bf(0x1e8)] > 0x0 &&
          (_0x22af33 +=
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x20col-md-4\x20col-lg-3\x20mb-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fw-bold\x20text-primary\x22>$" +
            censurarValor(_0x5f1cac["total"]) +
            _0x2b18bf(0x2aa) +
            (_0x57d0ea[_0x32ba4c] || _0x32ba4c) +
            _0x2b18bf(0x1c4) +
            Math[_0x2b18bf(0x2a4)](_0x5f1cac[_0x2b18bf(0x223)]) +
            _0x2b18bf(0x2a9));
      });
    let _0x242c81 =
      _0x4e6801(0x18e) +
      _0x1b9dfc +
      _0x4e6801(0x19b) +
      censurarValor(Math["round"](_0x1e8344 * 0x64) / 0x64) +
      "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Total\x20Ventas</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border-end\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-primary\x20mb-0\x22>" +
      _0x3a4e70 +
      "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-muted\x20mb-0\x22>Vendedores</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-md-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22text-info\x20mb-0\x22>" +
      _0x4087e9 +
      _0x4e6801(0x20a) +
      (_0x22af33 ? _0x4e6801(0x24f) + _0x22af33 + _0x4e6801(0x1b2) : "") +
      _0x4e6801(0x21e) +
      _0x353000[_0x4e6801(0x259)] +
      _0x4e6801(0x275);
    _0x353000[_0x4e6801(0x219)]((_0x2a5d0f, _0x5c3bdb) => {
      const _0x2d2e4f = _0x4e6801,
        _0x26638e = censurarValor(_0x2a5d0f[_0x2d2e4f(0x22f)]);
      _0x242c81 +=
        _0x2d2e4f(0x210) +
        _0x2a5d0f[_0x2d2e4f(0x1ea)] +
        _0x2d2e4f(0x151) +
        _0x2a5d0f[_0x2d2e4f(0x1ea)] +
        _0x2d2e4f(0x236) +
        _0x26638e +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>" +
        _0x2a5d0f[_0x2d2e4f(0x269)] +
        _0x2d2e4f(0x1d0) +
        ((_0x2a5d0f["totalVentas"] /
          (Math[_0x2d2e4f(0x2a4)](_0x1e8344 * 0x64) / 0x64)) *
          0x64)[_0x2d2e4f(0x24e)](0x1) +
        "%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        ((_0x2a5d0f[_0x2d2e4f(0x22f)] /
          (Math["round"](_0x1e8344 * 0x64) / 0x64)) *
          0x64)[_0x2d2e4f(0x24e)](0x1) +
        _0x2d2e4f(0x2b7) +
        _0x2a5d0f["nombre"] +
        "\x27,\x20" +
        _0x5c3bdb +
        _0x2d2e4f(0x240) +
        _0x5c3bdb +
        _0x2d2e4f(0x1ed);
    }),
      (_0x242c81 += _0x4e6801(0x22a)),
      (_0xefb23a[_0x4e6801(0x27e)] = _0x242c81),
      setTimeout(() => {
        const _0x31b987 = _0x4e6801,
          _0x9eec62 = document[_0x31b987(0x222)](_0x31b987(0x188));
        _0x9eec62 &&
          _0x9eec62[_0x31b987(0x202)](_0x31b987(0x1a0), function (_0x5c23ee) {
            const _0x40c4e7 = _0x31b987;
            _0x5c23ee[_0x40c4e7(0x19f)] === _0x40c4e7(0x1db) &&
              verificarPassword();
          });
      }, 0x64),
      generarGraficos(_0x38da5c, _0x353000),
      setTimeout(() => {
        actualizarBotonToggle();
      }, 0xc8);
  } catch (_0x2328a3) {
    _0xefb23a[_0x4e6801(0x27e)] =
      _0x4e6801(0x16d) + _0x2328a3["message"] + _0x4e6801(0x162);
  } finally {
    (_0x186752[_0x4e6801(0x239)] = _0x4e6801(0x28b)),
      _0x1e7d59[_0x4e6801(0x2a3)][_0x4e6801(0x16e)]("d-none");
  }
}
function mostrarDetalleVendedor(_0x297827, _0x12f621) {
  const _0x5f3082 = _0x4a11,
    _0x45a17a = window[_0x5f3082(0x215)] || [],
    _0x3e3881 = _0x45a17a[_0x12f621];
  if (!_0x3e3881 || !_0x3e3881[_0x5f3082(0x233)]) {
    alert(_0x5f3082(0x1aa));
    return;
  }
  const _0x100746 = _0x3e3881[_0x5f3082(0x233)];
  let _0x3e0174 = _0x5f3082(0x1b3) + _0x297827 + _0x5f3082(0x246);
  function _0x3cd538(_0x35276f, _0x24c94e = _0x5f3082(0x15f)) {
    const _0x34c7e1 = _0x5f3082;
    let _0x4e5598 = _0x35276f;
    _0x24c94e !== "todos" &&
      (_0x4e5598 = _0x35276f[_0x34c7e1(0x15e)]((_0x2c6a94) => {
        const _0x3c9afa = _0x34c7e1,
          _0x27c406 = (_0x2c6a94[_0x3c9afa(0x16c)] || "")
            ["toLowerCase"]()
            [_0x3c9afa(0x174)]();
        if (_0x24c94e === "combinado")
          return (
            _0x27c406["includes"](",") || _0x27c406[_0x3c9afa(0x195)]("\x20")
          );
        return _0x27c406[_0x3c9afa(0x195)](_0x24c94e);
      }));
    let _0x8fdd3b = "";
    return (
      _0x4e5598["forEach"]((_0x17a7ab) => {
        const _0xe37d5a = _0x34c7e1,
          _0xc58c23 = getMetodoPagoInfo(_0x17a7ab[_0xe37d5a(0x16c)]),
          _0x4adcbd = new Date(_0x17a7ab[_0xe37d5a(0x1eb)])[_0xe37d5a(0x232)](
            _0xe37d5a(0x1b6),
            {
              day: _0xe37d5a(0x27f),
              month: _0xe37d5a(0x27f),
              hour: _0xe37d5a(0x27f),
              minute: "2-digit",
            }
          );
        _0x8fdd3b +=
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<code>" +
          _0x17a7ab[_0xe37d5a(0x211)] +
          _0xe37d5a(0x163) +
          _0x4adcbd +
          _0xe37d5a(0x26b) +
          _0xc58c23["clase"] +
          "\x20d-lg-none\x22\x20style=\x22font-size:\x200.65rem;\x22>" +
          _0xc58c23[_0xe37d5a(0x1ea)] +
          "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x17a7ab["mpo_banco"] && _0x17a7ab[_0xe37d5a(0x1f8)] !== "-"
            ? "<small\x20class=\x22text-muted\x20d-block\x20d-lg-none\x22>" +
              _0x17a7ab["mpo_banco"] +
              _0xe37d5a(0x2a0)
            : "") +
          _0xe37d5a(0x1fc) +
          _0x17a7ab[_0xe37d5a(0x185)] +
          _0xe37d5a(0x251) +
          censurarValor(parseFloat(_0x17a7ab[_0xe37d5a(0x21d)])) +
          _0xe37d5a(0x2a2) +
          _0x4adcbd +
          "</small></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><span\x20class=\x22badge\x20" +
          _0xc58c23[_0xe37d5a(0x27d)] +
          _0xe37d5a(0x1bf) +
          _0xc58c23["nombre"] +
          "</span></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-lg-table-cell\x22><small\x20class=\x22text-muted\x22>" +
          (_0x17a7ab["mpo_banco"] || "-") +
          _0xe37d5a(0x29a) +
          _0x17a7ab["Ticket"] +
          "\x27)\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20title=\x22Ver\x20ticket\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22bi\x20bi-eye\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20";
      }),
      { filasHTML: _0x8fdd3b, ticketsFiltrados: _0x4e5598 }
    );
  }
  const { filasHTML: _0x5aac76, ticketsFiltrados: _0x52a9bc } =
    _0x3cd538(_0x100746);
  _0x3e0174 += _0x5aac76;
  const _0x44d994 = _0x100746["reduce"](
    (_0x50b7b0, _0x2aef6f) =>
      _0x50b7b0 + parseFloat(_0x2aef6f[_0x5f3082(0x21d)]),
    0x0
  );
  (_0x3e0174 +=
    _0x5f3082(0x1be) +
    censurarValor(_0x44d994) +
    _0x5f3082(0x1c5) +
    _0x100746[_0x5f3082(0x259)] +
    _0x5f3082(0x17f) +
    _0x100746["length"] +
    _0x5f3082(0x22d)),
    document[_0x5f3082(0x1bb)][_0x5f3082(0x194)](_0x5f3082(0x25d), _0x3e0174),
    (window["reordenarTickets"] = function () {
      const _0x132234 = _0x5f3082,
        _0x213c72 = document[_0x132234(0x222)](_0x132234(0x1f5))[
          _0x132234(0x164)
        ],
        _0x53fac5 = document[_0x132234(0x222)](_0x132234(0x21c))[
          _0x132234(0x164)
        ];
      let _0x1e8ad2 = [..._0x100746];
      _0x53fac5 !== _0x132234(0x15f) &&
        (_0x1e8ad2 = _0x100746[_0x132234(0x15e)]((_0xc34a37) => {
          const _0x4f7d97 = _0x132234,
            _0x1c800d = (_0xc34a37[_0x4f7d97(0x16c)] || "")
              [_0x4f7d97(0x22b)]()
              ["trim"]();
          if (_0x53fac5 === "combinado")
            return (
              _0x1c800d["includes"](",") || _0x1c800d[_0x4f7d97(0x195)]("\x20")
            );
          return _0x1c800d[_0x4f7d97(0x195)](_0x53fac5);
        }));
      switch (_0x213c72) {
        case _0x132234(0x23f):
          _0x1e8ad2[_0x132234(0x255)](
            (_0x185d86, _0x4faf76) =>
              new Date(_0x4faf76[_0x132234(0x1eb)]) -
              new Date(_0x185d86[_0x132234(0x1eb)])
          );
          break;
        case _0x132234(0x19c):
          _0x1e8ad2[_0x132234(0x255)](
            (_0x38eaaf, _0x2b32ef) =>
              new Date(_0x38eaaf["or_fecha"]) -
              new Date(_0x2b32ef[_0x132234(0x1eb)])
          );
          break;
        case _0x132234(0x1dc):
          _0x1e8ad2[_0x132234(0x255)](
            (_0x4b968b, _0x4b057c) =>
              parseFloat(_0x4b057c[_0x132234(0x21d)]) -
              parseFloat(_0x4b968b[_0x132234(0x21d)])
          );
          break;
        case "importe-asc":
          _0x1e8ad2["sort"](
            (_0x16c2a4, _0x20050d) =>
              parseFloat(_0x16c2a4[_0x132234(0x21d)]) -
              parseFloat(_0x20050d["Importe"])
          );
          break;
        case _0x132234(0x18a):
          _0x1e8ad2[_0x132234(0x255)]((_0x4724b9, _0x40feef) =>
            _0x40feef[_0x132234(0x211)][_0x132234(0x2a8)](
              _0x4724b9[_0x132234(0x211)],
              undefined,
              { numeric: !![] }
            )
          );
          break;
        case "ticket-asc":
          _0x1e8ad2[_0x132234(0x255)]((_0x350b6b, _0x75c4ba) =>
            _0x350b6b[_0x132234(0x211)][_0x132234(0x2a8)](
              _0x75c4ba[_0x132234(0x211)],
              undefined,
              { numeric: !![] }
            )
          );
          break;
        case _0x132234(0x289):
          _0x1e8ad2[_0x132234(0x255)]((_0x31c94b, _0x2b5cb7) =>
            _0x31c94b["Cliente"][_0x132234(0x2a8)](_0x2b5cb7[_0x132234(0x185)])
          );
          break;
        case _0x132234(0x199):
          _0x1e8ad2[_0x132234(0x255)]((_0x374683, _0x1d44fa) =>
            _0x1d44fa[_0x132234(0x185)][_0x132234(0x2a8)](
              _0x374683[_0x132234(0x185)]
            )
          );
          break;
      }
      const _0xd1a800 = document[_0x132234(0x222)](_0x132234(0x192)),
        _0x2384c5 = document["getElementById"](_0x132234(0x1df));
      let _0x6d5672 = "";
      _0x1e8ad2["forEach"]((_0x54026c) => {
        const _0x11f050 = _0x132234,
          _0xa876a8 = getMetodoPagoInfo(_0x54026c[_0x11f050(0x16c)]),
          _0x199995 = new Date(_0x54026c["or_fecha"])["toLocaleDateString"](
            _0x11f050(0x1b6),
            {
              day: _0x11f050(0x27f),
              month: "2-digit",
              hour: _0x11f050(0x27f),
              minute: "2-digit",
            }
          );
        _0x6d5672 +=
          _0x11f050(0x24a) +
          _0x54026c[_0x11f050(0x184)] +
          _0x11f050(0x181) +
          _0x54026c[_0x11f050(0x1e9)] +
          _0x11f050(0x251) +
          censurarValor(parseFloat(_0x54026c["Importe"])) +
          _0x11f050(0x286) +
          _0x199995 +
          _0x11f050(0x18d) +
          _0xa876a8["clase"] +
          _0x11f050(0x1bf) +
          _0xa876a8[_0x11f050(0x1ea)] +
          _0x11f050(0x167) +
          (_0x54026c[_0x11f050(0x298)] || "-") +
          _0x11f050(0x29a) +
          _0x54026c[_0x11f050(0x184)] +
          _0x11f050(0x1f4);
      }),
        (_0xd1a800[_0x132234(0x27e)] = _0x6d5672);
      const _0x11e7c3 = _0x1e8ad2[_0x132234(0x2af)](
        (_0x24eceb, _0x2364f8) =>
          _0x24eceb + parseFloat(_0x2364f8[_0x132234(0x21d)]),
        0x0
      );
      _0x2384c5[_0x132234(0x27e)] =
        _0x132234(0x2a1) +
        (_0x53fac5 !== _0x132234(0x15f) ? _0x132234(0x2b2) : _0x132234(0x1b8)) +
        _0x132234(0x1ec) +
        censurarValor(_0x11e7c3) +
        _0x132234(0x19d) +
        _0x1e8ad2[_0x132234(0x259)] +
        _0x132234(0x1a1) +
        (_0x53fac5 !== _0x132234(0x15f)
          ? _0x132234(0x23e) + _0x100746[_0x132234(0x259)]
          : "") +
        "</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-none\x20d-lg-table-cell\x22\x20colspan=\x223\x22></th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20class=\x22d-md-none\x22>" +
        _0x1e8ad2[_0x132234(0x259)] +
        _0x132234(0x1a1) +
        (_0x53fac5 !== _0x132234(0x15f)
          ? _0x132234(0x23e) + _0x100746["length"]
          : "") +
        _0x132234(0x203);
    });
  const _0x2487bb = new bootstrap["Modal"](
    document[_0x5f3082(0x222)](_0x5f3082(0x18f))
  );
  _0x2487bb[_0x5f3082(0x1d1)](),
    document["getElementById"](_0x5f3082(0x18f))[_0x5f3082(0x202)](
      _0x5f3082(0x217),
      () => {
        const _0x2e0aed = _0x5f3082;
        document["getElementById"](_0x2e0aed(0x18f))[_0x2e0aed(0x225)](),
          delete window[_0x2e0aed(0x249)];
      }
    );
}
function generarGraficos(_0x4ba99c, _0x319c30) {
  const _0x4984f5 = _0x4a11;
  if (window[_0x4984f5(0x209)]) window[_0x4984f5(0x209)][_0x4984f5(0x169)]();
  if (window["chartVendedores"]) window["chartVendedores"][_0x4984f5(0x169)]();
  if (window[_0x4984f5(0x176)]) window[_0x4984f5(0x176)][_0x4984f5(0x169)]();
  const _0x3dfb10 = [],
    _0x571fbd = [],
    _0x592b8d = [],
    _0x4edbf9 = {
      credit_card: _0x4984f5(0x201),
      cash: _0x4984f5(0x166),
      debit_card: _0x4984f5(0x160),
      credit_note_application: _0x4984f5(0x277),
      transfer: _0x4984f5(0x2b8),
      check: _0x4984f5(0x1a5),
      credit: _0x4984f5(0x244),
      mixed: "#6f42c1",
    },
    _0x6e477a = {
      credit_card: _0x4984f5(0x261),
      cash: _0x4984f5(0x16b),
      debit_card: _0x4984f5(0x1fb),
      credit_note_application: _0x4984f5(0x24c),
      transfer: _0x4984f5(0x292),
      check: _0x4984f5(0x26d),
      credit: "Crédito",
      mixed: _0x4984f5(0x154),
    };
  Object["keys"](_0x4ba99c)[_0x4984f5(0x219)]((_0x1bc612) => {
    const _0x5b3902 = _0x4984f5;
    _0x4ba99c[_0x1bc612][_0x5b3902(0x1e8)] > 0x0 &&
      (_0x3dfb10[_0x5b3902(0x196)](_0x4ba99c[_0x1bc612][_0x5b3902(0x1e8)]),
      _0x571fbd[_0x5b3902(0x196)](_0x6e477a[_0x1bc612] || _0x1bc612),
      _0x592b8d["push"](_0x4edbf9[_0x1bc612] || _0x5b3902(0x179)));
  });
  const _0x4bf8f5 = document["getElementById"](_0x4984f5(0x157));
  _0x4bf8f5 &&
    (window[_0x4984f5(0x209)] = new Chart(_0x4bf8f5, {
      type: _0x4984f5(0x1bc),
      data: {
        labels: _0x571fbd,
        datasets: [
          {
            data: _0x3dfb10,
            backgroundColor: _0x592b8d,
            borderWidth: 0x2,
            borderColor: _0x4984f5(0x20c),
          },
        ],
      },
      options: {
        responsive: !![],
        maintainAspectRatio: ![],
        plugins: {
          legend: {
            position: _0x4984f5(0x198),
            labels: { padding: 0xf, usePointStyle: !![] },
          },
          tooltip: {
            callbacks: {
              label: function (_0x221c3a) {
                const _0x3a4084 = _0x4984f5,
                  _0x44cfcc = _0x221c3a[_0x3a4084(0x1ee)]["data"][
                    _0x3a4084(0x2af)
                  ]((_0x4aff5f, _0x3f62df) => _0x4aff5f + _0x3f62df, 0x0),
                  _0x358b50 = ((_0x221c3a[_0x3a4084(0x1d5)] / _0x44cfcc) *
                    0x64)[_0x3a4084(0x24e)](0x1);
                return (
                  _0x221c3a["label"] +
                  _0x3a4084(0x161) +
                  censurarValor(_0x221c3a[_0x3a4084(0x1d5)]) +
                  "\x20(" +
                  _0x358b50 +
                  "%)"
                );
              },
            },
          },
        },
      },
    }));
  const _0x18261e = [..._0x319c30]
      [_0x4984f5(0x255)](
        (_0x5c6992, _0x1276f5) =>
          _0x1276f5[_0x4984f5(0x22f)] - _0x5c6992[_0x4984f5(0x22f)]
      )
      [_0x4984f5(0x22c)](0x0, 0xa),
    _0x2adc9e = _0x18261e["map"]((_0x53e8cf) =>
      _0x53e8cf["nombre"][_0x4984f5(0x259)] > 0xf
        ? _0x53e8cf[_0x4984f5(0x1ea)][_0x4984f5(0x216)](0x0, 0xf) +
          _0x4984f5(0x23b)
        : _0x53e8cf[_0x4984f5(0x1ea)]
    ),
    _0x545774 = _0x18261e[_0x4984f5(0x276)](
      (_0x6f3015) => _0x6f3015["totalVentas"]
    ),
    _0x30ebe1 = document[_0x4984f5(0x222)](_0x4984f5(0x2b6));
  _0x30ebe1 &&
    (window["chartVendedores"] = new Chart(_0x30ebe1, {
      type: _0x4984f5(0x1c0),
      data: {
        labels: _0x2adc9e,
        datasets: [
          {
            label: _0x4984f5(0x204),
            data: _0x545774,
            backgroundColor: "rgba(13,\x20110,\x20253,\x200.8)",
            borderColor: _0x4984f5(0x273),
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
              label: function (_0x4982e1) {
                const _0x468ddc = _0x4984f5;
                return (
                  _0x4982e1[_0x468ddc(0x1ca)] +
                  ":\x20$" +
                  censurarValor(_0x4982e1[_0x468ddc(0x1d5)]["x"])
                );
              },
            },
          },
        },
        scales: {
          x: {
            beginAtZero: !![],
            ticks: {
              callback: function (_0x5c811b) {
                return "$" + censurarValor(_0x5c811b);
              },
            },
          },
        },
      },
    }));
  const _0x1881b8 = document[_0x4984f5(0x222)]("graficoVentasDiarias");
  if (_0x1881b8) {
    const _0x8875fd = {},
      _0x3c1ac6 = {};
    _0x319c30["forEach"]((_0x14c981) => {
      const _0x2c57d6 = _0x4984f5;
      _0x14c981[_0x2c57d6(0x233)] &&
        _0x14c981["tickets"][_0x2c57d6(0x219)]((_0x25b09d) => {
          const _0x4ffa6e = _0x2c57d6,
            _0x89f253 = _0x25b09d[_0x4ffa6e(0x1eb)][_0x4ffa6e(0x189)]("T")[0x0],
            _0x3cde4b = new Date(_0x89f253)[_0x4ffa6e(0x1ce)]();
          !_0x8875fd[_0x3cde4b] && (_0x8875fd[_0x3cde4b] = {}),
            !_0x8875fd[_0x3cde4b][_0x14c981[_0x4ffa6e(0x1ea)]] &&
              (_0x8875fd[_0x3cde4b][_0x14c981["nombre"]] = 0x0),
            (_0x8875fd[_0x3cde4b][_0x14c981[_0x4ffa6e(0x1ea)]] += parseFloat(
              _0x25b09d["Importe"]
            )),
            (_0x3c1ac6[_0x14c981[_0x4ffa6e(0x1ea)]] = !![]);
        });
    });
    const _0x21e981 = Object[_0x4984f5(0x2ad)](_0x8875fd)
        [_0x4984f5(0x276)](Number)
        [_0x4984f5(0x255)]((_0x158c85, _0x40cd70) => _0x158c85 - _0x40cd70),
      _0x531c9a = window[_0x4984f5(0x1e3)] < 0x300,
      _0x407438 = _0x531c9a ? 0x5 : 0x8,
      _0x151856 = [..._0x319c30]
        ["sort"](
          (_0x1416c0, _0x3b3f4f) =>
            _0x3b3f4f[_0x4984f5(0x22f)] - _0x1416c0[_0x4984f5(0x22f)]
        )
        [_0x4984f5(0x22c)](0x0, _0x407438)
        [_0x4984f5(0x276)]((_0x108e4c) => _0x108e4c[_0x4984f5(0x1ea)]),
      _0x14a890 = [
        _0x4984f5(0x201),
        _0x4984f5(0x244),
        _0x4984f5(0x166),
        _0x4984f5(0x277),
        _0x4984f5(0x1da),
        "#fd7e14",
        _0x4984f5(0x290),
        _0x4984f5(0x160),
      ],
      _0x4be56b = _0x151856[_0x4984f5(0x276)]((_0x20e535, _0x557aac) => {
        const _0xe4ee3e = _0x4984f5,
          _0x414a80 = _0x21e981[_0xe4ee3e(0x276)]((_0x2def4e) => {
            return _0x8875fd[_0x2def4e] && _0x8875fd[_0x2def4e][_0x20e535]
              ? _0x8875fd[_0x2def4e][_0x20e535]
              : 0x0;
          });
        return {
          label:
            _0x531c9a && _0x20e535["length"] > 0xf
              ? _0x20e535[_0xe4ee3e(0x216)](0x0, 0xf) + _0xe4ee3e(0x23b)
              : _0x20e535,
          data: _0x414a80,
          borderColor: _0x14a890[_0x557aac % _0x14a890[_0xe4ee3e(0x259)]],
          backgroundColor:
            _0x14a890[_0x557aac % _0x14a890[_0xe4ee3e(0x259)]] + "20",
          borderWidth: _0x531c9a ? 0x3 : 0x2,
          fill: ![],
          tension: 0.3,
          pointRadius: _0x531c9a ? 0x5 : 0x4,
          pointHoverRadius: _0x531c9a ? 0x8 : 0x6,
          pointBackgroundColor:
            _0x14a890[_0x557aac % _0x14a890[_0xe4ee3e(0x259)]],
          pointBorderColor: _0xe4ee3e(0x20c),
          pointBorderWidth: 0x2,
        };
      });
    window[_0x4984f5(0x1f2)] = {
      diasDelMes: _0x21e981,
      ventasPorDia: _0x8875fd,
      topVendedores: _0x151856,
      datasets: _0x4be56b,
      coloresLineas: _0x14a890,
    };
    const _0xc354b7 = document[_0x4984f5(0x222)](_0x4984f5(0x16a));
    _0xc354b7 &&
      _0x531c9a &&
      ((_0xc354b7[_0x4984f5(0x27e)] = _0x4984f5(0x224)),
      _0x151856[_0x4984f5(0x219)]((_0xcc52c3) => {
        const _0x5d5c5a = _0x4984f5,
          _0x41c074 = document[_0x5d5c5a(0x25a)]("option");
        (_0x41c074["value"] = _0xcc52c3),
          (_0x41c074["textContent"] =
            _0xcc52c3[_0x5d5c5a(0x259)] > 0x19
              ? _0xcc52c3[_0x5d5c5a(0x216)](0x0, 0x19) + _0x5d5c5a(0x23b)
              : _0xcc52c3),
          _0xc354b7["appendChild"](_0x41c074);
      })),
      (window[_0x4984f5(0x176)] = new Chart(_0x1881b8, {
        type: _0x4984f5(0x1ad),
        data: {
          labels: _0x21e981["map"]((_0x413c6d) =>
            _0x531c9a ? "" + _0x413c6d : "Día\x20" + _0x413c6d
          ),
          datasets: _0x4be56b,
        },
        options: {
          responsive: !![],
          maintainAspectRatio: ![],
          devicePixelRatio: window[_0x4984f5(0x278)] || 0x1,
          plugins: {
            legend: {
              position: _0x531c9a ? _0x4984f5(0x198) : "top",
              display: !_0x531c9a,
              labels: {
                padding: _0x531c9a ? 0xa : 0xf,
                usePointStyle: !![],
                boxWidth: _0x531c9a ? 0xf : 0x14,
                font: { size: _0x531c9a ? 0xa : 0xc },
              },
            },
            tooltip: {
              mode: "index",
              intersect: ![],
              backgroundColor: "rgba(0,0,0,0.9)",
              titleColor: "#fff",
              bodyColor: _0x4984f5(0x20c),
              borderColor: _0x4984f5(0x279),
              borderWidth: 0x1,
              cornerRadius: 0x8,
              displayColors: !![],
              padding: 0xc,
              callbacks: {
                title: function (_0x415000) {
                  const _0x52f777 = _0x4984f5;
                  return _0x52f777(0x218) + _0x415000[0x0]["label"];
                },
                label: function (_0x3d26c2) {
                  const _0x13b319 = _0x4984f5;
                  return (
                    _0x3d26c2[_0x13b319(0x1ee)][_0x13b319(0x1ca)] +
                    _0x13b319(0x161) +
                    censurarValor(_0x3d26c2["parsed"]["y"])
                  );
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: !_0x531c9a,
                text: _0x4984f5(0x183),
                font: { size: _0x531c9a ? 0xa : 0xc },
              },
              ticks: {
                font: { size: _0x531c9a ? 0xa : 0xb },
                maxTicksLimit: _0x531c9a ? 0x8 : 0xf,
              },
              grid: { display: !![], color: _0x4984f5(0x266), lineWidth: 0x1 },
            },
            y: {
              beginAtZero: !![],
              title: {
                display: !_0x531c9a,
                text: _0x4984f5(0x1ef),
                font: { size: _0x531c9a ? 0xa : 0xc },
              },
              ticks: {
                font: { size: _0x531c9a ? 0x9 : 0xb },
                callback: function (_0x5413e2) {
                  const _0x47a4aa = _0x4984f5;
                  if (_0x531c9a)
                    return _0x5413e2 >= 0x3e8
                      ? "$" + (_0x5413e2 / 0x3e8)[_0x47a4aa(0x24e)](0x0) + "K"
                      : "$" + censurarValor(_0x5413e2);
                  return "$" + censurarValor(_0x5413e2);
                },
                maxTicksLimit: _0x531c9a ? 0x6 : 0x8,
              },
              grid: { display: !![], color: _0x4984f5(0x266), lineWidth: 0x1 },
            },
          },
          interaction: { mode: _0x4984f5(0x1e4), axis: "x", intersect: ![] },
          elements: {
            point: {
              hoverBackgroundColor: _0x4984f5(0x20c),
              hoverBorderWidth: 0x3,
            },
          },
        },
      }));
  }
}
(window["mostrarModalReporteVentas"] = mostrarModalReporteVentas),
  (window[_0x581315(0x263)] = cerrarModalReporteVentas),
  (window[_0x581315(0x1cf)] = generarReporteVentas),
  (window[_0x581315(0x173)] = mostrarDetalleVendedor),
  document[_0x581315(0x202)](_0x581315(0x234), function () {
    const _0x4c85f3 = _0x581315,
      _0x2753ac = document[_0x4c85f3(0x222)]("mesReporte");
    if (_0x2753ac) {
      const _0x3641f2 = new Date(),
        _0xff8fb5 = _0x3641f2[_0x4c85f3(0x206)](),
        _0x3dbb1c = (_0x3641f2[_0x4c85f3(0x25b)]() + 0x1)
          ["toString"]()
          [_0x4c85f3(0x1e7)](0x2, "0");
      _0x2753ac[_0x4c85f3(0x164)] = _0xff8fb5 + "-" + _0x3dbb1c;
    }
  });
function toggleVendedoresChart() {
  const _0x868ac5 = _0x581315;
  if (window[_0x868ac5(0x176)]) {
    const _0x20b724 =
      window[_0x868ac5(0x176)]["options"][_0x868ac5(0x1ab)]["legend"];
    (_0x20b724[_0x868ac5(0x1b9)] = !_0x20b724[_0x868ac5(0x1b9)]),
      window["chartVentasDiarias"][_0x868ac5(0x26a)]();
  }
}
function fullscreenChart(_0x4c7a7e) {
  const _0x3cb4c1 = _0x581315,
    _0x3566aa = document[_0x3cb4c1(0x18c)]("#" + _0x4c7a7e)[_0x3cb4c1(0x285)](
      ".card"
    );
  _0x3566aa &&
    (_0x3566aa["classList"][_0x3cb4c1(0x29e)](_0x3cb4c1(0x267))
      ? (_0x3566aa[_0x3cb4c1(0x2a3)][_0x3cb4c1(0x225)](_0x3cb4c1(0x267)),
        (document[_0x3cb4c1(0x1bb)][_0x3cb4c1(0x248)][_0x3cb4c1(0x182)] =
          _0x3cb4c1(0x1f6)),
        window[_0x3cb4c1(0x176)] &&
          window[_0x3cb4c1(0x176)][_0x3cb4c1(0x1fd)]())
      : (_0x3566aa[_0x3cb4c1(0x2a3)][_0x3cb4c1(0x16e)]("chart-fullscreen"),
        (document[_0x3cb4c1(0x1bb)][_0x3cb4c1(0x248)][_0x3cb4c1(0x182)] =
          _0x3cb4c1(0x1b4)),
        setTimeout(() => {
          const _0x1cd643 = _0x3cb4c1;
          window[_0x1cd643(0x176)] && window[_0x1cd643(0x176)]["resize"]();
        }, 0x64)));
}
function filterVendedorChart() {
  const _0x3156c1 = _0x581315;
  if (!window[_0x3156c1(0x176)] || !window["ventasDiariasData"]) return;
  const _0xd15e26 = document[_0x3156c1(0x222)](_0x3156c1(0x16a))[
      _0x3156c1(0x164)
    ],
    {
      diasDelMes: _0x4f53e1,
      ventasPorDia: _0x5c495c,
      topVendedores: _0x4e21dc,
      coloresLineas: _0x161d3a,
    } = window["ventasDiariasData"];
  let _0xd71525;
  if (_0xd15e26 === "")
    _0xd71525 = _0x4e21dc["map"]((_0x37f474, _0x1e5844) => {
      const _0x5851bf = _0x3156c1,
        _0xa1bb15 = _0x4f53e1[_0x5851bf(0x276)]((_0x10e9ce) => {
          return _0x5c495c[_0x10e9ce] && _0x5c495c[_0x10e9ce][_0x37f474]
            ? _0x5c495c[_0x10e9ce][_0x37f474]
            : 0x0;
        });
      return {
        label:
          _0x37f474[_0x5851bf(0x259)] > 0xf
            ? _0x37f474[_0x5851bf(0x216)](0x0, 0xf) + _0x5851bf(0x23b)
            : _0x37f474,
        data: _0xa1bb15,
        borderColor: _0x161d3a[_0x1e5844 % _0x161d3a["length"]],
        backgroundColor:
          _0x161d3a[_0x1e5844 % _0x161d3a[_0x5851bf(0x259)]] + "20",
        borderWidth: 0x3,
        fill: ![],
        tension: 0.3,
        pointRadius: 0x5,
        pointHoverRadius: 0x8,
        pointBackgroundColor:
          _0x161d3a[_0x1e5844 % _0x161d3a[_0x5851bf(0x259)]],
        pointBorderColor: _0x5851bf(0x20c),
        pointBorderWidth: 0x2,
      };
    });
  else {
    const _0x291620 = _0x4e21dc[_0x3156c1(0x1d6)](_0xd15e26),
      _0x490057 = _0x4f53e1[_0x3156c1(0x276)]((_0x484e33) => {
        return _0x5c495c[_0x484e33] && _0x5c495c[_0x484e33][_0xd15e26]
          ? _0x5c495c[_0x484e33][_0xd15e26]
          : 0x0;
      });
    _0xd71525 = [
      {
        label: _0xd15e26,
        data: _0x490057,
        borderColor: _0x161d3a[_0x291620 % _0x161d3a[_0x3156c1(0x259)]],
        backgroundColor: _0x161d3a[_0x291620 % _0x161d3a["length"]] + "20",
        borderWidth: 0x4,
        fill: !![],
        tension: 0.3,
        pointRadius: 0x6,
        pointHoverRadius: 0xa,
        pointBackgroundColor: _0x161d3a[_0x291620 % _0x161d3a["length"]],
        pointBorderColor: _0x3156c1(0x20c),
        pointBorderWidth: 0x3,
      },
    ];
  }
  (window["chartVentasDiarias"][_0x3156c1(0x186)][_0x3156c1(0x168)] =
    _0xd71525),
    window["chartVentasDiarias"]["update"]();
}
function filterPeriodoChart() {
  const _0xa6c675 = _0x581315;
  if (!window["chartVentasDiarias"] || !window[_0xa6c675(0x1f2)]) return;
  const _0x209c3c = document[_0xa6c675(0x222)]("periodoFilter")["value"],
    {
      diasDelMes: _0x25cb69,
      ventasPorDia: _0x3ecde1,
      topVendedores: _0xe7a1cb,
      coloresLineas: _0x1bfb38,
    } = window[_0xa6c675(0x1f2)];
  let _0x106858,
    _0x215984 = _0xa6c675(0x218);
  switch (_0x209c3c) {
    case "week1":
      (_0x106858 = _0x25cb69[_0xa6c675(0x15e)](
        (_0x58b0a1) => _0x58b0a1 >= 0x1 && _0x58b0a1 <= 0x7
      )),
        (_0x215984 = _0xa6c675(0x27b));
      break;
    case "week2":
      (_0x106858 = _0x25cb69["filter"](
        (_0x1c20f2) => _0x1c20f2 >= 0x8 && _0x1c20f2 <= 0xf
      )),
        (_0x215984 = _0xa6c675(0x213));
      break;
    case _0xa6c675(0x272):
      (_0x106858 = _0x25cb69["filter"](
        (_0x468313) => _0x468313 >= 0x10 && _0x468313 <= 0x17
      )),
        (_0x215984 = "S3-");
      break;
    case _0xa6c675(0x1c3):
      (_0x106858 = _0x25cb69[_0xa6c675(0x15e)](
        (_0x2461cd) => _0x2461cd >= 0x18 && _0x2461cd <= 0x1f
      )),
        (_0x215984 = _0xa6c675(0x25c));
      break;
    default:
      (_0x106858 = _0x25cb69), (_0x215984 = "");
  }
  window[_0xa6c675(0x176)][_0xa6c675(0x186)][_0xa6c675(0x2b3)] = _0x106858[
    "map"
  ]((_0x16e433) => "" + _0x215984 + _0x16e433);
  const _0x6e4c98 = document[_0xa6c675(0x222)](_0xa6c675(0x16a))[
      _0xa6c675(0x164)
    ],
    _0x2120f5 = _0x6e4c98 === "" ? _0xe7a1cb : [_0x6e4c98],
    _0x2be91d = _0x2120f5[_0xa6c675(0x276)]((_0x27fc90, _0x5d83ae) => {
      const _0x2f4f4d = _0xa6c675,
        _0x309986 = _0x106858[_0x2f4f4d(0x276)]((_0xfbc6ed) => {
          return _0x3ecde1[_0xfbc6ed] && _0x3ecde1[_0xfbc6ed][_0x27fc90]
            ? _0x3ecde1[_0xfbc6ed][_0x27fc90]
            : 0x0;
        }),
        _0x332635 = _0xe7a1cb[_0x2f4f4d(0x1d6)](_0x27fc90);
      return {
        label:
          _0x27fc90[_0x2f4f4d(0x259)] > 0xf
            ? _0x27fc90[_0x2f4f4d(0x216)](0x0, 0xf) + "..."
            : _0x27fc90,
        data: _0x309986,
        borderColor: _0x1bfb38[_0x332635 % _0x1bfb38["length"]],
        backgroundColor:
          _0x1bfb38[_0x332635 % _0x1bfb38[_0x2f4f4d(0x259)]] + "20",
        borderWidth: _0x6e4c98 === "" ? 0x3 : 0x4,
        fill: _0x6e4c98 !== "",
        tension: 0.3,
        pointRadius: _0x6e4c98 === "" ? 0x5 : 0x6,
        pointHoverRadius: _0x6e4c98 === "" ? 0x8 : 0xa,
        pointBackgroundColor:
          _0x1bfb38[_0x332635 % _0x1bfb38[_0x2f4f4d(0x259)]],
        pointBorderColor: _0x2f4f4d(0x20c),
        pointBorderWidth: _0x6e4c98 === "" ? 0x2 : 0x3,
      };
    });
  (window["chartVentasDiarias"]["data"]["datasets"] = _0x2be91d),
    window[_0xa6c675(0x176)][_0xa6c675(0x26a)]();
}
async function verTicket(_0x363167) {
  const _0x201a05 = _0x581315;
  try {
    const _0x431be8 = document["createElement"](_0x201a05(0x17e));
    (_0x431be8["className"] =
      "toast-container\x20position-fixed\x20top-0\x20end-0\x20p-3"),
      (_0x431be8[_0x201a05(0x27e)] =
        _0x201a05(0x17c) + _0x363167 + _0x201a05(0x170)),
      document[_0x201a05(0x1bb)][_0x201a05(0x191)](_0x431be8);
    const _0x29fe9 = [
      _0x201a05(0x1c2) + _0x363167,
      _0x201a05(0x1f1) + _0x363167,
      _0x201a05(0x296) + _0x363167,
    ];
    let _0x5adac5 = null,
      _0xc8354 = null;
    for (const _0x349714 of _0x29fe9) {
      try {
        const _0x3a11cc = await fetch(_0x349714);
        if (_0x3a11cc["ok"]) {
          _0x5adac5 = await _0x3a11cc["json"]();
          break;
        } else {
          const _0x50e0a9 = await _0x3a11cc["text"]();
          _0xc8354 = new Error(
            _0x201a05(0x28d) +
              _0x3a11cc[_0x201a05(0x1c9)] +
              _0x201a05(0x2ae) +
              _0x50e0a9
          );
        }
      } catch (_0x4e6be1) {
        _0xc8354 = _0x4e6be1;
      }
    }
    document[_0x201a05(0x1bb)]["removeChild"](_0x431be8),
      !_0x5adac5 &&
        ((_0x5adac5 = {
          orders: [
            {
              or_idorden: 0x3ea8,
              or_idordenExt: _0x363167,
              or_fecha: _0x201a05(0x178),
              or_nombreCliente: _0x201a05(0x16f),
              or_subtotal: 1741.37931,
              or_totalImp: 278.62069,
              or_totalFinal: 0x7e4,
              or_metodoPago: _0x201a05(0x295),
              or_moneda: _0x201a05(0x1b1),
              or_estatus: "completed",
              vendedorNombre: _0x201a05(0x1a9),
              detalles: [
                {
                  ord_idProducto: _0x201a05(0x1c8),
                  ord_descripcion: _0x201a05(0x22e),
                  ord_cantProducto: 0x1,
                  ord_precio_unitario: 1741.37931,
                  ord_total: 0x7e4,
                },
              ],
              payments: [
                {
                  mpo_idMetodoPago: _0x201a05(0x295),
                  mpo_importe: 0x7e4,
                  mpo_banco: _0x201a05(0x1b5),
                  mpo_numero: "5450",
                },
              ],
            },
          ],
          status: _0x201a05(0x1ae),
          note: _0x201a05(0x250),
        }),
        setTimeout(() => {
          const _0x118adc = _0x201a05;
          alert(
            "⚠️\x20API\x20no\x20disponible\x0a\x0aSe\x20están\x20mostrando\x20datos\x20de\x20ejemplo\x20para\x20el\x20ticket\x20" +
              _0x363167 +
              _0x118adc(0x254) +
              _0x29fe9[0x0]
          );
        }, 0x64)),
      mostrarModalTicket(_0x5adac5, _0x363167);
  } catch (_0x3fd09a) {
    alert(
      _0x201a05(0x207) +
        _0x363167 +
        ":\x0a" +
        _0x3fd09a[_0x201a05(0x28c)] +
        _0x201a05(0x294)
    );
  }
}
function mostrarModalTicket(_0x47bf9d, _0x2dbb2f) {
  const _0x59847a = _0x581315,
    _0xc93aed = _0x47bf9d["orders"] || [],
    _0x309159 = _0xc93aed["length"] > 0x0 ? _0xc93aed[0x0] : {},
    _0x1fe7a5 = _0x309159[_0x59847a(0x1e9)] || {},
    _0x3695a8 =
      _0x1fe7a5[_0x59847a(0x15c)] ||
      _0x309159["or_nombreCliente"] ||
      _0x309159[_0x59847a(0x15c)] ||
      _0x59847a(0x242),
    _0x3dea17 = _0x309159[_0x59847a(0x245)] || [],
    _0x38f82b = _0x3dea17[_0x59847a(0x259)] > 0x0 ? _0x3dea17[0x0] : {},
    _0x166c52 =
      _0x38f82b["mpo_idMetodoPago"] ||
      _0x309159[_0x59847a(0x1f0)] ||
      _0x309159[_0x59847a(0x208)] ||
      _0x59847a(0x242),
    _0x386df2 =
      _0x38f82b[_0x59847a(0x1f8)] ||
      _0x309159[_0x59847a(0x1f8)] ||
      _0x59847a(0x242),
    _0x579dfb =
      _0x309159[_0x59847a(0x29b)] || _0x309159[_0x59847a(0x1d2)] || [],
    _0x562e3a =
      _0x309159[_0x59847a(0x243)] ||
      _0x309159[_0x59847a(0x1ac)] ||
      _0x59847a(0x242),
    _0x4c7812 =
      "\x0a\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22ticketDetalleModal\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-xl\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x20bg-primary\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22>🎫\x20Detalle\x20del\x20Ticket:\x20" +
      _0x2dbb2f +
      "</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x20btn-close-white\x22\x20data-bs-dismiss=\x22modal\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
      (_0xc93aed[_0x59847a(0x259)] === 0x0
        ? _0x59847a(0x165) + _0x2dbb2f + _0x59847a(0x17d)
        : "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          (_0x47bf9d["note"]
            ? _0x59847a(0x26c) +
              _0x47bf9d[_0x59847a(0x172)] +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : "") +
          _0x59847a(0x2bb) +
          (_0x309159[_0x59847a(0x1ff)] || _0x2dbb2f) +
          "</code></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>ID\x20Orden:</strong>\x20<code>" +
          (_0x309159[_0x59847a(0x1b0)] ||
            _0x309159[_0x59847a(0x17a)] ||
            _0x59847a(0x242)) +
          _0x59847a(0x1a6) +
          (_0x309159["or_series"] || _0x59847a(0x242)) +
          (_0x309159[_0x59847a(0x2a5)]
            ? _0x59847a(0x235) + _0x309159[_0x59847a(0x2a5)]
            : "") +
          _0x59847a(0x15a) +
          _0x3695a8 +
          _0x59847a(0x156) +
          (_0x1fe7a5[_0x59847a(0x24b)] ||
            _0x309159[_0x59847a(0x21b)] ||
            _0x59847a(0x242)) +
          _0x59847a(0x24d) +
          (_0x309159[_0x59847a(0x1eb)]
            ? new Date(_0x309159[_0x59847a(0x1eb)])[_0x59847a(0x1d8)](
                _0x59847a(0x1b6)
              )
            : _0x59847a(0x242)) +
          _0x59847a(0x212) +
          _0x562e3a +
          _0x59847a(0x238) +
          (_0x309159[_0x59847a(0x227)] === _0x59847a(0x1de) ||
          _0x309159[_0x59847a(0x205)] === _0x59847a(0x1de)
            ? _0x59847a(0x252)
            : "warning") +
          "\x22>" +
          (_0x309159[_0x59847a(0x227)] ||
            _0x309159[_0x59847a(0x205)] ||
            _0x59847a(0x242)) +
          _0x59847a(0x1dd) +
          censurarValor(parseFloat(_0x309159["or_subtotal"] || 0x0)) +
          _0x59847a(0x253) +
          censurarValor(parseFloat(_0x309159["or_descTotal"] || 0x0)) +
          "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Impuestos:</strong>\x20<span\x20class=\x22text-warning\x22>$" +
          censurarValor(
            parseFloat(
              _0x309159[_0x59847a(0x293)] || _0x309159[_0x59847a(0x19e)] || 0x0
            )
          ) +
          _0x59847a(0x28e) +
          censurarValor(
            parseFloat(
              _0x309159[_0x59847a(0x1a2)] || _0x309159[_0x59847a(0x220)] || 0x0
            )
          ) +
          "</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Método\x20de\x20Pago:</strong>\x20" +
          _0x166c52 +
          "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Banco:</strong>\x20" +
          _0x386df2 +
          _0x59847a(0x177) +
          (_0x38f82b[_0x59847a(0x1ba)] || "N/A") +
          _0x59847a(0x297) +
          (_0x309159["or_codMon"] ||
            _0x309159[_0x59847a(0x1af)] ||
            _0x59847a(0x1b1)) +
          _0x59847a(0x20f) +
          (_0x579dfb && _0x579dfb[_0x59847a(0x259)] > 0x0
            ? _0x59847a(0x2ac) +
              _0x579dfb[_0x59847a(0x259)] +
              _0x59847a(0x28a) +
              _0x579dfb[_0x59847a(0x276)](
                (_0x541328) =>
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22d-none\x20d-md-table-cell\x22><code\x20class=\x22small\x22>" +
                  (_0x541328[_0x59847a(0x15d)] ||
                    _0x541328[_0x59847a(0x258)] ||
                    "N/A") +
                  _0x59847a(0x1fe) +
                  (_0x541328[_0x59847a(0x2b0)] ||
                    _0x541328[_0x59847a(0x19a)] ||
                    _0x59847a(0x242)) +
                  _0x59847a(0x20b) +
                  (_0x541328[_0x59847a(0x15d)] ||
                    _0x541328[_0x59847a(0x258)] ||
                    _0x59847a(0x242)) +
                  "</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20justify-content-between\x20align-items-center\x20mt-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-primary\x22>Precio:\x20$" +
                  censurarValor(
                    parseFloat(
                      _0x541328["ord_precio_unitario"] ||
                        _0x541328["od_precio"] ||
                        0x0
                    )
                  ) +
                  "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22badge\x20bg-success\x22>Total:\x20$" +
                  censurarValor(
                    parseFloat(
                      _0x541328[_0x59847a(0x265)] ||
                        _0x541328[_0x59847a(0x200)] ||
                        0x0
                    )
                  ) +
                  _0x59847a(0x1a3) +
                  (_0x541328[_0x59847a(0x20e)] ||
                  _0x541328[_0x59847a(0x18b)] * 0.16
                    ? _0x59847a(0x158) +
                      censurarValor(
                        parseFloat(
                          _0x541328[_0x59847a(0x20e)] ||
                            _0x541328[_0x59847a(0x18b)] * 0.16 ||
                            0x0
                        )
                      ) +
                      "</small>"
                    : "") +
                  _0x59847a(0x268) +
                  (_0x541328["ord_cantProducto"] ||
                    _0x541328[_0x59847a(0x270)] ||
                    0x0) +
                  _0x59847a(0x1a7) +
                  censurarValor(
                    parseFloat(
                      _0x541328[_0x59847a(0x180)] ||
                        _0x541328["od_precio"] ||
                        0x0
                    )
                  ) +
                  _0x59847a(0x2b4) +
                  censurarValor(
                    parseFloat(
                      _0x541328[_0x59847a(0x20e)] ||
                        _0x541328[_0x59847a(0x18b)] * 0.16 ||
                        0x0
                    )
                  ) +
                  _0x59847a(0x1f7) +
                  censurarValor(
                    parseFloat(
                      _0x541328[_0x59847a(0x265)] ||
                        _0x541328[_0x59847a(0x200)] ||
                        0x0
                    )
                  ) +
                  _0x59847a(0x214)
              )[_0x59847a(0x281)]("") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Resumen\x20de\x20totales\x20al\x20estilo\x20ticket\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x20bg-light\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-lg-8\x20col-md-7\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              (_0x309159[_0x59847a(0x1f9)]
                ? _0x59847a(0x25f) +
                  _0x309159[_0x59847a(0x1f9)] +
                  _0x59847a(0x1e0)
                : "") +
              _0x59847a(0x271) +
              censurarValor(parseFloat(_0x309159["or_subtotal"] || 0x0)) +
              "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-block\x22>Impuesto</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>$" +
              censurarValor(
                parseFloat(
                  _0x309159[_0x59847a(0x293)] ||
                    _0x309159["or_impuestos"] ||
                    0x0
                )
              ) +
              "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border\x20rounded\x20p-2\x20bg-success\x20text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22d-block\x22>Total</small>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>$" +
              censurarValor(
                parseFloat(
                  _0x309159[_0x59847a(0x1a2)] ||
                    _0x309159[_0x59847a(0x220)] ||
                    0x0
                )
              ) +
              "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Información\x20adicional\x20del\x20ticket\x20para\x20desktop\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Información\x20adicional\x20del\x20ticket\x20para\x20desktop\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<small\x20class=\x22text-muted\x20d-none\x20d-md-block\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              _0x579dfb[_0x59847a(0x276)](
                (_0xd65d7a) =>
                  (_0xd65d7a[_0x59847a(0x15d)] ||
                    _0xd65d7a[_0x59847a(0x258)] ||
                    "") +
                  "\x20" +
                  (_0xd65d7a[_0x59847a(0x2b0)] ||
                    _0xd65d7a[_0x59847a(0x19a)] ||
                    "")["substring"](0x0, 0x1e) +
                  _0x59847a(0x288) +
                  censurarValor(
                    parseFloat(
                      _0xd65d7a["ord_precio_unitario"] ||
                        _0xd65d7a[_0x59847a(0x280)] ||
                        0x0
                    )
                  )
              )["join"](_0x59847a(0x231)) +
              _0x59847a(0x2a7) +
              censurarValor(parseFloat(_0x309159[_0x59847a(0x256)] || 0x0)) +
              "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22><strong>Impuesto:</strong></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22text-end\x22>$" +
              censurarValor(
                parseFloat(
                  _0x309159["or_totalImp"] || _0x309159[_0x59847a(0x19e)] || 0x0
                )
              ) +
              _0x59847a(0x228) +
              censurarValor(
                parseFloat(
                  _0x309159["or_totalFinal"] || _0x309159["or_total"] || 0x0
                )
              ) +
              "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
            : _0x59847a(0x221)) +
          _0x59847a(0x291)) +
      _0x59847a(0x1b7),
    _0x14a275 = document[_0x59847a(0x222)](_0x59847a(0x25e));
  _0x14a275 && _0x14a275[_0x59847a(0x225)]();
  document[_0x59847a(0x1bb)][_0x59847a(0x194)]("beforeend", _0x4c7812);
  const _0x27fc8d = new bootstrap[_0x59847a(0x155)](
    document[_0x59847a(0x222)]("ticketDetalleModal")
  );
  _0x27fc8d[_0x59847a(0x1d1)](),
    document["getElementById"](_0x59847a(0x25e))[_0x59847a(0x202)](
      _0x59847a(0x217),
      () => {
        const _0x1e0359 = _0x59847a;
        document[_0x1e0359(0x222)](_0x1e0359(0x25e))["remove"]();
      }
    );
}
window["verTicket"] = verTicket;
