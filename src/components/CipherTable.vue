<template>
<div>
  <table class="table table-sm table-striped table-bordered">
  <thead>
    <tr >
      <th class="text-center" v-for="char in alphabetChars">{{ char }}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="letter in cleanedKey">
      <td class="text-center" v-for="char in generateTableData(letter)">{{ char }}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>

import { ALPHABET, cleanUpSecretKey, generateCeaserTable } from '@/model/Vignere'

export default {

  props: [
    'cipherKey'
  ],

  computed: {
    alphabetChars: function () {
      return ALPHABET
    },
    cleanedKey: function () {
      return cleanUpSecretKey(this.cipherKey)
    }
  },

  methods: {
    generateTableData: function (letter) {
      console.log(letter)
      let foo = generateCeaserTable(letter)
      console.log(foo)
      return foo
    }
  }
}

</script>
