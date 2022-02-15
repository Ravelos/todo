import { Component, OnInit } from '@angular/core';
import { ListaTarefasService } from 'src/app/services/lista-tarefas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

public descricaoNovaTarefa = '';

constructor(public svc: ListaTarefasService) { }

ngOnInit(): void {
  }

public adicionar(event?:any): void {

  if(Boolean(this.descricaoNovaTarefa)&& !event || (event?.key === 'Enter') ){

    this.svc.adicionar(this.descricaoNovaTarefa);
    this.descricaoNovaTarefa = ''; // limpar valor após o cadastros

  }


  }

}
