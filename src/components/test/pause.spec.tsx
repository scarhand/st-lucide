import { newSpecPage } from '@stencil/core/testing';
import { IconPause } from '../pause';
import { createElement, Pause }  from 'lucide';

describe('icon-pause', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPause],
      html: `<icon-pause></icon-pause>`,
    });

    const svg = createElement(Pause);

    expect(page.root).toEqualHtml(`
      <icon-pause class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pause>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPause],
      html: `<icon-pause stroke="blue"></icon-pause>`,
    });

    const svg = createElement(Pause);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pause class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pause>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPause],
      html: `<icon-pause stroke-width="2"></icon-pause>`,
    });

    const svg = createElement(Pause);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pause class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pause>
    `);
  });
});
