import { newSpecPage } from '@stencil/core/testing';
import { IconLanguages } from '../languages';
import { createElement, Languages }  from 'lucide';

describe('icon-languages', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLanguages],
      html: `<icon-languages></icon-languages>`,
    });

    const svg = createElement(Languages);

    expect(page.root).toEqualHtml(`
      <icon-languages class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-languages>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLanguages],
      html: `<icon-languages stroke="blue"></icon-languages>`,
    });

    const svg = createElement(Languages);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-languages class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-languages>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLanguages],
      html: `<icon-languages stroke-width="2"></icon-languages>`,
    });

    const svg = createElement(Languages);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-languages class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-languages>
    `);
  });
});
