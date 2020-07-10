class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    const { items } = this

    for (var i = 0; i < items.length; i++) {

      let name = items[i].name;
      let quality = items[i].quality;
      let sellIn = items[i].sellIn;

      // Check quality 
      if (name != 'Aged Brie' && name != 'Backstage passes to a TAFKAL80ETC concert' && name != 'Sulfuras, Hand of Ragnaros') {
        if (quality > 0) quality = quality - 1;
      } else {
        if (quality < 50) {
          quality = quality + 1;
          if (name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (sellIn < 11 && quality < 50) quality = quality + 2;
            if (sellIn < 6 && quality < 50) quality = quality + 3;
          }
          if (name == 'Sulfuras, Hand of Ragnaros') quality = 80
        }
      }

      // Check sellIn
      if (name != 'Sulfuras, Hand of Ragnaros') {
        sellIn = sellIn - 1;
      }
      if (sellIn < 0) {
        if (name != 'Aged Brie') || (name != 'Backstage passes to a TAFKAL80ETC concert') || (name != 'Sulfuras, Hand of Ragnaros') {
          if (quality > 0) quality = quality - 4;
        } else {
          if (name == 'Backstage passes to a TAFKAL80ETC concert') quality = 0
        }
      } else {
        if (quality < 50) {
          quality = quality + 1;
        }
      }
    }
  }

    return items;
  }
}
module.exports = {
  Item,
  Shop
}