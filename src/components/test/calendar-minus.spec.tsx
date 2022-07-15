import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarMinus } from '../calendar-minus';
import { createElement, CalendarMinus }  from 'lucide';

describe('icon-calendar-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarMinus],
      html: `<icon-calendar-minus></icon-calendar-minus>`,
    });

    const svg = createElement(CalendarMinus);

    expect(page.root).toEqualHtml(`
      <icon-calendar-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarMinus],
      html: `<icon-calendar-minus stroke="blue"></icon-calendar-minus>`,
    });

    const svg = createElement(CalendarMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarMinus],
      html: `<icon-calendar-minus stroke-width="2"></icon-calendar-minus>`,
    });

    const svg = createElement(CalendarMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-minus>
    `);
  });
});
