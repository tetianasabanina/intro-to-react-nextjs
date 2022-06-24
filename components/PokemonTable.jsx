import store from '../src/store';
import { observer } from 'mobx-react';

import PokemonRow from './PokemonRow';

const PokemonTable = () => {
	return (
		<table width='100%'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
				</tr>
			</thead>
			<tbody>
				{store.pokemon
					.filter(({ name: { english } }) =>
						english
							.toLocaleLowerCase()
							.includes(store.filter.toLocaleLowerCase())
					)
					.slice(0, 20)
					.map((pokemon) => (
						<PokemonRow
							key={pokemon.id}
							pokemon={pokemon}
							onSelect={(pokemon) => store.setSelectedPokemon(pokemon)}
						/>
					))}
			</tbody>
		</table>
	);
};

export default observer(PokemonTable);
