<template>
<div class="h-100 d-flex flex-row">
  <h1 class="h1 ">{{$t("clockHeader") }}</h1>

  <div class="container-fluid">
    <a>{{$t("clockTimeFormat")}}</a>
  </div>
</div>




</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Clock",
};
</script>

<style scoped></style>
