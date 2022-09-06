import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.scss']
})
export class ToolsPageComponent implements OnInit {

  data: Tool[] = [
    new Tool("ScreenCapture", [
      new SoftwareInfo("Picpick", ["https://picpick.app/zh-tw/"]),
      new SoftwareInfo("Windows (Win + Shift + S)", [])
    ]),
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

class Tool {
  type: string = "";

  softwares: SoftwareInfo[] = [];

  constructor(type: string, softwares: SoftwareInfo[]) {
    this.type = type;
    this.softwares = softwares;
  }
}

class SoftwareInfo {
  name: string;
  links: string[];
  constructor(name: string, links: string[]) {
    this.name = name;
    this.links = links;
  }
}
