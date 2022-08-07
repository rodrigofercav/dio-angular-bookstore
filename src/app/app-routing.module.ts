import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksOnSaleComponent } from './pages/books-on-sale/books-on-sale.component';
import { BooksComponent } from './pages/books/books.component';
import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [
    { path: "", redirectTo: "books", pathMatch: "full" },
    { path: "books", component: BooksComponent },
    { path: "onsale", component: BooksOnSaleComponent },
    { path: "**", component: Error404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
