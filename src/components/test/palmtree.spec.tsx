import { newSpecPage } from '@stencil/core/testing';
import { IconPalmtree } from '../palmtree';
import { createElement, Palmtree }  from 'lucide';

describe('icon-palmtree', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPalmtree],
      html: `<icon-palmtree></icon-palmtree>`,
    });

    const svg = createElement(Palmtree);

    expect(page.root).toEqualHtml(`
      <icon-palmtree class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-palmtree>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPalmtree],
      html: `<icon-palmtree stroke="blue"></icon-palmtree>`,
    });

    const svg = createElement(Palmtree);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-palmtree class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-palmtree>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPalmtree],
      html: `<icon-palmtree stroke-width="2"></icon-palmtree>`,
    });

    const svg = createElement(Palmtree);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-palmtree class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-palmtree>
    `);
  });
});
