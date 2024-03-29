import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListComponent } from './Person/list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Java-Angular CRUD';

  constructor(private router:Router){}
    List(){
      this.router.navigate(["list"]);
    }
  
    New(){
      this.router.navigate(["add"]);
    }

}
