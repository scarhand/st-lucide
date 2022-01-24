import { newSpecPage } from '@stencil/core/testing';
import { IconVerified } from '../verified';
import { createElement, Verified }  from 'lucide';

describe('icon-verified', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVerified],
      html: `<icon-verified></icon-verified>`,
    });

    const svg = createElement(Verified);

    expect(page.root).toEqualHtml(`
      <icon-verified class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-verified>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVerified],
      html: `<icon-verified stroke="blue"></icon-verified>`,
    });

    const svg = createElement(Verified);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-verified class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-verified>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVerified],
      html: `<icon-verified stroke-width="2"></icon-verified>`,
    });

    const svg = createElement(Verified);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-verified class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-verified>
    `);
  });
});
