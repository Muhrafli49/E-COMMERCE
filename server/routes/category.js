import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
    const data = getData('./data/Category.json');
    res.json(data);
});

router.get('/:id', (req, res) => {
    const data = getData('./data/Category.json');
    const item = data.find(item => item.id === parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).send({ message: 'Data tidak ditemukan' });
    }
});

const getData = (path) => {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
};

export default router;
