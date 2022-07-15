import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarSearch } from '../calendar-search';
import { createElement, CalendarSearch }  from 'lucide';

describe('icon-calendar-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarSearch],
      html: `<icon-calendar-search></icon-calendar-search>`,
    });

    const svg = createElement(CalendarSearch);

    expect(page.root).toEqualHtml(`
      <icon-calendar-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-search>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarSearch],
      html: `<icon-calendar-search stroke="blue"></icon-calendar-search>`,
    });

    const svg = createElement(CalendarSearch);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-search>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarSearch],
      html: `<icon-calendar-search stroke-width="2"></icon-calendar-search>`,
    });

    const svg = createElement(CalendarSearch);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-search>
    `);
  });
});
