import { Pais } from "./models/constructor.js";
const paisLista = [
    new Pais([{ common: "Brazil", official: "Federative Republic of Brazil" }], true, true, "Brasilia", "Americas", "South America", "Portuguese", [{ latlng1: -10, latlng2: -55 }], [{ borders: "ARG, BOL, COL, GUF, GUY, PRY, PER, SUR, URY, VEN" }], 8515767, 212559409, [{ timezone: "UTC-05:00, UTC-03:00, UTC-02:00" }], "https://flagcdn.com/w320/br.png", "https://flagcdn.com/br.svg")
];
function exibirPais() {
    paisLista.forEach(pais => {
        const tdPaisName = document.querySelector(`#pais_name`);
        for (const pais of paisLista) {
            for (const common of pais.name) {
                tdPaisName.textContent = common.common;
            }
        }
        const tdPaisNameOfc = document.querySelector(`#pais_name_ofc`);
        for (const pais of paisLista) {
            for (const official of pais.name) {
                tdPaisNameOfc.textContent = official.official;
            }
        }
        const tdPaisIndependent = document.querySelector('#pais_independent');
        for (const pais of paisLista) {
            const paisIndependent = pais.independent;
            tdPaisIndependent.innerHTML = paisIndependent.toString();
        }
        const tdPaisUnMember = document.querySelector('#pais_unMember');
        for (const pais of paisLista) {
            const paisUnMember = pais.unMember;
            tdPaisUnMember.innerHTML = paisUnMember.toString();
        }
        const tdPaisCapital = document.querySelector(`#pais_capital`);
        const paisCapital = pais.capital;
        tdPaisCapital.textContent = paisCapital;
        const tdPaisRegion = document.querySelector(`#pais_region`);
        const PaisRegion = pais.region;
        tdPaisRegion.textContent = PaisRegion;
        const tdPaisSubregion = document.querySelector(`#pais_subregion`);
        const PaisSubregion = pais.subregion;
        tdPaisSubregion.textContent = PaisSubregion;
        const tdPaisLanguages = document.querySelector(`#pais_languages`);
        const PaisLanguages = pais.languages;
        tdPaisLanguages.textContent = PaisLanguages;
        const tdPaisLatlng = document.querySelector(`#pais_latlng1`);
        for (const pais of paisLista) {
            for (const latlng of pais.latlng) {
                tdPaisLatlng.textContent = latlng.latlng1.toString();
            }
        }
        const tdPaisLatlng2 = document.querySelector(`#pais_latlng2`);
        for (const pais of paisLista) {
            for (const latlng of pais.latlng) {
                tdPaisLatlng2.textContent = latlng.latlng2.toString();
            }
        }
        const tdPaisBorders = document.querySelector(`#pais_borders`);
        for (const pais of paisLista) {
            for (const borders of pais.borders) {
                tdPaisBorders.textContent = borders.borders;
            }
        }
        const tdPaisArea = document.querySelector(`#pais_area`);
        const paisArea = pais.area.toString();
        tdPaisArea.textContent = paisArea;
        const tdPaisPopulation = document.querySelector(`#pais_population`);
        const paisPopulation = pais.population.toString();
        tdPaisPopulation.textContent = paisPopulation;
        const tdPaisTimezones = document.querySelector(`#pais_timezones`);
        for (const pais of paisLista) {
            for (const timezones of pais.timezone) {
                tdPaisTimezones.textContent = timezones.timezone;
            }
        }
        const tdPaisFlagPng = document.getElementById("pais_flag_png");
        const paisFlagPng = paisLista.find(pais => pais.capital === "Brasilia");
        tdPaisFlagPng.textContent = paisFlagPng.flagPng;
        const tdPaisFlagSvg = document.getElementById("pais_flag_svg");
        const paisFlagSvg = paisLista.find(pais => pais.capital === "Brasilia");
        tdPaisFlagSvg.textContent = paisFlagSvg.flagSvg;
        /* Imprimir a bandeira do Brasil
        const selectedMovie = paisLista.find(pais => pais.capital === "Brasilia");
        const img = document.createElement("img");
        img.src = selectedMovie.flagPng;
        document.body.appendChild(img);
        */
    });
}
window.addEventListener('DOMContentLoaded', exibirPais);
