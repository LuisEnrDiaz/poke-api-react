import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PokemonDetails from '../../../features/pokemon/components/pokemonDetails/pokemonDetails';
import { PokemonList } from '../../../features/pokemon/components/pokemonList/pokemonList';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/Details/:name" element={<PokemonDetails />}></Route>
            <Route path="" element={<PokemonList />}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
