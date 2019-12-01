var ghost = require('ghost');
var axios = require('axios')

// Run a single Ghost process
ghost()
  .then( ghostServer => {
    ghostServer.start() 
    setInterval(() => {
      axios.get('https://chayapatr.herokuapp.com')
    }, 1000 * 60 * 1)
  })
  .catch( error => {
    console.error(`Ghost server error: ${error.message} ${error.stack}`);
    process.exit(1);
  });