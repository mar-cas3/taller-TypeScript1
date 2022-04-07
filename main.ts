import { Serie } from "./serie.js";
import { series } from "./data.js";

let seriesTable: HTMLElement = document.getElementById("series")!;
// let seriesCaption: HTMLElement = document.getElementsByTagName("caption")[0]!;

showSeriesTable();

function showSeriesTable(): void {
    let seriesBody: HTMLElement = document.createElement("tBody");

    for (let serie of series) {
        let tElement: HTMLElement = document.createElement("tr");
        tElement.innerHTML = `<td>${serie.id}</td>
        <td style="font-style: bold"><a href=${serie.website}> ${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        seriesBody.appendChild(tElement);
    }
    seriesTable.appendChild(seriesBody);
}

function showStatNumSeason(): void {
    let totalSeries: number = 0;
    let totalSeason: number = 0;
    for (let serie of series) {
        totalSeries++;
        totalSeason += serie.seasons;
    }
    let avgSeason: number = totalSeason / totalSeries;


    // seriesCaption.innerHTML = `Seasons average: ${avgSeason}`;

}

