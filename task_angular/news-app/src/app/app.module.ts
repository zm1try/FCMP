import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './news-list-item/news-list-item.component';
import { LoadMoreButtonComponent } from './load-more-button/load-more-button.component';
import { CreateEditArticleComponent } from './create-edit-article/create-edit-article.component';
import { FilterByWordPipe } from './filter-by-word.pipe';
import { ArticlePageComponent } from './article-page/article-page.component';

const appRoutes: Routes = [
  { path: 'article/:title', component: ArticlePageComponent },
  { path: 'edit-article/:id', component: CreateEditArticleComponent },
  { path: 'create-article', component: CreateEditArticleComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NotFoundComponent,
    MainPageComponent,
    LoginButtonComponent,
    CustomSelectComponent,
    NewsListComponent,
    NewsListItemComponent,
    LoadMoreButtonComponent,
    CreateEditArticleComponent,
    FilterByWordPipe,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(LoginButtonComponent, {injector: injector});
    customElements.define('app-login-button', custom);
  }
 }
