var ghost = require('ghost');
var axios = require('axios')

// Run a single Ghost process
ghost()
  .then( ghostServer => {
    ghostServer.start() 
    setInterval(() => {
      axios.get('https://chayapatr.herokuapp.com')
      .then(el => console.log("yup"))
    }, 1000 * 60 * 15)
  })
  .catch( error => {
    console.error(`Ghost server error: ${error.message} ${error.stack}`);
    process.exit(1);
  });