import { newSpecPage } from '@stencil/core/testing';
import { IconPackageX } from '../package-x';
import { createElement, PackageX }  from 'lucide';

describe('icon-package-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPackageX],
      html: `<icon-package-x></icon-package-x>`,
    });

    const svg = createElement(PackageX);

    expect(page.root).toEqualHtml(`
      <icon-package-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-package-x>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackageX],
      html: `<icon-package-x stroke="blue"></icon-package-x>`,
    });

    const svg = createElement(PackageX);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-package-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-package-x>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackageX],
      html: `<icon-package-x stroke-width="2"></icon-package-x>`,
    });

    const svg = createElement(PackageX);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-package-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-package-x>
    `);
  });
});
