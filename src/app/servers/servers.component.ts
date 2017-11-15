import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  nameServer : string;
  ip: string;
  addressArray:string[];
  constructor() { }

  ngOnInit() {
  	this.nameServer = 'my-dream-project';
  	this.ip = '127.0.0.1';
  	this.addressArray = ['123','rahul','uday'];
  }

  onClick() {
  	this.nameServer = 'my name server changed';
  }

}
