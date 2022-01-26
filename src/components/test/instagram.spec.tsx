import { newSpecPage } from '@stencil/core/testing';
import { IconInstagram } from '../instagram';
import { createElement, Instagram }  from 'lucide';

describe('icon-instagram', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconInstagram],
      html: `<icon-instagram></icon-instagram>`,
    });

    const svg = createElement(Instagram);

    expect(page.root).toEqualHtml(`
      <icon-instagram class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-instagram>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconInstagram],
      html: `<icon-instagram stroke="blue"></icon-instagram>`,
    });

    const svg = createElement(Instagram);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-instagram class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-instagram>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconInstagram],
      html: `<icon-instagram stroke-width="2"></icon-instagram>`,
    });

    const svg = createElement(Instagram);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-instagram class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-instagram>
    `);
  });
});
