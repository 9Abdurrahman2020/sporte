import React from 'react';
import './Player.css';
import { useNavigate } from 'react-router-dom';

const Player = (props) => {

    console.log(props.player);

    const {name, img, Position, Nationality, id} = props.player;
console.log( props.player);


    const navigate = useNavigate();
  
    function detailsPlayer() {
      navigate(`/playerDetails/${id}`);
    }
  

    return (
        <div className='MainPlayer' onClick={
            () => {
                detailsPlayer(id);
            }}>
            <img style={{height: "400px"}} src={img} alt="" />


            <div className="Head">

            <div className="Number">
            <h1>{id}</h1>
            </div>
            <div className="Text">
            <h3>{name}</h3>
            <h5>{Position||Nationality}</h5>
            
            </div>

            </div>
            


        </div>
    );
};

export default Player;