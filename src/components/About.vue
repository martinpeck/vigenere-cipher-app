<template>
  <div id="about" class="container">
    <h2>About the Vigenère Cipher</h2>
    <p>
      The Vigenère cipher is a way to encrypt alphabetic text. It uses series of Caesar ciphers, picked based up the letters of a secret keyword.
    </p>
    <p>
      A regular Caesar cipher shifts the alphabet so that each letter in your plain text is substituted with a letter from a shifted alphabet.
      Using the secret keyword, the Vigenère cipher strings together one Ceaser cipher for each letter in the secret key, and uses each of these
      Ceaser ciphers, in turn, to encode each character of your plain text.
    </p>
    <p>
      You can read a <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher#Description" target="_blank">full description of the Vigenère Cipher on Wikipedia</a>.
    </p>

    <h2>About this Application</h2>
    <p>
      This application was written using Vue.js. If you want to see the source code you can <a href="https://github.com/martinpeck/Vigenère-cipher-app">find it on GitHub</a>.
      If you spot any issues, or have any suggestions, please feel free to create an issue.
    </p>

    <h2>About the Author</h2>
    <p>This was written by <a href="http://martinpeck.com">Martin Peck</a>. You can find me here...</p>
    <ul>
      <li><a href="https://github.com/martinpeck">GitHub</a></li>
      <li><a href="http://martinpeck.com">martinpeck.com</a></li>
    </ul>

    <h2>Vigenère Cipher Implementation Notes</h2>
    <p>The following are notes related to the implementation of the Vigenère Cipher within this application.</p>
    <ul>
      <li>All input text is converted to UPPERCASE before being processed.
        <li>Output text (encoded cipher text and decoded plain text) is therefore presented in UPPERCASE</li>
      </li>
      <li>Encoding and decoding only occurs for characters present in the 26 characters of the English alphabet (i.e. "ABCDEFGHIJKLMNOPQRSTUVWXYZ").
        Any characters not present within this alphabet are skipped and not encoded or decoded, and therefore appear in the output text.
        <li>Characters within the secret key that are not within this alphabet are not used (i.e. ignored). A secret key of "I LOVE CHEESE!" is treated as "ILOVECHEESE"</li>
      </li>
      <li>Whitespace (spaces, tabs etc) are trimmed from the start and end of input text. i.e. "   PLEASE ENCODE ME  " is treated as "PLEASE ENCODE ME"</li>
    </ul>


  </div>
</template>
