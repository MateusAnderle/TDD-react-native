import { api } from '../../api';
import { episode1, episode2, episode22, episode23, episodeList } from './mocks';
import { showService } from '../showService';

describe('showService', () => {
  describe('getEpisodes', () => {
    beforeAll(() => {
      jest.spyOn(api, 'get').mockResolvedValue({ data: episodeList });
      // The function above is the short version of the function below (to only return value)
      //.mockImplementation(() => Promise.resolve({ data: episodeList }));
    });

    it('should return all season names when API was called', async () => {
      const groupedEpisodes = await showService.getEpisodes('250');

      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy(); // To verify the response. Is an array, but I test the results separatedly to insure the values, not the sort inside array.
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();
      expect(groupedEpisodes.seasonNames).toEqual(['1', '2']); // To verify the exact return of this service
      expect(groupedEpisodes.seasonNames.length).toBe(2); // To verify the length of return
    });

    it('should return episodes grouped by season', async () => {
      const groupedEpisodes = await showService.getEpisodes('250');

      const season1 = groupedEpisodes.seasons[1];
      const season2 = groupedEpisodes.seasons[2];

      expect(season1.includes(episode1)).toBeTruthy();
      expect(season1.includes(episode2)).toBeTruthy();

      expect(season2.includes(episode22)).toBeTruthy();
      expect(season2.includes(episode23)).toBeTruthy();
    });
  });
});
