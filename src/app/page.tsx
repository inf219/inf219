// this tells next.js this component runs in the browser(clitent-side) and not on the server
"use client";

// this is a react hook that gives you acces to translations
import { useTranslation } from "react-i18next";
// imports your configuration file to initialize the translation system
import "./i18n"; // import setup


// App is just a function i am creating, and it can be called everything
// export default means that this is the main thing that other files can impoort from this file
export default function App() {
  // t is a function to get the translations (t stands for translate)
  // i18n is the inctance to ontrol language switching
  // calling the useTranslation() function
  // it returns an object with tools inside {t: [function], i18n: [object]}. and storing it in variables t an i18n
  const { t, i18n } = useTranslation();

  return (
    // this is the container with a padding using tailwind
    <div className="p-4">
     {/** this calls the translate function with hello or hola */}
      <h1>{t("hello")}</h1>
      {/** this shows the welcome message*/}
      <p>{t("welcome")}</p>
     {/** if you click the button then the language changes */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => i18n.changeLanguage("en")}>English</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => i18n.changeLanguage("es")}>Español</button>
    </div>
  );
}

