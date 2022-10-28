<template>
  <div class="container-fluid">
    <h1 class="display-4 text-center">{{ $t("clockHeader") }}</h1>
    <hr style="width: 40%" class="text-center mx-auto" />
    <strong class="mb-0">Security</strong>
    <p>Control security alert you will be notified.</p>
    <div class="list-group mb-5 shadow">
      <basic-toggle
        text-string="clockShowPeriod"
        v-model="clockSettings.showPeriod"
      />
      <basic-toggle
        text-string="clockShowPeriodUpper"
        v-model="clockSettings.showPeriodUpper"
      />
      <basic-toggle
        textString="clockTimeFormat"
        v-model="clockSettings.timeFormat"
      />
      <basic-toggle
        text-string="clockShowSecond"
        v-model="clockSettings.displaySeconds"
      />
      <basic-toggle
        text-string="clockShowWeek"
        v-model="clockSettings.showWeek"
      />
      <basic-toggle
        text-string="clockModernLook"
        v-model="clockSettings.clockBold"
      />
      <basic-toggle
        text-string="clockShowSunTimes"
        v-model="clockSettings.showSunTimes"
      />
      <basic-toggle
        text-string="clockShowDate"
        v-model="clockSettings.showDate"
      />
      <basic-toggle
        text-string="clockShowMoonTimes"
        v-model="clockSettings.showMoonTimes"
      />
      <basic-select
        text-string="clockDisplayType"
        v-model="clockSettings.displayType"
        :options="displayTypeOptions"
      />
      <basic-select
        text-string="clockAnalogPlacement"
        v-model="clockSettings.analogPlacement"
        :options="analogPlacementOptions"
        :disabled="clockSettings.displayType !== 'both'"
      />
      <basic-color-picker
        text-string="clockAnalogHandsColor"
        v-model="clockSettings.secondsColor"
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

export default {
  components: {
    BasicToggle,
    BasicSelect,
    BasicColorPicker,
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
  },
};
</script>

<style scoped></style>
