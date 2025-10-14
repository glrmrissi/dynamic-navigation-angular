export interface WatchlistDTO {
  id: number;
  domain_code: number;
  business_name: string;
  user_name: string;
  total_invoices: number;
  total_accesses: number;
  email: string;
  digital_certificate: boolean;
  pipeline_step: string;
  whatsapp_url: string;
  plan_id: number;
  plan_name: string;
  is_active: boolean;
  is_deleted: boolean;
  deleted_at: Date;
  updated_at: Date;
  created_at: Date;
  payment_date: Date;
  onboarding_date: Date;
}