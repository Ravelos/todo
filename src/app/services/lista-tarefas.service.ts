import { Injectable } from '@angular/core';
import { TarefaModel } from './tarefa-model';
​
@Injectable({
  providedIn: 'root',
})
export class ListaTarefasService {
  public lista: Array<TarefaModel> = [];
  private proximoId = 1; // controle interno de ID
constructor() {}

​public adicionar(descricao: string): void {
    const nova = new TarefaModel(); // criar nova tarefa
    nova.id = this.proximoId;
    nova.descricao = descricao;
    this.lista.push(nova);
    // atualizar outras variaveis
    this.proximoId++; // Atualiza o ID para o próximo
  }
  public atualizar(tarefaid: number): void {
    const tarefaEncontrada = this.lista.find((x) => x.id === tarefaid);
    if (tarefaEncontrada) {
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida; // Atualizar status
    }
  }
}
