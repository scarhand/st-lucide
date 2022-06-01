import { newSpecPage } from '@stencil/core/testing';
import { IconPackageCheck } from '../package-check';
import { createElement, PackageCheck }  from 'lucide';

describe('icon-package-check', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPackageCheck],
      html: `<icon-package-check></icon-package-check>`,
    });

    const svg = createElement(PackageCheck);

    expect(page.root).toEqualHtml(`
      <icon-package-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-package-check>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackageCheck],
      html: `<icon-package-check stroke="blue"></icon-package-check>`,
    });

    const svg = createElement(PackageCheck);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-package-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-package-check>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackageCheck],
      html: `<icon-package-check stroke-width="2"></icon-package-check>`,
    });

    const svg = createElement(PackageCheck);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-package-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-package-check>
    `);
  });
});
