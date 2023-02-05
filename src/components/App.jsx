import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import emojis from "../emojis.js"
import Cards from "./Cards";

function createCard(emoji){
    return (
    <Cards
         key={emoji.id}
         name={emoji.name}
         emoji={emoji.emoji}
         ds={emoji.ds}
    />)
}


const new_emoji = emojis.map( obj => obj.ds.substring(0,50));

console.log(new_emoji)

function App(){
    return(
        <div className="main">
            <Header />
            <div className="maincard">
                {emojis.map(emoji=>(
                    <Cards
                       key={emoji.id}
                       name={emoji.name}
                       emoji={emoji.emoji}
                       ds={emoji.ds}
                    />
                ))}
            </div>
        </div>
    )
}

export default App