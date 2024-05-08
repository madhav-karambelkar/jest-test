import { defineConfig , loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr' 
import istanbul from 'vite-plugin-istanbul'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  let outDir = 'dist'

  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        [`process.env.${key}`]: `"${val}"`,
      }
    },
    {}
  )

  if (command === 'build' && /(dev|qa|stage)/.test(mode)) {
    outDir = `dist-${mode}`
  }

  return {
    plugins: [
      react(),
      svgr({ include: '**/*.svg' }),
      istanbul({
        cypress: true,
        requireEnv: false,
      }),
    ],
    base: env.VITE_ROUTER_BASE_PATH,
    server: {
      host: 'localhost',
      port: 3000,
      fs: {
        allow: ['..'],
      },
    },
    build: {
      outDir,
    },
    define: envWithProcessPrefix,
  }
})
