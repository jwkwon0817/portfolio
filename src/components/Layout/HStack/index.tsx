import { StackDirection } from '../shared';
import Stack, { StackProps } from '../Stack';

type HStackProps = Omit<StackProps, 'direction'>;

export default function HStack(props: HStackProps) {
  return <Stack {...props} direction={StackDirection.HORIZONTAL} />;
}
