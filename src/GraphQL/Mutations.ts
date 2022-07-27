import { gql } from '@apollo/client';

export const CREATE_NOTE_MUTATIONS = gql`
	mutation {
		insert_notes_one(
			object: { text: "asad" }
			on_conflict: { constraint: notes_pkey }
		) {
			id
			text
		}
	}
`;
