import { Component, Element, h, Host } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-git-branch'
})
export class X {
  @Element() el: any;

  render() {
    return <Host innerHTML={feather.icons['git-branch'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

