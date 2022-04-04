import fs from 'fs';

export const deleteFile = async (filename: string) => {
  // Vai verificar se o arquivo existe
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  // existindo o arquivo vai ser apagado
  await fs.promises.unlink(filename);
};
