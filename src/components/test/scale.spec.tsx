import { newSpecPage } from '@stencil/core/testing';
import { IconScale } from '../scale';
import { createElement, Scale }  from 'lucide';

describe('icon-scale', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconScale],
      html: `<icon-scale></icon-scale>`,
    });

    const svg = createElement(Scale);

    expect(page.root).toEqualHtml(`
      <icon-scale class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-scale>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScale],
      html: `<icon-scale stroke="blue"></icon-scale>`,
    });

    const svg = createElement(Scale);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-scale class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-scale>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScale],
      html: `<icon-scale stroke-width="2"></icon-scale>`,
    });

    const svg = createElement(Scale);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-scale class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-scale>
    `);
  });
});
