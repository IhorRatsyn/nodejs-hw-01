import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const thanos = async () => {
  try {
    // Читаємо існуючі контакти з файлу
    let data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    // Залишаємо лише ті контакти, які не видалили з імовірністю 50%
    let filteredContacts = contacts.filter(() => Math.random() > 0.5);

    // Записуємо оновлений масив контактів назад у файл
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(filteredContacts, null, 2),
      'utf8',
    );
  } catch (error) {
    console.error('Error executing Thanos snap:', error);
  }
};

await thanos();
