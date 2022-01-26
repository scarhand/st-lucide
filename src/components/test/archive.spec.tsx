import { newSpecPage } from '@stencil/core/testing';
import { IconArchive } from '../archive';
import { createElement, Archive }  from 'lucide';

describe('icon-archive', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArchive],
      html: `<icon-archive></icon-archive>`,
    });

    const svg = createElement(Archive);

    expect(page.root).toEqualHtml(`
      <icon-archive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-archive>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArchive],
      html: `<icon-archive stroke="blue"></icon-archive>`,
    });

    const svg = createElement(Archive);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-archive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-archive>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArchive],
      html: `<icon-archive stroke-width="2"></icon-archive>`,
    });

    const svg = createElement(Archive);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-archive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-archive>
    `);
  });
});
