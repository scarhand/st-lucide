import { newSpecPage } from '@stencil/core/testing';
import { IconVolume2 } from '../volume-2';
import { createElement, Volume2 }  from 'lucide';

describe('icon-volume-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVolume2],
      html: `<icon-volume-2></icon-volume-2>`,
    });

    const svg = createElement(Volume2);

    expect(page.root).toEqualHtml(`
      <icon-volume-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-volume-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVolume2],
      html: `<icon-volume-2 stroke="blue"></icon-volume-2>`,
    });

    const svg = createElement(Volume2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-volume-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-volume-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVolume2],
      html: `<icon-volume-2 stroke-width="2"></icon-volume-2>`,
    });

    const svg = createElement(Volume2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-volume-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-volume-2>
    `);
  });
});
