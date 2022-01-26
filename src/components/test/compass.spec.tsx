import { newSpecPage } from '@stencil/core/testing';
import { IconCompass } from '../compass';
import { createElement, Compass }  from 'lucide';

describe('icon-compass', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCompass],
      html: `<icon-compass></icon-compass>`,
    });

    const svg = createElement(Compass);

    expect(page.root).toEqualHtml(`
      <icon-compass class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-compass>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCompass],
      html: `<icon-compass stroke="blue"></icon-compass>`,
    });

    const svg = createElement(Compass);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-compass class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-compass>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCompass],
      html: `<icon-compass stroke-width="2"></icon-compass>`,
    });

    const svg = createElement(Compass);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-compass class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-compass>
    `);
  });
});
