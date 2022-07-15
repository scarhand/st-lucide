import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarX } from '../calendar-x';
import { createElement, CalendarX }  from 'lucide';

describe('icon-calendar-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarX],
      html: `<icon-calendar-x></icon-calendar-x>`,
    });

    const svg = createElement(CalendarX);

    expect(page.root).toEqualHtml(`
      <icon-calendar-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-x>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarX],
      html: `<icon-calendar-x stroke="blue"></icon-calendar-x>`,
    });

    const svg = createElement(CalendarX);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-x>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarX],
      html: `<icon-calendar-x stroke-width="2"></icon-calendar-x>`,
    });

    const svg = createElement(CalendarX);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-x>
    `);
  });
});
