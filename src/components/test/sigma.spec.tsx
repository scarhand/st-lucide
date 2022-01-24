import { newSpecPage } from '@stencil/core/testing';
import { IconSigma } from '../sigma';
import { createElement, Sigma }  from 'lucide';

describe('icon-sigma', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSigma],
      html: `<icon-sigma></icon-sigma>`,
    });

    const svg = createElement(Sigma);

    expect(page.root).toEqualHtml(`
      <icon-sigma class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sigma>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSigma],
      html: `<icon-sigma stroke="blue"></icon-sigma>`,
    });

    const svg = createElement(Sigma);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sigma class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sigma>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSigma],
      html: `<icon-sigma stroke-width="2"></icon-sigma>`,
    });

    const svg = createElement(Sigma);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sigma class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sigma>
    `);
  });
});
