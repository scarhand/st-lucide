import { newSpecPage } from '@stencil/core/testing';
import { IconFactory } from '../factory';
import { createElement, Factory }  from 'lucide';

describe('icon-factory', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFactory],
      html: `<icon-factory></icon-factory>`,
    });

    const svg = createElement(Factory);

    expect(page.root).toEqualHtml(`
      <icon-factory class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-factory>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFactory],
      html: `<icon-factory stroke="blue"></icon-factory>`,
    });

    const svg = createElement(Factory);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-factory class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-factory>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFactory],
      html: `<icon-factory stroke-width="2"></icon-factory>`,
    });

    const svg = createElement(Factory);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-factory class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-factory>
    `);
  });
});
