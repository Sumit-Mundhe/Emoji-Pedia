import React from "react";
import ReactDom from "react-dom";

function Cards(props){
    return(
        <div className="card">
            <h1>{props.emoji}</h1>
            <h2 className="emo-name">{props.name}</h2>
            <p>{props.ds}</p>
        </div>
    )
}

export default Cards