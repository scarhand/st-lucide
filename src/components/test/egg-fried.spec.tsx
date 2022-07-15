import { newSpecPage } from '@stencil/core/testing';
import { IconEggFried } from '../egg-fried';
import { createElement, EggFried }  from 'lucide';

describe('icon-egg-fried', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEggFried],
      html: `<icon-egg-fried></icon-egg-fried>`,
    });

    const svg = createElement(EggFried);

    expect(page.root).toEqualHtml(`
      <icon-egg-fried class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-egg-fried>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEggFried],
      html: `<icon-egg-fried stroke="blue"></icon-egg-fried>`,
    });

    const svg = createElement(EggFried);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-egg-fried class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-egg-fried>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEggFried],
      html: `<icon-egg-fried stroke-width="2"></icon-egg-fried>`,
    });

    const svg = createElement(EggFried);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-egg-fried class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-egg-fried>
    `);
  });
});
