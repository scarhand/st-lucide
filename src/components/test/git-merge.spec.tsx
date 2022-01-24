import { newSpecPage } from '@stencil/core/testing';
import { IconGitMerge } from '../git-merge';
import { createElement, GitMerge }  from 'lucide';

describe('icon-git-merge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGitMerge],
      html: `<icon-git-merge></icon-git-merge>`,
    });

    const svg = createElement(GitMerge);

    expect(page.root).toEqualHtml(`
      <icon-git-merge class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-git-merge>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitMerge],
      html: `<icon-git-merge stroke="blue"></icon-git-merge>`,
    });

    const svg = createElement(GitMerge);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-git-merge class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-git-merge>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitMerge],
      html: `<icon-git-merge stroke-width="2"></icon-git-merge>`,
    });

    const svg = createElement(GitMerge);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-git-merge class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-git-merge>
    `);
  });
});
