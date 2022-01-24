import { newSpecPage } from '@stencil/core/testing';
import { IconIndianRupee } from '../indian-rupee';
import { createElement, IndianRupee }  from 'lucide';

describe('icon-indian-rupee', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconIndianRupee],
      html: `<icon-indian-rupee></icon-indian-rupee>`,
    });

    const svg = createElement(IndianRupee);

    expect(page.root).toEqualHtml(`
      <icon-indian-rupee class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-indian-rupee>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconIndianRupee],
      html: `<icon-indian-rupee stroke="blue"></icon-indian-rupee>`,
    });

    const svg = createElement(IndianRupee);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-indian-rupee class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-indian-rupee>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconIndianRupee],
      html: `<icon-indian-rupee stroke-width="2"></icon-indian-rupee>`,
    });

    const svg = createElement(IndianRupee);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-indian-rupee class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-indian-rupee>
    `);
  });
});
