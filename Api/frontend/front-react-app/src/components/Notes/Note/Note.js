// komponent notatki
import React, { useState } from 'react';

function Note(props) {

    const [showDesc, setShowDesc] = useState(false);

    const toggleDesc = () => {
        setShowDesc(!showDesc);
    }

    return (
        <div className="note">
            <p onClick={() => toggleDesc()}>{props.title}</p>
            { showDesc && (
                <div className='description'>{props.body}</div>
            )}
            {/* {true ? (
                <div className='description'>{props.body}</div>
            ) : null} */}
            <button>edytuj</button>
            <button 
                className="delete" 
                onClick={() => props.onDelete(props.id)}>usuń 
            </button>   
        </div>
    );
}

export default Note;