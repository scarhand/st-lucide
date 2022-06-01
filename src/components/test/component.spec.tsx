import { newSpecPage } from '@stencil/core/testing';
import { IconComponent } from '../component';
import { createElement, Component }  from 'lucide';

describe('icon-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconComponent],
      html: `<icon-component></icon-component>`,
    });

    const svg = createElement(Component);

    expect(page.root).toEqualHtml(`
      <icon-component class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-component>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconComponent],
      html: `<icon-component stroke="blue"></icon-component>`,
    });

    const svg = createElement(Component);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-component class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-component>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconComponent],
      html: `<icon-component stroke-width="2"></icon-component>`,
    });

    const svg = createElement(Component);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-component class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-component>
    `);
  });
});
