import { readFile } from "fs/promises";
import path from "path";

type Locale = 'es' | 'en';

export async function getLocaleMessages<T>(locale: Locale): Promise<T> {
  const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
  const file = await readFile(filePath, 'utf-8');
  return JSON.parse(file);
}