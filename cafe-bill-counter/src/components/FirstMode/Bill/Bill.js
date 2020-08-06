import React from 'react';

const EveryPerson = props => {

    return (
        <div>
            <p>Общая сумма : {props.sum} сом</p>
            <p>Количество Человек : {props.humanNum}</p>
            <p>Каждый платит по : {props.sumPerPerson} сом</p>
        </div>
    )


}

export default EveryPerson;