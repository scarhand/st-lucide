import { newSpecPage } from '@stencil/core/testing';
import { IconMilestone } from '../milestone';
import { createElement, Milestone }  from 'lucide';

describe('icon-milestone', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMilestone],
      html: `<icon-milestone></icon-milestone>`,
    });

    const svg = createElement(Milestone);

    expect(page.root).toEqualHtml(`
      <icon-milestone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-milestone>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMilestone],
      html: `<icon-milestone stroke="blue"></icon-milestone>`,
    });

    const svg = createElement(Milestone);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-milestone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-milestone>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMilestone],
      html: `<icon-milestone stroke-width="2"></icon-milestone>`,
    });

    const svg = createElement(Milestone);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-milestone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-milestone>
    `);
  });
});
