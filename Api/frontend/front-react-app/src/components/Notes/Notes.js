import React from 'react';
import './Notes.css';
import Note from './Note/Note';

// komponent klasowy

class Notes extends React.Component {
    constructor(props) {
        super(props);
        ///
        this.state = {
            notes: [
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
            ]
        };
    }

    deleteNote(id) {
        console.log('usuwanie notatki: ', id);
        const notes = [...this.state.notes].filter(note => note.id !== id);   // id inne niż te które podam w parametrze
        this.setState({ notes });
    }

    render() {
        
        return (
        <div>
            <p>Moje notatki:</p>

            {this.state.notes.map(note => (
                <Note 
                    key={note.id}
                    title={note.title}
                    body={note.body}
                    id={note.id}
                    onDelete={(id) => this.deleteNote(note.id)}  />  // przekazuje funkcję deleteNote
               
            ))}


        </div>
        );
    }
}

export default Notes;
