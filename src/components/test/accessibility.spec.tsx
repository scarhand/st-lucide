import { newSpecPage } from '@stencil/core/testing';
import { IconAccessibility } from '../accessibility';
import { createElement, Accessibility }  from 'lucide';

describe('icon-accessibility', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAccessibility],
      html: `<icon-accessibility></icon-accessibility>`,
    });

    const svg = createElement(Accessibility);

    expect(page.root).toEqualHtml(`
      <icon-accessibility class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-accessibility>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAccessibility],
      html: `<icon-accessibility stroke="blue"></icon-accessibility>`,
    });

    const svg = createElement(Accessibility);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-accessibility class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-accessibility>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAccessibility],
      html: `<icon-accessibility stroke-width="2"></icon-accessibility>`,
    });

    const svg = createElement(Accessibility);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-accessibility class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-accessibility>
    `);
  });
});
