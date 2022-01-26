import { newSpecPage } from '@stencil/core/testing';
import { IconClock4 } from '../clock-4';
import { createElement, Clock4 }  from 'lucide';

describe('icon-clock-4', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClock4],
      html: `<icon-clock-4></icon-clock-4>`,
    });

    const svg = createElement(Clock4);

    expect(page.root).toEqualHtml(`
      <icon-clock-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clock-4>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock4],
      html: `<icon-clock-4 stroke="blue"></icon-clock-4>`,
    });

    const svg = createElement(Clock4);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clock-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clock-4>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClock4],
      html: `<icon-clock-4 stroke-width="2"></icon-clock-4>`,
    });

    const svg = createElement(Clock4);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clock-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clock-4>
    `);
  });
});
