/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import { simulate } from 'glamor';
import { createStyledComponent } from '@mineral-ui/component-utils';
import Link from '../../Link';

const DemoLayout = createStyledComponent('div', {
  '& > a': {
    marginRight: '0.5rem'
  }
});

export default {
  title: 'States',
  hideSource: true,
  scope: { Link, DemoLayout, simulate },
  source: `<DemoLayout>
  <Link href="http://example.com">Regular</Link>
  <Link {...simulate('hover')} href="http://example.com">Hover</Link>
  <Link {...simulate('focus')} href="http://example.com">Focus</Link>
  <Link {...simulate('focus')} {...simulate('hover')} href="http://example.com">Focus & Hover</Link>
  <Link {...simulate('focus')} {...simulate('active')} href="http://example.com">Focus & Active</Link>
  <Link {...simulate('active')} href="http://example.com">Active</Link>
  <br /><br />
  <Link variant="danger" href="http://example.com">Danger</Link>
  <Link variant="danger" {...simulate('hover')} href="http://example.com">Hover</Link>
  <Link variant="danger" {...simulate('focus')} href="http://example.com">Focus</Link>
  <Link variant="danger" {...simulate('focus')} {...simulate('hover')} href="http://example.com">Focus & Hover</Link>
  <Link variant="danger" {...simulate('focus')} {...simulate('active')} href="http://example.com">Focus & Active</Link>
  <Link variant="danger" {...simulate('active')} href="http://example.com">Active</Link>
  <br /><br />
  <Link variant="success" href="http://example.com">Success</Link>
  <Link variant="success" {...simulate('hover')} href="http://example.com">Hover</Link>
  <Link variant="success" {...simulate('focus')} href="http://example.com">Focus</Link>
  <Link variant="success" {...simulate('focus')} {...simulate('hover')} href="http://example.com">Focus & Hover</Link>
  <Link variant="success" {...simulate('focus')} {...simulate('active')} href="http://example.com">Focus & Active</Link>
  <Link variant="success" {...simulate('active')} href="http://example.com">Active</Link>
  <br /><br />
  <Link variant="warning" href="http://example.com">Warning</Link>
  <Link variant="warning" {...simulate('hover')} href="http://example.com">Hover</Link>
  <Link variant="warning" {...simulate('focus')} href="http://example.com">Focus</Link>
  <Link variant="warning" {...simulate('focus')} {...simulate('hover')} href="http://example.com">Focus & Hover</Link>
  <Link variant="warning" {...simulate('focus')} {...simulate('active')} href="http://example.com">Focus & Active</Link>
  <Link variant="warning" {...simulate('active')} href="http://example.com">Active</Link>
</DemoLayout>`
};