import React from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NoteList';
import Container from '@mui/material/Container';
import './App.css';

function App() {
	return (
		<div className="App">
			<Container maxWidth="md">
				<h1>Auctree Notes App</h1>
				<AddNote />
				<hr />
				<NotesList />
			</Container>
		</div>
	);
}

export default App;
