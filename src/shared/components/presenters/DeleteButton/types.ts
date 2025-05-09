import type { UISize } from '@/shared/components/presenters/UI/types';

export type DeleteButtonProps = {
  withoutText?: boolean;
  size?: UISize;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export type DeleteButtonEmits = {
  (e: 'click', evt: PointerEvent): void;
};
