import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessageService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-novo-moment',
  templateUrl: './novo-moment.component.html',
  styleUrls: ['./novo-moment.component.css'],
})
export class NovoMomentComponent {
  textoBotao: string = 'Criar!';

  constructor(
    private momentService: MomentService,
    private messageService: MessageService,
    private router: Router
  ) {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    //envio dos dados para o service, no qual eles serão cadastrados no banco de dados da API
    await this.momentService.createMoment(formData).subscribe();

    //exibição das mensagens do sistema após o evento (criar, editar ou remover um momento)
    this.messageService.add('Momento criado com sucesso!');

    //redirecionamento do usuário para a página principal após enviar o formulário
    this.router.navigate(['/']);
  }
}
