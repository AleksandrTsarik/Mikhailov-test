// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";


export default defineNuxtConfig({
    devtools: {enabled: false},
    css: [
        '~/assets/style/main.scss',
    ],
    resolve: {
        alias: {
            "@": resolve(".")
        }
    }
})