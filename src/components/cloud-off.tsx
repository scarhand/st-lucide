import { Component, Element, h, Host } from '@stencil/core';
import feather from 'feather-icons';
import { attributesToObject } from '../utils/utils';

@Component({
  tag: 'icon-cloud-off'
})
export class X {
  @Element() el: any;

  render() {
    return <Host innerHTML={feather.icons['cloud-off'].toSvg(attributesToObject(this.el))}></Host>;
  }
}

