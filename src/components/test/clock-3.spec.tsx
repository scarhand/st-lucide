import { newSpecPage } from '@stencil/core/testing';
import { IconClock3 } from '../clock-3';
import { createElement, Clock3 }  from 'lucide';

describe('icon-clock-3', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock3],
      html: `<icon-clock-3></icon-clock-3>`,
    });

    const svg = createElement(Clock3);

    expect(page.root).toEqualHtml(`
      <icon-clock-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-3>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock3],
      html: `<icon-clock-3 stroke="blue"></icon-clock-3>`,
    });

    const svg = createElement(Clock3);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-3>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock3],
      html: `<icon-clock-3 stroke-width="2"></icon-clock-3>`,
    });

    const svg = createElement(Clock3);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-3>
    `);
  });
});
