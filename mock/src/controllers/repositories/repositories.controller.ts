import { Request, Response, NextFunction } from 'express';
import { getStatesRepositories } from '../../services/repositories.services';

export const getRepositoriesVerificationCode = (
  req: Request<{}, {}, {}, { ids: number[] }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const repositoriesInfo = getStatesRepositories(req.query.ids);

    return res.json({ repositories: repositoriesInfo });
  } catch (error) {
    return next(error);
  }
};
