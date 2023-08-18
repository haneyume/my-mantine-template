import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

import { v4 as uuidv4 } from 'uuid';

const db = factory({
  profiles: {
    id: primaryKey(faker.string.uuid),
    nickname: String,
    email: String,
    introduction: String,
  },
  organizations: {
    id: primaryKey(faker.string.uuid),
    name: String,
    description: String,
  },
  projects: {
    id: primaryKey(faker.string.uuid),
    organizationId: faker.string.uuid,
    name: String,
    description: String,
  },
});

function seedDB() {
  // --- Profile ---

  db.profiles.create({
    id: 'me',
    nickname: 'Test User',
    email: 'test@test.com',
    introduction: 'This is my introduction',
  });

  // --- Organizations ---

  const organizationId = uuidv4();
  const organizationId2 = uuidv4();

  db.organizations.create({
    id: organizationId,
    name: 'My Organization',
    description: 'This is my organization',
  });

  db.organizations.create({
    id: organizationId2,
    name: 'My Organization - 2',
    description: 'This is my organization',
  });

  // --- Projects ---

  db.projects.create({
    id: uuidv4(),
    organizationId: organizationId,
    name: 'Test Project',
    description: 'This is a test project',
  });

  db.projects.create({
    id: uuidv4(),
    organizationId: organizationId,
    name: 'Test Project - 2',
    description: 'This is a test project',
  });

  db.projects.create({
    id: uuidv4(),
    organizationId: organizationId2,
    name: 'Test Project - 3',
    description: 'This is a test project',
  });
}

seedDB();

const baseUrl = import.meta.env.VITE_API_URL + '/api';

export const dbHandlers = [
  ...db.profiles.toHandlers('rest', baseUrl),
  ...db.organizations.toHandlers('rest', baseUrl),
  ...db.projects.toHandlers('rest', baseUrl),
];
