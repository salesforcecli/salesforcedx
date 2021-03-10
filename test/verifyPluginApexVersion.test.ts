/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import * as fs from 'fs';
import { expect } from 'chai';

describe('will verify that plugin-apex version is never changed until we want to', () => {
  it('will ensure plugin-apex is hardcoded to v1.0.4', () => {
    const json = JSON.parse(fs.readFileSync('package.json').toString());
    expect(json['dependencies']['@salesforce/plugin-apex']).to.equal('0.1.4');
  });
});
