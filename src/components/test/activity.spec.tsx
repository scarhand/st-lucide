import { newSpecPage } from '@stencil/core/testing';
import { IconActivity } from '../activity';
import { createElement, Activity }  from 'lucide';

describe('icon-activity', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconActivity],
      html: `<icon-activity></icon-activity>`,
    });

    const svg = createElement(Activity);

    expect(page.root).toEqualHtml(`
      <icon-activity class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-activity>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconActivity],
      html: `<icon-activity stroke="blue"></icon-activity>`,
    });

    const svg = createElement(Activity);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-activity class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-activity>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconActivity],
      html: `<icon-activity stroke-width="2"></icon-activity>`,
    });

    const svg = createElement(Activity);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-activity class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-activity>
    `);
  });
});
