export const Service = (): ClassDecorator => {
  return (target: any) => {
    // do something with `target`, e.g. some kind of validation or passing it to the Injector and store them
  };
};

export const Controller = (): ClassDecorator => {
  return target => {
    // maybe do something with controller here
  };
}
