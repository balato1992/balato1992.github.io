import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-projects-and-examples',
  templateUrl: './page-projects-and-examples.component.html',
  styleUrls: ['./page-projects-and-examples.component.scss']
})
export class PageProjectsAndExamplesComponent implements OnInit {

  projectData: urlInfo[] = [/*new urlInfo(
    'product-and-receipt',
    'https://product-and-receipt-app.azurewebsites.net',
    'https://github.com/balato1992/product-and-receipt'
  ),*/ new urlInfo(
    'time-management-tools',
    'https://time-management-tools.azurewebsites.net',
    'https://github.com/balato1992/time-management-tools'
  )];
  exampleData: urlInfo[] = [new urlInfo(
    'Signal R Example',
    'https://signalrwebpacktest.azurewebsites.net',
    'https://github.com/balato1992/Practice-SignalRWebPack'
  ),];

  constructor() { }

  ngOnInit(): void {
    /* this.projectData.push(); */
    this.exampleData.push();
  }
}

class urlInfo {
  name: string;
  projectDemo: string;
  githubUrl: string;

  constructor(name: string, projectDemo: string, githubUrl: string) {

    this.name = name;
    this.projectDemo = projectDemo;
    this.githubUrl = githubUrl;
  }
}