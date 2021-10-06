import { shallowMount } from '@vue/test-utils';
import { createPastEvents } from '@/js/events.js';
import PastEvents from '@/components/PastEvents.vue';

describe('PastEvents.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PastEvents, {
      propsData: {
        pastEvents: createPastEvents(),
      },
    });
  });
  it('should display the correct number of past events', async () => {
    const events = wrapper.findAll('article').length;
    expect(events).toEqual(2);
  });
});
