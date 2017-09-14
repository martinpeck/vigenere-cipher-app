<template>
  <div id="cipher" class="container">

    <p class="lead">The Vigenere Cipher uses a series of Ceaser Ciphers to encode each character of your plain text message.</p>
    <p>You need the following:</p>
    <ol>
      <li>A key that will be shared with the recipient of your encoded message</li>
      <li>Your plain text (obviously!)</li>
    </ol>
    <p>Once you've supplied your secret key, your encoded text will appear as you type your plain text.</p>
    <p>
      <em>If you want to know the details of how the Vigenere Cipher works, visit the
        <a href="#">About</a> page of this site.</em>
    </p>

    <div class="card">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">Encode Plain Text</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Decode Cipher Text</a>
          </li>
        </ul>
      </div>

      <form class="card-body">
        <div class="form-group">
          <label for="secretKey">Your secret key</label>
          <input type="text" class="form-control" id="secretKey" placeholder="Enter your secret key here">
        </div>

        <div class="form-group">
          <label for="plainText">Your plain text</label>
          <textarea class="form-control" id="plainText" rows="4"></textarea>
        </div>

        <div class="form-group">
          <label for="cipherText">Your cipher text</label>
          <textarea class="form-control" id="cipherText" rows="4" readonly></textarea>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
