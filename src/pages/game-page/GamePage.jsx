import React from 'react'
import './GamePage.css'
import { useSelector } from 'react-redux'
import Button from '../../components/button/Button'

const GamePage = () => {
    const item = useSelector(state => state.game.gameState)
    return (<>
        <div className="game-page">
            { item.id 
                ?
                <h1 className="game-page__title">{ item.title }</h1>
                :
                <h2>Выйдите в главное меню</h2>
            }
                <div className="game-page__content">
                { item.id
                    ?
                    <div className="game-page__left">
                        <iframe
                            width="90%"
                            height="400px"
                            src={item.video}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                      :
                     null
                    }
                    { item.id  
                        ? 
                    <div className="game-page__right">
                    <img className="game-item__img" src={item.image} alt="" />
                            <p>{item.description}</p>
                           <p>Метки для этого продукта:</p>
                            {
                        item.genres.map((genre, id) =>
                            (
                                <div key={`${id}_${genre}`} className="genres-item">
                                    <span key={`${id}_${genre}`} className="genres-items">{genre}</span>
                                </div>
                            )
                            )
                    }
                        <div className="game-page__buy-game">
                            <span className="game-item__price">{item.price} руб</span>
                            <Button item={item} id={item.id}/>
                        </div>
                    </div>
                       :
                       null
                     }
                </div>
              
        </div>
</>)
}
export default GamePage
