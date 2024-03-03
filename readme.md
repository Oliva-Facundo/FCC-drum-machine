Historia de usuario #1: Debe ser capaz de ver un contenedor externo con un correspondiente id="drum-machine" que contiene todos los demás elementos.

Historia de usuario #2: Dentro de #drum-machine puedo ver un elemento con un id="display" correspondiente.

Historia de usuario #3: Dentro de #drum-machine puedo ver 9 elementos de drum pad en los que se puede hacer clic, cada uno con un nombre de clase de drum-pad, un id único que describe el clip de audio que el pad de tambor será configurado para activar, y un texto interno que corresponde a una de las siguientes teclas del teclado: Q, W, E, A, S, D, Z, X, C. Los pads de la batería DEBEN estar en este orden.

Historia de usuario #4: Dentro de cada .drum-pad, debe haber un elemento HTML5 audio que tenga un atributo src apuntando a un clip de audio, un nombre de clase clip, y un id correspondiente al texto interno de su padre .drum-pad (e.g. id="Q", id="W", id="E" etc.).

Historia de usuario #5: Cuando hago clic en .drum-pad elemento, el clip de audio contenido en su elemento hijo audio debe ser activado.

Historia de usuario #6: Cuando presione la tecla de activación asociada con cada .drum-pad, el clip de audio contenido en su elemento hijo audio debe ser activado (p. ej. pulsando la tecla Q debería activar el tambor que contiene la cadena Q, pulsando la tecla W debería activar la tecla Tambor que contiene la cadena W, etc.).

Historia de usuario #7: Cuando es un .drum-pad es activado, una cadena que describe el clip de audio asociado se muestra como el texto interior del elemento #display (cada cadena debe ser única).