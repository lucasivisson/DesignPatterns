import { Database } from "./Database";

class Application {
  main() {
    const databaseFoo = Database.getInstance();
    databaseFoo.query("SELECT * from users");

    const databaseBar = Database.getInstance();
    databaseBar.query("SELECT * from profile");
  }
}

new Application().main();
