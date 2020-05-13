export class PokemonAbilityAttribute {
    constructor({name = "", url = ""}) {
        this.name = name;
        this.url = url;
    }
}

export const pokemonAbilityDefaultOptions = {
    ability: new PokemonAbilityAttribute({url: "", name: ""}),
    isHidden: true,
    slot: 0
};

export class PokemonAbility {
    constructor(options = pokemonAbilityDefaultOptions) {
        this.ability = options.ability;
        this.isHidden = options.isHidden;
        this.slot = options.slot;
    }
}

export class PokemonStatAttribute {
    constructor({name = "", url = ""}) {
        this.name = name;
        this.url = url;
    }
}

export class PokemonMove {
    constructor({name = "", url = ""}) {
        this.name = name;
        this.url = url;
    }
}

export const pokemonStatDefaultOptions = {
    baseStat: 0,
    effort: 0,
    stat: new PokemonStatAttribute({name: "", url: ""})
};

export class PokemonStat {
    constructor(options = pokemonStatDefaultOptions) {
        this.baseStat = options.baseStat;
        this.effort = options.effort;
        this.stat = options.stat;
    }
}

export class PokemonType {
    constructor({name = "", url = ""}) {
        this.name = name;
        this.url = url;
    }
}

export const pokemonDefaultOptions = {
    name: "",
    id: 0,
    baseExperience: 0,
    height: 0,
    stats: [new PokemonStat({baseStat: 0, effort: 0, stat: 0})],
    moves: [new PokemonMove({name: "", url: ""})],
    types: [new PokemonType({name: "", url: ""})],
    abilities: [
        new PokemonAbility({
            ability: [new PokemonAbilityAttribute({name: "", url: ""})],
            isHidden: false,
            slot: 0,
        })
    ],
};

export class Pokemon {
    constructor(options = pokemonDefaultOptions) {
        this.name = options.name;
        this.height = options.height;
        this.baseExperience = options.baseExperience;
        this.id = options.id;
        this.stats = options.stats;
        this.moves = options.moves;
        this.types = options.types;
        this.abilities = options.abilities;
    }

    saludar() {
        console.log(this.id);
    }
}