export class TarefaModel {
  id: number = 0;
  descricao: string = ''; // Lembrete: podemos deixar o tipo explicito
  concluida = false; // ou deixar o tipo implicito pelo valor padrão
}
