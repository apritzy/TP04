import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DelReference} from '../../../shared/actions/panier.actions';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private store : Store) { }

  ngOnInit(): void {
  }

  

  deletePanier (ref :string ) {
    console.log (ref);

    this.store.dispatch (new DelReference ({"reference":ref}));
  }

}
