const TableImporter = require('./base');
const {faker} = require('@faker-js/faker');

class MembersStatusEventsImporter extends TableImporter {
    constructor(knex) {
        super('members_status_events', knex);
    }

    setImportOptions({model}) {
        this.events = [{
            id: faker.database.mongodbObjectId(),
            member_id: model.id,
            from_status: null,
            to_status: 'free',
            created_at: model.created_at
        }];
        if (model.status !== 'free') {
            this.events.push({
                id: faker.database.mongodbObjectId(),
                member_id: model.id,
                from_status: 'free',
                to_status: model.status,
                created_at: faker.date.between(new Date(model.created_at), new Date()).toISOString()
            });
        }
    }

    generate() {
        const event = this.events.shift();
        if (!event) {
            return null;
        }
        return event;
    }
}

module.exports = MembersStatusEventsImporter;
