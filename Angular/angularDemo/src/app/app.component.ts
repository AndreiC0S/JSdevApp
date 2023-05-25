import { Component } from '@angular/core';
import { AlertaService } from './alerta.service';

import { User } from './model/user';

const HEROES = [
  { id: 1, name: 'Superman' },
  { id: 2, name: 'Batman' },
  { id: 5, name: 'BatGirl' },
  { id: 3, name: 'Robin' },
  { id: 4, name: 'Flash' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular Demo';

  descriere: string = 'O scurta descriere';

  color:string = 'red'

  color2:string = 'blue'

  imgSrc:string = 'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Spaniel%20%28Cocker%291.jpg?h=ccdd1b23&itok=rtpOkLHY'

  nr:number = 0

  valoare:string = 'Valoare input'

  


  persoana:User = {
    id:1,
    nume:'Dan',
    prenume:'Ion',
    
  }

  constructor( private alertaService:AlertaService ){

  }

  afiseaza:boolean = false

  eroi = HEROES;

  myClass:string = 'red' 

  inputCount() {
    if(this.valoare.length > 20){
      this.alertaService.afiseazaMesaj('max length');
    }
  }

  showImg2(){
    this.afiseaza = !this.afiseaza
  }

  showImg(){
  
    if(this.imgSrc !== ""){
      this.imgSrc = ""
    } else{
      this.imgSrc = 'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Spaniel%20%28Cocker%291.jpg?h=ccdd1b23&itok=rtpOkLHY'
    }

  }
}
