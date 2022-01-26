import { newSpecPage } from '@stencil/core/testing';
import { IconSlack } from '../slack';
import { createElement, Slack }  from 'lucide';

describe('icon-slack', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSlack],
      html: `<icon-slack></icon-slack>`,
    });

    const svg = createElement(Slack);

    expect(page.root).toEqualHtml(`
      <icon-slack class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-slack>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSlack],
      html: `<icon-slack stroke="blue"></icon-slack>`,
    });

    const svg = createElement(Slack);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-slack class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-slack>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSlack],
      html: `<icon-slack stroke-width="2"></icon-slack>`,
    });

    const svg = createElement(Slack);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-slack class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-slack>
    `);
  });
});
