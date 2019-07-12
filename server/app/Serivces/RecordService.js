import Record from '../Models/Record';
import RecordType from '../Models/RecordType';
import RecordGroup from '../Models/RecordGroup';
import { successResponse, failResponse } from '../Helpers/CustomResponse';

class RecordService {
  constructor() {}

  /**
   * get record groups and types
   */
  async getRecordGroups() {
    const data = await RecordGroup.all();
    if (data) {
      const groupList = await data.map(async group => ({
        groupName: group.groupName,
        groupID: group.id,
        types: await group.types()
      }));
      return groupList;
    }
    return [];
  }

  /**
   *
   * @param {*} recordDto
   */
  async createRecord(recordDto) {
    recordDto.recordType = await RecordType.find(recordDto.selectType);
    const errors = this.ValidateRecord(recordDto);
    if (errors) return failResponse(errors);

    var record = Record.mapFromDto(recordDto);
    const data = await Record.create(record);
    return successResponse(data);
  }

  /**
   *
   * @param {*} recordTypeDto
   */
  async createType(recordTypeDto) {
    recordTypeDto.recordGroup = await RecordGroup.find(recordDto.selectGroup);
    const errors = this.ValidateRecordType(recordTypeDto);
    if (errors) return failResponse(errors);

    var recordType = RecordType.mapFromDto(recordTypeDto);
    const data = await RecordType.create(recordType);
    return successResponse(data);
  }

  /**
   *
   * @param {*} recordGroupDto
   */
  async createGroup(recordGroupDto) {
    const errors = this.ValidateRecordGroup(recordGroupDto);
    if (errors) return failResponse(errors);
    var recordGroup = RecordGroup.mapFromDto(recordGroupDto);
    const data = await RecordGroup.create(recordGroup);
    return successResponse(data);
  }

  /**
   *
   * @param {*} param0
   */
  ValidateRecordGroup({ groupName }) {
    var errorList = [];
    if (!groupName) {
      errorList.push('Record group name must be provided');
    }
    if (errorList.length <= 0) return false;
    return errorList;
  }

  /**
   *
   * @param {*} param0
   */
  ValidateRecordType({ recordGroup, typeName }) {
    var errorList = [];
    if (!recordGroup) {
      errorList.push('Record group must be selected');
    }
    if (!typeName) {
      errorList.push('Record type name must be provided');
    }
    if (errorList.length <= 0) return false;
    return errorList;
  }

  /**
   *
   * @param {*} param0
   */
  ValidateRecord({ recordMoney, recordDate, recordType }) {
    var errorList = [];
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

    if (!recordType) {
      errorList.push('Record type must be valid');
    }

    if (errorList.length <= 0) return false;
    return errorList;
  }
}

export default RecordService;
