// http://officeopenxml.com/WPparagraphProperties.php
import { XmlComponent } from "file/xml-components";

export class ParagraphProperties extends XmlComponent {
    constructor() {
        super("w:pPr");
    }

    public push(item: XmlComponent): void {
        this.root.push(item);
    }
}
