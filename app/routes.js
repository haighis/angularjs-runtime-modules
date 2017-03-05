var fs = require('fs');
var unzip = require('unzip');
module.exports = function (app) {
    // application -------------------------------------------------------------
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/webapp/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	app.get('/test', function(req, res) {
	    res.json({ message: 'hooray! welcome to our api!' });   
	});

	app.post('/file-upload', function(req, res, next) {
		console.log('in upload');
    	console.log('i am in the file upload 1', req.files);

    	var file;

	    if(!req.files)
	    {
	        res.send("File was not found");
	        return;
	    }

	    file = req.files.module;  // here is the field name of the form

	    // Staging area for all modules
	    var pathToSaveTo = "webapp/extensionModules/staging/";

	    file.mv(pathToSaveTo + file.name, function(err) {
			if (err) {
		      res.status(500).send(err);
		    }
		    else {
		      res.send('File uploaded!');
		    }
		});

	    fs.createReadStream('webapp/extensionModules/staging' + file.name).pipe(unzip.Extract({ path: 'webapp/extensionModules/final/' + 'testfoldername' }));

		// Unzip the module package

	    //file.mv(pathToSaveTo + file.module.name, function(err)  //Obvious Move function
	     //   {
	              // log your error
	     //   });

	    //res.send("File Uploaded");


    	console.log('i am in the file upload 2', req.files);
	});
};
