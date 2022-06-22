import { makeAutoObservable, observable, computed } from 'mobx';

class Store {
	pokemon = [];
	filter = '';
	selectedPokemon = null;

	constructor() {
		makeAutoObservable(this, {
			pokemon: observable,
			filter: observable,
			selectedPokemon: observable,
			filteredPokemon: computed,
		});
	}

	get filteredPokemon() {
		return this.pokemon.filter((pokemon) =>
			pokemon.name.english.toLowerCase().includes(this.filter.toLowerCase())
		);
	}
	setPokemon(pokemon) {
		this.pokemon = pokemon;
	}
	setFilter(filter) {
		this.filter = filter;
	}
	setSelectedPokemon(selectedPokemon) {
		this.selectedPokemon = selectedPokemon;
	}
}

const store = new Store();

if (typeof window !== 'undefined') {
	fetch('/pokemon.json')
		.then((resp) => resp.json())
		.then((pokemon) => store.setPokemon(pokemon));
}

export default store;
