import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface Props {
	id: number
    title: string;
    description: string;
    image: string;
	subDescription: any;
}

export const ViewCard = ({title, description, image, subDescription} : Props) => {
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
                <Typography variant='body2' color='text.secondary'>
					{subDescription}
				</Typography>
			</CardContent>
		</Card>
	);
}
