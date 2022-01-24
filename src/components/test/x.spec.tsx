import { newSpecPage } from '@stencil/core/testing';
import { IconX } from '../x';
import { createElement, X }  from 'lucide';

describe('icon-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconX],
      html: `<icon-x></icon-x>`,
    });

    const svg = createElement(X);

    expect(page.root).toEqualHtml(`
      <icon-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-x>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconX],
      html: `<icon-x stroke="blue"></icon-x>`,
    });

    const svg = createElement(X);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-x>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconX],
      html: `<icon-x stroke-width="2"></icon-x>`,
    });

    const svg = createElement(X);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-x>
    `);
  });
});
