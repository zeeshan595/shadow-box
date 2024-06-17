import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home.vue";
import Items from './pages/Items.vue';
import Monsters from './pages/monsters.vue';
import Spells from './pages/spells.vue';
import RollTables from "./pages/roll-tables.vue"
import Weapons from './pages/weapons.vue';
import Armors from "./pages/armors.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/items",
      name: "Items",
      component: Items,
    },
    {
      path: "/monsters",
      name: "Monster",
      component: Monsters,
    },
    {
      path: "/spells",
      name: "Spells",
      component: Spells,
    },
    {
      path: '/weapons',
      name: 'Weapons',
      component: Weapons
    },
    {
      path: '/armors',
      name: 'Armors',
      component: Armors
    },
    {
      path: "/roll-tables",
      name: "Roll Tables",
      component: RollTables
    }
  ],
});

export default router;
