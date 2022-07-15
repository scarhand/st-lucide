import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarX2 } from '../calendar-x-2';
import { createElement, CalendarX2 }  from 'lucide';

describe('icon-calendar-x-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarX2],
      html: `<icon-calendar-x-2></icon-calendar-x-2>`,
    });

    const svg = createElement(CalendarX2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-x-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-x-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarX2],
      html: `<icon-calendar-x-2 stroke="blue"></icon-calendar-x-2>`,
    });

    const svg = createElement(CalendarX2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-x-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-x-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarX2],
      html: `<icon-calendar-x-2 stroke-width="2"></icon-calendar-x-2>`,
    });

    const svg = createElement(CalendarX2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-x-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-x-2>
    `);
  });
});
