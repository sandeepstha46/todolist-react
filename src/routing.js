import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoApp from "./components/todoapp/todoapp";
import Navbar from "./components/navbar/navbar";
import TodoForm from "./components/todoapp/form";
import TodoList from "./components/todoapp/todolist";

function Routing(props) {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path={"/todo"} element={<TodoApp/>}></Route>
                    <Route exact path={"/form"} element={<TodoForm/>}></Route>
                    <Route exact path={"/todolist"} element={<TodoList/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Routing;