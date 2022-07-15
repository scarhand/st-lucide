import { newSpecPage } from '@stencil/core/testing';
import { IconTrees } from '../trees';
import { createElement, Trees }  from 'lucide';

describe('icon-trees', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTrees],
      html: `<icon-trees></icon-trees>`,
    });

    const svg = createElement(Trees);

    expect(page.root).toEqualHtml(`
      <icon-trees class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-trees>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrees],
      html: `<icon-trees stroke="blue"></icon-trees>`,
    });

    const svg = createElement(Trees);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-trees class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-trees>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrees],
      html: `<icon-trees stroke-width="2"></icon-trees>`,
    });

    const svg = createElement(Trees);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-trees class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-trees>
    `);
  });
});
