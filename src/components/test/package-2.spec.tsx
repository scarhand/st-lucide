import { newSpecPage } from '@stencil/core/testing';
import { IconPackage2 } from '../package-2';
import { createElement, Package2 }  from 'lucide';

describe('icon-package-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPackage2],
      html: `<icon-package-2></icon-package-2>`,
    });

    const svg = createElement(Package2);

    expect(page.root).toEqualHtml(`
      <icon-package-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-package-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackage2],
      html: `<icon-package-2 stroke="blue"></icon-package-2>`,
    });

    const svg = createElement(Package2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-package-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-package-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackage2],
      html: `<icon-package-2 stroke-width="2"></icon-package-2>`,
    });

    const svg = createElement(Package2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-package-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-package-2>
    `);
  });
});
