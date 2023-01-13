# Partícula entre millones

Han pasado pocos segundos desde la creación del universo y... vaya, aún estás aturdido. Siendo una partícula de materia gravitas hacia un anillo de partículas que han ideado un juego. 

Un amigable gluon explica: existe un número equitativo de partículas de materia y de
antimateria que se ubicarán en un círculo. Con el soplido de un silbido cósmico, cada
partícula de materia con una partícula de antimateria a su derecha se unirá con una
antipartícula para -¡puf!- aniquilar a las dos. El círculo se apretará para crear un círculo más pequeño, y el proceso se repetirá hasta que solo una partícula de materia permanezca. Han estado esperando a alguien como tú, ya que con un plan perfectamente balanceado nadie sobreviviría al final. Como invitado de honor, te dejarán escoger dónde insertarte en el anillo. Tienes un aparato que es capaz de leer la secuencia de partículas a la derecha de cualquier espacio que apuntes dentro del círculo.

¿Cómo programarías tu aparato para saber si un espacio es seguro?

## Solución

En una fila de materia y antimateria podemos ver cada partícula de materia como una defensa ante una partícula de antimateria, ya que estas partículas se unirán y mantendrán a salvo la posición elegida, de modo que un lugar será seguro si la posición se mantiene protegida de cada partícula de antimateria hasta el final de la secuencia.

De manera secuencial, si llevamos la cuenta de cuantas partículas de materia nos protegen y vamos restando una por cada partícula de antimateria que nos encontramos, podremos asegurar que estaremos protegidos en la posición si el contador nunca baja de 0 en cada operación.

## El programa

Usando TypeScript se construye una función **itIsASafePlace**, que recibe array de unos positivos y negativos (1, -1) cuyos unos positivos (1) representan las partículas de materia y cuyos unos negativos (-1) representan las partículas de antimateria, por ejemplo: "[1, -1, 1, 1, -1, -1]", y retorna un valor <u>booleano</u> que indica si la posición es segura o no.

### ¿Qué pasa con las secuencias que comienzan con partículas de antimateria?

Simplemente, no son un lugar seguro. Pero si lo que necesita es que se validen esas posibilidades y una entrada de datos más cómoda, podrá usar la función un poco más cool **safePlaceDetectorDevice**, la cual puede recibir cualquier cadena de texto y agregará a la respuesta un mensaje explicativo, pero en el fondo en serio se comportara igual que **itIsASafePlace**

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/JuanZea/challenge-particle-among-millions)