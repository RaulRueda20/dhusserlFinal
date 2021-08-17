import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const tituloDiccionario = (lang) => {
  // const lang = localStore.getItem("lang")
  switch (lang) {
    case "es":
      return "DICCIONARIO HUSSERL";
    case "en":
      return "HUSSERL DICTIONARY";
    case "fr":
      return "DICTIONNAIRE HUSSERL";
    case "al":
      return "HUSSERL WÖRTERBUCH";
    case "ca":
      return "DICCIONARI HUSSERL";
  }
};

const ingresar = (lang) => {
  // const lang = localStore.getItem("lang")
  switch (lang) {
    case "es":
      return "Ingresar";
    case "en":
      return "Submit";
    case "fr":
      return "Entrer";
    case "al":
      return "Eintreten";
    case "ca":
      return "Entrar";
  }
};

const subtituloDiccionario = (lang) => {
  switch (lang) {
    case "es":
      return "Léxico bilingüe (alemán y español) de expresiones definidas a partir de las obras de Edmund Husserl (1859-1938)";
    case "en":
      return "Bilingual (German and Spanish) Lexicon of Expressions Defined on the Basis of the Works by Edmund Husserl (1859-1938)";
    case "fr":
      return "Lexique bilingue (allemand et espagnol) des expressions définies à partir des œuvres d'Edmund Husserl (1859-1938)";
    case "al":
      return "Zweisprachiges (deutsch und spanisch) Lexikon von Ausdrücke definierte auf der Grundlage der Werke von Edmund Husserl (1859-1938)";
    case "ca":
      return "Lèxic bilingüe (alemany i espanyol) d'expressions definides sobre la base de les obres d'Edmund Husserl (1859-1938)";
  }
};

const inicio = (lang) => {
  switch (lang) {
    case "es":
      return "INICIO";
    case "en":
      return "START";
    case "fr":
      return "DÉBUT";
    case "al":
      return "EINTRITT";
    case "ca":
      return "INICI";
  }
};

const email = (lang) => {
  switch (lang) {
    case "es":
      return "Correo Electrónico";
    case "en":
      return "Email Address";
    case "fr":
      return "Adresse électronique";
    case "al":
      return "E-Mail Adresse";
    case "ca":
      return "Correu electrònic";
  }
};

const contra = (lang) => {
  switch (lang) {
    case "es":
      return "Contraseña";
    case "en":
      return "Password";
    case "fr":
      return "Mot de passe";
    case "al":
      return "Passwort";
    case "ca":
      return "Contrasenya";
  }
};

const olvidoDeContra = (lang) => {
  switch (lang) {
    case "es":
      return "¿Olvidó su contraseña? Puede recuperarla";
    case "en":
      return "Forgot your password? You can retrieve it";
    case "fr":
      return "Vous avez oublié votre mot de passe? Vous pouvez le récupérer ";
    case "al":
      return "Haben Sie Ihr Passwort vergessen? Sie können es abrufen";
    case "ca":
      return "Heu oblidat la contrasenya? Pot recuperar-la";
  }
};

const registrarse = (lang) => {
  switch (lang) {
    case "es":
      return "Si no está registrado, puede registrarse";
    case "en":
      return "Not yet registered? You can register";
    case "fr":
      return "Pas encore enregistré? Vous pouvez vous inscrire";
    case "al":
      return "Nicht registriert? Sie können es hier abrufen.";
    case "ca":
      return "Encara no està registrat? Pot registrar-se";
  }
};

const aqui = (lang) => {
  switch (lang) {
    case "es":
      return "aquí.";
    case "en":
      return "here.";
    case "fr":
      return "ici.";
    case "al":
      return "hier.";
    case "ca":
      return "aquí";
  }
};

const Footer1 = (lang) => {
  switch (lang) {
    case "es":
      return "El proyecto del Diccionario Husserl es desarrollado por Antonio Zirión Quijano en el ";
    case "en":
      return "The Husserl Dictionary is a project developed by Antonio Zirión Quijano at the ";
    case "fr":
      return "Le projet du Dictionnaire Husserl est développé par Antonio Zirión Quijano à l'";
    case "al":
      return "Das Husserl Wörterbuch Projekt wird von Antonio Zirión Quijano am ";
    case "ca":
      return "El Diccionari Husserl és un projecte desenvolupat per Antonio Zirión Quijano ";
  }
};

const Footer2 = (lang) => {
  switch (lang) {
    case "es":
      return " de la ";
    case "en":
      return "of ";
    case "fr":
      return "de l'";
    case "al":
      return "der ";
    case "ca":
      return "de ";
  }
};

const FooterAl = (lang) => {
  switch (lang) {
    case "es":
      return "";
    case "en":
      return "";
    case "fr":
      return "";
    case "al":
      return "entwickelt.";
    case "ca":
      return "";
  }
};

const Footer3 = (lang) => {
  switch (lang) {
    case "es":
      return "© Antonio Zirión Quijano, 2018. Derechos reservados conforme a la ley.";
    case "en":
      return "© Antonio Zirión Quijano, 2018. All Rights reserved.";
    case "fr":
      return "© Antonio Zirión Quijano, 2018. Tous les droits sont réservés.";
    case "al":
      return "© Antonio Zirión Quijano, 2018. Alle Rechte vorbehalten";
    case "ca":
      return "© Antonio Zirión Quijano, 2018. Tots els drets reservats.";
  }
};

const registro = (lang) => {
  switch (lang) {
    case "es":
      return "REGISTRO";
    case "en":
      return "REGISTER";
    case "fr":
      return "INSCRIPTION";
    case "al":
      return "REGISTRIERUNG";
    case "ca":
      return "REGISTRAR-SE";
  }
};

const registrado = (lang) => {
  switch (lang) {
    case "es":
      return "¿Ya está registrado?, ingrese ";
    case "en":
      return "Already registered?";
    case "fr":
      return "Déjà enregistré?";
    case "al":
      return "Schon registriert? Anmelden";
    case "ca":
      return "Ja registrat?";
  }
};

const nombre = (lang) => {
  switch (lang) {
    case "es":
      return "Nombre";
    case "en":
      return "Name";
    case "fr":
      return "Prénom";
    case "al":
      return "Vorname";
    case "ca":
      return "Nom";
  }
};

const apellido = (lang) => {
  switch (lang) {
    case "es":
      return "Apellidos";
    case "en":
      return "Last Name";
    case "fr":
      return "Nom de famille";
    case "al":
      return "Nachname(n)";
    case "ca":
      return "Cognom";
  }
};

const escuela = (lang) => {
  switch (lang) {
    case "es":
      return "Institución / Escuela";
    case "en":
      return "Institution or School";
    case "fr":
      return "Institution ou école";
    case "al":
      return "Institution oder Schule";
    case "ca":
      return "Institució o escola";
  }
};

const puesto = (lang) => {
  switch (lang) {
    case "es":
      return "Grado Académico / Puesto";
    case "en":
      return "Academic Degree or Position";
    case "fr":
      return "Diplôme universitaire ou poste";
    case "al":
      return "Akademischer Grad oder Platz";
    case "ca":
      return "Titulació acadèmica o càrrec";
  }
};

const pais = (lang) => {
  switch (lang) {
    case "es":
      return "País";
    case "en":
      return "Country";
    case "fr":
      return "Pays";
    case "al":
      return "Land";
    case "ca":
      return "País";
  }
};

const comprobacionContra = (lang) => {
  switch (lang) {
    case "es":
      return "Comprobación de la contraseña";
    case "en":
      return "Password Confirmation";
    case "fr":
      return "Confirmation mot de passe";
    case "al":
      return "Passwort Bestätigung";
    case "ca":
      return "Comprovació de la contrasenya";
  }
};

const modalRecuperacionContra = (lang) => {
  switch (lang) {
    case "es":
      return "Recuperar Contraseña";
    case "en":
      return "Password retrieval";
    case "fr":
      return "Récupération de mot de passe";
    case "al":
      return "Passwort zurückbekommen";
    case "ca":
      return "Recuperació de la contrasenya";
  }
};

const modalIngresarCorreo = (lang) => {
  switch (lang) {
    case "es":
      return "Para recuperar su contraseña, es necesario que ingrese su correo electrónico:";
    case "en":
      return "To retrieve your password, please write your email adress:";
    case "fr":
      return "Pour récupérer votre mot de passe, entrez votre email:";
    case "al":
      return "Um sein Passwort zurück zu bekommen, bitte seine E-Mail-Adresse anmelden:";
    case "ca":
      return "Per recuperar la vostra contrasenya, escriviu la vostra adreça de correu electrònic:";
  }
};

const exitoBody = (lang) => {
  switch (lang) {
    case "es":
      return "Se ha enviado una liga a su correo electrónico para reestablecer su contraseña.";
    case "en":
      return "A link has been sent to your email to reset your password.";
    case "fr":
      return "Un lien a été envoyé a votre adresse email pour réinitialiser votre mot de passe.";
    case "al":
      return "Es wurde eine E-mail gesendet, um Ihr Passwort zurückzusetzen";
    case "ca":
      return "S'ha enviat una lliga al seu correu electrònic per restablir la seva contrasenya.";
  }
};

const correoInvalido = (lang) => {
  switch (lang) {
    case "es":
      return "Correo electrónico o contraseña invalido";
    case "en":
      return "Invalid email or password";
    case "fr":
      return "Email ou mont de passe invalide";
    case "al":
      return "Ungültige E-Mail-Adresse oder ungültiges Passwort";
    case "ca":
      return "Correu electrònic o contrasenya invàlid";
  }
};

const correoNoEncontrado = (lang) => {
  switch (lang) {
    case "es":
      return "Correo electrónico no encontrado";
    case "en":
      return "Email not found";
    case "fr":
      return "Email non trouvé";
    case "al":
      return "E-Mail nitch gefunden";
    case "ca":
      return "Correu electrònic trobat";
  }
};

const aceptarAlert = (lang) => {
  switch (lang) {
    case "es":
      return "Aceptar";
    case "en":
      return "Accept";
    case "fr":
      return "Acceptez";
    case "al":
      return "Akzeptieren";
    case "ca":
      return "Acceptar";
  }
};

const menuDiccionario = (lang) => {
  switch (lang) {
    case "es":
      return "Diccionario";
    case "en":
      return "Dictionary";
    case "fr":
      return "Dictionnaire";
    case "al":
      return "Wörterbuch";
    case "ca":
      return "Diccionari";
  }
};

const menuAcercaDe = (lang) => {
  switch (lang) {
    case "es":
      return "Acerca del Diccionario";
    case "en":
      return "About the Dictionary";
    case "fr":
      return "A propos du dictionnaire";
    case "al":
      return "Über das Wörterbuch";
    case "ca":
      return "Sobre el Diccionari";
  }
};

const menuGuia = (lang) => {
  switch (lang) {
    case "es":
      return "Guía de uso";
    case "en":
      return "Usage guide";
    case "fr":
      return "Guide d'utilisation";
    case "al":
      return "Gebrauchsanweisung";
    case "ca":
      return "Guia d'ús";
  }
};

const menuSalir = (lang) => {
  switch (lang) {
    case "es":
      return "Salir";
    case "en":
      return "Exit";
    case "fr":
      return "Sortie";
    case "al":
      return "Logout";
    case "ca":
      return "Sortir";
  }
};

const menuDerechoJerarquia = (lang) => {
  switch (lang) {
    case "es":
      return "Jerarquía";
    case "en":
      return "Hierarchy";
    case "fr":
      return "Hiérarchie";
    case "al":
      return "Rangordnung";
    case "ca":
      return "Jerarquia";
  }
};

const menuDerechoJerarquiaDerivadaDe = (lang) => {
  switch (lang) {
    case "es":
      return "Derivada de:";
    case "en":
      return "Derived from:";
    case "fr":
      return "Dérivé de:";
    case "al":
      return "Abgeleitet von:";
    case "ca":
      return "Deriva de:";
  }
};

const menuDerechoJerarquiaExpresion = (lang) => {
  switch (lang) {
    case "es":
      return "Expresión:";
    case "en":
      return "Expression:";
    case "fr":
      return "Expression:";
    case "al":
      return "Ausdruck:";
    case "ca":
      return "Expressió:";
  }
};

const menuDerechoJerarquiaExpresionesDerivadas = (lang) => {
  switch (lang) {
    case "es":
      return "Expresiones derivadas:";
    case "en":
      return "Derived Expressions:";
    case "fr":
      return "Expresions Dérivées:";
    case "al":
      return "Ableitungsausdrücke:";
    case "ca":
      return "Expressions derivades:";
  }
};

const menuDerechoVerTambien = (lang) => {
  switch (lang) {
    case "es":
      return "Ver también";
    case "en":
      return "See also";
    case "fr":
      return "Voir aussi";
    case "al":
      return "Siehe auch";
    case "ca":
      return "Veure també";
  }
};

const menuDerechoReferenciasConsultadas = (lang) => {
  switch (lang) {
    case "es":
      return "Referencias consultadas";
    case "en":
      return "Looked-up References";
    case "fr":
      return "Références consultées";
    case "al":
      return "Nachgeschlagene Hinweise";
    case "ca":
      return "Referències buscada";
  }
};

const busquedaPorLetra = (lang) => {
  switch (lang) {
    case "es":
      return "Busqueda por letra";
    case "en":
      return "Search by letter";
    case "fr":
      return "Recherche par lettre";
    case "al":
      return "Suche nach Buchstabe";
    case "ca":
      return "Cerca per lletra";
  }
};

const toolTipMenuPrincipal = (lang) => {
  switch (lang) {
    case "es":
      return "Menú principal";
    case "en":
      return "Main menu";
    case "fr":
      return "Menu principal";
    case "al":
      return "Hauptmenü";
    case "ca":
      return "Menú principal";
  }
};

const toolTipMenuIdiomas = (lang) => {
  switch (lang) {
    case "es":
      return "Menú idiomas";
    case "en":
      return "Languages menu";
    case "fr":
      return "Menu des langues";
    case "al":
      return "Sprachen-Menü";
    case "ca":
      return "Menú d'Idiomes";
  }
};

const toolTipIdiomaDeLaLista = (lang) => {
  switch (lang) {
    case "es":
      return "Idioma de la lista";
    case "en":
      return "Language of the list";
    case "fr":
      return "Langue de la liste";
    case "al":
      return "Sprache der Liste";
    case "ca":
      return "Idioma de la llista";
  }
};

const cintilla = (lang) => {
  switch (lang) {
    case "es":
      return "¡Advertencia! Los pasajes en español de Ideas I están en proceso de sustitución: la versión de José Gaos (1962) se reemplaza por la versión de Zirión (2013). Ver los detalles en la";
    case "en":
      return "The spanish passages of Ideas I are in a process of substitution: the version of José Gaos (1962) is replaced by the version of Zirión (2013). See the details in the";
    case "fr":
      return "Les passages en espagnol d'Idées I sont en train d'être substitués: la version de José Gaos (1962) est remplacée par la version de Zirión (2013). Voir les détails dans le";
    case "al":
      return "Die spanische Passagenvon Ideen I sind in Ersetzungsprozess: die Übersetzung von José Gaos (1962) wird ersetzt mit der Übersetzung von Zirión (2013). Siehe die Einzelheiten im";
    case "ca":
      return "Els passatges espanyols d'Idees I es troben en un procés de substitució: la versió de José Gaos (1962) és substituïda per la versió de Zirión (2013). Vegeu els detalls al document";
  }
};

const guia = (lang) => {
  switch (lang) {
    case "es":
      return "Guía";
    case "en":
      return "Guide";
    case "fr":
      return "Guide";
    case "al":
      return "Handbuch";
    case "ca":
      return "Guia";
  }
};

const descarga = (lang) => {
  switch (lang) {
    case "es":
      return "Descargar consulta";
    case "en":
      return "Consultation Download";
    case "fr":
      return "Télécharger la Consultation";
    case "al":
      return "Konsultation Herunterladen";
    case "ca":
      return "Descarregar Consulta";
  }
};

const idiomaConsultas = (lang) => {
  switch (lang) {
    case "es":
      return "Idioma del texto";
    case "en":
      return "Language of the text";
    case "fr":
      return "Langue du texte";
    case "al":
      return "Sprache des Textes";
    case "ca":
      return "Llenguatge de el text";
  }
};

const busquedas = (lang) => {
  switch (lang) {
    case "es":
      return "Búsqueda";
    case "en":
      return "Search";
    case "fr":
      return "Recherche";
    case "al":
      return "Suche";
    case "ca":
      return "Cerca";
  }
};

const distincionMayusyMinus = (lang) => {
  switch (lang) {
    case "es":
      return "Activar para distinguir entre mayúsculas y minúsculas";
    case "en":
      return "Activate to be case sensitive";
    case "fr":
      return "Activer pour distinguer les majuscules et les minuscules";
    case "al":
      return "Aktivieren, um zwischen Gross- und Kleinschreibung zu unterscheiden";
    case "ca":
      return "Activar per distingir les majúscules i les minúscules";
  }
};

const BusquedaGeneral = (lang) => {
  switch (lang) {
    case "es":
      return "Busqueda General";
    case "en":
      return "General search";
    case "fr":
      return "Recherche générale";
    case "al":
      return "Allgemeine Suche";
    case "ca":
      return "Cerca general";
  }
};

const tipoDeBusqueda = (lang) => {
  switch (lang) {
    case "es":
      return "Tipo de búsqueda";
    case "en":
      return "Search Type";
    case "fr":
      return "Type de recherche";
    case "al":
      return "Suchtyp";
    case "ca":
      return "Tipus de cerca";
  }
};

const dentroExpresion = (lang) => {
  switch (lang) {
    case "es":
      return "En el vocabulario";
    case "en":
      return "In vocabulary";
    case "fr":
      return "Dans le vocabulaire";
    case "al":
      return "Im Wortschatz";
    case "ca":
      return "En el vocabulari";
  }
};

const dentroReferencia = (lang) => {
  switch (lang) {
    case "es":
      return "En los pasajes";
    case "en":
      return "In the textual passages";
    case "fr":
      return "Dans les passages";
    case "al":
      return "In der Textauszüge";
    case "ca":
      return "En els passatges";
  }
};

const noDerivaDe = (lang) => {
  switch (lang) {
    case "es":
      return "No deriva de ninguna expresión";
    case "en":
      return "It does not derive from any expression";
    case "fr":
      return "Il ne dérive d'aucune expression";
    case "al":
      return "Sie leitet sich nicht aus irgendeinem Ausdruck ab";
    case "ca":
      return "No deriva de cap expressió";
  }
};

const noContieneExpresionesDerivadas = (lang) => {
  switch (lang) {
    case "es":
      return "No contiene ninguna expresión derivada.";
    case "en":
      return "It does not contain any derived expression.";
    case "fr":
      return "Il ne contient aucune expression dérivée.";
    case "al":
      return "Es enthält keinen abgeleiteten Ausdruck.";
    case "ca":
      return "No conté cap expressió derivada.";
  }
};

const bienvenido = (lang) => {
  switch (lang) {
    case "es":
      return "Bienvenido";
    case "en":
      return "Welcome";
    case "fr":
      return "Bienvenue";
    case "al":
      return "Herzlich willkommen";
    case "ca":
      return "Benvingut";
  }
};

const bienvenidaModal = (lang) => {
  switch (lang) {
    case "es":
      return "Si esta es la primera vez que utiliza el diccionario, será conveniente que visite nuestra guía.";
    case "en":
      return "If this is your first time using the dictionary, you should visit our guide.";
    case "fr":
      return "Si vous utilisez le dictionnaire pour la première fois, vous devriez consulter notre guide.";
    case "al":
      return "Wenn Sie das Wörterbuch zum ersten Mal verwenden, sollten Sie unseren Leitfaden besuchen.";
    case "ca":
      return "Si aquesta és la teva primera vegada que utilitza el diccionari, serà convenient que visiti la nostra guia.";
  }
};

const descargarConsulta = (lang) => {
  switch (lang) {
    case "es":
      return "Descargar Consulta";
    case "en":
      return "Consultation Download";
    case "fr":
      return "Télécharger la Consultation";
    case "al":
      return "Konsultation Herunterladen";
    case "ca":
      return "Descarregar Consulta";
  }
};

const seGeneraArchivo = (lang) => {
  switch (lang) {
    case "es":
      return "Se genera un archivo con las siguientes especificaciones";
    case "en":
      return "A file with the following specifications is generated";
    case "fr":
      return "Un fichier avec les spécifications suivantes est généré";
    case "al":
      return "Eine Datei mit den folgenden Spezifikationen wird erzeugt";
    case "ca":
      return "Es genera un arxiu amb les següents especificacions";
  }
};

const conReferencias = (lang) => {
  switch (lang) {
    case "es":
      return "¿Con referencias?";
    case "en":
      return "With references?";
    case "fr":
      return "Avec des références?";
    case "al":
      return "Mit Hinweise?";
    case "ca":
      return "¿Amb referències?";
  }
};

const descargarEn = (lang) => {
  switch (lang) {
    case "es":
      return "Descargar Pasaje En:";
    case "en":
      return "Download Passage In:";
    case "fr":
      return "Télécharger le Passage En:";
    case "al":
      return "Textauszug Herunterladen Auf:";
    case "ca":
      return "Descarregar Passatge En:";
  }
};

const idiomaAl = (lang) => {
  switch (lang) {
    case "es":
      return "Alemán";
    case "en":
      return "German";
    case "fr":
      return "Allemand";
    case "al":
      return "Deutsch";
    case "ca":
      return "Alemany";
  }
};

const idiomaEs = (lang) => {
  switch (lang) {
    case "es":
      return "Español";
    case "en":
      return "Spanish";
    case "fr":
      return "Espagnol";
    case "al":
      return "Spanisch";
    case "ca":
      return "Castellà";
  }
};

const pasajeSeleccionadoOTodos = (lang) => {
  switch (lang) {
    case "es":
      return "Descargar Pasaje Seleccionado o Todos los Pasajes de la Expresión:";
    case "en":
      return "Download Selected Passage or All Passages of the Expression:";
    case "fr":
      return "Téléchargez le Passage Sélectionné ou Tous les Passages de l’Expression:";
    case "al":
      return "Ausgewählte Textauszug oder alle Textauszüge des Ausdrucks Herunterladen:";
    case "ca":
      return "Descarregar el Passatge Seleccionat o Tots els Passatges de l’Expressió:";
  }
};

const pasajeSeleccionado = (lang) => {
  switch (lang) {
    case "es":
      return "Pasaje seleccionado";
    case "en":
      return "Selected Passage";
    case "fr":
      return "Passage sélectionné";
    case "al":
      return "Ausgewählte Textauszug";
    case "ca":
      return "Passatge Seleccionat";
  }
};

const todosLosPasajes = (lang) => {
  switch (lang) {
    case "es":
      return "Todos los pasajes";
    case "en":
      return "All the Passages";
    case "fr":
      return "Tous les passages";
    case "al":
      return "Alle Textauszügen";
    case "ca":
      return "Tots els Passatges";
  }
};

const tipoDeArchivos = (lang) => {
  switch (lang) {
    case "es":
      return "Tipo de archivo";
    case "en":
      return "Type of file";
    case "fr":
      return "Type de fichier";
    case "al":
      return "Dateityp";
    case "ca":
      return "Tipus d'arxiu";
  }
};

const texto = (lang) => {
  switch (lang) {
    case "es":
      return "Texto";
    case "en":
      return "Text";
    case "fr":
      return "Texte";
    case "al":
      return "Text";
    case "ca":
      return "Text";
  }
};

const tituloNulos = (lang) => {
  switch (lang) {
    case "es":
      return "No contiene pasajes";
    case "en":
      return "It does not contain passages";
    case "fr":
      return "Il ne contient pas de passages";
    case "al":
      return "Es enthält keine Passagen";
    case "ca":
      return "No conté passatges";
  }
};

const mensajeNulos = (lang) => {
  switch (lang) {
    case "es":
      return "No hay ninguna referencia para esta expresión. Ver por favor la lista de expresiones derivadas.";
    case "en":
      return "There is no reference for this expression. Please see the list of derived expressions.";
    case "fr":
      return "Il n'y a aucune référence pour cette expression. Veuillez consulter la liste des expressions dérivées.";
    case "al":
      return "Es gibt keine Referenz für diesen Ausdruck. Bitte beachten Sie die Liste der abgeleiteten Ausdrücke.";
    case "ca":
      return "No hi ha cap referència per a aquesta expressió. Veure per favor la llista d'expressions derivades.";
  }
};

const tituloBusqueda = (lang) => {
  switch (lang) {
    case "es":
      return "La busqueda es muy pequeña.";
    case "en":
      return "The search is very small.";
    case "fr":
      return "La recherche est très petite.";
    case "al":
      return "Die Suche ist sehr klein.";
    case "ca":
      return "La recerca és molt petita.";
  }
};

const mensajeBusqueda = (lang) => {
  switch (lang) {
    case "es":
      return "La búsqueda no obtiene resultados o es demasiado pequeña,favor de hacer otra búsqueda más especifíca.";
    case "en":
      return "The search returns no results or is too small,please do a more specific search.";
    case "fr":
      return "La recherche ne renvoie aucun résultat ou est trop petite,veuillez effectuer une recherche plus spécifique.";
    case "al":
      return "Die Suche liefert keine Ergebnisse oder ist zu klein,bitte führen Sie eine genauere Suche durch.";
    case "ca":
      return "La cerca no obté resultats o és massa petita,favor de fer una cerca més especifíca.";
  }
};

const tituloNumeros = (lang) => {
  switch (lang) {
    case "es":
      return "Números Invalidos.";
    case "en":
      return "Invalid Numbers.";
    case "fr":
      return "Numéros invalides.";
    case "al":
      return "Ungültige Nummern.";
    case "ca":
      return "números Invalidos.";
  }
};

const mensajeNumeros = (lang) => {
  switch (lang) {
    case "es":
      return "El buscador no acepta números, solo letras. Favor de hacer una busqueda más especifíca.";
    case "en":
      return "The search engine does not accept numbers, only letters. Please do a more specific search.";
    case "fr":
      return "Le moteur de recherche n'accepte pas les chiffres, seulement les lettres. Veuillez effectuer une recherche plus spécifique.";
    case "al":
      return "Die Suchmaschine akzeptiert keine Zahlen, nur Buchstaben. Bitte führen Sie eine genauere Suche durch.";
    case "ca":
      return "El cercador no accepta nombres, només lletres. Favor de fer una cerca més especifíca.";
  }
};

const tituloCaracteres = (lang) => {
  switch (lang) {
    case "es":
      return "Carácteres Invalidos.";
    case "en":
      return "Invalid characters.";
    case "fr":
      return "Caractères non valides.";
    case "al":
      return "Ungültige Zeichen";
    case "ca":
      return "Caràcters Invalidos.";
  }
};

const mensajeCaracteres = (lang) => {
  switch (lang) {
    case "es":
      return "No se toman en cuenta los carácteres, solo las letras. Favor de hacer una busqueda más especifíca.";
    case "en":
      return "Characters are not taken into account, only letters. Please do a more specific search.";
    case "fr":
      return "Les caractères ne sont pas pris en compte, seules les lettres. Veuillez effectuer une recherche plus spécifique.";
    case "al":
      return "Zeichen werden nicht berücksichtigt, nur Buchstaben. Bitte führen Sie eine genauere Suche durch.";
    case "ca":
      return "No es tenen en compte els caràcters, només les lletres. Favor de fer una cerca més especifíca.";
  }
};

const tooltipPaginador = (lang) => {
  switch (lang) {
    case "es":
      return "No hay más pasajes.";
    case "en":
      return "There are no more passages.";
    case "fr":
      return "Il n'y a plus de passages.";
    case "al":
      return "Es gibt keine Passagen mehr.";
    case "ca":
      return "No hi ha més passatges.";
  }
};

const resultadoBusqueda = (lang) => {
  switch (lang) {
    case "es":
      return "Resultado de búsqueda";
    case "en":
      return "Search result";
    case "fr":
      return "Résultat de la recherche";
    case "al":
      return "Suchergebnis schliessen";
    case "ca":
      return "Resultat de cerca";
  }
};

const abrirListaTooltip = (lang) => {
  switch (lang) {
    case "es":
      return "Abrir lista de búsqueda";
    case "en":
      return "Open search list";
    case "fr":
      return "Ouvrir la liste de recherche";
    case "al":
      return "Suchliste öffnen";
    case "ca":
      return "Obrir llista de cerca";
  }
};

const cerrarListaTooltip = (lang) => {
  switch (lang) {
    case "es":
      return "Cerrar lista de búsqueda";
    case "en":
      return "Close search list";
    case "fr":
      return "Fermer la liste de recherche";
    case "al":
      return "Suchliste schließen";
    case "ca":
      return "Tancar llista de cerca";
  }
};

const noContienePasajes = (lang) => {
  switch (lang) {
    case "es":
      return "No hay ninguna referencia para esta expresión. Ver por favor la lista de expresiones derivadas.";
    case "en":
      return "There is no reference for this expression. Please see the list of derived expressions.";
    case "fr":
      return "Il n'y a aucune référence pour cette expression. Veuillez consulter la liste des expressions dérivées.";
    case "al":
      return "Es gibt keine Referenz für diesen Ausdruck. Bitte beachten Sie die Liste der abgeleiteten Ausdrücke.";
    case "ca":
      return "No hi ha cap referència per a aquesta expressió. Veure per favor la llista d'expressions derivades.";
  }
};

const numeroDePasajes = (lang) => {
  switch (lang) {
    case "es":
      return "pasajes en total.";
    case "en":
      return "passages in all.";
    case "fr":
      return "passages au total.";
    case "al":
      return "Textauszugen insgesamt.";
    case "ca":
      return "passatges en total.";
  }
};

const pasajeSingular = (lang) => {
  switch (lang) {
    case "es":
      return "pasaje en total.";
    case "en":
      return "passage in all.";
    case "fr":
      return "passage au total.";
    case "al":
      return "Textauszug insgesamt.";
    case "ca":
      return "passatge en total.";
  }
};

const descargarConsultadas = (lang) => {
  switch (lang) {
    case "es":
      return "Incluir las expresiones consultadas";
    case "en":
      return "Include the looked up expressions";
    case "fr":
      return "Inclure les expressions consultées";
    case "al":
      return "Schliessen die konsultierten Ausdrücke ein";
    case "ca":
      return "Incloure les expressions consultades";
  }
};

const marcarConsultadas = (lang) => {
  switch (lang) {
    case "es":
      return "Marcar todas las expresiones consultadas";
    case "en":
      return "Mark all expressions consulted";
    case "fr":
      return "Marquer toutes les expressions consultées";
    case "al":
      return "Alle konsultierten Ausdrücke markieren";
    case "ca":
      return "Marca totes les expressions consultades";
  }
};

const letraNoCoincide = (lang) => {
  switch (lang) {
    case "es":
      return "La primera letra de la búsqueda no coincide con la letra del índice";
    case "en":
      return "The first letter of the search does not match the index letter";
    case "fr":
      return "La première lettre de la recherche ne correspond pas à la lettre de l’index";
    case "al":
      return "Der erste Buchstabe der Suche stimmt nicht mit dem Buschstabe des Indexes überein";
    case "ca":
      return "La primera lletra de la cerca no coincideix amb la lletra de l'índex";
  }
};

const InstitutoF = (lang) => {
  switch (lang) {
    case "es":
      return "Instituto de Investigaciones Filosóficas";
    case "en":
      return "Instituto de Investigaciones Filosóficas";
    case "fr":
      return "Instituto de Investigaciones Filosóficas";
    case "al":
      return "Instituto de Investigaciones Filosóficas";
    case "ca":
      return "l'Institut d'Investigacions Filosòfiques";
  }
};

const UNAM = (lang) => {
  switch (lang) {
    case "es":
      return "Universidad Nacional Autónoma de México.";
    case "en":
      return "Universidad Nacional Autónoma de México.";
    case "fr":
      return "Universidad Nacional Autónoma de México.";
    case "al":
      return "Universidad Nacional Autónoma de México";
    case "ca":
      return "Universitat Nacional Autònoma de Mèxic.";
  }
};

const expresionesAsociadas = (lang) => {
  switch (lang) {
    case "es":
      return "Expresiones Asociadas al Pasaje";
    case "al":
      return "Mit dem Textauszug verbundene Ausdrücke";
    case "en":
      return "Expressions linked to the passage";
    case "fr":
      return "Expressions liées au passage";
    case "ca":
      return "Expressions associades a el passatge";
  }
};

const recuperandoInformacion = (lang) => {
  switch (lang) {
    case "es":
      return "Recuperando información...";
    case "en":
      return "Recovering information...";
    case "fr":
      return "Récupération d'informations ...";
    case "al":
      return "Informationen wiederherstellen...";
    case "ca":
      return "Recuperant informació ...";
  }
};

const terminosYCondiciones = (lang) => {
  switch (lang) {
    case "es":
      return (
        <Fragment>
          Al registrarse en nuestro sitio, usted afirma que está de acuerdo con
          nuestros{" "}
          <Link to="/diccionario/TerminosyCondiciones">
            Términos y Condiciones de uso
          </Link>
          , y que ha leído y conoce nuestro{" "}
          <Link to="/diccionario/aviso_privacidad">Aviso de Privacidad</Link>
        </Fragment>
      );
    case "en":
      return (
        <Fragment>
          By registering on our site, you affirm that you agree to our{" "}
          <Link to="/diccionario/TerminosyCondiciones">
            Terms and Conditions of use
          </Link>
          and that you have read and are aware of our{" "}
          <Link to="/diccionario/aviso_privacidad">Privacy Notice</Link>
        </Fragment>
      );
    case "fr":
      return (
        <Fragment>
          En vous inscrivant sur notre site, vous affirmez que vous acceptez nos{" "}
          <Link to="/diccionario/TerminosyCondiciones">
            Conditions Générales d'Utilisation
          </Link>
          , et que vous avez lu et pris connaissance de notre{" "}
          <Link to="/diccionario/aviso_privacidad">
            Politique de Confidentialité
          </Link>
        </Fragment>
      );
    case "al":
      return (
        <Fragment>
          Indem Sie sich auf unserer Seite registrieren, bestätigen Sie, dass
          Sie mit unseren Nutzungsbedingungen einverstanden sind und dass Sie
          unsere Datenschutzhinweise gelesen haben und sich dieser bewusst sind.
        </Fragment>
      );
    case "ca":
      return (
        <Fragment>
          A l'registrar al nostre lloc, vostè afirma que està d'acord amb els
          nostres{" "}
          <Link to="/diccionario/TerminosyCondiciones">
            Termes i Condicions d'ús
          </Link>
          , i que ha llegit i coneix el nostre
          <Link to="/diccionario/aviso_privacidad">Avís de Privadesa</Link>.
        </Fragment>
      );
  }
};

const leaAviso = (lang) => {
  switch (lang) {
    case "es":
      return (
        <Fragment>
          Lea nuestro{" "}
          <Link to="/diccionario/aviso_privacidad">aviso de privacidad</Link>
        </Fragment>
      );
    case "en":
      return (
        <Fragment>
          Read our{" "}
          <Link to="/diccionario/aviso_privacidad">privacy notice</Link>
        </Fragment>
      );
    case "fr":
      return (
        <Fragment>
          Lisez notre{" "}
          <Link to="/diccionario/aviso_privacidad">
            Avis de confidentialité
          </Link>
        </Fragment>
      );
    case "al":
      return (
        <Fragment>
          Lesen{" "}
          <Link to="/diccionario/aviso_privacidad">
            Sie unsere Datenschutzhinweise
          </Link>
        </Fragment>
      );
    case "ca":
      return (
        <Fragment>
          Llegiu el nostre{" "}
          <Link to="/diccionario/aviso_privacidad">Avís de privadesa</Link>
        </Fragment>
      );
  }
};

const pasajesAsociados = (lang) => {
  switch (lang) {
    case "es":
      return "Pasajes asociados a la expresión";
    case "en":
      return "Passages associated with the expression";
    case "fr":
      return "Passages associés à l'expression";
    case "al":
      return "Mit dem Ausdruck verknüpfte Textauszüge";
    case "ca":
      return "Passatges associats a l'expressió";
  }
};

const búsqueda = (lang) => {
  switch (lang) {
    case "es":
      return "búsqueda";
    case "en":
      return "search";
    case "fr":
      return "Recherche";
    case "al":
      return "Suche";
    case "ca":
      return "recerca";
  }
};

export {
  tituloDiccionario,
  ingresar,
  subtituloDiccionario,
  inicio,
  email,
  contra,
  olvidoDeContra,
  registrarse,
  registrado,
  aqui,
  Footer1,
  Footer2,
  Footer3,
  registro,
  nombre,
  apellido,
  escuela,
  puesto,
  pais,
  comprobacionContra,
  modalRecuperacionContra,
  modalIngresarCorreo,
  exitoBody,
  correoInvalido,
  correoNoEncontrado,
  aceptarAlert,
  menuDiccionario,
  menuAcercaDe,
  menuGuia,
  menuSalir,
  menuDerechoJerarquia,
  menuDerechoJerarquiaDerivadaDe,
  menuDerechoJerarquiaExpresion,
  menuDerechoJerarquiaExpresionesDerivadas,
  menuDerechoReferenciasConsultadas,
  menuDerechoVerTambien,
  busquedaPorLetra,
  toolTipMenuPrincipal,
  toolTipMenuIdiomas,
  toolTipIdiomaDeLaLista,
  cintilla,
  guia,
  descarga,
  idiomaConsultas,
  busquedas,
  distincionMayusyMinus,
  BusquedaGeneral,
  tipoDeBusqueda,
  dentroExpresion,
  dentroReferencia,
  noDerivaDe,
  noContieneExpresionesDerivadas,
  bienvenido,
  bienvenidaModal,
  descargarConsulta,
  seGeneraArchivo,
  conReferencias,
  descargarEn,
  idiomaAl,
  idiomaEs,
  pasajeSeleccionadoOTodos,
  pasajeSeleccionado,
  todosLosPasajes,
  tipoDeArchivos,
  texto,
  tituloNulos,
  mensajeNulos,
  tituloBusqueda,
  mensajeBusqueda,
  tituloNumeros,
  mensajeNumeros,
  tituloCaracteres,
  mensajeCaracteres,
  tooltipPaginador,
  resultadoBusqueda,
  abrirListaTooltip,
  cerrarListaTooltip,
  noContienePasajes,
  numeroDePasajes,
  pasajeSingular,
  descargarConsultadas,
  marcarConsultadas,
  letraNoCoincide,
  FooterAl,
  InstitutoF,
  UNAM,
  expresionesAsociadas,
  recuperandoInformacion,
  terminosYCondiciones,
  leaAviso,
  pasajesAsociados,
  búsqueda,
};
