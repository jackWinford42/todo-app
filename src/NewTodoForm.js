import React, { useState } from "react";
import {v1 as uuidv1} from "uuid";

/** Returns a form for adding a new to do item.
 * 
 * @param {function} addTodo 
 */
function NewTodoForm(addTodo) {

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo.addTodo({ formData, id: uuidv1() });
        setFormData({todoText: ""})
        //setFormData(formData => {todoText: ""})
    };

    const [formData, setFormData] = useState({
        todoText: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        console.log(evt.target)
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };
    // end handleChange

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoText">To do:</label>
            <input
                id="todoText"
                name="todoText"
                value={formData.todoText}
                onChange={handleChange}
            />
            <button>Add a new to do</button>
        </form>
    );
};
// end

export default NewTodoForm;