import Vue from 'vue'
import Nav from '@/components/Nav'

describe('About.vue', () => {
  it('should have the correct root element', () => {
    const Constructor = Vue.extend(Nav)
    const vm = new Constructor().$mount()
    expect(vm.$el.id)
    .to.be.equal('navigation')
  })
})
