import Vue from 'vue'
import Footer from '@/components/Footer'

describe('Footer.vue', () => {
  it('should have the correct root element', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()
    expect(vm.$el.id)
    .to.be.equal('footer')
  })
})
