import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Pipe({
    name: 'bookCategory'
})
export class BookCategoryPipe implements PipeTransform {

    transform(bookCategoryId: number, categoryList: Category[]): string {
        let categoryFilter = categoryList.filter(category => category.id === bookCategoryId);
        return categoryFilter[0].name;
    }
}
