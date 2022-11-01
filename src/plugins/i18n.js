import { createI18n } from "vue-i18n";
const messages = {
  English: {
    clock: {
      Header: "Clock Settings",
      TimeFormat: "Hour Format",
      TimeFormatDetail: "Choose between 12-hour and 24-hour time format.",
      ShowSecond: "Enable Seconds",
      ShowSecondDetail:
        "If checked, the seconds will be displayed on the clock",
      ShowPeriod: "Enable Period",
      ShowPeriodDetail: "If checked, the period will be displayed on the clock",
      ShowPeriodUpper: "Period in Uppercase",
      ShowPeriodUpperDetail:
        "If checked, the period will be displayed in uppercase",
      ModernLook: "Modern Look",
      ModernLookDetail: "If checked, the clock will have a modern look",
      ShowDate: "Enable Date",
      ShowDateDetail: "If checked, the date will be displayed on the clock",
      ShowWeek: "Enable Week",
      ShowWeekDetail: "If checked, the week will be displayed on the clock",
      ShowSunTimes: "Enable Sun Times",
      ShowSunTimesDetail:
        "If checked, the sunrise and sunset times will be displayed on the clock",
      ShowMoonTimes: "Enable Moon Times",
      ShowMoonTimesDetail:
        "If checked, the moonrise and moonset times will be displayed on the clock",
      DisplayType: "Display Type",
      DisplayTypeDetail: "Select the display type for the clock",
      DisplayTypeAnalog: "Analog",
      DisplayTypeDigital: "Digital",
      DisplayTypeBoth: "Both",
      AnalogHandsColor: "Analog Hands Color",
      AnalogHandsColorDetail:
        "Select the color for the analog hands.\n Requires active seconds",
      AnalogPlacement: "Analog Placement",
      AnalogPlacementDetail: "Select the placement for the analog clock",
      AnalogPlacementBottom: "Bottom",
      AnalogPlacementTop: "Top",
      AnalogPlacementLeft: "Left",
      AnalogPlacementRight: "Right",
      AnalogFace: "Analog Face",
      AnalogFaceDetail: "Select the face for the analog clock",
      AnalogFaceSimple: "Simple",
      AnalogFaceNone: "None Border",
      AnalogFace01: "Face 01",
      AnalogFace02: "Face 02",
      AnalogFace03: "Face 03",
      AnalogFace04: "Face 04",
      AnalogFace05: "Face 05",
      AnalogFace06: "Face 06",
      AnalogFace07: "Face 07",
      AnalogFace08: "Face 08",
      AnalogFace09: "Face 09",
      AnalogFace10: "Face 10",
      AnalogFace11: "Face 11",
      AnalogFace12: "Face 12",
      Location: "Location",
      LocationDetail: "Select the location for the sun & moon times",
      AnalogHeader: "Analog Clock Settings",
      AnalogHeaderDetail: "All settings that control the analog clock",
      TimeFormat12: "12 Hour Format",
      TimeFormat24: "24 Hour Format",
      GeneralHeader: "General Clock Settings",
      GeneralHeaderDetail: "All Basic settings that control the clock",
      AdditionalHeader: "Additional Clock Settings",
      AdditionalHeaderDetail:
        "All Additional settings to show more info on the clock",
      locationPickerPlaceholder: "Enter your location",
      Enabled: "Clock Module active",
      EnabledDetail: "If checked, the clock module will be active",
    },
    Position: "Position",
    PositionDetail: "Select the position for the module",
    PositionTopLeft: "Top Left",
    PositionTopCenter: "Top Center",
    PositionTopRight: "Top Right",
    PositionTopBar: "Top Bar",
    PositionUpperThird: "Upper Third",
    PositionMiddleCenter: "Middle Center",
    PositionLowerThird: "Lower Third",
    PositionBottomLeft: "Bottom Left",
    PositionBottomCenter: "Bottom Center",
    PositionBottomRight: "Bottom Right",
    PositionBottomBar: "Bottom Bar",
    PositionFullscreenAbove: "Fullscreen Above",
    PositionFullscreenBelow: "Fullscreen Below",
    locationCurrent: "Current Location",
    weatherMsg: "Weather",
    calendarMsg: "Calendar",
    clockMsg: "Clock",
    helloWorldMsg: "Hello World",
    newsFeedMsg: "News Feed",
    complimentsMsg: "Compliments",
    homeMsg: "Home",
    chooseLanguageMsg: "Choose Language:",
    lat: "Latitude",
    lon: "Longitude",
    snackbarSaved: "Settings saved!",
    snackbarClose: "Close",
    buttonSave: "Save",
    newsFeed: {
      header: "News Feed Settings",
      GeneralHeader: "General News Feed Settings",
      GeneralHeaderDetail: "All Basic settings that control the news feed",
      Enabled: "News Feed Module active",
      EnabledDetail: "If checked, the news feed module will be active",
    },
  },
  Deutsch: {
    clock: {
      Header: "Uhr Einstellungen",
      TimeFormat: "Zeit Format",
      TimeFormatDetail:
        "Auswahl zwischen 12-Stunden und 24-Stunden Zeitformat.",
      ShowSecond: "Sekunden aktivieren",
      ShowSecondDetail:
        "Wenn aktiviert, werden die Sekunden auf der Uhr angezeigt",
      ShowPeriod: "Zeitraum aktivieren",
      ShowPeriodDetail:
        "Wenn aktiviert, wird der Zeitraum auf der Uhr angezeigt",
      ShowPeriodUpper: "Zeitraum in Großbuchstaben",
      ShowPeriodUpperDetail:
        "Wenn aktiviert, wird der Zeitraum in Großbuchstaben angezeigt",
      ModernLook: "Modernes Aussehen",
      ModernLookDetail: "Wenn aktiviert, hat die Uhr ein modernes Aussehen",
      ShowDate: "Datum aktivieren",
      ShowDateDetail: "Wenn aktiviert, wird das Datum auf der Uhr angezeigt",
      ShowWeek: "Woche aktivieren",
      ShowWeekDetail: "Wenn aktiviert, wird die Woche auf der Uhr angezeigt",
      ShowSunTimes: "Sonnenzeiten anzeigen",
      ShowSunTimesDetail:
        "Wenn aktiviert, werden die Sonnenauf- und untergangszeiten auf der Uhr angezeigt",
      ShowMoonTimes: "Mondzeiten anzeigen",
      ShowMoonTimesDetail:
        "Wenn aktiviert, werden die Mond auf- und untergangszeiten auf der Uhr angezeigt",
      DisplayType: "Anzeigetyp",
      DisplayTypeDetail: "Wählen Sie den Anzeigetyp für die Uhr",
      DisplayTypeAnalog: "Analog",
      DisplayTypeDigital: "Digital",
      DisplayTypeBoth: "Beide",
      AnalogHandsColor: "Analoge Zeigerfarbe",
      AnalogHandsColorDetail:
        "Wählt die Farbe für den Sekunden Zeiger.\n Muss Sekundenzeiger aktiviert haben",
      AnalogPlacementBottom: "Unten",
      AnalogPlacementTop: "Oben",
      AnalogPlacementLeft: "Links",
      AnalogPlacementRight: "Rechts",
      AnalogPlacementDetail: "Wählt die Position für die analoge Uhr",
      AnalogPlacement: "Analoge Uhr Position",
      AnalogFace: "Analoges Zifferblatt",
      AnalogFaceDetail: "Wählt das Zifferblatt für die analoge Uhr",
      AnalogFaceSimple: "Einfach",
      AnalogFaceNone: "Kein Rand",
      AnalogFace01: "Ziffernblatt 01",
      AnalogFace02: "Ziffernblatt 02",
      AnalogFace03: "Ziffernblatt 03",
      AnalogFace04: "Ziffernblatt 04",
      AnalogFace05: "Ziffernblatt 05",
      AnalogFace06: "Ziffernblatt 06",
      AnalogFace07: "Ziffernblatt 07",
      AnalogFace08: "Ziffernblatt 08",
      AnalogFace09: "Ziffernblatt 09",
      AnalogFace10: "Ziffernblatt 10",
      AnalogFace11: "Ziffernblatt 11",
      AnalogFace12: "Ziffernblatt 12",
      Location: "Standort",
      LocationDetail: "Wählt den Standort für die Sonnen- und Mondzeiten",
      AnalogHeader: "Analoge Uhr Einstellungen",
      AnalogHeaderDetail: "Alle Einstellungen die die analoge Uhr beeinflussen",
      TimeFormat12: "12 Stunden Format",
      TimeFormat24: "24 Stunden Format",
      GeneralHeader: "Allgemeine Uhr Einstellungen",
      GeneralHeaderDetail: "Alle Basis Einstellungen die die Uhr beeinflussen",
      AdditionalHeader: "Zusätzliche Anzeige Einstellungen",
      AdditionalHeaderDetail:
        "Alle Einstellungen um zusätzliche Informationen anzuzeigen",
      Enabled: "Uhr Modul aktiv",
      EnabledDetail: "Wenn aktiviert, wird das Uhr Modul angezeigt",
    },
    Position: "Position",
    PositionDetail: "Wählt die Position für das  Modul",
    PositionTopBar: "Obere Leiste",
    PositionTopLeft: "Oben Links",
    PositionTopCenter: "Oben Mitte",
    PositionTopRight: "Oben Rechts",
    PositionUpperThird: "Oberes Drittel",
    PositionMiddleLeft: "Mitte Links",
    PositionMiddleCenter: "Mitte Mitte",
    PositionMiddleRight: "Mitte Rechts",
    PositionLowerThird: "Unteres Drittel",
    PositionBottomLeft: "Unten Links",
    PositionBottomCenter: "Unten Mitte",
    PositionBottomRight: "Unten Rechts",
    PositionBottomBarLeft: "Untere Leiste Links",
    PositionBottomBarCenter: "Untere Leiste Mitte",
    PositionBottomBar: "Untere Leiste",
    PositionFullscreenAbove: "Vollbild Oben",
    PositionFullscreenBelow: "Vollbild Unten",
    weatherMsg: "Wetter",
    calendarMsg: "Kalender",
    clockMsg: "Uhr",
    helloWorldMsg: "Hallo Welt",
    newsFeedMsg: "Nachrichten",
    complimentsMsg: "Komplimente",
    homeMsg: "Home",
    chooseLanguageMsg: "Sprache wählen:",
    locationCurrent: "Aktueller Standort",
    locationPickerPlaceholder: "Geben Sie Ihren Standort ein",
    snackbarSaved: "Einstellungen gespeichert!",
    snackbarClose: "Schließen",
    buttonSave: "Speichern",
    lat: "Breitengrad",
    lon: "Längengrad",
    newsFeed: {
      header: "Nachrichten Einstellungen",
      GeneralHeader: "Allgemeine Nachrichten Einstellungen",
      GeneralHeaderDetail:
        "Alle Grundeinstellungen die die Nachrichten beeinflussen",
      Enabled: "Nachrichten aktivieren",
      EnabledDetail: "Wenn aktiviert, werden Nachrichten angezeigt",
    },
  },
};

export default createI18n({
  locale: "English",
  fallbackLocale: "Deutsch",
  messages,
});
