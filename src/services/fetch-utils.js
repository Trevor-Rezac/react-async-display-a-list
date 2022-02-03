import { checkError, client } from './client';

export async function getCardDesigners() {
  const response = await client
    .from('Card Designers')
    .select();

  return checkError(response);
}