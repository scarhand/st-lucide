import { newSpecPage } from '@stencil/core/testing';
import { IconLaugh } from '../laugh';
import { createElement, Laugh }  from 'lucide';

describe('icon-laugh', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLaugh],
      html: `<icon-laugh></icon-laugh>`,
    });

    const svg = createElement(Laugh);

    expect(page.root).toEqualHtml(`
      <icon-laugh class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-laugh>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLaugh],
      html: `<icon-laugh stroke="blue"></icon-laugh>`,
    });

    const svg = createElement(Laugh);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-laugh class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-laugh>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLaugh],
      html: `<icon-laugh stroke-width="2"></icon-laugh>`,
    });

    const svg = createElement(Laugh);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-laugh class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-laugh>
    `);
  });
});
