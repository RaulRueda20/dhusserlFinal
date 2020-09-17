var express = require('express');
//var bcrypt = require('bcrypt');
var router = express.Router();
var fs = require('fs'),
path = require('path'),
filePath = path.join(__dirname, 'queryprincipal');

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
                    var reemplazo = pasaje.split(pedazo)[0] + "<a href='https://diccionariohusserl.org/#/husserl/pasaje/" + tid + "/" + refid + "'>" + pasaje.split(pedazo)[1]
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