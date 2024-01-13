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
      public release_date: string,
      public title: string,
      public video: boolean,
      public vote_average: number,
      public vote_count: number,
    ) {}
  }