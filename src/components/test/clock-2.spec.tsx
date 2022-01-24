import { newSpecPage } from '@stencil/core/testing';
import { IconClock2 } from '../clock-2';
import { createElement, Clock2 }  from 'lucide';

describe('icon-clock-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock2],
      html: `<icon-clock-2></icon-clock-2>`,
    });

    const svg = createElement(Clock2);

    expect(page.root).toEqualHtml(`
      <icon-clock-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock2],
      html: `<icon-clock-2 stroke="blue"></icon-clock-2>`,
    });

    const svg = createElement(Clock2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock2],
      html: `<icon-clock-2 stroke-width="2"></icon-clock-2>`,
    });

    const svg = createElement(Clock2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-2>
    `);
  });
});
