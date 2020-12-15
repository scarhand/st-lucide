import { Component, Element, h, Host } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-rotate-cw'
})
export class X {
  @Element() el: any;

  render() {
    return <Host innerHTML={feather.icons['rotate-cw'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

