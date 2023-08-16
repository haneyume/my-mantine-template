import { factory, primaryKey, manyOf } from '@mswjs/data';
import { faker } from '@faker-js/faker';

import { v4 as uuidv4 } from 'uuid';

const db = factory({
  organizations: {
    id: primaryKey(faker.string.uuid),
    name: String,
    description: String,
    projects: manyOf('projects'),
  },
  projects: {
    id: primaryKey(faker.string.uuid),
    organizationId: faker.string.uuid,
    name: String,
    description: String,
  },
  posts: {
    id: primaryKey(faker.string.uuid),
    title: String,
    body: String,
    likeCount: Number,
    commentCount: Number,
  },
});

const organizationId = uuidv4();

db.organizations.create({
  id: organizationId,
  name: 'My Organization',
  description: 'This is my organization',
  projects: [],
});

db.projects.create({
  id: uuidv4(),
  organizationId: organizationId,
  name: 'Test Project',
  description: 'This is a test project',
});

db.posts.create({
  id: uuidv4(),
  title: 'Post 1',
  body: 'Body 1',
  likeCount: 1,
  commentCount: 1,
});

export const organizationsHandlers = db.organizations.toHandlers(
  'rest',
  import.meta.env.VITE_API_URL + '/api',
);

export const projectsHandlers = db.projects.toHandlers(
  'rest',
  import.meta.env.VITE_API_URL + '/api',
);

export const postsHandlers = db.posts.toHandlers(
  'rest',
  import.meta.env.VITE_API_URL + '/api',
);

export const dbHandlers = [
  ...organizationsHandlers,
  ...projectsHandlers,
  ...postsHandlers,
];
