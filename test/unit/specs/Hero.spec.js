import Vue from 'vue'
import Hello from '@/components/Hero'

describe('Hero.vue', () => {
  it('should have the correct root element', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.id)
      .to.be.equal('hero')
  })
})
