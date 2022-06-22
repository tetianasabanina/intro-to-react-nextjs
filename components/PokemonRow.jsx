import Link from 'next/link';
import Button from '@mui/material/Button';
import PokemonType from '../src/PokemonType';
import store from '../src/store';

const PokemonRow = ({ pokemon, onSelect }) => (
	<tr>
		<td>
			<Link href={`/pokemon/${pokemon.id}`}>
				<a>{pokemon.name.english}</a>
			</Link>
		</td>
		<td>{pokemon.type.join(', ')}</td>
		<td>
			<Button variant='contained' onClick={() => onSelect(pokemon)}>
				More information
			</Button>
		</td>
	</tr>
);

PokemonRow.propTypes = {
	pokemon: PokemonType,
};

export default PokemonRow;
