import { newSpecPage } from '@stencil/core/testing';
import { IconHash } from '../hash';
import { createElement, Hash }  from 'lucide';

describe('icon-hash', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHash],
      html: `<icon-hash></icon-hash>`,
    });

    const svg = createElement(Hash);

    expect(page.root).toEqualHtml(`
      <icon-hash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-hash>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHash],
      html: `<icon-hash stroke="blue"></icon-hash>`,
    });

    const svg = createElement(Hash);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-hash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-hash>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHash],
      html: `<icon-hash stroke-width="2"></icon-hash>`,
    });

    const svg = createElement(Hash);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-hash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-hash>
    `);
  });
});
