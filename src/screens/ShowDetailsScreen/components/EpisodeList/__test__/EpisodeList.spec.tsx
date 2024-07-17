import React from 'react';
import { EpisodeList } from '../EpisodeList';
import { mocks } from './mocks';
import { showService } from '../../../../../services/show/showService';
import { screen, render } from 'test-utils';

describe('EpisodeList', () => {
  it('should show all episodes from first season', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
      seasonNames: ['1', '2'],
      seasons: {
        1: [mocks.episode1, mocks.episode2],
        2: [mocks.episode22, mocks.episode23],
      },
    });

    render(<EpisodeList show={mocks.show} />);

    // This line will wait until the element be rendered in the screen to move on the test
    await screen.findByText(mocks.episode1.name);

    expect(screen.getByText(mocks.episode1.name)).toBeTruthy();
    expect(screen.getByText(mocks.episode2.name)).toBeTruthy();
  });
});
