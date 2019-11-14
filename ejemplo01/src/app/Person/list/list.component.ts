import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ServiceService} from '../../Service/service.service';
import { Person} from 'src/app/Model/Person';

@Component({
  selector: 'app-listar',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people:Person[];
  constructor(private service:ServiceService , private router:Router) { }


  ngOnInit() {
    this.service.getPeople()
    .subscribe(data=>{
      this.people=data;
    })
  }

  Edit(person:Person){
      localStorage.setItem("id", person.id.toString());
      this.router.navigate(["edit"]);
  }

  Delete(person:Person){
    this.service.deletePerson(person)
    .subscribe(data=>{
      this.people=this.people.filter(p=>p!==person);
      alert("User deleted");
    })
  }
}
