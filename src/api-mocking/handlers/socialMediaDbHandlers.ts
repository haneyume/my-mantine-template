import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

import { v4 as uuidv4 } from 'uuid';

const db = factory({
  posts: {
    id: primaryKey(faker.string.uuid),
    title: String,
    body: String,
    likeCount: Number,
    commentCount: Number,
  },
});

function seedDB() {
  // --- Posts ---

  db.posts.create({
    id: uuidv4(),
    title: 'Post 1',
    body: 'Body 1',
    likeCount: 1,
    commentCount: 1,
  });
}

seedDB();

const baseUrl = import.meta.env.VITE_API_URL + '/api';

export const socialMediaDbHandlers = [...db.posts.toHandlers('rest', baseUrl)];
