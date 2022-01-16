import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { getHospitals } from '../api/hospital';
import { ManageStatus, SimpleCard } from '../components';
import { HospitalState } from '../models/hospitalState';

function Home() {
	const [state, setState] = useState<HospitalState>({
		status: 'loading',
		data: [],
	});
	const getData = async () => {
		try {
      setState({ status: 'loading', data: [] });
			const response = await getHospitals();
			setState({ status: 'success', data: response.data });
		} catch (error) {
			setState({ status: 'error', data: [] });
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<ManageStatus status={state.status}>
			<Container maxWidth='lg'>
				<Grid container spacing={4}>
					{state.data.map((hospital) => (
						<Grid item lg={6} sm={4} xs={12} key={hospital.id}>
							<SimpleCard
								to={`detail/${hospital.id}`}
								title={hospital.name}
								description={hospital.address}
								image={hospital.image}
								handleButton={() => console.log('click')} id={0}							/>
						</Grid>
					))}
				</Grid>
			</Container>
		</ManageStatus>
	);
}

export default Home;
