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
    // const { items } = this is for more visibility in my code 
    const { items } = this;

    //I have created functions inside the function "updateQuality" to better manage the product and to have an easier debugging

    const handlerCheese = () => {
      if (items[i].quality < 50)
        items[i].quality = items[i].quality + 1
    }

    const handlerBackstage = () => {
      if (items[i].sellIn < 0) items[i].quality = 0
      else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
          if (items[i].sellIn < 11 && items[i].quality < 50) items[i].quality = items[i].quality + 1;
          if (items[i].sellIn < 6 && items[i].quality < 50) items[i].quality = items[i].quality + 1;
        }
      }
    }

    const handlerLegendes = () => {
      items[i].quality = items[i].quality
      items[i].sellIn = 0
    };

    const handelConjured = () => {
      if (items[i].quality < 50 & items[i].quality > 0)
        items[i].quality = items[i].quality - 1;
    };

    const other = () => {
      if (items[i].quality < 0 && items[i].sellIn < 0) items[i].quality = 0
      if (items[i].quality > 0) {
        if (items[i].quality < 50 & items[i].quality > 0) items[i].quality = items[i].quality - 1;
        if (items[i].sellIn < 0) items[i].quality = items[i].quality - 1;
      }
    };

    for (var i = 0; i < items.length; i++) {
      let name = items[i].name
      items[i].sellIn = items[i].sellIn - 1;

      // I have used the match function to have a condition that can react to all the other products 
      // I have grab the product name and then give it the function assigned to it
      switch (true) {
        case name.match('Conjured'):
          handlerCheese()
          break
        case name.match('Backstage'):
          handlerBackstage();
          break
        case name.match('Sulfuras'):
          handlerLegendes();
          break
        case name.match('Conjured'):
          handleConjured();
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