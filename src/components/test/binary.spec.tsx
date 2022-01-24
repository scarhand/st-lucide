import { newSpecPage } from '@stencil/core/testing';
import { IconBinary } from '../binary';
import { createElement, Binary }  from 'lucide';

describe('icon-binary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBinary],
      html: `<icon-binary></icon-binary>`,
    });

    const svg = createElement(Binary);

    expect(page.root).toEqualHtml(`
      <icon-binary class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-binary>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBinary],
      html: `<icon-binary stroke="blue"></icon-binary>`,
    });

    const svg = createElement(Binary);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-binary class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-binary>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBinary],
      html: `<icon-binary stroke-width="2"></icon-binary>`,
    });

    const svg = createElement(Binary);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-binary class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-binary>
    `);
  });
});
