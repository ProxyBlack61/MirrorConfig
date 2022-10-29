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
        <GMapAutocomplete
          :placeholder="$t('locationPickerPlaceholder')"
          @place_changed="setPlace"
          :diabled="disabled"
        />
        <p class="mb-0 text">{{ $t("locationCurrent") }}</p>
        <p class="text-muted mb-0">Lat: {{ latitude }} Long: {{ longitude }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicLocationPicker",
  props: {
    textString: String,
    latitude: Number,
    longitude: Number,
    disabled: Boolean,
  },
  emits: ["update:latitude", "update:longitude"],
  methods: {
    setPlace(n) {
      console.log(n.geometry.location.lat());
      console.log(n.geometry.location.lng());
      this.$emit("update:latitude", n.geometry.location.lat());
      this.$emit("update:longitude", n.geometry.location.lng());
    },
  },
};
</script>

<style scoped></style>
