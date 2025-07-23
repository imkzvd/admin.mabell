import { helpers } from '@vuelidate/validators';

export const validRules = {
  artists: {
    minLength: helpers.withMessage('Min length - 1', (value) => {
      if (!Array.isArray(value)) return false;

      return value.length >= 1;
    }),
  },
};
