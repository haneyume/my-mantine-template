type Project = {
  id: string;
  team_id: string;
  is_draft: boolean;
  is_public: boolean;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;

  data: Record<string, any>;
};

export type { Project };
