import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarDays } from '../calendar-days';
import { createElement, CalendarDays }  from 'lucide';

describe('icon-calendar-days', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarDays],
      html: `<icon-calendar-days></icon-calendar-days>`,
    });

    const svg = createElement(CalendarDays);

    expect(page.root).toEqualHtml(`
      <icon-calendar-days class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-days>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarDays],
      html: `<icon-calendar-days stroke="blue"></icon-calendar-days>`,
    });

    const svg = createElement(CalendarDays);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-days class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-days>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarDays],
      html: `<icon-calendar-days stroke-width="2"></icon-calendar-days>`,
    });

    const svg = createElement(CalendarDays);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-days class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-days>
    `);
  });
});
