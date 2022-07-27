import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface INote {
	text: String;
	id: Number;
}

const Note = ({ text, id }: INote) => {
	return (
		<div className="note note-item">
			<Card sx={{ width: 'auto' }}>
				<CardActionArea>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							{text}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default Note;
