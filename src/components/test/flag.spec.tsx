import { newSpecPage } from '@stencil/core/testing';
import { IconFlag } from '../flag';
import { createElement, Flag }  from 'lucide';

describe('icon-flag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlag],
      html: `<icon-flag></icon-flag>`,
    });

    const svg = createElement(Flag);

    expect(page.root).toEqualHtml(`
      <icon-flag class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flag>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlag],
      html: `<icon-flag stroke="blue"></icon-flag>`,
    });

    const svg = createElement(Flag);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flag class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flag>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlag],
      html: `<icon-flag stroke-width="2"></icon-flag>`,
    });

    const svg = createElement(Flag);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flag class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flag>
    `);
  });
});
