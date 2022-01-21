import { ApiBusItinerary } from './models/bus-itinerary.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiBusLine } from './models/bus-line.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  public apiBusLine(): Observable<ApiBusLine[]> {
    return this.http.get<ApiBusLine[]>(`${environment.urlBus}o`);
  }

  public apiMiniBus(): Observable<ApiBusLine[]> {
    return this.http.get<ApiBusLine[]>(`${environment.urlBus}l`);
  }

  public setItinerary(id: number): Observable<ApiBusItinerary[]> {
    return this.http.get<ApiBusItinerary[]>(`${environment.urlItinerary}${id}`);
  }
}
