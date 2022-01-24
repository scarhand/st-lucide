import { newSpecPage } from '@stencil/core/testing';
import { IconAnchor } from '../anchor';
import { createElement, Anchor }  from 'lucide';

describe('icon-anchor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAnchor],
      html: `<icon-anchor></icon-anchor>`,
    });

    const svg = createElement(Anchor);

    expect(page.root).toEqualHtml(`
      <icon-anchor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-anchor>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAnchor],
      html: `<icon-anchor stroke="blue"></icon-anchor>`,
    });

    const svg = createElement(Anchor);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-anchor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-anchor>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAnchor],
      html: `<icon-anchor stroke-width="2"></icon-anchor>`,
    });

    const svg = createElement(Anchor);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-anchor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-anchor>
    `);
  });
});
