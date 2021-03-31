// React
import React, { useContext, useState } from "react";
// Components
import { Typography, Grid, List, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const modalDescargas = {
  privacidad: {
    width: "100%",
    maxHeight: "100vh",
    // top: "5vh",
    position: "absolute",
    paddingTop: "5vh !important",
    overflowY: "auto",
    // left: "calc(25% - 30px)",
    height: "100vh",
  },
  gritItem: {
    paddingLeft: "30px",
    height: "90vh",
    width: "100%",
    margin: "50px 50px 50px 50px",
    display: "block",
  },
  button: {
    left: "1183px",
  },
};

const TerminosyCondiciones = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      alignContent="center"
      className={classes.privacidad}
    >
      <Grid item className={classes.gritItem}>
        <Typography variant="h2" align="center">
          TERMINOS Y CONDICIONES
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="h4" align="justify">
          Este contrato describe los términos y condiciones generales (en
          adelante únicamente "TÉRMINOS Y CONDICIONES") aplicables al uso de los
          contenidos, productos y servicios ofrecidos a tráves del sitio
          diccionariohusserl.org (en adelante, "SITIO WEB") del cual es titular
          Antonio Zirión Quijano (en adelante, "TITULAR"). Cualquier persona que
          desee acceder o hacer uso del sitio o los servicios que en él se
          ofrecen, podrá hacerlo sujetándose a los presentes TÉRMINOS Y
          CONDICIONES, así como a las políticas y principios incorporados al
          presente documento. En todo caso, cualquier persona que no acepte los
          presentes términos y condiciones, deberá abstenerse de utilizar el
          SITIO WEB y/o adquirir los productos o servicios que en su caso sean
          ofrecidos.
        </Typography>
        <br />
        <br />
        <Typography variant="h3" align="left">
          1.- DEL OBJETO
        </Typography>
        <br />
        <Typography variant="h4" align="justify">
          El objeto de los presentes TÉRMINOS Y CONDICIONES es regular el acceso
          y la utilización del SITIO WEB, entendiendo por este cualquier tipo de
          contenido, producto o servicio que se encuentre a disposición del
          público dentro del dominio diccionariohusserl.org. El TITULAR se
          reserva la facultad de modificar en cualquier momento y sin previo
          aviso, la presentación, los contenidos, la funcionalidad, los
          productos, los servicios y la configuración que pudiera estar
          contenida en el SITIO WEB; en este sentido, el USUARIO reconoce y
          acepta que Antonio Zirión Quijano en cualquier momento podrá
          interrumpir, cancelar cualquiera de los elementos que conforman el
          SITIO WEB o el acceso al mismo. El SITIO WEB está dirigido
          principalmente a USUARIOS residentes en la República Mexicana,por lo
          cual, Antonio Zirión Quijano no se asegura que el SITIO WEB cumpla
          total o parcialmente con la lesgislación de otros países, de forma
          que, si el USUARIO reside o tiene su domicilio establecido en otro
          país y decide acceder o utilizar el SITIO WEB lo hará bajo su
          responsabilidad y deberá asegurarse de que tal acceso y navegación
          cumple con la legislación local que se le es aplicable, no asumiendo
          Antonio Zirión Quijano ninguna responsabilidad que se pueda derivar de
          dicho actol. Se hace del conocimiento del USUARIO que el TITULAR podrá
          administrar o gestionar el SITIO WEB de manera directa o a través de
          un tercero, lo cual no modifica en ningún sentido lo establecido en
          los presentes TÉRMINOS Y CONDICIONES.
        </Typography>
        <br />
        <br />
        <Typography variant="h3" align="left">
          2.- DEL USUARIO
        </Typography>
        <br />
        <Typography variant="h4" align="justify">
          El acceso o la utilización del SITIO WEB, así como de los recursos
          habilitados para interactuar entre los USUARIOS, o entre el USUARIO y
          el TITULAR tales como medios para realizar publicaciones o
          comentarios, confiere la condición de USUARIO del SITIO WEB, por lo
          que quedará sujeto a los presentes TÉRMINOS Y CONDICIONES, así como
          las ulteriores modificaciones, sin perjuicio de la aplicación de la
          legislación aplicable, por tanto, se tendrán por aceptados desde el
          momento en que se acceden al SITIO WEB. Dada la relevancia de lo
          anterior, se recomienda al USUARIO revisar las actualizaciones que se
          realicen en los presentes TÉRMINOS Y CONDICIONES. Es responsabilidad
          del USUARIO utilizar el SITIO WEB de acuerdo a la forma en que fue
          diseñado; en este sentido, queda prohibida la utilización de cualquier
          tipo de software que automatice la interacción o descarga de los
          contenidos o servicios proporcionados a través del SITIO WEB. Además,
          el USUARIO se compromete a utilizar la información, producto o
          servicio ofrecido por el propio SITIO WEB, de manera lícita, sin
          contravenir lo dispuesto en los presentes TERMINOS Y CONDICIONES, la
          moral o el orden público, y se abstendrá de realizar cualquier acto
          que pueda suponer una afectación a los derechos de terceros, o
          perjudique de algun modo el funcionamiento del SITIO WEB. Así mismo,
          el usuario se compromete a proporcionar información lícita y veraz en
          los formularios habilitados en el SITIO WEB, en los cuales el usuario
          tenga que proporcionar ciertos datos o información para el acceso a
          algún contenido, producto o servicio ofrecido por el propio SITIO WEB.
          En todo caso, el USUARIO notificará de forma inmediata al TITULAR
          acerca de cualquier hecho que permita suponer el uso indebido de la
          información registrada en dichos formularios, tales como, robo,
          extravío, o acceso no autorizado a cuentas y/o contraseñas, con el fin
          de proceder a su inmediata cancelación. Antonio Zirión Quijano se
          reserva el derecho de retirar todos aquellos comentarios y
          aportaciones que vulneren la ley, el respeto a la dignidad de la
          persona, que sean discriminatorios, atenten contra los derechos de
          terceros o el orden público, o bien, que a su juicio no resulten
          adecuados para su publicación. En cualquier caso, Antonio Zirión
          Quijano no será responsable de las opiniones vertidas por los USUARIOS
          a través de comentarios o publicaciones que estos realicen. El acceso
          al SITIO WEB no supone el establecimiento de ningún tipo de relación
          entre el TITULAR y el USUARIO.
        </Typography>
        <br />
        <br />
        <Typography variant="h3" align="left">
          3.- DEL ACCESO Y LA NAVEGACIÓN EN EL SITIO WEB.
        </Typography>
        <br />
        <Typography variant="h4" align="justify">
          El titular no garantiza de ningún modo la continuidad y disponibilidad
          de los contenidos, productos o servicios ofrecidos a través del SITIO
          WEB, no obstante, el TITULAR llevará a cabo las acciones que de
          acuerdo a sus posibilidades le permitan mantener el buen
          funcionamiento del SITIO WEB, sin que esto suponga alguna
          responsabilidad de parte de Antonio Zirión Quijano. De igual forma
          Antonio Zirión Quijano no será responsable ni garantiza que el
          contenido o software al que puedan acceder a través del SITIO WEB, se
          encuentren libres de errores, softwares maliciosos, o que puedan
          causar algún daño a nivel de software o hardware en el equipo a través
          del cual el USUARIO accede al SITIO WEB. El TITULAR tampoco se hace
          responsable de los daños que pudiesen ocasionarse por el uso
          inadecuado del SITIO WEB. En ningún caso Antonio Zirión Quijano será
          responsable por las perdidas, daño o perjuicios de cualquier tipo que
          surjan por el sólo acceso o utilización del SITIO WEB.
        </Typography>
        <br />
        <br />
        <Typography variant="h3" align="left">
          4.- POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS.
        </Typography>
        <br />
        <Typography variant="h4" align="justify">
          De conformidad con lo establecido en la Ley Federal de Protección de
          Datos Personales en Posesión de Particulares, el TITULAR se compromete
          a adoptar las medidas necesarias que estén a su alcance para asegurar
          la privacidad de los datos personales recabados de forma que garantice
          su seguridad, se evite su alteración, pérdida o tratamiento no
          autorizado. A demás, a efecto de dar cumplimiento a lo establecido en
          la Ley Federal de Protección de Datos Personales en Posesión de
          Particulares, de todo dato personal que sea recabado a través del
          SITIO WEB, será tratado de conformidad con los principios de licitud,
          calidad, finalidad, lealtad, y responsabilidad. Todo tratamiento de
          datos personales quedará sujeto al consentimiento de su titular. En
          todo caso, la utilización de datos financieros o patrimoniales,
          requerirán de autorización expresa de sus titulares, no obstante, esta
          podrá darse a través del propio SITIO WEB utilizando los mecanismos
          habilitados para tal efecto, y en todo caso se dará la mayor
          diligencia y cuidado a este tipo de datos. Lo mismo ocurrirá en el
          caso de datos personales sensibles, considerando por estos aquellos
          que debido a su utilización indebida puedan dar origen a
          discriminación o su divulgación conlleve un riesgo para el titular. En
          todo momento se procurará que lo datos personales contenidos en las
          bases de datos o archivos que en su caso se utilicen, sean
          pertinentes, correctos y actualizados para los fines para los cuales
          fueron recabados. El tratamiento de datos personales se limitará al
          cumplimiento de las finalidades previstas en el Aviso de Privacidad el
          cual se encontrará disponible en la siguiente liga electrónica
          https://diccionariohusserl.org/#/diccionario/aviso_privacidad. El
          SITIO WEB podrá incluir hipervínculos o enlaces que permitan acceder a
          páginas web de terceros distintos de Antonio Zirión Quijano. Los
          titulares de dichos sitios web dispondrán de sus propias políticas de
          privacidad y protección de datos, por lo cual Antonio Zirión Quijano
          no asume ningún tipo de responsabilidad por los datos que sean
          facilitados por el USUARIO a través de cualquier sitio web distinto de
          diccionariohusserl.org. Antonio Zirión Quijano se reserva el derecho
          de modificar su Política de Privacidad, de acuerdo a sus necesidades o
          derivado de algún cambio en la legislación. El acceso o la utilización
          del SITIO WEB después de dichos cambios, implicará la aceptación de
          estos. Por otra parte, el SITIO WEB puede implicar la utilización de
          cookies, las cuales, son pequeñas cantidades de información que se
          almacenan en el navegador utilizado por el USUARIO. Las cookies
          facilitan la navegación, la hacen más amigable, y no dañan el
          dispositivo de navegación, para ello, pueden recabar información para
          ingresar al SITIO WEB, almacenar las preferencias del USUARIO, así
          como la interacción que este tenga con el SITIO WEB, como por ejemplo:
          la fecha y hora en la que se accede al SITIO WEB, el tiempo que se ha
          hecho uso de este, los sitios visitados antes y después del mismo, el
          número de páginas web visitadas, la dirección IP de la cual accede el
          usuario, la frecuencias de visitas etc. Este tipo de información será
          utilizada para mejorarl el SITIO WEB, detectar errores, y posibles
          necesidades que el USUARIO pueda tener, lo anterior a efecto de
          ofrecer a los USUARIOS servicios y contenidos de mejor calidad. En
          todo caso, la información que se recopile será anónima y no se
          identificará a los usuarios individuales. En caso de que el USUARIO no
          desee que se recopile este tipo de información deberá deshabilitar,
          rechazar, restringir y/o eliminar el uso de cookies en su navegador de
          internet. Los procedimientos para realizar estas acciones puede
          diferir de un navegador a otro; en consecuencia, se sugiere revisar
          las instrucciones facilitadas por el desarrollador del navegador. En
          el supuesto de que rechace el uso de cookies (total o parcialmente) el
          USUARIO podrá continuar haciendo uso del SITIO WEB, aunque podrían
          quedar deshabilitadas algunas funciones del mismo. Es posible que en
          el futuro estas politicas respecto a las cookies cambien o se
          actualicen, por ello es recomendable revisar las actualizaciones que
          se realicen a los presentes TERMINOS Y CONDICIONES, con objetivo de
          estar adecuadamente informado sobre cómo y para qué utilizamos las
          cookies que se generan al ingresar o hacer uso del SITIO WEB.
        </Typography>
        <br />
        <br />
        <Typography variant="h3" align="left">
          5.- POLÍTICA DE ENLACES.
        </Typography>
        <br />
        <Typography variant="h4" align="justify">
          El SITIO WEB puede contener enlaces, contenidos, servicios o
          funciones, de otro sitios web pertenecientes y/o gestionados por
          terceros, como por ejemplo imagenmes, videos, comentarios, motores de
          búsqueda, etc. La utilización de estos enlaces, contenidos, servicios
          o funciones, tiene por objeto mejorar la experiencia del USUARIO al
          hacer uso del SITIO WEB, sin que pueda considerarse una sugerencia,
          recomendación o invitación para hacer uso de sitios externos. Antonio
          Zirión Quijano en ningún caso revisará o controlará el contenido de
          los sitios externos, de igual forma, no hace propios los productos,
          servicios, contenidos, y cualquier otro material existente en los
          referidos sitios enlazados; por lo cual, tampoco se garantizará la
          disponibilidad, exactitud, veracidad, validez o legalidad de los
          sitios externos a los que se pueda tener acceso a través del SITIO
          WEB. Así mismo, el TITULAR no asume ninguna responsabilidad por los
          daños y perjuicios que pudieran producirse por el acceso o uso, de los
          contenidos, productos o servicios disponibles en los sitios web no
          gestionados por Antonio Zirión Quijano a los que se pueda acceder
          mediante el SITIO WEB.
        </Typography>
        <br />
        <br />
        <Typography variant="h3" align="left">
          6.- POLÍTICA EN MATERIA DE PROPIEDAD INTELECTUAL E INDUSTRIAL.
        </Typography>
        <br />
        <Typography variant="h4" align="justify">
          Antonio Zirión Quijano por sí o como parte cesionaria, es titular de
          todos los derechos de propiedad intelectual e industrial del SITIO
          WEB, entendiendo por este el código fuente que hace posible su
          funcionamiento así como las imagenes, archivos de audio o video,
          logotipos, marcas, combinaciones de colores, estructuras, diseños y
          demás elementos que lo distinguen. Serán, por consiguiente, protegidas
          por la legislacion Mexicana de propiedad intelectual e industrial, así
          como los tratados internacionales aplicables. Por consiguiente, queda
          expresamente prohibida la reproducción, distribución o difusión de los
          contenidos del SITIO WEB, con fines comerciales, en cualquier soporte
          y por cualquier medio, sin la autorización de Antonio Zirión Quijano.
          El USUARIO se compromete a respetar los derechos de propiedad
          intelectual e industrial del TITULAR. No obstante, además de poder
          visualizar los elementos del SITIO WEB podrá imprimirlos, copiarlos, o
          almacenarlos, siempre y cuando sea exclusivamente para su uso
          estrictamente personal. Por otro lado, el USUARIO, se abstendrá de
          suprimir, alterar, o manipular cualquier elemento, archivo, o
          contenido, del SITIO WEB, y por ningún motivo, realizará actos
          tendientes a vulnerar la seguridad, los archivos o baees de datos que
          se encuentren protegidos, ya sea a través de un acceso restringido
          mediante un usuario y contraseña, o porque no cuenten con los permisos
          para visualizarlos, manipularlos, o editarlos. En caso de que el
          USUARIO o algún tercero consideren que cualquier de los contenidos del
          SITIO WEB suponga una violación de los derechos de protección de la
          propiedad intelectual o industrial, deberá comunicarlo inmediatamente
          a Antonio Zirión Quijano a través de los datos de contacto disponibles
          en el propio SITIO WEB.
        </Typography>
        <br />
        <br />
        <Typography variant="h3" align="left">
          7.- LEGISLACIÓN Y JURISDICCIÓN APLICABLE.
        </Typography>
        <br />
        <Typography variant="h4" align="justify">
          Antonio Zirión Quijano se reserva la facultad de presentar las
          acciones civiles o penales que considere necesarias por la utilización
          indebida del SITIO WEB, sus contenidos, productos o servicios, o por
          el incumplimientos de los presentes TÉRMINOS Y CONDICIONES. La
          relación entre el USUARIO y Antonio Zirión Quijano se regirá por la
          lesgislación vigente en MÉXICO, específicamente en Ciudad de México.
          De surgir cualquier controversia en relación a la interpretación y/o a
          la aplicación de los presentes TERMINOS Y CONDICIONES, las partes se
          someterán a la jurisdicción ordinaria de los tribunales que
          correspondan conforme a derecho en el estado al que se hace
          referencia.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(modalDescargas)(TerminosyCondiciones);
