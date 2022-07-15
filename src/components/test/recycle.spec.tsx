import { newSpecPage } from '@stencil/core/testing';
import { IconRecycle } from '../recycle';
import { createElement, Recycle }  from 'lucide';

describe('icon-recycle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRecycle],
      html: `<icon-recycle></icon-recycle>`,
    });

    const svg = createElement(Recycle);

    expect(page.root).toEqualHtml(`
      <icon-recycle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-recycle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRecycle],
      html: `<icon-recycle stroke="blue"></icon-recycle>`,
    });

    const svg = createElement(Recycle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-recycle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-recycle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRecycle],
      html: `<icon-recycle stroke-width="2"></icon-recycle>`,
    });

    const svg = createElement(Recycle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-recycle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-recycle>
    `);
  });
});
