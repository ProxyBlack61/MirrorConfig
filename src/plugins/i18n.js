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
  },
  Deutsch: {
    weatherMsg: "Wetter",
    calendarMsg: "Kalender",
    clockMsg: "Uhr",
    helloWorldMsg: "Hallo Welt",
    newsFeedMsg: "Nachrichten",
    complimentsMsg: "Komplimente",
    homeMsg: "Home",
  },
};

export default createI18n({
  locale: "English",
  fallbackLocale: "Deutsch",
  messages,
});
