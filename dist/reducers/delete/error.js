"use strict";
const common_1 = require("../common");
const findByKey_1 = require("../../utils/findByKey");
const mergeMutable_1 = require("../../utils/mergeMutable");
const lodash_omit_1 = require("lodash.omit");
function error(config, current, record) {
    var reducerName = 'deleteError';
    record = common_1.default(config, current, record, reducerName);
    var key = config.key;
    var deleteId = record[key];
    var deleteRecord = findByKey_1.default(current, key, deleteId);
    deleteRecord = lodash_omit_1.default(deleteRecord, 'deleted', 'busy');
    return mergeMutable_1.default(current, deleteRecord, key);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = error;
