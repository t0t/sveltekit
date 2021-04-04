<script>
    export let haserror = false
  </script>
  
  <style type="text/scss">
    .Alert {
      color: var(--black);
      padding: 20px;
      display: none;
      position: relative;
    }
    .haserror {
      margin-top: var(--basepadding);
      display: block;
      border-top-width: 2px;
      border-bottom-width: 2px;
      border-top-style: dashed;
      border-top-style: dashed;
      border-bottom-style: dashed;
      border-top-color: var(--destacado_light);
      border-bottom-color: var(--destacado_light);
      animation-name: show_error;
      animation-duration: .3s;
      animation-fill-mode: backwards;
      animation-iteration-count: 1;
    }
    @keyframes show_error {
      0% {
        transform: translateY(0px);
        opacity: 0;
      }
      50% {
        transform: translateY(10px);
        opacity: 1;
      }
    }
  </style>
  
  <div class="Alert" class:haserror={!haserror}>
    <slot />
  </div>