export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number;
          checksum: string;
          finished_at: string | null;
          id: string;
          logs: string | null;
          migration_name: string;
          rolled_back_at: string | null;
          started_at: string;
        };
        Insert: {
          applied_steps_count?: number;
          checksum: string;
          finished_at?: string | null;
          id: string;
          logs?: string | null;
          migration_name: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Update: {
          applied_steps_count?: number;
          checksum?: string;
          finished_at?: string | null;
          id?: string;
          logs?: string | null;
          migration_name?: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Relationships: [];
      };
      bug_reports: {
        Row: {
          content: string;
          created_at: string;
          id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          content: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'bug_reports_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      chat_messages: {
        Row: {
          chat_room_id: string;
          content: string;
          created_at: string;
          id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          chat_room_id: string;
          content: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          chat_room_id?: string;
          content?: string;
          created_at?: string;
          id?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'chat_messages_chat_room_id_fkey';
            columns: ['chat_room_id'];
            isOneToOne: false;
            referencedRelation: 'chat_rooms';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'chat_messages_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      chat_room_participants: {
        Row: {
          chat_room_id: string;
          created_at: string;
          last_read: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          chat_room_id: string;
          created_at?: string;
          last_read?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          chat_room_id?: string;
          created_at?: string;
          last_read?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'chat_room_participants_chat_room_id_fkey';
            columns: ['chat_room_id'];
            isOneToOne: false;
            referencedRelation: 'chat_rooms';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'chat_room_participants_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      chat_rooms: {
        Row: {
          created_at: string;
          description: string;
          id: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description?: string;
          id?: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          description?: string;
          id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      notification_tokens: {
        Row: {
          created_at: string;
          token: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          token: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          token?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'notification_tokens_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      notifications: {
        Row: {
          category: Database['public']['Enums']['notification_category'];
          content: string;
          created_at: string;
          id: string;
          target_id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          category: Database['public']['Enums']['notification_category'];
          content: string;
          created_at?: string;
          id?: string;
          target_id: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          category?: Database['public']['Enums']['notification_category'];
          content?: string;
          created_at?: string;
          id?: string;
          target_id?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'notifications_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      post_favorites: {
        Row: {
          created_at: string;
          post_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          post_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          post_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'post_favorites_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'post_favorites_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      post_likes: {
        Row: {
          created_at: string;
          post_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          post_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          post_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'post_likes_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'post_likes_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      post_tags: {
        Row: {
          created_at: string;
          id: string;
          tag: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          tag: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          tag?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      post_to_tag: {
        Row: {
          created_at: string;
          post_id: string;
          tag_id: string;
        };
        Insert: {
          created_at?: string;
          post_id: string;
          tag_id: string;
        };
        Update: {
          created_at?: string;
          post_id?: string;
          tag_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'post_to_tag_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'post_to_tag_tag_id_fkey';
            columns: ['tag_id'];
            isOneToOne: false;
            referencedRelation: 'post_tags';
            referencedColumns: ['id'];
          },
        ];
      };
      post_views: {
        Row: {
          created_at: string;
          post_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          post_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          post_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'post_views_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'post_views_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      posts: {
        Row: {
          comment_count: number;
          content: string;
          created_at: string;
          deleted_at: string | null;
          id: string;
          like_count: number;
          medias: string[] | null;
          parent_id: string | null;
          type: Database['public']['Enums']['post_type'];
          updated_at: string;
          user_id: string;
          view_count: number;
        };
        Insert: {
          comment_count?: number;
          content: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: string;
          like_count?: number;
          medias?: string[] | null;
          parent_id?: string | null;
          type: Database['public']['Enums']['post_type'];
          updated_at?: string;
          user_id: string;
          view_count?: number;
        };
        Update: {
          comment_count?: number;
          content?: string;
          created_at?: string;
          deleted_at?: string | null;
          id?: string;
          like_count?: number;
          medias?: string[] | null;
          parent_id?: string | null;
          type?: Database['public']['Enums']['post_type'];
          updated_at?: string;
          user_id?: string;
          view_count?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'posts_parent_id_fkey';
            columns: ['parent_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'posts_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      project_shared_contents: {
        Row: {
          content: Json | null;
          created_at: string;
          id: string;
          metadata: Json;
          project_id: string;
          team_id: string;
          type: string;
          updated_at: string;
        };
        Insert: {
          content?: Json | null;
          created_at?: string;
          id: string;
          metadata?: Json;
          project_id: string;
          team_id: string;
          type: string;
          updated_at?: string;
        };
        Update: {
          content?: Json | null;
          created_at?: string;
          id?: string;
          metadata?: Json;
          project_id?: string;
          team_id?: string;
          type?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'project_shared_contents_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'projects';
            referencedColumns: ['id'];
          },
        ];
      };
      projects: {
        Row: {
          content: Json | null;
          created_at: string;
          description: string;
          fork_form: string | null;
          id: string;
          is_public: boolean;
          metadata: Json;
          name: string;
          team_id: string;
          thumbnail_url: string;
          type: string;
          updated_at: string;
        };
        Insert: {
          content?: Json | null;
          created_at?: string;
          description?: string;
          fork_form?: string | null;
          id?: string;
          is_public?: boolean;
          metadata?: Json;
          name: string;
          team_id: string;
          thumbnail_url?: string;
          type: string;
          updated_at?: string;
        };
        Update: {
          content?: Json | null;
          created_at?: string;
          description?: string;
          fork_form?: string | null;
          id?: string;
          is_public?: boolean;
          metadata?: Json;
          name?: string;
          team_id?: string;
          thumbnail_url?: string;
          type?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'projects_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      reports: {
        Row: {
          category: Database['public']['Enums']['report_category'];
          content: string;
          created_at: string;
          id: string;
          target: Database['public']['Enums']['report_trget'];
          target_id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          category: Database['public']['Enums']['report_category'];
          content: string;
          created_at?: string;
          id?: string;
          target: Database['public']['Enums']['report_trget'];
          target_id: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          category?: Database['public']['Enums']['report_category'];
          content?: string;
          created_at?: string;
          id?: string;
          target?: Database['public']['Enums']['report_trget'];
          target_id?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'reports_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      tasks: {
        Row: {
          content: string;
          created_at: string;
          id: string;
          is_completed: boolean;
          tags: string[] | null;
          updated_at: string;
        };
        Insert: {
          content: string;
          created_at?: string;
          id?: string;
          is_completed?: boolean;
          tags?: string[] | null;
          updated_at?: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          id?: string;
          is_completed?: boolean;
          tags?: string[] | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      team_members: {
        Row: {
          created_at: string;
          role: Database['public']['Enums']['team_role'];
          team_id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          role: Database['public']['Enums']['team_role'];
          team_id: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          role?: Database['public']['Enums']['team_role'];
          team_id?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'team_members_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'team_members_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      team_shared_contents: {
        Row: {
          content: Json | null;
          created_at: string;
          id: string;
          metadata: Json;
          team_id: string;
          type: string;
          updated_at: string;
        };
        Insert: {
          content?: Json | null;
          created_at?: string;
          id: string;
          metadata?: Json;
          team_id: string;
          type: string;
          updated_at?: string;
        };
        Update: {
          content?: Json | null;
          created_at?: string;
          id?: string;
          metadata?: Json;
          team_id?: string;
          type?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'team_shared_contents_team_id_fkey';
            columns: ['team_id'];
            isOneToOne: false;
            referencedRelation: 'teams';
            referencedColumns: ['id'];
          },
        ];
      };
      teams: {
        Row: {
          created_at: string;
          creator_id: string;
          description: string;
          id: string;
          name: string;
          plan: Database['public']['Enums']['team_plan'];
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          creator_id: string;
          description?: string;
          id?: string;
          name: string;
          plan?: Database['public']['Enums']['team_plan'];
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          creator_id?: string;
          description?: string;
          id?: string;
          name?: string;
          plan?: Database['public']['Enums']['team_plan'];
          updated_at?: string;
        };
        Relationships: [];
      };
      ui_builder_components: {
        Row: {
          content: Json;
          created_at: string;
          id: string;
          updated_at: string;
        };
        Insert: {
          content: Json;
          created_at?: string;
          id?: string;
          updated_at?: string;
        };
        Update: {
          content?: Json;
          created_at?: string;
          id?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_blocks: {
        Row: {
          created_at: string;
          target_user_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          target_user_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          target_user_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_blocks_target_user_id_fkey';
            columns: ['target_user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_blocks_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_followings: {
        Row: {
          created_at: string;
          target_user_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          target_user_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          target_user_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_followings_target_user_id_fkey';
            columns: ['target_user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_followings_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_settings: {
        Row: {
          created_at: string;
          id: string;
          language: Database['public']['Enums']['user_language'];
          notification: boolean;
          theme: Database['public']['Enums']['user_theme'];
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id: string;
          language?: Database['public']['Enums']['user_language'];
          notification?: boolean;
          theme?: Database['public']['Enums']['user_theme'];
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          language?: Database['public']['Enums']['user_language'];
          notification?: boolean;
          theme?: Database['public']['Enums']['user_theme'];
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_settings_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          avatar_url: string;
          country: string | null;
          created_at: string;
          date_of_birth: string | null;
          email: string;
          facebook_account: string | null;
          follower_count: number;
          following_count: number;
          gender: Database['public']['Enums']['user_gender'] | null;
          has_new_stories: boolean;
          id: string;
          instagram_account: string | null;
          introduction: string;
          latitude: number | null;
          linkedin_account: string | null;
          longitude: number | null;
          nickname: string;
          post_count: number;
          tiktok_account: string | null;
          twitter_account: string | null;
          updated_at: string;
        };
        Insert: {
          avatar_url?: string;
          country?: string | null;
          created_at?: string;
          date_of_birth?: string | null;
          email: string;
          facebook_account?: string | null;
          follower_count?: number;
          following_count?: number;
          gender?: Database['public']['Enums']['user_gender'] | null;
          has_new_stories?: boolean;
          id?: string;
          instagram_account?: string | null;
          introduction?: string;
          latitude?: number | null;
          linkedin_account?: string | null;
          longitude?: number | null;
          nickname: string;
          post_count?: number;
          tiktok_account?: string | null;
          twitter_account?: string | null;
          updated_at?: string;
        };
        Update: {
          avatar_url?: string;
          country?: string | null;
          created_at?: string;
          date_of_birth?: string | null;
          email?: string;
          facebook_account?: string | null;
          follower_count?: number;
          following_count?: number;
          gender?: Database['public']['Enums']['user_gender'] | null;
          has_new_stories?: boolean;
          id?: string;
          instagram_account?: string | null;
          introduction?: string;
          latitude?: number | null;
          linkedin_account?: string | null;
          longitude?: number | null;
          nickname?: string;
          post_count?: number;
          tiktok_account?: string | null;
          twitter_account?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      weweb_roles: {
        Row: {
          created_at: string;
          id: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      weweb_user_roles: {
        Row: {
          created_at: string;
          id: string;
          roleId: string;
          userId: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          roleId: string;
          userId: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          roleId?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'weweb_user_roles_roleId_fkey';
            columns: ['roleId'];
            isOneToOne: false;
            referencedRelation: 'weweb_roles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'weweb_user_roles_userId_fkey';
            columns: ['userId'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      hello_world: {
        Args: {
          name: string;
        };
        Returns: string;
      };
    };
    Enums: {
      notification_category:
        | 'just_followed_you'
        | 'just_liked_your_post'
        | 'just_commented_your_post'
        | 'just_replied_your_comment'
        | 'just_tagged_you'
        | 'just_mentioned_you'
        | 'just_shared_your_post'
        | 'just_saved_your_post'
        | 'just_viewed_your_post'
        | 'just_started_live'
        | 'just_ended_live'
        | 'just_started_story'
        | 'just_ended_story';
      post_status: 'normal' | 'blocked' | 'live_ended';
      post_type: 'post' | 'comment' | 'story' | 'live';
      report_category: 'custom';
      report_trget: 'user' | 'post';
      team_plan: 'free' | 'pro' | 'enterprise';
      team_role: 'owner' | 'admin' | 'member';
      user_gender: 'male' | 'female';
      user_language: 'en' | 'ja' | 'zhHant' | 'zhHans';
      user_theme: 'system' | 'light' | 'dark';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;
