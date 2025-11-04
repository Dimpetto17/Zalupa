import users from './register.js';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Метод не разрешён' });
  const { name, password } = req.body || {};
  const user = users.find(u => u.name === name && u.password === password);
  if (!user) return res.status(400).json({ error: 'Неверное имя или пароль' });

  res.status(200).json({ message: 'Вход успешен', name });
}