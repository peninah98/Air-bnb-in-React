import style from './style.module.css'

import memeData from '../memeData.js'
let url
const getMemeImage = () =>{
    const memesArray = memeData.data.memes
    const randomMeme = Math.floor(Math.random() * memesArray.length)
    console.log(randomMeme);
    url = memesArray[randomMeme].url 
    console.log(url);
}
const Meme = () =>{
    return (
        <main>
            <div className={style.form}>
                <input 
                    type="text"
                    placeholder="Top text"
                    className={style.formInput}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className={style.formInput}
                />
                <button 
                    className={style.formButton}
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}

export default Meme