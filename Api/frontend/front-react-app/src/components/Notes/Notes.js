import React from 'react';
import './Notes.css'

// komponent klasowy
class Notes extends React.Component {
    render() {
        const notes = [
            {
                id: '2323',
                title: 'Wykąpać psa',
                body: 'pamiętaj żeby umyć Simbę specjalnym szamponem.'
            },
            {
                id: '4234',
                title: 'Zrobić zakupy',
                body: 'kupić mleko, masło, jaja, orzechy'
            }
        ];
        
        return (
        <div>
            <p>Moje notatki:</p>

            {notes.map(note => {
                return (
                    <div className="note">
                        <p>{note.title}</p>
                        <div className='description'>{note.body}</div>
                        <button>edytuj</button>
                        <button className="delete">usuń</button>
                    </div>

                )
            })}


        </div>
        );
    }
}

export default Notes;
