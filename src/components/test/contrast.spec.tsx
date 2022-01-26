import { newSpecPage } from '@stencil/core/testing';
import { IconContrast } from '../contrast';
import { createElement, Contrast }  from 'lucide';

describe('icon-contrast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconContrast],
      html: `<icon-contrast></icon-contrast>`,
    });

    const svg = createElement(Contrast);

    expect(page.root).toEqualHtml(`
      <icon-contrast class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-contrast>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconContrast],
      html: `<icon-contrast stroke="blue"></icon-contrast>`,
    });

    const svg = createElement(Contrast);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-contrast class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-contrast>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconContrast],
      html: `<icon-contrast stroke-width="2"></icon-contrast>`,
    });

    const svg = createElement(Contrast);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-contrast class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-contrast>
    `);
  });
});
