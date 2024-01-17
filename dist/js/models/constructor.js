class Ability {
    constructor(ability) {
        this.ability = ability;
    }
}
class Stat {
    constructor(base_stat, stat) {
        this.base_stat = base_stat;
        this.stat = stat;
    }
}
export class Pokemon {
    constructor(id, name, base_experience, height, weight, legendary, firstAppearance, abilities, stats) {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        this.height = height;
        this.weight = weight;
        this.legendary = legendary;
        this.firstAppearance = firstAppearance;
        this.abilities = abilities;
        this.stats = stats;
    }
}
/* Isso foi eu tentando criar uma classe image para receber a url q eu por no movie.ts
e ele aceitar, porém já tava quebrando a cabeça dms, e fui alertada que era só deixar realmente
como string

class Image{
  url: string;
  //url = "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg";
  constructor(url: string){
    this.url = url;
  }
}
*/
export class Movie {
    constructor(adult, backdrop_path, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count) {
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
}
class Names {
    constructor(common, official) {
        this.common = common;
        this.official = official;
    }
}
class Latlngs {
    constructor(latlng) {
        this.latlng = latlng;
    }
}
class Borders {
    constructor(borders) {
        this.borders = borders;
    }
}
class Timezones {
    constructor(timezones) {
        this.timezones = timezones;
    }
}
class FLags {
    constructor(png, svg) {
        this.png = png;
        this.svg = svg;
    }
}
export class Pais {
    constructor(name, independent, unMember, capital, region, subregion, languages, latlng, borders, area, population, timezones, flags) {
        this.name = name;
        this.independent = independent;
        this.unMember = unMember;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.latlng = latlng;
        this.borders = borders;
        this.area = area;
        this.population = population;
        this.timezones = timezones;
        this.flags = flags;
    }
}
