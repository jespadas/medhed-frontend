import axios from 'axios';

const URL = 'http://localhost:8080/reservation-hospital/v1';

export const getHospitals = () => {
	return axios.get(URL + '/hospitals').then(({ data }): any => data);
};

export const getHospitalById = (id: number) => {
	return axios.get(URL + '/hospital/' + id).then(({ data }): any => data);
};
