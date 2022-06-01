import { newSpecPage } from '@stencil/core/testing';
import { IconClapperboard } from '../clapperboard';
import { createElement, Clapperboard }  from 'lucide';

describe('icon-clapperboard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClapperboard],
      html: `<icon-clapperboard></icon-clapperboard>`,
    });

    const svg = createElement(Clapperboard);

    expect(page.root).toEqualHtml(`
      <icon-clapperboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clapperboard>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClapperboard],
      html: `<icon-clapperboard stroke="blue"></icon-clapperboard>`,
    });

    const svg = createElement(Clapperboard);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clapperboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clapperboard>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClapperboard],
      html: `<icon-clapperboard stroke-width="2"></icon-clapperboard>`,
    });

    const svg = createElement(Clapperboard);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clapperboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clapperboard>
    `);
  });
});
