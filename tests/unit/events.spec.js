import { shallowMount } from '@vue/test-utils';
import { createEvents } from '@/js/events.js';
import Events from '@/components/Events.vue';

describe('Events.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Events, {
      propsData: {
        events: createEvents(),
        joined: [],
      },
    });
  });
  it('renders a article for every event', () => {
    const events = wrapper.findAll('article').length;
    expect(events).toEqual(11);
  });
  it('should emit an event when the join button is clicked', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.emitted('join')).toBeTruthy();
  });
  it('should display Decline on the button if the event is joined', async () => {
    await wrapper.setProps({ joined: [0] });
    const button = wrapper.find('button');
    expect(button.text()).toBe('Decline');
  });
});
