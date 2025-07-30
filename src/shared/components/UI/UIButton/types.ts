import type { UIColor, UISize } from '../types.ts';

type UIButtonType = 'button' | 'submit' | 'reset';

export type UIButtonProps = {
  type?: UIButtonType;
  size?: UISize;
  color?: UIColor;
  icon?: string;
  isBlock?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
};
