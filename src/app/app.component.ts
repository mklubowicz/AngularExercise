import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
   title = 'myAngularProject';
   student: Student = new Student("Temporary","Temporary",0);
   constructor() {
    this.student.name = "Pawel";
    this.student.surname = "Nowak";
    this.student.index = 3;
   }
 }
class Student {
  private _name: string;
  private _surname: string;
  private _index: number;
  constructor(name: string, surname:string, index:number){
    this._name = name;
    this._surname = surname;
    this._index = index;
  }
  public get getName(): string{
    return this.name;
  }
  public set name(name: string){
    this.name = name;
  }
  public get getSurname(): string{
    return this._surname;
  }
  public set surname(surname: string){
    this._surname = surname;
  }
  public get getIndex(): number{
    return this._index;
  }
  public set index(index:number){
    this._index = index;
  }
}
