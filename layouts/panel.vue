<template>

  <div class="uk-section uk-section-small">
    <div class="uk-container uk-container-large">
        <nav class="uk-navbar-container uk-position-relative uk-navbar-transparent" id="mainnav" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                <nuxt-link class="uk-navbar-item uk-logo" to="/"><span class="text-highlight">PrivadosVIP {{ $store.state.role }}</span></nuxt-link>
            </div>
        </nav>
      <nuxt></nuxt>
    </div>
  </div>

</template>
