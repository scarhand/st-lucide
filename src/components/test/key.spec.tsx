import { newSpecPage } from '@stencil/core/testing';
import { IconKey } from '../key';
import { createElement, Key }  from 'lucide';

describe('icon-key', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconKey],
      html: `<icon-key></icon-key>`,
    });

    const svg = createElement(Key);

    expect(page.root).toEqualHtml(`
      <icon-key class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-key>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconKey],
      html: `<icon-key stroke="blue"></icon-key>`,
    });

    const svg = createElement(Key);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-key class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-key>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconKey],
      html: `<icon-key stroke-width="2"></icon-key>`,
    });

    const svg = createElement(Key);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-key class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-key>
    `);
  });
});
