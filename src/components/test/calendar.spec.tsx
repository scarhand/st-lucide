import { newSpecPage } from '@stencil/core/testing';
import { IconCalendar } from '../calendar';
import { createElement, Calendar }  from 'lucide';

describe('icon-calendar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalendar],
      html: `<icon-calendar></icon-calendar>`,
    });

    const svg = createElement(Calendar);

    expect(page.root).toEqualHtml(`
      <icon-calendar class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calendar>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendar],
      html: `<icon-calendar stroke="blue"></icon-calendar>`,
    });

    const svg = createElement(Calendar);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calendar class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calendar>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalendar],
      html: `<icon-calendar stroke-width="2"></icon-calendar>`,
    });

    const svg = createElement(Calendar);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calendar class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calendar>
    `);
  });
});
