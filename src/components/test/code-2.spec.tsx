import { newSpecPage } from '@stencil/core/testing';
import { IconCode2 } from '../code-2';
import { createElement, Code2 }  from 'lucide';

describe('icon-code-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCode2],
      html: `<icon-code-2></icon-code-2>`,
    });

    const svg = createElement(Code2);

    expect(page.root).toEqualHtml(`
      <icon-code-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-code-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCode2],
      html: `<icon-code-2 stroke="blue"></icon-code-2>`,
    });

    const svg = createElement(Code2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-code-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-code-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCode2],
      html: `<icon-code-2 stroke-width="2"></icon-code-2>`,
    });

    const svg = createElement(Code2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-code-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-code-2>
    `);
  });
});
