import { helpers, minLength, maxLength, required } from '@vuelidate/validators';

export const validRules = {
  name: { required, minLength: minLength(1), maxLength: maxLength(30) },
  releaseAt: {
    isValidDate: helpers.withMessage('Incorrect date', (value: string | null) => {
      if (!value) return true;

      const currentDate = new Date();
      const parsedValidatedDate = new Date(value);

      return parsedValidatedDate <= currentDate;
    }),
  },
};
