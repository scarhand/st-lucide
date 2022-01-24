import { newSpecPage } from '@stencil/core/testing';
import { IconVolume1 } from '../volume-1';
import { createElement, Volume1 }  from 'lucide';

describe('icon-volume-1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVolume1],
      html: `<icon-volume-1></icon-volume-1>`,
    });

    const svg = createElement(Volume1);

    expect(page.root).toEqualHtml(`
      <icon-volume-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-volume-1>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVolume1],
      html: `<icon-volume-1 stroke="blue"></icon-volume-1>`,
    });

    const svg = createElement(Volume1);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-volume-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-volume-1>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVolume1],
      html: `<icon-volume-1 stroke-width="2"></icon-volume-1>`,
    });

    const svg = createElement(Volume1);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-volume-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-volume-1>
    `);
  });
});
