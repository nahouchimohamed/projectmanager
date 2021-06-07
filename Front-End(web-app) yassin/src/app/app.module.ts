import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { PortofolioComponent } from './components/portofolio/portofolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatTitlePipe } from './pipes/format-title.pipe';
import { SignINComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { Accordion, AccordionModule } from 'primeng/accordion';
import { SelectCategoryComponent } from './select-category/select-category.component';

import { OffreDetailsComponent } from './offre-details/offre-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { authInterceptorProviders } from '../app/components/sign-up/auth.interceptor';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule}from"@angular/material/dialog"
import {DialogOverviewExampleDialog} from '../app/offre-details/offre-details.component';
import {DialogOverviewExampleDialog1} from "../app/components/portofolio/portofolio.component";
import {DialogOverviewExampleDialog3} from "../app/components/portofolio/portofolio.component";


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';





@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog,
    HeaderComponent,
    MainPageComponent,
    DialogOverviewExampleDialog3,
    DialogOverviewExampleDialog1,

    PortofolioComponent,
    FormatTitlePipe,
    SignINComponent,
    SignUpComponent,
    SelectCategoryComponent,
     
    OffreDetailsComponent, ProfileComponent
  ],
  imports: [
    BrowserModule,  
    MatButtonModule,
    MatMenuModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatGridListModule,
    MatTableModule,
    MatListModule,
    MatDialogModule ,
    ReactiveFormsModule,
    MatPaginatorModule,
    AccordionModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    HttpClientModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
