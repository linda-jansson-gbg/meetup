import { shallowMount } from '@vue/test-utils';
import { createEvents } from '@/js/events.js';
import Events from '@/components/Events.vue';

describe('Events.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Events, {
      propsData: {
        events: createEvents(),
      },
    });
  });
  it('renders a article for every event', () => {
    const events = wrapper.findAll('article').length;
    expect(events).toEqual(11);
  });
});
