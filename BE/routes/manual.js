const express = require("express");
const router = express.Router();

router.get("/get", function (req, res, next) {
  if (global.rol != "guest") {
    const queryString =
      "\
    select\
	* from config where id = 1";
    res.locals.connection
      .query(queryString)
      .then(function (results) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
      })
      .catch(function (error) {
        res.send(JSON.stringify({ status: 500, error: error, response: null }));
      });
  } else {
    res.send(
      JSON.stringify({
        status: 401,
        error: "Está prohibido para este usuario.",
        response: null,
      })
    );
  }
});

router.post("/update", function (req, res, next) {
  if (global.rol == "admin") {
    const filter = [req.body.content];
    const queryString = "update config set contenido = $1 where id = 1";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
      })
      .catch(function (error) {
        res.send(JSON.stringify({ status: 500, error: error, response: null }));
      });
  } else {
    res.send(
      JSON.stringify({
        status: 401,
        error: "Está prohibido para este usuario.",
        response: null,
      })
    );
  }
});

router.post("/updateD", function (req, res, next) {
  if (global.rol == "admin") {
    const filter = [req.body.content];
    const queryString = "update config set contenido_de = $1 where id = 1";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
      })
      .catch(function (error) {
        res.send(JSON.stringify({ status: 500, error: error, response: null }));
      });
  } else {
    res.send(
      JSON.stringify({
        status: 401,
        error: "Está prohibido para este usuario.",
        response: null,
      })
    );
  }
});

router.post("/updateE", function (req, res, next) {
  if (global.rol == "admin") {
    const filter = [req.body.content];
    const queryString = "update config set contenido_en = $1 where id = 1";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
      })
      .catch(function (error) {
        res.send(JSON.stringify({ status: 500, error: error, response: null }));
      });
  } else {
    res.send(
      JSON.stringify({
        status: 401,
        error: "Está prohibido para este usuario.",
        response: null,
      })
    );
  }
});

router.post("/updateF", function (req, res, next) {
  if (global.rol == "admin") {
    const filter = [req.body.content];
    const queryString = "update config set contenido_fr = $1 where id = 1";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
      })
      .catch(function (error) {
        res.send(JSON.stringify({ status: 500, error: error, response: null }));
      });
  } else {
    res.send(
      JSON.stringify({
        status: 401,
        error: "Está prohibido para este usuario.",
        response: null,
      })
    );
  }
});

router.post("/updateC", function (req, res, next) {
  if (global.rol == "admin") {
    const filter = [req.body.content];
    const queryString = "update config set contenido_ca = $1 where id = 1";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
      })
      .catch(function (error) {
        res.send(JSON.stringify({ status: 500, error: error, response: null }));
      });
  } else {
    res.send(
      JSON.stringify({
        status: 401,
        error: "Está prohibido para este usuario.",
        response: null,
      })
    );
  }
});

module.exports = router;
