import type { UISize } from '../UI/types';

export type CreateButtonProps = {
  size?: UISize;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export type CreateButtonEmits = {
  (e: 'click', evt: PointerEvent): void;
};
