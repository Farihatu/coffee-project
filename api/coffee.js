import coffeeData from '../coffeeData.json';

export default function handler(req, res) {
    res.status(200).json(coffeeData);
}
