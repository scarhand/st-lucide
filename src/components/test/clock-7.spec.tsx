import { newSpecPage } from '@stencil/core/testing';
import { IconClock7 } from '../clock-7';
import { createElement, Clock7 }  from 'lucide';

describe('icon-clock-7', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock7],
      html: `<icon-clock-7></icon-clock-7>`,
    });

    const svg = createElement(Clock7);

    expect(page.root).toEqualHtml(`
      <icon-clock-7 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-7>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock7],
      html: `<icon-clock-7 stroke="blue"></icon-clock-7>`,
    });

    const svg = createElement(Clock7);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-7 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-7>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock7],
      html: `<icon-clock-7 stroke-width="2"></icon-clock-7>`,
    });

    const svg = createElement(Clock7);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-7 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-7>
    `);
  });
});
