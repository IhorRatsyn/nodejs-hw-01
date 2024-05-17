import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const countContacts = async () => {
  try {
    // Читаємо існуючі контакти з файлу
    let data = await fs.readFile(PATH_DB, 'utf8');
    // Парсимо JSON-строку в масив контактів
    let contacts = JSON.parse(data);
    // Повертаємо кількість контактів
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    // Повертаємо 0 у разі помилки
    return 0;
  }
};

console.log(await countContacts());
