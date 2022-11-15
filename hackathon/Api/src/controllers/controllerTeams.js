const Team = require("../model/modelTeams");
const ErrorResponse = require("../utils/errorResponse.js");

const getTeamById = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    res.send(team);
    return;
  } catch (err) {
    next(new ErrorResponse("Error al econtrar el producto", 500, false));
    console.error(err);
  }
};

const getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find();
    res.send(teams);
    return;
  } catch (err) {
    next(new ErrorResponse("Error al econtrar el producto", 500, false));
    console.error(err);
  }
};

const getTeamsByName = async (req, res) => {
  const $regex = req.params.name;
  try {
    if (!req.params.name.length) {
      const team = await Team.find();
      res.send({ info: "curso encontrado", team, success: true });
    } else {
      const team = await Team.find({ nombre: { $regex, $options: "i" } });
      if (!team.length) {
        res
          .status(404)
          .send({ info: "No existe un curso con ese nombre", success: false });
      } else {
        res.send({ info: "curso encontrado", team, success: true });
      }
    }
  } catch (err) {
    res.send({ info: "Algo salio mal", err, success: false });
    console.error(err);
  }
};

const getTeamCategory = async (req, res) => {
  try {
    if (!req.params.gender.length) {
      const team = await Team.find();
      res.send({ info: "Teamo encontrado", team, success: true });
    } else {
      const team = await Team.find({
        genero: { $regex: req.params.gender, $options: "i" },
        categoria: { $regex: req.params.category, $options: "i" },
        edad: { $regex: req.params.age, $options: "i" },
      });
      if (!team.length) {
        res
          .status(404)
          .send({ info: "No existe productos con ese genero", success: false });
      } else {
        res.send({ info: "Teamos encontrados", team, success: true });
      }
    }
  } catch (err) {
    res.send({ info: "Algo salio mal", err, success: false });
    console.error(err);
  }
};

const createTeam = async (req, res, next) => {
  const { body } = req;
  try {
    const team = await new Team(body);
    await team.save();
    res.send(team);
  } catch (err) {
    next(new ErrorResponse("Error al crear el producto", 500, false));
    console.error(err);
  }
};

const editTeam = async (req, res, next) => {
  const { id } = req.params;
  const { nombre, price } = req.body;
  try {
    const team = await Team.findByIdAndUpdate(
      id,
      { nombre, price },
      { new: true }
    );
    if (!team) {
      return next(
        new ErrorResponse("Error al obtener el producto", 500, false)
      );
    }
    res.send(team);
  } catch (err) {
    next(new ErrorResponse("Error al obtener el usuario", 500, false));
  }
};

const deleteTeam = async (req, res) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    return res.status(401).send({
      info: "No tienes permisos para acceder a esta ruta",
      success: false,
    });
  }
  try {
    const { id } = req.body;
    const team = await Team.findById(id);
    if (!team) {
      return res
        .status(404)
        .send({ info: "Usuario no encontrado", success: false });
    }
    await Team.findByIdAndDelete(id);
    res.send({ info: "Usuario eliminado", success: true });
  } catch {
    res.status(500).send({ info: "Algo salio mal", success: false });
  }
};

module.exports = {
  createTeam,
  getTeamById,
  getTeams,
  getTeamGender,
  getTeamCategory,
  getTeamsByName,
  editTeam,
  deleteTeam,
};
