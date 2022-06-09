import 'reflect-metadata';

export const Injector = new class {
  resolve<T>(target: any): T {
    const dependencies: any[] = Reflect.getMetadata('design:paramtypes', target) || [];

    const injections = dependencies.map(dependency => Injector.resolve<any>(dependency));

    return new target(...injections);
  }
};
