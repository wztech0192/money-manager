exports.successResponse = data => ({
  isSuccess: true,
  data
});

exports.failResponse = errors => ({
  isSuccess: false,
  errors
});

exports.errorValidator = () => ({
  errors: {},
  fail: false,
  addError(name, msg) {
    this.fail = true;
    this.errors[name] = msg;
  }
});
