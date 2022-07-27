import Note from './Note';
import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_NOTES } from '../GraphQL/Queries';

interface Note {
	text: String;
	id: Number;
}
const NotesList = () => {
	const [notes, setNotes] = useState<Note[]>([]);

	const { error, loading, data } = useQuery(GET_NOTES);
	useEffect(() => {
		if (data) {
			setNotes(data.notes);
			console.log(data.notes);
		}
	}, [data]);

	return (
		<div className="notes-list-section">
			<h2>Saved Notes</h2>
			{notes.map((note) => {
				return (
					<Note text={note.text} id={note.id} key={`${note.id}`} />
				);
			})}
		</div>
	);
};

export default NotesList;
