export interface CompanyStats {
  projectsDelivered: string;
  projectsDeliveredCount: number;
  clientSatisfaction: string;
  supportAvailability: string;
  platforms: string;
  hours: string;
  email: string;
  address: string;
}

export const COMPANY_STATS: CompanyStats = {
  projectsDelivered: '180+',
  projectsDeliveredCount: 180,
  clientSatisfaction: '100%',
  supportAvailability: '24/7',
  platforms: 'Android, iOS, Web, Wearables',
  hours: 'Mon – Fri: 9:00 AM – 6:00 PM AEST',
  email: 'info@pearlenergy.com.au',
  address: 'Suite 202 Building B, 20 Lexington Dr, Bella Vista NSW 2153',
};

export default COMPANY_STATS;
