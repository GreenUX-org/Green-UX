const { Titles, Info } = require("../../db");

const getInfo = async (req, res) => {
  try {
    const info = await Info.findAll({
      where: {
        show: true,
      },
    });
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

const createInfo = async (req, res) => {
  try {

    const { data, titleName } = req.body;
    const createInfo = await Info.create({
      data: data,
    });

    const title=  await Titles.findOne({where:{ name: titleName}})
    const result = createInfo.setTitle(title)

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const updateInfo = async (req, res) => {
    console.log('holaaaa')
  const { id } = req.params;
  console.log(id)
  const { data } = req.body;
  const updateInf = await  Info.findByPk(id);
    console.log(updateInf)
  try {
    if (updateInf && data?.length) {
      await Info.update(
        {
          data: data,
        },
        {
          where: { id },
        }
      );
      res.json("Se actualizo con exito la Info");
    } else {
      res.status(404).json("Faltan Parametros");
    }
  } catch (error) {
    console.log(error);
  }
};

const disabledInfo = async (req, res) => {
  const { id } = req.params;
  const info = await Info.findByPk(id);

  try {
    if (info.show) {
      await Info.update(
        { show: false },
        {
          where: { id },
        }
      );
      res.json("deshabilitado con exito");
    } else {
      await Info.update(
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
  getInfo,
  createInfo,
  updateInfo,
  disabledInfo,
};