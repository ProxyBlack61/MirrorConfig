<template>
  <div class="container-fluid">
    <h1 class="display-4 text-center">{{ $t("clockHeader") }}</h1>
    <basic-sub-heading textString="clockGeneralHeader" />
    <div class="list-group mb-5 shadow">
      <basic-toggle
        textString="clockEnabled"
        v-model="moduleEnabled"
        :true-value="false"
        :false-value="true"
      />

      <basic-select
        textString="clockPosition"
        v-model="clockParent.module.position"
        :options="positionOptions"
        :disabled="clockParent.module.disabled"
      />

      <basic-select
        text-string="clockTimeFormat"
        v-model="clockParent.module.config.timeFormat"
        :options="timeFormatOptions"
        :disabled="clockParent.module.disabled"
      />

      <basic-toggle
        text-string="clockShowPeriod"
        v-model="clockParent.module.config.showPeriod"
        :disabled="
          !clockParent.module.config.timeFormat.includes('12') ||
          clockParent.module.disabled
        "
      />
      <basic-toggle
        text-string="clockShowPeriodUpper"
        v-model="clockParent.module.config.showPeriodUpper"
        :disabled="
          !clockParent.module.config.showPeriod === true ||
          !clockParent.module.config.timeFormat.includes('12') ||
          clockParent.module.disabled
        "
      />

      <basic-toggle
        text-string="clockModernLook"
        v-model="clockParent.module.config.clockBold"
        :disabled="clockParent.module.disabled"
      />
    </div>
    <basic-sub-heading textString="clockAdditionalHeader" />
    <div class="list-group mb-5 shadow">
      <basic-toggle
        text-string="clockShowSecond"
        v-model="clockParent.module.config.displaySeconds"
        :disabled="clockParent.module.disabled"
      />
      <basic-toggle
        text-string="clockShowDate"
        v-model="clockParent.module.config.showDate"
        :disabled="clockParent.module.disabled"
      />
      <basic-toggle
        text-string="clockShowWeek"
        v-model="clockParent.module.config.showWeek"
        :disabled="clockParent.module.disabled"
      />
      <basic-toggle
        text-string="clockShowSunTimes"
        v-model="clockParent.module.config.showSunTimes"
        :disabled="clockParent.module.disabled"
      />
      <basic-toggle
        text-string="clockShowMoonTimes"
        v-model="clockParent.module.config.showMoonTimes"
        :disabled="clockParent.module.disabled"
      />
      <BasicLocationPicker
        text-string="clockLocation"
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
    <basic-sub-heading text-string="clockAnalogHeader" />
    <div class="list-group mb-5 shadow">
      <basic-select
        text-string="clockDisplayType"
        v-model="clockParent.module.config.displayType"
        :options="displayTypeOptions"
        :disabled="clockParent.module.disabled"
      />
      <basic-color-picker
        text-string="clockAnalogHandsColor"
        v-model="clockParent.module.config.secondsColor"
        :disabled="
          clockParent.module.config.displayType === 'digital' ||
          clockParent.module.disabled
        "
      />
      <basic-select
        text-string="clockAnalogFace"
        v-model="clockParent.module.config.analogFace"
        :options="analogFaceOptions"
        :disabled="
          clockParent.module.config.displayType === 'digital' ||
          clockParent.module.disabled
        "
      />
      <basic-select
        text-string="clockAnalogPlacement"
        v-model="clockParent.module.config.analogPlacement"
        :options="analogPlacementOptions"
        :disabled="
          clockParent.module.config.displayType !== 'both' ||
          clockParent.module.disabled
        "
      />
    </div>

    <input
      class="btn btn-primary"
      type="submit"
      value="Submit"
      @click="saveClockSettings"
    />
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
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
      clockParent: {
        module: {
          disabled: false,
          module: "clock",
          position: "top_left",
          config: {
            showPeriod: true,
            showPeriodUpper: true,
            timeFormat: "12",
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
        { id: 1, value: "digital", language: "clockDisplayTypeDigital" },
        { id: 2, value: "analog", language: "clockDisplayTypeAnalog" },
        { id: 3, value: "both", language: "clockDisplayTypeBoth" },
      ],
      analogPlacementOptions: [
        { id: 1, value: "top", language: "clockAnalogPlacementTop" },
        { id: 2, value: "bottom", language: "clockAnalogPlacementBottom" },
        { id: 3, value: "left", language: "clockAnalogPlacementLeft" },
        { id: 4, value: "right", language: "clockAnalogPlacementRight" },
      ],
      analogFaceOptions: [
        { id: 1, value: "simple", language: "clockAnalogFaceSimple" },
        { id: 2, value: "none", language: "clockAnalogFaceNone" },
        { id: 3, value: "face-001", language: "clockAnalogFace01" },
        { id: 4, value: "face-002", language: "clockAnalogFace02" },
        { id: 5, value: "face-003", language: "clockAnalogFace03" },
        { id: 6, value: "face-004", language: "clockAnalogFace04" },
        { id: 7, value: "face-005", language: "clockAnalogFace05" },
        { id: 8, value: "face-006", language: "clockAnalogFace06" },
        { id: 9, value: "face-007", language: "clockAnalogFace07" },
        { id: 10, value: "face-008", language: "clockAnalogFace08" },
        { id: 11, value: "face-009", language: "clockAnalogFace09" },
        { id: 12, value: "face-010", language: "clockAnalogFace10" },
      ],
      timeFormatOptions: [
        { id: 1, value: "12", language: "clockTimeFormat12" },
        { id: 2, value: "24", language: "clockTimeFormat24" },
      ],
      positionOptions: [
        { id: 1, value: "top_bar", language: "clockPositionTopBar" },
        { id: 2, value: "top_left", language: "clockPositionTopLeft" },
        { id: 3, value: "top_center", language: "clockPositionTopCenter" },
        { id: 4, value: "top_right", language: "clockPositionTopRight" },
        { id: 5, value: "upper_third", language: "clockPositionUpperThird" },
        {
          id: 6,
          value: "middle_center",
          language: "clockPositionMiddleCenter",
        },
        { id: 7, value: "lower_third", language: "clockPositionLowerThird" },
        { id: 8, value: "bottom_left", language: "clockPositionBottomLeft" },
        {
          id: 9,
          value: "bottom_center",
          language: "clockPositionBottomCenter",
        },
        { id: 10, value: "bottom_right", language: "clockPositionBottomRight" },
        { id: 11, value: "bottom_bar", language: "clockPositionBottomBar" },
        {
          id: 12,
          value: "fullscreen_above",
          language: "clockPositionFullscreenAbove",
        },
        {
          id: 13,
          value: "fullscreen_below",
          language: "clockPositionFullscreenBelow",
        },
      ],
    };
  },
  created() {
    console.log("Clock created");
    fetch("http://127.0.0.1:3000/clockSettings", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Object.keys(data.module).length !== 0) {
          this.clockParent.module = data.module;
        }
      });
  },
  methods: {
    saveClockSettings() {
      console.log(this.clockParent);
      fetch("http://127.0.0.1:3000/clockSettings", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.clockParent),
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
