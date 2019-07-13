'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class RecordType extends Model {
  static mapFromDto(recordTypeDto) {
    return {
      record_group_id: recordTypeDto.recordGroup.id,
      typeName: recordTypeDto.typeName
    };
  }

  group() {
    return this.belongsTo('App/Models/RecordGroup');
  }

  records() {
    return this.hasMany('App/Models/Record');
  }
}

module.exports = RecordType;
