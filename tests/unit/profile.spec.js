import { shallowMount } from '@vue/test-utils';
import Profile from '@/components/Profile.vue';

describe('Profile.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Profile, {
      propsData: {
        userEvents: [
          {
            id: 0,
            company: 'Volvo',
            name: 'Välkomna Linda',
            description:
              'Linda gör sin LIA hos oss från 22 November. Kom och fira in henne på kontoret!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
            date: 1.009,
            time: '08:00',
            location: 'Gatan',
            img: '../assets/volvo.png',
          },
          {
            id: 1,
            company: 'Queenslab',
            name: 'Bugg för nybörjare',
            description:
              'Kalasigt värre blir det.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad fugit fuga aliquid!',
            date: 1.003,
            time: '11:40',
            location: 'Gatan',
            img: '../assets/queenslab.jpeg',
          },
        ],
      },
    });
  });
  it('should display the events joined', async () => {
    const events = wrapper.findAll('article').length;
    expect(events).toEqual(2);
  });
  it('should p tag with no events if no events are joined', async () => {
    await wrapper.setProps({ userEvents: [] });
    const message = wrapper.find('p');
    expect(message.text()).toBe('No events');
  });
  it('should emit to remove the event if button is clicked', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.emitted('decline')).toBeTruthy();
  });
});
