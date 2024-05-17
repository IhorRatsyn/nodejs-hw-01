import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const getAllContacts = async () => {
  try {
    let data = await fs.readFile(PATH_DB, 'utf8');

    let contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);

    return [];
  }
};

console.log(await getAllContacts());
