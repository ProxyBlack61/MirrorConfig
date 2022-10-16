import { createI18n } from "vue-i18n";
const messages = {
  English: {
    weatherMsg: "Weather",
    calendarMsg: "Calendar",
    clockMsg: "Clock",
    helloWorldMsg: "Hello World",
    newsFeedMsg: "News Feed",
    complimentsMsg: "Compliments",
    homeMsg: "Home",
    chooseLanguageMsg: "Choose Language:",
    clockHeader: "Clock Settings",
    clockTimeFormat: "24 Hour Time Format active"
  },
  Deutsch: {
    weatherMsg: "Wetter",
    calendarMsg: "Kalender",
    clockMsg: "Uhr",
    helloWorldMsg: "Hallo Welt",
    newsFeedMsg: "Nachrichten",
    complimentsMsg: "Komplimente",
    homeMsg: "Home",
    chooseLanguageMsg: "Sprache wählen:",
    clockHeader: "Uhr Einstellungen",
    clockTimeFormat: "24 Stunden Zeitformat aktiv"
  },
};

export default createI18n({
  locale: "English",
  fallbackLocale: "Deutsch",
  messages,
});
