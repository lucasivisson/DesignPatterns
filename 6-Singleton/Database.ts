export class Database {
  private static instance: Database | null = null;
  private db: string;

  private constructor(db: string) {
    this.db = db;
    console.log("Configuração do banco de dados concluída.");
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database("MySQL");
    }
    return Database.instance;
  }

  public query(sql: string): void {
    console.log(
      `Executando o sql: "${sql}" utilizando o banco de dados ${this.db}`
    );
  }
}
