import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarPlus } from '../calendar-plus';
import { createElement, CalendarPlus }  from 'lucide';

describe('icon-calendar-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarPlus],
      html: `<icon-calendar-plus></icon-calendar-plus>`,
    });

    const svg = createElement(CalendarPlus);

    expect(page.root).toEqualHtml(`
      <icon-calendar-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarPlus],
      html: `<icon-calendar-plus stroke="blue"></icon-calendar-plus>`,
    });

    const svg = createElement(CalendarPlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarPlus],
      html: `<icon-calendar-plus stroke-width="2"></icon-calendar-plus>`,
    });

    const svg = createElement(CalendarPlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-plus>
    `);
  });
});
