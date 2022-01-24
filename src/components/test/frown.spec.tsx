import { newSpecPage } from '@stencil/core/testing';
import { IconFrown } from '../frown';
import { createElement, Frown }  from 'lucide';

describe('icon-frown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFrown],
      html: `<icon-frown></icon-frown>`,
    });

    const svg = createElement(Frown);

    expect(page.root).toEqualHtml(`
      <icon-frown class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-frown>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFrown],
      html: `<icon-frown stroke="blue"></icon-frown>`,
    });

    const svg = createElement(Frown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-frown class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-frown>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFrown],
      html: `<icon-frown stroke-width="2"></icon-frown>`,
    });

    const svg = createElement(Frown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-frown class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-frown>
    `);
  });
});
