import { newSpecPage } from '@stencil/core/testing';
import { IconBanana } from '../banana';
import { createElement, Banana }  from 'lucide';

describe('icon-banana', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBanana],
      html: `<icon-banana></icon-banana>`,
    });

    const svg = createElement(Banana);

    expect(page.root).toEqualHtml(`
      <icon-banana class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-banana>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBanana],
      html: `<icon-banana stroke="blue"></icon-banana>`,
    });

    const svg = createElement(Banana);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-banana class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-banana>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBanana],
      html: `<icon-banana stroke-width="2"></icon-banana>`,
    });

    const svg = createElement(Banana);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-banana class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-banana>
    `);
  });
});
