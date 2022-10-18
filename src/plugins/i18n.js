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
    clockTimeFormat: "24 Hour Format",
    clockTimeFormatDetail:
      "If checked, the time will be displayed in 24 hour format",
    clockShowSecond: "Enable Seconds",
    clockShowSecondDetail:
      "If checked, the seconds will be displayed on the clock",
    clockShowPeriod: "Enable Period",
    clockShowPeriodDetail:
      "If checked, the period will be displayed on the clock",
    clockShowPeriodUpper: "Period in Uppercase",
    clockShowPeriodUpperDetail:
      "If checked, the period will be displayed in uppercase",
    clockModernLook: "Modern Look",
    clockModernLookDetail: "If checked, the clock will have a modern look",
    clockShowDate: "Enable Date",
    clockShowDateDetail: "If checked, the date will be displayed on the clock",
    clockShowWeek: "Enable Week",
    clockShowWeekDetail: "If checked, the week will be displayed on the clock",
    clockShowSunTimes: "Enable Sun Times",
    clockShowSunTimesDetail:
      "If checked, the sunrise and sunset times will be displayed on the clock",
    clockShowMoonTimes: "Enable Moon Times",
    clockShowMoonTimesDetail:
      "If checked, the moonrise and moonset times will be displayed on the clock",
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
    clockTimeFormat: "24 Stunden Format",
    clockTimeFormatDetail:
      "Wenn aktiviert, wird die Uhrzeit im 24 Stunden Format angezeigt",
    clockShowSecond: "Sekunden aktivieren",
    clockShowSecondDetail:
      "Wenn aktiviert, werden die Sekunden auf der Uhr angezeigt",
    clockShowPeriod: "Zeitraum aktivieren",
    clockShowPeriodDetail:
      "Wenn aktiviert, wird der Zeitraum auf der Uhr angezeigt",
    clockShowPeriodUpper: "Zeitraum in Großbuchstaben",
    clockShowPeriodUpperDetail:
      "Wenn aktiviert, wird der Zeitraum in Großbuchstaben angezeigt",
    clockModernLook: "Modernes Aussehen",
    clockModernLookDetail: "Wenn aktiviert, hat die Uhr ein modernes Aussehen",
    clockShowDate: "Datum aktivieren",
    clockShowDateDetail: "Wenn aktiviert, wird das Datum auf der Uhr angezeigt",
    clockShowWeek: "Woche aktivieren",
    clockShowWeekDetail: "Wenn aktiviert, wird die Woche auf der Uhr angezeigt",
    clockShowSunTimes: "Sonnenzeiten anzeigen",
    clockShowSunTimesDetail:
      "Wenn aktiviert, werden die Sonnenauf- und untergangszeiten auf der Uhr angezeigt",
    clockShowMoonTimes: "Mondzeiten anzeigen",
    clockShowMoonTimesDetail:
      "Wenn aktiviert, werden die Mond auf- und untergangszeiten auf der Uhr angezeigt",
  },
};

export default createI18n({
  locale: "English",
  fallbackLocale: "Deutsch",
  messages,
});
