import { newSpecPage } from '@stencil/core/testing';
import { IconArmchair } from '../armchair';
import { createElement, Armchair }  from 'lucide';

describe('icon-armchair', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArmchair],
      html: `<icon-armchair></icon-armchair>`,
    });

    const svg = createElement(Armchair);

    expect(page.root).toEqualHtml(`
      <icon-armchair class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-armchair>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArmchair],
      html: `<icon-armchair stroke="blue"></icon-armchair>`,
    });

    const svg = createElement(Armchair);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-armchair class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-armchair>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArmchair],
      html: `<icon-armchair stroke-width="2"></icon-armchair>`,
    });

    const svg = createElement(Armchair);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-armchair class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-armchair>
    `);
  });
});
