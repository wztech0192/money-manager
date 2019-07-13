'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Record extends Model {
  static mapFromDto(recordDto) {
    return {
      money: recordDto.recordMoney,
      date: recordDto.recordDate,
      summary: recordDto.recordSummary,
      record_type_id: recordDto.recordType.id,
      user_id: recordDto.userID
    };
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  type() {
    return this.belongsTo('App/Models/RecordType');
  }
}

module.exports = Record;
