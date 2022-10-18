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
    </div>
  </div>
  <input
    class="btn btn-primary"
    type="submit"
    value="Submit"
    @click="saveClockSettings"
  />
  <hr />
  {{ clockSettings }}
</template>

<script>
import BasicToggle from "../components/BasicToggle.vue";
export default {
  components: {
    BasicToggle,
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
        if (data === undefined) {
          console.log("test");
          this.clockSettings = data;
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
