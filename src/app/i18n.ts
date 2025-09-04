// this is the main internatlization library
import i18n from "i18next";
// this is a plugin that connects i18next to react components
import { initReactI18next } from "react-i18next";

// use() tells u18next to use the reactplugin
// init() sets up the configuration with your configuration
i18n.use(initReactI18next).init({
    // these are my translations
    resources: {
        en: { // language object that has an translation object
            translation: {
                hello: "Hello!", // keys like hello map to the translated text
                welcome: "Welcome to my app",
            },
        },
        es: {
            translation: {
                hello: "¡Hola!",
                welcome: "Bienvenido a mi aplicación",
            },
        },
    },
    lng: "en", // default language that is set when the language starts
    fallbackLng: "en", // if a translation is missing, fall back to english
    interpolation: { escapeValue: false }, // allows HTML in translations
});

export default i18n;

