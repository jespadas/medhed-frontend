import React from 'react';
import { shallow } from 'enzyme';
import { SimpleCard } from '../../components/SimpleCard';

describe('Test in <SimpleCard />', () => {

    const title = "the hospital title";

    const url = "https://localhost:3000/img.png";

    const handleButton = ()=>{};

    const description = 'this is the hospital description';

    const id = 1;

    const to = 'https://localhost:3000/img.png'

    const wrapper = shallow(<SimpleCard title={title} image={url} handleButton={handleButton} description={description} id={id} to={to} />);

    test('Should display the component', () => {

        expect(wrapper).toMatchSnapshot();

    })

})