// Copyright 2017-2019 @polkadot/react-components authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { BareProps } from './types';

import React from 'react';
import { Nonce } from '@polkadot/react-query';

import { classes } from './util';

export interface Props extends BareProps {
  label?: React.ReactNode;
  params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
}

export default function NonceDisplay ({ className, label, params, style }: Props): React.ReactElement<Props> | null {
  if (!params) {
    return null;
  }

  return (
    <Nonce
      className={classes('ui--Nonce', className)}
      label={label}
      params={params.toString()}
      style={style}
    />
  );
}
