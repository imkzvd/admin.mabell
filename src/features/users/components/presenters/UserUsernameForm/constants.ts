import { minLength, required } from '@vuelidate/validators';

export const validRules = {
  username: { required, minLength: minLength(1) },
};
