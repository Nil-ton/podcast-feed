import { WrapperIcon } from './style';
import { IIconProps } from './types';

export const Icon = (props:IIconProps) => {
  return (
    <WrapperIcon
      {...props}
    />
  );
};