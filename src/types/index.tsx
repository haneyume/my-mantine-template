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
  created_at: string;
  updated_at: string;
};

type TeamMember = {
  id: string;
  team_id: string;
  user_id: string;
  role: 'owner' | 'manager' | 'member';
  created_at: string;
  updated_at: string;

  // user
  user: User;
};

type Project = {
  id: string;
  team_id: string;
  is_draft: boolean;
  is_public: boolean;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;

  // data
  data: string;
};

export type { User, Team, TeamMember, Project };
