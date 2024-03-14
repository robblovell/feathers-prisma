"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeFor = void 0;
const typeFor = (object) => {
    if (object === null) {
        return 'Null';
    }
    if (object === undefined) {
        return 'Undefined';
    }
    return object.constructor.name;
};
exports.typeFor = typeFor;
