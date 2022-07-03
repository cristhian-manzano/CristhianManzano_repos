export const successResponse = (
  statusCode: number,
  message: string,
  data: any
) => ({
  code: statusCode,
  message,
  data,
});

export const errorResponse = (statusCode: number, message: string) => ({
  code: statusCode,
  error: true,
  message,
});

export const validationResponse = (
  statusCode: number,
  validationError: any
) => ({
  code: statusCode,
  message: 'validation errors',
  validation: validationError,
});
