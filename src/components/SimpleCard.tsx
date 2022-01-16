import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
    title: string;
    description: string;
    image: string;
    handleButton: () => void;
}

export const SimpleCard = ({title, description, image, handleButton} : Props) => {
	return (
		<Card sx={{ minWidth: 200 }}>
			<CardMedia
				component='img'
				height='140'
				image={image}
				alt='hospital'
                title={title}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small' onClick={handleButton}>Login</Button>
			</CardActions>
		</Card>
	);
}
