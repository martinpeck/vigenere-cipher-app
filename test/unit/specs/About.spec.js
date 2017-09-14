import Vue from 'vue'
import About from '@/components/About'

describe('About.vue', () => {
  it('should have the correct root element', () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()
    expect(vm.$el.id)
    .to.be.equal('about')
  })
})
