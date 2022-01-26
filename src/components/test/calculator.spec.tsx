import { newSpecPage } from '@stencil/core/testing';
import { IconCalculator } from '../calculator';
import { createElement, Calculator }  from 'lucide';

describe('icon-calculator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCalculator],
      html: `<icon-calculator></icon-calculator>`,
    });

    const svg = createElement(Calculator);

    expect(page.root).toEqualHtml(`
      <icon-calculator class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-calculator>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalculator],
      html: `<icon-calculator stroke="blue"></icon-calculator>`,
    });

    const svg = createElement(Calculator);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-calculator class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-calculator>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCalculator],
      html: `<icon-calculator stroke-width="2"></icon-calculator>`,
    });

    const svg = createElement(Calculator);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-calculator class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-calculator>
    `);
  });
});
