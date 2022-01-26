import { newSpecPage } from '@stencil/core/testing';
import { IconCopyright } from '../copyright';
import { createElement, Copyright }  from 'lucide';

describe('icon-copyright', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCopyright],
      html: `<icon-copyright></icon-copyright>`,
    });

    const svg = createElement(Copyright);

    expect(page.root).toEqualHtml(`
      <icon-copyright class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-copyright>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCopyright],
      html: `<icon-copyright stroke="blue"></icon-copyright>`,
    });

    const svg = createElement(Copyright);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-copyright class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-copyright>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCopyright],
      html: `<icon-copyright stroke-width="2"></icon-copyright>`,
    });

    const svg = createElement(Copyright);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-copyright class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-copyright>
    `);
  });
});
