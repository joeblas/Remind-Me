    var express    = require('express')
    var app        = express()
    var passport   = require('passport')
    var session    = require('express-session')
    var bodyParser = require('body-parser')
    var env        = require('dotenv').config();
	var exphbs     = require('express-handlebars')

	var port = process.env.PORT || 3000;
	



    //For BodyParser
    app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	
	//Public Folder CSS & JS
	app.use(express.static(__dirname + "/public"));
	


     // For Passport
    app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions


	 //For Handlebars
	 app.set("view engine", "handlebars");

	 app.engine("handlebars", exphbs({
		defaultLayout: "landing"
	  }));
	  
	  
	  
    

    app.get('/', function(req, res){
	  res.redirect('/signin');
	});


	//Models
    var models = require("./app/models");


    //Routes
	var authRoute = require('./app/routes/auth.js')(app,passport);
	require('./app/routes/reminders.js')(app);


    //load passport strategies
    require('./app/config/passport/passport.js')(passport,models.User);


    //Sync Database
   	models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine')

    }).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
    });



	app.listen(port, function(err){
		if(!err)
		console.log("Site is live"); else console.log(err)

	});




    