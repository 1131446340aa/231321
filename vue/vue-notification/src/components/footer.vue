<template>
  <div class="footer">
    footer
  </div>
</template>

<script>
import { open, close } from './notificat'
export default {
  mounted () {
    setTimeout(() => {
      open({
        title: 'title1',
        content: 'content1'
      })
      open({
        title: 'title2',
        content: 'content2'
      })
    }, 3000)
    setTimeout(() => {
      close()
    }, 5000)
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
}
</style>