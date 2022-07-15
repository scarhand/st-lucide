import { newSpecPage } from '@stencil/core/testing';
import { IconDiamond } from '../diamond';
import { createElement, Diamond }  from 'lucide';

describe('icon-diamond', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDiamond],
      html: `<icon-diamond></icon-diamond>`,
    });

    const svg = createElement(Diamond);

    expect(page.root).toEqualHtml(`
      <icon-diamond class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-diamond>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDiamond],
      html: `<icon-diamond stroke="blue"></icon-diamond>`,
    });

    const svg = createElement(Diamond);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-diamond class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-diamond>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDiamond],
      html: `<icon-diamond stroke-width="2"></icon-diamond>`,
    });

    const svg = createElement(Diamond);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-diamond class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-diamond>
    `);
  });
});
