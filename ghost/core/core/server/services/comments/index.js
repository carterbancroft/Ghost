class CommentsServiceWrapper {
    init() {
        const CommentsService = require('./service');
        const CommentsController = require('./controller');
        const CommentsStats = require('./stats');

        const config = require('../../../shared/config');
        const logging = require('@tryghost/logging');
        const models = require('../../models');
        const {GhostMailer} = require('../mail');
        const mailer = new GhostMailer();
        const settingsCache = require('../../../shared/settings-cache');
        const urlService = require('../url');
        const urlUtils = require('../../../shared/url-utils');
        const membersService = require('../members');
        const db = require('../../data/db');
        const settingsHelpers = require('../settings-helpers');
        const stats = new CommentsStats({db});

        // Moving stats into the service feels a little cleaner to me but I might be missing context.
        // Let me know if you have any thoughts.
        this.api = new CommentsService({
            config,
            logging,
            models,
            mailer,
            settingsCache,
            settingsHelpers,
            urlService,
            urlUtils,
            contentGating: membersService.contentGating,
            stats
        });

        this.controller = new CommentsController(this.api);
    }
}

module.exports = new CommentsServiceWrapper();
