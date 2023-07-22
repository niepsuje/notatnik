import React, { useState } from 'react';

function EditNote(props) {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const changeTitleHandler = (event) => {
        const value = event.target.value;
        setTitle(value);
    }
    const changeDescHandler = (event) => {
        const value = event.target.value;
        setDesc(value);
    }
    const editNote = () => {

    }

    return(
        <div className="note">
            <label>Tytuł</label>
            <input type="text" 
                value={title} 
                onChange={changeTitleHandler} />
            <br/>
            <label>Opis:</label>
            <input type="text"
                value={desc} 
                onChange={changeDescHandler} />

            <button onClick={() => editNote()}>Zapisz</button>
        </div>
    );
}

export default EditNote;