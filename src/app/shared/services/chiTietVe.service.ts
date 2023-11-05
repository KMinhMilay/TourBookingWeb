import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ChiTietVeService {

    protected url: string = 'api/chiTietVe';
    constructor(protected http: HttpClient) { }

    public getAll(): Observable<any> {
        return this.http.get(`${this.url}/getAll`);
    }

    public filterChiTietVe(request: any): Observable<any> {
        return this.http.post(`${this.url}/filterChiTietVe`, request);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(`${this.url}/Delete?inputMaVe=${id}`);
    }

    public update(request: any): Observable<any> {
        return this.http.put(`${this.url}/Update`, request);
    }

}