import { Component } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-novo-moment',
  templateUrl: './novo-moment.component.html',
  styleUrls: ['./novo-moment.component.css'],
})
export class NovoMomentComponent {
  textoBotao: string = 'Pronto!';

  constructor(private momentService: MomentService) {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    //TODO
    
    //1. Enviar os dados para o service, no qual eles serão cadastrados no banco de dados da API
    await this.momentService.criarMoment(formData).subscribe();

    //2. Exibir as mensagens de sucesso ou falha do evento (criar ou editar um momento)
    //3. Redirecionar o usuário para a página principal após enviar o formulário
  }
}
