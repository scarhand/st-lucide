import { Component, Element, h, Host } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-x-octagon'
})
export class X {
  @Element() el: any;

  render() {
    return <Host innerHTML={feather.icons['x-octagon'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

