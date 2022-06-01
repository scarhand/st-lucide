import { newSpecPage } from '@stencil/core/testing';
import { IconPackageMinus } from '../package-minus';
import { createElement, PackageMinus }  from 'lucide';

describe('icon-package-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPackageMinus],
      html: `<icon-package-minus></icon-package-minus>`,
    });

    const svg = createElement(PackageMinus);

    expect(page.root).toEqualHtml(`
      <icon-package-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-package-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackageMinus],
      html: `<icon-package-minus stroke="blue"></icon-package-minus>`,
    });

    const svg = createElement(PackageMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-package-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-package-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackageMinus],
      html: `<icon-package-minus stroke-width="2"></icon-package-minus>`,
    });

    const svg = createElement(PackageMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-package-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-package-minus>
    `);
  });
});
