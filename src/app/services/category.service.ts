import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Category } from "../models/category";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private apiUrl: string = environment.API_URL + "/books/categories";

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(this.apiUrl);
    }

    getById(id: number): Observable<Category> {
        return this.httpClient.get<Category>(`${this.apiUrl}/${id}`);
    }

    save(category: Category): Observable<Category> {
        if (category.id)
            return this.httpClient.put<Category>(`${this.apiUrl}/${category.id}`, category);

        return this.httpClient.post<Category>(this.apiUrl, category);
    }

    delete(id: number): Observable<Category> {
        return this.httpClient.delete<Category>(`${this.apiUrl}/${id}`);
    }
}
