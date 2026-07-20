import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(
      colors: {
  primary: "#196038",
  "primary-dark": "#114528",

  secondary: "#A0E70B",
  "secondary-dark": "#84C400",

  accent: "#B4DB4B",

  background: "#F8FAF8",
  surface: "#FFFFFF",

  text: "#1E293B",
  muted: "#64748B",
  border: "#DCE7DD",
}
    ),
  ],
})

