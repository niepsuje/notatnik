import React from 'react';
import './Notes.css';
import Note from './Note/Note';
import NewNote from './NewNote/NewNote';
import EditNote from '../EditNote/EditNote';
import Modal from 'react-modal';

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
            ],
            showEditModal: false
        };
    }

    deleteNote(id) {
        console.log('usuwanie notatki: ', id);
        const notes = [...this.state.notes].filter(note => note.id !== id);   // id inne niż te które podam w parametrze
        this.setState({ notes });
    }

    addNote(note) {
        const notes = [...this.state.notes];  // dotychczasowy state notatek
        notes.push(note);                   // nowa notatka
        this.setState({ notes })            // nowy state
    }

    editNote(note) {
        const notes = [...this.state.notes];  // dotychczasowy state notatek
        const index = notes.findIndex(x => x.id === note.id);
        if (index >= 0) {
            notes[index] = note;
        }
        this.setState({ notes })
    }

    toggleModal() {
        this.setState({ 
            showEditModal: !this.state.showEditModal 
        });
    }

    editNoteHandler() {
        this.toggleModal();
    }

    render() {
        
        return (
        <div>
            <p>Moje notatki:</p>

            <NewNote 
                onAdd={(note) => this.addNote(note)}  // nazywamy sobie parametr który przekażemy - onAdd -> funkcja
            />

            <Modal
                isOpen={this.showEditModal}
                contentLabel="Edytuj notatki">
                <EditNote
                    onEdit={note => this.editNote(note)} />
            </Modal>

            {this.state.notes.map(note => (
                <Note 
                    key={note.id}
                    title={note.title}
                    body={note.body}
                    id={note.id}
                    onEdit={(note) => this.editNoteHandler(note)}
                    onDelete={(id) => this.deleteNote(note.id)}  />  // przekazuje funkcję deleteNote
               
            ))}


        </div>
        );
    }
}

export default Notes;



/// min 32.00 !!