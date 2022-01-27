import { expect } from 'chai';
import 'chai/register-should';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should match all expected outputs when refactored', function () {

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

        const expectedOutput: Array<Item> = [
            new Item('item1', 7, 21),
            new Item('item2', 2, 29),
            new Item('item3', -3, 44),
            new Item('Aged Brie', -2, 6),
            new Item('Aged Brie', 2, 33),
            new Item('Aged Brie', 1, 47),
            new Item('Sulfuras, Hand of Ragnaros', 5, 80),
            new Item('Sulfuras, Hand of Ragnaros', 14, 80),
            new Item('Sulfuras, Hand of Ragnaros', 40, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 16),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 29),
            new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0)
        ]

        const gildedRose = new GildedRose(items);
        
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedOutput);

    });

    it('decrements both properties of a normal item by one before the sell by date is reached', function () {
        const item1: Item = new Item('item1', 7, 24);
        const expectedItem =  [new Item('item1', 6, 23)];

        const gildedRose = new GildedRose([item1]);

        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItem);

    });

    it('decrements both properties of a normal item by two after the sell by date is reached', function () {
        const item1: Item = new Item('item1', 0, 16);
        const expectedItem =  [new Item('item1', -1, 14)];

        const gildedRose = new GildedRose([item1]);

        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItem);

    });


});

