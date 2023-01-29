import style from './header.module.css';

export function Header() {
    return (
        <header className={style.header}>
            <img
                className={style.header_img}
                src="./assets/logo.png"
                alt='Logotipo de la api de pokemon "PokeApi"'
            />
        </header>
    );
}
