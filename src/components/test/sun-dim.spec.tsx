import { newSpecPage } from '@stencil/core/testing';
import { IconSunDim } from '../sun-dim';
import { createElement, SunDim }  from 'lucide';

describe('icon-sun-dim', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSunDim],
      html: `<icon-sun-dim></icon-sun-dim>`,
    });

    const svg = createElement(SunDim);

    expect(page.root).toEqualHtml(`
      <icon-sun-dim class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sun-dim>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunDim],
      html: `<icon-sun-dim stroke="blue"></icon-sun-dim>`,
    });

    const svg = createElement(SunDim);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sun-dim class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sun-dim>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunDim],
      html: `<icon-sun-dim stroke-width="2"></icon-sun-dim>`,
    });

    const svg = createElement(SunDim);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sun-dim class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sun-dim>
    `);
  });
});
