import React from 'react';

const BillForOnePerson = props => {
    const displayInline = {display: 'inline-block',marginRight: '10px'};
    return (
        <div>
            <p style={displayInline}>{props.name}:</p>
            <p style={displayInline}>{props.sum} сом</p>
        </div>
    )
}

export default BillForOnePerson;