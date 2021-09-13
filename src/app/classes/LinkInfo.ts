
export class LinkInfo {
    displayName: string;
    url: string;
    component: any;
    subLink: LinkInfo[] | undefined;

    constructor(displayName: string, url: string, component: any, subLink?: LinkInfo[]) {
        this.displayName = displayName;
        this.url = url;
        this.component = component;
        this.subLink = subLink;
    }
}
