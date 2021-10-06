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
    expect(events).toEqual(12);
  });
  it('should emit an event when the join button is clicked', async () => {
    const button = wrapper.find('.join-btn');
    await button.trigger('click');
    expect(wrapper.emitted('join')).toBeTruthy();
  });
  it('should display Decline on the button if the event is joined', async () => {
    await wrapper.setProps({ joined: [0] });
    const button = wrapper.find('.join-btn');
    expect(button.text()).toBe('Decline');
  });
  it('should emit an event when the sort button is clicked', async () => {
    const button = wrapper.find('.sort-btn');
    await button.trigger('click');
    expect(wrapper.emitted('sort')).toBeTruthy();
  });
  it('should sort the events by location when place button is clicked', async () => {
    // const button = wrapper.find('.place');
    // await button.trigger('click');
    // const events = await wrapper.findAll('article');
    // const firstEvent = events.at(0);
    // expect(firstEvent.text()).toContain('Amiralitetsgatan');
  });
});
