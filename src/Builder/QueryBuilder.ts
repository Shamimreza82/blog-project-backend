
import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const search = this?.query?.search as string | undefined;
    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map((field) => ({
          [field]: { $regex: search, $options: 'i' },
        })),
      } as FilterQuery<T>);
    }

    return this;
  }

  filter() {
    const queryObj = { ...this.query };
    const excludingImportant = ['search', 'sortOrder', 'sortBy', 'fields'];
    excludingImportant.forEach((key) => delete queryObj[key]);
  

    const filterConditions: { [key: string]: unknown } = {};
    Object.entries(queryObj).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (key === 'author') {
          filterConditions[key] = value; 
        } else {
          filterConditions[key] = value;
        }
      }
    });
  
    if (Object.keys(filterConditions).length > 0) {
      this.modelQuery = this.modelQuery.find(filterConditions as FilterQuery<T>);
    }
  
    return this;
  }

  
  sort() {
    const sortBy = this?.query?.sortBy as string | undefined;
    const sortOrder = this?.query?.sortOrder as string | undefined;

    if (sortBy && (sortOrder === 'asc' || sortOrder === 'desc')) {
      const sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
      this.modelQuery = this.modelQuery.sort(sortStr);
    }

    return this;
  }
}

export default QueryBuilder;