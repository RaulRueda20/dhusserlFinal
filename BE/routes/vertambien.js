const express = require("express");
const router = express.Router();

router.get("/:id", function (req, res, next) {
  if (global.rol == "admin") {
    const filter = [req.params.id];
    const queryString =
      "select termino.t_term_es as traduccion, termino.t_term_de as expresion, termino.t_id as id\
        from vertambien inner join termino on termino.t_id = ver_b where ver_a=$1\
        union all\
        select termino.t_term_es as traduccion, termino.t_term_de as expresion, termino.t_id as id\
        from vertambien inner join termino on termino.t_id = ver_a where ver_b=$1";
    res.locals.connection
      .query(queryString, filter)
      .then(function (data) {
        res.send(JSON.stringify({ status: 200, error: null, response: data }));
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

router.post("/:id/:vt", function (req, res, next) {
  if (global.rol == "admin") {
    const filter = [req.params.id, req.params.vt];
    const queryString =
      "INSERT INTO vertambien (ver_a, ver_b) VALUES ($1, $2);";
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

router.delete("/:id/:vt", function (req, res, next) {
  if (global.rol == "admin") {
    const filter = [parseInt(req.params.id), parseInt(req.params.vt)];
    const queryString =
      "\
        DELETE FROM vertambien WHERE ver_a=$1 AND ver_b=$2;";
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
