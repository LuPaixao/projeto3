import { Pais } from "./models/constructor.js";

const paisLista = [
    new Pais (
        [{ common: "Brazil", official: "Federative Republic of Brazil" }],true, true, "Brasilia",
        "Americas", "South America", "Portuguese", 
        [{ latlng1: -10, latlng2: -55}],
        [{ borders: "ARG"}, { borders: ", BOL"}, { borders: ", COL"}, { borders: ", GUF"}, { borders: ", GUY"}, { borders: ", PRY"}, { borders: ", PER"}, { borders: ", SUR"}, { borders: ", URY"}, { borders: ", VEN"}],
        8515767, 212559409, [{ timezone: "UTC-05:00"}, { timezone: "UTC-03:00"}, { timezone: "UTC-02:00"}],
        [{ png: "https://flagcdn.com/w320/br.png", svg: "https://flagcdn.com/br.svg"}]
    )
]