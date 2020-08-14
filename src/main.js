import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");


/**
 * FEEDBACK:
 * 
 * A mí parecer como una primera aproximación al Framework hiciste un laburazo,
 * la App funciona cómo se esperaba.
 * 
 * Sin duda un desafío importante a tener en cuenta sería el tema de los estilos ya que en
 * muchos tamaños de pantalla se me rompió la vista de los componentes. 
 * Yo soy mucho más del palo de la lógica y no de los estilos por eso ni me metí a corregirlos,
 * pero en la comunidad hay mucha gente orientada a CSS, pedí ayuda, lee docu, y dale para adelante.
 * 
 * En cuanto a nivel lógico diría que los algoritmos están re bien logrados, falta un poco la
 * abstracción al componentizar pero es algo que te lo va a dar la práctica.
 * 
 * ¡Ojo con el uso de GIT! Te ví pecador que hiciste 2 commits, uno de inicio del proyecto y otro de fin.
 * Acostumbrate a ir commiteando pequeños cambios, eso te va a ayudar a mantener un órden mental de lo que vas 
 * resolviendo y te va a permitir volver en tus pasos si lo necesitás. Es un dolor de cabeza empezar a modificar
 * archivos y después no poder volver a la versión funcional que tenías hace un par de horas.
 * 
 * Es un gusto que te hayas animado al desafío y haber leído tu código, no pares de codear ni de compartir.
 * 
 * Happy Hacking!! (Siempre quise decir esto jajaja!)
 * 
 * Feco.
 */