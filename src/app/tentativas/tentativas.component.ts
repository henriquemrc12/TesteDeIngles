import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  coracaoCheio = '/assets/coracao_cheio.png';
  coracaoVazio = '/assets/coracao_vazio.png';

  constructor() { }

  ngOnInit() {
  }

}
