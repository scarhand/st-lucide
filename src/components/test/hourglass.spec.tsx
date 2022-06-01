import { newSpecPage } from '@stencil/core/testing';
import { IconHourglass } from '../hourglass';
import { createElement, Hourglass }  from 'lucide';

describe('icon-hourglass', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHourglass],
      html: `<icon-hourglass></icon-hourglass>`,
    });

    const svg = createElement(Hourglass);

    expect(page.root).toEqualHtml(`
      <icon-hourglass class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-hourglass>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHourglass],
      html: `<icon-hourglass stroke="blue"></icon-hourglass>`,
    });

    const svg = createElement(Hourglass);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-hourglass class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-hourglass>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHourglass],
      html: `<icon-hourglass stroke-width="2"></icon-hourglass>`,
    });

    const svg = createElement(Hourglass);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-hourglass class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-hourglass>
    `);
  });
});
