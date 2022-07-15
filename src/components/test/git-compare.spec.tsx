import { newSpecPage } from '@stencil/core/testing';
import { IconGitCompare } from '../git-compare';
import { createElement, GitCompare }  from 'lucide';

describe('icon-git-compare', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGitCompare],
      html: `<icon-git-compare></icon-git-compare>`,
    });

    const svg = createElement(GitCompare);

    expect(page.root).toEqualHtml(`
      <icon-git-compare class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-git-compare>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitCompare],
      html: `<icon-git-compare stroke="blue"></icon-git-compare>`,
    });

    const svg = createElement(GitCompare);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-git-compare class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-git-compare>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitCompare],
      html: `<icon-git-compare stroke-width="2"></icon-git-compare>`,
    });

    const svg = createElement(GitCompare);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-git-compare class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-git-compare>
    `);
  });
});
