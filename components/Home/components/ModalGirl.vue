<template>
<div class="profile-card-container uk-box-shadow-large">
  <div class="header">
    <div uk-grid>
      <div class="uk-width-medium uk-position-relative">

      </div>
      <div class="uk-width-expand">
        <div>
          <div class="uk-card-body">
            <div class="uk-child-width-1-4" uk-grid>
              <div>
                <div class="girl-card-container">
                  <h4>{{ girl.name }}</h4>
                  <p class="tag"><span class="uk-margin-small-right" uk-icon="icon: bolt;"></span>Vip</p>
                </div>
              </div>
              <div>
                <div>
                  <p><span class="uk-margin-small-right" uk-icon="icon: location;"></span> Providencia</p>
                  <p><span class="uk-margin-small-right" uk-icon="icon: phone;"></span> +569 4044 4172</p>
                </div>
              </div>
              <div>
                <div>
                  <p><span class="uk-margin-small-right" uk-icon="icon: calendar;"></span> 25 años</p>
                  <p><span class="uk-margin-small-right" uk-icon="icon: happy;"></span> 54 kgs. - 1.70 mts.</p>
                </div>
              </div>
              <div>
                <div class="uk-text-right">
                  <a class="uk-display-block uk-margin-bottom"><span class="uk-icon uk-icon-button" uk-icon="icon: phone"></span></a>
                  <a class=""><span class="uk-icon uk-icon-button" uk-icon="icon: whatsapp"></span></a>
                </div>
              </div>
            </div>
          </div>


          <!--Switch-->


        </div>
      </div>
    </div>
  </div>
  <div class="body uk-card-body">

    <div uk-grid>
      <div class="uk-width-medium uk-position-relative">
        <div class="photo-container uk-border-rounded uk-background-cover" uk-img :data-src="girl.cover"></div>
      </div>
      <div class="uk-width-expand">

        <div class="info-container">



          <ul uk-tab="animation: uk-animation-fade;" class="uk-margin-remove-bottom">
            <li><a href="#">Información</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Calificaciones</a></li>
          </ul>



          <ul class="uk-switcher switcher-container uk-margin">
            <li>
              <div>
                <h4>Acerca De Mi</h4>
                <p class="uk-width-large">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and
                  scrambled it to make a type specimen book.</p>

              </div>
            </li>
            <li>
              <h4>Servicios</h4>
              <table class="uk-table uk-table-divider">
                <thead>
                  <tr>
                    <th>Incluidos</th>
                    <th>Especiales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <div>
                <div class="uk-clearfix">
                  <h4 class="uk-margin-bottom uk-display-inline uk-float-left">Calificaciones</h4>
                  <div class="uk-float-right">
                    <div>
                      <button class="uk-button red-button uk-float-right"><span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span> Calificar</button>
                      <div class="dropdown-style-a uk-border-rounded uk-box-shadow-hover-medium uk-width-large" uk-dropdown="mode: click">
                        <div>
                          <form class="uk-grid-small" uk-grid>
                            <div class="uk-width-1-1">
                              <input class="uk-input" type="text" placeholder="Nombre">
                            </div>
                            <div class="uk-width-1-1">
                              <textarea class="uk-textarea" rows="4" type="text" placeholder="Comentario"></textarea>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <ul class="uk-comment-list uk-margin-left">
                  <li>
                    <article class="uk-comment uk-visible-toggle" tabindex="-1">
                      <div class="uk-comment-header uk-position-relative">
                        <div class="uk-grid-medium uk-flex-middle" uk-grid>
                          <div class="uk-width-expand">
                            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">Author</a></h4>
                            <p class="uk-comment-meta uk-margin-remove-top"><a class="uk-link-reset" href="#">12 days ago</a></p>
                          </div>
                        </div>
                      </div>
                      <div class="uk-comment-body">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Gallery Slider-->

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

      <ul class="uk-slider-items uk-child-width-1-4 uk-grid-small uk-grid">
        <li>
          <img class="uk-border-rounded" src="https://images.unsplash.com/photo-1525672892528-eb2eead4effc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
        </li>
        <li>
          <img class="uk-border-rounded" src="https://images.unsplash.com/photo-1525672892528-eb2eead4effc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
        </li>
        <li>
          <img class="uk-border-rounded" src="https://images.unsplash.com/photo-1525672892528-eb2eead4effc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
        </li>
        <li>
          <img class="uk-border-rounded" src="https://images.unsplash.com/photo-1525672892528-eb2eead4effc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
        </li>
        <li>
          <img class="uk-border-rounded" src="https://images.unsplash.com/photo-1525672892528-eb2eead4effc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
        </li>
        <li>
          <img class="uk-border-rounded" src="https://images.unsplash.com/photo-1525672892528-eb2eead4effc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
        </li>

      </ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>

    <!-- End Gallery Slider-->

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['girl']
}
</script>

<style lang="css">
</style>
