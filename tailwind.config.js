import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    // 1. Habilitar el Modo Oscuro
    // 'class' significa que usará la clase 'dark' en el <body> o <html>
    darkMode: 'class', 

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            // 2. Definir los Colores Personalizados (cb-dark, cb-green, etc.)
            colors: {
                'cb-dark': '#0f172a',    // Fondo principal (casi negro, con un toque azulado)
                'cb-card': '#1e293b',    // Fondo de tarjetas y navbar (un azul grisáceo oscuro)
                'cb-green': '#10b981',   // El verde brillante principal para CTAs y texto destacado
                'cb-border': '#334155',  // Un gris oscuro para bordes y separadores
            },
            
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};

