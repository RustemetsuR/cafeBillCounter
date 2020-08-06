import React, { useState } from 'react';
import EachPersonInput from '../EachPersonInput/EachPersonInput';
import Bill from '../Bill/Bill';

const EachPersonInterface = () => {

    let [count, setCount] = useState(false);

    const [allInfo, setAllInfo] = useState({
        sum: 0,
        tipsNum: 0,
        deliveryNum: 0,
        percent: 0,
    });

    const [everyPerson, setEveryPerson] = useState([]);

    const tipsVal = event => {
        let allInfoCopy = { ...allInfo };
        allInfoCopy.tipsNum = event.target.value;
        parseInt(allInfoCopy.tipsNum);
        setAllInfo(allInfoCopy);
    }
    const deliveryVal = event => {
        let allInfoCopy = { ...allInfo };
        allInfoCopy.deliveryNum = event.target.value;
        parseInt(allInfoCopy.deliveryNum);
        setAllInfo(allInfoCopy);
    }

    const add = () => {
        const everyPersonCopy = [...everyPerson];
        let time = new Date();

        everyPersonCopy.push({
            name: '',
            cash: 0,
            id: time.getMilliseconds() + '' + time.getSeconds(),
        })
        setEveryPerson(everyPersonCopy);
    }
    const del = id => {
        let index = everyPerson.findIndex(p => p.id === id);
        const everyPersonCopy = [...everyPerson];
        everyPersonCopy.splice(index, 1);
        setEveryPerson(everyPersonCopy);
    }

    const changeName = (event, id) => {
        let index = everyPerson.findIndex(p => p.id === id);
        const everyPersonCopy = [...everyPerson];
        everyPersonCopy[index].name = event.target.value;

        setEveryPerson(everyPersonCopy);
        console.log(everyPerson);
    }

    const changeCash = (event, id) => {
        let index = everyPerson.findIndex(p => p.id === id);
        const everyPersonCopy = [...everyPerson];
        everyPersonCopy[index].cash = event.target.value;

        setEveryPerson(everyPersonCopy);
        console.log(everyPerson);
    }

    const countCash = () =>{
        allInfo.deliveryNum = allInfo.deliveryNum / everyPerson.length;
        for(let i = 0; i < everyPerson.length; i++){
            allInfo.sum = parseInt(allInfo.sum) + parseInt(everyPerson[i].cash) ;
            everyPerson[i].cash = parseInt(everyPerson[i].cash)  / 100 * parseInt(allInfo.tipsNum)+ parseInt(everyPerson[i].cash) + allInfo.deliveryNum;
            everyPerson[i].cash = Math.round(everyPerson[i].cash);
        }
        allInfo.percent = parseInt(allInfo.sum)  / 100 * parseInt(allInfo.tipsNum) ;
        allInfo.sum = parseInt(allInfo.sum)  + parseInt(allInfo.percent) + parseInt(allInfo.deliveryNum);
        setAllInfo(allInfo);
        setEveryPerson(everyPerson);
        console.log(allInfo)
        console.log(everyPerson)
    }
    const list = everyPerson.map(person => {
        return <EachPersonInput key={person.id} cash={person.cash} val={person.name} del={() => del(person.id)} onCashChange={event => changeCash(event, person.id)} onNameChange={event => changeName(event, person.id)} />
    })
    const change = () => {
        count = true;
        setCount(count);
        countCash();
    }
    let sumCount = null;
    if (count == true) {
        sumCount = <Bill persons={everyPerson} sum={allInfo.sum}/>
    }
    
    return (
        <div>
            <button onClick={add}>+</button>
            {list}
            <p>Процент чаевых : <input onChange={tipsVal.bind()} id="tips" type="number" min="15" max="25" /> %</p>
            <p>Доставка : <input onChange={deliveryVal.bind()} id="delivery" type="number" min="1" /> сом</p>
            <button onClick={change}>Посчитать</button>
            {sumCount}
        </div>
    )




}

export default EachPersonInterface;