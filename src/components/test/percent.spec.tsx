import { newSpecPage } from '@stencil/core/testing';
import { IconPercent } from '../percent';
import { createElement, Percent }  from 'lucide';

describe('icon-percent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPercent],
      html: `<icon-percent></icon-percent>`,
    });

    const svg = createElement(Percent);

    expect(page.root).toEqualHtml(`
      <icon-percent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-percent>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPercent],
      html: `<icon-percent stroke="blue"></icon-percent>`,
    });

    const svg = createElement(Percent);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-percent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-percent>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPercent],
      html: `<icon-percent stroke-width="2"></icon-percent>`,
    });

    const svg = createElement(Percent);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-percent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-percent>
    `);
  });
});
