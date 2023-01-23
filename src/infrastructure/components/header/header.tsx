import PokePage from '../../../features/pokemon/pokePage/pokePage';

export function Header() {
    const title = 'Pokemon';

    return (
        <>
            <h1>{title}</h1>
            <PokePage></PokePage>
        </>
    );
}
