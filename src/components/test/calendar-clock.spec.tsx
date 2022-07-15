import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarClock } from '../calendar-clock';
import { createElement, CalendarClock }  from 'lucide';

describe('icon-calendar-clock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarClock],
      html: `<icon-calendar-clock></icon-calendar-clock>`,
    });

    const svg = createElement(CalendarClock);

    expect(page.root).toEqualHtml(`
      <icon-calendar-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-clock>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarClock],
      html: `<icon-calendar-clock stroke="blue"></icon-calendar-clock>`,
    });

    const svg = createElement(CalendarClock);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-clock>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarClock],
      html: `<icon-calendar-clock stroke-width="2"></icon-calendar-clock>`,
    });

    const svg = createElement(CalendarClock);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-clock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-clock>
    `);
  });
});
