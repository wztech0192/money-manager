export const successResponse = data => ({
  isSuccess: true,
  data
});

export const failResponse = errors => ({
  isSuccess: false,
  errors
});
