import { newSpecPage } from '@stencil/core/testing';
import { IconCircle } from '../circle';
import { createElement, Circle }  from 'lucide';

describe('icon-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCircle],
      html: `<icon-circle></icon-circle>`,
    });

    const svg = createElement(Circle);

    expect(page.root).toEqualHtml(`
      <icon-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCircle],
      html: `<icon-circle stroke="blue"></icon-circle>`,
    });

    const svg = createElement(Circle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCircle],
      html: `<icon-circle stroke-width="2"></icon-circle>`,
    });

    const svg = createElement(Circle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-circle>
    `);
  });
});
