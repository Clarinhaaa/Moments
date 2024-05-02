import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/interfaces/Moment';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  faTimes = faTimes
  faEdit = faEdit
  
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.momentService.getMoment(id).subscribe((item) => {
      return this.moment = item.data;
    });
  }
}
