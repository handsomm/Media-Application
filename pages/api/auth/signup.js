import connectMongo from '@/database/conn';
import Users from '@/model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
    connectMongo().catch((err) => res.json({ error: 'Connection error...' }));

    // Only POST method accepted
    if (req.method === 'POST') {
        if (!req.body)
            return res.status(404).json({ error: "Don't have data" });

        const { username, email, password } = req.body;

        const check = await Users.findOne({ email });
        if (check) {
            return res.status(422).json({ message: 'User already exist' });
        }

        Users.create({
            username,
            email,
            password: await hash(password, 10),
        })
            .then((user) => {
                res.status(200).json({ status: true, user: user });
            })
            .catch((err) => {
                res.status(404).json({ err });
            });
    } else {
        res.status(500).json({ message: 'HTTP method not valid' });
    }
}
