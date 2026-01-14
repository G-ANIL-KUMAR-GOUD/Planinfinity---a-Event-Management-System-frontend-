export interface EventData {
  id: number;
  name: string;
  description?: string;
  dateTime: string;
  category: string;
  price: number;
  venue: string;
  capacity: number;
  image?: string; // base64 string
  imageContentType?: string;
}
