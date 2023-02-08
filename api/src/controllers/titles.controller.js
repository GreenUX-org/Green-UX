const { Titles, Sections } = require("../../db");

const getTitles = async (req, res) => {
  try {
    const titles = await Titles.findAll({
      where: {
        show: true,
      },
    });
    res.json(titles);
  } catch (error) {
    console.log(error);
  }
};

const createTitle = async (req, res) => {
  try {

    const { name, sectionName } = req.body;
    
    const createTitle = await Titles.create({
      name: name,
    });
    const section=  await Sections.findOne({where:{ name: sectionName}})
    const result = createTitle.setSection(section)

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const updateTitle = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updateTitle = await  Titles.findByPk(id);

  try {
    if (updateTitle && name?.length) {
      await Titles.update(
        {
          name: name,
        },
        {
          where: { id },
        }
      );
      res.json("Se actualizo con exito el titulo");
    } else {
      res.status(404).json("Faltan Parametros");
    }
  } catch (error) {
    console.log(error);
  }
};

const disabledTitle = async (req, res) => {
  const { id } = req.params;
  const title = await Titles.findByPk(id);

  try {
    if (title.show) {
      await Titles.update(
        { show: false },
        {
          where: { id },
        }
      );
      res.json("deshabilitado con exito");
    } else {
      await Titles.update(
        { show: true },
        {
          where: { id },
        }
      );
      res.json("reestablecido con exito");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  getTitles,
  createTitle,
  updateTitle,
  disabledTitle,
};
