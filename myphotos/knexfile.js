// Update with your config settings.

/*module.exports = {

  development: {
      client: 'mariasql',
      connection: {
        unixSocket : '/var/run/mysqld/mysqld.sock',
        user     : 'wata-z',
        db : 'Photos',
        charset  : 'utf8'
      }
    },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};*/

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite3'
    },
    useNullAsDefault: true
  },
};
