import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('mounts without crashing', () => {
    mount(<Header />);
  });
});


