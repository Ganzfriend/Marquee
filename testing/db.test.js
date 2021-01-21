import { ExpansionPanelActions } from '@material-ui/core';
import { TestScheduler } from 'jest';
import { allListings, listingWithId } from '../database/queries.js';

// I might be getting away with this, but according to https://mongoosejs.com/docs/jest.html
// it is a dangerous path to travel...

test('allListings retrieves all listings', () => {
  return allListings().then( (data) => {
    expect(data.length).toBeGreaterThan(1);
  });
});

