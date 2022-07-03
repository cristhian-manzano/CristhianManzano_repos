import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { getStatesRepositories } from '../../services/repositories.services';
import { validationResponse } from '../../utils/responses';

export const getRepositoriesVerificationCode = (
  req: Request<{}, {}, {}, { ids: number[] }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json(validationResponse(res.statusCode, errors));
    }

    const repositoriesInfo = getStatesRepositories(req.query.ids);

    return res.json({ repositories: repositoriesInfo });
  } catch (error) {
    return next(error);
  }
};
