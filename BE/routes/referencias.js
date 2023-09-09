const express = require("express");
const router = express.Router();
const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "queryprincipal");

router.post("/agregarReferencia", function (req, res, next) {
  if (global.rol == "admin") {
    const queryString2 =
      "insert into termino_referencia(tr_termid, tr_refid, tr_order) values($1,$2,$3);";
    const filter2 = [req.body.termId, req.body.referencia, req.body.orden];
    res.locals.connection
      .query(queryString2, filter2)
      .then(function (response) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: "DONE!" })
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

router.get("/lista", function (req, res, next) {
  if (global.rol != "guest") {
    const queryString =
      "select distinct ref_id, ref_libro_de, ref_libro_es, clave from referencia order by ref_libro_de;";
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

router.get("/:id", function (req, res, next) {
  if (global.rol != "guest") {
    filter = [req.params.id];
    const queryString = "select distinct * from referencia where ref_id = $1";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        //   console.log(datetime + "== referencias/:id/ | Éxito")
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
        //If there is no error, all is good and response is 200OK.
      })
      .catch(function (error) {
        // console.log(datetime + "== referencias/:id/ | " + error)
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

router.get("/obtieneReferencias/:id", function (req, res, next) {
  if (global.rol != "guest") {
    const filter = [req.params.id];
    const queryString =
      "\
    select * from\
    (select distinct\
	termino.t_term_de as expresion_original,\
    termino.t_term_es as expresion_traduccion,\
    termino.t_id as id,\
    termino.t_em_de as epretty,\
    termino.t_em_es as tpretty,\
    termino.t_index_de as index_de,\
    termino.t_index_es as index_es,\
    termino_referencia.tr_refid as refid,\
    termino_referencia.tr_order as orden,\
    referencia.clave as clave,\
	referencia.ref_libro_de as ref_original,\
	referencia.ref_libro_es as ref_traduccion,\
	referencia.ref_def_de as pasaje_original,\
	referencia.ref_def_es as pasaje_traduccion\
    from\
        termino\
        inner join termino_referencia\
        on termino.t_id = CAST(termino_referencia.tr_termid AS INT)\
        inner join referencia\
        on termino_referencia.tr_refid = referencia.ref_id\
    where\
    termino.t_id = $1) Sub order by expresion_original, orden, \
    CASE WHEN clave = 'IP' THEN 1 \
		      WHEN clave = 'PW' THEN 2 \
		      WHEN clave = 'I1' THEN 3 \
		      WHEN clave = 'I2' THEN 4 \
			  WHEN clave = 'I3' THEN 5 \
		      WHEN clave = 'PV' THEN 6 \
		      WHEN clave LIKE 'CM' THEN 7 \
		 	END, refid;";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
      })
      .catch(function (error) {
        res.send(JSON.stringify({ status: 500, error: null, response: null }));
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

router.get("/obtieneReferenciasByRef/:refid", function (req, res, next) {
  if (global.rol != "guest") {
    const filter = [req.params.refid];
    const queryString =
      "\
    SELECT * FROM \
    (select distinct\
    termino.t_id as id,\
	termino.t_term_de as expresion_original,\
    termino.t_term_es as expresion_traduccion,\
    termino.t_em_de as epretty,\
	termino.t_em_es as tpretty,\
    termino_referencia.tr_refid as refid,\
    termino_referencia.tr_order as orden,\
	referencia.clave as clave,\
	referencia.ref_libro_de as ref_original,\
	referencia.ref_libro_es as ref_traduccion,\
	referencia.ref_def_de as pasaje_original,\
	referencia.ref_def_es as pasaje_traduccion\
    from\
        termino\
        inner join termino_referencia\
        on termino.t_id = CAST(termino_referencia.tr_termid AS INT)\
        inner join referencia\
        on termino_referencia.tr_refid = referencia.ref_id\
    where\
    termino_referencia.tr_refid = $1) Sub order by expresion_original, orden, \
    CASE WHEN clave = 'IP' THEN 1 \
      WHEN clave = 'PW' THEN 2 \
      WHEN clave = 'I1' THEN 3 \
      WHEN clave = 'I2' THEN 4 \
      WHEN clave = 'PV' THEN 5 \
      WHEN clave = 'CM' THEN 6 \
     END, refid;";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
      })
      .catch(function (error) {
        res.send(JSON.stringify({ status: 500, error: null, response: null }));
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

router.get("/obtieneReferenciasIdRefId/:id/:refid", function (req, res, next) {
  if (global.rol != "guest") {
    const filter = [req.params.refid, req.params.id];
    const queryString =
      "\
    SELECT * FROM \
    (select distinct\
    termino.t_id as id,\
	termino.t_term_de as expresion_original,\
    termino.t_term_es as expresion_traduccion,\
    termino.t_em_de as epretty,\
	termino.t_em_es as tpretty,\
    termino_referencia.tr_refid as refid,\
    termino_referencia.tr_order as orden,\
	referencia.clave as clave,\
	referencia.ref_libro_de as ref_original,\
	referencia.ref_libro_es as ref_traduccion,\
	referencia.ref_def_de as pasaje_original,\
	referencia.ref_def_es as pasaje_traduccion\
    from\
        termino\
        inner join termino_referencia\
        on termino.t_id = CAST(termino_referencia.tr_termid AS INT)\
        inner join referencia\
        on termino_referencia.tr_refid = referencia.ref_id\
    where\
    termino_referencia.tr_refid = $1 AND termino.t_id = $2) Sub order by expresion_original, orden, \
    CASE WHEN clave = 'IP' THEN 1 \
      WHEN clave = 'PW' THEN 2 \
      WHEN clave = 'I1' THEN 3 \
      WHEN clave = 'I2' THEN 4 \
      WHEN clave = 'PV' THEN 5 \
      WHEN clave = 'CM' THEN 6 \
     END, refid;";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
      })
      .catch(function (error) {
        res.send(JSON.stringify({ status: 500, error: null, response: null }));
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

router.get("/obtieneReferenciasByTerm/:id", function (req, res, next) {
  if (global.rol != "guest") {
    const filter = [req.params.id];
    const queryString =
      "\
        SELECT * FROM\
        (select distinct\
        termino.t_id as id,\
        termino.t_term_de as expresion_original,\
        termino.t_term_es as expresion_traduccion,\
        termino.t_em_de as epretty,\
	termino.t_em_es as tpretty,\
	termino.t_index_de as index_de,\
        termino.t_index_es as index_es,\
        termino_referencia.tr_refid as refid,\
        termino_referencia.tr_order as orden,\
        referencia.clave as clave,\
        referencia.ref_libro_de as ref_original,\
        referencia.ref_libro_es as ref_traduccion,\
        referencia.ref_def_de as pasaje_original,\
        referencia.ref_def_es as pasaje_traduccion\
        from\
            termino\
            inner join termino_referencia\
            on termino.t_id = CAST(termino_referencia.tr_termid AS INT)\
            inner join referencia\
            on termino_referencia.tr_refid = referencia.ref_id\
        where\
        termino_referencia.tr_termid = $1) Sub order by expresion_original, orden, \
        CASE WHEN clave = 'IP' THEN 1 \
        WHEN clave = 'PW' THEN 2 \
        WHEN clave = 'I1' THEN 3 \
        WHEN clave = 'I2' THEN 4 \
        WHEN clave = 'PV' THEN 5 \
        WHEN clave = 'CM' THEN 6 \
        END, refid;";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        if (results.length == 0) {
          const query =
            "SELECT \
                t_id as id,\
                t_term_de as expresion_original,\
                t_term_es as expresion_traduccion,\
                t_em_de as epretty,\
                t_em_es as tpretty ,\
                termino.t_index_de as index_de,\
                termino.t_index_es as index_es\
                FROM termino WHERE t_id = $1;";

          res.locals.connection.query(query, filter).then(function (results) {
            res.send(
              JSON.stringify({ status: 200, error: null, response: results })
            );
          });
        } else
          res.send(
            JSON.stringify({ status: 200, error: null, response: results })
          );
      })
      .catch(function (error) {
        res.send(JSON.stringify({ status: 500, error: null, response: null }));
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

router.post("/new/nuevoPasaje/", function (req, res) {
  if (global.rol == "admin") {
    const ref_id = Buffer.from(req.body.ref_id, "base64").toString("ascii");
    const pas_de = Buffer.from(req.body.pasaje_de, "base64").toString("ascii");
    const pas_es = Buffer.from(req.body.pasaje_es, "base64").toString("ascii");
    const ref_de = Buffer.from(req.body.ref_de, "base64").toString("ascii");
    const ref_es = Buffer.from(req.body.ref_es, "base64").toString("ascii");
    res.locals.connection
      .query("select * from referencia where ref_id=$1;", [ref_id])
      .then(function (result) {
        if (result.length <= 0) {
          const filter = [
            req.body.clave,
            pas_de,
            pas_es,
            ref_de,
            ref_es,
            ref_id,
          ];
          const queryString =
            "\
                INSERT INTO referencia (clave, ref_def_de, ref_def_es, ref_libro_de, ref_libro_es, ref_id) VALUES ($1, $2, $3, $4, $5, $6);";
          res.locals.connection
            .query(queryString, filter)
            .then(function (results) {
              res.send(
                JSON.stringify({ status: 200, error: null, response: "Hey" })
              );
            })
            .catch(function (error) {
              res.send(
                JSON.stringify({ status: 500, error: error, response: null })
              );
            });
        } else {
          res.send(
            JSON.stringify({
              status: 502,
              error: "Ya existe el id que quiere guardar.",
              response: null,
            })
          );
        }
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

router.post("/editarPasaje/:refid", function (req, res, next) {
  if (global.rol == "admin") {
    const pas_de = Buffer.from(req.body.pasaje_de, "base64").toString("ascii");
    const pas_es = Buffer.from(req.body.pasaje_es, "base64").toString("ascii");
    const ref_de = Buffer.from(req.body.ref_de, "base64").toString("ascii");
    const ref_es = Buffer.from(req.body.ref_es, "base64").toString("ascii");
    const ref_id = Buffer.from(req.body.ref_id, "base64").toString("ascii");
    const filter = [
      pas_de,
      pas_es,
      ref_es,
      ref_de,
      ref_id,
      req.params.refid,
      req.body.clave,
    ];

    const queryString =
      "\
	UPDATE referencia SET clave = $7, ref_def_de = $1, ref_def_es = $2, ref_libro_es = $3, ref_libro_de = $4, ref_id = $5 WHERE ref_id = $6;";
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

router.get("/buscarPasaje/:refid", function (req, res, next) {
  if (global.rol != "guest") {
    const filter = [req.params.refid];
    const queryString =
      "\
	SELECT * FROM termino_referencia WHERE tr_refid = $1;";
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

router.delete("/eliminarPasaje/:refid", function (req, res, next) {
  if (global.rol == "admin") {
    const filter = [req.params.refid];
    const queryString =
      "\
	DELETE FROM referencia WHERE ref_id = $1;";
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

router.delete("/quitarPasaje/:refid/:termid", function (req, res, next) {
  if (global.rol == "admin") {
    const filter = [req.params.refid, req.params.termid];
    const queryString =
      "\
	DELETE FROM termino_referencia WHERE tr_refid = $1 AND tr_termid = $2;";
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

const fixReferencias = (referencias) => {
  let expresiones = [];
  let posicActual = -1;
  let expreActual = "";
  let i = 0;
  while (i < referencias.length) {
    if (expreActual != referencias[i].expresion) {
      posicActual++;
      expreActual = referencias[i].expresion;
      expresiones.push({
        clave: referencias[i].clave,
        nombreExpresion: referencias[i].expresion,
        expresion: referencias[i].expresion,
        id: referencias[i].id,
        index_de: referencias[i].index_de,
        index_es: referencias[i].index_es,
        pretty_e: referencias[i].pretty_e,
        pretty_t: referencias[i].pretty_t,
        referencias: [],
        traduccion: referencias[i].traduccion,
      });
      expresiones[posicActual].referencias.push({
        referencia_original: referencias[i].referencia_original,
        referencia_traduccion: referencias[i].referencia_traduccion,
        refid: referencias[i].refid,
        orden: referencias[i].orden,
      });
      i++;
    } else {
      expresiones[posicActual].referencias.push({
        referencia_original: referencias[i].referencia_original,
        referencia_traduccion: referencias[i].referencia_traduccion,
        refid: referencias[i].refid,
        orden: referencias[i].orden,
      });
      i++;
    }
  }
  return expresiones;
};

router.post("/busquedaExpresion/:case", function (req, res, next) {
  if (global.rol != "guest") {
    const filter = ["%" + req.body.parametro + "%"];
    const condicion =
      req.params.case == "false"
        ? "where termino.t_term_es ilike $1 or termino.t_term_de ilike $1"
        : "where termino.t_term_es like $1 or termino.t_term_de like $1";
    const queryString =
      "\
        select\
        termino.t_id as id,\
        termino.t_term_de as expresion,\
        termino.t_term_es as traduccion,\
        termino.t_index_de as index_de,\
        termino.t_index_es as index_es,\
        termino.t_em_de AS pretty_e,\
		termino.t_em_es AS pretty_t,\
        termino_referencia.tr_termid as term_id,\
        termino_referencia.tr_refid as term_refid,\
        referencia.clave AS clave, \
        referencia.ref_id as refid,\
        referencia.ref_libro_de as referencia_original,\
        referencia.ref_libro_es as referencia_traduccion,\
        referencia.ref_def_de as ref_def_de,\
        referencia.ref_def_es as ref_def_es\
        from termino\
        inner join termino_referencia on cast (termino_referencia.tr_termid as int) = cast(termino.t_id as int)\
        inner join referencia on referencia.ref_id = termino_referencia.tr_refid " +
      condicion +
      " order by termino.t_term_de";
    res.locals.connection
      .query(queryString, filter)
      .then(function (results) {
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            response: fixReferencias(results),
          })
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

router.post(
  "/busquedaExpresionPorLetraAdmin/:letra/:case",
  function (req, res, next) {
    if (global.rol != "guest") {
      const filter = ["%" + req.body.parametro + "%"];

      let condicion =
        req.params.case == "false"
          ? "where termino.t_term_de ilike $1"
          : "where termino.t_term_de like $1";
      condicion += " and termino.t_index_de like '" + req.params.letra + "%'";
      const queryString =
        "\
        select\
        termino.t_id as id,\
        termino.t_term_de as expresion,\
        termino.t_term_es as traduccion,\
        termino.t_index_de as index_de,\
        termino.t_index_es as index_es,\
        termino.t_em_de AS pretty_e,\
        termino.t_em_es AS pretty_t\
        from termino " +
        condicion +
        " order by termino.t_term_de";
      res.locals.connection
        .query(queryString, filter)
        .then(function (results) {
          console.log("results", results);
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              response: fixReferencias(results),
            })
          );
        })
        .catch(function (error) {
          res.send(
            JSON.stringify({ status: 500, error: error, response: null })
          );
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
  }
);

const fixReferenciasDic = (referencias) => {
  let expresiones = [];
  let posicActual = -1;
  let expreActual = "";
  let i = 0;
  while (i < referencias.length) {
    if (expreActual != referencias[i].id) {
      posicActual++;
      expreActual = referencias[i].id;
      expresiones.push({
        clave: referencias[i].clave,
        nombreExpresion: referencias[i].expresion,
        id: referencias[i].id,
        index_de: referencias[i].index_de,
        index_es: referencias[i].index_es,
        pretty_e: referencias[i].pretty_e,
        pretty_t: referencias[i].pretty_t,
        referencias: [],
        traduccion: referencias[i].traduccion,
      });
      expresiones[posicActual].referencias.push({
        referencia_original: referencias[i].referencia_original,
        referencia_traduccion: referencias[i].referencia_traduccion,
        refid: referencias[i].refid,
        orden: referencias[i].orden,
      });
      i++;
    } else {
      expresiones[posicActual].referencias.push({
        referencia_original: referencias[i].referencia_original,
        referencia_traduccion: referencias[i].referencia_traduccion,
        refid: referencias[i].refid,
        orden: referencias[i].orden,
      });
      i++;
    }
  }
  return expresiones;
};

router.post(
  "/busquedaExpresionPorLetra/:letra/:lenguaje",
  function (req, res, next) {
    if (global.rol != "guest") {
      const filter = ["%" + req.body.parametro + "%"];
      if (req.params.lenguaje == "es") {
        if (req.body.case) {
          var condicion =
            "where termino.t_term_es like $1 and termino.t_index_es like '" +
            req.params.letra +
            "%'";
        } else {
          var condicion =
            "where termino.t_term_es ilike $1 and termino.t_index_es like '" +
            req.params.letra +
            "%'";
        }
        var ordenamiento =
          "order by termino.t_em_es, termino_referencia.tr_order,\
                CASE WHEN clave = 'IP' THEN 1 \
                WHEN clave = 'PW' THEN 2 \
                WHEN clave = 'I1' THEN 3 \
                WHEN clave = 'I2' THEN 4 \
                WHEN clave = 'I3' THEN 5 \
                WHEN clave = 'PV' THEN 6 \
                WHEN clave = 'CM' THEN 7 \
                END, refid;";
        var terminos =
          "termino.t_term_es as expresion, termino.t_term_de as traduccion,";
        var prettys =
          "termino.t_em_de as pretty_t, termino.t_em_es as pretty_e,";
      } else {
        if (req.body.case) {
          var condicion =
            "where termino.t_term_de like $1 and termino.t_index_de like '" +
            req.params.letra +
            "%'";
        } else {
          var condicion =
            "where termino.t_term_de ilike $1 and termino.t_index_de ilike '" +
            req.params.letra +
            "%'";
        }
        var ordenamiento =
          "order by termino.t_em_de, termino_referencia.tr_order,\
    		    CASE WHEN clave = 'IP' THEN 1 \
            WHEN clave = 'PW' THEN 2 \
            WHEN clave = 'I1' THEN 3 \
            WHEN clave = 'I2' THEN 4 \
            WHEN clave = 'I3' THEN 5 \
            WHEN clave = 'PV' THEN 6 \
            WHEN clave = 'CM' THEN 7 \
            END, refid;";
        var terminos =
          "termino.t_term_de as expresion, termino.t_term_es as traduccion,";
        var prettys =
          "termino.t_em_de as pretty_e, termino.t_em_es as pretty_t,";
      }
      const queryString =
        "\
        select\
        termino.t_id as id," +
        terminos +
        "termino.t_index_de as index_de,\
        termino.t_index_es as index_es," +
        prettys +
        "termino_referencia.tr_termid as term_id,\
        termino_referencia.tr_refid as term_refid,\
	termino_referencia.tr_order as orden,\
        referencia.clave as clave, \
        referencia.ref_id as refid,\
        referencia.ref_libro_de as referencia_original,\
        referencia.ref_libro_es as referencia_traduccion,\
        referencia.ref_def_de as ref_def_de,\
        referencia.ref_def_es as ref_def_es\
        from termino\
        inner join termino_referencia on cast (termino_referencia.tr_termid as int) = cast(termino.t_id as int)\
        inner join referencia on referencia.ref_id = termino_referencia.tr_refid " +
        condicion +
        " " +
        ordenamiento;

      res.locals.connection
        .query(queryString, filter)
        .then(function (results) {
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              response: fixReferenciasDic(results),
            })
          );
        })
        .catch(function (error) {
          res.send(
            JSON.stringify({ status: 500, error: error, response: null })
          );
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
  }
);

const fixPasajes = (res, pasaje, tid) => {
  if (pasaje.indexOf("onclick") > -1) {
    let posicionInicial = pasaje.indexOf("onclick") - 12;
    let posicion = posicionInicial + 1;
    let posicionFinal = 0;
    while (posicion < pasaje.length) {
      if (pasaje[posicion] == ">") {
        posicionFinal = posicion;
        posicion = pasaje.length;
        const pedazo = pasaje.slice(posicionInicial, posicionFinal + 1);
        if (pedazo.indexOf("onclick") > -1) {
          const posicionClick = pedazo.indexOf("onclick");
          const pedazoClick = pedazo.slice(posicionClick, posicionFinal + 1);
          const refid = pedazoClick.split("'")[1];
          const reemplazo =
            pasaje.split(pedazo)[0] +
            "<a href='/#/diccionario/husserl/pasaje/" +
            tid +
            "/" +
            refid +
            "'>" +
            pasaje.split(pedazo)[1];
          return fixPasajes(res, reemplazo);
        }
      }
      posicion++;
    }
  } else {
    return pasaje;
  }
};

const recorre = (lista, index, res, next) => {
  var pasajeResuelto = lista[index];
  if (index >= lista.length) return next();
  pasajeResuelto.ref_def_de = fixPasajes(
    res,
    lista[index].ref_def_de,
    lista[index].tr_termid
  );
  pasajeResuelto.ref_def_es = fixPasajes(
    res,
    lista[index].ref_def_es,
    lista[index].tr_termid
  );
  res.locals.connection
    .query(
      "UPDATE referencia SET ref_def_de = $1, ref_def_es = $2 where ref_id = $3;",
      [
        pasajeResuelto.ref_def_de,
        pasajeResuelto.ref_def_es,
        lista[index].ref_id,
      ]
    )
    .then((r) => {
      return recorre(lista, index + 1, res, next);
    });
};

router.post("/reemplazo2", function (req, res) {
  res.locals.connection
    .query(
      "\
    select referencia.ref_id,\
    referencia.ref_def_de,\
    referencia.ref_def_es,\
    termino_referencia.tr_termid \
    from referencia \
    inner join termino_referencia on (termino_referencia.tr_refid) = referencia.ref_id\
    where referencia.ref_def_de like '%onclick%' or referencia.ref_def_es like '%onclick%'",
      []
    )
    .then((results) => {
      recorre(results, 0, res, () => {
        console.log("DONE");
        res.send("pasajes cambiados.");
      });
    });
});

module.exports = router;
