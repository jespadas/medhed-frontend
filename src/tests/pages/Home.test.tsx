import React from 'react';
import { shallow } from "enzyme";
import Home from '../../pages/Home';

describe('Test in <Home />', () => {

    const wrapper = shallow(<Home />);

    test('Should be displayed correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

});