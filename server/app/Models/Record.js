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
    return records.reduce((container, val) => {
      const date = val.date.toLocaleDateString();
      if (!container[date]) {
        container[date] = [val];
      } else {
        container[date].push(val);
      }
      return container;
    }, {});
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  type() {
    return this.belongsTo('App/Models/RecordType');
  }
}

module.exports = Record;
