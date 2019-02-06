<template>
<div>
  <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: active-sticky; cls-inactive: uk-navbar-transparent; top: 200">
    <nav class="uk-navbar-container uk-position-relative uk-navbar-transparent" id="mainnav" uk-navbar="mode: click">

      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="/">Privados VIP</a>
      </div>

      <div class="uk-navbar-right">

        <div class="uk-navbar-item  uk-visible@s">
          <div>
            <a class="uk-navbar-toggle" uk-search-icon href="#"></a>
            <div class="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
              <form class="uk-search uk-search-navbar uk-width-1-1">
                <input class="uk-search-input" type="search" placeholder="Buscar..." autofocus>
              </form>
            </div>
          </div>
        </div>

        <div class="uk-navbar-item">
          <nuxt-link to="/" class="uk-button-text">Inicio</nuxt-link>
        </div>

        <div class="uk-navbar-item">
          <nuxt-link to="/chicas" class="uk-button-text">Nuestras Chicas</nuxt-link>
        </div>

        <div class="uk-navbar-item">
          <nuxt-link to="/categorias" class="uk-button-text">Categorías</nuxt-link>
        </div>

        <div class="uk-navbar-item">
          <button class="uk-button red-button"> Publícate Aquí </button>
        </div>

      </div>

    </nav>
  </div>
  <nuxt />

  <footer class="uk-background-cover uk-position-relative" uk-img data-src="https://images.unsplash.com/photo-1534125804993-544a1148a064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80">
    <div class="gradient-overlay uk-position-cover"></div>
    <div class="uk-container uk-container-large uk-position-relative">
      <div class="uk-section uk-section-large">
        <div uk-grid class="uk-grid-large uk-child-width-1-2@s">
          <div>
            <div>
              <h3 class="text-highlight">Privados VIP</h3>
              <p class="uk-width-large@m light">
                Portal para visitantes y clientes anunciantes mayores de 18 años.
                PrivadosVIP.cl NO ES UNA AGENCIA y no se responsabiliza por el servicio de las escorts
                Todas las fotografías son certificadas y verificadas como reales antes de ser publicadas.
                Nuestro portal se reserva el derecho de publicación.
                Privados VIP.cl presta el servicio de publicación y asesoría gráfica.</p>
            </div>
          </div>
          <div>
            <div>
              <div class="uk-child-width-expand@s" uk-grid>

                <div>
                  <h4>Categorías</h4>
                  <ul class="uk-list uk-list-large">
                    <li><a href="">Category</a></li>
                    <li><a href="">Category</a></li>
                    <li><a href="">Category</a></li>
                  </ul>
                </div>

                <div>
                  <h4>Empresa</h4>
                  <ul class="uk-list uk-list-large">
                    <li><a href="">Category</a></li>
                    <li><a href="">Category</a></li>
                    <li><a href="">Category</a></li>
                  </ul>
                </div>

                <div>
                  <h4>Links de Interés</h4>
                  <ul class="uk-list uk-list-large">
                    <li><a href="">Category</a></li>
                    <li><a href="">Category</a></li>
                    <li><a href="">Category</a></li>
                  </ul>
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </footer>

</div>
</template>
