/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import { useJsonForm, JsonFile, Options } from './use-json-form'
import { usePlugins, Form } from 'tinacms'

/**
 * Registers a Local Form with TinaCMS for editing a Json File.
 *
 * @deprecated See https://github.com/tinacms/rfcs/blob/master/0006-form-hook-conventions.md
 */
export function useLocalJsonForm<T = any>(
  jsonFile: JsonFile<T>,
  options?: Options
): [T, Form] {
  const [values, form] = useJsonForm(jsonFile, options)

  usePlugins(form)

  return [values, form]
}
