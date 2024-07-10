import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { StarRating } from './StarRating';

describe('StarRating', () => {
  describe('rating was passed', () => {
    it('should render average text correctly', () => {
      render(<StarRating rating={{ average: 8 }} />);
      expect(screen.getByText('8')).toBeTruthy();
    });

    it('should render average icon correctly', () => {
      render(<StarRating rating={{ average: 8 }} />);
      expect(screen.getByTestId('start-icon')).toBeTruthy();
    });
  });

  describe('rating was NOT passed', () => {
    it('should not render rating component', () => {
      render(<StarRating />);
      expect(screen.root).toBeUndefined();
    });
  });
});
