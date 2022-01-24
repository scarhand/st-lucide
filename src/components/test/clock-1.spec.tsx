import { newSpecPage } from '@stencil/core/testing';
import { IconClock1 } from '../clock-1';
import { createElement, Clock1 }  from 'lucide';

describe('icon-clock-1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock1],
      html: `<icon-clock-1></icon-clock-1>`,
    });

    const svg = createElement(Clock1);

    expect(page.root).toEqualHtml(`
      <icon-clock-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-1>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock1],
      html: `<icon-clock-1 stroke="blue"></icon-clock-1>`,
    });

    const svg = createElement(Clock1);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-1>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock1],
      html: `<icon-clock-1 stroke-width="2"></icon-clock-1>`,
    });

    const svg = createElement(Clock1);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-1>
    `);
  });
});
