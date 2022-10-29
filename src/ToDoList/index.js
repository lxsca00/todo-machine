import React from "react";
import './ToDoList.css'

const ToDoList = ({children}) => (
    <section>
        <ul>
            {children}
        </ul>
    </section>
)

export {ToDoList}