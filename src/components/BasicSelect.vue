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
        //TODO: Replace Boostrap select with Vuetify 3 Select when it's released
        <select
          aria-label="Default select example"
          v-bind:id="textString"
          v-model="value"
          class="form-select"
          :disabled="disabled"
        >
          <option
            v-for="option in options"
            :key="option.id"
            :value="option.value"
          >
            {{ $t(option.language) }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicSelect",
  props: {
    textString: String,
    modelValue: String,
    disabled: Boolean,
    options: {
      type: Array,
      required: false,
    },
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
