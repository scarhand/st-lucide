import { newSpecPage } from '@stencil/core/testing';
import { IconCodesandbox } from '../codesandbox';
import { createElement, Codesandbox }  from 'lucide';

describe('icon-codesandbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCodesandbox],
      html: `<icon-codesandbox></icon-codesandbox>`,
    });

    const svg = createElement(Codesandbox);

    expect(page.root).toEqualHtml(`
      <icon-codesandbox class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-codesandbox>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCodesandbox],
      html: `<icon-codesandbox stroke="blue"></icon-codesandbox>`,
    });

    const svg = createElement(Codesandbox);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-codesandbox class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-codesandbox>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCodesandbox],
      html: `<icon-codesandbox stroke-width="2"></icon-codesandbox>`,
    });

    const svg = createElement(Codesandbox);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-codesandbox class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-codesandbox>
    `);
  });
});
