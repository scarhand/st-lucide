import { newSpecPage } from '@stencil/core/testing';
import { IconPackage } from '../package';
import { createElement, Package }  from 'lucide';

describe('icon-package', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPackage],
      html: `<icon-package></icon-package>`,
    });

    const svg = createElement(Package);

    expect(page.root).toEqualHtml(`
      <icon-package class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-package>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackage],
      html: `<icon-package stroke="blue"></icon-package>`,
    });

    const svg = createElement(Package);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-package class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-package>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPackage],
      html: `<icon-package stroke-width="2"></icon-package>`,
    });

    const svg = createElement(Package);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-package class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-package>
    `);
  });
});
