import React from 'react';

const EachPersonInput = props => {

    return (
        <div>
            <p>Имя : <input type="text" onChange={props.onNameChange} value={props.value}/></p> 
            <p><input type="number" onChange={props.onCashChange} cash={props.cash}/> сом</p>
            <button onClick={props.del}>Delete</button>
        </div>
    )
}

export default EachPersonInput;