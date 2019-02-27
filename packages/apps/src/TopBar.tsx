// Copyright 2017-2019 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// Unused atm, experiment as a replacement for NodeInfo on the SideBar

import React from 'react';
import styled from 'styled-components';

import { BestNumber, Chain, NodeName, NodeVersion } from '@polkadot/ui-reactive/index';

type Props = {};

const Wrapper = styled.div`
  background: #f2f2f2;
  font-size: 0.85rem;
  line-height: 1rem;
  overflow: hidden;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  top: 0;

  div {
    display: inline-block;
    vertical-align: middle;
  }

  > div {
    border-left: 1px solid #ccc;
    padding: 0 0.5rem;

    &:first-child {
      border-width: 0;
    }
  }
`;

export default class TopBar extends React.PureComponent<Props> {
  render () {
    return (
      <Wrapper>
        <div>
          <NodeName />&nbsp;
          <NodeVersion label='v' />
        </div>
        <div>
          <Chain />&nbsp;
          <BestNumber label='#' />
        </div>
      </Wrapper>
    );
  }
}