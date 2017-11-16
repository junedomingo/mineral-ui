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
import DemoLayout from '../../components/DemoLayout';
import TextInput from '../../../../../../TextInput';
import FormField from '../../../../../../Form/FormField';

export default {
  id: 'variants',
  title: 'Variants',
  description: ``,
  scope: { DemoLayout, FormField, TextInput },
  source: `
    <DemoLayout>
      <FormField
        label="Success"
        message="This is help text"
        variant="success">
        <TextInput />
      </FormField>

      <FormField
        label="Warning"
        message="This is help text"
        variant="warning">
        <TextInput />
      </FormField>

      <FormField
        label="Danger"
        message="This is help text"
        variant="danger">
        <TextInput />
      </FormField>
    </DemoLayout>
  `
};
