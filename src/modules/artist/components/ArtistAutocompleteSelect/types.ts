import type { ArtistRO } from '@/api/api.module';

export type ArtistAutocompleteSelectProps = {
  modelValue: string[];
  selectedArtists?: ArtistRO[];
  label?: string;
  errorMessages?: string | string[];
};

export type ArtistAutocompleteSelectEmits = {
  (e: 'update:modelValue', value: (string | number)[]): void;
};
