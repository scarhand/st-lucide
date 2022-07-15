import { newSpecPage } from '@stencil/core/testing';
import { IconCalendarHeart } from '../calendar-heart';
import { createElement, CalendarHeart }  from 'lucide';

describe('icon-calendar-heart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendarHeart],
      html: `<icon-calendar-heart></icon-calendar-heart>`,
    });

    const svg = createElement(CalendarHeart);

    expect(page.root).toEqualHtml(`
      <icon-calendar-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar-heart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarHeart],
      html: `<icon-calendar-heart stroke="blue"></icon-calendar-heart>`,
    });

    const svg = createElement(CalendarHeart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar-heart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendarHeart],
      html: `<icon-calendar-heart stroke-width="2"></icon-calendar-heart>`,
    });

    const svg = createElement(CalendarHeart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar-heart>
    `);
  });
});
