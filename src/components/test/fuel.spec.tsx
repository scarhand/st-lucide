import { newSpecPage } from '@stencil/core/testing';
import { IconFuel } from '../fuel';
import { createElement, Fuel }  from 'lucide';

describe('icon-fuel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFuel],
      html: `<icon-fuel></icon-fuel>`,
    });

    const svg = createElement(Fuel);

    expect(page.root).toEqualHtml(`
      <icon-fuel class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-fuel>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFuel],
      html: `<icon-fuel stroke="blue"></icon-fuel>`,
    });

    const svg = createElement(Fuel);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-fuel class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-fuel>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFuel],
      html: `<icon-fuel stroke-width="2"></icon-fuel>`,
    });

    const svg = createElement(Fuel);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-fuel class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-fuel>
    `);
  });
});
