import { getLayerApplier } from '@/lib/utils/styles/layer';
import { globalLayer } from '@vanilla-extract/css';

export const resetLayer = globalLayer('reset');

export const { style: resetStyle, globalStyle: resetGlobalStyle } =
  getLayerApplier(resetLayer);
