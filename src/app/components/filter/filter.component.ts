import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    categoryList!: Category[];
    @Output() eeFilterBooks = new EventEmitter();

    constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.getAllBooksCategories();
    }

    getAllBooksCategories(): void {
        this.categoryService.getAll().subscribe({
            next: categories => this.categoryList = categories,
            error: err => console.log("Error: categoryService.getAll() caterogies.")
        });
    }

    filterByCategory(categoryId: number) {
        this.eeFilterBooks.emit(categoryId);
    }
}
