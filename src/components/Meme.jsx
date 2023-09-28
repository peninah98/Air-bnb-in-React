import style from './style.module.css'
import { useState } from 'react'
import memeData from '../memeData.js'

const Meme = () =>{
    // const [memeImage,setMemeImage] = useState("")
    const [meme,setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImages :  "http://i.imgflip.com/1bij.jpg" 
    })
    const getMemeImage = () =>{
        const memesArray = memeData.data.memes
        const randomMeme = Math.floor(Math.random() * memesArray.length)
        const url =  memesArray[randomMeme].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImages:url
        }))
    }
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
                    Get a new meme image. 🖼
                </button>
                <div >
                    <img src={meme.randomImages} className={style.imageContainer} alt="Meme image" />
                </div>
            </div>
        </main>
    )
}

export default Meme