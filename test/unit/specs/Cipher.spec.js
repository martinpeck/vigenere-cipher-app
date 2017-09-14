import Vue from 'vue'
import Cipher from '@/components/Cipher'

describe('Cipher.vue', () => {
  it('should have the correct root element', () => {
    const Constructor = Vue.extend(Cipher)
    const vm = new Constructor().$mount()
    expect(vm.$el.id)
    .to.be.equal('cipher')
  })
})
