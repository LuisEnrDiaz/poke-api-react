import { PokemonList } from '../../../features/pokemon/components/pokemonList/pokemonList';
import { Layout } from '../layout/layout';
import './App.css';

function App() {
    return (
        <>
            <Layout>
                <PokemonList></PokemonList>
            </Layout>
        </>
    );
}

export default App;
