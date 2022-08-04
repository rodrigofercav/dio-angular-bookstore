import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    categoryList!: Category[];

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
}
