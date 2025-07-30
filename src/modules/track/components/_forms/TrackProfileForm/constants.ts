import { minLength, required } from '@vuelidate/validators';

export const validRules = {
  name: { required, minLength: minLength(3) },
};
