import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit, OnChanges {
    @Input() booksOnSale: boolean = false;
    @Input() filterByCategory!: number;

    bookList!: Book[];
    categoryList!: Category[];

    constructor(private bookService: BookService, private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.getAllBooksCategories();
        this.getAllBooks();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.getAllBooksCategories();
        this.getAllBooks();
    }

    getAllBooks(): void {
        this.bookService.getAll().subscribe({
            next: books => {
                if (this.booksOnSale)
                    this.bookList = books.filter(book => book.discount > 0)
                else
                    this.bookList = books
                
                if (this.filterByCategory)
                    this.bookList = this.bookList.filter(book => book.category_id === this.filterByCategory);
            },
            error: err => console.log("Error: bookService.getAll() books.")
        });
    }

    getAllBooksCategories(): void {
        this.categoryService.getAll().subscribe({
            next: categories => this.categoryList = categories,
            error: err => console.log("Error: categoryService.getAll() caterogies.")
        });
    }
}
