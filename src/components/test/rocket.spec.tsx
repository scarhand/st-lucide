import { newSpecPage } from '@stencil/core/testing';
import { IconRocket } from '../rocket';
import { createElement, Rocket }  from 'lucide';

describe('icon-rocket', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRocket],
      html: `<icon-rocket></icon-rocket>`,
    });

    const svg = createElement(Rocket);

    expect(page.root).toEqualHtml(`
      <icon-rocket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-rocket>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRocket],
      html: `<icon-rocket stroke="blue"></icon-rocket>`,
    });

    const svg = createElement(Rocket);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-rocket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-rocket>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRocket],
      html: `<icon-rocket stroke-width="2"></icon-rocket>`,
    });

    const svg = createElement(Rocket);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-rocket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-rocket>
    `);
  });
});
