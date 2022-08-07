import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-books-on-sale',
    templateUrl: './books-on-sale.component.html'
})
export class BooksOnSaleComponent {
    constructor() { }

    idCategoryToFilterBooks!: number;

    filterBooks(filteredCategory: number): void {
        console.log("chegou na page books on sale:",filteredCategory);
        this.idCategoryToFilterBooks = filteredCategory;
    }
}
