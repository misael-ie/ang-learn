import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from '../notification.service';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/observable/timer'
import { timer } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [ //REVIEW: estudar todas as animações do angular
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = "Hello There"
  snackVisibility: string = 'hidden'

  constructor(
    private _notificationService: NotificationService
  ) { }

  ngOnInit() {
    this._notificationService.notifier.subscribe(
      receivedMessage => {
        this.message = receivedMessage
        this.snackVisibility = 'visible'
        timer(3000) //TODO: melhorar o uso de timers para animações
          .subscribe(timeout => this.snackVisibility = 'hidden')
          
      }
    )
  }


}
