class HtmlBuilder {
  constructor(rootName) {
        this.root = new Tag(rootName);
        this.rootName = rootName;

  }

  addChild(childName, childText){
    let child = new Tag(childName, childText)
    this.root.children.push(child)
  }

  toString(){
    return this.root.toString();
  }

  build(){
    return this.root
  }
}
