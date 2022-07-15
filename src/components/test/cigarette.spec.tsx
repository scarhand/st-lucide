import { newSpecPage } from '@stencil/core/testing';
import { IconCigarette } from '../cigarette';
import { createElement, Cigarette }  from 'lucide';

describe('icon-cigarette', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCigarette],
      html: `<icon-cigarette></icon-cigarette>`,
    });

    const svg = createElement(Cigarette);

    expect(page.root).toEqualHtml(`
      <icon-cigarette class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cigarette>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCigarette],
      html: `<icon-cigarette stroke="blue"></icon-cigarette>`,
    });

    const svg = createElement(Cigarette);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cigarette class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cigarette>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCigarette],
      html: `<icon-cigarette stroke-width="2"></icon-cigarette>`,
    });

    const svg = createElement(Cigarette);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cigarette class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cigarette>
    `);
  });
});
