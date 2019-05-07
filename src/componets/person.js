import React from 'react';

const PersonCmp = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h5>{props.age}</h5>
        </div>
    )
}

export default PersonCmp;