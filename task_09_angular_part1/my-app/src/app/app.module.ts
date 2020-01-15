import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MyMainViewComponent } from './my-main-view/my-main-view.component';
import { MySidebarComponent } from './my-sidebar/my-sidebar.component';

const appRoutes: Routes = [
  { path: '404', component: NotFoundComponent },
  { path: 'contact', component: MyContactsComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyMainViewComponent,
    MySidebarComponent,
    NotFoundComponent,
    MyContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
