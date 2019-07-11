'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Record extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }
  type() {
    return this.belongsTo('App/Models/RecordType');
  }
}

module.exports = Record;
