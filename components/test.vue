<template>
  <div class="testing">
    <h1 class="title">Contact</h1>
    <div class="content">
      <form name="contact" action="" method="post" netlify>
        <input type="hidden" name="contact" value="contact" />
        <label class="form-label" for="name">Name:</label>
        <input class="form-field" name="name" id="name" />
        <label class="form-label" for="email">Email:</label>
        <input class="form-field" name="email" id="email" />
        <label class="form-label" for="message">Message:</label>
        <textarea class="form-field" name="message" id="message"></textarea>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
</style>