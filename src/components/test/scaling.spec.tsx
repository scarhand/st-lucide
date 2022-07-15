import { newSpecPage } from '@stencil/core/testing';
import { IconScaling } from '../scaling';
import { createElement, Scaling }  from 'lucide';

describe('icon-scaling', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconScaling],
      html: `<icon-scaling></icon-scaling>`,
    });

    const svg = createElement(Scaling);

    expect(page.root).toEqualHtml(`
      <icon-scaling class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-scaling>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScaling],
      html: `<icon-scaling stroke="blue"></icon-scaling>`,
    });

    const svg = createElement(Scaling);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-scaling class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-scaling>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScaling],
      html: `<icon-scaling stroke-width="2"></icon-scaling>`,
    });

    const svg = createElement(Scaling);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-scaling class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-scaling>
    `);
  });
});
