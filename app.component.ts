import { Component } from '@angular/core';
import {Dropdown} from 'primeng/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'as';
  module =[];
  screens = [];
  selectedModule: any;
  selectedScreens: any;
  screensToAdd:any;
  screenAffected: any;
  Rows =[];
  constructor(){
    this.module =  [{
      "code": "usermanagement",
      "name": "User Management",
      "versionCode": "v1",
      "url": "/usermanagement"
},
  {
      "code": "2testmodule",
      "name": "Two Testmodule",
      "versionCode": "v1",
      "url": "/2testmodule"
},
  {
      "code": "3testmodule",
      "name": "Three Testmodule",
      "versionCode": "v1",
      "url": "/3testmodule"
},
  {
      "code": "4testmodule",
      "name": "Four Testmodule",
      "versionCode": "v1",
      "url": "/4testmodule"
},
  {
      "code": "5testmodule",
      "name": "Five Testmodule",
      "versionCode": "v1",
      "url": "/5testmodule"
},
  {
      "code": "6testmodule",
      "name": "Six Testmodule",
      "versionCode": "v1",
      "url": "/6testmodule"
}
];
  this.screens = [{
    "moduleCode": "usermanagement",
    "moduleVersionCode": "v1",
    "moduleUrl": "/usermanagement",
    "screenCode": "usr_ooo_master",
    "screenName": "Out Of Office Master",
    "category": "MASTER",
    "uiPath": "/usermanagement/000-assistance",
    "apiPath": "",
    "screenId": "null"
},
{
    "moduleCode": "usermanagement",
    "moduleVersionCode": "v1",
    "moduleUrl": "/usermanagement",
    "screenCode": "usr_ooo_master",
    "screenName": "To be displayed Master",
    "category": "MASTER",
    "uiPath": "/usermanagement/000-assistance",
    "apiPath": "",
    "screenId": "null"
},
{
    "moduleCode": "usermanagement",
    "moduleVersionCode": "v1",
    "moduleUrl": "/usermanagement",
    "screenCode": "usr_ooo_master",
    "screenName": "Some Master",
    "category": "MASTER",
    "uiPath": "/usermanagement/000-assistance",
    "apiPath": "",
    "screenId": "null"
},
{
    "moduleCode": "2testmodule",
    "moduleVersionCode": "v1",
    "moduleUrl": "/usermanagement",
    "screenCode": "usr_ooo_master",
    "screenName": "Test Master",
    "category": "MASTER",
    "uiPath": "/usermanagement/000-assistance",
    "apiPath": "",
    "screenId": "null"
},
{
    "moduleCode": "2testmodule",
    "moduleVersionCode": "v1",
    "moduleUrl": "/usermanagement",
    "screenCode": "usr_ooo_master",
    "screenName": "Super Master",
    "category": "MASTER",
    "uiPath": "/usermanagement/000-assistance",
    "apiPath": "",
    "screenId": "null"
},
{
    "moduleCode": "2testmodule",
    "moduleVersionCode": "v1",
    "moduleUrl": "/usermanagement",
    "screenCode": "usr_ooo_master",
    "screenName": "Other Master",
    "category": "MASTER",
    "uiPath": "/usermanagement/000-assistance",
    "apiPath": "",
    "screenId": "null"
},
{
    "moduleCode": "2testmodule",
    "moduleVersionCode": "v1",
    "moduleUrl": "/usermanagement",
    "screenCode": "usr_ooo_master",
    "screenName": "Office Master",
    "category": "MASTER",
    "uiPath": "/usermanagement/000-assistance",
    "apiPath": "",
    "screenId": "null"
},
{
    "moduleCode": "3testmodule",
    "moduleVersionCode": "v1",
    "moduleUrl": "/usermanagement",
    "screenCode": "usr_ooo_master",
    "screenName": "New Master",
    "category": "MASTER",
    "uiPath": "/usermanagement/000-assistance",
    "apiPath": "",
    "screenId": "null"
},
{
    "moduleCode": "3testmodule",
    "moduleVersionCode": "v1",
    "moduleUrl": "/usermanagement",
    "screenCode": "usr_ooo_master",
    "screenName": "Some Other Master",
    "category": "MASTER",
    "uiPath": "/usermanagement/000-assistance",
    "apiPath": "",
    "screenId": "null"
},
{
    "moduleCode": "3testmodule",
    "moduleVersionCode": "v1",
    "moduleUrl": "/usermanagement",
    "screenCode": "usr_ooo_master",
    "screenName": "Only Master",
    "category": "MASTER",
    "uiPath": "/usermanagement/000-assistance",
    "apiPath": "",
    "screenId": "null"
}
]
}
moduleChange(){
  console.log(this.selectedModule);
  //this.selectedScreens = this.screens.filter(x=>x.moduleCode == this.selectedModule.code);
  this.screenAffected = this.screens.filter(x=>x.moduleCode == this.selectedModule.code);;
}
screenChanged(e){
  console.log(e);
}
addNew(){
  this.Rows.push({'ModuleName':this.selectedModule,'Screen':this.selectedScreens,'ScreensAffected': this.screenAffected, 'checked': false})
}

removeRows(){
this.Rows = this.Rows.filter(x=> x.checked == false);
}

All(e)
{
  console.log(e);
  if(e.target.checked)
  {
   this.Rows.forEach(x=>x.checked = true);
  }
  else  this.Rows.forEach(x=>x.checked = false);
}
}
