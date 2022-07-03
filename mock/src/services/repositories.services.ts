import { Repositories } from '../controllers/repositories/repositories.type';
import { STATUSES_REPOSITORIES } from '../utils/constants';

export const getStatesRepositories = (
  idRepositories: number[],
): Repositories[] => {
  const response: Repositories[] = [];

  const statuses = Object.values(STATUSES_REPOSITORIES);

  for (const idRepository of idRepositories) {
    response.push({
      id: idRepository,
      state: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }

  return response;
};
