import Record from '../Models/Record';

class RecordService {
  constructor() {}

  async CreateRecord(record) {
    const errors = this.ValidateRecord(record);
    if (errors) return errors;
    const result = await Record.create(record);
    return result;
  }

  ValidateRecord(record) {
    var errorList = [];
    if (record) {
      errorList.push('Record information must be provided');
    } else {
      const { recordMoney, recordDate, selectType } = reocord;
      if (!recordMoney) {
        errorList.push('Record money must be provided');
      } else if (typeof recordMoney !== Number) {
        errorList.push('Record money must be a number');
      }

      if (!recordDate) {
        errorList.push('Record date must be provided');
      } else if (typeof recordMoney !== Date) {
        errorList.push('Record date must be in date format');
      }

      if (!selectType) {
        errorList.push('Record type must be provided');
      }

      if (errorList.length <= 0) return false;
      return errorList;
    }
  }
}

export default RecordService;
