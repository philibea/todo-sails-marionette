/**
* Todo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    date: {
      type: 'datetime'
    },

    completed: {
      type: 'boolean',
      defaultsTo: false
    },

    userId: {
      type: 'string',
      required: true
    },

    createdAt: {
      type: 'datetime',
      defaultsTo: function (){ return new Date(); }
    },

    updatedAt: {
      type: 'datetime',
      defaultsTo: function (){ return new Date(); }
    }
  },

  schema: true,

  connection: 'mongodbServer',

  autoPK: true,

  autoCreatedAt: true,

  autoUpdatedAt: true

};

