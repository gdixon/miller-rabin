import assert from 'assert';

import mr from '../';
import bn from 'bn.js';

const miller = mr.create();

describe('Miller-Rabin', function() {
  it('should test number for primality', function() {
    assert(!miller.test(new bn(221)));
    assert(miller.test(new bn(257)));

    var p = new bn('dba8191813fe8f51eaae1de70213aafede8f323f95f32cff' +
                   '8b64ebada275cfb18a446a0150e5fdaee246244c5f002ce0' +
                   'aca97584be1745f2dd1eea2849c52aac8c4b5fb78a1c4da7' +
                   '052774338d3310a6e020c46168cb1f94014e9312511cc4fb' +
                   '79d695bb732449f0e015745b86bfa371dc6ca7386e9c7309' +
                   '5549c2e4b8002873', 16);
    assert(miller.test(p));
  });
});
