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
                <i class="bi bi-cloud-drizzle"></i>&nbsp;Weather
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/calendar" class="nav-link">
                <i class="bi bi-calendar"></i>&nbsp;Calendar
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/compliments" class="nav-link">
                <i class="bi bi-emoji-smile"></i>&nbsp;Compliments
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/clock" class="nav-link">
                <i class="bi bi-clock"></i>&nbsp;Clock
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/newsfeed" class="nav-link">
                <i class="bi bi-newspaper"></i>&nbsp;Newsfeed
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/helloworld" class="nav-link">
                <i class="bi bi-chat"></i>&nbsp;Hello World
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "TopNavbar",
};
</script>

<style scoped></style>
