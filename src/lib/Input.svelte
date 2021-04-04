<script>
    export let value = ''
    export let placeholder = '"...בראשית ברא אלהים"'
    const onInput = (e) => (value = e.target.value)
  </script>
  
  <style type="text/scss">
    *:focus {
      outline: none;
    }
    input {
      font-size: 2em;
      padding: var(--basepadding);
      border: none;
      background-color: #e5e5e5;
      &:focus-within {
        background-color: var(--white);
        color: var(--black);
        &::placeholder {
          color: transparent;
        }
      }
      border-top-left-radius: var(--basepadding);
      border-bottom-left-radius: var(--basepadding);
      &::placeholder {
          color: var(--secondary);
      }
    }
  </style>
  
  <input {value} {placeholder} type="" name="" on:input={onInput} />