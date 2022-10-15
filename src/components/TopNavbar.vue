<template>
  <nav class="navbar navbar-default navbar-dark navbar-static-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SmartMirror Config</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Smart Mirror Config
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <i class="bi bi-house-door"></i>&nbsp;Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/weather">
                <i class="bi bi-cloud-drizzle"></i>&nbsp;{{ $t("weatherMsg") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/calendar" class="nav-link">
                <i class="bi bi-calendar"></i>&nbsp;{{ $t("calendarMsg") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/compliments" class="nav-link">
                <i class="bi bi-emoji-smile"></i>&nbsp;{{
                  $t("complimentsMsg")
                }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/clock" class="nav-link">
                <i class="bi bi-clock"></i>&nbsp;{{ $t("clockMsg") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/newsfeed" class="nav-link">
                <i class="bi bi-newspaper"></i>&nbsp;{{ $t("newsFeedMsg") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/helloworld" class="nav-link">
                <i class="bi bi-chat"></i>&nbsp;{{ $t("helloWorldMsg") }}
              </router-link>
            </li>
          </ul>
          <div class="">
            <select
              class="form-select bg-dark text-white"
              v-model="$i18n.locale"
            >
              <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
              >
                {{ locale }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "TopNavbar",
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "de", language: "de", title: "Deutsch" },
      ],
    };
  },
  methods: {
    changeLocale(language) {
      i18n.locale = language;
    },
  },
};
</script>

<style scoped></style>
