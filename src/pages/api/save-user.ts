import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'users.json');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const newUser: ClientData = req.body;

    try {
      // Ensure the data directory exists
      const dataDir = path.dirname(filePath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
      }

      // Initialize an empty array if the file doesn't exist yet
      let users: ClientData[] = [];
      if (fs.existsSync(filePath)) {
        // Try to read and parse the existing file
        const fileData = fs.readFileSync(filePath, 'utf-8');
        try {
          users = JSON.parse(fileData);
        } catch (error) {
          console.error('Error parsing JSON data', error);
          // If there's an error parsing the file, reset the users array
          users = [];
        }
      }

      // Add the new user to the array
      users.push(newUser);

      // Save the updated users array back to the file
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error saving user' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};
