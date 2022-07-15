import { newSpecPage } from '@stencil/core/testing';
import { IconAngry } from '../angry';
import { createElement, Angry }  from 'lucide';

describe('icon-angry', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAngry],
      html: `<icon-angry></icon-angry>`,
    });

    const svg = createElement(Angry);

    expect(page.root).toEqualHtml(`
      <icon-angry class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-angry>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAngry],
      html: `<icon-angry stroke="blue"></icon-angry>`,
    });

    const svg = createElement(Angry);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-angry class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-angry>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAngry],
      html: `<icon-angry stroke-width="2"></icon-angry>`,
    });

    const svg = createElement(Angry);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-angry class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-angry>
    `);
  });
});
