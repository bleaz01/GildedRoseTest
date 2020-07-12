import { Shop, Item } from '../helper/gilded_rose';
import { expect } from 'chai'
import { describe } from 'mocha';

describe("Gilded Rose", function () {

  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("fixme");
  });

});