import { newSpecPage } from '@stencil/core/testing';
import { IconCopy } from '../copy';
import { createElement, Copy }  from 'lucide';

describe('icon-copy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCopy],
      html: `<icon-copy></icon-copy>`,
    });

    const svg = createElement(Copy);

    expect(page.root).toEqualHtml(`
      <icon-copy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-copy>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCopy],
      html: `<icon-copy stroke="blue"></icon-copy>`,
    });

    const svg = createElement(Copy);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-copy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-copy>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCopy],
      html: `<icon-copy stroke-width="2"></icon-copy>`,
    });

    const svg = createElement(Copy);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-copy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-copy>
    `);
  });
});
