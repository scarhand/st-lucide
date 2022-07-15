import { newSpecPage } from '@stencil/core/testing';
import { IconCigaretteOff } from '../cigarette-off';
import { createElement, CigaretteOff }  from 'lucide';

describe('icon-cigarette-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCigaretteOff],
      html: `<icon-cigarette-off></icon-cigarette-off>`,
    });

    const svg = createElement(CigaretteOff);

    expect(page.root).toEqualHtml(`
      <icon-cigarette-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cigarette-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCigaretteOff],
      html: `<icon-cigarette-off stroke="blue"></icon-cigarette-off>`,
    });

    const svg = createElement(CigaretteOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cigarette-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cigarette-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCigaretteOff],
      html: `<icon-cigarette-off stroke-width="2"></icon-cigarette-off>`,
    });

    const svg = createElement(CigaretteOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cigarette-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cigarette-off>
    `);
  });
});
