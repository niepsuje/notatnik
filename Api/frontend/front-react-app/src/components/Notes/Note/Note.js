// komponent notatki
import React from 'react';

function Note(props) {

      // przekazuje z dziecka id do komponentu Notes

    return (
        <div className="note">
            <p>{props.title}</p>
            <div className='description'>{props.body}</div>
            <button>edytuj</button>
            <button 
                className="delete" 
                onClick={() => props.onDelete(props.id)}>usuń 
            </button>   
        </div>
    );
}

export default Note;