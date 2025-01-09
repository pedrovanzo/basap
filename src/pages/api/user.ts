import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface User {
  id: string; // Ensure every user has a unique id (could be generated or passed)
  name: string;
  phone: string;
  birthday: string;
  gender: string;
}

const filePath = path.join(process.cwd(), 'data', 'users.json');

// Helper function to get users from the file
const getUsers = (): User[] => {
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    try {
      return JSON.parse(fileData);
    } catch (error) {
      console.error('Error parsing JSON data', error);
      return [];
    }
  }
  return [];
};

// API route handler
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method === 'POST') {
    // Create new user
    const newUser: User = req.body;
    const users = getUsers();

    // Add a new user with a unique id
    newUser.id = Date.now().toString(); // Simple unique ID using timestamp
    users.push(newUser);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return res.status(200).json({ success: true, user: newUser });
  }

  if (method === 'PUT') {
    // Update an existing user
    const updatedUser: User = req.body;
    const users = getUsers();
    const userIndex = users.findIndex((user) => user.id === updatedUser.id);

    if (userIndex === -1) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Update user data
    users[userIndex] = updatedUser;

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return res.status(200).json({ success: true, user: updatedUser });
  }

  if (method === 'DELETE') {
    // Delete a user by ID
    const { id } = req.query;
    const users = getUsers();
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Remove user from the array
    users.splice(userIndex, 1);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ success: false, message: 'Method Not Allowed' });
};
