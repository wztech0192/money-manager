const Record = use('App//Models/Record');
const RecordType = use('App//Models/RecordType');
const RecordGroup = use('App//Models/RecordGroup');

const { successResponse, failResponse, errorValidator } = use(
  'App//Helpers/CustomResponse'
);

class RecordService {
  constructor() {}

  /**
   * get record groups and types
   */
  async getRecordGroups() {
    const data = await RecordGroup.query()
      .with('types')
      .fetch();
    if (data) {
      return data;
    }
    return [];
  }

  /**
   *
   * @param {*} recordDto
   */
  async createRecord(recordDto) {
    recordDto.recordType = await RecordType.find(recordDto.selectType);
    const validator = this.ValidateRecord(recordDto);
    if (validator.fail) return failResponse(validator.errors);

    var record = Record.mapFromDto(recordDto);
    const data = await Record.create(record);
    return successResponse(data);
  }

  /**
   *
   * @param {*} recordTypeDto
   */
  async createType(recordTypeDto) {
    recordTypeDto.recordGroup = await RecordGroup.find(
      recordTypeDto.selectGroup
    );
    const validator = this.ValidateRecordType(recordTypeDto);
    if (validator.fail) return failResponse(validator.errors);

    var recordType = RecordType.mapFromDto(recordTypeDto);
    const data = await RecordType.create(recordType);
    return successResponse(data);
  }

  /**
   *
   * @param {*} recordGroupDto
   */
  async createGroup(recordGroupDto) {
    const validator = this.ValidateRecordGroup(recordGroupDto);
    if (validator.fail) return failResponse(validator.errors);
    var recordGroup = RecordGroup.mapFromDto(recordGroupDto);
    const data = await RecordGroup.create(recordGroup);
    return successResponse(data);
  }

  /**
   *
   * @param {*} param0
   */
  ValidateRecordGroup({ groupName }) {
    const errors = errorValidator();
    if (!groupName) {
      errors.addError('name', 'Record group name must be provided');
    }
    if (Object.entries(errors).length > 1) return false;
    return errors;
  }

  /**
   *
   * @param {*} param0
   */
  ValidateRecordType({ recordGroup, typeName }) {
    const validator = errorValidator();
    if (!recordGroup) {
      validator.addError('group', 'Record group must be selected');
    }
    if (!typeName) {
      validator.addError('name', 'Record type name must be provided');
    }
    return validator;
  }

  /**
   *
   * @param {*} param0
   */
  ValidateRecord({ recordMoney, recordDate, recordType }) {
    const validator = errorValidator();
    if (!recordMoney) {
      validator.addError('money', 'Record money must be provided');
    } else if (typeof recordMoney !== 'number' || isNaN(recordMoney)) {
      validator.addError('money', 'Record money must be a number');
    }

    if (isNaN(Date.parse(recordDate))) {
      validator.addError('date', 'Record date must be provided');
    }

    if (!recordType) {
      validator.addError('type', 'Record type must be provided and valid');
    }
    return validator;
  }
}

module.exports = RecordService;
