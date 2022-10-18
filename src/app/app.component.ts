import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
   title = 'myAngularProject';
   student = new Student("Adam","Kowalski",1);
 }
class Student {
  private name: string;
  private surname: string;
  private index: number;
  constructor(name: string, surname:string, index:number){
    this.name = name;
    this.surname = surname;
    this.index = index;
  }
  public get getName(): string{
    return this.name;
  }
  public set setName(name: string){
    this.name = name;
  }
  public get getSurname(): string{
    return this.surname;
  }
  public set setSurname(surname: string){
    this.surname = surname;
  }
  public get getIndex(): number{
    return this.index;
  }
  public set setIndex(index:number){
    this.index = index;
  }
}
