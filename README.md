# S7.Pressupost
 
En aquest lliurament realitzarem una aplicació per calcular el pressupost d'una pàgina web, afegint més interaccions amb l'usuari/ària que en la pràctica anterior (caselles de selecció, inputs, botons). La nostra web haurà de reaccionar i modificar el preu total en funció de les opcions que triï l'usuari/ària.
- Exercici 1
La nostra aplicació començarà amb tres checkboxes mitjançant els quals l'usuari/ària podrà decidir si vol obtenir el pressupost d'una pàgina web (500 €), una campanya SEO (300 €) o una campanya de publicitat (200 €).

En funció de les opcions que marqui, es mostrarà un preu diferent.
- Exercici 2
Una vegada creades les caselles de selecció que permetran a l'usuari/ària seleccionar el tipus de servei que necessita, li oferirem l'opció d'ajustar un dels serveis: crear una pàgina web, podent triar el nombre de pàgines i d'idiomes.

El client/a podrà seleccionar el nombre de pàgines i el nombre d'idiomes de la web que desitja fer. 

Al cost total de la web haurem d'afegir la següent quantitat:

-  Nombre de pàgines * el nombre d'idiomes * 30 €.

- Exercici 3
GENIAL!, l'usuari/ària ja pot demanar 3 dels nostres serveis i customitzar un d'ells. 

Per a fer la vida més fàcil a l'usuari/ària, en lloc de fer-li teclejar el nombre de pàgines i idiomes que necessita, li posarem uns botons als costats de l'input perquè de manera fàcil pugui modificar la seva selecció.

Per a ells, has de canviar els <input type = "text" /> del panell per un nou component fet a mida, que tindrà botons d'incrementar i decrementar la quantitat, a més d'un quadre de text en què podrem escriure la quantitat directament:

- Exercici 4
Ja gairebé has completat la base del projecte, et falta guardar les dades dels camps seleccionats per l'usuari/ària en localstorage.

Has d'usar el hook useEffect per a carregar les dades del localstorage quan s'inicialitzi el component.


- Exercici 5
Per a acabar aquesta primera fase del projecte, és necessari implementar una pantalla de benvinguda per l'usuari/ària, on s'expliqui el propòsit i funcionament de la web.

És necessari que implementis la navegació entre vistes utilitzant el routing de React.