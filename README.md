# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# 📘 Hoja de Referencia Rápida – Vue 3 + Vite + Composition API


🏁 INICIALIZAR PROYECTO
```bash
npm create vite@latest my-app -- --template vue
cd my-app
npm install
npm run dev
```

📄 ESTRUCTURA DE UN COMPONENTE `.vue`
```vue
<template>
  <div>{{ mensaje }}</div>
</template>

<script setup>
import { ref } from 'vue'

const mensaje = ref('Hola Vue!')
</script>

<style scoped>
div { color: blue; }
</style>
```

🔁 REACTIVIDAD
```js
import { ref, reactive, computed, watch } from 'vue'

const contador = ref(0)
const persona = reactive({ nombre: 'Juan', edad: 25 })

const doble = computed(() => contador.value * 2)

watch(contador, (nuevo, viejo) => {
  console.log(`Cambió de ${viejo} a ${nuevo}`)
})
```

🔀 RUTAS (vue-router)
Instalar y configurar:
```bash
npm install vue-router
```

```js
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: () => import('../views/About.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
```

En `main.js`:
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

Uso en plantilla:
```vue
<router-link to="/about">Ir a About</router-link>
<router-view />
```

📦 ESTADO GLOBAL (Pinia)
Instalar y configurar:
```bash
npm install pinia
```

```js
// main.js
import { createPinia } from 'pinia'
app.use(createPinia())
```

```js
// stores/contador.js
import { defineStore } from 'pinia'

export const useContador = defineStore('contador', {
  state: () => ({ valor: 0 }),
  actions: {
    incrementar() { this.valor++ }
  }
})
```

Uso:
```js
const contador = useContador()
contador.incrementar()
```

📡 LLAMADAS A API (con Axios)
```bash
npm install axios
```

```js
import axios from 'axios'
import { ref, onMounted } from 'vue'

const datos = ref([])

onMounted(async () => {
  const res = await axios.get('https://api.example.com/items')
  datos.value = res.data
})
```

🔌 PROPS Y EVENTOS
Padre → Hijo (props):
```vue
<!-- Padre.vue -->
<Hijo :mensaje="'Hola hijo'" />
```

```vue
<!-- Hijo.vue -->
<script setup>
defineProps(['mensaje'])
</script>
```

Hijo → Padre (emit):
```vue
<!-- Hijo.vue -->
<script setup>
const emit = defineEmits(['hazClick'])
</script>

<button @click="emit('hazClick')">Click</button>
```

```vue
<!-- Padre.vue -->
<Hijo @hazClick="hacerAlgo" />
```

🧠 CICLO DE VIDA (Composition API)
```js
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Montado')
})
```

🧹 DIRECTIVAS COMUNES

| Directiva | Uso |
|----------|-----|
| `v-if` / `v-else-if` / `v-else` | Condicionales |
| `v-for="item in items"` | Bucles |
| `:key="item.id"` | Claves únicas en listas |
| `v-model` | Enlace bidireccional |
| `@click` | Eventos |

✨ ESTILOS
```vue
<style scoped>
.boton {
  color: white;
  background: blue;
}
</style>
```

Globales (main.css):
```css
/* src/assets/main.css */
body {
  font-family: sans-serif;
}
```

📚 COMPOSABLES PERSONALIZADOS
```js
// composables/useFecha.js
import { ref } from 'vue'

export function useFecha() {
  const fecha = ref(new Date().toLocaleDateString())
  return { fecha }
}
```

```js
// En componente
import { useFecha } from '@/composables/useFecha'
const { fecha } = useFecha()
```

✅ EXTENSIONES ÚTILES

- **Volar** (soporte Vue 3)
- **Vue Language Features (Volar)** – VS Code
- **Vue Devtools** – inspección en navegador
- **TailwindCSS IntelliSense** (si usas Tailwind)

