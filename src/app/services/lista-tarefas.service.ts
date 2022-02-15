import { Injectable } from '@angular/core';
import { TarefaModel } from './tarefa-model';
​
@Injectable({
  providedIn: 'root',
})
export class ListaTarefasService {
  public lista: Array<TarefaModel> = [];
  private proximoId = 1; // controle interno de ID
  public taskCounter = 0;
constructor() {}

​public adicionar(descricao: string): void {
    const nova = new TarefaModel(); // criar nova tarefa
    nova.id = this.proximoId;
    nova.descricao = descricao;
    this.lista.push(nova);
    // atualizar outras variaveis
    this.proximoId++; // Atualiza o ID para o próximo
    this.updatingCounter();
  }
  public updatingCounter():void{

    this.taskCounter = this.lista.filter((x)=>!x.concluida).length;

  }

  public atualizar(tarefaid: number): void {
    const tarefaEncontrada = this.lista.find((x) => x.id === tarefaid);
    if (tarefaEncontrada) {
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida; // Atualizar status
    }
    this.updatingCounter();
  }

  public cleanList():void{
    this.lista = [];
    this.taskCounter =0;
  }
}
