import { newSpecPage } from '@stencil/core/testing';
import { IconUnlock } from '../unlock';
import { createElement, Unlock }  from 'lucide';

describe('icon-unlock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUnlock],
      html: `<icon-unlock></icon-unlock>`,
    });

    const svg = createElement(Unlock);

    expect(page.root).toEqualHtml(`
      <icon-unlock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-unlock>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUnlock],
      html: `<icon-unlock stroke="blue"></icon-unlock>`,
    });

    const svg = createElement(Unlock);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-unlock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-unlock>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUnlock],
      html: `<icon-unlock stroke-width="2"></icon-unlock>`,
    });

    const svg = createElement(Unlock);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-unlock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-unlock>
    `);
  });
});
