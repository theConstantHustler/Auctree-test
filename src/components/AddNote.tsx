import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import React from 'react';
import Button from '@mui/material/Button';
import { useMutation, gql } from '@apollo/client';
import { CREATE_NOTE_MUTATIONS } from '../GraphQL/Mutations';

const AddNotes = () => {
	const [text, setText] = useState('');

	const [textError, setTextError] = useState(false);

	const handleSaveNote = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTextError(false);

		if (text == '') {
			setTextError(true);
		}

		resetForm();
	};

	const resetForm = () => {
		setText('');
	};

	return (
		<div className="add-note-section">
			<form
				noValidate
				onSubmit={(e) => handleSaveNote(e)}
				autoComplete="off"
				className="add-note-form"
			>
				<TextField
					className="note-body"
					required
					id="outlined-required"
					label="Note Text"
					multiline
					rows={5}
					fullWidth
					onChange={(e) => {
						setText(e.target.value);
					}}
					value={text}
					error={textError}
					inputProps={{ maxLength: 180 }}
				/>
				<Button
					className="btn"
					variant="contained"
					type="submit"
					style={{ margin: '20px' }}
				>
					Save Note
				</Button>
			</form>
		</div>
	);
};

export default AddNotes;
