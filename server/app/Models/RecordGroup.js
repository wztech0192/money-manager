'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class RecordGroup extends Model {
  types() {
    return this.hasMany('App/Models/RecordType');
  }
}

module.exports = RecordGroup;
