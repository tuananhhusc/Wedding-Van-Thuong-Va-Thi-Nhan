// ===================================
// Supabase Table Types
// ===================================

export interface RsvpEntry {
  id?: number;
  name: string;
  guests: number;
  attending?: boolean;
  message?: string;
  created_at?: string;
}

export interface BankAccount {
  id?: number;
  role: "bride" | "groom";
  account_holder: string;
  account_number: string;
  bank_name: string;
  qr_code_url?: string;
}

// ===================================
// Event Card Types
// ===================================

export interface EventCard {
  id: string;
  title: string;
  subtitle: string;
  iconType?: "cross" | "rings" | "olive" | "church" | "goblet" | "banquet";
  imageUrl?: string;
  datetime: string;
  venue: string;
  address: string;
  mapUrl: string;
  calendarUrl: string;
}

// ===================================
// Component Props Types
// ===================================

export interface SectionProps {
  id: string;
  className?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
