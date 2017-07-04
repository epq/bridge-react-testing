import React from 'react';
import {shallow} from 'enzyme';
import Cat from './cat';
import CatsList from './cats-list';

// run using "npm run test"
describe('cat component tests', () => {
    const props = {
        name: "Medina",
        picture: "http://medinacat.ca/medina.jpg",
    };

    const catList =[
        {
            name: "Medina",
            picture: "http://medinacat.ca/medina.jpg",
        },
        {
            name: "Aleefa",
            picture: "http://aleefacat.ca/aleefa.jpg",
        },
        {
            name: "Ying",
            picture: "http://yingcat.ca/ying.jpg",
        }
    ];

    it('should render the cat\'s name', () => {
        const wrapper = shallow(<Cat {...props} />);
        const name = 'Medina';
        expect(wrapper.contains(name)).toEqual(true);
    });

    it('should render the cat\'s image', () => {
        const wrapper = shallow(<Cat { ...props } />);
        const image = <img className='cat-img' src={ props.picture } />;
        expect(wrapper.contains(image)).toEqual(true);
    });

    it('should render the correct number of cats', () => {
        const wrapper = shallow(<CatsList cats ={catList} />);
        expect(wrapper.find(Cat)).toHaveLength(catList.length);
    });
});

