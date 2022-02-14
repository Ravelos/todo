import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TarefaModel } from 'src/app/services/tarefa-model';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  @Input()
  public tarefa: TarefaModel = new TarefaModel();

  @Output()
  public mudarStatus = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public atualizar(id: number): void {
    this.mudarStatus.emit(id);
  }
}
