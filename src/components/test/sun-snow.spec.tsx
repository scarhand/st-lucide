import { newSpecPage } from '@stencil/core/testing';
import { IconSunSnow } from '../sun-snow';
import { createElement, SunSnow }  from 'lucide';

describe('icon-sun-snow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSunSnow],
      html: `<icon-sun-snow></icon-sun-snow>`,
    });

    const svg = createElement(SunSnow);

    expect(page.root).toEqualHtml(`
      <icon-sun-snow class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sun-snow>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunSnow],
      html: `<icon-sun-snow stroke="blue"></icon-sun-snow>`,
    });

    const svg = createElement(SunSnow);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sun-snow class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sun-snow>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunSnow],
      html: `<icon-sun-snow stroke-width="2"></icon-sun-snow>`,
    });

    const svg = createElement(SunSnow);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sun-snow class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sun-snow>
    `);
  });
});
