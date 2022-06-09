import { Service } from './core/decorators';
import { Injector } from './core/injector';

// @Service() // No required
class Cat {
  talk() {
    console.log('Meooooo!');
  }
}

@Service()
class CatLover {
  public myCat: Cat;

  constructor(cat: Cat) {
    this.myCat = cat;
  }

  showName() {
    console.log('CatLover!');
  }

  showMyCat() {
    this.myCat.talk();
  }
}

@Service()
class App {
  public freeCat: Cat;
  public catLover: CatLover;
  constructor(cat: Cat, catLover: CatLover) {
    this.freeCat = cat;
    this.catLover = catLover;
  }
}

const app = Injector.resolve<App>(App);
app.freeCat.talk();
app.catLover.showMyCat();
app.catLover.showName();
