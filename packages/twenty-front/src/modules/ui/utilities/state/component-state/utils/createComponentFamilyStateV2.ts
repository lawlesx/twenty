import { ComponentFamilyStateKeyV2 } from '@/ui/utilities/state/component-state/types/ComponentFamilyStateKeyV2';
import { ComponentInstanceStateContext } from '@/ui/utilities/state/component-state/types/ComponentInstanceStateContext';
import { globalComponentInstanceContextMap } from '@/ui/utilities/state/component-state/utils/globalComponentInstanceContextMap';
import { AtomEffect, atomFamily, SerializableParam } from 'recoil';

import { isDefined } from 'twenty-ui';

type CreateComponentFamilyStateArgs<ValueType> = {
  key: string;
  defaultValue: ValueType;
  componentInstanceContext: ComponentInstanceStateContext<any> | null;
  effects?: AtomEffect<ValueType>[];
};

export const createComponentFamilyStateV2 = <
  ValueType,
  FamilyKey extends SerializableParam,
>({
  key,
  effects,
  defaultValue,
  componentInstanceContext,
}: CreateComponentFamilyStateArgs<ValueType>) => {
  if (isDefined(componentInstanceContext)) {
    globalComponentInstanceContextMap.set(key, componentInstanceContext);
  }

  return {
    key,
    atomFamily: atomFamily<ValueType, ComponentFamilyStateKeyV2<FamilyKey>>({
      key,
      default: defaultValue,
      effects,
    }),
  };
};
