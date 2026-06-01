import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);

export async function setupDB() {
  try {
    console.log('Connection established');

    await sql`
      CREATE TABLE IF NOT EXISTS monsterCards (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        cardtype VARCHAR(255) NOT NULL,
        monstertype VARCHAR(255) NOT NULL,
        level INT,
        description VARCHAR(2000),
        image VARCHAR(510)
      );
    `;
    console.log('Finished initialising monster table.');

  } catch (err) {
    console.error('Connection failed.', err);
  }
}