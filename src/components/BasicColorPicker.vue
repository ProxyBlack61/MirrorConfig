<template>
  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col">
        <strong class="mb-2">{{ $t(textString) }}</strong>
        <p class="text-muted mb-0" style="white-space: pre-line">
          {{ $t(textString + "Detail") }}
        </p>
      </div>
      <div class="col-auto">
        <v-color-picker
          v-bind:id="textString"
          v-model="value"
          :disabled="disabled"
          elevation="0"
          hide-canvas
          show-swatches
          mode="rgb"
          swatches-max-height="75px"
        ></v-color-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicColorPicker",
  props: {
    textString: String,
    modelValue: String,
    disabled: Boolean,
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style scoped></style>
