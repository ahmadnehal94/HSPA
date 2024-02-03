import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/IProperty.Interface';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}
  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data: any) => {
        let propertiesArray: Array<IProperty> = [];
        data.forEach((element: IProperty) => {
          debugger;
          if (element.SellRent == SellRent) {
            propertiesArray.push(element);
          }
        });
        return propertiesArray;
      })
    );
  }
}
