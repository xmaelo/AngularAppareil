import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
	
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { 
  }

  ngOnInit() {
  
  }

  getStatus(){
  	return this.appareilStatus;
  }
  getAppaeilName() {
  return this.appareilName;
  }
  getColor(){
    if(this.appareilStatus==='éteint'){
      return 'red';
    }
    else if (this.appareilStatus==='Allumer'){
      return 'green';
    }
  }
  onSwitchOne(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
    offSwitchOne(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }


}
