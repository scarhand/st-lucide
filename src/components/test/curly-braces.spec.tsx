import { newSpecPage } from '@stencil/core/testing';
import { IconCurlyBraces } from '../curly-braces';
import { createElement, CurlyBraces }  from 'lucide';

describe('icon-curly-braces', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCurlyBraces],
      html: `<icon-curly-braces></icon-curly-braces>`,
    });

    const svg = createElement(CurlyBraces);

    expect(page.root).toEqualHtml(`
      <icon-curly-braces class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-curly-braces>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCurlyBraces],
      html: `<icon-curly-braces stroke="blue"></icon-curly-braces>`,
    });

    const svg = createElement(CurlyBraces);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-curly-braces class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-curly-braces>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCurlyBraces],
      html: `<icon-curly-braces stroke-width="2"></icon-curly-braces>`,
    });

    const svg = createElement(CurlyBraces);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-curly-braces class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-curly-braces>
    `);
  });
});
