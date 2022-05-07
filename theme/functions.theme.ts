import {
  PositionTypes,
  FontSizeTypes,
  WeightTypes,
  ComponentSizesTypes,
  DirectionTypes,
  JustifyContentTypes,
  AlignItemsTypes,
  AlignTextTypes,
  ISpaceTypes,
} from 'models/layout.model';
import { globalStyles } from 'theme/global.theme';

interface SpaceValues {
  margin?: string;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  padding?: string;
  paddingBottom?: string;
  paddingTop?: string;
  paddingLeft?: string;
  paddingRight?: string;
  [key: string]: any;
}

export const space = (props: ISpaceTypes): SpaceValues => ({
  margin:        props.margin || '',
  marginBottom:  props.mbottom || '',
  marginTop:     props.mtop || '',
  marginLeft:    props.mleft || '',
  marginRight:   props.mright || '',
  padding:       props.padding || '',
  paddingBottom: props.pbottom || '',
  paddingTop:    props.ptop || '',
  paddingLeft:   props.pleft || '',
  paddingRight:  props.pright || '',
});

export const weight = (props: { weight?: WeightTypes }): string => {
  if (props.weight) {
    return globalStyles.weight[props.weight];
  }
  return globalStyles.weight.default;
};

export const fontSize = (props: { fontSize?: FontSizeTypes }): string => {
  if (props.fontSize) {
    return globalStyles.fontSizes[props.fontSize];
  }
  return globalStyles.fontSizes.default;
};

export const align = (props: { position?: PositionTypes }): string => {
  if (props.position) {
    return globalStyles.position[props.position];
  }
  return globalStyles.position.default;
};

export const componentSize = (props: { componentSize?: ComponentSizesTypes }): string => {
  if (props.componentSize) {
    return globalStyles.componentSizes[props.componentSize];
  }
  return globalStyles.componentSizes.default;
};

export const direction = (props: { direction?: DirectionTypes }): string => {
  if (props.direction) {
    return globalStyles.direction[props.direction];
  }
  return globalStyles.direction.default;
};

export const jc = (props: { jc?: JustifyContentTypes }): string => {
  if (props.jc) {
    return globalStyles.jc[props.jc];
  }
  return globalStyles.jc.default;
};

export const ai = (props: { ai?: AlignItemsTypes }): string => {
  if (props.ai) {
    return globalStyles.ai[props.ai];
  }
  return globalStyles.ai.default;
};

export const textAlign = (props: { textAlign?: AlignTextTypes }): string => {
  if (props.textAlign) {
    return globalStyles.textAlign[props.textAlign];
  }
  return globalStyles.textAlign.default;
};

export const lh = (props: { fontSize?: FontSizeTypes }): string => {
  if (props.fontSize) {
    return globalStyles.ln[props.fontSize];
  }
  return globalStyles.ln.default;
};
