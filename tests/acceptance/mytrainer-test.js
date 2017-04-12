import { test } from 'qunit';
import moduleForAcceptance from 'my-trainer/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | mytrainer');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
