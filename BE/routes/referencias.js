var express = require('express');
//var bcrypt = require('bcrypt');
var router = express.Router();
var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'queryprincipal');

router.post('/agregarReferencia', function(req, res, next){
    if(global.rol == "admin"){
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var queryString2 = "insert into termino_referencia(tr_termid, tr_refid, tr_order) values($1,$2,$3);";
    // console.log(queryString2)
    var filter2 = [req.body.termId, req.body.referencia, req.body.orden]
    // console.log(filter2)
    res.locals.connection.query(queryString2, filter2).then(function(response){
        // console.log(datetime + "== referencias/agregarReferencia/ | Referencia agregada con éxito")
        res.send(JSON.stringify({"status": 200, "error": null, "response": "DONE!"}));
    }).catch(function(error){
        // console.log(datetime + "== referencias/agregarReferencia/ | " + error)
        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
    })}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
})

router.get('/lista', function(req, res, next){
    if(global.rol != "guest"){
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var queryString = "select distinct ref_id, ref_libro_de, ref_libro_es, clave from referencia order by ref_libro_de;";
    res.locals.connection.query(queryString)
    .then(function (results) {
        // console.log(datetime + "== referencias/lista/ | Éxito")
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        //If there is no error, all is good and response is 200OK.
  	}).catch(function(error){
        console.log(datetime + "== referencias/lista/ | " + error)
        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
      });}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
})

router.get('/:id', function(req, res, next){
    if(global.rol != "guest"){
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    filter = [req.params.id]
    var queryString = "select distinct * from referencia where ref_id = $1";
    res.locals.connection.query(queryString, filter)
    .then(function (results) {
    //   console.log(datetime + "== referencias/:id/ | Éxito")
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        //If there is no error, all is good and response is 200OK.
  	}).catch(function(error){
        // console.log(datetime + "== referencias/:id/ | " + error)
        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
      });}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
})

router.get('/obtieneReferencias/:id', function(req, res, next) {
    // console.log("ENTRA")
  if(global.rol != "guest"){
  var currentdate = new Date();
  var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var filter = [req.params.id]
    var queryString = "\
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
      WHEN clave = 'PV' THEN 5 \
      WHEN clave = 'CM' THEN 6 \
     END, refid;";
    //  console.log(queryString)
	res.locals.connection.query(queryString, filter)
    .then(function(results){
        // console.log("results  ",results)
        // console.log(datetime + "== referencias/obtieneReferencias/:id/ | Referencia obtenida con éxito")
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }).catch(function(error){
        // console.log(datetime + "== referencias/obtieneReferencias/:id/ | " + error)
        res.send(JSON.stringify({"status": 500, "error": null, "response": null}));
    })}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
});

router.get('/obtieneReferenciasByRef/:refid', function(req, res, next) {
    if(global.rol != "guest"){
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
      + "/" + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var filter = [req.params.refid]
    var queryString = "\
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
	res.locals.connection.query(queryString, filter)
    .then(function(results){
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }).catch(function(error){
        res.send(JSON.stringify({"status": 500, "error": null, "response": null}));
    })}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
});

router.get('/obtieneReferenciasIdRefId/:id/:refid', function(req, res, next) {
    if(global.rol != "guest"){
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
      + "/" + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var filter = [req.params.refid,req.params.id]
    var queryString = "\
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
	res.locals.connection.query(queryString, filter)
    .then(function(results){
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }).catch(function(error){
        res.send(JSON.stringify({"status": 500, "error": null, "response": null}));
    })}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
});

router.get('/obtieneReferenciasByTerm/:id', function(req, res, next) {
    if(global.rol != "guest"){
        var currentdate = new Date();
        var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
        + "/" + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        var filter = [req.params.id]
        var queryString = "\
        SELECT * FROM\
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
        termino_referencia.tr_termid = $1) Sub order by expresion_original, orden, \
        CASE WHEN clave = 'IP' THEN 1 \
        WHEN clave = 'PW' THEN 2 \
        WHEN clave = 'I1' THEN 3 \
        WHEN clave = 'I2' THEN 4 \
        WHEN clave = 'PV' THEN 5 \
        WHEN clave = 'CM' THEN 6 \
        END, refid;";   
        res.locals.connection.query(queryString, filter)
        .then(function(results){
            // console.log(datetime + "== referencias/obtieneReferenciasByRef/:refid/ | Referencia obtenida con éxito")
            console.log("LEN", results.length)
            if(results.length == 0){
                console.log("2ND QUERY", filter)
                var query = 'SELECT \
                t_id as id,\
                t_term_de as expresion_original,\
                t_term_es as expresion_traduccion,\
                t_em_de as epretty,\
                t_em_es as tpretty \
                FROM termino WHERE t_id = $1;'
                
                res.locals.connection.query(query, filter)
                .then(function(results){
                    console.log("RES", results)
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));       
                })
            }
            else res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        }).catch(function(error){
            // console.log(datetime + "== referencias/obtieneReferenciasByRef/:refid/ | " + error)
            res.send(JSON.stringify({"status": 500, "error": null, "response": null}));
        })
    }else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
})

router.post('/new/nuevoPasaje/', function(req, res) {
    // console.log("Nuevo")
    if(global.rol == "admin"){
        var ref_id = Buffer.from(req.body.ref_id, 'base64').toString('ascii')
        var pas_de = Buffer.from(req.body.pasaje_de, 'base64').toString('ascii')
        var pas_es = Buffer.from(req.body.pasaje_es, 'base64').toString('ascii');
        var ref_de = Buffer.from(req.body.ref_de, 'base64').toString('ascii');
        var ref_es = Buffer.from(req.body.ref_es, 'base64').toString('ascii');
        res.locals.connection.query("select * from referencia where ref_id=$1;", [ref_id])
        .then(function(result){
            // console.log(result)
            if(result.length <= 0){
                var filter = [req.body.clave, pas_de, pas_es, ref_de, ref_es, ref_id]
                // console.log(filter)
                var queryString = "\
                INSERT INTO referencia (clave, ref_def_de, ref_def_es, ref_libro_es, ref_libro_de, ref_id) VALUES ($1, $2, $3, $4, $5, $6);"
                res.locals.connection.query(queryString, filter)
                .then(function(results){
                    // console.log(results)
                    res.send(JSON.stringify({"status": 200, "error": null, "response": "Hey"}));
                }).catch(function(error){
                    res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
                })
            }else{
                res.send(JSON.stringify({"status": 502, "error": "Ya existe el id que quiere guardar.", "response": null}));
            }
        }).catch(function(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
        })
    }else{
        res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}))
    }
})

router.post('/editarPasaje/:refid', function(req, res, next){
    if(global.rol == "admin"){
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    console.log(req.body.pasaje_de)
    var pas_de = Buffer.from(req.body.pasaje_de, 'base64').toString('ascii')
    var pas_es = Buffer.from(req.body.pasaje_es, 'base64').toString('ascii');
    var ref_de = Buffer.from(req.body.ref_de, 'base64').toString('ascii');
    var ref_es = Buffer.from(req.body.ref_es, 'base64').toString('ascii');
	var filter = [pas_de, pas_es, ref_es, ref_de, req.params.refid, req.body.clave]
    var queryString = "\
	UPDATE referencia SET clave = $6, ref_def_de = $1, ref_def_es = $2, ref_libro_es = $3, ref_libro_de = $4 WHERE ref_id = $5;";
	res.locals.connection.query(queryString, filter)
	.then(function(results){
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	}).catch(function(error){
		res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
	})}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
});

router.get('/buscarPasaje/:refid', function(req, res, next){
    if(global.rol != "guest"){
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
	var filter = [req.params.refid]
	var queryString = "\
	SELECT * FROM termino_referencia WHERE tr_refid = $1;";
	// console.log(queryString)
	res.locals.connection.query(queryString, filter)
	.then(function(results){
		// console.log(datetime + "== referencias/buscarPasaje/:refid/ | Pasaje encontrado con éxito")
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	}).catch(function(error){
		// console.log(datetime + "== referencias/buscarPasaje/:refid/ | " + error)
		res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
	})}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
});

router.delete('/eliminarPasaje/:refid', function(req, res, next){
    if(global.rol == "admin"){
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
	var filter = [req.params.refid]
	var queryString = "\
	DELETE FROM referencia WHERE ref_id = $1;";
	// console.log(queryString)
	res.locals.connection.query(queryString, filter)
	.then(function(results){
		// console.log(datetime + "== referencias/eliminarPasaje/"+ req.params.refid +" | Pasaje eliminado con éxito")
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	}).catch(function(error){
		// console.log(datetime + "== referencias/eliminarPasaje/"+ req.params.refid +" | " + error)
		res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
	})}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
});

router.delete('/quitarPasaje/:refid/:termid', function(req, res, next){
    if(global.rol == "admin"){
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
	var filter = [req.params.refid, req.params.termid]
	var queryString = "\
	DELETE FROM termino_referencia WHERE tr_refid = $1 AND tr_termid = $2;";
	// console.log(queryString)
	res.locals.connection.query(queryString, filter)
	.then(function(results){
		// console.log(datetime + "== referencias/quitarPasaje/:refid/ | Pasaje removido con éxito")
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	}).catch(function(error){
		// console.log(datetime + "== referencias/quitarPasaje/:refid/ | " + error)
		res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
	})}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
});

const fixReferencias = (referencias) => {
    var expresionesUnicas=[]
    var coincidencia = null
    for (var i in referencias){
        var bandera = false
        var actual = referencias[i]
        for(var j in expresionesUnicas){
            if(expresionesUnicas[j].term_id == actual.term_id){
                coincidencia = j
                bandera = true
            }
        }
        if(!bandera){
            var nuevaExpresion = {
                clave : actual.clave,
                expresion : actual.expresion,
                id : actual.id,
                index_de: actual.index_de,
                index_es: actual.index_es,
                pretty_e: actual.pretty_e,
                pretty_t: actual.pretty_t,
                traduccion: actual.traduccion,
                referencias : [
                    {
                        ref_def_de: actual.ref_def_de,
                        ref_def_es: actual.ref_def_es,
                        refid: actual.refid,
                        referencia_original: actual.referencia_original,
                        referencia_traduccion: actual.referencia_traduccion
                    }
                ],
                term_de: actual.term_de,
                term_es: actual.term_es,
                term_id: actual.term_id
            }
            expresionesUnicas.push(nuevaExpresion)
        }else if(coincidencia != null){
            expresionesUnicas[coincidencia].referencias.push({
                ref_def_de: actual.ref_def_de,
                ref_def_es: actual.ref_def_es,
                refid: actual.refid,
                referencia_original: actual.referencia_original,
                referencia_traduccion: actual.referencia_traduccion
            })
            coincidencia = null
        }
    }
    return expresionesUnicas 
}

router.post('/busquedaExpresion', function(req, res, next){
    if(global.rol != "guest"){
        var currentdate = new Date();
        var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
        + "/" + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        var filter = ["%"+req.body.parametro+"%"]
        var condicion = req.body.case == true ? "where termino.t_term_de like $1 or termino.t_term_es like $1" : "where termino.t_term_de ilike $1 or termino.t_term_es ilike $1"
        var queryString="\
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
        inner join referencia on referencia.ref_id = termino_referencia.tr_refid " + condicion + " order by termino.t_term_de"
    res.locals.connection.query(queryString, filter)
    .then(function (results) {
        res.send(JSON.stringify({"status": 200, "error": null, "response": fixReferencias(results)}));
        //If there is no error, all is good and response is 200OK.
  	}).catch(function(error){
        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
      });}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
})

router.post('/busquedaExpresionPorLetraAdmin/:letra', function(req, res, next){
    if(global.rol != "guest"){
        var currentdate = new Date();
        var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
        + "/" + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        var filter = ["%"+req.body.parametro+"%"]
        var condicion = req.body.case ? "where termino.t_term_de ilike $1" : "where termino.t_term_de like $1"
        condicion+= "and termino.t_index_de like '"+req.params.letra+"%'"
        var queryString="\
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
        inner join referencia on referencia.ref_id = termino_referencia.tr_refid " + condicion + " order by termino.t_term_de"
    res.locals.connection.query(queryString, filter)
    .then(function (results) {
        res.send(JSON.stringify({"status": 200, "error": null, "response": fixReferencias(results)}));
        //If there is no error, all is good and response is 200OK.
  	}).catch(function(error){
        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
      });}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
})

router.post('/busquedaExpresionPorLetra/:letra/:lenguaje', function(req, res, next){
    //console.log("req", req.params)
    console.log("global.rol", global.rol)
    if(global.rol != "guest"){
        var currentdate = new Date();
        var datetime = currentdate.getDay() + "/"+(currentdate.getMonth() + 1)
        + "/" + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        var filter = ["%"+req.body.parametro+"%"]
        //var letra = req.body.parametro.slice(0,1)
        //console.log("letra",req.params.letra)
        //console.log("case al entrar al servicio", req.body.case)
        if(req.params.lenguaje == "es"){
            if(req.body.case){
                var condicion = "where termino.t_term_es like $1 and termino.t_index_es like '"+req.params.letra+"%'"
            }else{
                var condicion = "where termino.t_term_es ilike $1 and termino.t_index_de like '"+req.params.letra+"%'"
            }
            var ordenamiento = "order by termino.t_term_es"
            var terminos = "termino.t_term_es as expresion, termino.t_term_de as traduccion,"
            var prettys = "termino.t_em_de as pretty_t, termino.t_em_es as pretty_e,"
        }else{   
            if(req.body.case){
                var condicion = "where termino.t_term_de like $1 and termino.t_index_de like '"+req.params.letra+"%'"
            }else{
                var condicion = "where termino.t_term_de ilike $1 and termino.t_index_de ilike '"+req.params.letra+"%'"
            }
            var ordenamiento = "order by termino.t_term_de"
            var terminos = "termino.t_term_de as expresion, termino.t_term_es as traduccion,"
            var prettys = "termino.t_em_de as pretty_e, termino.t_em_es as pretty_t,"
        }
        //console.log("ordenamiento", terminos)
        var queryString="\
        select\
        termino.t_id as id," + terminos +
        "termino.t_index_de as index_de,\
        termino.t_index_es as index_es," + prettys +
        "termino_referencia.tr_termid as term_id,\
        termino_referencia.tr_refid as term_refid,\
        referencia.clave as clave, \
        referencia.ref_id as refid,\
        referencia.ref_libro_de as referencia_original,\
        referencia.ref_libro_es as referencia_traduccion,\
        referencia.ref_def_de as ref_def_de,\
        referencia.ref_def_es as ref_def_es\
        from termino\
        inner join termino_referencia on cast (termino_referencia.tr_termid as int) = cast(termino.t_id as int)\
        inner join referencia on referencia.ref_id = termino_referencia.tr_refid " + condicion + " " + ordenamiento
        //console.log("queryString", queryString)
        res.locals.connection.query(queryString, filter)
    .then(function(results) {
        //console.log("resultados!!!", results)
        res.send(JSON.stringify({"status": 200, "error": null, "response": fixReferencias(results)}));
        //If there is no error, all is good and response is 200OK.
  	}).catch(function(error){
        console.log("error", error)
        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
    });}else{res.send(JSON.stringify({"status": 401, "error": "Está prohibido para este usuario.", "response": null}));}
})

const fixPasajes = (res, pasaje, tid) =>{
    if(pasaje.indexOf("onclick")>-1){
        var posicionInicial = pasaje.indexOf("onclick")-12
        var posicion = posicionInicial + 1
        var posicionFinal = 0
        // console.log(pasajeACortar[posicionInicial])
        while (posicion<pasaje.length){
            if(pasaje[posicion]==">"){
                posicionFinal = posicion
                posicion = pasaje.length
                // console.log("posicion Inicial   ", posicionInicial)
                // console.log("posicion Final  ", posicionFinal)
                var pedazo = pasaje.slice(posicionInicial, posicionFinal+1)
                // console.log("========================================")
                // console.log("pedazo  ", pedazo)
                if(pedazo.indexOf("onclick")>-1){
                    var posicionClick = pedazo.indexOf("onclick")
                    var pedazoClick = pedazo.slice(posicionClick, posicionFinal+1)
                    var refid = pedazoClick.split("'")[1]
                    var reemplazo = pasaje.split(pedazo)[0] + "<a href='/#/diccionario/husserl/pasaje/" + tid + "/" + refid + "'>" + pasaje.split(pedazo)[1]
                    // console.log(reemplazo)
                    return fixPasajes(res, reemplazo)
                }
            }
            posicion++
        }
    }else{
        return pasaje
    }
}

var recorre = (lista, index, res, next) => {
    var pasajeResuelto = lista[index]
    if(index >= lista.length) return next()
    pasajeResuelto.ref_def_de = fixPasajes(res, lista[index].ref_def_de, lista[index].tr_termid)
    pasajeResuelto.ref_def_es = fixPasajes(res, lista[index].ref_def_es, lista[index].tr_termid)
    // console.log(pasajeResuelto)
    res.locals.connection.query("UPDATE referencia SET ref_def_de = $1, ref_def_es = $2 where ref_id = $3;",
    [pasajeResuelto.ref_def_de, pasajeResuelto.ref_def_es, lista[index].ref_id]).then(r => {
        console.log(r)
        return recorre(lista, index+1, res, next)
    })
}

router.post('/reemplazo2',function(req,res){
    // console.log('pitos');
    res.locals.connection.query("\
    select referencia.ref_id,\
    referencia.ref_def_de,\
    referencia.ref_def_es,\
    termino_referencia.tr_termid \
    from referencia \
    inner join termino_referencia on (termino_referencia.tr_refid) = referencia.ref_id\
    where referencia.ref_def_de like '%onclick%' or referencia.ref_def_es like '%onclick%'",
    []).
    then((results) => {
        console.log(results)
        // res.send(results)
        recorre(results, 0, res, ()=>{
            console.log('DONE')
            res.send('pasajes cambiados.')
        })
    })
})

module.exports = router;
