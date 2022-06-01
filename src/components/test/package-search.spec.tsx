import { newSpecPage } from '@stencil/core/testing';
import { IconPackageSearch } from '../package-search';
import { createElement, PackageSearch }  from 'lucide';

describe('icon-package-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPackageSearch],
      html: `<icon-package-search></icon-package-search>`,
    });

    const svg = createElement(PackageSearch);

    expect(page.root).toEqualHtml(`
      <icon-package-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-package-search>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackageSearch],
      html: `<icon-package-search stroke="blue"></icon-package-search>`,
    });

    const svg = createElement(PackageSearch);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-package-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-package-search>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackageSearch],
      html: `<icon-package-search stroke-width="2"></icon-package-search>`,
    });

    const svg = createElement(PackageSearch);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-package-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-package-search>
    `);
  });
});
