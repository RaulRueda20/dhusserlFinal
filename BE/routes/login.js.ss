var express = require('express');
//var bcrypt = require('bcrypt');
var debug = require('debug')('backend:server');
var router = express.Router();
const nodemailer = require('nodemailer');
var bcrypt = require('bcrypt');
var security = require('../custom_modules/security');
const fs = require('fs');
const readline = require('readline');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
var xoauth2 = require('xoauth2');

var serverUrl = "132.248.184.95"

const SCOPES = ['https://mail.google.com/'];

const TOKEN_PATH = 'token.json';

/*let info = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TEST_USER
    subject: "Bienvenido",
    html: htmlToSend,
}

const sendMail = (info, next) => {
  console.log("INFO",info)
  const acceso = {
     client_id: "288830572753-vb1arkdtkbbemon434quevnifjikolkd.apps.googleusercontent.com",
     client_secret: "gpluSvF5cK7VW6jdod5OGAsj",
     redirect_url: "https://developers.google.com/oauthplayground",
     refresh_token: "1//04k7qxWYHRBxUCgYIARAAGAQSNwF-L9Ir4fKCVdsHRvyQySvSogMUnQMyyNQwf0PwE060k8vPinbGXQnKH3sl70yB0XBUSjYB9xg",
  };

  const oauth2client = new OAuth2(
    acceso.client_id,
    acceso.client_secret,
    acceso.redirect_url
  );
  try{
  	oauth2client.setCredentials({ refresh_token: acceso.refresh_token });
  }catch(e){
	console.log(e)
  }
  oauth2client.getAccessToken().then((re) => {
	  console.log("EO",re.token)
    const accessToken = re.token;

    oauth2client.setCredentials({ access_token: accessToken });

    const enviador = nodemailer.createTransport({ 
      host: "smtp.gmail.com",
      //host: "gmail.com",
      port: "465",
      tls: {
  	rejectUnauthorized: true
      },
      pool: true,
      secure: true,
      auth: {
	      xoauth2: xoauth2.createXOAuth2Generator({
		type: "Oauth2",
	      	user:"dhusserl.eservice@gmail.com",
		pass:"zrlmruabqiqhepoq",
        	cliendId: acceso.client_id,
        	clientSecret: acceso.client_secret,
        	refreshToken: acceso.refresh_token,
       		 accessToken: accessToken,
	     })
        /*type: "Oauth2",
        user:"dhusserl.eservice@gmail.com",
        cliendId: acceso.client_id,
        clientSecret: acceso.client_secret,
        refreshToken: acceso.refresh_token,
        accessToken: accessToken,
      },
    });

    /*enviador.sendMail(info ,{
       from: info.from,	
       to: info.to,
       subject: info.subject,
       text: info.html,
       auth:{
          user:"dhusserl.eservice@gmail.com"
       }
    })
    
    /*enviadori.set('oauth2_provision_cb', (user, accessToken,renew, callback)=>{
	    console.log("user,accessToken", user, accessToken)
    //let accessToken = userTokens[user];
    if(!accessToken){
       return callback(new Error('Unknown user'));
    }else{
       return callback(null, accessToken);
    }
    });

    	  

   enviador.sendMail(info, (error, response) => {
	    /*console.log("info", info)
	    if(!accessToken){ 
		    console.log("NO HAY ACCESSTOKEN")
	    }else{(
	    	from: info.from,
		to : info.to,
		subject: info.subject,
		text: info.html,
		auth: {
			user: "dhusserl.eservice@gmail.com" 
		}
	    )
	    }*/
/*if (error && !accessToken){
       	 	console.log(error);
        	res.send(500, err.message);
    	} else {
        	console.log("Email sent");
        	//res.status(200).jsonp(req.body);
    	}
      const now = new Date();
      const fecha =
       now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
      error
        ? console.error(`[ ${fecha} ] - [ MAILING ]:`, error)
        : console.info(`[  ${fecha} ] - [ MAILING ] : `, response);
      return next(response);
    });
  });
};


/*function authorize(credentials, callback) {
  console.log("credentials", credentials.web)
  const {client_id, client_secret, redirect_uris} = credentials.web;
  console.log("ID",credentials.client_id)
  console.log("secret", credentials.client_secret)
  console.log("uri", credentials.redirect_uris)
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, r288830572753-vb1arkdtkbbemon434quevnifjikolkd.apps.googleusercontent.com",
     client_secret: "_Bkllp_QzFX3ZmZYjRiXPcOS",
     redirect_url: "https://developers.google.com/oauthplayground",
     refresh_token: "1//04lojOzEKPlGKCgYIARAAGAQSNwF-L9IrK4ylbYdLonPINDFDtuWH2lWUWUDwQIuob8ArjyH8-iVNa3d5aMQv8yn5OAdz7VzKUrE",
  };

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token o disk for later program executions
      fs.writeFile(TOKENPATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}*/

router.get('/all', function(req, res){
    var currentdate = new Date();
      var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
          + "/" + currentdate.getFullYear() + " @ "
          + currentdate.getHours() + ":"
          + currentdate.getMinutes() + ":" + currentdate.getSeconds();
      var queryString = 'SELECT * FROM users ORDER BY id;';
    //   var filter = [req.query.userId];
    //   var password = req.query.password;
      res.locals.connection.query(queryString)
      .then(function (results){
        // console.log(results)
        // if(results[0].user_password == password){
        console.log(datetime + "== logins/ | Usuario reconocido con éxito")
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        // }else
            // res.send(JSON.stringify({"status": 500, "error": "Password incorrecto", "response": null}));
      }).catch(function(error) {
          console.log(datetime + "== logins/admin | " + error);
      })
  })

router.post('/usuario', function(req, res){
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
		+ "/" + currentdate.getFullYear() + " @ "
		+ currentdate.getHours() + ":"
		+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var queryString = 'SELECT * FROM users WHERE email = $1;';
    var filter = [req.body.userId];
    var password = req.body.password;
    var user = {}
    console.log(queryString)
    res.locals.connection.query(queryString, filter)
    .then(function (results){
        console.log(results)
        user = results[0]
        if(results.length < 1){
            console.log(datetime + "== logins/usuario | Usuario inexistente. Usuario: " + user)
            res.send(JSON.stringify({"status": 500, "error": "Usuario inexistente", "response": null}));
        }else{
            bcrypt.compare(password, results[0].user_password, function(err, res2) {
            if(res2) {
                res.locals.connection.query("UPDATE users SET lastaccess = now() WHERE email = $1;", filter)
                .then(function (results){
                    console.log(datetime + "== logins/usuario | Usuario guardado con éxito. Usuario: " + user.email)
                    res.send(JSON.stringify({"status": 200, "error": null, "response": user.email}));
                }).catch(function(error){
                    console.log(datetime + "== logins/usuario | Error al registrar nuevo acceso")
                    res.send(JSON.stringify({"status": 500, "error": "Password incorrecto", "response": null}));
                })
            }else{
                console.log(datetime + "== logins/usuario | Error al registrar nuevo acceso. Usuario: " + user.email)
                res.send(JSON.stringify({"status": 500, "error": "Password incorrecto", "response": null}));
            }})
        }
    }).catch(function(error) {
        console.log(datetime + "== logins/usuario | " + error);
    })
})

router.get('/admin', function(req, res){
  var currentdate = new Date();
	var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
		+ "/" + currentdate.getFullYear() + " @ "
		+ currentdate.getHours() + ":"
		+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var queryString = 'SELECT * FROM administrador WHERE email = $1;';
    var filter = [req.query.userId];
    var password = req.query.password;
    res.locals.connection.query(queryString, filter)
    .then(function (results){
        console.log(results)
        if(results.length < 1){
            console.log(datetime + "== logins/admin | " + error)
            res.send(JSON.stringify({"status": 500, "error": "Usuario inexistente", "response": null}));
        }else{
            if(results[0].user_password == password){
                console.log(datetime + "== logins/usuario | Usuario reconocido con éxito")
                res.send(JSON.stringify({"status": 200, "error": null, "response": results[0]}));
            }else
                res.send(JSON.stringify({"status": 500, "error": "Password incorrecto", "response": null}));
        }
    }).catch(function(error) {
        console.log(datetime + "== logins/admin | " + error);
    })
})

router.get('/checkUserExistence/:email', function(req, res){
    var currentdate = new Date();
	  var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
		  + "/" + currentdate.getFullYear() + " @ "
		  + currentdate.getHours() + ":"
		  + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var queryString = 'SELECT * FROM users WHERE email = $1;';
    var filter = [req.params.email];
    res.locals.connection.query(queryString, filter)
    .then(function (results){
        if(results.length < 1){
            console.log(datetime + "== logins/checkUserExistence/:email | " + error)
            res.send(JSON.stringify({"status": 500, "error": "Usuario inexistente", "response": null}));
        }else{
            if(results[0].user_password == password){
                console.log(datetime + "== logins/checkUserExistence/:email | Usuario reconocido con éxito")
                res.send(JSON.stringify({"status": 200, "error": null, "response": results[0]}));
            }else
                res.send(JSON.stringify({"status": 500, "error": "Password incorrecto", "response": null}));
        }
    }).catch(function(error) {
        console.log(datetime + "== logins/checkUserExistence/:email | " + error);
    })
})

router.post('/updatePassword/:email/:pass',function(req, res){
  if(req.params.email == " guest" || req.params.email == "azirionq"){
	res.send(JSON.stringify({"status": 401, "error": "Acción imposible de realizar.", "response": null}));
  }else{var currentdate = new Date();
  var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var queryString = 'UPDATE users SET user_password = $1 WHERE email = $2;';
    //console.log("pass",req.body.pass)
    bcrypt.hash(req.body.pass, 10, function(err, hash) {
        console.log('hash:' + hash)
        var filter = [hash, req.params.email];
        //console.log(filter)
        res.locals.connection.query(queryString, filter)
        .then(function (results){
          //console.log(datetime + "== logins/updatePassword/:email | Registro exitoso")
            res.send(JSON.stringify({"status": 200, "error": null, "response": "Registro exitoso!"}));
        }).catch(function(error) {
            //console.log("error", error)
            //console.log(datetime + "== logins/updatePassword/:email | " + error)
            res.send(JSON.stringify({"status": 500, "error": "Hubo un error en el servicio", "response": null}));
        })
    });}
})

router.get('/eraseRegister/:email', function(req, res){
  if(req.params.email == "azirionq" || req.params.email == " guest"){
        res.send(JSON.stringify({"status": 401, "error": "Acción imposible de realizar.", "response": null}));
  }else{var currentdate = new Date();
  var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var queryString0 = 'SELECT * FROM users WHERE email = $1;';
    var queryString = 'DELETE FROM users WHERE email = $1;';
    var filter = [req.params.email];
    res.locals.connection.query(queryString0, filter)
    .then(function (results){
        console.log(results)
        bcrypt.compare(req.query.pass, results.user_password, function(err, res) {
            if(res) {
                res.locals.connection.query(queryString, filter)
                .then(function (results){
                    console.log(datetime + "== logins/eraseRegister/:email | Usuario borrado con éxito")
                    res.send(JSON.stringify({"status": 200, "error": null, "response": "Registro exitoso!"}));
                }).catch(function(error) {
                    console.log(datetime + "== logins/eraseRegister/:email | " + error)
                    res.send(JSON.stringify({"status": 500, "error": "Hubo un error en el servicio", "response": null}));
                })
            } else {
              console.log(datetime + "== logins/eraseRegister/:email | " + error)
             // Passwords don't match
                res.send(JSON.stringify({"status": 505, "error": "Passwords don't match.", "response": null}));
            }
        });
    }).catch(function(error) {
        console.log(datetime + "== logins/eraseRegister/:email | " + error)
        res.send(JSON.stringify({"status": 500, "error": "Hubo un error en el servicio", "response": null}));
    })}
})

router.get('/sendRegistroEmail/:lang',function(req, res){
    var email = "dhusserl.eservice@gmail.com"
    var password = "Padua50!"
    var name = req.body.nombre
    var toEmail = req.body.email
    console.log("body" + req.body)
    switch(req.params.lang){
        case "es":
            var header = "¡Felicidades, " + name + "!"
            var body = "Su registro ha sido exitoso. Ahora puede ingresar al \
            Diccionario Husserl con su usuario y contraseña"
            var here = "aquí"
            var warning = "Si usted no ha realizado ningún registro, por favor haga click "
            var warning2 = " para deshacer el registro."
            var subj = "¡Registro exitoso!"
            var nameCC = "Servicio de Registro DH"
            break;
        case "al":1//04lojOzEKPlGKCgYIARAAGAQSNwF-L9IrK4ylbYdLonPINDFDtuWH2lWUWUDwQIuob8ArjyH8-iVNa3d5aMQv8yn5OAdz7VzKUrE
            var header = "Alles Gute, " + name + "!"
            var body = "Seine Registrierung war erfolgreich. Sie können jetzt ins Husserl Wörterbuch eintreten mit seiner Login-Name und Passwort"
            var here = "hier"
            var warning = "Haben Sie keinen Registrierungversuch vollzogen? Bitte klicken Sie "
            var warning2 = " um die Registrierung aufmachen."
            var subj = "Registrierung war erfolgreich!"
            var nameCC = "SHusserl Wörterbuch Registerdienst"
            break;
        case "en":
            var header = "Congratulations, Mr(s) " + name + "!"
            var body = "Your register has been completed successfully, now you can log in to \
            the Husserl Dictionary Portal with your email and password"
            var here = "here"
            var warning = "If you have not made any attempt to register, please click "
            var warning2 = " to undo the registration."
            var subj = "Register was successfull!"
            var nameCC = "Husserl Dictionary registration service"
            break;
        case "fr":
            var header = "¡Felicidades, " + name + "!"
            var body = "Su registro ha sido completado exitosamente, ahora puede ingresar al \
            portal de Diccionario Husserl con su usuario y contraseña"
            var here = "aquí"
            var warning = "Si usted no ha realizado ningun registro, por favor haga click "
            var warning2 = " para deshacer el registro."
            var subj = "¡Registro exitoso!"
            var nameCC = "Servicio de Registro DH"
            break;
    }
   //console.log(header + " " + body + " " + here +" " )
    var foot = '<br/><footer style="height: calc(9vh - 1px);text-align: left;background: rgb(126, 46, 56);box-shadow: grey 0px 2px 10px 5px;"></footer>'
   // var htmlContent = "<h3>" + header + "</h3><hr/><br/><form><p>" + body + "</p><p>" + warning + " <a href='" + serverUrl + "/" + toEmail + "&pass=" + password + "'>" + here + "</a> " + warning2 + "</p></form>" + foot
    // var htmlContent = "<h3>" + header + "</h3><hr/><br/><form><p>" + body + "</p><p>" + warning + " <a href='" + serverUrl + "/" + toEmail + "&pass=" + password + "'>" + here + "</a> " + warning2 + "</p></form>" + foot
    var htmlContent = "<h3>" + header + "</h3><hr/><br/><form><p>" + body + "</p></form>" + foot
    //console.log(htmlContent)
    /*let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: email, // generated ethereal user
            pass: password // generated ethereal password
        }
    });*/

    let mailOptions = {
        from: '"'+nameCC+'" <foo@example.com>', // sender address
        to: toEmail, // list of receivers
        subject: subj, // Subject line
        html: htmlContent // html body
    };
    sendMail(mailOptions, () => {
    	return res.send("ok")
    });
    //const content = htmlContent;
    /*fs.readFile('/app/DH/routes/credentials.json', (err, content) => {
  	if (err) return console.log('Error loading client secret file:', err);
  	// Authorize a client with credentials, then call the Gmail API.
 	 authorize(JSON.parse(content), (auth) => sendEmail(mailOptions, auth, res));
    });*/
    /*transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
	    console.log(error)
            res.send(JSON.stringify({"status": 500, "error": null, "response": null}));
            return console.log(error);
        }
        res.send(JSON.stringify({"status": 200, "error": null, "response": "Envio exitoso"}));
        console.log('Message sent: %s', info.messageId);
    });*/
})


/*let transporter = nodemailer.createTransport({
        service : 'smtp.gmail.com',
        auth : {
                user : 'dhusserl.eservice@gmail.com',
                pass : 'D1cc10n4r10Huss3rl'
        }
});*/

/*transporter.sendMail(mailOptions,(err,data)=>{
	if(err){
		console.log("NO SE MANDO EL CORREO")
	}else{
		console.log("SE MANDO EL CORREO")
	}
});*/

router.get('/recoverPassword/:lang', function(req, res){
    console.log("email",req.query.email)
    var email = "dhusserl.eservice@gmail.com"
    var password = "zrlmruabqiqhepoq"
    var toEmail = req.query.email
	//console.log("toEmail",toEmail)
    var queryString = 'SELECT * FROM users WHERE email = $1;';
    var filter = [req.query.email];
    //console.log("lang=" + req.params.lang)
   // console.log("email=" + req.query.email)
    res.locals.connection.query(queryString, filter)
    .then(function (results){
        //console.log(results)
        if(results.length > 0){
            var name = results[0].apellidos ? results[0].nombre + " " + results[0].apellidos : results[0].nombre
            console.log(name)
            switch(req.params.lang){
                case "es":
                    var header = "¡Hola, " + name + "!"
                    var body = "Ha sido solicitado un cambio de contraseña; para reemplazarla por una nueva, haga click "
                    var here = "aquí"
                    var warning = "Si usted no ha solicitado un cambio de contraseña, por favor ignore este mensaje."
                    var subj = "Solicitud de Cambio de Contraseñas"
                    var nameCC = "Servicio de Registro DH"
                    break;
                case "al":
                    var header = "Hallo, " + name + "!"
                    var body = "Sie haben ein Passwortwechseln erbitten; um ein neues Passwort bekommen, bitte klicken Sie "
                    var here = "hier"
                    var warning = "Wenn Sie kein Passwortwechseln erbeten haben, bitte lassen Sie diese Message unbeachtet."
                    var subj = "Passwortwechseln Bewerbung"
                    var nameCC = "SHusserl Wörterbuch Registerdienst"
                    break;
                case "en":
                    var header = "Hello, " + name + "!"
                    var body = "You have asked for a change of password; to get a new password, please click "
                    var here = "here"
                    var warning = "If you have not asked for a change of password, please ignore this message."
                    var subj = "Password Recovery Request"
                    var nameCC = "Husserl Dictionary registration service"
                    break;
                case "fr":
                    var header = "¡Hola, Sr(a) " + name + "!"
                    var body = "Ha sido solicitado un cambio de contraseña, para reemplazarla por una nueva, haga click "
                    var here = "aquí"
                    var warning = "Si usted no ha solicitado un cambio de contraseña, por favor ignore este mensaje."
                    var subj = "Solicitud de Cambio de Contraseñas"
                    var nameCC = "Servicio de Registro DH"
                    break;
            }
            var emailEncoded = new Buffer(toEmail).toString('base64')
	        var foot = '<br/><footer style="height: calc(9vh - 1px);text-align: left;background: rgb(126, 46, 56);box-shadow: grey 0px 2px 10px 5px;"></footer>'
            //var htmlContent = '<h3>' + header + '</h3><hr/><br/>\
            //<p>' + body + here + ' ' + serverUrl + '/diccionario/recoverPassword.html?e=' + emailEncoded + '</p>\
            //<p>' + warning + '</p>' + foot
            var htmlContent = '<h3>' + header + '</h3><hr/><br/>\
            <p>' + body + here + ' ' + "http://3.22.12.85:1938/#/diccionario/recuperacion/" + emailEncoded + '</p>\
            <p>' + warning + '</p>' + foot
            //console.log(htmlContent)
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: email, // generated ethereal user
                    pass: password // generated ethereal password
                }
            });

            let mailOptions = {
                from: email, // sender address
                to: toEmail, // list of receivers
                subject: subj, // Subject line
                html: htmlContent // html body
            };
	   
	    /*let transporter = nodemailer.createTransport({
                service : 'gmail',
        	auth : {
                	user : 'dhusserl.eservice@gmail.com',
                	pass : 'zrlmruabqiqhepoq'
        	}
	    });


            let mailOptions ={
	    	from: "dhusserl.eservice@gmail.com",
	        to : "raulrueda2093@gmail.com",
		subject: "Recuperacion de password",
		text : "TU PASSWORD TIENES QUE RECUPERARLO"
	    }
	    //console.log("Options",mailOptions)
	    sendMail(mailOptions,(err, data) => {
		return res.send("ok")
	    })
	    transporter.sendMail(mailOptions,(err,data)=>{
                if(err){
               	    console.log("NO SE MANDO EL CORREO",err)
      	        }else{
              	    console.log("SE MANDO EL CORREO")
                }
  	    });*/

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.send(JSON.stringify({"status": 500, "error": null, "response": null}));
                    return console.log(error);
                }
                res.send(JSON.stringify({"status": 200, "error": null, "response": "Envio exitoso"}));
                console.log('Message sent: %s', info.messageId);
            });
        }
    }).catch(function(error){
        console.log(error)
        res.send(JSON.stringify({"status": 500, "error": null, "response": error}));
    })
})

router.post('/registrar', function(req, res){
  var currentdate = new Date();
  var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var queryString = 'SELECT * FROM users WHERE email = $1;';
    var filter2 = [req.body.email];
    res.locals.connection.query(queryString, filter2)
    .then(function (results){
	console.log("results", results)
        if(results.length < 1){
            bcrypt.hash(req.body.password, 10, function(err, hash) {
                var filter = [req.body.nombre, req.body.apellidos,req.body.institucion,
                    req.body.pais, req.body.grado,hash, req.body.email];
                res.locals.connection.query("insert into users(nombre, apellidos, institucion, pais, grado, user_password, email, registro, lastaccess) \
                VALUES($1, $2, $3, $4, $5, $6, $7, now(), now())", filter)
                .then(function(results){
                    console.log(datetime + "== logins/registrar | Usuario registrado con éxito")
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                }).catch(function(error){
                    console.log(error)
                })
            })
        }else{
            res.send(JSON.stringify({"status": 501, "error": "Ya existe el usuario.", "response": null}));
        }
    }).catch(function(error) {
        console.log(datetime + "== logins/registrar | " + error);
    })
})

module.exports = router;