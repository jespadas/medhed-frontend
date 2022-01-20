import axios from 'axios';
import { CreateReservationRest } from '../models/reservationModel';

const URL = 'http://localhost:8080/reservation-hospital/v1';

export const getHospitals = () => {
	return axios.get(URL + '/hospitals').then(({ data }): any => data);
};

export const getHospitalById = (id: number) => {
	return axios.get(URL + '/hospital/' + id).then(({ data }): any => data);
};

export const createReservation = (reservationData: CreateReservationRest) => {
	return axios.post(URL + '/reservation/', reservationData).then(({ data }): any => data);
};

export const getHospitalTest = async (category: string) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }t&limit=10&api_key=p7NVM3rUeuNOz6JB1NbW9Ube0AOa1ma3`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img: { id: any; title: any; images: { downsized_medium: { url: any; }; }; }) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;

};
