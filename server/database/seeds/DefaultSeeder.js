'use strict';

/*
|--------------------------------------------------------------------------
| DefaultSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User');
const RecordGroup = use('App/Models/RecordGroup');
const RecordType = use('App/Models/RecordType');

class DefaultSeeder {
  async run() {
    User.create({
      first_name: 'Wei',
      mid_initial: 'J.',
      last_name: 'Zheng',
      email: 'weijie0191@gmail.com',
      password: 'weijiezheng'
    });

    const outcomes = [
      {
        group: 'Home',
        types: ['Buy TV', 'Buy Table', 'House Rent']
      },
      {
        group: 'Utility',
        types: ['Water Bill', 'Electric Bill', 'Utility Bill']
      },
      {
        group: 'Restaurant',
        types: ['Supply']
      },
      {
        group: 'Shopping',
        types: ['Walmart', 'eBay', 'Amazon']
      }
    ];

    const incomes = [
      {
        group: 'Work',
        types: ['Restaurant', 'SRS', 'School']
      },
      {
        group: 'Lottery',
        types: ['First Place', 'Second Place']
      },
      {
        group: 'Tax',
        types: ['Tax Return']
      }
    ];

    for (var data of outcomes) {
      const groupResult = await RecordGroup.create({
        isPositive: false,
        groupName: data.group
      });
      RecordType.createMany(
        data.types.map(val => ({
          typeName: val,
          group_id: groupResult.id
        }))
      );
    }

    for (var data of incomes) {
      const groupResult = await RecordGroup.create({
        isPositive: true,
        groupName: data.group
      });

      RecordType.createMany(
        data.types.map(val => ({
          typeName: val,
          group_id: groupResult.id
        }))
      );
    }
  }
}

module.exports = DefaultSeeder;
