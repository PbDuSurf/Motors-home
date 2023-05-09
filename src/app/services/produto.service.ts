import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { getFirestore, collection, doc, Firestore, getDocs } 
from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private firestoreDB: Firestore;

  constructor(private fireServ: FirebaseService) {
    this.firestoreDB = getFirestore(
                        this.fireServ.getApp()
                      );
  }

  public async getAll() {
    const produtosCol = collection(
      this.firestoreDB,
      'produtos'
    );
    const produtosSnapshot = await getDocs(
      produtosCol
    );
    const produtosList = produtosSnapshot.docs.map(
      doc => doc.data()
    );
    return produtosList;
  }
}
