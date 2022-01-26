import { newSpecPage } from '@stencil/core/testing';
import { IconUnlink } from '../unlink';
import { createElement, Unlink }  from 'lucide';

describe('icon-unlink', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUnlink],
      html: `<icon-unlink></icon-unlink>`,
    });

    const svg = createElement(Unlink);

    expect(page.root).toEqualHtml(`
      <icon-unlink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-unlink>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUnlink],
      html: `<icon-unlink stroke="blue"></icon-unlink>`,
    });

    const svg = createElement(Unlink);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-unlink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-unlink>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUnlink],
      html: `<icon-unlink stroke-width="2"></icon-unlink>`,
    });

    const svg = createElement(Unlink);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-unlink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-unlink>
    `);
  });
});
