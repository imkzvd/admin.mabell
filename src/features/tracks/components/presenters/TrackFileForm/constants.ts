import { required, numeric, minValue, helpers } from '@vuelidate/validators';

export const validRules = {
  fileId: { required: helpers.withMessage('The file has not been uploaded', required) },
  duration: {
    required: helpers.withMessage('Duration is required', required),
    numeric: helpers.withMessage('Duration must be numeric', numeric),
    minValue: helpers.withMessage('Min duration is 1 second', minValue(1)),
  },
};
