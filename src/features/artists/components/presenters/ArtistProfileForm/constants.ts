import { minLength, required, helpers } from '@vuelidate/validators';

export const validRules = {
  name: { required, minLength: minLength(3) },
  birthName: { minLength: minLength(3) },
  birthDate: {
    isValidDate: helpers.withMessage('Incorrect date', (value: string | null) => {
      if (!value) return true;

      const currentDate = new Date();
      const parsedValidatedDate = new Date(value);

      return parsedValidatedDate <= currentDate;
    }),
  },
};
