import { newSpecPage } from '@stencil/core/testing';
import { IconCupSoda } from '../cup-soda';
import { createElement, CupSoda }  from 'lucide';

describe('icon-cup-soda', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCupSoda],
      html: `<icon-cup-soda></icon-cup-soda>`,
    });

    const svg = createElement(CupSoda);

    expect(page.root).toEqualHtml(`
      <icon-cup-soda class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cup-soda>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCupSoda],
      html: `<icon-cup-soda stroke="blue"></icon-cup-soda>`,
    });

    const svg = createElement(CupSoda);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cup-soda class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cup-soda>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCupSoda],
      html: `<icon-cup-soda stroke-width="2"></icon-cup-soda>`,
    });

    const svg = createElement(CupSoda);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cup-soda class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cup-soda>
    `);
  });
});
