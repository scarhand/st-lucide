import { newSpecPage } from '@stencil/core/testing';
import { IconPhone } from '../phone';
import { createElement, Phone }  from 'lucide';

describe('icon-phone', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPhone],
      html: `<icon-phone></icon-phone>`,
    });

    const svg = createElement(Phone);

    expect(page.root).toEqualHtml(`
      <icon-phone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-phone>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhone],
      html: `<icon-phone stroke="blue"></icon-phone>`,
    });

    const svg = createElement(Phone);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-phone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-phone>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPhone],
      html: `<icon-phone stroke-width="2"></icon-phone>`,
    });

    const svg = createElement(Phone);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-phone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-phone>
    `);
  });
});
