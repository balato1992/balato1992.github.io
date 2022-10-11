import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent implements OnInit {

  projectData: urlInfo[] = [new urlInfo(
    'ngx-your-vocabulary-book ',
    'https://your-vocabulary-book.azurewebsites.net/',
    'https://github.com/balato1992/ngx-your-vocabulary-book '
  ), new urlInfo(
    'product-and-receipt ',
    '', // https://time-management-tools.azurewebsites.net
    'https://github.com/balato1992/product-and-receipt '
  ), /*new urlInfo(
    'time-management-tools',
    'https://time-management-tools.azurewebsites.net',
    'https://github.com/balato1992/time-management-tools'
  )*/];

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