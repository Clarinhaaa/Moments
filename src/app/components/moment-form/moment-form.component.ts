import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/interfaces/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Input() textoBotao!: string;
  @Output() onSubmit = new EventEmitter<Moment>;

  momentForm!: FormGroup;

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      imagem: new FormControl(''),
    });
  }

  get titulo() {
    return this.momentForm.get('titulo')!;
  }

  get descricao() {
    return this.momentForm.get('descricao')!;
  }

  onFileSelected(event: any) {
    const arquivo: File = event.target.files[0];
    this.momentForm.patchValue({ imagem: arquivo });
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);
    this.onSubmit.emit(this.momentForm.value);
  }
}
