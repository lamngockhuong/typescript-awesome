import { Controller, Service } from './core/decorators';
import { Injector } from './core/injector';

// @Service() // No required
class DatabaseHandler {
  insert(table: string, data: { [column: string]: string | number }) {
    console.log(`writing to ${table}:`);
    console.log(data)
  }
}

@Service()
class Logger {
  constructor(protected dbHandler: DatabaseHandler) { }

  info(message: string) {
    this.dbHandler.insert('log', {
      level: 200,
      message: message
    });
  }
}

@Service()
class UserService {
  constructor(protected logger: Logger) { }

  updateUser(userId: number) {
    this.logger.info(`User ${userId} has been updated`);
  }
}

@Controller()
class UserController {
  constructor(protected service: UserService) { }

  updateUser(userId: number) {
    this.service.updateUser(userId);
  }
}

const app = Injector.resolve<UserController>(UserController);
app.updateUser(123);
