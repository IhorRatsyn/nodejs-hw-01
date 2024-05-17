import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';
import { createFakeContact } from './createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(5);
