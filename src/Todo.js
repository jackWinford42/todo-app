import React from "react";

/** A Todo item/point on the greater todo list 
 * 
 */
function Todo({id, text, handleRemove}) {
    console.log(text)
    const remove = () => handleRemove(id);
    return (
        <>
            <div className="Todo">
                {text}
                <button onClick={remove}>X</button>
            </div>
        </>
    );
}

export default Todo;