import { newSpecPage } from '@stencil/core/testing';
import { IconWrapText } from '../wrap-text';
import { createElement, WrapText }  from 'lucide';

describe('icon-wrap-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWrapText],
      html: `<icon-wrap-text></icon-wrap-text>`,
    });

    const svg = createElement(WrapText);

    expect(page.root).toEqualHtml(`
      <icon-wrap-text class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-wrap-text>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWrapText],
      html: `<icon-wrap-text stroke="blue"></icon-wrap-text>`,
    });

    const svg = createElement(WrapText);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-wrap-text class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-wrap-text>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWrapText],
      html: `<icon-wrap-text stroke-width="2"></icon-wrap-text>`,
    });

    const svg = createElement(WrapText);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-wrap-text class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-wrap-text>
    `);
  });
});
