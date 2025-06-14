import { helpers, minLength, required } from '@vuelidate/validators';

export const validRules = {
  name: { required, minLength: minLength(1) },
  birthDate: {
    isValidDate: helpers.withMessage('Incorrect date', (value: string | null) => {
      if (!value) return true;

      const currentDate = new Date();
      const parsedValidatedDate = new Date(value);

      return parsedValidatedDate <= currentDate;
    }),
  },
  genres: {
    maxLength: helpers.withMessage('Max length - 5', (value) => {
      if (!Array.isArray(value)) return false;

      return value.length <= 5;
    }),
  },
};
