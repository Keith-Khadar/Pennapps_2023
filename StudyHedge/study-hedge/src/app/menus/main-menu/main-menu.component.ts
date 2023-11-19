import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonButton, IonIcon } from '@ionic/angular/standalone';
// Icons!
import { addIcons } from 'ionicons';
import { addOutline, alertOutline, pencilOutline, settingsOutline } from 'ionicons/icons';
@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports: [ IonContent, IonGrid, IonButton, IonIcon ]
})
export class MainMenuComponent  implements OnInit {

  constructor() { 
    addIcons({ addOutline, alertOutline, pencilOutline, settingsOutline });
  }

  ngOnInit() {}

}
