const { Sections } = require("../../db");

const getSections = async (req, res) => {
  try {
    const sections = await Sections.findAll({where: {
        show: true
      }})
    res.json(sections);
  } catch (error) {
    console.log(error);
  }
};

const createSections = async (req, res) => {
  try {
    const { name } = req.body;
    const newSection = await Sections.create({
      name: name,
    });
    res.json("Sección Creada con exito");
  } catch (error) {
    console.log(error);
  }
};

const updateSections = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updateSection = await Sections.findByPk(id);

  try {
    if (updateSection && name?.length  ) {
      await Sections.update(
        {
          name: name,
        },
        {
          where: { id },
        }
      );
      res.json("Se actualizo con exito");
    }else{
        res.status(404).json('Faltan Parametros')
    }
  } catch (error) {
    console.log(error);
  }
};

const disabledSections = async (req, res) => {
  const { id } = req.params;
  const section = await Sections.findByPk(id);

  try {
    if (section.show) {
      await Sections.update(
        { show: false },
        {
          where: { id },
        }
      );
      res.json("desabilitado con exito");
    } else {
      await Sections.update(
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
  createSections,
  updateSections,
  disabledSections,
  getSections,
};
