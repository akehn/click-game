import React from "react";
import "./symbol.css";

const SymbolCard = props => (
        <button onClick={() => props.handleOnchange(props.id, props.definition)}>
                <div className="cards">
                        <div className="img-container">
                                <img id={props.id} alt={props.name} src={props.image} />
                        </div>
                </div>
        </button>
);

export default SymbolCard;
