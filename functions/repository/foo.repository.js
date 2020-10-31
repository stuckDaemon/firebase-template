const {v4: uuidv4} = require('uuid');

const firestoreConfig = require('../config/firestore-config');
const dbRef = firestoreConfig.firestore.collection('foos');

function fooMapper(foo, fooId) {
  return {
    id: fooId,
    created_at: foo.created_at,
    modified_at: foo.modified_at,
    name: foo.name,
    email: foo.email,
    text: foo.text
  }
}

const create = (request, response) => {
  dbRef
    .doc(uuidv4())
    .set({
      created_at: Date.now(),
      modified_at: null,
      name: request.body.name,
      email: request.body.email,
      text: request.body.text
    })
    .then(doc => {
      console.log('Foo saved:', doc);
      response.status(200).json({msg: 'success'})
    })
    .catch(err => {
      console.log('Error getting document', err);
      response.status(500).json({error: 'api-error'})
    });
};

const list = (request, response) => {
  dbRef
    .get()
    .then(snapshot => {
      let fooList = [];
      if (snapshot.empty) {
        response.status(200).json(fooList);
      } else {
        snapshot.forEach(doc => {
          fooList.push(fooMapper(doc.data(), doc.id));
        });
        response.status(201).json(fooList);
      }
    })
    .catch(err => {
      console.log('Error getting documents', err);
      response.status(500).json({error: 'api-error'})
    });
};

const getById = (request, response) => {
  const fooId = request.params.id;
  dbRef
    .doc(fooId)
    .get()
    .then(doc => {
      if (!doc.exists) {
        response.status(200).json({});
      } else {
        response.status(201).json(fooMapper(doc.data(), doc.id));
      }
    })
    .catch(err => {
      console.log('Error getting documents', err);
      response.status(500).json({error: 'api-error'})
    });
};

const deleteById = (request, response) => {
  const fooId = request.params.id;
  dbRef
    .doc(fooId)
    .delete()
    .then(doc => {
      response.status(200).json({msg: 'success'})
    })
    .catch(err => {
      console.log('Error getting documents', err);
      response.status(500).json({error: 'api-error'})
    });
};

module.exports = {
  create,
  list,
  getById,
  deleteById
};
