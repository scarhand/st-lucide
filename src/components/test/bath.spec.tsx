import { newSpecPage } from '@stencil/core/testing';
import { IconBath } from '../bath';
import { createElement, Bath }  from 'lucide';

describe('icon-bath', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBath],
      html: `<icon-bath></icon-bath>`,
    });

    const svg = createElement(Bath);

    expect(page.root).toEqualHtml(`
      <icon-bath class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bath>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBath],
      html: `<icon-bath stroke="blue"></icon-bath>`,
    });

    const svg = createElement(Bath);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bath class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bath>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBath],
      html: `<icon-bath stroke-width="2"></icon-bath>`,
    });

    const svg = createElement(Bath);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bath class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bath>
    `);
  });
});
