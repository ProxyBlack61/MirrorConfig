<template xmlns="http://www.w3.org/1999/html">
  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col">
        <strong class="mb-2">{{ $t(textString) }}</strong>
        <p class="text-muted mb-0">
          {{ $t(textString + "Detail") }}
        </p>
      </div>
      <div class="col-auto">
        <select
          aria-label="Default select example"
          v-bind:id="textString"
          v-model="value"
          class="form-select"
        >
          <option selected value="digital">Digital</option>
          <option value="analog">Analog</option>
          <option value="both">Both</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicSelect",
  props: ["textString", "modelValue"],
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
