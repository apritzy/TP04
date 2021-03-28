import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../service/produit.service';
import {Observable,of,from} from 'rxjs';
//import {filter} from 'rxjs/operators';
import { Store } from '@ngxs/store';
import {AddReference} from '../../../shared/actions/panier.actions';
import { Reference } from '../../../shared/models/reference';
import { PanierState } from 'src/shared/states/panier-state';
import { interval } from 'rxjs';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private produitService : ProduitService, private store : Store) { }

  observable1$ : Observable<string>;
  observable2$ : Observable<Array<string>> = of (["Obs2 - Data 1","Obs2 - Data 2", "Obs2 - Data 3"]);
  observable3$ : Observable<string> = from (["Obs3 - Data 1","Obs3 - Data 2", "Obs3 - Data 3"]);
  observable4$ : Observable<any> = null;
  observable5$ : Observable<any> = null;

  tabproduit : Array<any> = [];

  tabData : Array<String> = [];
  subscribe : any;

  ref : string ;

  ngOnInit(): void {

    this.observable4$ = from ([
      {"ref":"x1","titre":"voiture","prix":10000},
      {"ref":"x2","titre":"smartphone","prix":500},
      {"ref":"x3","titre":"verre","prix":3},
      {"ref":"x4","titre":"essence","prix":100},
      {"ref":"x5","titre":"yaourt","prix":3},
      {"ref":"x6","titre":"alcool","prix":15},
      {"ref":"x7","titre":"guitare","prix":100},
      {"ref":"x8","titre":"livres","prix":20},
      {"ref":"x9","titre":"habits","prix":15},
      {"ref":"x10","titre":"bouteille de vin","prix":20}]
    );

    // onClick () {
    //   this.produitService.log ("click catalogue")

    //   if (this.subscribe) {
    //     console.log ("unsubscribe")
    //     this.subscribe.unsubscribe (); 
    //   }

    //   this.subscribe = this.observable1$.subscribe (
    //     {
    //       next : value => {this.tabData.push (value)},
    //       complete : () => {console.log ("complete")},
    //       error : err =>  {console.log (err)}
    //     }
    //   )
    // }  

    // onClickBackend () {
    //   this.observable5$ = this.produitService.getCatalogue ();
    // }

    // addPanier (ref : string) {
    //   console.log (ref);
      
    //   this.store.dispatch (new AddReference ({"reference":ref}));
    // }

  }

}
