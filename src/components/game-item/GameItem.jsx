import React from 'react'
import './GameItem.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentGame } from '../../store/gameSlise/getGameSlise'
import Button from '../button/Button'

const GameItem = ({item, id}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const gamePageClick = () =>{
        dispatch(setCurrentGame(item))
        navigate(`/${item.title}`)
    }
    return (<>
            <div className="game-item">   
                <img className="game-item__img" src={item.image} alt=""  onClick={gamePageClick}/>
                <div className="game-item__content">
                    <h2 className="game-item__title">{item.title}</h2><br/>
                    <div className="game-item__buy">
                        <span className="game-item__price">{item.price} руб</span>
                        <Button id={id} item={item} />
                    </div>
                </div>
            </div>
</>)
}
export default GameItem
