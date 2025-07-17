import { required, minLength } from '@vuelidate/validators';

export const validRules = {
  username: { required, minLength: minLength(1) },
  password: { required, minLength: minLength(1) },
};
