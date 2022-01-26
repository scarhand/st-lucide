import { newSpecPage } from '@stencil/core/testing';
import { IconClock8 } from '../clock-8';
import { createElement, Clock8 }  from 'lucide';

describe('icon-clock-8', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock8],
      html: `<icon-clock-8></icon-clock-8>`,
    });

    const svg = createElement(Clock8);

    expect(page.root).toEqualHtml(`
      <icon-clock-8 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-8>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock8],
      html: `<icon-clock-8 stroke="blue"></icon-clock-8>`,
    });

    const svg = createElement(Clock8);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-8 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-8>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock8],
      html: `<icon-clock-8 stroke-width="2"></icon-clock-8>`,
    });

    const svg = createElement(Clock8);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-8 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-8>
    `);
  });
});
