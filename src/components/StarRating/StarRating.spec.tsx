import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { StarRating } from './StarRating';

describe('StarRating', () => {
  describe('rating was passed', () => {
    it('should render average text correctly', () => {
      render(<StarRating rating={{ average: 8 }} />);
      const element = screen.getByText('8');
      expect(element).toBeTruthy();
    });

    it('should render average icon correctly', () => {
      render(<StarRating rating={{ average: 2 }} />);
      const element = screen.getByTestId('startIcon');
      expect(element).toBeTruthy();
    });
  });
});
