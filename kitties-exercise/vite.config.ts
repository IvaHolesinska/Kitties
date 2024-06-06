import * as dotenv from 'dotenv'
import path from 'path'
import { defineConfig, loadEnv, type UserConfigExport } from 'vite'
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default async ({ mode }: { mode: string }): Promise<UserConfigExport> => {
  const config = await defineConfig({
    plugins: [
      manualChunksPlugin(),
      react({
        babel: {
          plugins: ['macros'],
        },
      }),
    ],
    resolve: {
      alias: { '@': '/src' },
    },
    root: 'src',
    build: {
      outDir: '../build',
    },
    server: {
      open: true, // Automatically open the app in the browser
      port: 3000,
    },
  })
  return config
}
