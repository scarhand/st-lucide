import { newSpecPage } from '@stencil/core/testing';
import { IconTimer } from '../timer';
import { createElement, Timer }  from 'lucide';

describe('icon-timer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTimer],
      html: `<icon-timer></icon-timer>`,
    });

    const svg = createElement(Timer);

    expect(page.root).toEqualHtml(`
      <icon-timer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-timer>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTimer],
      html: `<icon-timer stroke="blue"></icon-timer>`,
    });

    const svg = createElement(Timer);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-timer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-timer>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTimer],
      html: `<icon-timer stroke-width="2"></icon-timer>`,
    });

    const svg = createElement(Timer);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-timer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-timer>
    `);
  });
});
