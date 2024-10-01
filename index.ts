const greetInWorld = (worldName: string): string => {
  return `Welcome to the world of ${worldName}!`;
};

let world: string = "TypeScript";
let greetingMessage: string = greetInWorld(world);

console.log(greetingMessage);
