import React, {useState} from 'react';

function NewNote(props) {

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

    const addNote = () => {
        const note = {
            title: title,
            body: desc
        };
        props.onAdd(note);  // onAdd przekazuje tutaj z komponentu Notes.js

        setTitle('');
        setDesc('');
    }

    return (
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

            <button onClick={() => addNote()}>Dodaj notatkę</button>
        </div>
    );
}

export default NewNote;