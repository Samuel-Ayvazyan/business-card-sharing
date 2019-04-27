import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('users');
  }

  getUsers(): Observable<any[]> {
    return this.itemsCollection.valueChanges();
  }

  getUser(uid: string): Observable<any[]> {
    return this.afs.collection<any>(`users/${uid}`).valueChanges();
  }

  updateUser(uid: string, item : any){
    return this.itemsCollection.doc(uid).update(item);
  }

}
