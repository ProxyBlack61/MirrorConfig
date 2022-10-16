<template>
  <div class="row">
    <div class="col float-end">
      <p class="text-end">{{ $t("{{idString}}") }}</p>
    </div>
    <div class="col d-flex justify-content-center">
      <div class="form-check form-switch justify-content-center">
        <input
            class="form-check-input"
            type="checkbox"
            id="{{idString}}"
            checked
        />
        <label class="form-check-label" for="{{idString}}"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicToggle",
  props: {
    idString: String
  }
}
</script>

<style scoped>

</style>