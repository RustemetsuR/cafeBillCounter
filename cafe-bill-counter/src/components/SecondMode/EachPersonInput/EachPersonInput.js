import React from 'react';
import './EachPersonInput.css';

const EachPersonInput = props => {

    return (
        <div>
            <p className="p-name">Имя : <input className="input-name" type="text" onChange={props.onNameChange} value={props.value}/></p> 
            <p className="p-cash"><input type="number" className="input-cash" onChange={props.onCashChange} cash={props.cash}/> сом</p>
            <button className="del-btn" onClick={props.del}>Delete</button>
        </div>
    )
}

export default EachPersonInput;