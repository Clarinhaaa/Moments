import { Component } from '@angular/core';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { Moment } from 'src/app/interfaces/Moment';

@Component({
  selector: 'app-novo-moment',
  templateUrl: './novo-moment.component.html',
  styleUrls: ['./novo-moment.component.css']
})
export class NovoMomentComponent {
  textoBotao: string = 'Pronto!';

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('titulo', moment.titulo);
    formData.append('descricao', moment.descricao);

    if (moment.imagem) {
      formData.append('imagem', moment.imagem);
    }
  }
}
