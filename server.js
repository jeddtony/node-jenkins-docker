const app = require('./index')

app.listen(process.env.PORT || 4003, function(err) {
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port ", 4003); 
});

// Restarting the server
const server = require('http').createServer(app);

// Implementing graceful shutdown
process.on('SIGINT', () => {
    console.info('SIGINT signal received.')
  
    // Stops the server from accepting new connections and finishes existing connections.
    server.close(function(err) {
      // if error, log and exit with error (1 code)
      if (err) {
        console.error(err)
        process.exit(1)
      }
  
      // close your database connection and exit with success (0 code)
      // for example with mongoose
     
    })
  })
