import { newSpecPage } from '@stencil/core/testing';
import { IconClock5 } from '../clock-5';
import { createElement, Clock5 }  from 'lucide';

describe('icon-clock-5', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock5],
      html: `<icon-clock-5></icon-clock-5>`,
    });

    const svg = createElement(Clock5);

    expect(page.root).toEqualHtml(`
      <icon-clock-5 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-5>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock5],
      html: `<icon-clock-5 stroke="blue"></icon-clock-5>`,
    });

    const svg = createElement(Clock5);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-5 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-5>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock5],
      html: `<icon-clock-5 stroke-width="2"></icon-clock-5>`,
    });

    const svg = createElement(Clock5);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-5 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-5>
    `);
  });
});
