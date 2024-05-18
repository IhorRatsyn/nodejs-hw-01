import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Читаємо існуючі контакти з файлу
    let data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    // Генеруємо новий контакт
    const newContact = createFakeContact();

    // Додаємо новий контакт до масиву контактів
    contacts.push(newContact);

    // Записуємо оновлений масив контактів назад у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

// Виклик функції для додавання одного контакту
await addOneContact();
