import { StackDirection } from '../shared';
import Stack, { StackProps } from '../Stack';

type VStackProps = Omit<StackProps, 'direction'>;

export default function VStack(props: VStackProps) {
  return <Stack {...props} direction={StackDirection.VERTICAL} />;
}
