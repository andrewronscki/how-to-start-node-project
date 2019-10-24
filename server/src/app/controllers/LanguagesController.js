import Languages from '../models/Languages';

class LanguagesController {
  async index(req, res) {
    const languages = await Languages.find();

    res.json(languages);
  }

  async store(req, res) {
    const { name, author } = req.body;

    const languages = await Languages.create({
      name,
      author,
    });

    res.json(languages);
  }
}

export default new LanguagesController();
