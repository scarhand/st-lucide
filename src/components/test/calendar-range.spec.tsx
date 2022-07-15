import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarRange } from '../calendar-range';
import { createElement, CalendarRange }  from 'lucide';

describe('icon-calendar-range', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarRange],
      html: `<icon-calendar-range></icon-calendar-range>`,
    });

    const svg = createElement(CalendarRange);

    expect(page.root).toEqualHtml(`
      <icon-calendar-range class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-range>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarRange],
      html: `<icon-calendar-range stroke="blue"></icon-calendar-range>`,
    });

    const svg = createElement(CalendarRange);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-range class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-range>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarRange],
      html: `<icon-calendar-range stroke-width="2"></icon-calendar-range>`,
    });

    const svg = createElement(CalendarRange);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-range class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-range>
    `);
  });
});
