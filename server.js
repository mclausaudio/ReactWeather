var express = require("express"),
    app = express(),
    chalk = require('chalk');

    app.use(express.static('public'));




    app.listen(3000, function(){
      console.log(chalk.blue("server up on 3000"));
    });
