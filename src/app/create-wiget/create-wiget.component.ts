import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-wiget',
  templateUrl: './create-wiget.component.html',
  styleUrls: ['./create-wiget.component.scss']
})
export class CreateWigetComponent implements OnInit {

  dashboardForm : FormGroup;
  submitted : boolean = false;

  constructor(private dashboardBuilder : FormBuilder){}
 ngOnInit()
 {
   this.dashboardForm = this.dashboardBuilder.group({

       widgetName : ['',Validators.required],
       graphData : ['',Validators.required],
       preferances : ['',Validators.required]
    
      })
  }
  

  handleSubmit(){
  this.submitted=true;
 }
}

