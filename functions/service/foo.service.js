const fooRepository = require('../repository/foo.repository')

const create = (req, response) => {
  fooRepository.create(req,response)
};

const list = (req, response) => {
  fooRepository.list(req,response)
};

const getById = (req, response) => {
  fooRepository.getById(req,response)
};

const deleteById = (req, response) => {
  fooRepository.deleteById(req,response)
};

module.exports = {
  create,
  list,
  getById,
  deleteById
};
