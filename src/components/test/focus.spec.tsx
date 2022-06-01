import { newSpecPage } from '@stencil/core/testing';
import { IconFocus } from '../focus';
import { createElement, Focus }  from 'lucide';

describe('icon-focus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFocus],
      html: `<icon-focus></icon-focus>`,
    });

    const svg = createElement(Focus);

    expect(page.root).toEqualHtml(`
      <icon-focus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-focus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFocus],
      html: `<icon-focus stroke="blue"></icon-focus>`,
    });

    const svg = createElement(Focus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-focus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-focus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFocus],
      html: `<icon-focus stroke-width="2"></icon-focus>`,
    });

    const svg = createElement(Focus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-focus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-focus>
    `);
  });
});
