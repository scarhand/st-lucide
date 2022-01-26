import { newSpecPage } from '@stencil/core/testing';
import { IconHelpCircle } from '../help-circle';
import { createElement, HelpCircle }  from 'lucide';

describe('icon-help-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHelpCircle],
      html: `<icon-help-circle></icon-help-circle>`,
    });

    const svg = createElement(HelpCircle);

    expect(page.root).toEqualHtml(`
      <icon-help-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-help-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHelpCircle],
      html: `<icon-help-circle stroke="blue"></icon-help-circle>`,
    });

    const svg = createElement(HelpCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-help-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-help-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHelpCircle],
      html: `<icon-help-circle stroke-width="2"></icon-help-circle>`,
    });

    const svg = createElement(HelpCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-help-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-help-circle>
    `);
  });
});
