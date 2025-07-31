export type SearchResultItemProps = {
  name: string;
  type: string;
  linkMode?: boolean;
  linkHref: string;
  imgSrc?: string | null;
  isImgRounded?: boolean;
  showType?: boolean;
  metadata?: string | string[];
};

export type SearchResultItemEmits = {
  (e: 'click'): void;
};
