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

    it('increments quality of brie by one before sell by date', function () {
        const agedBrie: Item = new Item('Aged Brie', 5, 2);
        const expectedItem =  [new Item('Aged Brie', 4, 3)];

        const gildedRose = new GildedRose([agedBrie]);

        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItem);

    });

    it('increments quality of brie by two after sell by date', function () {
        const agedBrie: Item = new Item('Aged Brie', 0, 5);
        const expectedItem =  [new Item('Aged Brie', -1, 7)];

        const gildedRose = new GildedRose([agedBrie]);

        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItem);

    });

    it('sulfuras quality and date remain unchanged', function () {
        const sulfuras: Item = new Item('Sulfuras, Hand of Ragnaros', 5, 80);
        const expectedItem =  [new Item('Sulfuras, Hand of Ragnaros', 5, 80)];

        const gildedRose = new GildedRose([sulfuras]);

        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItem);

    });

    it('pass quality increases by 1 more than 10 days before concert', function () {
        const pass: Item = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20);
        const expectedItem =  [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 21)];

        const gildedRose = new GildedRose([pass]);

        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItem);

    });

    it('pass quality increases by 2 when 10 days or less before concert', function () {
        const pass: Item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
        const expectedItem =  [new Item('Backstage passes to a TAFKAL80ETC concert', 9, 22)];

        const gildedRose = new GildedRose([pass]);

        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItem);

    });

    it('pass quality increases by 3 when more than 5 days or less before concert', function () {
        const pass: Item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
        const expectedItem =  [new Item('Backstage passes to a TAFKAL80ETC concert', 4, 23)];

        const gildedRose = new GildedRose([pass]);

        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItem);

    });

    it('pass quality decreases to 0 after concert', function () {
        const pass: Item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
        const expectedItem =  [new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)];

        const gildedRose = new GildedRose([pass]);

        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItem);

    });

    it('conjured mana cake quality decreases twice as fast as a normal item', function () {
        const item: Item = new Item('Conjured Mana Cake', 0, 20);
        const expectedItem =  [new Item('Conjured Mana Cake', -1, 16)];

        const gildedRose = new GildedRose([item]);

        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItem);

    });
    



});

