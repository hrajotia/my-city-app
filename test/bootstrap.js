process.env.NODE_ENV = 'test';

const Sails = require('sails');
const Fixted = require('fixted');

const PORT = 1339;

before(function(done) {
  const config = {
    port: PORT,
    log: {
      level: 'error'
    },
    datastores: {
      mysqlMyDBServer: {
        adapter: 'sails-disk',
        inMemoryOnly: true
      }
    },
    hooks: {
      grunt: false,
      session: false,
      sockets: false,
      webpack: false
    },
    models: {
      migrate: 'drop'
    },
    policies: {
      moduleDefinitions: {
      }
    },
    api: {
    }
  };

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(25000);

  Sails.lift(config, (err) => {
    if (err) {
      return done(err);
    }

    const fixted = new Fixted(process.cwd() + '/test/fixtures');
    const loadOrder = ['status', 'city', 'mycity'];
    fixted.populate(loadOrder, (err) => {
      done(err);
    });
  });
});

after((done) => {
  Sails.lower(done);
});
