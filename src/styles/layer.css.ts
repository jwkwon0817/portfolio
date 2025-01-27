import { globalLayer } from '@vanilla-extract/css';
import { getLayerApplier } from '~/lib/utils/styles/layer';

export const resetLayer = globalLayer('reset');

export const { style: resetStyle, globalStyle: resetGlobalStyle } =
  getLayerApplier(resetLayer);
