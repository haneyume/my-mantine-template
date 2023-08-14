import { factory, primaryKey } from '@mswjs/data';

const db = factory({
  posts: {
    id: primaryKey(String),
    title: String,
    body: String,
    likeCount: Number,
    commentCount: Number,
  },
});

db.posts.create({
  id: '1',
  title: 'Post 1',
  body: 'Body 1',
  likeCount: 1,
  commentCount: 1,
});

export const handlers = db.posts.toHandlers('rest');
