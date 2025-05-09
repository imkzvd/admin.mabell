import { minLength, maxLength, required } from '@vuelidate/validators';

export const validRules = {
  username: { required, minLength: minLength(3), maxLength: maxLength(10) },
};
