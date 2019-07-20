'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Record extends Model {
  static mapFromDto(recordDto) {
    return {
      money: recordDto.recordMoney,
      date: new Date(recordDto.recordDate),
      summary: recordDto.recordSummary,
      record_type_id: recordDto.recordType.id,
      user_id: recordDto.userID
    };
  }

  static mapToDtos(records) {
    return records.map(val => ({
      datetime: val.date,
      date: val.date.toLocaleDateString(),
      money: val.money,
      summary: val.summary,
      typeID: val.type.id,
      typeName: val.type.name,
      groupID: val.type.record_group_id,
      isPositive: val.money < 0
    }));
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  type() {
    return this.belongsTo('App/Models/RecordType');
  }
}

module.exports = Record;
