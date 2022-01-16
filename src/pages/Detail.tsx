import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getHospitalById } from '../api/hospital';
import { DetailState } from '../models/detailState';
import { HospitalModel } from '../models/hospitalModel';
import { ViewCard } from '../components/ViewCard';

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
		<ViewCard
			title={hospital.name}
			description={hospital.description}
			subDescription={hospital.address}
			id={hospital.id}
			image={hospital.image}
		/>
	);
}

export default Detail;
