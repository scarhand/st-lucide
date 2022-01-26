import { newSpecPage } from '@stencil/core/testing';
import { IconLink2 } from '../link-2';
import { createElement, Link2 }  from 'lucide';

describe('icon-link-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLink2],
      html: `<icon-link-2></icon-link-2>`,
    });

    const svg = createElement(Link2);

    expect(page.root).toEqualHtml(`
      <icon-link-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-link-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLink2],
      html: `<icon-link-2 stroke="blue"></icon-link-2>`,
    });

    const svg = createElement(Link2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-link-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-link-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLink2],
      html: `<icon-link-2 stroke-width="2"></icon-link-2>`,
    });

    const svg = createElement(Link2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-link-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-link-2>
    `);
  });
});
