import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import * as React from 'react';

interface Props {
	id: number;
	title: string;
	description: string;
	image: string;
	subDescription: any;
}

const styles = {
	media: {
		height: '100%',
	},
};

export const ViewCard = ({
	title,
	description,
	image,
	subDescription,
}: Props) => {
	return (
		<Card sx={{ minWidth: 250, padding: '1em' }}>
			<CardActionArea>
				<CardMedia
					//sx={{ height: '70vh' }}
					classes={styles.media}
					component='img'
					image={image}
					alt='hospital'
					title={title}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{title}
					</Typography>
					<Typography variant='body1' color='text.secondary' component='p'>
						{description}
					</Typography>
					<Typography variant='body1' color='text.secondary' component='p'>
						{subDescription}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
