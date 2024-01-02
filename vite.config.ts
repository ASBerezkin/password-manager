import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: 'src/index.ts', // точка входа для вашей библиотеки
            name: 'MyUIKit',
            formats: ['es', 'cjs'],
            fileName: (format) => `my-ui-kit.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom']
        }
    }
})
