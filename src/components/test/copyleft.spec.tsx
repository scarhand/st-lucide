import { newSpecPage } from '@stencil/core/testing';
import { IconCopyleft } from '../copyleft';
import { createElement, Copyleft }  from 'lucide';

describe('icon-copyleft', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCopyleft],
      html: `<icon-copyleft></icon-copyleft>`,
    });

    const svg = createElement(Copyleft);

    expect(page.root).toEqualHtml(`
      <icon-copyleft class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-copyleft>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCopyleft],
      html: `<icon-copyleft stroke="blue"></icon-copyleft>`,
    });

    const svg = createElement(Copyleft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-copyleft class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-copyleft>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCopyleft],
      html: `<icon-copyleft stroke-width="2"></icon-copyleft>`,
    });

    const svg = createElement(Copyleft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-copyleft class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-copyleft>
    `);
  });
});
