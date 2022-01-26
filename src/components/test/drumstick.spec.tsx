import { newSpecPage } from '@stencil/core/testing';
import { IconDrumstick } from '../drumstick';
import { createElement, Drumstick }  from 'lucide';

describe('icon-drumstick', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDrumstick],
      html: `<icon-drumstick></icon-drumstick>`,
    });

    const svg = createElement(Drumstick);

    expect(page.root).toEqualHtml(`
      <icon-drumstick class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-drumstick>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDrumstick],
      html: `<icon-drumstick stroke="blue"></icon-drumstick>`,
    });

    const svg = createElement(Drumstick);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-drumstick class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-drumstick>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDrumstick],
      html: `<icon-drumstick stroke-width="2"></icon-drumstick>`,
    });

    const svg = createElement(Drumstick);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-drumstick class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-drumstick>
    `);
  });
});
