import { minLength, maxLength, required } from '@vuelidate/validators';

export const validRules = {
  name: { required, minLength: minLength(3), maxLength: maxLength(50) },
};
