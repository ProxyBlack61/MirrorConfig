<template>
  <hr style="width: 75%" class="text-center mx-auto" />
  <p class="fw-bold mb-0 text-center">{{ $t(textString) }}</p>
  <p class="text-center mx-auto">
    {{ $t(textString + "Detail") }}
  </p>
  <hr style="width: 75%" class="text-center mx-auto" />
</template>

<script>
export default {
  name: "BasicSubHeading",
  props: {
    textString: String,
  },
};
</script>

<style scoped></style>
