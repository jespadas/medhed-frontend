import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { getHospitalById } from '../api/hospital';
import { DetailState } from '../models/detailState';
import { HospitalModel } from '../models/hospitalModel';
import { ViewCard } from '../components/ViewCard';
import { Form, ManageStatus } from '../components';

const initDetail: HospitalModel = {
	address: '',
	description: '',
	id: 0,
	image: '',
	name: '',
	shift: [],
};

function Detail() {
	const [state, setState] = useState<DetailState>({
		status: 'loading',
		data: initDetail,
	});
	const hospital = state.data;
	const { idHospital } = useParams<any>();

	useEffect(() => {
		const getHospital = async () => {
			try {
				setState({ status: 'loading', data: initDetail });
				const response = await getHospitalById(idHospital);
				setState({ status: 'success', data: response.data });
			} catch (error) {
				setState({ status: 'error', data: initDetail });
			}
		};

		getHospital();
	}, [idHospital]);

	return (
		<ManageStatus status={state.status}>
			<div
				style={{
					backgroundImage: 'url(' + hospital.image + ')',
					height: '100vh',
					width: '100vw',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<Container
					maxWidth='lg'
					sx={{
						paddingTop: '5vh',
					}}
				>
					<Grid container spacing={5} justifyItems={'center'}>
						<Grid item xs={12} sm={6} sx={{ maxWidth: '30em' }}>
							<ViewCard
								id={hospital.id}
								image={hospital.image}
								title={hospital.name}
								description={hospital.description}
								subDescription={hospital.address}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</div>
		</ManageStatus>
	);
}

export default Detail;
