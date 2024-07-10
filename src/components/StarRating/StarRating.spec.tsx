import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from './StarRating';

describe('StarRating', () => {
  it('should render component correctly', () => {
    render(<StarRating rating={{average: 8}} />);
  });
});
