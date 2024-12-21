import { JwtPayload } from 'jsonwebtoken';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';
import { User } from '../user/user.model';
import { Types } from 'mongoose';
import QueryBuilder from '../../../Builder/QueryBuilder';

const createBlogIntoDB = async (payload: TBlog, user: JwtPayload) => {
  const userFind = await User.findOne({ email: user?.email });
  if (!userFind) {
    throw new Error('User not found');
  }
  payload.author = userFind?._id as Types.ObjectId;

  const result = await Blog.create(payload);
  return {
    _id: result._id,
    title: result.title,
    content: result.content,
    author: {
      _id: userFind?._id,
      name: userFind?.name,
      email: userFind?.email,
    },
  };
};

const searchAbleFinds = ['title', 'content'];

const getAllBlogIntoDB = async (query: Record<string, unknown>) => {
  const blogs = new QueryBuilder(
    Blog.find({}, { _id: 1, title: 1, content: 1, author: 1 }).populate(
      'author',
      '_id name email',
    ),
    query,
  )
  .search(searchAbleFinds)
  .sort()
  .filter();

  const result = await blogs.modelQuery.exec();;
  return result;
};

const updateBlogIntoDB = async (_id: string, payload: TBlog) => {

  const result = await Blog.findOneAndUpdate(
    { _id },
    { $set: payload },
    { new: true},
  ).populate('author', "_id name email");
  return {
      _id: result?._id, 
      title: result?.title, 
      content: result?.content,
      author: result?.author 
  };
};

const deletedBlogIntoDB = async (_id: string) => {
  const result = await Blog.findByIdAndDelete({ _id });
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deletedBlogIntoDB,
  getAllBlogIntoDB,
};
