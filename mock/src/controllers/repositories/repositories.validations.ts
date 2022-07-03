import { query } from 'express-validator';

export const REPOSITORIES_VALIDATION = [
  query('ids')
    .exists()
    .withMessage('"ids" field is required')
    .isJSON()
    .withMessage('"ids" must be a valid json')
    .bail()
    .customSanitizer((value) => JSON.parse(value))
    .isArray({ min: 1 })
    .withMessage('"ids" must be an array of at least one element'),

  query('ids.*').isInt().withMessage('"ids" must be an array of integers.'),
];
