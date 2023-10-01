import style from './style.module.css'
import { useState,useEffect } from 'react'
import memeData from '../memeData.js'
import cx from 'classnames'

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
 
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className={style.form}>
                <input 
                    type="text"
                    placeholder="Top text"
                    className={style.formInput}
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className={style.formInput}
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className={style.formButton}
                    onClick={getMemeImage}
                >
                    Get a new meme image. 🖼
                </button>
                <div className={style.meme} >
                    <img src={meme.randomImages} className={style.imageContainer} alt="Meme image" />
                    <h2 className={ cx(style.memeText, style.top) } >{meme.topText}</h2>
                    <h2  className={cx(style.memeText, style.bottom) } >{meme.bottomText}</h2>
                </div>
            </div>
        </main>



    )
}

export default Meme