export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    checkQualityBounds(item) {
        if (item.quality <= 50 && item.quality >= 0) { return true }
    }

    updateItemQuality(item) {
        if (this.checkQualityBounds(item)) {
            if (item.sellIn > 0) {
                item.sellIn--;
                item.quality--;

            } else {
                item.sellIn--;
                item.quality -= 2;

            }
        }
    }

    updateBrieQuality(brie) {
        if (this.checkQualityBounds(brie)) {
            if (brie.sellIn > 0) {
                brie.sellIn--;
                brie.quality++;

            } else {
                brie.sellIn--;
                brie.quality += 2;
            }
        }

    }

    updateSulfurasQuality(sulf) {
        sulf.sellIn = sulf.sellIn;
        sulf.quality = 80;
    }

    updatePassQuality(pass) {
        if (this.checkQualityBounds(pass)) {
            if (pass.sellIn <= 0) {
                pass.quality = 0;
            } else if (pass.sellIn <= 5) {
                pass.quality += 3;
            } else if (pass.sellIn <= 10) {
                pass.quality += 2;
            } else {
                pass.quality++;
            }
            pass.sellIn--;
        }
    }

    updateConjuredItemQuality(item) {
        if (this.checkQualityBounds(item)) {
            if (item.sellIn > 0) {
                item.sellIn--;
                item.quality -= 2;

            } else {
                item.sellIn--;
                item.quality -= 4;

            }
        }
    }

    updateQuality() {
        for (const i of this.items) {
            if (i.name === 'Conjured Mana Cake') {
                this.updateConjuredItemQuality(i);
            } else if (i.name === 'Aged Brie') {
                this.updateBrieQuality(i);
            } else if (i.name === 'Sulfuras, Hand of Ragnaros') {
                this.updateSulfurasQuality(i);
            } else if (i.name === 'Backstage passes to a TAFKAL80ETC concert') {
                this.updatePassQuality(i);
            } else {
                this.updateItemQuality(i);
            }

        }

        return this.items;
    }
}
