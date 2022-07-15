import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarCheck } from '../calendar-check';
import { createElement, CalendarCheck }  from 'lucide';

describe('icon-calendar-check', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarCheck],
      html: `<icon-calendar-check></icon-calendar-check>`,
    });

    const svg = createElement(CalendarCheck);

    expect(page.root).toEqualHtml(`
      <icon-calendar-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-check>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarCheck],
      html: `<icon-calendar-check stroke="blue"></icon-calendar-check>`,
    });

    const svg = createElement(CalendarCheck);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-check>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarCheck],
      html: `<icon-calendar-check stroke-width="2"></icon-calendar-check>`,
    });

    const svg = createElement(CalendarCheck);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-check>
    `);
  });
});
