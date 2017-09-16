const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function processKey (key) {
  var processedKey = ''

  key = key.trim().toUpperCase()

  for (const char of key) {
    if (ALPHABET.search(char) !== -1) {
      processedKey += char
    }
  }

  return processedKey
}

function vignereImpl (text = '', key = '', type = encodeDecodeType.ENCODE) {
  var transformedText = ''
  var keyCounter = 0

  text = text.trim().toUpperCase()
  key = processKey(key)

  if (key === '') {
    return text // the key is empty, so return the input text
  }

  for (const char of text) {
    const locationChar = ALPHABET.search(char)

    if (locationChar >= 0) {
      const keyChar = key[keyCounter % key.length]
      var locationKeyChar = ALPHABET.search(keyChar)

      var transformedChar

      if (type === encodeDecodeType.ENCODE) {
        transformedChar = ALPHABET[(locationChar + locationKeyChar) % ALPHABET.length]
      } else {
        transformedChar = ALPHABET[(locationChar - locationKeyChar) % ALPHABET.length]
      }

      transformedText += transformedChar

      keyCounter++
    } else {
      transformedText += char
    }
  }

  return transformedText
}

const encodeDecodeType = {
  ENCODE: 0,
  DECODE: 1
}

export function encode (plaintext, key) {
  return vignereImpl(plaintext, key, encodeDecodeType.ENCODE)
}

export function decode (ciphertext, key) {
  return vignereImpl(ciphertext, key, encodeDecodeType.DECODE)
}
