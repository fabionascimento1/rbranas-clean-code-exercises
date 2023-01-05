class UserRepository {
  constructor(database) {
    this.database = database;
  }

  save(user) {
    return this.database.save(user);
  }

  find(id) {
    return this.database.find(id);
  }
}

class MySQLDatabase {
  save(user) {
    // salva o usuário no banco de dados MySQL
  }

  find(id) {
    // recupera o usuário do banco de dados MySQL
  }
}

class MongoDBDatabase {
  save(user) {
    // salva o usuário no banco de dados MongoDB
  }

  find(id) {
    // recupera o usuário do banco de dados MongoDB
  }
}

const mysqlDatabase = new MySQLDatabase();
const userRepositoryMysql = new UserRepository(mysqlDatabase);

const mongoDBDatabase = new MongoDBDatabase();
const userRepositoryMongo = new UserRepository(mongoDBDatabase);
