import { newSpecPage } from '@stencil/core/testing';
import { IconHaze } from '../haze';
import { createElement, Haze }  from 'lucide';

describe('icon-haze', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHaze],
      html: `<icon-haze></icon-haze>`,
    });

    const svg = createElement(Haze);

    expect(page.root).toEqualHtml(`
      <icon-haze class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-haze>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHaze],
      html: `<icon-haze stroke="blue"></icon-haze>`,
    });

    const svg = createElement(Haze);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-haze class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-haze>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHaze],
      html: `<icon-haze stroke-width="2"></icon-haze>`,
    });

    const svg = createElement(Haze);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-haze class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-haze>
    `);
  });
});
