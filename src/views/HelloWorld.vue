<template>
  <!-- TODO: Implement HelloWorld.vue -->
  <div class="container-fluid">
    <h1 class="display-4 text-center">{{ $t("helloWorld.header") }}</h1>
    <basic-sub-heading textString="helloWorld.GeneralHeader" />

    <div class="list-group mb-5 shadow">
      <basic-toggle
        textString="helloWorld.Enabled"
        v-model="moduleEnabled"
        :true-value="false"
        :false-value="true"
      />
      <basic-select
        textString="Position"
        v-model="helloWorldParent.module.position"
        :options="positionOptions"
        :disabled="helloWorldParent.module.disabled"
      />
    </div>

    <div class="row" style="padding-left: 15%; padding-right: 15%">
      <v-btn size="x-large" color="indigo" @click="saveHelloWorldSettings">
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
import BasicSubHeading from "../components/BasicSubHeading.vue";
import BasicToggle from "../components/BasicToggle.vue";
import BasicSelect from "../components/BasicSelect.vue";

export default {
  name: "HelloWorld",
  components: {
    BasicSubHeading,
    BasicToggle,
    BasicSelect,
  },
  data() {
    return {
      snackbar: false,
      helloWorldParent: {
        module: {
          disabled: false,
          module: "helloworld",
          position: "bottom_bar",
          config: {},
        },
      },
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
    fetch("http://127.0.0.1:3000/helloWorldSettings", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data.module).length !== 0) {
          this.helloWorldParent.module = data.module;
        }
      });
  },
  methods: {
    saveHelloWorldSettings() {
      fetch("http://127.0.0.1:3000/helloWorldSettings", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.helloWorldParent),
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
        return !this.helloWorldParent.module.disabled;
      },
      set(value) {
        this.helloWorldParent.module.disabled = !value;
      },
    },
  },
};
</script>

<style scoped></style>
