function vignereImpl (text, key, type) {
  return text.trim().toUpperCase()
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
