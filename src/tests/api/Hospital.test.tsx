import { getHospitalTest } from '../../api/hospital';

describe('Pruebas en GetGifs.js', () => {

    test('Should return a responde data', async () => {

        const response = await getHospitalTest('hospital');

        expect(response.length).toBe(10);

    })

})