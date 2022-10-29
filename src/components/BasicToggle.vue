<template>
  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col">
        <strong class="mb-2">{{ $t(textString) }}</strong>
        <p class="text-muted mb-0">
          {{ $t(textString + "Detail") }}
        </p>
      </div>
      <div class="col-auto">
        <div class="custom-control form-switch">
          <input
            type="checkbox"
            class="form-check-input"
            v-bind:id="textString"
            v-model="value"
            :disabled="disabled"
          />
          <span class="form-check-label"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicToggle",
  props: {
    textString: String,
    modelValue: Boolean,
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
