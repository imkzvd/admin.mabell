import type UIForm from '@/shared/components/UI/UIForm/UIForm.vue';

export type UIFormProps = {
  isLoading?: boolean;
  messages?: {
    submitButton?: string;
  };
  hideSubmitButton?: boolean;
};

export type UIFormEmits = {
  (e: 'submit', evt: SubmitEvent): void;
  (e: 'reset'): void;
};

export type UIFormInstance = InstanceType<typeof UIForm>;
