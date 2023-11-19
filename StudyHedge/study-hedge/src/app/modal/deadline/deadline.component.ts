import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon, IonDatetime, IonGrid, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.scss'],
  standalone: true,
  imports: [IonContent, IonDatetime, IonIcon, IonGrid, IonRow],
})
export class DeadlineComponent  implements OnInit {

  constructor() {
    addIcons({addOutline});
   }

  ngOnInit() {}

}
