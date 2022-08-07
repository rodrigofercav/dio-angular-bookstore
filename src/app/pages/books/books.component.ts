import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html'
})
export class BooksComponent {
    constructor() { }

    idCategoryToFilterBooks!: number;

    filterBooks(filteredCategory: number): void {
        console.log("chegou na page books:",filteredCategory);
        this.idCategoryToFilterBooks = filteredCategory;
    }
}
