import { Seller } from './seller';

export interface Sale {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export interface SalePage {
  content?: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size?: number;
  number: number;
  numberOfElements?: number;
  empty?: boolean;
}
export interface SaleSum {
  sellerName: string;
  sum: number;
}

export interface SaleSuccess {
  sellerName: string;
  visited: number;
  deals: number;
}
