import { newSpecPage } from '@stencil/core/testing';
import { IconUnderline } from '../underline';
import { createElement, Underline }  from 'lucide';

describe('icon-underline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUnderline],
      html: `<icon-underline></icon-underline>`,
    });

    const svg = createElement(Underline);

    expect(page.root).toEqualHtml(`
      <icon-underline class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-underline>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUnderline],
      html: `<icon-underline stroke="blue"></icon-underline>`,
    });

    const svg = createElement(Underline);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-underline class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-underline>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUnderline],
      html: `<icon-underline stroke-width="2"></icon-underline>`,
    });

    const svg = createElement(Underline);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-underline class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-underline>
    `);
  });
});
