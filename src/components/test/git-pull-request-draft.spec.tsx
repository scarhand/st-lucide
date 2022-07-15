import { newSpecPage } from '@stencil/core/testing';
import { IconGitPullRequestDraft } from '../git-pull-request-draft';
import { createElement, GitPullRequestDraft }  from 'lucide';

describe('icon-git-pull-request-draft', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGitPullRequestDraft],
      html: `<icon-git-pull-request-draft></icon-git-pull-request-draft>`,
    });

    const svg = createElement(GitPullRequestDraft);

    expect(page.root).toEqualHtml(`
      <icon-git-pull-request-draft class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-git-pull-request-draft>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitPullRequestDraft],
      html: `<icon-git-pull-request-draft stroke="blue"></icon-git-pull-request-draft>`,
    });

    const svg = createElement(GitPullRequestDraft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-git-pull-request-draft class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-git-pull-request-draft>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitPullRequestDraft],
      html: `<icon-git-pull-request-draft stroke-width="2"></icon-git-pull-request-draft>`,
    });

    const svg = createElement(GitPullRequestDraft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-git-pull-request-draft class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-git-pull-request-draft>
    `);
  });
});
