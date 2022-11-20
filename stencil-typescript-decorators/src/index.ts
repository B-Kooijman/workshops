function classLogger({ ...args }) {
  console.log(`classDecorator: ${args.tag}`);
  console.log(`classDecorator: ${args.styleUrl}`);
}

function toUpperCase(target: any, name: any, descriptor: any): any {
  console.log("name: ", name);
  console.log("target: ", target);
  console.log("descriptor: ", descriptor);
  const oldTitle = descriptor.value();
  console.log("oldTitle: ", oldTitle);

  descriptor.value = () => {
    return oldTitle.toUpperCase();
  };

  return descriptor;
}

// @ts-ignore
@classLogger({ tag: "header-component", styleUrl: "header.css" })
class Header {
  //@ts-ignore
  @toUpperCase
  title() {
    return "awesome title";
  }
}

var header = new Header();
console.log("new class", header.title());
