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
          created_at: string
          file_name: string
          id: number
          title: string
          url: string
          user_id: string
          views: number
          visiblity: string
        }
        Insert: {
          created_at?: string
          file_name: string
          id?: number
          title: string
          url: string
          user_id: string
          views?: number
          visiblity: string
        }
        Update: {
          created_at?: string
          file_name?: string
          id?: number
          title?: string
          url?: string
          user_id?: string
          views?: number
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
