import style from './decoration.module.css';

export function Decoration() {
    return (
        <div className={style.main_decoration}>
            <div className={style.main_decoration_div}>
                <div className={style.main_decoration_div_div}></div>
            </div>
        </div>
    );
}
