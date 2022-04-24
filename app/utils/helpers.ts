import { json } from '@remix-run/node';
import type { badRequestProps } from '~/types';

export function validateInput(
  name: string,
  input: FormDataEntryValue,
  length: number = 1,
) {
  if (typeof input !== 'string' || input.length < length) {
    return `${name} should be at least ${length} characters long`;
  }
}

export function badRequest(data: badRequestProps) {
  return json(data, { status: 400 });
}
