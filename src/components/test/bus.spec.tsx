import { newSpecPage } from '@stencil/core/testing';
import { IconBus } from '../bus';
import { createElement, Bus }  from 'lucide';

describe('icon-bus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBus],
      html: `<icon-bus></icon-bus>`,
    });

    const svg = createElement(Bus);

    expect(page.root).toEqualHtml(`
      <icon-bus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBus],
      html: `<icon-bus stroke="blue"></icon-bus>`,
    });

    const svg = createElement(Bus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBus],
      html: `<icon-bus stroke-width="2"></icon-bus>`,
    });

    const svg = createElement(Bus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bus>
    `);
  });
});
