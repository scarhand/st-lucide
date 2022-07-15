import { newSpecPage } from '@stencil/core/testing';
import { IconPackageOpen } from '../package-open';
import { createElement, PackageOpen }  from 'lucide';

describe('icon-package-open', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPackageOpen],
      html: `<icon-package-open></icon-package-open>`,
    });

    const svg = createElement(PackageOpen);

    expect(page.root).toEqualHtml(`
      <icon-package-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-package-open>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackageOpen],
      html: `<icon-package-open stroke="blue"></icon-package-open>`,
    });

    const svg = createElement(PackageOpen);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-package-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-package-open>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackageOpen],
      html: `<icon-package-open stroke-width="2"></icon-package-open>`,
    });

    const svg = createElement(PackageOpen);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-package-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-package-open>
    `);
  });
});
