import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStockPrice } from '../../models/stock-price.model';

@Injectable({ providedIn: 'root' })
export class StocksService {
  private readonly basePath = 'https://financialmodelingprep.com/api/v3';

  constructor(private http: HttpClient) {}

  public getFullPrice(symbol: string): Observable<IStockPrice[]> {
    const url = `${this.basePath}/historical-price-full/${symbol}?serietype=line`;
    return this.http.get<IStockPrice[]>(url);
  }
}
