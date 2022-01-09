import React, {useState} from 'react';
import Form from "./form";
import Todolist from "./todolist";

function Todoapp(props) {
    const [inputText, setInputText] = useState("");
    const [toDos, setToDos] = useState([]);
    return (
        <div>
            <header>
                <h1>hello {inputText} </h1>
            </header>
            <Form inputText={inputText} setInputText={setInputText} toDos={toDos} setToDos={setToDos} />
            <Todolist toDos={toDos}/>
        </div>
    );
}

export default Todoapp;