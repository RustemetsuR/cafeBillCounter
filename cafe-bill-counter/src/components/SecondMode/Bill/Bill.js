import React from 'react';
import BillForOnePerson from '../BillForOnePerson/BillForOnePerson';

const Bill = props => {
    const allCountsPersons = props.persons.map(person =>{
        return <BillForOnePerson key={person.id} name={person.name} sum={person.cash}/>
    })
    return (
        <div>
            <p>Общая сумма : {props.sum}</p> 
            {allCountsPersons}
        </div>
    )
}

export default Bill;