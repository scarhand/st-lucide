import { newSpecPage } from '@stencil/core/testing';
import { IconSofa } from '../sofa';
import { createElement, Sofa }  from 'lucide';

describe('icon-sofa', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSofa],
      html: `<icon-sofa></icon-sofa>`,
    });

    const svg = createElement(Sofa);

    expect(page.root).toEqualHtml(`
      <icon-sofa class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sofa>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSofa],
      html: `<icon-sofa stroke="blue"></icon-sofa>`,
    });

    const svg = createElement(Sofa);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sofa class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sofa>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSofa],
      html: `<icon-sofa stroke-width="2"></icon-sofa>`,
    });

    const svg = createElement(Sofa);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sofa class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sofa>
    `);
  });
});
