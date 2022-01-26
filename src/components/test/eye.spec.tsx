import { newSpecPage } from '@stencil/core/testing';
import { IconEye } from '../eye';
import { createElement, Eye }  from 'lucide';

describe('icon-eye', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEye],
      html: `<icon-eye></icon-eye>`,
    });

    const svg = createElement(Eye);

    expect(page.root).toEqualHtml(`
      <icon-eye class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-eye>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEye],
      html: `<icon-eye stroke="blue"></icon-eye>`,
    });

    const svg = createElement(Eye);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-eye class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-eye>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEye],
      html: `<icon-eye stroke-width="2"></icon-eye>`,
    });

    const svg = createElement(Eye);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-eye class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-eye>
    `);
  });
});
