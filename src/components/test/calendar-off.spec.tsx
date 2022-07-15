import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarOff } from '../calendar-off';
import { createElement, CalendarOff }  from 'lucide';

describe('icon-calendar-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarOff],
      html: `<icon-calendar-off></icon-calendar-off>`,
    });

    const svg = createElement(CalendarOff);

    expect(page.root).toEqualHtml(`
      <icon-calendar-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarOff],
      html: `<icon-calendar-off stroke="blue"></icon-calendar-off>`,
    });

    const svg = createElement(CalendarOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarOff],
      html: `<icon-calendar-off stroke-width="2"></icon-calendar-off>`,
    });

    const svg = createElement(CalendarOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-off>
    `);
  });
});
