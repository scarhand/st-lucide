import { newSpecPage } from '@stencil/core/testing';
import { IconBox } from '../box';
import { createElement, Box }  from 'lucide';

describe('icon-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBox],
      html: `<icon-box></icon-box>`,
    });

    const svg = createElement(Box);

    expect(page.root).toEqualHtml(`
      <icon-box class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-box>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBox],
      html: `<icon-box stroke="blue"></icon-box>`,
    });

    const svg = createElement(Box);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-box class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-box>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBox],
      html: `<icon-box stroke-width="2"></icon-box>`,
    });

    const svg = createElement(Box);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-box class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-box>
    `);
  });
});
