import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { Error404Component } from './shared/components/error404/error404.component';
import { BookCategoryPipe } from './shared/pipes/book-category.pipe';
import { BooksComponent } from './pages/books/books.component';
import { BooksOnSaleComponent } from './pages/books-on-sale/books-on-sale.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BookCardComponent,
        BookListComponent,
        Error404Component,
        BookCategoryPipe,
        BooksComponent,
        BooksOnSaleComponent,
        FilterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
