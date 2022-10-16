<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="h1 text-center">{{ $t("clockHeader") }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col float-end">
        <p class="text-end">{{ $t("clockTimeFormat") }}</p>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="form-check form-switch justify-content-center">
          <input
            class="form-check-input"
            type="checkbox"
            id="clockTimeFormat"
            checked
          />
          <label class="form-check-label" for="clockTimeFormat  "></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col float-end">
        <p class="text-end">{{ $t("clockShowSecond") }}</p>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="form-check form-switch justify-content-center">
          <input
            class="form-check-input"
            type="checkbox"
            id="clockShowSeconds"
            checked
          />
          <label class="form-check-label" for="clockShowSeconds"></label>
        </div>
      </div>
    </div>
    <basic-toggle idString="clockShowSecond"></basic-toggle>
  </div>
</template>

<script>
export default {
  import BasicToggle from "./BasicToggle.vue";
  components: {
    BasicToggle,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Clock",
};
</script>

<style scoped></style>
