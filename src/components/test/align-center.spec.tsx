import { newSpecPage } from '@stencil/core/testing';
import { IconAlignCenter } from '../align-center';
import { createElement, AlignCenter }  from 'lucide';

describe('icon-align-center', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignCenter],
      html: `<icon-align-center></icon-align-center>`,
    });

    const svg = createElement(AlignCenter);

    expect(page.root).toEqualHtml(`
      <icon-align-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-center>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignCenter],
      html: `<icon-align-center stroke="blue"></icon-align-center>`,
    });

    const svg = createElement(AlignCenter);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-center>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignCenter],
      html: `<icon-align-center stroke-width="2"></icon-align-center>`,
    });

    const svg = createElement(AlignCenter);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-center>
    `);
  });
});
