const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const serverUrl = "https://diccionariohusserl.org/";

const CLIENT_ID =
  "288830572753-vb1arkdtkbbemon434quevnifjikolkd.apps.googleusercontent.com";
const CLIENT_SECRET = "gpluSvF5cK7VW6jdod5OGAsj";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04tMQdPY4mR-YCgYIARAAGAQSNwF-L9IrWU3tCu8OEuHJ9P0vs4lqVaRCnSwR87CeiIBV9AjZ9LBwuWh20d_88oFqdk6NCeDCcNY";

const EMAIL = "dhusserl.eservice@gmail.com";

const sendMail = (info, next) => {
  const acceso = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_url: REDIRECT_URL,
    refresh_token: REFRESH_TOKEN,
  };

  const oauth2client = new OAuth2(
    acceso.client_id,
    acceso.client_secret,
    acceso.redirect_url
  );

  oauth2client.setCredentials({ refresh_token: acceso.refresh_token });
  oauth2client.getAccessToken().then((res) => {
    const accessToken = res.token;

    oauth2client.setCredentials({ access_token: accessToken });

    const enviador = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: "465",
      pool: true,
      secure: true,
      auth: {
        type: "Oauth2",
        user: EMAIL,
        cliendId: acceso.client_id,
        clientSecret: acceso.client_secret,
        refreshToken: acceso.refresh_token,
        accessToken: accessToken,
      },
    });

    enviador.sendMail(info, (error, response) => {
      const now = new Date();
      const fecha =
        now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
      error
        ? console.error(`[ ${fecha} ] - [ MAILING ]:`, error)
        : console.info(`[  ${fecha} ] - [ MAILING ] : `, response);
      return next(error);
    });
  });
};

router.get("/all", function (req, res) {
  const currentdate = new Date();
  const datetime =
    currentdate.getDay() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  const queryString = "SELECT * FROM users ORDER BY id;";
  res.locals.connection
    .query(queryString)
    .then(function (results) {
      res.send(JSON.stringify({ status: 200, error: null, response: results }));
    })
    .catch(function (error) {
      console.log(datetime + "== logins/admin | " + error);
    });
});

router.post("/usuario", function (req, res) {
  const currentdate = new Date();
  const datetime =
    currentdate.getDay() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  const queryString = "SELECT * FROM users WHERE email = $1;";
  const filter = [req.body.userId];
  const password = req.body.password;
  let user = {};
  res.locals.connection
    .query(queryString, filter)
    .then(function (results) {
      user = results[0];
      if (results.length < 1) {
        console.log(
          datetime + "== logins/usuario | Usuario inexistente. Usuario: " + user
        );
        res.send(
          JSON.stringify({
            status: 500,
            error: "Usuario inexistente",
            response: null,
          })
        );
      } else {
        bcrypt.compare(
          password,
          results[0].user_password,
          function (err, res2) {
            if (res2) {
              res.locals.connection
                .query(
                  "UPDATE users SET lastaccess = now() WHERE email = $1;",
                  filter
                )
                .then(function (results) {
                  console.log(
                    datetime +
                      "== logins/usuario | Usuario guardado con éxito. Usuario: " +
                      user.email
                  );
                  res.send(
                    JSON.stringify({
                      status: 200,
                      error: null,
                      response: user.email,
                    })
                  );
                })
                .catch(function (error) {
                  console.log(
                    datetime +
                      "== logins/usuario | Error al registrar nuevo acceso"
                  );
                  res.send(
                    JSON.stringify({
                      status: 500,
                      error: "Password incorrecto",
                      response: null,
                    })
                  );
                });
            } else {
              console.log(
                datetime +
                  "== logins/usuario | Error al registrar nuevo acceso. Usuario: " +
                  user.email
              );
              res.send(
                JSON.stringify({
                  status: 500,
                  error: "Password incorrecto",
                  response: null,
                })
              );
            }
          }
        );
      }
    })
    .catch(function (error) {
      console.log(datetime + "== logins/usuario | " + error);
    });
});

router.get("/admin", function (req, res) {
  const currentdate = new Date();
  const datetime =
    currentdate.getDay() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  const queryString = "SELECT * FROM administrador WHERE email = $1;";
  const filter = [req.query.userId];
  const password = req.query.password;
  res.locals.connection
    .query(queryString, filter)
    .then(function (results) {
      console.log(results);
      if (results.length < 1) {
        console.log(datetime + "== logins/admin | " + error);
        res.send(
          JSON.stringify({
            status: 500,
            error: "Usuario inexistente",
            response: null,
          })
        );
      } else {
        if (results[0].user_password == password) {
          console.log(
            datetime + "== logins/usuario | Usuario reconocido con éxito"
          );
          res.send(
            JSON.stringify({ status: 200, error: null, response: results[0] })
          );
        } else
          res.send(
            JSON.stringify({
              status: 500,
              error: "Password incorrecto",
              response: null,
            })
          );
      }
    })
    .catch(function (error) {
      console.log(datetime + "== logins/admin | " + error);
    });
});

router.get("/checkUserExistence/:email", function (req, res) {
  const currentdate = new Date();
  const datetime =
    currentdate.getDay() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  const queryString = "SELECT * FROM users WHERE email = $1;";
  const filter = [req.params.email];
  res.locals.connection
    .query(queryString, filter)
    .then(function (results) {
      if (results.length < 1) {
        console.log(
          datetime + "== logins/checkUserExistence/:email | " + error
        );
        res.send(
          JSON.stringify({
            status: 500,
            error: "Usuario inexistente",
            response: null,
          })
        );
      } else {
        if (results[0].user_password == password) {
          console.log(
            datetime +
              "== logins/checkUserExistence/:email | Usuario reconocido con éxito"
          );
          res.send(
            JSON.stringify({ status: 200, error: null, response: results[0] })
          );
        } else
          res.send(
            JSON.stringify({
              status: 500,
              error: "Password incorrecto",
              response: null,
            })
          );
      }
    })
    .catch(function (error) {
      console.log(datetime + "== logins/checkUserExistence/:email | " + error);
    });
});

router.post("/updatePassword/:email/:pass", function (req, res) {
  if (req.params.email == " guest" || req.params.email == "azirionq") {
    res.send(
      JSON.stringify({
        status: 401,
        error: "Acción imposible de realizar.",
        response: null,
      })
    );
  } else {
    const currentdate = new Date();
    const datetime =
      currentdate.getDay() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    const queryString = "UPDATE users SET user_password = $1 WHERE email = $2;";
    bcrypt.hash(req.params.pass, 10, function (err, hash) {
      console.log("hash:", hash);
      const filter = [hash, req.params.email];
      res.locals.connection
        .query(queryString, filter)
        .then(function (results) {
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              response: "Registro exitoso!",
            })
          );
        })
        .catch(function (error) {
          res.send(
            JSON.stringify({
              status: 500,
              error: "Hubo un error en el servicio",
              response: null,
            })
          );
        });
    });
  }
});

router.get("/eraseRegister/:email", function (req, res) {
  if (req.params.email == "azirionq" || req.params.email == " guest") {
    res.send(
      JSON.stringify({
        status: 401,
        error: "Acción imposible de realizar.",
        response: null,
      })
    );
  } else {
    const currentdate = new Date();
    const datetime =
      currentdate.getDay() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    const queryString0 = "SELECT * FROM users WHERE email = $1;";
    const queryString = "DELETE FROM users WHERE email = $1;";
    const filter = [req.params.email];
    res.locals.connection
      .query(queryString0, filter)
      .then(function (results) {
        console.log(results);
        console.log(req.query.pass);
        bcrypt.compare(
          req.query.pass,
          results[0].user_password,
          function (err, re) {
            if (re) {
              res.locals.connection
                .query(queryString, filter)
                .then(function (results) {
                  console.log(
                    datetime +
                      "== logins/eraseRegister/:email | Usuario borrado con éxito"
                  );
                  res.send(
                    JSON.stringify({
                      status: 200,
                      error: null,
                      response: "Registro exitoso!",
                    })
                  );
                })
                .catch(function (error) {
                  console.log(
                    datetime + "== logins/eraseRegister/:email | " + error
                  );
                  res.send(
                    JSON.stringify({
                      status: 500,
                      error: "Hubo un error en el servicio",
                      response: null,
                    })
                  );
                });
            } else {
              console.log(datetime + "== logins/eraseRegister/:email | ");
              res.send(
                JSON.stringify({
                  status: 505,
                  error: "Passwords don't match.",
                  response: null,
                })
              );
            }
          }
        );
      })
      .catch(function (error) {
        console.log(datetime + "== logins/eraseRegister/:email | " + error);
        res.send(
          JSON.stringify({
            status: 500,
            error: "Hubo un error en el servicio",
            response: null,
          })
        );
      });
  }
});

router.get("/recoverPassword/:lang", function (req, res) {
  const toEmail = req.query.email;
  const queryString = "SELECT * FROM users WHERE email = $1;";
  const filter = [req.query.email];
  res.locals.connection
    .query(queryString, filter)
    .then(function (results) {
      if (results.length > 0) {
        const name = results[0].apellidos
          ? results[0].nombre + " " + results[0].apellidos
          : results[0].nombre;
        switch (req.params.lang) {
          case "es":
            var header = "¡Hola, " + name + "!";
            var body =
              "Ha sido solicitado un cambio de contraseña; para reemplazarla por una nueva, haga click ";
            var here = "aquí";
            var warning =
              "Si usted no ha solicitado un cambio de contraseña, por favor ignore este mensaje.";
            var subj = "Solicitud de Cambio de Contraseñas";
            break;
          case "al":
            var header = "Hallo, " + name + "!";
            var body =
              "Sie haben ein Passwortwechseln erbitten; um ein neues Passwort bekommen, bitte klicken Sie ";
            var here = "hier";
            var warning =
              "Wenn Sie kein Passwortwechseln erbeten haben, bitte lassen Sie diese Message unbeachtet.";
            var subj = "Passwortwechseln Bewerbung";
            break;
          case "en":
            var header = "Hello, " + name + "!";
            var body =
              "You have asked for a change of password; to get a new password, please click ";
            var here = "here";
            var warning =
              "If you have not asked for a change of password, please ignore this message.";
            var subj = "Password Recovery Request";
            break;
          case "fr":
            var header = "¡Hola, Sr(a) " + name + "!";
            var body =
              "Ha sido solicitado un cambio de contraseña, para reemplazarla por una nueva, haga click ";
            var here = "aquí";
            var warning =
              "Si usted no ha solicitado un cambio de contraseña, por favor ignore este mensaje.";
            var subj = "Solicitud de Cambio de Contraseñas";
            break;
        }

        var emailEncoded = Buffer.from(toEmail).toString("base64");
        var foot =
          '<br/><footer style="height: calc(9vh - 1px);text-align: left;background: rgb(126, 46, 56);box-shadow: grey 0px 2px 10px 5px;"></footer>';

        var htmlContent =
          "<h3>" +
          header +
          "</h3><hr/><br/>\
            <p>" +
          body +
          here +
          " " +
          `${serverUrl}#/diccionario/recuperacion/` +
          emailEncoded +
          "</p>\
            <p>" +
          warning +
          "</p>" +
          foot;

        let mailOptions = {
          from: `Diccionario Husserl (${EMAIL})`, // sender address
          to: toEmail, // list of receivers
          subject: subj, // Subject line
          html: htmlContent, // html body
        };

        sendMail(mailOptions, () => {
          return res.send("DONE");
        });
      } else {
        let respuesta = "";
        switch (req.params.lang) {
          case "es":
            respuesta =
              "El correo que ha ingresado no existe en nuestra base de datos.";
            break;
          case "al":
            respuesta = "";
            break;
          case "en":
            respuesta =
              "The email that you have entered does not exist in our database.";
            break;
          case "fr":
            respuesta = "";
            break;
        }
        res.send(
          JSON.stringify({ status: 500, error: respuesta, response: "" })
        );
      }
    })
    .catch(function (error) {
      res.send(JSON.stringify({ status: 500, error: null, response: error }));
    });
});

router.post("/registrar/:lang", function (req, res) {
  const currentdate = new Date();
  const datetime =
    currentdate.getDay() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  const queryString = "SELECT * FROM users WHERE email = $1;";
  const filter2 = [req.body.email];
  console.log("BODY", req.body);
  res.locals.connection
    .query(queryString, filter2)
    .then(function (results) {
      console.log("results", results);
      if (results.length < 1) {
        bcrypt.hash(req.body.password, 10, function (err, hash) {
          const filter = [
            req.body.nombre,
            req.body.apellidos,
            req.body.institucion,
            req.body.pais,
            req.body.grado,
            hash,
            req.body.email,
          ];
          res.locals.connection
            .query(
              "insert into users(nombre, apellidos, institucion, pais, grado, user_password, email, registro, lastaccess) \
                VALUES($1, $2, $3, $4, $5, $6, $7, now(), now())",
              filter
            )
            .then(function (results) {
              console.log("results", results);
              switch (req.params.lang) {
                case "es":
                  var header = "¡Felicidades, " + req.body.nombre + "!";
                  var body =
                    "Su registro ha sido exitoso. Ahora puede ingresar al \
					            Diccionario Husserl con su usuario y contraseña";
                  var subj = "¡Registro exitoso!";
                  break;
                case "al":
                  var header = "Alles Gute, " + req.body.nombre + "!";
                  var body =
                    "Seine Registrierung war erfolgreich. Sie können jetzt ins Husserl Wörterbuch eintreten mit seiner Login-Name und Passwort";
                  var subj = "Registrierung war erfolgreich!";
                  break;
                case "en":
                  var header =
                    "Congratulations, Mr(s) " + req.body.nombre + "!";
                  var body =
                    "Your register has been completed successfully, now you can log in to \
					            the Husserl Dictionary Portal with your email and password";
                  var subj = "Register was successfull!";
                  break;
                case "fr":
                  var header = "¡Felicidades, " + req.body.nombre + "!";
                  var body =
                    "Su registro ha sido completado exitosamente, ahora puede ingresar al \
					            portal de Diccionario Husserl con su usuario y contraseña";
                  var subj = "¡Registro exitoso!";
                  break;
              }
              var foot =
                '<br/><footer style="height: calc(9vh - 1px);text-align: left;background: rgb(126, 46, 56);box-shadow: grey 0px 2px 10px 5px;"></footer>';
              var htmlContent =
                "<h3>" +
                header +
                "</h3><hr/><br/><form><p>" +
                body +
                "</p></form>" +
                foot;
              let mailOptions = {
                from: '"Diccionario Husserl"', // sender address
                to: req.body.email, // list of receivers
                subject: subj, // Subject line
                html: htmlContent, // html body
              };
              sendMail(mailOptions, () => {
                res.send(
                  JSON.stringify({
                    status: 200,
                    error: null,
                    response: results,
                  })
                );
              });
              console.log(
                datetime + "== logins/registrar | Usuario registrado con éxito"
              );
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      } else {
        res.send(
          JSON.stringify({
            status: 501,
            error: "Ya existe el usuario.",
            response: null,
          })
        );
      }
    })
    .catch(function (error) {
      console.log(datetime + "== logins/registrar | " + error);
    });
});

module.exports = router;
