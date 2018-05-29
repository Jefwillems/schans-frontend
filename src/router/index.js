import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Contact from '@/components/Contact';
import Huisje from '@/components/Huisje';
import Fotos from '@/components/Fotos';
import Locatie from '@/components/Locatie';
import Agenda from '@/components/agenda/Agenda';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/huisje',
      name: 'Huisje',
      component: Huisje
    },
    {
      path: '/fotos',
      name: 'Fotos',
      component: Fotos
    },
    {
      path: '/locatie',
      name: 'Locatie',
      component: Locatie
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: Agenda
    }
  ]
});
