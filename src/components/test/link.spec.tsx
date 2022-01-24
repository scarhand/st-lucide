import { newSpecPage } from '@stencil/core/testing';
import { IconLink } from '../link';
import { createElement, Link }  from 'lucide';

describe('icon-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLink],
      html: `<icon-link></icon-link>`,
    });

    const svg = createElement(Link);

    expect(page.root).toEqualHtml(`
      <icon-link class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-link>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLink],
      html: `<icon-link stroke="blue"></icon-link>`,
    });

    const svg = createElement(Link);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-link class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-link>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLink],
      html: `<icon-link stroke-width="2"></icon-link>`,
    });

    const svg = createElement(Link);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-link class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-link>
    `);
  });
});
