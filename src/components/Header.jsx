import style from './style.module.css'
const Header = ()=>{
    return (
        <header className={style.header}>
            <img 
                src="./images/tollFace.png" 
                className={style.headerImage}
            />
            <h2 className={style.headerTitle}>Meme Generator</h2>
            <h4 className={style.headerProject}>React Course - Project 3</h4>
        </header>
    )
}

export default Header 