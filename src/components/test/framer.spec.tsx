import { newSpecPage } from '@stencil/core/testing';
import { IconFramer } from '../framer';
import { createElement, Framer }  from 'lucide';

describe('icon-framer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFramer],
      html: `<icon-framer></icon-framer>`,
    });

    const svg = createElement(Framer);

    expect(page.root).toEqualHtml(`
      <icon-framer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-framer>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFramer],
      html: `<icon-framer stroke="blue"></icon-framer>`,
    });

    const svg = createElement(Framer);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-framer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-framer>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFramer],
      html: `<icon-framer stroke-width="2"></icon-framer>`,
    });

    const svg = createElement(Framer);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-framer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-framer>
    `);
  });
});
