import React, { useState } from 'react';
import Bill from '../Bill/Bill';

const EquallyInterface = () => {
    let [count, setCount] = useState(false);

    const [allInfo, setAllInfo] = useState({
        humanNum: 0,
        orderNum: 0,
        tipsNum: 0,
        deliveryNum: 0,
        percent: 0,
        sum: 0,
        sumPerPerson: 0,
    })

    const humansVal = event => {
        let allInfoCopy = {...allInfo};
        allInfoCopy.humanNum = event.target.value;
        setAllInfo(allInfoCopy);
    }
    const orderVal = event => {
        let allInfoCopy = {...allInfo};
        allInfoCopy.orderNum = event.target.value;
        setAllInfo(allInfoCopy);
    }
    const tipsVal = event => {
        let allInfoCopy = {...allInfo};
        allInfoCopy.tipsNum = event.target.value;
        setAllInfo(allInfoCopy);
    }
    const deliveryVal = event => {
        let allInfoCopy = {...allInfo};
        allInfoCopy.deliveryNum = event.target.value;
        setAllInfo(allInfoCopy);
    }

    const countOrder = () => {
        let allInfoCopy = {...allInfo};
        allInfoCopy.orderNum = Number(allInfoCopy.orderNum);
        allInfoCopy.deliveryNum = Number(allInfoCopy.deliveryNum);
        allInfoCopy.percent = allInfoCopy.orderNum / 100 * allInfoCopy.tipsNum;
        allInfoCopy.sum = allInfoCopy.orderNum + allInfoCopy.percent + allInfoCopy.deliveryNum;
        allInfoCopy.sumPerPerson = Math.floor(allInfoCopy.sum / allInfoCopy.humanNum); 
        setAllInfo(allInfoCopy);
        console.log(allInfoCopy);

        count = true;
        setCount(count);
    }

    let orderSum = null;
    if (count == true) {
        console.log(allInfo)
        orderSum = <Bill sum={allInfo.sum} humanNum={allInfo.humanNum} sumPerPerson={allInfo.sumPerPerson} />
    }

    return (
        <div>
            <p>Человек : <input onChange={humansVal.bind()} id="humans" type="number" min='1' /> чел</p>
            <p>Сумма заказа : <input onChange={orderVal.bind()} id="orderSum" type="number" min='10' /> сом</p>
            <p>Процент чаевых : <input onChange={tipsVal.bind()} id="tips" type="number" min="15" max="25" /> %</p>
            <p>Доставка : <input onChange={deliveryVal.bind()} id="delivery" type="number" min="1" /> сом</p>
            <button type="button" onClick={countOrder}>Рассчитать</button>
            {orderSum}
        </div>
    )




}

export default EquallyInterface;