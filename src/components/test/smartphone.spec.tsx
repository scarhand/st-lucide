import { newSpecPage } from '@stencil/core/testing';
import { IconSmartphone } from '../smartphone';
import { createElement, Smartphone }  from 'lucide';

describe('icon-smartphone', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSmartphone],
      html: `<icon-smartphone></icon-smartphone>`,
    });

    const svg = createElement(Smartphone);

    expect(page.root).toEqualHtml(`
      <icon-smartphone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-smartphone>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSmartphone],
      html: `<icon-smartphone stroke="blue"></icon-smartphone>`,
    });

    const svg = createElement(Smartphone);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-smartphone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-smartphone>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSmartphone],
      html: `<icon-smartphone stroke-width="2"></icon-smartphone>`,
    });

    const svg = createElement(Smartphone);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-smartphone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-smartphone>
    `);
  });
});
