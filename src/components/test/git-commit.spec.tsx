import { newSpecPage } from '@stencil/core/testing';
import { IconGitCommit } from '../git-commit';
import { createElement, GitCommit }  from 'lucide';

describe('icon-git-commit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGitCommit],
      html: `<icon-git-commit></icon-git-commit>`,
    });

    const svg = createElement(GitCommit);

    expect(page.root).toEqualHtml(`
      <icon-git-commit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-git-commit>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitCommit],
      html: `<icon-git-commit stroke="blue"></icon-git-commit>`,
    });

    const svg = createElement(GitCommit);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-git-commit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-git-commit>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitCommit],
      html: `<icon-git-commit stroke-width="2"></icon-git-commit>`,
    });

    const svg = createElement(GitCommit);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-git-commit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-git-commit>
    `);
  });
});
