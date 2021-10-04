import { shallowMount } from '@vue/test-utils';
import Menu from '@/components/Menu.vue';

describe('Events.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Menu, {
      propsData: {
        joined: [],
      },
    });
  });
  it('should display the number of events joined', async () => {
    await wrapper.setProps({ joined: [0, 1] });
    const count = wrapper.find('.count');
    expect(count.text()).toEqual('2');
  });
});
