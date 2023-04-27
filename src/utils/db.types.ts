export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      artwork: {
        Row: {
          created_at: string | null
          id: number
          title: string
          url: string
          user_id: string
          visiblity: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          title: string
          url: string
          user_id: string
          visiblity: string
        }
        Update: {
          created_at?: string | null
          id?: number
          title?: string
          url?: string
          user_id?: string
          visiblity?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
