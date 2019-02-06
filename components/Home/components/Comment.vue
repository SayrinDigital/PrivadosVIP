<template>

  <article class="uk-comment uk-visible-toggle" tabindex="-1">
    <div class="uk-comment-header uk-position-relative">
      <div class="uk-grid-medium uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
          <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{{ comment.name }} - <span class="text-highlight">{{ comment.rate }}/5</span></a></h4>
          <!--<p class="uk-comment-meta uk-margin-remove-top"><a class="uk-link-reset" href="#">12 days ago</a></p>-->
        </div>
      </div>
    </div>
    <div class="uk-comment-body">
      <p>{{ comment.comment }}</p>
    </div>
  </article>

</template>

<script>
export default {
  props: ['comment']
}
</script>
