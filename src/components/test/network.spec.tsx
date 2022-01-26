import { newSpecPage } from '@stencil/core/testing';
import { IconNetwork } from '../network';
import { createElement, Network }  from 'lucide';

describe('icon-network', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconNetwork],
      html: `<icon-network></icon-network>`,
    });

    const svg = createElement(Network);

    expect(page.root).toEqualHtml(`
      <icon-network class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-network>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNetwork],
      html: `<icon-network stroke="blue"></icon-network>`,
    });

    const svg = createElement(Network);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-network class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-network>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNetwork],
      html: `<icon-network stroke-width="2"></icon-network>`,
    });

    const svg = createElement(Network);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-network class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-network>
    `);
  });
});
