import React from 'react';
import TodoAction from "./todoAction";

function Todolist({toDos}) {
    console.log(toDos)
    return (
        <div>

            {toDos.map((toDo) =>(
                <TodoAction list={toDo.text}/>
            ))}

            {/*{names.map((name) => (*/}
            {/*    <ChildFile list={name.name} listan={name.age} />*/}
            {/*))}*/}
        </div>
    );
}

export default Todolist;
