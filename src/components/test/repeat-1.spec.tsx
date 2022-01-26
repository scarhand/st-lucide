import { newSpecPage } from '@stencil/core/testing';
import { IconRepeat1 } from '../repeat-1';
import { createElement, Repeat1 }  from 'lucide';

describe('icon-repeat-1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRepeat1],
      html: `<icon-repeat-1></icon-repeat-1>`,
    });

    const svg = createElement(Repeat1);

    expect(page.root).toEqualHtml(`
      <icon-repeat-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-repeat-1>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRepeat1],
      html: `<icon-repeat-1 stroke="blue"></icon-repeat-1>`,
    });

    const svg = createElement(Repeat1);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-repeat-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-repeat-1>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRepeat1],
      html: `<icon-repeat-1 stroke-width="2"></icon-repeat-1>`,
    });

    const svg = createElement(Repeat1);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-repeat-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-repeat-1>
    `);
  });
});
