import {
	CssBaseline,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from '@mui/material';
import styled from '@emotion/styled';
import { withRouter } from 'next/router';

import store from '../../src/store';

const Container = styled.div`
	margin: auto;
	width: 800px;
	padding-top: 1em;
`;

export default withRouter(({ router }) => {
	const pokemon = store.pokemon.find(
		({ id }) => id.toString() === router.query.id
	);
	return (
		<Container>
			<CssBaseline>
				{pokemon && (
					<>
						<h1>{pokemon.name.english}</h1>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Attribute</TableCell>
									<TableCell>Value</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{Object.keys(pokemon.base).map((k) => (
									<TableRow key={k}>
										<TableCell>{k}</TableCell>
										<TableCell>{pokemon.base[k]}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</>
				)}
			</CssBaseline>
		</Container>
	);
});
