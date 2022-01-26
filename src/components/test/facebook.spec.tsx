import { newSpecPage } from '@stencil/core/testing';
import { IconFacebook } from '../facebook';
import { createElement, Facebook }  from 'lucide';

describe('icon-facebook', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFacebook],
      html: `<icon-facebook></icon-facebook>`,
    });

    const svg = createElement(Facebook);

    expect(page.root).toEqualHtml(`
      <icon-facebook class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-facebook>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFacebook],
      html: `<icon-facebook stroke="blue"></icon-facebook>`,
    });

    const svg = createElement(Facebook);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-facebook class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-facebook>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFacebook],
      html: `<icon-facebook stroke-width="2"></icon-facebook>`,
    });

    const svg = createElement(Facebook);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-facebook class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-facebook>
    `);
  });
});
