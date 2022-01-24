import { newSpecPage } from '@stencil/core/testing';
import { IconClock9 } from '../clock-9';
import { createElement, Clock9 }  from 'lucide';

describe('icon-clock-9', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock9],
      html: `<icon-clock-9></icon-clock-9>`,
    });

    const svg = createElement(Clock9);

    expect(page.root).toEqualHtml(`
      <icon-clock-9 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-9>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock9],
      html: `<icon-clock-9 stroke="blue"></icon-clock-9>`,
    });

    const svg = createElement(Clock9);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-9 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-9>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock9],
      html: `<icon-clock-9 stroke-width="2"></icon-clock-9>`,
    });

    const svg = createElement(Clock9);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-9 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-9>
    `);
  });
});
