import { newSpecPage } from '@stencil/core/testing';
import { IconMountain } from '../mountain';
import { createElement, Mountain }  from 'lucide';

describe('icon-mountain', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMountain],
      html: `<icon-mountain></icon-mountain>`,
    });

    const svg = createElement(Mountain);

    expect(page.root).toEqualHtml(`
      <icon-mountain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mountain>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMountain],
      html: `<icon-mountain stroke="blue"></icon-mountain>`,
    });

    const svg = createElement(Mountain);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mountain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mountain>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMountain],
      html: `<icon-mountain stroke-width="2"></icon-mountain>`,
    });

    const svg = createElement(Mountain);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mountain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mountain>
    `);
  });
});
