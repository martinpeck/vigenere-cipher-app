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
            <a class="nav-link" v-bind:class="{ active: encodeMode}" @click.prevent="showEncode" href="#">Encode Plain Text</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-bind:class="{ active: decodeMode}" @click.prevent="showDecode" href="#">Decode Cipher Text</a>
          </li>
        </ul>
      </div>

      <div class="card-body">
        <div class="form-group">
          <label for="secretKey">Your secret key</label>
          <input v-model="secret_key" type="text" class="form-control" id="secretKey" placeholder="Enter your secret key here">
        </div>

        <div v-if="mode==='encode'">
          <div class="form-group">
            <label for="plainText">Your plain text</label>
            <textarea v-model="plain_text_to_encode" class="form-control" id="plainText" rows="4"></textarea>
          </div>

          <div class="form-group">
            <label for="cipherText">Your cipher text</label>
            <textarea v-model="computed_cipher_text" class="form-control" id="cipherText" rows="4" readonly></textarea>
          </div>
        </div>

        <div v-if="mode==='decode'">
          <div class="form-group">
            <label for="plainText">Your cipher text</label>
            <textarea v-model="cipher_text_to_decode" class="form-control" id="plainText" rows="4"></textarea>
          </div>

          <div class="form-group">
            <label for="cipherText">Your plain text</label>
            <textarea v-model="computed_plain_text" class="form-control" id="cipherText" rows="4" readonly></textarea>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import {encode, decode} from '@/model/Vignere'

export default {
  data: function () {
    return {
      plain_text_to_encode: '',
      cipher_text_to_decode: '',
      secret_key: '',
      mode: 'encode'
    }
  },
  methods: {
    showEncode: function () {
      console.log('encoding')
      this.mode = 'encode'
    },
    showDecode: function () {
      console.log('decoding')
      this.mode = 'decode'
    }
  },
  computed: {
    computed_cipher_text: function () {
      if (this.secret_key) {
        return encode(this.plain_text_to_encode, this.secret_key)
      } else {
        return 'You need to provide a secret key'
      }
    },
    computed_plain_text: function () {
      if (this.secret_key) {
        return decode(this.cipher_text_to_decode, this.secret_key)
      } else {
        return 'You need to provide a secret key'
      }
    },
    encodeMode: function () {
      return this.mode === 'encode'
    },
    decodeMode: function () {
      return this.mode === 'decode'
    }
  }
}
</script>
