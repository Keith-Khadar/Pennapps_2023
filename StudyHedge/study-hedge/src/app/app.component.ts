import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonRouterOutlet, IonTitle, IonToolbar, IonHeader, ModalController, IonButton } from '@ionic/angular/standalone';
import { DeadlineComponent } from './modal/deadline/deadline.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonRouterOutlet, IonTitle, IonToolbar, IonHeader, IonButton, MainMenuComponent],
})
export class AppComponent {

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: DeadlineComponent,
    });
    modal.present();

    const {data, role} = await modal.onWillDismiss();
  }

  constructor(private modalCtrl: ModalController) {

  }
}
