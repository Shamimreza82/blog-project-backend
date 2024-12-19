"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search() {
        console.log("all In one ");
        return this;
    }
}
exports.default = QueryBuilder;
