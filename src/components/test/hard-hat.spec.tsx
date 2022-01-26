import { newSpecPage } from '@stencil/core/testing';
import { IconHardHat } from '../hard-hat';
import { createElement, HardHat }  from 'lucide';

describe('icon-hard-hat', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHardHat],
      html: `<icon-hard-hat></icon-hard-hat>`,
    });

    const svg = createElement(HardHat);

    expect(page.root).toEqualHtml(`
      <icon-hard-hat class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-hard-hat>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHardHat],
      html: `<icon-hard-hat stroke="blue"></icon-hard-hat>`,
    });

    const svg = createElement(HardHat);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-hard-hat class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-hard-hat>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHardHat],
      html: `<icon-hard-hat stroke-width="2"></icon-hard-hat>`,
    });

    const svg = createElement(HardHat);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-hard-hat class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-hard-hat>
    `);
  });
});
