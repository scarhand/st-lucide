import { newSpecPage } from '@stencil/core/testing';
import { IconPackagePlus } from '../package-plus';
import { createElement, PackagePlus }  from 'lucide';

describe('icon-package-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPackagePlus],
      html: `<icon-package-plus></icon-package-plus>`,
    });

    const svg = createElement(PackagePlus);

    expect(page.root).toEqualHtml(`
      <icon-package-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-package-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackagePlus],
      html: `<icon-package-plus stroke="blue"></icon-package-plus>`,
    });

    const svg = createElement(PackagePlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-package-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-package-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackagePlus],
      html: `<icon-package-plus stroke-width="2"></icon-package-plus>`,
    });

    const svg = createElement(PackagePlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-package-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-package-plus>
    `);
  });
});
