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
    const { items } = this;

    const handlerCheese = () => {
      if (items[i].quality < 50)
        items[i].quality = items[i].quality + 1
    }

    const handlerBackstage = () => {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].sellIn < 11 && items[i].quality < 50) items[i].quality = items[i].quality + 1;
        if (items[i].sellIn < 6 && items[i].quality < 50) items[i].quality = items[i].quality + 1;
      }
    }

    const handlerLegendes = () => {
      items[i].quality = items[i].quality
      items[i].sellIn = 0
    };

    const other = () => {
      if (items[i].quality > 0) {
        if (items[i].quality < 50 & items[i].quality > 0) items[i].quality = items[i].quality - 1;
        if (items[i].sellIn < 0) items[i].quality = items[i].quality - 1;
      }

    };

    const Conjured = () => {


    };
    for (var i = 0; i < items.length; i++) {
      let name = items[i].name

      items[i].sellIn = items[i].sellIn - 1;

      if (name.match('Conjured')) {
        if (items[i].quality < 50 & items[i].quality > 0)
          items[i].quality = items[i].quality - 1;
      }

      switch (name) {
        case 'Aged Brie':
          handlerCheese()
          break
        case 'Backstage passes to a TAFKAL80ETC concert':
          handlerBackstage();
          break
        case 'Sulfuras, Hand of Ragnaros':
          handlerLegendes();
          break
        default:
          other();
      }
    }

    return items;
  }

}

module.exports = {
  Item,
  Shop
}