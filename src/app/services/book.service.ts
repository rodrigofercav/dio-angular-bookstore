import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private apiUrl: string = environment.API_URL + "/books";

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(this.apiUrl);
    }

    getById(id: number): Observable<Book> {
        return this.httpClient.get<Book>(`${this.apiUrl}/${id}`);
    }

    save(book: Book): Observable<Book> {
        if (book.id)
            return this.httpClient.put<Book>(`${this.apiUrl}/${book.id}`, book);

        return this.httpClient.post<Book>(this.apiUrl, book);
    }

    delete(id: number): Observable<Book> {
        return this.httpClient.delete<Book>(`${this.apiUrl}/${id}`);
    }
}
