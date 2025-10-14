import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WatchlistDTO } from './models/watchlist.dto';
import { CreateTrackedRequestDto } from './models/tracked.request.dto';

export interface Config {
    // Define the properties of your Config interface here
}

@Injectable({ providedIn: 'root' })
export class WatchlistService {
    constructor(private http: HttpClient) {}

    getConfig(): Observable<WatchlistDTO> {
        console.log('Service is working');
        return this.http.get<WatchlistDTO>('http://localhost:3000/api/v1/watchlist');
    }

    getTrackedRequests(): WatchlistDTO[] {
        let result: WatchlistDTO[] = [];
        this.http.post<WatchlistDTO[]>('http://localhost:3000/api/v1/tracked-requests/tracked', { pong: true }).subscribe(data => {
            result = data;
        });
        return result;
    }

    ngOnInit() {
        this.getTrackedRequests();
    }
}
