<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        >Vehicle Registration</router-link
      >
      <button
        class="navbar-toggler ps-0"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="d-flex justify-content-start align-items-center">
          <i class="fas fa-bars"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link px-3" to="/brands"
              >Vehicle Brands</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/models"
              >Vehicle Models</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/owners"
              >List of Owners</router-link
            >
          </li>
        </ul>

        <ul class="navbar-nav flex-row">
          <li class="nav-item">
            <a class="nav-link pe-3" href="#!">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="#!">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link ps-3" href="#!">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: rgb(213, 155, 213);
}

.navbar-brand {
  letter-spacing: 3px;
  color: #000000;
}

.navbar-brand:hover {
  color: #c24244;
}

.navbar-scroll .nav-link,
.navbar-scroll .fa-bars {
  color: #7f4722;
}

.navbar-scrolled .nav-link,
.navbar-scrolled .fa-bars {
  color: #7f4722;
}

.navbar-scrolled {
  background-color: #ffede7;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #000000;
}
</style>