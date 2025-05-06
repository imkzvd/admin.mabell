export type UISize = 'x-small' | 'small' | 'default' | 'large';

export type UIAlign = 'left' | 'center' | 'right';

export type UIColor =
  | 'white'
  | 'black'
  | 'gray'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export type UIValidationRule = (v: string | number) => boolean | string;
