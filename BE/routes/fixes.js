const express = require("express");
const router = express.Router();
const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "queryprincipal");

const getintoDB = (thisobj, stop) => {
  const filter = [obj[i].ref_id, obj[i].ref_def_de, obj[i].ref_def_es];
  const postString =
    "\
    insert into pasajes (refid, original, traduccion)\
    values ($1, $2, $3);";
  res.locals.connection
    .query(postString, filter)
    .then(function (results) {
      if (thisobj == stop) {
        return "se ha terminado!";
      }
      return getintoDB(thisobj + 1, stop);
    })
    .catch(function (error) {
      return error;
    });
};

var obj = [];

router.get("/restoreDatabase", function (req, res, next) {
  if (global.rol == "admin") {
    fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
      if (!err) {
        console.log("received data: " + data);
        var queryString = data;
        res.locals.connection
          .query(queryString)
          .then(function (results) {
            res.send(
              JSON.stringify({ status: 200, error: null, response: "All good" })
            );
          })
          .catch(function (error) {
            res.send(
              JSON.stringify({ status: 500, error: error, response: null })
            );
          });
      } else {
        console.log(err);
      }
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

router.get("/fixDatabase", function (req, res, next) {
  if (global.rol == "admin") {
    var queryString =
      "\
    select\
	* from referencia";
    res.locals.connection
      .query(queryString)
      .then(function (results) {
        obj = results;
        console.log(results.length);
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            response: getintoDB(0, obj.length),
          })
        );
        //If there is no error, all is good and response is 200OK.
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

// -------------------------------------------------------------------------------------------

var serverUrl = "127.0.0.1";
var port = "3200";

var recursive_replace_text = (text, replace, lang, refid, res, final) => {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log(replace[0] + " : " + replace[1] + " : " + lang + " : " + refid);
  if (text.indexOf(replace[0]) > -1) {
    const posX = text.indexOf(replace[0]);
    let posY = 0;
    let c = posX;
    while (c < text.length) {
      if (text[c] == replace[1]) {
        console.log("HERE");
        posY = c;
        c = text.length;
      }
      c++;
    }
    let partOne = text.slice(posX, posY);
    let pieces = partOne.split("'");
    const id = pieces[1];
    const partTwo = "<a href='/#/diccionario/husserl/pasaje/QV/" + id + "'";
    const newText = text.replace(partOne, partTwo);
    return recursive_replace_text(newText, replace, lang, refid, res, final);
  } else {
    console.log("we change this", text, "in this ", refid);
    res.locals.connection
      .query("UPDATE referencia SET " + lang + " = $1 where ref_id = $2;", [
        text,
        refid,
      ])
      .then(function (results) {
        console.log(results);

        return final();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

var recursive_replace_text_b = (text, replace, lang, refid, res, final) => {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log(replace[0] + " : " + replace[1] + " : " + lang + " : " + refid);
  if (text.indexOf(replace[0]) > -1) {
    const posX = text.indexOf(replace[0]);
    let posY = 0;
    let c = posX;
    console.log("POS X:", text[posX]);
    while (c < text.length) {
      if (text[c] == replace[1]) {
        console.log("HERE");
        posY = c;
        c = text.length;
      }
      c++;
    }
    console.log("FOUND", posX, posY);
    let partOne = text.slice(posX, posY);
    console.log(partOne);
    console.log(
      "-------------------------------------------------------------------------------------------",
      partOne,
      "-----------------------------------------------------------------------------------"
    );
    let pieces = partOne.split("&exec=");
    console.log(pieces);
    const id = pieces[0].split("&")[0];
    console.log("ID", id);
    const partTwo = "<a href='/#/diccionario/husserl/pasaje/QV/" + id + "'";
    console.log(
      "PART ONE:",
      partOne,
      "---------------------------------------------------------------------------------------",
      partTwo
    );
    const newText = text.replace(partOne, partTwo);
    console.log(newText);
    return recursive_replace_text_b(newText, replace, lang, refid, res, final);
  } else {
    console.log("Done replacing");
    console.log(
      "----------------------------------------------------------------------------------------------------"
    );
    return final();
  }
};

const recorrido = (lista, index, res, next) => {
  if (index == lista.length) return next(lista);
  else {
    const reemplazo_de = lista[index].ref_def_de.replace(
      /(\/pasaje\/)\w+/g,
      "/pasaje/QV"
    );
    const reemplazo_es = lista[index].ref_def_es.replace(
      /(\/pasaje\/)\w+/g,
      "/pasaje/QV"
    );
    console.log(lista[index]);
    res.locals.connection
      .query(
        "UPDATE referencia SET ref_def_es = $1, ref_def_de = $2 WHERE ref_id = $3;",
        [reemplazo_es, reemplazo_de, lista[index].ref_id]
      )
      .then(function (results) {
        console.log(results);
        return recorrido(lista, index + 1, res, next);
      })
      .catch(function (error) {
        console.log(error);
        return recorrido(lista, index + 1, res, next);
      });
  }
};

const recorrido_b = (lista, index, res, next) => {
  if (index == lista.length) return next(lista);
  else {
    recursive_replace_text_b(
      lista[index].ref_def_de,
      ["exec=", ">"],
      "ref_def_de",
      lista[index].ref_id,
      res,
      () => {
        recursive_replace_text_b(
          lista[index].ref_def_es,
          ["exec=", ">"],
          "ref_def_es",
          lista[index].ref_id,
          res,
          () => {
            recursive_replace_text_b(
              lista[index].ref_def_de,
              ["EXEC=", ">"],
              "ref_def_de",
              lista[index].ref_id,
              res,
              () => {
                recursive_replace_text_b(
                  lista[index].ref_def_es,
                  ["EXEC=", ">"],
                  "ref_def_es",
                  lista[index].ref_id,
                  res,
                  () => {
                    return recorrido_b(lista, index + 1, res, next);
                  }
                );
              }
            );
          }
        );
      }
    );
  }
};

router.post("/fixthisshit", function (req, res) {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log(
    "---------------------------------------------START--------------------------------------------------"
  );
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  res.locals.connection
    .query("SELECT ref_id, ref_def_de, ref_def_es from referencia;", [])
    .then(function (results) {
      var finalFlag = false;
      console.log(results.length);
      recorrido(results, 0, res, (listaFinal) => {
        res.status(200).json(listaFinal);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

var recursive_call = (res, list, n) => {
  console.log(n + " - " + list.length);
  if (n == list.length) return "Finished!!";
  else {
    var newR = list[n].tr_refid.toLowerCase();
    console.log(newR);
    var filter = [newR, list[n].tr_refid, list[n].tr_termid];
    res.locals.connection
      .query(
        "UPDATE termino_referencia SET tr_refid = $1 WHERE tr_refid = $2 AND tr_termid = $3;",
        filter
      )
      .then(function (results) {
        return recursive_call(res, list, n + 1);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

router.get("/fixthis1", function (req, res) {
  if (global.rol == "admin") {
    res.locals.connection
      .query("SELECT * FROM termino_referencia where tr_order = 1")
      .then(function (data) {
        console.log(data);
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            response: recursive_call(res, data, 0),
          })
        );
      })
      .catch(function (error) {
        console.log(error);
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

router.get("/fixthis2", function (req, res) {
  var wordToChange = req.query.word;
  console.log(wordToChange.toLowerCase());
  console.log(req.query.id);
  res.locals.connection
    .query(
      "UPDATE termino_referencia SET tr_refid = $1 WHERE tr_termid = $2;",
      [wordToChange.toLowerCase(), req.query.id + ""]
    )
    .then(function (results) {
      console.log(results);
      res.send(
        JSON.stringify({ status: 200, error: null, response: results.rows })
      );
    })
    .catch(function (error) {
      console.log(error);
    });
});

// -------------------------------------------------------------------------------------
// To Fix all the references, we change hrefs for onclicks
// -------------------------------------------------------------------------------------

var recursive_replace = (text, replace, res, lang, refid, final) => {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log(
    replace[0] +
      " : " +
      replace[1] +
      " : " +
      res +
      " : " +
      lang +
      " : " +
      refid +
      " : " +
      final
  );
  if (text.indexOf(replace[0]) > -1 && text.indexOf(replace[1]) > -1) {
    var initPos = text.indexOf(replace[0]);
    var lastPos = text.indexOf(replace[1]) + 5;
    var partOne = text.slice(0, initPos);
    var partTwo = text.slice(lastPos);
    var wholeSentence = text.slice(initPos, lastPos);
    console.log("whole : " + wholeSentence);
    if (wholeSentence.indexOf("www.clafen") > -1) {
      var importantStuff = wholeSentence.split("exec=")[1];
      console.log("important : " + importantStuff);
      var ref_id = importantStuff.split("&")[0];
    } else {
      var importantStuff = wholeSentence.split('HREF=\\"')[1];
      console.log("pt : " + importantStuff);
      var ref_id = importantStuff.split(".")[0];
      // var importantStuff = pt2.split(".")[0]
      // console.log("important : " + importantStuff)
    }

    console.log("refid : " + ref_id);
    var newPart = 'href="#" onclick="toPasajeWId(\'' + ref_id + "')\"";
    var newText = partOne + newPart.toLowerCase() + partTwo;
    return recursive_replace(newText, replace, res, lang, refid, final);
  } else {
    // console.log(text)
    console.log("Done replacing");
    console.log(
      "----------------------------------------------------------------------------------------------------"
    );
    res.locals.connection
      .query("UPDATE referencia SET " + lang + " = $2 where ref_id = $3;", [
        lang,
        text,
        refid,
      ])
      .then(function (results) {
        console.log(results);
        if (final) {
          res.send(
            JSON.stringify({ status: 200, error: null, response: results.rows })
          );
        }
        return true;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

router.get("/fixthis3", function (req, res) {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log(
    "---------------------------------------------START--------------------------------------------------"
  );
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  res.locals.connection
    .query("SELECT ref_id, ref_def_de, ref_def_es from referencia;", [])
    .then(function (results) {
      // console.log(results)
      var finalFlag = false;
      console.log(results.length);
      for (var i in results) {
        console.log(i + " : " + results[i].ref_id);
        console.log(
          "----------------------------------------------------------------------------------------------------"
        );
        if (i == results.length - 1) {
          console.log("happened " + results.length);
          finalFlag = true;
        }
        var re = null;
        re = recursive_replace(
          results[i].ref_def_de,
          ["HREF=", ".htm"],
          res,
          "ref_def_de",
          results[i].ref_id,
          finalFlag
        );
        //re = recursive_replace(results[i].ref_def_es, ["HREF=", ".htm"], res, "ref_def_es", results[i].ref_id, finalFlag)
        console.log("Done " + i);
      }
      // var r = recursive_change(results, 0)
      // res.send(JSON.stringify({"status": 200, "error": null, "response": results.rows}));
    })
    .catch(function (error) {
      console.log(error);
    });
});

var recursiveCharReplace = (
  passage,
  word,
  replacement,
  lang,
  refid,
  final,
  res
) => {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log("Replacing " + word + " by " + replacement + " in " + refid);
  if (passage.indexOf(word) > -1) {
    var newPassage = passage.replace(word, replacement);
    return recursiveCharReplace(
      newPassage,
      word,
      replacement,
      lang,
      refid,
      final,
      res
    );
  } else {
    // console.log(text)
    console.log("Done replacing");
    console.log(
      "----------------------------------------------------------------------------------------------------"
    );
    res.locals.connection
      .query("UPDATE referencia SET " + lang + " = $2 where ref_id = $3;", [
        lang,
        passage,
        refid,
      ])
      .then(function (results) {
        console.log(results);
        if (final) {
          res.send(
            JSON.stringify({ status: 200, error: null, response: results.rows })
          );
        }
        return true;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

router.get("/fixthis4", function (req, res) {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log(
    "---------------------------------------------START--------------------------------------------------"
  );
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  res.locals.connection
    .query("SELECT ref_id, ref_def_de, ref_def_es from referencia;", [])
    .then(function (results) {
      // console.log(results)
      var finalFlag = false;
      console.log(results.length);
      // var listOfChars = [['\\"', '"'], ['\\r', ''], ['\\n', '']]
      var listOfChars = ['\\"', '"'];
      for (var i in results) {
        console.log(i + " : " + results[i].ref_id);
        console.log(
          "----------------------------------------------------------------------------------------------------"
        );
        var re = null;
        if (i == results.length - 1) {
          console.log("happened " + results.length);
          finalFlag = true;
        }
        re = recursiveCharReplace(
          results[i].ref_def_de,
          listOfChars[0],
          listOfChars[1],
          "ref_def_de",
          results[i].ref_id,
          finalFlag,
          res
        );
        //re = recursiveCharReplace(results[i].ref_def_es, listOfChars[0], listOfChars[1], "ref_def_es", results[i].ref_id, finalFlag, res)
        console.log("Done " + i);
      }
      // var r = recursive_change(results, 0)
      // res.send(JSON.stringify({"status": 200, "error": null, "response": results.rows}));
    })
    .catch(function (error) {
      console.log(error);
    });
});

var recursiveAddClave = (result, pos, res) => {
  if (pos == result.length - 1) {
    res.send("DONE!!");
  } else {
    var newClave = result[pos].ref_libro_de.slice(0, 2);
    console.log(newClave);
    res.locals.connection
      .query("UPDATE referencia set clave = $1 where ref_id = $2;", [
        newClave,
        result[pos].ref_id,
      ])
      .then(function () {
        console.log("Done!");
        return recursiveAddClave(result, pos + 1, res);
      })
      .catch(function (error) {
        console.log("Error!");
      });
  }
};

router.get("/fixthis5", function (req, res) {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log(
    "---------------------------------------------START--------------------------------------------------"
  );
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  res.locals.connection
    .query("SELECT ref_id, ref_libro_de from referencia;", [])
    .then(function (results) {
      recursiveAddClave(results, 0, res);
    })
    .catch(function (error) {
      console.log(error);
    });
});

var recursiveAddIndex = (result, pos, res) => {
  if (pos == result.length - 1) {
    res.send("DONE!!");
  } else {
    var esp = result[pos].t_term_es;
    var deu = result[pos].t_term_de;
    var esp_i = "";
    var deu_i = "";
    console.log(esp + " : " + deu);
    console.log(esp[0]);
    if (esp[0] == "'") esp_i = esp[1].toUpperCase();
    else if (esp[0] == ".") esp_i = esp[4].toUpperCase();
    else esp_i = esp[0].toUpperCase();
    if (deu[0] == "'") deu_i = deu[1].toUpperCase();
    else if (deu[0] == ".") deu_i = deu[4].toUpperCase();
    else deu_i = deu[0].toUpperCase();
    console.log(esp_i + " : " + deu_i);
    var esp_p = "<p>" + esp + "</p>";
    var deu_p = "<p>" + deu + "</p>";
    console.log(esp_p + " : " + deu_p);
    console.log(result[pos].t_id);
    console.log(
      deu_i +
        " , " +
        esp_i +
        " , " +
        deu_p +
        " , " +
        esp_p +
        " , " +
        result[pos].t_id
    );
    res.locals.connection
      .query(
        "UPDATE termino set t_index_de = $1, t_index_es = $2, t_em_de = $3, t_em_es = $4 where t_id = $5;",
        [deu_i, esp_i, deu_p, esp_p, result[pos].t_id]
      )
      .then(function () {
        console.log("Done!");
        return recursiveAddIndex(result, pos + 1, res);
      })
      .catch(function (error) {
        console.log("Error!");
      });
  }
};

router.get("/fixthis7", function (req, res) {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log(
    "---------------------------------------------START--------------------------------------------------"
  );
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  res.locals.connection
    .query(
      "ALTER TABLE termino ADD COLUMN t_index_de char(5), ADD COLUMN t_index_es char(5);",
      []
    )
    .then(function (results) {
      console.log("Done!");
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/fixthis6", function (req, res) {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log(
    "---------------------------------------------START--------------------------------------------------"
  );
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  res.locals.connection
    .query("SELECT * from termino ORDER BY t_id;", [])
    .then(function (results) {
      recursiveAddIndex(results, 0, res);
    })
    .catch(function (error) {
      console.log(error);
    });
});

var recursiveTakeAccents = (result, pos, res) => {
  if (pos == result.length - 1) {
    res.send("DONE!!");
  } else {
    var esp = result[pos].t_index_es;
    var deu = result[pos].t_index_de;
    var esp_i = esp;
    var deu_i = deu;
    if (deu.charCodeAt(0) == 196 || deu.charCodeAt(0) == 193) deu_i = "A";
    if (esp.charCodeAt(0) == 196 || esp.charCodeAt(0) == 193) esp_i = "A";
    if (deu.charCodeAt(0) == 203 || deu.charCodeAt(0) == 201) deu_i = "E";
    if (esp.charCodeAt(0) == 203 || esp.charCodeAt(0) == 201) esp_i = "E";
    if (deu.charCodeAt(0) == 207 || deu.charCodeAt(0) == 205) deu_i = "I";
    if (esp.charCodeAt(0) == 207 || esp.charCodeAt(0) == 205) esp_i = "I";
    if (deu.charCodeAt(0) == 214 || deu.charCodeAt(0) == 211) deu_i = "O";
    if (esp.charCodeAt(0) == 214 || esp.charCodeAt(0) == 211) esp_i = "O";
    if (deu.charCodeAt(0) == 220 || deu.charCodeAt(0) == 218) deu_i = "U";
    if (esp.charCodeAt(0) == 220 || esp.charCodeAt(0) == 218) esp_i = "U";
    console.log(deu + " => " + deu_i + " | " + esp + " => " + esp_i);
    res.locals.connection
      .query(
        "UPDATE termino set t_index_de = $1, t_index_es = $2 where t_id = $3;",
        [deu_i, esp_i, result[pos].t_id]
      )
      .then(function () {
        console.log("Done!");
        return recursiveTakeAccents(result, pos + 1, res);
      })
      .catch(function (error) {
        console.log("Error!");
      });
  }
};

router.get("/fixthis8", function (req, res) {
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  console.log(
    "---------------------------------------------START--------------------------------------------------"
  );
  console.log(
    "----------------------------------------------------------------------------------------------------"
  );
  res.locals.connection
    .query("SELECT * from termino ORDER BY t_id;", [])
    .then(function (results) {
      recursiveTakeAccents(results, 0, res);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
