import { render } from '@testing-library/react';
import Image from '../image.jpg';
import { Zoom } from './';

describe('Test for zoom component', function () {

    it('should render zoom component', function () {
        const component = render(<Zoom image={Image}/>);
        expect(component).toMatchSnapshot();
    });

});