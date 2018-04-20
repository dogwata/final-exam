exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('entries', function(table) {
      table.increments('id').primary();
      table.text('text','mediumtext');
      table.string('author');
      table.dateTime('created');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('entries'),
  ]);
};
