import React, { createRef } from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react-native';
import { SeasonModal } from './SeasonModal';
import { Modalize } from 'react-native-modalize';

describe('SeasonModal', () => {
  it('should render correctly', () => {
    const modalizeRef = createRef<Modalize>();
    render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={() => {}}
      />,
    );
    act(() => {
      modalizeRef.current?.open();
    });
    expect(screen.getByTestId('season-modal')).toBeTruthy();
  });

  it('should render all season options', () => {
    const modalizeRef = createRef<Modalize>();
    render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={() => {}}
      />,
    );
    act(() => {
      modalizeRef.current?.open();
    });

    expect(screen.getAllByText(/season/i).length).toEqual(3);
  });

  it('should call onSelectSeason with correct season when season option was pressed', () => {
    const modalizeRef = createRef<Modalize>();
    const onSelectSeasonMock = jest.fn();

    render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={onSelectSeasonMock}
      />,
    );
    act(() => {
      modalizeRef.current?.open();
    });

    const season1Element = screen.getByText(/season 1/i);
    fireEvent.press(season1Element);

    expect(onSelectSeasonMock).toBeCalledWith('1');
  });
});
