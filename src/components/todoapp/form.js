import React from 'react';
import {Button, Container} from "@material-ui/core";
import "./todo.css";

function Form({setInputText, inputText, toDos, setToDos}) {

const inputTextHandler = (e) => {
    setInputText(e.target.value);
}

const outputHandler = (e) => {
    setToDos([
        ...toDos, {text: inputText}
    ]);
    setInputText("");
}
    return (
        <div>
            <Container fixed>
            <div className={"form-css"}>
                <h3> Todo App</h3>
                <form onSubmit={(e) => {e.preventDefault();}}>
                    <input onChange={inputTextHandler} type={"text"} name={"text"}></input>
                    {/*<button type="submit" className="btn btn btn-primary">Add</button>*/}
                    <Button onClick={outputHandler} id={"button"} variant={"contained"}>Submit</Button>
                </form>
            </div>
            </Container>
        </div>
    );
}

export default Form;