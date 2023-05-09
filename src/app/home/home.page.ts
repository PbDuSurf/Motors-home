import { Component, OnInit } from '@angular/core';

import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public produtos: any[] = [];

  constructor(private produtoServ: ProdutoService) { }

  ngOnInit() {
    this.produtoServ.getAll().then((documentos)=>{
      this.produtos = documentos;
      console.log(this.produtos);
    })
  }

}
