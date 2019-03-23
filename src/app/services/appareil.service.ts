import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';


@Injectable()

export class AppareilService {
	appareils = [
  
  ];

    constructor(private httpClient: HttpClient) { }

  getAppareilById(id: number) {
    const appareil= this.appareils.find(
    (appareilObject) =>{
      return appareilObject.id === id;
    });
    return appareil;
  }


  switchOnAll(){
  	for(let appareil of this.appareils){
  		appareil.Status = 'Allumer';
  		
  	}
  }
  switchOffAll() {
  	for(let appareil of this.appareils) {
  		appareil.Status = 'éteint';
  		
  	}
  }


  switchOffOne(index: number) {
  
  		this.appareils[index].Status = 'éteint';
  	}


    switchOnOne(index: number) {
  		this.appareils[index].Status = 'Allumer';

  		
  	}
addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      Name: '',
      Status: ''
    };
    appareilObject.Name = name;
    appareilObject.Status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
   
   
}

saveAppareilsToServer() {
    this.httpClient
      .put('https://http-client-demo-837c4.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreu ! : ' + error);
        }
      );
    }

getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://httpclient-demo.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

 }