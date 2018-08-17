import { Component } from '@angular/core';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GroceryList';
  Books: any[];
  constructor(db: AngularFireDatabase) {
    db.list('/Books')
    .valueChanges().subscribe(Books => {
      this.Books = Books;
      console.log(this.Books);
    });
  }
}
