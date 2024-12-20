"use strict";
// import { FilterQuery, Query } from 'mongoose';
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields) {
        var _a;
        const search = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.search;
        if (search) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => ({
                    [field]: { $regex: search, $options: 'i' },
                })),
            });
        }
        return this;
    }
    filter() {
        const queryObj = Object.assign({}, this.query);
        const excludingImportant = ['search', 'sortOrder', 'sortBy', 'fields'];
        excludingImportant.forEach((key) => delete queryObj[key]);
        const filterConditions = {};
        Object.entries(queryObj).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                if (key === 'author') {
                    filterConditions[key] = value;
                }
                else {
                    filterConditions[key] = value;
                }
            }
        });
        if (Object.keys(filterConditions).length > 0) {
            this.modelQuery = this.modelQuery.find(filterConditions);
        }
        return this;
    }
    sort() {
        var _a, _b;
        const sortBy = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.sortBy;
        const sortOrder = (_b = this === null || this === void 0 ? void 0 : this.query) === null || _b === void 0 ? void 0 : _b.sortOrder;
        if (sortBy && (sortOrder === 'asc' || sortOrder === 'desc')) {
            const sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
            this.modelQuery = this.modelQuery.sort(sortStr);
        }
        return this;
    }
}
exports.default = QueryBuilder;
