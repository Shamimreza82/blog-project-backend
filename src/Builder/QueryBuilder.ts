import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const search = this?.query?.search;
    this.modelQuery = this.modelQuery.find({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      $or: searchableFields.map((field: any) => ({
        [field]: { $regex: search, $options: 'i' },
      })),
    } as FilterQuery<T>);

    return this;
  }

  filter() {
    const queryObj = { ...this.query };

    const excludingImportant = [
      'search',
      'page',
      'limit',
      'sortOrder',
      'sortBy',
      'fields',
    ];

    excludingImportant.forEach((key) => delete queryObj[key]);
    this.modelQuery = this.modelQuery.find({_id: queryObj.filter});

    return this;
  }

  // paginate() {
  //   const page = Number(this?.query?.page) || 1;
  //   const limit = Number(this?.query?.limit) || 10;
  //   const skip = (page - 1) * limit;

  //   this.modelQuery = this.modelQuery.skip(skip).limit(limit);

  //   return this;
  // }

  sort() {
    let sortStr = '';
    console.log(this.query);
    if (this?.query?.sortBy && this?.query?.sortOrder) {
      const sortBy = this?.query?.sortBy;
      const sortOrder = this?.query?.sortOrder;
      sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
    }
    if(sortStr){
       this.modelQuery = this.modelQuery.sort(sortStr);
    }
    

    return this;
  }

  select() {
    let fields = '-__v';

    if (this?.query?.fields) {
      fields = (this?.query.fields as string)?.split(',').join(' ');
    }

    this.modelQuery = this.modelQuery.select(fields);

    return this;
  }
}

export default QueryBuilder;
