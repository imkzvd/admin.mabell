import type { ArtistRO } from '@/api/api.module';

export type ArtistAutocompleteProps = {
  modelValue: string[];
  selectedArtists?: ArtistRO[];
  label?: string;
  errorMessages?: string | string[];
};

export type ArtistAutocompleteEmits = {
  (e: 'update:modelValue', value: (string | number)[]): void;
};
