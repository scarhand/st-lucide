import { Component, Element, h, Host } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-toggle-left'
})
export class X {
  @Element() el: any;

  render() {
    return <Host innerHTML={feather.icons['toggle-left'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

