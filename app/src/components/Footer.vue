<template>
  <nav class="footer-nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/event">Event</router-link></li>
      <li><router-link to="/mission">Mission</router-link></li>
      <li><router-link to="/post">Post</router-link></li>
      <li><router-link to="/gallery">Gallery</router-link></li>
    </ul>
    <div class="sns-box">
      <a href="https://twitter.com/codeforuniv" target="_blank" class="sns-link">
          <i class="fab twitter-icon"></i>
      </a>
      <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FCode-for-University-103516374334392&width=450&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId" width="450" height="80" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      <!-- <a href="https://github.com/" target="_blank" class="sns-link">
          <i class="fab github-icon"></i>
      </a> -->
      <!-- <a href="https://instagram.com/" target="_blank" class="sns-link">
          <i class="fab instagram-icon"></i>
      </a> -->
      <!-- <a href="https://qiita.com/" target="_blank" class="sns-link">
          <i class="fab qiita-icon"></i>
      </a> -->
      <!-- <a href="https://note.mu/" target="_blank" class="sns-link">
            <i class="fab note-icon"></i>
      </a> -->
    </div>
    <footer>
      <div class="copyright-box">©️ 2019 Code for University</div>
    </footer>
  </nav>
</template>

<style lang="sass" scoped>
li
  display: inline
  padding: 30px
  list-style: none

</style>