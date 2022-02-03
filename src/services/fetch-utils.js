import { checkError, client } from './client';

export async function getCardDesigners() {
  const response = await client
    .from('Card Designers')
    .select();

  return checkError(response);
}

export async function getCars() {
  const response = await client
    .from('Cars')
    .select();
    
  return checkError(response);
}

export async function getMovies() {
  const response = await client
    .from('Favorite Movies')
    .select();

  return checkError(response);
}

