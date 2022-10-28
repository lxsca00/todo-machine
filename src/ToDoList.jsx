import React from "react";

const ToDoList = ({children}) => (
    <section>
        <ul>
            {children}
        </ul>
    </section>
)

export {ToDoList}