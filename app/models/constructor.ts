class Ability {
    constructor(public ability: string) {}
  }
  
  class Stat {
    constructor(public base_stat: number, public stat: string) {}
  }
  
export class Pokemon {
    constructor(
      public id: number,
      public name: string,
      public base_experience: number,
      public height: number,
      public weight: number,
      public legendary: boolean,
      public firstAppearance: Date,
      public abilities: Ability[],
      public stats: Stat[]
    ) {}
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
    constructor(
      public adult: boolean,
      public backdrop_path: string,
      public id: number,
      public original_language: string,
      public original_title: string,
      public overview: string,
      public popularity: number,
      public poster_path: string,
      public release_date: Date,
      public title: string,
      public video: boolean,
      public vote_average: number,
      public vote_count: number,
    ) {}
  }