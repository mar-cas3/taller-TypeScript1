import { series } from "./data.js";
var seriesTable = document.getElementById("series");
mostrarTablaSeries();
function mostrarTablaSeries() {
    var seriesBody = document.createElement("tBody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        console.log(serie);
        var tElement = document.createElement("tr");
        tElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td style=\"font-style: bold\"><a href=").concat(serie.website, "> ").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesBody.appendChild(tElement);
    }
    seriesTable.appendChild(seriesBody);
}
