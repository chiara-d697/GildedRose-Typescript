import { Item, GildedRose } from '../app/gilded-rose';

const items: Array<Item> = [
    new Item('item1', 10, 24),
    new Item('item2', 5, 32),
    new Item('item3', 0, 50),
    new Item('Aged Brie', 1, 1),
    new Item('Aged Brie', 5, 30),
    new Item('Aged Brie', 4, 44),
    new Item('Sulfuras, Hand of Ragnaros', 5, 80),
    new Item('Sulfuras, Hand of Ragnaros', 14, 80),
    new Item('Sulfuras, Hand of Ragnaros', 40, 80),
    new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10),
    new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20),
    new Item('Backstage passes to a TAFKAL80ETC concert', 1, 20)
]

const gildedRose = new GildedRose(items);
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();

console.log(gildedRose.items);



// Add a master test here