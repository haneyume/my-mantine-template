type User = {
  id: string;
  avatar: string;
  email: string;
  nickname: string;
  introduction: string;
};

type Team = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type TeamMember = {
  id: string;
  teamId: string;
  userId: string;
  role: 'owner' | 'manager' | 'member';
  createdAt: string;
  updatedAt: string;

  // user
  user: User;
};

type Project = {
  id: string;
  teamId: string;
  isDraft: boolean;
  isPublic: boolean;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;

  // data
  data: string;
};

export type { User, Team, TeamMember, Project };
