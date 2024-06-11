import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/Home.vue";
import Items from './pages/Items.vue';
import Monsters from './pages/monsters.vue';
import Spells from './pages/spells.vue';
import RollTables from "./pages/RollTables.vue"

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
      path: "/roll-tables",
      name: "Roll Tables",
      component: RollTables
    }
  ],
});

export default router;
