import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

 isAuth = false;
  date= new Date();

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  
  appareils: any[];
  constructor(private appareilService: AppareilService) {

        this.isAuth = true;
      }

  ngOnInit () 
  {
   this.appareils = this.appareilService.appareils;
  }
  onAllumer(){
   this.appareilService.switchOnAll() ;
  }
  onEteindre(){
   this.appareilService.switchOffAll() ;
  }
  onSave() {
    this.appareilService.saveAppareilsToServer();
}

onFetch() {
    this.appareilService.getAppareilsFromServer();
}
}
