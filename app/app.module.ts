import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { PanierState } from '../shared/states/panier-state';
//import { CatalogueComponent } from './produits/catalogue/catalogue.component';
//import { DetailComponent } from './produits/detail/detail.component';



const appRoutes : Routes = [
  {path:'accueil',component:AccueilComponent},
  {path:'formulaire',component:FormulaireComponent},
  {path: 'produits', canActivate: [AuthGuard], loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormulaireComponent,
    AccueilComponent,
    //CatalogueComponent,
    //DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot (appRoutes),
    NgxsModule.forRoot([PanierState]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
