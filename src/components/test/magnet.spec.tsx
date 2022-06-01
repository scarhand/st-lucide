import { newSpecPage } from '@stencil/core/testing';
import { IconMagnet } from '../magnet';
import { createElement, Magnet }  from 'lucide';

describe('icon-magnet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMagnet],
      html: `<icon-magnet></icon-magnet>`,
    });

    const svg = createElement(Magnet);

    expect(page.root).toEqualHtml(`
      <icon-magnet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-magnet>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMagnet],
      html: `<icon-magnet stroke="blue"></icon-magnet>`,
    });

    const svg = createElement(Magnet);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-magnet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-magnet>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMagnet],
      html: `<icon-magnet stroke-width="2"></icon-magnet>`,
    });

    const svg = createElement(Magnet);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-magnet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-magnet>
    `);
  });
});
