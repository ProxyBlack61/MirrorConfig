<template>
  <div class="container-fluid">
    <h1 class="display-4 text-center">{{ $t("clockHeader") }}</h1>
    <hr style="width: 40%" class="text-center mx-auto" />
    <basic-sub-heading textString="clockGeneralHeader" />
    <div class="list-group mb-5 shadow">
      <basic-select
        text-string="clockTimeFormat"
        v-model="clockSettings.timeFormat"
        :options="timeFormatOptions"
      />
      <basic-toggle
        text-string="clockShowPeriod"
        v-model="clockSettings.showPeriod"
        :disabled="!clockSettings.timeFormat.includes('12')"
      />
      <basic-toggle
        text-string="clockShowPeriodUpper"
        v-model="clockSettings.showPeriodUpper"
        :disabled="
          !clockSettings.showPeriod === true ||
          !clockSettings.timeFormat.includes('12')
        "
      />

      <basic-toggle
        text-string="clockModernLook"
        v-model="clockSettings.clockBold"
      />
    </div>
    <basic-sub-heading textString="clockAdditionalHeader" />
    <div class="list-group mb-5 shadow">
      <basic-toggle
        text-string="clockShowSecond"
        v-model="clockSettings.displaySeconds"
      />
      <basic-toggle
        text-string="clockShowDate"
        v-model="clockSettings.showDate"
      />
      <basic-toggle
        text-string="clockShowWeek"
        v-model="clockSettings.showWeek"
      />
      <basic-toggle
        text-string="clockShowSunTimes"
        v-model="clockSettings.showSunTimes"
      />
      <basic-toggle
        text-string="clockShowMoonTimes"
        v-model="clockSettings.showMoonTimes"
      />
      <BasicLocationPicker
        text-string="clockLocation"
        :latitude="clockSettings.lat"
        @update:latitude="(newValue) => (clockSettings.lat = newValue)"
        :longitude="clockSettings.lon"
        @update:longitude="(newValue) => (clockSettings.lon = newValue)"
        :disabled="
          !(
            clockSettings.showMoonTimes === true ||
            clockSettings.showSunTimes === true
          )
        "
      />
    </div>
    <basic-sub-heading text-string="clockAnalogHeader" />
    <div class="list-group mb-5 shadow">
      <basic-select
        text-string="clockDisplayType"
        v-model="clockSettings.displayType"
        :options="displayTypeOptions"
      />
      <basic-color-picker
        text-string="clockAnalogHandsColor"
        v-model="clockSettings.secondsColor"
        :disabled="clockSettings.displayType === 'digital'"
      />
      <basic-select
        text-string="clockAnalogFace"
        v-model="clockSettings.analogFace"
        :options="analogFaceOptions"
        :disabled="clockSettings.displayType === 'digital'"
      />
      <basic-select
        text-string="clockAnalogPlacement"
        v-model="clockSettings.analogPlacement"
        :options="analogPlacementOptions"
        :disabled="clockSettings.displayType !== 'both'"
      />
    </div>

    <input
      class="btn btn-primary"
      type="submit"
      value="Submit"
      @click="saveClockSettings"
    />
    <hr />
    {{ clockSettings }}
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
      clockSettings: {
        showPeriod: true,
        showPeriodUpper: true,
        timeFormat: true,
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
      center: {
        lat: 40.73061,
        lng: -73.935242,
      },
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
        if (Object.keys(data).length !== 0) {
          this.clockSettings = data.clockSettings;
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
        body: JSON.stringify(this.clockSettings),
      });
    },
    getPosition() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("TEST");
        this.clockSettings.lat = position.coords.latitude;
        this.clockSettings.lon = position.coords.longitude;
      });
    },
  },
};
</script>

<style scoped></style>
