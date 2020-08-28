import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject = [
    {
      video:'https://www.youtube.com/watch?v=H5jI6TnVv20',
      title: 'Tribute to Police Service'
    },{
    image: 'assets/img/hyd.png',
    thumbImage: 'assets/img/hyd.jpg',
    title: 'Ariel Survey of Ganesh Nimarjan'

}, {
    image: 'assets/img/covid.jpg',
    thumbImage: 'assets/img/covid.jpg',
    title:'Covid-19' 
}];

}
