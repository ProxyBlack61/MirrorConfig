<template>
  <div class="container-fluid">
    <h1 class="display-4 text-center">{{ $t("clock.Header") }}</h1>
    <basic-sub-heading textString="clock.GeneralHeader" />
    <div class="list-group mb-5 shadow">
      <basic-toggle
        textString="clock.Enabled"
        v-model="moduleEnabled"
        :true-value="false"
        :false-value="true"
      />

      <basic-select
        textString="Position"
        v-model="clockParent.module.position"
        :options="positionOptions"
        :disabled="clockParent.module.disabled"
      />

      <basic-select
        text-string="clock.TimeFormat"
        v-model="clockParent.module.config.timeFormat"
        :options="timeFormatOptions"
        :disabled="clockParent.module.disabled"
      />

      <basic-toggle
        text-string="clock.ShowPeriod"
        v-model="clockParent.module.config.showPeriod"
        :disabled="
          clockParent.module.config.timeFormat === 24 ||
          clockParent.module.disabled
        "
      />
      <basic-toggle
        text-string="clock.ShowPeriodUpper"
        v-model="clockParent.module.config.showPeriodUpper"
        :disabled="
          !clockParent.module.config.showPeriod === true ||
          clockParent.module.config.timeFormat === 24 ||
          clockParent.module.disabled
        "
      />

      <basic-toggle
        text-string="clock.ModernLook"
        v-model="clockParent.module.config.clockBold"
        :disabled="clockParent.module.disabled"
      />
    </div>
    <basic-sub-heading textString="clock.AdditionalHeader" />
    <div class="list-group mb-5 shadow">
      <basic-toggle
        text-string="clock.ShowSecond"
        v-model="clockParent.module.config.displaySeconds"
        :disabled="clockParent.module.disabled"
      />
      <basic-toggle
        text-string="clock.ShowDate"
        v-model="clockParent.module.config.showDate"
        :disabled="clockParent.module.disabled"
      />
      <basic-toggle
        text-string="clock.ShowWeek"
        v-model="clockParent.module.config.showWeek"
        :disabled="clockParent.module.disabled"
      />
      <basic-toggle
        text-string="clock.ShowSunTimes"
        v-model="clockParent.module.config.showSunTimes"
        :disabled="clockParent.module.disabled"
      />
      <basic-toggle
        text-string="clock.ShowMoonTimes"
        v-model="clockParent.module.config.showMoonTimes"
        :disabled="clockParent.module.disabled"
      />
      <BasicLocationPicker
        text-string="clock.Location"
        :latitude="clockParent.module.config.lat"
        @update:latitude="
          (newValue) => (clockParent.module.config.lat = newValue)
        "
        :longitude="clockParent.module.config.lon"
        @update:longitude="
          (newValue) => (clockParent.module.config.lon = newValue)
        "
        :disabled="
          !(
            clockParent.module.config.showMoonTimes === true ||
            clockParent.module.config.showSunTimes === true
          ) || clockParent.module.disabled
        "
      />
    </div>
    <basic-sub-heading text-string="clock.AnalogHeader" />
    <div class="list-group mb-5 shadow">
      <basic-select
        text-string="clock.DisplayType"
        v-model="clockParent.module.config.displayType"
        :options="displayTypeOptions"
        :disabled="clockParent.module.disabled"
      />
      <basic-color-picker
        text-string="clock.AnalogHandsColor"
        v-model="clockParent.module.config.secondsColor"
        :disabled="
          clockParent.module.config.displayType === 'digital' ||
          clockParent.module.disabled ||
          !clockParent.module.config.displaySeconds
        "
      />
      <basic-select
        text-string="clock.AnalogFace"
        v-model="clockParent.module.config.analogFace"
        :options="analogFaceOptions"
        :disabled="
          clockParent.module.config.displayType === 'digital' ||
          clockParent.module.disabled
        "
      />
      <basic-select
        text-string="clock.AnalogPlacement"
        v-model="clockParent.module.config.analogPlacement"
        :options="analogPlacementOptions"
        :disabled="
          clockParent.module.config.displayType !== 'both' ||
          clockParent.module.disabled
        "
      />
    </div>
    <div class="row" style="padding-left: 15%; padding-right: 15%">
      <v-btn size="x-large" color="indigo" @click="saveClockSettings">
        {{ $t("buttonSave") }}
      </v-btn>
    </div>

    <v-snackbar v-model="snackbar" location="bottom right">
      {{ $t("snackbarSaved") }}
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          {{ $t("snackbarClose") }}
        </v-btn>
      </template>
    </v-snackbar>
    <hr />
  </div>
</template>

<script>
import BasicToggle from "../components/BasicToggle.vue";
import BasicSelect from "../components/BasicSelect.vue";
import BasicColorPicker from "../components/BasicColorPicker.vue";
import BasicLocationPicker from "../components/BasicLocationPicker.vue";
import BasicSubHeading from "../components/BasicSubHeading.vue";

export default {
  components: {
    BasicToggle,
    BasicSelect,
    BasicColorPicker,
    BasicLocationPicker,
    BasicSubHeading,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Clock",

  data() {
    return {
      snackbar: false,
      clockParent: {
        module: {
          disabled: false,
          module: "clock",
          position: "top_left",
          config: {
            showPeriod: true,
            showPeriodUpper: true,
            timeFormat: 12,
            displaySeconds: true,
            showWeek: true,
            clockBold: true,
            showSunTimes: true,
            showDate: true,
            showMoonTimes: true,
            displayType: "digital",
            analogPlacement: "top",
            secondsColor: "#ffffff",
            analogFace: "simple",
            lat: 0,
            lon: 0,
          },
        },
      },
      displayTypeOptions: [
        { id: 1, value: "digital", language: "clock.DisplayTypeDigital" },
        { id: 2, value: "analog", language: "clock.DisplayTypeAnalog" },
        { id: 3, value: "both", language: "clock.DisplayTypeBoth" },
      ],
      analogPlacementOptions: [
        { id: 1, value: "top", language: "clock.AnalogPlacementTop" },
        { id: 2, value: "bottom", language: "clock.AnalogPlacementBottom" },
        { id: 3, value: "left", language: "clock.AnalogPlacementLeft" },
        { id: 4, value: "right", language: "clock.AnalogPlacementRight" },
      ],
      analogFaceOptions: [
        { id: 1, value: "simple", language: "clock.AnalogFaceSimple" },
        { id: 2, value: "none", language: "clock.AnalogFaceNone" },
        { id: 3, value: "face-001", language: "clock.AnalogFace01" },
        { id: 4, value: "face-002", language: "clock.AnalogFace02" },
        { id: 5, value: "face-003", language: "clock.AnalogFace03" },
        { id: 6, value: "face-004", language: "clock.AnalogFace04" },
        { id: 7, value: "face-005", language: "clock.AnalogFace05" },
        { id: 8, value: "face-006", language: "clock.AnalogFace06" },
        { id: 9, value: "face-007", language: "clock.AnalogFace07" },
        { id: 10, value: "face-008", language: "clock.AnalogFace08" },
        { id: 11, value: "face-009", language: "clock.AnalogFace09" },
        { id: 12, value: "face-010", language: "clock.AnalogFace10" },
      ],
      timeFormatOptions: [
        { id: 1, value: 12, language: "clock.TimeFormat12" },
        { id: 2, value: 24, language: "clock.TimeFormat24" },
      ],
      positionOptions: [
        { id: 1, value: "top_bar", language: "PositionTopBar" },
        { id: 2, value: "top_left", language: "PositionTopLeft" },
        { id: 3, value: "top_center", language: "PositionTopCenter" },
        { id: 4, value: "top_right", language: "PositionTopRight" },
        { id: 5, value: "upper_third", language: "PositionUpperThird" },
        {
          id: 6,
          value: "middle_center",
          language: "PositionMiddleCenter",
        },
        { id: 7, value: "lower_third", language: "PositionLowerThird" },
        { id: 8, value: "bottom_left", language: "PositionBottomLeft" },
        {
          id: 9,
          value: "bottom_center",
          language: "PositionBottomCenter",
        },
        {
          id: 10,
          value: "bottom_right",
          language: "PositionBottomRight",
        },
        { id: 11, value: "bottom_bar", language: "PositionBottomBar" },
        {
          id: 12,
          value: "fullscreen_above",
          language: "PositionFullscreenAbove",
        },
        {
          id: 13,
          value: "fullscreen_below",
          language: "PositionFullscreenBelow",
        },
      ],
    };
  },
  created() {
    fetch("http://127.0.0.1:3000/clockSettings", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data.module).length !== 0) {
          this.clockParent.module = data.module;
        }
      });
  },
  methods: {
    saveClockSettings() {
      fetch("http://127.0.0.1:3000/clockSettings", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.clockParent),
      }).then((response) => {
        if (response.ok) {
          this.snackbar = true;
        }
      });
    },
  },
  computed: {
    moduleEnabled: {
      get() {
        return !this.clockParent.module.disabled;
      },
      set(value) {
        this.clockParent.module.disabled = !value;
      },
    },
  },
};
</script>

<style scoped></style>
